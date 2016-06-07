"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_genjs() {
  setModuleName("genjs");
  this.definitionModule = "genjs";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_genjs_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_genjs_outer0;
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
    setModuleName("genjs");
    // io is a simple accessor - elide try ... catch
    return var_io;
  };
  func1.paramCounts = [0];
  this.methods["io"] = func1;
  func1.definitionLine = 2;
  func1.definitionModule = "genjs";
  func1.debug = "import";
  func1.confidential = true;
  setModuleName("genjs");
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
    setModuleName("genjs");
    // sys is a simple accessor - elide try ... catch
    return var_sys;
  };
  func2.paramCounts = [0];
  this.methods["sys"] = func2;
  func2.definitionLine = 3;
  func2.definitionModule = "genjs";
  func2.debug = "import";
  func2.confidential = true;
  setModuleName("genjs");
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
    setModuleName("genjs");
    // ast is a simple accessor - elide try ... catch
    return var_ast;
  };
  func3.paramCounts = [0];
  this.methods["ast"] = func3;
  func3.definitionLine = 4;
  func3.definitionModule = "genjs";
  func3.debug = "import";
  func3.confidential = true;
  setModuleName("genjs");
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
    setModuleName("genjs");
    // util is a simple accessor - elide try ... catch
    return var_util;
  };
  func4.paramCounts = [0];
  this.methods["util"] = func4;
  func4.definitionLine = 5;
  func4.definitionModule = "genjs";
  func4.debug = "import";
  func4.confidential = true;
  setModuleName("genjs");
  setLineNumber(6);    // compilenode import
  // Import of unixFilePath as unixFilePath
  if (typeof gracecode_unixFilePath == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module unixFilePath'));
  var var_unixFilePath = do_import("unixFilePath", gracecode_unixFilePath);
  var func5 = function(argcv) {    // method unixFilePath
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for unixFilePath"));
    setModuleName("genjs");
    // unixFilePath is a simple accessor - elide try ... catch
    return var_unixFilePath;
  };
  func5.paramCounts = [0];
  this.methods["unixFilePath"] = func5;
  func5.definitionLine = 6;
  func5.definitionModule = "genjs";
  func5.debug = "import";
  func5.confidential = true;
  setModuleName("genjs");
  setLineNumber(7);    // compilenode import
  // Import of xmodule as xmodule
  if (typeof gracecode_xmodule == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module xmodule'));
  var var_xmodule = do_import("xmodule", gracecode_xmodule);
  var func6 = function(argcv) {    // method xmodule
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for xmodule"));
    setModuleName("genjs");
    // xmodule is a simple accessor - elide try ... catch
    return var_xmodule;
  };
  func6.paramCounts = [0];
  this.methods["xmodule"] = func6;
  func6.definitionLine = 7;
  func6.definitionModule = "genjs";
  func6.debug = "import";
  func6.confidential = true;
  setModuleName("genjs");
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
    setModuleName("genjs");
    // mirrors is a simple accessor - elide try ... catch
    return var_mirrors;
  };
  func7.paramCounts = [0];
  this.methods["mirrors"] = func7;
  func7.definitionLine = 8;
  func7.definitionModule = "genjs";
  func7.debug = "import";
  func7.confidential = true;
  setModuleName("genjs");
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
    setModuleName("genjs");
    // errormessages is a simple accessor - elide try ... catch
    return var_errormessages;
  };
  func8.paramCounts = [0];
  this.methods["errormessages"] = func8;
  func8.definitionLine = 9;
  func8.definitionModule = "genjs";
  func8.debug = "import";
  func8.confidential = true;
  setModuleName("genjs");
  setLineNumber(42);    // compilenode method
  var func9 = function(argcv) {    // method increaseindent
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for increaseindent"));
    setModuleName("genjs");
    setLineNumber(43);    // compilenode string
    var string10 = new GraceString("  ");
    var opresult13 = callmethodChecked(var_indent, "++", [1], string10);
    var_indent = opresult13;
    return GraceDone;
  };
  func9.paramCounts = [0];
  this.methods["increaseindent"] = func9;
  func9.definitionLine = 42;
  func9.definitionModule = "genjs";
  setLineNumber(46);    // compilenode method
  var func14 = function(argcv) {    // method decreaseindent
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for decreaseindent"));
    setModuleName("genjs");
    var if15 = GraceDone;
    setLineNumber(47);    // compilenode identifier
    var call17 = callmethodChecked(var_indent, "size", [0]);
    var opresult19 = callmethodChecked(call17, "\u2264", [1], new GraceNum(2));
    if (Grace_isTrue(opresult19)) {
      setLineNumber(48);    // compilenode string
      var string20 = new GraceString("");
      var_indent = string20;
      if15 = GraceDone;
    } else {
      setLineNumber(50);    // compilenode identifier
      var call22 = callmethodChecked(var_indent, "size", [0]);
      var diff24 = callmethodChecked(call22, "-", [1], new GraceNum(2));
      var call25 = callmethodChecked(var_indent, "substringFrom()to", [1, 1], new GraceNum(1), diff24);
      var_indent = call25;
      if15 = GraceDone;
    }
    return if15;
  };
  func14.paramCounts = [0];
  this.methods["decreaseindent"] = func14;
  func14.definitionLine = 46;
  func14.definitionModule = "genjs";
  setLineNumber(54);    // compilenode method
  var func26 = function(argcv) {    // method formatModname(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_name = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for formatModname(1)"));
    setModuleName("genjs");
    setLineNumber(55);    // compilenode identifier
    onSelf = true;
    var call27 = callmethodChecked(this, "basename", [1], var_name);
    onSelf = true;
    var call28 = callmethodChecked(this, "escapeident", [1], call27);
    var string30 = new GraceString("gracecode_");
    var opresult32 = callmethodChecked(string30, "++", [1], call28);
    return opresult32;
  };
  func26.paramCounts = [1];
  this.methods["formatModname"] = func26;
  func26.definitionLine = 54;
  func26.definitionModule = "genjs";
  setLineNumber(58);    // compilenode method
  var func33 = function(argcv) {    // method basename(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_filepath = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for basename(1)"));
    setModuleName("genjs");
    setLineNumber(59);    // compilenode string
    var string34 = new GraceString("");
    var var_bnm = string34;
    setLineNumber(60);    // compilenode block
    var block35 = new GraceBlock(this, 60, 1);
    setLineNumber(1);    // compilenode identifier
    block35.real = function(var_c) {
      var if36 = GraceDone;
      setLineNumber(61);    // compilenode string
      var string37 = new GraceString("/");
      var opresult40 = callmethodChecked(var_c, "==", [1], string37);
      if (Grace_isTrue(opresult40)) {
        setLineNumber(62);    // compilenode string
        var string41 = new GraceString("");
        var_bnm = string41;
        if36 = GraceDone;
      } else {
        setLineNumber(64);    // compilenode identifier
        var opresult44 = callmethodChecked(var_bnm, "++", [1], var_c);
        var_bnm = opresult44;
        if36 = GraceDone;
      }
      return if36;
    };
    var call45 = callmethodChecked(var_prelude, "for()do", [1, 1], var_filepath, block35);
    setLineNumber(67);    // compilenode identifier
    return var_bnm;
  };
  func33.paramCounts = [1];
  this.methods["basename"] = func33;
  func33.definitionLine = 58;
  func33.definitionModule = "genjs";
  setLineNumber(70);    // compilenode method
  var func46 = function(argcv) {    // method noteLineNumber(1)comment(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_n = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for noteLineNumber (arg list 1) of noteLineNumber(1)comment(1)"));
    var var_c = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for comment (arg list 2) of noteLineNumber(1)comment(1)"));
    setModuleName("genjs");
    setLineNumber(72);    // compilenode identifier
    var_priorLineSeen = var_n;
    setLineNumber(73);    // compilenode identifier
    var_priorLineComment = var_c;
    return GraceDone;
  };
  func46.paramCounts = [1, 1];
  this.methods["noteLineNumber()comment"] = func46;
  func46.definitionLine = 70;
  func46.definitionModule = "genjs";
  setLineNumber(76);    // compilenode method
  var func47 = function(argcv) {    // method forceLineNumber(1)comment(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_n = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for forceLineNumber (arg list 1) of forceLineNumber(1)comment(1)"));
    var var_c = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for comment (arg list 2) of forceLineNumber(1)comment(1)"));
    setModuleName("genjs");
    setLineNumber(79);    // compilenode identifier
    onSelf = true;
    var call48 = callmethodChecked(this, "noteLineNumber()comment", [1, 1], var_n, var_c);
    var if49 = GraceDone;
    setLineNumber(80);    // compilenode identifier
    if (Grace_isTrue(var_emitPositions)) {
      setLineNumber(81);    // compilenode string
      var string50 = new GraceString("");
      var string53 = new GraceString(");    // ");
      var string56 = new GraceString("setLineNumber(");
      var string59 = new GraceString("");
      var opresult61 = callmethodChecked(string59, "++", [1], var_indent);
      var opresult63 = callmethodChecked(opresult61, "++", [1], string56);
      var opresult65 = callmethodChecked(opresult63, "++", [1], var_priorLineSeen);
      var opresult67 = callmethodChecked(opresult65, "++", [1], string53);
      var opresult69 = callmethodChecked(opresult67, "++", [1], var_priorLineComment);
      var opresult71 = callmethodChecked(opresult69, "++", [1], string50);
      var call72 = callmethodChecked(var_output, "push", [1], opresult71);
      if49 = call72;
    }
    setLineNumber(83);    // compilenode identifier
    var_priorLineEmitted = var_priorLineSeen;
    return GraceDone;
  };
  func47.paramCounts = [1, 1];
  this.methods["forceLineNumber()comment"] = func47;
  func47.definitionLine = 76;
  func47.definitionModule = "genjs";
  setLineNumber(86);    // compilenode method
  var func73 = function(argcv) {    // method out(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_s = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for out(1)"));
    setModuleName("genjs");
    var if74 = GraceDone;
    setLineNumber(88);    // compilenode identifier
    var opresult77 = callmethodChecked(var_priorLineSeen, "\u2260", [1], var_priorLineEmitted);
    var opresult80 = callmethodChecked(var_emitPositions, "&&", [1], opresult77);
    if (Grace_isTrue(opresult80)) {
      setLineNumber(89);    // compilenode string
      var string81 = new GraceString("");
      var string84 = new GraceString(");    // ");
      var string87 = new GraceString("setLineNumber(");
      var string90 = new GraceString("");
      var opresult92 = callmethodChecked(string90, "++", [1], var_indent);
      var opresult94 = callmethodChecked(opresult92, "++", [1], string87);
      var opresult96 = callmethodChecked(opresult94, "++", [1], var_priorLineSeen);
      var opresult98 = callmethodChecked(opresult96, "++", [1], string84);
      var opresult100 = callmethodChecked(opresult98, "++", [1], var_priorLineComment);
      var opresult102 = callmethodChecked(opresult100, "++", [1], string81);
      var call103 = callmethodChecked(var_output, "push", [1], opresult102);
      setLineNumber(90);    // compilenode identifier
      var_priorLineEmitted = var_priorLineSeen;
      if74 = GraceDone;
    }
    setLineNumber(92);    // compilenode identifier
    var opresult106 = callmethodChecked(var_indent, "++", [1], var_s);
    var call107 = callmethodChecked(var_output, "push", [1], opresult106);
    setLineNumber(93);    // compilenode identifier
    return var_done;
  };
  func73.paramCounts = [1];
  this.methods["out"] = func73;
  func73.definitionLine = 86;
  func73.definitionModule = "genjs";
  setLineNumber(96);    // compilenode method
  var func108 = function(argcv) {    // method outUnnumbered(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_s = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for outUnnumbered(1)"));
    setModuleName("genjs");
    setLineNumber(98);    // compilenode identifier
    var opresult111 = callmethodChecked(var_indent, "++", [1], var_s);
    var call112 = callmethodChecked(var_output, "push", [1], opresult111);
    return call112;
  };
  func108.paramCounts = [1];
  this.methods["outUnnumbered"] = func108;
  func108.definitionLine = 96;
  func108.definitionModule = "genjs";
  setLineNumber(101);    // compilenode method
  var func113 = function(argcv) {    // method escapeident(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_vn = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for escapeident(1)"));
    setModuleName("genjs");
    setLineNumber(102);    // compilenode string
    var string114 = new GraceString("");
    var var_nm = string114;
    setLineNumber(103);    // compilenode block
    var block115 = new GraceBlock(this, 103, 1);
    setLineNumber(1);    // compilenode identifier
    block115.real = function(var_c) {
      setLineNumber(104);    // compilenode identifier
      var call116 = callmethodChecked(var_c, "ord", [0]);
      var var_o = call116;
      var if117 = GraceDone;
      setLineNumber(106);    // compilenode identifier
      var opresult120 = callmethodChecked(var_o, "\u2264", [1], new GraceNum(57));
      var opresult124 = callmethodChecked(var_o, "\u2265", [1], new GraceNum(48));
      var opresult126 = callmethodChecked(opresult124, "&&", [1], opresult120);
      setLineNumber(105);    // compilenode identifier
      var opresult130 = callmethodChecked(var_o, "\u2264", [1], new GraceNum(90));
      var opresult134 = callmethodChecked(var_o, "\u2265", [1], new GraceNum(65));
      var opresult136 = callmethodChecked(opresult134, "&&", [1], opresult130);
      var opresult140 = callmethodChecked(var_o, "\u2264", [1], new GraceNum(122));
      var opresult144 = callmethodChecked(var_o, "\u2265", [1], new GraceNum(97));
      var opresult146 = callmethodChecked(opresult144, "&&", [1], opresult140);
      var opresult148 = callmethodChecked(opresult146, "||", [1], opresult136);
      var opresult150 = callmethodChecked(opresult148, "||", [1], opresult126);
      if (Grace_isTrue(opresult150)) {
        setLineNumber(107);    // compilenode identifier
        var opresult153 = callmethodChecked(var_nm, "++", [1], var_c);
        var_nm = opresult153;
        if117 = GraceDone;
      } else {
        setLineNumber(109);    // compilenode string
        var string154 = new GraceString("__");
        var string157 = new GraceString("__");
        var opresult160 = callmethodChecked(var_nm, "++", [1], string157);
        var opresult162 = callmethodChecked(opresult160, "++", [1], var_o);
        var opresult164 = callmethodChecked(opresult162, "++", [1], string154);
        var_nm = opresult164;
        if117 = GraceDone;
      }
      return if117;
    };
    var call165 = callmethodChecked(var_prelude, "for()do", [1, 1], var_vn, block115);
    setLineNumber(112);    // compilenode identifier
    return var_nm;
  };
  func113.paramCounts = [1];
  this.methods["escapeident"] = func113;
  func113.definitionLine = 101;
  func113.definitionModule = "genjs";
  setLineNumber(114);    // compilenode method
  var func166 = function(argcv) {    // method escapestring(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_s = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for escapestring(1)"));
    setModuleName("genjs");
    setLineNumber(115);    // compilenode string
    var string167 = new GraceString("");
    var var_os = string167;
    setLineNumber(116);    // compilenode block
    var block168 = new GraceBlock(this, 116, 1);
    setLineNumber(1);    // compilenode identifier
    block168.real = function(var_c) {
      var if169 = GraceDone;
      setLineNumber(117);    // compilenode string
      var string170 = new GraceString("\"");
      var opresult173 = callmethodChecked(var_c, "==", [1], string170);
      if (Grace_isTrue(opresult173)) {
        setLineNumber(118);    // compilenode string
        var string174 = new GraceString("\\\"");
        var opresult177 = callmethodChecked(var_os, "++", [1], string174);
        var_os = opresult177;
        if169 = GraceDone;
      } else {
        var if178 = GraceDone;
        setLineNumber(119);    // compilenode string
        var string179 = new GraceString("\\");
        var opresult182 = callmethodChecked(var_c, "==", [1], string179);
        if (Grace_isTrue(opresult182)) {
          setLineNumber(120);    // compilenode string
          var string183 = new GraceString("\\\\");
          var opresult186 = callmethodChecked(var_os, "++", [1], string183);
          var_os = opresult186;
          if178 = GraceDone;
        } else {
          var if187 = GraceDone;
          setLineNumber(121);    // compilenode string
          var string188 = new GraceString("\n");
          var opresult191 = callmethodChecked(var_c, "==", [1], string188);
          if (Grace_isTrue(opresult191)) {
            setLineNumber(122);    // compilenode string
            var string192 = new GraceString("\\n");
            var opresult195 = callmethodChecked(var_os, "++", [1], string192);
            var_os = opresult195;
            if187 = GraceDone;
          } else {
            var if196 = GraceDone;
            setLineNumber(123);    // compilenode identifier
            var call198 = callmethodChecked(var_c, "ord", [0]);
            var opresult200 = callmethodChecked(call198, ">", [1], new GraceNum(126));
            var call203 = callmethodChecked(var_c, "ord", [0]);
            var opresult205 = callmethodChecked(call203, "<", [1], new GraceNum(32));
            var opresult207 = callmethodChecked(opresult205, "||", [1], opresult200);
            if (Grace_isTrue(opresult207)) {
              setLineNumber(124);    // compilenode identifier
              var call208 = callmethodChecked(var_c, "ord", [0]);
              var call209 = callmethodChecked(var_util, "hex", [1], call208);
              var var_uh = call209;
              setLineNumber(125);    // compilenode block
              var block210 = new GraceBlock(this, 125, 0);
              block210.real = function() {
                var call212 = callmethodChecked(var_uh, "size", [0]);
                var opresult214 = callmethodChecked(call212, "<", [1], new GraceNum(4));
                return opresult214;
              };
              var block215 = new GraceBlock(this, 125, 0);
              block215.real = function() {
                setLineNumber(126);    // compilenode string
                var string217 = new GraceString("0");
                var opresult219 = callmethodChecked(string217, "++", [1], var_uh);
                var_uh = opresult219;
                return GraceDone;
              };
              var call220 = callmethodChecked(var_prelude, "while()do", [1, 1], block210, block215);
              setLineNumber(128);    // compilenode string
              var string222 = new GraceString("\\u");
              var opresult225 = callmethodChecked(var_os, "++", [1], string222);
              var opresult227 = callmethodChecked(opresult225, "++", [1], var_uh);
              var_os = opresult227;
              if196 = GraceDone;
            } else {
              setLineNumber(130);    // compilenode identifier
              var opresult230 = callmethodChecked(var_os, "++", [1], var_c);
              var_os = opresult230;
              if196 = GraceDone;
            }
            if187 = if196;
          }
          if178 = if187;
        }
        if169 = if178;
      }
      return if169;
    };
    var call231 = callmethodChecked(var_prelude, "for()do", [1, 1], var_s, block168);
    setLineNumber(133);    // compilenode identifier
    return var_os;
  };
  func166.paramCounts = [1];
  this.methods["escapestring"] = func166;
  func166.definitionLine = 114;
  func166.definitionModule = "genjs";
  setLineNumber(135);    // compilenode method
  var func232 = function(argcv) {    // method varf(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_vn = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for varf(1)"));
    setModuleName("genjs");
    setLineNumber(136);    // compilenode identifier
    onSelf = true;
    var call233 = callmethodChecked(this, "escapeident", [1], var_vn);
    var string235 = new GraceString("var_");
    var opresult237 = callmethodChecked(string235, "++", [1], call233);
    return opresult237;
  };
  func232.paramCounts = [1];
  this.methods["varf"] = func232;
  func232.definitionLine = 135;
  func232.definitionModule = "genjs";
  setLineNumber(138);    // compilenode method
  var func238 = function(argcv) {    // method beginblock(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_s = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for beginblock(1)"));
    setModuleName("genjs");
    setLineNumber(139);    // compilenode string
    var string240 = new GraceString("%");
    var opresult242 = callmethodChecked(string240, "++", [1], var_s);
    var_bblock = opresult242;
    setLineNumber(140);    // compilenode string
    var string243 = new GraceString(":");
    var opresult246 = callmethodChecked(var_s, "++", [1], string243);
    onSelf = true;
    var call247 = callmethodChecked(this, "out", [1], opresult246);
    return call247;
  };
  func238.paramCounts = [1];
  this.methods["beginblock"] = func238;
  func238.definitionLine = 138;
  func238.definitionModule = "genjs";
  setLineNumber(142);    // compilenode method
  var func248 = function(argcv) {    // method compilearray(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compilearray(1)"));
    setModuleName("genjs");
    setLineNumber(143);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(144);    // compilenode identifier
    var opresult251 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult251;
    setLineNumber(145);    // compilenode vardec
    var var_r;
    setLineNumber(146);    // compilenode array
    var array252 = new PrimitiveGraceList([]);
    var var_vals = array252;
    setLineNumber(147);    // compilenode identifier
    var call253 = callmethodChecked(var_o, "value", [0]);
    var block254 = new GraceBlock(this, 147, 1);
    setLineNumber(1);    // compilenode identifier
    block254.real = function(var_a) {
      setLineNumber(148);    // compilenode identifier
      onSelf = true;
      var call255 = callmethodChecked(this, "compilenode", [1], var_a);
      var_r = call255;
      setLineNumber(149);    // compilenode identifier
      var call256 = callmethodChecked(var_vals, "push", [1], var_r);
      return call256;
    };
    var call257 = callmethodChecked(var_prelude, "for()do", [1, 1], call253, block254);
    setLineNumber(151);    // compilenode string
    var string258 = new GraceString(");");
    var string261 = new GraceString("(");
    var string264 = new GraceString(" = new ");
    var string267 = new GraceString("var array");
    var opresult269 = callmethodChecked(string267, "++", [1], var_myc);
    var opresult271 = callmethodChecked(opresult269, "++", [1], string264);
    var opresult273 = callmethodChecked(opresult271, "++", [1], var_bracketConstructor);
    var opresult275 = callmethodChecked(opresult273, "++", [1], string261);
    var opresult277 = callmethodChecked(opresult275, "++", [1], var_vals);
    var opresult279 = callmethodChecked(opresult277, "++", [1], string258);
    onSelf = true;
    var call280 = callmethodChecked(this, "out", [1], opresult279);
    setLineNumber(152);    // compilenode string
    var string282 = new GraceString("array");
    var opresult284 = callmethodChecked(string282, "++", [1], var_myc);
    var call285 = callmethodChecked(var_o, "register:=", [1], opresult284);
    return call285;
  };
  func248.paramCounts = [1];
  this.methods["compilearray"] = func248;
  func248.definitionLine = 142;
  func248.definitionModule = "genjs";
  setLineNumber(154);    // compilenode method
  var func286 = function(argcv) {    // method compilemember(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compilemember(1)"));
    setModuleName("genjs");
    setLineNumber(156);    // compilenode identifier
    var call287 = callmethodChecked(var_o, "line", [0]);
    var call288 = callmethodChecked(var_util, "setline", [1], call287);
    setLineNumber(157);    // compilenode identifier
    var call290 = callmethodChecked(var_o, "value", [0]);
    var array291 = new PrimitiveGraceList([]);
    var call292 = callmethodChecked(var_ast, "callWithPart", [0]);
    var call293 = callmethodChecked(call292, "request()withArgs", [1, 1], call290, array291);
    var array289 = new PrimitiveGraceList([call293]);
    var call294 = callmethodChecked(var_o, "scope", [0]);
    var call295 = callmethodChecked(var_ast, "callNode", [0]);
    var call296 = callmethodChecked(call295, "new()scope", [2, 1], var_o, array289, call294);
    var var_c = call296;
    setLineNumber(158);    // compilenode identifier
    onSelf = true;
    var call297 = callmethodChecked(this, "compilenode", [1], var_c);
    var var_r = call297;
    setLineNumber(159);    // compilenode identifier
    var call298 = callmethodChecked(var_o, "register:=", [1], var_r);
    return call298;
  };
  func286.paramCounts = [1];
  this.methods["compilemember"] = func286;
  func286.definitionLine = 154;
  func286.definitionModule = "genjs";
  setLineNumber(161);    // compilenode method
  var func299 = function(argcv) {    // method compileobjouter(2)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_selfr = arguments[curarg];
    curarg++;
    var var_outerRef = arguments[curarg];
    curarg++;
    if (argcv[0] !== 2)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compileobjouter(2)"));
    setModuleName("genjs");
    setLineNumber(162);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(163);    // compilenode identifier
    var opresult302 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult302;
    setLineNumber(164);    // compilenode string
    var string303 = new GraceString("outer");
    onSelf = true;
    var call304 = callmethodChecked(this, "escapestring", [1], string303);
    var var_nm = call304;
    setLineNumber(165);    // compilenode string
    var string305 = new GraceString("outer");
    onSelf = true;
    var call306 = callmethodChecked(this, "escapeident", [1], string305);
    var var_nmi = call306;
    setLineNumber(166);    // compilenode identifier
    onSelf = true;
    var call307 = callmethodChecked(this, "escapeident", [1], var_modname);
    var var_emod = call307;
    setLineNumber(167);    // compilenode string
    var string308 = new GraceString(";");
    var string311 = new GraceString(".outer = ");
    var string314 = new GraceString("");
    var opresult316 = callmethodChecked(string314, "++", [1], var_selfr);
    var opresult318 = callmethodChecked(opresult316, "++", [1], string311);
    var opresult320 = callmethodChecked(opresult318, "++", [1], var_outerRef);
    var opresult322 = callmethodChecked(opresult320, "++", [1], string308);
    onSelf = true;
    var call323 = callmethodChecked(this, "out", [1], opresult322);
    setLineNumber(168);    // compilenode string
    var string324 = new GraceString(" = function() {");
    var string327 = new GraceString("");
    var string330 = new GraceString("_");
    var string333 = new GraceString("var reader_");
    var opresult335 = callmethodChecked(string333, "++", [1], var_emod);
    var opresult337 = callmethodChecked(opresult335, "++", [1], string330);
    var opresult339 = callmethodChecked(opresult337, "++", [1], var_nmi);
    var opresult341 = callmethodChecked(opresult339, "++", [1], string327);
    var opresult343 = callmethodChecked(opresult341, "++", [1], var_myc);
    var opresult345 = callmethodChecked(opresult343, "++", [1], string324);
    onSelf = true;
    var call346 = callmethodChecked(this, "out", [1], opresult345);
    setLineNumber(169);    // compilenode string
    var string347 = new GraceString("  return this.outer;");
    onSelf = true;
    var call348 = callmethodChecked(this, "out", [1], string347);
    setLineNumber(170);    // compilenode string
    var string349 = new GraceString("};");
    onSelf = true;
    var call350 = callmethodChecked(this, "out", [1], string349);
    setLineNumber(171);    // compilenode string
    var string351 = new GraceString(";");
    var string354 = new GraceString("");
    var string357 = new GraceString("_");
    var string360 = new GraceString("\"] = reader_");
    var string363 = new GraceString(".methods[\"");
    var string366 = new GraceString("");
    var opresult368 = callmethodChecked(string366, "++", [1], var_selfr);
    var opresult370 = callmethodChecked(opresult368, "++", [1], string363);
    var opresult372 = callmethodChecked(opresult370, "++", [1], var_nm);
    var opresult374 = callmethodChecked(opresult372, "++", [1], string360);
    var opresult376 = callmethodChecked(opresult374, "++", [1], var_emod);
    var opresult378 = callmethodChecked(opresult376, "++", [1], string357);
    var opresult380 = callmethodChecked(opresult378, "++", [1], var_nmi);
    var opresult382 = callmethodChecked(opresult380, "++", [1], string354);
    var opresult384 = callmethodChecked(opresult382, "++", [1], var_myc);
    var opresult386 = callmethodChecked(opresult384, "++", [1], string351);
    onSelf = true;
    var call387 = callmethodChecked(this, "out", [1], opresult386);
    return call387;
  };
  func299.paramCounts = [2];
  this.methods["compileobjouter"] = func299;
  func299.definitionLine = 161;
  func299.definitionModule = "genjs";
  setLineNumber(173);    // compilenode method
  var func388 = function(argcv) {    // method compileobjtype(3)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_selfr = arguments[curarg];
    curarg++;
    var var_pos = arguments[curarg];
    curarg++;
    if (argcv[0] !== 3)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compileobjtype(3)"));
    setModuleName("genjs");
    setLineNumber(174);    // compilenode string
    var string389 = new GraceString("undefined");
    var var_val = string389;
    setLineNumber(175);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(176);    // compilenode identifier
    var opresult392 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult392;
    setLineNumber(177);    // compilenode identifier
    var call393 = callmethodChecked(var_o, "value", [0]);
    onSelf = true;
    var call394 = callmethodChecked(this, "escapestring", [1], call393);
    var var_nm = call394;
    setLineNumber(178);    // compilenode identifier
    var call395 = callmethodChecked(var_o, "value", [0]);
    onSelf = true;
    var call396 = callmethodChecked(this, "escapeident", [1], call395);
    var var_nmi = call396;
    setLineNumber(179);    // compilenode identifier
    onSelf = true;
    var call397 = callmethodChecked(this, "escapeident", [1], var_modname);
    var var_emod = call397;
    setLineNumber(180);    // compilenode identifier
    var call398 = callmethodChecked(var_o, "anonymous:=", [1], GraceTrue);
    setLineNumber(181);    // compilenode identifier
    onSelf = true;
    var call399 = callmethodChecked(this, "compilenode", [1], var_o);
    var_val = call399;
    setLineNumber(182);    // compilenode string
    var string400 = new GraceString(";");
    var string403 = new GraceString("\"] = ");
    var string406 = new GraceString(".data[\"");
    var opresult409 = callmethodChecked(var_selfr, "++", [1], string406);
    var opresult411 = callmethodChecked(opresult409, "++", [1], var_nm);
    var opresult413 = callmethodChecked(opresult411, "++", [1], string403);
    var opresult415 = callmethodChecked(opresult413, "++", [1], var_val);
    var opresult417 = callmethodChecked(opresult415, "++", [1], string400);
    onSelf = true;
    var call418 = callmethodChecked(this, "out", [1], opresult417);
    setLineNumber(183);    // compilenode string
    var string419 = new GraceString(" = function() {");
    var string422 = new GraceString("");
    var string425 = new GraceString("_");
    var string428 = new GraceString("    var reader_");
    var opresult430 = callmethodChecked(string428, "++", [1], var_emod);
    var opresult432 = callmethodChecked(opresult430, "++", [1], string425);
    var opresult434 = callmethodChecked(opresult432, "++", [1], var_nmi);
    var opresult436 = callmethodChecked(opresult434, "++", [1], string422);
    var opresult438 = callmethodChecked(opresult436, "++", [1], var_myc);
    var opresult440 = callmethodChecked(opresult438, "++", [1], string419);
    onSelf = true;
    var call441 = callmethodChecked(this, "out", [1], opresult440);
    setLineNumber(184);    // compilenode string
    var string442 = new GraceString("\"];");
    var string445 = new GraceString("    return this.data[\"");
    var opresult447 = callmethodChecked(string445, "++", [1], var_nm);
    var opresult449 = callmethodChecked(opresult447, "++", [1], string442);
    onSelf = true;
    var call450 = callmethodChecked(this, "out", [1], opresult449);
    setLineNumber(185);    // compilenode string
    var string451 = new GraceString("  };");
    onSelf = true;
    var call452 = callmethodChecked(this, "out", [1], string451);
    setLineNumber(186);    // compilenode string
    var string453 = new GraceString(".def = true;");
    var string456 = new GraceString("");
    var string459 = new GraceString("_");
    var string462 = new GraceString("  reader_");
    var opresult464 = callmethodChecked(string462, "++", [1], var_emod);
    var opresult466 = callmethodChecked(opresult464, "++", [1], string459);
    var opresult468 = callmethodChecked(opresult466, "++", [1], var_nmi);
    var opresult470 = callmethodChecked(opresult468, "++", [1], string456);
    var opresult472 = callmethodChecked(opresult470, "++", [1], var_myc);
    var opresult474 = callmethodChecked(opresult472, "++", [1], string453);
    onSelf = true;
    var call475 = callmethodChecked(this, "out", [1], opresult474);
    setLineNumber(187);    // compilenode identifier
    var var_isReadable = GraceFalse;
    setLineNumber(188);    // compilenode identifier
    var call476 = callmethodChecked(var_o, "annotations", [0]);
    var block477 = new GraceBlock(this, 188, 1);
    setLineNumber(1);    // compilenode identifier
    block477.real = function(var_ann) {
      var if478 = GraceDone;
      setLineNumber(190);    // compilenode block
      var block479 = new GraceBlock(this, 190, 0);
      block479.real = function() {
        var string480 = new GraceString("confidential");
        var call482 = callmethodChecked(var_ann, "value", [0]);
        var opresult484 = callmethodChecked(call482, "==", [1], string480);
        return opresult484;
      };
      setLineNumber(189);    // compilenode string
      var string486 = new GraceString("identifier");
      var call488 = callmethodChecked(var_ann, "kind", [0]);
      var opresult490 = callmethodChecked(call488, "==", [1], string486);
      var opresult492 = callmethodChecked(opresult490, "&&", [1], block479);
      if (Grace_isTrue(opresult492)) {
        setLineNumber(191);    // compilenode string
        var string493 = new GraceString(".confidential = true;");
        var string496 = new GraceString("");
        var string499 = new GraceString("_");
        var string502 = new GraceString("  reader_");
        var opresult504 = callmethodChecked(string502, "++", [1], var_emod);
        var opresult506 = callmethodChecked(opresult504, "++", [1], string499);
        var opresult508 = callmethodChecked(opresult506, "++", [1], var_nmi);
        var opresult510 = callmethodChecked(opresult508, "++", [1], string496);
        var opresult512 = callmethodChecked(opresult510, "++", [1], var_myc);
        var opresult514 = callmethodChecked(opresult512, "++", [1], string493);
        onSelf = true;
        var call515 = callmethodChecked(this, "out", [1], opresult514);
        if478 = call515;
      }
      return if478;
    };
    var call516 = callmethodChecked(var_prelude, "for()do", [1, 1], call476, block477);
    setLineNumber(194);    // compilenode string
    var string517 = new GraceString(";");
    var string520 = new GraceString("");
    var string523 = new GraceString("_");
    var string526 = new GraceString("\"] = reader_");
    var string529 = new GraceString(".methods[\"");
    var string532 = new GraceString("");
    var opresult534 = callmethodChecked(string532, "++", [1], var_selfr);
    var opresult536 = callmethodChecked(opresult534, "++", [1], string529);
    var opresult538 = callmethodChecked(opresult536, "++", [1], var_nm);
    var opresult540 = callmethodChecked(opresult538, "++", [1], string526);
    var opresult542 = callmethodChecked(opresult540, "++", [1], var_emod);
    var opresult544 = callmethodChecked(opresult542, "++", [1], string523);
    var opresult546 = callmethodChecked(opresult544, "++", [1], var_nmi);
    var opresult548 = callmethodChecked(opresult546, "++", [1], string520);
    var opresult550 = callmethodChecked(opresult548, "++", [1], var_myc);
    var opresult552 = callmethodChecked(opresult550, "++", [1], string517);
    onSelf = true;
    var call553 = callmethodChecked(this, "out", [1], opresult552);
    return call553;
  };
  func388.paramCounts = [3];
  this.methods["compileobjtype"] = func388;
  func388.definitionLine = 173;
  func388.definitionModule = "genjs";
  setLineNumber(196);    // compilenode method
  var func554 = function(argcv) {    // method compileobjdefdec(3)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_selfr = arguments[curarg];
    curarg++;
    var var_pos = arguments[curarg];
    curarg++;
    if (argcv[0] !== 3)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compileobjdefdec(3)"));
    setModuleName("genjs");
    setLineNumber(197);    // compilenode string
    var string555 = new GraceString("undefined");
    var var_val = string555;
    var if556 = GraceDone;
    setLineNumber(198);    // compilenode identifier
    var call557 = callmethodChecked(var_o, "value", [0]);
    var opresult560 = callmethodChecked(GraceFalse, "\u2260", [1], call557);
    if (Grace_isTrue(opresult560)) {
      var if561 = GraceDone;
      setLineNumber(199);    // compilenode string
      var string562 = new GraceString("object");
      var call564 = callmethodChecked(var_o, "value", [0]);
      var call565 = callmethodChecked(call564, "kind", [0]);
      var opresult567 = callmethodChecked(call565, "==", [1], string562);
      if (Grace_isTrue(opresult567)) {
        setLineNumber(200);    // compilenode identifier
        var call568 = callmethodChecked(var_o, "value", [0]);
        onSelf = true;
        var call569 = callmethodChecked(this, "compileobject", [3], call568, var_selfr, GraceFalse);
        setLineNumber(201);    // compilenode identifier
        var call570 = callmethodChecked(var_o, "value", [0]);
        var call571 = callmethodChecked(call570, "register", [0]);
        var_val = call571;
        if561 = GraceDone;
      } else {
        setLineNumber(203);    // compilenode identifier
        var call572 = callmethodChecked(var_o, "value", [0]);
        onSelf = true;
        var call573 = callmethodChecked(this, "compilenode", [1], call572);
        var_val = call573;
        if561 = GraceDone;
      }
      if556 = if561;
    }
    setLineNumber(206);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(207);    // compilenode identifier
    var opresult576 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult576;
    setLineNumber(208);    // compilenode identifier
    var call577 = callmethodChecked(var_o, "name", [0]);
    var call578 = callmethodChecked(call577, "value", [0]);
    onSelf = true;
    var call579 = callmethodChecked(this, "escapestring", [1], call578);
    var var_nm = call579;
    setLineNumber(209);    // compilenode identifier
    var call580 = callmethodChecked(var_o, "name", [0]);
    var call581 = callmethodChecked(call580, "value", [0]);
    onSelf = true;
    var call582 = callmethodChecked(this, "escapeident", [1], call581);
    var var_nmi = call582;
    setLineNumber(210);    // compilenode identifier
    onSelf = true;
    var call583 = callmethodChecked(this, "escapeident", [1], var_modname);
    var var_emod = call583;
    setLineNumber(211);    // compilenode string
    var string584 = new GraceString(";");
    var string587 = new GraceString("\"] = ");
    var string590 = new GraceString(".data[\"");
    var string593 = new GraceString("");
    var opresult595 = callmethodChecked(string593, "++", [1], var_selfr);
    var opresult597 = callmethodChecked(opresult595, "++", [1], string590);
    var opresult599 = callmethodChecked(opresult597, "++", [1], var_nm);
    var opresult601 = callmethodChecked(opresult599, "++", [1], string587);
    var opresult603 = callmethodChecked(opresult601, "++", [1], var_val);
    var opresult605 = callmethodChecked(opresult603, "++", [1], string584);
    onSelf = true;
    var call606 = callmethodChecked(this, "out", [1], opresult605);
    setLineNumber(212);    // compilenode string
    var string607 = new GraceString(" = function() {");
    var string610 = new GraceString("");
    var string613 = new GraceString("_");
    var string616 = new GraceString("var reader_");
    var opresult618 = callmethodChecked(string616, "++", [1], var_emod);
    var opresult620 = callmethodChecked(opresult618, "++", [1], string613);
    var opresult622 = callmethodChecked(opresult620, "++", [1], var_nmi);
    var opresult624 = callmethodChecked(opresult622, "++", [1], string610);
    var opresult626 = callmethodChecked(opresult624, "++", [1], var_myc);
    var opresult628 = callmethodChecked(opresult626, "++", [1], string607);
    onSelf = true;
    var call629 = callmethodChecked(this, "out", [1], opresult628);
    setLineNumber(213);    // compilenode string
    var string630 = new GraceString("\"];");
    var string633 = new GraceString("  return this.data[\"");
    var opresult635 = callmethodChecked(string633, "++", [1], var_nm);
    var opresult637 = callmethodChecked(opresult635, "++", [1], string630);
    onSelf = true;
    var call638 = callmethodChecked(this, "out", [1], opresult637);
    setLineNumber(214);    // compilenode string
    var string639 = new GraceString("};");
    onSelf = true;
    var call640 = callmethodChecked(this, "out", [1], string639);
    setLineNumber(215);    // compilenode string
    var string641 = new GraceString(".def = true;");
    var string644 = new GraceString("");
    var string647 = new GraceString("_");
    var string650 = new GraceString("reader_");
    var opresult652 = callmethodChecked(string650, "++", [1], var_emod);
    var opresult654 = callmethodChecked(opresult652, "++", [1], string647);
    var opresult656 = callmethodChecked(opresult654, "++", [1], var_nmi);
    var opresult658 = callmethodChecked(opresult656, "++", [1], string644);
    var opresult660 = callmethodChecked(opresult658, "++", [1], var_myc);
    var opresult662 = callmethodChecked(opresult660, "++", [1], string641);
    onSelf = true;
    var call663 = callmethodChecked(this, "out", [1], opresult662);
    var if664 = GraceDone;
    setLineNumber(216);    // compilenode identifier
    var call665 = callmethodChecked(var_o, "isReadable", [0]);
    var call666 = callmethodChecked(call665, "not", [0]);
    if (Grace_isTrue(call666)) {
      setLineNumber(217);    // compilenode string
      var string667 = new GraceString(".confidential = true;");
      var string670 = new GraceString("");
      var string673 = new GraceString("_");
      var string676 = new GraceString("reader_");
      var opresult678 = callmethodChecked(string676, "++", [1], var_emod);
      var opresult680 = callmethodChecked(opresult678, "++", [1], string673);
      var opresult682 = callmethodChecked(opresult680, "++", [1], var_nmi);
      var opresult684 = callmethodChecked(opresult682, "++", [1], string670);
      var opresult686 = callmethodChecked(opresult684, "++", [1], var_myc);
      var opresult688 = callmethodChecked(opresult686, "++", [1], string667);
      onSelf = true;
      var call689 = callmethodChecked(this, "out", [1], opresult688);
      if664 = call689;
    }
    setLineNumber(219);    // compilenode string
    var string690 = new GraceString(";");
    var string693 = new GraceString("");
    var string696 = new GraceString("_");
    var string699 = new GraceString("\"] = reader_");
    var string702 = new GraceString(".methods[\"");
    var string705 = new GraceString("");
    var opresult707 = callmethodChecked(string705, "++", [1], var_selfr);
    var opresult709 = callmethodChecked(opresult707, "++", [1], string702);
    var opresult711 = callmethodChecked(opresult709, "++", [1], var_nm);
    var opresult713 = callmethodChecked(opresult711, "++", [1], string699);
    var opresult715 = callmethodChecked(opresult713, "++", [1], var_emod);
    var opresult717 = callmethodChecked(opresult715, "++", [1], string696);
    var opresult719 = callmethodChecked(opresult717, "++", [1], var_nmi);
    var opresult721 = callmethodChecked(opresult719, "++", [1], string693);
    var opresult723 = callmethodChecked(opresult721, "++", [1], var_myc);
    var opresult725 = callmethodChecked(opresult723, "++", [1], string690);
    onSelf = true;
    var call726 = callmethodChecked(this, "out", [1], opresult725);
    var if727 = GraceDone;
    setLineNumber(220);    // compilenode string
    var string728 = new GraceString("parent");
    var call729 = callmethodChecked(var_ast, "findAnnotation", [2], var_o, string728);
    if (Grace_isTrue(call729)) {
      setLineNumber(221);    // compilenode string
      var string730 = new GraceString(";");
      var string733 = new GraceString(".superobj = ");
      var string736 = new GraceString("  ");
      var opresult738 = callmethodChecked(string736, "++", [1], var_selfr);
      var opresult740 = callmethodChecked(opresult738, "++", [1], string733);
      var opresult742 = callmethodChecked(opresult740, "++", [1], var_val);
      var opresult744 = callmethodChecked(opresult742, "++", [1], string730);
      onSelf = true;
      var call745 = callmethodChecked(this, "out", [1], opresult744);
      if727 = call745;
    }
    var if746 = GraceDone;
    setLineNumber(223);    // compilenode identifier
    if (Grace_isTrue(var_emitTypeChecks)) {
      var if747 = GraceDone;
      setLineNumber(224);    // compilenode identifier
      var call749 = callmethodChecked(var_o, "dtype", [0]);
      var opresult751 = callmethodChecked(call749, "\u2260", [1], GraceFalse);
      if (Grace_isTrue(opresult751)) {
        var if752 = GraceDone;
        setLineNumber(225);    // compilenode string
        var string753 = new GraceString("Unknown");
        var call755 = callmethodChecked(var_o, "dtype", [0]);
        var call756 = callmethodChecked(call755, "value", [0]);
        var opresult758 = callmethodChecked(call756, "\u2260", [1], string753);
        if (Grace_isTrue(opresult758)) {
          setLineNumber(226);    // compilenode identifier
          var call759 = callmethodChecked(var_o, "line", [0]);
          var string760 = new GraceString("typecheck in compileobjdefdec");
          onSelf = true;
          var call761 = callmethodChecked(this, "noteLineNumber()comment", [1, 1], call759, string760);
          setLineNumber(227);    // compilenode string
          var string762 = new GraceString(")))");
          var string765 = new GraceString(", \"match\", [1], ");
          var call767 = callmethodChecked(var_o, "dtype", [0]);
          onSelf = true;
          var call768 = callmethodChecked(this, "compilenode", [1], call767);
          var string770 = new GraceString("if (!Grace_isTrue(callmethod(");
          var opresult772 = callmethodChecked(string770, "++", [1], call768);
          var opresult774 = callmethodChecked(opresult772, "++", [1], string765);
          var opresult776 = callmethodChecked(opresult774, "++", [1], var_val);
          var opresult778 = callmethodChecked(opresult776, "++", [1], string762);
          onSelf = true;
          var call779 = callmethodChecked(this, "out", [1], opresult778);
          setLineNumber(228);    // compilenode string
          var string780 = new GraceString("  throw new GraceExceptionPacket(TypeErrorObject,");
          onSelf = true;
          var call781 = callmethodChecked(this, "out", [1], string780);
          setLineNumber(229);    // compilenode string
          var string782 = new GraceString("\"));");
          var call784 = callmethodChecked(var_o, "dtype", [0]);
          var call785 = callmethodChecked(call784, "toGrace", [1], new GraceNum(0));
          var string787 = new GraceString("' is not of type ");
          var call789 = callmethodChecked(var_o, "name", [0]);
          var call790 = callmethodChecked(call789, "value", [0]);
          var string792 = new GraceString("      new GraceString(\"value of def '");
          var opresult794 = callmethodChecked(string792, "++", [1], call790);
          var opresult796 = callmethodChecked(opresult794, "++", [1], string787);
          var opresult798 = callmethodChecked(opresult796, "++", [1], call785);
          var opresult800 = callmethodChecked(opresult798, "++", [1], string782);
          onSelf = true;
          var call801 = callmethodChecked(this, "out", [1], opresult800);
          if752 = call801;
        }
        if747 = if752;
      }
      if746 = if747;
    }
    return if746;
  };
  func554.paramCounts = [3];
  this.methods["compileobjdefdec"] = func554;
  func554.definitionLine = 196;
  func554.definitionModule = "genjs";
  setLineNumber(234);    // compilenode method
  var func802 = function(argcv) {    // method compileobjvardec(3)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_selfr = arguments[curarg];
    curarg++;
    var var_pos = arguments[curarg];
    curarg++;
    if (argcv[0] !== 3)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compileobjvardec(3)"));
    setModuleName("genjs");
    setLineNumber(235);    // compilenode string
    var string803 = new GraceString("undefined");
    var var_val = string803;
    var if804 = GraceDone;
    setLineNumber(236);    // compilenode identifier
    var call805 = callmethodChecked(var_o, "value", [0]);
    var opresult808 = callmethodChecked(GraceFalse, "\u2260", [1], call805);
    if (Grace_isTrue(opresult808)) {
      setLineNumber(237);    // compilenode identifier
      var call809 = callmethodChecked(var_o, "value", [0]);
      onSelf = true;
      var call810 = callmethodChecked(this, "compilenode", [1], call809);
      var_val = call810;
      if804 = GraceDone;
    }
    setLineNumber(239);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(240);    // compilenode identifier
    var opresult813 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult813;
    setLineNumber(241);    // compilenode identifier
    var call814 = callmethodChecked(var_o, "name", [0]);
    var call815 = callmethodChecked(call814, "value", [0]);
    onSelf = true;
    var call816 = callmethodChecked(this, "escapestring", [1], call815);
    var var_nm = call816;
    setLineNumber(242);    // compilenode identifier
    var call817 = callmethodChecked(var_o, "name", [0]);
    var call818 = callmethodChecked(call817, "value", [0]);
    onSelf = true;
    var call819 = callmethodChecked(this, "escapeident", [1], call818);
    var var_nmi = call819;
    setLineNumber(243);    // compilenode identifier
    onSelf = true;
    var call820 = callmethodChecked(this, "escapeident", [1], var_modname);
    var var_emod = call820;
    setLineNumber(244);    // compilenode string
    var string821 = new GraceString(";");
    var string824 = new GraceString("\"] = ");
    var string827 = new GraceString(".data[\"");
    var opresult830 = callmethodChecked(var_selfr, "++", [1], string827);
    var opresult832 = callmethodChecked(opresult830, "++", [1], var_nm);
    var opresult834 = callmethodChecked(opresult832, "++", [1], string824);
    var opresult836 = callmethodChecked(opresult834, "++", [1], var_val);
    var opresult838 = callmethodChecked(opresult836, "++", [1], string821);
    onSelf = true;
    var call839 = callmethodChecked(this, "out", [1], opresult838);
    setLineNumber(245);    // compilenode string
    var string840 = new GraceString(" = function() {");
    var string844 = new GraceString("_");
    var string847 = new GraceString("var reader_");
    var opresult849 = callmethodChecked(string847, "++", [1], var_emod);
    var opresult851 = callmethodChecked(opresult849, "++", [1], string844);
    var opresult853 = callmethodChecked(opresult851, "++", [1], var_nmi);
    var opresult855 = callmethodChecked(opresult853, "++", [1], var_myc);
    var opresult857 = callmethodChecked(opresult855, "++", [1], string840);
    onSelf = true;
    var call858 = callmethodChecked(this, "out", [1], opresult857);
    setLineNumber(246);    // compilenode string
    var string859 = new GraceString("\"];");
    var string862 = new GraceString("  return this.data[\"");
    var opresult864 = callmethodChecked(string862, "++", [1], var_nm);
    var opresult866 = callmethodChecked(opresult864, "++", [1], string859);
    onSelf = true;
    var call867 = callmethodChecked(this, "out", [1], opresult866);
    setLineNumber(247);    // compilenode string
    var string868 = new GraceString("};");
    onSelf = true;
    var call869 = callmethodChecked(this, "out", [1], string868);
    setLineNumber(249);    // compilenode string
    var string870 = new GraceString(";");
    var string874 = new GraceString("_");
    setLineNumber(248);    // compilenode string
    var string877 = new GraceString("\"] = reader_");
    var string880 = new GraceString(".methods[\"");
    var opresult883 = callmethodChecked(var_selfr, "++", [1], string880);
    var opresult885 = callmethodChecked(opresult883, "++", [1], var_nm);
    var opresult887 = callmethodChecked(opresult885, "++", [1], string877);
    var opresult889 = callmethodChecked(opresult887, "++", [1], var_emod);
    var opresult891 = callmethodChecked(opresult889, "++", [1], string874);
    var opresult893 = callmethodChecked(opresult891, "++", [1], var_nmi);
    var opresult895 = callmethodChecked(opresult893, "++", [1], var_myc);
    var opresult897 = callmethodChecked(opresult895, "++", [1], string870);
    onSelf = true;
    var call898 = callmethodChecked(this, "out", [1], opresult897);
    setLineNumber(250);    // compilenode string
    var string899 = new GraceString(";");
    var string902 = new GraceString("\"] = ");
    var string905 = new GraceString(".data[\"");
    var opresult908 = callmethodChecked(var_selfr, "++", [1], string905);
    var opresult910 = callmethodChecked(opresult908, "++", [1], var_nm);
    var opresult912 = callmethodChecked(opresult910, "++", [1], string902);
    var opresult914 = callmethodChecked(opresult912, "++", [1], var_val);
    var opresult916 = callmethodChecked(opresult914, "++", [1], string899);
    onSelf = true;
    var call917 = callmethodChecked(this, "out", [1], opresult916);
    setLineNumber(251);    // compilenode string
    var string918 = new GraceString(" = function(argcv, o) {");
    var string922 = new GraceString("_");
    var string925 = new GraceString("var writer_");
    var opresult927 = callmethodChecked(string925, "++", [1], var_emod);
    var opresult929 = callmethodChecked(opresult927, "++", [1], string922);
    var opresult931 = callmethodChecked(opresult929, "++", [1], var_nmi);
    var opresult933 = callmethodChecked(opresult931, "++", [1], var_myc);
    var opresult935 = callmethodChecked(opresult933, "++", [1], string918);
    onSelf = true;
    var call936 = callmethodChecked(this, "out", [1], opresult935);
    setLineNumber(252);    // compilenode string
    var string937 = new GraceString("\"] = o;");
    var string940 = new GraceString("  this.data[\"");
    var opresult942 = callmethodChecked(string940, "++", [1], var_nm);
    var opresult944 = callmethodChecked(opresult942, "++", [1], string937);
    onSelf = true;
    var call945 = callmethodChecked(this, "out", [1], opresult944);
    setLineNumber(253);    // compilenode string
    var string946 = new GraceString("  return GraceDone;");
    onSelf = true;
    var call947 = callmethodChecked(this, "out", [1], string946);
    setLineNumber(254);    // compilenode string
    var string948 = new GraceString("};");
    onSelf = true;
    var call949 = callmethodChecked(this, "out", [1], string948);
    setLineNumber(256);    // compilenode string
    var string950 = new GraceString(";");
    var string954 = new GraceString("_");
    setLineNumber(255);    // compilenode string
    var string957 = new GraceString(":=\"] = writer_");
    var string960 = new GraceString(".methods[\"");
    var opresult963 = callmethodChecked(var_selfr, "++", [1], string960);
    var opresult965 = callmethodChecked(opresult963, "++", [1], var_nm);
    var opresult967 = callmethodChecked(opresult965, "++", [1], string957);
    var opresult969 = callmethodChecked(opresult967, "++", [1], var_emod);
    var opresult971 = callmethodChecked(opresult969, "++", [1], string954);
    var opresult973 = callmethodChecked(opresult971, "++", [1], var_nmi);
    var opresult975 = callmethodChecked(opresult973, "++", [1], var_myc);
    var opresult977 = callmethodChecked(opresult975, "++", [1], string950);
    onSelf = true;
    var call978 = callmethodChecked(this, "out", [1], opresult977);
    var if979 = GraceDone;
    setLineNumber(257);    // compilenode identifier
    var call980 = callmethodChecked(var_o, "isReadable", [0]);
    var call981 = callmethodChecked(call980, "not", [0]);
    if (Grace_isTrue(call981)) {
      setLineNumber(258);    // compilenode string
      var string982 = new GraceString(".confidential = true;");
      var string985 = new GraceString("");
      var string988 = new GraceString("_");
      var string991 = new GraceString("reader_");
      var opresult993 = callmethodChecked(string991, "++", [1], var_emod);
      var opresult995 = callmethodChecked(opresult993, "++", [1], string988);
      var opresult997 = callmethodChecked(opresult995, "++", [1], var_nmi);
      var opresult999 = callmethodChecked(opresult997, "++", [1], string985);
      var opresult1001 = callmethodChecked(opresult999, "++", [1], var_myc);
      var opresult1003 = callmethodChecked(opresult1001, "++", [1], string982);
      onSelf = true;
      var call1004 = callmethodChecked(this, "out", [1], opresult1003);
      if979 = call1004;
    }
    var if1005 = GraceDone;
    setLineNumber(260);    // compilenode identifier
    var call1006 = callmethodChecked(var_o, "isWritable", [0]);
    var call1007 = callmethodChecked(call1006, "not", [0]);
    if (Grace_isTrue(call1007)) {
      setLineNumber(261);    // compilenode string
      var string1008 = new GraceString(".confidential = true;");
      var string1011 = new GraceString("");
      var string1014 = new GraceString("_");
      var string1017 = new GraceString("writer_");
      var opresult1019 = callmethodChecked(string1017, "++", [1], var_emod);
      var opresult1021 = callmethodChecked(opresult1019, "++", [1], string1014);
      var opresult1023 = callmethodChecked(opresult1021, "++", [1], var_nmi);
      var opresult1025 = callmethodChecked(opresult1023, "++", [1], string1011);
      var opresult1027 = callmethodChecked(opresult1025, "++", [1], var_myc);
      var opresult1029 = callmethodChecked(opresult1027, "++", [1], string1008);
      onSelf = true;
      var call1030 = callmethodChecked(this, "out", [1], opresult1029);
      if1005 = call1030;
    }
    var if1031 = GraceDone;
    setLineNumber(263);    // compilenode identifier
    if (Grace_isTrue(var_emitTypeChecks)) {
      var if1032 = GraceDone;
      setLineNumber(264);    // compilenode identifier
      var call1034 = callmethodChecked(var_o, "dtype", [0]);
      var opresult1036 = callmethodChecked(call1034, "\u2260", [1], GraceFalse);
      if (Grace_isTrue(opresult1036)) {
        var if1037 = GraceDone;
        setLineNumber(265);    // compilenode string
        var string1038 = new GraceString("Unknown");
        var call1040 = callmethodChecked(var_o, "dtype", [0]);
        var call1041 = callmethodChecked(call1040, "value", [0]);
        var opresult1043 = callmethodChecked(call1041, "\u2260", [1], string1038);
        if (Grace_isTrue(opresult1043)) {
          var if1044 = GraceDone;
          setLineNumber(266);    // compilenode string
          var string1045 = new GraceString("undefined");
          var opresult1048 = callmethodChecked(var_val, "==", [1], string1045);
          if (Grace_isTrue(opresult1048)) {
            setLineNumber(267);    // compilenode identifier
            return GraceTrue;
          }
          setLineNumber(269);    // compilenode identifier
          var call1049 = callmethodChecked(var_o, "line", [0]);
          var string1050 = new GraceString("typecheck in compileobjvardec");
          onSelf = true;
          var call1051 = callmethodChecked(this, "noteLineNumber()comment", [1, 1], call1049, string1050);
          setLineNumber(270);    // compilenode string
          var string1052 = new GraceString(")))");
          var string1055 = new GraceString(", \"match\", [1], ");
          var call1057 = callmethodChecked(var_o, "dtype", [0]);
          onSelf = true;
          var call1058 = callmethodChecked(this, "compilenode", [1], call1057);
          var string1060 = new GraceString("if (!Grace_isTrue(callmethod(");
          var opresult1062 = callmethodChecked(string1060, "++", [1], call1058);
          var opresult1064 = callmethodChecked(opresult1062, "++", [1], string1055);
          var opresult1066 = callmethodChecked(opresult1064, "++", [1], var_val);
          var opresult1068 = callmethodChecked(opresult1066, "++", [1], string1052);
          onSelf = true;
          var call1069 = callmethodChecked(this, "out", [1], opresult1068);
          setLineNumber(271);    // compilenode string
          var string1070 = new GraceString("  throw new GraceExceptionPacket(TypeErrorObject,");
          onSelf = true;
          var call1071 = callmethodChecked(this, "out", [1], string1070);
          setLineNumber(272);    // compilenode string
          var string1072 = new GraceString("\"));");
          var call1074 = callmethodChecked(var_o, "dtype", [0]);
          var call1075 = callmethodChecked(call1074, "toGrace", [1], new GraceNum(0));
          var string1077 = new GraceString("' is not of type ");
          var call1079 = callmethodChecked(var_o, "name", [0]);
          var call1080 = callmethodChecked(call1079, "value", [0]);
          var string1082 = new GraceString("      new GraceString(\"initial value of var '");
          var opresult1084 = callmethodChecked(string1082, "++", [1], call1080);
          var opresult1086 = callmethodChecked(opresult1084, "++", [1], string1077);
          var opresult1088 = callmethodChecked(opresult1086, "++", [1], call1075);
          var opresult1090 = callmethodChecked(opresult1088, "++", [1], string1072);
          onSelf = true;
          var call1091 = callmethodChecked(this, "out", [1], opresult1090);
          if1037 = call1091;
        }
        if1032 = if1037;
      }
      if1031 = if1032;
    }
    return if1031;
  };
  func802.paramCounts = [3];
  this.methods["compileobjvardec"] = func802;
  func802.definitionLine = 234;
  func802.definitionModule = "genjs";
  setLineNumber(277);    // compilenode method
  var func1092 = function(argcv) {    // method compileobject(3)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_outerRef = arguments[curarg];
    curarg++;
    var var_inheritingObject = arguments[curarg];
    curarg++;
    if (argcv[0] !== 3)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compileobject(3)"));
    setModuleName("genjs");
    setLineNumber(278);    // compilenode identifier
    var var_origInBlock = var_inBlock;
    setLineNumber(279);    // compilenode identifier
    var_inBlock = GraceFalse;
    setLineNumber(280);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(281);    // compilenode identifier
    var opresult1095 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult1095;
    setLineNumber(282);    // compilenode string
    var string1097 = new GraceString("obj");
    var opresult1099 = callmethodChecked(string1097, "++", [1], var_myc);
    var var_selfr = opresult1099;
    setLineNumber(283);    // compilenode identifier
    var call1100 = callmethodChecked(var_o, "register:=", [1], var_selfr);
    var if1101 = GraceDone;
    setLineNumber(285);    // compilenode identifier
    var call1102 = callmethodChecked(var_o, "inTrait", [0]);
    if (Grace_isTrue(call1102)) {
      setLineNumber(286);    // compilenode string
      var string1103 = new GraceString("GraceTrait");
      if1101 = string1103;
    } else {
      var if1104 = GraceDone;
      setLineNumber(287);    // compilenode identifier
      var call1105 = callmethodChecked(var_o, "superclass", [0]);
      var opresult1108 = callmethodChecked(GraceFalse, "==", [1], call1105);
      if (Grace_isTrue(opresult1108)) {
        setLineNumber(288);    // compilenode string
        var string1109 = new GraceString("GraceObject");
        if1104 = string1109;
      } else {
        setLineNumber(290);    // compilenode string
        var string1110 = new GraceString("null");
        if1104 = string1110;
      }
      if1101 = if1104;
    }
    var var_superConstructor = if1101;
    setLineNumber(292);    // compilenode string
    var string1111 = new GraceString("\");");
    var call1113 = callmethodChecked(var_o, "name", [0]);
    var string1115 = new GraceString(", \"");
    var string1118 = new GraceString(" = Grace_allocObject(");
    var string1121 = new GraceString("var ");
    var opresult1123 = callmethodChecked(string1121, "++", [1], var_selfr);
    var opresult1125 = callmethodChecked(opresult1123, "++", [1], string1118);
    var opresult1127 = callmethodChecked(opresult1125, "++", [1], var_superConstructor);
    var opresult1129 = callmethodChecked(opresult1127, "++", [1], string1115);
    var opresult1131 = callmethodChecked(opresult1129, "++", [1], call1113);
    var opresult1133 = callmethodChecked(opresult1131, "++", [1], string1111);
    onSelf = true;
    var call1134 = callmethodChecked(this, "out", [1], opresult1133);
    setLineNumber(293);    // compilenode string
    var string1135 = new GraceString("\";");
    var string1138 = new GraceString(".definitionModule = \"");
    var string1141 = new GraceString("");
    var opresult1143 = callmethodChecked(string1141, "++", [1], var_selfr);
    var opresult1145 = callmethodChecked(opresult1143, "++", [1], string1138);
    var opresult1147 = callmethodChecked(opresult1145, "++", [1], var_modname);
    var opresult1149 = callmethodChecked(opresult1147, "++", [1], string1135);
    onSelf = true;
    var call1150 = callmethodChecked(this, "out", [1], opresult1149);
    setLineNumber(294);    // compilenode string
    var string1151 = new GraceString(";");
    var call1153 = callmethodChecked(var_o, "line", [0]);
    var string1155 = new GraceString(".definitionLine = ");
    var string1158 = new GraceString("");
    var opresult1160 = callmethodChecked(string1158, "++", [1], var_selfr);
    var opresult1162 = callmethodChecked(opresult1160, "++", [1], string1155);
    var opresult1164 = callmethodChecked(opresult1162, "++", [1], call1153);
    var opresult1166 = callmethodChecked(opresult1164, "++", [1], string1151);
    onSelf = true;
    var call1167 = callmethodChecked(this, "out", [1], opresult1166);
    var if1168 = GraceDone;
    setLineNumber(295);    // compilenode identifier
    if (Grace_isTrue(var_inheritingObject)) {
      setLineNumber(296);    // compilenode string
      var string1169 = new GraceString(" = inheritingObject;");
      var string1172 = new GraceString("var inho");
      var opresult1174 = callmethodChecked(string1172, "++", [1], var_myc);
      var opresult1176 = callmethodChecked(opresult1174, "++", [1], string1169);
      onSelf = true;
      var call1177 = callmethodChecked(this, "out", [1], opresult1176);
      setLineNumber(297);    // compilenode string
      var string1178 = new GraceString(".superobj;");
      var string1181 = new GraceString(" = inho");
      var string1184 = new GraceString(".superobj) inho");
      var string1187 = new GraceString("while (inho");
      var opresult1189 = callmethodChecked(string1187, "++", [1], var_myc);
      var opresult1191 = callmethodChecked(opresult1189, "++", [1], string1184);
      var opresult1193 = callmethodChecked(opresult1191, "++", [1], var_myc);
      var opresult1195 = callmethodChecked(opresult1193, "++", [1], string1181);
      var opresult1197 = callmethodChecked(opresult1195, "++", [1], var_myc);
      var opresult1199 = callmethodChecked(opresult1197, "++", [1], string1178);
      onSelf = true;
      var call1200 = callmethodChecked(this, "out", [1], opresult1199);
      setLineNumber(298);    // compilenode string
      var string1201 = new GraceString(";");
      var string1204 = new GraceString(".superobj = ");
      var string1207 = new GraceString("inho");
      var opresult1209 = callmethodChecked(string1207, "++", [1], var_myc);
      var opresult1211 = callmethodChecked(opresult1209, "++", [1], string1204);
      var opresult1213 = callmethodChecked(opresult1211, "++", [1], var_selfr);
      var opresult1215 = callmethodChecked(opresult1213, "++", [1], string1201);
      onSelf = true;
      var call1216 = callmethodChecked(this, "out", [1], opresult1215);
      setLineNumber(299);    // compilenode string
      var string1217 = new GraceString(".data = inheritingObject.data;");
      var string1220 = new GraceString("");
      var opresult1222 = callmethodChecked(string1220, "++", [1], var_selfr);
      var opresult1224 = callmethodChecked(opresult1222, "++", [1], string1217);
      onSelf = true;
      var call1225 = callmethodChecked(this, "out", [1], opresult1224);
      setLineNumber(300);    // compilenode string
      var string1226 = new GraceString("if (inheritingObject.hasOwnProperty('_value'))");
      onSelf = true;
      var call1227 = callmethodChecked(this, "out", [1], string1226);
      setLineNumber(301);    // compilenode string
      var string1228 = new GraceString("._value = inheritingObject._value;");
      var string1231 = new GraceString("  ");
      var opresult1233 = callmethodChecked(string1231, "++", [1], var_selfr);
      var opresult1235 = callmethodChecked(opresult1233, "++", [1], string1228);
      onSelf = true;
      var call1236 = callmethodChecked(this, "out", [1], opresult1235);
      if1168 = call1236;
    }
    setLineNumber(303);    // compilenode identifier
    onSelf = true;
    var call1237 = callmethodChecked(this, "compileobjouter", [2], var_selfr, var_outerRef);
    setLineNumber(304);    // compilenode string
    var string1238 = new GraceString(" = function() {");
    var string1241 = new GraceString("var obj_init_");
    var opresult1243 = callmethodChecked(string1241, "++", [1], var_myc);
    var opresult1245 = callmethodChecked(opresult1243, "++", [1], string1238);
    onSelf = true;
    var call1246 = callmethodChecked(this, "out", [1], opresult1245);
    setLineNumber(305);    // compilenode call
    onSelf = true;
    var call1247 = callmethodChecked(this, "increaseindent", [0]);
    setLineNumber(306);    // compilenode string
    var string1248 = new GraceString("var origSuperDepth = superDepth;");
    onSelf = true;
    var call1249 = callmethodChecked(this, "out", [1], string1248);
    setLineNumber(307);    // compilenode string
    var string1250 = new GraceString(";");
    var string1253 = new GraceString("superDepth = ");
    var opresult1255 = callmethodChecked(string1253, "++", [1], var_selfr);
    var opresult1257 = callmethodChecked(opresult1255, "++", [1], string1250);
    onSelf = true;
    var call1258 = callmethodChecked(this, "out", [1], opresult1257);
    setLineNumber(308);    // compilenode num
    var var_pos = new GraceNum(0);
    setLineNumber(309);    // compilenode identifier
    var call1259 = callmethodChecked(var_o, "value", [0]);
    var block1260 = new GraceBlock(this, 309, 1);
    setLineNumber(1);    // compilenode identifier
    block1260.real = function(var_e) {
      var if1261 = GraceDone;
      setLineNumber(310);    // compilenode string
      var string1262 = new GraceString("method");
      var call1264 = callmethodChecked(var_e, "kind", [0]);
      var opresult1266 = callmethodChecked(call1264, "==", [1], string1262);
      if (Grace_isTrue(opresult1266)) {
        setLineNumber(311);    // compilenode identifier
        onSelf = true;
        var call1267 = callmethodChecked(this, "compilemethod", [2], var_e, var_selfr);
        if1261 = call1267;
      }
      return if1261;
    };
    var call1268 = callmethodChecked(var_prelude, "for()do", [1, 1], call1259, block1260);
    var if1269 = GraceDone;
    setLineNumber(316);    // compilenode identifier
    var call1270 = callmethodChecked(var_o, "superclass", [0]);
    var opresult1273 = callmethodChecked(GraceFalse, "\u2260", [1], call1270);
    if (Grace_isTrue(opresult1273)) {
      setLineNumber(317);    // compilenode identifier
      var call1274 = callmethodChecked(var_o, "superclass", [0]);
      onSelf = true;
      var call1275 = callmethodChecked(this, "compileInherits()in", [1, 2], call1274, var_o, var_selfr);
      if1269 = call1275;
    }
    setLineNumber(321);    // compilenode block
    var block1276 = new GraceBlock(this, 321, 1);
    setLineNumber(1);    // compilenode identifier
    block1276.real = function(var_t) {
      setLineNumber(321);    // compilenode identifier
      onSelf = true;
      var call1277 = callmethodChecked(this, "compileInherits()in", [1, 2], var_t, var_o, var_selfr);
      return call1277;
    };
    var call1278 = callmethodChecked(var_o, "usedTraits", [0]);
    var call1279 = callmethodChecked(call1278, "do", [1], block1276);
    setLineNumber(324);    // compilenode block
    var block1280 = new GraceBlock(this, 324, 1);
    setLineNumber(1);    // compilenode identifier
    block1280.real = function(var_e) {
      var if1281 = GraceDone;
      setLineNumber(325);    // compilenode string
      var string1282 = new GraceString("method");
      var call1284 = callmethodChecked(var_e, "kind", [0]);
      var opresult1286 = callmethodChecked(call1284, "==", [1], string1282);
      if (Grace_isTrue(opresult1286)) {
      } else {
        var if1287 = GraceDone;
        setLineNumber(326);    // compilenode string
        var string1288 = new GraceString("vardec");
        var call1290 = callmethodChecked(var_e, "kind", [0]);
        var opresult1292 = callmethodChecked(call1290, "==", [1], string1288);
        if (Grace_isTrue(opresult1292)) {
          setLineNumber(327);    // compilenode identifier
          onSelf = true;
          var call1293 = callmethodChecked(this, "compileobjvardec", [3], var_e, var_selfr, var_pos);
          setLineNumber(328);    // compilenode string
          var string1294 = new GraceString(".mutable = true;");
          var string1297 = new GraceString("");
          var opresult1299 = callmethodChecked(string1297, "++", [1], var_selfr);
          var opresult1301 = callmethodChecked(opresult1299, "++", [1], string1294);
          onSelf = true;
          var call1302 = callmethodChecked(this, "out", [1], opresult1301);
          setLineNumber(329);    // compilenode identifier
          var opresult1305 = callmethodChecked(var_pos, "+", [1], new GraceNum(1));
          var_pos = opresult1305;
          if1287 = GraceDone;
        } else {
          var if1306 = GraceDone;
          setLineNumber(330);    // compilenode string
          var string1307 = new GraceString("defdec");
          var call1309 = callmethodChecked(var_e, "kind", [0]);
          var opresult1311 = callmethodChecked(call1309, "==", [1], string1307);
          if (Grace_isTrue(opresult1311)) {
            setLineNumber(331);    // compilenode identifier
            onSelf = true;
            var call1312 = callmethodChecked(this, "compileobjdefdec", [3], var_e, var_selfr, var_pos);
            setLineNumber(332);    // compilenode identifier
            var opresult1315 = callmethodChecked(var_pos, "+", [1], new GraceNum(1));
            var_pos = opresult1315;
            if1306 = GraceDone;
          } else {
            var if1316 = GraceDone;
            setLineNumber(333);    // compilenode string
            var string1317 = new GraceString("typedec");
            var call1319 = callmethodChecked(var_e, "kind", [0]);
            var opresult1321 = callmethodChecked(call1319, "==", [1], string1317);
            if (Grace_isTrue(opresult1321)) {
              setLineNumber(334);    // compilenode identifier
              onSelf = true;
              var call1322 = callmethodChecked(this, "compiletypedec", [1], var_e);
              setLineNumber(335);    // compilenode identifier
              var opresult1325 = callmethodChecked(var_pos, "+", [1], new GraceNum(1));
              var_pos = opresult1325;
              if1316 = GraceDone;
            } else {
              var if1326 = GraceDone;
              setLineNumber(336);    // compilenode string
              var string1327 = new GraceString("object");
              var call1329 = callmethodChecked(var_e, "kind", [0]);
              var opresult1331 = callmethodChecked(call1329, "==", [1], string1327);
              if (Grace_isTrue(opresult1331)) {
                setLineNumber(337);    // compilenode identifier
                onSelf = true;
                var call1332 = callmethodChecked(this, "compileobject", [3], var_e, var_selfr, GraceFalse);
                if1326 = call1332;
              } else {
                setLineNumber(339);    // compilenode identifier
                onSelf = true;
                var call1333 = callmethodChecked(this, "compilenode", [1], var_e);
                if1326 = call1333;
              }
              if1316 = if1326;
            }
            if1306 = if1316;
          }
          if1287 = if1306;
        }
        if1281 = if1287;
      }
      return if1281;
    };
    setLineNumber(324);    // compilenode identifier
    var call1334 = callmethodChecked(var_o, "value", [0]);
    var call1335 = callmethodChecked(call1334, "do", [1], block1280);
    setLineNumber(342);    // compilenode string
    var string1336 = new GraceString("superDepth = origSuperDepth;");
    onSelf = true;
    var call1337 = callmethodChecked(this, "out", [1], string1336);
    setLineNumber(343);    // compilenode call
    onSelf = true;
    var call1338 = callmethodChecked(this, "decreaseindent", [0]);
    setLineNumber(344);    // compilenode string
    var string1339 = new GraceString("};");
    onSelf = true;
    var call1340 = callmethodChecked(this, "out", [1], string1339);
    var if1341 = GraceDone;
    setLineNumber(345);    // compilenode identifier
    if (Grace_isTrue(var_inheritingObject)) {
      setLineNumber(346);    // compilenode string
      var string1342 = new GraceString(".apply(inheritingObject, []);");
      var string1345 = new GraceString("obj_init_");
      var opresult1347 = callmethodChecked(string1345, "++", [1], var_myc);
      var opresult1349 = callmethodChecked(opresult1347, "++", [1], string1342);
      onSelf = true;
      var call1350 = callmethodChecked(this, "out", [1], opresult1349);
      if1341 = call1350;
    } else {
      setLineNumber(348);    // compilenode string
      var string1351 = new GraceString(", []);");
      var string1354 = new GraceString(".apply(");
      var string1357 = new GraceString("obj_init_");
      var opresult1359 = callmethodChecked(string1357, "++", [1], var_myc);
      var opresult1361 = callmethodChecked(opresult1359, "++", [1], string1354);
      var opresult1363 = callmethodChecked(opresult1361, "++", [1], var_selfr);
      var opresult1365 = callmethodChecked(opresult1363, "++", [1], string1351);
      onSelf = true;
      var call1366 = callmethodChecked(this, "out", [1], opresult1365);
      if1341 = call1366;
    }
    setLineNumber(350);    // compilenode identifier
    var_inBlock = var_origInBlock;
    return GraceDone;
  };
  func1092.paramCounts = [3];
  this.methods["compileobject"] = func1092;
  func1092.definitionLine = 277;
  func1092.definitionModule = "genjs";
  setLineNumber(352);    // compilenode method
  var func1367 = function(argcv) {    // method compileblock(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compileblock(1)"));
    setModuleName("genjs");
    setLineNumber(353);    // compilenode identifier
    var var_origInBlock = var_inBlock;
    setLineNumber(354);    // compilenode identifier
    var_inBlock = GraceTrue;
    setLineNumber(355);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(356);    // compilenode identifier
    var call1368 = callmethodChecked(var_o, "params", [0]);
    var call1369 = callmethodChecked(call1368, "size", [0]);
    var var_nParams = call1369;
    setLineNumber(357);    // compilenode identifier
    var opresult1372 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult1372;
    setLineNumber(358);    // compilenode string
    var string1373 = new GraceString(");");
    var string1376 = new GraceString(", ");
    var call1378 = callmethodChecked(var_o, "line", [0]);
    var string1380 = new GraceString(" = new GraceBlock(this, ");
    var string1383 = new GraceString("var block");
    var opresult1385 = callmethodChecked(string1383, "++", [1], var_myc);
    var opresult1387 = callmethodChecked(opresult1385, "++", [1], string1380);
    var opresult1389 = callmethodChecked(opresult1387, "++", [1], call1378);
    var opresult1391 = callmethodChecked(opresult1389, "++", [1], string1376);
    var opresult1393 = callmethodChecked(opresult1391, "++", [1], var_nParams);
    var opresult1395 = callmethodChecked(opresult1393, "++", [1], string1373);
    onSelf = true;
    var call1396 = callmethodChecked(this, "out", [1], opresult1395);
    var if1397 = GraceDone;
    setLineNumber(359);    // compilenode identifier
    var call1398 = callmethodChecked(var_o, "matchingPattern", [0]);
    var opresult1401 = callmethodChecked(GraceFalse, "\u2260", [1], call1398);
    if (Grace_isTrue(opresult1401)) {
      setLineNumber(360);    // compilenode identifier
      var call1402 = callmethodChecked(var_o, "matchingPattern", [0]);
      onSelf = true;
      var call1403 = callmethodChecked(this, "compilenode", [1], call1402);
      var var_pat = call1403;
      setLineNumber(361);    // compilenode string
      var string1404 = new GraceString(";");
      var string1407 = new GraceString(".pattern = ");
      var string1410 = new GraceString("block");
      var opresult1412 = callmethodChecked(string1410, "++", [1], var_myc);
      var opresult1414 = callmethodChecked(opresult1412, "++", [1], string1407);
      var opresult1416 = callmethodChecked(opresult1414, "++", [1], var_pat);
      var opresult1418 = callmethodChecked(opresult1416, "++", [1], string1404);
      onSelf = true;
      var call1419 = callmethodChecked(this, "out", [1], opresult1418);
      if1397 = call1419;
    }
    setLineNumber(363);    // compilenode string
    var string1420 = new GraceString("");
    var var_paramList = string1420;
    setLineNumber(364);    // compilenode array
    var array1421 = new PrimitiveGraceList([]);
    var var_paramTypes = array1421;
    setLineNumber(365);    // compilenode identifier
    var var_paramsAreTyped = GraceFalse;
    setLineNumber(366);    // compilenode identifier
    var var_first = GraceTrue;
    setLineNumber(367);    // compilenode identifier
    var call1422 = callmethodChecked(var_o, "params", [0]);
    var block1423 = new GraceBlock(this, 367, 1);
    setLineNumber(1);    // compilenode identifier
    block1423.real = function(var_each) {
      setLineNumber(368);    // compilenode identifier
      var call1424 = callmethodChecked(var_each, "decType", [0]);
      var var_dType = call1424;
      setLineNumber(369);    // compilenode identifier
      onSelf = true;
      var call1425 = callmethodChecked(this, "compilenode", [1], var_dType);
      var call1426 = callmethodChecked(var_paramTypes, "push", [1], call1425);
      var if1427 = GraceDone;
      setLineNumber(370);    // compilenode identifier
      var call1428 = callmethodChecked(var_ast, "unknownType", [0]);
      var opresult1431 = callmethodChecked(var_dType, "\u2260", [1], call1428);
      if (Grace_isTrue(opresult1431)) {
        setLineNumber(371);    // compilenode identifier
        var_paramsAreTyped = GraceTrue;
        if1427 = GraceDone;
      }
      var if1432 = GraceDone;
      setLineNumber(373);    // compilenode identifier
      if (Grace_isTrue(var_first)) {
        setLineNumber(374);    // compilenode identifier
        var call1433 = callmethodChecked(var_each, "value", [0]);
        onSelf = true;
        var call1434 = callmethodChecked(this, "varf", [1], call1433);
        var_paramList = call1434;
        setLineNumber(375);    // compilenode identifier
        var_first = GraceFalse;
        if1432 = GraceDone;
      } else {
        setLineNumber(377);    // compilenode identifier
        var call1435 = callmethodChecked(var_each, "value", [0]);
        onSelf = true;
        var call1436 = callmethodChecked(this, "varf", [1], call1435);
        var string1438 = new GraceString(", ");
        var opresult1441 = callmethodChecked(var_paramList, "++", [1], string1438);
        var opresult1443 = callmethodChecked(opresult1441, "++", [1], call1436);
        var_paramList = opresult1443;
        if1432 = GraceDone;
      }
      return if1432;
    };
    var call1444 = callmethodChecked(var_prelude, "for()do", [1, 1], call1422, block1423);
    var if1445 = GraceDone;
    setLineNumber(380);    // compilenode identifier
    var opresult1448 = callmethodChecked(var_paramsAreTyped, "&&", [1], var_emitTypeChecks);
    if (Grace_isTrue(opresult1448)) {
      setLineNumber(381);    // compilenode string
      var string1449 = new GraceString(";");
      var string1452 = new GraceString(".paramTypes = ");
      var string1455 = new GraceString("block");
      var opresult1457 = callmethodChecked(string1455, "++", [1], var_myc);
      var opresult1459 = callmethodChecked(opresult1457, "++", [1], string1452);
      var opresult1461 = callmethodChecked(opresult1459, "++", [1], var_paramTypes);
      var opresult1463 = callmethodChecked(opresult1461, "++", [1], string1449);
      onSelf = true;
      var call1464 = callmethodChecked(this, "out", [1], opresult1463);
      if1445 = call1464;
    }
    setLineNumber(383);    // compilenode string
    var string1465 = new GraceString(") {");
    var string1468 = new GraceString(".real = function(");
    var string1471 = new GraceString("block");
    var opresult1473 = callmethodChecked(string1471, "++", [1], var_myc);
    var opresult1475 = callmethodChecked(opresult1473, "++", [1], string1468);
    var opresult1477 = callmethodChecked(opresult1475, "++", [1], var_paramList);
    var opresult1479 = callmethodChecked(opresult1477, "++", [1], string1465);
    onSelf = true;
    var call1480 = callmethodChecked(this, "out", [1], opresult1479);
    setLineNumber(384);    // compilenode call
    onSelf = true;
    var call1481 = callmethodChecked(this, "increaseindent", [0]);
    setLineNumber(385);    // compilenode string
    var string1482 = new GraceString("GraceDone");
    var var_ret = string1482;
    setLineNumber(386);    // compilenode identifier
    var call1483 = callmethodChecked(var_o, "body", [0]);
    var block1484 = new GraceBlock(this, 386, 1);
    setLineNumber(1);    // compilenode identifier
    block1484.real = function(var_l) {
      setLineNumber(387);    // compilenode identifier
      onSelf = true;
      var call1485 = callmethodChecked(this, "compilenode", [1], var_l);
      var_ret = call1485;
      return GraceDone;
    };
    var call1486 = callmethodChecked(var_prelude, "for()do", [1, 1], call1483, block1484);
    setLineNumber(389);    // compilenode string
    var string1487 = new GraceString(";");
    var string1490 = new GraceString("return ");
    var opresult1492 = callmethodChecked(string1490, "++", [1], var_ret);
    var opresult1494 = callmethodChecked(opresult1492, "++", [1], string1487);
    onSelf = true;
    var call1495 = callmethodChecked(this, "out", [1], opresult1494);
    setLineNumber(390);    // compilenode call
    onSelf = true;
    var call1496 = callmethodChecked(this, "decreaseindent", [0]);
    setLineNumber(391);    // compilenode string
    var string1497 = new GraceString("};");
    onSelf = true;
    var call1498 = callmethodChecked(this, "out", [1], string1497);
    setLineNumber(392);    // compilenode string
    var string1500 = new GraceString("block");
    var opresult1502 = callmethodChecked(string1500, "++", [1], var_myc);
    var call1503 = callmethodChecked(var_o, "register:=", [1], opresult1502);
    setLineNumber(393);    // compilenode identifier
    var_inBlock = var_origInBlock;
    return GraceDone;
  };
  func1367.paramCounts = [1];
  this.methods["compileblock"] = func1367;
  func1367.definitionLine = 352;
  func1367.definitionModule = "genjs";
  setLineNumber(395);    // compilenode method
  var func1504 = function(argcv) {    // method compiletypedec(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compiletypedec(1)"));
    setModuleName("genjs");
    setLineNumber(396);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(397);    // compilenode identifier
    var call1505 = callmethodChecked(var_o, "scope", [0]);
    var call1506 = callmethodChecked(call1505, "parent", [0]);
    var var_enclosing = call1506;
    setLineNumber(398);    // compilenode identifier
    var opresult1509 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult1509;
    setLineNumber(399);    // compilenode identifier
    var call1510 = callmethodChecked(var_o, "name", [0]);
    var call1511 = callmethodChecked(call1510, "value", [0]);
    var var_tName = call1511;
    setLineNumber(400);    // compilenode string
    var string1512 = new GraceString("");
    var string1515 = new GraceString("// Type decl ");
    var opresult1517 = callmethodChecked(string1515, "++", [1], var_tName);
    var opresult1519 = callmethodChecked(opresult1517, "++", [1], string1512);
    onSelf = true;
    var call1520 = callmethodChecked(this, "out", [1], opresult1519);
    setLineNumber(401);    // compilenode identifier
    onSelf = true;
    var call1521 = callmethodChecked(this, "escapeident", [1], var_tName);
    var call1522 = callmethodChecked(var_declaredvars, "push", [1], call1521);
    var if1523 = GraceDone;
    setLineNumber(402);    // compilenode string
    var string1524 = new GraceString("typeliteral");
    var call1526 = callmethodChecked(var_o, "value", [0]);
    var call1527 = callmethodChecked(call1526, "kind", [0]);
    var opresult1529 = callmethodChecked(call1527, "==", [1], string1524);
    if (Grace_isTrue(opresult1529)) {
      var call1530 = callmethodChecked(var_o, "value", [0]);
      var call1531 = callmethodChecked(call1530, "name:=", [1], var_tName);
      if1523 = call1531;
    }
    setLineNumber(403);    // compilenode identifier
    var call1532 = callmethodChecked(var_o, "value", [0]);
    onSelf = true;
    var call1533 = callmethodChecked(this, "compilenode", [1], call1532);
    var var_val = call1533;
    setLineNumber(404);    // compilenode string
    var string1534 = new GraceString(";");
    var string1537 = new GraceString(" = ");
    onSelf = true;
    var call1539 = callmethodChecked(this, "varf", [1], var_tName);
    var string1541 = new GraceString("var ");
    var opresult1543 = callmethodChecked(string1541, "++", [1], call1539);
    var opresult1545 = callmethodChecked(opresult1543, "++", [1], string1537);
    var opresult1547 = callmethodChecked(opresult1545, "++", [1], var_val);
    var opresult1549 = callmethodChecked(opresult1547, "++", [1], string1534);
    onSelf = true;
    var call1550 = callmethodChecked(this, "out", [1], opresult1549);
    setLineNumber(405);    // compilenode string
    var string1551 = new GraceString("");
    var string1554 = new GraceString("type");
    var opresult1556 = callmethodChecked(string1554, "++", [1], var_myc);
    var opresult1558 = callmethodChecked(opresult1556, "++", [1], string1551);
    var call1559 = callmethodChecked(var_o, "register:=", [1], opresult1558);
    var if1560 = GraceDone;
    setLineNumber(406);    // compilenode identifier
    var opresult1563 = callmethodChecked(var_compilationDepth, "==", [1], new GraceNum(1));
    if (Grace_isTrue(opresult1563)) {
      setLineNumber(407);    // compilenode identifier
      var call1564 = callmethodChecked(var_o, "name", [0]);
      var call1566 = callmethodChecked(var_o, "name", [0]);
      var call1567 = callmethodChecked(call1566, "value", [0]);
      var call1568 = callmethodChecked(var_ast, "signaturePart", [0]);
      var call1569 = callmethodChecked(call1568, "partName()scope", [1, 1], call1567, var_enclosing);
      var array1565 = new PrimitiveGraceList([call1569]);
      setLineNumber(408);    // compilenode identifier
      var call1571 = callmethodChecked(var_o, "name", [0]);
      var array1570 = new PrimitiveGraceList([call1571]);
      var call1572 = callmethodChecked(var_ast, "typeType", [0]);
      setLineNumber(407);    // compilenode identifier
      var call1573 = callmethodChecked(var_ast, "methodNode", [0]);
      var call1574 = callmethodChecked(call1573, "new()scope", [4, 1], call1564, array1565, array1570, call1572, var_enclosing);
      onSelf = true;
      var call1575 = callmethodChecked(this, "compilenode", [1], call1574);
      if1560 = call1575;
    }
    return if1560;
  };
  func1504.paramCounts = [1];
  this.methods["compiletypedec"] = func1504;
  func1504.definitionLine = 395;
  func1504.definitionModule = "genjs";
  setLineNumber(411);    // compilenode method
  var func1576 = function(argcv) {    // method compiletypeliteral(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compiletypeliteral(1)"));
    setModuleName("genjs");
    setLineNumber(412);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(413);    // compilenode identifier
    var opresult1579 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult1579;
    setLineNumber(414);    // compilenode identifier
    var call1580 = callmethodChecked(var_o, "value", [0]);
    onSelf = true;
    var call1581 = callmethodChecked(this, "escapestring", [1], call1580);
    var var_escName = call1581;
    setLineNumber(415);    // compilenode string
    var string1582 = new GraceString("//   Type literal ");
    onSelf = true;
    var call1583 = callmethodChecked(this, "out", [1], string1582);
    setLineNumber(416);    // compilenode string
    var string1584 = new GraceString("\");");
    var string1587 = new GraceString(" = new GraceType(\"");
    var string1590 = new GraceString("var type");
    var opresult1592 = callmethodChecked(string1590, "++", [1], var_myc);
    var opresult1594 = callmethodChecked(opresult1592, "++", [1], string1587);
    var opresult1596 = callmethodChecked(opresult1594, "++", [1], var_escName);
    var opresult1598 = callmethodChecked(opresult1596, "++", [1], string1584);
    onSelf = true;
    var call1599 = callmethodChecked(this, "out", [1], opresult1598);
    setLineNumber(417);    // compilenode identifier
    var call1600 = callmethodChecked(var_o, "methods", [0]);
    var block1601 = new GraceBlock(this, 417, 1);
    setLineNumber(1);    // compilenode identifier
    block1601.real = function(var_meth) {
      setLineNumber(418);    // compilenode identifier
      var call1602 = callmethodChecked(var_meth, "value", [0]);
      onSelf = true;
      var call1603 = callmethodChecked(this, "escapestring", [1], call1602);
      var var_mnm = call1603;
      setLineNumber(419);    // compilenode string
      var string1604 = new GraceString("\");");
      var string1607 = new GraceString(".typeMethods.push(\"");
      var string1610 = new GraceString("type");
      var opresult1612 = callmethodChecked(string1610, "++", [1], var_myc);
      var opresult1614 = callmethodChecked(opresult1612, "++", [1], string1607);
      var opresult1616 = callmethodChecked(opresult1614, "++", [1], var_mnm);
      var opresult1618 = callmethodChecked(opresult1616, "++", [1], string1604);
      onSelf = true;
      var call1619 = callmethodChecked(this, "out", [1], opresult1618);
      return call1619;
    };
    var call1620 = callmethodChecked(var_prelude, "for()do", [1, 1], call1600, block1601);
    setLineNumber(422);    // compilenode string
    var string1621 = new GraceString("");
    var string1624 = new GraceString("type");
    var opresult1626 = callmethodChecked(string1624, "++", [1], var_myc);
    var opresult1628 = callmethodChecked(opresult1626, "++", [1], string1621);
    var call1629 = callmethodChecked(var_o, "register:=", [1], opresult1628);
    return call1629;
  };
  func1576.paramCounts = [1];
  this.methods["compiletypeliteral"] = func1576;
  func1576.definitionLine = 411;
  func1576.definitionModule = "genjs";
  setLineNumber(424);    // compilenode method
  var func1630 = function(argcv) {    // method compilemethod(2)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_selfobj = arguments[curarg];
    curarg++;
    if (argcv[0] !== 2)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compilemethod(2)"));
    setModuleName("genjs");
    setLineNumber(425);    // compilenode identifier
    var var_oldusedvars = var_usedvars;
    setLineNumber(426);    // compilenode identifier
    var var_olddeclaredvars = var_declaredvars;
    setLineNumber(427);    // compilenode array
    var array1631 = new PrimitiveGraceList([]);
    var var_paramCounts = array1631;
    setLineNumber(428);    // compilenode identifier
    var call1632 = callmethodChecked(var_o, "signature", [0]);
    var block1633 = new GraceBlock(this, 428, 1);
    setLineNumber(1);    // compilenode identifier
    block1633.real = function(var_part) {
      setLineNumber(429);    // compilenode identifier
      var call1634 = callmethodChecked(var_part, "params", [0]);
      var call1635 = callmethodChecked(call1634, "size", [0]);
      var call1636 = callmethodChecked(var_paramCounts, "push", [1], call1635);
      return call1636;
    };
    var call1637 = callmethodChecked(var_prelude, "for()do", [1, 1], call1632, block1633);
    setLineNumber(431);    // compilenode string
    var string1638 = new GraceString("");
    var var_textualSignature = string1638;
    setLineNumber(432);    // compilenode identifier
    var call1639 = callmethodChecked(var_o, "signature", [0]);
    var block1640 = new GraceBlock(this, 432, 1);
    setLineNumber(1);    // compilenode identifier
    block1640.real = function(var_part) {
      setLineNumber(433);    // compilenode identifier
      var call1641 = callmethodChecked(var_part, "params", [0]);
      var call1642 = callmethodChecked(call1641, "size", [0]);
      var var_size = call1642;
      setLineNumber(434);    // compilenode identifier
      var call1643 = callmethodChecked(var_part, "name", [0]);
      var opresult1646 = callmethodChecked(var_textualSignature, "++", [1], call1643);
      var_textualSignature = opresult1646;
      var if1647 = GraceDone;
      setLineNumber(435);    // compilenode identifier
      var opresult1650 = callmethodChecked(var_size, ">", [1], new GraceNum(0));
      if (Grace_isTrue(opresult1650)) {
        setLineNumber(436);    // compilenode string
        var string1651 = new GraceString(")");
        var string1654 = new GraceString("(");
        var opresult1656 = callmethodChecked(string1654, "++", [1], var_size);
        var opresult1658 = callmethodChecked(opresult1656, "++", [1], string1651);
        var opresult1661 = callmethodChecked(var_textualSignature, "++", [1], opresult1658);
        var_textualSignature = opresult1661;
        if1647 = GraceDone;
      }
      return if1647;
    };
    var call1662 = callmethodChecked(var_prelude, "for()do", [1, 1], call1639, block1640);
    setLineNumber(439);    // compilenode block
    var block1663 = new GraceBlock(this, 439, 0);
    block1663.real = function() {
      var call1664 = callmethodChecked(var_o, "body", [0]);
      var call1665 = callmethodChecked(call1664, "first", [0]);
      var call1666 = callmethodChecked(call1665, "isIdentifier", [0]);
      return call1666;
    };
    var call1669 = callmethodChecked(var_o, "body", [0]);
    var call1670 = callmethodChecked(call1669, "size", [0]);
    var opresult1672 = callmethodChecked(call1670, "==", [1], new GraceNum(1));
    var opresult1674 = callmethodChecked(opresult1672, "&&", [1], block1663);
    var var_isSimpleAccessor = opresult1674;
    setLineNumber(440);    // compilenode array
    var array1675 = new PrimitiveGraceList([]);
    var_usedvars = array1675;
    setLineNumber(441);    // compilenode array
    var array1676 = new PrimitiveGraceList([]);
    var_declaredvars = array1676;
    setLineNumber(442);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(443);    // compilenode identifier
    var opresult1679 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult1679;
    setLineNumber(444);    // compilenode identifier
    var call1680 = callmethodChecked(var_o, "value", [0]);
    var call1681 = callmethodChecked(call1680, "value", [0]);
    onSelf = true;
    var call1682 = callmethodChecked(this, "escapestring", [1], call1681);
    var var_name = call1682;
    setLineNumber(445);    // compilenode identifier
    var opresult1685 = callmethodChecked(var_name, "++", [1], var_myc);
    var var_nm = opresult1685;
    setLineNumber(446);    // compilenode array
    var array1686 = new PrimitiveGraceList([]);
    var var_closurevars = array1686;
    setLineNumber(447);    // compilenode identifier
    var var_haveTypedParams = GraceFalse;
    setLineNumber(448);    // compilenode identifier
    var call1687 = callmethodChecked(var_o, "signature", [0]);
    var block1688 = new GraceBlock(this, 448, 1);
    setLineNumber(1);    // compilenode identifier
    block1688.real = function(var_part) {
      setLineNumber(449);    // compilenode identifier
      var call1689 = callmethodChecked(var_part, "params", [0]);
      var block1690 = new GraceBlock(this, 449, 1);
      setLineNumber(1);    // compilenode identifier
      block1690.real = function(var_p) {
        var if1691 = GraceDone;
        setLineNumber(450);    // compilenode identifier
        var call1693 = callmethodChecked(var_p, "dtype", [0]);
        var opresult1695 = callmethodChecked(call1693, "\u2260", [1], GraceFalse);
        if (Grace_isTrue(opresult1695)) {
          var if1696 = GraceDone;
          setLineNumber(453);    // compilenode string
          var string1697 = new GraceString("typeliteral");
          var call1699 = callmethodChecked(var_p, "dtype", [0]);
          var call1700 = callmethodChecked(call1699, "kind", [0]);
          var opresult1702 = callmethodChecked(call1700, "==", [1], string1697);
          setLineNumber(452);    // compilenode string
          var string1704 = new GraceString("identifier");
          var call1706 = callmethodChecked(var_p, "dtype", [0]);
          var call1707 = callmethodChecked(call1706, "kind", [0]);
          var opresult1709 = callmethodChecked(call1707, "==", [1], string1704);
          var opresult1711 = callmethodChecked(opresult1709, "||", [1], opresult1702);
          setLineNumber(451);    // compilenode string
          var string1713 = new GraceString("Unknown");
          var call1715 = callmethodChecked(var_p, "dtype", [0]);
          var call1716 = callmethodChecked(call1715, "value", [0]);
          var opresult1718 = callmethodChecked(call1716, "\u2260", [1], string1713);
          var opresult1720 = callmethodChecked(opresult1718, "&&", [1], opresult1711);
          if (Grace_isTrue(opresult1720)) {
            setLineNumber(454);    // compilenode identifier
            var_haveTypedParams = GraceTrue;
            if1696 = GraceDone;
          }
          if1691 = if1696;
        }
        return if1691;
      };
      var call1721 = callmethodChecked(var_prelude, "for()do", [1, 1], call1689, block1690);
      return call1721;
    };
    var call1722 = callmethodChecked(var_prelude, "for()do", [1, 1], call1687, block1688);
    setLineNumber(459);    // compilenode string
    var string1724 = new GraceString(" = function(argcv) {    // method ");
    var string1727 = new GraceString("var func");
    var opresult1729 = callmethodChecked(string1727, "++", [1], var_myc);
    var opresult1731 = callmethodChecked(opresult1729, "++", [1], string1724);
    var opresult1733 = callmethodChecked(opresult1731, "++", [1], var_textualSignature);
    onSelf = true;
    var call1734 = callmethodChecked(this, "out", [1], opresult1733);
    setLineNumber(460);    // compilenode call
    onSelf = true;
    var call1735 = callmethodChecked(this, "increaseindent", [0]);
    setLineNumber(461);    // compilenode string
    var string1736 = new GraceString("var returnTarget = invocationCount;");
    onSelf = true;
    var call1737 = callmethodChecked(this, "out", [1], string1736);
    setLineNumber(462);    // compilenode string
    var string1738 = new GraceString("invocationCount++;");
    onSelf = true;
    var call1739 = callmethodChecked(this, "out", [1], string1738);
    setLineNumber(463);    // compilenode string
    var string1740 = new GraceString("var curarg = 1;");
    onSelf = true;
    var call1741 = callmethodChecked(this, "out", [1], string1740);
    var if1742 = GraceDone;
    setLineNumber(464);    // compilenode identifier
    var call1743 = callmethodChecked(var_isSimpleAccessor, "not", [0]);
    var opresult1746 = callmethodChecked(var_debugMode, "&&", [1], call1743);
    if (Grace_isTrue(opresult1746)) {
      setLineNumber(465);    // compilenode string
      var string1747 = new GraceString("\");");
      var string1750 = new GraceString("var myframe = new StackFrame(\"");
      var opresult1752 = callmethodChecked(string1750, "++", [1], var_name);
      var opresult1754 = callmethodChecked(opresult1752, "++", [1], string1747);
      onSelf = true;
      var call1755 = callmethodChecked(this, "out", [1], opresult1754);
      if1742 = call1755;
    }
    setLineNumber(467);    // compilenode identifier
    var call1756 = callmethodChecked(var_o, "signature", [0]);
    var call1757 = callmethodChecked(call1756, "indices", [0]);
    var block1758 = new GraceBlock(this, 467, 1);
    setLineNumber(1);    // compilenode identifier
    block1758.real = function(var_partnr) {
      setLineNumber(468);    // compilenode identifier
      var call1759 = callmethodChecked(var_o, "signature", [0]);
      var call1760 = callmethodChecked(call1759, "at", [1], var_partnr);
      var var_part = call1760;
      setLineNumber(469);    // compilenode identifier
      var call1761 = callmethodChecked(var_part, "params", [0]);
      var block1762 = new GraceBlock(this, 469, 1);
      setLineNumber(1);    // compilenode identifier
      block1762.real = function(var_p) {
        setLineNumber(470);    // compilenode string
        var string1763 = new GraceString(" = arguments[curarg];");
        var call1765 = callmethodChecked(var_p, "value", [0]);
        onSelf = true;
        var call1766 = callmethodChecked(this, "varf", [1], call1765);
        var string1768 = new GraceString("var ");
        var opresult1770 = callmethodChecked(string1768, "++", [1], call1766);
        var opresult1772 = callmethodChecked(opresult1770, "++", [1], string1763);
        onSelf = true;
        var call1773 = callmethodChecked(this, "out", [1], opresult1772);
        setLineNumber(471);    // compilenode string
        var string1774 = new GraceString("curarg++;");
        onSelf = true;
        var call1775 = callmethodChecked(this, "out", [1], string1774);
        var if1776 = GraceDone;
        setLineNumber(472);    // compilenode identifier
        var call1777 = callmethodChecked(var_isSimpleAccessor, "not", [0]);
        var opresult1780 = callmethodChecked(var_debugMode, "&&", [1], call1777);
        if (Grace_isTrue(opresult1780)) {
          setLineNumber(473);    // compilenode string
          var string1781 = new GraceString("\",");
          var call1783 = callmethodChecked(var_p, "value", [0]);
          onSelf = true;
          var call1784 = callmethodChecked(this, "escapestring", [1], call1783);
          var string1786 = new GraceString("myframe.addVar(\"");
          var opresult1788 = callmethodChecked(string1786, "++", [1], call1784);
          var opresult1790 = callmethodChecked(opresult1788, "++", [1], string1781);
          onSelf = true;
          var call1791 = callmethodChecked(this, "out", [1], opresult1790);
          setLineNumber(474);    // compilenode string
          var string1792 = new GraceString(";});");
          var call1794 = callmethodChecked(var_p, "value", [0]);
          onSelf = true;
          var call1795 = callmethodChecked(this, "varf", [1], call1794);
          var string1797 = new GraceString("  function() {return ");
          var opresult1799 = callmethodChecked(string1797, "++", [1], call1795);
          var opresult1801 = callmethodChecked(opresult1799, "++", [1], string1792);
          onSelf = true;
          var call1802 = callmethodChecked(this, "out", [1], opresult1801);
          if1776 = call1802;
        }
        return if1776;
      };
      var call1803 = callmethodChecked(var_prelude, "for()do", [1, 1], call1761, block1762);
      var if1804 = GraceDone;
      setLineNumber(477);    // compilenode identifier
      if (Grace_isTrue(var_emitArgChecks)) {
        setLineNumber(478);    // compilenode string
        var string1805 = new GraceString(")");
        var call1807 = callmethodChecked(var_part, "params", [0]);
        var call1808 = callmethodChecked(call1807, "size", [0]);
        var string1810 = new GraceString("] !== ");
        var diff1814 = callmethodChecked(var_partnr, "-", [1], new GraceNum(1));
        var string1816 = new GraceString("if (argcv[");
        var opresult1818 = callmethodChecked(string1816, "++", [1], diff1814);
        var opresult1820 = callmethodChecked(opresult1818, "++", [1], string1810);
        var opresult1822 = callmethodChecked(opresult1820, "++", [1], call1808);
        var opresult1824 = callmethodChecked(opresult1822, "++", [1], string1805);
        onSelf = true;
        var call1825 = callmethodChecked(this, "out", [1], opresult1824);
        var if1826 = GraceDone;
        setLineNumber(479);    // compilenode identifier
        var call1828 = callmethodChecked(var_o, "signature", [0]);
        var call1829 = callmethodChecked(call1828, "size", [0]);
        var opresult1831 = callmethodChecked(call1829, "<", [1], new GraceNum(2));
        if (Grace_isTrue(opresult1831)) {
          setLineNumber(480);    // compilenode identifier
          if1826 = var_textualSignature;
        } else {
          setLineNumber(482);    // compilenode string
          var string1832 = new GraceString("");
          var string1835 = new GraceString(") of ");
          var string1838 = new GraceString(" (arg list ");
          var call1840 = callmethodChecked(var_part, "name", [0]);
          var string1842 = new GraceString("");
          var opresult1844 = callmethodChecked(string1842, "++", [1], call1840);
          var opresult1846 = callmethodChecked(opresult1844, "++", [1], string1838);
          var opresult1848 = callmethodChecked(opresult1846, "++", [1], var_partnr);
          var opresult1850 = callmethodChecked(opresult1848, "++", [1], string1835);
          var opresult1852 = callmethodChecked(opresult1850, "++", [1], var_textualSignature);
          var opresult1854 = callmethodChecked(opresult1852, "++", [1], string1832);
          if1826 = opresult1854;
        }
        var var_msgSuffix = if1826;
        setLineNumber(486);    // compilenode string
        var string1855 = new GraceString("\"));");
        setLineNumber(485);    // compilenode string
        var string1858 = new GraceString("GraceString(\"wrong number of arguments for ");
        setLineNumber(484);    // compilenode string
        var string1860 = new GraceString("  throw new GraceExceptionPacket(ProgrammingErrorObject, new ");
        var opresult1862 = callmethodChecked(string1860, "++", [1], string1858);
        var opresult1864 = callmethodChecked(opresult1862, "++", [1], var_msgSuffix);
        var opresult1866 = callmethodChecked(opresult1864, "++", [1], string1855);
        onSelf = true;
        var call1867 = callmethodChecked(this, "out", [1], opresult1866);
        if1804 = call1867;
      }
      return if1804;
    };
    var call1868 = callmethodChecked(var_prelude, "for()do", [1, 1], call1757, block1758);
    var if1869 = GraceDone;
    setLineNumber(489);    // compilenode identifier
    var call1871 = callmethodChecked(var_o, "typeParams", [0]);
    var opresult1873 = callmethodChecked(call1871, "\u2260", [1], GraceFalse);
    if (Grace_isTrue(opresult1873)) {
      setLineNumber(490);    // compilenode identifier
      var call1874 = callmethodChecked(var_o, "signature", [0]);
      var call1875 = callmethodChecked(call1874, "size", [0]);
      var var_sz = call1875;
      setLineNumber(491);    // compilenode string
      var string1876 = new GraceString("// Start type arguments");
      onSelf = true;
      var call1877 = callmethodChecked(this, "out", [1], string1876);
      setLineNumber(492);    // compilenode block
      var block1878 = new GraceBlock(this, 492, 1);
      setLineNumber(1);    // compilenode identifier
      block1878.real = function(var_g) {
        setLineNumber(493);    // compilenode string
        var string1879 = new GraceString(" = var_Unknown;");
        var call1881 = callmethodChecked(var_g, "value", [0]);
        onSelf = true;
        var call1882 = callmethodChecked(this, "varf", [1], call1881);
        var string1884 = new GraceString("var ");
        var opresult1886 = callmethodChecked(string1884, "++", [1], call1882);
        var opresult1888 = callmethodChecked(opresult1886, "++", [1], string1879);
        onSelf = true;
        var call1889 = callmethodChecked(this, "out", [1], opresult1888);
        return call1889;
      };
      setLineNumber(492);    // compilenode identifier
      var call1890 = callmethodChecked(var_o, "typeParams", [0]);
      var call1891 = callmethodChecked(call1890, "do", [1], block1878);
      setLineNumber(495);    // compilenode string
      var string1892 = new GraceString(") {");
      var opresult1896 = callmethodChecked(new GraceNum(1), "+", [1], var_sz);
      var string1898 = new GraceString("if (argcv.length == ");
      var opresult1900 = callmethodChecked(string1898, "++", [1], opresult1896);
      var opresult1902 = callmethodChecked(opresult1900, "++", [1], string1892);
      onSelf = true;
      var call1903 = callmethodChecked(this, "out", [1], opresult1902);
      var if1904 = GraceDone;
      setLineNumber(496);    // compilenode identifier
      if (Grace_isTrue(var_emitArgChecks)) {
        setLineNumber(497);    // compilenode string
        var string1905 = new GraceString(") {");
        var call1907 = callmethodChecked(var_o, "typeParams", [0]);
        var call1908 = callmethodChecked(call1907, "size", [0]);
        var string1910 = new GraceString("] !== ");
        var string1913 = new GraceString("  if (argcv[");
        var opresult1915 = callmethodChecked(string1913, "++", [1], var_sz);
        var opresult1917 = callmethodChecked(opresult1915, "++", [1], string1910);
        var opresult1919 = callmethodChecked(opresult1917, "++", [1], call1908);
        var opresult1921 = callmethodChecked(opresult1919, "++", [1], string1905);
        onSelf = true;
        var call1922 = callmethodChecked(this, "out", [1], opresult1921);
        setLineNumber(498);    // compilenode string
        var string1923 = new GraceString("    throw new GraceExceptionPacket(ProgrammingErrorObject, ");
        onSelf = true;
        var call1924 = callmethodChecked(this, "out", [1], string1923);
        setLineNumber(499);    // compilenode string
        var string1925 = new GraceString("\"));");
        var string1928 = new GraceString("        new GraceString(\"wrong number of type arguments for ");
        var opresult1930 = callmethodChecked(string1928, "++", [1], var_textualSignature);
        var opresult1932 = callmethodChecked(opresult1930, "++", [1], string1925);
        onSelf = true;
        var call1933 = callmethodChecked(this, "out", [1], opresult1932);
        setLineNumber(500);    // compilenode string
        var string1934 = new GraceString("  }");
        onSelf = true;
        var call1935 = callmethodChecked(this, "out", [1], string1934);
        if1904 = call1935;
      }
      setLineNumber(502);    // compilenode block
      var block1936 = new GraceBlock(this, 502, 1);
      setLineNumber(1);    // compilenode identifier
      block1936.real = function(var_g) {
        setLineNumber(503);    // compilenode string
        var string1937 = new GraceString(" = arguments[curarg++];");
        var call1939 = callmethodChecked(var_g, "value", [0]);
        onSelf = true;
        var call1940 = callmethodChecked(this, "varf", [1], call1939);
        var string1942 = new GraceString("  ");
        var opresult1944 = callmethodChecked(string1942, "++", [1], call1940);
        var opresult1946 = callmethodChecked(opresult1944, "++", [1], string1937);
        onSelf = true;
        var call1947 = callmethodChecked(this, "out", [1], opresult1946);
        return call1947;
      };
      setLineNumber(502);    // compilenode identifier
      var call1948 = callmethodChecked(var_o, "typeParams", [0]);
      var call1949 = callmethodChecked(call1948, "do", [1], block1936);
      setLineNumber(505);    // compilenode string
      var string1950 = new GraceString("}");
      onSelf = true;
      var call1951 = callmethodChecked(this, "out", [1], string1950);
      setLineNumber(506);    // compilenode string
      var string1952 = new GraceString("// End type arguments");
      onSelf = true;
      var call1953 = callmethodChecked(this, "out", [1], string1952);
      if1869 = call1953;
    }
    var if1954 = GraceDone;
    setLineNumber(508);    // compilenode identifier
    var call1955 = callmethodChecked(var_o, "needsArgChecks", [0]);
    var opresult1958 = callmethodChecked(var_emitTypeChecks, "&&", [1], call1955);
    if (Grace_isTrue(opresult1958)) {
      setLineNumber(509);    // compilenode string
      var string1959 = new GraceString("// Start argument checking");
      onSelf = true;
      var call1960 = callmethodChecked(this, "out", [1], string1959);
      setLineNumber(510);    // compilenode string
      var string1961 = new GraceString("curarg = 1;");
      onSelf = true;
      var call1962 = callmethodChecked(this, "out", [1], string1961);
      setLineNumber(511);    // compilenode identifier
      var call1963 = callmethodChecked(var_o, "signature", [0]);
      var call1964 = callmethodChecked(call1963, "indices", [0]);
      var block1965 = new GraceBlock(this, 511, 1);
      setLineNumber(1);    // compilenode identifier
      block1965.real = function(var_partnr) {
        setLineNumber(512);    // compilenode identifier
        var call1966 = callmethodChecked(var_o, "signature", [0]);
        var call1967 = callmethodChecked(call1966, "at", [1], var_partnr);
        var var_part = call1967;
        setLineNumber(513);    // compilenode num
        var var_paramnr = new GraceNum(0);
        setLineNumber(514);    // compilenode identifier
        var call1968 = callmethodChecked(var_part, "params", [0]);
        var block1969 = new GraceBlock(this, 514, 1);
        setLineNumber(1);    // compilenode identifier
        block1969.real = function(var_p) {
          setLineNumber(515);    // compilenode identifier
          var opresult1972 = callmethodChecked(var_paramnr, "+", [1], new GraceNum(1));
          var_paramnr = opresult1972;
          var if1973 = GraceDone;
          setLineNumber(516);    // compilenode identifier
          var call1975 = callmethodChecked(var_p, "dtype", [0]);
          var opresult1977 = callmethodChecked(call1975, "\u2260", [1], GraceFalse);
          var opresult1980 = callmethodChecked(var_emitTypeChecks, "&&", [1], opresult1977);
          if (Grace_isTrue(opresult1980)) {
            setLineNumber(517);    // compilenode identifier
            var call1981 = callmethodChecked(var_o, "line", [0]);
            var string1982 = new GraceString("argument check in compilemethod");
            onSelf = true;
            var call1983 = callmethodChecked(this, "noteLineNumber()comment", [1, 1], call1981, string1982);
            setLineNumber(518);    // compilenode identifier
            var call1984 = callmethodChecked(var_p, "dtype", [0]);
            onSelf = true;
            var call1985 = callmethodChecked(this, "compilenode", [1], call1984);
            var var_dtype = call1985;
            setLineNumber(520);    // compilenode string
            var string1986 = new GraceString("  [1], arguments[curarg])))");
            setLineNumber(519);    // compilenode string
            var string1988 = new GraceString(", \"match\",");
            var string1991 = new GraceString("if (!Grace_isTrue(callmethod(");
            var opresult1993 = callmethodChecked(string1991, "++", [1], var_dtype);
            var opresult1995 = callmethodChecked(opresult1993, "++", [1], string1988);
            var opresult1997 = callmethodChecked(opresult1995, "++", [1], string1986);
            onSelf = true;
            var call1998 = callmethodChecked(this, "out", [1], opresult1997);
            setLineNumber(521);    // compilenode string
            var string1999 = new GraceString("    throw new GraceExceptionPacket(TypeErrorObject,");
            onSelf = true;
            var call2000 = callmethodChecked(this, "out", [1], string1999);
            setLineNumber(522);    // compilenode string
            var string2001 = new GraceString(", does not have \" + ");
            var call2003 = callmethodChecked(var_p, "value", [0]);
            var string2005 = new GraceString("), which corresponds to parameter ");
            var string2008 = new GraceString(" (arg list ");
            var call2010 = callmethodChecked(var_part, "name", [0]);
            var string2012 = new GraceString(" in ");
            var string2015 = new GraceString("        new GraceString(\"argument ");
            var opresult2017 = callmethodChecked(string2015, "++", [1], var_paramnr);
            var opresult2019 = callmethodChecked(opresult2017, "++", [1], string2012);
            var opresult2021 = callmethodChecked(opresult2019, "++", [1], call2010);
            var opresult2023 = callmethodChecked(opresult2021, "++", [1], string2008);
            var opresult2025 = callmethodChecked(opresult2023, "++", [1], var_partnr);
            var opresult2027 = callmethodChecked(opresult2025, "++", [1], string2005);
            var opresult2029 = callmethodChecked(opresult2027, "++", [1], call2003);
            var opresult2031 = callmethodChecked(opresult2029, "++", [1], string2001);
            onSelf = true;
            var call2032 = callmethodChecked(this, "out", [1], opresult2031);
            setLineNumber(523);    // compilenode string
            var string2033 = new GraceString(", \"asString\", [0])._value + \".\"));");
            var string2036 = new GraceString("            callmethod(");
            var opresult2038 = callmethodChecked(string2036, "++", [1], var_dtype);
            var opresult2040 = callmethodChecked(opresult2038, "++", [1], string2033);
            onSelf = true;
            var call2041 = callmethodChecked(this, "out", [1], opresult2040);
            if1973 = call2041;
          }
          setLineNumber(525);    // compilenode string
          var string2042 = new GraceString("curarg++;");
          onSelf = true;
          var call2043 = callmethodChecked(this, "out", [1], string2042);
          return call2043;
        };
        var call2044 = callmethodChecked(var_prelude, "for()do", [1, 1], call1968, block1969);
        return call2044;
      };
      var call2045 = callmethodChecked(var_prelude, "for()do", [1, 1], call1964, block1965);
      setLineNumber(528);    // compilenode string
      var string2046 = new GraceString("// End argument checking");
      onSelf = true;
      var call2047 = callmethodChecked(this, "out", [1], string2046);
      if1954 = call2047;
    }
    setLineNumber(534);    // compilenode string
    var string2048 = new GraceString("\");");
    var string2051 = new GraceString("setModuleName(\"");
    var opresult2053 = callmethodChecked(string2051, "++", [1], var_modname);
    var opresult2055 = callmethodChecked(opresult2053, "++", [1], string2048);
    onSelf = true;
    var call2056 = callmethodChecked(this, "out", [1], opresult2055);
    var if2057 = GraceDone;
    setLineNumber(535);    // compilenode identifier
    if (Grace_isTrue(var_isSimpleAccessor)) {
      setLineNumber(536);    // compilenode string
      var string2058 = new GraceString(" is a simple accessor - elide try ... catch");
      var string2061 = new GraceString("// ");
      var opresult2063 = callmethodChecked(string2061, "++", [1], var_textualSignature);
      var opresult2065 = callmethodChecked(opresult2063, "++", [1], string2058);
      onSelf = true;
      var call2066 = callmethodChecked(this, "out", [1], opresult2065);
      setLineNumber(537);    // compilenode identifier
      var call2067 = callmethodChecked(var_o, "body", [0]);
      var call2068 = callmethodChecked(call2067, "at", [1], new GraceNum(1));
      onSelf = true;
      var call2069 = callmethodChecked(this, "compilenode", [1], call2068);
      var var_ret = call2069;
      setLineNumber(538);    // compilenode string
      var string2070 = new GraceString(";");
      var string2073 = new GraceString("return ");
      var opresult2075 = callmethodChecked(string2073, "++", [1], var_ret);
      var opresult2077 = callmethodChecked(opresult2075, "++", [1], string2070);
      onSelf = true;
      var call2078 = callmethodChecked(this, "out", [1], opresult2077);
      if2057 = call2078;
    } else {
      var if2079 = GraceDone;
      setLineNumber(540);    // compilenode identifier
      if (Grace_isTrue(var_debugMode)) {
        setLineNumber(541);    // compilenode string
        var string2080 = new GraceString("stackFrames.push(myframe);");
        onSelf = true;
        var call2081 = callmethodChecked(this, "out", [1], string2080);
        setLineNumber(542);    // compilenode string
        var string2082 = new GraceString("try {");
        onSelf = true;
        var call2083 = callmethodChecked(this, "out", [1], string2082);
        setLineNumber(543);    // compilenode call
        onSelf = true;
        var call2084 = callmethodChecked(this, "increaseindent", [0]);
        if2079 = call2084;
      }
      setLineNumber(545);    // compilenode string
      var string2085 = new GraceString("GraceDone");
      var var_ret = string2085;
      setLineNumber(546);    // compilenode identifier
      var call2086 = callmethodChecked(var_o, "line", [0]);
      var var_lastLine = call2086;
      setLineNumber(547);    // compilenode identifier
      var call2087 = callmethodChecked(var_o, "body", [0]);
      var block2088 = new GraceBlock(this, 547, 1);
      setLineNumber(1);    // compilenode identifier
      block2088.real = function(var_l) {
        setLineNumber(548);    // compilenode identifier
        onSelf = true;
        var call2089 = callmethodChecked(this, "compilenode", [1], var_l);
        var_ret = call2089;
        setLineNumber(549);    // compilenode identifier
        var call2090 = callmethodChecked(var_l, "line", [0]);
        var_lastLine = call2090;
        return GraceDone;
      };
      var call2091 = callmethodChecked(var_prelude, "for()do", [1, 1], call2087, block2088);
      var if2092 = GraceDone;
      setLineNumber(551);    // compilenode string
      var string2093 = new GraceString("undefined");
      var opresult2096 = callmethodChecked(var_ret, "\u2260", [1], string2093);
      if (Grace_isTrue(opresult2096)) {
        var if2097 = GraceDone;
        setLineNumber(552);    // compilenode identifier
        var call2099 = callmethodChecked(var_o, "dtype", [0]);
        var opresult2101 = callmethodChecked(call2099, "\u2260", [1], GraceFalse);
        var opresult2104 = callmethodChecked(var_emitTypeChecks, "&&", [1], opresult2101);
        if (Grace_isTrue(opresult2104)) {
          setLineNumber(553);    // compilenode identifier
          var call2105 = callmethodChecked(var_o, "dtype", [0]);
          onSelf = true;
          var call2106 = callmethodChecked(this, "compilenode", [1], call2105);
          var var_dtype = call2106;
          setLineNumber(554);    // compilenode string
          var string2107 = new GraceString("return value");
          onSelf = true;
          var call2108 = callmethodChecked(this, "noteLineNumber()comment", [1, 1], var_lastLine, string2107);
          setLineNumber(555);    // compilenode string
          var string2109 = new GraceString(")))");
          var string2112 = new GraceString(", \"match\", [1], ");
          var string2115 = new GraceString("if (!Grace_isTrue(callmethod(");
          var opresult2117 = callmethodChecked(string2115, "++", [1], var_dtype);
          var opresult2119 = callmethodChecked(opresult2117, "++", [1], string2112);
          var opresult2121 = callmethodChecked(opresult2119, "++", [1], var_ret);
          var opresult2123 = callmethodChecked(opresult2121, "++", [1], string2109);
          onSelf = true;
          var call2124 = callmethodChecked(this, "out", [1], opresult2123);
          setLineNumber(556);    // compilenode string
          var string2125 = new GraceString("    throw new GraceExceptionPacket(TypeErrorObject,");
          onSelf = true;
          var call2126 = callmethodChecked(this, "out", [1], string2125);
          setLineNumber(557);    // compilenode string
          var string2127 = new GraceString(" does not have \" + ");
          var string2130 = new GraceString("        new GraceString(\"result of method ");
          var opresult2132 = callmethodChecked(string2130, "++", [1], var_textualSignature);
          var opresult2134 = callmethodChecked(opresult2132, "++", [1], string2127);
          onSelf = true;
          var call2135 = callmethodChecked(this, "out", [1], opresult2134);
          setLineNumber(558);    // compilenode string
          var string2136 = new GraceString(", \"asString\", [0])._value + \".\"));");
          var string2139 = new GraceString("            callmethod(");
          var opresult2141 = callmethodChecked(string2139, "++", [1], var_dtype);
          var opresult2143 = callmethodChecked(opresult2141, "++", [1], string2136);
          onSelf = true;
          var call2144 = callmethodChecked(this, "out", [1], opresult2143);
          if2097 = call2144;
        }
        setLineNumber(560);    // compilenode string
        var string2145 = new GraceString(";");
        var string2148 = new GraceString("return ");
        var opresult2150 = callmethodChecked(string2148, "++", [1], var_ret);
        var opresult2152 = callmethodChecked(opresult2150, "++", [1], string2145);
        onSelf = true;
        var call2153 = callmethodChecked(this, "out", [1], opresult2152);
        if2092 = call2153;
      }
      var if2154 = GraceDone;
      setLineNumber(562);    // compilenode identifier
      if (Grace_isTrue(var_debugMode)) {
        setLineNumber(563);    // compilenode call
        onSelf = true;
        var call2155 = callmethodChecked(this, "decreaseindent", [0]);
        setLineNumber(564);    // compilenode string
        var string2156 = new GraceString("} finally {");
        onSelf = true;
        var call2157 = callmethodChecked(this, "out", [1], string2156);
        setLineNumber(565);    // compilenode string
        var string2158 = new GraceString("    stackFrames.pop();");
        onSelf = true;
        var call2159 = callmethodChecked(this, "out", [1], string2158);
        setLineNumber(566);    // compilenode string
        var string2160 = new GraceString("}");
        onSelf = true;
        var call2161 = callmethodChecked(this, "out", [1], string2160);
        if2154 = call2161;
      }
      if2057 = if2154;
    }
    setLineNumber(569);    // compilenode call
    onSelf = true;
    var call2162 = callmethodChecked(this, "decreaseindent", [0]);
    setLineNumber(570);    // compilenode string
    var string2163 = new GraceString("};");
    onSelf = true;
    var call2164 = callmethodChecked(this, "out", [1], string2163);
    setLineNumber(571);    // compilenode identifier
    var_usedvars = var_oldusedvars;
    setLineNumber(572);    // compilenode identifier
    var_declaredvars = var_olddeclaredvars;
    var if2165 = GraceDone;
    setLineNumber(573);    // compilenode identifier
    if (Grace_isTrue(var_haveTypedParams)) {
      setLineNumber(574);    // compilenode string
      var string2166 = new GraceString("");
      var string2169 = new GraceString("func");
      var opresult2171 = callmethodChecked(string2169, "++", [1], var_myc);
      var opresult2173 = callmethodChecked(opresult2171, "++", [1], string2166);
      onSelf = true;
      var call2174 = callmethodChecked(this, "compilemethodtypes", [2], opresult2173, var_o);
      if2165 = call2174;
    }
    var if2175 = GraceDone;
    setLineNumber(576);    // compilenode identifier
    var call2176 = callmethodChecked(var_o, "isConfidential", [0]);
    if (Grace_isTrue(call2176)) {
      setLineNumber(577);    // compilenode string
      var string2177 = new GraceString(".confidential = true;");
      var string2180 = new GraceString("func");
      var opresult2182 = callmethodChecked(string2180, "++", [1], var_myc);
      var opresult2184 = callmethodChecked(opresult2182, "++", [1], string2177);
      onSelf = true;
      var call2185 = callmethodChecked(this, "out", [1], opresult2184);
      if2175 = call2185;
    }
    setLineNumber(579);    // compilenode string
    var string2186 = new GraceString(";");
    var string2189 = new GraceString(".paramCounts = ");
    var string2192 = new GraceString("func");
    var opresult2194 = callmethodChecked(string2192, "++", [1], var_myc);
    var opresult2196 = callmethodChecked(opresult2194, "++", [1], string2189);
    var opresult2198 = callmethodChecked(opresult2196, "++", [1], var_paramCounts);
    var opresult2200 = callmethodChecked(opresult2198, "++", [1], string2186);
    onSelf = true;
    var call2201 = callmethodChecked(this, "out", [1], opresult2200);
    setLineNumber(580);    // compilenode string
    var string2202 = new GraceString(";");
    var string2205 = new GraceString("\"] = func");
    var string2208 = new GraceString(".methods[\"");
    var string2211 = new GraceString("");
    var opresult2213 = callmethodChecked(string2211, "++", [1], var_selfobj);
    var opresult2215 = callmethodChecked(opresult2213, "++", [1], string2208);
    var opresult2217 = callmethodChecked(opresult2215, "++", [1], var_name);
    var opresult2219 = callmethodChecked(opresult2217, "++", [1], string2205);
    var opresult2221 = callmethodChecked(opresult2219, "++", [1], var_myc);
    var opresult2223 = callmethodChecked(opresult2221, "++", [1], string2202);
    onSelf = true;
    var call2224 = callmethodChecked(this, "out", [1], opresult2223);
    setLineNumber(581);    // compilenode string
    var string2225 = new GraceString(";");
    var call2227 = callmethodChecked(var_o, "line", [0]);
    var string2229 = new GraceString(".definitionLine = ");
    var string2232 = new GraceString("func");
    var opresult2234 = callmethodChecked(string2232, "++", [1], var_myc);
    var opresult2236 = callmethodChecked(opresult2234, "++", [1], string2229);
    var opresult2238 = callmethodChecked(opresult2236, "++", [1], call2227);
    var opresult2240 = callmethodChecked(opresult2238, "++", [1], string2225);
    onSelf = true;
    var call2241 = callmethodChecked(this, "out", [1], opresult2240);
    setLineNumber(582);    // compilenode string
    var string2242 = new GraceString("\";");
    var string2245 = new GraceString(".definitionModule = \"");
    var string2248 = new GraceString("func");
    var opresult2250 = callmethodChecked(string2248, "++", [1], var_myc);
    var opresult2252 = callmethodChecked(opresult2250, "++", [1], string2245);
    var opresult2254 = callmethodChecked(opresult2252, "++", [1], var_modname);
    var opresult2256 = callmethodChecked(opresult2254, "++", [1], string2242);
    onSelf = true;
    var call2257 = callmethodChecked(this, "out", [1], opresult2256);
    setLineNumber(583);    // compilenode string
    var string2258 = new GraceString("");
    var string2261 = new GraceString("func");
    var opresult2263 = callmethodChecked(string2261, "++", [1], var_myc);
    var opresult2265 = callmethodChecked(opresult2263, "++", [1], string2258);
    var call2266 = callmethodChecked(var_o, "register:=", [1], opresult2265);
    var if2267 = GraceDone;
    setLineNumber(584);    // compilenode identifier
    var call2268 = callmethodChecked(var_o, "isFresh", [0]);
    if (Grace_isTrue(call2268)) {
      setLineNumber(585);    // compilenode call
      onSelf = true;
      var call2269 = callmethodChecked(this, "increaseindent", [0]);
      setLineNumber(586);    // compilenode identifier
      onSelf = true;
      var call2270 = callmethodChecked(this, "compilefreshmethod", [2], var_o, var_selfobj);
      setLineNumber(587);    // compilenode call
      onSelf = true;
      var call2271 = callmethodChecked(this, "decreaseindent", [0]);
      if2267 = call2271;
    }
    return if2267;
  };
  func1630.paramCounts = [2];
  this.methods["compilemethod"] = func1630;
  func1630.definitionLine = 424;
  func1630.definitionModule = "genjs";
  setLineNumber(590);    // compilenode method
  var func2272 = function(argcv) {    // method compilefreshmethod(2)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_selfobj = arguments[curarg];
    curarg++;
    if (argcv[0] !== 2)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compilefreshmethod(2)"));
    setModuleName("genjs");
    setLineNumber(591);    // compilenode array
    var array2273 = new PrimitiveGraceList([]);
    var var_paramCounts = array2273;
    setLineNumber(592);    // compilenode identifier
    var call2274 = callmethodChecked(var_o, "signature", [0]);
    var block2275 = new GraceBlock(this, 592, 1);
    setLineNumber(1);    // compilenode identifier
    block2275.real = function(var_part) {
      setLineNumber(593);    // compilenode identifier
      var call2276 = callmethodChecked(var_part, "params", [0]);
      var call2277 = callmethodChecked(call2276, "size", [0]);
      var call2278 = callmethodChecked(var_paramCounts, "push", [1], call2277);
      return call2278;
    };
    var call2279 = callmethodChecked(var_prelude, "for()do", [1, 1], call2274, block2275);
    setLineNumber(595);    // compilenode string
    var string2280 = new GraceString("");
    var var_textualSignature = string2280;
    setLineNumber(596);    // compilenode identifier
    var call2281 = callmethodChecked(var_o, "signature", [0]);
    var block2282 = new GraceBlock(this, 596, 1);
    setLineNumber(1);    // compilenode identifier
    block2282.real = function(var_part) {
      setLineNumber(597);    // compilenode identifier
      var call2283 = callmethodChecked(var_part, "params", [0]);
      var call2284 = callmethodChecked(call2283, "size", [0]);
      var var_size = call2284;
      setLineNumber(598);    // compilenode identifier
      var call2285 = callmethodChecked(var_part, "name", [0]);
      var opresult2288 = callmethodChecked(var_textualSignature, "++", [1], call2285);
      var_textualSignature = opresult2288;
      var if2289 = GraceDone;
      setLineNumber(599);    // compilenode identifier
      var opresult2292 = callmethodChecked(var_size, ">", [1], new GraceNum(0));
      if (Grace_isTrue(opresult2292)) {
        setLineNumber(600);    // compilenode string
        var string2293 = new GraceString("     )");
        var string2296 = new GraceString("(");
        var opresult2298 = callmethodChecked(string2296, "++", [1], var_size);
        var opresult2300 = callmethodChecked(opresult2298, "++", [1], string2293);
        var opresult2303 = callmethodChecked(var_textualSignature, "++", [1], opresult2300);
        var_textualSignature = opresult2303;
        if2289 = GraceDone;
      }
      return if2289;
    };
    var call2304 = callmethodChecked(var_prelude, "for()do", [1, 1], call2281, block2282);
    setLineNumber(603);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(604);    // compilenode identifier
    var opresult2307 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult2307;
    setLineNumber(605);    // compilenode identifier
    var call2308 = callmethodChecked(var_o, "value", [0]);
    var call2309 = callmethodChecked(call2308, "value", [0]);
    onSelf = true;
    var call2310 = callmethodChecked(this, "escapestring", [1], call2309);
    var var_name = call2310;
    setLineNumber(606);    // compilenode identifier
    var opresult2313 = callmethodChecked(var_name, "++", [1], var_myc);
    var var_nm = opresult2313;
    setLineNumber(607);    // compilenode identifier
    var var_haveTypedParams = GraceFalse;
    setLineNumber(608);    // compilenode identifier
    var call2314 = callmethodChecked(var_o, "signature", [0]);
    var block2315 = new GraceBlock(this, 608, 1);
    setLineNumber(1);    // compilenode identifier
    block2315.real = function(var_part) {
      setLineNumber(609);    // compilenode identifier
      var call2316 = callmethodChecked(var_part, "params", [0]);
      var block2317 = new GraceBlock(this, 609, 1);
      setLineNumber(1);    // compilenode identifier
      block2317.real = function(var_p) {
        var if2318 = GraceDone;
        setLineNumber(610);    // compilenode identifier
        var call2320 = callmethodChecked(var_p, "dtype", [0]);
        var opresult2322 = callmethodChecked(call2320, "\u2260", [1], GraceFalse);
        if (Grace_isTrue(opresult2322)) {
          var if2323 = GraceDone;
          setLineNumber(613);    // compilenode string
          var string2324 = new GraceString("typeliteral");
          var call2326 = callmethodChecked(var_p, "dtype", [0]);
          var call2327 = callmethodChecked(call2326, "kind", [0]);
          var opresult2329 = callmethodChecked(call2327, "==", [1], string2324);
          setLineNumber(612);    // compilenode string
          var string2331 = new GraceString("identifier");
          var call2333 = callmethodChecked(var_p, "dtype", [0]);
          var call2334 = callmethodChecked(call2333, "kind", [0]);
          var opresult2336 = callmethodChecked(call2334, "==", [1], string2331);
          var opresult2338 = callmethodChecked(opresult2336, "||", [1], opresult2329);
          setLineNumber(611);    // compilenode string
          var string2340 = new GraceString("Unknown");
          var call2342 = callmethodChecked(var_p, "dtype", [0]);
          var call2343 = callmethodChecked(call2342, "value", [0]);
          var opresult2345 = callmethodChecked(call2343, "\u2260", [1], string2340);
          var opresult2347 = callmethodChecked(opresult2345, "&&", [1], opresult2338);
          if (Grace_isTrue(opresult2347)) {
            setLineNumber(614);    // compilenode identifier
            var_haveTypedParams = GraceTrue;
            if2323 = GraceDone;
          }
          if2318 = if2323;
        }
        return if2318;
      };
      var call2348 = callmethodChecked(var_prelude, "for()do", [1, 1], call2316, block2317);
      return call2348;
    };
    var call2349 = callmethodChecked(var_prelude, "for()do", [1, 1], call2314, block2315);
    setLineNumber(619);    // compilenode string
    var string2350 = new GraceString("()object");
    var string2353 = new GraceString(" = function(argcv) {    // method ");
    var string2356 = new GraceString("var func");
    var opresult2358 = callmethodChecked(string2356, "++", [1], var_myc);
    var opresult2360 = callmethodChecked(opresult2358, "++", [1], string2353);
    var opresult2362 = callmethodChecked(opresult2360, "++", [1], var_textualSignature);
    var opresult2364 = callmethodChecked(opresult2362, "++", [1], string2350);
    onSelf = true;
    var call2365 = callmethodChecked(this, "out", [1], opresult2364);
    setLineNumber(620);    // compilenode call
    onSelf = true;
    var call2366 = callmethodChecked(this, "increaseindent", [0]);
    setLineNumber(621);    // compilenode string
    var string2367 = new GraceString("var curarg = 1;");
    onSelf = true;
    var call2368 = callmethodChecked(this, "out", [1], string2367);
    setLineNumber(622);    // compilenode identifier
    var call2369 = callmethodChecked(var_o, "signature", [0]);
    var call2370 = callmethodChecked(call2369, "indices", [0]);
    var block2371 = new GraceBlock(this, 622, 1);
    setLineNumber(1);    // compilenode identifier
    block2371.real = function(var_partnr) {
      setLineNumber(623);    // compilenode identifier
      var call2372 = callmethodChecked(var_o, "signature", [0]);
      var call2373 = callmethodChecked(call2372, "at", [1], var_partnr);
      var var_part = call2373;
      setLineNumber(624);    // compilenode identifier
      var call2374 = callmethodChecked(var_part, "params", [0]);
      var block2375 = new GraceBlock(this, 624, 1);
      setLineNumber(1);    // compilenode identifier
      block2375.real = function(var_p) {
        setLineNumber(625);    // compilenode string
        var string2376 = new GraceString(" = arguments[curarg];");
        var call2378 = callmethodChecked(var_p, "value", [0]);
        onSelf = true;
        var call2379 = callmethodChecked(this, "varf", [1], call2378);
        var string2381 = new GraceString("var ");
        var opresult2383 = callmethodChecked(string2381, "++", [1], call2379);
        var opresult2385 = callmethodChecked(opresult2383, "++", [1], string2376);
        onSelf = true;
        var call2386 = callmethodChecked(this, "out", [1], opresult2385);
        setLineNumber(626);    // compilenode string
        var string2387 = new GraceString("curarg++;");
        onSelf = true;
        var call2388 = callmethodChecked(this, "out", [1], string2387);
        return call2388;
      };
      var call2389 = callmethodChecked(var_prelude, "for()do", [1, 1], call2374, block2375);
      return call2389;
    };
    var call2390 = callmethodChecked(var_prelude, "for()do", [1, 1], call2370, block2371);
    setLineNumber(629);    // compilenode string
    var string2391 = new GraceString("var inheritingObject = arguments[curarg++];");
    onSelf = true;
    var call2392 = callmethodChecked(this, "out", [1], string2391);
    var if2393 = GraceDone;
    setLineNumber(630);    // compilenode identifier
    var call2395 = callmethodChecked(var_o, "typeParams", [0]);
    var opresult2397 = callmethodChecked(call2395, "\u2260", [1], GraceFalse);
    if (Grace_isTrue(opresult2397)) {
      setLineNumber(631);    // compilenode identifier
      var call2399 = callmethodChecked(var_o, "signature", [0]);
      var call2400 = callmethodChecked(call2399, "size", [0]);
      var opresult2402 = callmethodChecked(call2400, "+", [1], new GraceNum(1));
      var var_sz = opresult2402;
      setLineNumber(632);    // compilenode string
      var string2403 = new GraceString("// Start type arguments");
      onSelf = true;
      var call2404 = callmethodChecked(this, "out", [1], string2403);
      setLineNumber(633);    // compilenode block
      var block2405 = new GraceBlock(this, 633, 1);
      setLineNumber(1);    // compilenode identifier
      block2405.real = function(var_g) {
        setLineNumber(634);    // compilenode string
        var string2406 = new GraceString(" = var_Unknown;");
        var call2408 = callmethodChecked(var_g, "value", [0]);
        onSelf = true;
        var call2409 = callmethodChecked(this, "varf", [1], call2408);
        var string2411 = new GraceString("var ");
        var opresult2413 = callmethodChecked(string2411, "++", [1], call2409);
        var opresult2415 = callmethodChecked(opresult2413, "++", [1], string2406);
        onSelf = true;
        var call2416 = callmethodChecked(this, "out", [1], opresult2415);
        return call2416;
      };
      setLineNumber(633);    // compilenode identifier
      var call2417 = callmethodChecked(var_o, "typeParams", [0]);
      var call2418 = callmethodChecked(call2417, "do", [1], block2405);
      setLineNumber(636);    // compilenode string
      var string2419 = new GraceString(") {");
      var opresult2423 = callmethodChecked(new GraceNum(1), "+", [1], var_sz);
      var string2425 = new GraceString("if (argcv.length == ");
      var opresult2427 = callmethodChecked(string2425, "++", [1], opresult2423);
      var opresult2429 = callmethodChecked(opresult2427, "++", [1], string2419);
      onSelf = true;
      var call2430 = callmethodChecked(this, "out", [1], opresult2429);
      var if2431 = GraceDone;
      setLineNumber(637);    // compilenode identifier
      if (Grace_isTrue(var_emitArgChecks)) {
        setLineNumber(638);    // compilenode string
        var string2432 = new GraceString(") {");
        var call2434 = callmethodChecked(var_o, "typeParams", [0]);
        var call2435 = callmethodChecked(call2434, "size", [0]);
        var string2437 = new GraceString("] !== ");
        var string2440 = new GraceString("  if (argcv[");
        var opresult2442 = callmethodChecked(string2440, "++", [1], var_sz);
        var opresult2444 = callmethodChecked(opresult2442, "++", [1], string2437);
        var opresult2446 = callmethodChecked(opresult2444, "++", [1], call2435);
        var opresult2448 = callmethodChecked(opresult2446, "++", [1], string2432);
        onSelf = true;
        var call2449 = callmethodChecked(this, "out", [1], opresult2448);
        setLineNumber(639);    // compilenode string
        var string2450 = new GraceString("    callmethod(ProgrammingErrorObject, \"raise\", [1], ");
        onSelf = true;
        var call2451 = callmethodChecked(this, "out", [1], string2450);
        setLineNumber(640);    // compilenode string
        var string2452 = new GraceString("        new GraceString(\"wrong number of type arguments\"));");
        onSelf = true;
        var call2453 = callmethodChecked(this, "out", [1], string2452);
        setLineNumber(641);    // compilenode string
        var string2454 = new GraceString("  }");
        onSelf = true;
        var call2455 = callmethodChecked(this, "out", [1], string2454);
        if2431 = call2455;
      }
      setLineNumber(643);    // compilenode block
      var block2456 = new GraceBlock(this, 643, 1);
      setLineNumber(1);    // compilenode identifier
      block2456.real = function(var_g) {
        setLineNumber(644);    // compilenode string
        var string2457 = new GraceString(" = arguments[curarg++];");
        var call2459 = callmethodChecked(var_g, "value", [0]);
        onSelf = true;
        var call2460 = callmethodChecked(this, "varf", [1], call2459);
        var string2462 = new GraceString("  ");
        var opresult2464 = callmethodChecked(string2462, "++", [1], call2460);
        var opresult2466 = callmethodChecked(opresult2464, "++", [1], string2457);
        onSelf = true;
        var call2467 = callmethodChecked(this, "out", [1], opresult2466);
        return call2467;
      };
      setLineNumber(643);    // compilenode identifier
      var call2468 = callmethodChecked(var_o, "typeParams", [0]);
      var call2469 = callmethodChecked(call2468, "do", [1], block2456);
      setLineNumber(646);    // compilenode string
      var string2470 = new GraceString("}");
      onSelf = true;
      var call2471 = callmethodChecked(this, "out", [1], string2470);
      setLineNumber(647);    // compilenode string
      var string2472 = new GraceString("// End type arguments");
      onSelf = true;
      var call2473 = callmethodChecked(this, "out", [1], string2472);
      if2393 = call2473;
    }
    setLineNumber(649);    // compilenode string
    var string2474 = new GraceString("// Start argument processing");
    onSelf = true;
    var call2475 = callmethodChecked(this, "out", [1], string2474);
    setLineNumber(650);    // compilenode string
    var string2476 = new GraceString("curarg = 1;");
    onSelf = true;
    var call2477 = callmethodChecked(this, "out", [1], string2476);
    setLineNumber(651);    // compilenode identifier
    var call2478 = callmethodChecked(var_o, "signature", [0]);
    var call2479 = callmethodChecked(call2478, "indices", [0]);
    var block2480 = new GraceBlock(this, 651, 1);
    setLineNumber(1);    // compilenode identifier
    block2480.real = function(var_partnr) {
      setLineNumber(652);    // compilenode identifier
      var call2481 = callmethodChecked(var_o, "signature", [0]);
      var call2482 = callmethodChecked(call2481, "at", [1], var_partnr);
      var var_part = call2482;
      setLineNumber(653);    // compilenode num
      var var_paramnr = new GraceNum(0);
      setLineNumber(654);    // compilenode identifier
      var call2483 = callmethodChecked(var_part, "params", [0]);
      var block2484 = new GraceBlock(this, 654, 1);
      setLineNumber(1);    // compilenode identifier
      block2484.real = function(var_p) {
        setLineNumber(655);    // compilenode identifier
        var opresult2487 = callmethodChecked(var_paramnr, "+", [1], new GraceNum(1));
        var_paramnr = opresult2487;
        var if2488 = GraceDone;
        setLineNumber(656);    // compilenode identifier
        var call2490 = callmethodChecked(var_p, "dtype", [0]);
        var opresult2492 = callmethodChecked(call2490, "\u2260", [1], GraceFalse);
        var opresult2495 = callmethodChecked(var_emitTypeChecks, "&&", [1], opresult2492);
        if (Grace_isTrue(opresult2495)) {
          setLineNumber(657);    // compilenode identifier
          var call2496 = callmethodChecked(var_o, "line", [0]);
          var string2497 = new GraceString("argument check in compilefreshmethod");
          onSelf = true;
          var call2498 = callmethodChecked(this, "noteLineNumber()comment", [1, 1], call2496, string2497);
          setLineNumber(658);    // compilenode identifier
          var call2499 = callmethodChecked(var_p, "dtype", [0]);
          onSelf = true;
          var call2500 = callmethodChecked(this, "compilenode", [1], call2499);
          var var_dtype = call2500;
          setLineNumber(660);    // compilenode string
          var string2501 = new GraceString("  [1], arguments[curarg])))");
          setLineNumber(659);    // compilenode string
          var string2503 = new GraceString(", \"match\",");
          var string2506 = new GraceString("if (!Grace_isTrue(callmethod(");
          var opresult2508 = callmethodChecked(string2506, "++", [1], var_dtype);
          var opresult2510 = callmethodChecked(opresult2508, "++", [1], string2503);
          var opresult2512 = callmethodChecked(opresult2510, "++", [1], string2501);
          onSelf = true;
          var call2513 = callmethodChecked(this, "out", [1], opresult2512);
          setLineNumber(661);    // compilenode string
          var string2514 = new GraceString("    throw new GraceExceptionPacket(TypeErrorObject,");
          onSelf = true;
          var call2515 = callmethodChecked(this, "out", [1], string2514);
          setLineNumber(662);    // compilenode string
          var string2516 = new GraceString(", does not have \" + ");
          var call2518 = callmethodChecked(var_p, "value", [0]);
          var string2520 = new GraceString("), which corresponds to parameter ");
          var string2523 = new GraceString(" (arg list ");
          var call2525 = callmethodChecked(var_part, "name", [0]);
          var string2527 = new GraceString(" in ");
          var string2530 = new GraceString("        new GraceString(\"argument ");
          var opresult2532 = callmethodChecked(string2530, "++", [1], var_paramnr);
          var opresult2534 = callmethodChecked(opresult2532, "++", [1], string2527);
          var opresult2536 = callmethodChecked(opresult2534, "++", [1], call2525);
          var opresult2538 = callmethodChecked(opresult2536, "++", [1], string2523);
          var opresult2540 = callmethodChecked(opresult2538, "++", [1], var_partnr);
          var opresult2542 = callmethodChecked(opresult2540, "++", [1], string2520);
          var opresult2544 = callmethodChecked(opresult2542, "++", [1], call2518);
          var opresult2546 = callmethodChecked(opresult2544, "++", [1], string2516);
          onSelf = true;
          var call2547 = callmethodChecked(this, "out", [1], opresult2546);
          setLineNumber(663);    // compilenode string
          var string2548 = new GraceString(", \"asString\", [0])._value + \".\"));");
          var string2551 = new GraceString("            callmethod(");
          var opresult2553 = callmethodChecked(string2551, "++", [1], var_dtype);
          var opresult2555 = callmethodChecked(opresult2553, "++", [1], string2548);
          onSelf = true;
          var call2556 = callmethodChecked(this, "out", [1], opresult2555);
          if2488 = call2556;
        }
        setLineNumber(665);    // compilenode string
        var string2557 = new GraceString("curarg++;");
        onSelf = true;
        var call2558 = callmethodChecked(this, "out", [1], string2557);
        return call2558;
      };
      var call2559 = callmethodChecked(var_prelude, "for()do", [1, 1], call2483, block2484);
      return call2559;
    };
    var call2560 = callmethodChecked(var_prelude, "for()do", [1, 1], call2479, block2480);
    setLineNumber(668);    // compilenode string
    var string2561 = new GraceString("// End argument processing");
    onSelf = true;
    var call2562 = callmethodChecked(this, "out", [1], string2561);
    setLineNumber(673);    // compilenode string
    var string2563 = new GraceString("\");");
    var string2566 = new GraceString("setModuleName(\"");
    var opresult2568 = callmethodChecked(string2566, "++", [1], var_modname);
    var opresult2570 = callmethodChecked(opresult2568, "++", [1], string2563);
    onSelf = true;
    var call2571 = callmethodChecked(this, "out", [1], opresult2570);
    var if2572 = GraceDone;
    setLineNumber(674);    // compilenode identifier
    if (Grace_isTrue(var_debugMode)) {
      setLineNumber(675);    // compilenode string
      var string2573 = new GraceString("stackFrames.push(myframe);");
      onSelf = true;
      var call2574 = callmethodChecked(this, "out", [1], string2573);
      if2572 = call2574;
    }
    setLineNumber(677);    // compilenode string
    var string2575 = new GraceString("var returnTarget = invocationCount;");
    onSelf = true;
    var call2576 = callmethodChecked(this, "out", [1], string2575);
    setLineNumber(678);    // compilenode string
    var string2577 = new GraceString("invocationCount++;");
    onSelf = true;
    var call2578 = callmethodChecked(this, "out", [1], string2577);
    var if2579 = GraceDone;
    setLineNumber(679);    // compilenode identifier
    if (Grace_isTrue(var_debugMode)) {
      setLineNumber(680);    // compilenode string
      var string2580 = new GraceString("try {");
      onSelf = true;
      var call2581 = callmethodChecked(this, "out", [1], string2580);
      setLineNumber(681);    // compilenode call
      onSelf = true;
      var call2582 = callmethodChecked(this, "increaseindent", [0]);
      if2579 = call2582;
    }
    setLineNumber(683);    // compilenode identifier
    var var_tailObject = GraceFalse;
    var if2583 = GraceDone;
    setLineNumber(684);    // compilenode block
    var block2584 = new GraceBlock(this, 684, 0);
    block2584.real = function() {
      var string2585 = new GraceString("object");
      var call2587 = callmethodChecked(var_o, "body", [0]);
      var call2588 = callmethodChecked(call2587, "last", [0]);
      var call2589 = callmethodChecked(call2588, "kind", [0]);
      var opresult2591 = callmethodChecked(call2589, "==", [1], string2585);
      return opresult2591;
    };
    var call2594 = callmethodChecked(var_o, "body", [0]);
    var call2595 = callmethodChecked(call2594, "size", [0]);
    var opresult2597 = callmethodChecked(call2595, ">", [1], new GraceNum(0));
    var opresult2599 = callmethodChecked(opresult2597, "&&", [1], block2584);
    if (Grace_isTrue(opresult2599)) {
      setLineNumber(685);    // compilenode identifier
      var call2600 = callmethodChecked(var_o, "body", [0]);
      var call2601 = callmethodChecked(call2600, "pop", [0]);
      var_tailObject = call2601;
      setLineNumber(686);    // compilenode identifier
      var call2602 = callmethodChecked(var_o, "nameString", [0]);
      var call2603 = callmethodChecked(var_tailObject, "name:=", [1], call2602);
      if2583 = call2603;
    }
    setLineNumber(688);    // compilenode string
    var string2604 = new GraceString("GraceDone");
    var var_ret = string2604;
    setLineNumber(689);    // compilenode identifier
    var call2605 = callmethodChecked(var_o, "body", [0]);
    var block2606 = new GraceBlock(this, 689, 1);
    setLineNumber(1);    // compilenode identifier
    block2606.real = function(var_l) {
      setLineNumber(690);    // compilenode identifier
      onSelf = true;
      var call2607 = callmethodChecked(this, "compilenode", [1], var_l);
      var_ret = call2607;
      return GraceDone;
    };
    var call2608 = callmethodChecked(var_prelude, "for()do", [1, 1], call2605, block2606);
    var if2609 = GraceDone;
    setLineNumber(692);    // compilenode identifier
    var opresult2612 = callmethodChecked(GraceFalse, "\u2260", [1], var_tailObject);
    if (Grace_isTrue(opresult2612)) {
      setLineNumber(693);    // compilenode identifier
      var call2613 = callmethodChecked(var_o, "body", [0]);
      var call2614 = callmethodChecked(call2613, "push", [1], var_tailObject);
      setLineNumber(694);    // compilenode string
      var string2615 = new GraceString("this");
      onSelf = true;
      var call2616 = callmethodChecked(this, "compileobject", [3], var_tailObject, string2615, GraceTrue);
      setLineNumber(695);    // compilenode identifier
      var call2617 = callmethodChecked(var_tailObject, "register", [0]);
      var_ret = call2617;
      if2609 = GraceDone;
    }
    setLineNumber(697);    // compilenode string
    var string2618 = new GraceString(";");
    var string2621 = new GraceString("return ");
    var opresult2623 = callmethodChecked(string2621, "++", [1], var_ret);
    var opresult2625 = callmethodChecked(opresult2623, "++", [1], string2618);
    onSelf = true;
    var call2626 = callmethodChecked(this, "out", [1], opresult2625);
    var if2627 = GraceDone;
    setLineNumber(698);    // compilenode identifier
    if (Grace_isTrue(var_debugMode)) {
      setLineNumber(699);    // compilenode call
      onSelf = true;
      var call2628 = callmethodChecked(this, "decreaseindent", [0]);
      setLineNumber(700);    // compilenode string
      var string2629 = new GraceString("} finally {");
      onSelf = true;
      var call2630 = callmethodChecked(this, "out", [1], string2629);
      setLineNumber(701);    // compilenode string
      var string2631 = new GraceString("    stackFrames.pop();");
      onSelf = true;
      var call2632 = callmethodChecked(this, "out", [1], string2631);
      setLineNumber(702);    // compilenode string
      var string2633 = new GraceString("}");
      onSelf = true;
      var call2634 = callmethodChecked(this, "out", [1], string2633);
      if2627 = call2634;
    }
    setLineNumber(704);    // compilenode string
    var string2635 = new GraceString("};");
    onSelf = true;
    var call2636 = callmethodChecked(this, "out", [1], string2635);
    var if2637 = GraceDone;
    setLineNumber(705);    // compilenode identifier
    if (Grace_isTrue(var_haveTypedParams)) {
      setLineNumber(706);    // compilenode string
      var string2638 = new GraceString("");
      var string2641 = new GraceString("func");
      var opresult2643 = callmethodChecked(string2641, "++", [1], var_myc);
      var opresult2645 = callmethodChecked(opresult2643, "++", [1], string2638);
      onSelf = true;
      var call2646 = callmethodChecked(this, "compilemethodtypes", [2], opresult2645, var_o);
      if2637 = call2646;
    }
    setLineNumber(708);    // compilenode identifier
    var call2647 = callmethodChecked(var_o, "annotations", [0]);
    var block2648 = new GraceBlock(this, 708, 1);
    setLineNumber(1);    // compilenode identifier
    block2648.real = function(var_ann) {
      var if2649 = GraceDone;
      setLineNumber(710);    // compilenode block
      var block2650 = new GraceBlock(this, 710, 0);
      block2650.real = function() {
        var string2651 = new GraceString("confidential");
        var call2653 = callmethodChecked(var_ann, "value", [0]);
        var opresult2655 = callmethodChecked(call2653, "==", [1], string2651);
        return opresult2655;
      };
      setLineNumber(709);    // compilenode string
      var string2657 = new GraceString("identifier");
      var call2659 = callmethodChecked(var_ann, "kind", [0]);
      var opresult2661 = callmethodChecked(call2659, "==", [1], string2657);
      var opresult2663 = callmethodChecked(opresult2661, "&&", [1], block2650);
      if (Grace_isTrue(opresult2663)) {
        setLineNumber(711);    // compilenode string
        var string2664 = new GraceString(".confidential = true;");
        var string2667 = new GraceString("func");
        var opresult2669 = callmethodChecked(string2667, "++", [1], var_myc);
        var opresult2671 = callmethodChecked(opresult2669, "++", [1], string2664);
        onSelf = true;
        var call2672 = callmethodChecked(this, "out", [1], opresult2671);
        if2649 = call2672;
      }
      return if2649;
    };
    var call2673 = callmethodChecked(var_prelude, "for()do", [1, 1], call2647, block2648);
    setLineNumber(714);    // compilenode string
    var string2674 = new GraceString(";");
    var string2677 = new GraceString("()object\"] = func");
    var string2680 = new GraceString(".methods[\"");
    var opresult2683 = callmethodChecked(var_selfobj, "++", [1], string2680);
    var opresult2685 = callmethodChecked(opresult2683, "++", [1], var_name);
    var opresult2687 = callmethodChecked(opresult2685, "++", [1], string2677);
    var opresult2689 = callmethodChecked(opresult2687, "++", [1], var_myc);
    var opresult2691 = callmethodChecked(opresult2689, "++", [1], string2674);
    onSelf = true;
    var call2692 = callmethodChecked(this, "out", [1], opresult2691);
    return call2692;
  };
  func2272.paramCounts = [2];
  this.methods["compilefreshmethod"] = func2272;
  func2272.definitionLine = 590;
  func2272.definitionModule = "genjs";
  setLineNumber(716);    // compilenode method
  var func2693 = function(argcv) {    // method compilemethodtypes(2)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_func = arguments[curarg];
    curarg++;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 2)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compilemethodtypes(2)"));
    setModuleName("genjs");
    setLineNumber(717);    // compilenode string
    var string2694 = new GraceString(".paramTypes = [];");
    var string2697 = new GraceString("");
    var opresult2699 = callmethodChecked(string2697, "++", [1], var_func);
    var opresult2701 = callmethodChecked(opresult2699, "++", [1], string2694);
    onSelf = true;
    var call2702 = callmethodChecked(this, "out", [1], opresult2701);
    setLineNumber(718);    // compilenode num
    var var_pi = new GraceNum(0);
    setLineNumber(719);    // compilenode identifier
    var call2703 = callmethodChecked(var_o, "signature", [0]);
    var block2704 = new GraceBlock(this, 719, 1);
    setLineNumber(1);    // compilenode identifier
    block2704.real = function(var_part) {
      setLineNumber(720);    // compilenode identifier
      var call2705 = callmethodChecked(var_part, "params", [0]);
      var block2706 = new GraceBlock(this, 720, 1);
      setLineNumber(1);    // compilenode identifier
      block2706.real = function(var_p) {
        var if2707 = GraceDone;
        setLineNumber(723);    // compilenode identifier
        var call2708 = callmethodChecked(var_p, "dtype", [0]);
        var opresult2711 = callmethodChecked(GraceFalse, "\u2260", [1], call2708);
        if (Grace_isTrue(opresult2711)) {
          var if2712 = GraceDone;
          setLineNumber(725);    // compilenode string
          var string2713 = new GraceString("typeliteral");
          var call2715 = callmethodChecked(var_p, "dtype", [0]);
          var call2716 = callmethodChecked(call2715, "kind", [0]);
          var opresult2718 = callmethodChecked(call2716, "==", [1], string2713);
          setLineNumber(724);    // compilenode block
          var block2720 = new GraceBlock(this, 724, 0);
          block2720.real = function() {
            var string2721 = new GraceString("Unknown");
            var call2723 = callmethodChecked(var_p, "dtype", [0]);
            var call2724 = callmethodChecked(call2723, "value", [0]);
            var opresult2726 = callmethodChecked(call2724, "\u2260", [1], string2721);
            return opresult2726;
          };
          var string2728 = new GraceString("identifier");
          var call2730 = callmethodChecked(var_p, "dtype", [0]);
          var call2731 = callmethodChecked(call2730, "kind", [0]);
          var opresult2733 = callmethodChecked(call2731, "==", [1], string2728);
          var opresult2735 = callmethodChecked(opresult2733, "&&", [1], block2720);
          var opresult2737 = callmethodChecked(opresult2735, "||", [1], opresult2718);
          if (Grace_isTrue(opresult2737)) {
            setLineNumber(726);    // compilenode identifier
            var call2738 = callmethodChecked(var_p, "dtype", [0]);
            var call2739 = callmethodChecked(call2738, "value", [0]);
            onSelf = true;
            var call2740 = callmethodChecked(this, "escapeident", [1], call2739);
            var var_typeid = call2740;
            var if2741 = GraceDone;
            setLineNumber(727);    // compilenode identifier
            var call2742 = callmethodChecked(var_topLevelTypes, "contains", [1], var_typeid);
            if (Grace_isTrue(call2742)) {
              setLineNumber(729);    // compilenode string
              var string2743 = new GraceString("\"]);");
              var call2745 = callmethodChecked(var_p, "value", [0]);
              onSelf = true;
              var call2746 = callmethodChecked(this, "escapestring", [1], call2745);
              var string2748 = new GraceString(", \"");
              var string2751 = new GraceString("type_");
              var opresult2753 = callmethodChecked(string2751, "++", [1], var_typeid);
              var opresult2755 = callmethodChecked(opresult2753, "++", [1], string2748);
              var opresult2757 = callmethodChecked(opresult2755, "++", [1], call2746);
              var opresult2759 = callmethodChecked(opresult2757, "++", [1], string2743);
              setLineNumber(728);    // compilenode string
              var string2761 = new GraceString(".paramTypes.push([");
              var string2764 = new GraceString("");
              var opresult2766 = callmethodChecked(string2764, "++", [1], var_func);
              var opresult2768 = callmethodChecked(opresult2766, "++", [1], string2761);
              var opresult2770 = callmethodChecked(opresult2768, "++", [1], opresult2759);
              onSelf = true;
              var call2771 = callmethodChecked(this, "out", [1], opresult2770);
              if2741 = call2771;
            } else {
              setLineNumber(731);    // compilenode string
              var string2772 = new GraceString(".paramTypes.push([]);");
              var string2775 = new GraceString("");
              var opresult2777 = callmethodChecked(string2775, "++", [1], var_func);
              var opresult2779 = callmethodChecked(opresult2777, "++", [1], string2772);
              onSelf = true;
              var call2780 = callmethodChecked(this, "out", [1], opresult2779);
              if2741 = call2780;
            }
            if2712 = if2741;
          } else {
            setLineNumber(734);    // compilenode string
            var string2781 = new GraceString(".paramTypes.push([]);");
            var string2784 = new GraceString("");
            var opresult2786 = callmethodChecked(string2784, "++", [1], var_func);
            var opresult2788 = callmethodChecked(opresult2786, "++", [1], string2781);
            onSelf = true;
            var call2789 = callmethodChecked(this, "out", [1], opresult2788);
            if2712 = call2789;
          }
          if2707 = if2712;
        } else {
          setLineNumber(737);    // compilenode string
          var string2790 = new GraceString(".paramTypes.push([]);");
          var string2793 = new GraceString("");
          var opresult2795 = callmethodChecked(string2793, "++", [1], var_func);
          var opresult2797 = callmethodChecked(opresult2795, "++", [1], string2790);
          onSelf = true;
          var call2798 = callmethodChecked(this, "out", [1], opresult2797);
          if2707 = call2798;
        }
        setLineNumber(739);    // compilenode identifier
        var opresult2801 = callmethodChecked(var_pi, "+", [1], new GraceNum(1));
        var_pi = opresult2801;
        return GraceDone;
      };
      var call2802 = callmethodChecked(var_prelude, "for()do", [1, 1], call2705, block2706);
      return call2802;
    };
    var call2803 = callmethodChecked(var_prelude, "for()do", [1, 1], call2703, block2704);
    return call2803;
  };
  func2693.paramCounts = [2];
  this.methods["compilemethodtypes"] = func2693;
  func2693.definitionLine = 716;
  func2693.definitionModule = "genjs";
  setLineNumber(743);    // compilenode method
  var func2804 = function(argcv) {    // method compileif(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compileif(1)"));
    setModuleName("genjs");
    setLineNumber(744);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(745);    // compilenode identifier
    var opresult2807 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult2807;
    setLineNumber(746);    // compilenode string
    var string2808 = new GraceString(" = GraceDone;");
    var string2811 = new GraceString("var if");
    var opresult2813 = callmethodChecked(string2811, "++", [1], var_myc);
    var opresult2815 = callmethodChecked(opresult2813, "++", [1], string2808);
    onSelf = true;
    var call2816 = callmethodChecked(this, "outUnnumbered", [1], opresult2815);
    setLineNumber(747);    // compilenode string
    var string2817 = new GraceString(")) {");
    var call2819 = callmethodChecked(var_o, "value", [0]);
    onSelf = true;
    var call2820 = callmethodChecked(this, "compilenode", [1], call2819);
    var string2822 = new GraceString("if (Grace_isTrue(");
    var opresult2824 = callmethodChecked(string2822, "++", [1], call2820);
    var opresult2826 = callmethodChecked(opresult2824, "++", [1], string2817);
    onSelf = true;
    var call2827 = callmethodChecked(this, "out", [1], opresult2826);
    setLineNumber(748);    // compilenode string
    var string2828 = new GraceString("undefined");
    var var_tret = string2828;
    setLineNumber(749);    // compilenode string
    var string2829 = new GraceString("undefined");
    var var_fret = string2829;
    setLineNumber(750);    // compilenode call
    onSelf = true;
    var call2830 = callmethodChecked(this, "increaseindent", [0]);
    setLineNumber(751);    // compilenode identifier
    var call2831 = callmethodChecked(var_o, "thenblock", [0]);
    var call2832 = callmethodChecked(call2831, "body", [0]);
    var var_thenList = call2832;
    setLineNumber(752);    // compilenode block
    var block2833 = new GraceBlock(this, 752, 1);
    setLineNumber(1);    // compilenode identifier
    block2833.real = function(var_l) {
      setLineNumber(753);    // compilenode identifier
      onSelf = true;
      var call2834 = callmethodChecked(this, "compilenode", [1], var_l);
      var_tret = call2834;
      return GraceDone;
    };
    var call2835 = callmethodChecked(var_prelude, "for()do", [1, 1], var_thenList, block2833);
    var if2836 = GraceDone;
    setLineNumber(755);    // compilenode string
    var string2837 = new GraceString("undefined");
    var opresult2840 = callmethodChecked(var_tret, "\u2260", [1], string2837);
    if (Grace_isTrue(opresult2840)) {
      setLineNumber(756);    // compilenode string
      var string2841 = new GraceString(";");
      var string2844 = new GraceString(" = ");
      var string2847 = new GraceString("if");
      var opresult2849 = callmethodChecked(string2847, "++", [1], var_myc);
      var opresult2851 = callmethodChecked(opresult2849, "++", [1], string2844);
      var opresult2853 = callmethodChecked(opresult2851, "++", [1], var_tret);
      var opresult2855 = callmethodChecked(opresult2853, "++", [1], string2841);
      onSelf = true;
      var call2856 = callmethodChecked(this, "out", [1], opresult2855);
      if2836 = call2856;
    }
    setLineNumber(758);    // compilenode call
    onSelf = true;
    var call2857 = callmethodChecked(this, "decreaseindent", [0]);
    setLineNumber(759);    // compilenode identifier
    var call2858 = callmethodChecked(var_o, "elseblock", [0]);
    var call2859 = callmethodChecked(call2858, "body", [0]);
    var var_elseList = call2859;
    var if2860 = GraceDone;
    setLineNumber(760);    // compilenode identifier
    var call2862 = callmethodChecked(var_elseList, "size", [0]);
    var opresult2864 = callmethodChecked(call2862, ">", [1], new GraceNum(0));
    if (Grace_isTrue(opresult2864)) {
      setLineNumber(761);    // compilenode string
      var string2865 = new GraceString("} else {");
      onSelf = true;
      var call2866 = callmethodChecked(this, "out", [1], string2865);
      setLineNumber(762);    // compilenode call
      onSelf = true;
      var call2867 = callmethodChecked(this, "increaseindent", [0]);
      setLineNumber(763);    // compilenode block
      var block2868 = new GraceBlock(this, 763, 1);
      setLineNumber(1);    // compilenode identifier
      block2868.real = function(var_l) {
        setLineNumber(764);    // compilenode identifier
        onSelf = true;
        var call2869 = callmethodChecked(this, "compilenode", [1], var_l);
        var_fret = call2869;
        return GraceDone;
      };
      var call2870 = callmethodChecked(var_prelude, "for()do", [1, 1], var_elseList, block2868);
      var if2871 = GraceDone;
      setLineNumber(766);    // compilenode string
      var string2872 = new GraceString("undefined");
      var opresult2875 = callmethodChecked(var_fret, "\u2260", [1], string2872);
      if (Grace_isTrue(opresult2875)) {
        setLineNumber(767);    // compilenode string
        var string2876 = new GraceString(";");
        var string2879 = new GraceString(" = ");
        var string2882 = new GraceString("if");
        var opresult2884 = callmethodChecked(string2882, "++", [1], var_myc);
        var opresult2886 = callmethodChecked(opresult2884, "++", [1], string2879);
        var opresult2888 = callmethodChecked(opresult2886, "++", [1], var_fret);
        var opresult2890 = callmethodChecked(opresult2888, "++", [1], string2876);
        onSelf = true;
        var call2891 = callmethodChecked(this, "out", [1], opresult2890);
        if2871 = call2891;
      }
      setLineNumber(769);    // compilenode call
      onSelf = true;
      var call2892 = callmethodChecked(this, "decreaseindent", [0]);
      if2860 = call2892;
    }
    setLineNumber(771);    // compilenode string
    var string2893 = new GraceString("}");
    onSelf = true;
    var call2894 = callmethodChecked(this, "out", [1], string2893);
    setLineNumber(772);    // compilenode string
    var string2896 = new GraceString("if");
    var opresult2898 = callmethodChecked(string2896, "++", [1], var_myc);
    var call2899 = callmethodChecked(var_o, "register:=", [1], opresult2898);
    return call2899;
  };
  func2804.paramCounts = [1];
  this.methods["compileif"] = func2804;
  func2804.definitionLine = 743;
  func2804.definitionModule = "genjs";
  setLineNumber(774);    // compilenode method
  var func2900 = function(argcv) {    // method compileidentifier(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compileidentifier(1)"));
    setModuleName("genjs");
    setLineNumber(775);    // compilenode identifier
    var call2901 = callmethodChecked(var_o, "value", [0]);
    var var_name = call2901;
    var if2902 = GraceDone;
    setLineNumber(776);    // compilenode string
    var string2903 = new GraceString("super");
    var opresult2906 = callmethodChecked(var_name, "==", [1], string2903);
    if (Grace_isTrue(opresult2906)) {
      setLineNumber(777);    // compilenode identifier
      var call2907 = callmethodChecked(var_errormessages, "suggestion", [0]);
      var call2908 = callmethodChecked(call2907, "new", [0]);
      var var_sugg = call2908;
      setLineNumber(778);    // compilenode identifier
      var call2909 = callmethodChecked(var_o, "linePos", [0]);
      var call2911 = callmethodChecked(var_o, "linePos", [0]);
      var opresult2913 = callmethodChecked(call2911, "+", [1], new GraceNum(4));
      var string2914 = new GraceString("self");
      var call2915 = callmethodChecked(var_o, "line", [0]);
      var call2916 = callmethodChecked(var_sugg, "replaceRange()with()onLine", [2, 1, 1], call2909, opresult2913, string2914, call2915);
      setLineNumber(780);    // compilenode string
      var string2917 = new GraceString("left of the . in a method request.");
      setLineNumber(779);    // compilenode string
      var string2919 = new GraceString("'super' can be used only to the ");
      var opresult2921 = callmethodChecked(string2919, "++", [1], string2917);
      setLineNumber(782);    // compilenode identifier
      var call2922 = callmethodChecked(var_o, "line", [0]);
      var call2923 = callmethodChecked(var_o, "linePos", [0]);
      var call2925 = callmethodChecked(var_o, "linePos", [0]);
      var opresult2927 = callmethodChecked(call2925, "+", [1], new GraceNum(4));
      setLineNumber(779);    // compilenode identifier
      var call2928 = callmethodChecked(var_errormessages, "syntaxError()atRange()withSuggestion", [1, 3, 1], opresult2921, call2922, call2923, opresult2927, var_sugg);
      if2902 = call2928;
    }
    var if2929 = GraceDone;
    setLineNumber(784);    // compilenode string
    var string2930 = new GraceString("self");
    var opresult2933 = callmethodChecked(var_name, "==", [1], string2930);
    if (Grace_isTrue(opresult2933)) {
      setLineNumber(785);    // compilenode string
      var string2934 = new GraceString("this");
      var call2935 = callmethodChecked(var_o, "register:=", [1], string2934);
      if2929 = call2935;
    } else {
      var if2936 = GraceDone;
      setLineNumber(786);    // compilenode string
      var string2937 = new GraceString("...");
      var opresult2940 = callmethodChecked(var_name, "==", [1], string2937);
      if (Grace_isTrue(opresult2940)) {
        setLineNumber(787);    // compilenode string
        var string2941 = new GraceString("ellipsis");
        var call2942 = callmethodChecked(var_o, "register:=", [1], string2941);
        if2936 = call2942;
      } else {
        var if2943 = GraceDone;
        setLineNumber(788);    // compilenode string
        var string2944 = new GraceString("true");
        var opresult2947 = callmethodChecked(var_name, "==", [1], string2944);
        if (Grace_isTrue(opresult2947)) {
          setLineNumber(789);    // compilenode string
          var string2948 = new GraceString("GraceTrue");
          var call2949 = callmethodChecked(var_o, "register:=", [1], string2948);
          if2943 = call2949;
        } else {
          var if2950 = GraceDone;
          setLineNumber(790);    // compilenode string
          var string2951 = new GraceString("false");
          var opresult2954 = callmethodChecked(var_name, "==", [1], string2951);
          if (Grace_isTrue(opresult2954)) {
            setLineNumber(791);    // compilenode string
            var string2955 = new GraceString("GraceFalse");
            var call2956 = callmethodChecked(var_o, "register:=", [1], string2955);
            if2950 = call2956;
          } else {
            setLineNumber(793);    // compilenode identifier
            var call2957 = callmethodChecked(var_usedvars, "push", [1], var_name);
            setLineNumber(794);    // compilenode identifier
            onSelf = true;
            var call2958 = callmethodChecked(this, "varf", [1], var_name);
            var call2959 = callmethodChecked(var_o, "register:=", [1], call2958);
            if2950 = call2959;
          }
          if2943 = if2950;
        }
        if2936 = if2943;
      }
      if2929 = if2936;
    }
    return if2929;
  };
  func2900.paramCounts = [1];
  this.methods["compileidentifier"] = func2900;
  func2900.definitionLine = 774;
  func2900.definitionModule = "genjs";
  setLineNumber(797);    // compilenode method
  var func2960 = function(argcv) {    // method compilebind(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compilebind(1)"));
    setModuleName("genjs");
    setLineNumber(798);    // compilenode identifier
    var call2961 = callmethodChecked(var_o, "dest", [0]);
    var var_lhs = call2961;
    var if2962 = GraceDone;
    setLineNumber(799);    // compilenode identifier
    var call2963 = callmethodChecked(var_lhs, "isIdentifier", [0]);
    if (Grace_isTrue(call2963)) {
      setLineNumber(800);    // compilenode identifier
      var call2964 = callmethodChecked(var_o, "value", [0]);
      onSelf = true;
      var call2965 = callmethodChecked(this, "compilenode", [1], call2964);
      var var_val = call2965;
      setLineNumber(801);    // compilenode identifier
      var call2966 = callmethodChecked(var_lhs, "value", [0]);
      var var_nm = call2966;
      setLineNumber(802);    // compilenode identifier
      var call2967 = callmethodChecked(var_usedvars, "push", [1], var_nm);
      setLineNumber(803);    // compilenode string
      var string2968 = new GraceString(";");
      var string2971 = new GraceString(" = ");
      onSelf = true;
      var call2973 = callmethodChecked(this, "varf", [1], var_nm);
      var string2975 = new GraceString("");
      var opresult2977 = callmethodChecked(string2975, "++", [1], call2973);
      var opresult2979 = callmethodChecked(opresult2977, "++", [1], string2971);
      var opresult2981 = callmethodChecked(opresult2979, "++", [1], var_val);
      var opresult2983 = callmethodChecked(opresult2981, "++", [1], string2968);
      onSelf = true;
      var call2984 = callmethodChecked(this, "out", [1], opresult2983);
      setLineNumber(804);    // compilenode string
      var string2985 = new GraceString("GraceDone");
      var call2986 = callmethodChecked(var_o, "register:=", [1], string2985);
      if2962 = call2986;
    } else {
      setLineNumber(806);    // compilenode string
      var string2987 = new GraceString(" does not bind an indentifer");
      var string2990 = new GraceString("bindNode ");
      var opresult2992 = callmethodChecked(string2990, "++", [1], var_o);
      var opresult2994 = callmethodChecked(opresult2992, "++", [1], string2987);
      var call2995 = callmethodChecked(var_prelude, "ProgrammingError", [0]);
      var call2996 = callmethodChecked(call2995, "raise", [1], opresult2994);
      if2962 = call2996;
    }
    return if2962;
  };
  func2960.paramCounts = [1];
  this.methods["compilebind"] = func2960;
  func2960.definitionLine = 797;
  func2960.definitionModule = "genjs";
  setLineNumber(809);    // compilenode method
  var func2997 = function(argcv) {    // method compiledefdec(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compiledefdec(1)"));
    setModuleName("genjs");
    setLineNumber(810);    // compilenode vardec
    var var_nm;
    setLineNumber(811);    // compilenode vardec
    var var_snm;
    setLineNumber(812);    // compilenode identifier
    var call2998 = callmethodChecked(var_o, "scope", [0]);
    var var_currentScope = call2998;
    var if2999 = GraceDone;
    setLineNumber(813);    // compilenode string
    var string3000 = new GraceString("generic");
    var call3002 = callmethodChecked(var_o, "name", [0]);
    var call3003 = callmethodChecked(call3002, "kind", [0]);
    var opresult3005 = callmethodChecked(call3003, "==", [1], string3000);
    if (Grace_isTrue(opresult3005)) {
      setLineNumber(814);    // compilenode identifier
      var call3006 = callmethodChecked(var_o, "name", [0]);
      var call3007 = callmethodChecked(call3006, "value", [0]);
      var call3008 = callmethodChecked(call3007, "value", [0]);
      var_snm = call3008;
      if2999 = GraceDone;
    } else {
      setLineNumber(816);    // compilenode identifier
      var call3009 = callmethodChecked(var_o, "name", [0]);
      var call3010 = callmethodChecked(call3009, "value", [0]);
      var_snm = call3010;
      if2999 = GraceDone;
    }
    setLineNumber(818);    // compilenode identifier
    var_nm = var_snm;
    var if3011 = GraceDone;
    setLineNumber(819);    // compilenode identifier
    if (Grace_isTrue(var_debugMode)) {
      setLineNumber(820);    // compilenode string
      var string3012 = new GraceString("});");
      onSelf = true;
      var call3014 = callmethodChecked(this, "varf", [1], var_nm);
      var string3016 = new GraceString("\", function() {return ");
      onSelf = true;
      var call3018 = callmethodChecked(this, "escapestring", [1], var_nm);
      var string3020 = new GraceString("myframe.addVar(\"");
      var opresult3022 = callmethodChecked(string3020, "++", [1], call3018);
      var opresult3024 = callmethodChecked(opresult3022, "++", [1], string3016);
      var opresult3026 = callmethodChecked(opresult3024, "++", [1], call3014);
      var opresult3028 = callmethodChecked(opresult3026, "++", [1], string3012);
      onSelf = true;
      var call3029 = callmethodChecked(this, "out", [1], opresult3028);
      if3011 = call3029;
    }
    setLineNumber(822);    // compilenode identifier
    var call3030 = callmethodChecked(var_declaredvars, "push", [1], var_nm);
    setLineNumber(823);    // compilenode identifier
    var call3031 = callmethodChecked(var_o, "value", [0]);
    onSelf = true;
    var call3032 = callmethodChecked(this, "compilenode", [1], call3031);
    var var_val = call3032;
    setLineNumber(824);    // compilenode string
    var string3033 = new GraceString(";");
    var string3036 = new GraceString(" = ");
    onSelf = true;
    var call3038 = callmethodChecked(this, "varf", [1], var_nm);
    var string3040 = new GraceString("var ");
    var opresult3042 = callmethodChecked(string3040, "++", [1], call3038);
    var opresult3044 = callmethodChecked(opresult3042, "++", [1], string3036);
    var opresult3046 = callmethodChecked(opresult3044, "++", [1], var_val);
    var opresult3048 = callmethodChecked(opresult3046, "++", [1], string3033);
    onSelf = true;
    var call3049 = callmethodChecked(this, "out", [1], opresult3048);
    var if3050 = GraceDone;
    setLineNumber(825);    // compilenode identifier
    var opresult3053 = callmethodChecked(var_compilationDepth, "==", [1], new GraceNum(1));
    if (Grace_isTrue(opresult3053)) {
      setLineNumber(826);    // compilenode identifier
      var call3054 = callmethodChecked(var_o, "name", [0]);
      var call3056 = callmethodChecked(var_o, "name", [0]);
      var call3057 = callmethodChecked(call3056, "value", [0]);
      var call3058 = callmethodChecked(var_ast, "signaturePart", [0]);
      var call3059 = callmethodChecked(call3058, "partName()scope", [1, 1], call3057, var_currentScope);
      var array3055 = new PrimitiveGraceList([call3059]);
      setLineNumber(827);    // compilenode identifier
      var call3061 = callmethodChecked(var_o, "name", [0]);
      var array3060 = new PrimitiveGraceList([call3061]);
      setLineNumber(826);    // compilenode identifier
      var call3062 = callmethodChecked(var_ast, "methodNode", [0]);
      var call3063 = callmethodChecked(call3062, "new()scope", [4, 1], call3054, array3055, array3060, GraceFalse, var_currentScope);
      onSelf = true;
      var call3064 = callmethodChecked(this, "compilenode", [1], call3063);
      var if3065 = GraceDone;
      setLineNumber(828);    // compilenode string
      var string3066 = new GraceString("parent");
      var call3067 = callmethodChecked(var_ast, "findAnnotation", [2], var_o, string3066);
      if (Grace_isTrue(call3067)) {
        setLineNumber(829);    // compilenode string
        var string3068 = new GraceString(";");
        var string3071 = new GraceString("this.superobj = ");
        var opresult3073 = callmethodChecked(string3071, "++", [1], var_val);
        var opresult3075 = callmethodChecked(opresult3073, "++", [1], string3068);
        onSelf = true;
        var call3076 = callmethodChecked(this, "out", [1], opresult3075);
        if3065 = call3076;
      }
      setLineNumber(831);    // compilenode string
      var string3077 = new GraceString("\"].debug = \"def\";");
      var string3080 = new GraceString("this.methods[\"");
      var opresult3082 = callmethodChecked(string3080, "++", [1], var_nm);
      var opresult3084 = callmethodChecked(opresult3082, "++", [1], string3077);
      onSelf = true;
      var call3085 = callmethodChecked(this, "out", [1], opresult3084);
      if3050 = call3085;
    }
    var if3086 = GraceDone;
    setLineNumber(833);    // compilenode identifier
    if (Grace_isTrue(var_emitTypeChecks)) {
      var if3087 = GraceDone;
      setLineNumber(834);    // compilenode identifier
      var call3089 = callmethodChecked(var_o, "dtype", [0]);
      var opresult3091 = callmethodChecked(call3089, "\u2260", [1], GraceFalse);
      if (Grace_isTrue(opresult3091)) {
        var if3092 = GraceDone;
        setLineNumber(835);    // compilenode string
        var string3093 = new GraceString("Unknown");
        var call3095 = callmethodChecked(var_o, "dtype", [0]);
        var call3096 = callmethodChecked(call3095, "value", [0]);
        var opresult3098 = callmethodChecked(call3096, "\u2260", [1], string3093);
        if (Grace_isTrue(opresult3098)) {
          setLineNumber(836);    // compilenode identifier
          var call3099 = callmethodChecked(var_o, "line", [0]);
          var string3100 = new GraceString("compiledefdec");
          onSelf = true;
          var call3101 = callmethodChecked(this, "noteLineNumber()comment", [1, 1], call3099, string3100);
          setLineNumber(837);    // compilenode string
          var string3102 = new GraceString(")))");
          onSelf = true;
          var call3104 = callmethodChecked(this, "varf", [1], var_nm);
          var string3106 = new GraceString(", \"match\", [1], ");
          var call3108 = callmethodChecked(var_o, "dtype", [0]);
          onSelf = true;
          var call3109 = callmethodChecked(this, "compilenode", [1], call3108);
          var string3111 = new GraceString("if (!Grace_isTrue(callmethod(");
          var opresult3113 = callmethodChecked(string3111, "++", [1], call3109);
          var opresult3115 = callmethodChecked(opresult3113, "++", [1], string3106);
          var opresult3117 = callmethodChecked(opresult3115, "++", [1], call3104);
          var opresult3119 = callmethodChecked(opresult3117, "++", [1], string3102);
          onSelf = true;
          var call3120 = callmethodChecked(this, "out", [1], opresult3119);
          setLineNumber(838);    // compilenode string
          var string3121 = new GraceString("  throw new GraceExceptionPacket(TypeErrorObject,");
          onSelf = true;
          var call3122 = callmethodChecked(this, "out", [1], string3121);
          setLineNumber(839);    // compilenode string
          var string3123 = new GraceString("\"));");
          var call3125 = callmethodChecked(var_o, "dtype", [0]);
          var call3126 = callmethodChecked(call3125, "toGrace", [1], new GraceNum(0));
          var string3128 = new GraceString("' is not of type ");
          var string3131 = new GraceString("      new GraceString(\"value of def '");
          var opresult3133 = callmethodChecked(string3131, "++", [1], var_snm);
          var opresult3135 = callmethodChecked(opresult3133, "++", [1], string3128);
          var opresult3137 = callmethodChecked(opresult3135, "++", [1], call3126);
          var opresult3139 = callmethodChecked(opresult3137, "++", [1], string3123);
          onSelf = true;
          var call3140 = callmethodChecked(this, "out", [1], opresult3139);
          if3092 = call3140;
        }
        if3087 = if3092;
      }
      if3086 = if3087;
    }
    setLineNumber(843);    // compilenode string
    var string3141 = new GraceString("GraceDone");
    var call3142 = callmethodChecked(var_o, "register:=", [1], string3141);
    return call3142;
  };
  func2997.paramCounts = [1];
  this.methods["compiledefdec"] = func2997;
  func2997.definitionLine = 809;
  func2997.definitionModule = "genjs";
  setLineNumber(845);    // compilenode method
  var func3143 = function(argcv) {    // method compilevardec(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compilevardec(1)"));
    setModuleName("genjs");
    setLineNumber(846);    // compilenode identifier
    var call3144 = callmethodChecked(var_o, "name", [0]);
    var call3145 = callmethodChecked(call3144, "value", [0]);
    var var_nm = call3145;
    setLineNumber(847);    // compilenode identifier
    var call3146 = callmethodChecked(var_o, "scope", [0]);
    var var_currentScope = call3146;
    setLineNumber(848);    // compilenode identifier
    var call3147 = callmethodChecked(var_declaredvars, "push", [1], var_nm);
    setLineNumber(849);    // compilenode identifier
    var call3148 = callmethodChecked(var_o, "value", [0]);
    var var_val = call3148;
    var if3149 = GraceDone;
    setLineNumber(850);    // compilenode identifier
    var opresult3152 = callmethodChecked(GraceFalse, "\u2260", [1], var_val);
    if (Grace_isTrue(opresult3152)) {
      setLineNumber(851);    // compilenode identifier
      onSelf = true;
      var call3153 = callmethodChecked(this, "compilenode", [1], var_val);
      var_val = call3153;
      setLineNumber(852);    // compilenode string
      var string3154 = new GraceString(";");
      var string3157 = new GraceString(" = ");
      onSelf = true;
      var call3159 = callmethodChecked(this, "varf", [1], var_nm);
      var string3161 = new GraceString("var ");
      var opresult3163 = callmethodChecked(string3161, "++", [1], call3159);
      var opresult3165 = callmethodChecked(opresult3163, "++", [1], string3157);
      var opresult3167 = callmethodChecked(opresult3165, "++", [1], var_val);
      var opresult3169 = callmethodChecked(opresult3167, "++", [1], string3154);
      onSelf = true;
      var call3170 = callmethodChecked(this, "out", [1], opresult3169);
      if3149 = call3170;
    } else {
      setLineNumber(854);    // compilenode string
      var string3171 = new GraceString(";");
      onSelf = true;
      var call3173 = callmethodChecked(this, "varf", [1], var_nm);
      var string3175 = new GraceString("var ");
      var opresult3177 = callmethodChecked(string3175, "++", [1], call3173);
      var opresult3179 = callmethodChecked(opresult3177, "++", [1], string3171);
      onSelf = true;
      var call3180 = callmethodChecked(this, "out", [1], opresult3179);
      setLineNumber(855);    // compilenode string
      var string3181 = new GraceString("false");
      var_val = string3181;
      if3149 = GraceDone;
    }
    var if3182 = GraceDone;
    setLineNumber(857);    // compilenode identifier
    if (Grace_isTrue(var_debugMode)) {
      setLineNumber(858);    // compilenode string
      var string3183 = new GraceString("});");
      onSelf = true;
      var call3185 = callmethodChecked(this, "varf", [1], var_nm);
      var string3187 = new GraceString("\", function() {return ");
      onSelf = true;
      var call3189 = callmethodChecked(this, "escapestring", [1], var_nm);
      var string3191 = new GraceString("myframe.addVar(\"");
      var opresult3193 = callmethodChecked(string3191, "++", [1], call3189);
      var opresult3195 = callmethodChecked(opresult3193, "++", [1], string3187);
      var opresult3197 = callmethodChecked(opresult3195, "++", [1], call3185);
      var opresult3199 = callmethodChecked(opresult3197, "++", [1], string3183);
      onSelf = true;
      var call3200 = callmethodChecked(this, "out", [1], opresult3199);
      if3182 = call3200;
    }
    var if3201 = GraceDone;
    setLineNumber(860);    // compilenode identifier
    var opresult3204 = callmethodChecked(var_compilationDepth, "==", [1], new GraceNum(1));
    if (Grace_isTrue(opresult3204)) {
      setLineNumber(861);    // compilenode identifier
      var call3205 = callmethodChecked(var_o, "name", [0]);
      var call3207 = callmethodChecked(var_o, "name", [0]);
      var call3208 = callmethodChecked(call3207, "value", [0]);
      var call3209 = callmethodChecked(var_ast, "signaturePart", [0]);
      var call3210 = callmethodChecked(call3209, "partName()scope", [1, 1], call3208, var_currentScope);
      var array3206 = new PrimitiveGraceList([call3210]);
      setLineNumber(862);    // compilenode identifier
      var call3212 = callmethodChecked(var_o, "name", [0]);
      var array3211 = new PrimitiveGraceList([call3212]);
      setLineNumber(861);    // compilenode identifier
      var call3213 = callmethodChecked(var_ast, "methodNode", [0]);
      var call3214 = callmethodChecked(call3213, "new()scope", [4, 1], call3205, array3206, array3211, GraceFalse, var_currentScope);
      onSelf = true;
      var call3215 = callmethodChecked(this, "compilenode", [1], call3214);
      setLineNumber(863);    // compilenode string
      var string3216 = new GraceString(":=");
      var call3218 = callmethodChecked(var_o, "name", [0]);
      var call3219 = callmethodChecked(call3218, "value", [0]);
      var opresult3221 = callmethodChecked(call3219, "++", [1], string3216);
      var call3222 = callmethodChecked(var_ast, "identifierNode", [0]);
      var call3223 = callmethodChecked(call3222, "new()scope", [2, 1], opresult3221, GraceFalse, var_currentScope);
      var var_assignID = call3223;
      setLineNumber(864);    // compilenode string
      var string3224 = new GraceString("_var_assign_tmp");
      var call3225 = callmethodChecked(var_ast, "identifierNode", [0]);
      var call3226 = callmethodChecked(call3225, "new", [2], string3224, GraceFalse);
      var var_tmpID = call3226;
      setLineNumber(866);    // compilenode identifier
      var call3228 = callmethodChecked(var_assignID, "value", [0]);
      var array3229 = new PrimitiveGraceList([var_tmpID]);
      var call3230 = callmethodChecked(var_ast, "signaturePart", [0]);
      var call3231 = callmethodChecked(call3230, "partName()params()scope", [1, 1, 1], call3228, array3229, var_currentScope);
      var array3227 = new PrimitiveGraceList([call3231]);
      setLineNumber(867);    // compilenode identifier
      var call3233 = callmethodChecked(var_o, "name", [0]);
      var call3234 = callmethodChecked(var_ast, "bindNode", [0]);
      var call3235 = callmethodChecked(call3234, "new", [2], call3233, var_tmpID);
      var array3232 = new PrimitiveGraceList([call3235]);
      setLineNumber(865);    // compilenode identifier
      var call3236 = callmethodChecked(var_ast, "methodNode", [0]);
      var call3237 = callmethodChecked(call3236, "new()scope", [4, 1], var_assignID, array3227, array3232, GraceFalse, var_currentScope);
      onSelf = true;
      var call3238 = callmethodChecked(this, "compilenode", [1], call3237);
      setLineNumber(868);    // compilenode string
      var string3239 = new GraceString("\"].debug = \"var\";");
      var string3242 = new GraceString("this.methods[\"");
      var opresult3244 = callmethodChecked(string3242, "++", [1], var_nm);
      var opresult3246 = callmethodChecked(opresult3244, "++", [1], string3239);
      onSelf = true;
      var call3247 = callmethodChecked(this, "out", [1], opresult3246);
      if3201 = call3247;
    }
    var if3248 = GraceDone;
    setLineNumber(870);    // compilenode identifier
    if (Grace_isTrue(var_emitTypeChecks)) {
      var if3249 = GraceDone;
      setLineNumber(871);    // compilenode identifier
      var call3251 = callmethodChecked(var_o, "dtype", [0]);
      var opresult3253 = callmethodChecked(call3251, "\u2260", [1], GraceFalse);
      if (Grace_isTrue(opresult3253)) {
        var if3254 = GraceDone;
        setLineNumber(872);    // compilenode string
        var string3255 = new GraceString("Unknown");
        var call3257 = callmethodChecked(var_o, "dtype", [0]);
        var call3258 = callmethodChecked(call3257, "value", [0]);
        var opresult3260 = callmethodChecked(call3258, "\u2260", [1], string3255);
        if (Grace_isTrue(opresult3260)) {
          var if3261 = GraceDone;
          setLineNumber(873);    // compilenode string
          var string3262 = new GraceString("false");
          var opresult3265 = callmethodChecked(var_val, "\u2260", [1], string3262);
          if (Grace_isTrue(opresult3265)) {
            setLineNumber(874);    // compilenode identifier
            var call3266 = callmethodChecked(var_o, "line", [0]);
            var string3267 = new GraceString("compilevardec");
            onSelf = true;
            var call3268 = callmethodChecked(this, "noteLineNumber()comment", [1, 1], call3266, string3267);
            setLineNumber(875);    // compilenode string
            var string3269 = new GraceString(")))");
            onSelf = true;
            var call3271 = callmethodChecked(this, "varf", [1], var_nm);
            var string3273 = new GraceString(", \"match\", [1], ");
            var call3275 = callmethodChecked(var_o, "dtype", [0]);
            onSelf = true;
            var call3276 = callmethodChecked(this, "compilenode", [1], call3275);
            var string3278 = new GraceString("if (!Grace_isTrue(callmethod(");
            var opresult3280 = callmethodChecked(string3278, "++", [1], call3276);
            var opresult3282 = callmethodChecked(opresult3280, "++", [1], string3273);
            var opresult3284 = callmethodChecked(opresult3282, "++", [1], call3271);
            var opresult3286 = callmethodChecked(opresult3284, "++", [1], string3269);
            onSelf = true;
            var call3287 = callmethodChecked(this, "out", [1], opresult3286);
            setLineNumber(876);    // compilenode string
            var string3288 = new GraceString("  throw new GraceExceptionPacket(TypeErrorObject,");
            onSelf = true;
            var call3289 = callmethodChecked(this, "out", [1], string3288);
            setLineNumber(877);    // compilenode string
            var string3290 = new GraceString("\"));");
            var call3292 = callmethodChecked(var_o, "dtype", [0]);
            var call3293 = callmethodChecked(call3292, "toGrace", [1], new GraceNum(0));
            var string3295 = new GraceString("' is not of type ");
            var call3297 = callmethodChecked(var_o, "name", [0]);
            var call3298 = callmethodChecked(call3297, "value", [0]);
            var string3300 = new GraceString("      new GraceString(\"initial value of var '");
            var opresult3302 = callmethodChecked(string3300, "++", [1], call3298);
            var opresult3304 = callmethodChecked(opresult3302, "++", [1], string3295);
            var opresult3306 = callmethodChecked(opresult3304, "++", [1], call3293);
            var opresult3308 = callmethodChecked(opresult3306, "++", [1], string3290);
            onSelf = true;
            var call3309 = callmethodChecked(this, "out", [1], opresult3308);
            if3261 = call3309;
          }
          if3254 = if3261;
        }
        if3249 = if3254;
      }
      if3248 = if3249;
    }
    setLineNumber(882);    // compilenode string
    var string3310 = new GraceString("GraceDone");
    var call3311 = callmethodChecked(var_o, "register:=", [1], string3310);
    return call3311;
  };
  func3143.paramCounts = [1];
  this.methods["compilevardec"] = func3143;
  func3143.definitionLine = 845;
  func3143.definitionModule = "genjs";
  setLineNumber(884);    // compilenode method
  var func3312 = function(argcv) {    // method compiletrycatch(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compiletrycatch(1)"));
    setModuleName("genjs");
    setLineNumber(885);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(886);    // compilenode identifier
    var opresult3315 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult3315;
    setLineNumber(887);    // compilenode identifier
    var call3316 = callmethodChecked(var_o, "cases", [0]);
    var var_cases = call3316;
    setLineNumber(888);    // compilenode identifier
    var call3317 = callmethodChecked(var_o, "value", [0]);
    onSelf = true;
    var call3318 = callmethodChecked(this, "compilenode", [1], call3317);
    var var_mainblock = call3318;
    setLineNumber(889);    // compilenode string
    var string3319 = new GraceString(" = [];");
    var string3322 = new GraceString("var cases");
    var opresult3324 = callmethodChecked(string3322, "++", [1], var_myc);
    var opresult3326 = callmethodChecked(opresult3324, "++", [1], string3319);
    onSelf = true;
    var call3327 = callmethodChecked(this, "out", [1], opresult3326);
    setLineNumber(890);    // compilenode block
    var block3328 = new GraceBlock(this, 890, 1);
    setLineNumber(1);    // compilenode identifier
    block3328.real = function(var_c) {
      setLineNumber(891);    // compilenode identifier
      onSelf = true;
      var call3329 = callmethodChecked(this, "compilenode", [1], var_c);
      var var_e = call3329;
      setLineNumber(892);    // compilenode string
      var string3330 = new GraceString(");");
      var string3333 = new GraceString(".push(");
      var string3336 = new GraceString("cases");
      var opresult3338 = callmethodChecked(string3336, "++", [1], var_myc);
      var opresult3340 = callmethodChecked(opresult3338, "++", [1], string3333);
      var opresult3342 = callmethodChecked(opresult3340, "++", [1], var_e);
      var opresult3344 = callmethodChecked(opresult3342, "++", [1], string3330);
      onSelf = true;
      var call3345 = callmethodChecked(this, "out", [1], opresult3344);
      return call3345;
    };
    var call3346 = callmethodChecked(var_prelude, "for()do", [1, 1], var_cases, block3328);
    setLineNumber(894);    // compilenode string
    var string3347 = new GraceString("false");
    var var_finally = string3347;
    var if3348 = GraceDone;
    setLineNumber(895);    // compilenode identifier
    var call3349 = callmethodChecked(var_o, "finally", [0]);
    var opresult3352 = callmethodChecked(GraceFalse, "\u2260", [1], call3349);
    if (Grace_isTrue(opresult3352)) {
      setLineNumber(896);    // compilenode identifier
      var call3353 = callmethodChecked(var_o, "finally", [0]);
      onSelf = true;
      var call3354 = callmethodChecked(this, "compilenode", [1], call3353);
      var_finally = call3354;
      if3348 = GraceDone;
    }
    setLineNumber(898);    // compilenode identifier
    var call3355 = callmethodChecked(var_o, "line", [0]);
    var string3356 = new GraceString("compiletrycatch");
    onSelf = true;
    var call3357 = callmethodChecked(this, "noteLineNumber()comment", [1, 1], call3355, string3356);
    setLineNumber(899);    // compilenode string
    var string3358 = new GraceString(");");
    var string3361 = new GraceString(",");
    var string3364 = new GraceString(",cases");
    var string3367 = new GraceString(" = tryCatch(");
    var string3370 = new GraceString("var catchres");
    var opresult3372 = callmethodChecked(string3370, "++", [1], var_myc);
    var opresult3374 = callmethodChecked(opresult3372, "++", [1], string3367);
    var opresult3376 = callmethodChecked(opresult3374, "++", [1], var_mainblock);
    var opresult3378 = callmethodChecked(opresult3376, "++", [1], string3364);
    var opresult3380 = callmethodChecked(opresult3378, "++", [1], var_myc);
    var opresult3382 = callmethodChecked(opresult3380, "++", [1], string3361);
    var opresult3384 = callmethodChecked(opresult3382, "++", [1], var_finally);
    var opresult3386 = callmethodChecked(opresult3384, "++", [1], string3358);
    onSelf = true;
    var call3387 = callmethodChecked(this, "out", [1], opresult3386);
    setLineNumber(900);    // compilenode string
    var string3388 = new GraceString("\");");
    var string3391 = new GraceString("setModuleName(\"");
    var opresult3393 = callmethodChecked(string3391, "++", [1], var_modname);
    var opresult3395 = callmethodChecked(opresult3393, "++", [1], string3388);
    onSelf = true;
    var call3396 = callmethodChecked(this, "out", [1], opresult3395);
    setLineNumber(901);    // compilenode string
    var string3398 = new GraceString("catchres");
    var opresult3400 = callmethodChecked(string3398, "++", [1], var_myc);
    var call3401 = callmethodChecked(var_o, "register:=", [1], opresult3400);
    return call3401;
  };
  func3312.paramCounts = [1];
  this.methods["compiletrycatch"] = func3312;
  func3312.definitionLine = 884;
  func3312.definitionModule = "genjs";
  setLineNumber(903);    // compilenode method
  var func3402 = function(argcv) {    // method compilematchcase(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compilematchcase(1)"));
    setModuleName("genjs");
    setLineNumber(904);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(905);    // compilenode identifier
    var opresult3405 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult3405;
    setLineNumber(906);    // compilenode identifier
    var call3406 = callmethodChecked(var_o, "cases", [0]);
    var var_cases = call3406;
    setLineNumber(907);    // compilenode identifier
    var call3407 = callmethodChecked(var_o, "value", [0]);
    onSelf = true;
    var call3408 = callmethodChecked(this, "compilenode", [1], call3407);
    var var_matchee = call3408;
    setLineNumber(908);    // compilenode string
    var string3409 = new GraceString(" = [];");
    var string3412 = new GraceString("var cases");
    var opresult3414 = callmethodChecked(string3412, "++", [1], var_myc);
    var opresult3416 = callmethodChecked(opresult3414, "++", [1], string3409);
    onSelf = true;
    var call3417 = callmethodChecked(this, "out", [1], opresult3416);
    setLineNumber(909);    // compilenode block
    var block3418 = new GraceBlock(this, 909, 1);
    setLineNumber(1);    // compilenode identifier
    block3418.real = function(var_c) {
      setLineNumber(910);    // compilenode identifier
      onSelf = true;
      var call3419 = callmethodChecked(this, "compilenode", [1], var_c);
      var var_e = call3419;
      setLineNumber(911);    // compilenode string
      var string3420 = new GraceString(");");
      var string3423 = new GraceString(".push(");
      var string3426 = new GraceString("cases");
      var opresult3428 = callmethodChecked(string3426, "++", [1], var_myc);
      var opresult3430 = callmethodChecked(opresult3428, "++", [1], string3423);
      var opresult3432 = callmethodChecked(opresult3430, "++", [1], var_e);
      var opresult3434 = callmethodChecked(opresult3432, "++", [1], string3420);
      onSelf = true;
      var call3435 = callmethodChecked(this, "out", [1], opresult3434);
      return call3435;
    };
    var call3436 = callmethodChecked(var_prelude, "for()do", [1, 1], var_cases, block3418);
    setLineNumber(913);    // compilenode string
    var string3437 = new GraceString("false");
    var var_elsecase = string3437;
    var if3438 = GraceDone;
    setLineNumber(914);    // compilenode identifier
    var call3439 = callmethodChecked(var_o, "elsecase", [0]);
    var opresult3442 = callmethodChecked(GraceFalse, "\u2260", [1], call3439);
    if (Grace_isTrue(opresult3442)) {
      setLineNumber(915);    // compilenode identifier
      var call3443 = callmethodChecked(var_o, "elsecase", [0]);
      onSelf = true;
      var call3444 = callmethodChecked(this, "compilenode", [1], call3443);
      var_elsecase = call3444;
      if3438 = GraceDone;
    }
    setLineNumber(917);    // compilenode identifier
    var call3445 = callmethodChecked(var_o, "line", [0]);
    var string3446 = new GraceString("compilematchcase");
    onSelf = true;
    var call3447 = callmethodChecked(this, "noteLineNumber()comment", [1, 1], call3445, string3446);
    setLineNumber(918);    // compilenode string
    var string3448 = new GraceString(");");
    var string3451 = new GraceString(",");
    var string3454 = new GraceString(",cases");
    var string3457 = new GraceString(" = matchCase(");
    var string3460 = new GraceString("var matchres");
    var opresult3462 = callmethodChecked(string3460, "++", [1], var_myc);
    var opresult3464 = callmethodChecked(opresult3462, "++", [1], string3457);
    var opresult3466 = callmethodChecked(opresult3464, "++", [1], var_matchee);
    var opresult3468 = callmethodChecked(opresult3466, "++", [1], string3454);
    var opresult3470 = callmethodChecked(opresult3468, "++", [1], var_myc);
    var opresult3472 = callmethodChecked(opresult3470, "++", [1], string3451);
    var opresult3474 = callmethodChecked(opresult3472, "++", [1], var_elsecase);
    var opresult3476 = callmethodChecked(opresult3474, "++", [1], string3448);
    onSelf = true;
    var call3477 = callmethodChecked(this, "out", [1], opresult3476);
    setLineNumber(919);    // compilenode string
    var string3478 = new GraceString("\");");
    var string3481 = new GraceString("setModuleName(\"");
    var opresult3483 = callmethodChecked(string3481, "++", [1], var_modname);
    var opresult3485 = callmethodChecked(opresult3483, "++", [1], string3478);
    onSelf = true;
    var call3486 = callmethodChecked(this, "out", [1], opresult3485);
    setLineNumber(920);    // compilenode string
    var string3488 = new GraceString("matchres");
    var opresult3490 = callmethodChecked(string3488, "++", [1], var_myc);
    var call3491 = callmethodChecked(var_o, "register:=", [1], opresult3490);
    return call3491;
  };
  func3402.paramCounts = [1];
  this.methods["compilematchcase"] = func3402;
  func3402.definitionLine = 903;
  func3402.definitionModule = "genjs";
  setLineNumber(922);    // compilenode method
  var func3492 = function(argcv) {    // method compileop(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compileop(1)"));
    setModuleName("genjs");
    setLineNumber(923);    // compilenode identifier
    var call3493 = callmethodChecked(var_o, "right", [0]);
    onSelf = true;
    var call3494 = callmethodChecked(this, "compilenode", [1], call3493);
    var var_right = call3494;
    setLineNumber(924);    // compilenode identifier
    var opresult3497 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult3497;
    setLineNumber(925);    // compilenode string
    var string3498 = new GraceString("opresult");
    var var_rnm = string3498;
    var if3499 = GraceDone;
    setLineNumber(926);    // compilenode string
    var string3500 = new GraceString("*");
    var call3502 = callmethodChecked(var_o, "value", [0]);
    var opresult3504 = callmethodChecked(call3502, "==", [1], string3500);
    if (Grace_isTrue(opresult3504)) {
      setLineNumber(927);    // compilenode string
      var string3505 = new GraceString("prod");
      var_rnm = string3505;
      if3499 = GraceDone;
    }
    var if3506 = GraceDone;
    setLineNumber(929);    // compilenode string
    var string3507 = new GraceString("/");
    var call3509 = callmethodChecked(var_o, "value", [0]);
    var opresult3511 = callmethodChecked(call3509, "==", [1], string3507);
    if (Grace_isTrue(opresult3511)) {
      setLineNumber(930);    // compilenode string
      var string3512 = new GraceString("quotient");
      var_rnm = string3512;
      if3506 = GraceDone;
    }
    var if3513 = GraceDone;
    setLineNumber(932);    // compilenode string
    var string3514 = new GraceString("-");
    var call3516 = callmethodChecked(var_o, "value", [0]);
    var opresult3518 = callmethodChecked(call3516, "==", [1], string3514);
    if (Grace_isTrue(opresult3518)) {
      setLineNumber(933);    // compilenode string
      var string3519 = new GraceString("diff");
      var_rnm = string3519;
      if3513 = GraceDone;
    }
    var if3520 = GraceDone;
    setLineNumber(935);    // compilenode string
    var string3521 = new GraceString("%");
    var call3523 = callmethodChecked(var_o, "value", [0]);
    var opresult3525 = callmethodChecked(call3523, "==", [1], string3521);
    if (Grace_isTrue(opresult3525)) {
      setLineNumber(936);    // compilenode string
      var string3526 = new GraceString("modulus");
      var_rnm = string3526;
      if3520 = GraceDone;
    }
    var if3527 = GraceDone;
    setLineNumber(938);    // compilenode string
    var string3528 = new GraceString("super");
    var call3530 = callmethodChecked(var_o, "left", [0]);
    var call3531 = callmethodChecked(call3530, "value", [0]);
    var opresult3533 = callmethodChecked(call3531, "==", [1], string3528);
    var string3535 = new GraceString("identifier");
    var call3537 = callmethodChecked(var_o, "left", [0]);
    var call3538 = callmethodChecked(call3537, "kind", [0]);
    var opresult3540 = callmethodChecked(call3538, "==", [1], string3535);
    var opresult3542 = callmethodChecked(opresult3540, "&&", [1], opresult3533);
    if (Grace_isTrue(opresult3542)) {
      setLineNumber(940);    // compilenode string
      var string3543 = new GraceString(");");
      var string3546 = new GraceString("\", [1], ");
      var call3548 = callmethodChecked(var_o, "value", [0]);
      onSelf = true;
      var call3549 = callmethodChecked(this, "escapestring", [1], call3548);
      var string3551 = new GraceString(", \"");
      setLineNumber(939);    // compilenode string
      var string3553 = new GraceString(" = callmethodsuper(this");
      var string3557 = new GraceString("var ");
      var opresult3559 = callmethodChecked(string3557, "++", [1], var_rnm);
      var opresult3561 = callmethodChecked(opresult3559, "++", [1], var_auto__95__count);
      var opresult3563 = callmethodChecked(opresult3561, "++", [1], string3553);
      var opresult3565 = callmethodChecked(opresult3563, "++", [1], string3551);
      var opresult3567 = callmethodChecked(opresult3565, "++", [1], call3549);
      var opresult3569 = callmethodChecked(opresult3567, "++", [1], string3546);
      var opresult3571 = callmethodChecked(opresult3569, "++", [1], var_right);
      var opresult3573 = callmethodChecked(opresult3571, "++", [1], string3543);
      onSelf = true;
      var call3574 = callmethodChecked(this, "out", [1], opresult3573);
      if3527 = call3574;
    } else {
      setLineNumber(942);    // compilenode identifier
      var call3575 = callmethodChecked(var_o, "left", [0]);
      onSelf = true;
      var call3576 = callmethodChecked(this, "compilenode", [1], call3575);
      var var_left = call3576;
      setLineNumber(943);    // compilenode identifier
      var opresult3579 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
      var_auto__95__count = opresult3579;
      var if3580 = GraceDone;
      setLineNumber(944);    // compilenode identifier
      if (Grace_isTrue(var_emitArgChecks)) {
        setLineNumber(946);    // compilenode string
        var string3581 = new GraceString(");");
        var string3584 = new GraceString("\", [1], ");
        var call3586 = callmethodChecked(var_o, "value", [0]);
        onSelf = true;
        var call3587 = callmethodChecked(this, "escapestring", [1], call3586);
        var string3589 = new GraceString(", \"");
        setLineNumber(945);    // compilenode string
        var string3592 = new GraceString(" = callmethodChecked(");
        var string3596 = new GraceString("var ");
        var opresult3598 = callmethodChecked(string3596, "++", [1], var_rnm);
        var opresult3600 = callmethodChecked(opresult3598, "++", [1], var_auto__95__count);
        var opresult3602 = callmethodChecked(opresult3600, "++", [1], string3592);
        var opresult3604 = callmethodChecked(opresult3602, "++", [1], var_left);
        var opresult3606 = callmethodChecked(opresult3604, "++", [1], string3589);
        var opresult3608 = callmethodChecked(opresult3606, "++", [1], call3587);
        var opresult3610 = callmethodChecked(opresult3608, "++", [1], string3584);
        var opresult3612 = callmethodChecked(opresult3610, "++", [1], var_right);
        var opresult3614 = callmethodChecked(opresult3612, "++", [1], string3581);
        onSelf = true;
        var call3615 = callmethodChecked(this, "out", [1], opresult3614);
        if3580 = call3615;
      } else {
        setLineNumber(949);    // compilenode string
        var string3616 = new GraceString(");");
        var string3619 = new GraceString("\", [1], ");
        var call3621 = callmethodChecked(var_o, "value", [0]);
        onSelf = true;
        var call3622 = callmethodChecked(this, "escapestring", [1], call3621);
        var string3624 = new GraceString(", \"");
        setLineNumber(948);    // compilenode string
        var string3627 = new GraceString(" = callmethod(");
        var string3631 = new GraceString("var ");
        var opresult3633 = callmethodChecked(string3631, "++", [1], var_rnm);
        var opresult3635 = callmethodChecked(opresult3633, "++", [1], var_auto__95__count);
        var opresult3637 = callmethodChecked(opresult3635, "++", [1], string3627);
        var opresult3639 = callmethodChecked(opresult3637, "++", [1], var_left);
        var opresult3641 = callmethodChecked(opresult3639, "++", [1], string3624);
        var opresult3643 = callmethodChecked(opresult3641, "++", [1], call3622);
        var opresult3645 = callmethodChecked(opresult3643, "++", [1], string3619);
        var opresult3647 = callmethodChecked(opresult3645, "++", [1], var_right);
        var opresult3649 = callmethodChecked(opresult3647, "++", [1], string3616);
        onSelf = true;
        var call3650 = callmethodChecked(this, "out", [1], opresult3649);
        if3580 = call3650;
      }
      if3527 = if3580;
    }
    setLineNumber(952);    // compilenode identifier
    var opresult3653 = callmethodChecked(var_rnm, "++", [1], var_auto__95__count);
    var call3654 = callmethodChecked(var_o, "register:=", [1], opresult3653);
    setLineNumber(953);    // compilenode identifier
    var opresult3657 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult3657;
    return GraceDone;
  };
  func3492.paramCounts = [1];
  this.methods["compileop"] = func3492;
  func3492.definitionLine = 922;
  func3492.definitionModule = "genjs";
  setLineNumber(955);    // compilenode method
  var func3658 = function(argcv) {    // method compilecall(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compilecall(1)"));
    setModuleName("genjs");
    setLineNumber(956);    // compilenode identifier
    var call3659 = callmethodChecked(var_o, "line", [0]);
    var string3660 = new GraceString("");
    var call3662 = callmethodChecked(var_o, "kind", [0]);
    var string3664 = new GraceString("compilenode ");
    var opresult3666 = callmethodChecked(string3664, "++", [1], call3662);
    var opresult3668 = callmethodChecked(opresult3666, "++", [1], string3660);
    onSelf = true;
    var call3669 = callmethodChecked(this, "noteLineNumber()comment", [1, 1], call3659, opresult3668);
    setLineNumber(957);    // compilenode array
    var array3670 = new PrimitiveGraceList([]);
    var var_args = array3670;
    setLineNumber(958);    // compilenode string
    var string3671 = new GraceString("");
    var var_obj = string3671;
    setLineNumber(959);    // compilenode num
    var var_len = new GraceNum(0);
    setLineNumber(960);    // compilenode string
    var string3672 = new GraceString("");
    var var_con = string3672;
    setLineNumber(961);    // compilenode identifier
    var call3673 = callmethodChecked(var_o, "with", [0]);
    var block3674 = new GraceBlock(this, 961, 1);
    setLineNumber(1);    // compilenode identifier
    block3674.real = function(var_part) {
      setLineNumber(962);    // compilenode identifier
      var call3675 = callmethodChecked(var_part, "args", [0]);
      var block3676 = new GraceBlock(this, 962, 1);
      setLineNumber(1);    // compilenode identifier
      block3676.real = function(var_p) {
        setLineNumber(963);    // compilenode identifier
        onSelf = true;
        var call3677 = callmethodChecked(this, "compilenode", [1], var_p);
        var var_r = call3677;
        setLineNumber(964);    // compilenode identifier
        var call3678 = callmethodChecked(var_args, "push", [1], var_r);
        return call3678;
      };
      var call3679 = callmethodChecked(var_prelude, "for()do", [1, 1], call3675, block3676);
      return call3679;
    };
    var call3680 = callmethodChecked(var_prelude, "for()do", [1, 1], call3673, block3674);
    var if3681 = GraceDone;
    setLineNumber(967);    // compilenode identifier
    var call3682 = callmethodChecked(var_o, "generics", [0]);
    var opresult3685 = callmethodChecked(GraceFalse, "\u2260", [1], call3682);
    if (Grace_isTrue(opresult3685)) {
      setLineNumber(968);    // compilenode block
      var block3686 = new GraceBlock(this, 968, 1);
      setLineNumber(1);    // compilenode identifier
      block3686.real = function(var_g) {
        setLineNumber(969);    // compilenode identifier
        onSelf = true;
        var call3687 = callmethodChecked(this, "compilenode", [1], var_g);
        var call3688 = callmethodChecked(var_args, "push", [1], call3687);
        return call3688;
      };
      setLineNumber(968);    // compilenode identifier
      var call3689 = callmethodChecked(var_o, "generics", [0]);
      var call3690 = callmethodChecked(call3689, "do", [1], block3686);
      if3681 = call3690;
    }
    setLineNumber(972);    // compilenode string
    var string3691 = new GraceString("");
    var var_partl = string3691;
    setLineNumber(973);    // compilenode identifier
    var call3692 = callmethodChecked(var_o, "with", [0]);
    var call3693 = callmethodChecked(call3692, "indices", [0]);
    var block3694 = new GraceBlock(this, 973, 1);
    setLineNumber(1);    // compilenode identifier
    block3694.real = function(var_partnr) {
      setLineNumber(974);    // compilenode identifier
      var call3695 = callmethodChecked(var_o, "with", [0]);
      var call3696 = callmethodChecked(call3695, "at", [1], var_partnr);
      var call3697 = callmethodChecked(call3696, "args", [0]);
      var call3698 = callmethodChecked(call3697, "size", [0]);
      var opresult3701 = callmethodChecked(var_partl, "++", [1], call3698);
      var_partl = opresult3701;
      var if3702 = GraceDone;
      setLineNumber(975);    // compilenode identifier
      var call3703 = callmethodChecked(var_o, "with", [0]);
      var call3704 = callmethodChecked(call3703, "size", [0]);
      var opresult3707 = callmethodChecked(var_partnr, "<", [1], call3704);
      if (Grace_isTrue(opresult3707)) {
        setLineNumber(976);    // compilenode string
        var string3708 = new GraceString(", ");
        var opresult3711 = callmethodChecked(var_partl, "++", [1], string3708);
        var_partl = opresult3711;
        if3702 = GraceDone;
      }
      return if3702;
    };
    var call3712 = callmethodChecked(var_prelude, "for()do", [1, 1], call3693, block3694);
    var if3713 = GraceDone;
    setLineNumber(979);    // compilenode identifier
    var call3714 = callmethodChecked(var_o, "generics", [0]);
    var opresult3717 = callmethodChecked(GraceFalse, "\u2260", [1], call3714);
    if (Grace_isTrue(opresult3717)) {
      setLineNumber(980);    // compilenode string
      var string3718 = new GraceString("");
      var call3720 = callmethodChecked(var_o, "generics", [0]);
      var call3721 = callmethodChecked(call3720, "size", [0]);
      var string3723 = new GraceString(", ");
      var opresult3725 = callmethodChecked(string3723, "++", [1], call3721);
      var opresult3727 = callmethodChecked(opresult3725, "++", [1], string3718);
      var opresult3730 = callmethodChecked(var_partl, "++", [1], opresult3727);
      var_partl = opresult3730;
      if3713 = GraceDone;
    }
    var if3731 = GraceDone;
    setLineNumber(982);    // compilenode identifier
    if (Grace_isTrue(var_emitArgChecks)) {
      setLineNumber(983);    // compilenode string
      var string3732 = new GraceString("callmethodChecked");
      if3731 = string3732;
    } else {
      setLineNumber(985);    // compilenode string
      var string3733 = new GraceString("callmethod");
      if3731 = string3733;
    }
    var var_request = if3731;
    var if3734 = GraceDone;
    setLineNumber(987);    // compilenode block
    var block3735 = new GraceBlock(this, 987, 0);
    block3735.real = function() {
      setLineNumber(988);    // compilenode string
      var string3736 = new GraceString("super");
      var call3738 = callmethodChecked(var_o, "value", [0]);
      var call3739 = callmethodChecked(call3738, "in", [0]);
      var call3740 = callmethodChecked(call3739, "value", [0]);
      var opresult3742 = callmethodChecked(call3740, "==", [1], string3736);
      setLineNumber(987);    // compilenode string
      var string3744 = new GraceString("identifier");
      var call3746 = callmethodChecked(var_o, "value", [0]);
      var call3747 = callmethodChecked(call3746, "in", [0]);
      var call3748 = callmethodChecked(call3747, "kind", [0]);
      var opresult3750 = callmethodChecked(call3748, "==", [1], string3744);
      var opresult3752 = callmethodChecked(opresult3750, "&&", [1], opresult3742);
      return opresult3752;
    };
    var string3754 = new GraceString("member");
    var call3756 = callmethodChecked(var_o, "value", [0]);
    var call3757 = callmethodChecked(call3756, "kind", [0]);
    var opresult3759 = callmethodChecked(call3757, "==", [1], string3754);
    var opresult3761 = callmethodChecked(opresult3759, "&&", [1], block3735);
    if (Grace_isTrue(opresult3761)) {
      setLineNumber(990);    // compilenode string
      var string3762 = new GraceString("\", [");
      var call3764 = callmethodChecked(var_o, "value", [0]);
      var call3765 = callmethodChecked(call3764, "value", [0]);
      onSelf = true;
      var call3766 = callmethodChecked(this, "escapestring", [1], call3765);
      var string3768 = new GraceString(", \"");
      setLineNumber(989);    // compilenode string
      var string3770 = new GraceString(" = callmethodsuper(this");
      var string3773 = new GraceString("var call");
      var opresult3775 = callmethodChecked(string3773, "++", [1], var_auto__95__count);
      var opresult3777 = callmethodChecked(opresult3775, "++", [1], string3770);
      var opresult3779 = callmethodChecked(opresult3777, "++", [1], string3768);
      var opresult3781 = callmethodChecked(opresult3779, "++", [1], call3766);
      var opresult3783 = callmethodChecked(opresult3781, "++", [1], string3762);
      var var_call = opresult3783;
      setLineNumber(991);    // compilenode string
      var string3784 = new GraceString("]");
      var opresult3788 = callmethodChecked(var_call, "++", [1], var_partl);
      var opresult3790 = callmethodChecked(opresult3788, "++", [1], string3784);
      var_call = opresult3790;
      setLineNumber(992);    // compilenode block
      var block3791 = new GraceBlock(this, 992, 1);
      setLineNumber(1);    // compilenode identifier
      block3791.real = function(var_arg) {
        setLineNumber(993);    // compilenode string
        var string3793 = new GraceString(", ");
        var opresult3796 = callmethodChecked(var_call, "++", [1], string3793);
        var opresult3798 = callmethodChecked(opresult3796, "++", [1], var_arg);
        var_call = opresult3798;
        return GraceDone;
      };
      var call3799 = callmethodChecked(var_prelude, "for()do", [1, 1], var_args, block3791);
      setLineNumber(995);    // compilenode string
      var string3800 = new GraceString(");");
      var opresult3803 = callmethodChecked(var_call, "++", [1], string3800);
      var_call = opresult3803;
      setLineNumber(996);    // compilenode identifier
      onSelf = true;
      var call3804 = callmethodChecked(this, "out", [1], var_call);
      if3734 = call3804;
    } else {
      var if3805 = GraceDone;
      setLineNumber(998);    // compilenode block
      var block3806 = new GraceBlock(this, 998, 0);
      block3806.real = function() {
        setLineNumber(999);    // compilenode string
        var string3807 = new GraceString("outer");
        var call3809 = callmethodChecked(var_o, "value", [0]);
        var call3810 = callmethodChecked(call3809, "in", [0]);
        var call3811 = callmethodChecked(call3810, "value", [0]);
        var opresult3813 = callmethodChecked(call3811, "==", [1], string3807);
        return opresult3813;
      };
      setLineNumber(997);    // compilenode block
      var block3815 = new GraceBlock(this, 997, 0);
      block3815.real = function() {
        setLineNumber(998);    // compilenode string
        var string3816 = new GraceString("member");
        var call3818 = callmethodChecked(var_o, "value", [0]);
        var call3819 = callmethodChecked(call3818, "in", [0]);
        var call3820 = callmethodChecked(call3819, "kind", [0]);
        var opresult3822 = callmethodChecked(call3820, "==", [1], string3816);
        return opresult3822;
      };
      setLineNumber(997);    // compilenode string
      var string3824 = new GraceString("member");
      var call3826 = callmethodChecked(var_o, "value", [0]);
      var call3827 = callmethodChecked(call3826, "kind", [0]);
      var opresult3829 = callmethodChecked(call3827, "==", [1], string3824);
      var opresult3831 = callmethodChecked(opresult3829, "&&", [1], block3815);
      var opresult3833 = callmethodChecked(opresult3831, "&&", [1], block3806);
      if (Grace_isTrue(opresult3833)) {
        setLineNumber(1000);    // compilenode identifier
        var call3834 = callmethodChecked(var_o, "value", [0]);
        var call3835 = callmethodChecked(call3834, "in", [0]);
        onSelf = true;
        var call3836 = callmethodChecked(this, "compilenode", [1], call3835);
        var var_ot = call3836;
        setLineNumber(1002);    // compilenode string
        var string3837 = new GraceString("\", [");
        var call3839 = callmethodChecked(var_o, "value", [0]);
        var call3840 = callmethodChecked(call3839, "value", [0]);
        onSelf = true;
        var call3841 = callmethodChecked(this, "escapestring", [1], call3840);
        var string3843 = new GraceString(", \"");
        setLineNumber(1001);    // compilenode string
        var string3845 = new GraceString("");
        var string3848 = new GraceString("(");
        var opresult3850 = callmethodChecked(string3848, "++", [1], var_ot);
        var opresult3852 = callmethodChecked(opresult3850, "++", [1], string3845);
        var string3855 = new GraceString(" = ");
        var string3858 = new GraceString("var call");
        var opresult3860 = callmethodChecked(string3858, "++", [1], var_auto__95__count);
        var opresult3862 = callmethodChecked(opresult3860, "++", [1], string3855);
        var opresult3864 = callmethodChecked(opresult3862, "++", [1], var_requestCall);
        var opresult3866 = callmethodChecked(opresult3864, "++", [1], opresult3852);
        var opresult3868 = callmethodChecked(opresult3866, "++", [1], string3843);
        var opresult3870 = callmethodChecked(opresult3868, "++", [1], call3841);
        var opresult3872 = callmethodChecked(opresult3870, "++", [1], string3837);
        var var_call = opresult3872;
        setLineNumber(1003);    // compilenode string
        var string3873 = new GraceString("]");
        var opresult3877 = callmethodChecked(var_call, "++", [1], var_partl);
        var opresult3879 = callmethodChecked(opresult3877, "++", [1], string3873);
        var_call = opresult3879;
        setLineNumber(1004);    // compilenode block
        var block3880 = new GraceBlock(this, 1004, 1);
        setLineNumber(1);    // compilenode identifier
        block3880.real = function(var_arg) {
          setLineNumber(1005);    // compilenode string
          var string3882 = new GraceString(", ");
          var opresult3885 = callmethodChecked(var_call, "++", [1], string3882);
          var opresult3887 = callmethodChecked(opresult3885, "++", [1], var_arg);
          var_call = opresult3887;
          return GraceDone;
        };
        var call3888 = callmethodChecked(var_prelude, "for()do", [1, 1], var_args, block3880);
        setLineNumber(1007);    // compilenode string
        var string3889 = new GraceString(");");
        var opresult3892 = callmethodChecked(var_call, "++", [1], string3889);
        var_call = opresult3892;
        setLineNumber(1008);    // compilenode string
        var string3893 = new GraceString("onOuter = true;");
        onSelf = true;
        var call3894 = callmethodChecked(this, "out", [1], string3893);
        setLineNumber(1009);    // compilenode string
        var string3895 = new GraceString("onSelf = true;");
        onSelf = true;
        var call3896 = callmethodChecked(this, "out", [1], string3895);
        setLineNumber(1010);    // compilenode identifier
        onSelf = true;
        var call3897 = callmethodChecked(this, "out", [1], var_call);
        if3805 = call3897;
      } else {
        var if3898 = GraceDone;
        setLineNumber(1011);    // compilenode block
        var block3899 = new GraceBlock(this, 1011, 0);
        block3899.real = function() {
          setLineNumber(1012);    // compilenode string
          var string3900 = new GraceString("outer");
          var call3902 = callmethodChecked(var_o, "value", [0]);
          var call3903 = callmethodChecked(call3902, "value", [0]);
          var opresult3905 = callmethodChecked(call3903, "==", [1], string3900);
          var string3907 = new GraceString("self");
          var call3909 = callmethodChecked(var_o, "value", [0]);
          var call3910 = callmethodChecked(call3909, "in", [0]);
          var call3911 = callmethodChecked(call3910, "value", [0]);
          var opresult3913 = callmethodChecked(call3911, "==", [1], string3907);
          setLineNumber(1011);    // compilenode string
          var string3915 = new GraceString("identifier");
          var call3917 = callmethodChecked(var_o, "value", [0]);
          var call3918 = callmethodChecked(call3917, "in", [0]);
          var call3919 = callmethodChecked(call3918, "kind", [0]);
          var opresult3921 = callmethodChecked(call3919, "==", [1], string3915);
          var opresult3923 = callmethodChecked(opresult3921, "&&", [1], opresult3913);
          var opresult3925 = callmethodChecked(opresult3923, "&&", [1], opresult3905);
          return opresult3925;
        };
        var string3927 = new GraceString("member");
        var call3929 = callmethodChecked(var_o, "value", [0]);
        var call3930 = callmethodChecked(call3929, "kind", [0]);
        var opresult3932 = callmethodChecked(call3930, "==", [1], string3927);
        var opresult3934 = callmethodChecked(opresult3932, "&&", [1], block3899);
        if (Grace_isTrue(opresult3934)) {
          setLineNumber(1015);    // compilenode string
          var string3935 = new GraceString("\"outer\", [0]);");
          setLineNumber(1014);    // compilenode string
          var string3937 = new GraceString("(superDepth, ");
          var string3940 = new GraceString(" = ");
          var string3943 = new GraceString("var call");
          var opresult3945 = callmethodChecked(string3943, "++", [1], var_auto__95__count);
          var opresult3947 = callmethodChecked(opresult3945, "++", [1], string3940);
          var opresult3949 = callmethodChecked(opresult3947, "++", [1], var_requestCall);
          var opresult3951 = callmethodChecked(opresult3949, "++", [1], string3937);
          var opresult3953 = callmethodChecked(opresult3951, "++", [1], string3935);
          onSelf = true;
          var call3954 = callmethodChecked(this, "out", [1], opresult3953);
          if3898 = call3954;
        } else {
          var if3955 = GraceDone;
          setLineNumber(1016);    // compilenode block
          var block3956 = new GraceBlock(this, 1016, 0);
          block3956.real = function() {
            setLineNumber(1017);    // compilenode string
            var string3957 = new GraceString("self");
            var call3959 = callmethodChecked(var_o, "value", [0]);
            var call3960 = callmethodChecked(call3959, "in", [0]);
            var call3961 = callmethodChecked(call3960, "value", [0]);
            var opresult3963 = callmethodChecked(call3961, "==", [1], string3957);
            setLineNumber(1016);    // compilenode string
            var string3965 = new GraceString("identifier");
            var call3967 = callmethodChecked(var_o, "value", [0]);
            var call3968 = callmethodChecked(call3967, "in", [0]);
            var call3969 = callmethodChecked(call3968, "kind", [0]);
            var opresult3971 = callmethodChecked(call3969, "==", [1], string3965);
            var opresult3973 = callmethodChecked(opresult3971, "&&", [1], opresult3963);
            return opresult3973;
          };
          var string3975 = new GraceString("member");
          var call3977 = callmethodChecked(var_o, "value", [0]);
          var call3978 = callmethodChecked(call3977, "kind", [0]);
          var opresult3980 = callmethodChecked(call3978, "==", [1], string3975);
          var opresult3982 = callmethodChecked(opresult3980, "&&", [1], block3956);
          if (Grace_isTrue(opresult3982)) {
            setLineNumber(1019);    // compilenode string
            var string3983 = new GraceString("\", [");
            var call3985 = callmethodChecked(var_o, "value", [0]);
            var call3986 = callmethodChecked(call3985, "value", [0]);
            onSelf = true;
            var call3987 = callmethodChecked(this, "escapestring", [1], call3986);
            var string3989 = new GraceString(", \"");
            setLineNumber(1018);    // compilenode string
            var string3991 = new GraceString("(this");
            var string3994 = new GraceString(" = ");
            var string3997 = new GraceString("var call");
            var opresult3999 = callmethodChecked(string3997, "++", [1], var_auto__95__count);
            var opresult4001 = callmethodChecked(opresult3999, "++", [1], string3994);
            var opresult4003 = callmethodChecked(opresult4001, "++", [1], var_requestCall);
            var opresult4005 = callmethodChecked(opresult4003, "++", [1], string3991);
            var opresult4007 = callmethodChecked(opresult4005, "++", [1], string3989);
            var opresult4009 = callmethodChecked(opresult4007, "++", [1], call3987);
            var opresult4011 = callmethodChecked(opresult4009, "++", [1], string3983);
            var var_call = opresult4011;
            setLineNumber(1020);    // compilenode string
            var string4012 = new GraceString("]");
            var opresult4016 = callmethodChecked(var_call, "++", [1], var_partl);
            var opresult4018 = callmethodChecked(opresult4016, "++", [1], string4012);
            var_call = opresult4018;
            setLineNumber(1021);    // compilenode block
            var block4019 = new GraceBlock(this, 1021, 1);
            setLineNumber(1);    // compilenode identifier
            block4019.real = function(var_arg) {
              setLineNumber(1022);    // compilenode string
              var string4021 = new GraceString(", ");
              var opresult4024 = callmethodChecked(var_call, "++", [1], string4021);
              var opresult4026 = callmethodChecked(opresult4024, "++", [1], var_arg);
              var_call = opresult4026;
              return GraceDone;
            };
            var call4027 = callmethodChecked(var_prelude, "for()do", [1, 1], var_args, block4019);
            setLineNumber(1024);    // compilenode string
            var string4028 = new GraceString(");");
            var opresult4031 = callmethodChecked(var_call, "++", [1], string4028);
            var_call = opresult4031;
            setLineNumber(1025);    // compilenode string
            var string4032 = new GraceString("onSelf = true;");
            onSelf = true;
            var call4033 = callmethodChecked(this, "out", [1], string4032);
            setLineNumber(1026);    // compilenode identifier
            onSelf = true;
            var call4034 = callmethodChecked(this, "out", [1], var_call);
            if3955 = call4034;
          } else {
            var if4035 = GraceDone;
            setLineNumber(1027);    // compilenode block
            var block4036 = new GraceBlock(this, 1027, 0);
            block4036.real = function() {
              setLineNumber(1028);    // compilenode string
              var string4037 = new GraceString("prelude");
              var call4039 = callmethodChecked(var_o, "value", [0]);
              var call4040 = callmethodChecked(call4039, "in", [0]);
              var call4041 = callmethodChecked(call4040, "value", [0]);
              var opresult4043 = callmethodChecked(call4041, "==", [1], string4037);
              setLineNumber(1027);    // compilenode string
              var string4045 = new GraceString("identifier");
              var call4047 = callmethodChecked(var_o, "value", [0]);
              var call4048 = callmethodChecked(call4047, "in", [0]);
              var call4049 = callmethodChecked(call4048, "kind", [0]);
              var opresult4051 = callmethodChecked(call4049, "==", [1], string4045);
              var opresult4053 = callmethodChecked(opresult4051, "&&", [1], opresult4043);
              return opresult4053;
            };
            var string4055 = new GraceString("member");
            var call4057 = callmethodChecked(var_o, "value", [0]);
            var call4058 = callmethodChecked(call4057, "kind", [0]);
            var opresult4060 = callmethodChecked(call4058, "==", [1], string4055);
            var opresult4062 = callmethodChecked(opresult4060, "&&", [1], block4036);
            if (Grace_isTrue(opresult4062)) {
              setLineNumber(1030);    // compilenode string
              var string4063 = new GraceString("\", [");
              var call4065 = callmethodChecked(var_o, "value", [0]);
              var call4066 = callmethodChecked(call4065, "value", [0]);
              onSelf = true;
              var call4067 = callmethodChecked(this, "escapestring", [1], call4066);
              setLineNumber(1029);    // compilenode string
              var string4069 = new GraceString("(var_prelude, \"");
              var string4072 = new GraceString(" = ");
              var string4075 = new GraceString("var call");
              var opresult4077 = callmethodChecked(string4075, "++", [1], var_auto__95__count);
              var opresult4079 = callmethodChecked(opresult4077, "++", [1], string4072);
              var opresult4081 = callmethodChecked(opresult4079, "++", [1], var_requestCall);
              var opresult4083 = callmethodChecked(opresult4081, "++", [1], string4069);
              var opresult4085 = callmethodChecked(opresult4083, "++", [1], call4067);
              var opresult4087 = callmethodChecked(opresult4085, "++", [1], string4063);
              var var_call = opresult4087;
              setLineNumber(1031);    // compilenode string
              var string4088 = new GraceString("]");
              var opresult4092 = callmethodChecked(var_call, "++", [1], var_partl);
              var opresult4094 = callmethodChecked(opresult4092, "++", [1], string4088);
              var_call = opresult4094;
              setLineNumber(1032);    // compilenode block
              var block4095 = new GraceBlock(this, 1032, 1);
              setLineNumber(1);    // compilenode identifier
              block4095.real = function(var_arg) {
                setLineNumber(1033);    // compilenode string
                var string4097 = new GraceString(", ");
                var opresult4100 = callmethodChecked(var_call, "++", [1], string4097);
                var opresult4102 = callmethodChecked(opresult4100, "++", [1], var_arg);
                var_call = opresult4102;
                return GraceDone;
              };
              var call4103 = callmethodChecked(var_prelude, "for()do", [1, 1], var_args, block4095);
              setLineNumber(1035);    // compilenode string
              var string4104 = new GraceString(");");
              var opresult4107 = callmethodChecked(var_call, "++", [1], string4104);
              var_call = opresult4107;
              setLineNumber(1036);    // compilenode identifier
              onSelf = true;
              var call4108 = callmethodChecked(this, "out", [1], var_call);
              if4035 = call4108;
            } else {
              var if4109 = GraceDone;
              setLineNumber(1037);    // compilenode string
              var string4110 = new GraceString("member");
              var call4112 = callmethodChecked(var_o, "value", [0]);
              var call4113 = callmethodChecked(call4112, "kind", [0]);
              var opresult4115 = callmethodChecked(call4113, "==", [1], string4110);
              if (Grace_isTrue(opresult4115)) {
                setLineNumber(1038);    // compilenode identifier
                var call4116 = callmethodChecked(var_o, "value", [0]);
                var call4117 = callmethodChecked(call4116, "in", [0]);
                onSelf = true;
                var call4118 = callmethodChecked(this, "compilenode", [1], call4117);
                var_obj = call4118;
                setLineNumber(1040);    // compilenode string
                var string4119 = new GraceString("\", [");
                var call4121 = callmethodChecked(var_o, "value", [0]);
                var call4122 = callmethodChecked(call4121, "value", [0]);
                onSelf = true;
                var call4123 = callmethodChecked(this, "escapestring", [1], call4122);
                var string4125 = new GraceString(", \"");
                setLineNumber(1039);    // compilenode string
                var string4128 = new GraceString("(");
                var string4131 = new GraceString(" = ");
                var string4134 = new GraceString("var call");
                var opresult4136 = callmethodChecked(string4134, "++", [1], var_auto__95__count);
                var opresult4138 = callmethodChecked(opresult4136, "++", [1], string4131);
                var opresult4140 = callmethodChecked(opresult4138, "++", [1], var_requestCall);
                var opresult4142 = callmethodChecked(opresult4140, "++", [1], string4128);
                var opresult4144 = callmethodChecked(opresult4142, "++", [1], var_obj);
                var opresult4146 = callmethodChecked(opresult4144, "++", [1], string4125);
                var opresult4148 = callmethodChecked(opresult4146, "++", [1], call4123);
                var opresult4150 = callmethodChecked(opresult4148, "++", [1], string4119);
                var var_call = opresult4150;
                setLineNumber(1041);    // compilenode string
                var string4151 = new GraceString("]");
                var opresult4155 = callmethodChecked(var_call, "++", [1], var_partl);
                var opresult4157 = callmethodChecked(opresult4155, "++", [1], string4151);
                var_call = opresult4157;
                setLineNumber(1042);    // compilenode block
                var block4158 = new GraceBlock(this, 1042, 1);
                setLineNumber(1);    // compilenode identifier
                block4158.real = function(var_arg) {
                  setLineNumber(1043);    // compilenode string
                  var string4160 = new GraceString(", ");
                  var opresult4163 = callmethodChecked(var_call, "++", [1], string4160);
                  var opresult4165 = callmethodChecked(opresult4163, "++", [1], var_arg);
                  var_call = opresult4165;
                  return GraceDone;
                };
                var call4166 = callmethodChecked(var_prelude, "for()do", [1, 1], var_args, block4158);
                setLineNumber(1045);    // compilenode string
                var string4167 = new GraceString(");");
                var opresult4170 = callmethodChecked(var_call, "++", [1], string4167);
                var_call = opresult4170;
                setLineNumber(1046);    // compilenode identifier
                onSelf = true;
                var call4171 = callmethodChecked(this, "out", [1], var_call);
                if4109 = call4171;
              } else {
                setLineNumber(1048);    // compilenode string
                var string4172 = new GraceString("this");
                var_obj = string4172;
                setLineNumber(1050);    // compilenode string
                var string4173 = new GraceString("\", [");
                var call4175 = callmethodChecked(var_o, "value", [0]);
                var call4176 = callmethodChecked(call4175, "value", [0]);
                onSelf = true;
                var call4177 = callmethodChecked(this, "escapestring", [1], call4176);
                var string4179 = new GraceString("\"");
                setLineNumber(1049);    // compilenode string
                var string4181 = new GraceString("(this,");
                var string4184 = new GraceString(" = ");
                var string4187 = new GraceString("var call");
                var opresult4189 = callmethodChecked(string4187, "++", [1], var_auto__95__count);
                var opresult4191 = callmethodChecked(opresult4189, "++", [1], string4184);
                var opresult4193 = callmethodChecked(opresult4191, "++", [1], var_requestCall);
                var opresult4195 = callmethodChecked(opresult4193, "++", [1], string4181);
                var opresult4197 = callmethodChecked(opresult4195, "++", [1], string4179);
                var opresult4199 = callmethodChecked(opresult4197, "++", [1], call4177);
                var opresult4201 = callmethodChecked(opresult4199, "++", [1], string4173);
                var var_call = opresult4201;
                setLineNumber(1051);    // compilenode string
                var string4202 = new GraceString("]");
                var opresult4206 = callmethodChecked(var_call, "++", [1], var_partl);
                var opresult4208 = callmethodChecked(opresult4206, "++", [1], string4202);
                var_call = opresult4208;
                setLineNumber(1052);    // compilenode block
                var block4209 = new GraceBlock(this, 1052, 1);
                setLineNumber(1);    // compilenode identifier
                block4209.real = function(var_arg) {
                  setLineNumber(1053);    // compilenode string
                  var string4211 = new GraceString(", ");
                  var opresult4214 = callmethodChecked(var_call, "++", [1], string4211);
                  var opresult4216 = callmethodChecked(opresult4214, "++", [1], var_arg);
                  var_call = opresult4216;
                  return GraceDone;
                };
                var call4217 = callmethodChecked(var_prelude, "for()do", [1, 1], var_args, block4209);
                setLineNumber(1055);    // compilenode string
                var string4218 = new GraceString(");");
                var opresult4221 = callmethodChecked(var_call, "++", [1], string4218);
                var_call = opresult4221;
                setLineNumber(1056);    // compilenode identifier
                onSelf = true;
                var call4222 = callmethodChecked(this, "out", [1], var_call);
                if4109 = call4222;
              }
              if4035 = if4109;
            }
            if3955 = if4035;
          }
          if3898 = if3955;
        }
        if3805 = if3898;
      }
      if3734 = if3805;
    }
    setLineNumber(1058);    // compilenode string
    var string4224 = new GraceString("call");
    var opresult4226 = callmethodChecked(string4224, "++", [1], var_auto__95__count);
    var call4227 = callmethodChecked(var_o, "register:=", [1], opresult4226);
    setLineNumber(1059);    // compilenode identifier
    var opresult4230 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult4230;
    return GraceDone;
  };
  func3658.paramCounts = [1];
  this.methods["compilecall"] = func3658;
  func3658.definitionLine = 955;
  func3658.definitionModule = "genjs";
  setLineNumber(1062);    // compilenode method
  var func4231 = function(argcv) {    // method compiledialect(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compiledialect(1)"));
    setModuleName("genjs");
    setLineNumber(1063);    // compilenode string
    var string4232 = new GraceString("");
    var call4234 = callmethodChecked(var_o, "value", [0]);
    var string4236 = new GraceString("// Dialect import of ");
    var opresult4238 = callmethodChecked(string4236, "++", [1], call4234);
    var opresult4240 = callmethodChecked(opresult4238, "++", [1], string4232);
    onSelf = true;
    var call4241 = callmethodChecked(this, "out", [1], opresult4240);
    setLineNumber(1064);    // compilenode identifier
    var call4242 = callmethodChecked(var_o, "value", [0]);
    onSelf = true;
    var call4243 = callmethodChecked(this, "escapestring", [1], call4242);
    var var_fn = call4243;
    setLineNumber(1065);    // compilenode string
    var string4244 = new GraceString(");");
    var call4246 = callmethodChecked(var_o, "value", [0]);
    onSelf = true;
    var call4247 = callmethodChecked(this, "formatModname", [1], call4246);
    var string4249 = new GraceString("\", ");
    var string4252 = new GraceString("var_prelude = do_import(\"");
    var opresult4254 = callmethodChecked(string4252, "++", [1], var_fn);
    var opresult4256 = callmethodChecked(opresult4254, "++", [1], string4249);
    var opresult4258 = callmethodChecked(opresult4256, "++", [1], call4247);
    var opresult4260 = callmethodChecked(opresult4258, "++", [1], string4244);
    onSelf = true;
    var call4261 = callmethodChecked(this, "out", [1], opresult4260);
    setLineNumber(1066);    // compilenode string
    var string4262 = new GraceString("this.outer = var_prelude;");
    onSelf = true;
    var call4263 = callmethodChecked(this, "out", [1], string4262);
    var if4264 = GraceDone;
    setLineNumber(1067);    // compilenode identifier
    var call4265 = callmethodChecked(var_xmodule, "currentDialect", [0]);
    var call4266 = callmethodChecked(call4265, "hasAtStart", [0]);
    if (Grace_isTrue(call4266)) {
      setLineNumber(1068);    // compilenode string
      var string4267 = new GraceString("callmethod(var_prelude, \"atModuleStart\", [1], ");
      onSelf = true;
      var call4268 = callmethodChecked(this, "out", [1], string4267);
      setLineNumber(1069);    // compilenode string
      var string4269 = new GraceString("\"));");
      onSelf = true;
      var call4271 = callmethodChecked(this, "escapestring", [1], var_modname);
      var string4273 = new GraceString("  new GraceString(\"");
      var opresult4275 = callmethodChecked(string4273, "++", [1], call4271);
      var opresult4277 = callmethodChecked(opresult4275, "++", [1], string4269);
      onSelf = true;
      var call4278 = callmethodChecked(this, "out", [1], opresult4277);
      if4264 = call4278;
    }
    setLineNumber(1071);    // compilenode string
    var string4279 = new GraceString("undefined");
    var call4280 = callmethodChecked(var_o, "register:=", [1], string4279);
    return call4280;
  };
  func4231.paramCounts = [1];
  this.methods["compiledialect"] = func4231;
  func4231.definitionLine = 1062;
  func4231.definitionModule = "genjs";
  setLineNumber(1073);    // compilenode method
  var func4281 = function(argcv) {    // method compileimport(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compileimport(1)"));
    setModuleName("genjs");
    setLineNumber(1074);    // compilenode string
    var string4282 = new GraceString("");
    var call4284 = callmethodChecked(var_o, "nameString", [0]);
    var string4286 = new GraceString(" as ");
    var call4288 = callmethodChecked(var_o, "path", [0]);
    var string4290 = new GraceString("// Import of ");
    var opresult4292 = callmethodChecked(string4290, "++", [1], call4288);
    var opresult4294 = callmethodChecked(opresult4292, "++", [1], string4286);
    var opresult4296 = callmethodChecked(opresult4294, "++", [1], call4284);
    var opresult4298 = callmethodChecked(opresult4296, "++", [1], string4282);
    onSelf = true;
    var call4299 = callmethodChecked(this, "out", [1], opresult4298);
    setLineNumber(1075);    // compilenode identifier
    var call4300 = callmethodChecked(var_o, "scope", [0]);
    var var_currentScope = call4300;
    setLineNumber(1076);    // compilenode identifier
    var call4301 = callmethodChecked(var_o, "nameString", [0]);
    onSelf = true;
    var call4302 = callmethodChecked(this, "escapeident", [1], call4301);
    var var_nm = call4302;
    setLineNumber(1077);    // compilenode identifier
    var call4303 = callmethodChecked(var_o, "path", [0]);
    onSelf = true;
    var call4304 = callmethodChecked(this, "escapestring", [1], call4303);
    var var_fn = call4304;
    setLineNumber(1078);    // compilenode string
    var string4305 = new GraceString(" == 'undefined')");
    var call4307 = callmethodChecked(var_o, "path", [0]);
    onSelf = true;
    var call4308 = callmethodChecked(this, "formatModname", [1], call4307);
    var string4310 = new GraceString("if (typeof ");
    var opresult4312 = callmethodChecked(string4310, "++", [1], call4308);
    var opresult4314 = callmethodChecked(opresult4312, "++", [1], string4305);
    onSelf = true;
    var call4315 = callmethodChecked(this, "out", [1], opresult4314);
    setLineNumber(1079);    // compilenode string
    var string4316 = new GraceString("  throw new GraceExceptionPacket(EnvironmentExceptionObject, ");
    onSelf = true;
    var call4317 = callmethodChecked(this, "out", [1], string4316);
    setLineNumber(1080);    // compilenode string
    var string4318 = new GraceString("'));");
    var call4320 = callmethodChecked(var_o, "path", [0]);
    var string4322 = new GraceString("    new GraceString('could not find module ");
    var opresult4324 = callmethodChecked(string4322, "++", [1], call4320);
    var opresult4326 = callmethodChecked(opresult4324, "++", [1], string4318);
    onSelf = true;
    var call4327 = callmethodChecked(this, "out", [1], opresult4326);
    setLineNumber(1081);    // compilenode string
    var string4328 = new GraceString(");");
    var call4330 = callmethodChecked(var_o, "path", [0]);
    onSelf = true;
    var call4331 = callmethodChecked(this, "formatModname", [1], call4330);
    var string4333 = new GraceString("\", ");
    var string4336 = new GraceString(" = do_import(\"");
    var opresult4338 = callmethodChecked(string4336, "++", [1], var_fn);
    var opresult4340 = callmethodChecked(opresult4338, "++", [1], string4333);
    var opresult4342 = callmethodChecked(opresult4340, "++", [1], call4331);
    var opresult4344 = callmethodChecked(opresult4342, "++", [1], string4328);
    onSelf = true;
    var call4346 = callmethodChecked(this, "varf", [1], var_nm);
    var string4348 = new GraceString("var ");
    var opresult4350 = callmethodChecked(string4348, "++", [1], call4346);
    var opresult4352 = callmethodChecked(opresult4350, "++", [1], opresult4344);
    onSelf = true;
    var call4353 = callmethodChecked(this, "out", [1], opresult4352);
    setLineNumber(1082);    // compilenode identifier
    var call4354 = callmethodChecked(var_o, "value", [0]);
    var var_methodIdent = call4354;
    setLineNumber(1083);    // compilenode identifier
    var call4356 = callmethodChecked(var_o, "nameString", [0]);
    var call4357 = callmethodChecked(var_ast, "signaturePart", [0]);
    var call4358 = callmethodChecked(call4357, "partName()scope", [1, 1], call4356, var_currentScope);
    var array4355 = new PrimitiveGraceList([call4358]);
    setLineNumber(1084);    // compilenode identifier
    var array4359 = new PrimitiveGraceList([var_methodIdent]);
    var call4360 = callmethodChecked(var_o, "dtype", [0]);
    setLineNumber(1083);    // compilenode identifier
    var call4361 = callmethodChecked(var_ast, "methodNode", [0]);
    var call4362 = callmethodChecked(call4361, "new()scope", [4, 1], var_methodIdent, array4355, array4359, call4360, var_currentScope);
    var var_accessor = call4362;
    setLineNumber(1085);    // compilenode identifier
    var call4363 = callmethodChecked(var_o, "line", [0]);
    var call4364 = callmethodChecked(var_accessor, "line:=", [1], call4363);
    setLineNumber(1086);    // compilenode identifier
    var call4365 = callmethodChecked(var_o, "linePos", [0]);
    var call4366 = callmethodChecked(var_accessor, "linePos:=", [1], call4365);
    setLineNumber(1087);    // compilenode identifier
    var call4367 = callmethodChecked(var_o, "annotations", [0]);
    var call4368 = callmethodChecked(var_accessor, "annotations", [0]);
    var call4369 = callmethodChecked(call4368, "addAll", [1], call4367);
    setLineNumber(1088);    // compilenode identifier
    onSelf = true;
    var call4370 = callmethodChecked(this, "compilenode", [1], var_accessor);
    setLineNumber(1089);    // compilenode string
    var string4371 = new GraceString(".debug = \"import\";");
    var call4373 = callmethodChecked(var_accessor, "register", [0]);
    var string4375 = new GraceString("");
    var opresult4377 = callmethodChecked(string4375, "++", [1], call4373);
    var opresult4379 = callmethodChecked(opresult4377, "++", [1], string4371);
    onSelf = true;
    var call4380 = callmethodChecked(this, "out", [1], opresult4379);
    var if4381 = GraceDone;
    setLineNumber(1090);    // compilenode identifier
    var call4382 = callmethodChecked(var_o, "isReadable", [0]);
    var call4383 = callmethodChecked(call4382, "not", [0]);
    if (Grace_isTrue(call4383)) {
      setLineNumber(1091);    // compilenode string
      var string4384 = new GraceString(".confidential = true;");
      var call4386 = callmethodChecked(var_accessor, "register", [0]);
      var string4388 = new GraceString("");
      var opresult4390 = callmethodChecked(string4388, "++", [1], call4386);
      var opresult4392 = callmethodChecked(opresult4390, "++", [1], string4384);
      onSelf = true;
      var call4393 = callmethodChecked(this, "out", [1], opresult4392);
      if4381 = call4393;
    }
    var if4394 = GraceDone;
    setLineNumber(1093);    // compilenode identifier
    if (Grace_isTrue(var_emitTypeChecks)) {
      var if4395 = GraceDone;
      setLineNumber(1094);    // compilenode identifier
      var call4397 = callmethodChecked(var_o, "dtype", [0]);
      var opresult4399 = callmethodChecked(call4397, "\u2260", [1], GraceFalse);
      if (Grace_isTrue(opresult4399)) {
        var if4400 = GraceDone;
        setLineNumber(1095);    // compilenode string
        var string4401 = new GraceString("Unknown");
        var call4403 = callmethodChecked(var_o, "dtype", [0]);
        var call4404 = callmethodChecked(call4403, "value", [0]);
        var opresult4406 = callmethodChecked(call4404, "\u2260", [1], string4401);
        if (Grace_isTrue(opresult4406)) {
          setLineNumber(1096);    // compilenode string
          var string4407 = new GraceString(", \"match\",");
          var call4409 = callmethodChecked(var_o, "dtype", [0]);
          onSelf = true;
          var call4410 = callmethodChecked(this, "compilenode", [1], call4409);
          var string4412 = new GraceString("if (!Grace_isTrue(callmethod(");
          var opresult4414 = callmethodChecked(string4412, "++", [1], call4410);
          var opresult4416 = callmethodChecked(opresult4414, "++", [1], string4407);
          onSelf = true;
          var call4417 = callmethodChecked(this, "out", [1], opresult4416);
          setLineNumber(1097);    // compilenode string
          var string4418 = new GraceString(")))");
          onSelf = true;
          var call4420 = callmethodChecked(this, "varf", [1], var_nm);
          var string4422 = new GraceString("  [1], ");
          var opresult4424 = callmethodChecked(string4422, "++", [1], call4420);
          var opresult4426 = callmethodChecked(opresult4424, "++", [1], string4418);
          onSelf = true;
          var call4427 = callmethodChecked(this, "out", [1], opresult4426);
          setLineNumber(1098);    // compilenode string
          var string4428 = new GraceString("    throw new GraceExceptionPacket(TypeErrorObject,");
          onSelf = true;
          var call4429 = callmethodChecked(this, "out", [1], string4428);
          setLineNumber(1099);    // compilenode string
          var string4430 = new GraceString("\"))");
          var call4432 = callmethodChecked(var_o, "dtype", [0]);
          var call4433 = callmethodChecked(call4432, "toGrace", [1], new GraceNum(0));
          var string4435 = new GraceString(" is not of type ");
          var call4437 = callmethodChecked(var_o, "nameString", [0]);
          var string4439 = new GraceString("          new GraceString(\"module ");
          var opresult4441 = callmethodChecked(string4439, "++", [1], call4437);
          var opresult4443 = callmethodChecked(opresult4441, "++", [1], string4435);
          var opresult4445 = callmethodChecked(opresult4443, "++", [1], call4433);
          var opresult4447 = callmethodChecked(opresult4445, "++", [1], string4430);
          onSelf = true;
          var call4448 = callmethodChecked(this, "out", [1], opresult4447);
          if4400 = call4448;
        }
        if4395 = if4400;
      }
      if4394 = if4395;
    }
    setLineNumber(1103);    // compilenode string
    var string4449 = new GraceString("\");");
    var string4452 = new GraceString("setModuleName(\"");
    var opresult4454 = callmethodChecked(string4452, "++", [1], var_modname);
    var opresult4456 = callmethodChecked(opresult4454, "++", [1], string4449);
    onSelf = true;
    var call4457 = callmethodChecked(this, "out", [1], opresult4456);
    setLineNumber(1104);    // compilenode string
    var string4458 = new GraceString("undefined");
    var call4459 = callmethodChecked(var_o, "register:=", [1], string4458);
    return call4459;
  };
  func4281.paramCounts = [1];
  this.methods["compileimport"] = func4281;
  func4281.definitionLine = 1073;
  func4281.definitionModule = "genjs";
  setLineNumber(1106);    // compilenode method
  var func4460 = function(argcv) {    // method compilereturn(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compilereturn(1)"));
    setModuleName("genjs");
    setLineNumber(1107);    // compilenode identifier
    var call4461 = callmethodChecked(var_o, "value", [0]);
    onSelf = true;
    var call4462 = callmethodChecked(this, "compilenode", [1], call4461);
    var var_reg = call4462;
    var if4463 = GraceDone;
    setLineNumber(1108);    // compilenode identifier
    if (Grace_isTrue(var_inBlock)) {
      setLineNumber(1109);    // compilenode string
      var string4464 = new GraceString(", returnTarget);");
      var string4467 = new GraceString("throw new ReturnException(");
      var opresult4469 = callmethodChecked(string4467, "++", [1], var_reg);
      var opresult4471 = callmethodChecked(opresult4469, "++", [1], string4464);
      onSelf = true;
      var call4472 = callmethodChecked(this, "out", [1], opresult4471);
      if4463 = call4472;
    } else {
      setLineNumber(1111);    // compilenode string
      var string4473 = new GraceString(";");
      var string4476 = new GraceString("return ");
      var opresult4478 = callmethodChecked(string4476, "++", [1], var_reg);
      var opresult4480 = callmethodChecked(opresult4478, "++", [1], string4473);
      onSelf = true;
      var call4481 = callmethodChecked(this, "out", [1], opresult4480);
      if4463 = call4481;
    }
    setLineNumber(1113);    // compilenode string
    var string4482 = new GraceString("undefined");
    var call4483 = callmethodChecked(var_o, "register:=", [1], string4482);
    return call4483;
  };
  func4460.paramCounts = [1];
  this.methods["compilereturn"] = func4460;
  func4460.definitionLine = 1106;
  func4460.definitionModule = "genjs";
  setLineNumber(1115);    // compilenode method
  var func4484 = function(argcv) {    // method compilePrint(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compilePrint(1)"));
    setModuleName("genjs");
    setLineNumber(1116);    // compilenode array
    var array4485 = new PrimitiveGraceList([]);
    var var_args = array4485;
    setLineNumber(1117);    // compilenode identifier
    var call4486 = callmethodChecked(var_o, "with", [0]);
    var block4487 = new GraceBlock(this, 1117, 1);
    setLineNumber(1);    // compilenode identifier
    block4487.real = function(var_part) {
      setLineNumber(1118);    // compilenode identifier
      var call4488 = callmethodChecked(var_part, "args", [0]);
      var block4489 = new GraceBlock(this, 1118, 1);
      setLineNumber(1);    // compilenode identifier
      block4489.real = function(var_prm) {
        setLineNumber(1119);    // compilenode identifier
        onSelf = true;
        var call4490 = callmethodChecked(this, "compilenode", [1], var_prm);
        var var_r = call4490;
        setLineNumber(1120);    // compilenode identifier
        var call4491 = callmethodChecked(var_args, "push", [1], var_r);
        return call4491;
      };
      var call4492 = callmethodChecked(var_prelude, "for()do", [1, 1], call4488, block4489);
      return call4492;
    };
    var call4493 = callmethodChecked(var_prelude, "for()do", [1, 1], call4486, block4487);
    var if4494 = GraceDone;
    setLineNumber(1123);    // compilenode identifier
    var call4496 = callmethodChecked(var_args, "size", [0]);
    var opresult4498 = callmethodChecked(call4496, "\u2260", [1], new GraceNum(1));
    if (Grace_isTrue(opresult4498)) {
      setLineNumber(1124);    // compilenode string
      var string4499 = new GraceString("method print takes a single argument");
      setLineNumber(1125);    // compilenode identifier
      var call4500 = callmethodChecked(var_o, "line", [0]);
      var call4501 = callmethodChecked(var_o, "linePos", [0]);
      var call4503 = callmethodChecked(var_o, "linePos", [0]);
      var opresult4505 = callmethodChecked(call4503, "+", [1], new GraceNum(4));
      setLineNumber(1124);    // compilenode identifier
      var call4506 = callmethodChecked(var_errormessages, "syntaxError()atRange", [1, 3], string4499, call4500, call4501, opresult4505);
      if4494 = call4506;
    } else {
      setLineNumber(1127);    // compilenode string
      var string4507 = new GraceString(");");
      var call4509 = callmethodChecked(var_args, "first", [0]);
      var string4511 = new GraceString(" = Grace_print(");
      var string4514 = new GraceString("var call");
      var opresult4516 = callmethodChecked(string4514, "++", [1], var_auto__95__count);
      var opresult4518 = callmethodChecked(opresult4516, "++", [1], string4511);
      var opresult4520 = callmethodChecked(opresult4518, "++", [1], call4509);
      var opresult4522 = callmethodChecked(opresult4520, "++", [1], string4507);
      onSelf = true;
      var call4523 = callmethodChecked(this, "out", [1], opresult4522);
      if4494 = call4523;
    }
    setLineNumber(1129);    // compilenode string
    var string4525 = new GraceString("call");
    var opresult4527 = callmethodChecked(string4525, "++", [1], var_auto__95__count);
    var call4528 = callmethodChecked(var_o, "register:=", [1], opresult4527);
    setLineNumber(1130);    // compilenode identifier
    var opresult4531 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult4531;
    return GraceDone;
  };
  func4484.paramCounts = [1];
  this.methods["compilePrint"] = func4484;
  func4484.definitionLine = 1115;
  func4484.definitionModule = "genjs";
  setLineNumber(1132);    // compilenode method
  var func4532 = function(argcv) {    // method compileNativeCode(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compileNativeCode(1)"));
    setModuleName("genjs");
    var if4533 = GraceDone;
    setLineNumber(1133);    // compilenode identifier
    var call4535 = callmethodChecked(var_o, "with", [0]);
    var call4536 = callmethodChecked(call4535, "size", [0]);
    var opresult4538 = callmethodChecked(call4536, "\u2260", [1], new GraceNum(2));
    if (Grace_isTrue(opresult4538)) {
      setLineNumber(1134);    // compilenode string
      var string4539 = new GraceString("method native()code takes two arguments");
      setLineNumber(1135);    // compilenode identifier
      var call4540 = callmethodChecked(var_o, "line", [0]);
      var call4541 = callmethodChecked(var_o, "linePos", [0]);
      var call4543 = callmethodChecked(var_o, "linePos", [0]);
      var opresult4545 = callmethodChecked(call4543, "+", [1], new GraceNum(5));
      setLineNumber(1134);    // compilenode identifier
      var call4546 = callmethodChecked(var_errormessages, "syntaxError()atRange", [1, 3], string4539, call4540, call4541, opresult4545);
      if4533 = call4546;
    }
    setLineNumber(1137);    // compilenode identifier
    var call4547 = callmethodChecked(var_o, "with", [0]);
    var call4548 = callmethodChecked(call4547, "first", [0]);
    var call4549 = callmethodChecked(call4548, "args", [0]);
    var call4550 = callmethodChecked(call4549, "first", [0]);
    var var_param1 = call4550;
    var if4551 = GraceDone;
    setLineNumber(1138);    // compilenode string
    var string4552 = new GraceString("string");
    var call4554 = callmethodChecked(var_param1, "kind", [0]);
    var opresult4556 = callmethodChecked(call4554, "\u2260", [1], string4552);
    if (Grace_isTrue(opresult4556)) {
      setLineNumber(1139);    // compilenode string
      var string4557 = new GraceString("the first argument to native()code must be a string literal");
      setLineNumber(1140);    // compilenode identifier
      var call4558 = callmethodChecked(var_param1, "line", [0]);
      var call4559 = callmethodChecked(var_param1, "linePos", [0]);
      var call4560 = callmethodChecked(var_param1, "linePos", [0]);
      setLineNumber(1139);    // compilenode identifier
      var call4561 = callmethodChecked(var_errormessages, "syntaxError()atRange", [1, 3], string4557, call4558, call4559, call4560);
      if4551 = call4561;
    }
    var if4562 = GraceDone;
    setLineNumber(1142);    // compilenode string
    var string4563 = new GraceString("js");
    var call4565 = callmethodChecked(var_param1, "value", [0]);
    var opresult4567 = callmethodChecked(call4565, "\u2260", [1], string4563);
    if (Grace_isTrue(opresult4567)) {
      setLineNumber(1143);    // compilenode string
      var string4568 = new GraceString("GraceDone");
      var call4569 = callmethodChecked(var_o, "register:=", [1], string4568);
      setLineNumber(1145);    // compilenode identifier
      return var_done;
    }
    setLineNumber(1146);    // compilenode identifier
    var call4570 = callmethodChecked(var_o, "with", [0]);
    var call4571 = callmethodChecked(call4570, "second", [0]);
    var call4572 = callmethodChecked(call4571, "args", [0]);
    var call4573 = callmethodChecked(call4572, "first", [0]);
    var var_param2 = call4573;
    var if4574 = GraceDone;
    setLineNumber(1147);    // compilenode string
    var string4575 = new GraceString("string");
    var call4577 = callmethodChecked(var_param2, "kind", [0]);
    var opresult4579 = callmethodChecked(call4577, "\u2260", [1], string4575);
    if (Grace_isTrue(opresult4579)) {
      setLineNumber(1148);    // compilenode string
      var string4580 = new GraceString("the second argument to native()code must be a string literal");
      setLineNumber(1149);    // compilenode identifier
      var call4581 = callmethodChecked(var_param2, "line", [0]);
      setLineNumber(1148);    // compilenode identifier
      var call4582 = callmethodChecked(var_errormessages, "syntaxError()atLine", [1, 1], string4580, call4581);
      if4574 = call4582;
    }
    setLineNumber(1151);    // compilenode identifier
    var call4583 = callmethodChecked(var_param2, "value", [0]);
    var var_codeString = call4583;
    setLineNumber(1152);    // compilenode string
    var string4584 = new GraceString("");
    var call4586 = callmethodChecked(var_o, "line", [0]);
    var string4588 = new GraceString("   // start native code from line ");
    var opresult4590 = callmethodChecked(string4588, "++", [1], call4586);
    var opresult4592 = callmethodChecked(opresult4590, "++", [1], string4584);
    onSelf = true;
    var call4593 = callmethodChecked(this, "out", [1], opresult4592);
    setLineNumber(1153);    // compilenode string
    var string4594 = new GraceString("var result = GraceDone;");
    onSelf = true;
    var call4595 = callmethodChecked(this, "out", [1], string4594);
    setLineNumber(1154);    // compilenode identifier
    onSelf = true;
    var call4596 = callmethodChecked(this, "out", [1], var_codeString);
    setLineNumber(1155);    // compilenode string
    var string4598 = new GraceString("nat");
    var opresult4600 = callmethodChecked(string4598, "++", [1], var_auto__95__count);
    var var_reg = opresult4600;
    setLineNumber(1156);    // compilenode identifier
    var opresult4603 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult4603;
    setLineNumber(1157);    // compilenode string
    var string4604 = new GraceString(" = result;");
    var string4607 = new GraceString("var ");
    var opresult4609 = callmethodChecked(string4607, "++", [1], var_reg);
    var opresult4611 = callmethodChecked(opresult4609, "++", [1], string4604);
    onSelf = true;
    var call4612 = callmethodChecked(this, "out", [1], opresult4611);
    setLineNumber(1158);    // compilenode identifier
    var call4613 = callmethodChecked(var_o, "register:=", [1], var_reg);
    setLineNumber(1159);    // compilenode string
    var string4614 = new GraceString("   // end native code insertion");
    onSelf = true;
    var call4615 = callmethodChecked(this, "out", [1], string4614);
    return call4615;
  };
  func4532.paramCounts = [1];
  this.methods["compileNativeCode"] = func4532;
  func4532.definitionLine = 1132;
  func4532.definitionModule = "genjs";
  setLineNumber(1162);    // compilenode method
  var func4616 = function(argcv) {    // method compilenode(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compilenode(1)"));
    setModuleName("genjs");
    setLineNumber(1163);    // compilenode identifier
    var opresult4619 = callmethodChecked(var_compilationDepth, "+", [1], new GraceNum(1));
    var_compilationDepth = opresult4619;
    setLineNumber(1164);    // compilenode identifier
    var call4620 = callmethodChecked(var_o, "line", [0]);
    var string4621 = new GraceString("");
    var call4623 = callmethodChecked(var_o, "kind", [0]);
    var string4625 = new GraceString("compilenode ");
    var opresult4627 = callmethodChecked(string4625, "++", [1], call4623);
    var opresult4629 = callmethodChecked(opresult4627, "++", [1], string4621);
    onSelf = true;
    var call4630 = callmethodChecked(this, "noteLineNumber()comment", [1, 1], call4620, opresult4629);
    setLineNumber(1165);    // compilenode identifier
    var call4631 = callmethodChecked(var_o, "kind", [0]);
    var var_oKind = call4631;
    var if4632 = GraceDone;
    setLineNumber(1166);    // compilenode string
    var string4633 = new GraceString("num");
    var opresult4636 = callmethodChecked(var_oKind, "==", [1], string4633);
    if (Grace_isTrue(opresult4636)) {
      setLineNumber(1167);    // compilenode string
      var string4637 = new GraceString(")");
      var call4639 = callmethodChecked(var_o, "value", [0]);
      var string4641 = new GraceString("new GraceNum(");
      var opresult4643 = callmethodChecked(string4641, "++", [1], call4639);
      var opresult4645 = callmethodChecked(opresult4643, "++", [1], string4637);
      var call4646 = callmethodChecked(var_o, "register:=", [1], opresult4645);
      if4632 = call4646;
    }
    var if4647 = GraceDone;
    setLineNumber(1169);    // compilenode string
    var string4648 = new GraceString("string");
    var opresult4651 = callmethodChecked(var_oKind, "==", [1], string4648);
    if (Grace_isTrue(opresult4651)) {
      setLineNumber(1171);    // compilenode identifier
      var call4652 = callmethodChecked(var_o, "value", [0]);
      onSelf = true;
      var call4653 = callmethodChecked(this, "escapestring", [1], call4652);
      var var_os = call4653;
      setLineNumber(1173);    // compilenode string
      var string4654 = new GraceString("\");");
      setLineNumber(1172);    // compilenode string
      var string4657 = new GraceString(" = new GraceString(\"");
      var string4660 = new GraceString("var string");
      var opresult4662 = callmethodChecked(string4660, "++", [1], var_auto__95__count);
      var opresult4664 = callmethodChecked(opresult4662, "++", [1], string4657);
      var opresult4666 = callmethodChecked(opresult4664, "++", [1], var_os);
      var opresult4668 = callmethodChecked(opresult4666, "++", [1], string4654);
      onSelf = true;
      var call4669 = callmethodChecked(this, "out", [1], opresult4668);
      setLineNumber(1174);    // compilenode string
      var string4671 = new GraceString("string");
      var opresult4673 = callmethodChecked(string4671, "++", [1], var_auto__95__count);
      var call4674 = callmethodChecked(var_o, "register:=", [1], opresult4673);
      setLineNumber(1175);    // compilenode identifier
      var opresult4677 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
      var_auto__95__count = opresult4677;
      if4647 = GraceDone;
    } else {
      var if4678 = GraceDone;
      setLineNumber(1176);    // compilenode string
      var string4679 = new GraceString("dialect");
      var opresult4682 = callmethodChecked(var_oKind, "==", [1], string4679);
      if (Grace_isTrue(opresult4682)) {
        setLineNumber(1177);    // compilenode identifier
        onSelf = true;
        var call4683 = callmethodChecked(this, "compiledialect", [1], var_o);
        if4678 = call4683;
      } else {
        var if4684 = GraceDone;
        setLineNumber(1178);    // compilenode string
        var string4685 = new GraceString("import");
        var opresult4688 = callmethodChecked(var_oKind, "==", [1], string4685);
        if (Grace_isTrue(opresult4688)) {
          setLineNumber(1179);    // compilenode identifier
          onSelf = true;
          var call4689 = callmethodChecked(this, "compileimport", [1], var_o);
          if4684 = call4689;
        } else {
          var if4690 = GraceDone;
          setLineNumber(1180);    // compilenode string
          var string4691 = new GraceString("return");
          var opresult4694 = callmethodChecked(var_oKind, "==", [1], string4691);
          if (Grace_isTrue(opresult4694)) {
            setLineNumber(1181);    // compilenode identifier
            onSelf = true;
            var call4695 = callmethodChecked(this, "compilereturn", [1], var_o);
            if4690 = call4695;
          } else {
            var if4696 = GraceDone;
            setLineNumber(1182);    // compilenode string
            var string4697 = new GraceString("generic");
            var opresult4700 = callmethodChecked(var_oKind, "==", [1], string4697);
            if (Grace_isTrue(opresult4700)) {
              setLineNumber(1183);    // compilenode identifier
              var call4701 = callmethodChecked(var_o, "value", [0]);
              onSelf = true;
              var call4702 = callmethodChecked(this, "compilenode", [1], call4701);
              var call4703 = callmethodChecked(var_o, "register:=", [1], call4702);
              if4696 = call4703;
            } else {
              var if4704 = GraceDone;
              setLineNumber(1184);    // compilenode string
              var string4705 = new GraceString("identifier");
              var opresult4708 = callmethodChecked(var_oKind, "==", [1], string4705);
              if (Grace_isTrue(opresult4708)) {
                setLineNumber(1185);    // compilenode identifier
                onSelf = true;
                var call4709 = callmethodChecked(this, "compileidentifier", [1], var_o);
                if4704 = call4709;
              } else {
                var if4710 = GraceDone;
                setLineNumber(1186);    // compilenode string
                var string4711 = new GraceString("defdec");
                var opresult4714 = callmethodChecked(var_oKind, "==", [1], string4711);
                if (Grace_isTrue(opresult4714)) {
                  setLineNumber(1187);    // compilenode identifier
                  onSelf = true;
                  var call4715 = callmethodChecked(this, "compiledefdec", [1], var_o);
                  if4710 = call4715;
                } else {
                  var if4716 = GraceDone;
                  setLineNumber(1188);    // compilenode string
                  var string4717 = new GraceString("vardec");
                  var opresult4720 = callmethodChecked(var_oKind, "==", [1], string4717);
                  if (Grace_isTrue(opresult4720)) {
                    setLineNumber(1189);    // compilenode identifier
                    onSelf = true;
                    var call4721 = callmethodChecked(this, "compilevardec", [1], var_o);
                    if4716 = call4721;
                  } else {
                    var if4722 = GraceDone;
                    setLineNumber(1190);    // compilenode string
                    var string4723 = new GraceString("block");
                    var opresult4726 = callmethodChecked(var_oKind, "==", [1], string4723);
                    if (Grace_isTrue(opresult4726)) {
                      setLineNumber(1191);    // compilenode identifier
                      onSelf = true;
                      var call4727 = callmethodChecked(this, "compileblock", [1], var_o);
                      if4722 = call4727;
                    } else {
                      var if4728 = GraceDone;
                      setLineNumber(1192);    // compilenode string
                      var string4729 = new GraceString("method");
                      var opresult4732 = callmethodChecked(var_oKind, "==", [1], string4729);
                      if (Grace_isTrue(opresult4732)) {
                        setLineNumber(1193);    // compilenode string
                        var string4733 = new GraceString("this");
                        onSelf = true;
                        var call4734 = callmethodChecked(this, "compilemethod", [2], var_o, string4733);
                        if4728 = call4734;
                      } else {
                        var if4735 = GraceDone;
                        setLineNumber(1194);    // compilenode string
                        var string4736 = new GraceString("array");
                        var opresult4739 = callmethodChecked(var_oKind, "==", [1], string4736);
                        if (Grace_isTrue(opresult4739)) {
                          setLineNumber(1195);    // compilenode identifier
                          onSelf = true;
                          var call4740 = callmethodChecked(this, "compilearray", [1], var_o);
                          if4735 = call4740;
                        } else {
                          var if4741 = GraceDone;
                          setLineNumber(1196);    // compilenode string
                          var string4742 = new GraceString("bind");
                          var opresult4745 = callmethodChecked(var_oKind, "==", [1], string4742);
                          if (Grace_isTrue(opresult4745)) {
                            setLineNumber(1197);    // compilenode identifier
                            onSelf = true;
                            var call4746 = callmethodChecked(this, "compilebind", [1], var_o);
                            if4741 = call4746;
                          } else {
                            var if4747 = GraceDone;
                            setLineNumber(1198);    // compilenode string
                            var string4748 = new GraceString("if");
                            var opresult4751 = callmethodChecked(var_oKind, "==", [1], string4748);
                            if (Grace_isTrue(opresult4751)) {
                              setLineNumber(1199);    // compilenode identifier
                              onSelf = true;
                              var call4752 = callmethodChecked(this, "compileif", [1], var_o);
                              if4747 = call4752;
                            } else {
                              var if4753 = GraceDone;
                              setLineNumber(1200);    // compilenode string
                              var string4754 = new GraceString("trycatch");
                              var opresult4757 = callmethodChecked(var_oKind, "==", [1], string4754);
                              if (Grace_isTrue(opresult4757)) {
                                setLineNumber(1201);    // compilenode identifier
                                onSelf = true;
                                var call4758 = callmethodChecked(this, "compiletrycatch", [1], var_o);
                                if4753 = call4758;
                              } else {
                                var if4759 = GraceDone;
                                setLineNumber(1202);    // compilenode string
                                var string4760 = new GraceString("matchcase");
                                var opresult4763 = callmethodChecked(var_oKind, "==", [1], string4760);
                                if (Grace_isTrue(opresult4763)) {
                                  setLineNumber(1203);    // compilenode identifier
                                  onSelf = true;
                                  var call4764 = callmethodChecked(this, "compilematchcase", [1], var_o);
                                  if4759 = call4764;
                                } else {
                                  var if4765 = GraceDone;
                                  setLineNumber(1204);    // compilenode string
                                  var string4766 = new GraceString("object");
                                  var opresult4769 = callmethodChecked(var_oKind, "==", [1], string4766);
                                  if (Grace_isTrue(opresult4769)) {
                                    setLineNumber(1205);    // compilenode string
                                    var string4770 = new GraceString("this");
                                    onSelf = true;
                                    var call4771 = callmethodChecked(this, "compileobject", [3], var_o, string4770, GraceFalse);
                                    if4765 = call4771;
                                  } else {
                                    var if4772 = GraceDone;
                                    setLineNumber(1206);    // compilenode string
                                    var string4773 = new GraceString("typedec");
                                    var opresult4776 = callmethodChecked(var_oKind, "==", [1], string4773);
                                    if (Grace_isTrue(opresult4776)) {
                                      setLineNumber(1207);    // compilenode identifier
                                      onSelf = true;
                                      var call4777 = callmethodChecked(this, "compiletypedec", [1], var_o);
                                      if4772 = call4777;
                                    } else {
                                      var if4778 = GraceDone;
                                      setLineNumber(1208);    // compilenode string
                                      var string4779 = new GraceString("typeliteral");
                                      var call4781 = callmethodChecked(var_o, "kind", [0]);
                                      var opresult4783 = callmethodChecked(call4781, "==", [1], string4779);
                                      if (Grace_isTrue(opresult4783)) {
                                        setLineNumber(1209);    // compilenode identifier
                                        onSelf = true;
                                        var call4784 = callmethodChecked(this, "compiletypeliteral", [1], var_o);
                                        if4778 = call4784;
                                      } else {
                                        var if4785 = GraceDone;
                                        setLineNumber(1210);    // compilenode string
                                        var string4786 = new GraceString("member");
                                        var opresult4789 = callmethodChecked(var_oKind, "==", [1], string4786);
                                        if (Grace_isTrue(opresult4789)) {
                                          setLineNumber(1211);    // compilenode identifier
                                          onSelf = true;
                                          var call4790 = callmethodChecked(this, "compilemember", [1], var_o);
                                          if4785 = call4790;
                                        } else {
                                          var if4791 = GraceDone;
                                          setLineNumber(1212);    // compilenode string
                                          var string4792 = new GraceString("call");
                                          var opresult4795 = callmethodChecked(var_oKind, "==", [1], string4792);
                                          if (Grace_isTrue(opresult4795)) {
                                            var if4796 = GraceDone;
                                            setLineNumber(1213);    // compilenode block
                                            var block4797 = new GraceBlock(this, 1213, 0);
                                            block4797.real = function() {
                                              var string4798 = new GraceString("prelude");
                                              var call4800 = callmethodChecked(var_o, "value", [0]);
                                              var call4801 = callmethodChecked(call4800, "in", [0]);
                                              var call4802 = callmethodChecked(call4801, "value", [0]);
                                              var opresult4804 = callmethodChecked(call4802, "==", [1], string4798);
                                              return opresult4804;
                                            };
                                            var call4806 = callmethodChecked(var_o, "value", [0]);
                                            var call4807 = callmethodChecked(call4806, "isMember", [0]);
                                            var opresult4809 = callmethodChecked(call4807, "&&", [1], block4797);
                                            if (Grace_isTrue(opresult4809)) {
                                              var if4810 = GraceDone;
                                              setLineNumber(1214);    // compilenode string
                                              var string4811 = new GraceString("print");
                                              var call4813 = callmethodChecked(var_o, "nameString", [0]);
                                              var opresult4815 = callmethodChecked(call4813, "==", [1], string4811);
                                              if (Grace_isTrue(opresult4815)) {
                                                setLineNumber(1215);    // compilenode identifier
                                                onSelf = true;
                                                var call4816 = callmethodChecked(this, "compilePrint", [1], var_o);
                                                if4810 = call4816;
                                              } else {
                                                var if4817 = GraceDone;
                                                setLineNumber(1216);    // compilenode string
                                                var string4818 = new GraceString("native()code");
                                                var call4820 = callmethodChecked(var_o, "nameString", [0]);
                                                var opresult4822 = callmethodChecked(call4820, "==", [1], string4818);
                                                if (Grace_isTrue(opresult4822)) {
                                                  setLineNumber(1217);    // compilenode identifier
                                                  onSelf = true;
                                                  var call4823 = callmethodChecked(this, "compileNativeCode", [1], var_o);
                                                  if4817 = call4823;
                                                } else {
                                                  setLineNumber(1219);    // compilenode identifier
                                                  onSelf = true;
                                                  var call4824 = callmethodChecked(this, "compilecall", [1], var_o);
                                                  if4817 = call4824;
                                                }
                                                if4810 = if4817;
                                              }
                                              if4796 = if4810;
                                            } else {
                                              setLineNumber(1222);    // compilenode identifier
                                              onSelf = true;
                                              var call4825 = callmethodChecked(this, "compilecall", [1], var_o);
                                              if4796 = call4825;
                                            }
                                            if4791 = if4796;
                                          } else {
                                            var if4826 = GraceDone;
                                            setLineNumber(1224);    // compilenode string
                                            var string4827 = new GraceString("op");
                                            var opresult4830 = callmethodChecked(var_oKind, "==", [1], string4827);
                                            if (Grace_isTrue(opresult4830)) {
                                              setLineNumber(1225);    // compilenode identifier
                                              onSelf = true;
                                              var call4831 = callmethodChecked(this, "compileop", [1], var_o);
                                              if4826 = call4831;
                                            }
                                            if4791 = if4826;
                                          }
                                          if4785 = if4791;
                                        }
                                        if4778 = if4785;
                                      }
                                      if4772 = if4778;
                                    }
                                    if4765 = if4772;
                                  }
                                  if4759 = if4765;
                                }
                                if4753 = if4759;
                              }
                              if4747 = if4753;
                            }
                            if4741 = if4747;
                          }
                          if4735 = if4741;
                        }
                        if4728 = if4735;
                      }
                      if4722 = if4728;
                    }
                    if4716 = if4722;
                  }
                  if4710 = if4716;
                }
                if4704 = if4710;
              }
              if4696 = if4704;
            }
            if4690 = if4696;
          }
          if4684 = if4690;
        }
        if4678 = if4684;
      }
      if4647 = if4678;
    }
    setLineNumber(1227);    // compilenode identifier
    var diff4834 = callmethodChecked(var_compilationDepth, "-", [1], new GraceNum(1));
    var_compilationDepth = diff4834;
    setLineNumber(1228);    // compilenode identifier
    var call4835 = callmethodChecked(var_o, "register", [0]);
    return call4835;
  };
  func4616.paramCounts = [1];
  this.methods["compilenode"] = func4616;
  func4616.definitionLine = 1162;
  func4616.definitionModule = "genjs";
  setLineNumber(1231);    // compilenode method
  var func4836 = function(argcv) {    // method compile(5)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_moduleObject = arguments[curarg];
    curarg++;
    var var_of = arguments[curarg];
    curarg++;
    var var_rm = arguments[curarg];
    curarg++;
    var var_bt = arguments[curarg];
    curarg++;
    var var_glPath = arguments[curarg];
    curarg++;
    if (argcv[0] !== 5)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compile(5)"));
    setModuleName("genjs");
    setLineNumber(1232);    // compilenode identifier
    var call4837 = callmethodChecked(var_sys, "argv", [0]);
    var var_argv = call4837;
    setLineNumber(1233);    // compilenode string
    var string4838 = new GraceString("NativePrelude");
    var call4839 = callmethodChecked(var_util, "extensions", [0]);
    var call4840 = callmethodChecked(call4839, "contains", [1], string4838);
    var var_isPrelude = call4840;
    var if4841 = GraceDone;
    setLineNumber(1234);    // compilenode string
    var string4842 = new GraceString("ExtendedLineups");
    var call4843 = callmethodChecked(var_util, "extensions", [0]);
    var call4844 = callmethodChecked(call4843, "contains", [1], string4842);
    if (Grace_isTrue(call4844)) {
      setLineNumber(1235);    // compilenode string
      var string4845 = new GraceString("PrimitiveGraceList");
      var_bracketConstructor = string4845;
      if4841 = GraceDone;
    }
    var if4846 = GraceDone;
    setLineNumber(1237);    // compilenode string
    var string4847 = new GraceString("noChecks");
    var call4848 = callmethodChecked(var_util, "extensions", [0]);
    var call4849 = callmethodChecked(call4848, "contains", [1], string4847);
    if (Grace_isTrue(call4849)) {
      setLineNumber(1238);    // compilenode identifier
      var_emitTypeChecks = GraceFalse;
      setLineNumber(1239);    // compilenode identifier
      var_emitUndefinedChecks = GraceFalse;
      setLineNumber(1240);    // compilenode identifier
      var_emitArgChecks = GraceFalse;
      setLineNumber(1241);    // compilenode identifier
      var_emitPositions = GraceFalse;
      setLineNumber(1242);    // compilenode string
      var string4850 = new GraceString("callmethod");
      var_requestCall = string4850;
      if4846 = GraceDone;
    }
    var if4851 = GraceDone;
    setLineNumber(1244);    // compilenode string
    var string4852 = new GraceString("noTypeChecks");
    var call4853 = callmethodChecked(var_util, "extensions", [0]);
    var call4854 = callmethodChecked(call4853, "contains", [1], string4852);
    if (Grace_isTrue(call4854)) {
      setLineNumber(1245);    // compilenode identifier
      var_emitTypeChecks = GraceFalse;
      if4851 = GraceDone;
    }
    var if4855 = GraceDone;
    setLineNumber(1247);    // compilenode string
    var string4856 = new GraceString("noArgChecks");
    var call4857 = callmethodChecked(var_util, "extensions", [0]);
    var call4858 = callmethodChecked(call4857, "contains", [1], string4856);
    if (Grace_isTrue(call4858)) {
      setLineNumber(1248);    // compilenode identifier
      var_emitArgChecks = GraceFalse;
      if4855 = GraceDone;
    }
    var if4859 = GraceDone;
    setLineNumber(1250);    // compilenode string
    var string4860 = new GraceString("noUndefChecks");
    var call4861 = callmethodChecked(var_util, "extensions", [0]);
    var call4862 = callmethodChecked(call4861, "contains", [1], string4860);
    if (Grace_isTrue(call4862)) {
      setLineNumber(1251);    // compilenode identifier
      var_emitUndefinedChecks = GraceFalse;
      if4859 = GraceDone;
    }
    var if4863 = GraceDone;
    setLineNumber(1253);    // compilenode string
    var string4864 = new GraceString("noLineNumbers");
    var call4865 = callmethodChecked(var_util, "extensions", [0]);
    var call4866 = callmethodChecked(call4865, "contains", [1], string4864);
    if (Grace_isTrue(call4866)) {
      setLineNumber(1254);    // compilenode identifier
      var_emitPositions = GraceFalse;
      setLineNumber(1255);    // compilenode string
      var string4867 = new GraceString("callmethod");
      var_requestCall = string4867;
      if4863 = GraceDone;
    }
    setLineNumber(1257);    // compilenode identifier
    var call4868 = callmethodChecked(var_moduleObject, "value", [0]);
    var_values = call4868;
    setLineNumber(1258);    // compilenode identifier
    var_outfile = var_of;
    setLineNumber(1259);    // compilenode identifier
    var call4869 = callmethodChecked(var_moduleObject, "name", [0]);
    var_modname = call4869;
    setLineNumber(1260);    // compilenode identifier
    var_runmode = var_rm;
    setLineNumber(1261);    // compilenode identifier
    var_buildtype = var_bt;
    var if4870 = GraceDone;
    setLineNumber(1262);    // compilenode string
    var string4871 = new GraceString("Debug");
    var call4872 = callmethodChecked(var_util, "extensions", [0]);
    var call4873 = callmethodChecked(call4872, "contains", [1], string4871);
    if (Grace_isTrue(call4873)) {
      setLineNumber(1263);    // compilenode identifier
      var_debugMode = GraceTrue;
      if4870 = GraceDone;
    }
    setLineNumber(1265);    // compilenode string
    var string4874 = new GraceString("generating ECMAScript code.");
    var call4875 = callmethodChecked(var_util, "log_verbose", [1], string4874);
    setLineNumber(1266);    // compilenode string
    var string4876 = new GraceString("String");
    var call4877 = callmethodChecked(var_topLevelTypes, "add", [1], string4876);
    setLineNumber(1267);    // compilenode string
    var string4878 = new GraceString("Number");
    var call4879 = callmethodChecked(var_topLevelTypes, "add", [1], string4878);
    setLineNumber(1268);    // compilenode string
    var string4880 = new GraceString("Boolean");
    var call4881 = callmethodChecked(var_topLevelTypes, "add", [1], string4880);
    setLineNumber(1269);    // compilenode string
    var string4882 = new GraceString("Block");
    var call4883 = callmethodChecked(var_topLevelTypes, "add", [1], string4882);
    setLineNumber(1270);    // compilenode string
    var string4884 = new GraceString("Done");
    var call4885 = callmethodChecked(var_topLevelTypes, "add", [1], string4884);
    setLineNumber(1271);    // compilenode string
    var string4886 = new GraceString("Type");
    var call4887 = callmethodChecked(var_topLevelTypes, "add", [1], string4886);
    setLineNumber(1272);    // compilenode string
    var string4888 = new GraceString("Unknown");
    var call4889 = callmethodChecked(var_topLevelTypes, "add", [1], string4888);
    setLineNumber(1273);    // compilenode string
    var string4890 = new GraceString("Object");
    var call4891 = callmethodChecked(var_topLevelTypes, "add", [1], string4890);
    var if4892 = GraceDone;
    setLineNumber(1274);    // compilenode string
    var string4893 = new GraceString("noStrict");
    var call4894 = callmethodChecked(var_util, "extensions", [0]);
    var call4895 = callmethodChecked(call4894, "contains", [1], string4893);
    var call4896 = callmethodChecked(call4895, "prefix!", [0]);
    if (Grace_isTrue(call4896)) {
      setLineNumber(1275);    // compilenode string
      var string4897 = new GraceString("\"use strict\";");
      onSelf = true;
      var call4898 = callmethodChecked(this, "out", [1], string4897);
      if4892 = call4898;
    }
    var if4899 = GraceDone;
    setLineNumber(1277);    // compilenode identifier
    var call4900 = callmethodChecked(var_isPrelude, "not", [0]);
    if (Grace_isTrue(call4900)) {
      setLineNumber(1278);    // compilenode string
      var string4901 = new GraceString("var___95__prelude = do_import(\"StandardPrelude\", gracecode_StandardPrelude);");
      onSelf = true;
      var call4902 = callmethodChecked(this, "out", [1], string4901);
      if4899 = call4902;
    }
    setLineNumber(1280);    // compilenode identifier
    var call4903 = callmethodChecked(var_util, "setline", [1], new GraceNum(1));
    setLineNumber(1281);    // compilenode string
    var string4904 = new GraceString("() {");
    onSelf = true;
    var call4906 = callmethodChecked(this, "formatModname", [1], var_modname);
    var string4908 = new GraceString("function ");
    var opresult4910 = callmethodChecked(string4908, "++", [1], call4906);
    var opresult4912 = callmethodChecked(opresult4910, "++", [1], string4904);
    onSelf = true;
    var call4913 = callmethodChecked(this, "out", [1], opresult4912);
    setLineNumber(1282);    // compilenode call
    onSelf = true;
    var call4914 = callmethodChecked(this, "increaseindent", [0]);
    setLineNumber(1283);    // compilenode string
    var string4915 = new GraceString("\");");
    var string4918 = new GraceString("setModuleName(\"");
    var opresult4920 = callmethodChecked(string4918, "++", [1], var_modname);
    var opresult4922 = callmethodChecked(opresult4920, "++", [1], string4915);
    onSelf = true;
    var call4923 = callmethodChecked(this, "out", [1], opresult4922);
    setLineNumber(1284);    // compilenode string
    var string4924 = new GraceString("\";");
    var string4927 = new GraceString("this.definitionModule = \"");
    var opresult4929 = callmethodChecked(string4927, "++", [1], var_modname);
    var opresult4931 = callmethodChecked(opresult4929, "++", [1], string4924);
    onSelf = true;
    var call4932 = callmethodChecked(this, "out", [1], opresult4931);
    setLineNumber(1285);    // compilenode string
    var string4933 = new GraceString("this.definitionLine = 0;");
    onSelf = true;
    var call4934 = callmethodChecked(this, "out", [1], string4933);
    setLineNumber(1286);    // compilenode string
    var string4935 = new GraceString("var var_prelude = var___95__prelude;");
    onSelf = true;
    var call4936 = callmethodChecked(this, "out", [1], string4935);
    var if4937 = GraceDone;
    setLineNumber(1290);    // compilenode identifier
    if (Grace_isTrue(var_debugMode)) {
      setLineNumber(1291);    // compilenode string
      var string4938 = new GraceString(" module\");");
      var string4941 = new GraceString("var myframe = new StackFrame(\"");
      var opresult4943 = callmethodChecked(string4941, "++", [1], var_modname);
      var opresult4945 = callmethodChecked(opresult4943, "++", [1], string4938);
      onSelf = true;
      var call4946 = callmethodChecked(this, "out", [1], opresult4945);
      setLineNumber(1292);    // compilenode string
      var string4947 = new GraceString("stackFrames.push(myframe);");
      onSelf = true;
      var call4948 = callmethodChecked(this, "out", [1], string4947);
      if4937 = call4948;
    }
    setLineNumber(1294);    // compilenode string
    var string4949 = new GraceString("this");
    var string4950 = new GraceString("var_prelude");
    onSelf = true;
    var call4951 = callmethodChecked(this, "compileobjouter", [2], string4949, string4950);
    setLineNumber(1295);    // compilenode array
    var array4952 = new PrimitiveGraceList([]);
    var var_imported = array4952;
    var if4953 = GraceDone;
    setLineNumber(1296);    // compilenode identifier
    if (Grace_isTrue(var_isPrelude)) {
      setLineNumber(1297);    // compilenode block
      var block4954 = new GraceBlock(this, 1297, 1);
      setLineNumber(1);    // compilenode identifier
      block4954.real = function(var_o) {
        var if4955 = GraceDone;
        setLineNumber(1298);    // compilenode identifier
        var call4956 = callmethodChecked(var_o, "isMethod", [0]);
        if (Grace_isTrue(call4956)) {
          setLineNumber(1299);    // compilenode identifier
          onSelf = true;
          var call4957 = callmethodChecked(this, "compilenode", [1], var_o);
          if4955 = call4957;
        }
        var if4958 = GraceDone;
        setLineNumber(1301);    // compilenode identifier
        var call4959 = callmethodChecked(var_o, "isExternal", [0]);
        if (Grace_isTrue(call4959)) {
          setLineNumber(1302);    // compilenode identifier
          var call4960 = callmethodChecked(var_o, "path", [0]);
          var call4961 = callmethodChecked(var_imported, "push", [1], call4960);
          if4958 = call4961;
        }
        return if4958;
      };
      setLineNumber(1297);    // compilenode identifier
      var call4962 = callmethodChecked(var_moduleObject, "value", [0]);
      var call4963 = callmethodChecked(call4962, "do", [1], block4954);
      setLineNumber(1305);    // compilenode block
      var block4964 = new GraceBlock(this, 1305, 1);
      setLineNumber(1);    // compilenode identifier
      block4964.real = function(var_o) {
        var if4965 = GraceDone;
        setLineNumber(1306);    // compilenode identifier
        var call4966 = callmethodChecked(var_o, "isMethod", [0]);
        var call4967 = callmethodChecked(call4966, "not", [0]);
        if (Grace_isTrue(call4967)) {
          setLineNumber(1307);    // compilenode identifier
          onSelf = true;
          var call4968 = callmethodChecked(this, "compilenode", [1], var_o);
          if4965 = call4968;
        }
        return if4965;
      };
      setLineNumber(1305);    // compilenode identifier
      var call4969 = callmethodChecked(var_moduleObject, "value", [0]);
      var call4970 = callmethodChecked(call4969, "do", [1], block4964);
      if4953 = call4970;
    } else {
      setLineNumber(1311);    // compilenode block
      var block4971 = new GraceBlock(this, 1311, 1);
      setLineNumber(1);    // compilenode identifier
      block4971.real = function(var_o) {
        setLineNumber(1312);    // compilenode identifier
        onSelf = true;
        var call4972 = callmethodChecked(this, "compilenode", [1], var_o);
        setLineNumber(1313);    // compilenode identifier
        var call4973 = callmethodChecked(var_o, "path", [0]);
        var call4974 = callmethodChecked(var_imported, "push", [1], call4973);
        return call4974;
      };
      setLineNumber(1311);    // compilenode identifier
      var call4975 = callmethodChecked(var_moduleObject, "externalsDo", [1], block4971);
      var if4976 = GraceDone;
      setLineNumber(1315);    // compilenode identifier
      var call4977 = callmethodChecked(var_moduleObject, "superclass", [0]);
      var opresult4980 = callmethodChecked(GraceFalse, "\u2260", [1], call4977);
      if (Grace_isTrue(opresult4980)) {
        setLineNumber(1316);    // compilenode identifier
        var call4981 = callmethodChecked(var_moduleObject, "superclass", [0]);
        var string4982 = new GraceString("this");
        onSelf = true;
        var call4983 = callmethodChecked(this, "compileInherits()in", [1, 2], call4981, var_moduleObject, string4982);
        if4976 = call4983;
      }
      setLineNumber(1318);    // compilenode block
      var block4984 = new GraceBlock(this, 1318, 1);
      setLineNumber(1);    // compilenode identifier
      block4984.real = function(var_t) {
        setLineNumber(1319);    // compilenode string
        var string4985 = new GraceString("this");
        onSelf = true;
        var call4986 = callmethodChecked(this, "compileInherits()in", [1, 2], var_t, var_moduleObject, string4985);
        return call4986;
      };
      setLineNumber(1318);    // compilenode identifier
      var call4987 = callmethodChecked(var_moduleObject, "usedTraits", [0]);
      var call4988 = callmethodChecked(call4987, "do", [1], block4984);
      setLineNumber(1321);    // compilenode block
      var block4989 = new GraceBlock(this, 1321, 1);
      setLineNumber(1);    // compilenode identifier
      block4989.real = function(var_o) {
        setLineNumber(1322);    // compilenode identifier
        onSelf = true;
        var call4990 = callmethodChecked(this, "compilenode", [1], var_o);
        return call4990;
      };
      setLineNumber(1321);    // compilenode identifier
      var call4991 = callmethodChecked(var_moduleObject, "methodsDo", [1], block4989);
      if4953 = call4991;
    }
    setLineNumber(1325);    // compilenode block
    var block4992 = new GraceBlock(this, 1325, 1);
    setLineNumber(1);    // compilenode identifier
    block4992.real = function(var_o) {
      setLineNumber(1326);    // compilenode identifier
      onSelf = true;
      var call4993 = callmethodChecked(this, "compilenode", [1], var_o);
      return call4993;
    };
    setLineNumber(1325);    // compilenode identifier
    var call4994 = callmethodChecked(var_moduleObject, "executableComponentsDo", [1], block4992);
    var if4995 = GraceDone;
    setLineNumber(1328);    // compilenode identifier
    var call4996 = callmethodChecked(var_xmodule, "currentDialect", [0]);
    var call4997 = callmethodChecked(call4996, "hasAtEnd", [0]);
    if (Grace_isTrue(call4997)) {
      setLineNumber(1329);    // compilenode string
      var string4998 = new GraceString("callmethod(var_prelude, \"atModuleEnd\", [1], this);");
      onSelf = true;
      var call4999 = callmethodChecked(this, "out", [1], string4998);
      if4995 = call4999;
    }
    var if5000 = GraceDone;
    setLineNumber(1331);    // compilenode identifier
    if (Grace_isTrue(var_debugMode)) {
      setLineNumber(1332);    // compilenode string
      var string5001 = new GraceString("stackFrames.pop();");
      onSelf = true;
      var call5002 = callmethodChecked(this, "out", [1], string5001);
      if5000 = call5002;
    }
    setLineNumber(1334);    // compilenode string
    var string5003 = new GraceString("return this;");
    onSelf = true;
    var call5004 = callmethodChecked(this, "out", [1], string5003);
    setLineNumber(1335);    // compilenode call
    onSelf = true;
    var call5005 = callmethodChecked(this, "decreaseindent", [0]);
    setLineNumber(1336);    // compilenode string
    var string5006 = new GraceString("}");
    onSelf = true;
    var call5007 = callmethodChecked(this, "out", [1], string5006);
    setLineNumber(1338);    // compilenode identifier
    onSelf = true;
    var call5008 = callmethodChecked(this, "formatModname", [1], var_modname);
    var var_generatedModuleName = call5008;
    setLineNumber(1339);    // compilenode block
    var block5009 = new GraceBlock(this, 1339, 1);
    setLineNumber(1);    // compilenode identifier
    block5009.real = function(var_each) {
      setLineNumber(1339);    // compilenode string
      var string5010 = new GraceString("'");
      var string5013 = new GraceString("'");
      var opresult5015 = callmethodChecked(string5013, "++", [1], var_each);
      var opresult5017 = callmethodChecked(opresult5015, "++", [1], string5010);
      return opresult5017;
    };
    var call5018 = callmethodChecked(var_imported, "map", [1], block5009);
    var call5019 = callmethodChecked(call5018, "asList", [0]);
    var call5020 = callmethodChecked(call5019, "sort", [0]);
    var var_importList = call5020;
    setLineNumber(1340);    // compilenode string
    var string5021 = new GraceString(";");
    var string5024 = new GraceString(".imports = ");
    var string5027 = new GraceString("");
    var opresult5029 = callmethodChecked(string5027, "++", [1], var_generatedModuleName);
    var opresult5031 = callmethodChecked(opresult5029, "++", [1], string5024);
    var opresult5033 = callmethodChecked(opresult5031, "++", [1], var_importList);
    var opresult5035 = callmethodChecked(opresult5033, "++", [1], string5021);
    onSelf = true;
    var call5036 = callmethodChecked(this, "out", [1], opresult5035);
    setLineNumber(1342);    // compilenode identifier
    var call5037 = callmethodChecked(var_imports, "other", [0]);
    var call5038 = callmethodChecked(var_moduleObject, "imports:=", [1], call5037);
    setLineNumber(1343);    // compilenode identifier
    var call5039 = callmethodChecked(var_xmodule, "writeGctForModule", [1], var_moduleObject);
    setLineNumber(1345);    // compilenode identifier
    var call5040 = callmethodChecked(var_xmodule, "parseGCT", [1], var_modname);
    var var_gct = call5040;
    setLineNumber(1346);    // compilenode identifier
    var call5041 = callmethodChecked(var_xmodule, "gctAsString", [1], var_gct);
    var var_gctText = call5041;
    setLineNumber(1347);    // compilenode string
    var string5042 = new GraceString("if (typeof gctCache !== \"undefined\")");
    onSelf = true;
    var call5043 = callmethodChecked(this, "out", [1], string5042);
    setLineNumber(1348);    // compilenode string
    var string5044 = new GraceString("\";");
    onSelf = true;
    var call5046 = callmethodChecked(this, "escapestring", [1], var_gctText);
    var string5048 = new GraceString("'] = \"");
    onSelf = true;
    var call5050 = callmethodChecked(this, "basename", [1], var_modname);
    onSelf = true;
    var call5051 = callmethodChecked(this, "escapestring", [1], call5050);
    var string5053 = new GraceString("  gctCache['");
    var opresult5055 = callmethodChecked(string5053, "++", [1], call5051);
    var opresult5057 = callmethodChecked(opresult5055, "++", [1], string5048);
    var opresult5059 = callmethodChecked(opresult5057, "++", [1], call5046);
    var opresult5061 = callmethodChecked(opresult5059, "++", [1], string5044);
    onSelf = true;
    var call5062 = callmethodChecked(this, "out", [1], opresult5061);
    setLineNumber(1349);    // compilenode string
    var string5063 = new GraceString("if (typeof originalSourceLines !== \"undefined\") {");
    onSelf = true;
    var call5064 = callmethodChecked(this, "out", [1], string5063);
    setLineNumber(1350);    // compilenode string
    var string5065 = new GraceString("\"] = [");
    var string5068 = new GraceString("  originalSourceLines[\"");
    var opresult5070 = callmethodChecked(string5068, "++", [1], var_modname);
    var opresult5072 = callmethodChecked(opresult5070, "++", [1], string5065);
    onSelf = true;
    var call5073 = callmethodChecked(this, "out", [1], opresult5072);
    setLineNumber(1351);    // compilenode identifier
    var call5074 = callmethodChecked(var_util, "cLines", [0]);
    var var_sourceLines = call5074;
    setLineNumber(1352);    // compilenode identifier
    var call5075 = callmethodChecked(var_util, "cLines", [0]);
    var call5076 = callmethodChecked(call5075, "size", [0]);
    var var_numberOfLines = call5076;
    setLineNumber(1353);    // compilenode num
    var var_ln = new GraceNum(1);
    setLineNumber(1354);    // compilenode block
    var block5077 = new GraceBlock(this, 1354, 0);
    block5077.real = function() {
      var opresult5080 = callmethodChecked(var_ln, "<", [1], var_numberOfLines);
      return opresult5080;
    };
    var block5081 = new GraceBlock(this, 1354, 0);
    block5081.real = function() {
      setLineNumber(1355);    // compilenode string
      var string5082 = new GraceString("\",");
      var call5084 = callmethodChecked(var_sourceLines, "at", [1], var_ln);
      var string5086 = new GraceString("    \"");
      var opresult5088 = callmethodChecked(string5086, "++", [1], call5084);
      var opresult5090 = callmethodChecked(opresult5088, "++", [1], string5082);
      onSelf = true;
      var call5091 = callmethodChecked(this, "out", [1], opresult5090);
      setLineNumber(1356);    // compilenode identifier
      var opresult5094 = callmethodChecked(var_ln, "+", [1], new GraceNum(1));
      var_ln = opresult5094;
      return GraceDone;
    };
    var call5095 = callmethodChecked(var_prelude, "while()do", [1, 1], block5077, block5081);
    var if5096 = GraceDone;
    setLineNumber(1358);    // compilenode identifier
    var opresult5099 = callmethodChecked(var_numberOfLines, "\u2264", [1], new GraceNum(0));
    if (Grace_isTrue(opresult5099)) {
      setLineNumber(1359);    // compilenode string
      var string5100 = new GraceString(" ];");
      onSelf = true;
      var call5101 = callmethodChecked(this, "out", [1], string5100);
      if5096 = call5101;
    } else {
      setLineNumber(1361);    // compilenode string
      var string5102 = new GraceString("\" ];");
      var call5104 = callmethodChecked(var_sourceLines, "at", [1], var_numberOfLines);
      var string5106 = new GraceString("    \"");
      var opresult5108 = callmethodChecked(string5106, "++", [1], call5104);
      var opresult5110 = callmethodChecked(opresult5108, "++", [1], string5102);
      onSelf = true;
      var call5111 = callmethodChecked(this, "out", [1], opresult5110);
      if5096 = call5111;
    }
    setLineNumber(1363);    // compilenode string
    var string5112 = new GraceString("}");
    onSelf = true;
    var call5113 = callmethodChecked(this, "out", [1], string5112);
    setLineNumber(1364);    // compilenode string
    var string5114 = new GraceString("if (typeof global !== \"undefined\")");
    onSelf = true;
    var call5115 = callmethodChecked(this, "out", [1], string5114);
    setLineNumber(1365);    // compilenode string
    var string5116 = new GraceString(";");
    var string5119 = new GraceString(" = ");
    var string5122 = new GraceString("  global.");
    var opresult5124 = callmethodChecked(string5122, "++", [1], var_generatedModuleName);
    var opresult5126 = callmethodChecked(opresult5124, "++", [1], string5119);
    var opresult5128 = callmethodChecked(opresult5126, "++", [1], var_generatedModuleName);
    var opresult5130 = callmethodChecked(opresult5128, "++", [1], string5116);
    onSelf = true;
    var call5131 = callmethodChecked(this, "out", [1], opresult5130);
    setLineNumber(1366);    // compilenode string
    var string5132 = new GraceString("if (typeof window !== \"undefined\")");
    onSelf = true;
    var call5133 = callmethodChecked(this, "out", [1], string5132);
    setLineNumber(1367);    // compilenode string
    var string5134 = new GraceString(";");
    var string5137 = new GraceString(" = ");
    var string5140 = new GraceString("  window.");
    var opresult5142 = callmethodChecked(string5140, "++", [1], var_generatedModuleName);
    var opresult5144 = callmethodChecked(opresult5142, "++", [1], string5137);
    var opresult5146 = callmethodChecked(opresult5144, "++", [1], var_generatedModuleName);
    var opresult5148 = callmethodChecked(opresult5146, "++", [1], string5134);
    onSelf = true;
    var call5149 = callmethodChecked(this, "out", [1], opresult5148);
    setLineNumber(1369);    // compilenode block
    var block5150 = new GraceBlock(this, 1369, 1);
    setLineNumber(1);    // compilenode identifier
    block5150.real = function(var_o) {
      setLineNumber(1370);    // compilenode identifier
      var call5151 = callmethodChecked(var_util, "outprint", [1], var_o);
      return call5151;
    };
    var call5152 = callmethodChecked(var_prelude, "for()do", [1, 1], var_output, block5150);
    setLineNumber(1372);    // compilenode identifier
    var call5153 = callmethodChecked(var_outfile, "close", [0]);
    setLineNumber(1373);    // compilenode string
    var string5154 = new GraceString("done.");
    var call5155 = callmethodChecked(var_util, "log_verbose", [1], string5154);
    var if5156 = GraceDone;
    setLineNumber(1374);    // compilenode string
    var string5157 = new GraceString("run");
    var opresult5160 = callmethodChecked(var_buildtype, "==", [1], string5157);
    if (Grace_isTrue(opresult5160)) {
      onSelf = true;
      var call5161 = callmethodChecked(this, "runJsCode", [2], var_of, var_glPath);
      if5156 = call5161;
    }
    return if5156;
  };
  func4836.paramCounts = [5];
  this.methods["compile"] = func4836;
  func4836.definitionLine = 1231;
  func4836.definitionModule = "genjs";
  setLineNumber(1377);    // compilenode method
  var func5162 = function(argcv) {    // method compileInherits(1)in(2)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compileInherits (arg list 1) of compileInherits(1)in(2)"));
    var var_objNode = arguments[curarg];
    curarg++;
    var var_selfr = arguments[curarg];
    curarg++;
    if (argcv[1] !== 2)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for in (arg list 2) of compileInherits(1)in(2)"));
    setModuleName("genjs");
    var if5163 = GraceDone;
    setLineNumber(1380);    // compilenode identifier
    var call5164 = callmethodChecked(var_o, "isUse", [0]);
    if (Grace_isTrue(call5164)) {
      setLineNumber(1381);    // compilenode identifier
      onSelf = true;
      var call5165 = callmethodChecked(this, "compileTrait()in", [1, 2], var_o, var_objNode, var_selfr);
      if5163 = call5165;
    } else {
      setLineNumber(1383);    // compilenode identifier
      onSelf = true;
      var call5166 = callmethodChecked(this, "compileSuper", [2], var_o, var_selfr);
      if5163 = call5166;
    }
    return if5163;
  };
  func5162.paramCounts = [1, 2];
  this.methods["compileInherits()in"] = func5162;
  func5162.definitionLine = 1377;
  func5162.definitionModule = "genjs";
  setLineNumber(1387);    // compilenode method
  var func5167 = function(argcv) {    // method compileSuper(2)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_selfr = arguments[curarg];
    curarg++;
    if (argcv[0] !== 2)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compileSuper(2)"));
    setModuleName("genjs");
    setLineNumber(1388);    // compilenode identifier
    var call5168 = callmethodChecked(var_o, "value", [0]);
    onSelf = true;
    var call5169 = callmethodChecked(this, "compilenode", [1], call5168);
    var var_sup = call5169;
    setLineNumber(1389);    // compilenode string
    var string5170 = new GraceString(";");
    var string5173 = new GraceString(".superobj = ");
    var string5176 = new GraceString("");
    var opresult5178 = callmethodChecked(string5176, "++", [1], var_selfr);
    var opresult5180 = callmethodChecked(opresult5178, "++", [1], string5173);
    var opresult5182 = callmethodChecked(opresult5180, "++", [1], var_sup);
    var opresult5184 = callmethodChecked(opresult5182, "++", [1], string5170);
    onSelf = true;
    var call5185 = callmethodChecked(this, "out", [1], opresult5184);
    setLineNumber(1390);    // compilenode string
    var string5186 = new GraceString(".data;");
    var string5189 = new GraceString(".data = ");
    var string5192 = new GraceString(".data) ");
    var string5195 = new GraceString("if (");
    var opresult5197 = callmethodChecked(string5195, "++", [1], var_sup);
    var opresult5199 = callmethodChecked(opresult5197, "++", [1], string5192);
    var opresult5201 = callmethodChecked(opresult5199, "++", [1], var_selfr);
    var opresult5203 = callmethodChecked(opresult5201, "++", [1], string5189);
    var opresult5205 = callmethodChecked(opresult5203, "++", [1], var_sup);
    var opresult5207 = callmethodChecked(opresult5205, "++", [1], string5186);
    onSelf = true;
    var call5208 = callmethodChecked(this, "out", [1], opresult5207);
    setLineNumber(1392);    // compilenode string
    var string5209 = new GraceString(".hasOwnProperty('_value'))");
    var string5212 = new GraceString("if (");
    var opresult5214 = callmethodChecked(string5212, "++", [1], var_sup);
    var opresult5216 = callmethodChecked(opresult5214, "++", [1], string5209);
    onSelf = true;
    var call5217 = callmethodChecked(this, "out", [1], opresult5216);
    setLineNumber(1393);    // compilenode string
    var string5218 = new GraceString("._value;");
    var string5221 = new GraceString("._value = ");
    var string5224 = new GraceString("    ");
    var opresult5226 = callmethodChecked(string5224, "++", [1], var_selfr);
    var opresult5228 = callmethodChecked(opresult5226, "++", [1], string5221);
    var opresult5230 = callmethodChecked(opresult5228, "++", [1], var_sup);
    var opresult5232 = callmethodChecked(opresult5230, "++", [1], string5218);
    onSelf = true;
    var call5233 = callmethodChecked(this, "out", [1], opresult5232);
    setLineNumber(1396);    // compilenode block
    var block5234 = new GraceBlock(this, 1396, 1);
    setLineNumber(1);    // compilenode identifier
    block5234.real = function(var_each) {
      setLineNumber(1397);    // compilenode string
      var string5235 = new GraceString("');");
      var call5237 = callmethodChecked(var_each, "oldName", [0]);
      var call5238 = callmethodChecked(call5237, "nameString", [0]);
      var string5240 = new GraceString(", '");
      var string5243 = new GraceString("'] = findMethod(");
      var call5245 = callmethodChecked(var_each, "newName", [0]);
      var call5246 = callmethodChecked(call5245, "nameString", [0]);
      var string5248 = new GraceString(".methods['");
      var string5251 = new GraceString("");
      var opresult5253 = callmethodChecked(string5251, "++", [1], var_selfr);
      var opresult5255 = callmethodChecked(opresult5253, "++", [1], string5248);
      var opresult5257 = callmethodChecked(opresult5255, "++", [1], call5246);
      var opresult5259 = callmethodChecked(opresult5257, "++", [1], string5243);
      var opresult5261 = callmethodChecked(opresult5259, "++", [1], var_sup);
      var opresult5263 = callmethodChecked(opresult5261, "++", [1], string5240);
      var opresult5265 = callmethodChecked(opresult5263, "++", [1], call5238);
      var opresult5267 = callmethodChecked(opresult5265, "++", [1], string5235);
      onSelf = true;
      var call5268 = callmethodChecked(this, "out", [1], opresult5267);
      return call5268;
    };
    setLineNumber(1396);    // compilenode identifier
    var call5269 = callmethodChecked(var_o, "aliases", [0]);
    var call5270 = callmethodChecked(call5269, "do", [1], block5234);
    setLineNumber(1399);    // compilenode block
    var block5271 = new GraceBlock(this, 1399, 1);
    setLineNumber(1);    // compilenode identifier
    block5271.real = function(var_each) {
      setLineNumber(1400);    // compilenode string
      var string5272 = new GraceString("'];");
      var call5274 = callmethodChecked(var_each, "nameString", [0]);
      var string5276 = new GraceString(".methods['");
      var string5279 = new GraceString("delete ");
      var opresult5281 = callmethodChecked(string5279, "++", [1], var_sup);
      var opresult5283 = callmethodChecked(opresult5281, "++", [1], string5276);
      var opresult5285 = callmethodChecked(opresult5283, "++", [1], call5274);
      var opresult5287 = callmethodChecked(opresult5285, "++", [1], string5272);
      onSelf = true;
      var call5288 = callmethodChecked(this, "out", [1], opresult5287);
      return call5288;
    };
    setLineNumber(1399);    // compilenode identifier
    var call5289 = callmethodChecked(var_o, "exclusions", [0]);
    var call5290 = callmethodChecked(call5289, "do", [1], block5271);
    return call5290;
  };
  func5167.paramCounts = [2];
  this.methods["compileSuper"] = func5167;
  func5167.definitionLine = 1387;
  func5167.definitionModule = "genjs";
  setLineNumber(1404);    // compilenode method
  var func5291 = function(argcv) {    // method compileTrait(1)in(2)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compileTrait (arg list 1) of compileTrait(1)in(2)"));
    var var_objNode = arguments[curarg];
    curarg++;
    var var_selfr = arguments[curarg];
    curarg++;
    if (argcv[1] !== 2)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for in (arg list 2) of compileTrait(1)in(2)"));
    setModuleName("genjs");
    setLineNumber(1405);    // compilenode identifier
    var call5292 = callmethodChecked(var_o, "value", [0]);
    onSelf = true;
    var call5293 = callmethodChecked(this, "compilenode", [1], call5292);
    var var_tObj = call5293;
    setLineNumber(1406);    // compilenode identifier
    var call5294 = callmethodChecked(var_objNode, "localNames", [0]);
    var call5296 = callmethodChecked(var_o, "providedNames", [0]);
    var opresult5298 = callmethodChecked(call5296, "--", [1], call5294);
    var var_tMethNames = opresult5298;
    setLineNumber(1408);    // compilenode block
    var block5299 = new GraceBlock(this, 1408, 1);
    setLineNumber(1);    // compilenode identifier
    block5299.real = function(var_each) {
      setLineNumber(1409);    // compilenode identifier
      var call5300 = callmethodChecked(var_each, "newName", [0]);
      var call5301 = callmethodChecked(call5300, "nameString", [0]);
      var var_nn = call5301;
      setLineNumber(1411);    // compilenode string
      var string5302 = new GraceString("'];  // alias");
      var call5304 = callmethodChecked(var_each, "oldName", [0]);
      var call5305 = callmethodChecked(call5304, "nameString", [0]);
      var string5307 = new GraceString(".methods['");
      var string5310 = new GraceString("");
      var opresult5312 = callmethodChecked(string5310, "++", [1], var_tObj);
      var opresult5314 = callmethodChecked(opresult5312, "++", [1], string5307);
      var opresult5316 = callmethodChecked(opresult5314, "++", [1], call5305);
      var opresult5318 = callmethodChecked(opresult5316, "++", [1], string5302);
      setLineNumber(1410);    // compilenode string
      var string5320 = new GraceString("'] = ");
      var string5323 = new GraceString(".methods['");
      var string5326 = new GraceString("");
      var opresult5328 = callmethodChecked(string5326, "++", [1], var_selfr);
      var opresult5330 = callmethodChecked(opresult5328, "++", [1], string5323);
      var opresult5332 = callmethodChecked(opresult5330, "++", [1], var_nn);
      var opresult5334 = callmethodChecked(opresult5332, "++", [1], string5320);
      var opresult5336 = callmethodChecked(opresult5334, "++", [1], opresult5318);
      onSelf = true;
      var call5337 = callmethodChecked(this, "out", [1], opresult5336);
      setLineNumber(1412);    // compilenode identifier
      var call5338 = callmethodChecked(var_tMethNames, "remove", [1], var_nn);
      return call5338;
    };
    setLineNumber(1408);    // compilenode identifier
    var call5339 = callmethodChecked(var_o, "aliases", [0]);
    var call5340 = callmethodChecked(call5339, "do", [1], block5299);
    setLineNumber(1414);    // compilenode block
    var block5341 = new GraceBlock(this, 1414, 1);
    setLineNumber(1);    // compilenode identifier
    block5341.real = function(var_methName) {
      setLineNumber(1415);    // compilenode string
      var string5342 = new GraceString("'];");
      var string5345 = new GraceString(".methods['");
      var string5348 = new GraceString("'] = ");
      var string5351 = new GraceString(".methods['");
      var string5354 = new GraceString("");
      var opresult5356 = callmethodChecked(string5354, "++", [1], var_selfr);
      var opresult5358 = callmethodChecked(opresult5356, "++", [1], string5351);
      var opresult5360 = callmethodChecked(opresult5358, "++", [1], var_methName);
      var opresult5362 = callmethodChecked(opresult5360, "++", [1], string5348);
      var opresult5364 = callmethodChecked(opresult5362, "++", [1], var_tObj);
      var opresult5366 = callmethodChecked(opresult5364, "++", [1], string5345);
      var opresult5368 = callmethodChecked(opresult5366, "++", [1], var_methName);
      var opresult5370 = callmethodChecked(opresult5368, "++", [1], string5342);
      onSelf = true;
      var call5371 = callmethodChecked(this, "out", [1], opresult5370);
      return call5371;
    };
    setLineNumber(1414);    // compilenode identifier
    var call5372 = callmethodChecked(var_tMethNames, "do", [1], block5341);
    return call5372;
  };
  func5291.paramCounts = [1, 2];
  this.methods["compileTrait()in"] = func5291;
  func5291.definitionLine = 1404;
  func5291.definitionModule = "genjs";
  setLineNumber(1419);    // compilenode method
  var func5373 = function(argcv) {    // method runJsCode(2)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_of = arguments[curarg];
    curarg++;
    var var_glPath = arguments[curarg];
    curarg++;
    if (argcv[0] !== 2)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for runJsCode(2)"));
    setModuleName("genjs");
    setLineNumber(1420);    // compilenode string
    var string5374 = new GraceString("GRACE_MODULE_PATH");
    var call5375 = callmethodChecked(var_sys, "environ", [0]);
    var call5376 = callmethodChecked(call5375, "at", [1], string5374);
    var var_gmp = call5376;
    setLineNumber(1421);    // compilenode identifier
    var call5377 = callmethodChecked(var_unixFilePath, "split", [1], var_gmp);
    var var_pathList = call5377;
    var if5378 = GraceDone;
    setLineNumber(1422);    // compilenode string
    var string5379 = new GraceString("/");
    var call5381 = callmethodChecked(var_glPath, "size", [0]);
    var call5382 = callmethodChecked(var_glPath, "at", [1], call5381);
    var opresult5384 = callmethodChecked(call5382, "==", [1], string5379);
    if (Grace_isTrue(opresult5384)) {
      if5378 = var_glPath;
    } else {
      setLineNumber(1423);    // compilenode string
      var string5385 = new GraceString("/");
      var opresult5388 = callmethodChecked(var_glPath, "++", [1], string5385);
      if5378 = opresult5388;
    }
    var var_libPath = if5378;
    var if5389 = GraceDone;
    setLineNumber(1424);    // compilenode string
    var string5390 = new GraceString("gracelib.js");
    var opresult5393 = callmethodChecked(var_libPath, "++", [1], string5390);
    var call5394 = callmethodChecked(var_io, "exists", [1], opresult5393);
    if (Grace_isTrue(call5394)) {
      var if5395 = GraceDone;
      setLineNumber(1425);    // compilenode identifier
      var call5396 = callmethodChecked(var_pathList, "contains", [1], var_libPath);
      var call5397 = callmethodChecked(call5396, "not", [0]);
      if (Grace_isTrue(call5397)) {
        setLineNumber(1426);    // compilenode string
        var string5398 = new GraceString("GRACE_MODULE_PATH");
        var string5399 = new GraceString("");
        var string5402 = new GraceString(":");
        var string5405 = new GraceString("");
        var opresult5407 = callmethodChecked(string5405, "++", [1], var_libPath);
        var opresult5409 = callmethodChecked(opresult5407, "++", [1], string5402);
        var opresult5411 = callmethodChecked(opresult5409, "++", [1], var_gmp);
        var opresult5413 = callmethodChecked(opresult5411, "++", [1], string5399);
        var call5414 = callmethodChecked(var_sys, "environ", [0]);
        var call5415 = callmethodChecked(call5414, "at()put", [1, 1], string5398, opresult5413);
        if5395 = call5415;
      }
      if5389 = if5395;
    }
    setLineNumber(1429);    // compilenode string
    var string5416 = new GraceString("grace");
    var call5418 = callmethodChecked(var_of, "pathname", [0]);
    var array5417 = new PrimitiveGraceList([call5418]);
    var call5419 = callmethodChecked(var_io, "spawn", [2], string5416, array5417);
    var call5420 = callmethodChecked(call5419, "wait", [0]);
    var var_runExitCode = call5420;
    var if5421 = GraceDone;
    setLineNumber(1430);    // compilenode identifier
    var opresult5424 = callmethodChecked(var_runExitCode, "<", [1], new GraceNum(0));
    if (Grace_isTrue(opresult5424)) {
      setLineNumber(1431);    // compilenode string
      var string5425 = new GraceString(".\n");
      var call5427 = callmethodChecked(var_runExitCode, "prefix-", [0]);
      var string5429 = new GraceString(" exited with error ");
      var string5432 = new GraceString("minigrace: program ");
      var opresult5434 = callmethodChecked(string5432, "++", [1], var_modname);
      var opresult5436 = callmethodChecked(opresult5434, "++", [1], string5429);
      var opresult5438 = callmethodChecked(opresult5436, "++", [1], call5427);
      var opresult5440 = callmethodChecked(opresult5438, "++", [1], string5425);
      var call5441 = callmethodChecked(var_io, "error", [0]);
      var call5442 = callmethodChecked(call5441, "write", [1], opresult5440);
      setLineNumber(1432);    // compilenode identifier
      var call5443 = callmethodChecked(var_sys, "exit", [1], new GraceNum(4));
      if5421 = call5443;
    }
    return if5421;
  };
  func5373.paramCounts = [2];
  this.methods["runJsCode"] = func5373;
  func5373.definitionLine = 1419;
  func5373.definitionModule = "genjs";
  setLineNumber(11);    // compilenode string
  var string5444 = new GraceString("");
  var var_indent = string5444;
  setLineNumber(1431);    // compilenode method
  var func5445 = function(argcv) {    // method indent
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for indent"));
    setModuleName("genjs");
    // indent is a simple accessor - elide try ... catch
    setLineNumber(11);    // compilenode identifier
    return var_indent;
  };
  func5445.paramCounts = [0];
  this.methods["indent"] = func5445;
  func5445.definitionLine = 1431;
  func5445.definitionModule = "genjs";
  setLineNumber(1431);    // compilenode method
  var func5446 = function(argcv) {    // method indent:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for indent:=(1)"));
    setModuleName("genjs");
    var_indent = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func5446.paramCounts = [1];
  this.methods["indent:="] = func5446;
  func5446.definitionLine = 1431;
  func5446.definitionModule = "genjs";
  this.methods["indent"].debug = "var";
  setLineNumber(12);    // compilenode num
  var var_verbosity = new GraceNum(30);
  setLineNumber(1431);    // compilenode method
  var func5447 = function(argcv) {    // method verbosity
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for verbosity"));
    setModuleName("genjs");
    // verbosity is a simple accessor - elide try ... catch
    setLineNumber(12);    // compilenode identifier
    return var_verbosity;
  };
  func5447.paramCounts = [0];
  this.methods["verbosity"] = func5447;
  func5447.definitionLine = 1431;
  func5447.definitionModule = "genjs";
  setLineNumber(1431);    // compilenode method
  var func5448 = function(argcv) {    // method verbosity:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for verbosity:=(1)"));
    setModuleName("genjs");
    var_verbosity = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func5448.paramCounts = [1];
  this.methods["verbosity:="] = func5448;
  func5448.definitionLine = 1431;
  func5448.definitionModule = "genjs";
  this.methods["verbosity"].debug = "var";
  setLineNumber(13);    // compilenode num
  var var_pad1 = new GraceNum(1);
  setLineNumber(1431);    // compilenode method
  var func5449 = function(argcv) {    // method pad1
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for pad1"));
    setModuleName("genjs");
    // pad1 is a simple accessor - elide try ... catch
    setLineNumber(13);    // compilenode identifier
    return var_pad1;
  };
  func5449.paramCounts = [0];
  this.methods["pad1"] = func5449;
  func5449.definitionLine = 1431;
  func5449.definitionModule = "genjs";
  setLineNumber(1431);    // compilenode method
  var func5450 = function(argcv) {    // method pad1:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for pad1:=(1)"));
    setModuleName("genjs");
    var_pad1 = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func5450.paramCounts = [1];
  this.methods["pad1:="] = func5450;
  func5450.definitionLine = 1431;
  func5450.definitionModule = "genjs";
  this.methods["pad1"].debug = "var";
  setLineNumber(14);    // compilenode num
  var var_auto__95__count = new GraceNum(0);
  setLineNumber(1431);    // compilenode method
  var func5451 = function(argcv) {    // method auto_count
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for auto_count"));
    setModuleName("genjs");
    // auto_count is a simple accessor - elide try ... catch
    setLineNumber(14);    // compilenode identifier
    return var_auto__95__count;
  };
  func5451.paramCounts = [0];
  this.methods["auto_count"] = func5451;
  func5451.definitionLine = 1431;
  func5451.definitionModule = "genjs";
  setLineNumber(1431);    // compilenode method
  var func5452 = function(argcv) {    // method auto_count:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for auto_count:=(1)"));
    setModuleName("genjs");
    var_auto__95__count = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func5452.paramCounts = [1];
  this.methods["auto_count:="] = func5452;
  func5452.definitionLine = 1431;
  func5452.definitionModule = "genjs";
  this.methods["auto_count"].debug = "var";
  setLineNumber(15);    // compilenode array
  var array5453 = new PrimitiveGraceList([]);
  var var_constants = array5453;
  setLineNumber(1431);    // compilenode method
  var func5454 = function(argcv) {    // method constants
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for constants"));
    setModuleName("genjs");
    // constants is a simple accessor - elide try ... catch
    setLineNumber(15);    // compilenode identifier
    return var_constants;
  };
  func5454.paramCounts = [0];
  this.methods["constants"] = func5454;
  func5454.definitionLine = 1431;
  func5454.definitionModule = "genjs";
  setLineNumber(1431);    // compilenode method
  var func5455 = function(argcv) {    // method constants:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for constants:=(1)"));
    setModuleName("genjs");
    var_constants = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func5455.paramCounts = [1];
  this.methods["constants:="] = func5455;
  func5455.definitionLine = 1431;
  func5455.definitionModule = "genjs";
  this.methods["constants"].debug = "var";
  setLineNumber(16);    // compilenode array
  var array5456 = new PrimitiveGraceList([]);
  var var_output = array5456;
  setLineNumber(1431);    // compilenode method
  var func5457 = function(argcv) {    // method output
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for output"));
    setModuleName("genjs");
    // output is a simple accessor - elide try ... catch
    setLineNumber(16);    // compilenode identifier
    return var_output;
  };
  func5457.paramCounts = [0];
  this.methods["output"] = func5457;
  func5457.definitionLine = 1431;
  func5457.definitionModule = "genjs";
  setLineNumber(1431);    // compilenode method
  var func5458 = function(argcv) {    // method output:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for output:=(1)"));
    setModuleName("genjs");
    var_output = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func5458.paramCounts = [1];
  this.methods["output:="] = func5458;
  func5458.definitionLine = 1431;
  func5458.definitionModule = "genjs";
  this.methods["output"].debug = "var";
  setLineNumber(17);    // compilenode array
  var array5459 = new PrimitiveGraceList([]);
  var var_usedvars = array5459;
  setLineNumber(1431);    // compilenode method
  var func5460 = function(argcv) {    // method usedvars
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for usedvars"));
    setModuleName("genjs");
    // usedvars is a simple accessor - elide try ... catch
    setLineNumber(17);    // compilenode identifier
    return var_usedvars;
  };
  func5460.paramCounts = [0];
  this.methods["usedvars"] = func5460;
  func5460.definitionLine = 1431;
  func5460.definitionModule = "genjs";
  setLineNumber(1431);    // compilenode method
  var func5461 = function(argcv) {    // method usedvars:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for usedvars:=(1)"));
    setModuleName("genjs");
    var_usedvars = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func5461.paramCounts = [1];
  this.methods["usedvars:="] = func5461;
  func5461.definitionLine = 1431;
  func5461.definitionModule = "genjs";
  this.methods["usedvars"].debug = "var";
  setLineNumber(18);    // compilenode array
  var array5462 = new PrimitiveGraceList([]);
  var var_declaredvars = array5462;
  setLineNumber(1431);    // compilenode method
  var func5463 = function(argcv) {    // method declaredvars
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for declaredvars"));
    setModuleName("genjs");
    // declaredvars is a simple accessor - elide try ... catch
    setLineNumber(18);    // compilenode identifier
    return var_declaredvars;
  };
  func5463.paramCounts = [0];
  this.methods["declaredvars"] = func5463;
  func5463.definitionLine = 1431;
  func5463.definitionModule = "genjs";
  setLineNumber(1431);    // compilenode method
  var func5464 = function(argcv) {    // method declaredvars:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for declaredvars:=(1)"));
    setModuleName("genjs");
    var_declaredvars = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func5464.paramCounts = [1];
  this.methods["declaredvars:="] = func5464;
  func5464.definitionLine = 1431;
  func5464.definitionModule = "genjs";
  this.methods["declaredvars"].debug = "var";
  setLineNumber(19);    // compilenode string
  var string5465 = new GraceString("entry");
  var var_bblock = string5465;
  setLineNumber(1431);    // compilenode method
  var func5466 = function(argcv) {    // method bblock
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for bblock"));
    setModuleName("genjs");
    // bblock is a simple accessor - elide try ... catch
    setLineNumber(19);    // compilenode identifier
    return var_bblock;
  };
  func5466.paramCounts = [0];
  this.methods["bblock"] = func5466;
  func5466.definitionLine = 1431;
  func5466.definitionModule = "genjs";
  setLineNumber(1431);    // compilenode method
  var func5467 = function(argcv) {    // method bblock:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for bblock:=(1)"));
    setModuleName("genjs");
    var_bblock = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func5467.paramCounts = [1];
  this.methods["bblock:="] = func5467;
  func5467.definitionLine = 1431;
  func5467.definitionModule = "genjs";
  this.methods["bblock"].debug = "var";
  setLineNumber(21);    // compilenode array
  var array5468 = new PrimitiveGraceList([]);
  var var_values = array5468;
  setLineNumber(1431);    // compilenode method
  var func5469 = function(argcv) {    // method values
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for values"));
    setModuleName("genjs");
    // values is a simple accessor - elide try ... catch
    setLineNumber(21);    // compilenode identifier
    return var_values;
  };
  func5469.paramCounts = [0];
  this.methods["values"] = func5469;
  func5469.definitionLine = 1431;
  func5469.definitionModule = "genjs";
  setLineNumber(1431);    // compilenode method
  var func5470 = function(argcv) {    // method values:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for values:=(1)"));
    setModuleName("genjs");
    var_values = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func5470.paramCounts = [1];
  this.methods["values:="] = func5470;
  func5470.definitionLine = 1431;
  func5470.definitionModule = "genjs";
  this.methods["values"].debug = "var";
  setLineNumber(22);    // compilenode vardec
  var var_outfile;
  setLineNumber(1431);    // compilenode method
  var func5471 = function(argcv) {    // method outfile
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for outfile"));
    setModuleName("genjs");
    // outfile is a simple accessor - elide try ... catch
    setLineNumber(22);    // compilenode identifier
    return var_outfile;
  };
  func5471.paramCounts = [0];
  this.methods["outfile"] = func5471;
  func5471.definitionLine = 1431;
  func5471.definitionModule = "genjs";
  setLineNumber(1431);    // compilenode method
  var func5472 = function(argcv) {    // method outfile:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for outfile:=(1)"));
    setModuleName("genjs");
    var_outfile = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func5472.paramCounts = [1];
  this.methods["outfile:="] = func5472;
  func5472.definitionLine = 1431;
  func5472.definitionModule = "genjs";
  this.methods["outfile"].debug = "var";
  setLineNumber(23);    // compilenode string
  var string5473 = new GraceString("main");
  var var_modname = string5473;
  setLineNumber(1431);    // compilenode method
  var func5474 = function(argcv) {    // method modname
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for modname"));
    setModuleName("genjs");
    // modname is a simple accessor - elide try ... catch
    setLineNumber(23);    // compilenode identifier
    return var_modname;
  };
  func5474.paramCounts = [0];
  this.methods["modname"] = func5474;
  func5474.definitionLine = 1431;
  func5474.definitionModule = "genjs";
  setLineNumber(1431);    // compilenode method
  var func5475 = function(argcv) {    // method modname:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for modname:=(1)"));
    setModuleName("genjs");
    var_modname = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func5475.paramCounts = [1];
  this.methods["modname:="] = func5475;
  func5475.definitionLine = 1431;
  func5475.definitionModule = "genjs";
  this.methods["modname"].debug = "var";
  setLineNumber(24);    // compilenode string
  var string5476 = new GraceString("build");
  var var_runmode = string5476;
  setLineNumber(1431);    // compilenode method
  var func5477 = function(argcv) {    // method runmode
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for runmode"));
    setModuleName("genjs");
    // runmode is a simple accessor - elide try ... catch
    setLineNumber(24);    // compilenode identifier
    return var_runmode;
  };
  func5477.paramCounts = [0];
  this.methods["runmode"] = func5477;
  func5477.definitionLine = 1431;
  func5477.definitionModule = "genjs";
  setLineNumber(1431);    // compilenode method
  var func5478 = function(argcv) {    // method runmode:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for runmode:=(1)"));
    setModuleName("genjs");
    var_runmode = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func5478.paramCounts = [1];
  this.methods["runmode:="] = func5478;
  func5478.definitionLine = 1431;
  func5478.definitionModule = "genjs";
  this.methods["runmode"].debug = "var";
  setLineNumber(25);    // compilenode string
  var string5479 = new GraceString("bc");
  var var_buildtype = string5479;
  setLineNumber(1431);    // compilenode method
  var func5480 = function(argcv) {    // method buildtype
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for buildtype"));
    setModuleName("genjs");
    // buildtype is a simple accessor - elide try ... catch
    setLineNumber(25);    // compilenode identifier
    return var_buildtype;
  };
  func5480.paramCounts = [0];
  this.methods["buildtype"] = func5480;
  func5480.definitionLine = 1431;
  func5480.definitionModule = "genjs";
  setLineNumber(1431);    // compilenode method
  var func5481 = function(argcv) {    // method buildtype:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for buildtype:=(1)"));
    setModuleName("genjs");
    var_buildtype = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func5481.paramCounts = [1];
  this.methods["buildtype:="] = func5481;
  func5481.definitionLine = 1431;
  func5481.definitionModule = "genjs";
  this.methods["buildtype"].debug = "var";
  setLineNumber(26);    // compilenode identifier
  var var_inBlock = GraceFalse;
  setLineNumber(1431);    // compilenode method
  var func5482 = function(argcv) {    // method inBlock
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for inBlock"));
    setModuleName("genjs");
    // inBlock is a simple accessor - elide try ... catch
    setLineNumber(26);    // compilenode identifier
    return var_inBlock;
  };
  func5482.paramCounts = [0];
  this.methods["inBlock"] = func5482;
  func5482.definitionLine = 1431;
  func5482.definitionModule = "genjs";
  setLineNumber(1431);    // compilenode method
  var func5483 = function(argcv) {    // method inBlock:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for inBlock:=(1)"));
    setModuleName("genjs");
    var_inBlock = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func5483.paramCounts = [1];
  this.methods["inBlock:="] = func5483;
  func5483.definitionLine = 1431;
  func5483.definitionModule = "genjs";
  this.methods["inBlock"].debug = "var";
  setLineNumber(27);    // compilenode num
  var var_compilationDepth = new GraceNum(0);
  setLineNumber(1431);    // compilenode method
  var func5484 = function(argcv) {    // method compilationDepth
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compilationDepth"));
    setModuleName("genjs");
    // compilationDepth is a simple accessor - elide try ... catch
    setLineNumber(27);    // compilenode identifier
    return var_compilationDepth;
  };
  func5484.paramCounts = [0];
  this.methods["compilationDepth"] = func5484;
  func5484.definitionLine = 1431;
  func5484.definitionModule = "genjs";
  setLineNumber(1431);    // compilenode method
  var func5485 = function(argcv) {    // method compilationDepth:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compilationDepth:=(1)"));
    setModuleName("genjs");
    var_compilationDepth = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func5485.paramCounts = [1];
  this.methods["compilationDepth:="] = func5485;
  func5485.definitionLine = 1431;
  func5485.definitionModule = "genjs";
  this.methods["compilationDepth"].debug = "var";
  setLineNumber(28);    // compilenode call
  var call5486 = callmethodChecked(var_prelude, "emptySet", [0]);
  var var_importedModules = call5486;
  var func5487 = function(argcv) {    // method importedModules
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for importedModules"));
    setModuleName("genjs");
    // importedModules is a simple accessor - elide try ... catch
    return var_importedModules;
  };
  func5487.paramCounts = [0];
  this.methods["importedModules"] = func5487;
  func5487.definitionLine = 28;
  func5487.definitionModule = "genjs";
  this.methods["importedModules"].debug = "def";
  setLineNumber(29);    // compilenode call
  var call5488 = callmethodChecked(var_prelude, "emptySet", [0]);
  var var_topLevelTypes = call5488;
  var func5489 = function(argcv) {    // method topLevelTypes
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for topLevelTypes"));
    setModuleName("genjs");
    // topLevelTypes is a simple accessor - elide try ... catch
    return var_topLevelTypes;
  };
  func5489.paramCounts = [0];
  this.methods["topLevelTypes"] = func5489;
  func5489.definitionLine = 29;
  func5489.definitionModule = "genjs";
  this.methods["topLevelTypes"].debug = "def";
  setLineNumber(30);    // compilenode identifier
  var call5490 = callmethodChecked(var_util, "requiredModules", [0]);
  var var_imports = call5490;
  var func5491 = function(argcv) {    // method imports
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for imports"));
    setModuleName("genjs");
    // imports is a simple accessor - elide try ... catch
    return var_imports;
  };
  func5491.paramCounts = [0];
  this.methods["imports"] = func5491;
  func5491.definitionLine = 30;
  func5491.definitionModule = "genjs";
  this.methods["imports"].debug = "def";
  setLineNumber(31);    // compilenode identifier
  var var_debugMode = GraceFalse;
  setLineNumber(30);    // compilenode method
  var func5492 = function(argcv) {    // method debugMode
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for debugMode"));
    setModuleName("genjs");
    // debugMode is a simple accessor - elide try ... catch
    setLineNumber(31);    // compilenode identifier
    return var_debugMode;
  };
  func5492.paramCounts = [0];
  this.methods["debugMode"] = func5492;
  func5492.definitionLine = 30;
  func5492.definitionModule = "genjs";
  setLineNumber(30);    // compilenode method
  var func5493 = function(argcv) {    // method debugMode:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for debugMode:=(1)"));
    setModuleName("genjs");
    var_debugMode = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func5493.paramCounts = [1];
  this.methods["debugMode:="] = func5493;
  func5493.definitionLine = 30;
  func5493.definitionModule = "genjs";
  this.methods["debugMode"].debug = "var";
  setLineNumber(32);    // compilenode num
  var var_priorLineSeen = new GraceNum(0);
  setLineNumber(30);    // compilenode method
  var func5494 = function(argcv) {    // method priorLineSeen
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for priorLineSeen"));
    setModuleName("genjs");
    // priorLineSeen is a simple accessor - elide try ... catch
    setLineNumber(32);    // compilenode identifier
    return var_priorLineSeen;
  };
  func5494.paramCounts = [0];
  this.methods["priorLineSeen"] = func5494;
  func5494.definitionLine = 30;
  func5494.definitionModule = "genjs";
  setLineNumber(30);    // compilenode method
  var func5495 = function(argcv) {    // method priorLineSeen:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for priorLineSeen:=(1)"));
    setModuleName("genjs");
    var_priorLineSeen = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func5495.paramCounts = [1];
  this.methods["priorLineSeen:="] = func5495;
  func5495.definitionLine = 30;
  func5495.definitionModule = "genjs";
  this.methods["priorLineSeen"].debug = "var";
  setLineNumber(33);    // compilenode string
  var string5496 = new GraceString("");
  var var_priorLineComment = string5496;
  setLineNumber(30);    // compilenode method
  var func5497 = function(argcv) {    // method priorLineComment
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for priorLineComment"));
    setModuleName("genjs");
    // priorLineComment is a simple accessor - elide try ... catch
    setLineNumber(33);    // compilenode identifier
    return var_priorLineComment;
  };
  func5497.paramCounts = [0];
  this.methods["priorLineComment"] = func5497;
  func5497.definitionLine = 30;
  func5497.definitionModule = "genjs";
  setLineNumber(30);    // compilenode method
  var func5498 = function(argcv) {    // method priorLineComment:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for priorLineComment:=(1)"));
    setModuleName("genjs");
    var_priorLineComment = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func5498.paramCounts = [1];
  this.methods["priorLineComment:="] = func5498;
  func5498.definitionLine = 30;
  func5498.definitionModule = "genjs";
  this.methods["priorLineComment"].debug = "var";
  setLineNumber(34);    // compilenode num
  var var_priorLineEmitted = new GraceNum(0);
  setLineNumber(30);    // compilenode method
  var func5499 = function(argcv) {    // method priorLineEmitted
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for priorLineEmitted"));
    setModuleName("genjs");
    // priorLineEmitted is a simple accessor - elide try ... catch
    setLineNumber(34);    // compilenode identifier
    return var_priorLineEmitted;
  };
  func5499.paramCounts = [0];
  this.methods["priorLineEmitted"] = func5499;
  func5499.definitionLine = 30;
  func5499.definitionModule = "genjs";
  setLineNumber(30);    // compilenode method
  var func5500 = function(argcv) {    // method priorLineEmitted:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for priorLineEmitted:=(1)"));
    setModuleName("genjs");
    var_priorLineEmitted = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func5500.paramCounts = [1];
  this.methods["priorLineEmitted:="] = func5500;
  func5500.definitionLine = 30;
  func5500.definitionModule = "genjs";
  this.methods["priorLineEmitted"].debug = "var";
  setLineNumber(35);    // compilenode identifier
  var var_emitTypeChecks = GraceTrue;
  setLineNumber(30);    // compilenode method
  var func5501 = function(argcv) {    // method emitTypeChecks
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for emitTypeChecks"));
    setModuleName("genjs");
    // emitTypeChecks is a simple accessor - elide try ... catch
    setLineNumber(35);    // compilenode identifier
    return var_emitTypeChecks;
  };
  func5501.paramCounts = [0];
  this.methods["emitTypeChecks"] = func5501;
  func5501.definitionLine = 30;
  func5501.definitionModule = "genjs";
  setLineNumber(30);    // compilenode method
  var func5502 = function(argcv) {    // method emitTypeChecks:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for emitTypeChecks:=(1)"));
    setModuleName("genjs");
    var_emitTypeChecks = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func5502.paramCounts = [1];
  this.methods["emitTypeChecks:="] = func5502;
  func5502.definitionLine = 30;
  func5502.definitionModule = "genjs";
  this.methods["emitTypeChecks"].debug = "var";
  setLineNumber(36);    // compilenode identifier
  var var_emitUndefinedChecks = GraceTrue;
  setLineNumber(30);    // compilenode method
  var func5503 = function(argcv) {    // method emitUndefinedChecks
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for emitUndefinedChecks"));
    setModuleName("genjs");
    // emitUndefinedChecks is a simple accessor - elide try ... catch
    setLineNumber(36);    // compilenode identifier
    return var_emitUndefinedChecks;
  };
  func5503.paramCounts = [0];
  this.methods["emitUndefinedChecks"] = func5503;
  func5503.definitionLine = 30;
  func5503.definitionModule = "genjs";
  setLineNumber(30);    // compilenode method
  var func5504 = function(argcv) {    // method emitUndefinedChecks:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for emitUndefinedChecks:=(1)"));
    setModuleName("genjs");
    var_emitUndefinedChecks = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func5504.paramCounts = [1];
  this.methods["emitUndefinedChecks:="] = func5504;
  func5504.definitionLine = 30;
  func5504.definitionModule = "genjs";
  this.methods["emitUndefinedChecks"].debug = "var";
  setLineNumber(37);    // compilenode identifier
  var var_emitArgChecks = GraceTrue;
  setLineNumber(30);    // compilenode method
  var func5505 = function(argcv) {    // method emitArgChecks
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for emitArgChecks"));
    setModuleName("genjs");
    // emitArgChecks is a simple accessor - elide try ... catch
    setLineNumber(37);    // compilenode identifier
    return var_emitArgChecks;
  };
  func5505.paramCounts = [0];
  this.methods["emitArgChecks"] = func5505;
  func5505.definitionLine = 30;
  func5505.definitionModule = "genjs";
  setLineNumber(30);    // compilenode method
  var func5506 = function(argcv) {    // method emitArgChecks:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for emitArgChecks:=(1)"));
    setModuleName("genjs");
    var_emitArgChecks = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func5506.paramCounts = [1];
  this.methods["emitArgChecks:="] = func5506;
  func5506.definitionLine = 30;
  func5506.definitionModule = "genjs";
  this.methods["emitArgChecks"].debug = "var";
  setLineNumber(38);    // compilenode identifier
  var var_emitPositions = GraceTrue;
  setLineNumber(30);    // compilenode method
  var func5507 = function(argcv) {    // method emitPositions
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for emitPositions"));
    setModuleName("genjs");
    // emitPositions is a simple accessor - elide try ... catch
    setLineNumber(38);    // compilenode identifier
    return var_emitPositions;
  };
  func5507.paramCounts = [0];
  this.methods["emitPositions"] = func5507;
  func5507.definitionLine = 30;
  func5507.definitionModule = "genjs";
  setLineNumber(30);    // compilenode method
  var func5508 = function(argcv) {    // method emitPositions:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for emitPositions:=(1)"));
    setModuleName("genjs");
    var_emitPositions = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func5508.paramCounts = [1];
  this.methods["emitPositions:="] = func5508;
  func5508.definitionLine = 30;
  func5508.definitionModule = "genjs";
  this.methods["emitPositions"].debug = "var";
  setLineNumber(39);    // compilenode string
  var string5509 = new GraceString("callmethodChecked");
  var var_requestCall = string5509;
  setLineNumber(30);    // compilenode method
  var func5510 = function(argcv) {    // method requestCall
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for requestCall"));
    setModuleName("genjs");
    // requestCall is a simple accessor - elide try ... catch
    setLineNumber(39);    // compilenode identifier
    return var_requestCall;
  };
  func5510.paramCounts = [0];
  this.methods["requestCall"] = func5510;
  func5510.definitionLine = 30;
  func5510.definitionModule = "genjs";
  setLineNumber(30);    // compilenode method
  var func5511 = function(argcv) {    // method requestCall:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for requestCall:=(1)"));
    setModuleName("genjs");
    var_requestCall = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func5511.paramCounts = [1];
  this.methods["requestCall:="] = func5511;
  func5511.definitionLine = 30;
  func5511.definitionModule = "genjs";
  this.methods["requestCall"].debug = "var";
  setLineNumber(40);    // compilenode string
  var string5512 = new GraceString("Lineup");
  var var_bracketConstructor = string5512;
  setLineNumber(30);    // compilenode method
  var func5513 = function(argcv) {    // method bracketConstructor
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for bracketConstructor"));
    setModuleName("genjs");
    // bracketConstructor is a simple accessor - elide try ... catch
    setLineNumber(40);    // compilenode identifier
    return var_bracketConstructor;
  };
  func5513.paramCounts = [0];
  this.methods["bracketConstructor"] = func5513;
  func5513.definitionLine = 30;
  func5513.definitionModule = "genjs";
  setLineNumber(30);    // compilenode method
  var func5514 = function(argcv) {    // method bracketConstructor:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for bracketConstructor:=(1)"));
    setModuleName("genjs");
    var_bracketConstructor = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func5514.paramCounts = [1];
  this.methods["bracketConstructor:="] = func5514;
  func5514.definitionLine = 30;
  func5514.definitionModule = "genjs";
  this.methods["bracketConstructor"].debug = "var";
  return this;
}
gracecode_genjs.imports = ['ast', 'errormessages', 'io', 'mirrors', 'sys', 'unixFilePath', 'util', 'xmodule'];
if (typeof gctCache !== "undefined")
  gctCache['genjs'] = "classes:\nconfidential:\nfresh-methods:\nmodules:\n ast\n errormessages\n identifierKinds\n io\n mirrors\n stringMap\n sys\n unixFilePath\n util\n xmodule\npath:\n genjs\npublic:\n basename\n beginblock\n compile\n compileInherits()in\n compileNativeCode\n compilePrint\n compileSuper\n compileTrait()in\n compilearray\n compilebind\n compileblock\n compilecall\n compiledefdec\n compiledialect\n compilefreshmethod\n compileidentifier\n compileif\n compileimport\n compilematchcase\n compilemember\n compilemethod\n compilemethodtypes\n compilenode\n compileobjdefdec\n compileobject\n compileobjouter\n compileobjtype\n compileobjvardec\n compileop\n compilereturn\n compiletrycatch\n compiletypedec\n compiletypeliteral\n compilevardec\n decreaseindent\n escapeident\n escapestring\n forceLineNumber()comment\n formatModname\n increaseindent\n noteLineNumber()comment\n out\n outUnnumbered\n runJsCode\n varf\ntypes:\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["genjs"] = [
    "#pragma ExtendedLineups",
    "import \"io\" as io",
    "import \"sys\" as sys",
    "import \"ast\" as ast",
    "import \"util\" as util",
    "import \"unixFilePath\" as unixFilePath",
    "import \"xmodule\" as xmodule",
    "import \"mirrors\" as mirrors",
    "import \"errormessages\" as errormessages",
    "",
    "var indent := \"\"",
    "var verbosity := 30",
    "var pad1 := 1",
    "var auto_count := 0",
    "var constants := []",
    "var output := []",
    "var usedvars := []",
    "var declaredvars := []",
    "var bblock := \"entry\"",
    "",
    "var values := []",
    "var outfile",
    "var modname := \"main\"",
    "var runmode := \"build\"",
    "var buildtype := \"bc\"",
    "var inBlock := false",
    "var compilationDepth := 0",
    "def importedModules = emptySet",
    "def topLevelTypes = emptySet",
    "def imports = util.requiredModules",
    "var debugMode := false",
    "var priorLineSeen := 0",
    "var priorLineComment := \"\"",
    "var priorLineEmitted := 0",
    "var emitTypeChecks := true",
    "var emitUndefinedChecks := true",
    "var emitArgChecks := true",
    "var emitPositions := true",
    "var requestCall := \"callmethodChecked\"",
    "var bracketConstructor := \"Lineup\"",
    "",
    "method increaseindent {",
    "    indent := indent ++ \"  \"",
    "}",
    "",
    "method decreaseindent {",
    "    if(indent.size <= 2) then {",
    "        indent := \"\"",
    "    } else {",
    "        indent := indent.substringFrom(1)to(indent.size - 2)",
    "    }",
    "}",
    "",
    "method formatModname(name) {",
    "    \"gracecode_\" ++ escapeident (basename(name))",
    "}",
    "",
    "method basename(filepath) {",
    "    var bnm := \"\"",
    "    for (filepath) do {c->",
    "        if (c == \"/\") then {",
    "            bnm := \"\"",
    "        } else {",
    "            bnm := bnm ++ c",
    "        }",
    "    }",
    "    bnm",
    "}",
    "",
    "method noteLineNumber(n)comment(c) {",
    "    // remember the current line number, so that it can be generated if needed",
    "    priorLineSeen := n",
    "    priorLineComment := c",
    "}",
    "",
    "method forceLineNumber(n)comment(c) {",
    "    // force the generation of code that sets the line number.  ",
    "    // Used at the start of a method",
    "    noteLineNumber(n)comment(c)",
    "    if (emitPositions) then {",
    "        output.push \"{indent}setLineNumber({priorLineSeen});    // {priorLineComment}\"",
    "    }",
    "    priorLineEmitted := priorLineSeen",
    "}",
    "",
    "method out(s) {",
    "    // output code, but first output code to set the line number",
    "    if (emitPositions && (priorLineSeen != priorLineEmitted)) then {",
    "        output.push \"{indent}setLineNumber({priorLineSeen});    // {priorLineComment}\"",
    "        priorLineEmitted := priorLineSeen",
    "    }",
    "    output.push(indent ++ s)",
    "    return done",
    "}",
    "",
    "method outUnnumbered(s) {",
    "    // output code that does not correspond to any source line",
    "    output.push(indent ++ s)",
    "}",
    "",
    "method escapeident(vn) {",
    "    var nm := \"\"",
    "    for (vn) do {c->",
    "        var o := c.ord",
    "        if (((o >= 97 ) && (o <= 122)) || ((o >= 65) && (o <= 90))",
    "            || ((o >= 48) && (o <= 57))) then {",
    "            nm := nm ++ c",
    "        } else {",
    "            nm := nm ++ \"__\" ++ o ++ \"__\"",
    "        }",
    "    }",
    "    nm",
    "}",
    "method escapestring(s) {",
    "    var os := \"\"",
    "    for (s) do {c->",
    "        if (c == \"\\\"\") then {",
    "            os := os ++ \"\\\\\\\"\"",
    "        } elseif { c == \"\\\\\" } then {",
    "            os := os ++ \"\\\\\\\\\"",
    "        } elseif { c == \"\\n\" } then {",
    "            os := os ++ \"\\\\n\"",
    "        } elseif { (c.ord < 32) || (c.ord > 126) } then {",
    "            var uh := util.hex(c.ord)",
    "            while {uh.size < 4} do {",
    "                uh := \"0\" ++ uh",
    "            }",
    "            os := os ++ \"\\\\u\" ++ uh",
    "        } else {",
    "            os := os ++ c",
    "        }",
    "    }",
    "    os",
    "}",
    "method varf(vn) {",
    "    \"var_\" ++ escapeident(vn)",
    "}",
    "method beginblock(s) {",
    "    bblock := \"%\" ++ s",
    "    out(s ++ \":\")",
    "}",
    "method compilearray(o) {",
    "    var myc := auto_count",
    "    auto_count := auto_count + 1",
    "    var r",
    "    var vals := []",
    "    for (o.value) do {a ->",
    "        r := compilenode(a)",
    "        vals.push(r)",
    "    }",
    "    out \"var array{myc} = new {bracketConstructor}({vals});\"",
    "    o.register := \"array\" ++ myc",
    "}",
    "method compilemember(o) {",
    "    // Member in value position is actually a nullary method call.",
    "    util.setline(o.line)",
    "    var c := ast.callNode.new(o, [ast.callWithPart.request(o.value) withArgs( [] )]) scope(o.scope)",
    "    var r := compilenode(c)",
    "    o.register := r",
    "}",
    "method compileobjouter(selfr, outerRef) {",
    "    var myc := auto_count",
    "    auto_count := auto_count + 1",
    "    var nm := escapestring(\"outer\")",
    "    var nmi := escapeident(\"outer\")",
    "    def emod = escapeident(modname)",
    "    out(\"{selfr}.outer = {outerRef};\")",
    "    out(\"var reader_{emod}_{nmi}{myc} = function() \\{\")",
    "    out(\"  return this.outer;\")",
    "    out(\"\\};\")",
    "    out(\"{selfr}.methods[\\\"{nm}\\\"] = reader_{emod}_{nmi}{myc};\")",
    "}",
    "method compileobjtype(o, selfr, pos) {",
    "    var val := \"undefined\"",
    "    var myc := auto_count",
    "    auto_count := auto_count + 1",
    "    var nm := escapestring(o.value)",
    "    var nmi := escapeident(o.value)",
    "    def emod = escapeident(modname)",
    "    o.anonymous := true",
    "    val := compilenode(o)",
    "    out(selfr ++ \".data[\\\"\" ++ nm ++ \"\\\"] = \" ++ val ++ \";\")",
    "    out(\"    var reader_{emod}_{nmi}{myc} = function() \\{\")",
    "    out(\"    return this.data[\\\"\" ++ nm ++ \"\\\"];\")",
    "    out(\"  \\};\")",
    "    out(\"  reader_{emod}_{nmi}{myc}.def = true;\")",
    "    var isReadable := false",
    "    for (o.annotations) do {ann->",
    "        if ((ann.kind == \"identifier\") && ",
    "            {ann.value == \"confidential\"}) then {",
    "            out \"  reader_{emod}_{nmi}{myc}.confidential = true;\"",
    "        }",
    "    }",
    "    out \"{selfr}.methods[\\\"{nm}\\\"] = reader_{emod}_{nmi}{myc};\"",
    "}",
    "method compileobjdefdec(o, selfr, pos) {",
    "    var val := \"undefined\"",
    "    if (false != o.value) then {",
    "        if (o.value.kind == \"object\") then {",
    "            compileobject(o.value, selfr, false)",
    "            val := o.value.register",
    "        } else {",
    "            val := compilenode(o.value)",
    "        }",
    "    }",
    "    var myc := auto_count",
    "    auto_count := auto_count + 1",
    "    var nm := escapestring(o.name.value)",
    "    var nmi := escapeident(o.name.value)",
    "    def emod = escapeident(modname)",
    "    out \"{selfr}.data[\\\"{nm}\\\"] = {val};\"",
    "    out \"var reader_{emod}_{nmi}{myc} = function() \\{\"",
    "    out \"  return this.data[\\\"{nm}\\\"];\"",
    "    out \"\\};\"",
    "    out \"reader_{emod}_{nmi}{myc}.def = true;\"",
    "    if (o.isReadable.not) then {",
    "        out \"reader_{emod}_{nmi}{myc}.confidential = true;\"",
    "    }",
    "    out \"{selfr}.methods[\\\"{nm}\\\"] = reader_{emod}_{nmi}{myc};\"",
    "    if (ast.findAnnotation(o, \"parent\")) then {",
    "        out \"  {selfr}.superobj = {val};\"",
    "    }",
    "    if (emitTypeChecks) then {",
    "        if (o.dtype != false) then {",
    "            if (o.dtype.value != \"Unknown\") then {",
    "                noteLineNumber(o.line)comment(\"typecheck in compileobjdefdec\")",
    "                out \"if (!Grace_isTrue(callmethod({compilenode(o.dtype)}, \\\"match\\\", [1], {val})))\"",
    "                out \"  throw new GraceExceptionPacket(TypeErrorObject,\"",
    "                out \"      new GraceString(\\\"value of def '{o.name.value}' is not of type {o.dtype.toGrace(0)}\\\"));\"",
    "            }",
    "        }",
    "    }",
    "}",
    "method compileobjvardec(o, selfr, pos) {",
    "    var val := \"undefined\"",
    "    if (false != o.value) then {",
    "        val := compilenode(o.value)",
    "    }",
    "    var myc := auto_count",
    "    auto_count := auto_count + 1",
    "    var nm := escapestring(o.name.value)",
    "    var nmi := escapeident(o.name.value)",
    "    def emod = escapeident(modname)",
    "    out(selfr ++ \".data[\\\"\" ++ nm ++ \"\\\"] = \" ++ val ++ \";\")",
    "    out(\"var reader_\" ++ emod ++ \"_\" ++ nmi ++ myc ++ \" = function() \\{\")",
    "    out(\"  return this.data[\\\"\" ++ nm ++ \"\\\"];\")",
    "    out(\"\\};\")",
    "    out(selfr ++ \".methods[\\\"\" ++ nm ++ \"\\\"] = reader_\" ++ emod ++",
    "        \"_\" ++ nmi ++ myc ++ \";\")",
    "    out(selfr ++ \".data[\\\"\" ++ nm ++ \"\\\"] = \" ++ val ++ \";\")",
    "    out(\"var writer_\" ++ emod ++ \"_\" ++ nmi ++ myc ++ \" = function(argcv, o) \\{\")",
    "    out(\"  this.data[\\\"\" ++ nm ++ \"\\\"] = o;\")",
    "    out \"  return GraceDone;\"",
    "    out(\"\\};\")",
    "    out(selfr ++ \".methods[\\\"\" ++ nm ++ \":=\\\"] = writer_\" ++ emod ++",
    "        \"_\" ++ nmi ++ myc ++ \";\")",
    "    if (o.isReadable.not) then {",
    "        out(\"reader_{emod}_{nmi}{myc}.confidential = true;\")",
    "    }",
    "    if (o.isWritable.not) then {",
    "        out(\"writer_{emod}_{nmi}{myc}.confidential = true;\")",
    "    }",
    "    if (emitTypeChecks) then {",
    "        if (o.dtype != false) then {",
    "            if (o.dtype.value != \"Unknown\") then {",
    "                if (val == \"undefined\") then {",
    "                    return true",
    "                }",
    "                noteLineNumber(o.line)comment(\"typecheck in compileobjvardec\")",
    "                out \"if (!Grace_isTrue(callmethod({compilenode(o.dtype)}, \\\"match\\\", [1], {val})))\"",
    "                out \"  throw new GraceExceptionPacket(TypeErrorObject,\"",
    "                out \"      new GraceString(\\\"initial value of var '{o.name.value}' is not of type {o.dtype.toGrace(0)}\\\"));\"",
    "            }",
    "        }",
    "    }",
    "}",
    "method compileobject(o, outerRef, inheritingObject) {",
    "    var origInBlock := inBlock",
    "    inBlock := false",
    "    var myc := auto_count",
    "    auto_count := auto_count + 1",
    "    def selfr = \"obj\" ++ myc",
    "    o.register := selfr",
    "    def superConstructor =",
    "        if (o.inTrait) then { ",
    "            \"GraceTrait\"",
    "        } elseif {false == o.superclass} then {",
    "            \"GraceObject\"",
    "        } else {",
    "            \"null\"  // inheritance will be compiled later, when the inherits node is found",
    "        }",
    "    out \"var {selfr} = Grace_allocObject({superConstructor}, \\\"{o.name}\\\");\"",
    "    out \"{selfr}.definitionModule = \\\"{modname}\\\";\"",
    "    out \"{selfr}.definitionLine = {o.line};\"",
    "    if (inheritingObject) then {",
    "        out \"var inho{myc} = inheritingObject;\"",
    "        out \"while (inho{myc}.superobj) inho{myc} = inho{myc}.superobj;\"",
    "        out \"inho{myc}.superobj = {selfr};\"",
    "        out \"{selfr}.data = inheritingObject.data;\"",
    "        out \"if (inheritingObject.hasOwnProperty('_value'))\"",
    "        out \"  {selfr}._value = inheritingObject._value;\"",
    "    }",
    "    compileobjouter(selfr, outerRef)",
    "    out(\"var obj_init_{myc} = function() \\{\")",
    "    increaseindent",
    "    out(\"var origSuperDepth = superDepth;\")",
    "    out(\"superDepth = {selfr};\")",
    "    var pos := 0",
    "    for (o.value) do { e ->",
    "        if (e.kind == \"method\") then {",
    "            compilemethod(e, selfr)",
    "        }",
    "    }",
    "        ",
    "    // compile inherits",
    "    if (false != o.superclass) then {",
    "        compileInherits(o.superclass) in (o, selfr)",
    "    }",
    "    ",
    "    // compile traits",
    "    o.usedTraits.do { t -> compileInherits(t) in (o, selfr) }",
    "",
    "    // compile body",
    "    o.value.do { e ->",
    "        if (e.kind == \"method\") then {",
    "        } elseif { e.kind == \"vardec\" } then {",
    "            compileobjvardec(e, selfr, pos)",
    "            out(\"{selfr}.mutable = true;\")",
    "            pos := pos + 1",
    "        } elseif { e.kind == \"defdec\" } then {",
    "            compileobjdefdec(e, selfr, pos)",
    "            pos := pos + 1",
    "        } elseif { e.kind == \"typedec\" } then {",
    "            compiletypedec(e)",
    "            pos := pos + 1",
    "        } elseif { e.kind == \"object\" } then {",
    "            compileobject(e, selfr, false)",
    "        } else {",
    "            compilenode(e)",
    "        }",
    "    }",
    "    out \"superDepth = origSuperDepth;\"",
    "    decreaseindent",
    "    out \"\\};\"",
    "    if (inheritingObject) then {",
    "        out \"obj_init_{myc}.apply(inheritingObject, []);\"",
    "    } else {",
    "        out \"obj_init_{myc}.apply({selfr}, []);\"",
    "    }",
    "    inBlock := origInBlock",
    "}",
    "method compileblock(o) {",
    "    var origInBlock := inBlock",
    "    inBlock := true",
    "    var myc := auto_count",
    "    def nParams = o.params.size",
    "    auto_count := auto_count + 1",
    "    out \"var block{myc} = new GraceBlock(this, {o.line}, {nParams});\"",
    "    if (false != o.matchingPattern) then {",
    "        def pat = compilenode(o.matchingPattern)",
    "        out \"block{myc}.pattern = {pat};\"",
    "    }",
    "    var paramList := \"\"",
    "    var paramTypes :=  [ ]",
    "    var paramsAreTyped := false",
    "    var first := true",
    "    for (o.params) do { each ->",
    "        def dType = each.decType",
    "        paramTypes.push(compilenode(dType))",
    "        if (dType != ast.unknownType) then {",
    "            paramsAreTyped := true",
    "        }",
    "        if (first) then {",
    "            paramList := varf(each.value)",
    "            first := false",
    "        } else {",
    "            paramList := paramList ++ \", \" ++ varf(each.value)",
    "        }",
    "    }",
    "    if (paramsAreTyped && emitTypeChecks) then {",
    "        out \"block{myc}.paramTypes = {paramTypes};\"",
    "    }",
    "    out(\"block\" ++ myc ++ \".real = function(\" ++ paramList ++ \") \\{\")",
    "    increaseindent",
    "    var ret := \"GraceDone\"",
    "    for (o.body) do {l->",
    "        ret := compilenode(l)",
    "    }",
    "    out(\"return \" ++ ret ++ \";\")",
    "    decreaseindent",
    "    out(\"\\};\")",
    "    o.register := \"block\" ++ myc",
    "    inBlock := origInBlock",
    "}",
    "method compiletypedec(o) {",
    "    def myc = auto_count",
    "    def enclosing = o.scope.parent",
    "    auto_count := auto_count + 1",
    "    def tName = o.name.value",
    "    out \"// Type decl {tName}\"",
    "    declaredvars.push(escapeident(tName))",
    "    if (o.value.kind == \"typeliteral\") then {o.value.name := tName }",
    "    def val = compilenode(o.value)",
    "    out \"var {varf(tName)} = {val};\"",
    "    o.register := \"type{myc}\"",
    "    if (compilationDepth == 1) then {",
    "        compilenode(ast.methodNode.new(o.name, [ast.signaturePart.partName(o.name.value) scope(enclosing)],",
    "            [o.name], ast.typeType) scope(enclosing))",
    "    }",
    "}",
    "method compiletypeliteral(o) {",
    "    def myc = auto_count",
    "    auto_count := auto_count + 1",
    "    def escName = escapestring(o.value)",
    "    out(\"//   Type literal \")",
    "    out(\"var type{myc} = new GraceType(\\\"{escName}\\\");\")",
    "    for (o.methods) do {meth->",
    "        def mnm = escapestring(meth.value)",
    "        out(\"type{myc}.typeMethods.push(\\\"{mnm}\\\");\")",
    "    }",
    "    // TODO: types in the type literal",
    "    o.register := \"type{myc}\"",
    "}",
    "method compilemethod(o, selfobj) {",
    "    var oldusedvars := usedvars",
    "    var olddeclaredvars := declaredvars",
    "    def paramCounts =  [ ]",
    "    for (o.signature) do { part ->",
    "        paramCounts.push(part.params.size)",
    "    }",
    "    var textualSignature := \"\"",
    "    for (o.signature) do { part ->",
    "        def size = part.params.size",
    "        textualSignature := textualSignature ++ part.name",
    "        if (size > 0) then {",
    "            textualSignature := textualSignature ++ \"({size})\"",
    "        }",
    "    }",
    "    def isSimpleAccessor = (o.body.size == 1) && {o.body.first.isIdentifier}",
    "    usedvars := []",
    "    declaredvars := []",
    "    var myc := auto_count",
    "    auto_count := auto_count + 1",
    "    var name := escapestring(o.value.value)",
    "    var nm := name ++ myc",
    "    var closurevars := []",
    "    var haveTypedParams := false",
    "    for (o.signature) do { part ->",
    "        for (part.params) do {p->",
    "            if (p.dtype != false) then {",
    "                if ((p.dtype.value != \"Unknown\")",
    "                    && ((p.dtype.kind == \"identifier\")",
    "                        || (p.dtype.kind == \"typeliteral\"))) then {",
    "                    haveTypedParams := true",
    "                }",
    "            }",
    "        }",
    "    }",
    "    out(\"var func\" ++ myc ++ \" = function(argcv) \\{    // method \" ++ textualSignature)",
    "    increaseindent",
    "    out(\"var returnTarget = invocationCount;\")",
    "    out(\"invocationCount++;\")",
    "    out(\"var curarg = 1;\")",
    "    if (debugMode && isSimpleAccessor.not) then {",
    "        out \"var myframe = new StackFrame(\\\"{name}\\\");\"",
    "    }",
    "    for (o.signature.indices) do { partnr ->",
    "        var part := o.signature.at(partnr)",
    "        for (part.params) do { p ->",
    "            out \"var {varf(p.value)} = arguments[curarg];\"",
    "            out \"curarg++;\"",
    "            if (debugMode && isSimpleAccessor.not) then {",
    "                out \"myframe.addVar(\\\"{escapestring(p.value)}\\\",\"",
    "                out \"  function() \\{return {varf(p.value)};});\"",
    "            }",
    "        }",
    "        if { emitArgChecks } then {",
    "            out \"if (argcv[{partnr - 1}] !== {part.params.size})\"",
    "            def msgSuffix = if (o.signature.size < 2) then { ",
    "                textualSignature",
    "            } else { ",
    "                \"{part.name} (arg list {partnr}) of {textualSignature}\"",
    "            }",
    "            out(\"  throw new GraceExceptionPacket(ProgrammingErrorObject, new \"",
    "                ++ \"GraceString(\\\"wrong number of arguments for \"",
    "                ++ msgSuffix ++ \"\\\"));\")",
    "        }",
    "    }",
    "    if (o.typeParams != false) then {",
    "        def sz = o.signature.size",
    "        out \"// Start type arguments\"",
    "        o.typeParams.do {g->",
    "            out \"var {varf(g.value)} = var_Unknown;\"",
    "        }",
    "        out \"if (argcv.length == {1 + sz}) \\{\"",
    "        if (emitArgChecks) then {",
    "            out \"  if (argcv[{sz}] !== {o.typeParams.size}) \\{\"",
    "            out \"    throw new GraceExceptionPacket(ProgrammingErrorObject, \"",
    "            out \"        new GraceString(\\\"wrong number of type arguments for {textualSignature}\\\"));\"",
    "            out \"  \\}\"",
    "        }",
    "        o.typeParams.do { g ->",
    "            out(\"  {varf(g.value)} = arguments[curarg++];\")",
    "        }",
    "        out \"\\}\"",
    "        out \"// End type arguments\"",
    "    }",
    "    if (emitTypeChecks && o.needsArgChecks) then {",
    "        out \"// Start argument checking\"",
    "        out \"curarg = 1;\"",
    "        for (o.signature.indices) do { partnr ->",
    "            var part := o.signature.at(partnr)",
    "            var paramnr := 0",
    "            for (part.params) do { p ->",
    "                paramnr := paramnr + 1",
    "                if (emitTypeChecks && (p.dtype != false)) then {",
    "                    noteLineNumber(o.line)comment(\"argument check in compilemethod\")",
    "                    def dtype = compilenode(p.dtype)",
    "                    out(\"if (!Grace_isTrue(callmethod({dtype}, \\\"match\\\",\" ++",
    "                        \"  [1], arguments[curarg])))\")",
    "                    out \"    throw new GraceExceptionPacket(TypeErrorObject,\" ",
    "                    out \"        new GraceString(\\\"argument {paramnr} in {part.name} (arg list {partnr}), which corresponds to parameter {p.value}, does not have \\\" + \"",
    "                    out \"            callmethod({dtype}, \\\"asString\\\", [0])._value + \\\".\\\"));\"",
    "                }",
    "                out(\"curarg++;\")",
    "            }",
    "        }",
    "        out \"// End argument checking\"",
    "    }",
    "",
    "    // Setting the location is deliberately delayed to this point, so that",
    "    // argument checking errors are reported as errors at the request site",
    "    // --- which is where the error happens.",
    "    out(\"setModuleName(\\\"{modname}\\\");\")",
    "    if (isSimpleAccessor) then {",
    "        out \"// {textualSignature} is a simple accessor - elide try ... catch\"",
    "        def ret = compilenode(o.body.at(1))",
    "        out(\"return \" ++ ret ++ \";\")",
    "    } else {",
    "        if (debugMode) then {",
    "            out \"stackFrames.push(myframe);\"",
    "            out(\"try \\{\")",
    "            increaseindent",
    "        }",
    "        var ret := \"GraceDone\"",
    "        var lastLine := o.line",
    "        for (o.body) do { l ->",
    "            ret := compilenode(l)",
    "            lastLine := l.line",
    "        }",
    "        if (ret != \"undefined\") then {",
    "            if (emitTypeChecks && (o.dtype != false)) then {",
    "                def dtype = compilenode(o.dtype)",
    "                noteLineNumber (lastLine) comment \"return value\"",
    "                out \"if (!Grace_isTrue(callmethod({dtype}, \\\"match\\\", [1], {ret})))\"",
    "                out \"    throw new GraceExceptionPacket(TypeErrorObject,\" ",
    "                out \"        new GraceString(\\\"result of method {textualSignature} does not have \\\" + \"",
    "                out \"            callmethod({dtype}, \\\"asString\\\", [0])._value + \\\".\\\"));\"",
    "            }",
    "            out(\"return \" ++ ret ++ \";\")",
    "        }",
    "        if (debugMode) then {",
    "            decreaseindent",
    "            out \"\\} finally \\{\"",
    "            out \"    stackFrames.pop();\"",
    "            out \"\\}\"",
    "        }",
    "    }",
    "    decreaseindent",
    "    out \"\\};\"",
    "    usedvars := oldusedvars",
    "    declaredvars := olddeclaredvars",
    "    if (haveTypedParams) then {",
    "        compilemethodtypes(\"func{myc}\", o)",
    "    }",
    "    if (o.isConfidential) then {",
    "        out \"func{myc}.confidential = true;\"",
    "    }",
    "    out \"func{myc}.paramCounts = {paramCounts};\"",
    "    out(\"{selfobj}.methods[\\\"{name}\\\"] = func{myc};\")",
    "    out \"func{myc}.definitionLine = {o.line};\"",
    "    out \"func{myc}.definitionModule = \\\"{modname}\\\";\"",
    "    o.register := \"func{myc}\"",
    "    if (o.isFresh) then {",
    "        increaseindent",
    "        compilefreshmethod(o, selfobj)",
    "        decreaseindent",
    "    }",
    "}",
    "method compilefreshmethod(o, selfobj) {",
    "    def paramCounts =  [ ]",
    "    for (o.signature) do { part ->",
    "        paramCounts.push(part.params.size)",
    "    }",
    "    var textualSignature := \"\"",
    "    for (o.signature) do { part ->",
    "        def size = part.params.size",
    "        textualSignature := textualSignature ++ part.name",
    "        if (size > 0) then {",
    "            textualSignature := textualSignature ++ \"({size}     )\"",
    "        }",
    "    }",
    "    var myc := auto_count",
    "    auto_count := auto_count + 1",
    "    var name := escapestring(o.value.value)",
    "    var nm := name ++ myc",
    "    var haveTypedParams := false",
    "    for (o.signature) do { part ->",
    "        for (part.params) do {p->",
    "            if (p.dtype != false) then {",
    "                if ((p.dtype.value != \"Unknown\")",
    "                    && ((p.dtype.kind == \"identifier\")",
    "                        || (p.dtype.kind == \"typeliteral\"))) then {",
    "                    haveTypedParams := true",
    "                }",
    "            }",
    "        }",
    "    }",
    "    out \"var func{myc} = function(argcv) \\{    // method {textualSignature}()object\"",
    "    increaseindent",
    "    out(\"var curarg = 1;\")",
    "    for (o.signature.indices) do { partnr ->",
    "        var part := o.signature.at(partnr)",
    "        for (part.params) do { p ->",
    "            out(\"var {varf(p.value)} = arguments[curarg];\")",
    "            out(\"curarg++;\")",
    "        }",
    "    }",
    "    out \"var inheritingObject = arguments[curarg++];\"",
    "    if (o.typeParams != false) then {",
    "        def sz = o.signature.size + 1",
    "        out \"// Start type arguments\"",
    "        o.typeParams.do {g->",
    "            out \"var {varf(g.value)} = var_Unknown;\"",
    "        }",
    "        out \"if (argcv.length == {1 + sz}) \\{\"",
    "        if (emitArgChecks) then {",
    "            out \"  if (argcv[{sz}] !== {o.typeParams.size}) \\{\"",
    "            out \"    callmethod(ProgrammingErrorObject, \\\"raise\\\", [1], \"",
    "            out \"        new GraceString(\\\"wrong number of type arguments\\\"));\"",
    "            out \"  \\}\"",
    "        }",
    "        o.typeParams.do { g ->",
    "            out(\"  {varf(g.value)} = arguments[curarg++];\")",
    "        }",
    "        out \"\\}\"",
    "        out \"// End type arguments\"",
    "    }",
    "    out \"// Start argument processing\"",
    "    out \"curarg = 1;\"",
    "    for (o.signature.indices) do { partnr ->",
    "        var part := o.signature.at(partnr)",
    "        var paramnr := 0",
    "        for (part.params) do { p ->",
    "            paramnr := paramnr + 1",
    "            if (emitTypeChecks && (p.dtype != false)) then {",
    "                noteLineNumber(o.line)comment(\"argument check in compilefreshmethod\")",
    "                def dtype = compilenode(p.dtype)",
    "                out(\"if (!Grace_isTrue(callmethod({dtype}, \\\"match\\\",\" ++",
    "                    \"  [1], arguments[curarg])))\")",
    "                out \"    throw new GraceExceptionPacket(TypeErrorObject,\" ",
    "                out \"        new GraceString(\\\"argument {paramnr} in {part.name} (arg list {partnr}), which corresponds to parameter {p.value}, does not have \\\" + \"",
    "                out \"            callmethod({dtype}, \\\"asString\\\", [0])._value + \\\".\\\"));\"",
    "            }",
    "            out(\"curarg++;\")",
    "        }",
    "    }",
    "    out \"// End argument processing\"",
    "",
    "    // Setting the location is deliberately delayed to this point, so that",
    "    // argument checking errors are reported as errors at the request site",
    "    // --- which is where the error happens.",
    "    out(\"setModuleName(\\\"{modname}\\\");\")",
    "    if (debugMode) then {",
    "        out \"stackFrames.push(myframe);\"",
    "    }",
    "    out(\"var returnTarget = invocationCount;\")",
    "    out(\"invocationCount++;\")",
    "    if (debugMode) then {",
    "        out(\"try \\{\")",
    "        increaseindent",
    "    }",
    "    var tailObject := false",
    "    if ((o.body.size > 0) && {o.body.last.kind == \"object\"}) then {",
    "        tailObject := o.body.pop    // remove tail object",
    "        tailObject.name := o.nameString",
    "    }",
    "    var ret := \"GraceDone\"",
    "    for (o.body) do { l ->",
    "        ret := compilenode(l)",
    "    }",
    "    if (false != tailObject) then {",
    "        o.body.push(tailObject)     // put tail object back",
    "        compileobject(tailObject, \"this\", true)",
    "        ret := tailObject.register",
    "    }",
    "    out(\"return \" ++ ret ++ \";\")",
    "    if (debugMode) then {",
    "        decreaseindent",
    "        out \"\\} finally \\{\"",
    "        out \"    stackFrames.pop();\"",
    "        out \"\\}\"",
    "    }",
    "    out \"\\};\"",
    "    if (haveTypedParams) then {",
    "        compilemethodtypes(\"func{myc}\", o)",
    "    }",
    "    for (o.annotations) do {ann->",
    "        if ((ann.kind == \"identifier\") && ",
    "            {ann.value == \"confidential\"}) then {",
    "            out(\"func{myc}.confidential = true;\")",
    "        }",
    "    }",
    "    out(selfobj ++ \".methods[\\\"\" ++ name ++ \"()object\\\"] = func\" ++ myc ++ \";\")",
    "}",
    "method compilemethodtypes(func, o) {",
    "    out(\"{func}.paramTypes = [];\")",
    "    var pi := 0",
    "    for (o.signature) do { part ->",
    "        for (part.params) do {p->",
    "            // We store information for static top-level types only:",
    "            // absent information is treated as Unknown (and unchecked).",
    "            if (false != p.dtype) then {",
    "                if (((p.dtype.kind == \"identifier\") && {p.dtype.value != \"Unknown\"})",
    "                    || (p.dtype.kind == \"typeliteral\")) then {",
    "                    def typeid = escapeident(p.dtype.value)",
    "                    if (topLevelTypes.contains(typeid)) then {",
    "                        out(\"{func}.paramTypes.push([\"",
    "                            ++ \"type_{typeid}, \\\"{escapestring(p.value)}\\\"]);\")",
    "                    } else {",
    "                        out(\"{func}.paramTypes.push([]);\")",
    "                    }",
    "                } else {",
    "                    out(\"{func}.paramTypes.push([]);\")",
    "                }",
    "            } else {",
    "                out(\"{func}.paramTypes.push([]);\")",
    "            }",
    "            pi := pi + 1",
    "        }",
    "    }",
    "}",
    "method compileif(o) {",
    "    var myc := auto_count",
    "    auto_count := auto_count + 1",
    "    outUnnumbered \"var if{myc} = GraceDone;\"",
    "    out(\"if (Grace_isTrue(\" ++ compilenode(o.value) ++ \")) \\{\")",
    "    var tret := \"undefined\"",
    "    var fret := \"undefined\"",
    "    increaseindent",
    "    def thenList = o.thenblock.body",
    "    for (thenList) do { l->",
    "        tret := compilenode(l)",
    "    }",
    "    if (tret != \"undefined\") then {",
    "        out(\"if\" ++ myc ++ \" = \" ++ tret ++ \";\")",
    "    }",
    "    decreaseindent",
    "    def elseList = o.elseblock.body",
    "    if (elseList.size > 0) then {",
    "        out(\"\\} else \\{\")",
    "        increaseindent",
    "        for (elseList) do { l->",
    "            fret := compilenode(l)",
    "        }",
    "        if (fret != \"undefined\") then {",
    "            out(\"if\" ++ myc ++ \" = \" ++ fret ++ \";\")",
    "        }",
    "        decreaseindent",
    "    }",
    "    out(\"\\}\")",
    "    o.register := \"if\" ++ myc",
    "}",
    "method compileidentifier(o) {",
    "    var name := o.value",
    "    if (name == \"super\") then {",
    "        def sugg = errormessages.suggestion.new",
    "        sugg.replaceRange(o.linePos, o.linePos + 4)with \"self\" onLine(o.line)",
    "        errormessages.syntaxError(\"'super' can be used only to the \"",
    "                ++ \"left of the . in a method request.\")",
    "            atRange(",
    "                o.line, o.linePos, o.linePos + 4)withSuggestion(sugg)",
    "    }",
    "    if (name == \"self\") then {",
    "        o.register := \"this\"",
    "    } elseif { name == \"...\" } then {",
    "        o.register := \"ellipsis\"",
    "    } elseif { name == \"true\" } then {",
    "        o.register := \"GraceTrue\"",
    "    } elseif { name == \"false\" } then {",
    "        o.register := \"GraceFalse\"",
    "    } else {",
    "        usedvars.push(name)",
    "        o.register := varf(name)",
    "    }",
    "}",
    "method compilebind(o) {",
    "    def lhs = o.dest",
    "    if (lhs.isIdentifier) then {",
    "        def val = compilenode(o.value)",
    "        def nm = lhs.value",
    "        usedvars.push(nm)",
    "        out \"{varf(nm)} = {val};\"",
    "        o.register := \"GraceDone\"",
    "    } else {",
    "        ProgrammingError.raise \"bindNode {o} does not bind an indentifer\"",
    "    }",
    "}",
    "method compiledefdec(o) {",
    "    var nm",
    "    var snm",
    "    def currentScope = o.scope",
    "    if (o.name.kind == \"generic\") then {",
    "        snm := o.name.value.value",
    "    } else {",
    "        snm := o.name.value",
    "    }",
    "    nm := snm",
    "    if (debugMode) then {",
    "        out \"myframe.addVar(\\\"{escapestring(nm)}\\\", function() \\{return {varf(nm)}});\"",
    "    }",
    "    declaredvars.push(nm)",
    "    var val := compilenode(o.value)",
    "    out(\"var \" ++ varf(nm) ++ \" = \" ++ val ++ \";\")",
    "    if (compilationDepth == 1) then {",
    "        compilenode(ast.methodNode.new(o.name, [ast.signaturePart.partName(o.name.value) scope(currentScope)],",
    "            [o.name], false) scope(currentScope))",
    "        if (ast.findAnnotation(o, \"parent\")) then {",
    "            out(\"this.superobj = {val};\")",
    "        }",
    "        out(\"this.methods[\\\"{nm}\\\"].debug = \\\"def\\\";\")",
    "    }",
    "    if (emitTypeChecks) then {",
    "        if (o.dtype != false) then {",
    "            if (o.dtype.value != \"Unknown\") then {",
    "                noteLineNumber(o.line)comment(\"compiledefdec\")",
    "                out \"if (!Grace_isTrue(callmethod({compilenode(o.dtype)}, \\\"match\\\", [1], {varf(nm)})))\"",
    "                out \"  throw new GraceExceptionPacket(TypeErrorObject,\"",
    "                out \"      new GraceString(\\\"value of def '{snm}' is not of type {o.dtype.toGrace(0)}\\\"));\"",
    "            }",
    "        }",
    "    }",
    "    o.register := \"GraceDone\"",
    "}",
    "method compilevardec(o) {",
    "    var nm := o.name.value",
    "    def currentScope = o.scope",
    "    declaredvars.push(nm)",
    "    var val := o.value",
    "    if (false != val) then {",
    "        val := compilenode(val)",
    "        out(\"var \" ++ varf(nm) ++ \" = \" ++ val ++ \";\")",
    "    } else {",
    "        out(\"var \" ++ varf(nm) ++ \";\")",
    "        val := \"false\"",
    "    }",
    "    if (debugMode) then {",
    "        out \"myframe.addVar(\\\"{escapestring(nm)}\\\", function() \\{return {varf(nm)}});\"",
    "    }",
    "    if (compilationDepth == 1) then {",
    "        compilenode(ast.methodNode.new(o.name, [ast.signaturePart.partName(o.name.value) scope(currentScope)],",
    "            [o.name], false) scope(currentScope))",
    "        def assignID = ast.identifierNode.new(o.name.value ++ \":=\", false) scope(currentScope)",
    "        def tmpID = ast.identifierNode.new(\"_var_assign_tmp\", false)",
    "        compilenode(ast.methodNode.new(assignID,",
    "            [ast.signaturePart.partName(assignID.value) params( [tmpID] ) scope(currentScope)],",
    "            [ast.bindNode.new(o.name, tmpID)], false)  scope(currentScope))",
    "        out(\"this.methods[\\\"{nm}\\\"].debug = \\\"var\\\";\")",
    "    }",
    "    if (emitTypeChecks) then {",
    "        if (o.dtype != false) then {",
    "            if (o.dtype.value != \"Unknown\") then {",
    "                if (val != \"false\") then {",
    "                    noteLineNumber(o.line)comment(\"compilevardec\")",
    "                    out \"if (!Grace_isTrue(callmethod({compilenode(o.dtype)}, \\\"match\\\", [1], {varf(nm)})))\"",
    "                    out \"  throw new GraceExceptionPacket(TypeErrorObject,\"",
    "                    out \"      new GraceString(\\\"initial value of var '{o.name.value}' is not of type {o.dtype.toGrace(0)}\\\"));\"",
    "                }",
    "            }",
    "        }",
    "    }",
    "    o.register := \"GraceDone\"",
    "}",
    "method compiletrycatch(o) {",
    "    def myc = auto_count",
    "    auto_count := auto_count + 1",
    "    def cases = o.cases",
    "    def mainblock = compilenode(o.value)",
    "    out(\"var cases{myc} = [];\")",
    "    for (cases) do {c->",
    "        def e = compilenode(c)",
    "        out(\"cases{myc}.push({e});\")",
    "    }",
    "    var finally := \"false\"",
    "    if (false != o.finally) then {",
    "        finally := compilenode(o.finally)",
    "    }",
    "    noteLineNumber(o.line)comment(\"compiletrycatch\")",
    "    out(\"var catchres{myc} = tryCatch({mainblock},cases{myc},{finally});\")",
    "    out(\"setModuleName(\\\"{modname}\\\");\")",
    "    o.register := \"catchres\" ++ myc",
    "}",
    "method compilematchcase(o) {",
    "    def myc = auto_count",
    "    auto_count := auto_count + 1",
    "    def cases = o.cases",
    "    def matchee = compilenode(o.value)",
    "    out(\"var cases{myc} = [];\")",
    "    for (cases) do {c->",
    "        def e = compilenode(c)",
    "        out(\"cases{myc}.push({e});\")",
    "    }",
    "    var elsecase := \"false\"",
    "    if (false != o.elsecase) then {",
    "        elsecase := compilenode(o.elsecase)",
    "    }",
    "    noteLineNumber(o.line)comment(\"compilematchcase\")",
    "    out(\"var matchres{myc} = matchCase({matchee},cases{myc},{elsecase});\")",
    "    out(\"setModuleName(\\\"{modname}\\\");\")",
    "    o.register := \"matchres\" ++ myc",
    "}",
    "method compileop(o) {",
    "    var right := compilenode(o.right)",
    "    auto_count := auto_count + 1",
    "    var rnm := \"opresult\"",
    "    if (o.value == \"*\") then {",
    "        rnm := \"prod\"",
    "    }",
    "    if (o.value == \"/\") then {",
    "        rnm := \"quotient\"",
    "    }",
    "    if (o.value == \"-\") then {",
    "        rnm := \"diff\"",
    "    }",
    "    if (o.value == \"%\") then {",
    "        rnm := \"modulus\"",
    "    }",
    "    if ((o.left.kind == \"identifier\") && (o.left.value == \"super\")) then {",
    "        out(\"var \" ++ rnm ++ auto_count ++ \" = callmethodsuper(this\"",
    "            ++ \", \\\"\" ++ escapestring(o.value) ++ \"\\\", [1], \" ++ right ++ \");\")",
    "    } else {",
    "        var left := compilenode(o.left)",
    "        auto_count := auto_count + 1",
    "        if (emitArgChecks) then {",
    "            out(\"var \" ++ rnm ++ auto_count ++ \" = callmethodChecked(\" ++ left",
    "                ++ \", \\\"\" ++ escapestring(o.value) ++ \"\\\", [1], \" ++ right ++ \");\")",
    "        } else {",
    "            out(\"var \" ++ rnm ++ auto_count ++ \" = callmethod(\" ++ left",
    "                ++ \", \\\"\" ++ escapestring(o.value) ++ \"\\\", [1], \" ++ right ++ \");\")",
    "        }",
    "    }",
    "    o.register := rnm ++ auto_count",
    "    auto_count := auto_count + 1",
    "}",
    "method compilecall(o) {",
    "    noteLineNumber (o.line) comment \"compilenode {o.kind}\"",
    "    var args := []",
    "    var obj := \"\"",
    "    var len := 0",
    "    var con := \"\"",
    "    for (o.with) do { part ->",
    "        for (part.args) do { p ->",
    "            var r := compilenode(p)",
    "            args.push(r)",
    "        }",
    "    }",
    "    if (false != o.generics) then {",
    "        o.generics.do {g->",
    "            args.push(compilenode(g))",
    "        }",
    "    }",
    "    var partl := \"\"",
    "    for (o.with.indices) do { partnr ->",
    "        partl := partl ++ o.with.at(partnr).args.size",
    "        if (partnr < o.with.size) then {",
    "            partl := partl ++ \", \"",
    "        }",
    "    }",
    "    if (false != o.generics) then {",
    "        partl := partl ++ \", {o.generics.size}\"",
    "    }",
    "    def request = if (emitArgChecks) then {",
    "        \"callmethodChecked\"",
    "    } else { ",
    "        \"callmethod\"",
    "    }",
    "    if ((o.value.kind == \"member\") && {(o.value.in.kind == \"identifier\")",
    "        && (o.value.in.value == \"super\")}) then {",
    "        var call := \"var call\" ++ auto_count ++ \" = callmethodsuper(this\"",
    "            ++ \", \\\"\" ++ escapestring(o.value.value) ++ \"\\\", [\"",
    "        call := call ++ partl ++ \"]\"",
    "        for (args) do { arg ->",
    "            call := call ++ \", \" ++ arg",
    "        }",
    "        call := call ++ \");\"",
    "        out(call)",
    "    } elseif { (o.value.kind == \"member\") && {",
    "        o.value.in.kind == \"member\"} && {",
    "            o.value.in.value == \"outer\"} } then {",
    "        def ot = compilenode(o.value.in)",
    "        var call := \"var call\" ++ auto_count ++ \" = \" ++ requestCall ++ \"({ot}\"",
    "            ++ \", \\\"\" ++ escapestring(o.value.value) ++ \"\\\", [\"",
    "        call := call ++ partl ++ \"]\"",
    "        for (args) do { arg ->",
    "            call := call ++ \", \" ++ arg",
    "        }",
    "        call := call ++ \");\"",
    "        out(\"onOuter = true;\");",
    "        out(\"onSelf = true;\");",
    "        out(call)",
    "    } elseif { (o.value.kind == \"member\") && {(o.value.in.kind == \"identifier\")",
    "            && (o.value.in.value == \"self\") && (o.value.value == \"outer\")}",
    "        } then {",
    "        out(\"var call{auto_count} = \" ++ requestCall ++ \"(superDepth, \"",
    "            ++ \"\\\"outer\\\", [0]);\")",
    "    } elseif { (o.value.kind == \"member\") && {(o.value.in.kind == \"identifier\")",
    "            && (o.value.in.value == \"self\")} } then {",
    "        var call := \"var call\" ++ auto_count ++ \" = \" ++ requestCall ++ \"(this\"",
    "            ++ \", \\\"\" ++ escapestring(o.value.value) ++ \"\\\", [\"",
    "        call := call ++ partl ++ \"]\"",
    "        for (args) do { arg ->",
    "            call := call ++ \", \" ++ arg",
    "        }",
    "        call := call ++ \");\"",
    "        out(\"onSelf = true;\");",
    "        out(call)",
    "    } elseif { (o.value.kind == \"member\") && {(o.value.in.kind == \"identifier\")",
    "            && (o.value.in.value == \"prelude\")} } then {",
    "        var call := \"var call\" ++ auto_count ++ \" = \" ++ requestCall ++ \"(var_prelude, \\\"\"",
    "            ++ escapestring(o.value.value) ++ \"\\\", [\"",
    "        call := call ++ partl ++ \"]\"",
    "        for (args) do { arg ->",
    "            call := call ++ \", \" ++ arg",
    "        }",
    "        call := call ++ \");\"",
    "        out(call)",
    "    } elseif { o.value.kind == \"member\" } then {",
    "        obj := compilenode(o.value.in)",
    "        var call := \"var call\" ++ auto_count ++ \" = \" ++ requestCall ++ \"(\" ++ obj",
    "            ++ \", \\\"\" ++ escapestring(o.value.value) ++ \"\\\", [\"",
    "        call := call ++ partl ++ \"]\"",
    "        for (args) do { arg ->",
    "            call := call ++ \", \" ++ arg",
    "        }",
    "        call := call ++ \");\"",
    "        out(call)",
    "    } else {",
    "        obj := \"this\"",
    "        var call := \"var call\" ++ auto_count ++ \" = \" ++ requestCall ++ \"(this,\"",
    "            ++ \"\\\"\" ++ escapestring(o.value.value) ++ \"\\\", [\"",
    "        call := call ++ partl ++ \"]\"",
    "        for (args) do { arg ->",
    "            call := call ++ \", \" ++ arg",
    "        }",
    "        call := call ++ \");\"",
    "        out(call)",
    "    }",
    "    o.register := \"call\" ++ auto_count",
    "    auto_count := auto_count + 1",
    "}",
    "",
    "method compiledialect(o) {",
    "    out(\"// Dialect import of {o.value}\")",
    "    var fn := escapestring(o.value)",
    "    out \"var_prelude = do_import(\\\"{fn}\\\", {formatModname(o.value)});\"",
    "    out \"this.outer = var_prelude;\"",
    "    if (xmodule.currentDialect.hasAtStart) then {",
    "        out \"callmethod(var_prelude, \\\"atModuleStart\\\", [1], \"",
    "        out \"  new GraceString(\\\"{escapestring(modname)}\\\"));\"",
    "    }",
    "    o.register := \"undefined\"",
    "}",
    "method compileimport(o) {",
    "    out(\"// Import of {o.path} as {o.nameString}\")",
    "    def currentScope = o.scope",
    "    var nm := escapeident(o.nameString)",
    "    var fn := escapestring(o.path)",
    "    out(\"if (typeof {formatModname(o.path)} == 'undefined')\")",
    "    out \"  throw new GraceExceptionPacket(EnvironmentExceptionObject, \"",
    "    out \"    new GraceString('could not find module {o.path}'));\"",
    "    out(\"var \" ++ varf(nm) ++ \" = do_import(\\\"{fn}\\\", {formatModname(o.path)});\")",
    "    def methodIdent = o.value",
    "    def accessor = (ast.methodNode.new(methodIdent, [ast.signaturePart.partName(o.nameString) scope(currentScope)],",
    "        [methodIdent], o.dtype) scope(currentScope))",
    "    accessor.line := o.line",
    "    accessor.linePos := o.linePos",
    "    accessor.annotations.addAll(o.annotations)",
    "    compilenode(accessor)",
    "    out(\"{accessor.register}.debug = \\\"import\\\";\")",
    "    if (o.isReadable.not) then {",
    "        out \"{accessor.register}.confidential = true;\"",
    "    }",
    "    if (emitTypeChecks) then {",
    "        if (o.dtype != false) then {",
    "            if (o.dtype.value != \"Unknown\") then {",
    "                out \"if (!Grace_isTrue(callmethod({compilenode(o.dtype)}, \\\"match\\\",\"",
    "                out \"  [1], {varf(nm)})))\"",
    "                out \"    throw new GraceExceptionPacket(TypeErrorObject,\"",
    "                out \"          new GraceString(\\\"module {o.nameString} is not of type {o.dtype.toGrace(0)}\\\"))\";",
    "            }",
    "        }",
    "    }",
    "    out \"setModuleName(\\\"{modname}\\\");\"",
    "    o.register := \"undefined\"",
    "}",
    "method compilereturn(o) {",
    "    var reg := compilenode(o.value)",
    "    if (inBlock) then {",
    "        out(\"throw new ReturnException(\" ++ reg ++ \", returnTarget);\")",
    "    } else {",
    "        out(\"return \" ++ reg ++ \";\")",
    "    }",
    "    o.register := \"undefined\"",
    "}",
    "method compilePrint(o) {",
    "    var args := []",
    "    for (o.with) do { part ->",
    "        for (part.args) do { prm ->",
    "            var r := compilenode(prm)",
    "            args.push(r)",
    "        }",
    "    }",
    "    if (args.size != 1) then {",
    "        errormessages.syntaxError \"method print takes a single argument\"",
    "            atRange(o.line, o.linePos, o.linePos + 4)",
    "    } else {",
    "        out(\"var call\" ++ auto_count ++ \" = Grace_print(\" ++ args.first ++ \");\")",
    "    }",
    "    o.register := \"call\" ++ auto_count",
    "    auto_count := auto_count + 1",
    "}",
    "method compileNativeCode(o) {",
    "    if(o.with.size != 2) then {",
    "        errormessages.syntaxError \"method native()code takes two arguments\"",
    "            atRange(o.line, o.linePos, o.linePos + 5)",
    "    }",
    "    def param1 = o.with.first.args.first",
    "    if (param1.kind != \"string\") then {",
    "        errormessages.syntaxError \"the first argument to native()code must be a string literal\"",
    "            atRange(param1.line, param1.linePos, param1.linePos)",
    "    }",
    "    if (param1.value != \"js\") then { ",
    "        o.register := \"GraceDone\"",
    "        return",
    "    }",
    "    def param2 = o.with.second.args.first",
    "    if (param2.kind != \"string\") then {",
    "        errormessages.syntaxError \"the second argument to native()code must be a string literal\"",
    "            atLine(param2.line)",
    "    }",
    "    def codeString = param2.value",
    "    out \"   // start native code from line {o.line}\"",
    "    out \"var result = GraceDone;\"",
    "    out(codeString)",
    "    def reg = \"nat\" ++ auto_count",
    "    auto_count := auto_count + 1",
    "    out \"var {reg} = result;\"",
    "    o.register := reg",
    "    out \"   // end native code insertion\"",
    "}",
    "",
    "method compilenode(o) {",
    "    compilationDepth := compilationDepth + 1",
    "    noteLineNumber(o.line)comment \"compilenode {o.kind}\"",
    "    def oKind = o.kind",
    "    if (oKind == \"num\") then {",
    "        o.register := \"new GraceNum(\" ++ o.value ++ \")\"",
    "    }",
    "    if (oKind == \"string\") then {",
    "        // Escape characters that may not be legal in string literals",
    "        def os = escapestring(o.value)",
    "        out(\"var string\" ++ auto_count ++ \" = new GraceString(\\\"\"",
    "            ++ os ++ \"\\\");\")",
    "        o.register := \"string\" ++ auto_count",
    "        auto_count := auto_count + 1",
    "    } elseif { oKind == \"dialect\" } then {",
    "        compiledialect(o)",
    "    } elseif { oKind == \"import\" } then {",
    "        compileimport(o)",
    "    } elseif { oKind == \"return\" } then {",
    "        compilereturn(o)",
    "    } elseif { oKind == \"generic\" } then {",
    "        o.register := compilenode(o.value)",
    "    } elseif { oKind == \"identifier\" } then {",
    "        compileidentifier(o)",
    "    } elseif { oKind == \"defdec\" } then {",
    "        compiledefdec(o)",
    "    } elseif { oKind == \"vardec\" } then {",
    "        compilevardec(o)",
    "    } elseif { oKind == \"block\" } then {",
    "        compileblock(o)",
    "    } elseif { oKind == \"method\" } then {",
    "        compilemethod(o, \"this\")",
    "    } elseif { oKind == \"array\" } then {",
    "        compilearray(o)",
    "    } elseif { oKind == \"bind\" } then {",
    "        compilebind(o)",
    "    } elseif { oKind == \"if\" } then {",
    "        compileif(o)",
    "    } elseif { oKind == \"trycatch\" } then {",
    "        compiletrycatch(o)",
    "    } elseif { oKind == \"matchcase\" } then {",
    "        compilematchcase(o)",
    "    } elseif { oKind == \"object\" } then {",
    "        compileobject(o, \"this\", false)",
    "    } elseif { oKind == \"typedec\" } then {",
    "        compiletypedec(o)",
    "    } elseif { o.kind == \"typeliteral\" } then {",
    "        compiletypeliteral(o)",
    "    } elseif { oKind == \"member\" } then {",
    "        compilemember(o)",
    "    } elseif { oKind == \"call\" } then {",
    "        if (o.value.isMember && {o.value.in.value == \"prelude\"}) then {",
    "            if (o.nameString == \"print\") then {",
    "                compilePrint(o)",
    "            } elseif {o.nameString == \"native()code\"} then {",
    "                compileNativeCode(o)",
    "            } else {",
    "                compilecall(o)",
    "            }",
    "        } else {",
    "            compilecall(o)",
    "        }",
    "    } elseif { oKind == \"op\" } then {",
    "        compileop(o)",
    "    }",
    "    compilationDepth := compilationDepth - 1",
    "    o.register",
    "}",
    "",
    "method compile(moduleObject, of, rm, bt, glPath) {",
    "    var argv := sys.argv",
    "    def isPrelude = util.extensions.contains(\"NativePrelude\")",
    "    if (util.extensions.contains \"ExtendedLineups\") then {",
    "        bracketConstructor := \"PrimitiveGraceList\"",
    "    }",
    "    if (util.extensions.contains \"noChecks\") then {",
    "        emitTypeChecks := false",
    "        emitUndefinedChecks := false",
    "        emitArgChecks := false",
    "        emitPositions := false",
    "        requestCall := \"callmethod\"",
    "    }",
    "    if (util.extensions.contains \"noTypeChecks\") then {",
    "        emitTypeChecks := false",
    "    }",
    "    if (util.extensions.contains \"noArgChecks\") then {",
    "        emitArgChecks := false",
    "    }",
    "    if (util.extensions.contains \"noUndefChecks\") then {",
    "        emitUndefinedChecks := false",
    "    }",
    "    if (util.extensions.contains \"noLineNumbers\") then {",
    "        emitPositions := false",
    "        requestCall := \"callmethod\"",
    "    }",
    "    values := moduleObject.value",
    "    outfile := of",
    "    modname := moduleObject.name",
    "    runmode := rm",
    "    buildtype := bt",
    "    if (util.extensions.contains(\"Debug\")) then {",
    "        debugMode := true",
    "    }",
    "    util.log_verbose(\"generating ECMAScript code.\")",
    "    topLevelTypes.add \"String\"",
    "    topLevelTypes.add \"Number\"",
    "    topLevelTypes.add \"Boolean\"",
    "    topLevelTypes.add \"Block\"",
    "    topLevelTypes.add \"Done\"",
    "    topLevelTypes.add \"Type\"",
    "    topLevelTypes.add \"Unknown\"",
    "    topLevelTypes.add \"Object\"",
    "    if (! util.extensions.contains \"noStrict\") then {",
    "        out \"\\\"use strict\\\";\"",
    "    }",
    "    if (isPrelude.not) then {",
    "        out \"var___95__prelude = do_import(\\\"StandardPrelude\\\", gracecode_StandardPrelude);\"",
    "    }",
    "    util.setline(1)",
    "    out(\"function {formatModname(modname)}() \\{\")",
    "    increaseindent",
    "    out(\"setModuleName(\\\"{modname}\\\");\")",
    "    out \"this.definitionModule = \\\"{modname}\\\";\"",
    "    out \"this.definitionLine = 0;\"",
    "    out \"var var_prelude = var___95__prelude;\"",
    "        // var_prelude must be local to this function, because its value",
    "        // varies from module to modules.",
    "",
    "    if (debugMode) then {",
    "        out \"var myframe = new StackFrame(\\\"{modname} module\\\");\"",
    "        out \"stackFrames.push(myframe);\"",
    "    }",
    "    compileobjouter(\"this\", \"var_prelude\")",
    "    def imported = []",
    "    if (isPrelude) then {  // compile components in non-standard order",
    "        moduleObject.value.do { o ->",
    "            if (o.isMethod) then {",
    "                compilenode(o)",
    "            }",
    "            if (o.isExternal) then {",
    "                imported.push(o.path)",
    "            }",
    "        }",
    "        moduleObject.value.do { o ->",
    "            if (o.isMethod.not) then {",
    "                compilenode(o)",
    "            }",
    "        }",
    "    } else {",
    "        moduleObject.externalsDo { o ->",
    "            compilenode(o)",
    "            imported.push(o.path)",
    "        }",
    "        if (false != moduleObject.superclass) then {",
    "            compileInherits(moduleObject.superclass) in (moduleObject, \"this\")",
    "        }",
    "        moduleObject.usedTraits.do { t -> ",
    "            compileInherits(t) in (moduleObject, \"this\")",
    "        }",
    "        moduleObject.methodsDo { o ->",
    "            compilenode(o)",
    "        }",
    "    }",
    "    moduleObject.executableComponentsDo { o ->",
    "        compilenode(o)",
    "    }",
    "    if (xmodule.currentDialect.hasAtEnd) then {",
    "        out(\"callmethod(var_prelude, \\\"atModuleEnd\\\", [1], this);\")",
    "    }",
    "    if (debugMode) then {",
    "        out \"stackFrames.pop();\"",
    "    }",
    "    out(\"return this;\")",
    "    decreaseindent",
    "    out(\"\\}\")",
    "    ",
    "    def generatedModuleName = formatModname(modname)",
    "    def importList = imported.map{ each -> \"'{each}'\" }.asList.sort",
    "    out \"{generatedModuleName}.imports = {importList};\"",
    "    ",
    "    moduleObject.imports := imports.other",
    "    xmodule.writeGctForModule(moduleObject)",
    "",
    "    def gct = xmodule.parseGCT(modname)",
    "    def gctText = xmodule.gctAsString(gct)",
    "    out \"if (typeof gctCache !== \\\"undefined\\\")\"",
    "    out \"  gctCache['{escapestring(basename(modname))}'] = \\\"{escapestring(gctText)}\\\";\"",
    "    out \"if (typeof originalSourceLines !== \\\"undefined\\\") \\{\"",
    "    out \"  originalSourceLines[\\\"{modname}\\\"] = [\"",
    "    def sourceLines = util.cLines",
    "    def numberOfLines = util.cLines.size",
    "    var ln := 1",
    "    while {ln < numberOfLines} do {",
    "        out \"    \\\"{sourceLines.at(ln)}\\\",\"",
    "        ln := ln + 1",
    "    }",
    "    if (numberOfLines <= 0) then {",
    "        out \" ];\"",
    "    } else {",
    "        out \"    \\\"{sourceLines.at(numberOfLines)}\\\" ];\"",
    "    }",
    "    out \"\\}\"",
    "    out \"if (typeof global !== \\\"undefined\\\")\"",
    "    out \"  global.{generatedModuleName} = {generatedModuleName};\"",
    "    out \"if (typeof window !== \\\"undefined\\\")\"",
    "    out \"  window.{generatedModuleName} = {generatedModuleName};\"",
    "",
    "    for (output) do { o ->",
    "        util.outprint(o)",
    "    }",
    "    outfile.close",
    "    util.log_verbose \"done.\"",
    "    if (buildtype == \"run\") then { runJsCode(of, glPath) }",
    "}",
    "",
    "method compileInherits(o) in (objNode, selfr) {",
    "    // o is an inherits node: compile it.  ",
    "    // selfr is the name of enclosing object; objNode is the enclosing AST node",
    "    if (o.isUse) then { ",
    "        compileTrait(o) in (objNode, selfr)",
    "    } else {",
    "        compileSuper(o, selfr)",
    "    }",
    "}",
    "",
    "method compileSuper(o, selfr) {",
    "    def sup = compilenode(o.value)",
    "    out \"{selfr}.superobj = {sup};\"",
    "    out \"if ({sup}.data) {selfr}.data = {sup}.data;\"",
    "    // out \"delete {sup}.data;\"    // to avoid a redundant reference",
    "    out \"if ({sup}.hasOwnProperty('_value'))\"",
    "    out \"    {selfr}._value = {sup}._value;\"",
    "    // out \"delete {sup}._value;\"  // to avoid an inconsistent copy of built-in values",
    "    // this breaks inheritance from booleans",
    "    o.aliases.do { each ->",
    "        out \"{selfr}.methods['{each.newName.nameString}'] = findMethod({sup}, '{each.oldName.nameString}');\"",
    "    }",
    "    o.exclusions.do { each ->",
    "        out \"delete {sup}.methods['{each.nameString}'];\"",
    "    }",
    "}",
    "",
    "method compileTrait(o) in (objNode, selfr) {",
    "    def tObj = compilenode(o.value)",
    "    def tMethNames = o.providedNames -- objNode.localNames",
    "//    util.log 70 verbose \"tMethNames = {tMethNames.asList.sort}\"",
    "    o.aliases.do { each ->",
    "        def nn = each.newName.nameString",
    "        out(\"{selfr}.methods['{nn}'] = \" ++",
    "            \"{tObj}.methods['{each.oldName.nameString}'];  // alias\")",
    "        tMethNames.remove(nn)",
    "    }",
    "    tMethNames.do { methName ->",
    "        out \"{selfr}.methods['{methName}'] = {tObj}.methods['{methName}'];\"",
    "    }",
    "}",
    "",
    "method runJsCode(of, glPath) {",
    "    def gmp = sys.environ.at \"GRACE_MODULE_PATH\"",
    "    def pathList = unixFilePath.split(gmp)",
    "    def libPath = if (glPath.at(glPath.size) == \"/\") then { glPath }",
    "                        else { glPath ++ \"/\" }",
    "    if (io.exists(libPath ++ \"gracelib.js\")) then {",
    "        if (pathList.contains(libPath).not) then {",
    "            sys.environ.at \"GRACE_MODULE_PATH\" put \"{libPath}:{gmp}\"",
    "        }",
    "    }",
    "    def runExitCode = io.spawn(\"grace\", [of.pathname]).wait",
    "    if (runExitCode < 0) then {",
    "        io.error.write \"minigrace: program {modname} exited with error {-runExitCode}.\\n\"",
    "        sys.exit(4)",
    "    }",
    "}" ];
}
if (typeof global !== "undefined")
  global.gracecode_genjs = gracecode_genjs;
if (typeof window !== "undefined")
  window.gracecode_genjs = gracecode_genjs;
