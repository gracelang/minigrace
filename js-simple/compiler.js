"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_compiler() {
  setModuleName("compiler");
  this.definitionModule = "compiler";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_compiler_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_compiler_outer0;
  setLineNumber(1);    // compilenode import
  // Import of ast as ast
  if (typeof gracecode_ast == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module ast'));
  var var_ast = do_import("ast", gracecode_ast);
  var func1 = function(argcv) {    // method ast
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ast"));
    setModuleName("compiler");
    // ast is a simple accessor - elide try ... catch
    return var_ast;
  };
  func1.paramCounts = [0];
  this.methods["ast"] = func1;
  func1.definitionLine = 1;
  func1.definitionModule = "compiler";
  func1.debug = "import";
  func1.confidential = true;
  setModuleName("compiler");
  setLineNumber(2);    // compilenode import
  // Import of buildinfo as buildinfo
  if (typeof gracecode_buildinfo == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module buildinfo'));
  var var_buildinfo = do_import("buildinfo", gracecode_buildinfo);
  var func2 = function(argcv) {    // method buildinfo
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for buildinfo"));
    setModuleName("compiler");
    // buildinfo is a simple accessor - elide try ... catch
    return var_buildinfo;
  };
  func2.paramCounts = [0];
  this.methods["buildinfo"] = func2;
  func2.definitionLine = 2;
  func2.definitionModule = "compiler";
  func2.debug = "import";
  func2.confidential = true;
  setModuleName("compiler");
  setLineNumber(3);    // compilenode import
  // Import of genc as genc
  if (typeof gracecode_genc == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module genc'));
  var var_genc = do_import("genc", gracecode_genc);
  var func3 = function(argcv) {    // method genc
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for genc"));
    setModuleName("compiler");
    // genc is a simple accessor - elide try ... catch
    return var_genc;
  };
  func3.paramCounts = [0];
  this.methods["genc"] = func3;
  func3.definitionLine = 3;
  func3.definitionModule = "compiler";
  func3.debug = "import";
  func3.confidential = true;
  setModuleName("compiler");
  setLineNumber(4);    // compilenode import
  // Import of genjs as genjs
  if (typeof gracecode_genjs == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module genjs'));
  var var_genjs = do_import("genjs", gracecode_genjs);
  var func4 = function(argcv) {    // method genjs
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for genjs"));
    setModuleName("compiler");
    // genjs is a simple accessor - elide try ... catch
    return var_genjs;
  };
  func4.paramCounts = [0];
  this.methods["genjs"] = func4;
  func4.definitionLine = 4;
  func4.definitionModule = "compiler";
  func4.debug = "import";
  func4.confidential = true;
  setModuleName("compiler");
  setLineNumber(5);    // compilenode import
  // Import of identifierresolution as identifierresolution
  if (typeof gracecode_identifierresolution == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module identifierresolution'));
  var var_identifierresolution = do_import("identifierresolution", gracecode_identifierresolution);
  var func5 = function(argcv) {    // method identifierresolution
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for identifierresolution"));
    setModuleName("compiler");
    // identifierresolution is a simple accessor - elide try ... catch
    return var_identifierresolution;
  };
  func5.paramCounts = [0];
  this.methods["identifierresolution"] = func5;
  func5.definitionLine = 5;
  func5.definitionModule = "compiler";
  func5.debug = "import";
  func5.confidential = true;
  setModuleName("compiler");
  setLineNumber(6);    // compilenode import
  // Import of io as io
  if (typeof gracecode_io == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module io'));
  var var_io = do_import("io", gracecode_io);
  var func6 = function(argcv) {    // method io
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for io"));
    setModuleName("compiler");
    // io is a simple accessor - elide try ... catch
    return var_io;
  };
  func6.paramCounts = [0];
  this.methods["io"] = func6;
  func6.definitionLine = 6;
  func6.definitionModule = "compiler";
  func6.debug = "import";
  func6.confidential = true;
  setModuleName("compiler");
  setLineNumber(7);    // compilenode import
  // Import of lexer as lexer
  if (typeof gracecode_lexer == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module lexer'));
  var var_lexer = do_import("lexer", gracecode_lexer);
  var func7 = function(argcv) {    // method lexer
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for lexer"));
    setModuleName("compiler");
    // lexer is a simple accessor - elide try ... catch
    return var_lexer;
  };
  func7.paramCounts = [0];
  this.methods["lexer"] = func7;
  func7.definitionLine = 7;
  func7.definitionModule = "compiler";
  func7.debug = "import";
  func7.confidential = true;
  setModuleName("compiler");
  setLineNumber(8);    // compilenode import
  // Import of mirrors as mirrors
  if (typeof gracecode_mirrors == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module mirrors'));
  var var_mirrors = do_import("mirrors", gracecode_mirrors);
  var func8 = function(argcv) {    // method mirrors
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for mirrors"));
    setModuleName("compiler");
    // mirrors is a simple accessor - elide try ... catch
    return var_mirrors;
  };
  func8.paramCounts = [0];
  this.methods["mirrors"] = func8;
  func8.definitionLine = 8;
  func8.definitionModule = "compiler";
  func8.debug = "import";
  func8.confidential = true;
  setModuleName("compiler");
  setLineNumber(9);    // compilenode import
  // Import of parser as parser
  if (typeof gracecode_parser == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module parser'));
  var var_parser = do_import("parser", gracecode_parser);
  var func9 = function(argcv) {    // method parser
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for parser"));
    setModuleName("compiler");
    // parser is a simple accessor - elide try ... catch
    return var_parser;
  };
  func9.paramCounts = [0];
  this.methods["parser"] = func9;
  func9.definitionLine = 9;
  func9.definitionModule = "compiler";
  func9.debug = "import";
  func9.confidential = true;
  setModuleName("compiler");
  setLineNumber(10);    // compilenode import
  // Import of sys as sys
  if (typeof gracecode_sys == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module sys'));
  var var_sys = do_import("sys", gracecode_sys);
  var func10 = function(argcv) {    // method sys
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for sys"));
    setModuleName("compiler");
    // sys is a simple accessor - elide try ... catch
    return var_sys;
  };
  func10.paramCounts = [0];
  this.methods["sys"] = func10;
  func10.definitionLine = 10;
  func10.definitionModule = "compiler";
  func10.debug = "import";
  func10.confidential = true;
  setModuleName("compiler");
  setLineNumber(11);    // compilenode import
  // Import of unicode as unicode
  if (typeof gracecode_unicode == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module unicode'));
  var var_unicode = do_import("unicode", gracecode_unicode);
  var func11 = function(argcv) {    // method unicode
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for unicode"));
    setModuleName("compiler");
    // unicode is a simple accessor - elide try ... catch
    return var_unicode;
  };
  func11.paramCounts = [0];
  this.methods["unicode"] = func11;
  func11.definitionLine = 11;
  func11.definitionModule = "compiler";
  func11.debug = "import";
  func11.confidential = true;
  setModuleName("compiler");
  setLineNumber(12);    // compilenode import
  // Import of util as util
  if (typeof gracecode_util == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module util'));
  var var_util = do_import("util", gracecode_util);
  var func12 = function(argcv) {    // method util
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for util"));
    setModuleName("compiler");
    // util is a simple accessor - elide try ... catch
    return var_util;
  };
  func12.paramCounts = [0];
  this.methods["util"] = func12;
  func12.definitionLine = 12;
  func12.definitionModule = "compiler";
  func12.debug = "import";
  func12.confidential = true;
  setModuleName("compiler");
  setLineNumber(13);    // compilenode import
  // Import of xmodule as xmodule
  if (typeof gracecode_xmodule == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module xmodule'));
  var var_xmodule = do_import("xmodule", gracecode_xmodule);
  var func13 = function(argcv) {    // method xmodule
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for xmodule"));
    setModuleName("compiler");
    // xmodule is a simple accessor - elide try ... catch
    return var_xmodule;
  };
  func13.paramCounts = [0];
  this.methods["xmodule"] = func13;
  func13.definitionLine = 13;
  func13.definitionModule = "compiler";
  func13.debug = "import";
  func13.confidential = true;
  setModuleName("compiler");
  setLineNumber(15);    // compilenode identifier
  var call14 = callmethodChecked(var_util, "parseargs", [1], var_buildinfo);
  setLineNumber(17);    // compilenode string
  var string15 = new GraceString("starting compilation");
  var call16 = callmethodChecked(var_util, "log_verbose", [1], string15);
  setLineNumber(19);    // compilenode identifier
  var call17 = callmethodChecked(var_util, "infile", [0]);
  var call18 = callmethodChecked(var_lexer, "new", [0]);
  var call19 = callmethodChecked(call18, "lexfile", [1], call17);
  var var_tokens = call19;
  var func20 = function(argcv) {    // method tokens
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for tokens"));
    setModuleName("compiler");
    // tokens is a simple accessor - elide try ... catch
    return var_tokens;
  };
  func20.paramCounts = [0];
  this.methods["tokens"] = func20;
  func20.definitionLine = 19;
  func20.definitionModule = "compiler";
  var func21 = function(argcv) {    // method tokens:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for tokens:=(1)"));
    setModuleName("compiler");
    var_tokens = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func21.paramCounts = [1];
  this.methods["tokens:="] = func21;
  func21.definitionLine = 19;
  func21.definitionModule = "compiler";
  this.methods["tokens"].debug = "var";
  var if22 = GraceDone;
  setLineNumber(20);    // compilenode string
  var string23 = new GraceString("lex");
  var call25 = callmethodChecked(var_util, "target", [0]);
  var opresult27 = callmethodChecked(call25, "==", [1], string23);
  if (Grace_isTrue(opresult27)) {
    setLineNumber(22);    // compilenode block
    var block28 = new GraceBlock(this, 22, 1);
    setLineNumber(1);    // compilenode identifier
    block28.real = function(var_v) {
      var if29 = GraceDone;
      setLineNumber(23);    // compilenode identifier
      var call31 = callmethodChecked(var_util, "verbosity", [0]);
      var opresult33 = callmethodChecked(call31, ">", [1], new GraceNum(30));
      if (Grace_isTrue(opresult33)) {
        setLineNumber(24);    // compilenode string
        var string34 = new GraceString("]");
        var call36 = callmethodChecked(var_v, "indent", [0]);
        var string38 = new GraceString(" indent: ");
        var call40 = callmethodChecked(var_v, "size", [0]);
        var string42 = new GraceString(" size: ");
        var call44 = callmethodChecked(var_v, "linePos", [0]);
        var string46 = new GraceString(".");
        var call48 = callmethodChecked(var_v, "line", [0]);
        var string50 = new GraceString("  [pos: ");
        var call52 = callmethodChecked(var_v, "value", [0]);
        var string54 = new GraceString(": ");
        var call56 = callmethodChecked(var_v, "kind", [0]);
        var string58 = new GraceString("");
        var opresult60 = callmethodChecked(string58, "++", [1], call56);
        var opresult62 = callmethodChecked(opresult60, "++", [1], string54);
        var opresult64 = callmethodChecked(opresult62, "++", [1], call52);
        var opresult66 = callmethodChecked(opresult64, "++", [1], string50);
        var opresult68 = callmethodChecked(opresult66, "++", [1], call48);
        var opresult70 = callmethodChecked(opresult68, "++", [1], string46);
        var opresult72 = callmethodChecked(opresult70, "++", [1], call44);
        var opresult74 = callmethodChecked(opresult72, "++", [1], string42);
        var opresult76 = callmethodChecked(opresult74, "++", [1], call40);
        var opresult78 = callmethodChecked(opresult76, "++", [1], string38);
        var opresult80 = callmethodChecked(opresult78, "++", [1], call36);
        var opresult82 = callmethodChecked(opresult80, "++", [1], string34);
        var call83 = callmethodChecked(var_util, "outprint", [1], opresult82);
        if29 = call83;
      } else {
        setLineNumber(26);    // compilenode string
        var string84 = new GraceString("");
        var call86 = callmethodChecked(var_v, "value", [0]);
        var string88 = new GraceString(": ");
        var call90 = callmethodChecked(var_v, "kind", [0]);
        var string92 = new GraceString("");
        var opresult94 = callmethodChecked(string92, "++", [1], call90);
        var opresult96 = callmethodChecked(opresult94, "++", [1], string88);
        var opresult98 = callmethodChecked(opresult96, "++", [1], call86);
        var opresult100 = callmethodChecked(opresult98, "++", [1], string84);
        var call101 = callmethodChecked(var_util, "outprint", [1], opresult100);
        if29 = call101;
      }
      return if29;
    };
    var call102 = callmethodChecked(var_prelude, "for()do", [1, 1], var_tokens, block28);
    setLineNumber(29);    // compilenode identifier
    var call103 = callmethodChecked(var_util, "outfile", [0]);
    var call104 = callmethodChecked(call103, "close", [0]);
    setLineNumber(30);    // compilenode identifier
    var call105 = callmethodChecked(var_sys, "exit", [1], new GraceNum(0));
    if22 = call105;
  }
  setLineNumber(33);    // compilenode identifier
  var call106 = callmethodChecked(var_parser, "parse", [1], var_tokens);
  var var_moduleObject = call106;
  setLineNumber(29);    // compilenode method
  var func107 = function(argcv) {    // method moduleObject
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for moduleObject"));
    setModuleName("compiler");
    // moduleObject is a simple accessor - elide try ... catch
    setLineNumber(33);    // compilenode identifier
    return var_moduleObject;
  };
  func107.paramCounts = [0];
  this.methods["moduleObject"] = func107;
  func107.definitionLine = 29;
  func107.definitionModule = "compiler";
  setLineNumber(29);    // compilenode method
  var func108 = function(argcv) {    // method moduleObject:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for moduleObject:=(1)"));
    setModuleName("compiler");
    var_moduleObject = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func108.paramCounts = [1];
  this.methods["moduleObject:="] = func108;
  func108.definitionLine = 29;
  func108.definitionModule = "compiler";
  this.methods["moduleObject"].debug = "var";
  setLineNumber(34);    // compilenode identifier
  var call109 = callmethodChecked(var_moduleObject, "value", [0]);
  var var_values = call109;
  var func110 = function(argcv) {    // method values
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for values"));
    setModuleName("compiler");
    // values is a simple accessor - elide try ... catch
    return var_values;
  };
  func110.paramCounts = [0];
  this.methods["values"] = func110;
  func110.definitionLine = 34;
  func110.definitionModule = "compiler";
  var func111 = function(argcv) {    // method values:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for values:=(1)"));
    setModuleName("compiler");
    var_values = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func111.paramCounts = [1];
  this.methods["values:="] = func111;
  func111.definitionLine = 34;
  func111.definitionModule = "compiler";
  this.methods["values"].debug = "var";
  var if112 = GraceDone;
  setLineNumber(36);    // compilenode string
  var string113 = new GraceString("parse");
  var call115 = callmethodChecked(var_util, "target", [0]);
  var opresult117 = callmethodChecked(call115, "==", [1], string113);
  if (Grace_isTrue(opresult117)) {
    setLineNumber(39);    // compilenode identifier
    var call118 = callmethodChecked(var_moduleObject, "pretty", [1], new GraceNum(0));
    var call119 = callmethodChecked(var_util, "outprint", [1], call118);
    setLineNumber(41);    // compilenode identifier
    var call120 = callmethodChecked(var_util, "outfile", [0]);
    var call121 = callmethodChecked(call120, "close", [0]);
    setLineNumber(42);    // compilenode identifier
    var call122 = callmethodChecked(var_sys, "exit", [1], new GraceNum(0));
    if112 = call122;
  }
  var if123 = GraceDone;
  setLineNumber(44);    // compilenode string
  var string124 = new GraceString("grace");
  var call126 = callmethodChecked(var_util, "target", [0]);
  var opresult128 = callmethodChecked(call126, "==", [1], string124);
  if (Grace_isTrue(opresult128)) {
    setLineNumber(45);    // compilenode block
    var block129 = new GraceBlock(this, 45, 1);
    setLineNumber(1);    // compilenode identifier
    block129.real = function(var_v) {
      setLineNumber(46);    // compilenode identifier
      var call130 = callmethodChecked(var_v, "toGrace", [1], new GraceNum(0));
      var call131 = callmethodChecked(var_util, "outprint", [1], call130);
      return call131;
    };
    var call132 = callmethodChecked(var_prelude, "for()do", [1, 1], var_values, block129);
    setLineNumber(48);    // compilenode identifier
    var call133 = callmethodChecked(var_util, "outfile", [0]);
    var call134 = callmethodChecked(call133, "close", [0]);
    setLineNumber(49);    // compilenode identifier
    var call135 = callmethodChecked(var_sys, "exit", [1], new GraceNum(0));
    if123 = call135;
  }
  setLineNumber(52);    // compilenode identifier
  var call136 = callmethodChecked(var_xmodule, "checkDialect", [1], var_moduleObject);
  setLineNumber(53);    // compilenode identifier
  var call137 = callmethodChecked(var_xmodule, "doParseCheck", [1], var_moduleObject);
  var if138 = GraceDone;
  setLineNumber(55);    // compilenode string
  var string139 = new GraceString("Plugin");
  var call140 = callmethodChecked(var_util, "extensions", [0]);
  var call141 = callmethodChecked(call140, "contains", [1], string139);
  if (Grace_isTrue(call141)) {
    setLineNumber(56);    // compilenode string
    var string142 = new GraceString("Plugin");
    var call143 = callmethodChecked(var_util, "extensions", [0]);
    var call144 = callmethodChecked(call143, "get", [1], string142);
    var call145 = callmethodChecked(var_mirrors, "loadDynamicModule", [1], call144);
    var call146 = callmethodChecked(call145, "processAST", [1], var_values);
    if138 = call146;
  }
  var if147 = GraceDone;
  setLineNumber(58);    // compilenode string
  var string148 = new GraceString("imports");
  var call150 = callmethodChecked(var_util, "target", [0]);
  var opresult152 = callmethodChecked(call150, "==", [1], string148);
  if (Grace_isTrue(opresult152)) {
    setLineNumber(59);    // compilenode call
    var call153 = callmethodChecked(var_prelude, "emptySet", [0]);
    var var_imps = call153;
    setLineNumber(60);    // compilenode object
    var obj154 = Grace_allocObject(null, "vis");
    obj154.definitionModule = "compiler";
    obj154.definitionLine = 60;
    obj154.outer = this;
    var reader_compiler_outer155 = function() {
      return this.outer;
    };
    obj154.methods["outer"] = reader_compiler_outer155;
    var obj_init_154 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj154;
      var func156 = function(argcv) {    // method visitImport(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_o = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitImport(1)"));
        setModuleName("compiler");
        setLineNumber(63);    // compilenode identifier
        var call157 = callmethodChecked(var_o, "path", [0]);
        var call158 = callmethodChecked(var_imps, "add", [1], call157);
        setLineNumber(64);    // return value
        if (!Grace_isTrue(callmethod(var_Boolean, "match", [1], GraceFalse)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method visitImport(1) does not have " + 
                    callmethod(var_Boolean, "asString", [0])._value + "."));
        return GraceFalse;
      };
      func156.paramCounts = [1];
      obj154.methods["visitImport"] = func156;
      func156.definitionLine = 62;
      func156.definitionModule = "compiler";
      setLineNumber(61);    // compilenode identifier
      var call159 = callmethodChecked(var_ast, "baseVisitor()object", [0, 1], this);
      obj154.superobj = call159;
      if (call159.data) obj154.data = call159.data;
      if (call159.hasOwnProperty('_value'))
          obj154._value = call159._value;
      superDepth = origSuperDepth;
    };
    obj_init_154.apply(obj154, []);
    var var_vis = obj154;
    setLineNumber(67);    // compilenode block
    var block160 = new GraceBlock(this, 67, 1);
    setLineNumber(1);    // compilenode identifier
    block160.real = function(var_v) {
      setLineNumber(68);    // compilenode identifier
      var call161 = callmethodChecked(var_v, "accept", [1], var_vis);
      return call161;
    };
    var call162 = callmethodChecked(var_prelude, "for()do", [1, 1], var_values, block160);
    setLineNumber(70);    // compilenode identifier
    var call163 = callmethodChecked(var_imps, "asList", [0]);
    var call164 = callmethodChecked(call163, "sort", [0]);
    var block165 = new GraceBlock(this, 70, 1);
    setLineNumber(1);    // compilenode identifier
    block165.real = function(var_im) {
      setLineNumber(71);    // compilenode identifier
      var call166 = callmethodChecked(var_util, "outprint", [1], var_im);
      return call166;
    };
    var call167 = callmethodChecked(var_prelude, "for()do", [1, 1], call164, block165);
    setLineNumber(73);    // compilenode identifier
    var call168 = callmethodChecked(var_util, "outfile", [0]);
    var call169 = callmethodChecked(call168, "close", [0]);
    setLineNumber(74);    // compilenode identifier
    var call170 = callmethodChecked(var_sys, "exit", [1], new GraceNum(0));
    if147 = call170;
  }
  setLineNumber(76);    // compilenode identifier
  var call171 = callmethodChecked(var_identifierresolution, "resolve", [1], var_moduleObject);
  var_moduleObject = call171;
  var if172 = GraceDone;
  setLineNumber(77);    // compilenode string
  var string173 = new GraceString("ast");
  var call175 = callmethodChecked(var_util, "target", [0]);
  var opresult177 = callmethodChecked(call175, "==", [1], string173);
  var string179 = new GraceString("processed-ast");
  var call181 = callmethodChecked(var_util, "target", [0]);
  var opresult183 = callmethodChecked(call181, "==", [1], string179);
  var opresult185 = callmethodChecked(opresult183, "||", [1], opresult177);
  if (Grace_isTrue(opresult185)) {
    setLineNumber(78);    // compilenode string
    var string186 = new GraceString("=====================================");
    var call187 = callmethodChecked(var_util, "outprint", [1], string186);
    setLineNumber(79);    // compilenode string
    var string188 = new GraceString("module-level symbol table");
    var call189 = callmethodChecked(var_util, "outprint", [1], string188);
    setLineNumber(80);    // compilenode identifier
    var call190 = callmethodChecked(var_moduleObject, "scope", [0]);
    var call191 = callmethodChecked(call190, "asStringWithParents", [0]);
    var call192 = callmethodChecked(var_util, "outprint", [1], call191);
    setLineNumber(81);    // compilenode string
    var string193 = new GraceString("=====================================");
    var call194 = callmethodChecked(var_util, "outprint", [1], string193);
    setLineNumber(82);    // compilenode identifier
    var call195 = callmethodChecked(var_moduleObject, "pretty", [1], new GraceNum(0));
    var call196 = callmethodChecked(var_util, "outprint", [1], call195);
    setLineNumber(83);    // compilenode identifier
    var call197 = callmethodChecked(var_util, "outfile", [0]);
    var call198 = callmethodChecked(call197, "close", [0]);
    setLineNumber(84);    // compilenode identifier
    var call199 = callmethodChecked(var_sys, "exit", [1], new GraceNum(0));
    if172 = call199;
  }
  setLineNumber(87);    // compilenode identifier
  var call200 = callmethodChecked(var_xmodule, "doAstCheck", [1], var_moduleObject);
  setLineNumber(90);    // compilenode identifier
  var call202 = callmethodChecked(var_util, "target", [0]);
  var cases201 = [];
  setLineNumber(91);    // compilenode block
  var block203 = new GraceBlock(this, 91, 0);
  var string204 = new GraceString("c");
  block203.pattern = string204;
  block203.real = function() {
    setLineNumber(92);    // compilenode identifier
    var call205 = callmethodChecked(var_util, "outfile", [0]);
    var call206 = callmethodChecked(var_util, "runmode", [0]);
    setLineNumber(93);    // compilenode identifier
    var call207 = callmethodChecked(var_util, "buildtype", [0]);
    setLineNumber(92);    // compilenode identifier
    var call208 = callmethodChecked(var_genc, "compile", [5], var_moduleObject, call205, call206, call207, var_buildinfo);
    return call208;
  };
  cases201.push(block203);
  setLineNumber(95);    // compilenode block
  var block209 = new GraceBlock(this, 95, 0);
  var string210 = new GraceString("js");
  block209.pattern = string210;
  block209.real = function() {
    setLineNumber(96);    // compilenode identifier
    var call211 = callmethodChecked(var_util, "outfile", [0]);
    var call212 = callmethodChecked(var_util, "runmode", [0]);
    setLineNumber(97);    // compilenode identifier
    var call213 = callmethodChecked(var_util, "buildtype", [0]);
    var call214 = callmethodChecked(var_util, "gracelibPath", [0]);
    setLineNumber(96);    // compilenode identifier
    var call215 = callmethodChecked(var_genjs, "compile", [5], var_moduleObject, call211, call212, call213, call214);
    return call215;
  };
  cases201.push(block209);
  setLineNumber(99);    // compilenode block
  var block216 = new GraceBlock(this, 99, 1);
  setLineNumber(1);    // compilenode identifier
  block216.real = function(var___95____95__0) {
    setLineNumber(100);    // compilenode string
    var string217 = new GraceString("'\n");
    var call219 = callmethodChecked(var_util, "target", [0]);
    var string221 = new GraceString("minigrace: no such target '");
    var opresult223 = callmethodChecked(string221, "++", [1], call219);
    var opresult225 = callmethodChecked(opresult223, "++", [1], string217);
    var call226 = callmethodChecked(var_io, "error", [0]);
    var call227 = callmethodChecked(call226, "write", [1], opresult225);
    setLineNumber(101);    // compilenode identifier
    var call228 = callmethodChecked(var_sys, "exit", [1], new GraceNum(1));
    return call228;
  };
  cases201.push(block216);
  setLineNumber(90);    // compilematchcase
  var matchres201 = matchCase(call202,cases201,false);
  setModuleName("compiler");
  return this;
}
gracecode_compiler.imports = ['ast', 'buildinfo', 'genc', 'genjs', 'identifierresolution', 'io', 'lexer', 'mirrors', 'parser', 'sys', 'unicode', 'util', 'xmodule'];
if (typeof gctCache !== "undefined")
  gctCache['compiler'] = "classes:\nconfidential:\nfresh-methods:\nmodules:\n ast\n buildinfo\n errormessages\n genc\n genjs\n identifierKinds\n identifierresolution\n io\n lexer\n mirrors\n parser\n stringMap\n sys\n unicode\n unixFilePath\n util\n xmodule\npath:\n compiler\npublic:\ntypes:\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["compiler"] = [
    "import \"ast\" as ast",
    "import \"buildinfo\" as buildinfo",
    "import \"genc\" as genc",
    "import \"genjs\" as genjs",
    "import \"identifierresolution\" as identifierresolution",
    "import \"io\" as io",
    "import \"lexer\" as lexer",
    "import \"mirrors\" as mirrors",
    "import \"parser\" as parser",
    "import \"sys\" as sys",
    "import \"unicode\" as unicode",
    "import \"util\" as util",
    "import \"xmodule\" as xmodule",
    "",
    "util.parseargs(buildinfo)",
    "",
    "util.log_verbose \"starting compilation\"",
    "",
    "var tokens := lexer.new.lexfile(util.infile)",
    "if (util.target == \"lex\") then {",
    "    // Print the lexed tokens and quit.",
    "    for (tokens) do { v ->",
    "        if (util.verbosity > 30) then {",
    "            util.outprint \"{v.kind}: {v.value}  [pos: {v.line}.{v.linePos} size: {v.size} indent: {v.indent}]\"",
    "        } else {",
    "            util.outprint \"{v.kind}: {v.value}\"",
    "        }",
    "    }",
    "    util.outfile.close",
    "    sys.exit(0)",
    "}",
    "",
    "var moduleObject := parser.parse(tokens)",
    "var values := moduleObject.value",
    "",
    "if (util.target == \"parse\") then {",
    "    // Parse mode pretty-prints the parse tree and quits.",
    "//    util.log 60 verbose \"target = parse, outfile = {util.outfile}.\"",
    "    util.outprint(moduleObject.pretty(0))",
    "//    util.log 60 verbose \"done writing {util.outfile}.\"",
    "    util.outfile.close",
    "    sys.exit(0)",
    "}",
    "if (util.target == \"grace\") then {",
    "    for (values) do { v ->",
    "        util.outprint(v.toGrace(0))",
    "    }",
    "    util.outfile.close",
    "    sys.exit(0)",
    "}",
    "",
    "xmodule.checkDialect(moduleObject)",
    "xmodule.doParseCheck(moduleObject)",
    "",
    "if (util.extensions.contains(\"Plugin\")) then {",
    "    mirrors.loadDynamicModule(util.extensions.get(\"Plugin\")).processAST(values)",
    "}",
    "if (util.target == \"imports\") then {",
    "    def imps = emptySet",
    "    def vis = object {",
    "        inherits ast.baseVisitor",
    "        method visitImport(o) -> Boolean {",
    "            imps.add(o.path)",
    "            false",
    "        }",
    "    }",
    "    for (values) do {v->",
    "        v.accept(vis)",
    "    }",
    "    for (imps.asList.sort) do {im->",
    "        util.outprint(im)",
    "    }",
    "    util.outfile.close",
    "    sys.exit(0)",
    "}",
    "moduleObject := identifierresolution.resolve(moduleObject)",
    "if ((util.target == \"processed-ast\") || (util.target == \"ast\")) then {",
    "    util.outprint \"=====================================\"",
    "    util.outprint \"module-level symbol table\"",
    "    util.outprint (moduleObject.scope.asStringWithParents)",
    "    util.outprint \"=====================================\"",
    "    util.outprint(moduleObject.pretty(0))",
    "    util.outfile.close",
    "    sys.exit(0)",
    "}",
    "",
    "xmodule.doAstCheck(moduleObject)",
    "",
    "// Perform the actual compilation",
    "match(util.target)",
    "    case { \"c\" ->",
    "        genc.compile(moduleObject, util.outfile, util.runmode,",
    "            util.buildtype, buildinfo)",
    "    }",
    "    case { \"js\" ->",
    "        genjs.compile(moduleObject, util.outfile, util.runmode,",
    "            util.buildtype, util.gracelibPath)",
    "    }",
    "    case { _ ->",
    "        io.error.write(\"minigrace: no such target '\" ++ util.target ++ \"'\\n\")",
    "        sys.exit(1)",
    "    }" ];
}
if (typeof global !== "undefined")
  global.gracecode_compiler = gracecode_compiler;
if (typeof window !== "undefined")
  window.gracecode_compiler = gracecode_compiler;
