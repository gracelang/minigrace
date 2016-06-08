"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_xmodule() {
  setModuleName("xmodule");
  this.definitionModule = "xmodule";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_xmodule_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_xmodule_outer0;
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
    setModuleName("xmodule");
    // io is a simple accessor - elide try ... catch
    return var_io;
  };
  func1.paramCounts = [0];
  this.methods["io"] = func1;
  func1.definitionLine = 2;
  func1.definitionModule = "xmodule";
  func1.debug = "import";
  func1.confidential = true;
  setModuleName("xmodule");
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
    setModuleName("xmodule");
    // sys is a simple accessor - elide try ... catch
    return var_sys;
  };
  func2.paramCounts = [0];
  this.methods["sys"] = func2;
  func2.definitionLine = 3;
  func2.definitionModule = "xmodule";
  func2.debug = "import";
  func2.confidential = true;
  setModuleName("xmodule");
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
    setModuleName("xmodule");
    // util is a simple accessor - elide try ... catch
    return var_util;
  };
  func3.paramCounts = [0];
  this.methods["util"] = func3;
  func3.definitionLine = 4;
  func3.definitionModule = "xmodule";
  func3.debug = "import";
  func3.confidential = true;
  setModuleName("xmodule");
  setLineNumber(5);    // compilenode import
  // Import of ast as ast
  if (typeof gracecode_ast == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module ast'));
  var var_ast = do_import("ast", gracecode_ast);
  var func4 = function(argcv) {    // method ast
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ast"));
    setModuleName("xmodule");
    // ast is a simple accessor - elide try ... catch
    return var_ast;
  };
  func4.paramCounts = [0];
  this.methods["ast"] = func4;
  func4.definitionLine = 5;
  func4.definitionModule = "xmodule";
  func4.debug = "import";
  func4.confidential = true;
  setModuleName("xmodule");
  setLineNumber(6);    // compilenode import
  // Import of mirrors as mirrors
  if (typeof gracecode_mirrors == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module mirrors'));
  var var_mirrors = do_import("mirrors", gracecode_mirrors);
  var func5 = function(argcv) {    // method mirrors
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for mirrors"));
    setModuleName("xmodule");
    // mirrors is a simple accessor - elide try ... catch
    return var_mirrors;
  };
  func5.paramCounts = [0];
  this.methods["mirrors"] = func5;
  func5.definitionLine = 6;
  func5.definitionModule = "xmodule";
  func5.debug = "import";
  func5.confidential = true;
  setModuleName("xmodule");
  setLineNumber(7);    // compilenode import
  // Import of errormessages as errormessages
  if (typeof gracecode_errormessages == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module errormessages'));
  var var_errormessages = do_import("errormessages", gracecode_errormessages);
  var func6 = function(argcv) {    // method errormessages
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for errormessages"));
    setModuleName("xmodule");
    // errormessages is a simple accessor - elide try ... catch
    return var_errormessages;
  };
  func6.paramCounts = [0];
  this.methods["errormessages"] = func6;
  func6.definitionLine = 7;
  func6.definitionModule = "xmodule";
  func6.debug = "import";
  func6.confidential = true;
  setModuleName("xmodule");
  setLineNumber(8);    // compilenode import
  // Import of unixFilePath as filePath
  if (typeof gracecode_unixFilePath == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module unixFilePath'));
  var var_filePath = do_import("unixFilePath", gracecode_unixFilePath);
  var func7 = function(argcv) {    // method filePath
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for filePath"));
    setModuleName("xmodule");
    // filePath is a simple accessor - elide try ... catch
    return var_filePath;
  };
  func7.paramCounts = [0];
  this.methods["filePath"] = func7;
  func7.definitionLine = 8;
  func7.definitionModule = "xmodule";
  func7.debug = "import";
  func7.confidential = true;
  setModuleName("xmodule");
  setLineNumber(13);    // compilenode method
  var func8 = function(argcv) {    // method builtInModules
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for builtInModules"));
    setModuleName("xmodule");
    var if9 = GraceDone;
    setLineNumber(14);    // compilenode string
    var string10 = new GraceString("c");
    var call12 = callmethodChecked(var_util, "target", [0]);
    var opresult14 = callmethodChecked(call12, "==", [1], string10);
    if (Grace_isTrue(opresult14)) {
      setLineNumber(15);    // compilenode string
      var string16 = new GraceString("sys");
      setLineNumber(16);    // compilenode string
      var string17 = new GraceString("io");
      setLineNumber(17);    // compilenode string
      var string18 = new GraceString("imports");
      setLineNumber(18);    // compilenode string
      var string19 = new GraceString("StandardPrelude");
      setLineNumber(19);    // compilenode string
      var string20 = new GraceString("standardGrace");
      setLineNumber(20);    // compilenode string
      var string21 = new GraceString("collectionsPrelude");
      var array15 = new PrimitiveGraceList([string16, string17, string18, string19, string20, string21]);
      var call22 = callmethodChecked(var_prelude, "list", [1], array15);
      if9 = call22;
    } else {
      setLineNumber(22);    // compilenode string
      var string24 = new GraceString("imports");
      setLineNumber(23);    // compilenode string
      var string25 = new GraceString("io");
      setLineNumber(24);    // compilenode string
      var string26 = new GraceString("mirrors");
      setLineNumber(25);    // compilenode string
      var string27 = new GraceString("sys");
      setLineNumber(26);    // compilenode string
      var string28 = new GraceString("unicode");
      setLineNumber(27);    // compilenode string
      var string29 = new GraceString("util");
      var array23 = new PrimitiveGraceList([string24, string25, string26, string27, string28, string29]);
      var call30 = callmethodChecked(var_prelude, "list", [1], array23);
      if9 = call30;
    }
    return if9;
  };
  func8.paramCounts = [0];
  this.methods["builtInModules"] = func8;
  func8.definitionLine = 13;
  func8.definitionModule = "xmodule";
  setLineNumber(57);    // compilenode method
  var func31 = function(argcv) {    // method checkDialect(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_moduleObject = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for checkDialect(1)"));
    setModuleName("xmodule");
    setLineNumber(58);    // compilenode block
    var block32 = new GraceBlock(this, 58, 1);
    setLineNumber(1);    // compilenode identifier
    block32.real = function(var_node) {
      var if33 = GraceDone;
      setLineNumber(59);    // compilenode identifier
      var call34 = callmethodChecked(var_node, "isDialect", [0]);
      if (Grace_isTrue(call34)) {
        setLineNumber(60);    // compilenode identifier
        var call35 = callmethodChecked(var_node, "moduleName", [0]);
        var var_nm = call35;
        setLineNumber(61);    // compilenode identifier
        var call36 = callmethodChecked(var_currentDialect, "name:=", [1], var_nm);
        setLineNumber(62);    // compilenode identifier
        onSelf = true;
        var call37 = callmethodChecked(this, "checkExternalModule", [1], var_node);
        setLineNumber(63);    // compilenode string
        var string38 = new GraceString("loading dialect for checkers.");
        var call39 = callmethodChecked(var_util, "log()verbose", [1, 1], new GraceNum(50), string38);
        setLineNumber(64);    // compilenode block
        var block41 = new GraceBlock(this, 64, 0);
        block41.real = function() {
          setLineNumber(65);    // compilenode identifier
          var call42 = callmethodChecked(var_node, "path", [0]);
          var call43 = callmethodChecked(var_mirrors, "loadDynamicModule", [1], call42);
          var var_dobj = call43;
          setLineNumber(66);    // compilenode identifier
          var call44 = callmethodChecked(var_currentDialect, "moduleObject:=", [1], var_dobj);
          setLineNumber(67);    // compilenode identifier
          var call45 = callmethodChecked(var_mirrors, "reflect", [1], var_dobj);
          var call46 = callmethodChecked(call45, "methods", [0]);
          var var_mths = call46;
          setLineNumber(68);    // compilenode block
          var block47 = new GraceBlock(this, 68, 1);
          setLineNumber(1);    // compilenode identifier
          block47.real = function(var_m) {
            var if48 = GraceDone;
            setLineNumber(69);    // compilenode string
            var string49 = new GraceString("checker");
            var call51 = callmethodChecked(var_m, "name", [0]);
            var opresult53 = callmethodChecked(call51, "==", [1], string49);
            if (Grace_isTrue(opresult53)) {
              setLineNumber(70);    // compilenode identifier
              var call54 = callmethodChecked(var_currentDialect, "hasParseChecker:=", [1], GraceTrue);
              if48 = call54;
            }
            var if55 = GraceDone;
            setLineNumber(72);    // compilenode string
            var string56 = new GraceString("astChecker");
            var call58 = callmethodChecked(var_m, "name", [0]);
            var opresult60 = callmethodChecked(call58, "==", [1], string56);
            if (Grace_isTrue(opresult60)) {
              setLineNumber(73);    // compilenode identifier
              var call61 = callmethodChecked(var_currentDialect, "hasAstChecker:=", [1], GraceTrue);
              if55 = call61;
            }
            var if62 = GraceDone;
            setLineNumber(75);    // compilenode string
            var string63 = new GraceString("atModuleEnd");
            var call65 = callmethodChecked(var_m, "name", [0]);
            var opresult67 = callmethodChecked(call65, "==", [1], string63);
            if (Grace_isTrue(opresult67)) {
              setLineNumber(76);    // compilenode identifier
              var call68 = callmethodChecked(var_currentDialect, "hasAtEnd:=", [1], GraceTrue);
              if62 = call68;
            }
            var if69 = GraceDone;
            setLineNumber(78);    // compilenode string
            var string70 = new GraceString("atModuleStart");
            var call72 = callmethodChecked(var_m, "name", [0]);
            var opresult74 = callmethodChecked(call72, "==", [1], string70);
            if (Grace_isTrue(opresult74)) {
              setLineNumber(79);    // compilenode identifier
              var call75 = callmethodChecked(var_currentDialect, "hasAtStart:=", [1], GraceTrue);
              if69 = call75;
            }
            return if69;
          };
          var call76 = callmethodChecked(var_prelude, "for()do", [1, 1], var_mths, block47);
          return call76;
        };
        var cases40 = [];
        setLineNumber(82);    // compilenode block
        var block77 = new GraceBlock(this, 82, 1);
        setLineNumber(0);    // compilenode string
        var string78 = new GraceString("e");
        var call79 = callmethodChecked(var_prelude, "VariablePattern", [0]);
        var call80 = callmethodChecked(call79, "new", [1], string78);
        setLineNumber(82);    // compilenode call
        var call81 = callmethodChecked(var_prelude, "RuntimeError", [0]);
        setLineNumber(0);    // compilenode call
        var call82 = callmethodChecked(var_prelude, "AndPattern", [0]);
        var call83 = callmethodChecked(call82, "new", [2], call80, call81);
        block77.pattern = call83;
        setLineNumber(82);    // compilenode call
        var call84 = callmethodChecked(var_prelude, "RuntimeError", [0]);
        block77.paramTypes = [call84];
        block77.real = function(var_e) {
          setLineNumber(83);    // compilenode identifier
          var call85 = callmethodChecked(var_node, "line", [0]);
          var call86 = callmethodChecked(var_util, "setPosition", [2], call85, new GraceNum(1));
          setLineNumber(84);    // compilenode identifier
          var call87 = callmethodChecked(var_e, "printBacktrace", [0]);
          setLineNumber(85);    // compilenode string
          var string88 = new GraceString(".");
          var string91 = new GraceString("' failed to load.\n");
          var string94 = new GraceString("Dialect error: dialect '");
          var opresult96 = callmethodChecked(string94, "++", [1], var_nm);
          var opresult98 = callmethodChecked(opresult96, "++", [1], string91);
          var opresult100 = callmethodChecked(opresult98, "++", [1], var_e);
          var opresult102 = callmethodChecked(opresult100, "++", [1], string88);
          setLineNumber(86);    // compilenode identifier
          var call103 = callmethodChecked(var_node, "line", [0]);
          setLineNumber(85);    // compilenode identifier
          var call104 = callmethodChecked(var_errormessages, "error()atLine", [1, 1], opresult102, call103);
          return call104;
        };
        cases40.push(block77);
        setLineNumber(64);    // compiletrycatch
        var catchres40 = tryCatch(block41,cases40,false);
        setModuleName("xmodule");
        setLineNumber(89);    // compilenode identifier
        throw new ReturnException(var_done, returnTarget);
      }
      return if33;
    };
    setLineNumber(58);    // compilenode identifier
    var call105 = callmethodChecked(var_moduleObject, "value", [0]);
    var call106 = callmethodChecked(call105, "do", [1], block32);
    return call106;
  };
  func31.paramCounts = [1];
  this.methods["checkDialect"] = func31;
  func31.definitionLine = 57;
  func31.definitionModule = "xmodule";
  setLineNumber(93);    // compilenode method
  var func107 = function(argcv) {    // method doParseCheck(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_moduleObj = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for doParseCheck(1)"));
    setModuleName("xmodule");
    var if108 = GraceDone;
    setLineNumber(94);    // compilenode identifier
    var call109 = callmethodChecked(var_currentDialect, "hasParseChecker", [0]);
    var call110 = callmethodChecked(call109, "not", [0]);
    if (Grace_isTrue(call110)) {
      return var_done;
    }
    setLineNumber(95);    // compilenode string
    var string111 = new GraceString("CheckerFailure");
    var call112 = callmethodChecked(var_prelude, "Exception", [0]);
    var call113 = callmethodChecked(call112, "refine", [1], string111);
    var var_CheckerFailure = call113;
    setLineNumber(96);    // compilenode block
    var block115 = new GraceBlock(this, 96, 0);
    block115.real = function() {
      setLineNumber(97);    // compilenode identifier
      var call116 = callmethodChecked(var_moduleObj, "value", [0]);
      var call117 = callmethodChecked(var_currentDialect, "moduleObject", [0]);
      var call118 = callmethodChecked(call117, "checker", [1], call116);
      return call118;
    };
    var cases114 = [];
    setLineNumber(98);    // compilenode block
    var block119 = new GraceBlock(this, 98, 1);
    setLineNumber(0);    // compilenode string
    var string120 = new GraceString("e");
    var call121 = callmethodChecked(var_prelude, "VariablePattern", [0]);
    var call122 = callmethodChecked(call121, "new", [1], string120);
    var call123 = callmethodChecked(var_prelude, "AndPattern", [0]);
    var call124 = callmethodChecked(call123, "new", [2], call122, var_CheckerFailure);
    block119.pattern = call124;
    setLineNumber(98);    // compilenode identifier
    block119.paramTypes = [var_CheckerFailure];
    block119.real = function(var_e) {
      setLineNumber(99);    // compilenode identifier
      var call126 = callmethodChecked(var_e, "data", [0]);
      var cases125 = [];
      setLineNumber(100);    // compilenode block
      var block127 = new GraceBlock(this, 100, 1);
      setLineNumber(0);    // compilenode string
      var string128 = new GraceString("lp");
      var call129 = callmethodChecked(var_prelude, "VariablePattern", [0]);
      var call130 = callmethodChecked(call129, "new", [1], string128);
      var call131 = callmethodChecked(var_prelude, "AndPattern", [0]);
      var call132 = callmethodChecked(call131, "new", [2], call130, var_LinePos);
      block127.pattern = call132;
      setLineNumber(100);    // compilenode identifier
      block127.paramTypes = [var_LinePos];
      block127.real = function(var_lp) {
        setLineNumber(101);    // compilenode string
        var string133 = new GraceString(".");
        var call135 = callmethodChecked(var_e, "message", [0]);
        var string137 = new GraceString(": ");
        var call139 = callmethodChecked(var_e, "exception", [0]);
        var string141 = new GraceString("");
        var opresult143 = callmethodChecked(string141, "++", [1], call139);
        var opresult145 = callmethodChecked(opresult143, "++", [1], string137);
        var opresult147 = callmethodChecked(opresult145, "++", [1], call135);
        var opresult149 = callmethodChecked(opresult147, "++", [1], string133);
        setLineNumber(102);    // compilenode identifier
        var call150 = callmethodChecked(var_e, "data", [0]);
        var call151 = callmethodChecked(call150, "line", [0]);
        var call152 = callmethodChecked(var_e, "data", [0]);
        var call153 = callmethodChecked(call152, "linePos", [0]);
        setLineNumber(101);    // compilenode identifier
        var call154 = callmethodChecked(var_errormessages, "error()atPosition", [1, 2], opresult149, call151, call153);
        return call154;
      };
      cases125.push(block127);
      setLineNumber(104);    // compilenode block
      var block155 = new GraceBlock(this, 104, 1);
      setLineNumber(0);    // compilenode string
      var string156 = new GraceString("rs");
      var call157 = callmethodChecked(var_prelude, "VariablePattern", [0]);
      var call158 = callmethodChecked(call157, "new", [1], string156);
      var call159 = callmethodChecked(var_prelude, "AndPattern", [0]);
      var call160 = callmethodChecked(call159, "new", [2], call158, var_RangeSuggestions);
      block155.pattern = call160;
      setLineNumber(104);    // compilenode identifier
      block155.paramTypes = [var_RangeSuggestions];
      block155.real = function(var_rs) {
        setLineNumber(105);    // compilenode string
        var string161 = new GraceString(".");
        var call163 = callmethodChecked(var_e, "message", [0]);
        var string165 = new GraceString(": ");
        var call167 = callmethodChecked(var_e, "exception", [0]);
        var string169 = new GraceString("");
        var opresult171 = callmethodChecked(string169, "++", [1], call167);
        var opresult173 = callmethodChecked(opresult171, "++", [1], string165);
        var opresult175 = callmethodChecked(opresult173, "++", [1], call163);
        var opresult177 = callmethodChecked(opresult175, "++", [1], string161);
        setLineNumber(106);    // compilenode identifier
        var call178 = callmethodChecked(var_rs, "line", [0]);
        var call179 = callmethodChecked(var_rs, "posStart", [0]);
        var call180 = callmethodChecked(var_rs, "posEnd", [0]);
        setLineNumber(107);    // compilenode identifier
        var call181 = callmethodChecked(var_rs, "suggestions", [0]);
        setLineNumber(105);    // compilenode identifier
        var call182 = callmethodChecked(var_errormessages, "error()atRange()withSuggestions", [1, 3, 1], opresult177, call178, call179, call180, call181);
        return call182;
      };
      cases125.push(block155);
      setLineNumber(109);    // compilenode block
      var block183 = new GraceBlock(this, 109, 1);
      setLineNumber(1);    // compilenode identifier
      block183.real = function(var___95____95__2) {
        setLineNumber(110);    // compilenode string
        var string184 = new GraceString(".");
        var call186 = callmethodChecked(var_e, "message", [0]);
        var string188 = new GraceString(": ");
        var call190 = callmethodChecked(var_e, "exception", [0]);
        var string192 = new GraceString("");
        var opresult194 = callmethodChecked(string192, "++", [1], call190);
        var opresult196 = callmethodChecked(opresult194, "++", [1], string188);
        var opresult198 = callmethodChecked(opresult196, "++", [1], call186);
        var opresult200 = callmethodChecked(opresult198, "++", [1], string184);
        setLineNumber(111);    // compilenode identifier
        var call201 = callmethodChecked(var_util, "linenum", [0]);
        setLineNumber(110);    // compilenode identifier
        var call202 = callmethodChecked(var_errormessages, "error()atLine", [1, 1], opresult200, call201);
        return call202;
      };
      cases125.push(block183);
      setLineNumber(99);    // compilematchcase
      var matchres125 = matchCase(call126,cases125,false);
      setModuleName("xmodule");
      return matchres125;
    };
    cases114.push(block119);
    setLineNumber(113);    // compilenode block
    var block203 = new GraceBlock(this, 113, 1);
    setLineNumber(0);    // compilenode string
    var string204 = new GraceString("e");
    var call205 = callmethodChecked(var_prelude, "VariablePattern", [0]);
    var call206 = callmethodChecked(call205, "new", [1], string204);
    setLineNumber(113);    // compilenode call
    var call207 = callmethodChecked(var_prelude, "Exception", [0]);
    setLineNumber(0);    // compilenode call
    var call208 = callmethodChecked(var_prelude, "AndPattern", [0]);
    var call209 = callmethodChecked(call208, "new", [2], call206, call207);
    block203.pattern = call209;
    setLineNumber(113);    // compilenode call
    var call210 = callmethodChecked(var_prelude, "Exception", [0]);
    block203.paramTypes = [call210];
    block203.real = function(var_e) {
      setLineNumber(114);    // compilenode identifier
      var call211 = callmethodChecked(var_e, "printBacktrace", [0]);
      setLineNumber(116);    // compilenode string
      var string212 = new GraceString("");
      var call214 = callmethodChecked(var_e, "message", [0]);
      var string216 = new GraceString(": ");
      var call218 = callmethodChecked(var_e, "exception", [0]);
      var string220 = new GraceString("'.\n");
      var call222 = callmethodChecked(var_currentDialect, "name", [0]);
      var string224 = new GraceString("dialect '");
      var opresult226 = callmethodChecked(string224, "++", [1], call222);
      var opresult228 = callmethodChecked(opresult226, "++", [1], string220);
      var opresult230 = callmethodChecked(opresult228, "++", [1], call218);
      var opresult232 = callmethodChecked(opresult230, "++", [1], string216);
      var opresult234 = callmethodChecked(opresult232, "++", [1], call214);
      var opresult236 = callmethodChecked(opresult234, "++", [1], string212);
      setLineNumber(115);    // compilenode string
      var string238 = new GraceString("Unexpected exception raised by parse checker for ");
      var opresult240 = callmethodChecked(string238, "++", [1], opresult236);
      var call241 = callmethodChecked(var_errormessages, "error", [1], opresult240);
      return call241;
    };
    cases114.push(block203);
    setLineNumber(96);    // compiletrycatch
    var catchres114 = tryCatch(block115,cases114,false);
    setModuleName("xmodule");
    return catchres114;
  };
  func107.paramCounts = [1];
  this.methods["doParseCheck"] = func107;
  func107.definitionLine = 93;
  func107.definitionModule = "xmodule";
  setLineNumber(120);    // compilenode method
  var func242 = function(argcv) {    // method doAstCheck(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_moduleObj = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for doAstCheck(1)"));
    setModuleName("xmodule");
    var if243 = GraceDone;
    setLineNumber(121);    // compilenode identifier
    var call244 = callmethodChecked(var_currentDialect, "hasAstChecker", [0]);
    var call245 = callmethodChecked(call244, "not", [0]);
    if (Grace_isTrue(call245)) {
      return var_done;
    }
    setLineNumber(122);    // compilenode string
    var string246 = new GraceString("CheckerFailure");
    var call247 = callmethodChecked(var_prelude, "Exception", [0]);
    var call248 = callmethodChecked(call247, "refine", [1], string246);
    var var_CheckerFailure = call248;
    setLineNumber(123);    // compilenode block
    var block250 = new GraceBlock(this, 123, 0);
    block250.real = function() {
      setLineNumber(124);    // compilenode identifier
      var call251 = callmethodChecked(var_currentDialect, "moduleObject", [0]);
      var call252 = callmethodChecked(call251, "astChecker", [1], var_moduleObj);
      return call252;
    };
    var cases249 = [];
    setLineNumber(125);    // compilenode block
    var block253 = new GraceBlock(this, 125, 1);
    setLineNumber(0);    // compilenode string
    var string254 = new GraceString("e");
    var call255 = callmethodChecked(var_prelude, "VariablePattern", [0]);
    var call256 = callmethodChecked(call255, "new", [1], string254);
    var call257 = callmethodChecked(var_prelude, "AndPattern", [0]);
    var call258 = callmethodChecked(call257, "new", [2], call256, var_CheckerFailure);
    block253.pattern = call258;
    setLineNumber(125);    // compilenode identifier
    block253.paramTypes = [var_CheckerFailure];
    block253.real = function(var_e) {
      setLineNumber(126);    // compilenode identifier
      var call260 = callmethodChecked(var_e, "data", [0]);
      var cases259 = [];
      setLineNumber(127);    // compilenode block
      var block261 = new GraceBlock(this, 127, 1);
      setLineNumber(0);    // compilenode string
      var string262 = new GraceString("lp");
      var call263 = callmethodChecked(var_prelude, "VariablePattern", [0]);
      var call264 = callmethodChecked(call263, "new", [1], string262);
      var call265 = callmethodChecked(var_prelude, "AndPattern", [0]);
      var call266 = callmethodChecked(call265, "new", [2], call264, var_LinePos);
      block261.pattern = call266;
      setLineNumber(127);    // compilenode identifier
      block261.paramTypes = [var_LinePos];
      block261.real = function(var_lp) {
        setLineNumber(128);    // compilenode string
        var string267 = new GraceString(".");
        var call269 = callmethodChecked(var_e, "message", [0]);
        var string271 = new GraceString(": ");
        var call273 = callmethodChecked(var_e, "exception", [0]);
        var string275 = new GraceString("");
        var opresult277 = callmethodChecked(string275, "++", [1], call273);
        var opresult279 = callmethodChecked(opresult277, "++", [1], string271);
        var opresult281 = callmethodChecked(opresult279, "++", [1], call269);
        var opresult283 = callmethodChecked(opresult281, "++", [1], string267);
        setLineNumber(129);    // compilenode identifier
        var call284 = callmethodChecked(var_e, "data", [0]);
        var call285 = callmethodChecked(call284, "line", [0]);
        var call286 = callmethodChecked(var_e, "data", [0]);
        var call287 = callmethodChecked(call286, "linePos", [0]);
        setLineNumber(128);    // compilenode identifier
        var call288 = callmethodChecked(var_errormessages, "error()atPosition", [1, 2], opresult283, call285, call287);
        return call288;
      };
      cases259.push(block261);
      setLineNumber(131);    // compilenode block
      var block289 = new GraceBlock(this, 131, 1);
      setLineNumber(0);    // compilenode string
      var string290 = new GraceString("rs");
      var call291 = callmethodChecked(var_prelude, "VariablePattern", [0]);
      var call292 = callmethodChecked(call291, "new", [1], string290);
      var call293 = callmethodChecked(var_prelude, "AndPattern", [0]);
      var call294 = callmethodChecked(call293, "new", [2], call292, var_RangeSuggestions);
      block289.pattern = call294;
      setLineNumber(131);    // compilenode identifier
      block289.paramTypes = [var_RangeSuggestions];
      block289.real = function(var_rs) {
        setLineNumber(132);    // compilenode string
        var string295 = new GraceString(".");
        var call297 = callmethodChecked(var_e, "message", [0]);
        var string299 = new GraceString(": ");
        var call301 = callmethodChecked(var_e, "exception", [0]);
        var string303 = new GraceString("");
        var opresult305 = callmethodChecked(string303, "++", [1], call301);
        var opresult307 = callmethodChecked(opresult305, "++", [1], string299);
        var opresult309 = callmethodChecked(opresult307, "++", [1], call297);
        var opresult311 = callmethodChecked(opresult309, "++", [1], string295);
        setLineNumber(133);    // compilenode identifier
        var call312 = callmethodChecked(var_rs, "line", [0]);
        var call313 = callmethodChecked(var_rs, "posStart", [0]);
        var call314 = callmethodChecked(var_rs, "posEnd", [0]);
        setLineNumber(134);    // compilenode identifier
        var call315 = callmethodChecked(var_rs, "suggestions", [0]);
        setLineNumber(132);    // compilenode identifier
        var call316 = callmethodChecked(var_errormessages, "error()atRange()withSuggestions", [1, 3, 1], opresult311, call312, call313, call314, call315);
        return call316;
      };
      cases259.push(block289);
      setLineNumber(136);    // compilenode block
      var block317 = new GraceBlock(this, 136, 1);
      setLineNumber(1);    // compilenode identifier
      block317.real = function(var___95____95__3) {
        return GraceDone;
      };
      cases259.push(block317);
      setLineNumber(126);    // compilematchcase
      var matchres259 = matchCase(call260,cases259,false);
      setModuleName("xmodule");
      setLineNumber(137);    // compilenode string
      var string318 = new GraceString(".");
      var call320 = callmethodChecked(var_e, "message", [0]);
      var string322 = new GraceString(": ");
      var call324 = callmethodChecked(var_e, "exception", [0]);
      var string326 = new GraceString("");
      var opresult328 = callmethodChecked(string326, "++", [1], call324);
      var opresult330 = callmethodChecked(opresult328, "++", [1], string322);
      var opresult332 = callmethodChecked(opresult330, "++", [1], call320);
      var opresult334 = callmethodChecked(opresult332, "++", [1], string318);
      var call335 = callmethodChecked(var_util, "linenum", [0]);
      var call336 = callmethodChecked(var_errormessages, "error()atPosition", [1, 2], opresult334, call335, new GraceNum(0));
      return call336;
    };
    cases249.push(block253);
    setLineNumber(138);    // compilenode block
    var block337 = new GraceBlock(this, 138, 1);
    setLineNumber(0);    // compilenode string
    var string338 = new GraceString("e");
    var call339 = callmethodChecked(var_prelude, "VariablePattern", [0]);
    var call340 = callmethodChecked(call339, "new", [1], string338);
    setLineNumber(138);    // compilenode call
    var call341 = callmethodChecked(var_prelude, "Exception", [0]);
    setLineNumber(0);    // compilenode call
    var call342 = callmethodChecked(var_prelude, "AndPattern", [0]);
    var call343 = callmethodChecked(call342, "new", [2], call340, call341);
    block337.pattern = call343;
    setLineNumber(138);    // compilenode call
    var call344 = callmethodChecked(var_prelude, "Exception", [0]);
    block337.paramTypes = [call344];
    block337.real = function(var_e) {
      setLineNumber(139);    // compilenode identifier
      var call345 = callmethodChecked(var_e, "printBacktrace", [0]);
      setLineNumber(141);    // compilenode string
      var string346 = new GraceString("");
      var call348 = callmethodChecked(var_e, "message", [0]);
      var string350 = new GraceString(": ");
      var call352 = callmethodChecked(var_e, "exception", [0]);
      var string354 = new GraceString("'.\n");
      var call356 = callmethodChecked(var_currentDialect, "name", [0]);
      var string358 = new GraceString("dialect '");
      var opresult360 = callmethodChecked(string358, "++", [1], call356);
      var opresult362 = callmethodChecked(opresult360, "++", [1], string354);
      var opresult364 = callmethodChecked(opresult362, "++", [1], call352);
      var opresult366 = callmethodChecked(opresult364, "++", [1], string350);
      var opresult368 = callmethodChecked(opresult366, "++", [1], call348);
      var opresult370 = callmethodChecked(opresult368, "++", [1], string346);
      setLineNumber(140);    // compilenode string
      var string372 = new GraceString("Unexpected exception raised by AST checker for ");
      var opresult374 = callmethodChecked(string372, "++", [1], opresult370);
      var call375 = callmethodChecked(var_errormessages, "error", [1], opresult374);
      return call375;
    };
    cases249.push(block337);
    setLineNumber(123);    // compiletrycatch
    var catchres249 = tryCatch(block250,cases249,false);
    setModuleName("xmodule");
    return catchres249;
  };
  func242.paramCounts = [1];
  this.methods["doAstCheck"] = func242;
  func242.definitionLine = 120;
  func242.definitionModule = "xmodule";
  setLineNumber(145);    // compilenode method
  var func376 = function(argcv) {    // method checkExternalModule(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_node = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for checkExternalModule(1)"));
    setModuleName("xmodule");
    setLineNumber(146);    // compilenode identifier
    var call377 = callmethodChecked(var_node, "moduleName", [0]);
    var call378 = callmethodChecked(var_node, "path", [0]);
    setLineNumber(147);    // compilenode identifier
    var call379 = callmethodChecked(var_node, "line", [0]);
    var call380 = callmethodChecked(var_node, "linePos", [0]);
    var call381 = callmethodChecked(var_node, "isDialect", [0]);
    onSelf = true;
    var call382 = callmethodChecked(this, "checkimport", [5], call377, call378, call379, call380, call381);
    return call382;
  };
  func376.paramCounts = [1];
  this.methods["checkExternalModule"] = func376;
  func376.definitionLine = 145;
  func376.definitionModule = "xmodule";
  setLineNumber(150);    // compilenode method
  var func383 = function(argcv) {    // method checkimport(5)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_nm = arguments[curarg];
    curarg++;
    var var_pathname = arguments[curarg];
    curarg++;
    var var_line = arguments[curarg];
    curarg++;
    var var_linePos = arguments[curarg];
    curarg++;
    var var_isDialect = arguments[curarg];
    curarg++;
    if (argcv[0] !== 5)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for checkimport(5)"));
    setModuleName("xmodule");
    var if384 = GraceDone;
    setLineNumber(151);    // compilenode call
    onSelf = true;
    var call385 = callmethodChecked(this, "builtInModules", [0]);
    var call386 = callmethodChecked(call385, "contains", [1], var_nm);
    if (Grace_isTrue(call386)) {
      setLineNumber(152);    // compilenode identifier
      var call387 = callmethodChecked(var_imports, "other", [0]);
      var call388 = callmethodChecked(call387, "add", [1], var_nm);
      setLineNumber(154);    // compilenode identifier
      return var_done;
    }
    var if389 = GraceDone;
    setLineNumber(155);    // compilenode identifier
    var call390 = callmethodChecked(var_imports, "isAlready", [1], var_nm);
    if (Grace_isTrue(call390)) {
      setLineNumber(157);    // compilenode identifier
      return var_done;
    }
    setLineNumber(158);    // compilenode identifier
    var var_noSource = GraceFalse;
    var if391 = GraceDone;
    setLineNumber(161);    // compilenode call
    var call392 = callmethodChecked(var_prelude, "inBrowser", [0]);
    if (Grace_isTrue(call392)) {
      setLineNumber(162);    // compilenode string
      var string393 = new GraceString(".js");
      var opresult396 = callmethodChecked(var_nm, "++", [1], string393);
      var string397 = new GraceString("");
      var block398 = new GraceBlock(this, 162, 1);
      setLineNumber(1);    // compilenode identifier
      block398.real = function(var___95____95__4) {
        setLineNumber(163);    // compilenode string
        var string399 = new GraceString(" before importing it.");
        var string402 = new GraceString("Please compile module ");
        var opresult404 = callmethodChecked(string402, "++", [1], var_nm);
        var opresult406 = callmethodChecked(opresult404, "++", [1], string399);
        setLineNumber(164);    // compilenode identifier
        var call408 = callmethodChecked(var_nm, "size", [0]);
        var opresult411 = callmethodChecked(var_linePos, "+", [1], call408);
        var diff413 = callmethodChecked(opresult411, "-", [1], new GraceNum(1));
        setLineNumber(163);    // compilenode identifier
        var call414 = callmethodChecked(var_errormessages, "error()atRange", [1, 3], opresult406, var_line, var_linePos, diff413);
        return call414;
      };
      setLineNumber(162);    // compilenode identifier
      var call415 = callmethodChecked(var_util, "file()onPath()otherwise", [1, 1, 1], opresult396, string397, block398);
      setLineNumber(167);    // compilenode identifier
      return var_done;
    }
    setLineNumber(168);    // compilenode string
    var string416 = new GraceString("GRACE_MODULE_PATH");
    var call417 = callmethodChecked(var_sys, "environ", [0]);
    var call418 = callmethodChecked(call417, "at", [1], string416);
    var var_gmp = call418;
    setLineNumber(169);    // compilenode string
    var string419 = new GraceString("grace");
    var call420 = callmethodChecked(var_filePath, "fromString", [1], var_pathname);
    var call421 = callmethodChecked(call420, "setExtension", [1], string419);
    var var_pn = call421;
    setLineNumber(170);    // compilenode identifier
    var call422 = callmethodChecked(var_util, "sourceDir", [0]);
    setLineNumber(171);    // compilenode block
    var block423 = new GraceBlock(this, 171, 1);
    setLineNumber(1);    // compilenode identifier
    block423.real = function(var_l) {
      setLineNumber(172);    // compilenode identifier
      var_noSource = GraceTrue;
      setLineNumber(173);    // compilenode identifier
      return var_pn;
    };
    setLineNumber(170);    // compilenode identifier
    var call424 = callmethodChecked(var_util, "file()on()orPath()otherwise", [1, 1, 1, 1], var_pn, call422, var_gmp, block423);
    var var_moduleFileGrace = call424;
    setLineNumber(175);    // compilenode string
    var string425 = new GraceString(".gct");
    var call426 = callmethodChecked(var_moduleFileGrace, "copy", [0]);
    var call427 = callmethodChecked(call426, "setExtension", [1], string425);
    var var_moduleFileGct = call427;
    var if428 = GraceDone;
    setLineNumber(176);    // compilenode identifier
    var call429 = callmethodChecked(var_util, "outDir", [0]);
    var call431 = callmethodChecked(var_util, "sourceDir", [0]);
    var opresult433 = callmethodChecked(call431, "\u2260", [1], call429);
    if (Grace_isTrue(opresult433)) {
      setLineNumber(177);    // compilenode identifier
      var call434 = callmethodChecked(var_util, "outDir", [0]);
      var call435 = callmethodChecked(var_moduleFileGct, "setDirectory", [1], call434);
      if428 = call435;
    }
    var if436 = GraceDone;
    setLineNumber(179);    // compilenode string
    var string437 = new GraceString("c");
    var call439 = callmethodChecked(var_util, "target", [0]);
    var opresult441 = callmethodChecked(call439, "==", [1], string437);
    if (Grace_isTrue(opresult441)) {
      setLineNumber(180);    // compilenode string
      var string442 = new GraceString(".gso");
      var call443 = callmethodChecked(var_moduleFileGct, "copy", [0]);
      var call444 = callmethodChecked(call443, "setExtension", [1], string442);
      var var_moduleFileGso = call444;
      setLineNumber(181);    // compilenode string
      var string445 = new GraceString(".gcn");
      var call446 = callmethodChecked(var_moduleFileGct, "copy", [0]);
      var call447 = callmethodChecked(call446, "setExtension", [1], string445);
      var var_moduleFileGcn = call447;
      setLineNumber(183);    // compilenode block
      var block448 = new GraceBlock(this, 183, 0);
      block448.real = function() {
        var call449 = callmethodChecked(var_dynamicCModules, "contains", [1], var_nm);
        return call449;
      };
      var call451 = callmethodChecked(var_util, "dynamicModule", [0]);
      setLineNumber(182);    // compilenode identifier
      var call453 = callmethodChecked(var_util, "importDynamic", [0]);
      var opresult456 = callmethodChecked(var_isDialect, "||", [1], call453);
      var opresult458 = callmethodChecked(opresult456, "||", [1], call451);
      var opresult460 = callmethodChecked(opresult458, "||", [1], block448);
      var var_needsDynamic = opresult460;
      setLineNumber(184);    // compilenode string
      var string461 = new GraceString(".");
      var string464 = new GraceString(" is ");
      var string467 = new GraceString("needsDynamic for ");
      var opresult469 = callmethodChecked(string467, "++", [1], var_nm);
      var opresult471 = callmethodChecked(opresult469, "++", [1], string464);
      var opresult473 = callmethodChecked(opresult471, "++", [1], var_needsDynamic);
      var opresult475 = callmethodChecked(opresult473, "++", [1], string461);
      var call476 = callmethodChecked(var_util, "log()verbose", [1, 1], new GraceNum(100), opresult475);
      setLineNumber(185);    // compilenode vardec
      var var_binaryFile;
      setLineNumber(186);    // compilenode vardec
      var var_importsSet;
      var if477 = GraceDone;
      setLineNumber(187);    // compilenode identifier
      if (Grace_isTrue(var_needsDynamic)) {
        setLineNumber(188);    // compilenode identifier
        var call478 = callmethodChecked(var_dynamicCModules, "add", [1], var_nm);
        setLineNumber(189);    // compilenode identifier
        var_binaryFile = var_moduleFileGso;
        setLineNumber(190);    // compilenode identifier
        var call479 = callmethodChecked(var_imports, "other", [0]);
        var_importsSet = call479;
        if477 = GraceDone;
      } else {
        setLineNumber(192);    // compilenode identifier
        var_binaryFile = var_moduleFileGcn;
        setLineNumber(193);    // compilenode identifier
        var call480 = callmethodChecked(var_imports, "static", [0]);
        var_importsSet = call480;
        if477 = GraceDone;
      }
      var if481 = GraceDone;
      setLineNumber(195);    // compilenode identifier
      var call482 = callmethodChecked(var_binaryFile, "exists", [0]);
      var call483 = callmethodChecked(call482, "not", [0]);
      var opresult486 = callmethodChecked(var_noSource, "&&", [1], call483);
      if (Grace_isTrue(opresult486)) {
        setLineNumber(196);    // compilenode block
        var block487 = new GraceBlock(this, 196, 1);
        setLineNumber(1);    // compilenode identifier
        block487.real = function(var_l) {
          setLineNumber(198);    // compilenode string
          var string488 = new GraceString(".");
          var string491 = new GraceString("; looked in ");
          var call493 = callmethodChecked(var_binaryFile, "shortName", [0]);
          var string495 = new GraceString(" or ");
          var call497 = callmethodChecked(var_pn, "shortName", [0]);
          var string499 = new GraceString("I can't find ");
          var opresult501 = callmethodChecked(string499, "++", [1], call497);
          var opresult503 = callmethodChecked(opresult501, "++", [1], string495);
          var opresult505 = callmethodChecked(opresult503, "++", [1], call493);
          var opresult507 = callmethodChecked(opresult505, "++", [1], string491);
          var opresult509 = callmethodChecked(opresult507, "++", [1], var_l);
          var opresult511 = callmethodChecked(opresult509, "++", [1], string488);
          setLineNumber(197);    // compilenode identifier
          var call512 = callmethodChecked(var_errormessages, "error()atLine", [1, 1], opresult511, var_line);
          return call512;
        };
        setLineNumber(196);    // compilenode identifier
        var call513 = callmethodChecked(var_util, "file()onPath()otherwise", [1, 1, 1], var_binaryFile, var_gmp, block487);
        var_binaryFile = call513;
        setLineNumber(201);    // compilenode identifier
        var call514 = callmethodChecked(var_binaryFile, "directory", [0]);
        var call515 = callmethodChecked(var_moduleFileGct, "setDirectory", [1], call514);
        var if516 = GraceDone;
        setLineNumber(202);    // compilenode identifier
        var call517 = callmethodChecked(var_moduleFileGct, "exists", [0]);
        var call518 = callmethodChecked(call517, "not", [0]);
        if (Grace_isTrue(call518)) {
          setLineNumber(204);    // compilenode string
          var string519 = new GraceString(" nor source.");
          var string522 = new GraceString("");
          var opresult524 = callmethodChecked(string522, "++", [1], var_moduleFileGct);
          var opresult526 = callmethodChecked(opresult524, "++", [1], string519);
          setLineNumber(203);    // compilenode string
          var string528 = new GraceString(", but neither ");
          var string531 = new GraceString("I found ");
          var opresult533 = callmethodChecked(string531, "++", [1], var_binaryFile);
          var opresult535 = callmethodChecked(opresult533, "++", [1], string528);
          var opresult537 = callmethodChecked(opresult535, "++", [1], opresult526);
          var call538 = callmethodChecked(var_errormessages, "error()atLine", [1, 1], opresult537, var_line);
          if516 = call538;
        }
        if481 = if516;
      }
      var if539 = GraceDone;
      setLineNumber(208);    // compilenode identifier
      var call540 = callmethodChecked(var_needsDynamic, "not", [0]);
      if (Grace_isTrue(call540)) {
        setLineNumber(209);    // compilenode identifier
        var call541 = callmethodChecked(var_binaryFile, "asString", [0]);
        var call542 = callmethodChecked(var_imports, "linkfiles", [0]);
        var call543 = callmethodChecked(call542, "add", [1], call541);
        if539 = call543;
      }
      setLineNumber(211);    // compilenode string
      var string544 = new GraceString(".");
      var call546 = callmethodChecked(var_imports, "linkfiles", [0]);
      var string548 = new GraceString("linkfiles is ");
      var opresult550 = callmethodChecked(string548, "++", [1], call546);
      var opresult552 = callmethodChecked(opresult550, "++", [1], string544);
      var call553 = callmethodChecked(var_util, "log()verbose", [1, 1], new GraceNum(100), opresult552);
      var if554 = GraceDone;
      setLineNumber(213);    // compilenode block
      var block555 = new GraceBlock(this, 213, 0);
      block555.real = function() {
        setLineNumber(214);    // compilenode block
        var block556 = new GraceBlock(this, 214, 0);
        block556.real = function() {
          var call557 = callmethodChecked(var_binaryFile, "newer", [1], var_moduleFileGrace);
          return call557;
        };
        var opresult560 = callmethodChecked(var_noSource, "||", [1], block556);
        return opresult560;
      };
      setLineNumber(212);    // compilenode block
      var block562 = new GraceBlock(this, 212, 0);
      block562.real = function() {
        setLineNumber(213);    // compilenode identifier
        var call563 = callmethodChecked(var_moduleFileGct, "exists", [0]);
        return call563;
      };
      setLineNumber(212);    // compilenode identifier
      var call565 = callmethodChecked(var_binaryFile, "exists", [0]);
      var opresult567 = callmethodChecked(call565, "&&", [1], block562);
      var opresult569 = callmethodChecked(opresult567, "&&", [1], block555);
      if (Grace_isTrue(opresult569)) {
      } else {
        var if570 = GraceDone;
        setLineNumber(218);    // compilenode identifier
        var call571 = callmethodChecked(var_binaryFile, "exists", [0]);
        var call572 = callmethodChecked(call571, "not", [0]);
        if (Grace_isTrue(call572)) {
          setLineNumber(219);    // compilenode string
          var string573 = new GraceString(" does not exist");
          var string576 = new GraceString("");
          var opresult578 = callmethodChecked(string576, "++", [1], var_binaryFile);
          var opresult580 = callmethodChecked(opresult578, "++", [1], string573);
          var call581 = callmethodChecked(var_util, "log()verbose", [1, 1], new GraceNum(60), opresult580);
          if570 = call581;
        } else {
          var if582 = GraceDone;
          setLineNumber(220);    // compilenode identifier
          var call583 = callmethodChecked(var_binaryFile, "newer", [1], var_moduleFileGrace);
          var call584 = callmethodChecked(call583, "not", [0]);
          if (Grace_isTrue(call584)) {
            setLineNumber(221);    // compilenode string
            var string585 = new GraceString("");
            var string588 = new GraceString(" not newer than ");
            var string591 = new GraceString("");
            var opresult593 = callmethodChecked(string591, "++", [1], var_binaryFile);
            var opresult595 = callmethodChecked(opresult593, "++", [1], string588);
            var opresult597 = callmethodChecked(opresult595, "++", [1], var_moduleFileGrace);
            var opresult599 = callmethodChecked(opresult597, "++", [1], string585);
            var call600 = callmethodChecked(var_util, "log()verbose", [1, 1], new GraceNum(60), opresult599);
            if582 = call600;
          }
          if570 = if582;
        }
        setLineNumber(223);    // compilenode identifier
        var call601 = callmethodChecked(var_moduleFileGrace, "asString", [0]);
        setLineNumber(224);    // compilenode identifier
        onSelf = true;
        var call602 = callmethodChecked(this, "compileModule()inFile()forDialect()atRange", [1, 1, 1, 2], var_nm, call601, var_isDialect, var_line, var_linePos);
        if554 = call602;
      }
      setLineNumber(226);    // compilenode identifier
      var call603 = callmethodChecked(var_importsSet, "add", [1], var_nm);
      if436 = call603;
    } else {
      var if604 = GraceDone;
      setLineNumber(227);    // compilenode string
      var string605 = new GraceString("js");
      var call607 = callmethodChecked(var_util, "target", [0]);
      var opresult609 = callmethodChecked(call607, "==", [1], string605);
      if (Grace_isTrue(opresult609)) {
        setLineNumber(228);    // compilenode string
        var string610 = new GraceString(".js");
        var call611 = callmethodChecked(var_moduleFileGct, "copy", [0]);
        var call612 = callmethodChecked(call611, "setExtension", [1], string610);
        var var_moduleFileJs = call612;
        var if613 = GraceDone;
        setLineNumber(230);    // compilenode block
        var block614 = new GraceBlock(this, 230, 0);
        block614.real = function() {
          setLineNumber(231);    // compilenode block
          var block615 = new GraceBlock(this, 231, 0);
          block615.real = function() {
            setLineNumber(232);    // compilenode identifier
            var call616 = callmethodChecked(var_moduleFileJs, "newer", [1], var_moduleFileGrace);
            return call616;
          };
          setLineNumber(231);    // compilenode identifier
          var opresult619 = callmethodChecked(var_noSource, "||", [1], block615);
          return opresult619;
        };
        setLineNumber(229);    // compilenode block
        var block621 = new GraceBlock(this, 229, 0);
        block621.real = function() {
          setLineNumber(230);    // compilenode identifier
          var call622 = callmethodChecked(var_moduleFileGct, "exists", [0]);
          return call622;
        };
        setLineNumber(229);    // compilenode identifier
        var call624 = callmethodChecked(var_moduleFileJs, "exists", [0]);
        var opresult626 = callmethodChecked(call624, "&&", [1], block621);
        var opresult628 = callmethodChecked(opresult626, "&&", [1], block614);
        if (Grace_isTrue(opresult628)) {
        } else {
          var if629 = GraceDone;
          setLineNumber(237);    // compilenode identifier
          var call630 = callmethodChecked(var_moduleFileJs, "newer", [1], var_moduleFileGrace);
          var call631 = callmethodChecked(call630, "not", [0]);
          if (Grace_isTrue(call631)) {
            setLineNumber(238);    // compilenode string
            var string632 = new GraceString("");
            var string635 = new GraceString(" not newer than ");
            var string638 = new GraceString("");
            var opresult640 = callmethodChecked(string638, "++", [1], var_moduleFileJs);
            var opresult642 = callmethodChecked(opresult640, "++", [1], string635);
            var opresult644 = callmethodChecked(opresult642, "++", [1], var_moduleFileGrace);
            var opresult646 = callmethodChecked(opresult644, "++", [1], string632);
            var call647 = callmethodChecked(var_util, "log()verbose", [1, 1], new GraceNum(60), opresult646);
            if629 = call647;
          }
          var if648 = GraceDone;
          setLineNumber(240);    // compilenode identifier
          var call649 = callmethodChecked(var_moduleFileGrace, "exists", [0]);
          if (Grace_isTrue(call649)) {
            setLineNumber(241);    // compilenode identifier
            var call650 = callmethodChecked(var_moduleFileGrace, "asString", [0]);
            setLineNumber(242);    // compilenode identifier
            onSelf = true;
            var call651 = callmethodChecked(this, "compileModule()inFile()forDialect()atRange", [1, 1, 1, 2], var_nm, call650, var_isDialect, var_line, var_linePos);
            if648 = call651;
          } else {
            var if652 = GraceDone;
            setLineNumber(244);    // compilenode identifier
            if (Grace_isTrue(var_isDialect)) {
              var string653 = new GraceString("dialect");
              if652 = string653;
            } else {
              var string654 = new GraceString("module");
              if652 = string654;
            }
            var var_thing = if652;
            setLineNumber(245);    // compilenode string
            var string655 = new GraceString("");
            var string658 = new GraceString(" ");
            var string661 = new GraceString("Can't find ");
            var opresult663 = callmethodChecked(string661, "++", [1], var_thing);
            var opresult665 = callmethodChecked(opresult663, "++", [1], string658);
            var opresult667 = callmethodChecked(opresult665, "++", [1], var_nm);
            var opresult669 = callmethodChecked(opresult667, "++", [1], string655);
            var call670 = callmethodChecked(var_errormessages, "error()atLine", [1, 1], opresult669, var_line);
            if648 = call670;
          }
          if613 = if648;
        }
        setLineNumber(249);    // compilenode identifier
        var call671 = callmethodChecked(var_imports, "other", [0]);
        var call672 = callmethodChecked(call671, "add", [1], var_nm);
        if604 = call672;
      }
      if436 = if604;
    }
    setLineNumber(251);    // compilenode identifier
    var call673 = callmethodChecked(var_moduleFileGct, "directory", [0]);
    onSelf = true;
    var call674 = callmethodChecked(this, "addTransitiveImports", [5], call673, var_isDialect, var_nm, var_line, var_linePos);
    return call674;
  };
  func383.confidential = true;
  func383.paramCounts = [5];
  this.methods["checkimport"] = func383;
  func383.definitionLine = 150;
  func383.definitionModule = "xmodule";
  setLineNumber(254);    // compilenode method
  var func675 = function(argcv) {    // method addTransitiveImports(5)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_directory = arguments[curarg];
    curarg++;
    var var_isDialect = arguments[curarg];
    curarg++;
    var var_moduleName = arguments[curarg];
    curarg++;
    var var_line = arguments[curarg];
    curarg++;
    var var_linePos = arguments[curarg];
    curarg++;
    if (argcv[0] !== 5)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addTransitiveImports(5)"));
    setModuleName("xmodule");
    setLineNumber(255);    // compilenode block
    var block676 = new GraceBlock(this, 255, 0);
    block676.real = function() {
      setLineNumber(256);    // compilenode identifier
      onSelf = true;
      var call677 = callmethodChecked(this, "parseGCT()sourceDir", [1, 1], var_moduleName, var_directory);
      return call677;
    };
    setLineNumber(255);    // compilenode identifier
    var call678 = callmethodChecked(var_gctCache, "at()ifAbsent", [1, 1], var_moduleName, block676);
    var var_gctData = call678;
    var if679 = GraceDone;
    setLineNumber(258);    // compilenode string
    var string680 = new GraceString("dialect");
    var call681 = callmethodChecked(var_gctData, "containsKey", [1], string680);
    if (Grace_isTrue(call681)) {
      setLineNumber(259);    // compilenode string
      var string682 = new GraceString("dialect");
      var call683 = callmethodChecked(var_gctData, "at", [1], string682);
      var call684 = callmethodChecked(call683, "first", [0]);
      var var_dName = call684;
      setLineNumber(260);    // compilenode identifier
      onSelf = true;
      var call685 = callmethodChecked(this, "checkimport", [5], var_dName, var_dName, var_line, var_linePos, GraceTrue);
      if679 = call685;
    }
    setLineNumber(262);    // compilenode string
    var string686 = new GraceString("modules");
    var block687 = new GraceBlock(this, 262, 0);
    block687.real = function() {
      var call688 = callmethodChecked(var_prelude, "emptySequence", [0]);
      return call688;
    };
    var call689 = callmethodChecked(var_gctData, "at()ifAbsent", [1, 1], string686, block687);
    var var_importedModules = call689;
    setLineNumber(263);    // compilenode identifier
    var call690 = callmethodChecked(var_util, "modname", [0]);
    var var_m = call690;
    var if691 = GraceDone;
    setLineNumber(264);    // compilenode identifier
    var call692 = callmethodChecked(var_importedModules, "contains", [1], var_m);
    if (Grace_isTrue(call692)) {
      setLineNumber(266);    // compilenode string
      var string693 = new GraceString("' (and so on).");
      var string696 = new GraceString("', which is imported by '");
      var string699 = new GraceString("by '");
      var opresult701 = callmethodChecked(string699, "++", [1], var_moduleName);
      var opresult703 = callmethodChecked(opresult701, "++", [1], string696);
      var opresult705 = callmethodChecked(opresult703, "++", [1], var_m);
      var opresult707 = callmethodChecked(opresult705, "++", [1], string693);
      setLineNumber(265);    // compilenode string
      var string709 = new GraceString("' is imported ");
      var string712 = new GraceString("Cyclic import detected: '");
      var opresult714 = callmethodChecked(string712, "++", [1], var_m);
      var opresult716 = callmethodChecked(opresult714, "++", [1], string709);
      var opresult718 = callmethodChecked(opresult716, "++", [1], opresult707);
      var call719 = callmethodChecked(var_errormessages, "error()atLine", [1, 1], opresult718, var_line);
      if691 = call719;
    }
    setLineNumber(269);    // compilenode block
    var block720 = new GraceBlock(this, 269, 1);
    setLineNumber(1);    // compilenode identifier
    block720.real = function(var_each) {
      setLineNumber(270);    // compilenode identifier
      onSelf = true;
      var call721 = callmethodChecked(this, "checkimport", [5], var_each, var_each, var_line, var_linePos, var_isDialect);
      return call721;
    };
    setLineNumber(269);    // compilenode identifier
    var call722 = callmethodChecked(var_importedModules, "do", [1], block720);
    return call722;
  };
  func675.confidential = true;
  func675.paramCounts = [5];
  this.methods["addTransitiveImports"] = func675;
  func675.definitionLine = 254;
  func675.definitionModule = "xmodule";
  setLineNumber(274);    // compilenode method
  var func723 = function(argcv) {    // method compileModule(1)inFile(1)forDialect(1)atRange(2)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_nm = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compileModule (arg list 1) of compileModule(1)inFile(1)forDialect(1)atRange(2)"));
    var var_sourceFile = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for inFile (arg list 2) of compileModule(1)inFile(1)forDialect(1)atRange(2)"));
    var var_isDialect = arguments[curarg];
    curarg++;
    if (argcv[2] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for forDialect (arg list 3) of compileModule(1)inFile(1)forDialect(1)atRange(2)"));
    var var_line = arguments[curarg];
    curarg++;
    var var_linePos = arguments[curarg];
    curarg++;
    if (argcv[3] !== 2)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for atRange (arg list 4) of compileModule(1)inFile(1)forDialect(1)atRange(2)"));
    setModuleName("xmodule");
    var if724 = GraceDone;
    setLineNumber(276);    // compilenode block
    var block725 = new GraceBlock(this, 276, 0);
    block725.real = function() {
      var call726 = callmethodChecked(var_util, "recurse", [0]);
      var call727 = callmethodChecked(call726, "not", [0]);
      return call727;
    };
    var call729 = callmethodChecked(var_prelude, "inBrowser", [0]);
    var opresult731 = callmethodChecked(call729, "||", [1], block725);
    if (Grace_isTrue(opresult731)) {
      setLineNumber(277);    // compilenode string
      var string732 = new GraceString(" before importing it.");
      var string735 = new GraceString("Please compile module ");
      var opresult737 = callmethodChecked(string735, "++", [1], var_nm);
      var opresult739 = callmethodChecked(opresult737, "++", [1], string732);
      var call740 = callmethodChecked(var_errormessages, "error()atLine", [1, 1], opresult739, var_line);
      if724 = call740;
    }
    setLineNumber(280);    // compilenode identifier
    var var_slashed = GraceFalse;
    setLineNumber(281);    // compilenode identifier
    var call741 = callmethodChecked(var_sys, "argv", [0]);
    var call742 = callmethodChecked(call741, "first", [0]);
    var block743 = new GraceBlock(this, 281, 1);
    setLineNumber(1);    // compilenode identifier
    block743.real = function(var_letter) {
      var if744 = GraceDone;
      setLineNumber(282);    // compilenode string
      var string745 = new GraceString("/");
      var opresult748 = callmethodChecked(var_letter, "==", [1], string745);
      if (Grace_isTrue(opresult748)) {
        setLineNumber(283);    // compilenode identifier
        var_slashed = GraceTrue;
        if744 = GraceDone;
      }
      return if744;
    };
    var call749 = callmethodChecked(var_prelude, "for()do", [1, 1], call742, block743);
    setLineNumber(286);    // compilenode vardec
    var var_cmd;
    var if750 = GraceDone;
    setLineNumber(287);    // compilenode identifier
    if (Grace_isTrue(var_slashed)) {
      setLineNumber(288);    // compilenode identifier
      var call751 = callmethodChecked(var_sys, "argv", [0]);
      var call752 = callmethodChecked(call751, "first", [0]);
      var call753 = callmethodChecked(var_io, "realpath", [1], call752);
      var_cmd = call753;
      if750 = GraceDone;
    } else {
      setLineNumber(290);    // compilenode string
      var string754 = new GraceString("");
      var call756 = callmethodChecked(var_sys, "argv", [0]);
      var call757 = callmethodChecked(call756, "first", [0]);
      var string759 = new GraceString("/");
      var call761 = callmethodChecked(var_sys, "execPath", [0]);
      var string763 = new GraceString("");
      var opresult765 = callmethodChecked(string763, "++", [1], call761);
      var opresult767 = callmethodChecked(opresult765, "++", [1], string759);
      var opresult769 = callmethodChecked(opresult767, "++", [1], call757);
      var opresult771 = callmethodChecked(opresult769, "++", [1], string754);
      var call772 = callmethodChecked(var_io, "realpath", [1], opresult771);
      var_cmd = call772;
      if750 = GraceDone;
    }
    setLineNumber(292);    // compilenode identifier
    var call773 = callmethodChecked(var_cmd, "size", [0]);
    var var_cmdSz = call773;
    var if774 = GraceDone;
    setLineNumber(293);    // compilenode string
    var string775 = new GraceString(".js");
    var diff779 = callmethodChecked(var_cmdSz, "-", [1], new GraceNum(2));
    var call780 = callmethodChecked(var_cmd, "substringFrom()to", [1, 1], diff779, var_cmdSz);
    var opresult782 = callmethodChecked(call780, "==", [1], string775);
    if (Grace_isTrue(opresult782)) {
      setLineNumber(294);    // compilenode string
      var string783 = new GraceString("\"");
      var string786 = new GraceString("grace \"");
      var opresult788 = callmethodChecked(string786, "++", [1], var_cmd);
      var opresult790 = callmethodChecked(opresult788, "++", [1], string783);
      var_cmd = opresult790;
      if774 = GraceDone;
    } else {
      setLineNumber(296);    // compilenode string
      var string791 = new GraceString("\"");
      var string794 = new GraceString("\"");
      var opresult796 = callmethodChecked(string794, "++", [1], var_cmd);
      var opresult798 = callmethodChecked(opresult796, "++", [1], string791);
      var_cmd = opresult798;
      if774 = GraceDone;
    }
    var if799 = GraceDone;
    setLineNumber(298);    // compilenode identifier
    var call800 = callmethodChecked(var_util, "defaultVerbosity", [0]);
    var call802 = callmethodChecked(var_util, "verbosity", [0]);
    var opresult804 = callmethodChecked(call802, "\u2260", [1], call800);
    if (Grace_isTrue(opresult804)) {
      setLineNumber(299);    // compilenode string
      var string805 = new GraceString("");
      var call807 = callmethodChecked(var_util, "verbosity", [0]);
      var string809 = new GraceString(" --verbose ");
      var opresult811 = callmethodChecked(string809, "++", [1], call807);
      var opresult813 = callmethodChecked(opresult811, "++", [1], string805);
      var opresult816 = callmethodChecked(var_cmd, "++", [1], opresult813);
      var_cmd = opresult816;
      if799 = GraceDone;
    }
    var if817 = GraceDone;
    setLineNumber(301);    // compilenode identifier
    var call818 = callmethodChecked(var_util, "dirFlag", [0]);
    if (Grace_isTrue(call818)) {
      setLineNumber(302);    // compilenode identifier
      var call819 = callmethodChecked(var_util, "outDir", [0]);
      var string821 = new GraceString(" --dir ");
      var opresult824 = callmethodChecked(var_cmd, "++", [1], string821);
      var opresult826 = callmethodChecked(opresult824, "++", [1], call819);
      var_cmd = opresult826;
      if817 = GraceDone;
    }
    var if827 = GraceDone;
    setLineNumber(304);    // compilenode identifier
    var call828 = callmethodChecked(var_util, "vtag", [0]);
    var opresult831 = callmethodChecked(GraceFalse, "\u2260", [1], call828);
    if (Grace_isTrue(opresult831)) {
      setLineNumber(305);    // compilenode identifier
      var call832 = callmethodChecked(var_util, "vtag", [0]);
      var string834 = new GraceString(" --vtag ");
      var opresult837 = callmethodChecked(var_cmd, "++", [1], string834);
      var opresult839 = callmethodChecked(opresult837, "++", [1], call832);
      var_cmd = opresult839;
      if827 = GraceDone;
    }
    var if840 = GraceDone;
    setLineNumber(307);    // compilenode string
    var string841 = new GraceString("c");
    var call843 = callmethodChecked(var_util, "target", [0]);
    var opresult845 = callmethodChecked(call843, "==", [1], string841);
    if (Grace_isTrue(opresult845)) {
      var if846 = GraceDone;
      setLineNumber(308);    // compilenode identifier
      var call848 = callmethodChecked(var_util, "dynamicModule", [0]);
      var opresult850 = callmethodChecked(call848, "||", [1], var_isDialect);
      if (Grace_isTrue(opresult850)) {
        setLineNumber(309);    // compilenode string
        var string851 = new GraceString(" --dynamic-module");
        var opresult854 = callmethodChecked(var_cmd, "++", [1], string851);
        var_cmd = opresult854;
        if846 = GraceDone;
      }
      var if855 = GraceDone;
      setLineNumber(311);    // compilenode identifier
      var call856 = callmethodChecked(var_util, "importDynamic", [0]);
      if (Grace_isTrue(call856)) {
        setLineNumber(312);    // compilenode string
        var string857 = new GraceString(" --import-dynamic");
        var opresult860 = callmethodChecked(var_cmd, "++", [1], string857);
        var_cmd = opresult860;
        if855 = GraceDone;
      }
      setLineNumber(314);    // compilenode string
      var string861 = new GraceString(" -XNoMain");
      var opresult864 = callmethodChecked(var_cmd, "++", [1], string861);
      var_cmd = opresult864;
      if840 = GraceDone;
    }
    setLineNumber(316);    // compilenode identifier
    var call865 = callmethodChecked(var_util, "gracelibPath", [0]);
    var string867 = new GraceString(" --gracelib ");
    var opresult870 = callmethodChecked(var_cmd, "++", [1], string867);
    var opresult872 = callmethodChecked(opresult870, "++", [1], call865);
    var_cmd = opresult872;
    setLineNumber(317);    // compilenode identifier
    var call873 = callmethodChecked(var_util, "commandLineExtensions", [0]);
    var opresult876 = callmethodChecked(var_cmd, "++", [1], call873);
    var_cmd = opresult876;
    setLineNumber(318);    // compilenode string
    var string877 = new GraceString("\"");
    var string880 = new GraceString(" --noexec \"");
    var call882 = callmethodChecked(var_util, "target", [0]);
    var string884 = new GraceString(" --target ");
    var string887 = new GraceString("");
    var opresult889 = callmethodChecked(string887, "++", [1], var_cmd);
    var opresult891 = callmethodChecked(opresult889, "++", [1], string884);
    var opresult893 = callmethodChecked(opresult891, "++", [1], call882);
    var opresult895 = callmethodChecked(opresult893, "++", [1], string880);
    var opresult897 = callmethodChecked(opresult895, "++", [1], var_sourceFile);
    var opresult899 = callmethodChecked(opresult897, "++", [1], string877);
    var_cmd = opresult899;
    setLineNumber(319);    // compilenode string
    var string900 = new GraceString("");
    var string903 = new GraceString("executing sub-compile ");
    var opresult905 = callmethodChecked(string903, "++", [1], var_cmd);
    var opresult907 = callmethodChecked(opresult905, "++", [1], string900);
    var call908 = callmethodChecked(var_util, "log()verbose", [1, 1], new GraceNum(50), opresult907);
    setLineNumber(320);    // compilenode string
    var string909 = new GraceString("bash");
    var string911 = new GraceString("-c");
    var array910 = new PrimitiveGraceList([string911, var_cmd]);
    var call912 = callmethodChecked(var_io, "spawn", [2], string909, array910);
    var call913 = callmethodChecked(call912, "status", [0]);
    var var_exitCode = call913;
    var if914 = GraceDone;
    setLineNumber(321);    // compilenode identifier
    var opresult917 = callmethodChecked(var_exitCode, "\u2260", [1], new GraceNum(0));
    if (Grace_isTrue(opresult917)) {
      setLineNumber(322);    // compilenode string
      var string918 = new GraceString(").");
      var string921 = new GraceString(" (");
      var string924 = new GraceString("Failed to compile imported module ");
      var opresult926 = callmethodChecked(string924, "++", [1], var_nm);
      var opresult928 = callmethodChecked(opresult926, "++", [1], string921);
      var opresult930 = callmethodChecked(opresult928, "++", [1], var_exitCode);
      var opresult932 = callmethodChecked(opresult930, "++", [1], string918);
      var call933 = callmethodChecked(var_errormessages, "error()atLine", [1, 1], opresult932, var_line);
      if914 = call933;
    }
    return if914;
  };
  func723.confidential = true;
  func723.paramCounts = [1, 1, 1, 2];
  this.methods["compileModule()inFile()forDialect()atRange"] = func723;
  func723.definitionLine = 274;
  func723.definitionModule = "xmodule";
  setLineNumber(327);    // compilenode method
  var func934 = function(argcv) {    // method parseGCT(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_moduleName = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for parseGCT(1)"));
    setModuleName("xmodule");
    setLineNumber(328);    // compilenode block
    var block935 = new GraceBlock(this, 328, 0);
    block935.real = function() {
      setLineNumber(329);    // compilenode identifier
      var call936 = callmethodChecked(var_util, "outDir", [0]);
      onSelf = true;
      var call937 = callmethodChecked(this, "parseGCT()sourceDir", [1, 1], var_moduleName, call936);
      return call937;
    };
    setLineNumber(328);    // compilenode identifier
    var call938 = callmethodChecked(var_gctCache, "at()ifAbsent", [1, 1], var_moduleName, block935);
    return call938;
  };
  func934.paramCounts = [1];
  this.methods["parseGCT"] = func934;
  func934.definitionLine = 327;
  func934.definitionModule = "xmodule";
  setLineNumber(333);    // compilenode method
  var func939 = function(argcv) {    // method parseGCT(1)sourceDir(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_moduleName = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for parseGCT (arg list 1) of parseGCT(1)sourceDir(1)"));
    var var_dir = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for sourceDir (arg list 2) of parseGCT(1)sourceDir(1)"));
    setModuleName("xmodule");
    setLineNumber(334);    // compilenode call
    var call940 = callmethodChecked(var_prelude, "emptyDictionary", [0]);
    var var_gctData = call940;
    setLineNumber(335);    // compilenode identifier
    var call941 = callmethodChecked(var_moduleName, "size", [0]);
    var var_sz = call941;
    setLineNumber(336);    // compilenode string
    var string942 = new GraceString(".gct");
    var call943 = callmethodChecked(var_filePath, "fromString", [1], var_moduleName);
    var call944 = callmethodChecked(call943, "setExtension", [1], string942);
    var var_sought = call944;
    setLineNumber(338);    // compilenode string
    var string945 = new GraceString("GRACE_MODULE_PATH");
    var call946 = callmethodChecked(var_sys, "environ", [0]);
    var call947 = callmethodChecked(call946, "at", [1], string945);
    var block948 = new GraceBlock(this, 338, 1);
    setLineNumber(1);    // compilenode identifier
    block948.real = function(var_l) {
      setLineNumber(339);    // compilenode string
      var string949 = new GraceString(".");
      var string952 = new GraceString("; looked in ");
      var string955 = new GraceString(" for module ");
      var string958 = new GraceString("Can't find file ");
      var opresult960 = callmethodChecked(string958, "++", [1], var_sought);
      var opresult962 = callmethodChecked(opresult960, "++", [1], string955);
      var opresult964 = callmethodChecked(opresult962, "++", [1], var_moduleName);
      var opresult966 = callmethodChecked(opresult964, "++", [1], string952);
      var opresult968 = callmethodChecked(opresult966, "++", [1], var_l);
      var opresult970 = callmethodChecked(opresult968, "++", [1], string949);
      var call971 = callmethodChecked(var_util, "log()verbose", [1, 1], new GraceNum(80), opresult970);
      setLineNumber(340);    // compilenode identifier
      var call972 = callmethodChecked(var_gctCache, "at()put", [1, 1], var_moduleName, var_gctData);
      setLineNumber(341);    // compilenode identifier
      throw new ReturnException(var_gctData, returnTarget);
      return undefined;
    };
    setLineNumber(337);    // compilenode identifier
    var call973 = callmethodChecked(var_util, "file()on()orPath()otherwise", [1, 1, 1, 1], var_sought, var_dir, call947, block948);
    var var_filename = call973;
    setLineNumber(343);    // compilenode string
    var string974 = new GraceString("r");
    var call975 = callmethodChecked(var_io, "open", [2], var_filename, string974);
    var var_tfp = call975;
    setLineNumber(344);    // compilenode string
    var string976 = new GraceString("");
    var var_key = string976;
    setLineNumber(345);    // compilenode block
    var block977 = new GraceBlock(this, 345, 0);
    block977.real = function() {
      var call978 = callmethodChecked(var_tfp, "eof", [0]);
      var call979 = callmethodChecked(call978, "prefix!", [0]);
      return call979;
    };
    var block980 = new GraceBlock(this, 345, 0);
    block980.real = function() {
      setLineNumber(346);    // compilenode identifier
      var call981 = callmethodChecked(var_tfp, "getline", [0]);
      var var_line = call981;
      var if982 = GraceDone;
      setLineNumber(347);    // compilenode identifier
      var call984 = callmethodChecked(var_line, "size", [0]);
      var opresult986 = callmethodChecked(call984, ">", [1], new GraceNum(0));
      if (Grace_isTrue(opresult986)) {
        var if987 = GraceDone;
        setLineNumber(348);    // compilenode string
        var string988 = new GraceString(" ");
        var call990 = callmethodChecked(var_line, "at", [1], new GraceNum(1));
        var opresult992 = callmethodChecked(call990, "\u2260", [1], string988);
        if (Grace_isTrue(opresult992)) {
          setLineNumber(349);    // compilenode identifier
          var call994 = callmethodChecked(var_line, "size", [0]);
          var diff996 = callmethodChecked(call994, "-", [1], new GraceNum(1));
          var call997 = callmethodChecked(var_line, "substringFrom()to", [1, 1], new GraceNum(1), diff996);
          var_key = call997;
          setLineNumber(350);    // compilenode array
          var array998 = new PrimitiveGraceList([]);
          var call999 = callmethodChecked(var_gctData, "at()put", [1, 1], var_key, array998);
          if987 = call999;
        } else {
          setLineNumber(352);    // compilenode identifier
          var call1000 = callmethodChecked(var_line, "size", [0]);
          var call1001 = callmethodChecked(var_line, "substringFrom()to", [1, 1], new GraceNum(2), call1000);
          var call1002 = callmethodChecked(var_gctData, "at", [1], var_key);
          var call1003 = callmethodChecked(call1002, "addLast", [1], call1001);
          if987 = call1003;
        }
        if982 = if987;
      }
      return if982;
    };
    var call1004 = callmethodChecked(var_prelude, "while()do", [1, 1], block977, block980);
    setLineNumber(356);    // compilenode identifier
    var call1005 = callmethodChecked(var_tfp, "close", [0]);
    setLineNumber(357);    // compilenode identifier
    var call1006 = callmethodChecked(var_gctCache, "at()put", [1, 1], var_moduleName, var_gctData);
    setLineNumber(358);    // compilenode identifier
    return var_gctData;
  };
  func939.confidential = true;
  func939.paramCounts = [1, 1];
  this.methods["parseGCT()sourceDir"] = func939;
  func939.definitionLine = 333;
  func939.definitionModule = "xmodule";
  setLineNumber(361);    // compilenode method
  var func1007 = function(argcv) {    // method writeGCT(2)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_modname = arguments[curarg];
    curarg++;
    var var_dict = arguments[curarg];
    curarg++;
    if (argcv[0] !== 2)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for writeGCT(2)"));
    setModuleName("xmodule");
    setLineNumber(362);    // compilenode string
    var string1008 = new GraceString(".gct");
    var string1011 = new GraceString("");
    var call1013 = callmethodChecked(var_util, "outDir", [0]);
    var string1015 = new GraceString("");
    var opresult1017 = callmethodChecked(string1015, "++", [1], call1013);
    var opresult1019 = callmethodChecked(opresult1017, "++", [1], string1011);
    var opresult1021 = callmethodChecked(opresult1019, "++", [1], var_modname);
    var opresult1023 = callmethodChecked(opresult1021, "++", [1], string1008);
    var string1024 = new GraceString("w");
    var call1025 = callmethodChecked(var_io, "open", [2], opresult1023, string1024);
    var var_fp = call1025;
    setLineNumber(363);    // compilenode block
    var block1026 = new GraceBlock(this, 363, 1);
    setLineNumber(1);    // compilenode identifier
    block1026.real = function(var_b) {
      setLineNumber(364);    // compilenode string
      var string1027 = new GraceString(":\n");
      var call1029 = callmethodChecked(var_b, "key", [0]);
      var string1031 = new GraceString("");
      var opresult1033 = callmethodChecked(string1031, "++", [1], call1029);
      var opresult1035 = callmethodChecked(opresult1033, "++", [1], string1027);
      var call1036 = callmethodChecked(var_fp, "write", [1], opresult1035);
      setLineNumber(365);    // compilenode block
      var block1037 = new GraceBlock(this, 365, 1);
      setLineNumber(1);    // compilenode identifier
      block1037.real = function(var_v) {
        setLineNumber(366);    // compilenode string
        var string1038 = new GraceString("\n");
        var string1041 = new GraceString(" ");
        var opresult1043 = callmethodChecked(string1041, "++", [1], var_v);
        var opresult1045 = callmethodChecked(opresult1043, "++", [1], string1038);
        var call1046 = callmethodChecked(var_fp, "write", [1], opresult1045);
        return call1046;
      };
      setLineNumber(365);    // compilenode identifier
      var call1047 = callmethodChecked(var_b, "value", [0]);
      var call1048 = callmethodChecked(call1047, "asList", [0]);
      var call1049 = callmethodChecked(call1048, "sort", [0]);
      var call1050 = callmethodChecked(call1049, "do", [1], block1037);
      return call1050;
    };
    setLineNumber(363);    // compilenode identifier
    var call1051 = callmethodChecked(var_dict, "bindings", [0]);
    var call1052 = callmethodChecked(call1051, "asList", [0]);
    var call1053 = callmethodChecked(call1052, "sortBy", [1], var_keyCompare);
    var call1054 = callmethodChecked(call1053, "do", [1], block1026);
    setLineNumber(369);    // compilenode identifier
    var call1055 = callmethodChecked(var_fp, "close", [0]);
    setLineNumber(370);    // compilenode identifier
    var call1056 = callmethodChecked(var_gctCache, "at()put", [1, 1], var_modname, var_dict);
    return call1056;
  };
  func1007.confidential = true;
  func1007.paramCounts = [2];
  this.methods["writeGCT"] = func1007;
  func1007.definitionLine = 361;
  func1007.definitionModule = "xmodule";
  setLineNumber(373);    // compilenode method
  var func1057 = function(argcv) {    // method writeGctForModule(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_moduleObject = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for writeGctForModule(1)"));
    setModuleName("xmodule");
    setLineNumber(374);    // compilenode identifier
    var call1058 = callmethodChecked(var_moduleObject, "name", [0]);
    onSelf = true;
    var call1059 = callmethodChecked(this, "generateGctForModule", [1], var_moduleObject);
    onSelf = true;
    var call1060 = callmethodChecked(this, "writeGCT", [2], call1058, call1059);
    return call1060;
  };
  func1057.paramCounts = [1];
  this.methods["writeGctForModule"] = func1057;
  func1057.definitionLine = 373;
  func1057.definitionModule = "xmodule";
  setLineNumber(377);    // compilenode method
  var func1061 = function(argcv) {    // method gctAsString(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_gctDict = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for gctAsString(1)"));
    setModuleName("xmodule");
    setLineNumber(378);    // compilenode string
    var string1062 = new GraceString("");
    var var_ret = string1062;
    setLineNumber(379);    // compilenode block
    var block1063 = new GraceBlock(this, 379, 1);
    setLineNumber(1);    // compilenode identifier
    block1063.real = function(var_b) {
      setLineNumber(380);    // compilenode string
      var string1064 = new GraceString(":\n");
      var call1066 = callmethodChecked(var_b, "key", [0]);
      var string1068 = new GraceString("");
      var opresult1070 = callmethodChecked(string1068, "++", [1], call1066);
      var opresult1072 = callmethodChecked(opresult1070, "++", [1], string1064);
      var opresult1075 = callmethodChecked(var_ret, "++", [1], opresult1072);
      var_ret = opresult1075;
      setLineNumber(381);    // compilenode block
      var block1076 = new GraceBlock(this, 381, 1);
      setLineNumber(1);    // compilenode identifier
      block1076.real = function(var_v) {
        setLineNumber(382);    // compilenode string
        var string1077 = new GraceString("\n");
        var string1080 = new GraceString(" ");
        var opresult1082 = callmethodChecked(string1080, "++", [1], var_v);
        var opresult1084 = callmethodChecked(opresult1082, "++", [1], string1077);
        var opresult1087 = callmethodChecked(var_ret, "++", [1], opresult1084);
        var_ret = opresult1087;
        return GraceDone;
      };
      setLineNumber(381);    // compilenode identifier
      var call1088 = callmethodChecked(var_b, "value", [0]);
      var call1089 = callmethodChecked(call1088, "asList", [0]);
      var call1090 = callmethodChecked(call1089, "sort", [0]);
      var call1091 = callmethodChecked(call1090, "do", [1], block1076);
      return call1091;
    };
    setLineNumber(379);    // compilenode identifier
    var call1092 = callmethodChecked(var_gctDict, "bindings", [0]);
    var call1093 = callmethodChecked(call1092, "asList", [0]);
    var call1094 = callmethodChecked(call1093, "sortBy", [1], var_keyCompare);
    var call1095 = callmethodChecked(call1094, "do", [1], block1063);
    setLineNumber(385);    // compilenode identifier
    return var_ret;
  };
  func1061.paramCounts = [1];
  this.methods["gctAsString"] = func1061;
  func1061.definitionLine = 377;
  func1061.definitionModule = "xmodule";
  setLineNumber(461);    // compilenode method
  var func1096 = function(argcv) {    // method generateGctForModule(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_moduleObject = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for generateGctForModule(1)"));
    setModuleName("xmodule");
    setLineNumber(462);    // compilenode identifier
    onSelf = true;
    var call1097 = callmethodChecked(this, "buildGctFor", [1], var_moduleObject);
    var var_gct = call1097;
    setLineNumber(463);    // compilenode identifier
    onSelf = true;
    var call1098 = callmethodChecked(this, "addFreshMethodsOf()to", [1, 1], var_moduleObject, var_gct);
    setLineNumber(464);    // compilenode identifier
    return var_gct;
  };
  func1096.confidential = true;
  func1096.paramCounts = [1];
  this.methods["generateGctForModule"] = func1096;
  func1096.definitionLine = 461;
  func1096.definitionModule = "xmodule";
  setLineNumber(467);    // compilenode method
  var func1099 = function(argcv) {    // method buildGctFor(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_module = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for buildGctFor(1)"));
    setModuleName("xmodule");
    setLineNumber(468);    // compilenode call
    var call1100 = callmethodChecked(var_prelude, "emptyDictionary", [0]);
    var var_gct = call1100;
    setLineNumber(469);    // compilenode call
    var call1101 = callmethodChecked(var_prelude, "emptyList", [0]);
    var var_classes = call1101;
    setLineNumber(470);    // compilenode call
    var call1102 = callmethodChecked(var_prelude, "emptyList", [0]);
    var var_confidentials = call1102;
    setLineNumber(471);    // compilenode call
    var call1103 = callmethodChecked(var_prelude, "emptyList", [0]);
    var var_meths = call1103;
    setLineNumber(472);    // compilenode call
    var call1104 = callmethodChecked(var_prelude, "emptyList", [0]);
    var var_types = call1104;
    setLineNumber(473);    // compilenode identifier
    var var_theDialect = GraceFalse;
    setLineNumber(474);    // compilenode block
    var block1105 = new GraceBlock(this, 474, 1);
    setLineNumber(1);    // compilenode identifier
    block1105.real = function(var_p) {
      setLineNumber(475);    // compilenode identifier
      var call1106 = callmethodChecked(var_p, "providedNames", [0]);
      var call1107 = callmethodChecked(var_meths, "addAll", [1], call1106);
      return call1107;
    };
    setLineNumber(474);    // compilenode identifier
    var call1108 = callmethodChecked(var_module, "parentsDo", [1], block1105);
    setLineNumber(477);    // compilenode identifier
    var call1109 = callmethodChecked(var_module, "value", [0]);
    var block1110 = new GraceBlock(this, 477, 1);
    setLineNumber(1);    // compilenode identifier
    block1110.real = function(var_v) {
      var if1111 = GraceDone;
      setLineNumber(478);    // compilenode string
      var string1112 = new GraceString("vardec");
      var call1114 = callmethodChecked(var_v, "kind", [0]);
      var opresult1116 = callmethodChecked(call1114, "==", [1], string1112);
      if (Grace_isTrue(opresult1116)) {
        var if1117 = GraceDone;
        setLineNumber(479);    // compilenode identifier
        var call1118 = callmethodChecked(var_v, "isReadable", [0]);
        if (Grace_isTrue(call1118)) {
          setLineNumber(480);    // compilenode identifier
          var call1119 = callmethodChecked(var_v, "name", [0]);
          var call1120 = callmethodChecked(call1119, "value", [0]);
          var call1121 = callmethodChecked(var_meths, "push", [1], call1120);
          if1117 = call1121;
        }
        var if1122 = GraceDone;
        setLineNumber(482);    // compilenode identifier
        var call1123 = callmethodChecked(var_v, "isWritable", [0]);
        if (Grace_isTrue(call1123)) {
          setLineNumber(483);    // compilenode string
          var string1124 = new GraceString(":=");
          var call1126 = callmethodChecked(var_v, "name", [0]);
          var call1127 = callmethodChecked(call1126, "value", [0]);
          var opresult1129 = callmethodChecked(call1127, "++", [1], string1124);
          var call1130 = callmethodChecked(var_meths, "push", [1], opresult1129);
          if1122 = call1130;
        }
        if1111 = if1122;
      } else {
        var if1131 = GraceDone;
        setLineNumber(485);    // compilenode string
        var string1132 = new GraceString("method");
        var call1134 = callmethodChecked(var_v, "kind", [0]);
        var opresult1136 = callmethodChecked(call1134, "==", [1], string1132);
        if (Grace_isTrue(opresult1136)) {
          var if1137 = GraceDone;
          setLineNumber(486);    // compilenode identifier
          var call1138 = callmethodChecked(var_v, "isPublic", [0]);
          if (Grace_isTrue(call1138)) {
            setLineNumber(487);    // compilenode identifier
            var call1139 = callmethodChecked(var_v, "nameString", [0]);
            var call1140 = callmethodChecked(var_meths, "push", [1], call1139);
            if1137 = call1140;
          } else {
            setLineNumber(489);    // compilenode identifier
            var call1141 = callmethodChecked(var_v, "nameString", [0]);
            var call1142 = callmethodChecked(var_confidentials, "push", [1], call1141);
            if1137 = call1142;
          }
          if1131 = if1137;
        } else {
          var if1143 = GraceDone;
          setLineNumber(491);    // compilenode string
          var string1144 = new GraceString("typedec");
          var call1146 = callmethodChecked(var_v, "kind", [0]);
          var opresult1148 = callmethodChecked(call1146, "==", [1], string1144);
          if (Grace_isTrue(opresult1148)) {
            var if1149 = GraceDone;
            setLineNumber(492);    // compilenode identifier
            var call1150 = callmethodChecked(var_v, "isPublic", [0]);
            if (Grace_isTrue(call1150)) {
              setLineNumber(493);    // compilenode identifier
              var call1151 = callmethodChecked(var_v, "nameString", [0]);
              var call1152 = callmethodChecked(var_meths, "push", [1], call1151);
              setLineNumber(494);    // compilenode identifier
              var call1153 = callmethodChecked(var_v, "name", [0]);
              var call1154 = callmethodChecked(call1153, "value", [0]);
              var call1155 = callmethodChecked(var_types, "push", [1], call1154);
              setLineNumber(495);    // compilenode array
              var array1156 = new PrimitiveGraceList([]);
              var_methodtypes = array1156;
              setLineNumber(496);    // compilenode identifier
              var call1157 = callmethodChecked(var_v, "accept", [1], var_typeVisitor);
              setLineNumber(497);    // compilenode identifier
              var call1158 = callmethodChecked(var_v, "name", [0]);
              var call1159 = callmethodChecked(call1158, "toGrace", [1], new GraceNum(0));
              var var_typename = call1159;
              var if1160 = GraceDone;
              setLineNumber(498);    // compilenode identifier
              var call1162 = callmethodChecked(var_v, "typeParams", [0]);
              var opresult1164 = callmethodChecked(call1162, "\u2260", [1], GraceFalse);
              if (Grace_isTrue(opresult1164)) {
                setLineNumber(499);    // compilenode identifier
                var call1165 = callmethodChecked(var_v, "typeParams", [0]);
                var opresult1168 = callmethodChecked(var_typename, "++", [1], call1165);
                var_typename = opresult1168;
                if1160 = GraceDone;
              }
              setLineNumber(501);    // compilenode string
              var string1169 = new GraceString("");
              var string1172 = new GraceString("methodtypes-of:");
              var opresult1174 = callmethodChecked(string1172, "++", [1], var_typename);
              var opresult1176 = callmethodChecked(opresult1174, "++", [1], string1169);
              var call1177 = callmethodChecked(var_gct, "at()put", [1, 1], opresult1176, var_methodtypes);
              if1149 = call1177;
            } else {
              setLineNumber(503);    // compilenode identifier
              var call1178 = callmethodChecked(var_v, "nameString", [0]);
              var call1179 = callmethodChecked(var_confidentials, "push", [1], call1178);
              if1149 = call1179;
            }
            if1143 = if1149;
          } else {
            var if1180 = GraceDone;
            setLineNumber(505);    // compilenode string
            var string1181 = new GraceString("defdec");
            var call1183 = callmethodChecked(var_v, "kind", [0]);
            var opresult1185 = callmethodChecked(call1183, "==", [1], string1181);
            if (Grace_isTrue(opresult1185)) {
              var if1186 = GraceDone;
              setLineNumber(506);    // compilenode identifier
              var call1187 = callmethodChecked(var_v, "isPublic", [0]);
              if (Grace_isTrue(call1187)) {
                setLineNumber(507);    // compilenode identifier
                var call1188 = callmethodChecked(var_v, "nameString", [0]);
                var call1189 = callmethodChecked(var_meths, "push", [1], call1188);
                if1186 = call1189;
              }
              var if1190 = GraceDone;
              setLineNumber(509);    // compilenode string
              var string1191 = new GraceString("parent");
              var call1192 = callmethodChecked(var_ast, "findAnnotation", [2], var_v, string1191);
              if (Grace_isTrue(call1192)) {
                setLineNumber(510);    // compilenode block
                var block1193 = new GraceBlock(this, 510, 1);
                setLineNumber(1);    // compilenode identifier
                block1193.real = function(var_m) {
                  setLineNumber(510);    // compilenode identifier
                  var call1194 = callmethodChecked(var_meths, "push", [1], var_m);
                  return call1194;
                };
                var call1195 = callmethodChecked(var_v, "scope", [0]);
                var call1196 = callmethodChecked(call1195, "elements", [0]);
                var call1197 = callmethodChecked(call1196, "keysDo", [1], block1193);
                if1190 = call1197;
              }
              var if1198 = GraceDone;
              setLineNumber(512);    // compilenode identifier
              var call1199 = callmethodChecked(var_v, "returnsObject", [0]);
              if (Grace_isTrue(call1199)) {
                setLineNumber(513);    // compilenode identifier
                var call1200 = callmethodChecked(var_v, "value", [0]);
                var var_ob = call1200;
                setLineNumber(514);    // compilenode array
                var array1201 = new PrimitiveGraceList([]);
                var var_obConstructors = array1201;
                setLineNumber(515);    // compilenode identifier
                var call1202 = callmethodChecked(var_ob, "value", [0]);
                var block1203 = new GraceBlock(this, 515, 1);
                setLineNumber(1);    // compilenode identifier
                block1203.real = function(var_nd) {
                  var if1204 = GraceDone;
                  setLineNumber(516);    // compilenode identifier
                  var call1205 = callmethodChecked(var_nd, "isClass", [0]);
                  if (Grace_isTrue(call1205)) {
                    setLineNumber(517);    // compilenode identifier
                    var call1206 = callmethodChecked(var_nd, "nameString", [0]);
                    var var_factMethNm = call1206;
                    setLineNumber(518);    // compilenode identifier
                    var call1207 = callmethodChecked(var_obConstructors, "push", [1], var_factMethNm);
                    setLineNumber(519);    // compilenode call
                    var call1208 = callmethodChecked(var_prelude, "emptyList", [0]);
                    var var_exportedMethods = call1208;
                    setLineNumber(520);    // compilenode block
                    var block1209 = new GraceBlock(this, 520, 2);
                    setLineNumber(1);    // compilenode identifier
                    block1209.real = function(var_key, var_knd) {
                      var if1210 = GraceDone;
                      setLineNumber(521);    // compilenode identifier
                      var call1211 = callmethodChecked(var_knd, "forGct", [0]);
                      if (Grace_isTrue(call1211)) {
                        var call1212 = callmethodChecked(var_exportedMethods, "add", [1], var_key);
                        if1210 = call1212;
                      }
                      return if1210;
                    };
                    setLineNumber(520);    // compilenode identifier
                    var call1213 = callmethodChecked(var_ob, "scope", [0]);
                    var call1214 = callmethodChecked(call1213, "getScope", [1], var_factMethNm);
                    var call1215 = callmethodChecked(call1214, "keysAndKindsDo", [1], block1209);
                    setLineNumber(523);    // compilenode string
                    var string1216 = new GraceString("");
                    var string1219 = new GraceString(".");
                    var call1221 = callmethodChecked(var_v, "name", [0]);
                    var call1222 = callmethodChecked(call1221, "value", [0]);
                    var string1224 = new GraceString("methods-of:");
                    var opresult1226 = callmethodChecked(string1224, "++", [1], call1222);
                    var opresult1228 = callmethodChecked(opresult1226, "++", [1], string1219);
                    var opresult1230 = callmethodChecked(opresult1228, "++", [1], var_factMethNm);
                    var opresult1232 = callmethodChecked(opresult1230, "++", [1], string1216);
                    setLineNumber(524);    // compilenode identifier
                    var call1233 = callmethodChecked(var_exportedMethods, "sort", [0]);
                    setLineNumber(523);    // compilenode identifier
                    var call1234 = callmethodChecked(var_gct, "at()put", [1, 1], opresult1232, call1233);
                    if1204 = call1234;
                  }
                  return if1204;
                };
                var call1235 = callmethodChecked(var_prelude, "for()do", [1, 1], call1202, block1203);
                var if1236 = GraceDone;
                setLineNumber(527);    // compilenode identifier
                var call1238 = callmethodChecked(var_obConstructors, "size", [0]);
                var opresult1240 = callmethodChecked(call1238, ">", [1], new GraceNum(0));
                if (Grace_isTrue(opresult1240)) {
                  setLineNumber(528);    // compilenode string
                  var string1241 = new GraceString("");
                  var call1243 = callmethodChecked(var_v, "name", [0]);
                  var call1244 = callmethodChecked(call1243, "value", [0]);
                  var string1246 = new GraceString("constructors-of:");
                  var opresult1248 = callmethodChecked(string1246, "++", [1], call1244);
                  var opresult1250 = callmethodChecked(opresult1248, "++", [1], string1241);
                  var call1251 = callmethodChecked(var_gct, "at()put", [1, 1], opresult1250, var_obConstructors);
                  setLineNumber(530);    // compilenode identifier
                  var call1252 = callmethodChecked(var_v, "name", [0]);
                  var call1253 = callmethodChecked(call1252, "value", [0]);
                  var call1254 = callmethodChecked(var_classes, "push", [1], call1253);
                  if1236 = call1254;
                }
                if1198 = if1236;
              }
              if1180 = if1198;
            } else {
              var if1255 = GraceDone;
              setLineNumber(533);    // compilenode string
              var string1256 = new GraceString("dialect");
              var call1258 = callmethodChecked(var_v, "kind", [0]);
              var opresult1260 = callmethodChecked(call1258, "==", [1], string1256);
              if (Grace_isTrue(opresult1260)) {
                setLineNumber(534);    // compilenode identifier
                var call1261 = callmethodChecked(var_v, "value", [0]);
                var_theDialect = call1261;
                if1255 = GraceDone;
              }
              if1180 = if1255;
            }
            if1143 = if1180;
          }
          if1131 = if1143;
        }
        if1111 = if1131;
      }
      return if1111;
    };
    var call1262 = callmethodChecked(var_prelude, "for()do", [1, 1], call1109, block1110);
    setLineNumber(537);    // compilenode string
    var string1263 = new GraceString("classes");
    var call1264 = callmethodChecked(var_classes, "sort", [0]);
    var call1265 = callmethodChecked(var_gct, "at()put", [1, 1], string1263, call1264);
    setLineNumber(538);    // compilenode string
    var string1266 = new GraceString("confidential");
    var call1267 = callmethodChecked(var_confidentials, "sort", [0]);
    var call1268 = callmethodChecked(var_gct, "at()put", [1, 1], string1266, call1267);
    setLineNumber(539);    // compilenode string
    var string1269 = new GraceString("modules");
    var call1270 = callmethodChecked(var_module, "imports", [0]);
    var call1271 = callmethodChecked(call1270, "asList", [0]);
    var call1272 = callmethodChecked(call1271, "sorted", [0]);
    var call1273 = callmethodChecked(var_gct, "at()put", [1, 1], string1269, call1272);
    setLineNumber(540);    // compilenode string
    var string1274 = new GraceString("path");
    var call1276 = callmethodChecked(var_module, "name", [0]);
    var array1275 = new PrimitiveGraceList([call1276]);
    var call1277 = callmethodChecked(var_gct, "at()put", [1, 1], string1274, array1275);
    setLineNumber(541);    // compilenode string
    var string1278 = new GraceString("public");
    var call1279 = callmethodChecked(var_meths, "sort", [0]);
    var call1280 = callmethodChecked(var_gct, "at()put", [1, 1], string1278, call1279);
    setLineNumber(542);    // compilenode string
    var string1281 = new GraceString("types");
    var call1282 = callmethodChecked(var_types, "sort", [0]);
    var call1283 = callmethodChecked(var_gct, "at()put", [1, 1], string1281, call1282);
    var if1284 = GraceDone;
    setLineNumber(543);    // compilenode identifier
    var opresult1287 = callmethodChecked(GraceFalse, "\u2260", [1], var_theDialect);
    if (Grace_isTrue(opresult1287)) {
      setLineNumber(544);    // compilenode string
      var string1288 = new GraceString("dialect");
      var array1289 = new PrimitiveGraceList([var_theDialect]);
      var call1290 = callmethodChecked(var_gct, "at()put", [1, 1], string1288, array1289);
      if1284 = call1290;
    }
    setLineNumber(546);    // compilenode identifier
    return var_gct;
  };
  func1099.paramCounts = [1];
  this.methods["buildGctFor"] = func1099;
  func1099.definitionLine = 467;
  func1099.definitionModule = "xmodule";
  setLineNumber(549);    // compilenode method
  var func1291 = function(argcv) {    // method addFreshMethodsOf(1)to(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_moduleObject = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addFreshMethodsOf (arg list 1) of addFreshMethodsOf(1)to(1)"));
    var var_gct = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for to (arg list 2) of addFreshMethodsOf(1)to(1)"));
    setModuleName("xmodule");
    setLineNumber(555);    // compilenode array
    var array1292 = new PrimitiveGraceList([]);
    var var_freshmeths = array1292;
    setLineNumber(556);    // compilenode identifier
    var call1293 = callmethodChecked(var_moduleObject, "value", [0]);
    var block1294 = new GraceBlock(this, 556, 1);
    setLineNumber(1);    // compilenode identifier
    block1294.real = function(var_val) {
      var if1295 = GraceDone;
      setLineNumber(557);    // compilenode identifier
      var call1296 = callmethodChecked(var_val, "isClass", [0]);
      if (Grace_isTrue(call1296)) {
        setLineNumber(558);    // compilenode identifier
        onSelf = true;
        var call1297 = callmethodChecked(this, "addFreshMethod()to()for", [1, 1, 1], var_val, var_freshmeths, var_gct);
        if1295 = call1297;
      }
      return if1295;
    };
    var call1298 = callmethodChecked(var_prelude, "for()do", [1, 1], call1293, block1294);
    setLineNumber(561);    // compilenode string
    var string1299 = new GraceString("fresh-methods");
    var call1300 = callmethodChecked(var_gct, "at()put", [1, 1], string1299, var_freshmeths);
    return call1300;
  };
  func1291.confidential = true;
  func1291.paramCounts = [1, 1];
  this.methods["addFreshMethodsOf()to"] = func1291;
  func1291.definitionLine = 549;
  func1291.definitionModule = "xmodule";
  setLineNumber(564);    // compilenode method
  var func1301 = function(argcv) {    // method addFreshMethod(1)to(1)for(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_val = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addFreshMethod (arg list 1) of addFreshMethod(1)to(1)for(1)"));
    var var_freshlist = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for to (arg list 2) of addFreshMethod(1)to(1)for(1)"));
    var var_gct = arguments[curarg];
    curarg++;
    if (argcv[2] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for for (arg list 3) of addFreshMethod(1)to(1)for(1)"));
    setModuleName("xmodule");
    setLineNumber(565);    // compilenode identifier
    var call1302 = callmethodChecked(var_val, "nameString", [0]);
    var call1303 = callmethodChecked(var_freshlist, "push", [1], call1302);
    setLineNumber(566);    // compilenode identifier
    var call1304 = callmethodChecked(var_val, "body", [0]);
    var call1305 = callmethodChecked(call1304, "last", [0]);
    var var_freshMethResult = call1305;
    var if1306 = GraceDone;
    setLineNumber(567);    // compilenode identifier
    var call1307 = callmethodChecked(var_freshMethResult, "isObject", [0]);
    if (Grace_isTrue(call1307)) {
      setLineNumber(568);    // compilenode call
      var call1308 = callmethodChecked(var_prelude, "emptyList", [0]);
      var var_exportedMethods = call1308;
      setLineNumber(569);    // compilenode block
      var block1309 = new GraceBlock(this, 569, 2);
      setLineNumber(1);    // compilenode identifier
      block1309.real = function(var_key, var_knd) {
        var if1310 = GraceDone;
        setLineNumber(570);    // compilenode identifier
        var call1311 = callmethodChecked(var_knd, "forGct", [0]);
        if (Grace_isTrue(call1311)) {
          var call1312 = callmethodChecked(var_exportedMethods, "add", [1], var_key);
          if1310 = call1312;
        }
        return if1310;
      };
      setLineNumber(569);    // compilenode identifier
      var call1313 = callmethodChecked(var_freshMethResult, "scope", [0]);
      var call1314 = callmethodChecked(call1313, "keysAndKindsDo", [1], block1309);
      setLineNumber(572);    // compilenode string
      var string1315 = new GraceString("");
      var call1317 = callmethodChecked(var_val, "nameString", [0]);
      var string1319 = new GraceString("fresh:");
      var opresult1321 = callmethodChecked(string1319, "++", [1], call1317);
      var opresult1323 = callmethodChecked(opresult1321, "++", [1], string1315);
      var call1324 = callmethodChecked(var_exportedMethods, "sort", [0]);
      var call1325 = callmethodChecked(var_gct, "at()put", [1, 1], opresult1323, call1324);
      if1306 = call1325;
    } else {
      var if1326 = GraceDone;
      setLineNumber(573);    // compilenode identifier
      var call1327 = callmethodChecked(var_freshMethResult, "isCall", [0]);
      if (Grace_isTrue(call1327)) {
        setLineNumber(576);    // compilenode identifier
        var call1328 = callmethodChecked(var_freshMethResult, "value", [0]);
        var call1329 = callmethodChecked(call1328, "in", [0]);
        var var_receiver = call1329;
        var if1330 = GraceDone;
        setLineNumber(577);    // compilenode block
        var block1331 = new GraceBlock(this, 577, 0);
        block1331.real = function() {
          setLineNumber(578);    // compilenode string
          var string1332 = new GraceString("self");
          var call1334 = callmethodChecked(var_freshMethResult, "with", [0]);
          var call1335 = callmethodChecked(call1334, "first", [0]);
          var call1336 = callmethodChecked(call1335, "args", [0]);
          var call1337 = callmethodChecked(call1336, "first", [0]);
          var call1338 = callmethodChecked(call1337, "nameString", [0]);
          var opresult1340 = callmethodChecked(call1338, "==", [1], string1332);
          return opresult1340;
        };
        setLineNumber(577);    // compilenode string
        var string1342 = new GraceString("prelude");
        var call1344 = callmethodChecked(var_receiver, "nameString", [0]);
        var opresult1346 = callmethodChecked(call1344, "==", [1], string1342);
        var opresult1348 = callmethodChecked(opresult1346, "&&", [1], block1331);
        if (Grace_isTrue(opresult1348)) {
          setLineNumber(579);    // compilenode string
          var string1349 = new GraceString("");
          var call1351 = callmethodChecked(var_val, "nameString", [0]);
          var string1353 = new GraceString("fresh:");
          var opresult1355 = callmethodChecked(string1353, "++", [1], call1351);
          var opresult1357 = callmethodChecked(opresult1355, "++", [1], string1349);
          var string1358 = new GraceString("public");
          var call1359 = callmethodChecked(var_gct, "at", [1], string1358);
          var call1360 = callmethodChecked(var_gct, "at()put", [1, 1], opresult1357, call1359);
          if1330 = call1360;
        } else {
          var if1361 = GraceDone;
          setLineNumber(580);    // compilenode string
          var string1362 = new GraceString("self");
          var call1364 = callmethodChecked(var_receiver, "nameString", [0]);
          var opresult1366 = callmethodChecked(call1364, "==", [1], string1362);
          if (Grace_isTrue(opresult1366)) {
            setLineNumber(581);    // compilenode string
            var string1367 = new GraceString("");
            var call1369 = callmethodChecked(var_val, "nameString", [0]);
            var string1371 = new GraceString("fresh:");
            var opresult1373 = callmethodChecked(string1371, "++", [1], call1369);
            var opresult1375 = callmethodChecked(opresult1373, "++", [1], string1367);
            var string1376 = new GraceString("public");
            var call1377 = callmethodChecked(var_gct, "at", [1], string1376);
            var call1378 = callmethodChecked(var_gct, "at()put", [1, 1], opresult1375, call1377);
            if1361 = call1378;
          } else {
            setLineNumber(584);    // compilenode string
            var string1379 = new GraceString("");
            var call1381 = callmethodChecked(var_freshMethResult, "pretty", [1], new GraceNum(0));
            var string1383 = new GraceString("unrecognized fresh method tail-call: ");
            var opresult1385 = callmethodChecked(string1383, "++", [1], call1381);
            var opresult1387 = callmethodChecked(opresult1385, "++", [1], string1379);
            setLineNumber(583);    // compilenode call
            var call1388 = callmethodChecked(var_prelude, "ProgrammingError", [0]);
            var call1389 = callmethodChecked(call1388, "raise", [1], opresult1387);
            if1361 = call1389;
          }
          if1330 = if1361;
        }
        if1326 = if1330;
      } else {
        setLineNumber(588);    // compilenode string
        var string1390 = new GraceString("");
        var call1392 = callmethodChecked(var_freshMethResult, "pretty", [1], new GraceNum(0));
        var string1394 = new GraceString("fresh method result of an unexpected kind: ");
        var opresult1396 = callmethodChecked(string1394, "++", [1], call1392);
        var opresult1398 = callmethodChecked(opresult1396, "++", [1], string1390);
        setLineNumber(587);    // compilenode call
        var call1399 = callmethodChecked(var_prelude, "ProgrammingError", [0]);
        var call1400 = callmethodChecked(call1399, "raise", [1], opresult1398);
        if1326 = call1400;
      }
      if1306 = if1326;
    }
    return if1306;
  };
  func1301.confidential = true;
  func1301.paramCounts = [1, 1, 1];
  this.methods["addFreshMethod()to()for"] = func1301;
  func1301.definitionLine = 564;
  func1301.definitionModule = "xmodule";
  setLineNumber(10);    // compilenode call
  var call1401 = callmethodChecked(var_prelude, "emptyDictionary", [0]);
  var var_gctCache = call1401;
  var func1402 = function(argcv) {    // method gctCache
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for gctCache"));
    setModuleName("xmodule");
    // gctCache is a simple accessor - elide try ... catch
    return var_gctCache;
  };
  func1402.paramCounts = [0];
  this.methods["gctCache"] = func1402;
  func1402.definitionLine = 10;
  func1402.definitionModule = "xmodule";
  this.methods["gctCache"].debug = "def";
  setLineNumber(11);    // compilenode block
  var block1403 = new GraceBlock(this, 11, 2);
  setLineNumber(1);    // compilenode identifier
  block1403.real = function(var_a, var_b) {
    setLineNumber(11);    // compilenode identifier
    var call1404 = callmethodChecked(var_b, "key", [0]);
    var call1405 = callmethodChecked(var_a, "key", [0]);
    var call1406 = callmethodChecked(call1405, "compare", [1], call1404);
    return call1406;
  };
  var var_keyCompare = block1403;
  var func1407 = function(argcv) {    // method keyCompare
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for keyCompare"));
    setModuleName("xmodule");
    // keyCompare is a simple accessor - elide try ... catch
    return var_keyCompare;
  };
  func1407.paramCounts = [0];
  this.methods["keyCompare"] = func1407;
  func1407.definitionLine = 11;
  func1407.definitionModule = "xmodule";
  this.methods["keyCompare"].debug = "def";
  setLineNumber(31);    // compilenode object
  var obj1408 = Grace_allocObject(GraceObject, "currentDialect");
  obj1408.definitionModule = "xmodule";
  obj1408.definitionLine = 31;
  obj1408.outer = this;
  var reader_xmodule_outer1409 = function() {
    return this.outer;
  };
  obj1408.methods["outer"] = reader_xmodule_outer1409;
  var obj_init_1408 = function() {
    var origSuperDepth = superDepth;
    superDepth = obj1408;
    setLineNumber(32);    // compilenode string
    var string1410 = new GraceString("standardGrace");
    obj1408.data["name"] = string1410;
    var reader_xmodule_name1411 = function() {
      return this.data["name"];
    };
    obj1408.methods["name"] = reader_xmodule_name1411;
    obj1408.data["name"] = string1410;
    var writer_xmodule_name1411 = function(argcv, o) {
      this.data["name"] = o;
      return GraceDone;
    };
    obj1408.methods["name:="] = writer_xmodule_name1411;
    obj1408.mutable = true;
    setLineNumber(33);    // compilenode identifier
    obj1408.data["moduleObject"] = var___95__prelude;
    var reader_xmodule_moduleObject1412 = function() {
      return this.data["moduleObject"];
    };
    obj1408.methods["moduleObject"] = reader_xmodule_moduleObject1412;
    obj1408.data["moduleObject"] = var___95__prelude;
    var writer_xmodule_moduleObject1412 = function(argcv, o) {
      this.data["moduleObject"] = o;
      return GraceDone;
    };
    obj1408.methods["moduleObject:="] = writer_xmodule_moduleObject1412;
    obj1408.mutable = true;
    setLineNumber(36);    // compilenode identifier
    obj1408.data["hasParseChecker"] = GraceFalse;
    var reader_xmodule_hasParseChecker1413 = function() {
      return this.data["hasParseChecker"];
    };
    obj1408.methods["hasParseChecker"] = reader_xmodule_hasParseChecker1413;
    obj1408.data["hasParseChecker"] = GraceFalse;
    var writer_xmodule_hasParseChecker1413 = function(argcv, o) {
      this.data["hasParseChecker"] = o;
      return GraceDone;
    };
    obj1408.methods["hasParseChecker:="] = writer_xmodule_hasParseChecker1413;
    obj1408.mutable = true;
    setLineNumber(37);    // compilenode identifier
    obj1408.data["hasAstChecker"] = GraceFalse;
    var reader_xmodule_hasAstChecker1414 = function() {
      return this.data["hasAstChecker"];
    };
    obj1408.methods["hasAstChecker"] = reader_xmodule_hasAstChecker1414;
    obj1408.data["hasAstChecker"] = GraceFalse;
    var writer_xmodule_hasAstChecker1414 = function(argcv, o) {
      this.data["hasAstChecker"] = o;
      return GraceDone;
    };
    obj1408.methods["hasAstChecker:="] = writer_xmodule_hasAstChecker1414;
    obj1408.mutable = true;
    setLineNumber(38);    // compilenode identifier
    obj1408.data["hasAtStart"] = GraceFalse;
    var reader_xmodule_hasAtStart1415 = function() {
      return this.data["hasAtStart"];
    };
    obj1408.methods["hasAtStart"] = reader_xmodule_hasAtStart1415;
    obj1408.data["hasAtStart"] = GraceFalse;
    var writer_xmodule_hasAtStart1415 = function(argcv, o) {
      this.data["hasAtStart"] = o;
      return GraceDone;
    };
    obj1408.methods["hasAtStart:="] = writer_xmodule_hasAtStart1415;
    obj1408.mutable = true;
    setLineNumber(39);    // compilenode identifier
    obj1408.data["hasAtEnd"] = GraceFalse;
    var reader_xmodule_hasAtEnd1416 = function() {
      return this.data["hasAtEnd"];
    };
    obj1408.methods["hasAtEnd"] = reader_xmodule_hasAtEnd1416;
    obj1408.data["hasAtEnd"] = GraceFalse;
    var writer_xmodule_hasAtEnd1416 = function(argcv, o) {
      this.data["hasAtEnd"] = o;
      return GraceDone;
    };
    obj1408.methods["hasAtEnd:="] = writer_xmodule_hasAtEnd1416;
    obj1408.mutable = true;
    superDepth = origSuperDepth;
  };
  obj_init_1408.apply(obj1408, []);
  var var_currentDialect = obj1408;
  setLineNumber(11);    // compilenode method
  var func1417 = function(argcv) {    // method currentDialect
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for currentDialect"));
    setModuleName("xmodule");
    // currentDialect is a simple accessor - elide try ... catch
    setLineNumber(31);    // compilenode identifier
    return var_currentDialect;
  };
  func1417.paramCounts = [0];
  this.methods["currentDialect"] = func1417;
  func1417.definitionLine = 11;
  func1417.definitionModule = "xmodule";
  this.methods["currentDialect"].debug = "def";
  setLineNumber(42);    // compilenode typedec
  // Type decl LinePos
  //   Type literal 
  var type1419 = new GraceType("LinePos");
  type1419.typeMethods.push("line");
  type1419.typeMethods.push("linePos");
  var var_LinePos = type1419;
  setLineNumber(11);    // compilenode method
  var func1420 = function(argcv) {    // method LinePos
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for LinePos"));
    setModuleName("xmodule");
    // LinePos is a simple accessor - elide try ... catch
    setLineNumber(42);    // compilenode identifier
    return var_LinePos;
  };
  func1420.paramCounts = [0];
  this.methods["LinePos"] = func1420;
  func1420.definitionLine = 11;
  func1420.definitionModule = "xmodule";
  setLineNumber(47);    // compilenode typedec
  // Type decl RangeSuggestions
  //   Type literal 
  var type1422 = new GraceType("RangeSuggestions");
  type1422.typeMethods.push("line");
  type1422.typeMethods.push("posStart");
  type1422.typeMethods.push("posEnd");
  type1422.typeMethods.push("suggestions");
  var var_RangeSuggestions = type1422;
  setLineNumber(11);    // compilenode method
  var func1423 = function(argcv) {    // method RangeSuggestions
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for RangeSuggestions"));
    setModuleName("xmodule");
    // RangeSuggestions is a simple accessor - elide try ... catch
    setLineNumber(47);    // compilenode identifier
    return var_RangeSuggestions;
  };
  func1423.paramCounts = [0];
  this.methods["RangeSuggestions"] = func1423;
  func1423.definitionLine = 11;
  func1423.definitionModule = "xmodule";
  setLineNumber(54);    // compilenode string
  var string1425 = new GraceString("mirrors");
  var string1426 = new GraceString("curl");
  var string1427 = new GraceString("unicode");
  var array1424 = new PrimitiveGraceList([string1425, string1426, string1427]);
  var call1428 = callmethodChecked(var_prelude, "set", [1], array1424);
  var var_dynamicCModules = call1428;
  setLineNumber(11);    // compilenode method
  var func1429 = function(argcv) {    // method dynamicCModules
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for dynamicCModules"));
    setModuleName("xmodule");
    // dynamicCModules is a simple accessor - elide try ... catch
    setLineNumber(54);    // compilenode identifier
    return var_dynamicCModules;
  };
  func1429.paramCounts = [0];
  this.methods["dynamicCModules"] = func1429;
  func1429.definitionLine = 11;
  func1429.definitionModule = "xmodule";
  this.methods["dynamicCModules"].debug = "def";
  setLineNumber(55);    // compilenode identifier
  var call1430 = callmethodChecked(var_util, "requiredModules", [0]);
  var var_imports = call1430;
  var func1431 = function(argcv) {    // method imports
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for imports"));
    setModuleName("xmodule");
    // imports is a simple accessor - elide try ... catch
    return var_imports;
  };
  func1431.paramCounts = [0];
  this.methods["imports"] = func1431;
  func1431.definitionLine = 55;
  func1431.definitionModule = "xmodule";
  this.methods["imports"].debug = "def";
  setLineNumber(388);    // compilenode array
  var array1432 = new PrimitiveGraceList([]);
  var var_methodtypes = array1432;
  setLineNumber(55);    // compilenode method
  var func1433 = function(argcv) {    // method methodtypes
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for methodtypes"));
    setModuleName("xmodule");
    // methodtypes is a simple accessor - elide try ... catch
    setLineNumber(388);    // compilenode identifier
    return var_methodtypes;
  };
  func1433.paramCounts = [0];
  this.methods["methodtypes"] = func1433;
  func1433.definitionLine = 55;
  func1433.definitionModule = "xmodule";
  setLineNumber(55);    // compilenode method
  var func1434 = function(argcv) {    // method methodtypes:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for methodtypes:=(1)"));
    setModuleName("xmodule");
    var_methodtypes = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func1434.paramCounts = [1];
  this.methods["methodtypes:="] = func1434;
  func1434.definitionLine = 55;
  func1434.definitionModule = "xmodule";
  this.methods["methodtypes"].debug = "var";
  setLineNumber(389);    // compilenode object
  var obj1435 = Grace_allocObject(null, "typeVisitor");
  obj1435.definitionModule = "xmodule";
  obj1435.definitionLine = 389;
  obj1435.outer = this;
  var reader_xmodule_outer1436 = function() {
    return this.outer;
  };
  obj1435.methods["outer"] = reader_xmodule_outer1436;
  var obj_init_1435 = function() {
    var origSuperDepth = superDepth;
    superDepth = obj1435;
    var func1437 = function(argcv) {    // method visitTypeLiteral(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_lit = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitTypeLiteral(1)"));
      setModuleName("xmodule");
      setLineNumber(393);    // compilenode identifier
      var call1438 = callmethodChecked(var_lit, "methods", [0]);
      var block1439 = new GraceBlock(this, 393, 1);
      setLineNumber(1);    // compilenode identifier
      block1439.real = function(var_meth) {
        setLineNumber(394);    // compilenode string
        var string1440 = new GraceString(" ");
        onSelf = true;
        var call1442 = callmethodChecked(this, "literalCount", [0]);
        var string1444 = new GraceString("");
        var opresult1446 = callmethodChecked(string1444, "++", [1], call1442);
        var opresult1448 = callmethodChecked(opresult1446, "++", [1], string1440);
        var var_mtstr = opresult1448;
        setLineNumber(395);    // compilenode identifier
        var call1449 = callmethodChecked(var_meth, "signature", [0]);
        var block1450 = new GraceBlock(this, 395, 1);
        setLineNumber(1);    // compilenode identifier
        block1450.real = function(var_part) {
          setLineNumber(396);    // compilenode identifier
          var call1451 = callmethodChecked(var_part, "name", [0]);
          var opresult1454 = callmethodChecked(var_mtstr, "++", [1], call1451);
          var_mtstr = opresult1454;
          var if1455 = GraceDone;
          setLineNumber(397);    // compilenode identifier
          var call1457 = callmethodChecked(var_part, "params", [0]);
          var call1458 = callmethodChecked(call1457, "size", [0]);
          var opresult1460 = callmethodChecked(call1458, ">", [1], new GraceNum(0));
          if (Grace_isTrue(opresult1460)) {
            setLineNumber(398);    // compilenode string
            var string1461 = new GraceString("(");
            var opresult1464 = callmethodChecked(var_mtstr, "++", [1], string1461);
            var_mtstr = opresult1464;
            setLineNumber(399);    // compilenode identifier
            var call1465 = callmethodChecked(var_part, "params", [0]);
            var call1466 = callmethodChecked(call1465, "indices", [0]);
            var block1467 = new GraceBlock(this, 399, 1);
            setLineNumber(1);    // compilenode identifier
            block1467.real = function(var_pnr) {
              setLineNumber(400);    // compilenode identifier
              var call1468 = callmethodChecked(var_part, "params", [0]);
              var call1469 = callmethodChecked(call1468, "at", [1], var_pnr);
              var var_p = call1469;
              var if1470 = GraceDone;
              setLineNumber(401);    // compilenode identifier
              var call1472 = callmethodChecked(var_p, "dtype", [0]);
              var opresult1474 = callmethodChecked(call1472, "\u2260", [1], GraceFalse);
              if (Grace_isTrue(opresult1474)) {
                setLineNumber(402);    // compilenode identifier
                var call1475 = callmethodChecked(var_p, "toGrace", [1], new GraceNum(1));
                var opresult1478 = callmethodChecked(var_mtstr, "++", [1], call1475);
                var_mtstr = opresult1478;
                if1470 = GraceDone;
              } else {
                var if1479 = GraceDone;
                setLineNumber(405);    // compilenode identifier
                var call1480 = callmethodChecked(var_p, "wildcard", [0]);
                if (Grace_isTrue(call1480)) {
                  setLineNumber(406);    // compilenode string
                  var string1481 = new GraceString("_");
                  var opresult1484 = callmethodChecked(var_mtstr, "++", [1], string1481);
                  var_mtstr = opresult1484;
                  if1479 = GraceDone;
                } else {
                  setLineNumber(408);    // compilenode identifier
                  var call1485 = callmethodChecked(var_p, "value", [0]);
                  var opresult1488 = callmethodChecked(var_mtstr, "++", [1], call1485);
                  var_mtstr = opresult1488;
                  if1479 = GraceDone;
                }
                setLineNumber(410);    // compilenode identifier
                var call1489 = callmethodChecked(var_ast, "unknownType", [0]);
                var call1490 = callmethodChecked(call1489, "value", [0]);
                var string1492 = new GraceString(" : ");
                var opresult1495 = callmethodChecked(var_mtstr, "++", [1], string1492);
                var opresult1497 = callmethodChecked(opresult1495, "++", [1], call1490);
                var_mtstr = opresult1497;
                var if1498 = GraceDone;
                setLineNumber(411);    // compilenode identifier
                var call1499 = callmethodChecked(var_p, "generics", [0]);
                var opresult1502 = callmethodChecked(GraceFalse, "\u2260", [1], call1499);
                if (Grace_isTrue(opresult1502)) {
                  setLineNumber(412);    // compilenode string
                  var string1503 = new GraceString("<");
                  var opresult1506 = callmethodChecked(var_mtstr, "++", [1], string1503);
                  var_mtstr = opresult1506;
                  setLineNumber(413);    // compilenode identifier
                  var call1508 = callmethodChecked(var_p, "generics", [0]);
                  var call1509 = callmethodChecked(call1508, "size", [0]);
                  var diff1511 = callmethodChecked(call1509, "-", [1], new GraceNum(1));
                  var opresult1514 = callmethodChecked(new GraceNum(1), "..", [1], diff1511);
                  var block1515 = new GraceBlock(this, 413, 1);
                  setLineNumber(1);    // compilenode identifier
                  block1515.real = function(var_ix) {
                    setLineNumber(414);    // compilenode identifier
                    var call1516 = callmethodChecked(var_p, "generics", [0]);
                    var call1517 = callmethodChecked(call1516, "at", [1], var_ix);
                    var call1518 = callmethodChecked(call1517, "toGrace", [1], new GraceNum(1));
                    var opresult1521 = callmethodChecked(var_mtstr, "++", [1], call1518);
                    var_mtstr = opresult1521;
                    return GraceDone;
                  };
                  var call1522 = callmethodChecked(var_prelude, "for()do", [1, 1], opresult1514, block1515);
                  setLineNumber(416);    // compilenode string
                  var string1523 = new GraceString(">");
                  var call1525 = callmethodChecked(var_p, "generics", [0]);
                  var call1526 = callmethodChecked(call1525, "last", [0]);
                  var call1527 = callmethodChecked(call1526, "toGrace", [1], new GraceNum(1));
                  var opresult1530 = callmethodChecked(var_mtstr, "++", [1], call1527);
                  var opresult1532 = callmethodChecked(opresult1530, "++", [1], string1523);
                  var_mtstr = opresult1532;
                  if1498 = GraceDone;
                }
                if1470 = if1498;
              }
              var if1533 = GraceDone;
              setLineNumber(419);    // compilenode identifier
              var call1534 = callmethodChecked(var_part, "params", [0]);
              var call1535 = callmethodChecked(call1534, "size", [0]);
              var opresult1538 = callmethodChecked(var_pnr, "<", [1], call1535);
              if (Grace_isTrue(opresult1538)) {
                setLineNumber(420);    // compilenode string
                var string1539 = new GraceString(", ");
                var opresult1542 = callmethodChecked(var_mtstr, "++", [1], string1539);
                var_mtstr = opresult1542;
                if1533 = GraceDone;
              }
              return if1533;
            };
            var call1543 = callmethodChecked(var_prelude, "for()do", [1, 1], call1466, block1467);
            setLineNumber(423);    // compilenode string
            var string1544 = new GraceString(")");
            var opresult1547 = callmethodChecked(var_mtstr, "++", [1], string1544);
            var_mtstr = opresult1547;
            if1455 = GraceDone;
          }
          return if1455;
        };
        var call1548 = callmethodChecked(var_prelude, "for()do", [1, 1], call1449, block1450);
        var if1549 = GraceDone;
        setLineNumber(426);    // compilenode identifier
        var call1551 = callmethodChecked(var_meth, "rtype", [0]);
        var opresult1553 = callmethodChecked(call1551, "\u2260", [1], GraceFalse);
        if (Grace_isTrue(opresult1553)) {
          setLineNumber(427);    // compilenode identifier
          var call1554 = callmethodChecked(var_meth, "rtype", [0]);
          var call1555 = callmethodChecked(call1554, "toGrace", [1], new GraceNum(1));
          var string1557 = new GraceString(" -> ");
          var opresult1560 = callmethodChecked(var_mtstr, "++", [1], string1557);
          var opresult1562 = callmethodChecked(opresult1560, "++", [1], call1555);
          var_mtstr = opresult1562;
          if1549 = GraceDone;
        }
        setLineNumber(429);    // compilenode identifier
        var call1563 = callmethodChecked(var_methodtypes, "push", [1], var_mtstr);
        return call1563;
      };
      var call1564 = callmethodChecked(var_prelude, "for()do", [1, 1], call1438, block1439);
      setLineNumber(431);    // compilenode identifier
      return GraceFalse;
    };
    func1437.paramCounts = [1];
    obj1435.methods["visitTypeLiteral"] = func1437;
    func1437.definitionLine = 392;
    func1437.definitionModule = "xmodule";
    var func1565 = function(argcv) {    // method visitOp(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_op = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitOp(1)"));
      setModuleName("xmodule");
      var if1566 = GraceDone;
      setLineNumber(434);    // compilenode string
      var string1567 = new GraceString("|");
      var call1569 = callmethodChecked(var_op, "value", [0]);
      var opresult1571 = callmethodChecked(call1569, "==", [1], string1567);
      var string1573 = new GraceString("&");
      var call1575 = callmethodChecked(var_op, "value", [0]);
      var opresult1577 = callmethodChecked(call1575, "==", [1], string1573);
      var opresult1579 = callmethodChecked(opresult1577, "||", [1], opresult1571);
      if (Grace_isTrue(opresult1579)) {
        setLineNumber(435);    // compilenode identifier
        var call1580 = callmethodChecked(var_op, "left", [0]);
        var call1581 = callmethodChecked(call1580, "kind", [0]);
        var var_leftkind = call1581;
        setLineNumber(436);    // compilenode identifier
        var call1582 = callmethodChecked(var_op, "right", [0]);
        var call1583 = callmethodChecked(call1582, "kind", [0]);
        var var_rightkind = call1583;
        var if1584 = GraceDone;
        setLineNumber(437);    // compilenode string
        var string1585 = new GraceString("member");
        var opresult1588 = callmethodChecked(var_leftkind, "==", [1], string1585);
        var string1590 = new GraceString("identifier");
        var opresult1593 = callmethodChecked(var_leftkind, "==", [1], string1590);
        var opresult1595 = callmethodChecked(opresult1593, "||", [1], opresult1588);
        if (Grace_isTrue(opresult1595)) {
          setLineNumber(438);    // compilenode identifier
          var call1596 = callmethodChecked(var_op, "left", [0]);
          var call1597 = callmethodChecked(call1596, "toGrace", [1], new GraceNum(0));
          var var_typeIdent = call1597;
          setLineNumber(439);    // compilenode string
          var string1598 = new GraceString("");
          var string1601 = new GraceString(" ");
          var call1603 = callmethodChecked(var_op, "value", [0]);
          var string1605 = new GraceString("");
          var opresult1607 = callmethodChecked(string1605, "++", [1], call1603);
          var opresult1609 = callmethodChecked(opresult1607, "++", [1], string1601);
          var opresult1611 = callmethodChecked(opresult1609, "++", [1], var_typeIdent);
          var opresult1613 = callmethodChecked(opresult1611, "++", [1], string1598);
          var call1614 = callmethodChecked(var_methodtypes, "push", [1], opresult1613);
          if1584 = call1614;
        } else {
          var if1615 = GraceDone;
          setLineNumber(440);    // compilenode string
          var string1616 = new GraceString("typeliteral");
          var opresult1619 = callmethodChecked(var_leftkind, "==", [1], string1616);
          if (Grace_isTrue(opresult1619)) {
            setLineNumber(441);    // compilenode call
            onSelf = true;
            var call1621 = callmethodChecked(this, "literalCount", [0]);
            var opresult1623 = callmethodChecked(call1621, "+", [1], new GraceNum(1));
            onSelf = true;
            var call1624 = callmethodChecked(this, "literalCount:=", [1], opresult1623);
            setLineNumber(442);    // compilenode string
            var string1625 = new GraceString("");
            onSelf = true;
            var call1627 = callmethodChecked(this, "literalCount", [0]);
            var string1629 = new GraceString(" ");
            var call1631 = callmethodChecked(var_op, "value", [0]);
            var string1633 = new GraceString("");
            var opresult1635 = callmethodChecked(string1633, "++", [1], call1631);
            var opresult1637 = callmethodChecked(opresult1635, "++", [1], string1629);
            var opresult1639 = callmethodChecked(opresult1637, "++", [1], call1627);
            var opresult1641 = callmethodChecked(opresult1639, "++", [1], string1625);
            var call1642 = callmethodChecked(var_methodtypes, "push", [1], opresult1641);
            setLineNumber(443);    // compilenode identifier
            var call1643 = callmethodChecked(var_op, "left", [0]);
            onSelf = true;
            var call1644 = callmethodChecked(this, "visitTypeLiteral", [1], call1643);
            if1615 = call1644;
          } else {
            var if1645 = GraceDone;
            setLineNumber(444);    // compilenode string
            var string1646 = new GraceString("op");
            var opresult1649 = callmethodChecked(var_leftkind, "==", [1], string1646);
            if (Grace_isTrue(opresult1649)) {
              setLineNumber(445);    // compilenode identifier
              var call1650 = callmethodChecked(var_op, "left", [0]);
              onSelf = true;
              var call1651 = callmethodChecked(this, "visitOp", [1], call1650);
              if1645 = call1651;
            }
            if1615 = if1645;
          }
          if1584 = if1615;
        }
        var if1652 = GraceDone;
        setLineNumber(447);    // compilenode string
        var string1653 = new GraceString("member");
        var opresult1656 = callmethodChecked(var_rightkind, "==", [1], string1653);
        var string1658 = new GraceString("identifier");
        var opresult1661 = callmethodChecked(var_rightkind, "==", [1], string1658);
        var opresult1663 = callmethodChecked(opresult1661, "||", [1], opresult1656);
        if (Grace_isTrue(opresult1663)) {
          setLineNumber(448);    // compilenode identifier
          var call1664 = callmethodChecked(var_op, "right", [0]);
          var call1665 = callmethodChecked(call1664, "toGrace", [1], new GraceNum(0));
          var var_typeIdent = call1665;
          setLineNumber(449);    // compilenode string
          var string1666 = new GraceString("");
          var string1669 = new GraceString(" ");
          var call1671 = callmethodChecked(var_op, "value", [0]);
          var string1673 = new GraceString("");
          var opresult1675 = callmethodChecked(string1673, "++", [1], call1671);
          var opresult1677 = callmethodChecked(opresult1675, "++", [1], string1669);
          var opresult1679 = callmethodChecked(opresult1677, "++", [1], var_typeIdent);
          var opresult1681 = callmethodChecked(opresult1679, "++", [1], string1666);
          var call1682 = callmethodChecked(var_methodtypes, "push", [1], opresult1681);
          if1652 = call1682;
        } else {
          var if1683 = GraceDone;
          setLineNumber(450);    // compilenode string
          var string1684 = new GraceString("typeliteral");
          var opresult1687 = callmethodChecked(var_rightkind, "==", [1], string1684);
          if (Grace_isTrue(opresult1687)) {
            setLineNumber(451);    // compilenode call
            onSelf = true;
            var call1689 = callmethodChecked(this, "literalCount", [0]);
            var opresult1691 = callmethodChecked(call1689, "+", [1], new GraceNum(1));
            onSelf = true;
            var call1692 = callmethodChecked(this, "literalCount:=", [1], opresult1691);
            setLineNumber(452);    // compilenode string
            var string1693 = new GraceString("");
            onSelf = true;
            var call1695 = callmethodChecked(this, "literalCount", [0]);
            var string1697 = new GraceString(" ");
            var call1699 = callmethodChecked(var_op, "value", [0]);
            var string1701 = new GraceString("");
            var opresult1703 = callmethodChecked(string1701, "++", [1], call1699);
            var opresult1705 = callmethodChecked(opresult1703, "++", [1], string1697);
            var opresult1707 = callmethodChecked(opresult1705, "++", [1], call1695);
            var opresult1709 = callmethodChecked(opresult1707, "++", [1], string1693);
            var call1710 = callmethodChecked(var_methodtypes, "push", [1], opresult1709);
            setLineNumber(453);    // compilenode identifier
            var call1711 = callmethodChecked(var_op, "right", [0]);
            onSelf = true;
            var call1712 = callmethodChecked(this, "visitTypeLiteral", [1], call1711);
            if1683 = call1712;
          } else {
            var if1713 = GraceDone;
            setLineNumber(454);    // compilenode string
            var string1714 = new GraceString("op");
            var opresult1717 = callmethodChecked(var_rightkind, "==", [1], string1714);
            if (Grace_isTrue(opresult1717)) {
              setLineNumber(455);    // compilenode identifier
              var call1718 = callmethodChecked(var_op, "right", [0]);
              onSelf = true;
              var call1719 = callmethodChecked(this, "visitOp", [1], call1718);
              if1713 = call1719;
            }
            if1683 = if1713;
          }
          if1652 = if1683;
        }
        if1566 = if1652;
      }
      setLineNumber(458);    // compilenode identifier
      return GraceFalse;
    };
    func1565.paramCounts = [1];
    obj1435.methods["visitOp"] = func1565;
    func1565.definitionLine = 433;
    func1565.definitionModule = "xmodule";
    setLineNumber(390);    // compilenode identifier
    var call1720 = callmethodChecked(var_ast, "baseVisitor()object", [0, 1], this);
    obj1435.superobj = call1720;
    if (call1720.data) obj1435.data = call1720.data;
    if (call1720.hasOwnProperty('_value'))
        obj1435._value = call1720._value;
    setLineNumber(391);    // compilenode num
    obj1435.data["literalCount"] = new GraceNum(1);
    var reader_xmodule_literalCount1721 = function() {
      return this.data["literalCount"];
    };
    obj1435.methods["literalCount"] = reader_xmodule_literalCount1721;
    obj1435.data["literalCount"] = new GraceNum(1);
    var writer_xmodule_literalCount1721 = function(argcv, o) {
      this.data["literalCount"] = o;
      return GraceDone;
    };
    obj1435.methods["literalCount:="] = writer_xmodule_literalCount1721;
    reader_xmodule_literalCount1721.confidential = true;
    writer_xmodule_literalCount1721.confidential = true;
    obj1435.mutable = true;
    superDepth = origSuperDepth;
  };
  obj_init_1435.apply(obj1435, []);
  var var_typeVisitor = obj1435;
  setLineNumber(455);    // compilenode method
  var func1722 = function(argcv) {    // method typeVisitor
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for typeVisitor"));
    setModuleName("xmodule");
    // typeVisitor is a simple accessor - elide try ... catch
    setLineNumber(389);    // compilenode identifier
    return var_typeVisitor;
  };
  func1722.paramCounts = [0];
  this.methods["typeVisitor"] = func1722;
  func1722.definitionLine = 455;
  func1722.definitionModule = "xmodule";
  this.methods["typeVisitor"].debug = "def";
  return this;
}
gracecode_xmodule.imports = ['ast', 'errormessages', 'io', 'mirrors', 'sys', 'unixFilePath', 'util'];
if (typeof gctCache !== "undefined")
  gctCache['xmodule'] = "classes:\nconfidential:\n addFreshMethod()to()for\n addFreshMethodsOf()to\n addTransitiveImports\n checkimport\n compileModule()inFile()forDialect()atRange\n generateGctForModule\n parseGCT()sourceDir\n writeGCT\nfresh-methods:\nmethodtypes-of:LinePos:\n 1 line -> Number\n 1 linePos -> Number\nmethodtypes-of:RangeSuggestions:\n 1 line -> Number\n 1 posEnd -> Number\n 1 posStart -> Number\n 1 suggestions -> Done\nmodules:\n ast\n errormessages\n identifierKinds\n io\n mirrors\n stringMap\n sys\n unixFilePath\n util\npath:\n xmodule\npublic:\n LinePos\n RangeSuggestions\n buildGctFor\n builtInModules\n checkDialect\n checkExternalModule\n doAstCheck\n doParseCheck\n dynamicCModules\n gctAsString\n parseGCT\n writeGctForModule\ntypes:\n LinePos\n RangeSuggestions\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["xmodule"] = [
    "#pragma ExtendedLineups",
    "import \"io\" as io",
    "import \"sys\" as sys",
    "import \"util\" as util",
    "import \"ast\" as ast",
    "import \"mirrors\" as mirrors",
    "import \"errormessages\" as errormessages",
    "import \"unixFilePath\" as filePath",
    "",
    "def gctCache = emptyDictionary",
    "def keyCompare = { a, b -> a.key.compare(b.key) }",
    "",
    "method builtInModules {",
    "    if (util.target == \"c\") then {",
    "        list [  \"sys\",",
    "                \"io\",",
    "                \"imports\",",
    "                \"StandardPrelude\",",
    "                \"standardGrace\",",
    "                \"collectionsPrelude\" ]",
    "    } else {",
    "        list [  \"imports\",",
    "                \"io\",",
    "                \"mirrors\",",
    "                \"sys\",",
    "                \"unicode\",",
    "                \"util\" ]",
    "    }",
    "}",
    "",
    "def currentDialect = object {",
    "    var name is public := \"standardGrace\"",
    "    var moduleObject is public := _prelude",
    "    // TODO: this isn't quite right: should be the prelude",
    "    // on the GRACE_MODULE_PATH of this compilation",
    "    var hasParseChecker is public := false",
    "    var hasAstChecker is public := false",
    "    var hasAtStart is public := false",
    "    var hasAtEnd is public := false",
    "}",
    "",
    "type LinePos = {",
    "    line -> Number",
    "    linePos -> Number",
    "}",
    "",
    "type RangeSuggestions = {",
    "    line -> Number",
    "    posStart -> Number",
    "    posEnd -> Number",
    "    suggestions",
    "}",
    "",
    "def dynamicCModules is public = set [\"mirrors\", \"curl\", \"unicode\"]",
    "def imports = util.requiredModules",
    "",
    "method checkDialect(moduleObject) {",
    "    moduleObject.value.do { node ->",
    "        if (node.isDialect) then {",
    "            def nm = node.moduleName",
    "            currentDialect.name := nm",
    "            checkExternalModule(node)",
    "            util.log 50 verbose \"loading dialect for checkers.\"",
    "            try {",
    "                def dobj = mirrors.loadDynamicModule(node.path)",
    "                currentDialect.moduleObject := dobj",
    "                def mths = mirrors.reflect(dobj).methods",
    "                for (mths) do { m ->",
    "                    if (m.name == \"checker\") then {",
    "                        currentDialect.hasParseChecker := true",
    "                    }",
    "                    if (m.name == \"astChecker\") then {",
    "                        currentDialect.hasAstChecker := true",
    "                    }",
    "                    if (m.name == \"atModuleEnd\") then {",
    "                        currentDialect.hasAtEnd := true",
    "                    }",
    "                    if (m.name == \"atModuleStart\") then {",
    "                        currentDialect.hasAtStart := true",
    "                    }",
    "                }",
    "            } catch { e : RuntimeError ->",
    "                util.setPosition(node.line, 1)",
    "                e.printBacktrace",
    "                errormessages.error \"Dialect error: dialect '{nm}' failed to load.\\n{e}.\"",
    "                    atLine(node.line)",
    "            }",
    "            return  // there is at most one dialect",
    "        }",
    "    }",
    "}",
    "",
    "method doParseCheck(moduleObj) {",
    "    if (currentDialect.hasParseChecker.not) then { return }",
    "    def CheckerFailure = Exception.refine \"CheckerFailure\"",
    "    try {",
    "        currentDialect.moduleObject.checker(moduleObj.value)",
    "    } catch { e : CheckerFailure ->",
    "        match (e.data)",
    "            case { lp : LinePos ->",
    "                errormessages.error \"{e.exception}: {e.message}.\"",
    "                    atPosition(e.data.line, e.data.linePos)",
    "            }",
    "            case { rs : RangeSuggestions ->",
    "                errormessages.error(\"{e.exception}: {e.message}.\")",
    "                    atRange(rs.line, rs.posStart, rs.posEnd)",
    "                    withSuggestions(rs.suggestions)",
    "            }",
    "            case { _ ->",
    "                errormessages.error \"{e.exception}: {e.message}.\" ",
    "                    atLine(util.linenum)",
    "            }",
    "    } catch { e : Exception ->      // some unknwown Grace exception",
    "        e.printBacktrace",
    "        errormessages.error(\"Unexpected exception raised by parse checker for \" ++",
    "            \"dialect '{currentDialect.name}'.\\n{e.exception}: {e.message}\")",
    "    }",
    "}",
    "",
    "method doAstCheck(moduleObj) {",
    "    if (currentDialect.hasAstChecker.not) then { return }",
    "    def CheckerFailure = Exception.refine \"CheckerFailure\"",
    "    try {",
    "        currentDialect.moduleObject.astChecker(moduleObj)",
    "    } catch { e : CheckerFailure ->",
    "        match (e.data)",
    "            case { lp : LinePos ->",
    "                errormessages.error \"{e.exception}: {e.message}.\"",
    "                    atPosition(e.data.line, e.data.linePos)",
    "            }",
    "            case { rs : RangeSuggestions ->",
    "                errormessages.error(\"{e.exception}: {e.message}.\")",
    "                    atRange(rs.line, rs.posStart, rs.posEnd)",
    "                    withSuggestions(rs.suggestions)",
    "            }",
    "            case { _ -> }",
    "        errormessages.error(\"{e.exception}: {e.message}.\")atPosition(util.linenum, 0)",
    "    } catch { e : Exception ->      // some unknwown Grace exception",
    "        e.printBacktrace",
    "        errormessages.error(\"Unexpected exception raised by AST checker for \" ++",
    "            \"dialect '{currentDialect.name}'.\\n{e.exception}: {e.message}\")",
    "    }",
    "}",
    "",
    "method checkExternalModule(node) {",
    "    checkimport(node.moduleName, node.path,",
    "        node.line, node.linePos, node.isDialect)",
    "}",
    "",
    "method checkimport(nm, pathname, line, linePos, isDialect) is confidential {",
    "    if (builtInModules.contains(nm)) then {",
    "        imports.other.add(nm)",
    "        return",
    "    }",
    "    if (imports.isAlready(nm)) then {",
    "        return",
    "    }",
    "    var noSource := false",
    "    // noSource implies that the module is written in native code, like \"unicode.c\"",
    "",
    "    if (prelude.inBrowser) then {",
    "        util.file(nm ++ \".js\") onPath \"\" otherwise { _ ->",
    "            errormessages.error \"Please compile module {nm} before importing it.\"",
    "                atRange(line, linePos, linePos + nm.size - 1)",
    "        }",
    "        return",
    "    }",
    "    def gmp = sys.environ.at \"GRACE_MODULE_PATH\"",
    "    def pn = filePath.fromString(pathname).setExtension \"grace\"",
    "    def moduleFileGrace = util.file(pn) on(util.sourceDir)",
    "                                orPath (gmp) otherwise { l ->",
    "        noSource := true",
    "        pn",
    "    }",
    "    var moduleFileGct := moduleFileGrace.copy.setExtension \".gct\"",
    "    if (util.sourceDir != util.outDir) then {",
    "        moduleFileGct.setDirectory(util.outDir)",
    "    }",
    "    if (util.target == \"c\") then {",
    "        def moduleFileGso = moduleFileGct.copy.setExtension \".gso\"",
    "        def moduleFileGcn = moduleFileGct.copy.setExtension \".gcn\"",
    "        def needsDynamic = isDialect || util.importDynamic ||",
    "            util.dynamicModule || { dynamicCModules.contains(nm) }",
    "        util.log 100 verbose \"needsDynamic for {nm} is {needsDynamic}.\"",
    "        var binaryFile",
    "        var importsSet",
    "        if (needsDynamic) then {",
    "            dynamicCModules.add(nm)",
    "            binaryFile := moduleFileGso",
    "            importsSet := imports.other",
    "        } else {",
    "            binaryFile := moduleFileGcn",
    "            importsSet := imports.static",
    "        }",
    "        if (noSource && binaryFile.exists.not) then {",
    "            binaryFile := util.file(binaryFile) onPath (gmp) otherwise { l ->",
    "                errormessages.error(",
    "                    \"I can't find {pn.shortName} or {binaryFile.shortName}; looked in {l}.\")",
    "                    atLine(line)",
    "            }",
    "            moduleFileGct.setDirectory(binaryFile.directory)",
    "            if (moduleFileGct.exists.not) then {",
    "                errormessages.error(\"I found {binaryFile}, but neither \" ++",
    "                    \"{moduleFileGct} nor source.\")",
    "                    atLine(line)",
    "            }",
    "        }",
    "        if (needsDynamic.not) then {",
    "            imports.linkfiles.add(binaryFile.asString)",
    "        }",
    "        util.log 100 verbose \"linkfiles is {imports.linkfiles}.\"",
    "        if (binaryFile.exists && {",
    "            moduleFileGct.exists } && {",
    "                noSource || { binaryFile.newer(moduleFileGrace) }",
    "            }",
    "        ) then {",
    "        } else {",
    "            if ( binaryFile.exists.not ) then {",
    "                util.log 60 verbose \"{binaryFile} does not exist\"",
    "            } elseif { binaryFile.newer(moduleFileGrace).not } then {",
    "                util.log 60 verbose \"{binaryFile} not newer than {moduleFileGrace}\"",
    "            }",
    "            compileModule (nm) inFile (moduleFileGrace.asString) ",
    "                forDialect (isDialect) atRange (line, linePos)",
    "        }",
    "        importsSet.add(nm)",
    "    } elseif { util.target == \"js\" } then {",
    "        def moduleFileJs = moduleFileGct.copy.setExtension \".js\"",
    "        if (moduleFileJs.exists && {",
    "            moduleFileGct.exists } && {",
    "                noSource || {",
    "                    moduleFileJs.newer(moduleFileGrace)",
    "                }",
    "            }",
    "        ) then {",
    "        } else {",
    "            if (moduleFileJs.newer(moduleFileGrace).not) then {",
    "                util.log 60 verbose \"{moduleFileJs} not newer than {moduleFileGrace}\"",
    "            }",
    "            if (moduleFileGrace.exists) then {",
    "                compileModule (nm) inFile (moduleFileGrace.asString) ",
    "                    forDialect (isDialect) atRange (line, linePos)",
    "            } else {",
    "                def thing = if (isDialect) then {\"dialect\"} else {\"module\"}",
    "                errormessages.error \"Can't find {thing} {nm}\"",
    "                    atLine(line)",
    "            }",
    "        }",
    "        imports.other.add(nm)",
    "    }",
    "    addTransitiveImports(moduleFileGct.directory, isDialect, nm, line, linePos)",
    "}",
    "",
    "method addTransitiveImports(directory, isDialect, moduleName, line, linePos) is confidential {",
    "    def gctData = gctCache.at(moduleName) ifAbsent {",
    "        parseGCT(moduleName) sourceDir(directory)",
    "    }",
    "    if (gctData.containsKey \"dialect\") then {",
    "        def dName = gctData.at \"dialect\" .first",
    "        checkimport(dName, dName, line, linePos, true)",
    "    }",
    "    def importedModules = gctData.at \"modules\" ifAbsent { emptySequence }",
    "    def m = util.modname",
    "    if (importedModules.contains(m)) then {",
    "        errormessages.error(\"Cyclic import detected: '{m}' is imported \"",
    "            ++ \"by '{moduleName}', which is imported by '{m}' (and so on).\")",
    "            atLine(line)",
    "    }",
    "    importedModules.do { each ->",
    "        checkimport(each, each, line, linePos, isDialect)",
    "    }",
    "}",
    "",
    "method compileModule (nm) inFile (sourceFile)",
    "        forDialect (isDialect) atRange (line, linePos) is confidential {",
    "    if ( prelude.inBrowser || { util.recurse.not } ) then {",
    "        errormessages.error \"Please compile module {nm} before importing it.\"",
    "            atLine(line)",
    "    }",
    "    var slashed := false",
    "    for (sys.argv.first) do {letter ->",
    "        if(letter == \"/\") then {",
    "            slashed := true",
    "        }",
    "    }",
    "    var cmd",
    "    if (slashed) then {",
    "        cmd := io.realpath(sys.argv.first)",
    "    } else {",
    "        cmd := io.realpath \"{sys.execPath}/{sys.argv.first}\"",
    "    }",
    "    def cmdSz = cmd.size",
    "    if (cmd.substringFrom(cmdSz-2) to (cmdSz) == \".js\") then {",
    "        cmd := \"grace \\\"{cmd}\\\"\"",
    "    } else {",
    "        cmd := \"\\\"{cmd}\\\"\"",
    "    }",
    "    if (util.verbosity != util.defaultVerbosity) then {",
    "        cmd := cmd ++ \" --verbose {util.verbosity}\"",
    "    }",
    "    if (util.dirFlag) then {",
    "        cmd := cmd ++ \" --dir \" ++ util.outDir",
    "    }",
    "    if (false != util.vtag) then {",
    "        cmd := cmd ++ \" --vtag \" ++ util.vtag",
    "    }",
    "    if (util.target == \"c\") then {",
    "        if (util.dynamicModule || isDialect) then {",
    "            cmd := cmd ++ \" --dynamic-module\"",
    "        }",
    "        if (util.importDynamic) then {",
    "            cmd := cmd ++ \" --import-dynamic\"",
    "        }",
    "        cmd := cmd ++ \" -XNoMain\"",
    "    }",
    "    cmd := cmd ++ \" --gracelib \" ++ util.gracelibPath",
    "    cmd := cmd ++ util.commandLineExtensions",
    "    cmd := \"{cmd} --target {util.target} --noexec \\\"{sourceFile}\\\"\"",
    "    util.log 50 verbose \"executing sub-compile {cmd}\"",
    "    def exitCode = io.spawn(\"bash\", [\"-c\", cmd]).status",
    "    if (exitCode != 0) then {",
    "        errormessages.error \"Failed to compile imported module {nm} ({exitCode}).\"",
    "            atLine(line)",
    "    }",
    "}",
    "",
    "method parseGCT(moduleName) {",
    "    gctCache.at(moduleName) ifAbsent {",
    "        parseGCT(moduleName) sourceDir(util.outDir)",
    "    }",
    "}",
    "",
    "method parseGCT(moduleName) sourceDir(dir) is confidential {",
    "    def gctData = emptyDictionary",
    "    def sz = moduleName.size",
    "    def sought = filePath.fromString(moduleName).setExtension \".gct\"",
    "    def filename = util.file(sought) on(dir)",
    "      orPath(sys.environ.at \"GRACE_MODULE_PATH\") otherwise { l ->",
    "        util.log 80 verbose \"Can't find file {sought} for module {moduleName}; looked in {l}.\"",
    "        gctCache.at(moduleName) put(gctData)",
    "        return gctData",
    "    }",
    "    def tfp = io.open(filename, \"r\")",
    "    var key := \"\"",
    "    while {!tfp.eof} do {",
    "        def line = tfp.getline",
    "        if (line.size > 0) then {",
    "            if (line.at(1) != \" \") then {",
    "                key := line.substringFrom 1 to(line.size-1)",
    "                gctData.at(key) put [ ]",
    "            } else {",
    "                gctData.at(key).addLast(line.substringFrom 2 to(line.size))",
    "            }",
    "        }",
    "    }",
    "    tfp.close",
    "    gctCache.at(moduleName) put(gctData)",
    "    return gctData",
    "}",
    "",
    "method writeGCT(modname, dict) is confidential {",
    "    def fp = io.open(\"{util.outDir}{modname}.gct\", \"w\")",
    "    dict.bindings.asList.sortBy(keyCompare).do { b ->",
    "        fp.write \"{b.key}:\\n\"",
    "        b.value.asList.sort.do { v ->",
    "            fp.write \" {v}\\n\"",
    "        }",
    "    }",
    "    fp.close",
    "    gctCache.at(modname) put(dict)",
    "}",
    "",
    "method writeGctForModule(moduleObject) {",
    "    writeGCT(moduleObject.name, generateGctForModule(moduleObject))",
    "}",
    "",
    "method gctAsString(gctDict) {",
    "    var ret := \"\"",
    "    gctDict.bindings.asList.sortBy(keyCompare).do { b ->",
    "        ret := ret ++ \"{b.key}:\\n\"",
    "        b.value.asList.sort.do { v ->",
    "            ret := ret ++ \" {v}\\n\"",
    "        }",
    "    }",
    "    return ret",
    "}",
    "",
    "var methodtypes := [ ]",
    "def typeVisitor = object {",
    "    inherits ast.baseVisitor",
    "    var literalCount := 1",
    "    method visitTypeLiteral(lit) {",
    "        for (lit.methods) do { meth ->",
    "            var mtstr := \"{literalCount} \"",
    "            for (meth.signature) do { part ->",
    "                mtstr := mtstr ++ part.name",
    "                if (part.params.size > 0) then {",
    "                    mtstr := mtstr ++ \"(\"",
    "                    for (part.params.indices) do { pnr ->",
    "                        var p := part.params.at(pnr)",
    "                        if (p.dtype != false) then {",
    "                            mtstr := mtstr ++ p.toGrace(1)",
    "                        } else {",
    "                            // if parameter type not listed, give it type Unknown",
    "                            if(p.wildcard) then {",
    "                                mtstr := mtstr ++ \"_\"",
    "                            } else {",
    "                                mtstr := mtstr ++ p.value",
    "                            }",
    "                            mtstr := mtstr ++ \" : \" ++ ast.unknownType.value",
    "                            if (false != p.generics) then {",
    "                                mtstr := mtstr ++ \"<\"",
    "                                for (1..(p.generics.size - 1)) do {ix ->",
    "                                    mtstr := mtstr ++ p.generics.at(ix).toGrace(1)",
    "                                }",
    "                                mtstr := mtstr ++ p.generics.last.toGrace(1) ++ \">\"",
    "                            }",
    "                        }",
    "                        if (pnr < part.params.size) then {",
    "                            mtstr := mtstr ++ \", \"",
    "                        }",
    "                    }",
    "                    mtstr := mtstr ++ \")\"",
    "                }",
    "            }",
    "            if (meth.rtype != false) then {",
    "                mtstr := mtstr ++ \" -> \" ++ meth.rtype.toGrace(1)",
    "            }",
    "            methodtypes.push(mtstr)",
    "        }",
    "        return false",
    "    }",
    "    method visitOp(op) {",
    "        if ((op.value==\"&\") || (op.value==\"|\")) then {",
    "            def leftkind = op.left.kind",
    "            def rightkind = op.right.kind",
    "            if ((leftkind==\"identifier\") || (leftkind==\"member\")) then {",
    "                var typeIdent := op.left.toGrace(0)",
    "                methodtypes.push(\"{op.value} {typeIdent}\")",
    "            } elseif { leftkind==\"typeliteral\" } then {",
    "                literalCount := literalCount + 1",
    "                methodtypes.push(\"{op.value} {literalCount}\")",
    "                visitTypeLiteral(op.left)",
    "            } elseif { leftkind==\"op\" } then {",
    "                visitOp(op.left)",
    "            }",
    "            if ((rightkind==\"identifier\") || (rightkind==\"member\")) then {",
    "                var typeIdent := op.right.toGrace(0)",
    "                methodtypes.push(\"{op.value} {typeIdent}\")",
    "            } elseif { rightkind==\"typeliteral\" } then {",
    "                literalCount := literalCount + 1",
    "                methodtypes.push(\"{op.value} {literalCount}\")",
    "                visitTypeLiteral(op.right)",
    "            } elseif { rightkind==\"op\" } then {",
    "                visitOp(op.right)",
    "            }",
    "        }",
    "        return false",
    "    }",
    "}",
    "method generateGctForModule(moduleObject) is confidential {",
    "    def gct = buildGctFor(moduleObject)",
    "    addFreshMethodsOf (moduleObject) to (gct)",
    "    return gct",
    "}",
    "",
    "method buildGctFor(module) {",
    "    def gct = emptyDictionary",
    "    def classes = emptyList",
    "    def confidentials = emptyList",
    "    def meths = emptyList",
    "    def types = emptyList",
    "    var theDialect := false",
    "    module.parentsDo { p ->",
    "        meths.addAll(p.providedNames)",
    "    }",
    "    for (module.value) do { v->",
    "        if (v.kind == \"vardec\") then {",
    "            if (v.isReadable) then {",
    "                meths.push(v.name.value)",
    "            }",
    "            if (v.isWritable) then {",
    "                meths.push(v.name.value ++ \":=\")",
    "            }",
    "        } elseif {v.kind == \"method\"} then {",
    "            if (v.isPublic) then {",
    "                meths.push(v.nameString)",
    "            } else {",
    "                confidentials.push(v.nameString)",
    "            }",
    "        } elseif {v.kind == \"typedec\"} then {",
    "            if (v.isPublic) then {",
    "                meths.push(v.nameString)",
    "                types.push(v.name.value)",
    "                methodtypes := [ ]",
    "                v.accept(typeVisitor)",
    "                var typename := v.name.toGrace(0)",
    "                if (v.typeParams != false) then {",
    "                    typename := typename ++ v.typeParams",
    "                }",
    "                gct.at \"methodtypes-of:{typename}\" put(methodtypes)",
    "            } else {",
    "                confidentials.push(v.nameString)",
    "            }",
    "        } elseif {v.kind == \"defdec\"} then {",
    "            if (v.isPublic) then {",
    "                meths.push(v.nameString)",
    "            }",
    "            if (ast.findAnnotation(v, \"parent\")) then {",
    "                v.scope.elements.keysDo { m -> meths.push(m) }",
    "            }",
    "            if (v.returnsObject) then {",
    "                def ob = v.value",
    "                def obConstructors = [ ]",
    "                for (ob.value) do {nd->",
    "                    if (nd.isClass) then {",
    "                        def factMethNm = nd.nameString",
    "                        obConstructors.push(factMethNm)",
    "                        def exportedMethods = emptyList",
    "                        ob.scope.getScope(factMethNm).keysAndKindsDo { key, knd ->",
    "                            if (knd.forGct) then { exportedMethods.add(key) }",
    "                        }",
    "                        gct.at \"methods-of:{v.name.value}.{factMethNm}\"",
    "                            put(exportedMethods.sort)",
    "                    }",
    "                }",
    "                if (obConstructors.size > 0) then {",
    "                    gct.at \"constructors-of:{v.name.value}\"",
    "                        put(obConstructors)",
    "                    classes.push(v.name.value)",
    "                }",
    "            }",
    "        } elseif { v.kind == \"dialect\" } then {",
    "            theDialect := v.value",
    "        }",
    "    }",
    "    gct.at \"classes\" put(classes.sort)",
    "    gct.at \"confidential\" put(confidentials.sort)",
    "    gct.at \"modules\" put(module.imports.asList.sorted)",
    "    gct.at \"path\" put [module.name]",
    "    gct.at \"public\" put(meths.sort)",
    "    gct.at \"types\" put(types.sort)",
    "    if (false != theDialect) then {",
    "        gct.at \"dialect\" put [theDialect]",
    "    }",
    "    gct",
    "}",
    "",
    "method addFreshMethodsOf (moduleObject) to (gct) is confidential {",
    "    // adds information about the methods made available via fresh methods.",
    "    // This is done in a separate pass after public information is in the gct,",
    "    // because of the special treatment of prelude.clone",
    "    // TODO: doesn't this just duplicate what's in 'classes' ? No: 'classes'",
    "    // lists only classes declared inside a def'd object constructer.",
    "    def freshmeths = [ ]",
    "    for (moduleObject.value) do { val->",
    "        if (val.isClass) then {",
    "            addFreshMethod (val) to (freshmeths) for (gct)",
    "        }",
    "    }",
    "    gct.at \"fresh-methods\" put(freshmeths)",
    "}",
    "",
    "method addFreshMethod (val) to (freshlist) for (gct) is confidential {",
    "    freshlist.push(val.nameString)",
    "    def freshMethResult = val.body.last",
    "    if (freshMethResult.isObject) then {",
    "        def exportedMethods = emptyList",
    "        freshMethResult.scope.keysAndKindsDo { key, knd ->",
    "            if (knd.forGct) then { exportedMethods.add(key) }",
    "        }",
    "        gct.at \"fresh:{val.nameString}\" put (exportedMethods.sort)",
    "    } elseif {freshMethResult.isCall} then {",
    "        // we know that freshMethResult.value.isMember and",
    "        // freshMethResult.value.nameString == \"clone\"",
    "        def receiver = freshMethResult.value.in",
    "        if ((receiver.nameString == \"prelude\") && {",
    "          freshMethResult.with.first.args.first.nameString == \"self\"}) then {",
    "            gct.at \"fresh:{val.nameString}\" put(gct.at \"public\")",
    "        } elseif {(receiver.nameString == \"self\")} then {",
    "            gct.at \"fresh:{val.nameString}\" put(gct.at \"public\")",
    "        } else {",
    "            ProgrammingError.raise",
    "                \"unrecognized fresh method tail-call: {freshMethResult.pretty(0)}\"",
    "        }",
    "    } else {",
    "        ProgrammingError.raise",
    "            \"fresh method result of an unexpected kind: {freshMethResult.pretty(0)}\"",
    "    }",
    "}",
    "" ];
}
if (typeof global !== "undefined")
  global.gracecode_xmodule = gracecode_xmodule;
if (typeof window !== "undefined")
  window.gracecode_xmodule = gracecode_xmodule;
