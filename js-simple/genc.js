"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_genc() {
  setModuleName("genc");
  this.definitionModule = "genc";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_genc_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_genc_outer0;
  setLineNumber(2);    // compilenode import
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
    setModuleName("genc");
    // ast is a simple accessor - elide try ... catch
    return var_ast;
  };
  func1.paramCounts = [0];
  this.methods["ast"] = func1;
  func1.definitionLine = 2;
  func1.definitionModule = "genc";
  func1.debug = "import";
  func1.confidential = true;
  setModuleName("genc");
  setLineNumber(3);    // compilenode import
  // Import of errormessages as errormessages
  if (typeof gracecode_errormessages == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module errormessages'));
  var var_errormessages = do_import("errormessages", gracecode_errormessages);
  var func2 = function(argcv) {    // method errormessages
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for errormessages"));
    setModuleName("genc");
    // errormessages is a simple accessor - elide try ... catch
    return var_errormessages;
  };
  func2.paramCounts = [0];
  this.methods["errormessages"] = func2;
  func2.definitionLine = 3;
  func2.definitionModule = "genc";
  func2.debug = "import";
  func2.confidential = true;
  setModuleName("genc");
  setLineNumber(4);    // compilenode import
  // Import of io as io
  if (typeof gracecode_io == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module io'));
  var var_io = do_import("io", gracecode_io);
  var func3 = function(argcv) {    // method io
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for io"));
    setModuleName("genc");
    // io is a simple accessor - elide try ... catch
    return var_io;
  };
  func3.paramCounts = [0];
  this.methods["io"] = func3;
  func3.definitionLine = 4;
  func3.definitionModule = "genc";
  func3.debug = "import";
  func3.confidential = true;
  setModuleName("genc");
  setLineNumber(5);    // compilenode import
  // Import of stringMap as map
  if (typeof gracecode_stringMap == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module stringMap'));
  var var_map = do_import("stringMap", gracecode_stringMap);
  var func4 = function(argcv) {    // method map
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for map"));
    setModuleName("genc");
    // map is a simple accessor - elide try ... catch
    return var_map;
  };
  func4.paramCounts = [0];
  this.methods["map"] = func4;
  func4.definitionLine = 5;
  func4.definitionModule = "genc";
  func4.debug = "import";
  func4.confidential = true;
  setModuleName("genc");
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
    setModuleName("genc");
    // mirrors is a simple accessor - elide try ... catch
    return var_mirrors;
  };
  func5.paramCounts = [0];
  this.methods["mirrors"] = func5;
  func5.definitionLine = 6;
  func5.definitionModule = "genc";
  func5.debug = "import";
  func5.confidential = true;
  setModuleName("genc");
  setLineNumber(7);    // compilenode import
  // Import of sys as sys
  if (typeof gracecode_sys == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module sys'));
  var var_sys = do_import("sys", gracecode_sys);
  var func6 = function(argcv) {    // method sys
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for sys"));
    setModuleName("genc");
    // sys is a simple accessor - elide try ... catch
    return var_sys;
  };
  func6.paramCounts = [0];
  this.methods["sys"] = func6;
  func6.definitionLine = 7;
  func6.definitionModule = "genc";
  func6.debug = "import";
  func6.confidential = true;
  setModuleName("genc");
  setLineNumber(8);    // compilenode import
  // Import of util as util
  if (typeof gracecode_util == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module util'));
  var var_util = do_import("util", gracecode_util);
  var func7 = function(argcv) {    // method util
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for util"));
    setModuleName("genc");
    // util is a simple accessor - elide try ... catch
    return var_util;
  };
  func7.paramCounts = [0];
  this.methods["util"] = func7;
  func7.definitionLine = 8;
  func7.definitionModule = "genc";
  func7.debug = "import";
  func7.confidential = true;
  setModuleName("genc");
  setLineNumber(9);    // compilenode import
  // Import of xmodule as xmodule
  if (typeof gracecode_xmodule == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module xmodule'));
  var var_xmodule = do_import("xmodule", gracecode_xmodule);
  var func8 = function(argcv) {    // method xmodule
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for xmodule"));
    setModuleName("genc");
    // xmodule is a simple accessor - elide try ... catch
    return var_xmodule;
  };
  func8.paramCounts = [0];
  this.methods["xmodule"] = func8;
  func8.definitionLine = 9;
  func8.definitionModule = "genc";
  func8.debug = "import";
  func8.confidential = true;
  setModuleName("genc");
  setLineNumber(44);    // compilenode method
  var func9 = function(argcv) {    // method out(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_s = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for out(1)"));
    setModuleName("genc");
    setLineNumber(45);    // compilenode identifier
    var call10 = callmethodChecked(var_output, "push", [1], var_s);
    return call10;
  };
  func9.paramCounts = [1];
  this.methods["out"] = func9;
  func9.definitionLine = 44;
  func9.definitionModule = "genc";
  setLineNumber(47);    // compilenode method
  var func11 = function(argcv) {    // method outprint(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_s = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for outprint(1)"));
    setModuleName("genc");
    setLineNumber(48);    // compilenode identifier
    var call12 = callmethodChecked(var_util, "outprint", [1], var_s);
    return call12;
  };
  func11.paramCounts = [1];
  this.methods["outprint"] = func11;
  func11.definitionLine = 47;
  func11.definitionModule = "genc";
  setLineNumber(50);    // compilenode method
  var func13 = function(argcv) {    // method outswitchup
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for outswitchup"));
    setModuleName("genc");
    setLineNumber(51);    // compilenode identifier
    var_output = var_topOutput;
    return GraceDone;
  };
  func13.paramCounts = [0];
  this.methods["outswitchup"] = func13;
  func13.definitionLine = 50;
  func13.definitionModule = "genc";
  setLineNumber(53);    // compilenode method
  var func14 = function(argcv) {    // method outswitchdown
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for outswitchdown"));
    setModuleName("genc");
    setLineNumber(54);    // compilenode identifier
    var_output = var_bottomOutput;
    return GraceDone;
  };
  func14.paramCounts = [0];
  this.methods["outswitchdown"] = func14;
  func14.definitionLine = 53;
  func14.definitionModule = "genc";
  setLineNumber(56);    // compilenode method
  var func15 = function(argcv) {    // method countnodebindings(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_n = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for countnodebindings(1)"));
    setModuleName("genc");
    var if16 = GraceDone;
    setLineNumber(57);    // compilenode string
    var string17 = new GraceString("if");
    var call19 = callmethodChecked(var_n, "kind", [0]);
    var opresult21 = callmethodChecked(call19, "==", [1], string17);
    if (Grace_isTrue(opresult21)) {
      setLineNumber(58);    // compilenode identifier
      var call22 = callmethodChecked(var_n, "elseblock", [0]);
      var call23 = callmethodChecked(call22, "body", [0]);
      onSelf = true;
      var call24 = callmethodChecked(this, "countbindings", [1], call23);
      var call26 = callmethodChecked(var_n, "thenblock", [0]);
      var call27 = callmethodChecked(call26, "body", [0]);
      onSelf = true;
      var call28 = callmethodChecked(this, "countbindings", [1], call27);
      var opresult30 = callmethodChecked(call28, "+", [1], call24);
      if16 = opresult30;
    } else {
      setLineNumber(60);    // compilenode num
      if16 = new GraceNum(0);
    }
    return if16;
  };
  func15.paramCounts = [1];
  this.methods["countnodebindings"] = func15;
  func15.definitionLine = 56;
  func15.definitionModule = "genc";
  setLineNumber(63);    // compilenode method
  var func31 = function(argcv) {    // method countbindings(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_l = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for countbindings(1)"));
    setModuleName("genc");
    setLineNumber(64);    // compilenode num
    var var_numslots = new GraceNum(0);
    setLineNumber(65);    // compilenode block
    var block32 = new GraceBlock(this, 65, 1);
    setLineNumber(1);    // compilenode identifier
    block32.real = function(var_n) {
      setLineNumber(66);    // compilenode identifier
      var call33 = callmethodChecked(var_n, "kind", [0]);
      var var_k = call33;
      var if34 = GraceDone;
      setLineNumber(67);    // compilenode string
      var string35 = new GraceString("typedec");
      var opresult38 = callmethodChecked(var_k, "==", [1], string35);
      var string40 = new GraceString("defdec");
      var opresult43 = callmethodChecked(var_k, "==", [1], string40);
      var string45 = new GraceString("vardec");
      var opresult48 = callmethodChecked(var_k, "==", [1], string45);
      var opresult50 = callmethodChecked(opresult48, "||", [1], opresult43);
      var opresult52 = callmethodChecked(opresult50, "||", [1], opresult38);
      if (Grace_isTrue(opresult52)) {
        setLineNumber(68);    // compilenode identifier
        var opresult55 = callmethodChecked(var_numslots, "+", [1], new GraceNum(1));
        var_numslots = opresult55;
        if34 = GraceDone;
      } else {
        var if56 = GraceDone;
        setLineNumber(69);    // compilenode string
        var string57 = new GraceString("if");
        var call59 = callmethodChecked(var_n, "kind", [0]);
        var opresult61 = callmethodChecked(call59, "==", [1], string57);
        if (Grace_isTrue(opresult61)) {
          setLineNumber(70);    // compilenode identifier
          onSelf = true;
          var call62 = callmethodChecked(this, "countnodebindings", [1], var_n);
          var opresult65 = callmethodChecked(var_numslots, "+", [1], call62);
          var_numslots = opresult65;
          if56 = GraceDone;
        }
        if34 = if56;
      }
      return if34;
    };
    var call66 = callmethodChecked(var_prelude, "for()do", [1, 1], var_l, block32);
    setLineNumber(73);    // compilenode identifier
    return var_numslots;
  };
  func31.paramCounts = [1];
  this.methods["countbindings"] = func31;
  func31.definitionLine = 63;
  func31.definitionModule = "genc";
  setLineNumber(75);    // compilenode method
  var func67 = function(argcv) {    // method definebindings(2)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_l = arguments[curarg];
    curarg++;
    var var_slot__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !== 2)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for definebindings(2)"));
    setModuleName("genc");
    setLineNumber(76);    // compilenode identifier
    var var_slot = var_slot__39__;
    setLineNumber(77);    // compilenode block
    var block68 = new GraceBlock(this, 77, 1);
    setLineNumber(1);    // compilenode identifier
    block68.real = function(var_n) {
      setLineNumber(78);    // compilenode identifier
      var call69 = callmethodChecked(var_n, "kind", [0]);
      var var_k = call69;
      var if70 = GraceDone;
      setLineNumber(79);    // compilenode string
      var string71 = new GraceString("typedec");
      var opresult74 = callmethodChecked(var_k, "==", [1], string71);
      var string76 = new GraceString("defdec");
      var opresult79 = callmethodChecked(var_k, "==", [1], string76);
      var string81 = new GraceString("vardec");
      var opresult84 = callmethodChecked(var_k, "==", [1], string81);
      var opresult86 = callmethodChecked(opresult84, "||", [1], opresult79);
      var opresult88 = callmethodChecked(opresult86, "||", [1], opresult74);
      if (Grace_isTrue(opresult88)) {
        setLineNumber(80);    // compilenode string
        var string89 = new GraceString("");
        var var_tnm = string89;
        setLineNumber(81);    // compilenode string
        var string90 = new GraceString("");
        var var_snm = string90;
        var if91 = GraceDone;
        setLineNumber(82);    // compilenode string
        var string92 = new GraceString("generic");
        var call94 = callmethodChecked(var_n, "name", [0]);
        var call95 = callmethodChecked(call94, "kind", [0]);
        var opresult97 = callmethodChecked(call95, "==", [1], string92);
        if (Grace_isTrue(opresult97)) {
          setLineNumber(83);    // compilenode identifier
          var call98 = callmethodChecked(var_n, "name", [0]);
          var call99 = callmethodChecked(call98, "value", [0]);
          var call100 = callmethodChecked(call99, "value", [0]);
          onSelf = true;
          var call101 = callmethodChecked(this, "escapeident", [1], call100);
          var_tnm = call101;
          setLineNumber(84);    // compilenode identifier
          var call102 = callmethodChecked(var_n, "name", [0]);
          var call103 = callmethodChecked(call102, "value", [0]);
          var call104 = callmethodChecked(call103, "value", [0]);
          onSelf = true;
          var call105 = callmethodChecked(this, "escapestring", [1], call104);
          var_snm = call105;
          if91 = GraceDone;
        } else {
          setLineNumber(86);    // compilenode identifier
          var call106 = callmethodChecked(var_n, "name", [0]);
          var call107 = callmethodChecked(call106, "value", [0]);
          onSelf = true;
          var call108 = callmethodChecked(this, "escapeident", [1], call107);
          var_tnm = call108;
          setLineNumber(87);    // compilenode identifier
          var call109 = callmethodChecked(var_n, "name", [0]);
          var call110 = callmethodChecked(call109, "value", [0]);
          onSelf = true;
          var call111 = callmethodChecked(this, "escapestring", [1], call110);
          var_snm = call111;
          if91 = GraceDone;
        }
        var if112 = GraceDone;
        setLineNumber(89);    // compilenode identifier
        var call113 = callmethodChecked(var_declaredvars, "contains", [1], var_tnm);
        var call114 = callmethodChecked(call113, "prefix!", [0]);
        if (Grace_isTrue(call114)) {
          setLineNumber(90);    // compilenode identifier
          var call115 = callmethodChecked(var_declaredvars, "push", [1], var_tnm);
          setLineNumber(91);    // compilenode string
          var string116 = new GraceString("]);");
          var string119 = new GraceString(" = &(stackframe->slots[");
          var string122 = new GraceString("  Object *var_");
          var opresult124 = callmethodChecked(string122, "++", [1], var_tnm);
          var opresult126 = callmethodChecked(opresult124, "++", [1], string119);
          var opresult128 = callmethodChecked(opresult126, "++", [1], var_slot);
          var opresult130 = callmethodChecked(opresult128, "++", [1], string116);
          onSelf = true;
          var call131 = callmethodChecked(this, "out", [1], opresult130);
          setLineNumber(92);    // compilenode string
          var string132 = new GraceString("\");");
          var string135 = new GraceString(", \"");
          var string138 = new GraceString("  setframeelementname(stackframe, ");
          var opresult140 = callmethodChecked(string138, "++", [1], var_slot);
          var opresult142 = callmethodChecked(opresult140, "++", [1], string135);
          var opresult144 = callmethodChecked(opresult142, "++", [1], var_snm);
          var opresult146 = callmethodChecked(opresult144, "++", [1], string132);
          onSelf = true;
          var call147 = callmethodChecked(this, "out", [1], opresult146);
          setLineNumber(93);    // compilenode identifier
          var opresult150 = callmethodChecked(var_slot, "+", [1], new GraceNum(1));
          var_slot = opresult150;
          if112 = GraceDone;
        }
        if70 = if112;
      } else {
        var if151 = GraceDone;
        setLineNumber(95);    // compilenode string
        var string152 = new GraceString("if");
        var opresult155 = callmethodChecked(var_k, "==", [1], string152);
        if (Grace_isTrue(opresult155)) {
          setLineNumber(96);    // compilenode identifier
          var call156 = callmethodChecked(var_n, "thenblock", [0]);
          var call157 = callmethodChecked(call156, "body", [0]);
          onSelf = true;
          var call158 = callmethodChecked(this, "definebindings", [2], call157, var_slot);
          var_slot = call158;
          setLineNumber(97);    // compilenode identifier
          var call159 = callmethodChecked(var_n, "elseblock", [0]);
          var call160 = callmethodChecked(call159, "body", [0]);
          onSelf = true;
          var call161 = callmethodChecked(this, "definebindings", [2], call160, var_slot);
          var_slot = call161;
          setLineNumber(98);    // compilenode identifier
          var call162 = callmethodChecked(var_n, "handledIdentifiers:=", [1], GraceTrue);
          if151 = call162;
        } else {
          var if163 = GraceDone;
          setLineNumber(99);    // compilenode string
          var string164 = new GraceString("import");
          var call166 = callmethodChecked(var_n, "kind", [0]);
          var opresult168 = callmethodChecked(call166, "==", [1], string164);
          if (Grace_isTrue(opresult168)) {
            setLineNumber(100);    // compilenode identifier
            var call169 = callmethodChecked(var_n, "nameString", [0]);
            onSelf = true;
            var call170 = callmethodChecked(this, "escapeident", [1], call169);
            var var_tnm = call170;
            setLineNumber(101);    // compilenode string
            var string171 = new GraceString(" = alloc_var();");
            var string174 = new GraceString("  Object *var_");
            var opresult176 = callmethodChecked(string174, "++", [1], var_tnm);
            var opresult178 = callmethodChecked(opresult176, "++", [1], string171);
            onSelf = true;
            var call179 = callmethodChecked(this, "out", [1], opresult178);
            if163 = call179;
          }
          if151 = if163;
        }
        if70 = if151;
      }
      return if70;
    };
    var call180 = callmethodChecked(var_prelude, "for()do", [1, 1], var_l, block68);
    setLineNumber(105);    // compilenode identifier
    return var_slot;
  };
  func67.paramCounts = [2];
  this.methods["definebindings"] = func67;
  func67.definitionLine = 75;
  func67.definitionModule = "genc";
  setLineNumber(107);    // compilenode method
  var func181 = function(argcv) {    // method beginblock(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_s = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for beginblock(1)"));
    setModuleName("genc");
    setLineNumber(108);    // compilenode string
    var string183 = new GraceString("%");
    var opresult185 = callmethodChecked(string183, "++", [1], var_s);
    var_bblock = opresult185;
    setLineNumber(109);    // compilenode string
    var string186 = new GraceString(":");
    var opresult189 = callmethodChecked(var_s, "++", [1], string186);
    onSelf = true;
    var call190 = callmethodChecked(this, "out", [1], opresult189);
    return call190;
  };
  func181.paramCounts = [1];
  this.methods["beginblock"] = func181;
  func181.definitionLine = 107;
  func181.definitionModule = "genc";
  setLineNumber(111);    // compilenode method
  var func191 = function(argcv) {    // method escapeident(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_s = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for escapeident(1)"));
    setModuleName("genc");
    setLineNumber(112);    // compilenode string
    var string192 = new GraceString("");
    var var_ns = string192;
    setLineNumber(113);    // compilenode block
    var block193 = new GraceBlock(this, 113, 1);
    setLineNumber(1);    // compilenode identifier
    block193.real = function(var_c) {
      setLineNumber(114);    // compilenode identifier
      var call194 = callmethodChecked(var_c, "ord", [0]);
      var var_o = call194;
      var if195 = GraceDone;
      setLineNumber(118);    // compilenode identifier
      var opresult198 = callmethodChecked(var_o, "==", [1], new GraceNum(95));
      setLineNumber(117);    // compilenode identifier
      var opresult202 = callmethodChecked(var_o, "\u2264", [1], new GraceNum(57));
      var opresult206 = callmethodChecked(var_o, "\u2265", [1], new GraceNum(48));
      var opresult208 = callmethodChecked(opresult206, "&&", [1], opresult202);
      setLineNumber(116);    // compilenode identifier
      var opresult212 = callmethodChecked(var_o, "\u2264", [1], new GraceNum(122));
      var opresult216 = callmethodChecked(var_o, "\u2265", [1], new GraceNum(97));
      var opresult218 = callmethodChecked(opresult216, "&&", [1], opresult212);
      setLineNumber(115);    // compilenode identifier
      var opresult222 = callmethodChecked(var_o, "\u2264", [1], new GraceNum(90));
      var opresult226 = callmethodChecked(var_o, "\u2265", [1], new GraceNum(65));
      var opresult228 = callmethodChecked(opresult226, "&&", [1], opresult222);
      var opresult230 = callmethodChecked(opresult228, "||", [1], opresult218);
      var opresult232 = callmethodChecked(opresult230, "||", [1], opresult208);
      var opresult234 = callmethodChecked(opresult232, "||", [1], opresult198);
      if (Grace_isTrue(opresult234)) {
        setLineNumber(119);    // compilenode identifier
        var opresult237 = callmethodChecked(var_ns, "++", [1], var_c);
        var_ns = opresult237;
        if195 = GraceDone;
      } else {
        setLineNumber(121);    // compilenode string
        var string238 = new GraceString("_");
        var string241 = new GraceString("_");
        var opresult243 = callmethodChecked(string241, "++", [1], var_o);
        var opresult245 = callmethodChecked(opresult243, "++", [1], string238);
        var opresult248 = callmethodChecked(var_ns, "++", [1], opresult245);
        var_ns = opresult248;
        if195 = GraceDone;
      }
      return if195;
    };
    var call249 = callmethodChecked(var_prelude, "for()do", [1, 1], var_s, block193);
    setLineNumber(124);    // compilenode identifier
    return var_ns;
  };
  func191.paramCounts = [1];
  this.methods["escapeident"] = func191;
  func191.definitionLine = 111;
  func191.definitionModule = "genc";
  setLineNumber(126);    // compilenode method
  var func250 = function(argcv) {    // method escapestring(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_s = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for escapestring(1)"));
    setModuleName("genc");
    setLineNumber(127);    // compilenode identifier
    var call251 = callmethodChecked(var_s, "_escape", [0]);
    return call251;
  };
  func250.paramCounts = [1];
  this.methods["escapestring"] = func250;
  func250.definitionLine = 126;
  func250.definitionModule = "genc";
  setLineNumber(129);    // compilenode method
  var func252 = function(argcv) {    // method escapestring2(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_s = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for escapestring2(1)"));
    setModuleName("genc");
    setLineNumber(130);    // compilenode string
    var string253 = new GraceString("");
    var var_ns = string253;
    setLineNumber(131);    // compilenode num
    var var_cd = new GraceNum(0);
    setLineNumber(132);    // compilenode identifier
    var var_ls = GraceFalse;
    setLineNumber(133);    // compilenode identifier
    onSelf = true;
    var call254 = callmethodChecked(this, "escapestring", [1], var_s);
    var block255 = new GraceBlock(this, 133, 1);
    setLineNumber(1);    // compilenode identifier
    block255.real = function(var_c) {
      var if256 = GraceDone;
      setLineNumber(134);    // compilenode string
      var string257 = new GraceString("\\");
      var opresult260 = callmethodChecked(var_c, "==", [1], string257);
      var opresult263 = callmethodChecked(var_ls, "&&", [1], opresult260);
      if (Grace_isTrue(opresult263)) {
        setLineNumber(135);    // compilenode identifier
        var_ls = GraceFalse;
        setLineNumber(136);    // compilenode string
        var string264 = new GraceString("\\\\");
        var opresult267 = callmethodChecked(var_ns, "++", [1], string264);
        var_ns = opresult267;
        if256 = GraceDone;
      } else {
        var if268 = GraceDone;
        setLineNumber(137);    // compilenode string
        var string269 = new GraceString("\\");
        var opresult272 = callmethodChecked(var_c, "==", [1], string269);
        if (Grace_isTrue(opresult272)) {
          setLineNumber(138);    // compilenode identifier
          var_ls = GraceTrue;
          if268 = GraceDone;
        } else {
          var if273 = GraceDone;
          setLineNumber(139);    // compilenode identifier
          if (Grace_isTrue(var_ls)) {
            setLineNumber(140);    // compilenode string
            var string275 = new GraceString("\"\"\\x");
            var opresult278 = callmethodChecked(var_ns, "++", [1], string275);
            var opresult280 = callmethodChecked(opresult278, "++", [1], var_c);
            var_ns = opresult280;
            setLineNumber(141);    // compilenode identifier
            var_ls = GraceFalse;
            setLineNumber(142);    // compilenode num
            var_cd = new GraceNum(2);
            if273 = GraceDone;
          } else {
            setLineNumber(144);    // compilenode identifier
            var opresult283 = callmethodChecked(var_ns, "++", [1], var_c);
            var_ns = opresult283;
            if273 = GraceDone;
          }
          if268 = if273;
        }
        if256 = if268;
      }
      var if284 = GraceDone;
      setLineNumber(146);    // compilenode identifier
      var opresult287 = callmethodChecked(var_cd, "==", [1], new GraceNum(1));
      if (Grace_isTrue(opresult287)) {
        setLineNumber(147);    // compilenode string
        var string288 = new GraceString("\"\"");
        var opresult291 = callmethodChecked(var_ns, "++", [1], string288);
        var_ns = opresult291;
        setLineNumber(148);    // compilenode num
        var_cd = new GraceNum(0);
        if284 = GraceDone;
      } else {
        var if292 = GraceDone;
        setLineNumber(149);    // compilenode identifier
        var opresult295 = callmethodChecked(var_cd, ">", [1], new GraceNum(0));
        if (Grace_isTrue(opresult295)) {
          setLineNumber(150);    // compilenode identifier
          var diff298 = callmethodChecked(var_cd, "-", [1], new GraceNum(1));
          var_cd = diff298;
          if292 = GraceDone;
        }
        if284 = if292;
      }
      return if284;
    };
    var call299 = callmethodChecked(var_prelude, "for()do", [1, 1], call254, block255);
    setLineNumber(153);    // compilenode identifier
    return var_ns;
  };
  func252.paramCounts = [1];
  this.methods["escapestring2"] = func252;
  func252.definitionLine = 129;
  func252.definitionModule = "genc";
  setLineNumber(155);    // compilenode method
  var func300 = function(argcv) {    // method compilearray(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compilearray(1)"));
    setModuleName("genc");
    setLineNumber(156);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(157);    // compilenode identifier
    var opresult303 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult303;
    setLineNumber(158);    // compilenode vardec
    var var_r;
    setLineNumber(159);    // compilenode string
    var string304 = new GraceString(";");
    var string307 = new GraceString(" = ");
    var string310 = new GraceString("  Object array");
    var opresult312 = callmethodChecked(string310, "++", [1], var_myc);
    var opresult314 = callmethodChecked(opresult312, "++", [1], string307);
    var opresult316 = callmethodChecked(opresult314, "++", [1], var_bracketConstructor);
    var opresult318 = callmethodChecked(opresult316, "++", [1], string304);
    onSelf = true;
    var call319 = callmethodChecked(this, "out", [1], opresult318);
    setLineNumber(160);    // compilenode string
    var string320 = new GraceString("  gc_pause();");
    onSelf = true;
    var call321 = callmethodChecked(this, "out", [1], string320);
    setLineNumber(161);    // compilenode num
    var var_i = new GraceNum(0);
    setLineNumber(162);    // compilenode identifier
    var call322 = callmethodChecked(var_o, "value", [0]);
    var block323 = new GraceBlock(this, 162, 1);
    setLineNumber(1);    // compilenode identifier
    block323.real = function(var_a) {
      setLineNumber(163);    // compilenode identifier
      onSelf = true;
      var call324 = callmethodChecked(this, "compilenode", [1], var_a);
      var_r = call324;
      setLineNumber(164);    // compilenode string
      var string325 = new GraceString(";");
      var string328 = new GraceString("  params[0] = ");
      var opresult330 = callmethodChecked(string328, "++", [1], var_r);
      var opresult332 = callmethodChecked(opresult330, "++", [1], string325);
      onSelf = true;
      var call333 = callmethodChecked(this, "out", [1], opresult332);
      setLineNumber(165);    // compilenode string
      var string334 = new GraceString("  partcv[0] = 1;");
      onSelf = true;
      var call335 = callmethodChecked(this, "out", [1], string334);
      setLineNumber(166);    // compilenode string
      var string336 = new GraceString(", \"push\", 1, partcv, params, CFLAG_SELF);");
      var string339 = new GraceString("  callmethodflags(array");
      var opresult341 = callmethodChecked(string339, "++", [1], var_myc);
      var opresult343 = callmethodChecked(opresult341, "++", [1], string336);
      onSelf = true;
      var call344 = callmethodChecked(this, "out", [1], opresult343);
      setLineNumber(167);    // compilenode identifier
      var opresult347 = callmethodChecked(var_i, "+", [1], new GraceNum(1));
      var_i = opresult347;
      return GraceDone;
    };
    var call348 = callmethodChecked(var_prelude, "for()do", [1, 1], call322, block323);
    setLineNumber(169);    // compilenode string
    var string349 = new GraceString("  gc_unpause();");
    onSelf = true;
    var call350 = callmethodChecked(this, "out", [1], string349);
    setLineNumber(170);    // compilenode string
    var string352 = new GraceString("array");
    var opresult354 = callmethodChecked(string352, "++", [1], var_myc);
    var call355 = callmethodChecked(var_o, "register:=", [1], opresult354);
    return call355;
  };
  func300.paramCounts = [1];
  this.methods["compilearray"] = func300;
  func300.definitionLine = 155;
  func300.definitionModule = "genc";
  setLineNumber(172);    // compilenode method
  var func356 = function(argcv) {    // method compilemember(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compilemember(1)"));
    setModuleName("genc");
    setLineNumber(174);    // compilenode identifier
    var call357 = callmethodChecked(var_o, "line", [0]);
    var call358 = callmethodChecked(var_util, "setline", [1], call357);
    setLineNumber(175);    // compilenode identifier
    var call360 = callmethodChecked(var_o, "value", [0]);
    var array361 = new PrimitiveGraceList([]);
    var call362 = callmethodChecked(var_ast, "callWithPart", [0]);
    var call363 = callmethodChecked(call362, "request()withArgs", [1, 1], call360, array361);
    var array359 = new PrimitiveGraceList([call363]);
    var call364 = callmethodChecked(var_ast, "callNode", [0]);
    var call365 = callmethodChecked(call364, "new", [2], var_o, array359);
    var var_c = call365;
    setLineNumber(176);    // compilenode identifier
    onSelf = true;
    var call366 = callmethodChecked(this, "compilenode", [1], var_c);
    var var_r = call366;
    setLineNumber(177);    // compilenode identifier
    var call367 = callmethodChecked(var_o, "register:=", [1], var_r);
    return call367;
  };
  func356.paramCounts = [1];
  this.methods["compilemember"] = func356;
  func356.definitionLine = 172;
  func356.definitionModule = "genc";
  setLineNumber(179);    // compilenode method
  var func368 = function(argcv) {    // method compileobjouter(2)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_selfr = arguments[curarg];
    curarg++;
    var var_outerRef = arguments[curarg];
    curarg++;
    if (argcv[0] !== 2)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compileobjouter(2)"));
    setModuleName("genc");
    setLineNumber(180);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(181);    // compilenode identifier
    var opresult371 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult371;
    setLineNumber(182);    // compilenode string
    var string372 = new GraceString("outer");
    var var_nm = string372;
    setLineNumber(183);    // compilenode identifier
    onSelf = true;
    var call373 = callmethodChecked(this, "escapestring2", [1], var_nm);
    var var_enm = call373;
    setLineNumber(184);    // compilenode string
    var string375 = new GraceString("// OBJECT OUTER DEC ");
    var opresult377 = callmethodChecked(string375, "++", [1], var_enm);
    onSelf = true;
    var call378 = callmethodChecked(this, "out", [1], opresult377);
    setLineNumber(185);    // compilenode string
    var string379 = new GraceString(", 0);");
    var string382 = new GraceString(", ");
    var string385 = new GraceString("  adddatum2(");
    var opresult387 = callmethodChecked(string385, "++", [1], var_selfr);
    var opresult389 = callmethodChecked(opresult387, "++", [1], string382);
    var opresult391 = callmethodChecked(opresult389, "++", [1], var_outerRef);
    var opresult393 = callmethodChecked(opresult391, "++", [1], string379);
    onSelf = true;
    var call394 = callmethodChecked(this, "out", [1], opresult393);
    setLineNumber(188);    // compilenode string
    var string395 = new GraceString("Object* args, int flags) {");
    setLineNumber(187);    // compilenode string
    var string397 = new GraceString("(Object self, int nparams, int *argcv, ");
    setLineNumber(186);    // compilenode string
    var string399 = new GraceString("");
    var string402 = new GraceString("_");
    var string405 = new GraceString("_");
    var string408 = new GraceString("Object reader_");
    var opresult410 = callmethodChecked(string408, "++", [1], var_escmodname);
    var opresult412 = callmethodChecked(opresult410, "++", [1], string405);
    var opresult414 = callmethodChecked(opresult412, "++", [1], var_enm);
    var opresult416 = callmethodChecked(opresult414, "++", [1], string402);
    var opresult418 = callmethodChecked(opresult416, "++", [1], var_myc);
    var opresult420 = callmethodChecked(opresult418, "++", [1], string399);
    var opresult422 = callmethodChecked(opresult420, "++", [1], string397);
    var opresult424 = callmethodChecked(opresult422, "++", [1], string395);
    onSelf = true;
    var call425 = callmethodChecked(this, "outprint", [1], opresult424);
    setLineNumber(189);    // compilenode string
    var string426 = new GraceString("  struct UserObject *uo = (struct UserObject*)self;");
    onSelf = true;
    var call427 = callmethodChecked(this, "outprint", [1], string426);
    setLineNumber(190);    // compilenode string
    var string428 = new GraceString("  return uo->data[0];");
    onSelf = true;
    var call429 = callmethodChecked(this, "outprint", [1], string428);
    setLineNumber(191);    // compilenode string
    var string430 = new GraceString("}");
    onSelf = true;
    var call431 = callmethodChecked(this, "outprint", [1], string430);
    setLineNumber(192);    // compilenode string
    var string432 = new GraceString(");");
    var string435 = new GraceString("_");
    var string438 = new GraceString("_");
    var string441 = new GraceString(",\"outer\", &reader_");
    var string444 = new GraceString("  addmethodreal(");
    var opresult446 = callmethodChecked(string444, "++", [1], var_selfr);
    var opresult448 = callmethodChecked(opresult446, "++", [1], string441);
    var opresult450 = callmethodChecked(opresult448, "++", [1], var_escmodname);
    var opresult452 = callmethodChecked(opresult450, "++", [1], string438);
    var opresult454 = callmethodChecked(opresult452, "++", [1], var_enm);
    var opresult456 = callmethodChecked(opresult454, "++", [1], string435);
    var opresult458 = callmethodChecked(opresult456, "++", [1], var_myc);
    var opresult460 = callmethodChecked(opresult458, "++", [1], string432);
    onSelf = true;
    var call461 = callmethodChecked(this, "out", [1], opresult460);
    return call461;
  };
  func368.paramCounts = [2];
  this.methods["compileobjouter"] = func368;
  func368.definitionLine = 179;
  func368.definitionModule = "genc";
  setLineNumber(194);    // compilenode method
  var func462 = function(argcv) {    // method compileobjtypemeth(3)
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
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compileobjtypemeth(3)"));
    setModuleName("genc");
    setLineNumber(195);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(196);    // compilenode identifier
    var opresult465 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult465;
    setLineNumber(197);    // compilenode identifier
    var call466 = callmethodChecked(var_o, "nameString", [0]);
    var var_nm = call466;
    setLineNumber(198);    // compilenode identifier
    onSelf = true;
    var call467 = callmethodChecked(this, "escapestring2", [1], var_nm);
    var var_enm = call467;
    setLineNumber(199);    // compilenode identifier
    onSelf = true;
    var call468 = callmethodChecked(this, "escapeident", [1], var_nm);
    var var_inm = call468;
    setLineNumber(202);    // compilenode string
    var string469 = new GraceString("Object* args, int flags) {");
    setLineNumber(201);    // compilenode string
    var string471 = new GraceString("(Object self, int nparams, int *argcv, ");
    setLineNumber(200);    // compilenode string
    var string473 = new GraceString("");
    var string476 = new GraceString("_");
    var string479 = new GraceString("_");
    var string482 = new GraceString("Object reader_");
    var opresult484 = callmethodChecked(string482, "++", [1], var_escmodname);
    var opresult486 = callmethodChecked(opresult484, "++", [1], string479);
    var opresult488 = callmethodChecked(opresult486, "++", [1], var_inm);
    var opresult490 = callmethodChecked(opresult488, "++", [1], string476);
    var opresult492 = callmethodChecked(opresult490, "++", [1], var_myc);
    var opresult494 = callmethodChecked(opresult492, "++", [1], string473);
    var opresult496 = callmethodChecked(opresult494, "++", [1], string471);
    var opresult498 = callmethodChecked(opresult496, "++", [1], string469);
    onSelf = true;
    var call499 = callmethodChecked(this, "outprint", [1], opresult498);
    setLineNumber(203);    // compilenode string
    var string500 = new GraceString("MFLAG_DEF");
    var var_flags = string500;
    setLineNumber(204);    // compilenode identifier
    var call501 = callmethodChecked(var_o, "annotations", [0]);
    var block502 = new GraceBlock(this, 204, 1);
    setLineNumber(1);    // compilenode identifier
    block502.real = function(var_ann) {
      var if503 = GraceDone;
      setLineNumber(205);    // compilenode block
      var block504 = new GraceBlock(this, 205, 0);
      block504.real = function() {
        var string505 = new GraceString("confidential");
        var call507 = callmethodChecked(var_ann, "value", [0]);
        var opresult509 = callmethodChecked(call507, "==", [1], string505);
        return opresult509;
      };
      var string511 = new GraceString("identifier");
      var call513 = callmethodChecked(var_ann, "kind", [0]);
      var opresult515 = callmethodChecked(call513, "==", [1], string511);
      var opresult517 = callmethodChecked(opresult515, "&&", [1], block504);
      if (Grace_isTrue(opresult517)) {
        setLineNumber(206);    // compilenode string
        var string518 = new GraceString(" | MFLAG_CONFIDENTIAL");
        var string521 = new GraceString("");
        var opresult523 = callmethodChecked(string521, "++", [1], var_flags);
        var opresult525 = callmethodChecked(opresult523, "++", [1], string518);
        var_flags = opresult525;
        if503 = GraceDone;
      }
      return if503;
    };
    var call526 = callmethodChecked(var_prelude, "for()do", [1, 1], call501, block502);
    setLineNumber(209);    // compilenode string
    var string527 = new GraceString("  struct UserObject *uo = (struct UserObject *)self;");
    onSelf = true;
    var call528 = callmethodChecked(this, "outprint", [1], string527);
    setLineNumber(210);    // compilenode string
    var string529 = new GraceString("];");
    var string532 = new GraceString("  return uo->data[");
    var opresult534 = callmethodChecked(string532, "++", [1], var_pos);
    var opresult536 = callmethodChecked(opresult534, "++", [1], string529);
    onSelf = true;
    var call537 = callmethodChecked(this, "outprint", [1], opresult536);
    setLineNumber(211);    // compilenode string
    var string538 = new GraceString("}");
    onSelf = true;
    var call539 = callmethodChecked(this, "outprint", [1], string538);
    setLineNumber(212);    // compilenode string
    var string540 = new GraceString(");");
    var string543 = new GraceString(", ");
    var string546 = new GraceString("_");
    var string549 = new GraceString("_");
    var string552 = new GraceString("\",&reader_");
    var string555 = new GraceString(", \"");
    var string558 = new GraceString(" = addmethodrealflags(");
    var string561 = new GraceString("  Method *reader");
    var opresult563 = callmethodChecked(string561, "++", [1], var_myc);
    var opresult565 = callmethodChecked(opresult563, "++", [1], string558);
    var opresult567 = callmethodChecked(opresult565, "++", [1], var_selfr);
    var opresult569 = callmethodChecked(opresult567, "++", [1], string555);
    var opresult571 = callmethodChecked(opresult569, "++", [1], var_enm);
    var opresult573 = callmethodChecked(opresult571, "++", [1], string552);
    var opresult575 = callmethodChecked(opresult573, "++", [1], var_escmodname);
    var opresult577 = callmethodChecked(opresult575, "++", [1], string549);
    var opresult579 = callmethodChecked(opresult577, "++", [1], var_inm);
    var opresult581 = callmethodChecked(opresult579, "++", [1], string546);
    var opresult583 = callmethodChecked(opresult581, "++", [1], var_myc);
    var opresult585 = callmethodChecked(opresult583, "++", [1], string543);
    var opresult587 = callmethodChecked(opresult585, "++", [1], var_flags);
    var opresult589 = callmethodChecked(opresult587, "++", [1], string540);
    onSelf = true;
    var call590 = callmethodChecked(this, "out", [1], opresult589);
    setLineNumber(213);    // compilenode string
    var string591 = new GraceString("->definitionModule = modulename;");
    var string594 = new GraceString("  reader");
    var opresult596 = callmethodChecked(string594, "++", [1], var_myc);
    var opresult598 = callmethodChecked(opresult596, "++", [1], string591);
    onSelf = true;
    var call599 = callmethodChecked(this, "out", [1], opresult598);
    setLineNumber(214);    // compilenode string
    var string600 = new GraceString(";");
    var call602 = callmethodChecked(var_o, "line", [0]);
    var string604 = new GraceString("->definitionLine = ");
    var string607 = new GraceString("  reader");
    var opresult609 = callmethodChecked(string607, "++", [1], var_myc);
    var opresult611 = callmethodChecked(opresult609, "++", [1], string604);
    var opresult613 = callmethodChecked(opresult611, "++", [1], call602);
    var opresult615 = callmethodChecked(opresult613, "++", [1], string600);
    onSelf = true;
    var call616 = callmethodChecked(this, "out", [1], opresult615);
    return call616;
  };
  func462.paramCounts = [3];
  this.methods["compileobjtypemeth"] = func462;
  func462.definitionLine = 194;
  func462.definitionModule = "genc";
  setLineNumber(216);    // compilenode method
  var func617 = function(argcv) {    // method compileobjdefdecdata(3)
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
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compileobjdefdecdata(3)"));
    setModuleName("genc");
    setLineNumber(217);    // compilenode string
    var string618 = new GraceString("undefined");
    var var_val = string618;
    var if619 = GraceDone;
    setLineNumber(218);    // compilenode identifier
    var call620 = callmethodChecked(var_o, "value", [0]);
    var opresult623 = callmethodChecked(GraceFalse, "\u2260", [1], call620);
    if (Grace_isTrue(opresult623)) {
      var if624 = GraceDone;
      setLineNumber(219);    // compilenode string
      var string625 = new GraceString("object");
      var call627 = callmethodChecked(var_o, "value", [0]);
      var call628 = callmethodChecked(call627, "kind", [0]);
      var opresult630 = callmethodChecked(call628, "==", [1], string625);
      if (Grace_isTrue(opresult630)) {
        setLineNumber(220);    // compilenode identifier
        var call631 = callmethodChecked(var_o, "value", [0]);
        onSelf = true;
        var call632 = callmethodChecked(this, "compileobject", [2], call631, var_selfr);
        setLineNumber(221);    // compilenode identifier
        var call633 = callmethodChecked(var_o, "value", [0]);
        var call634 = callmethodChecked(call633, "register", [0]);
        var_val = call634;
        if624 = GraceDone;
      } else {
        setLineNumber(223);    // compilenode identifier
        var call635 = callmethodChecked(var_o, "value", [0]);
        onSelf = true;
        var call636 = callmethodChecked(this, "compilenode", [1], call635);
        var_val = call636;
        if624 = GraceDone;
      }
      if619 = if624;
    }
    setLineNumber(226);    // compilenode string
    var string637 = new GraceString(");");
    var string640 = new GraceString(", ");
    var string643 = new GraceString(", ");
    var string646 = new GraceString("  adddatum2(");
    var opresult648 = callmethodChecked(string646, "++", [1], var_selfr);
    var opresult650 = callmethodChecked(opresult648, "++", [1], string643);
    var opresult652 = callmethodChecked(opresult650, "++", [1], var_val);
    var opresult654 = callmethodChecked(opresult652, "++", [1], string640);
    var opresult656 = callmethodChecked(opresult654, "++", [1], var_pos);
    var opresult658 = callmethodChecked(opresult656, "++", [1], string637);
    onSelf = true;
    var call659 = callmethodChecked(this, "out", [1], opresult658);
    var if660 = GraceDone;
    setLineNumber(227);    // compilenode string
    var string661 = new GraceString("parent");
    var call662 = callmethodChecked(var_ast, "findAnnotation", [2], var_o, string661);
    if (Grace_isTrue(call662)) {
      setLineNumber(228);    // compilenode string
      var string663 = new GraceString(";");
      var string666 = new GraceString(")->super = ");
      var string669 = new GraceString("  ((struct UserObject *)");
      var opresult671 = callmethodChecked(string669, "++", [1], var_selfr);
      var opresult673 = callmethodChecked(opresult671, "++", [1], string666);
      var opresult675 = callmethodChecked(opresult673, "++", [1], var_val);
      var opresult677 = callmethodChecked(opresult675, "++", [1], string663);
      onSelf = true;
      var call678 = callmethodChecked(this, "out", [1], opresult677);
      if660 = call678;
    }
    return if660;
  };
  func617.paramCounts = [3];
  this.methods["compileobjdefdecdata"] = func617;
  func617.definitionLine = 216;
  func617.definitionModule = "genc";
  setLineNumber(231);    // compilenode method
  var func679 = function(argcv) {    // method compileobjdefdecmeth(3)
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
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compileobjdefdecmeth(3)"));
    setModuleName("genc");
    setLineNumber(232);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(233);    // compilenode identifier
    var opresult682 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult682;
    setLineNumber(234);    // compilenode identifier
    var call683 = callmethodChecked(var_o, "name", [0]);
    var call684 = callmethodChecked(call683, "value", [0]);
    var var_nm = call684;
    setLineNumber(235);    // compilenode identifier
    onSelf = true;
    var call685 = callmethodChecked(this, "escapestring2", [1], var_nm);
    var var_enm = call685;
    setLineNumber(236);    // compilenode identifier
    onSelf = true;
    var call686 = callmethodChecked(this, "escapeident", [1], var_nm);
    var var_inm = call686;
    setLineNumber(239);    // compilenode string
    var string687 = new GraceString("Object* args, int flags) {");
    setLineNumber(238);    // compilenode string
    var string689 = new GraceString("(Object self, int nparams, int *argcv, ");
    setLineNumber(237);    // compilenode string
    var string691 = new GraceString("");
    var string694 = new GraceString("_");
    var string697 = new GraceString("_");
    var string700 = new GraceString("Object reader_");
    var opresult702 = callmethodChecked(string700, "++", [1], var_escmodname);
    var opresult704 = callmethodChecked(opresult702, "++", [1], string697);
    var opresult706 = callmethodChecked(opresult704, "++", [1], var_inm);
    var opresult708 = callmethodChecked(opresult706, "++", [1], string694);
    var opresult710 = callmethodChecked(opresult708, "++", [1], var_myc);
    var opresult712 = callmethodChecked(opresult710, "++", [1], string691);
    var opresult714 = callmethodChecked(opresult712, "++", [1], string689);
    var opresult716 = callmethodChecked(opresult714, "++", [1], string687);
    onSelf = true;
    var call717 = callmethodChecked(this, "outprint", [1], opresult716);
    setLineNumber(240);    // compilenode string
    var string718 = new GraceString("MFLAG_DEF");
    var var_flags = string718;
    setLineNumber(241);    // compilenode identifier
    var var_isPublic = GraceFalse;
    setLineNumber(242);    // compilenode identifier
    var call719 = callmethodChecked(var_o, "annotations", [0]);
    var block720 = new GraceBlock(this, 242, 1);
    setLineNumber(1);    // compilenode identifier
    block720.real = function(var_ann) {
      var if721 = GraceDone;
      setLineNumber(243);    // compilenode block
      var block722 = new GraceBlock(this, 243, 0);
      block722.real = function() {
        var string723 = new GraceString("public");
        var call725 = callmethodChecked(var_ann, "value", [0]);
        var opresult727 = callmethodChecked(call725, "==", [1], string723);
        return opresult727;
      };
      var string729 = new GraceString("identifier");
      var call731 = callmethodChecked(var_ann, "kind", [0]);
      var opresult733 = callmethodChecked(call731, "==", [1], string729);
      var opresult735 = callmethodChecked(opresult733, "&&", [1], block722);
      if (Grace_isTrue(opresult735)) {
        setLineNumber(244);    // compilenode identifier
        var_isPublic = GraceTrue;
        if721 = GraceDone;
      }
      var if736 = GraceDone;
      setLineNumber(246);    // compilenode block
      var block737 = new GraceBlock(this, 246, 0);
      block737.real = function() {
        var string738 = new GraceString("readable");
        var call740 = callmethodChecked(var_ann, "value", [0]);
        var opresult742 = callmethodChecked(call740, "==", [1], string738);
        return opresult742;
      };
      var string744 = new GraceString("identifier");
      var call746 = callmethodChecked(var_ann, "kind", [0]);
      var opresult748 = callmethodChecked(call746, "==", [1], string744);
      var opresult750 = callmethodChecked(opresult748, "&&", [1], block737);
      if (Grace_isTrue(opresult750)) {
        setLineNumber(247);    // compilenode identifier
        var_isPublic = GraceTrue;
        if736 = GraceDone;
      }
      return if736;
    };
    var call751 = callmethodChecked(var_prelude, "for()do", [1, 1], call719, block720);
    var if752 = GraceDone;
    setLineNumber(250);    // compilenode identifier
    var call753 = callmethodChecked(var_isPublic, "prefix!", [0]);
    if (Grace_isTrue(call753)) {
      setLineNumber(251);    // compilenode string
      var string754 = new GraceString(" | MFLAG_CONFIDENTIAL");
      var string757 = new GraceString("");
      var opresult759 = callmethodChecked(string757, "++", [1], var_flags);
      var opresult761 = callmethodChecked(opresult759, "++", [1], string754);
      var_flags = opresult761;
      if752 = GraceDone;
    }
    setLineNumber(253);    // compilenode string
    var string762 = new GraceString("  struct UserObject *uo = (struct UserObject *)self;");
    onSelf = true;
    var call763 = callmethodChecked(this, "outprint", [1], string762);
    setLineNumber(254);    // compilenode string
    var string764 = new GraceString("];");
    var string767 = new GraceString("  return uo->data[");
    var opresult769 = callmethodChecked(string767, "++", [1], var_pos);
    var opresult771 = callmethodChecked(opresult769, "++", [1], string764);
    onSelf = true;
    var call772 = callmethodChecked(this, "outprint", [1], opresult771);
    setLineNumber(255);    // compilenode string
    var string773 = new GraceString("}");
    onSelf = true;
    var call774 = callmethodChecked(this, "outprint", [1], string773);
    setLineNumber(256);    // compilenode string
    var string775 = new GraceString(");");
    var string778 = new GraceString(", ");
    var string781 = new GraceString("_");
    var string784 = new GraceString("_");
    var string787 = new GraceString("\",&reader_");
    var string790 = new GraceString(", \"");
    var string793 = new GraceString(" = addmethodrealflags(");
    var string796 = new GraceString("  Method *reader");
    var opresult798 = callmethodChecked(string796, "++", [1], var_myc);
    var opresult800 = callmethodChecked(opresult798, "++", [1], string793);
    var opresult802 = callmethodChecked(opresult800, "++", [1], var_selfr);
    var opresult804 = callmethodChecked(opresult802, "++", [1], string790);
    var opresult806 = callmethodChecked(opresult804, "++", [1], var_enm);
    var opresult808 = callmethodChecked(opresult806, "++", [1], string787);
    var opresult810 = callmethodChecked(opresult808, "++", [1], var_escmodname);
    var opresult812 = callmethodChecked(opresult810, "++", [1], string784);
    var opresult814 = callmethodChecked(opresult812, "++", [1], var_inm);
    var opresult816 = callmethodChecked(opresult814, "++", [1], string781);
    var opresult818 = callmethodChecked(opresult816, "++", [1], var_myc);
    var opresult820 = callmethodChecked(opresult818, "++", [1], string778);
    var opresult822 = callmethodChecked(opresult820, "++", [1], var_flags);
    var opresult824 = callmethodChecked(opresult822, "++", [1], string775);
    onSelf = true;
    var call825 = callmethodChecked(this, "out", [1], opresult824);
    setLineNumber(257);    // compilenode string
    var string826 = new GraceString("->definitionModule = modulename;");
    var string829 = new GraceString("  reader");
    var opresult831 = callmethodChecked(string829, "++", [1], var_myc);
    var opresult833 = callmethodChecked(opresult831, "++", [1], string826);
    onSelf = true;
    var call834 = callmethodChecked(this, "out", [1], opresult833);
    setLineNumber(258);    // compilenode string
    var string835 = new GraceString(";");
    var call837 = callmethodChecked(var_o, "line", [0]);
    var string839 = new GraceString("->definitionLine = ");
    var string842 = new GraceString("  reader");
    var opresult844 = callmethodChecked(string842, "++", [1], var_myc);
    var opresult846 = callmethodChecked(opresult844, "++", [1], string839);
    var opresult848 = callmethodChecked(opresult846, "++", [1], call837);
    var opresult850 = callmethodChecked(opresult848, "++", [1], string835);
    onSelf = true;
    var call851 = callmethodChecked(this, "out", [1], opresult850);
    return call851;
  };
  func679.paramCounts = [3];
  this.methods["compileobjdefdecmeth"] = func679;
  func679.definitionLine = 231;
  func679.definitionModule = "genc";
  setLineNumber(260);    // compilenode method
  var func852 = function(argcv) {    // method compileobjdefdec(3)
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
    setModuleName("genc");
    setLineNumber(261);    // compilenode string
    var string853 = new GraceString("undefined");
    var var_val = string853;
    var if854 = GraceDone;
    setLineNumber(262);    // compilenode identifier
    var call855 = callmethodChecked(var_o, "value", [0]);
    var opresult858 = callmethodChecked(GraceFalse, "\u2260", [1], call855);
    if (Grace_isTrue(opresult858)) {
      var if859 = GraceDone;
      setLineNumber(263);    // compilenode string
      var string860 = new GraceString("object");
      var call862 = callmethodChecked(var_o, "value", [0]);
      var call863 = callmethodChecked(call862, "kind", [0]);
      var opresult865 = callmethodChecked(call863, "==", [1], string860);
      if (Grace_isTrue(opresult865)) {
        setLineNumber(264);    // compilenode identifier
        var call866 = callmethodChecked(var_o, "value", [0]);
        onSelf = true;
        var call867 = callmethodChecked(this, "compileobject", [2], call866, var_selfr);
        setLineNumber(265);    // compilenode identifier
        var call868 = callmethodChecked(var_o, "value", [0]);
        var call869 = callmethodChecked(call868, "register", [0]);
        var_val = call869;
        if859 = GraceDone;
      } else {
        setLineNumber(267);    // compilenode identifier
        var call870 = callmethodChecked(var_o, "value", [0]);
        onSelf = true;
        var call871 = callmethodChecked(this, "compilenode", [1], call870);
        var_val = call871;
        if859 = GraceDone;
      }
      if854 = if859;
    }
    setLineNumber(270);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(271);    // compilenode identifier
    var opresult874 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult874;
    setLineNumber(272);    // compilenode identifier
    var call875 = callmethodChecked(var_o, "name", [0]);
    var call876 = callmethodChecked(call875, "value", [0]);
    var var_nm = call876;
    setLineNumber(273);    // compilenode identifier
    onSelf = true;
    var call877 = callmethodChecked(this, "escapestring2", [1], var_nm);
    var var_enm = call877;
    setLineNumber(274);    // compilenode identifier
    onSelf = true;
    var call878 = callmethodChecked(this, "escapeident", [1], var_nm);
    var var_inm = call878;
    setLineNumber(275);    // compilenode string
    var string880 = new GraceString("// OBJECT CONST DEC ");
    var opresult882 = callmethodChecked(string880, "++", [1], var_enm);
    onSelf = true;
    var call883 = callmethodChecked(this, "out", [1], opresult882);
    setLineNumber(276);    // compilenode string
    var string884 = new GraceString(");");
    var string887 = new GraceString(", ");
    var string890 = new GraceString(", ");
    var string893 = new GraceString("  adddatum2(");
    var opresult895 = callmethodChecked(string893, "++", [1], var_selfr);
    var opresult897 = callmethodChecked(opresult895, "++", [1], string890);
    var opresult899 = callmethodChecked(opresult897, "++", [1], var_val);
    var opresult901 = callmethodChecked(opresult899, "++", [1], string887);
    var opresult903 = callmethodChecked(opresult901, "++", [1], var_pos);
    var opresult905 = callmethodChecked(opresult903, "++", [1], string884);
    onSelf = true;
    var call906 = callmethodChecked(this, "out", [1], opresult905);
    setLineNumber(279);    // compilenode string
    var string907 = new GraceString("Object* args, int flags) {");
    setLineNumber(278);    // compilenode string
    var string909 = new GraceString("(Object self, int nparams, int *argcv, ");
    setLineNumber(277);    // compilenode string
    var string911 = new GraceString("");
    var string914 = new GraceString("_");
    var string917 = new GraceString("_");
    var string920 = new GraceString("Object reader_");
    var opresult922 = callmethodChecked(string920, "++", [1], var_escmodname);
    var opresult924 = callmethodChecked(opresult922, "++", [1], string917);
    var opresult926 = callmethodChecked(opresult924, "++", [1], var_inm);
    var opresult928 = callmethodChecked(opresult926, "++", [1], string914);
    var opresult930 = callmethodChecked(opresult928, "++", [1], var_myc);
    var opresult932 = callmethodChecked(opresult930, "++", [1], string911);
    var opresult934 = callmethodChecked(opresult932, "++", [1], string909);
    var opresult936 = callmethodChecked(opresult934, "++", [1], string907);
    onSelf = true;
    var call937 = callmethodChecked(this, "outprint", [1], opresult936);
    setLineNumber(280);    // compilenode string
    var string938 = new GraceString("  struct UserObject *uo = (struct UserObject *)self;");
    onSelf = true;
    var call939 = callmethodChecked(this, "outprint", [1], string938);
    setLineNumber(281);    // compilenode string
    var string940 = new GraceString("];");
    var string943 = new GraceString("  return uo->data[");
    var opresult945 = callmethodChecked(string943, "++", [1], var_pos);
    var opresult947 = callmethodChecked(opresult945, "++", [1], string940);
    onSelf = true;
    var call948 = callmethodChecked(this, "outprint", [1], opresult947);
    setLineNumber(282);    // compilenode string
    var string949 = new GraceString("}");
    onSelf = true;
    var call950 = callmethodChecked(this, "outprint", [1], string949);
    setLineNumber(283);    // compilenode string
    var string951 = new GraceString(", MFLAG_DEF);");
    var string954 = new GraceString("_");
    var string957 = new GraceString("_");
    var string960 = new GraceString("\",&reader_");
    var string963 = new GraceString(", \"");
    var string966 = new GraceString(" = addmethodrealflags(");
    var string969 = new GraceString("  Method *reader");
    var opresult971 = callmethodChecked(string969, "++", [1], var_myc);
    var opresult973 = callmethodChecked(opresult971, "++", [1], string966);
    var opresult975 = callmethodChecked(opresult973, "++", [1], var_selfr);
    var opresult977 = callmethodChecked(opresult975, "++", [1], string963);
    var opresult979 = callmethodChecked(opresult977, "++", [1], var_enm);
    var opresult981 = callmethodChecked(opresult979, "++", [1], string960);
    var opresult983 = callmethodChecked(opresult981, "++", [1], var_escmodname);
    var opresult985 = callmethodChecked(opresult983, "++", [1], string957);
    var opresult987 = callmethodChecked(opresult985, "++", [1], var_inm);
    var opresult989 = callmethodChecked(opresult987, "++", [1], string954);
    var opresult991 = callmethodChecked(opresult989, "++", [1], var_myc);
    var opresult993 = callmethodChecked(opresult991, "++", [1], string951);
    onSelf = true;
    var call994 = callmethodChecked(this, "out", [1], opresult993);
    return call994;
  };
  func852.paramCounts = [3];
  this.methods["compileobjdefdec"] = func852;
  func852.definitionLine = 260;
  func852.definitionModule = "genc";
  setLineNumber(285);    // compilenode method
  var func995 = function(argcv) {    // method compileobjvardecdata(3)
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
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compileobjvardecdata(3)"));
    setModuleName("genc");
    setLineNumber(286);    // compilenode string
    var string996 = new GraceString("undefined");
    var var_val = string996;
    var if997 = GraceDone;
    setLineNumber(287);    // compilenode identifier
    var call998 = callmethodChecked(var_o, "value", [0]);
    var opresult1001 = callmethodChecked(GraceFalse, "\u2260", [1], call998);
    if (Grace_isTrue(opresult1001)) {
      setLineNumber(288);    // compilenode identifier
      var call1002 = callmethodChecked(var_o, "value", [0]);
      onSelf = true;
      var call1003 = callmethodChecked(this, "compilenode", [1], call1002);
      var_val = call1003;
      if997 = GraceDone;
    }
    setLineNumber(290);    // compilenode string
    var string1004 = new GraceString(");");
    var string1007 = new GraceString(", ");
    var string1010 = new GraceString(", ");
    var string1013 = new GraceString("  adddatum2(");
    var opresult1015 = callmethodChecked(string1013, "++", [1], var_selfr);
    var opresult1017 = callmethodChecked(opresult1015, "++", [1], string1010);
    var opresult1019 = callmethodChecked(opresult1017, "++", [1], var_val);
    var opresult1021 = callmethodChecked(opresult1019, "++", [1], string1007);
    var opresult1023 = callmethodChecked(opresult1021, "++", [1], var_pos);
    var opresult1025 = callmethodChecked(opresult1023, "++", [1], string1004);
    onSelf = true;
    var call1026 = callmethodChecked(this, "out", [1], opresult1025);
    return call1026;
  };
  func995.paramCounts = [3];
  this.methods["compileobjvardecdata"] = func995;
  func995.definitionLine = 285;
  func995.definitionModule = "genc";
  setLineNumber(292);    // compilenode method
  var func1027 = function(argcv) {    // method compileobjvardecmeth(3)
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
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compileobjvardecmeth(3)"));
    setModuleName("genc");
    setLineNumber(293);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(294);    // compilenode identifier
    var opresult1030 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult1030;
    setLineNumber(295);    // compilenode identifier
    var call1031 = callmethodChecked(var_o, "name", [0]);
    var call1032 = callmethodChecked(call1031, "value", [0]);
    var var_nm = call1032;
    setLineNumber(296);    // compilenode identifier
    onSelf = true;
    var call1033 = callmethodChecked(this, "escapestring2", [1], var_nm);
    var var_enm = call1033;
    setLineNumber(297);    // compilenode identifier
    onSelf = true;
    var call1034 = callmethodChecked(this, "escapeident", [1], var_nm);
    var var_inm = call1034;
    setLineNumber(300);    // compilenode string
    var string1035 = new GraceString("Object* args, int flags) {");
    setLineNumber(299);    // compilenode string
    var string1037 = new GraceString("(Object self, int nparams, int *argcv, ");
    setLineNumber(298);    // compilenode string
    var string1039 = new GraceString("");
    var string1042 = new GraceString("_");
    var string1045 = new GraceString("_");
    var string1048 = new GraceString("Object reader_");
    var opresult1050 = callmethodChecked(string1048, "++", [1], var_escmodname);
    var opresult1052 = callmethodChecked(opresult1050, "++", [1], string1045);
    var opresult1054 = callmethodChecked(opresult1052, "++", [1], var_inm);
    var opresult1056 = callmethodChecked(opresult1054, "++", [1], string1042);
    var opresult1058 = callmethodChecked(opresult1056, "++", [1], var_myc);
    var opresult1060 = callmethodChecked(opresult1058, "++", [1], string1039);
    var opresult1062 = callmethodChecked(opresult1060, "++", [1], string1037);
    var opresult1064 = callmethodChecked(opresult1062, "++", [1], string1035);
    onSelf = true;
    var call1065 = callmethodChecked(this, "outprint", [1], opresult1064);
    setLineNumber(301);    // compilenode string
    var string1066 = new GraceString("MFLAG_CONFIDENTIAL");
    var var_rflags = string1066;
    setLineNumber(302);    // compilenode string
    var string1067 = new GraceString("MFLAG_CONFIDENTIAL");
    var var_wflags = string1067;
    setLineNumber(303);    // compilenode identifier
    var call1068 = callmethodChecked(var_o, "annotations", [0]);
    var block1069 = new GraceBlock(this, 303, 1);
    setLineNumber(1);    // compilenode identifier
    block1069.real = function(var_ann) {
      var if1070 = GraceDone;
      setLineNumber(304);    // compilenode block
      var block1071 = new GraceBlock(this, 304, 0);
      block1071.real = function() {
        var string1072 = new GraceString("public");
        var call1074 = callmethodChecked(var_ann, "value", [0]);
        var opresult1076 = callmethodChecked(call1074, "==", [1], string1072);
        return opresult1076;
      };
      var string1078 = new GraceString("identifier");
      var call1080 = callmethodChecked(var_ann, "kind", [0]);
      var opresult1082 = callmethodChecked(call1080, "==", [1], string1078);
      var opresult1084 = callmethodChecked(opresult1082, "&&", [1], block1071);
      if (Grace_isTrue(opresult1084)) {
        setLineNumber(305);    // compilenode string
        var string1085 = new GraceString("0");
        var_rflags = string1085;
        setLineNumber(306);    // compilenode string
        var string1086 = new GraceString("0");
        var_wflags = string1086;
        if1070 = GraceDone;
      }
      var if1087 = GraceDone;
      setLineNumber(308);    // compilenode block
      var block1088 = new GraceBlock(this, 308, 0);
      block1088.real = function() {
        var string1089 = new GraceString("readable");
        var call1091 = callmethodChecked(var_ann, "value", [0]);
        var opresult1093 = callmethodChecked(call1091, "==", [1], string1089);
        return opresult1093;
      };
      var string1095 = new GraceString("identifier");
      var call1097 = callmethodChecked(var_ann, "kind", [0]);
      var opresult1099 = callmethodChecked(call1097, "==", [1], string1095);
      var opresult1101 = callmethodChecked(opresult1099, "&&", [1], block1088);
      if (Grace_isTrue(opresult1101)) {
        setLineNumber(309);    // compilenode string
        var string1102 = new GraceString("0");
        var_rflags = string1102;
        if1087 = GraceDone;
      }
      var if1103 = GraceDone;
      setLineNumber(311);    // compilenode block
      var block1104 = new GraceBlock(this, 311, 0);
      block1104.real = function() {
        var string1105 = new GraceString("writable");
        var call1107 = callmethodChecked(var_ann, "value", [0]);
        var opresult1109 = callmethodChecked(call1107, "==", [1], string1105);
        return opresult1109;
      };
      var string1111 = new GraceString("identifier");
      var call1113 = callmethodChecked(var_ann, "kind", [0]);
      var opresult1115 = callmethodChecked(call1113, "==", [1], string1111);
      var opresult1117 = callmethodChecked(opresult1115, "&&", [1], block1104);
      if (Grace_isTrue(opresult1117)) {
        setLineNumber(312);    // compilenode string
        var string1118 = new GraceString("0");
        var_wflags = string1118;
        if1103 = GraceDone;
      }
      return if1103;
    };
    var call1119 = callmethodChecked(var_prelude, "for()do", [1, 1], call1068, block1069);
    setLineNumber(315);    // compilenode string
    var string1120 = new GraceString("  struct UserObject *uo = (struct UserObject *)self;");
    onSelf = true;
    var call1121 = callmethodChecked(this, "outprint", [1], string1120);
    setLineNumber(316);    // compilenode string
    var string1122 = new GraceString("];");
    var string1125 = new GraceString("  return uo->data[");
    var opresult1127 = callmethodChecked(string1125, "++", [1], var_pos);
    var opresult1129 = callmethodChecked(opresult1127, "++", [1], string1122);
    onSelf = true;
    var call1130 = callmethodChecked(this, "outprint", [1], opresult1129);
    setLineNumber(317);    // compilenode string
    var string1131 = new GraceString("}");
    onSelf = true;
    var call1132 = callmethodChecked(this, "outprint", [1], string1131);
    setLineNumber(318);    // compilenode string
    var string1133 = new GraceString(");");
    var string1136 = new GraceString(", ");
    var string1139 = new GraceString("_");
    var string1142 = new GraceString("_");
    var string1145 = new GraceString("\",&reader_");
    var string1148 = new GraceString(", \"");
    var string1151 = new GraceString(" = addmethodrealflags(");
    var string1154 = new GraceString("  Method *reader");
    var opresult1156 = callmethodChecked(string1154, "++", [1], var_myc);
    var opresult1158 = callmethodChecked(opresult1156, "++", [1], string1151);
    var opresult1160 = callmethodChecked(opresult1158, "++", [1], var_selfr);
    var opresult1162 = callmethodChecked(opresult1160, "++", [1], string1148);
    var opresult1164 = callmethodChecked(opresult1162, "++", [1], var_enm);
    var opresult1166 = callmethodChecked(opresult1164, "++", [1], string1145);
    var opresult1168 = callmethodChecked(opresult1166, "++", [1], var_escmodname);
    var opresult1170 = callmethodChecked(opresult1168, "++", [1], string1142);
    var opresult1172 = callmethodChecked(opresult1170, "++", [1], var_inm);
    var opresult1174 = callmethodChecked(opresult1172, "++", [1], string1139);
    var opresult1176 = callmethodChecked(opresult1174, "++", [1], var_myc);
    var opresult1178 = callmethodChecked(opresult1176, "++", [1], string1136);
    var opresult1180 = callmethodChecked(opresult1178, "++", [1], var_rflags);
    var opresult1182 = callmethodChecked(opresult1180, "++", [1], string1133);
    onSelf = true;
    var call1183 = callmethodChecked(this, "out", [1], opresult1182);
    setLineNumber(319);    // compilenode string
    var string1184 = new GraceString(":=");
    var opresult1187 = callmethodChecked(var_nm, "++", [1], string1184);
    var var_nmw = opresult1187;
    setLineNumber(320);    // compilenode identifier
    onSelf = true;
    var call1188 = callmethodChecked(this, "escapestring2", [1], var_nmw);
    var_nmw = call1188;
    setLineNumber(323);    // compilenode string
    var string1189 = new GraceString("Object* args, int flags) {");
    setLineNumber(322);    // compilenode string
    var string1191 = new GraceString("(Object self, int nparams, int *argcv, ");
    setLineNumber(321);    // compilenode string
    var string1193 = new GraceString("");
    var string1196 = new GraceString("_");
    var string1199 = new GraceString("_");
    var string1202 = new GraceString("Object writer_");
    var opresult1204 = callmethodChecked(string1202, "++", [1], var_escmodname);
    var opresult1206 = callmethodChecked(opresult1204, "++", [1], string1199);
    var opresult1208 = callmethodChecked(opresult1206, "++", [1], var_inm);
    var opresult1210 = callmethodChecked(opresult1208, "++", [1], string1196);
    var opresult1212 = callmethodChecked(opresult1210, "++", [1], var_myc);
    var opresult1214 = callmethodChecked(opresult1212, "++", [1], string1193);
    var opresult1216 = callmethodChecked(opresult1214, "++", [1], string1191);
    var opresult1218 = callmethodChecked(opresult1216, "++", [1], string1189);
    onSelf = true;
    var call1219 = callmethodChecked(this, "outprint", [1], opresult1218);
    setLineNumber(324);    // compilenode string
    var string1220 = new GraceString("  struct UserObject *uo = (struct UserObject *)self;");
    onSelf = true;
    var call1221 = callmethodChecked(this, "outprint", [1], string1220);
    setLineNumber(325);    // compilenode string
    var string1222 = new GraceString("] = args[0];");
    var string1225 = new GraceString("  uo->data[");
    var opresult1227 = callmethodChecked(string1225, "++", [1], var_pos);
    var opresult1229 = callmethodChecked(opresult1227, "++", [1], string1222);
    onSelf = true;
    var call1230 = callmethodChecked(this, "outprint", [1], opresult1229);
    setLineNumber(326);    // compilenode string
    var string1231 = new GraceString("  return done;");
    onSelf = true;
    var call1232 = callmethodChecked(this, "outprint", [1], string1231);
    setLineNumber(327);    // compilenode string
    var string1233 = new GraceString("}");
    onSelf = true;
    var call1234 = callmethodChecked(this, "outprint", [1], string1233);
    setLineNumber(328);    // compilenode string
    var string1235 = new GraceString(");");
    var string1238 = new GraceString(", ");
    var string1241 = new GraceString("_");
    var string1244 = new GraceString("_");
    var string1247 = new GraceString(":=\",&writer_");
    var string1250 = new GraceString(", \"");
    var string1253 = new GraceString(" = addmethodrealflags(");
    var string1256 = new GraceString("  Method *writer");
    var opresult1258 = callmethodChecked(string1256, "++", [1], var_myc);
    var opresult1260 = callmethodChecked(opresult1258, "++", [1], string1253);
    var opresult1262 = callmethodChecked(opresult1260, "++", [1], var_selfr);
    var opresult1264 = callmethodChecked(opresult1262, "++", [1], string1250);
    var opresult1266 = callmethodChecked(opresult1264, "++", [1], var_enm);
    var opresult1268 = callmethodChecked(opresult1266, "++", [1], string1247);
    var opresult1270 = callmethodChecked(opresult1268, "++", [1], var_escmodname);
    var opresult1272 = callmethodChecked(opresult1270, "++", [1], string1244);
    var opresult1274 = callmethodChecked(opresult1272, "++", [1], var_inm);
    var opresult1276 = callmethodChecked(opresult1274, "++", [1], string1241);
    var opresult1278 = callmethodChecked(opresult1276, "++", [1], var_myc);
    var opresult1280 = callmethodChecked(opresult1278, "++", [1], string1238);
    var opresult1282 = callmethodChecked(opresult1280, "++", [1], var_wflags);
    var opresult1284 = callmethodChecked(opresult1282, "++", [1], string1235);
    onSelf = true;
    var call1285 = callmethodChecked(this, "out", [1], opresult1284);
    setLineNumber(329);    // compilenode string
    var string1286 = new GraceString("->definitionModule = modulename;");
    var string1289 = new GraceString("  reader");
    var opresult1291 = callmethodChecked(string1289, "++", [1], var_myc);
    var opresult1293 = callmethodChecked(opresult1291, "++", [1], string1286);
    onSelf = true;
    var call1294 = callmethodChecked(this, "out", [1], opresult1293);
    setLineNumber(330);    // compilenode string
    var string1295 = new GraceString("->definitionModule = modulename;");
    var string1298 = new GraceString("  writer");
    var opresult1300 = callmethodChecked(string1298, "++", [1], var_myc);
    var opresult1302 = callmethodChecked(opresult1300, "++", [1], string1295);
    onSelf = true;
    var call1303 = callmethodChecked(this, "out", [1], opresult1302);
    setLineNumber(331);    // compilenode string
    var string1304 = new GraceString(";");
    var call1306 = callmethodChecked(var_o, "line", [0]);
    var string1308 = new GraceString("->definitionLine = ");
    var string1311 = new GraceString("  reader");
    var opresult1313 = callmethodChecked(string1311, "++", [1], var_myc);
    var opresult1315 = callmethodChecked(opresult1313, "++", [1], string1308);
    var opresult1317 = callmethodChecked(opresult1315, "++", [1], call1306);
    var opresult1319 = callmethodChecked(opresult1317, "++", [1], string1304);
    onSelf = true;
    var call1320 = callmethodChecked(this, "out", [1], opresult1319);
    setLineNumber(332);    // compilenode string
    var string1321 = new GraceString(";");
    var call1323 = callmethodChecked(var_o, "line", [0]);
    var string1325 = new GraceString("->definitionLine = ");
    var string1328 = new GraceString("  writer");
    var opresult1330 = callmethodChecked(string1328, "++", [1], var_myc);
    var opresult1332 = callmethodChecked(opresult1330, "++", [1], string1325);
    var opresult1334 = callmethodChecked(opresult1332, "++", [1], call1323);
    var opresult1336 = callmethodChecked(opresult1334, "++", [1], string1321);
    onSelf = true;
    var call1337 = callmethodChecked(this, "out", [1], opresult1336);
    return call1337;
  };
  func1027.paramCounts = [3];
  this.methods["compileobjvardecmeth"] = func1027;
  func1027.definitionLine = 292;
  func1027.definitionModule = "genc";
  setLineNumber(334);    // compilenode method
  var func1338 = function(argcv) {    // method compileobjvardec(3)
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
    setModuleName("genc");
    setLineNumber(335);    // compilenode string
    var string1339 = new GraceString("undefined");
    var var_val = string1339;
    var if1340 = GraceDone;
    setLineNumber(336);    // compilenode identifier
    var call1341 = callmethodChecked(var_o, "value", [0]);
    var opresult1344 = callmethodChecked(GraceFalse, "\u2260", [1], call1341);
    if (Grace_isTrue(opresult1344)) {
      setLineNumber(337);    // compilenode identifier
      var call1345 = callmethodChecked(var_o, "value", [0]);
      onSelf = true;
      var call1346 = callmethodChecked(this, "compilenode", [1], call1345);
      var_val = call1346;
      if1340 = GraceDone;
    }
    setLineNumber(339);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(340);    // compilenode identifier
    var opresult1349 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult1349;
    setLineNumber(341);    // compilenode identifier
    var call1350 = callmethodChecked(var_o, "name", [0]);
    var call1351 = callmethodChecked(call1350, "value", [0]);
    var var_nm = call1351;
    setLineNumber(342);    // compilenode identifier
    onSelf = true;
    var call1352 = callmethodChecked(this, "escapestring2", [1], var_nm);
    var var_enm = call1352;
    setLineNumber(343);    // compilenode identifier
    onSelf = true;
    var call1353 = callmethodChecked(this, "escapeident", [1], var_nm);
    var var_inm = call1353;
    setLineNumber(344);    // compilenode string
    var string1355 = new GraceString("// OBJECT VAR DEC ");
    var opresult1357 = callmethodChecked(string1355, "++", [1], var_nm);
    onSelf = true;
    var call1358 = callmethodChecked(this, "out", [1], opresult1357);
    setLineNumber(345);    // compilenode string
    var string1359 = new GraceString(");");
    var string1362 = new GraceString(", ");
    var string1365 = new GraceString(", ");
    var string1368 = new GraceString("  adddatum2(");
    var opresult1370 = callmethodChecked(string1368, "++", [1], var_selfr);
    var opresult1372 = callmethodChecked(opresult1370, "++", [1], string1365);
    var opresult1374 = callmethodChecked(opresult1372, "++", [1], var_val);
    var opresult1376 = callmethodChecked(opresult1374, "++", [1], string1362);
    var opresult1378 = callmethodChecked(opresult1376, "++", [1], var_pos);
    var opresult1380 = callmethodChecked(opresult1378, "++", [1], string1359);
    onSelf = true;
    var call1381 = callmethodChecked(this, "out", [1], opresult1380);
    setLineNumber(348);    // compilenode string
    var string1382 = new GraceString("Object* args, int flags) {");
    setLineNumber(347);    // compilenode string
    var string1384 = new GraceString("(Object self, int nparams, int *argcv, ");
    setLineNumber(346);    // compilenode string
    var string1386 = new GraceString("");
    var string1389 = new GraceString("_");
    var string1392 = new GraceString("_");
    var string1395 = new GraceString("Object reader_");
    var opresult1397 = callmethodChecked(string1395, "++", [1], var_escmodname);
    var opresult1399 = callmethodChecked(opresult1397, "++", [1], string1392);
    var opresult1401 = callmethodChecked(opresult1399, "++", [1], var_inm);
    var opresult1403 = callmethodChecked(opresult1401, "++", [1], string1389);
    var opresult1405 = callmethodChecked(opresult1403, "++", [1], var_myc);
    var opresult1407 = callmethodChecked(opresult1405, "++", [1], string1386);
    var opresult1409 = callmethodChecked(opresult1407, "++", [1], string1384);
    var opresult1411 = callmethodChecked(opresult1409, "++", [1], string1382);
    onSelf = true;
    var call1412 = callmethodChecked(this, "outprint", [1], opresult1411);
    setLineNumber(349);    // compilenode string
    var string1413 = new GraceString("  struct UserObject *uo = (struct UserObject *)self;");
    onSelf = true;
    var call1414 = callmethodChecked(this, "outprint", [1], string1413);
    setLineNumber(350);    // compilenode string
    var string1415 = new GraceString("];");
    var string1418 = new GraceString("  return uo->data[");
    var opresult1420 = callmethodChecked(string1418, "++", [1], var_pos);
    var opresult1422 = callmethodChecked(opresult1420, "++", [1], string1415);
    onSelf = true;
    var call1423 = callmethodChecked(this, "outprint", [1], opresult1422);
    setLineNumber(351);    // compilenode string
    var string1424 = new GraceString("}");
    onSelf = true;
    var call1425 = callmethodChecked(this, "outprint", [1], string1424);
    setLineNumber(352);    // compilenode string
    var string1426 = new GraceString(");");
    var string1429 = new GraceString("_");
    var string1432 = new GraceString("_");
    var string1435 = new GraceString("\",&reader_");
    var string1438 = new GraceString(", \"");
    var string1441 = new GraceString("  addmethodreal(");
    var opresult1443 = callmethodChecked(string1441, "++", [1], var_selfr);
    var opresult1445 = callmethodChecked(opresult1443, "++", [1], string1438);
    var opresult1447 = callmethodChecked(opresult1445, "++", [1], var_enm);
    var opresult1449 = callmethodChecked(opresult1447, "++", [1], string1435);
    var opresult1451 = callmethodChecked(opresult1449, "++", [1], var_escmodname);
    var opresult1453 = callmethodChecked(opresult1451, "++", [1], string1432);
    var opresult1455 = callmethodChecked(opresult1453, "++", [1], var_inm);
    var opresult1457 = callmethodChecked(opresult1455, "++", [1], string1429);
    var opresult1459 = callmethodChecked(opresult1457, "++", [1], var_myc);
    var opresult1461 = callmethodChecked(opresult1459, "++", [1], string1426);
    onSelf = true;
    var call1462 = callmethodChecked(this, "out", [1], opresult1461);
    setLineNumber(353);    // compilenode string
    var string1463 = new GraceString(":=");
    var opresult1466 = callmethodChecked(var_nm, "++", [1], string1463);
    var var_nmw = opresult1466;
    setLineNumber(354);    // compilenode identifier
    onSelf = true;
    var call1467 = callmethodChecked(this, "escapestring2", [1], var_nmw);
    var_nmw = call1467;
    setLineNumber(357);    // compilenode string
    var string1468 = new GraceString("Object* args, int flags) {");
    setLineNumber(356);    // compilenode string
    var string1470 = new GraceString("(Object self, int nparams, int *argcv, ");
    setLineNumber(355);    // compilenode string
    var string1472 = new GraceString("");
    var string1475 = new GraceString("_");
    var string1478 = new GraceString("_");
    var string1481 = new GraceString("Object writer_");
    var opresult1483 = callmethodChecked(string1481, "++", [1], var_escmodname);
    var opresult1485 = callmethodChecked(opresult1483, "++", [1], string1478);
    var opresult1487 = callmethodChecked(opresult1485, "++", [1], var_inm);
    var opresult1489 = callmethodChecked(opresult1487, "++", [1], string1475);
    var opresult1491 = callmethodChecked(opresult1489, "++", [1], var_myc);
    var opresult1493 = callmethodChecked(opresult1491, "++", [1], string1472);
    var opresult1495 = callmethodChecked(opresult1493, "++", [1], string1470);
    var opresult1497 = callmethodChecked(opresult1495, "++", [1], string1468);
    onSelf = true;
    var call1498 = callmethodChecked(this, "outprint", [1], opresult1497);
    setLineNumber(358);    // compilenode string
    var string1499 = new GraceString("  struct UserObject *uo = (struct UserObject *)self;");
    onSelf = true;
    var call1500 = callmethodChecked(this, "outprint", [1], string1499);
    setLineNumber(359);    // compilenode string
    var string1501 = new GraceString("] = args[0];");
    var string1504 = new GraceString("  uo->data[");
    var opresult1506 = callmethodChecked(string1504, "++", [1], var_pos);
    var opresult1508 = callmethodChecked(opresult1506, "++", [1], string1501);
    onSelf = true;
    var call1509 = callmethodChecked(this, "outprint", [1], opresult1508);
    setLineNumber(360);    // compilenode string
    var string1510 = new GraceString("  return done;");
    onSelf = true;
    var call1511 = callmethodChecked(this, "outprint", [1], string1510);
    setLineNumber(361);    // compilenode string
    var string1512 = new GraceString("}");
    onSelf = true;
    var call1513 = callmethodChecked(this, "outprint", [1], string1512);
    setLineNumber(362);    // compilenode string
    var string1514 = new GraceString(");");
    var string1517 = new GraceString("_");
    var string1520 = new GraceString("_");
    var string1523 = new GraceString(":=\", &writer_");
    var string1526 = new GraceString(", \"");
    var string1529 = new GraceString("  addmethodreal(");
    var opresult1531 = callmethodChecked(string1529, "++", [1], var_selfr);
    var opresult1533 = callmethodChecked(opresult1531, "++", [1], string1526);
    var opresult1535 = callmethodChecked(opresult1533, "++", [1], var_enm);
    var opresult1537 = callmethodChecked(opresult1535, "++", [1], string1523);
    var opresult1539 = callmethodChecked(opresult1537, "++", [1], var_escmodname);
    var opresult1541 = callmethodChecked(opresult1539, "++", [1], string1520);
    var opresult1543 = callmethodChecked(opresult1541, "++", [1], var_inm);
    var opresult1545 = callmethodChecked(opresult1543, "++", [1], string1517);
    var opresult1547 = callmethodChecked(opresult1545, "++", [1], var_myc);
    var opresult1549 = callmethodChecked(opresult1547, "++", [1], string1514);
    onSelf = true;
    var call1550 = callmethodChecked(this, "out", [1], opresult1549);
    return call1550;
  };
  func1338.paramCounts = [3];
  this.methods["compileobjvardec"] = func1338;
  func1338.definitionLine = 334;
  func1338.definitionModule = "genc";
  setLineNumber(364);    // compilenode method
  var func1551 = function(argcv) {    // method compileobject(2)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_outerRef = arguments[curarg];
    curarg++;
    if (argcv[0] !== 2)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compileobject(2)"));
    setModuleName("genc");
    setLineNumber(365);    // compilenode identifier
    var var_origInBlock = var_inBlock;
    setLineNumber(366);    // compilenode identifier
    var_inBlock = GraceFalse;
    setLineNumber(367);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(368);    // compilenode identifier
    var opresult1554 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult1554;
    setLineNumber(369);    // compilenode string
    var string1556 = new GraceString("obj");
    var opresult1558 = callmethodChecked(string1556, "++", [1], var_myc);
    var var_selfr = opresult1558;
    setLineNumber(370);    // compilenode num
    var var_numFields = new GraceNum(1);
    setLineNumber(371);    // compilenode num
    var var_numMethods = new GraceNum(0);
    setLineNumber(372);    // compilenode num
    var var_pos = new GraceNum(1);
    setLineNumber(373);    // compilenode identifier
    var var_superobj = GraceFalse;
    setLineNumber(374);    // compilenode string
    var string1559 = new GraceString(" = inheritingObject;");
    var string1562 = new GraceString("  Object inheritingObject");
    var opresult1564 = callmethodChecked(string1562, "++", [1], var_myc);
    var opresult1566 = callmethodChecked(opresult1564, "++", [1], string1559);
    onSelf = true;
    var call1567 = callmethodChecked(this, "out", [1], opresult1566);
    setLineNumber(375);    // compilenode string
    var string1568 = new GraceString("  if (isTailObject) {");
    onSelf = true;
    var call1569 = callmethodChecked(this, "out", [1], string1568);
    setLineNumber(376);    // compilenode string
    var string1570 = new GraceString("    isTailObject = 0;");
    onSelf = true;
    var call1571 = callmethodChecked(this, "out", [1], string1570);
    setLineNumber(377);    // compilenode string
    var string1572 = new GraceString("    inheritingObject = NULL;");
    onSelf = true;
    var call1573 = callmethodChecked(this, "out", [1], string1572);
    setLineNumber(378);    // compilenode string
    var string1574 = new GraceString("  }");
    onSelf = true;
    var call1575 = callmethodChecked(this, "out", [1], string1574);
    setLineNumber(379);    // compilenode identifier
    var call1576 = callmethodChecked(var_o, "value", [0]);
    var block1577 = new GraceBlock(this, 379, 1);
    setLineNumber(1);    // compilenode identifier
    block1577.real = function(var_e) {
      var if1578 = GraceDone;
      setLineNumber(380);    // compilenode string
      var string1579 = new GraceString("vardec");
      var call1581 = callmethodChecked(var_e, "kind", [0]);
      var opresult1583 = callmethodChecked(call1581, "==", [1], string1579);
      if (Grace_isTrue(opresult1583)) {
        setLineNumber(381);    // compilenode identifier
        var opresult1586 = callmethodChecked(var_numMethods, "+", [1], new GraceNum(1));
        var_numMethods = opresult1586;
        if1578 = GraceDone;
      }
      var if1587 = GraceDone;
      setLineNumber(383);    // compilenode string
      var string1588 = new GraceString("method");
      var call1590 = callmethodChecked(var_e, "kind", [0]);
      var opresult1592 = callmethodChecked(call1590, "==", [1], string1588);
      if (Grace_isTrue(opresult1592)) {
        var if1593 = GraceDone;
        setLineNumber(384);    // compilenode identifier
        var call1594 = callmethodChecked(var_e, "isFresh", [0]);
        if (Grace_isTrue(call1594)) {
          setLineNumber(385);    // compilenode identifier
          var opresult1597 = callmethodChecked(var_numMethods, "+", [1], new GraceNum(1));
          var_numMethods = opresult1597;
          setLineNumber(386);    // compilenode identifier
          var opresult1600 = callmethodChecked(var_numFields, "+", [1], new GraceNum(1));
          var_numFields = opresult1600;
          if1593 = GraceDone;
        }
        if1587 = if1593;
      }
      setLineNumber(389);    // compilenode identifier
      var opresult1603 = callmethodChecked(var_numMethods, "+", [1], new GraceNum(1));
      var_numMethods = opresult1603;
      setLineNumber(390);    // compilenode identifier
      var opresult1606 = callmethodChecked(var_numFields, "+", [1], new GraceNum(1));
      var_numFields = opresult1606;
      return GraceDone;
    };
    var call1607 = callmethodChecked(var_prelude, "for()do", [1, 1], call1576, block1577);
    var if1608 = GraceDone;
    setLineNumber(392);    // compilenode identifier
    var opresult1611 = callmethodChecked(var_numFields, "==", [1], new GraceNum(3));
    if (Grace_isTrue(opresult1611)) {
      setLineNumber(393);    // compilenode num
      var_numFields = new GraceNum(4);
      if1608 = GraceDone;
    }
    setLineNumber(395);    // compilenode string
    var string1612 = new GraceString(";");
    var string1615 = new GraceString("static ClassData objclass");
    var opresult1617 = callmethodChecked(string1615, "++", [1], var_myc);
    var opresult1619 = callmethodChecked(opresult1617, "++", [1], string1612);
    var call1620 = callmethodChecked(var_globals, "push", [1], opresult1619);
    setLineNumber(397);    // compilenode string
    var string1621 = new GraceString(");");
    var string1624 = new GraceString(", objclass");
    var string1627 = new GraceString("");
    var opresult1629 = callmethodChecked(string1627, "++", [1], var_numFields);
    var opresult1631 = callmethodChecked(opresult1629, "++", [1], string1624);
    var opresult1633 = callmethodChecked(opresult1631, "++", [1], var_myc);
    var opresult1635 = callmethodChecked(opresult1633, "++", [1], string1621);
    setLineNumber(396);    // compilenode string
    var string1637 = new GraceString(",");
    var string1640 = new GraceString(" = alloc_userobj2(");
    var opresult1642 = callmethodChecked(string1640, "++", [1], var_numMethods);
    var opresult1644 = callmethodChecked(opresult1642, "++", [1], string1637);
    var string1647 = new GraceString("  Object ");
    var opresult1649 = callmethodChecked(string1647, "++", [1], var_selfr);
    var opresult1651 = callmethodChecked(opresult1649, "++", [1], opresult1644);
    var opresult1653 = callmethodChecked(opresult1651, "++", [1], opresult1635);
    onSelf = true;
    var call1654 = callmethodChecked(this, "out", [1], opresult1653);
    setLineNumber(398);    // compilenode string
    var string1655 = new GraceString(");");
    var string1658 = new GraceString("  gc_frame_newslot(");
    var opresult1660 = callmethodChecked(string1658, "++", [1], var_selfr);
    var opresult1662 = callmethodChecked(opresult1660, "++", [1], string1655);
    onSelf = true;
    var call1663 = callmethodChecked(this, "out", [1], opresult1662);
    var if1664 = GraceDone;
    setLineNumber(399);    // compilenode string
    var string1665 = new GraceString("object");
    var call1667 = callmethodChecked(var_o, "name", [0]);
    var opresult1669 = callmethodChecked(call1667, "\u2260", [1], string1665);
    if (Grace_isTrue(opresult1669)) {
      setLineNumber(400);    // compilenode string
      var string1670 = new GraceString(" == NULL) {");
      var string1673 = new GraceString("if (objclass");
      var opresult1675 = callmethodChecked(string1673, "++", [1], var_myc);
      var opresult1677 = callmethodChecked(opresult1675, "++", [1], string1670);
      onSelf = true;
      var call1678 = callmethodChecked(this, "out", [1], opresult1677);
      setLineNumber(401);    // compilenode string
      var string1679 = new GraceString("->class->name);");
      var string1682 = new GraceString("  glfree(");
      var opresult1684 = callmethodChecked(string1682, "++", [1], var_selfr);
      var opresult1686 = callmethodChecked(opresult1684, "++", [1], string1679);
      onSelf = true;
      var call1687 = callmethodChecked(this, "out", [1], opresult1686);
      setLineNumber(402);    // compilenode string
      var string1688 = new GraceString("\";");
      var call1690 = callmethodChecked(var_o, "name", [0]);
      var string1692 = new GraceString("->class->name = \"");
      var string1695 = new GraceString("  ");
      var opresult1697 = callmethodChecked(string1695, "++", [1], var_selfr);
      var opresult1699 = callmethodChecked(opresult1697, "++", [1], string1692);
      var opresult1701 = callmethodChecked(opresult1699, "++", [1], call1690);
      var opresult1703 = callmethodChecked(opresult1701, "++", [1], string1688);
      onSelf = true;
      var call1704 = callmethodChecked(this, "out", [1], opresult1703);
      setLineNumber(403);    // compilenode string
      var string1705 = new GraceString("}");
      onSelf = true;
      var call1706 = callmethodChecked(this, "out", [1], string1705);
      if1664 = call1706;
    }
    setLineNumber(405);    // compilenode identifier
    onSelf = true;
    var call1707 = callmethodChecked(this, "compileobjouter", [2], var_selfr, var_outerRef);
    setLineNumber(406);    // compilenode string
    var string1708 = new GraceString(" = self;");
    var string1711 = new GraceString("  Object oldself");
    var opresult1713 = callmethodChecked(string1711, "++", [1], var_myc);
    var opresult1715 = callmethodChecked(opresult1713, "++", [1], string1708);
    onSelf = true;
    var call1716 = callmethodChecked(this, "out", [1], opresult1715);
    setLineNumber(407);    // compilenode string
    var string1717 = new GraceString(" = stackframe;");
    var string1720 = new GraceString("  struct StackFrameObject *oldstackframe");
    var opresult1722 = callmethodChecked(string1720, "++", [1], var_myc);
    var opresult1724 = callmethodChecked(opresult1722, "++", [1], string1717);
    onSelf = true;
    var call1725 = callmethodChecked(this, "out", [1], opresult1724);
    setLineNumber(408);    // compilenode string
    var string1726 = new GraceString(");");
    var string1729 = new GraceString("  stackframe = alloc_StackFrame(1, oldstackframe");
    var opresult1731 = callmethodChecked(string1729, "++", [1], var_myc);
    var opresult1733 = callmethodChecked(opresult1731, "++", [1], string1726);
    onSelf = true;
    var call1734 = callmethodChecked(this, "out", [1], opresult1733);
    setLineNumber(409);    // compilenode string
    var string1735 = new GraceString("  gc_frame_newslot((Object)stackframe);");
    onSelf = true;
    var call1736 = callmethodChecked(this, "out", [1], string1735);
    setLineNumber(410);    // compilenode string
    var string1737 = new GraceString(";");
    var string1740 = new GraceString("  self = ");
    var opresult1742 = callmethodChecked(string1740, "++", [1], var_selfr);
    var opresult1744 = callmethodChecked(opresult1742, "++", [1], string1737);
    onSelf = true;
    var call1745 = callmethodChecked(this, "out", [1], opresult1744);
    setLineNumber(411);    // compilenode string
    var string1746 = new GraceString(" = selfslot;");
    var string1749 = new GraceString("  Object *oldselfslot");
    var opresult1751 = callmethodChecked(string1749, "++", [1], var_myc);
    var opresult1753 = callmethodChecked(opresult1751, "++", [1], string1746);
    onSelf = true;
    var call1754 = callmethodChecked(this, "out", [1], opresult1753);
    setLineNumber(412);    // compilenode string
    var string1755 = new GraceString("  selfslot = &stackframe->slots[0];");
    onSelf = true;
    var call1756 = callmethodChecked(this, "out", [1], string1755);
    setLineNumber(413);    // compilenode string
    var string1757 = new GraceString("  *selfslot = self;");
    onSelf = true;
    var call1758 = callmethodChecked(this, "out", [1], string1757);
    setLineNumber(414);    // compilenode string
    var string1759 = new GraceString("  setframeelementname(stackframe, 0, \"self\");");
    onSelf = true;
    var call1760 = callmethodChecked(this, "out", [1], string1759);
    setLineNumber(415);    // compilenode string
    var string1761 = new GraceString(";");
    var string1764 = new GraceString(" = thisouter");
    var string1767 = new GraceString(" = (*(struct UserObject *)self).data[0], lowerouter");
    var string1770 = new GraceString("  Object thisouter");
    var opresult1772 = callmethodChecked(string1770, "++", [1], var_myc);
    var opresult1774 = callmethodChecked(opresult1772, "++", [1], string1767);
    var opresult1776 = callmethodChecked(opresult1774, "++", [1], var_myc);
    var opresult1778 = callmethodChecked(opresult1776, "++", [1], string1764);
    var opresult1780 = callmethodChecked(opresult1778, "++", [1], var_myc);
    var opresult1782 = callmethodChecked(opresult1780, "++", [1], string1761);
    onSelf = true;
    var call1783 = callmethodChecked(this, "out", [1], opresult1782);
    setLineNumber(416);    // compilenode string
    var string1784 = new GraceString(") {");
    var string1787 = new GraceString("  if (inheritingObject");
    var opresult1789 = callmethodChecked(string1787, "++", [1], var_myc);
    var opresult1791 = callmethodChecked(opresult1789, "++", [1], string1784);
    onSelf = true;
    var call1792 = callmethodChecked(this, "out", [1], opresult1791);
    setLineNumber(417);    // compilenode string
    var string1793 = new GraceString(";");
    var string1796 = new GraceString(" = (struct UserObject *)inheritingObject");
    var string1799 = new GraceString("    struct UserObject *inho");
    var opresult1801 = callmethodChecked(string1799, "++", [1], var_myc);
    var opresult1803 = callmethodChecked(opresult1801, "++", [1], string1796);
    var opresult1805 = callmethodChecked(opresult1803, "++", [1], var_myc);
    var opresult1807 = callmethodChecked(opresult1805, "++", [1], string1793);
    onSelf = true;
    var call1808 = callmethodChecked(this, "out", [1], opresult1807);
    setLineNumber(418);    // compilenode string
    var string1809 = new GraceString("->super;");
    var string1812 = new GraceString(" = (struct UserObject *)inho");
    var string1815 = new GraceString("->super != GraceDefaultObject) inho");
    var string1818 = new GraceString("    while (inho");
    var opresult1820 = callmethodChecked(string1818, "++", [1], var_myc);
    var opresult1822 = callmethodChecked(opresult1820, "++", [1], string1815);
    var opresult1824 = callmethodChecked(opresult1822, "++", [1], var_myc);
    var opresult1826 = callmethodChecked(opresult1824, "++", [1], string1812);
    var opresult1828 = callmethodChecked(opresult1826, "++", [1], var_myc);
    var opresult1830 = callmethodChecked(opresult1828, "++", [1], string1809);
    onSelf = true;
    var call1831 = callmethodChecked(this, "out", [1], opresult1830);
    setLineNumber(419);    // compilenode string
    var string1832 = new GraceString(";");
    var string1835 = new GraceString("->super = ");
    var string1838 = new GraceString("    inho");
    var opresult1840 = callmethodChecked(string1838, "++", [1], var_myc);
    var opresult1842 = callmethodChecked(opresult1840, "++", [1], string1835);
    var opresult1844 = callmethodChecked(opresult1842, "++", [1], var_selfr);
    var opresult1846 = callmethodChecked(opresult1844, "++", [1], string1832);
    onSelf = true;
    var call1847 = callmethodChecked(this, "out", [1], opresult1846);
    setLineNumber(420);    // compilenode string
    var string1848 = new GraceString(";");
    var string1851 = new GraceString("    self = inheritingObject");
    var opresult1853 = callmethodChecked(string1851, "++", [1], var_myc);
    var opresult1855 = callmethodChecked(opresult1853, "++", [1], string1848);
    onSelf = true;
    var call1856 = callmethodChecked(this, "out", [1], opresult1855);
    setLineNumber(421);    // compilenode string
    var string1857 = new GraceString("    *selfslot = self;");
    onSelf = true;
    var call1858 = callmethodChecked(this, "out", [1], string1857);
    setLineNumber(422);    // compilenode string
    var string1859 = new GraceString(" = (*(struct UserObject *)self).data[0];");
    var string1862 = new GraceString("    lowerouter");
    var opresult1864 = callmethodChecked(string1862, "++", [1], var_myc);
    var opresult1866 = callmethodChecked(opresult1864, "++", [1], string1859);
    onSelf = true;
    var call1867 = callmethodChecked(this, "out", [1], opresult1866);
    setLineNumber(423);    // compilenode string
    var string1868 = new GraceString(";");
    var string1871 = new GraceString("    (*(struct UserObject *)self).data[0] = thisouter");
    var opresult1873 = callmethodChecked(string1871, "++", [1], var_myc);
    var opresult1875 = callmethodChecked(opresult1873, "++", [1], string1868);
    onSelf = true;
    var call1876 = callmethodChecked(this, "out", [1], opresult1875);
    setLineNumber(424);    // compilenode string
    var string1877 = new GraceString("  }");
    onSelf = true;
    var call1878 = callmethodChecked(this, "out", [1], string1877);
    setLineNumber(425);    // compilenode identifier
    var call1879 = callmethodChecked(var_o, "value", [0]);
    var block1880 = new GraceBlock(this, 425, 1);
    setLineNumber(1);    // compilenode identifier
    block1880.real = function(var_e) {
      var if1881 = GraceDone;
      setLineNumber(426);    // compilenode string
      var string1882 = new GraceString("method");
      var call1884 = callmethodChecked(var_e, "kind", [0]);
      var opresult1886 = callmethodChecked(call1884, "==", [1], string1882);
      if (Grace_isTrue(opresult1886)) {
        setLineNumber(427);    // compilenode identifier
        onSelf = true;
        var call1887 = callmethodChecked(this, "compilemethod", [3], var_e, var_selfr, var_pos);
        if1881 = call1887;
      } else {
        var if1888 = GraceDone;
        setLineNumber(428);    // compilenode string
        var string1889 = new GraceString("vardec");
        var call1891 = callmethodChecked(var_e, "kind", [0]);
        var opresult1893 = callmethodChecked(call1891, "==", [1], string1889);
        if (Grace_isTrue(opresult1893)) {
          setLineNumber(429);    // compilenode string
          var string1894 = new GraceString(" == NULL) {");
          var string1897 = new GraceString("if (objclass");
          var opresult1899 = callmethodChecked(string1897, "++", [1], var_myc);
          var opresult1901 = callmethodChecked(opresult1899, "++", [1], string1894);
          onSelf = true;
          var call1902 = callmethodChecked(this, "out", [1], opresult1901);
          setLineNumber(430);    // compilenode identifier
          onSelf = true;
          var call1903 = callmethodChecked(this, "compileobjvardecmeth", [3], var_e, var_selfr, var_pos);
          setLineNumber(431);    // compilenode string
          var string1904 = new GraceString("}");
          onSelf = true;
          var call1905 = callmethodChecked(this, "out", [1], string1904);
          setLineNumber(432);    // compilenode string
          var string1906 = new GraceString("->flags |= OFLAG_MUTABLE;");
          var string1909 = new GraceString("");
          var opresult1911 = callmethodChecked(string1909, "++", [1], var_selfr);
          var opresult1913 = callmethodChecked(opresult1911, "++", [1], string1906);
          onSelf = true;
          var call1914 = callmethodChecked(this, "out", [1], opresult1913);
          setLineNumber(433);    // compilenode string
          var string1915 = new GraceString(");");
          var string1918 = new GraceString(", alloc_Undefined(), ");
          var string1921 = new GraceString("adddatum2(");
          var opresult1923 = callmethodChecked(string1921, "++", [1], var_selfr);
          var opresult1925 = callmethodChecked(opresult1923, "++", [1], string1918);
          var opresult1927 = callmethodChecked(opresult1925, "++", [1], var_pos);
          var opresult1929 = callmethodChecked(opresult1927, "++", [1], string1915);
          onSelf = true;
          var call1930 = callmethodChecked(this, "out", [1], opresult1929);
          if1888 = call1930;
        } else {
          var if1931 = GraceDone;
          setLineNumber(434);    // compilenode string
          var string1932 = new GraceString("defdec");
          var call1934 = callmethodChecked(var_e, "kind", [0]);
          var opresult1936 = callmethodChecked(call1934, "==", [1], string1932);
          if (Grace_isTrue(opresult1936)) {
            setLineNumber(435);    // compilenode string
            var string1937 = new GraceString(" == NULL) {");
            var string1940 = new GraceString("if (objclass");
            var opresult1942 = callmethodChecked(string1940, "++", [1], var_myc);
            var opresult1944 = callmethodChecked(opresult1942, "++", [1], string1937);
            onSelf = true;
            var call1945 = callmethodChecked(this, "out", [1], opresult1944);
            setLineNumber(436);    // compilenode identifier
            onSelf = true;
            var call1946 = callmethodChecked(this, "compileobjdefdecmeth", [3], var_e, var_selfr, var_pos);
            setLineNumber(437);    // compilenode string
            var string1947 = new GraceString("}");
            onSelf = true;
            var call1948 = callmethodChecked(this, "out", [1], string1947);
            setLineNumber(438);    // compilenode string
            var string1949 = new GraceString(");");
            var string1952 = new GraceString(", alloc_Undefined(), ");
            var string1955 = new GraceString("adddatum2(");
            var opresult1957 = callmethodChecked(string1955, "++", [1], var_selfr);
            var opresult1959 = callmethodChecked(opresult1957, "++", [1], string1952);
            var opresult1961 = callmethodChecked(opresult1959, "++", [1], var_pos);
            var opresult1963 = callmethodChecked(opresult1961, "++", [1], string1949);
            onSelf = true;
            var call1964 = callmethodChecked(this, "out", [1], opresult1963);
            if1931 = call1964;
          } else {
            var if1965 = GraceDone;
            setLineNumber(439);    // compilenode string
            var string1966 = new GraceString("typedec");
            var call1968 = callmethodChecked(var_e, "kind", [0]);
            var opresult1970 = callmethodChecked(call1968, "==", [1], string1966);
            if (Grace_isTrue(opresult1970)) {
              setLineNumber(440);    // compilenode string
              var string1971 = new GraceString(" == NULL) {");
              var string1974 = new GraceString("if (objclass");
              var opresult1976 = callmethodChecked(string1974, "++", [1], var_myc);
              var opresult1978 = callmethodChecked(opresult1976, "++", [1], string1971);
              onSelf = true;
              var call1979 = callmethodChecked(this, "out", [1], opresult1978);
              setLineNumber(441);    // compilenode identifier
              onSelf = true;
              var call1980 = callmethodChecked(this, "compileobjtypemeth", [3], var_e, var_selfr, var_pos);
              setLineNumber(442);    // compilenode string
              var string1981 = new GraceString("}");
              onSelf = true;
              var call1982 = callmethodChecked(this, "out", [1], string1981);
              setLineNumber(443);    // compilenode string
              var string1983 = new GraceString(");");
              var string1986 = new GraceString(", alloc_Undefined(), ");
              var string1989 = new GraceString("adddatum2(");
              var opresult1991 = callmethodChecked(string1989, "++", [1], var_selfr);
              var opresult1993 = callmethodChecked(opresult1991, "++", [1], string1986);
              var opresult1995 = callmethodChecked(opresult1993, "++", [1], var_pos);
              var opresult1997 = callmethodChecked(opresult1995, "++", [1], string1983);
              onSelf = true;
              var call1998 = callmethodChecked(this, "out", [1], opresult1997);
              if1965 = call1998;
            } else {
              setLineNumber(445);    // compilenode identifier
              var diff2001 = callmethodChecked(var_pos, "-", [1], new GraceNum(1));
              var_pos = diff2001;
              if1965 = GraceDone;
            }
            if1931 = if1965;
          }
          if1888 = if1931;
        }
        if1881 = if1888;
      }
      setLineNumber(447);    // compilenode identifier
      var opresult2004 = callmethodChecked(var_pos, "+", [1], new GraceNum(1));
      var_pos = opresult2004;
      return GraceDone;
    };
    var call2005 = callmethodChecked(var_prelude, "for()do", [1, 1], call1879, block1880);
    setLineNumber(449);    // compilenode num
    var_pos = new GraceNum(1);
    setLineNumber(451);    // compilenode array
    var array2006 = new PrimitiveGraceList([]);
    var var_content = array2006;
    var if2007 = GraceDone;
    setLineNumber(452);    // compilenode identifier
    var call2008 = callmethodChecked(var_o, "superclass", [0]);
    var opresult2011 = callmethodChecked(GraceFalse, "\u2260", [1], call2008);
    if (Grace_isTrue(opresult2011)) {
      var call2012 = callmethodChecked(var_o, "superclass", [0]);
      var call2013 = callmethodChecked(var_content, "add", [1], call2012);
      if2007 = call2013;
    }
    setLineNumber(453);    // compilenode block
    var block2014 = new GraceBlock(this, 453, 1);
    setLineNumber(1);    // compilenode identifier
    block2014.real = function(var_t) {
      setLineNumber(453);    // compilenode identifier
      var call2015 = callmethodChecked(var_content, "add", [1], var_t);
      return call2015;
    };
    var call2016 = callmethodChecked(var_o, "usedTraits", [0]);
    var call2017 = callmethodChecked(call2016, "do", [1], block2014);
    setLineNumber(454);    // compilenode block
    var block2018 = new GraceBlock(this, 454, 1);
    setLineNumber(1);    // compilenode identifier
    block2018.real = function(var_e) {
      setLineNumber(454);    // compilenode identifier
      var call2019 = callmethodChecked(var_content, "add", [1], var_e);
      return call2019;
    };
    var call2020 = callmethodChecked(var_o, "value", [0]);
    var call2021 = callmethodChecked(call2020, "do", [1], block2018);
    setLineNumber(456);    // compilenode block
    var block2022 = new GraceBlock(this, 456, 1);
    setLineNumber(1);    // compilenode identifier
    block2022.real = function(var_e) {
      setLineNumber(457);    // compilenode string
      var string2023 = new GraceString(";");
      var string2026 = new GraceString("  sourceObject = ");
      var opresult2028 = callmethodChecked(string2026, "++", [1], var_selfr);
      var opresult2030 = callmethodChecked(opresult2028, "++", [1], string2023);
      onSelf = true;
      var call2031 = callmethodChecked(this, "out", [1], opresult2030);
      var if2032 = GraceDone;
      setLineNumber(458);    // compilenode string
      var string2033 = new GraceString("method");
      var call2035 = callmethodChecked(var_e, "kind", [0]);
      var opresult2037 = callmethodChecked(call2035, "==", [1], string2033);
      if (Grace_isTrue(opresult2037)) {
      } else {
        var if2038 = GraceDone;
        setLineNumber(459);    // compilenode string
        var string2039 = new GraceString("vardec");
        var call2041 = callmethodChecked(var_e, "kind", [0]);
        var opresult2043 = callmethodChecked(call2041, "==", [1], string2039);
        if (Grace_isTrue(opresult2043)) {
          setLineNumber(460);    // compilenode identifier
          onSelf = true;
          var call2044 = callmethodChecked(this, "compileobjvardecdata", [3], var_e, var_selfr, var_pos);
          if2038 = call2044;
        } else {
          var if2045 = GraceDone;
          setLineNumber(461);    // compilenode string
          var string2046 = new GraceString("defdec");
          var call2048 = callmethodChecked(var_e, "kind", [0]);
          var opresult2050 = callmethodChecked(call2048, "==", [1], string2046);
          if (Grace_isTrue(opresult2050)) {
            setLineNumber(462);    // compilenode identifier
            onSelf = true;
            var call2051 = callmethodChecked(this, "compileobjdefdecdata", [3], var_e, var_selfr, var_pos);
            if2045 = call2051;
          } else {
            var if2052 = GraceDone;
            setLineNumber(463);    // compilenode string
            var string2053 = new GraceString("typedec");
            var call2055 = callmethodChecked(var_e, "kind", [0]);
            var opresult2057 = callmethodChecked(call2055, "==", [1], string2053);
            if (Grace_isTrue(opresult2057)) {
              setLineNumber(464);    // compilenode identifier
              onSelf = true;
              var call2058 = callmethodChecked(this, "compileobjdefdecdata", [3], var_e, var_selfr, var_pos);
              if2052 = call2058;
            } else {
              var if2059 = GraceDone;
              setLineNumber(465);    // compilenode string
              var string2060 = new GraceString("inherits");
              var call2062 = callmethodChecked(var_e, "kind", [0]);
              var opresult2064 = callmethodChecked(call2062, "==", [1], string2060);
              if (Grace_isTrue(opresult2064)) {
                setLineNumber(468);    // compilenode identifier
                var call2065 = callmethodChecked(var_e, "value", [0]);
                onSelf = true;
                var call2066 = callmethodChecked(this, "compilenode", [1], call2065);
                var_superobj = call2066;
                setLineNumber(469);    // compilenode string
                var string2067 = new GraceString(";");
                var string2070 = new GraceString("_uo = (struct UserObject *)");
                var string2073 = new GraceString("  struct UserObject *");
                var opresult2075 = callmethodChecked(string2073, "++", [1], var_selfr);
                var opresult2077 = callmethodChecked(opresult2075, "++", [1], string2070);
                var opresult2079 = callmethodChecked(opresult2077, "++", [1], var_selfr);
                var opresult2081 = callmethodChecked(opresult2079, "++", [1], string2067);
                onSelf = true;
                var call2082 = callmethodChecked(this, "out", [1], opresult2081);
                setLineNumber(470);    // compilenode string
                var string2083 = new GraceString(";");
                var string2086 = new GraceString("_uo->super = ");
                var string2089 = new GraceString("  ");
                var opresult2091 = callmethodChecked(string2089, "++", [1], var_selfr);
                var opresult2093 = callmethodChecked(opresult2091, "++", [1], string2086);
                var opresult2095 = callmethodChecked(opresult2093, "++", [1], var_superobj);
                var opresult2097 = callmethodChecked(opresult2095, "++", [1], string2083);
                onSelf = true;
                var call2098 = callmethodChecked(this, "out", [1], opresult2097);
                setLineNumber(471);    // compilenode identifier
                onSelf = true;
                var call2099 = callmethodChecked(this, "implementAliasesAndExclusionsFor()inheriting", [1, 2], var_o, var_e, var_superobj);
                setLineNumber(472);    // compilenode identifier
                var diff2102 = callmethodChecked(var_pos, "-", [1], new GraceNum(1));
                var_pos = diff2102;
                if2059 = GraceDone;
              } else {
                setLineNumber(474);    // compilenode identifier
                onSelf = true;
                var call2103 = callmethodChecked(this, "compilenode", [1], var_e);
                setLineNumber(475);    // compilenode identifier
                var diff2106 = callmethodChecked(var_pos, "-", [1], new GraceNum(1));
                var_pos = diff2106;
                if2059 = GraceDone;
              }
              if2052 = if2059;
            }
            if2045 = if2052;
          }
          if2038 = if2045;
        }
        if2032 = if2038;
      }
      setLineNumber(477);    // compilenode identifier
      var opresult2109 = callmethodChecked(var_pos, "+", [1], new GraceNum(1));
      var_pos = opresult2109;
      return GraceDone;
    };
    setLineNumber(456);    // compilenode identifier
    var call2110 = callmethodChecked(var_content, "do", [1], block2022);
    setLineNumber(479);    // compilenode string
    var string2111 = new GraceString("->class;");
    var string2114 = new GraceString(" = ");
    var string2117 = new GraceString("  objclass");
    var opresult2119 = callmethodChecked(string2117, "++", [1], var_myc);
    var opresult2121 = callmethodChecked(opresult2119, "++", [1], string2114);
    var opresult2123 = callmethodChecked(opresult2121, "++", [1], var_selfr);
    var opresult2125 = callmethodChecked(opresult2123, "++", [1], string2111);
    onSelf = true;
    var call2126 = callmethodChecked(this, "out", [1], opresult2125);
    setLineNumber(480);    // compilenode string
    var string2127 = new GraceString("->definitionModule = modulename;");
    var string2130 = new GraceString("  objclass");
    var opresult2132 = callmethodChecked(string2130, "++", [1], var_myc);
    var opresult2134 = callmethodChecked(opresult2132, "++", [1], string2127);
    onSelf = true;
    var call2135 = callmethodChecked(this, "out", [1], opresult2134);
    setLineNumber(481);    // compilenode string
    var string2136 = new GraceString(";");
    var call2138 = callmethodChecked(var_o, "line", [0]);
    var string2140 = new GraceString("->definitionLine = ");
    var string2143 = new GraceString("  objclass");
    var opresult2145 = callmethodChecked(string2143, "++", [1], var_myc);
    var opresult2147 = callmethodChecked(opresult2145, "++", [1], string2140);
    var opresult2149 = callmethodChecked(opresult2147, "++", [1], call2138);
    var opresult2151 = callmethodChecked(opresult2149, "++", [1], string2136);
    onSelf = true;
    var call2152 = callmethodChecked(this, "out", [1], opresult2151);
    setLineNumber(482);    // compilenode string
    var string2153 = new GraceString(";");
    var string2156 = new GraceString("  (*(struct UserObject *)self).data[0] = lowerouter");
    var opresult2158 = callmethodChecked(string2156, "++", [1], var_myc);
    var opresult2160 = callmethodChecked(opresult2158, "++", [1], string2153);
    onSelf = true;
    var call2161 = callmethodChecked(this, "out", [1], opresult2160);
    setLineNumber(483);    // compilenode string
    var string2162 = new GraceString(";");
    var string2165 = new GraceString("  self = oldself");
    var opresult2167 = callmethodChecked(string2165, "++", [1], var_myc);
    var opresult2169 = callmethodChecked(opresult2167, "++", [1], string2162);
    onSelf = true;
    var call2170 = callmethodChecked(this, "out", [1], opresult2169);
    setLineNumber(484);    // compilenode string
    var string2171 = new GraceString(";");
    var string2174 = new GraceString("  selfslot = oldselfslot");
    var opresult2176 = callmethodChecked(string2174, "++", [1], var_myc);
    var opresult2178 = callmethodChecked(opresult2176, "++", [1], string2171);
    onSelf = true;
    var call2179 = callmethodChecked(this, "out", [1], opresult2178);
    setLineNumber(485);    // compilenode string
    var string2180 = new GraceString(";");
    var string2183 = new GraceString("  stackframe = oldstackframe");
    var opresult2185 = callmethodChecked(string2183, "++", [1], var_myc);
    var opresult2187 = callmethodChecked(opresult2185, "++", [1], string2180);
    onSelf = true;
    var call2188 = callmethodChecked(this, "out", [1], opresult2187);
    setLineNumber(486);    // compilenode identifier
    var call2189 = callmethodChecked(var_o, "register:=", [1], var_selfr);
    setLineNumber(487);    // compilenode identifier
    var_inBlock = var_origInBlock;
    return GraceDone;
  };
  func1551.paramCounts = [2];
  this.methods["compileobject"] = func1551;
  func1551.definitionLine = 364;
  func1551.definitionModule = "genc";
  setLineNumber(489);    // compilenode method
  var func2190 = function(argcv) {    // method compileblock(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compileblock(1)"));
    setModuleName("genc");
    setLineNumber(490);    // compilenode identifier
    var var_origInBlock = var_inBlock;
    setLineNumber(491);    // compilenode identifier
    var_inBlock = GraceTrue;
    setLineNumber(492);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(493);    // compilenode identifier
    var opresult2193 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult2193;
    setLineNumber(494);    // compilenode string
    var string2194 = new GraceString("");
    var string2197 = new GraceString("block");
    var opresult2199 = callmethodChecked(string2197, "++", [1], var_myc);
    var opresult2201 = callmethodChecked(opresult2199, "++", [1], string2194);
    var var_obj = opresult2201;
    setLineNumber(495);    // compilenode string
    var string2202 = new GraceString(");");
    var string2205 = new GraceString("\", ");
    var string2208 = new GraceString(" = alloc_Block(NULL, NULL, \"");
    var string2211 = new GraceString("  Object ");
    var opresult2213 = callmethodChecked(string2211, "++", [1], var_obj);
    var opresult2215 = callmethodChecked(opresult2213, "++", [1], string2208);
    var opresult2217 = callmethodChecked(opresult2215, "++", [1], var_modname);
    var opresult2219 = callmethodChecked(opresult2217, "++", [1], string2205);
    var opresult2221 = callmethodChecked(opresult2219, "++", [1], var_linenum);
    var opresult2223 = callmethodChecked(opresult2221, "++", [1], string2202);
    onSelf = true;
    var call2224 = callmethodChecked(this, "out", [1], opresult2223);
    setLineNumber(496);    // compilenode string
    var string2225 = new GraceString(");");
    var string2228 = new GraceString("  gc_frame_newslot(");
    var opresult2230 = callmethodChecked(string2228, "++", [1], var_obj);
    var opresult2232 = callmethodChecked(opresult2230, "++", [1], string2225);
    onSelf = true;
    var call2233 = callmethodChecked(this, "out", [1], opresult2232);
    setLineNumber(497);    // compilenode string
    var string2234 = new GraceString("_apply");
    var call2235 = callmethodChecked(var_ast, "identifierNode", [0]);
    var call2236 = callmethodChecked(call2235, "new", [2], string2234, GraceFalse);
    var var_id = call2236;
    setLineNumber(498);    // compilenode identifier
    var call2238 = callmethodChecked(var_o, "params", [0]);
    var call2239 = callmethodChecked(var_ast, "signaturePart", [0]);
    var call2240 = callmethodChecked(call2239, "partName()params", [1, 1], var_id, call2238);
    var array2237 = new PrimitiveGraceList([call2240]);
    var call2241 = callmethodChecked(var_o, "body", [0]);
    var call2242 = callmethodChecked(var_ast, "methodNode", [0]);
    var call2243 = callmethodChecked(call2242, "new", [4], var_id, array2237, call2241, GraceFalse);
    var var_applymeth = call2243;
    setLineNumber(499);    // compilenode identifier
    var call2244 = callmethodChecked(var_applymeth, "selfclosure:=", [1], GraceTrue);
    setLineNumber(500);    // compilenode num
    onSelf = true;
    var call2245 = callmethodChecked(this, "compilemethod", [3], var_applymeth, var_obj, new GraceNum(0));
    var if2246 = GraceDone;
    setLineNumber(501);    // compilenode identifier
    var call2247 = callmethodChecked(var_o, "matchingPattern", [0]);
    var opresult2250 = callmethodChecked(GraceFalse, "\u2260", [1], call2247);
    if (Grace_isTrue(opresult2250)) {
      setLineNumber(502);    // compilenode identifier
      var call2251 = callmethodChecked(var_o, "matchingPattern", [0]);
      onSelf = true;
      var call2252 = callmethodChecked(this, "compilenode", [1], call2251);
      var var_pat = call2252;
      setLineNumber(503);    // compilenode string
      var string2253 = new GraceString(";");
      var string2256 = new GraceString(")->data[1] = ");
      var string2259 = new GraceString("((struct UserObject *)");
      var opresult2261 = callmethodChecked(string2259, "++", [1], var_obj);
      var opresult2263 = callmethodChecked(opresult2261, "++", [1], string2256);
      var opresult2265 = callmethodChecked(opresult2263, "++", [1], var_pat);
      var opresult2267 = callmethodChecked(opresult2265, "++", [1], string2253);
      onSelf = true;
      var call2268 = callmethodChecked(this, "out", [1], opresult2267);
      if2246 = call2268;
    }
    var if2269 = GraceDone;
    setLineNumber(505);    // compilenode identifier
    var call2270 = callmethodChecked(var_o, "extraRuntimeData", [0]);
    var opresult2273 = callmethodChecked(GraceFalse, "\u2260", [1], call2270);
    if (Grace_isTrue(opresult2273)) {
      setLineNumber(506);    // compilenode string
      var string2274 = new GraceString("extraRuntimeData");
      var call2275 = callmethodChecked(var_ast, "identifierNode", [0]);
      var call2276 = callmethodChecked(call2275, "new", [2], string2274, GraceFalse);
      var var_erdid = call2276;
      setLineNumber(508);    // compilenode identifier
      var call2278 = callmethodChecked(var_ast, "signaturePart", [0]);
      var call2279 = callmethodChecked(call2278, "partName", [1], var_erdid);
      var array2277 = new PrimitiveGraceList([call2279]);
      setLineNumber(509);    // compilenode identifier
      var call2281 = callmethodChecked(var_o, "extraRuntimeData", [0]);
      var array2280 = new PrimitiveGraceList([call2281]);
      setLineNumber(507);    // compilenode identifier
      var call2282 = callmethodChecked(var_ast, "methodNode", [0]);
      var call2283 = callmethodChecked(call2282, "new", [4], var_erdid, array2277, array2280, GraceFalse);
      var var_erdmeth = call2283;
      setLineNumber(510);    // compilenode num
      onSelf = true;
      var call2284 = callmethodChecked(this, "compilemethod", [3], var_erdmeth, var_obj, new GraceNum(2));
      if2269 = call2284;
    }
    setLineNumber(513);    // compilenode identifier
    var call2285 = callmethodChecked(var_o, "register:=", [1], var_obj);
    setLineNumber(514);    // compilenode identifier
    var_inBlock = var_origInBlock;
    return GraceDone;
  };
  func2190.paramCounts = [1];
  this.methods["compileblock"] = func2190;
  func2190.definitionLine = 489;
  func2190.definitionModule = "genc";
  setLineNumber(516);    // compilenode method
  var func2286 = function(argcv) {    // method compiletype(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compiletype(1)"));
    setModuleName("genc");
    setLineNumber(517);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(518);    // compilenode identifier
    var opresult2289 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult2289;
    setLineNumber(519);    // compilenode identifier
    var call2290 = callmethodChecked(var_o, "value", [0]);
    onSelf = true;
    var call2291 = callmethodChecked(this, "escapestring2", [1], call2290);
    var var_escName = call2291;
    setLineNumber(520);    // compilenode identifier
    var call2292 = callmethodChecked(var_o, "value", [0]);
    onSelf = true;
    var call2293 = callmethodChecked(this, "escapeident", [1], call2292);
    var var_idName = call2293;
    setLineNumber(521);    // compilenode string
    var string2294 = new GraceString("");
    var call2296 = callmethodChecked(var_o, "value", [0]);
    var string2298 = new GraceString("// Type ");
    var opresult2300 = callmethodChecked(string2298, "++", [1], call2296);
    var opresult2302 = callmethodChecked(opresult2300, "++", [1], string2294);
    onSelf = true;
    var call2303 = callmethodChecked(this, "out", [1], opresult2302);
    setLineNumber(522);    // compilenode string
    var string2304 = new GraceString(");");
    var call2306 = callmethodChecked(var_o, "methods", [0]);
    var call2307 = callmethodChecked(call2306, "size", [0]);
    var string2309 = new GraceString("\", ");
    var string2312 = new GraceString(" = alloc_Type(\"");
    var string2315 = new GraceString("Object type");
    var opresult2317 = callmethodChecked(string2315, "++", [1], var_myc);
    var opresult2319 = callmethodChecked(opresult2317, "++", [1], string2312);
    var opresult2321 = callmethodChecked(opresult2319, "++", [1], var_escName);
    var opresult2323 = callmethodChecked(opresult2321, "++", [1], string2309);
    var opresult2325 = callmethodChecked(opresult2323, "++", [1], call2307);
    var opresult2327 = callmethodChecked(opresult2325, "++", [1], string2304);
    onSelf = true;
    var call2328 = callmethodChecked(this, "out", [1], opresult2327);
    var if2329 = GraceDone;
    setLineNumber(523);    // compilenode identifier
    var call2330 = callmethodChecked(var_o, "anonymous", [0]);
    var call2331 = callmethodChecked(call2330, "prefix!", [0]);
    if (Grace_isTrue(call2331)) {
      setLineNumber(524);    // compilenode string
      var string2332 = new GraceString(";");
      var string2335 = new GraceString(" = type");
      var string2338 = new GraceString("*var_");
      var opresult2340 = callmethodChecked(string2338, "++", [1], var_idName);
      var opresult2342 = callmethodChecked(opresult2340, "++", [1], string2335);
      var opresult2344 = callmethodChecked(opresult2342, "++", [1], var_myc);
      var opresult2346 = callmethodChecked(opresult2344, "++", [1], string2332);
      onSelf = true;
      var call2347 = callmethodChecked(this, "out", [1], opresult2346);
      if2329 = call2347;
    }
    setLineNumber(526);    // compilenode identifier
    var call2348 = callmethodChecked(var_o, "methods", [0]);
    var block2349 = new GraceBlock(this, 526, 1);
    setLineNumber(1);    // compilenode identifier
    block2349.real = function(var_meth) {
      setLineNumber(527);    // compilenode identifier
      var call2350 = callmethodChecked(var_meth, "value", [0]);
      onSelf = true;
      var call2351 = callmethodChecked(this, "escapestring2", [1], call2350);
      var var_mnm = call2351;
      setLineNumber(528);    // compilenode string
      var string2352 = new GraceString("\", NULL);");
      var string2355 = new GraceString(", \"");
      var string2358 = new GraceString("add_Method((ClassData)type");
      var opresult2360 = callmethodChecked(string2358, "++", [1], var_myc);
      var opresult2362 = callmethodChecked(opresult2360, "++", [1], string2355);
      var opresult2364 = callmethodChecked(opresult2362, "++", [1], var_mnm);
      var opresult2366 = callmethodChecked(opresult2364, "++", [1], string2352);
      onSelf = true;
      var call2367 = callmethodChecked(this, "out", [1], opresult2366);
      return call2367;
    };
    var call2368 = callmethodChecked(var_prelude, "for()do", [1, 1], call2348, block2349);
    setLineNumber(530);    // compilenode string
    var string2369 = new GraceString("done");
    var call2370 = callmethodChecked(var_o, "register:=", [1], string2369);
    var if2371 = GraceDone;
    setLineNumber(531);    // compilenode identifier
    var call2372 = callmethodChecked(var_o, "anonymous", [0]);
    if (Grace_isTrue(call2372)) {
      setLineNumber(532);    // compilenode string
      var string2373 = new GraceString("");
      var string2376 = new GraceString("type");
      var opresult2378 = callmethodChecked(string2376, "++", [1], var_myc);
      var opresult2380 = callmethodChecked(opresult2378, "++", [1], string2373);
      var call2381 = callmethodChecked(var_o, "register:=", [1], opresult2380);
      if2371 = call2381;
    }
    var if2382 = GraceDone;
    setLineNumber(534);    // compilenode identifier
    var opresult2385 = callmethodChecked(var_compilationDepth, "==", [1], new GraceNum(1));
    if (Grace_isTrue(opresult2385)) {
      setLineNumber(535);    // compilenode identifier
      var call2386 = callmethodChecked(var_o, "value", [0]);
      var call2387 = callmethodChecked(var_ast, "identifierNode", [0]);
      var call2388 = callmethodChecked(call2387, "new", [2], call2386, GraceFalse);
      var var_idd = call2388;
      setLineNumber(536);    // compilenode identifier
      var call2390 = callmethodChecked(var_o, "value", [0]);
      var call2391 = callmethodChecked(var_ast, "signaturePart", [0]);
      var call2392 = callmethodChecked(call2391, "partName", [1], call2390);
      var array2389 = new PrimitiveGraceList([call2392]);
      setLineNumber(537);    // compilenode identifier
      var array2393 = new PrimitiveGraceList([var_idd]);
      setLineNumber(536);    // compilenode identifier
      var call2394 = callmethodChecked(var_ast, "methodNode", [0]);
      var call2395 = callmethodChecked(call2394, "new", [4], var_idd, array2389, array2393, GraceFalse);
      onSelf = true;
      var call2396 = callmethodChecked(this, "compilenode", [1], call2395);
      if2382 = call2396;
    }
    return if2382;
  };
  func2286.paramCounts = [1];
  this.methods["compiletype"] = func2286;
  func2286.definitionLine = 516;
  func2286.definitionModule = "genc";
  setLineNumber(540);    // compilenode method
  var func2397 = function(argcv) {    // method compiletypedec(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compiletypedec(1)"));
    setModuleName("genc");
    setLineNumber(541);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(542);    // compilenode identifier
    var opresult2400 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult2400;
    var if2401 = GraceDone;
    setLineNumber(543);    // compilenode string
    var string2402 = new GraceString("generic");
    var call2404 = callmethodChecked(var_o, "name", [0]);
    var call2405 = callmethodChecked(call2404, "kind", [0]);
    var opresult2407 = callmethodChecked(call2405, "==", [1], string2402);
    if (Grace_isTrue(opresult2407)) {
      setLineNumber(544);    // compilenode identifier
      var call2408 = callmethodChecked(var_o, "name", [0]);
      var call2409 = callmethodChecked(call2408, "value", [0]);
      var call2410 = callmethodChecked(call2409, "value", [0]);
      onSelf = true;
      var call2411 = callmethodChecked(this, "escapeident", [1], call2410);
      if2401 = call2411;
    } else {
      setLineNumber(546);    // compilenode identifier
      var call2412 = callmethodChecked(var_o, "name", [0]);
      var call2413 = callmethodChecked(call2412, "value", [0]);
      onSelf = true;
      var call2414 = callmethodChecked(this, "escapeident", [1], call2413);
      if2401 = call2414;
    }
    var var_idName = if2401;
    setLineNumber(548);    // compilenode string
    var string2415 = new GraceString("");
    var call2417 = callmethodChecked(var_o, "name", [0]);
    var call2418 = callmethodChecked(call2417, "value", [0]);
    var string2420 = new GraceString("// Type decl ");
    var opresult2422 = callmethodChecked(string2420, "++", [1], call2418);
    var opresult2424 = callmethodChecked(opresult2422, "++", [1], string2415);
    onSelf = true;
    var call2425 = callmethodChecked(this, "out", [1], opresult2424);
    setLineNumber(549);    // compilenode identifier
    var call2426 = callmethodChecked(var_declaredvars, "push", [1], var_idName);
    var if2427 = GraceDone;
    setLineNumber(550);    // compilenode string
    var string2428 = new GraceString("typeliteral");
    var call2430 = callmethodChecked(var_o, "value", [0]);
    var call2431 = callmethodChecked(call2430, "kind", [0]);
    var opresult2433 = callmethodChecked(call2431, "==", [1], string2428);
    if (Grace_isTrue(opresult2433)) {
      var call2434 = callmethodChecked(var_o, "value", [0]);
      var call2435 = callmethodChecked(call2434, "name:=", [1], var_idName);
      if2427 = call2435;
    }
    setLineNumber(551);    // compilenode identifier
    var call2436 = callmethodChecked(var_o, "value", [0]);
    onSelf = true;
    var call2437 = callmethodChecked(this, "compilenode", [1], call2436);
    setLineNumber(552);    // compilenode string
    var string2438 = new GraceString(";");
    var call2440 = callmethodChecked(var_o, "value", [0]);
    var call2441 = callmethodChecked(call2440, "register", [0]);
    var string2443 = new GraceString(" = ");
    var string2446 = new GraceString("  *var_");
    var opresult2448 = callmethodChecked(string2446, "++", [1], var_idName);
    var opresult2450 = callmethodChecked(opresult2448, "++", [1], string2443);
    var opresult2452 = callmethodChecked(opresult2450, "++", [1], call2441);
    var opresult2454 = callmethodChecked(opresult2452, "++", [1], string2438);
    onSelf = true;
    var call2455 = callmethodChecked(this, "out", [1], opresult2454);
    setLineNumber(553);    // compilenode string
    var string2456 = new GraceString("done");
    var call2457 = callmethodChecked(var_o, "register:=", [1], string2456);
    var if2458 = GraceDone;
    setLineNumber(554);    // compilenode identifier
    var opresult2461 = callmethodChecked(var_compilationDepth, "==", [1], new GraceNum(1));
    if (Grace_isTrue(opresult2461)) {
      setLineNumber(555);    // compilenode identifier
      var call2462 = callmethodChecked(var_o, "name", [0]);
      var call2464 = callmethodChecked(var_o, "name", [0]);
      var call2465 = callmethodChecked(var_ast, "signaturePart", [0]);
      var call2466 = callmethodChecked(call2465, "partName", [1], call2464);
      var array2463 = new PrimitiveGraceList([call2466]);
      setLineNumber(556);    // compilenode identifier
      var call2468 = callmethodChecked(var_o, "name", [0]);
      var array2467 = new PrimitiveGraceList([call2468]);
      setLineNumber(555);    // compilenode identifier
      var call2469 = callmethodChecked(var_ast, "methodNode", [0]);
      var call2470 = callmethodChecked(call2469, "new", [4], call2462, array2463, array2467, GraceFalse);
      onSelf = true;
      var call2471 = callmethodChecked(this, "compilenode", [1], call2470);
      if2458 = call2471;
    }
    return if2458;
  };
  func2397.paramCounts = [1];
  this.methods["compiletypedec"] = func2397;
  func2397.definitionLine = 540;
  func2397.definitionModule = "genc";
  setLineNumber(559);    // compilenode method
  var func2472 = function(argcv) {    // method compiletypeliteral(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compiletypeliteral(1)"));
    setModuleName("genc");
    setLineNumber(560);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(561);    // compilenode identifier
    var opresult2475 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult2475;
    setLineNumber(562);    // compilenode string
    var string2476 = new GraceString("//   Type literal ");
    onSelf = true;
    var call2477 = callmethodChecked(this, "out", [1], string2476);
    setLineNumber(563);    // compilenode string
    var string2478 = new GraceString(");");
    var call2480 = callmethodChecked(var_o, "methods", [0]);
    var call2481 = callmethodChecked(call2480, "size", [0]);
    var string2483 = new GraceString("\", ");
    var call2485 = callmethodChecked(var_o, "name", [0]);
    var string2487 = new GraceString(" = alloc_Type(\"");
    var string2490 = new GraceString("    Object type");
    var opresult2492 = callmethodChecked(string2490, "++", [1], var_myc);
    var opresult2494 = callmethodChecked(opresult2492, "++", [1], string2487);
    var opresult2496 = callmethodChecked(opresult2494, "++", [1], call2485);
    var opresult2498 = callmethodChecked(opresult2496, "++", [1], string2483);
    var opresult2500 = callmethodChecked(opresult2498, "++", [1], call2481);
    var opresult2502 = callmethodChecked(opresult2500, "++", [1], string2478);
    onSelf = true;
    var call2503 = callmethodChecked(this, "out", [1], opresult2502);
    setLineNumber(564);    // compilenode identifier
    var call2504 = callmethodChecked(var_o, "methods", [0]);
    var block2505 = new GraceBlock(this, 564, 1);
    setLineNumber(1);    // compilenode identifier
    block2505.real = function(var_meth) {
      setLineNumber(565);    // compilenode identifier
      var call2506 = callmethodChecked(var_meth, "value", [0]);
      onSelf = true;
      var call2507 = callmethodChecked(this, "escapestring2", [1], call2506);
      var var_mnm = call2507;
      setLineNumber(566);    // compilenode string
      var string2508 = new GraceString("\", NULL);");
      var string2511 = new GraceString(", \"");
      var string2514 = new GraceString("    add_Method((ClassData)type");
      var opresult2516 = callmethodChecked(string2514, "++", [1], var_myc);
      var opresult2518 = callmethodChecked(opresult2516, "++", [1], string2511);
      var opresult2520 = callmethodChecked(opresult2518, "++", [1], var_mnm);
      var opresult2522 = callmethodChecked(opresult2520, "++", [1], string2508);
      onSelf = true;
      var call2523 = callmethodChecked(this, "out", [1], opresult2522);
      return call2523;
    };
    var call2524 = callmethodChecked(var_prelude, "for()do", [1, 1], call2504, block2505);
    setLineNumber(569);    // compilenode string
    var string2525 = new GraceString("");
    var string2528 = new GraceString("type");
    var opresult2530 = callmethodChecked(string2528, "++", [1], var_myc);
    var opresult2532 = callmethodChecked(opresult2530, "++", [1], string2525);
    var call2533 = callmethodChecked(var_o, "register:=", [1], opresult2532);
    return call2533;
  };
  func2472.paramCounts = [1];
  this.methods["compiletypeliteral"] = func2472;
  func2472.definitionLine = 559;
  func2472.definitionModule = "genc";
  setLineNumber(571);    // compilenode method
  var func2534 = function(argcv) {    // method compilemethod(3)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_selfobj = arguments[curarg];
    curarg++;
    var var_pos = arguments[curarg];
    curarg++;
    if (argcv[0] !== 3)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compilemethod(3)"));
    setModuleName("genc");
    setLineNumber(576);    // compilenode string
    var string2535 = new GraceString("\"");
    var call2537 = callmethodChecked(var_o, "nameString", [0]);
    var string2539 = new GraceString("// method \"");
    var opresult2541 = callmethodChecked(string2539, "++", [1], call2537);
    var opresult2543 = callmethodChecked(opresult2541, "++", [1], string2535);
    onSelf = true;
    var call2544 = callmethodChecked(this, "out", [1], opresult2543);
    setLineNumber(577);    // compilenode identifier
    var var_origParamsUsed = var_paramsUsed;
    setLineNumber(578);    // compilenode num
    var_paramsUsed = new GraceNum(1);
    setLineNumber(579);    // compilenode identifier
    var var_origPartsUsed = var_partsUsed;
    setLineNumber(580);    // compilenode num
    var_partsUsed = new GraceNum(1);
    setLineNumber(581);    // compilenode identifier
    var var_origInBlock = var_inBlock;
    setLineNumber(582);    // compilenode identifier
    var call2545 = callmethodChecked(var_o, "selfclosure", [0]);
    var_inBlock = call2545;
    setLineNumber(583);    // compilenode identifier
    var var_oldout = var_output;
    setLineNumber(584);    // compilenode identifier
    var var_oldbblock = var_bblock;
    setLineNumber(585);    // compilenode identifier
    var var_oldusedvars = var_usedvars;
    setLineNumber(586);    // compilenode identifier
    var var_olddeclaredvars = var_declaredvars;
    setLineNumber(587);    // compilenode array
    var array2546 = new PrimitiveGraceList([]);
    var_output = array2546;
    setLineNumber(588);    // compilenode array
    var array2547 = new PrimitiveGraceList([]);
    var_usedvars = array2547;
    setLineNumber(589);    // compilenode array
    var array2548 = new PrimitiveGraceList([]);
    var_declaredvars = array2548;
    setLineNumber(590);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(591);    // compilenode identifier
    var opresult2551 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult2551;
    setLineNumber(592);    // compilenode identifier
    var call2552 = callmethodChecked(var_o, "value", [0]);
    var call2553 = callmethodChecked(call2552, "value", [0]);
    var var_name = call2553;
    setLineNumber(593);    // compilenode identifier
    var opresult2556 = callmethodChecked(var_name, "++", [1], var_myc);
    var var_nm = opresult2556;
    setLineNumber(594);    // compilenode num
    var var_numslots = new GraceNum(0);
    setLineNumber(595);    // compilenode num
    var var_slot = new GraceNum(0);
    setLineNumber(596);    // compilenode identifier
    var var_haveTypedParams = GraceFalse;
    setLineNumber(597);    // compilenode string
    var string2557 = new GraceString("  int i;");
    onSelf = true;
    var call2558 = callmethodChecked(this, "out", [1], string2557);
    setLineNumber(598);    // compilenode string
    var string2559 = new GraceString("  int curarg = 0;");
    onSelf = true;
    var call2560 = callmethodChecked(this, "out", [1], string2559);
    setLineNumber(599);    // compilenode string
    var string2561 = new GraceString("  int pushcv[] = {1};");
    onSelf = true;
    var call2562 = callmethodChecked(this, "out", [1], string2561);
    var if2563 = GraceDone;
    setLineNumber(600);    // compilenode identifier
    var call2564 = callmethodChecked(var_o, "selfclosure", [0]);
    var call2565 = callmethodChecked(call2564, "prefix!", [0]);
    if (Grace_isTrue(call2565)) {
      setLineNumber(601);    // compilenode string
      var string2566 = new GraceString(" && args)");
      var call2568 = callmethodChecked(var_o, "signature", [0]);
      var call2569 = callmethodChecked(call2568, "size", [0]);
      var string2571 = new GraceString("  if (nparts < ");
      var opresult2573 = callmethodChecked(string2571, "++", [1], call2569);
      var opresult2575 = callmethodChecked(opresult2573, "++", [1], string2566);
      onSelf = true;
      var call2576 = callmethodChecked(this, "out", [1], opresult2575);
      setLineNumber(604);    // compilenode string
      var string2577 = new GraceString(".\", nparts);");
      var call2579 = callmethodChecked(var_o, "signature", [0]);
      var call2580 = callmethodChecked(call2579, "size", [0]);
      var string2582 = new GraceString("");
      var opresult2584 = callmethodChecked(string2582, "++", [1], call2580);
      var opresult2586 = callmethodChecked(opresult2584, "++", [1], string2577);
      setLineNumber(603);    // compilenode string
      var string2588 = new GraceString("reflection error): got %i lists, expected ");
      setLineNumber(602);    // compilenode string
      var string2590 = new GraceString(" (probably ");
      var call2592 = callmethodChecked(var_name, "quoted", [0]);
      var string2594 = new GraceString("    graceRaise(RequestError(), \"missing argument list for ");
      var opresult2596 = callmethodChecked(string2594, "++", [1], call2592);
      var opresult2598 = callmethodChecked(opresult2596, "++", [1], string2590);
      var opresult2600 = callmethodChecked(opresult2598, "++", [1], string2588);
      var opresult2602 = callmethodChecked(opresult2600, "++", [1], opresult2586);
      onSelf = true;
      var call2603 = callmethodChecked(this, "out", [1], opresult2602);
      if2563 = call2603;
    }
    setLineNumber(606);    // compilenode identifier
    var call2604 = callmethodChecked(var_o, "signature", [0]);
    var call2605 = callmethodChecked(call2604, "indices", [0]);
    var block2606 = new GraceBlock(this, 606, 1);
    setLineNumber(1);    // compilenode identifier
    block2606.real = function(var_partnr) {
      setLineNumber(607);    // compilenode identifier
      var call2607 = callmethodChecked(var_o, "signature", [0]);
      var call2608 = callmethodChecked(call2607, "at", [1], var_partnr);
      var var_part = call2608;
      setLineNumber(608);    // compilenode identifier
      var call2609 = callmethodChecked(var_part, "params", [0]);
      var block2610 = new GraceBlock(this, 608, 1);
      setLineNumber(1);    // compilenode identifier
      block2610.real = function(var_param) {
        setLineNumber(609);    // compilenode identifier
        var call2611 = callmethodChecked(var_param, "value", [0]);
        onSelf = true;
        var call2612 = callmethodChecked(this, "escapeident", [1], call2611);
        var var_pn = call2612;
        setLineNumber(610);    // compilenode string
        var string2613 = new GraceString("]);");
        var string2616 = new GraceString(" = &(stackframe->slots[");
        var string2619 = new GraceString("  Object *var_");
        var opresult2621 = callmethodChecked(string2619, "++", [1], var_pn);
        var opresult2623 = callmethodChecked(opresult2621, "++", [1], string2616);
        var opresult2625 = callmethodChecked(opresult2623, "++", [1], var_slot);
        var opresult2627 = callmethodChecked(opresult2625, "++", [1], string2613);
        onSelf = true;
        var call2628 = callmethodChecked(this, "out", [1], opresult2627);
        setLineNumber(611);    // compilenode string
        var string2629 = new GraceString(" = args[curarg];");
        var string2632 = new GraceString("  *var_");
        var opresult2634 = callmethodChecked(string2632, "++", [1], var_pn);
        var opresult2636 = callmethodChecked(opresult2634, "++", [1], string2629);
        onSelf = true;
        var call2637 = callmethodChecked(this, "out", [1], opresult2636);
        setLineNumber(612);    // compilenode string
        var string2638 = new GraceString("  curarg++;");
        onSelf = true;
        var call2639 = callmethodChecked(this, "out", [1], string2638);
        setLineNumber(613);    // compilenode identifier
        var call2640 = callmethodChecked(var_declaredvars, "push", [1], var_pn);
        setLineNumber(614);    // compilenode identifier
        var opresult2643 = callmethodChecked(var_slot, "+", [1], new GraceNum(1));
        var_slot = opresult2643;
        setLineNumber(615);    // compilenode identifier
        var opresult2646 = callmethodChecked(var_numslots, "+", [1], new GraceNum(1));
        var_numslots = opresult2646;
        var if2647 = GraceDone;
        setLineNumber(616);    // compilenode identifier
        var call2649 = callmethodChecked(var_param, "dtype", [0]);
        var opresult2651 = callmethodChecked(call2649, "\u2260", [1], GraceFalse);
        if (Grace_isTrue(opresult2651)) {
          var if2652 = GraceDone;
          setLineNumber(619);    // compilenode string
          var string2653 = new GraceString("typeliteral");
          var call2655 = callmethodChecked(var_param, "dtype", [0]);
          var call2656 = callmethodChecked(call2655, "kind", [0]);
          var opresult2658 = callmethodChecked(call2656, "==", [1], string2653);
          setLineNumber(618);    // compilenode string
          var string2660 = new GraceString("identifier");
          var call2662 = callmethodChecked(var_param, "dtype", [0]);
          var call2663 = callmethodChecked(call2662, "kind", [0]);
          var opresult2665 = callmethodChecked(call2663, "==", [1], string2660);
          var opresult2667 = callmethodChecked(opresult2665, "||", [1], opresult2658);
          setLineNumber(617);    // compilenode string
          var string2669 = new GraceString("Unknown");
          var call2671 = callmethodChecked(var_param, "dtype", [0]);
          var call2672 = callmethodChecked(call2671, "value", [0]);
          var opresult2674 = callmethodChecked(call2672, "\u2260", [1], string2669);
          var opresult2676 = callmethodChecked(opresult2674, "&&", [1], opresult2667);
          if (Grace_isTrue(opresult2676)) {
            setLineNumber(620);    // compilenode identifier
            var_haveTypedParams = GraceTrue;
            if2652 = GraceDone;
          }
          if2647 = if2652;
        }
        return if2647;
      };
      var call2677 = callmethodChecked(var_prelude, "for()do", [1, 1], call2609, block2610);
      var if2678 = GraceDone;
      setLineNumber(624);    // compilenode identifier
      var call2679 = callmethodChecked(var_o, "selfclosure", [0]);
      var call2680 = callmethodChecked(call2679, "prefix!", [0]);
      if (Grace_isTrue(call2680)) {
        setLineNumber(625);    // compilenode string
        var string2681 = new GraceString(")");
        var call2683 = callmethodChecked(var_part, "params", [0]);
        var call2684 = callmethodChecked(call2683, "size", [0]);
        var string2686 = new GraceString("] != ");
        var diff2690 = callmethodChecked(var_partnr, "-", [1], new GraceNum(1));
        var string2692 = new GraceString("  if (argcv && argcv[");
        var opresult2694 = callmethodChecked(string2692, "++", [1], diff2690);
        var opresult2696 = callmethodChecked(opresult2694, "++", [1], string2686);
        var opresult2698 = callmethodChecked(opresult2696, "++", [1], call2684);
        var opresult2700 = callmethodChecked(opresult2698, "++", [1], string2681);
        onSelf = true;
        var call2701 = callmethodChecked(this, "out", [1], opresult2700);
        setLineNumber(626);    // compilenode string
        var string2702 = new GraceString("\");");
        var call2704 = callmethodChecked(var_part, "name", [0]);
        var call2705 = callmethodChecked(call2704, "quoted", [0]);
        var string2707 = new GraceString("    graceRaise(RequestError(), \"wrong number of arguments for ");
        var opresult2709 = callmethodChecked(string2707, "++", [1], call2705);
        var opresult2711 = callmethodChecked(opresult2709, "++", [1], string2702);
        onSelf = true;
        var call2712 = callmethodChecked(this, "out", [1], opresult2711);
        if2678 = call2712;
      }
      return if2678;
    };
    var call2713 = callmethodChecked(var_prelude, "for()do", [1, 1], call2605, block2606);
    setLineNumber(629);    // compilenode string
    var string2714 = new GraceString("]);");
    var string2717 = new GraceString("  Object *selfslot = &(stackframe->slots[");
    var opresult2719 = callmethodChecked(string2717, "++", [1], var_slot);
    var opresult2721 = callmethodChecked(opresult2719, "++", [1], string2714);
    onSelf = true;
    var call2722 = callmethodChecked(this, "out", [1], opresult2721);
    setLineNumber(630);    // compilenode string
    var string2723 = new GraceString("  *selfslot = self;");
    onSelf = true;
    var call2724 = callmethodChecked(this, "out", [1], string2723);
    setLineNumber(631);    // compilenode string
    var string2725 = new GraceString("  setframeelementname(stackframe, 0, \"self\");");
    onSelf = true;
    var call2726 = callmethodChecked(this, "out", [1], string2725);
    setLineNumber(632);    // compilenode identifier
    var opresult2729 = callmethodChecked(var_slot, "+", [1], new GraceNum(1));
    var_slot = opresult2729;
    setLineNumber(633);    // compilenode identifier
    var opresult2732 = callmethodChecked(var_numslots, "+", [1], new GraceNum(1));
    var_numslots = opresult2732;
    setLineNumber(634);    // compilenode string
    var string2733 = new GraceString("  if (methodInheritingObject) curarg++;");
    onSelf = true;
    var call2734 = callmethodChecked(this, "out", [1], string2733);
    var if2735 = GraceDone;
    setLineNumber(635);    // compilenode identifier
    var call2737 = callmethodChecked(var_o, "typeParams", [0]);
    var opresult2739 = callmethodChecked(call2737, "\u2260", [1], GraceFalse);
    if (Grace_isTrue(opresult2739)) {
      setLineNumber(636);    // compilenode string
      var string2740 = new GraceString("// Start typeParams");
      onSelf = true;
      var call2741 = callmethodChecked(this, "out", [1], string2740);
      setLineNumber(637);    // compilenode block
      var block2742 = new GraceBlock(this, 637, 1);
      setLineNumber(1);    // compilenode identifier
      block2742.real = function(var_g) {
        setLineNumber(638);    // compilenode identifier
        var call2743 = callmethodChecked(var_g, "value", [0]);
        onSelf = true;
        var call2744 = callmethodChecked(this, "escapeident", [1], call2743);
        var var_gn = call2744;
        setLineNumber(639);    // compilenode identifier
        var call2745 = callmethodChecked(var_declaredvars, "push", [1], var_gn);
        setLineNumber(640);    // compilenode string
        var string2746 = new GraceString("]);");
        var string2749 = new GraceString(" = &(stackframe->slots[");
        var string2752 = new GraceString("  Object *var_");
        var opresult2754 = callmethodChecked(string2752, "++", [1], var_gn);
        var opresult2756 = callmethodChecked(opresult2754, "++", [1], string2749);
        var opresult2758 = callmethodChecked(opresult2756, "++", [1], var_slot);
        var opresult2760 = callmethodChecked(opresult2758, "++", [1], string2746);
        onSelf = true;
        var call2761 = callmethodChecked(this, "out", [1], opresult2760);
        setLineNumber(641);    // compilenode identifier
        var opresult2764 = callmethodChecked(var_slot, "+", [1], new GraceNum(1));
        var_slot = opresult2764;
        setLineNumber(642);    // compilenode identifier
        var opresult2767 = callmethodChecked(var_numslots, "+", [1], new GraceNum(1));
        var_numslots = opresult2767;
        return GraceDone;
      };
      setLineNumber(637);    // compilenode identifier
      var call2768 = callmethodChecked(var_o, "typeParams", [0]);
      var call2769 = callmethodChecked(call2768, "do", [1], block2742);
      setLineNumber(644);    // compilenode string
      var string2770 = new GraceString(" + (methodInheritingObject != NULL)) {");
      var call2772 = callmethodChecked(var_o, "signature", [0]);
      var call2773 = callmethodChecked(call2772, "size", [0]);
      var string2775 = new GraceString("  if (nparts == 1 + ");
      var opresult2777 = callmethodChecked(string2775, "++", [1], call2773);
      var opresult2779 = callmethodChecked(opresult2777, "++", [1], string2770);
      onSelf = true;
      var call2780 = callmethodChecked(this, "out", [1], opresult2779);
      setLineNumber(645);    // compilenode string
      var string2781 = new GraceString(") {");
      var call2783 = callmethodChecked(var_o, "typeParams", [0]);
      var call2784 = callmethodChecked(call2783, "size", [0]);
      var string2786 = new GraceString("    if (argcv[nparts-1] < ");
      var opresult2788 = callmethodChecked(string2786, "++", [1], call2784);
      var opresult2790 = callmethodChecked(opresult2788, "++", [1], string2781);
      onSelf = true;
      var call2791 = callmethodChecked(this, "out", [1], opresult2790);
      setLineNumber(646);    // compilenode string
      var string2792 = new GraceString("      graceRaise(RequestError(), \"insufficient generic parameters\");");
      onSelf = true;
      var call2793 = callmethodChecked(this, "out", [1], string2792);
      setLineNumber(647);    // compilenode string
      var string2794 = new GraceString("    }");
      onSelf = true;
      var call2795 = callmethodChecked(this, "out", [1], string2794);
      setLineNumber(648);    // compilenode block
      var block2796 = new GraceBlock(this, 648, 1);
      setLineNumber(1);    // compilenode identifier
      block2796.real = function(var_g) {
        setLineNumber(649);    // compilenode identifier
        var call2797 = callmethodChecked(var_g, "value", [0]);
        onSelf = true;
        var call2798 = callmethodChecked(this, "escapeident", [1], call2797);
        var var_gn = call2798;
        setLineNumber(650);    // compilenode string
        var string2799 = new GraceString(" = args[curarg++];");
        var string2802 = new GraceString("    *var_");
        var opresult2804 = callmethodChecked(string2802, "++", [1], var_gn);
        var opresult2806 = callmethodChecked(opresult2804, "++", [1], string2799);
        onSelf = true;
        var call2807 = callmethodChecked(this, "out", [1], opresult2806);
        return call2807;
      };
      setLineNumber(648);    // compilenode identifier
      var call2808 = callmethodChecked(var_o, "typeParams", [0]);
      var call2809 = callmethodChecked(call2808, "do", [1], block2796);
      setLineNumber(652);    // compilenode string
      var string2810 = new GraceString("  } else {");
      onSelf = true;
      var call2811 = callmethodChecked(this, "out", [1], string2810);
      setLineNumber(653);    // compilenode block
      var block2812 = new GraceBlock(this, 653, 1);
      setLineNumber(1);    // compilenode identifier
      block2812.real = function(var_g) {
        setLineNumber(654);    // compilenode identifier
        var call2813 = callmethodChecked(var_g, "value", [0]);
        onSelf = true;
        var call2814 = callmethodChecked(this, "escapeident", [1], call2813);
        var var_gn = call2814;
        setLineNumber(655);    // compilenode string
        var string2815 = new GraceString(" = Unknown;");
        var string2818 = new GraceString("    *var_");
        var opresult2820 = callmethodChecked(string2818, "++", [1], var_gn);
        var opresult2822 = callmethodChecked(opresult2820, "++", [1], string2815);
        onSelf = true;
        var call2823 = callmethodChecked(this, "out", [1], opresult2822);
        return call2823;
      };
      setLineNumber(653);    // compilenode identifier
      var call2824 = callmethodChecked(var_o, "typeParams", [0]);
      var call2825 = callmethodChecked(call2824, "do", [1], block2812);
      setLineNumber(657);    // compilenode string
      var string2826 = new GraceString("  }");
      onSelf = true;
      var call2827 = callmethodChecked(this, "out", [1], string2826);
      setLineNumber(658);    // compilenode string
      var string2828 = new GraceString("// End typeParams");
      onSelf = true;
      var call2829 = callmethodChecked(this, "out", [1], string2828);
      if2735 = call2829;
    }
    setLineNumber(660);    // compilenode string
    var string2830 = new GraceString("done");
    var var_ret = string2830;
    setLineNumber(661);    // compilenode identifier
    var call2831 = callmethodChecked(var_o, "body", [0]);
    onSelf = true;
    var call2832 = callmethodChecked(this, "countbindings", [1], call2831);
    var opresult2835 = callmethodChecked(var_numslots, "+", [1], call2832);
    var_numslots = opresult2835;
    setLineNumber(662);    // compilenode identifier
    var call2836 = callmethodChecked(var_o, "body", [0]);
    onSelf = true;
    var call2837 = callmethodChecked(this, "definebindings", [2], call2836, var_slot);
    setLineNumber(663);    // compilenode identifier
    var var_tailObject = GraceFalse;
    setLineNumber(664);    // compilenode identifier
    var var_tco = GraceFalse;
    var if2838 = GraceDone;
    setLineNumber(666);    // compilenode block
    var block2839 = new GraceBlock(this, 666, 0);
    block2839.real = function() {
      var string2840 = new GraceString("TailCall");
      var call2841 = callmethodChecked(var_util, "extensions", [0]);
      var call2842 = callmethodChecked(call2841, "contains", [1], string2840);
      return call2842;
    };
    setLineNumber(665);    // compilenode block
    var block2844 = new GraceBlock(this, 665, 0);
    block2844.real = function() {
      var string2845 = new GraceString("call");
      var call2847 = callmethodChecked(var_o, "body", [0]);
      var call2848 = callmethodChecked(call2847, "last", [0]);
      var call2849 = callmethodChecked(call2848, "kind", [0]);
      var opresult2851 = callmethodChecked(call2849, "==", [1], string2845);
      return opresult2851;
    };
    var call2854 = callmethodChecked(var_o, "body", [0]);
    var call2855 = callmethodChecked(call2854, "size", [0]);
    var opresult2857 = callmethodChecked(call2855, ">", [1], new GraceNum(0));
    var opresult2859 = callmethodChecked(opresult2857, "&&", [1], block2844);
    var opresult2861 = callmethodChecked(opresult2859, "&&", [1], block2839);
    if (Grace_isTrue(opresult2861)) {
      setLineNumber(667);    // compilenode identifier
      var call2862 = callmethodChecked(var_o, "body", [0]);
      var call2863 = callmethodChecked(call2862, "pop", [0]);
      var_tco = call2863;
      if2838 = GraceDone;
    }
    var if2864 = GraceDone;
    setLineNumber(669);    // compilenode block
    var block2865 = new GraceBlock(this, 669, 0);
    block2865.real = function() {
      var string2866 = new GraceString("object");
      var call2868 = callmethodChecked(var_o, "body", [0]);
      var call2869 = callmethodChecked(call2868, "last", [0]);
      var call2870 = callmethodChecked(call2869, "kind", [0]);
      var opresult2872 = callmethodChecked(call2870, "==", [1], string2866);
      return opresult2872;
    };
    var call2875 = callmethodChecked(var_o, "body", [0]);
    var call2876 = callmethodChecked(call2875, "size", [0]);
    var opresult2878 = callmethodChecked(call2876, ">", [1], new GraceNum(0));
    var opresult2880 = callmethodChecked(opresult2878, "&&", [1], block2865);
    if (Grace_isTrue(opresult2880)) {
      setLineNumber(670);    // compilenode identifier
      var call2881 = callmethodChecked(var_o, "body", [0]);
      var call2882 = callmethodChecked(call2881, "pop", [0]);
      var_tailObject = call2882;
      var if2883 = GraceDone;
      setLineNumber(671);    // compilenode string
      var string2884 = new GraceString("object");
      var call2886 = callmethodChecked(var_tailObject, "name", [0]);
      var opresult2888 = callmethodChecked(call2886, "==", [1], string2884);
      if (Grace_isTrue(opresult2888)) {
        setLineNumber(672);    // compilenode identifier
        var var_selfName = var_selfobj;
        var if2889 = GraceDone;
        setLineNumber(673);    // compilenode string
        var string2890 = new GraceString("var_");
        var call2891 = callmethodChecked(var_selfName, "startsWith", [1], string2890);
        if (Grace_isTrue(call2891)) {
          setLineNumber(674);    // compilenode identifier
          var call2892 = callmethodChecked(var_selfName, "size", [0]);
          var call2893 = callmethodChecked(var_selfName, "substringFrom()to", [1, 1], new GraceNum(5), call2892);
          var_selfName = call2893;
          if2889 = GraceDone;
        }
        setLineNumber(676);    // compilenode identifier
        var call2894 = callmethodChecked(var_o, "nameString", [0]);
        var string2896 = new GraceString(".");
        var opresult2899 = callmethodChecked(var_selfobj, "++", [1], string2896);
        var opresult2901 = callmethodChecked(opresult2899, "++", [1], call2894);
        var call2902 = callmethodChecked(var_tailObject, "name:=", [1], opresult2901);
        if2883 = call2902;
      }
      if2864 = if2883;
    }
    setLineNumber(679);    // compilenode identifier
    var call2903 = callmethodChecked(var_o, "body", [0]);
    var block2904 = new GraceBlock(this, 679, 1);
    setLineNumber(1);    // compilenode identifier
    block2904.real = function(var_l) {
      setLineNumber(680);    // compilenode identifier
      onSelf = true;
      var call2905 = callmethodChecked(this, "compilenode", [1], var_l);
      var_ret = call2905;
      return GraceDone;
    };
    var call2906 = callmethodChecked(var_prelude, "for()do", [1, 1], call2903, block2904);
    var if2907 = GraceDone;
    setLineNumber(682);    // compilenode identifier
    var opresult2910 = callmethodChecked(GraceFalse, "\u2260", [1], var_tailObject);
    if (Grace_isTrue(opresult2910)) {
      setLineNumber(683);    // compilenode identifier
      var call2911 = callmethodChecked(var_o, "body", [0]);
      var call2912 = callmethodChecked(call2911, "push", [1], var_tailObject);
      setLineNumber(684);    // compilenode string
      var string2913 = new GraceString("  isTailObject = 1;");
      onSelf = true;
      var call2914 = callmethodChecked(this, "out", [1], string2913);
      setLineNumber(685);    // compilenode string
      var string2915 = new GraceString("  inheritingObject = methodInheritingObject;");
      onSelf = true;
      var call2916 = callmethodChecked(this, "out", [1], string2915);
      setLineNumber(686);    // compilenode string
      var string2917 = new GraceString("self");
      onSelf = true;
      var call2918 = callmethodChecked(this, "compileobject", [2], var_tailObject, string2917);
      setLineNumber(687);    // compilenode identifier
      var call2919 = callmethodChecked(var_tailObject, "register", [0]);
      var_ret = call2919;
      if2907 = GraceDone;
    }
    var if2920 = GraceDone;
    setLineNumber(689);    // compilenode identifier
    var opresult2923 = callmethodChecked(GraceFalse, "\u2260", [1], var_tco);
    if (Grace_isTrue(opresult2923)) {
      setLineNumber(690);    // compilenode identifier
      onSelf = true;
      var call2924 = callmethodChecked(this, "compilecall", [2], var_tco, GraceTrue);
      setLineNumber(691);    // compilenode identifier
      var call2925 = callmethodChecked(var_tco, "register", [0]);
      var_ret = call2925;
      if2920 = GraceDone;
    }
    setLineNumber(693);    // compilenode string
    var string2926 = new GraceString("  gc_frame_end(frame);");
    onSelf = true;
    var call2927 = callmethodChecked(this, "out", [1], string2926);
    setLineNumber(694);    // compilenode string
    var string2928 = new GraceString(";");
    var string2931 = new GraceString("  return ");
    var opresult2933 = callmethodChecked(string2931, "++", [1], var_ret);
    var opresult2935 = callmethodChecked(opresult2933, "++", [1], string2928);
    onSelf = true;
    var call2936 = callmethodChecked(this, "out", [1], opresult2935);
    setLineNumber(695);    // compilenode string
    var string2937 = new GraceString("}");
    onSelf = true;
    var call2938 = callmethodChecked(this, "out", [1], string2937);
    setLineNumber(698);    // compilenode identifier
    var var_body = var_output;
    setLineNumber(699);    // compilenode call
    onSelf = true;
    var call2939 = callmethodChecked(this, "outswitchup", [0]);
    setLineNumber(700);    // compilenode array
    var array2940 = new PrimitiveGraceList([]);
    var var_closurevars = array2940;
    setLineNumber(701);    // compilenode block
    var block2941 = new GraceBlock(this, 701, 1);
    setLineNumber(1);    // compilenode identifier
    block2941.real = function(var_u) {
      setLineNumber(702);    // compilenode identifier
      var var_decl = GraceFalse;
      setLineNumber(703);    // compilenode block
      var block2942 = new GraceBlock(this, 703, 1);
      setLineNumber(1);    // compilenode identifier
      block2942.real = function(var_d) {
        var if2943 = GraceDone;
        setLineNumber(704);    // compilenode identifier
        var opresult2946 = callmethodChecked(var_d, "==", [1], var_u);
        if (Grace_isTrue(opresult2946)) {
          setLineNumber(705);    // compilenode identifier
          var_decl = GraceTrue;
          if2943 = GraceDone;
        }
        return if2943;
      };
      var call2947 = callmethodChecked(var_prelude, "for()do", [1, 1], var_declaredvars, block2942);
      var if2948 = GraceDone;
      setLineNumber(708);    // compilenode identifier
      if (Grace_isTrue(var_decl)) {
        setLineNumber(709);    // compilenode identifier
        var_decl = var_decl;
        if2948 = GraceDone;
      } else {
        setLineNumber(711);    // compilenode identifier
        var var_found = GraceFalse;
        setLineNumber(712);    // compilenode block
        var block2949 = new GraceBlock(this, 712, 1);
        setLineNumber(1);    // compilenode identifier
        block2949.real = function(var_v) {
          var if2950 = GraceDone;
          setLineNumber(713);    // compilenode identifier
          var opresult2953 = callmethodChecked(var_v, "==", [1], var_u);
          if (Grace_isTrue(opresult2953)) {
            setLineNumber(714);    // compilenode identifier
            var_found = GraceTrue;
            if2950 = GraceDone;
          }
          return if2950;
        };
        var call2954 = callmethodChecked(var_prelude, "for()do", [1, 1], var_closurevars, block2949);
        var if2955 = GraceDone;
        setLineNumber(717);    // compilenode identifier
        if (Grace_isTrue(var_found)) {
          setLineNumber(718);    // compilenode identifier
          var_found = var_found;
          if2955 = GraceDone;
        } else {
          setLineNumber(720);    // compilenode identifier
          var call2956 = callmethodChecked(var_closurevars, "push", [1], var_u);
          if2955 = call2956;
        }
        if2948 = if2955;
      }
      return if2948;
    };
    var call2957 = callmethodChecked(var_prelude, "for()do", [1, 1], var_usedvars, block2941);
    var if2958 = GraceDone;
    setLineNumber(724);    // compilenode identifier
    var call2959 = callmethodChecked(var_o, "selfclosure", [0]);
    if (Grace_isTrue(call2959)) {
      setLineNumber(725);    // compilenode string
      var string2960 = new GraceString("self");
      var call2961 = callmethodChecked(var_closurevars, "push", [1], string2960);
      if2958 = call2961;
    }
    setLineNumber(727);    // compilenode string
    var string2962 = new GraceString("");
    onSelf = true;
    var call2964 = callmethodChecked(this, "escapestring2", [1], var_nm);
    var string2966 = new GraceString("_");
    var string2969 = new GraceString("meth_");
    var opresult2971 = callmethodChecked(string2969, "++", [1], var_modname);
    var opresult2973 = callmethodChecked(opresult2971, "++", [1], string2966);
    var opresult2975 = callmethodChecked(opresult2973, "++", [1], call2964);
    var opresult2977 = callmethodChecked(opresult2975, "++", [1], string2962);
    onSelf = true;
    var call2978 = callmethodChecked(this, "escapeident", [1], opresult2977);
    var var_litname = call2978;
    var if2979 = GraceDone;
    setLineNumber(728);    // compilenode identifier
    var call2981 = callmethodChecked(var_closurevars, "size", [0]);
    var opresult2983 = callmethodChecked(call2981, ">", [1], new GraceNum(0));
    if (Grace_isTrue(opresult2983)) {
      var if2984 = GraceDone;
      setLineNumber(729);    // compilenode identifier
      var call2985 = callmethodChecked(var_o, "selfclosure", [0]);
      if (Grace_isTrue(call2985)) {
        setLineNumber(731);    // compilenode string
        var string2986 = new GraceString("Object *args, int32_t flags) {");
        setLineNumber(730);    // compilenode string
        var string2988 = new GraceString("(Object realself, int nparts, int *argcv, ");
        var string2991 = new GraceString("Object ");
        var opresult2993 = callmethodChecked(string2991, "++", [1], var_litname);
        var opresult2995 = callmethodChecked(opresult2993, "++", [1], string2988);
        var opresult2997 = callmethodChecked(opresult2995, "++", [1], string2986);
        onSelf = true;
        var call2998 = callmethodChecked(this, "out", [1], opresult2997);
        setLineNumber(732);    // compilenode string
        var string2999 = new GraceString("  struct UserObject *uo = (struct UserObject*)realself;");
        onSelf = true;
        var call3000 = callmethodChecked(this, "out", [1], string2999);
        if2984 = call3000;
      } else {
        setLineNumber(735);    // compilenode string
        var string3001 = new GraceString("int32_t flags) {");
        setLineNumber(734);    // compilenode string
        var string3003 = new GraceString("(Object self, int nparts, int *argcv, Object *args, ");
        var string3006 = new GraceString("Object ");
        var opresult3008 = callmethodChecked(string3006, "++", [1], var_litname);
        var opresult3010 = callmethodChecked(opresult3008, "++", [1], string3003);
        var opresult3012 = callmethodChecked(opresult3010, "++", [1], string3001);
        onSelf = true;
        var call3013 = callmethodChecked(this, "out", [1], opresult3012);
        setLineNumber(736);    // compilenode string
        var string3014 = new GraceString("  struct UserObject *uo = (struct UserObject*)self;");
        onSelf = true;
        var call3015 = callmethodChecked(this, "out", [1], string3014);
        if2984 = call3015;
      }
      setLineNumber(738);    // compilenode string
      var string3016 = new GraceString(", (flags>>24)&0xff);");
      var string3019 = new GraceString("  Object closure = getdatum((Object)uo, ");
      var opresult3021 = callmethodChecked(string3019, "++", [1], var_pos);
      var opresult3023 = callmethodChecked(opresult3021, "++", [1], string3016);
      onSelf = true;
      var call3024 = callmethodChecked(this, "out", [1], opresult3023);
      setLineNumber(739);    // compilenode string
      var string3025 = new GraceString(", getclosureframe(closure));");
      var string3028 = new GraceString("  struct StackFrameObject *stackframe = alloc_StackFrame(");
      var opresult3030 = callmethodChecked(string3028, "++", [1], var_numslots);
      var opresult3032 = callmethodChecked(opresult3030, "++", [1], string3025);
      onSelf = true;
      var call3033 = callmethodChecked(this, "out", [1], opresult3032);
      setLineNumber(740);    // compilenode string
      var string3034 = new GraceString("  pushclosure(closure);");
      onSelf = true;
      var call3035 = callmethodChecked(this, "out", [1], string3034);
      if2979 = call3035;
    } else {
      setLineNumber(743);    // compilenode string
      var string3036 = new GraceString("int32_t flags) {");
      setLineNumber(742);    // compilenode string
      var string3038 = new GraceString("(Object self, int nparts, int *argcv, Object *args, ");
      var string3041 = new GraceString("Object ");
      var opresult3043 = callmethodChecked(string3041, "++", [1], var_litname);
      var opresult3045 = callmethodChecked(opresult3043, "++", [1], string3038);
      var opresult3047 = callmethodChecked(opresult3045, "++", [1], string3036);
      onSelf = true;
      var call3048 = callmethodChecked(this, "out", [1], opresult3047);
      setLineNumber(744);    // compilenode string
      var string3049 = new GraceString(", NULL);");
      var string3052 = new GraceString("  struct StackFrameObject *stackframe = alloc_StackFrame(");
      var opresult3054 = callmethodChecked(string3052, "++", [1], var_numslots);
      var opresult3056 = callmethodChecked(opresult3054, "++", [1], string3049);
      onSelf = true;
      var call3057 = callmethodChecked(this, "out", [1], opresult3056);
      setLineNumber(745);    // compilenode string
      var string3058 = new GraceString("  pushclosure(NULL);");
      onSelf = true;
      var call3059 = callmethodChecked(this, "out", [1], string3058);
      if2979 = call3059;
    }
    setLineNumber(747);    // compilenode string
    var string3060 = new GraceString("\");");
    onSelf = true;
    var call3062 = callmethodChecked(this, "escapestring2", [1], var_name);
    var string3064 = new GraceString("  pushstackframe(stackframe, \"");
    var opresult3066 = callmethodChecked(string3064, "++", [1], call3062);
    var opresult3068 = callmethodChecked(opresult3066, "++", [1], string3060);
    onSelf = true;
    var call3069 = callmethodChecked(this, "out", [1], opresult3068);
    setLineNumber(748);    // compilenode string
    var string3070 = new GraceString("  int frame = gc_frame_new();");
    onSelf = true;
    var call3071 = callmethodChecked(this, "out", [1], string3070);
    setLineNumber(749);    // compilenode string
    var string3072 = new GraceString("  gc_frame_newslot((Object)stackframe);");
    onSelf = true;
    var call3073 = callmethodChecked(this, "out", [1], string3072);
    setLineNumber(750);    // compilenode string
    var string3074 = new GraceString("  Object methodInheritingObject = NULL;");
    onSelf = true;
    var call3075 = callmethodChecked(this, "out", [1], string3074);
    setLineNumber(751);    // compilenode identifier
    var call3076 = callmethodChecked(var_o, "signature", [0]);
    var call3077 = callmethodChecked(call3076, "indices", [0]);
    var block3078 = new GraceBlock(this, 751, 1);
    setLineNumber(1);    // compilenode identifier
    block3078.real = function(var_partnr) {
      setLineNumber(752);    // compilenode identifier
      var call3079 = callmethodChecked(var_o, "signature", [0]);
      var call3080 = callmethodChecked(call3079, "at", [1], var_partnr);
      var var_part = call3080;
      var if3081 = GraceDone;
      setLineNumber(753);    // compilenode identifier
      var call3083 = callmethodChecked(var_part, "params", [0]);
      var call3084 = callmethodChecked(call3083, "size", [0]);
      var opresult3086 = callmethodChecked(call3084, ">", [1], new GraceNum(0));
      if (Grace_isTrue(opresult3086)) {
        setLineNumber(754);    // compilenode string
        var string3087 = new GraceString(")");
        var call3089 = callmethodChecked(var_part, "params", [0]);
        var call3090 = callmethodChecked(call3089, "size", [0]);
        var string3092 = new GraceString("] < ");
        var diff3096 = callmethodChecked(var_partnr, "-", [1], new GraceNum(1));
        var string3098 = new GraceString("  if (nparts > 0 && argcv[");
        var opresult3100 = callmethodChecked(string3098, "++", [1], diff3096);
        var opresult3102 = callmethodChecked(opresult3100, "++", [1], string3092);
        var opresult3104 = callmethodChecked(opresult3102, "++", [1], call3090);
        var opresult3106 = callmethodChecked(opresult3104, "++", [1], string3087);
        onSelf = true;
        var call3107 = callmethodChecked(this, "out", [1], opresult3106);
        setLineNumber(755);    // compilenode string
        var string3108 = new GraceString("\");");
        var call3110 = callmethodChecked(var_name, "quoted", [0]);
        var string3112 = new GraceString("    graceRaise(RequestError(), \"insufficient arguments to method ");
        var opresult3114 = callmethodChecked(string3112, "++", [1], call3110);
        var opresult3116 = callmethodChecked(opresult3114, "++", [1], string3108);
        onSelf = true;
        var call3117 = callmethodChecked(this, "out", [1], opresult3116);
        if3081 = call3117;
      }
      return if3081;
    };
    var call3118 = callmethodChecked(var_prelude, "for()do", [1, 1], call3077, block3078);
    setLineNumber(762);    // compilenode num
    var var_i = new GraceNum(0);
    setLineNumber(763);    // compilenode array
    var array3119 = new PrimitiveGraceList([]);
    var var_toremove = array3119;
    setLineNumber(764);    // compilenode identifier
    var call3120 = callmethodChecked(var_o, "signature", [0]);
    var block3121 = new GraceBlock(this, 764, 1);
    setLineNumber(1);    // compilenode identifier
    block3121.real = function(var_part) {
      setLineNumber(765);    // compilenode identifier
      var call3122 = callmethodChecked(var_part, "params", [0]);
      var block3123 = new GraceBlock(this, 765, 1);
      setLineNumber(1);    // compilenode identifier
      block3123.real = function(var_p) {
        setLineNumber(766);    // compilenode identifier
        var call3124 = callmethodChecked(var_p, "value", [0]);
        onSelf = true;
        var call3125 = callmethodChecked(this, "escapeident", [1], call3124);
        var var_pn = call3125;
        var if3126 = GraceDone;
        setLineNumber(767);    // compilenode identifier
        var call3127 = callmethodChecked(var_closurevars, "contains", [1], var_pn);
        if (Grace_isTrue(call3127)) {
          setLineNumber(768);    // compilenode identifier
          var call3128 = callmethodChecked(var_toremove, "push", [1], var_pn);
          if3126 = call3128;
        }
        return if3126;
      };
      var call3129 = callmethodChecked(var_prelude, "for()do", [1, 1], call3122, block3123);
      return call3129;
    };
    var call3130 = callmethodChecked(var_prelude, "for()do", [1, 1], call3120, block3121);
    setLineNumber(776);    // compilenode identifier
    var var_origclosurevars = var_closurevars;
    setLineNumber(777);    // compilenode array
    var array3131 = new PrimitiveGraceList([]);
    var_closurevars = array3131;
    setLineNumber(778);    // compilenode block
    var block3132 = new GraceBlock(this, 778, 1);
    setLineNumber(1);    // compilenode identifier
    block3132.real = function(var_pn) {
      var if3133 = GraceDone;
      setLineNumber(779);    // compilenode identifier
      var call3134 = callmethodChecked(var_toremove, "contains", [1], var_pn);
      if (Grace_isTrue(call3134)) {
      } else {
        setLineNumber(782);    // compilenode identifier
        var call3135 = callmethodChecked(var_closurevars, "push", [1], var_pn);
        if3133 = call3135;
      }
      return if3133;
    };
    var call3136 = callmethodChecked(var_prelude, "for()do", [1, 1], var_origclosurevars, block3132);
    setLineNumber(785);    // compilenode string
    var string3137 = new GraceString("];");
    var string3140 = new GraceString("  Object params[");
    var opresult3142 = callmethodChecked(string3140, "++", [1], var_paramsUsed);
    var opresult3144 = callmethodChecked(opresult3142, "++", [1], string3137);
    onSelf = true;
    var call3145 = callmethodChecked(this, "out", [1], opresult3144);
    setLineNumber(786);    // compilenode string
    var string3146 = new GraceString("];");
    var string3149 = new GraceString("  int partcv[");
    var opresult3151 = callmethodChecked(string3149, "++", [1], var_partsUsed);
    var opresult3153 = callmethodChecked(opresult3151, "++", [1], string3146);
    onSelf = true;
    var call3154 = callmethodChecked(this, "out", [1], opresult3153);
    setLineNumber(787);    // compilenode num
    var var_j = new GraceNum(0);
    setLineNumber(788);    // compilenode block
    var block3155 = new GraceBlock(this, 788, 1);
    setLineNumber(1);    // compilenode identifier
    block3155.real = function(var_cv) {
      var if3156 = GraceDone;
      setLineNumber(789);    // compilenode string
      var string3157 = new GraceString("self");
      var opresult3160 = callmethodChecked(var_cv, "==", [1], string3157);
      if (Grace_isTrue(opresult3160)) {
        setLineNumber(790);    // compilenode string
        var string3161 = new GraceString("));");
        var string3164 = new GraceString("  Object self = *(getfromclosure(closure, ");
        var opresult3166 = callmethodChecked(string3164, "++", [1], var_j);
        var opresult3168 = callmethodChecked(opresult3166, "++", [1], string3161);
        onSelf = true;
        var call3169 = callmethodChecked(this, "out", [1], opresult3168);
        setLineNumber(791);    // compilenode string
        var string3170 = new GraceString("  sourceObject = self;");
        onSelf = true;
        var call3171 = callmethodChecked(this, "out", [1], string3170);
        if3156 = call3171;
      } else {
        setLineNumber(793);    // compilenode string
        var string3172 = new GraceString(");");
        var string3175 = new GraceString(" = getfromclosure(closure, ");
        var string3178 = new GraceString("  Object *var_");
        var opresult3180 = callmethodChecked(string3178, "++", [1], var_cv);
        var opresult3182 = callmethodChecked(opresult3180, "++", [1], string3175);
        var opresult3184 = callmethodChecked(opresult3182, "++", [1], var_j);
        var opresult3186 = callmethodChecked(opresult3184, "++", [1], string3172);
        onSelf = true;
        var call3187 = callmethodChecked(this, "out", [1], opresult3186);
        if3156 = call3187;
      }
      setLineNumber(795);    // compilenode identifier
      var opresult3190 = callmethodChecked(var_j, "+", [1], new GraceNum(1));
      var_j = opresult3190;
      return GraceDone;
    };
    var call3191 = callmethodChecked(var_prelude, "for()do", [1, 1], var_closurevars, block3155);
    setLineNumber(797);    // compilenode block
    var block3192 = new GraceBlock(this, 797, 1);
    setLineNumber(1);    // compilenode identifier
    block3192.real = function(var_l) {
      setLineNumber(798);    // compilenode identifier
      onSelf = true;
      var call3193 = callmethodChecked(this, "out", [1], var_l);
      return call3193;
    };
    var call3194 = callmethodChecked(var_prelude, "for()do", [1, 1], var_body, block3192);
    setLineNumber(800);    // compilenode call
    onSelf = true;
    var call3195 = callmethodChecked(this, "outswitchdown", [0]);
    setLineNumber(801);    // compilenode identifier
    var_output = var_oldout;
    setLineNumber(802);    // compilenode identifier
    var_bblock = var_oldbblock;
    setLineNumber(803);    // compilenode identifier
    var_usedvars = var_oldusedvars;
    setLineNumber(804);    // compilenode identifier
    var_declaredvars = var_olddeclaredvars;
    setLineNumber(805);    // compilenode block
    var block3196 = new GraceBlock(this, 805, 1);
    setLineNumber(1);    // compilenode identifier
    block3196.real = function(var_cv) {
      var if3197 = GraceDone;
      setLineNumber(806);    // compilenode string
      var string3198 = new GraceString("self");
      var opresult3201 = callmethodChecked(var_cv, "\u2260", [1], string3198);
      if (Grace_isTrue(opresult3201)) {
        var if3202 = GraceDone;
        setLineNumber(807);    // compilenode identifier
        var call3203 = callmethodChecked(var_usedvars, "contains", [1], var_cv);
        var call3204 = callmethodChecked(call3203, "not", [0]);
        if (Grace_isTrue(call3204)) {
          setLineNumber(808);    // compilenode identifier
          var call3205 = callmethodChecked(var_usedvars, "push", [1], var_cv);
          if3202 = call3205;
        }
        if3197 = if3202;
      }
      return if3197;
    };
    var call3206 = callmethodChecked(var_prelude, "for()do", [1, 1], var_closurevars, block3196);
    var if3207 = GraceDone;
    setLineNumber(812);    // compilenode identifier
    var opresult3210 = callmethodChecked(var_selfobj, "==", [1], GraceFalse);
    if (Grace_isTrue(opresult3210)) {
    } else {
      var if3211 = GraceDone;
      setLineNumber(813);    // compilenode identifier
      var call3213 = callmethodChecked(var_closurevars, "size", [0]);
      var opresult3215 = callmethodChecked(call3213, "==", [1], new GraceNum(0));
      if (Grace_isTrue(opresult3215)) {
        setLineNumber(814);    // compilenode string
        var string3216 = new GraceString("");
        var string3219 = new GraceString("uo");
        var opresult3221 = callmethodChecked(string3219, "++", [1], var_myc);
        var opresult3223 = callmethodChecked(opresult3221, "++", [1], string3216);
        var var_uo2 = opresult3223;
        setLineNumber(815);    // compilenode string
        var string3224 = new GraceString(";");
        var string3227 = new GraceString(" = (struct UserObject*)");
        var string3230 = new GraceString("  struct UserObject *");
        var opresult3232 = callmethodChecked(string3230, "++", [1], var_uo2);
        var opresult3234 = callmethodChecked(opresult3232, "++", [1], string3227);
        var opresult3236 = callmethodChecked(opresult3234, "++", [1], var_selfobj);
        var opresult3238 = callmethodChecked(opresult3236, "++", [1], string3224);
        onSelf = true;
        var call3239 = callmethodChecked(this, "out", [1], opresult3238);
        setLineNumber(816);    // compilenode string
        var string3240 = new GraceString("] = emptyclosure;");
        var string3243 = new GraceString("->data[");
        var string3246 = new GraceString("  ");
        var opresult3248 = callmethodChecked(string3246, "++", [1], var_uo2);
        var opresult3250 = callmethodChecked(opresult3248, "++", [1], string3243);
        var opresult3252 = callmethodChecked(opresult3250, "++", [1], var_pos);
        var opresult3254 = callmethodChecked(opresult3252, "++", [1], string3240);
        onSelf = true;
        var call3255 = callmethodChecked(this, "out", [1], opresult3254);
        setLineNumber(817);    // compilenode string
        var string3256 = new GraceString(");");
        var string3259 = new GraceString(", ");
        var string3262 = new GraceString("\", &");
        onSelf = true;
        var call3264 = callmethodChecked(this, "escapestring2", [1], var_name);
        var string3266 = new GraceString(", \"");
        var string3269 = new GraceString(" = addmethod2pos(");
        var string3272 = new GraceString("  Method *meth_");
        var opresult3274 = callmethodChecked(string3272, "++", [1], var_litname);
        var opresult3276 = callmethodChecked(opresult3274, "++", [1], string3269);
        var opresult3278 = callmethodChecked(opresult3276, "++", [1], var_selfobj);
        var opresult3280 = callmethodChecked(opresult3278, "++", [1], string3266);
        var opresult3282 = callmethodChecked(opresult3280, "++", [1], call3264);
        var opresult3284 = callmethodChecked(opresult3282, "++", [1], string3262);
        var opresult3286 = callmethodChecked(opresult3284, "++", [1], var_litname);
        var opresult3288 = callmethodChecked(opresult3286, "++", [1], string3259);
        var opresult3290 = callmethodChecked(opresult3288, "++", [1], var_pos);
        var opresult3292 = callmethodChecked(opresult3290, "++", [1], string3256);
        onSelf = true;
        var call3293 = callmethodChecked(this, "out", [1], opresult3292);
        setLineNumber(818);    // compilenode identifier
        onSelf = true;
        var call3294 = callmethodChecked(this, "compilemethodtypes", [2], var_litname, var_o);
        if3211 = call3294;
      } else {
        setLineNumber(820);    // compilenode string
        var string3295 = new GraceString(");");
        var string3298 = new GraceString("  block_savedest(");
        var opresult3300 = callmethodChecked(string3298, "++", [1], var_selfobj);
        var opresult3302 = callmethodChecked(opresult3300, "++", [1], string3295);
        onSelf = true;
        var call3303 = callmethodChecked(this, "out", [1], opresult3302);
        setLineNumber(822);    // compilenode string
        var string3304 = new GraceString("\");");
        onSelf = true;
        var call3306 = callmethodChecked(this, "escapestring2", [1], var_name);
        var string3308 = new GraceString(", \"");
        var opresult3310 = callmethodChecked(string3308, "++", [1], call3306);
        var opresult3312 = callmethodChecked(opresult3310, "++", [1], string3304);
        var call3314 = callmethodChecked(var_closurevars, "size", [0]);
        setLineNumber(821);    // compilenode string
        var string3316 = new GraceString(" = createclosure(");
        var string3319 = new GraceString("  Object closure");
        var opresult3321 = callmethodChecked(string3319, "++", [1], var_myc);
        var opresult3323 = callmethodChecked(opresult3321, "++", [1], string3316);
        var opresult3325 = callmethodChecked(opresult3323, "++", [1], call3314);
        var opresult3327 = callmethodChecked(opresult3325, "++", [1], opresult3312);
        onSelf = true;
        var call3328 = callmethodChecked(this, "out", [1], opresult3327);
        setLineNumber(823);    // compilenode string
        var string3329 = new GraceString(", stackframe);");
        var string3332 = new GraceString("  setclosureframe(closure");
        var opresult3334 = callmethodChecked(string3332, "++", [1], var_myc);
        var opresult3336 = callmethodChecked(opresult3334, "++", [1], string3329);
        onSelf = true;
        var call3337 = callmethodChecked(this, "out", [1], opresult3336);
        setLineNumber(824);    // compilenode block
        var block3338 = new GraceBlock(this, 824, 1);
        setLineNumber(1);    // compilenode identifier
        block3338.real = function(var_v) {
          var if3339 = GraceDone;
          setLineNumber(825);    // compilenode string
          var string3340 = new GraceString("self");
          var opresult3343 = callmethodChecked(var_v, "==", [1], string3340);
          if (Grace_isTrue(opresult3343)) {
            setLineNumber(826);    // compilenode string
            var string3344 = new GraceString(", selfslot);");
            var string3347 = new GraceString("  addtoclosure(closure");
            var opresult3349 = callmethodChecked(string3347, "++", [1], var_myc);
            var opresult3351 = callmethodChecked(opresult3349, "++", [1], string3344);
            onSelf = true;
            var call3352 = callmethodChecked(this, "out", [1], opresult3351);
            setLineNumber(827);    // compilenode identifier
            var opresult3355 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
            var_auto__95__count = opresult3355;
            if3339 = GraceDone;
          } else {
            setLineNumber(829);    // compilenode string
            var string3356 = new GraceString(");");
            var string3359 = new GraceString(", var_");
            var string3362 = new GraceString("  addtoclosure(closure");
            var opresult3364 = callmethodChecked(string3362, "++", [1], var_myc);
            var opresult3366 = callmethodChecked(opresult3364, "++", [1], string3359);
            var opresult3368 = callmethodChecked(opresult3366, "++", [1], var_v);
            var opresult3370 = callmethodChecked(opresult3368, "++", [1], string3356);
            onSelf = true;
            var call3371 = callmethodChecked(this, "out", [1], opresult3370);
            if3339 = call3371;
          }
          return if3339;
        };
        var call3372 = callmethodChecked(var_prelude, "for()do", [1, 1], var_closurevars, block3338);
        setLineNumber(832);    // compilenode string
        var string3373 = new GraceString("");
        var string3376 = new GraceString("uo");
        var opresult3378 = callmethodChecked(string3376, "++", [1], var_myc);
        var opresult3380 = callmethodChecked(opresult3378, "++", [1], string3373);
        var var_uo = opresult3380;
        setLineNumber(833);    // compilenode string
        var string3381 = new GraceString(";");
        var string3384 = new GraceString(" = (struct UserObject*)");
        var string3387 = new GraceString("  struct UserObject *");
        var opresult3389 = callmethodChecked(string3387, "++", [1], var_uo);
        var opresult3391 = callmethodChecked(opresult3389, "++", [1], string3384);
        var opresult3393 = callmethodChecked(opresult3391, "++", [1], var_selfobj);
        var opresult3395 = callmethodChecked(opresult3393, "++", [1], string3381);
        onSelf = true;
        var call3396 = callmethodChecked(this, "out", [1], opresult3395);
        setLineNumber(834);    // compilenode string
        var string3397 = new GraceString(";");
        var string3400 = new GraceString("] = (Object)closure");
        var string3403 = new GraceString("->data[");
        var string3406 = new GraceString("  ");
        var opresult3408 = callmethodChecked(string3406, "++", [1], var_uo);
        var opresult3410 = callmethodChecked(opresult3408, "++", [1], string3403);
        var opresult3412 = callmethodChecked(opresult3410, "++", [1], var_pos);
        var opresult3414 = callmethodChecked(opresult3412, "++", [1], string3400);
        var opresult3416 = callmethodChecked(opresult3414, "++", [1], var_myc);
        var opresult3418 = callmethodChecked(opresult3416, "++", [1], string3397);
        onSelf = true;
        var call3419 = callmethodChecked(this, "out", [1], opresult3418);
        setLineNumber(835);    // compilenode string
        var string3420 = new GraceString(");");
        var string3423 = new GraceString(", ");
        var string3426 = new GraceString("\", &");
        onSelf = true;
        var call3428 = callmethodChecked(this, "escapestring2", [1], var_name);
        var string3430 = new GraceString(", \"");
        var string3433 = new GraceString(" = addmethod2pos(");
        var string3436 = new GraceString("  Method *meth_");
        var opresult3438 = callmethodChecked(string3436, "++", [1], var_litname);
        var opresult3440 = callmethodChecked(opresult3438, "++", [1], string3433);
        var opresult3442 = callmethodChecked(opresult3440, "++", [1], var_selfobj);
        var opresult3444 = callmethodChecked(opresult3442, "++", [1], string3430);
        var opresult3446 = callmethodChecked(opresult3444, "++", [1], call3428);
        var opresult3448 = callmethodChecked(opresult3446, "++", [1], string3426);
        var opresult3450 = callmethodChecked(opresult3448, "++", [1], var_litname);
        var opresult3452 = callmethodChecked(opresult3450, "++", [1], string3423);
        var opresult3454 = callmethodChecked(opresult3452, "++", [1], var_pos);
        var opresult3456 = callmethodChecked(opresult3454, "++", [1], string3420);
        onSelf = true;
        var call3457 = callmethodChecked(this, "out", [1], opresult3456);
        setLineNumber(836);    // compilenode identifier
        onSelf = true;
        var call3458 = callmethodChecked(this, "compilemethodtypes", [2], var_litname, var_o);
        if3211 = call3458;
      }
      if3207 = if3211;
    }
    setLineNumber(838);    // compilenode identifier
    var call3459 = callmethodChecked(var_o, "annotations", [0]);
    var block3460 = new GraceBlock(this, 838, 1);
    setLineNumber(1);    // compilenode identifier
    block3460.real = function(var_ann) {
      var if3461 = GraceDone;
      setLineNumber(839);    // compilenode block
      var block3462 = new GraceBlock(this, 839, 0);
      block3462.real = function() {
        var string3463 = new GraceString("confidential");
        var call3465 = callmethodChecked(var_ann, "value", [0]);
        var opresult3467 = callmethodChecked(call3465, "==", [1], string3463);
        return opresult3467;
      };
      var string3469 = new GraceString("identifier");
      var call3471 = callmethodChecked(var_ann, "kind", [0]);
      var opresult3473 = callmethodChecked(call3471, "==", [1], string3469);
      var opresult3475 = callmethodChecked(opresult3473, "&&", [1], block3462);
      if (Grace_isTrue(opresult3475)) {
        setLineNumber(840);    // compilenode string
        var string3476 = new GraceString("->flags |= MFLAG_CONFIDENTIAL;");
        var string3479 = new GraceString("  meth_");
        var opresult3481 = callmethodChecked(string3479, "++", [1], var_litname);
        var opresult3483 = callmethodChecked(opresult3481, "++", [1], string3476);
        onSelf = true;
        var call3484 = callmethodChecked(this, "out", [1], opresult3483);
        if3461 = call3484;
      }
      return if3461;
    };
    var call3485 = callmethodChecked(var_prelude, "for()do", [1, 1], call3459, block3460);
    setLineNumber(843);    // compilenode string
    var string3486 = new GraceString("->definitionModule = modulename;");
    var string3489 = new GraceString("  meth_");
    var opresult3491 = callmethodChecked(string3489, "++", [1], var_litname);
    var opresult3493 = callmethodChecked(opresult3491, "++", [1], string3486);
    onSelf = true;
    var call3494 = callmethodChecked(this, "out", [1], opresult3493);
    setLineNumber(844);    // compilenode string
    var string3495 = new GraceString(";");
    var call3497 = callmethodChecked(var_o, "line", [0]);
    var string3499 = new GraceString("->definitionLine = ");
    var string3502 = new GraceString("  meth_");
    var opresult3504 = callmethodChecked(string3502, "++", [1], var_litname);
    var opresult3506 = callmethodChecked(opresult3504, "++", [1], string3499);
    var opresult3508 = callmethodChecked(opresult3506, "++", [1], call3497);
    var opresult3510 = callmethodChecked(opresult3508, "++", [1], string3495);
    onSelf = true;
    var call3511 = callmethodChecked(this, "out", [1], opresult3510);
    var if3512 = GraceDone;
    setLineNumber(845);    // compilenode identifier
    var call3513 = callmethodChecked(var_o, "isFresh", [0]);
    if (Grace_isTrue(call3513)) {
      setLineNumber(847);    // compilenode identifier
      onSelf = true;
      var call3514 = callmethodChecked(this, "compilefreshmethod", [8], var_o, var_nm, var_body, var_closurevars, var_selfobj, var_pos, var_numslots, var_oldout);
      if3512 = call3514;
    }
    setLineNumber(849);    // compilenode identifier
    var_inBlock = var_origInBlock;
    setLineNumber(850);    // compilenode identifier
    var_paramsUsed = var_origParamsUsed;
    setLineNumber(851);    // compilenode identifier
    var_partsUsed = var_origPartsUsed;
    return GraceDone;
  };
  func2534.paramCounts = [3];
  this.methods["compilemethod"] = func2534;
  func2534.definitionLine = 571;
  func2534.definitionModule = "genc";
  setLineNumber(857);    // compilenode method
  var func3515 = function(argcv) {    // method compilefreshmethod(8)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_nm = arguments[curarg];
    curarg++;
    var var_body = arguments[curarg];
    curarg++;
    var var_closurevars = arguments[curarg];
    curarg++;
    var var_selfobj = arguments[curarg];
    curarg++;
    var var_pos = arguments[curarg];
    curarg++;
    var var_numslots = arguments[curarg];
    curarg++;
    var var_oldout = arguments[curarg];
    curarg++;
    if (argcv[0] !== 8)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compilefreshmethod(8)"));
    setModuleName("genc");
    setLineNumber(859);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(860);    // compilenode identifier
    var opresult3518 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult3518;
    setLineNumber(861);    // compilenode string
    var string3519 = new GraceString("_object");
    onSelf = true;
    var call3521 = callmethodChecked(this, "escapestring2", [1], var_nm);
    var string3523 = new GraceString("_");
    var string3526 = new GraceString("meth_");
    var opresult3528 = callmethodChecked(string3526, "++", [1], var_modname);
    var opresult3530 = callmethodChecked(opresult3528, "++", [1], string3523);
    var opresult3532 = callmethodChecked(opresult3530, "++", [1], call3521);
    var opresult3534 = callmethodChecked(opresult3532, "++", [1], string3519);
    onSelf = true;
    var call3535 = callmethodChecked(this, "escapeident", [1], opresult3534);
    var var_litname = call3535;
    setLineNumber(862);    // compilenode string
    var string3536 = new GraceString("()object");
    var call3538 = callmethodChecked(var_o, "value", [0]);
    var call3539 = callmethodChecked(call3538, "value", [0]);
    var opresult3541 = callmethodChecked(call3539, "++", [1], string3536);
    onSelf = true;
    var call3542 = callmethodChecked(this, "escapestring2", [1], opresult3541);
    var var_name = call3542;
    setLineNumber(863);    // compilenode call
    onSelf = true;
    var call3543 = callmethodChecked(this, "outswitchup", [0]);
    var if3544 = GraceDone;
    setLineNumber(864);    // compilenode identifier
    var call3546 = callmethodChecked(var_closurevars, "size", [0]);
    var opresult3548 = callmethodChecked(call3546, ">", [1], new GraceNum(0));
    if (Grace_isTrue(opresult3548)) {
      var if3549 = GraceDone;
      setLineNumber(865);    // compilenode identifier
      var call3550 = callmethodChecked(var_o, "selfclosure", [0]);
      if (Grace_isTrue(call3550)) {
        setLineNumber(867);    // compilenode string
        var string3551 = new GraceString("Object *args, int32_t flags) {");
        setLineNumber(866);    // compilenode string
        var string3553 = new GraceString("(Object realself, int nparts, int *argcv, ");
        var string3556 = new GraceString("Object ");
        var opresult3558 = callmethodChecked(string3556, "++", [1], var_litname);
        var opresult3560 = callmethodChecked(opresult3558, "++", [1], string3553);
        var opresult3562 = callmethodChecked(opresult3560, "++", [1], string3551);
        onSelf = true;
        var call3563 = callmethodChecked(this, "out", [1], opresult3562);
        setLineNumber(868);    // compilenode string
        var string3564 = new GraceString("  struct UserObject *uo = (struct UserObject*)realself;");
        onSelf = true;
        var call3565 = callmethodChecked(this, "out", [1], string3564);
        if3549 = call3565;
      } else {
        setLineNumber(871);    // compilenode string
        var string3566 = new GraceString("int32_t flags) {");
        setLineNumber(870);    // compilenode string
        var string3568 = new GraceString("(Object self, int nparts, int *argcv, Object *args, ");
        var string3571 = new GraceString("Object ");
        var opresult3573 = callmethodChecked(string3571, "++", [1], var_litname);
        var opresult3575 = callmethodChecked(opresult3573, "++", [1], string3568);
        var opresult3577 = callmethodChecked(opresult3575, "++", [1], string3566);
        onSelf = true;
        var call3578 = callmethodChecked(this, "out", [1], opresult3577);
        setLineNumber(872);    // compilenode string
        var string3579 = new GraceString("  struct UserObject *uo = (struct UserObject*)self;");
        onSelf = true;
        var call3580 = callmethodChecked(this, "out", [1], string3579);
        if3549 = call3580;
      }
      setLineNumber(874);    // compilenode string
      var string3581 = new GraceString(", (flags>>24)&0xff);");
      var string3584 = new GraceString("  Object closure = getdatum((Object)uo, ");
      var opresult3586 = callmethodChecked(string3584, "++", [1], var_pos);
      var opresult3588 = callmethodChecked(opresult3586, "++", [1], string3581);
      onSelf = true;
      var call3589 = callmethodChecked(this, "out", [1], opresult3588);
      setLineNumber(875);    // compilenode string
      var string3590 = new GraceString(", getclosureframe(closure));");
      var string3593 = new GraceString("  struct StackFrameObject *stackframe = alloc_StackFrame(");
      var opresult3595 = callmethodChecked(string3593, "++", [1], var_numslots);
      var opresult3597 = callmethodChecked(opresult3595, "++", [1], string3590);
      onSelf = true;
      var call3598 = callmethodChecked(this, "out", [1], opresult3597);
      setLineNumber(876);    // compilenode string
      var string3599 = new GraceString("  pushclosure(closure);");
      onSelf = true;
      var call3600 = callmethodChecked(this, "out", [1], string3599);
      if3544 = call3600;
    } else {
      setLineNumber(879);    // compilenode string
      var string3601 = new GraceString("int32_t flags) {");
      setLineNumber(878);    // compilenode string
      var string3603 = new GraceString("(Object self, int nparts, int *argcv, Object *args, ");
      var string3606 = new GraceString("Object ");
      var opresult3608 = callmethodChecked(string3606, "++", [1], var_litname);
      var opresult3610 = callmethodChecked(opresult3608, "++", [1], string3603);
      var opresult3612 = callmethodChecked(opresult3610, "++", [1], string3601);
      onSelf = true;
      var call3613 = callmethodChecked(this, "out", [1], opresult3612);
      setLineNumber(880);    // compilenode string
      var string3614 = new GraceString(", NULL);");
      var string3617 = new GraceString("  struct StackFrameObject *stackframe = alloc_StackFrame(");
      var opresult3619 = callmethodChecked(string3617, "++", [1], var_numslots);
      var opresult3621 = callmethodChecked(opresult3619, "++", [1], string3614);
      onSelf = true;
      var call3622 = callmethodChecked(this, "out", [1], opresult3621);
      setLineNumber(881);    // compilenode string
      var string3623 = new GraceString("  pushclosure(NULL);");
      onSelf = true;
      var call3624 = callmethodChecked(this, "out", [1], string3623);
      if3544 = call3624;
    }
    setLineNumber(883);    // compilenode string
    var string3625 = new GraceString("\");");
    onSelf = true;
    var call3627 = callmethodChecked(this, "escapestring2", [1], var_name);
    var string3629 = new GraceString("  pushstackframe(stackframe, \"");
    var opresult3631 = callmethodChecked(string3629, "++", [1], call3627);
    var opresult3633 = callmethodChecked(opresult3631, "++", [1], string3625);
    onSelf = true;
    var call3634 = callmethodChecked(this, "out", [1], opresult3633);
    setLineNumber(884);    // compilenode string
    var string3635 = new GraceString("  int frame = gc_frame_new();");
    onSelf = true;
    var call3636 = callmethodChecked(this, "out", [1], string3635);
    setLineNumber(885);    // compilenode string
    var string3637 = new GraceString("  gc_frame_newslot((Object)stackframe);");
    onSelf = true;
    var call3638 = callmethodChecked(this, "out", [1], string3637);
    setLineNumber(886);    // compilenode string
    var string3639 = new GraceString("0");
    var var_sumAccum = string3639;
    setLineNumber(887);    // compilenode identifier
    var call3640 = callmethodChecked(var_o, "signature", [0]);
    var call3641 = callmethodChecked(call3640, "indices", [0]);
    var block3642 = new GraceBlock(this, 887, 1);
    setLineNumber(1);    // compilenode identifier
    block3642.real = function(var_partnr) {
      setLineNumber(888);    // compilenode string
      var string3643 = new GraceString("]");
      var diff3647 = callmethodChecked(var_partnr, "-", [1], new GraceNum(1));
      var string3649 = new GraceString(" + argcv[");
      var opresult3651 = callmethodChecked(string3649, "++", [1], diff3647);
      var opresult3653 = callmethodChecked(opresult3651, "++", [1], string3643);
      var opresult3656 = callmethodChecked(var_sumAccum, "++", [1], opresult3653);
      var_sumAccum = opresult3656;
      return GraceDone;
    };
    var call3657 = callmethodChecked(var_prelude, "for()do", [1, 1], call3641, block3642);
    setLineNumber(890);    // compilenode string
    var string3658 = new GraceString("];");
    var string3661 = new GraceString("  Object methodInheritingObject = args[");
    var opresult3663 = callmethodChecked(string3661, "++", [1], var_sumAccum);
    var opresult3665 = callmethodChecked(opresult3663, "++", [1], string3658);
    onSelf = true;
    var call3666 = callmethodChecked(this, "out", [1], opresult3665);
    setLineNumber(891);    // compilenode identifier
    var call3667 = callmethodChecked(var_o, "signature", [0]);
    var call3668 = callmethodChecked(call3667, "indices", [0]);
    var block3669 = new GraceBlock(this, 891, 1);
    setLineNumber(1);    // compilenode identifier
    block3669.real = function(var_partnr) {
      setLineNumber(892);    // compilenode identifier
      var call3670 = callmethodChecked(var_o, "signature", [0]);
      var call3671 = callmethodChecked(call3670, "at", [1], var_partnr);
      var var_part = call3671;
      var if3672 = GraceDone;
      setLineNumber(893);    // compilenode identifier
      var call3674 = callmethodChecked(var_part, "params", [0]);
      var call3675 = callmethodChecked(call3674, "size", [0]);
      var opresult3677 = callmethodChecked(call3675, ">", [1], new GraceNum(0));
      if (Grace_isTrue(opresult3677)) {
        setLineNumber(894);    // compilenode string
        var string3678 = new GraceString(")");
        var call3680 = callmethodChecked(var_part, "params", [0]);
        var call3681 = callmethodChecked(call3680, "size", [0]);
        var string3683 = new GraceString("] < ");
        var diff3687 = callmethodChecked(var_partnr, "-", [1], new GraceNum(1));
        var string3689 = new GraceString("  if (nparts > 0 && argcv[");
        var opresult3691 = callmethodChecked(string3689, "++", [1], diff3687);
        var opresult3693 = callmethodChecked(opresult3691, "++", [1], string3683);
        var opresult3695 = callmethodChecked(opresult3693, "++", [1], call3681);
        var opresult3697 = callmethodChecked(opresult3695, "++", [1], string3678);
        onSelf = true;
        var call3698 = callmethodChecked(this, "out", [1], opresult3697);
        setLineNumber(895);    // compilenode string
        var string3699 = new GraceString("\");");
        var string3702 = new GraceString("    graceRaise(RequestError(), \"insufficient arguments to method ");
        var opresult3704 = callmethodChecked(string3702, "++", [1], var_name);
        var opresult3706 = callmethodChecked(opresult3704, "++", [1], string3699);
        onSelf = true;
        var call3707 = callmethodChecked(this, "out", [1], opresult3706);
        if3672 = call3707;
      }
      return if3672;
    };
    var call3708 = callmethodChecked(var_prelude, "for()do", [1, 1], call3668, block3669);
    setLineNumber(898);    // compilenode string
    var string3709 = new GraceString("];");
    var string3712 = new GraceString("  Object params[");
    var opresult3714 = callmethodChecked(string3712, "++", [1], var_paramsUsed);
    var opresult3716 = callmethodChecked(opresult3714, "++", [1], string3709);
    onSelf = true;
    var call3717 = callmethodChecked(this, "out", [1], opresult3716);
    setLineNumber(899);    // compilenode string
    var string3718 = new GraceString("];");
    var string3721 = new GraceString("  int partcv[");
    var opresult3723 = callmethodChecked(string3721, "++", [1], var_partsUsed);
    var opresult3725 = callmethodChecked(opresult3723, "++", [1], string3718);
    onSelf = true;
    var call3726 = callmethodChecked(this, "out", [1], opresult3725);
    setLineNumber(900);    // compilenode num
    var var_j = new GraceNum(0);
    setLineNumber(901);    // compilenode block
    var block3727 = new GraceBlock(this, 901, 1);
    setLineNumber(1);    // compilenode identifier
    block3727.real = function(var_cv) {
      var if3728 = GraceDone;
      setLineNumber(902);    // compilenode string
      var string3729 = new GraceString("self");
      var opresult3732 = callmethodChecked(var_cv, "==", [1], string3729);
      if (Grace_isTrue(opresult3732)) {
        setLineNumber(903);    // compilenode string
        var string3733 = new GraceString("));");
        var string3736 = new GraceString("  Object self = *(getfromclosure(closure, ");
        var opresult3738 = callmethodChecked(string3736, "++", [1], var_j);
        var opresult3740 = callmethodChecked(opresult3738, "++", [1], string3733);
        onSelf = true;
        var call3741 = callmethodChecked(this, "out", [1], opresult3740);
        setLineNumber(904);    // compilenode string
        var string3742 = new GraceString("  sourceObject = self;");
        onSelf = true;
        var call3743 = callmethodChecked(this, "out", [1], string3742);
        if3728 = call3743;
      } else {
        setLineNumber(906);    // compilenode string
        var string3744 = new GraceString(");");
        var string3747 = new GraceString(" = getfromclosure(closure, ");
        var string3750 = new GraceString("  Object *var_");
        var opresult3752 = callmethodChecked(string3750, "++", [1], var_cv);
        var opresult3754 = callmethodChecked(opresult3752, "++", [1], string3747);
        var opresult3756 = callmethodChecked(opresult3754, "++", [1], var_j);
        var opresult3758 = callmethodChecked(opresult3756, "++", [1], string3744);
        onSelf = true;
        var call3759 = callmethodChecked(this, "out", [1], opresult3758);
        if3728 = call3759;
      }
      setLineNumber(908);    // compilenode identifier
      var opresult3762 = callmethodChecked(var_j, "+", [1], new GraceNum(1));
      var_j = opresult3762;
      return GraceDone;
    };
    var call3763 = callmethodChecked(var_prelude, "for()do", [1, 1], var_closurevars, block3727);
    setLineNumber(910);    // compilenode block
    var block3764 = new GraceBlock(this, 910, 1);
    setLineNumber(1);    // compilenode identifier
    block3764.real = function(var_l) {
      setLineNumber(911);    // compilenode identifier
      onSelf = true;
      var call3765 = callmethodChecked(this, "out", [1], var_l);
      return call3765;
    };
    var call3766 = callmethodChecked(var_prelude, "for()do", [1, 1], var_body, block3764);
    setLineNumber(913);    // compilenode identifier
    var_output = var_oldout;
    var if3767 = GraceDone;
    setLineNumber(914);    // compilenode identifier
    var opresult3770 = callmethodChecked(var_selfobj, "==", [1], GraceFalse);
    if (Grace_isTrue(opresult3770)) {
    } else {
      var if3771 = GraceDone;
      setLineNumber(915);    // compilenode identifier
      var call3773 = callmethodChecked(var_closurevars, "size", [0]);
      var opresult3775 = callmethodChecked(call3773, "==", [1], new GraceNum(0));
      if (Grace_isTrue(opresult3775)) {
        setLineNumber(916);    // compilenode string
        var string3776 = new GraceString(");");
        var string3779 = new GraceString(", ");
        var string3782 = new GraceString("\", &");
        onSelf = true;
        var call3784 = callmethodChecked(this, "escapestring2", [1], var_name);
        var string3786 = new GraceString(", \"");
        var string3789 = new GraceString(" = addmethod2pos(");
        var string3792 = new GraceString("  Method *meth_");
        var opresult3794 = callmethodChecked(string3792, "++", [1], var_litname);
        var opresult3796 = callmethodChecked(opresult3794, "++", [1], string3789);
        var opresult3798 = callmethodChecked(opresult3796, "++", [1], var_selfobj);
        var opresult3800 = callmethodChecked(opresult3798, "++", [1], string3786);
        var opresult3802 = callmethodChecked(opresult3800, "++", [1], call3784);
        var opresult3804 = callmethodChecked(opresult3802, "++", [1], string3782);
        var opresult3806 = callmethodChecked(opresult3804, "++", [1], var_litname);
        var opresult3808 = callmethodChecked(opresult3806, "++", [1], string3779);
        var opresult3810 = callmethodChecked(opresult3808, "++", [1], var_pos);
        var opresult3812 = callmethodChecked(opresult3810, "++", [1], string3776);
        onSelf = true;
        var call3813 = callmethodChecked(this, "out", [1], opresult3812);
        setLineNumber(917);    // compilenode identifier
        onSelf = true;
        var call3814 = callmethodChecked(this, "compilemethodtypes", [2], var_litname, var_o);
        if3771 = call3814;
      } else {
        setLineNumber(919);    // compilenode string
        var string3815 = new GraceString(");");
        var string3818 = new GraceString("  block_savedest(");
        var opresult3820 = callmethodChecked(string3818, "++", [1], var_selfobj);
        var opresult3822 = callmethodChecked(opresult3820, "++", [1], string3815);
        onSelf = true;
        var call3823 = callmethodChecked(this, "out", [1], opresult3822);
        setLineNumber(921);    // compilenode string
        var string3824 = new GraceString("\");");
        onSelf = true;
        var call3826 = callmethodChecked(this, "escapestring2", [1], var_name);
        var string3828 = new GraceString(", \"");
        var opresult3830 = callmethodChecked(string3828, "++", [1], call3826);
        var opresult3832 = callmethodChecked(opresult3830, "++", [1], string3824);
        var call3834 = callmethodChecked(var_closurevars, "size", [0]);
        setLineNumber(920);    // compilenode string
        var string3836 = new GraceString(" = createclosure(");
        var string3839 = new GraceString("  Object closure");
        var opresult3841 = callmethodChecked(string3839, "++", [1], var_myc);
        var opresult3843 = callmethodChecked(opresult3841, "++", [1], string3836);
        var opresult3845 = callmethodChecked(opresult3843, "++", [1], call3834);
        var opresult3847 = callmethodChecked(opresult3845, "++", [1], opresult3832);
        onSelf = true;
        var call3848 = callmethodChecked(this, "out", [1], opresult3847);
        setLineNumber(922);    // compilenode string
        var string3849 = new GraceString(", stackframe);");
        var string3852 = new GraceString("  setclosureframe(closure");
        var opresult3854 = callmethodChecked(string3852, "++", [1], var_myc);
        var opresult3856 = callmethodChecked(opresult3854, "++", [1], string3849);
        onSelf = true;
        var call3857 = callmethodChecked(this, "out", [1], opresult3856);
        setLineNumber(923);    // compilenode block
        var block3858 = new GraceBlock(this, 923, 1);
        setLineNumber(1);    // compilenode identifier
        block3858.real = function(var_v) {
          var if3859 = GraceDone;
          setLineNumber(924);    // compilenode string
          var string3860 = new GraceString("self");
          var opresult3863 = callmethodChecked(var_v, "==", [1], string3860);
          if (Grace_isTrue(opresult3863)) {
            setLineNumber(925);    // compilenode string
            var string3864 = new GraceString(", selfslot);");
            var string3867 = new GraceString("  addtoclosure(closure");
            var opresult3869 = callmethodChecked(string3867, "++", [1], var_myc);
            var opresult3871 = callmethodChecked(opresult3869, "++", [1], string3864);
            onSelf = true;
            var call3872 = callmethodChecked(this, "out", [1], opresult3871);
            setLineNumber(926);    // compilenode identifier
            var opresult3875 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
            var_auto__95__count = opresult3875;
            if3859 = GraceDone;
          } else {
            setLineNumber(928);    // compilenode string
            var string3876 = new GraceString(");");
            var string3879 = new GraceString(", var_");
            var string3882 = new GraceString("  addtoclosure(closure");
            var opresult3884 = callmethodChecked(string3882, "++", [1], var_myc);
            var opresult3886 = callmethodChecked(opresult3884, "++", [1], string3879);
            var opresult3888 = callmethodChecked(opresult3886, "++", [1], var_v);
            var opresult3890 = callmethodChecked(opresult3888, "++", [1], string3876);
            onSelf = true;
            var call3891 = callmethodChecked(this, "out", [1], opresult3890);
            if3859 = call3891;
          }
          return if3859;
        };
        var call3892 = callmethodChecked(var_prelude, "for()do", [1, 1], var_closurevars, block3858);
        setLineNumber(931);    // compilenode string
        var string3893 = new GraceString("");
        var string3896 = new GraceString("uo");
        var opresult3898 = callmethodChecked(string3896, "++", [1], var_myc);
        var opresult3900 = callmethodChecked(opresult3898, "++", [1], string3893);
        var var_uo = opresult3900;
        setLineNumber(932);    // compilenode string
        var string3901 = new GraceString(");");
        var string3904 = new GraceString(", ");
        var string3907 = new GraceString("\", &");
        onSelf = true;
        var call3909 = callmethodChecked(this, "escapestring2", [1], var_name);
        var string3911 = new GraceString(", \"");
        var string3914 = new GraceString(" = addmethod2pos(");
        var string3917 = new GraceString("  Method *meth_");
        var opresult3919 = callmethodChecked(string3917, "++", [1], var_litname);
        var opresult3921 = callmethodChecked(opresult3919, "++", [1], string3914);
        var opresult3923 = callmethodChecked(opresult3921, "++", [1], var_selfobj);
        var opresult3925 = callmethodChecked(opresult3923, "++", [1], string3911);
        var opresult3927 = callmethodChecked(opresult3925, "++", [1], call3909);
        var opresult3929 = callmethodChecked(opresult3927, "++", [1], string3907);
        var opresult3931 = callmethodChecked(opresult3929, "++", [1], var_litname);
        var opresult3933 = callmethodChecked(opresult3931, "++", [1], string3904);
        var opresult3935 = callmethodChecked(opresult3933, "++", [1], var_pos);
        var opresult3937 = callmethodChecked(opresult3935, "++", [1], string3901);
        onSelf = true;
        var call3938 = callmethodChecked(this, "out", [1], opresult3937);
        if3771 = call3938;
      }
      if3767 = if3771;
    }
    setLineNumber(934);    // compilenode identifier
    var call3939 = callmethodChecked(var_o, "annotations", [0]);
    var block3940 = new GraceBlock(this, 934, 1);
    setLineNumber(1);    // compilenode identifier
    block3940.real = function(var_ann) {
      var if3941 = GraceDone;
      setLineNumber(935);    // compilenode block
      var block3942 = new GraceBlock(this, 935, 0);
      block3942.real = function() {
        var string3943 = new GraceString("confidential");
        var call3945 = callmethodChecked(var_ann, "value", [0]);
        var opresult3947 = callmethodChecked(call3945, "==", [1], string3943);
        return opresult3947;
      };
      var string3949 = new GraceString("identifier");
      var call3951 = callmethodChecked(var_ann, "kind", [0]);
      var opresult3953 = callmethodChecked(call3951, "==", [1], string3949);
      var opresult3955 = callmethodChecked(opresult3953, "&&", [1], block3942);
      if (Grace_isTrue(opresult3955)) {
        setLineNumber(936);    // compilenode string
        var string3956 = new GraceString("->flags |= MFLAG_CONFIDENTIAL;");
        var string3959 = new GraceString("  meth_");
        var opresult3961 = callmethodChecked(string3959, "++", [1], var_litname);
        var opresult3963 = callmethodChecked(opresult3961, "++", [1], string3956);
        onSelf = true;
        var call3964 = callmethodChecked(this, "out", [1], opresult3963);
        if3941 = call3964;
      }
      return if3941;
    };
    var call3965 = callmethodChecked(var_prelude, "for()do", [1, 1], call3939, block3940);
    setLineNumber(939);    // compilenode string
    var string3966 = new GraceString("->definitionModule = modulename;");
    var string3969 = new GraceString("  meth_");
    var opresult3971 = callmethodChecked(string3969, "++", [1], var_litname);
    var opresult3973 = callmethodChecked(opresult3971, "++", [1], string3966);
    onSelf = true;
    var call3974 = callmethodChecked(this, "out", [1], opresult3973);
    setLineNumber(940);    // compilenode string
    var string3975 = new GraceString(";");
    var call3977 = callmethodChecked(var_o, "line", [0]);
    var string3979 = new GraceString("->definitionLine = ");
    var string3982 = new GraceString("  meth_");
    var opresult3984 = callmethodChecked(string3982, "++", [1], var_litname);
    var opresult3986 = callmethodChecked(opresult3984, "++", [1], string3979);
    var opresult3988 = callmethodChecked(opresult3986, "++", [1], call3977);
    var opresult3990 = callmethodChecked(opresult3988, "++", [1], string3975);
    onSelf = true;
    var call3991 = callmethodChecked(this, "out", [1], opresult3990);
    return call3991;
  };
  func3515.paramCounts = [8];
  this.methods["compilefreshmethod"] = func3515;
  func3515.definitionLine = 857;
  func3515.definitionModule = "genc";
  setLineNumber(942);    // compilenode method
  var func3992 = function(argcv) {    // method compilemethodtypes(2)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_litname = arguments[curarg];
    curarg++;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 2)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compilemethodtypes(2)"));
    setModuleName("genc");
    setLineNumber(943);    // compilenode string
    var string3993 = new GraceString("[] = {");
    var string3996 = new GraceString("  int argcv_");
    var opresult3998 = callmethodChecked(string3996, "++", [1], var_litname);
    var opresult4000 = callmethodChecked(opresult3998, "++", [1], string3993);
    var var_argcv = opresult4000;
    setLineNumber(944);    // compilenode identifier
    var call4001 = callmethodChecked(var_o, "signature", [0]);
    var call4002 = callmethodChecked(call4001, "indices", [0]);
    var block4003 = new GraceBlock(this, 944, 1);
    setLineNumber(1);    // compilenode identifier
    block4003.real = function(var_partnr) {
      setLineNumber(945);    // compilenode identifier
      var call4004 = callmethodChecked(var_o, "signature", [0]);
      var call4005 = callmethodChecked(call4004, "at", [1], var_partnr);
      var var_part = call4005;
      setLineNumber(946);    // compilenode identifier
      var call4006 = callmethodChecked(var_part, "params", [0]);
      var call4007 = callmethodChecked(call4006, "size", [0]);
      var opresult4010 = callmethodChecked(var_argcv, "++", [1], call4007);
      var_argcv = opresult4010;
      var if4011 = GraceDone;
      setLineNumber(947);    // compilenode identifier
      var call4012 = callmethodChecked(var_o, "signature", [0]);
      var call4013 = callmethodChecked(call4012, "size", [0]);
      var opresult4016 = callmethodChecked(var_partnr, "<", [1], call4013);
      if (Grace_isTrue(opresult4016)) {
        setLineNumber(948);    // compilenode string
        var string4017 = new GraceString(", ");
        var opresult4020 = callmethodChecked(var_argcv, "++", [1], string4017);
        var_argcv = opresult4020;
        if4011 = GraceDone;
      }
      return if4011;
    };
    var call4021 = callmethodChecked(var_prelude, "for()do", [1, 1], call4002, block4003);
    setLineNumber(951);    // compilenode string
    var string4022 = new GraceString("};");
    var opresult4025 = callmethodChecked(var_argcv, "++", [1], string4022);
    var_argcv = opresult4025;
    setLineNumber(952);    // compilenode identifier
    onSelf = true;
    var call4026 = callmethodChecked(this, "out", [1], var_argcv);
    setLineNumber(953);    // compilenode string
    var string4027 = new GraceString(");");
    var string4030 = new GraceString(", argcv_");
    var call4032 = callmethodChecked(var_o, "signature", [0]);
    var call4033 = callmethodChecked(call4032, "size", [0]);
    var string4035 = new GraceString("->type = alloc_MethodType(");
    var string4038 = new GraceString("  meth_");
    var opresult4040 = callmethodChecked(string4038, "++", [1], var_litname);
    var opresult4042 = callmethodChecked(opresult4040, "++", [1], string4035);
    var opresult4044 = callmethodChecked(opresult4042, "++", [1], call4033);
    var opresult4046 = callmethodChecked(opresult4044, "++", [1], string4030);
    var opresult4048 = callmethodChecked(opresult4046, "++", [1], var_litname);
    var opresult4050 = callmethodChecked(opresult4048, "++", [1], string4027);
    onSelf = true;
    var call4051 = callmethodChecked(this, "out", [1], opresult4050);
    setLineNumber(954);    // compilenode num
    var var_pi = new GraceNum(0);
    setLineNumber(955);    // compilenode identifier
    var call4052 = callmethodChecked(var_o, "signature", [0]);
    var block4053 = new GraceBlock(this, 955, 1);
    setLineNumber(1);    // compilenode identifier
    block4053.real = function(var_part) {
      setLineNumber(956);    // compilenode identifier
      var call4054 = callmethodChecked(var_part, "params", [0]);
      var block4055 = new GraceBlock(this, 956, 1);
      setLineNumber(1);    // compilenode identifier
      block4055.real = function(var_p) {
        var if4056 = GraceDone;
        setLineNumber(959);    // compilenode identifier
        var call4057 = callmethodChecked(var_p, "dtype", [0]);
        var opresult4060 = callmethodChecked(GraceFalse, "\u2260", [1], call4057);
        if (Grace_isTrue(opresult4060)) {
          var if4061 = GraceDone;
          setLineNumber(961);    // compilenode string
          var string4062 = new GraceString("typeliteral");
          var call4064 = callmethodChecked(var_p, "dtype", [0]);
          var call4065 = callmethodChecked(call4064, "kind", [0]);
          var opresult4067 = callmethodChecked(call4065, "==", [1], string4062);
          setLineNumber(960);    // compilenode string
          var string4069 = new GraceString("identifier");
          var call4071 = callmethodChecked(var_p, "dtype", [0]);
          var call4072 = callmethodChecked(call4071, "kind", [0]);
          var opresult4074 = callmethodChecked(call4072, "==", [1], string4069);
          var opresult4076 = callmethodChecked(opresult4074, "||", [1], opresult4067);
          if (Grace_isTrue(opresult4076)) {
            setLineNumber(962);    // compilenode identifier
            var call4077 = callmethodChecked(var_p, "dtype", [0]);
            var call4078 = callmethodChecked(call4077, "value", [0]);
            onSelf = true;
            var call4079 = callmethodChecked(this, "escapeident", [1], call4078);
            var var_typeid = call4079;
            var if4080 = GraceDone;
            setLineNumber(963);    // compilenode identifier
            var call4081 = callmethodChecked(var_topLevelTypes, "contains", [1], var_typeid);
            if (Grace_isTrue(call4081)) {
              setLineNumber(965);    // compilenode string
              var string4082 = new GraceString(";");
              var string4085 = new GraceString("= type_");
              var opresult4087 = callmethodChecked(string4085, "++", [1], var_typeid);
              var opresult4089 = callmethodChecked(opresult4087, "++", [1], string4082);
              setLineNumber(964);    // compilenode string
              var string4091 = new GraceString("] ");
              var string4094 = new GraceString("->type->types[");
              var string4097 = new GraceString("meth_");
              var opresult4099 = callmethodChecked(string4097, "++", [1], var_litname);
              var opresult4101 = callmethodChecked(opresult4099, "++", [1], string4094);
              var opresult4103 = callmethodChecked(opresult4101, "++", [1], var_pi);
              var opresult4105 = callmethodChecked(opresult4103, "++", [1], string4091);
              var opresult4107 = callmethodChecked(opresult4105, "++", [1], opresult4089);
              onSelf = true;
              var call4108 = callmethodChecked(this, "out", [1], opresult4107);
              setLineNumber(967);    // compilenode string
              var string4109 = new GraceString("\";");
              var call4111 = callmethodChecked(var_p, "value", [0]);
              onSelf = true;
              var call4112 = callmethodChecked(this, "escapestring2", [1], call4111);
              var string4114 = new GraceString("= \"");
              var opresult4116 = callmethodChecked(string4114, "++", [1], call4112);
              var opresult4118 = callmethodChecked(opresult4116, "++", [1], string4109);
              setLineNumber(966);    // compilenode string
              var string4120 = new GraceString("] ");
              var string4123 = new GraceString("->type->names[");
              var string4126 = new GraceString("meth_");
              var opresult4128 = callmethodChecked(string4126, "++", [1], var_litname);
              var opresult4130 = callmethodChecked(opresult4128, "++", [1], string4123);
              var opresult4132 = callmethodChecked(opresult4130, "++", [1], var_pi);
              var opresult4134 = callmethodChecked(opresult4132, "++", [1], string4120);
              var opresult4136 = callmethodChecked(opresult4134, "++", [1], opresult4118);
              onSelf = true;
              var call4137 = callmethodChecked(this, "out", [1], opresult4136);
              if4080 = call4137;
            }
            if4061 = if4080;
          }
          if4056 = if4061;
        }
        setLineNumber(971);    // compilenode identifier
        var opresult4140 = callmethodChecked(var_pi, "+", [1], new GraceNum(1));
        var_pi = opresult4140;
        return GraceDone;
      };
      var call4141 = callmethodChecked(var_prelude, "for()do", [1, 1], call4054, block4055);
      return call4141;
    };
    var call4142 = callmethodChecked(var_prelude, "for()do", [1, 1], call4052, block4053);
    return call4142;
  };
  func3992.paramCounts = [2];
  this.methods["compilemethodtypes"] = func3992;
  func3992.definitionLine = 942;
  func3992.definitionModule = "genc";
  setLineNumber(975);    // compilenode method
  var func4143 = function(argcv) {    // method compileifexpr(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compileifexpr(1)"));
    setModuleName("genc");
    setLineNumber(976);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(977);    // compilenode identifier
    var opresult4146 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult4146;
    setLineNumber(978);    // compilenode identifier
    var call4147 = callmethodChecked(var_o, "value", [0]);
    onSelf = true;
    var call4148 = callmethodChecked(this, "compilenode", [1], call4147);
    var var_cond = call4148;
    setLineNumber(979);    // compilenode string
    var string4149 = new GraceString(" = done;");
    var string4152 = new GraceString("  Object if");
    var opresult4154 = callmethodChecked(string4152, "++", [1], var_myc);
    var opresult4156 = callmethodChecked(opresult4154, "++", [1], string4149);
    onSelf = true;
    var call4157 = callmethodChecked(this, "out", [1], opresult4156);
    setLineNumber(980);    // compilenode string
    var string4158 = new GraceString(" = stackframe;");
    var string4161 = new GraceString("struct StackFrameObject *iftmpstackframe");
    var opresult4163 = callmethodChecked(string4161, "++", [1], var_myc);
    var opresult4165 = callmethodChecked(opresult4163, "++", [1], string4158);
    onSelf = true;
    var call4166 = callmethodChecked(this, "out", [1], opresult4165);
    setLineNumber(981);    // compilenode string
    var string4167 = new GraceString(")) {");
    var string4170 = new GraceString("  if (istrue(");
    var opresult4172 = callmethodChecked(string4170, "++", [1], var_cond);
    var opresult4174 = callmethodChecked(opresult4172, "++", [1], string4167);
    onSelf = true;
    var call4175 = callmethodChecked(this, "out", [1], opresult4174);
    setLineNumber(982);    // compilenode identifier
    var call4176 = callmethodChecked(var_o, "thenblock", [0]);
    var call4177 = callmethodChecked(call4176, "body", [0]);
    onSelf = true;
    var call4178 = callmethodChecked(this, "countbindings", [1], call4177);
    var var_numslots = call4178;
    setLineNumber(983);    // compilenode string
    var string4179 = new GraceString(");");
    var string4182 = new GraceString(", iftmpstackframe");
    var string4185 = new GraceString("stackframe = alloc_StackFrame(");
    var opresult4187 = callmethodChecked(string4185, "++", [1], var_numslots);
    var opresult4189 = callmethodChecked(opresult4187, "++", [1], string4182);
    var opresult4191 = callmethodChecked(opresult4189, "++", [1], var_myc);
    var opresult4193 = callmethodChecked(opresult4191, "++", [1], string4179);
    onSelf = true;
    var call4194 = callmethodChecked(this, "out", [1], opresult4193);
    setLineNumber(984);    // compilenode string
    var string4195 = new GraceString("gc_frame_newslot((Object)stackframe);");
    onSelf = true;
    var call4196 = callmethodChecked(this, "out", [1], string4195);
    setLineNumber(985);    // compilenode string
    var string4197 = new GraceString("done");
    var var_tret = string4197;
    setLineNumber(986);    // compilenode string
    var string4198 = new GraceString("done");
    var var_fret = string4198;
    setLineNumber(987);    // compilenode string
    var string4199 = new GraceString("ERROR");
    var var_tblock = string4199;
    setLineNumber(988);    // compilenode string
    var string4200 = new GraceString("ERROR");
    var var_fblock = string4200;
    setLineNumber(989);    // compilenode identifier
    var call4201 = callmethodChecked(var_o, "thenblock", [0]);
    var call4202 = callmethodChecked(call4201, "body", [0]);
    var var_thenList = call4202;
    setLineNumber(990);    // compilenode num
    onSelf = true;
    var call4203 = callmethodChecked(this, "definebindings", [2], var_thenList, new GraceNum(0));
    setLineNumber(991);    // compilenode block
    var block4204 = new GraceBlock(this, 991, 1);
    setLineNumber(1);    // compilenode identifier
    block4204.real = function(var_l) {
      setLineNumber(992);    // compilenode identifier
      onSelf = true;
      var call4205 = callmethodChecked(this, "compilenode", [1], var_l);
      var_tret = call4205;
      return GraceDone;
    };
    var call4206 = callmethodChecked(var_prelude, "for()do", [1, 1], var_thenList, block4204);
    setLineNumber(994);    // compilenode string
    var string4207 = new GraceString(");");
    var string4210 = new GraceString("    gc_frame_newslot(");
    var opresult4212 = callmethodChecked(string4210, "++", [1], var_tret);
    var opresult4214 = callmethodChecked(opresult4212, "++", [1], string4207);
    onSelf = true;
    var call4215 = callmethodChecked(this, "out", [1], opresult4214);
    setLineNumber(995);    // compilenode string
    var string4216 = new GraceString(";");
    var string4219 = new GraceString(" = ");
    var string4222 = new GraceString("    if");
    var opresult4224 = callmethodChecked(string4222, "++", [1], var_myc);
    var opresult4226 = callmethodChecked(opresult4224, "++", [1], string4219);
    var opresult4228 = callmethodChecked(opresult4226, "++", [1], var_tret);
    var opresult4230 = callmethodChecked(opresult4228, "++", [1], string4216);
    onSelf = true;
    var call4231 = callmethodChecked(this, "out", [1], opresult4230);
    setLineNumber(996);    // compilenode string
    var string4232 = new GraceString("  } else {");
    onSelf = true;
    var call4233 = callmethodChecked(this, "out", [1], string4232);
    setLineNumber(997);    // compilenode identifier
    var call4234 = callmethodChecked(var_o, "elseblock", [0]);
    var call4235 = callmethodChecked(call4234, "body", [0]);
    var var_elseList = call4235;
    var if4236 = GraceDone;
    setLineNumber(998);    // compilenode identifier
    var call4238 = callmethodChecked(var_elseList, "size", [0]);
    var opresult4240 = callmethodChecked(call4238, ">", [1], new GraceNum(0));
    if (Grace_isTrue(opresult4240)) {
      setLineNumber(999);    // compilenode identifier
      onSelf = true;
      var call4241 = callmethodChecked(this, "countbindings", [1], var_elseList);
      var_numslots = call4241;
      setLineNumber(1000);    // compilenode string
      var string4242 = new GraceString(");");
      var string4245 = new GraceString(", iftmpstackframe");
      var string4248 = new GraceString("  stackframe = alloc_StackFrame(");
      var opresult4250 = callmethodChecked(string4248, "++", [1], var_numslots);
      var opresult4252 = callmethodChecked(opresult4250, "++", [1], string4245);
      var opresult4254 = callmethodChecked(opresult4252, "++", [1], var_myc);
      var opresult4256 = callmethodChecked(opresult4254, "++", [1], string4242);
      onSelf = true;
      var call4257 = callmethodChecked(this, "out", [1], opresult4256);
      setLineNumber(1001);    // compilenode string
      var string4258 = new GraceString("  gc_frame_newslot((Object)stackframe);");
      onSelf = true;
      var call4259 = callmethodChecked(this, "out", [1], string4258);
      setLineNumber(1002);    // compilenode num
      onSelf = true;
      var call4260 = callmethodChecked(this, "definebindings", [2], var_elseList, new GraceNum(0));
      setLineNumber(1003);    // compilenode block
      var block4261 = new GraceBlock(this, 1003, 1);
      setLineNumber(1);    // compilenode identifier
      block4261.real = function(var_l) {
        setLineNumber(1004);    // compilenode identifier
        onSelf = true;
        var call4262 = callmethodChecked(this, "compilenode", [1], var_l);
        var_fret = call4262;
        return GraceDone;
      };
      var call4263 = callmethodChecked(var_prelude, "for()do", [1, 1], var_elseList, block4261);
      setLineNumber(1006);    // compilenode string
      var string4264 = new GraceString(");");
      var string4267 = new GraceString("    gc_frame_newslot(");
      var opresult4269 = callmethodChecked(string4267, "++", [1], var_fret);
      var opresult4271 = callmethodChecked(opresult4269, "++", [1], string4264);
      onSelf = true;
      var call4272 = callmethodChecked(this, "out", [1], opresult4271);
      setLineNumber(1007);    // compilenode string
      var string4273 = new GraceString(";");
      var string4276 = new GraceString(" = ");
      var string4279 = new GraceString("    if");
      var opresult4281 = callmethodChecked(string4279, "++", [1], var_myc);
      var opresult4283 = callmethodChecked(opresult4281, "++", [1], string4276);
      var opresult4285 = callmethodChecked(opresult4283, "++", [1], var_fret);
      var opresult4287 = callmethodChecked(opresult4285, "++", [1], string4273);
      onSelf = true;
      var call4288 = callmethodChecked(this, "out", [1], opresult4287);
      if4236 = call4288;
    }
    setLineNumber(1009);    // compilenode string
    var string4289 = new GraceString("  }");
    onSelf = true;
    var call4290 = callmethodChecked(this, "out", [1], string4289);
    setLineNumber(1010);    // compilenode string
    var string4291 = new GraceString(";");
    var string4294 = new GraceString("stackframe = iftmpstackframe");
    var opresult4296 = callmethodChecked(string4294, "++", [1], var_myc);
    var opresult4298 = callmethodChecked(opresult4296, "++", [1], string4291);
    onSelf = true;
    var call4299 = callmethodChecked(this, "out", [1], opresult4298);
    setLineNumber(1011);    // compilenode string
    var string4301 = new GraceString("if");
    var opresult4303 = callmethodChecked(string4301, "++", [1], var_myc);
    var call4304 = callmethodChecked(var_o, "register:=", [1], opresult4303);
    return call4304;
  };
  func4143.paramCounts = [1];
  this.methods["compileifexpr"] = func4143;
  func4143.definitionLine = 975;
  func4143.definitionModule = "genc";
  setLineNumber(1013);    // compilenode method
  var func4305 = function(argcv) {    // method compileif(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compileif(1)"));
    setModuleName("genc");
    var if4306 = GraceDone;
    setLineNumber(1014);    // compilenode identifier
    var call4308 = callmethodChecked(var_o, "handledIdentifiers", [0]);
    var opresult4310 = callmethodChecked(call4308, "==", [1], GraceFalse);
    if (Grace_isTrue(opresult4310)) {
      setLineNumber(1015);    // compilenode identifier
      onSelf = true;
      var call4311 = callmethodChecked(this, "compileifexpr", [1], var_o);
      return call4311;
    }
    setLineNumber(1017);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(1018);    // compilenode identifier
    var opresult4314 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult4314;
    setLineNumber(1019);    // compilenode identifier
    var call4315 = callmethodChecked(var_o, "value", [0]);
    onSelf = true;
    var call4316 = callmethodChecked(this, "compilenode", [1], call4315);
    var var_cond = call4316;
    setLineNumber(1020);    // compilenode string
    var string4317 = new GraceString(" = done;");
    var string4320 = new GraceString("  Object if");
    var opresult4322 = callmethodChecked(string4320, "++", [1], var_myc);
    var opresult4324 = callmethodChecked(opresult4322, "++", [1], string4317);
    onSelf = true;
    var call4325 = callmethodChecked(this, "out", [1], opresult4324);
    setLineNumber(1021);    // compilenode string
    var string4326 = new GraceString(")) {");
    var string4329 = new GraceString("  if (istrue(");
    var opresult4331 = callmethodChecked(string4329, "++", [1], var_cond);
    var opresult4333 = callmethodChecked(opresult4331, "++", [1], string4326);
    onSelf = true;
    var call4334 = callmethodChecked(this, "out", [1], opresult4333);
    setLineNumber(1022);    // compilenode string
    var string4335 = new GraceString("done");
    var var_tret = string4335;
    setLineNumber(1023);    // compilenode string
    var string4336 = new GraceString("done");
    var var_fret = string4336;
    setLineNumber(1024);    // compilenode string
    var string4337 = new GraceString("ERROR");
    var var_tblock = string4337;
    setLineNumber(1025);    // compilenode string
    var string4338 = new GraceString("ERROR");
    var var_fblock = string4338;
    setLineNumber(1026);    // compilenode identifier
    var call4339 = callmethodChecked(var_o, "thenblock", [0]);
    var call4340 = callmethodChecked(call4339, "body", [0]);
    var var_thenList = call4340;
    setLineNumber(1027);    // compilenode block
    var block4341 = new GraceBlock(this, 1027, 1);
    setLineNumber(1);    // compilenode identifier
    block4341.real = function(var_l) {
      setLineNumber(1028);    // compilenode identifier
      onSelf = true;
      var call4342 = callmethodChecked(this, "compilenode", [1], var_l);
      var_tret = call4342;
      return GraceDone;
    };
    var call4343 = callmethodChecked(var_prelude, "for()do", [1, 1], var_thenList, block4341);
    setLineNumber(1030);    // compilenode string
    var string4344 = new GraceString(");");
    var string4347 = new GraceString("    gc_frame_newslot(");
    var opresult4349 = callmethodChecked(string4347, "++", [1], var_tret);
    var opresult4351 = callmethodChecked(opresult4349, "++", [1], string4344);
    onSelf = true;
    var call4352 = callmethodChecked(this, "out", [1], opresult4351);
    setLineNumber(1031);    // compilenode string
    var string4353 = new GraceString(";");
    var string4356 = new GraceString(" = ");
    var string4359 = new GraceString("    if");
    var opresult4361 = callmethodChecked(string4359, "++", [1], var_myc);
    var opresult4363 = callmethodChecked(opresult4361, "++", [1], string4356);
    var opresult4365 = callmethodChecked(opresult4363, "++", [1], var_tret);
    var opresult4367 = callmethodChecked(opresult4365, "++", [1], string4353);
    onSelf = true;
    var call4368 = callmethodChecked(this, "out", [1], opresult4367);
    setLineNumber(1032);    // compilenode string
    var string4369 = new GraceString("  } else {");
    onSelf = true;
    var call4370 = callmethodChecked(this, "out", [1], string4369);
    setLineNumber(1033);    // compilenode identifier
    var call4371 = callmethodChecked(var_o, "elseblock", [0]);
    var call4372 = callmethodChecked(call4371, "body", [0]);
    var var_elseList = call4372;
    var if4373 = GraceDone;
    setLineNumber(1034);    // compilenode identifier
    var call4375 = callmethodChecked(var_elseList, "size", [0]);
    var opresult4377 = callmethodChecked(call4375, ">", [1], new GraceNum(0));
    if (Grace_isTrue(opresult4377)) {
      setLineNumber(1035);    // compilenode block
      var block4378 = new GraceBlock(this, 1035, 1);
      setLineNumber(1);    // compilenode identifier
      block4378.real = function(var_l) {
        setLineNumber(1036);    // compilenode identifier
        onSelf = true;
        var call4379 = callmethodChecked(this, "compilenode", [1], var_l);
        var_fret = call4379;
        return GraceDone;
      };
      var call4380 = callmethodChecked(var_prelude, "for()do", [1, 1], var_elseList, block4378);
      setLineNumber(1038);    // compilenode string
      var string4381 = new GraceString(");");
      var string4384 = new GraceString("    gc_frame_newslot(");
      var opresult4386 = callmethodChecked(string4384, "++", [1], var_fret);
      var opresult4388 = callmethodChecked(opresult4386, "++", [1], string4381);
      onSelf = true;
      var call4389 = callmethodChecked(this, "out", [1], opresult4388);
      setLineNumber(1039);    // compilenode string
      var string4390 = new GraceString(";");
      var string4393 = new GraceString(" = ");
      var string4396 = new GraceString("    if");
      var opresult4398 = callmethodChecked(string4396, "++", [1], var_myc);
      var opresult4400 = callmethodChecked(opresult4398, "++", [1], string4393);
      var opresult4402 = callmethodChecked(opresult4400, "++", [1], var_fret);
      var opresult4404 = callmethodChecked(opresult4402, "++", [1], string4390);
      onSelf = true;
      var call4405 = callmethodChecked(this, "out", [1], opresult4404);
      if4373 = call4405;
    }
    setLineNumber(1041);    // compilenode string
    var string4406 = new GraceString("  }");
    onSelf = true;
    var call4407 = callmethodChecked(this, "out", [1], string4406);
    setLineNumber(1042);    // compilenode string
    var string4409 = new GraceString("if");
    var opresult4411 = callmethodChecked(string4409, "++", [1], var_myc);
    var call4412 = callmethodChecked(var_o, "register:=", [1], opresult4411);
    return call4412;
  };
  func4305.paramCounts = [1];
  this.methods["compileif"] = func4305;
  func4305.definitionLine = 1013;
  func4305.definitionModule = "genc";
  setLineNumber(1044);    // compilenode method
  var func4413 = function(argcv) {    // method compileidentifier(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compileidentifier(1)"));
    setModuleName("genc");
    setLineNumber(1045);    // compilenode identifier
    var call4414 = callmethodChecked(var_o, "value", [0]);
    onSelf = true;
    var call4415 = callmethodChecked(this, "escapeident", [1], call4414);
    var var_name = call4415;
    var if4416 = GraceDone;
    setLineNumber(1046);    // compilenode string
    var string4417 = new GraceString("super");
    var opresult4420 = callmethodChecked(var_name, "==", [1], string4417);
    if (Grace_isTrue(opresult4420)) {
      setLineNumber(1047);    // compilenode identifier
      var call4421 = callmethodChecked(var_errormessages, "suggestion", [0]);
      var call4422 = callmethodChecked(call4421, "new", [0]);
      var var_sugg = call4422;
      setLineNumber(1048);    // compilenode identifier
      var call4423 = callmethodChecked(var_o, "linePos", [0]);
      var call4425 = callmethodChecked(var_o, "linePos", [0]);
      var opresult4427 = callmethodChecked(call4425, "+", [1], new GraceNum(4));
      var string4428 = new GraceString("self");
      var call4429 = callmethodChecked(var_o, "line", [0]);
      var call4430 = callmethodChecked(var_sugg, "replaceRange()with()onLine", [2, 1, 1], call4423, opresult4427, string4428, call4429);
      setLineNumber(1051);    // compilenode string
      var string4431 = new GraceString("Use 'self' instead?");
      setLineNumber(1050);    // compilenode string
      var string4433 = new GraceString("left of the . in a method request. ");
      setLineNumber(1049);    // compilenode string
      var string4435 = new GraceString("'super' can be used only to the ");
      var opresult4437 = callmethodChecked(string4435, "++", [1], string4433);
      var opresult4439 = callmethodChecked(opresult4437, "++", [1], string4431);
      setLineNumber(1053);    // compilenode identifier
      var call4440 = callmethodChecked(var_o, "line", [0]);
      var call4441 = callmethodChecked(var_o, "linePos", [0]);
      var call4443 = callmethodChecked(var_o, "linePos", [0]);
      var opresult4445 = callmethodChecked(call4443, "+", [1], new GraceNum(4));
      setLineNumber(1049);    // compilenode identifier
      var call4446 = callmethodChecked(var_errormessages, "syntaxError()atRange()withSuggestion", [1, 3, 1], opresult4439, call4440, call4441, opresult4445, var_sugg);
      if4416 = call4446;
    }
    var if4447 = GraceDone;
    setLineNumber(1055);    // compilenode string
    var string4448 = new GraceString("self");
    var opresult4451 = callmethodChecked(var_name, "==", [1], string4448);
    if (Grace_isTrue(opresult4451)) {
      setLineNumber(1056);    // compilenode string
      var string4452 = new GraceString("self");
      var call4453 = callmethodChecked(var_o, "register:=", [1], string4452);
      if4447 = call4453;
    } else {
      var if4454 = GraceDone;
      setLineNumber(1057);    // compilenode string
      var string4455 = new GraceString("__compilerRevision");
      var opresult4458 = callmethodChecked(var_name, "==", [1], string4455);
      if (Grace_isTrue(opresult4458)) {
        setLineNumber(1059);    // compilenode string
        var string4459 = new GraceString(" = alloc_String(compilerRevision);");
        setLineNumber(1058);    // compilenode string
        var string4462 = new GraceString("  Object var_val___compilerRevision");
        var opresult4464 = callmethodChecked(string4462, "++", [1], var_auto__95__count);
        var opresult4466 = callmethodChecked(opresult4464, "++", [1], string4459);
        onSelf = true;
        var call4467 = callmethodChecked(this, "out", [1], opresult4466);
        setLineNumber(1060);    // compilenode string
        var string4469 = new GraceString("var_val___compilerRevision");
        var opresult4471 = callmethodChecked(string4469, "++", [1], var_auto__95__count);
        var call4472 = callmethodChecked(var_o, "register:=", [1], opresult4471);
        setLineNumber(1061);    // compilenode identifier
        var opresult4475 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
        var_auto__95__count = opresult4475;
        if4454 = GraceDone;
      } else {
        var if4476 = GraceDone;
        setLineNumber(1062);    // compilenode string
        var string4477 = new GraceString("_46__46__46_");
        var opresult4480 = callmethodChecked(var_name, "==", [1], string4477);
        if (Grace_isTrue(opresult4480)) {
          setLineNumber(1063);    // compilenode string
          var string4481 = new GraceString(" = alloc_ellipsis();");
          var string4484 = new GraceString("  Object ellipsis");
          var opresult4486 = callmethodChecked(string4484, "++", [1], var_auto__95__count);
          var opresult4488 = callmethodChecked(opresult4486, "++", [1], string4481);
          onSelf = true;
          var call4489 = callmethodChecked(this, "out", [1], opresult4488);
          setLineNumber(1064);    // compilenode string
          var string4490 = new GraceString("");
          var string4493 = new GraceString("ellipsis");
          var opresult4495 = callmethodChecked(string4493, "++", [1], var_auto__95__count);
          var opresult4497 = callmethodChecked(opresult4495, "++", [1], string4490);
          var call4498 = callmethodChecked(var_o, "register:=", [1], opresult4497);
          setLineNumber(1065);    // compilenode identifier
          var opresult4501 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
          var_auto__95__count = opresult4501;
          if4476 = GraceDone;
        } else {
          setLineNumber(1067);    // compilenode identifier
          onSelf = true;
          var call4502 = callmethodChecked(this, "escapestring2", [1], var_name);
          var_name = call4502;
          setLineNumber(1068);    // compilenode identifier
          var call4503 = callmethodChecked(var_usedvars, "push", [1], var_name);
          setLineNumber(1069);    // compilenode string
          var string4504 = new GraceString("");
          var string4507 = new GraceString("*var_");
          var opresult4509 = callmethodChecked(string4507, "++", [1], var_name);
          var opresult4511 = callmethodChecked(opresult4509, "++", [1], string4504);
          var call4512 = callmethodChecked(var_o, "register:=", [1], opresult4511);
          if4476 = call4512;
        }
        if4454 = if4476;
      }
      if4447 = if4454;
    }
    return if4447;
  };
  func4413.paramCounts = [1];
  this.methods["compileidentifier"] = func4413;
  func4413.definitionLine = 1044;
  func4413.definitionModule = "genc";
  setLineNumber(1072);    // compilenode method
  var func4513 = function(argcv) {    // method compilebind(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compilebind(1)"));
    setModuleName("genc");
    setLineNumber(1073);    // compilenode identifier
    var call4514 = callmethodChecked(var_o, "dest", [0]);
    var var_lhs = call4514;
    var if4515 = GraceDone;
    setLineNumber(1074);    // compilenode identifier
    var call4516 = callmethodChecked(var_lhs, "isIdentifier", [0]);
    if (Grace_isTrue(call4516)) {
      setLineNumber(1075);    // compilenode identifier
      var call4517 = callmethodChecked(var_o, "value", [0]);
      onSelf = true;
      var call4518 = callmethodChecked(this, "compilenode", [1], call4517);
      var var_val = call4518;
      setLineNumber(1076);    // compilenode identifier
      var call4519 = callmethodChecked(var_lhs, "value", [0]);
      onSelf = true;
      var call4520 = callmethodChecked(this, "escapeident", [1], call4519);
      var var_nm = call4520;
      setLineNumber(1077);    // compilenode identifier
      var call4521 = callmethodChecked(var_usedvars, "push", [1], var_nm);
      setLineNumber(1078);    // compilenode string
      var string4522 = new GraceString(";");
      var string4525 = new GraceString(" = ");
      var string4528 = new GraceString("  *var_");
      var opresult4530 = callmethodChecked(string4528, "++", [1], var_nm);
      var opresult4532 = callmethodChecked(opresult4530, "++", [1], string4525);
      var opresult4534 = callmethodChecked(opresult4532, "++", [1], var_val);
      var opresult4536 = callmethodChecked(opresult4534, "++", [1], string4522);
      onSelf = true;
      var call4537 = callmethodChecked(this, "out", [1], opresult4536);
      setLineNumber(1079);    // compilenode string
      var string4538 = new GraceString(" == undefined)");
      var string4541 = new GraceString("  if (");
      var opresult4543 = callmethodChecked(string4541, "++", [1], var_val);
      var opresult4545 = callmethodChecked(opresult4543, "++", [1], string4538);
      onSelf = true;
      var call4546 = callmethodChecked(this, "out", [1], opresult4545);
      setLineNumber(1080);    // compilenode string
      var string4547 = new GraceString("    callmethod(done, \"assignment\", 0, NULL, NULL);");
      onSelf = true;
      var call4548 = callmethodChecked(this, "out", [1], string4547);
      setLineNumber(1082);    // compilenode identifier
      var opresult4551 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
      var_auto__95__count = opresult4551;
      setLineNumber(1083);    // compilenode string
      var string4552 = new GraceString("done");
      var call4553 = callmethodChecked(var_o, "register:=", [1], string4552);
      if4515 = call4553;
    } else {
      setLineNumber(1085);    // compilenode string
      var string4554 = new GraceString(" does not bind an indentifer");
      var string4557 = new GraceString("bindNode ");
      var opresult4559 = callmethodChecked(string4557, "++", [1], var_o);
      var opresult4561 = callmethodChecked(opresult4559, "++", [1], string4554);
      var call4562 = callmethodChecked(var_prelude, "ProgrammingError", [0]);
      var call4563 = callmethodChecked(call4562, "raise", [1], opresult4561);
      if4515 = call4563;
    }
    return if4515;
  };
  func4513.paramCounts = [1];
  this.methods["compilebind"] = func4513;
  func4513.definitionLine = 1072;
  func4513.definitionModule = "genc";
  setLineNumber(1088);    // compilenode method
  var func4564 = function(argcv) {    // method compiledefdec(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compiledefdec(1)"));
    setModuleName("genc");
    setLineNumber(1089);    // compilenode vardec
    var var_nm;
    var if4565 = GraceDone;
    setLineNumber(1090);    // compilenode string
    var string4566 = new GraceString("generic");
    var call4568 = callmethodChecked(var_o, "name", [0]);
    var call4569 = callmethodChecked(call4568, "kind", [0]);
    var opresult4571 = callmethodChecked(call4569, "==", [1], string4566);
    if (Grace_isTrue(opresult4571)) {
      setLineNumber(1091);    // compilenode identifier
      var call4572 = callmethodChecked(var_o, "name", [0]);
      var call4573 = callmethodChecked(call4572, "value", [0]);
      var call4574 = callmethodChecked(call4573, "value", [0]);
      onSelf = true;
      var call4575 = callmethodChecked(this, "escapeident", [1], call4574);
      var_nm = call4575;
      if4565 = GraceDone;
    } else {
      setLineNumber(1093);    // compilenode identifier
      var call4576 = callmethodChecked(var_o, "name", [0]);
      var call4577 = callmethodChecked(call4576, "value", [0]);
      onSelf = true;
      var call4578 = callmethodChecked(this, "escapeident", [1], call4577);
      var_nm = call4578;
      if4565 = GraceDone;
    }
    setLineNumber(1095);    // compilenode identifier
    var call4579 = callmethodChecked(var_declaredvars, "push", [1], var_nm);
    setLineNumber(1096);    // compilenode identifier
    var call4580 = callmethodChecked(var_o, "value", [0]);
    onSelf = true;
    var call4581 = callmethodChecked(this, "compilenode", [1], call4580);
    var var_val = call4581;
    setLineNumber(1097);    // compilenode string
    var string4582 = new GraceString(";");
    var string4585 = new GraceString(" = ");
    var string4588 = new GraceString("  *var_");
    var opresult4590 = callmethodChecked(string4588, "++", [1], var_nm);
    var opresult4592 = callmethodChecked(opresult4590, "++", [1], string4585);
    var opresult4594 = callmethodChecked(opresult4592, "++", [1], var_val);
    var opresult4596 = callmethodChecked(opresult4594, "++", [1], string4582);
    onSelf = true;
    var call4597 = callmethodChecked(this, "out", [1], opresult4596);
    setLineNumber(1098);    // compilenode string
    var string4598 = new GraceString(" == undefined)");
    var string4601 = new GraceString("  if (");
    var opresult4603 = callmethodChecked(string4601, "++", [1], var_val);
    var opresult4605 = callmethodChecked(opresult4603, "++", [1], string4598);
    onSelf = true;
    var call4606 = callmethodChecked(this, "out", [1], opresult4605);
    setLineNumber(1099);    // compilenode string
    var string4607 = new GraceString("    callmethod(done, \"assignment\", 0, NULL, NULL);");
    onSelf = true;
    var call4608 = callmethodChecked(this, "out", [1], string4607);
    var if4609 = GraceDone;
    setLineNumber(1100);    // compilenode identifier
    var opresult4612 = callmethodChecked(var_compilationDepth, "==", [1], new GraceNum(1));
    if (Grace_isTrue(opresult4612)) {
      setLineNumber(1101);    // compilenode identifier
      var call4613 = callmethodChecked(var_o, "name", [0]);
      var call4615 = callmethodChecked(var_o, "name", [0]);
      var call4616 = callmethodChecked(var_ast, "signaturePart", [0]);
      var call4617 = callmethodChecked(call4616, "partName", [1], call4615);
      var array4614 = new PrimitiveGraceList([call4617]);
      var call4619 = callmethodChecked(var_o, "name", [0]);
      var array4618 = new PrimitiveGraceList([call4619]);
      var call4620 = callmethodChecked(var_ast, "methodNode", [0]);
      var call4621 = callmethodChecked(call4620, "new", [4], call4613, array4614, array4618, GraceFalse);
      onSelf = true;
      var call4622 = callmethodChecked(this, "compilenode", [1], call4621);
      var if4623 = GraceDone;
      setLineNumber(1102);    // compilenode string
      var string4624 = new GraceString("parent");
      var call4625 = callmethodChecked(var_ast, "findAnnotation", [2], var_o, string4624);
      if (Grace_isTrue(call4625)) {
        setLineNumber(1103);    // compilenode string
        var string4626 = new GraceString(";");
        var string4629 = new GraceString("  ((struct UserObject *)self)->super = ");
        var opresult4631 = callmethodChecked(string4629, "++", [1], var_val);
        var opresult4633 = callmethodChecked(opresult4631, "++", [1], string4626);
        onSelf = true;
        var call4634 = callmethodChecked(this, "out", [1], opresult4633);
        if4623 = call4634;
      }
      if4609 = if4623;
    }
    setLineNumber(1106);    // compilenode string
    var string4635 = new GraceString("done");
    var call4636 = callmethodChecked(var_o, "register:=", [1], string4635);
    return call4636;
  };
  func4564.paramCounts = [1];
  this.methods["compiledefdec"] = func4564;
  func4564.definitionLine = 1088;
  func4564.definitionModule = "genc";
  setLineNumber(1108);    // compilenode method
  var func4637 = function(argcv) {    // method compilevardec(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compilevardec(1)"));
    setModuleName("genc");
    setLineNumber(1109);    // compilenode identifier
    var call4638 = callmethodChecked(var_o, "name", [0]);
    var call4639 = callmethodChecked(call4638, "value", [0]);
    onSelf = true;
    var call4640 = callmethodChecked(this, "escapeident", [1], call4639);
    var var_nm = call4640;
    setLineNumber(1110);    // compilenode identifier
    var call4641 = callmethodChecked(var_declaredvars, "push", [1], var_nm);
    setLineNumber(1111);    // compilenode identifier
    var call4642 = callmethodChecked(var_o, "value", [0]);
    var var_val = call4642;
    setLineNumber(1112);    // compilenode identifier
    var var_hadval = GraceFalse;
    var if4643 = GraceDone;
    setLineNumber(1113);    // compilenode identifier
    var opresult4646 = callmethodChecked(GraceFalse, "\u2260", [1], var_val);
    if (Grace_isTrue(opresult4646)) {
      setLineNumber(1114);    // compilenode identifier
      onSelf = true;
      var call4647 = callmethodChecked(this, "compilenode", [1], var_val);
      var_val = call4647;
      setLineNumber(1115);    // compilenode identifier
      var_hadval = GraceTrue;
      if4643 = GraceDone;
    } else {
      setLineNumber(1117);    // compilenode string
      var string4648 = new GraceString("undefined");
      var_val = string4648;
      if4643 = GraceDone;
    }
    setLineNumber(1119);    // compilenode string
    var string4649 = new GraceString(";");
    var string4652 = new GraceString(" = ");
    var string4655 = new GraceString("  *var_");
    var opresult4657 = callmethodChecked(string4655, "++", [1], var_nm);
    var opresult4659 = callmethodChecked(opresult4657, "++", [1], string4652);
    var opresult4661 = callmethodChecked(opresult4659, "++", [1], var_val);
    var opresult4663 = callmethodChecked(opresult4661, "++", [1], string4649);
    onSelf = true;
    var call4664 = callmethodChecked(this, "out", [1], opresult4663);
    var if4665 = GraceDone;
    setLineNumber(1120);    // compilenode identifier
    if (Grace_isTrue(var_hadval)) {
      setLineNumber(1121);    // compilenode string
      var string4666 = new GraceString(" == undefined)");
      var string4669 = new GraceString("  if (");
      var opresult4671 = callmethodChecked(string4669, "++", [1], var_val);
      var opresult4673 = callmethodChecked(opresult4671, "++", [1], string4666);
      onSelf = true;
      var call4674 = callmethodChecked(this, "out", [1], opresult4673);
      setLineNumber(1122);    // compilenode string
      var string4675 = new GraceString("    callmethod(done, \"assignment\", 0, NULL, NULL);");
      onSelf = true;
      var call4676 = callmethodChecked(this, "out", [1], string4675);
      if4665 = call4676;
    }
    var if4677 = GraceDone;
    setLineNumber(1124);    // compilenode identifier
    var opresult4680 = callmethodChecked(var_compilationDepth, "==", [1], new GraceNum(1));
    if (Grace_isTrue(opresult4680)) {
      setLineNumber(1125);    // compilenode identifier
      var call4681 = callmethodChecked(var_o, "name", [0]);
      var call4683 = callmethodChecked(var_o, "name", [0]);
      var call4684 = callmethodChecked(var_ast, "signaturePart", [0]);
      var call4685 = callmethodChecked(call4684, "partName", [1], call4683);
      var array4682 = new PrimitiveGraceList([call4685]);
      var call4687 = callmethodChecked(var_o, "name", [0]);
      var array4686 = new PrimitiveGraceList([call4687]);
      var call4688 = callmethodChecked(var_ast, "methodNode", [0]);
      var call4689 = callmethodChecked(call4688, "new", [4], call4681, array4682, array4686, GraceFalse);
      onSelf = true;
      var call4690 = callmethodChecked(this, "compilenode", [1], call4689);
      setLineNumber(1126);    // compilenode string
      var string4691 = new GraceString(":=");
      var call4693 = callmethodChecked(var_o, "name", [0]);
      var call4694 = callmethodChecked(call4693, "value", [0]);
      var opresult4696 = callmethodChecked(call4694, "++", [1], string4691);
      var call4697 = callmethodChecked(var_ast, "identifierNode", [0]);
      var call4698 = callmethodChecked(call4697, "new", [2], opresult4696, GraceFalse);
      var var_assignID = call4698;
      setLineNumber(1127);    // compilenode string
      var string4699 = new GraceString("_var_assign_tmp");
      var call4700 = callmethodChecked(var_ast, "identifierNode", [0]);
      var call4701 = callmethodChecked(call4700, "new", [2], string4699, GraceFalse);
      var var_tmpID = call4701;
      setLineNumber(1128);    // compilenode identifier
      var array4703 = new PrimitiveGraceList([var_tmpID]);
      var call4704 = callmethodChecked(var_ast, "signaturePart", [0]);
      var call4705 = callmethodChecked(call4704, "partName()params", [1, 1], var_assignID, array4703);
      var array4702 = new PrimitiveGraceList([call4705]);
      setLineNumber(1129);    // compilenode identifier
      var call4707 = callmethodChecked(var_o, "name", [0]);
      var call4708 = callmethodChecked(var_ast, "bindNode", [0]);
      var call4709 = callmethodChecked(call4708, "new", [2], call4707, var_tmpID);
      var array4706 = new PrimitiveGraceList([call4709]);
      setLineNumber(1128);    // compilenode identifier
      var call4710 = callmethodChecked(var_ast, "methodNode", [0]);
      var call4711 = callmethodChecked(call4710, "new", [4], var_assignID, array4702, array4706, GraceFalse);
      onSelf = true;
      var call4712 = callmethodChecked(this, "compilenode", [1], call4711);
      if4677 = call4712;
    }
    setLineNumber(1131);    // compilenode string
    var string4713 = new GraceString("done");
    var call4714 = callmethodChecked(var_o, "register:=", [1], string4713);
    return call4714;
  };
  func4637.paramCounts = [1];
  this.methods["compilevardec"] = func4637;
  func4637.definitionLine = 1108;
  func4637.definitionModule = "genc";
  setLineNumber(1133);    // compilenode method
  var func4715 = function(argcv) {    // method compiletrycatch(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compiletrycatch(1)"));
    setModuleName("genc");
    setLineNumber(1134);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(1135);    // compilenode identifier
    var opresult4718 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult4718;
    setLineNumber(1136);    // compilenode identifier
    var call4719 = callmethodChecked(var_o, "cases", [0]);
    var var_cases = call4719;
    var if4720 = GraceDone;
    setLineNumber(1137);    // compilenode identifier
    var call4722 = callmethodChecked(var_o, "cases", [0]);
    var call4723 = callmethodChecked(call4722, "size", [0]);
    var opresult4725 = callmethodChecked(call4723, ">", [1], var_paramsUsed);
    if (Grace_isTrue(opresult4725)) {
      setLineNumber(1138);    // compilenode identifier
      var call4726 = callmethodChecked(var_o, "cases", [0]);
      var call4727 = callmethodChecked(call4726, "size", [0]);
      var_paramsUsed = call4727;
      if4720 = GraceDone;
    }
    setLineNumber(1140);    // compilenode identifier
    var call4728 = callmethodChecked(var_o, "value", [0]);
    onSelf = true;
    var call4729 = callmethodChecked(this, "compilenode", [1], call4728);
    var var_mainblock = call4729;
    setLineNumber(1141);    // compilenode string
    var string4730 = new GraceString(" = gc_frame_new();");
    var string4733 = new GraceString("  int frame");
    var opresult4735 = callmethodChecked(string4733, "++", [1], var_myc);
    var opresult4737 = callmethodChecked(opresult4735, "++", [1], string4730);
    onSelf = true;
    var call4738 = callmethodChecked(this, "out", [1], opresult4737);
    setLineNumber(1142);    // compilenode string
    var string4739 = new GraceString(");");
    var string4742 = new GraceString("  gc_frame_newslot(");
    var opresult4744 = callmethodChecked(string4742, "++", [1], var_mainblock);
    var opresult4746 = callmethodChecked(opresult4744, "++", [1], string4739);
    onSelf = true;
    var call4747 = callmethodChecked(this, "out", [1], opresult4746);
    setLineNumber(1143);    // compilenode num
    var var_i = new GraceNum(0);
    setLineNumber(1144);    // compilenode array
    var array4748 = new PrimitiveGraceList([]);
    var var_params = array4748;
    setLineNumber(1145);    // compilenode block
    var block4749 = new GraceBlock(this, 1145, 1);
    setLineNumber(1);    // compilenode identifier
    block4749.real = function(var_c) {
      setLineNumber(1146);    // compilenode identifier
      onSelf = true;
      var call4750 = callmethodChecked(this, "compilenode", [1], var_c);
      var var_e = call4750;
      setLineNumber(1147);    // compilenode string
      var string4751 = new GraceString(");");
      var string4754 = new GraceString("  gc_frame_newslot(");
      var opresult4756 = callmethodChecked(string4754, "++", [1], var_e);
      var opresult4758 = callmethodChecked(opresult4756, "++", [1], string4751);
      onSelf = true;
      var call4759 = callmethodChecked(this, "out", [1], opresult4758);
      setLineNumber(1148);    // compilenode identifier
      var array4760 = new PrimitiveGraceList([var_i, var_e]);
      var call4761 = callmethodChecked(var_params, "push", [1], array4760);
      setLineNumber(1149);    // compilenode identifier
      var opresult4764 = callmethodChecked(var_i, "+", [1], new GraceNum(1));
      var_i = opresult4764;
      return GraceDone;
    };
    var call4765 = callmethodChecked(var_prelude, "for()do", [1, 1], var_cases, block4749);
    setLineNumber(1151);    // compilenode string
    var string4766 = new GraceString("NULL");
    var var_finally = string4766;
    var if4767 = GraceDone;
    setLineNumber(1152);    // compilenode identifier
    var call4768 = callmethodChecked(var_o, "finally", [0]);
    var opresult4771 = callmethodChecked(GraceFalse, "\u2260", [1], call4768);
    if (Grace_isTrue(opresult4771)) {
      setLineNumber(1153);    // compilenode identifier
      var call4772 = callmethodChecked(var_o, "finally", [0]);
      onSelf = true;
      var call4773 = callmethodChecked(this, "compilenode", [1], call4772);
      var_finally = call4773;
      setLineNumber(1154);    // compilenode string
      var string4774 = new GraceString(");");
      var string4777 = new GraceString("  gc_frame_newslot(");
      var opresult4779 = callmethodChecked(string4777, "++", [1], var_finally);
      var opresult4781 = callmethodChecked(opresult4779, "++", [1], string4774);
      onSelf = true;
      var call4782 = callmethodChecked(this, "out", [1], opresult4781);
      if4767 = call4782;
    }
    setLineNumber(1156);    // compilenode block
    var block4783 = new GraceBlock(this, 1156, 1);
    setLineNumber(1);    // compilenode identifier
    block4783.real = function(var_ie) {
      setLineNumber(1157);    // compilenode identifier
      var call4784 = callmethodChecked(var_ie, "first", [0]);
      var var_idx = call4784;
      setLineNumber(1158);    // compilenode identifier
      var call4785 = callmethodChecked(var_ie, "second", [0]);
      var var_e = call4785;
      setLineNumber(1159);    // compilenode string
      var string4786 = new GraceString(";");
      var string4789 = new GraceString("] = ");
      var string4792 = new GraceString("  params[");
      var opresult4794 = callmethodChecked(string4792, "++", [1], var_idx);
      var opresult4796 = callmethodChecked(opresult4794, "++", [1], string4789);
      var opresult4798 = callmethodChecked(opresult4796, "++", [1], var_e);
      var opresult4800 = callmethodChecked(opresult4798, "++", [1], string4786);
      onSelf = true;
      var call4801 = callmethodChecked(this, "out", [1], opresult4800);
      return call4801;
    };
    var call4802 = callmethodChecked(var_prelude, "for()do", [1, 1], var_params, block4783);
    setLineNumber(1161);    // compilenode string
    var string4803 = new GraceString(");");
    var call4805 = callmethodChecked(var_o, "line", [0]);
    var string4807 = new GraceString("  setline(");
    var opresult4809 = callmethodChecked(string4807, "++", [1], call4805);
    var opresult4811 = callmethodChecked(opresult4809, "++", [1], string4803);
    onSelf = true;
    var call4812 = callmethodChecked(this, "out", [1], opresult4811);
    setLineNumber(1163);    // compilenode string
    var string4813 = new GraceString(");");
    var string4816 = new GraceString("");
    var opresult4818 = callmethodChecked(string4816, "++", [1], var_finally);
    var opresult4820 = callmethodChecked(opresult4818, "++", [1], string4813);
    setLineNumber(1162);    // compilenode string
    var string4822 = new GraceString(",");
    var call4824 = callmethodChecked(var_cases, "size", [0]);
    var string4826 = new GraceString(", params, ");
    var string4829 = new GraceString(" = tryCatch(");
    var string4832 = new GraceString("  Object catchres");
    var opresult4834 = callmethodChecked(string4832, "++", [1], var_myc);
    var opresult4836 = callmethodChecked(opresult4834, "++", [1], string4829);
    var opresult4838 = callmethodChecked(opresult4836, "++", [1], var_mainblock);
    var opresult4840 = callmethodChecked(opresult4838, "++", [1], string4826);
    var opresult4842 = callmethodChecked(opresult4840, "++", [1], call4824);
    var opresult4844 = callmethodChecked(opresult4842, "++", [1], string4822);
    var opresult4846 = callmethodChecked(opresult4844, "++", [1], opresult4820);
    onSelf = true;
    var call4847 = callmethodChecked(this, "out", [1], opresult4846);
    setLineNumber(1164);    // compilenode string
    var string4848 = new GraceString(");");
    var string4851 = new GraceString("  gc_frame_end(frame");
    var opresult4853 = callmethodChecked(string4851, "++", [1], var_myc);
    var opresult4855 = callmethodChecked(opresult4853, "++", [1], string4848);
    onSelf = true;
    var call4856 = callmethodChecked(this, "out", [1], opresult4855);
    setLineNumber(1165);    // compilenode string
    var string4858 = new GraceString("catchres");
    var opresult4860 = callmethodChecked(string4858, "++", [1], var_myc);
    var call4861 = callmethodChecked(var_o, "register:=", [1], opresult4860);
    return call4861;
  };
  func4715.paramCounts = [1];
  this.methods["compiletrycatch"] = func4715;
  func4715.definitionLine = 1133;
  func4715.definitionModule = "genc";
  setLineNumber(1167);    // compilenode method
  var func4862 = function(argcv) {    // method compilematchcase(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compilematchcase(1)"));
    setModuleName("genc");
    setLineNumber(1168);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(1169);    // compilenode identifier
    var opresult4865 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult4865;
    setLineNumber(1170);    // compilenode identifier
    var call4866 = callmethodChecked(var_o, "cases", [0]);
    var var_cases = call4866;
    var if4867 = GraceDone;
    setLineNumber(1171);    // compilenode identifier
    var call4869 = callmethodChecked(var_o, "cases", [0]);
    var call4870 = callmethodChecked(call4869, "size", [0]);
    var opresult4872 = callmethodChecked(call4870, ">", [1], var_paramsUsed);
    if (Grace_isTrue(opresult4872)) {
      setLineNumber(1172);    // compilenode identifier
      var call4873 = callmethodChecked(var_o, "cases", [0]);
      var call4874 = callmethodChecked(call4873, "size", [0]);
      var_paramsUsed = call4874;
      if4867 = GraceDone;
    }
    setLineNumber(1174);    // compilenode identifier
    var call4875 = callmethodChecked(var_o, "value", [0]);
    onSelf = true;
    var call4876 = callmethodChecked(this, "compilenode", [1], call4875);
    var var_matchee = call4876;
    setLineNumber(1175);    // compilenode string
    var string4877 = new GraceString(" = gc_frame_new();");
    var string4880 = new GraceString("  int frame");
    var opresult4882 = callmethodChecked(string4880, "++", [1], var_myc);
    var opresult4884 = callmethodChecked(opresult4882, "++", [1], string4877);
    onSelf = true;
    var call4885 = callmethodChecked(this, "out", [1], opresult4884);
    setLineNumber(1176);    // compilenode string
    var string4886 = new GraceString(");");
    var string4889 = new GraceString("  gc_frame_newslot(");
    var opresult4891 = callmethodChecked(string4889, "++", [1], var_matchee);
    var opresult4893 = callmethodChecked(opresult4891, "++", [1], string4886);
    onSelf = true;
    var call4894 = callmethodChecked(this, "out", [1], opresult4893);
    setLineNumber(1177);    // compilenode num
    var var_i = new GraceNum(0);
    setLineNumber(1178);    // compilenode array
    var array4895 = new PrimitiveGraceList([]);
    var var_params = array4895;
    setLineNumber(1179);    // compilenode block
    var block4896 = new GraceBlock(this, 1179, 1);
    setLineNumber(1);    // compilenode identifier
    block4896.real = function(var_c) {
      setLineNumber(1180);    // compilenode identifier
      onSelf = true;
      var call4897 = callmethodChecked(this, "compilenode", [1], var_c);
      var var_e = call4897;
      setLineNumber(1181);    // compilenode string
      var string4898 = new GraceString(");");
      var string4901 = new GraceString("  gc_frame_newslot(");
      var opresult4903 = callmethodChecked(string4901, "++", [1], var_e);
      var opresult4905 = callmethodChecked(opresult4903, "++", [1], string4898);
      onSelf = true;
      var call4906 = callmethodChecked(this, "out", [1], opresult4905);
      setLineNumber(1182);    // compilenode identifier
      var array4907 = new PrimitiveGraceList([var_i, var_e]);
      var call4908 = callmethodChecked(var_params, "push", [1], array4907);
      setLineNumber(1183);    // compilenode identifier
      var opresult4911 = callmethodChecked(var_i, "+", [1], new GraceNum(1));
      var_i = opresult4911;
      return GraceDone;
    };
    var call4912 = callmethodChecked(var_prelude, "for()do", [1, 1], var_cases, block4896);
    setLineNumber(1185);    // compilenode string
    var string4913 = new GraceString("NULL");
    var var_elsecase = string4913;
    var if4914 = GraceDone;
    setLineNumber(1186);    // compilenode identifier
    var call4915 = callmethodChecked(var_o, "elsecase", [0]);
    var opresult4918 = callmethodChecked(GraceFalse, "\u2260", [1], call4915);
    if (Grace_isTrue(opresult4918)) {
      setLineNumber(1187);    // compilenode identifier
      var call4919 = callmethodChecked(var_o, "elsecase", [0]);
      onSelf = true;
      var call4920 = callmethodChecked(this, "compilenode", [1], call4919);
      var_elsecase = call4920;
      setLineNumber(1188);    // compilenode string
      var string4921 = new GraceString(");");
      var string4924 = new GraceString("  gc_frame_newslot(");
      var opresult4926 = callmethodChecked(string4924, "++", [1], var_elsecase);
      var opresult4928 = callmethodChecked(opresult4926, "++", [1], string4921);
      onSelf = true;
      var call4929 = callmethodChecked(this, "out", [1], opresult4928);
      if4914 = call4929;
    }
    setLineNumber(1190);    // compilenode block
    var block4930 = new GraceBlock(this, 1190, 1);
    setLineNumber(1);    // compilenode identifier
    block4930.real = function(var_ie) {
      setLineNumber(1191);    // compilenode identifier
      var call4931 = callmethodChecked(var_ie, "first", [0]);
      var var_idx = call4931;
      setLineNumber(1192);    // compilenode identifier
      var call4932 = callmethodChecked(var_ie, "second", [0]);
      var var_e = call4932;
      setLineNumber(1193);    // compilenode string
      var string4933 = new GraceString(";");
      var string4936 = new GraceString("] = ");
      var string4939 = new GraceString("  params[");
      var opresult4941 = callmethodChecked(string4939, "++", [1], var_idx);
      var opresult4943 = callmethodChecked(opresult4941, "++", [1], string4936);
      var opresult4945 = callmethodChecked(opresult4943, "++", [1], var_e);
      var opresult4947 = callmethodChecked(opresult4945, "++", [1], string4933);
      onSelf = true;
      var call4948 = callmethodChecked(this, "out", [1], opresult4947);
      return call4948;
    };
    var call4949 = callmethodChecked(var_prelude, "for()do", [1, 1], var_params, block4930);
    setLineNumber(1196);    // compilenode string
    var string4950 = new GraceString(");");
    var string4953 = new GraceString("");
    var opresult4955 = callmethodChecked(string4953, "++", [1], var_elsecase);
    var opresult4957 = callmethodChecked(opresult4955, "++", [1], string4950);
    setLineNumber(1195);    // compilenode string
    var string4959 = new GraceString(",");
    var call4961 = callmethodChecked(var_cases, "size", [0]);
    var string4963 = new GraceString(", params, ");
    var string4966 = new GraceString(" = matchCase(");
    var string4969 = new GraceString("  Object matchres");
    var opresult4971 = callmethodChecked(string4969, "++", [1], var_myc);
    var opresult4973 = callmethodChecked(opresult4971, "++", [1], string4966);
    var opresult4975 = callmethodChecked(opresult4973, "++", [1], var_matchee);
    var opresult4977 = callmethodChecked(opresult4975, "++", [1], string4963);
    var opresult4979 = callmethodChecked(opresult4977, "++", [1], call4961);
    var opresult4981 = callmethodChecked(opresult4979, "++", [1], string4959);
    var opresult4983 = callmethodChecked(opresult4981, "++", [1], opresult4957);
    onSelf = true;
    var call4984 = callmethodChecked(this, "out", [1], opresult4983);
    setLineNumber(1197);    // compilenode string
    var string4985 = new GraceString(");");
    var string4988 = new GraceString("  gc_frame_end(frame");
    var opresult4990 = callmethodChecked(string4988, "++", [1], var_myc);
    var opresult4992 = callmethodChecked(opresult4990, "++", [1], string4985);
    onSelf = true;
    var call4993 = callmethodChecked(this, "out", [1], opresult4992);
    setLineNumber(1198);    // compilenode string
    var string4995 = new GraceString("matchres");
    var opresult4997 = callmethodChecked(string4995, "++", [1], var_myc);
    var call4998 = callmethodChecked(var_o, "register:=", [1], opresult4997);
    return call4998;
  };
  func4862.paramCounts = [1];
  this.methods["compilematchcase"] = func4862;
  func4862.definitionLine = 1167;
  func4862.definitionModule = "genc";
  setLineNumber(1200);    // compilenode method
  var func4999 = function(argcv) {    // method compileop(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compileop(1)"));
    setModuleName("genc");
    setLineNumber(1201);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(1202);    // compilenode identifier
    var opresult5002 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult5002;
    setLineNumber(1203);    // compilenode identifier
    var call5003 = callmethodChecked(var_o, "right", [0]);
    onSelf = true;
    var call5004 = callmethodChecked(this, "compilenode", [1], call5003);
    var var_right = call5004;
    setLineNumber(1204);    // compilenode string
    var string5005 = new GraceString(");");
    var string5008 = new GraceString(" = gc_frame_newslot(");
    var string5011 = new GraceString("  int op_slot_right_");
    var opresult5013 = callmethodChecked(string5011, "++", [1], var_myc);
    var opresult5015 = callmethodChecked(opresult5013, "++", [1], string5008);
    var opresult5017 = callmethodChecked(opresult5015, "++", [1], var_right);
    var opresult5019 = callmethodChecked(opresult5017, "++", [1], string5005);
    onSelf = true;
    var call5020 = callmethodChecked(this, "out", [1], opresult5019);
    setLineNumber(1205);    // compilenode identifier
    var opresult5023 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult5023;
    var if5024 = GraceDone;
    setLineNumber(1206);    // compilenode block
    var block5025 = new GraceBlock(this, 1206, 0);
    block5025.real = function() {
      var string5026 = new GraceString("super");
      var call5028 = callmethodChecked(var_o, "left", [0]);
      var call5029 = callmethodChecked(call5028, "value", [0]);
      var opresult5031 = callmethodChecked(call5029, "==", [1], string5026);
      return opresult5031;
    };
    var string5033 = new GraceString("identifier");
    var call5035 = callmethodChecked(var_o, "left", [0]);
    var call5036 = callmethodChecked(call5035, "kind", [0]);
    var opresult5038 = callmethodChecked(call5036, "==", [1], string5033);
    var opresult5040 = callmethodChecked(opresult5038, "&&", [1], block5025);
    if (Grace_isTrue(opresult5040)) {
      setLineNumber(1207);    // compilenode identifier
      var call5041 = callmethodChecked(var_o, "value", [0]);
      onSelf = true;
      var call5042 = callmethodChecked(this, "escapestring2", [1], call5041);
      var var_evl = call5042;
      setLineNumber(1208);    // compilenode string
      var string5043 = new GraceString(";");
      var string5046 = new GraceString("  params[0] = ");
      var opresult5048 = callmethodChecked(string5046, "++", [1], var_right);
      var opresult5050 = callmethodChecked(opresult5048, "++", [1], string5043);
      onSelf = true;
      var call5051 = callmethodChecked(this, "out", [1], opresult5050);
      setLineNumber(1209);    // compilenode string
      var string5052 = new GraceString("  partcv[0] = 1;");
      onSelf = true;
      var call5053 = callmethodChecked(this, "out", [1], string5052);
      setLineNumber(1212);    // compilenode string
      var string5054 = new GraceString("CFLAG_SELF);");
      setLineNumber(1211);    // compilenode string
      var string5056 = new GraceString("\", 1, partcv, params, ((flags >> 24) & 0xff) + 1,");
      var string5059 = new GraceString("\"");
      var opresult5061 = callmethodChecked(string5059, "++", [1], var_evl);
      var opresult5063 = callmethodChecked(opresult5061, "++", [1], string5056);
      setLineNumber(1210);    // compilenode string
      var string5065 = new GraceString(" = callmethod4(self, ");
      var string5068 = new GraceString("  Object opresult");
      var opresult5070 = callmethodChecked(string5068, "++", [1], var_myc);
      var opresult5072 = callmethodChecked(opresult5070, "++", [1], string5065);
      var opresult5074 = callmethodChecked(opresult5072, "++", [1], opresult5063);
      var opresult5076 = callmethodChecked(opresult5074, "++", [1], string5054);
      onSelf = true;
      var call5077 = callmethodChecked(this, "out", [1], opresult5076);
      setLineNumber(1213);    // compilenode string
      var string5078 = new GraceString("");
      var string5081 = new GraceString("opresult");
      var opresult5083 = callmethodChecked(string5081, "++", [1], var_myc);
      var opresult5085 = callmethodChecked(opresult5083, "++", [1], string5078);
      var call5086 = callmethodChecked(var_o, "register:=", [1], opresult5085);
      setLineNumber(1214);    // compilenode identifier
      return GraceTrue;
    }
    setLineNumber(1216);    // compilenode identifier
    var call5087 = callmethodChecked(var_o, "left", [0]);
    onSelf = true;
    var call5088 = callmethodChecked(this, "compilenode", [1], call5087);
    var var_left = call5088;
    setLineNumber(1217);    // compilenode string
    var string5089 = new GraceString(");");
    var string5092 = new GraceString(" = gc_frame_newslot(");
    var string5095 = new GraceString("  int op_slot_left_");
    var opresult5097 = callmethodChecked(string5095, "++", [1], var_myc);
    var opresult5099 = callmethodChecked(opresult5097, "++", [1], string5092);
    var opresult5101 = callmethodChecked(opresult5099, "++", [1], var_left);
    var opresult5103 = callmethodChecked(opresult5101, "++", [1], string5089);
    onSelf = true;
    var call5104 = callmethodChecked(this, "out", [1], opresult5103);
    var if5105 = GraceDone;
    setLineNumber(1219);    // compilenode string
    var string5106 = new GraceString("%");
    var call5108 = callmethodChecked(var_o, "value", [0]);
    var opresult5110 = callmethodChecked(call5108, "==", [1], string5106);
    var string5112 = new GraceString("-");
    var call5114 = callmethodChecked(var_o, "value", [0]);
    var opresult5116 = callmethodChecked(call5114, "==", [1], string5112);
    setLineNumber(1218);    // compilenode string
    var string5118 = new GraceString("/");
    var call5120 = callmethodChecked(var_o, "value", [0]);
    var opresult5122 = callmethodChecked(call5120, "==", [1], string5118);
    var string5124 = new GraceString("*");
    var call5126 = callmethodChecked(var_o, "value", [0]);
    var opresult5128 = callmethodChecked(call5126, "==", [1], string5124);
    var string5130 = new GraceString("+");
    var call5132 = callmethodChecked(var_o, "value", [0]);
    var opresult5134 = callmethodChecked(call5132, "==", [1], string5130);
    var opresult5136 = callmethodChecked(opresult5134, "||", [1], opresult5128);
    var opresult5138 = callmethodChecked(opresult5136, "||", [1], opresult5122);
    var opresult5140 = callmethodChecked(opresult5138, "||", [1], opresult5116);
    var opresult5142 = callmethodChecked(opresult5140, "||", [1], opresult5110);
    if (Grace_isTrue(opresult5142)) {
      setLineNumber(1220);    // compilenode string
      var string5143 = new GraceString("sum");
      var var_rnm = string5143;
      var if5144 = GraceDone;
      setLineNumber(1221);    // compilenode string
      var string5145 = new GraceString("*");
      var call5147 = callmethodChecked(var_o, "value", [0]);
      var opresult5149 = callmethodChecked(call5147, "==", [1], string5145);
      if (Grace_isTrue(opresult5149)) {
        setLineNumber(1222);    // compilenode string
        var string5150 = new GraceString("prod");
        var_rnm = string5150;
        if5144 = GraceDone;
      }
      var if5151 = GraceDone;
      setLineNumber(1224);    // compilenode string
      var string5152 = new GraceString("/");
      var call5154 = callmethodChecked(var_o, "value", [0]);
      var opresult5156 = callmethodChecked(call5154, "==", [1], string5152);
      if (Grace_isTrue(opresult5156)) {
        setLineNumber(1225);    // compilenode string
        var string5157 = new GraceString("quotient");
        var_rnm = string5157;
        if5151 = GraceDone;
      }
      var if5158 = GraceDone;
      setLineNumber(1227);    // compilenode string
      var string5159 = new GraceString("-");
      var call5161 = callmethodChecked(var_o, "value", [0]);
      var opresult5163 = callmethodChecked(call5161, "==", [1], string5159);
      if (Grace_isTrue(opresult5163)) {
        setLineNumber(1228);    // compilenode string
        var string5164 = new GraceString("diff");
        var_rnm = string5164;
        if5158 = GraceDone;
      }
      var if5165 = GraceDone;
      setLineNumber(1230);    // compilenode string
      var string5166 = new GraceString("%");
      var call5168 = callmethodChecked(var_o, "value", [0]);
      var opresult5170 = callmethodChecked(call5168, "==", [1], string5166);
      if (Grace_isTrue(opresult5170)) {
        setLineNumber(1231);    // compilenode string
        var string5171 = new GraceString("modulus");
        var_rnm = string5171;
        if5165 = GraceDone;
      }
      setLineNumber(1233);    // compilenode string
      var string5172 = new GraceString(";");
      var string5175 = new GraceString("  params[0] = ");
      var opresult5177 = callmethodChecked(string5175, "++", [1], var_right);
      var opresult5179 = callmethodChecked(opresult5177, "++", [1], string5172);
      onSelf = true;
      var call5180 = callmethodChecked(this, "out", [1], opresult5179);
      setLineNumber(1234);    // compilenode string
      var string5181 = new GraceString("  partcv[0] = 1;");
      onSelf = true;
      var call5182 = callmethodChecked(this, "out", [1], string5181);
      setLineNumber(1236);    // compilenode string
      var string5183 = new GraceString("1, partcv, params);");
      setLineNumber(1235);    // compilenode string
      var string5185 = new GraceString("\", ");
      var call5187 = callmethodChecked(var_o, "value", [0]);
      var string5189 = new GraceString(", \"");
      var string5192 = new GraceString(" = callmethod(");
      var string5195 = new GraceString("");
      var string5198 = new GraceString("  Object ");
      var opresult5200 = callmethodChecked(string5198, "++", [1], var_rnm);
      var opresult5202 = callmethodChecked(opresult5200, "++", [1], string5195);
      var opresult5204 = callmethodChecked(opresult5202, "++", [1], var_auto__95__count);
      var opresult5206 = callmethodChecked(opresult5204, "++", [1], string5192);
      var opresult5208 = callmethodChecked(opresult5206, "++", [1], var_left);
      var opresult5210 = callmethodChecked(opresult5208, "++", [1], string5189);
      var opresult5212 = callmethodChecked(opresult5210, "++", [1], call5187);
      var opresult5214 = callmethodChecked(opresult5212, "++", [1], string5185);
      var opresult5216 = callmethodChecked(opresult5214, "++", [1], string5183);
      onSelf = true;
      var call5217 = callmethodChecked(this, "out", [1], opresult5216);
      setLineNumber(1237);    // compilenode identifier
      var opresult5220 = callmethodChecked(var_rnm, "++", [1], var_auto__95__count);
      var call5221 = callmethodChecked(var_o, "register:=", [1], opresult5220);
      setLineNumber(1238);    // compilenode identifier
      var opresult5224 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
      var_auto__95__count = opresult5224;
      if5105 = GraceDone;
    } else {
      setLineNumber(1240);    // compilenode string
      var string5225 = new GraceString(";");
      var string5228 = new GraceString("  params[0] = ");
      var opresult5230 = callmethodChecked(string5228, "++", [1], var_right);
      var opresult5232 = callmethodChecked(opresult5230, "++", [1], string5225);
      onSelf = true;
      var call5233 = callmethodChecked(this, "out", [1], opresult5232);
      setLineNumber(1241);    // compilenode string
      var string5234 = new GraceString("  partcv[0] = 1;");
      onSelf = true;
      var call5235 = callmethodChecked(this, "out", [1], string5234);
      setLineNumber(1243);    // compilenode string
      var string5236 = new GraceString("\", 1, partcv, params);");
      var call5238 = callmethodChecked(var_o, "value", [0]);
      var call5239 = callmethodChecked(call5238, "quoted", [0]);
      var string5241 = new GraceString(", \"");
      var string5244 = new GraceString("callmethod(");
      var opresult5246 = callmethodChecked(string5244, "++", [1], var_left);
      var opresult5248 = callmethodChecked(opresult5246, "++", [1], string5241);
      var opresult5250 = callmethodChecked(opresult5248, "++", [1], call5239);
      var opresult5252 = callmethodChecked(opresult5250, "++", [1], string5236);
      setLineNumber(1242);    // compilenode string
      var string5254 = new GraceString(" = ");
      var string5257 = new GraceString("  Object opresult");
      var opresult5259 = callmethodChecked(string5257, "++", [1], var_auto__95__count);
      var opresult5261 = callmethodChecked(opresult5259, "++", [1], string5254);
      var opresult5263 = callmethodChecked(opresult5261, "++", [1], opresult5252);
      onSelf = true;
      var call5264 = callmethodChecked(this, "out", [1], opresult5263);
      setLineNumber(1244);    // compilenode string
      var string5266 = new GraceString("opresult");
      var opresult5268 = callmethodChecked(string5266, "++", [1], var_auto__95__count);
      var call5269 = callmethodChecked(var_o, "register:=", [1], opresult5268);
      setLineNumber(1245);    // compilenode identifier
      var opresult5272 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
      var_auto__95__count = opresult5272;
      if5105 = GraceDone;
    }
    return if5105;
  };
  func4999.paramCounts = [1];
  this.methods["compileop"] = func4999;
  func4999.definitionLine = 1200;
  func4999.definitionModule = "genc";
  setLineNumber(1248);    // compilenode method
  var func5273 = function(argcv) {    // method compilecall(2)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_tailcall = arguments[curarg];
    curarg++;
    if (argcv[0] !== 2)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compilecall(2)"));
    setModuleName("genc");
    setLineNumber(1249);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(1250);    // compilenode identifier
    var opresult5276 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult5276;
    setLineNumber(1251);    // compilenode array
    var array5277 = new PrimitiveGraceList([]);
    var var_args = array5277;
    setLineNumber(1252);    // compilenode string
    var string5278 = new GraceString("");
    var var_obj = string5278;
    setLineNumber(1253);    // compilenode vardec
    var var_evl;
    setLineNumber(1254);    // compilenode num
    var var_i = new GraceNum(0);
    setLineNumber(1255);    // compilenode string
    var string5279 = new GraceString(" = gc_frame_new();");
    var string5282 = new GraceString("  int callframe");
    var opresult5284 = callmethodChecked(string5282, "++", [1], var_myc);
    var opresult5286 = callmethodChecked(opresult5284, "++", [1], string5279);
    onSelf = true;
    var call5287 = callmethodChecked(this, "out", [1], opresult5286);
    setLineNumber(1256);    // compilenode identifier
    var call5288 = callmethodChecked(var_o, "with", [0]);
    var block5289 = new GraceBlock(this, 1256, 1);
    setLineNumber(1);    // compilenode identifier
    block5289.real = function(var_part) {
      setLineNumber(1257);    // compilenode identifier
      var call5290 = callmethodChecked(var_part, "args", [0]);
      var block5291 = new GraceBlock(this, 1257, 1);
      setLineNumber(1);    // compilenode identifier
      block5291.real = function(var_p) {
        setLineNumber(1258);    // compilenode identifier
        onSelf = true;
        var call5292 = callmethodChecked(this, "compilenode", [1], var_p);
        var var_r = call5292;
        setLineNumber(1259);    // compilenode identifier
        var call5293 = callmethodChecked(var_args, "push", [1], var_r);
        setLineNumber(1260);    // compilenode string
        var string5294 = new GraceString(");");
        var string5297 = new GraceString("  gc_frame_newslot(");
        var opresult5299 = callmethodChecked(string5297, "++", [1], var_r);
        var opresult5301 = callmethodChecked(opresult5299, "++", [1], string5294);
        onSelf = true;
        var call5302 = callmethodChecked(this, "out", [1], opresult5301);
        return call5302;
      };
      var call5303 = callmethodChecked(var_prelude, "for()do", [1, 1], call5290, block5291);
      return call5303;
    };
    var call5304 = callmethodChecked(var_prelude, "for()do", [1, 1], call5288, block5289);
    var if5305 = GraceDone;
    setLineNumber(1263);    // compilenode identifier
    var call5307 = callmethodChecked(var_args, "size", [0]);
    var opresult5309 = callmethodChecked(call5307, ">", [1], var_paramsUsed);
    if (Grace_isTrue(opresult5309)) {
      setLineNumber(1264);    // compilenode identifier
      var call5310 = callmethodChecked(var_args, "size", [0]);
      var_paramsUsed = call5310;
      if5305 = GraceDone;
    }
    var if5311 = GraceDone;
    setLineNumber(1266);    // compilenode identifier
    var call5313 = callmethodChecked(var_o, "with", [0]);
    var call5314 = callmethodChecked(call5313, "size", [0]);
    var opresult5316 = callmethodChecked(call5314, ">", [1], var_partsUsed);
    if (Grace_isTrue(opresult5316)) {
      setLineNumber(1267);    // compilenode identifier
      var call5317 = callmethodChecked(var_o, "with", [0]);
      var call5318 = callmethodChecked(call5317, "size", [0]);
      var_partsUsed = call5318;
      if5311 = GraceDone;
    }
    setLineNumber(1269);    // compilenode identifier
    var call5319 = callmethodChecked(var_o, "with", [0]);
    var call5320 = callmethodChecked(call5319, "size", [0]);
    var var_nparts = call5320;
    var if5321 = GraceDone;
    setLineNumber(1270);    // compilenode identifier
    var call5322 = callmethodChecked(var_o, "generics", [0]);
    var opresult5325 = callmethodChecked(GraceFalse, "\u2260", [1], call5322);
    if (Grace_isTrue(opresult5325)) {
      var if5326 = GraceDone;
      setLineNumber(1271);    // compilenode identifier
      var call5327 = callmethodChecked(var_o, "with", [0]);
      var call5328 = callmethodChecked(call5327, "size", [0]);
      var opresult5331 = callmethodChecked(var_partsUsed, "==", [1], call5328);
      if (Grace_isTrue(opresult5331)) {
        setLineNumber(1272);    // compilenode identifier
        var opresult5334 = callmethodChecked(var_partsUsed, "+", [1], new GraceNum(1));
        var_partsUsed = opresult5334;
        if5326 = GraceDone;
      }
      var if5335 = GraceDone;
      setLineNumber(1274);    // compilenode identifier
      var call5336 = callmethodChecked(var_o, "generics", [0]);
      var call5337 = callmethodChecked(call5336, "size", [0]);
      var call5339 = callmethodChecked(var_args, "size", [0]);
      var opresult5341 = callmethodChecked(call5339, "+", [1], call5337);
      var opresult5344 = callmethodChecked(var_paramsUsed, "<", [1], opresult5341);
      if (Grace_isTrue(opresult5344)) {
        setLineNumber(1275);    // compilenode identifier
        var call5345 = callmethodChecked(var_o, "generics", [0]);
        var call5346 = callmethodChecked(call5345, "size", [0]);
        var opresult5349 = callmethodChecked(var_paramsUsed, "+", [1], call5346);
        var_paramsUsed = opresult5349;
        if5335 = GraceDone;
      }
      setLineNumber(1277);    // compilenode identifier
      var opresult5352 = callmethodChecked(var_nparts, "+", [1], new GraceNum(1));
      var_nparts = opresult5352;
      setLineNumber(1278);    // compilenode string
      var string5353 = new GraceString(";");
      var call5355 = callmethodChecked(var_o, "generics", [0]);
      var call5356 = callmethodChecked(call5355, "size", [0]);
      var string5358 = new GraceString("] = ");
      var call5360 = callmethodChecked(var_o, "with", [0]);
      var call5361 = callmethodChecked(call5360, "size", [0]);
      var string5363 = new GraceString("  partcv[");
      var opresult5365 = callmethodChecked(string5363, "++", [1], call5361);
      var opresult5367 = callmethodChecked(opresult5365, "++", [1], string5358);
      var opresult5369 = callmethodChecked(opresult5367, "++", [1], call5356);
      var opresult5371 = callmethodChecked(opresult5369, "++", [1], string5353);
      onSelf = true;
      var call5372 = callmethodChecked(this, "out", [1], opresult5371);
      setLineNumber(1279);    // compilenode identifier
      var call5373 = callmethodChecked(var_args, "size", [0]);
      var_i = call5373;
      setLineNumber(1280);    // compilenode block
      var block5374 = new GraceBlock(this, 1280, 1);
      setLineNumber(1);    // compilenode identifier
      block5374.real = function(var_g) {
        setLineNumber(1281);    // compilenode string
        var string5375 = new GraceString(";");
        onSelf = true;
        var call5377 = callmethodChecked(this, "compilenode", [1], var_g);
        var string5379 = new GraceString("] = ");
        var string5382 = new GraceString("  params[");
        var opresult5384 = callmethodChecked(string5382, "++", [1], var_i);
        var opresult5386 = callmethodChecked(opresult5384, "++", [1], string5379);
        var opresult5388 = callmethodChecked(opresult5386, "++", [1], call5377);
        var opresult5390 = callmethodChecked(opresult5388, "++", [1], string5375);
        onSelf = true;
        var call5391 = callmethodChecked(this, "out", [1], opresult5390);
        setLineNumber(1282);    // compilenode identifier
        var opresult5394 = callmethodChecked(var_i, "+", [1], new GraceNum(1));
        var_i = opresult5394;
        return GraceDone;
      };
      setLineNumber(1280);    // compilenode identifier
      var call5395 = callmethodChecked(var_o, "generics", [0]);
      var call5396 = callmethodChecked(call5395, "do", [1], block5374);
      setLineNumber(1284);    // compilenode num
      var_i = new GraceNum(0);
      if5321 = GraceDone;
    }
    setLineNumber(1286);    // compilenode identifier
    var call5397 = callmethodChecked(var_o, "value", [0]);
    var call5398 = callmethodChecked(call5397, "value", [0]);
    onSelf = true;
    var call5399 = callmethodChecked(this, "escapestring2", [1], call5398);
    var_evl = call5399;
    var if5400 = GraceDone;
    setLineNumber(1287);    // compilenode block
    var block5401 = new GraceBlock(this, 1287, 0);
    block5401.real = function() {
      setLineNumber(1288);    // compilenode string
      var string5402 = new GraceString("super");
      var call5404 = callmethodChecked(var_o, "value", [0]);
      var call5405 = callmethodChecked(call5404, "in", [0]);
      var call5406 = callmethodChecked(call5405, "value", [0]);
      var opresult5408 = callmethodChecked(call5406, "==", [1], string5402);
      setLineNumber(1287);    // compilenode string
      var string5410 = new GraceString("identifier");
      var call5412 = callmethodChecked(var_o, "value", [0]);
      var call5413 = callmethodChecked(call5412, "in", [0]);
      var call5414 = callmethodChecked(call5413, "kind", [0]);
      var opresult5416 = callmethodChecked(call5414, "==", [1], string5410);
      var opresult5418 = callmethodChecked(opresult5416, "&&", [1], opresult5408);
      return opresult5418;
    };
    var string5420 = new GraceString("member");
    var call5422 = callmethodChecked(var_o, "value", [0]);
    var call5423 = callmethodChecked(call5422, "kind", [0]);
    var opresult5425 = callmethodChecked(call5423, "==", [1], string5420);
    var opresult5427 = callmethodChecked(opresult5425, "&&", [1], block5401);
    if (Grace_isTrue(opresult5427)) {
      setLineNumber(1289);    // compilenode string
      var string5428 = new GraceString("// call case 1: super request");
      onSelf = true;
      var call5429 = callmethodChecked(this, "out", [1], string5428);
      setLineNumber(1290);    // compilenode block
      var block5430 = new GraceBlock(this, 1290, 1);
      setLineNumber(1);    // compilenode identifier
      block5430.real = function(var_arg) {
        setLineNumber(1291);    // compilenode string
        var string5431 = new GraceString(";");
        var string5434 = new GraceString("] = ");
        var string5437 = new GraceString("  params[");
        var opresult5439 = callmethodChecked(string5437, "++", [1], var_i);
        var opresult5441 = callmethodChecked(opresult5439, "++", [1], string5434);
        var opresult5443 = callmethodChecked(opresult5441, "++", [1], var_arg);
        var opresult5445 = callmethodChecked(opresult5443, "++", [1], string5431);
        onSelf = true;
        var call5446 = callmethodChecked(this, "out", [1], opresult5445);
        setLineNumber(1292);    // compilenode identifier
        var opresult5449 = callmethodChecked(var_i, "+", [1], new GraceNum(1));
        var_i = opresult5449;
        return GraceDone;
      };
      var call5450 = callmethodChecked(var_prelude, "for()do", [1, 1], var_args, block5430);
      setLineNumber(1294);    // compilenode identifier
      var call5451 = callmethodChecked(var_o, "with", [0]);
      var call5452 = callmethodChecked(call5451, "indices", [0]);
      var block5453 = new GraceBlock(this, 1294, 1);
      setLineNumber(1);    // compilenode identifier
      block5453.real = function(var_partnr) {
        setLineNumber(1295);    // compilenode string
        var string5454 = new GraceString(";");
        var call5456 = callmethodChecked(var_o, "with", [0]);
        var call5457 = callmethodChecked(call5456, "at", [1], var_partnr);
        var call5458 = callmethodChecked(call5457, "args", [0]);
        var call5459 = callmethodChecked(call5458, "size", [0]);
        var string5461 = new GraceString("] = ");
        var diff5465 = callmethodChecked(var_partnr, "-", [1], new GraceNum(1));
        var string5467 = new GraceString("  partcv[");
        var opresult5469 = callmethodChecked(string5467, "++", [1], diff5465);
        var opresult5471 = callmethodChecked(opresult5469, "++", [1], string5461);
        var opresult5473 = callmethodChecked(opresult5471, "++", [1], call5459);
        var opresult5475 = callmethodChecked(opresult5473, "++", [1], string5454);
        onSelf = true;
        var call5476 = callmethodChecked(this, "out", [1], opresult5475);
        return call5476;
      };
      var call5477 = callmethodChecked(var_prelude, "for()do", [1, 1], call5452, block5453);
      setLineNumber(1299);    // compilenode string
      var string5478 = new GraceString("CFLAG_SELF);");
      setLineNumber(1298);    // compilenode string
      var string5480 = new GraceString(", partcv, params, ((flags >> 24) & 0xff) + 1, ");
      var string5483 = new GraceString("");
      var opresult5485 = callmethodChecked(string5483, "++", [1], var_nparts);
      var opresult5487 = callmethodChecked(opresult5485, "++", [1], string5480);
      setLineNumber(1297);    // compilenode string
      var string5489 = new GraceString("\", ");
      var string5492 = new GraceString(" = callmethod4(self, \"");
      var string5495 = new GraceString("  Object call");
      var opresult5497 = callmethodChecked(string5495, "++", [1], var_auto__95__count);
      var opresult5499 = callmethodChecked(opresult5497, "++", [1], string5492);
      var opresult5501 = callmethodChecked(opresult5499, "++", [1], var_evl);
      var opresult5503 = callmethodChecked(opresult5501, "++", [1], string5489);
      var opresult5505 = callmethodChecked(opresult5503, "++", [1], opresult5487);
      var opresult5507 = callmethodChecked(opresult5505, "++", [1], string5478);
      onSelf = true;
      var call5508 = callmethodChecked(this, "out", [1], opresult5507);
      if5400 = call5508;
    } else {
      var if5509 = GraceDone;
      setLineNumber(1301);    // compilenode block
      var block5510 = new GraceBlock(this, 1301, 0);
      block5510.real = function() {
        setLineNumber(1302);    // compilenode string
        var string5511 = new GraceString("outer");
        var call5513 = callmethodChecked(var_o, "value", [0]);
        var call5514 = callmethodChecked(call5513, "in", [0]);
        var call5515 = callmethodChecked(call5514, "value", [0]);
        var opresult5517 = callmethodChecked(call5515, "==", [1], string5511);
        return opresult5517;
      };
      setLineNumber(1300);    // compilenode block
      var block5519 = new GraceBlock(this, 1300, 0);
      block5519.real = function() {
        setLineNumber(1301);    // compilenode string
        var string5520 = new GraceString("member");
        var call5522 = callmethodChecked(var_o, "value", [0]);
        var call5523 = callmethodChecked(call5522, "in", [0]);
        var call5524 = callmethodChecked(call5523, "kind", [0]);
        var opresult5526 = callmethodChecked(call5524, "==", [1], string5520);
        return opresult5526;
      };
      setLineNumber(1300);    // compilenode string
      var string5528 = new GraceString("member");
      var call5530 = callmethodChecked(var_o, "value", [0]);
      var call5531 = callmethodChecked(call5530, "kind", [0]);
      var opresult5533 = callmethodChecked(call5531, "==", [1], string5528);
      var opresult5535 = callmethodChecked(opresult5533, "&&", [1], block5519);
      var opresult5537 = callmethodChecked(opresult5535, "&&", [1], block5510);
      if (Grace_isTrue(opresult5537)) {
        setLineNumber(1303);    // compilenode string
        var string5538 = new GraceString("// call case 2: outer request");
        onSelf = true;
        var call5539 = callmethodChecked(this, "out", [1], string5538);
        setLineNumber(1304);    // compilenode identifier
        var call5540 = callmethodChecked(var_o, "value", [0]);
        var call5541 = callmethodChecked(call5540, "in", [0]);
        onSelf = true;
        var call5542 = callmethodChecked(this, "compilenode", [1], call5541);
        var var_ot = call5542;
        setLineNumber(1305);    // compilenode block
        var block5543 = new GraceBlock(this, 1305, 1);
        setLineNumber(1);    // compilenode identifier
        block5543.real = function(var_arg) {
          setLineNumber(1306);    // compilenode string
          var string5544 = new GraceString(";");
          var string5547 = new GraceString("] = ");
          var string5550 = new GraceString("  params[");
          var opresult5552 = callmethodChecked(string5550, "++", [1], var_i);
          var opresult5554 = callmethodChecked(opresult5552, "++", [1], string5547);
          var opresult5556 = callmethodChecked(opresult5554, "++", [1], var_arg);
          var opresult5558 = callmethodChecked(opresult5556, "++", [1], string5544);
          onSelf = true;
          var call5559 = callmethodChecked(this, "out", [1], opresult5558);
          setLineNumber(1307);    // compilenode identifier
          var opresult5562 = callmethodChecked(var_i, "+", [1], new GraceNum(1));
          var_i = opresult5562;
          return GraceDone;
        };
        var call5563 = callmethodChecked(var_prelude, "for()do", [1, 1], var_args, block5543);
        setLineNumber(1309);    // compilenode identifier
        var call5564 = callmethodChecked(var_o, "with", [0]);
        var call5565 = callmethodChecked(call5564, "indices", [0]);
        var block5566 = new GraceBlock(this, 1309, 1);
        setLineNumber(1);    // compilenode identifier
        block5566.real = function(var_partnr) {
          setLineNumber(1310);    // compilenode string
          var string5567 = new GraceString(";");
          var call5569 = callmethodChecked(var_o, "with", [0]);
          var call5570 = callmethodChecked(call5569, "at", [1], var_partnr);
          var call5571 = callmethodChecked(call5570, "args", [0]);
          var call5572 = callmethodChecked(call5571, "size", [0]);
          var string5574 = new GraceString("] = ");
          var diff5578 = callmethodChecked(var_partnr, "-", [1], new GraceNum(1));
          var string5580 = new GraceString("  partcv[");
          var opresult5582 = callmethodChecked(string5580, "++", [1], diff5578);
          var opresult5584 = callmethodChecked(opresult5582, "++", [1], string5574);
          var opresult5586 = callmethodChecked(opresult5584, "++", [1], call5572);
          var opresult5588 = callmethodChecked(opresult5586, "++", [1], string5567);
          onSelf = true;
          var call5589 = callmethodChecked(this, "out", [1], opresult5588);
          return call5589;
        };
        var call5590 = callmethodChecked(var_prelude, "for()do", [1, 1], call5565, block5566);
        setLineNumber(1313);    // compilenode string
        var string5591 = new GraceString(", partcv, params, CFLAG_SELF);");
        var string5594 = new GraceString("");
        var opresult5596 = callmethodChecked(string5594, "++", [1], var_nparts);
        var opresult5598 = callmethodChecked(opresult5596, "++", [1], string5591);
        setLineNumber(1312);    // compilenode string
        var string5600 = new GraceString("\", ");
        var string5603 = new GraceString(", \"");
        var string5606 = new GraceString(" = callmethodflags(");
        var string5609 = new GraceString("  Object call");
        var opresult5611 = callmethodChecked(string5609, "++", [1], var_auto__95__count);
        var opresult5613 = callmethodChecked(opresult5611, "++", [1], string5606);
        var opresult5615 = callmethodChecked(opresult5613, "++", [1], var_ot);
        var opresult5617 = callmethodChecked(opresult5615, "++", [1], string5603);
        var opresult5619 = callmethodChecked(opresult5617, "++", [1], var_evl);
        var opresult5621 = callmethodChecked(opresult5619, "++", [1], string5600);
        var opresult5623 = callmethodChecked(opresult5621, "++", [1], opresult5598);
        onSelf = true;
        var call5624 = callmethodChecked(this, "out", [1], opresult5623);
        if5509 = call5624;
      } else {
        var if5625 = GraceDone;
        setLineNumber(1314);    // compilenode block
        var block5626 = new GraceBlock(this, 1314, 0);
        block5626.real = function() {
          setLineNumber(1315);    // compilenode string
          var string5627 = new GraceString("outer");
          var call5629 = callmethodChecked(var_o, "value", [0]);
          var call5630 = callmethodChecked(call5629, "value", [0]);
          var opresult5632 = callmethodChecked(call5630, "==", [1], string5627);
          var string5634 = new GraceString("self");
          var call5636 = callmethodChecked(var_o, "value", [0]);
          var call5637 = callmethodChecked(call5636, "in", [0]);
          var call5638 = callmethodChecked(call5637, "value", [0]);
          var opresult5640 = callmethodChecked(call5638, "==", [1], string5634);
          setLineNumber(1314);    // compilenode string
          var string5642 = new GraceString("identifier");
          var call5644 = callmethodChecked(var_o, "value", [0]);
          var call5645 = callmethodChecked(call5644, "in", [0]);
          var call5646 = callmethodChecked(call5645, "kind", [0]);
          var opresult5648 = callmethodChecked(call5646, "==", [1], string5642);
          var opresult5650 = callmethodChecked(opresult5648, "&&", [1], opresult5640);
          var opresult5652 = callmethodChecked(opresult5650, "&&", [1], opresult5632);
          return opresult5652;
        };
        var string5654 = new GraceString("member");
        var call5656 = callmethodChecked(var_o, "value", [0]);
        var call5657 = callmethodChecked(call5656, "kind", [0]);
        var opresult5659 = callmethodChecked(call5657, "==", [1], string5654);
        var opresult5661 = callmethodChecked(opresult5659, "&&", [1], block5626);
        if (Grace_isTrue(opresult5661)) {
          setLineNumber(1316);    // compilenode string
          var string5662 = new GraceString("// call case 3: self.outer request");
          onSelf = true;
          var call5663 = callmethodChecked(this, "out", [1], string5662);
          setLineNumber(1318);    // compilenode string
          var string5664 = new GraceString("0, 0, NULL, ((flags >> 24) & 0xff));");
          setLineNumber(1317);    // compilenode string
          var string5666 = new GraceString("\", ");
          var string5669 = new GraceString(" = callmethod3(self, \"");
          var string5672 = new GraceString("  Object call");
          var opresult5674 = callmethodChecked(string5672, "++", [1], var_auto__95__count);
          var opresult5676 = callmethodChecked(opresult5674, "++", [1], string5669);
          var opresult5678 = callmethodChecked(opresult5676, "++", [1], var_evl);
          var opresult5680 = callmethodChecked(opresult5678, "++", [1], string5666);
          var opresult5682 = callmethodChecked(opresult5680, "++", [1], string5664);
          onSelf = true;
          var call5683 = callmethodChecked(this, "out", [1], opresult5682);
          if5625 = call5683;
        } else {
          var if5684 = GraceDone;
          setLineNumber(1319);    // compilenode block
          var block5685 = new GraceBlock(this, 1319, 0);
          block5685.real = function() {
            setLineNumber(1320);    // compilenode string
            var string5686 = new GraceString("self");
            var call5688 = callmethodChecked(var_o, "value", [0]);
            var call5689 = callmethodChecked(call5688, "in", [0]);
            var call5690 = callmethodChecked(call5689, "value", [0]);
            var opresult5692 = callmethodChecked(call5690, "==", [1], string5686);
            setLineNumber(1319);    // compilenode string
            var string5694 = new GraceString("identifier");
            var call5696 = callmethodChecked(var_o, "value", [0]);
            var call5697 = callmethodChecked(call5696, "in", [0]);
            var call5698 = callmethodChecked(call5697, "kind", [0]);
            var opresult5700 = callmethodChecked(call5698, "==", [1], string5694);
            var opresult5702 = callmethodChecked(opresult5700, "&&", [1], opresult5692);
            return opresult5702;
          };
          var string5704 = new GraceString("member");
          var call5706 = callmethodChecked(var_o, "value", [0]);
          var call5707 = callmethodChecked(call5706, "kind", [0]);
          var opresult5709 = callmethodChecked(call5707, "==", [1], string5704);
          var opresult5711 = callmethodChecked(opresult5709, "&&", [1], block5685);
          if (Grace_isTrue(opresult5711)) {
            setLineNumber(1321);    // compilenode string
            var string5712 = new GraceString("// call case 4: self request");
            onSelf = true;
            var call5713 = callmethodChecked(this, "out", [1], string5712);
            setLineNumber(1322);    // compilenode block
            var block5714 = new GraceBlock(this, 1322, 1);
            setLineNumber(1);    // compilenode identifier
            block5714.real = function(var_arg) {
              setLineNumber(1323);    // compilenode string
              var string5715 = new GraceString(";");
              var string5718 = new GraceString("] = ");
              var string5721 = new GraceString("  params[");
              var opresult5723 = callmethodChecked(string5721, "++", [1], var_i);
              var opresult5725 = callmethodChecked(opresult5723, "++", [1], string5718);
              var opresult5727 = callmethodChecked(opresult5725, "++", [1], var_arg);
              var opresult5729 = callmethodChecked(opresult5727, "++", [1], string5715);
              onSelf = true;
              var call5730 = callmethodChecked(this, "out", [1], opresult5729);
              setLineNumber(1324);    // compilenode identifier
              var opresult5733 = callmethodChecked(var_i, "+", [1], new GraceNum(1));
              var_i = opresult5733;
              return GraceDone;
            };
            var call5734 = callmethodChecked(var_prelude, "for()do", [1, 1], var_args, block5714);
            setLineNumber(1326);    // compilenode identifier
            var call5735 = callmethodChecked(var_o, "with", [0]);
            var call5736 = callmethodChecked(call5735, "indices", [0]);
            var block5737 = new GraceBlock(this, 1326, 1);
            setLineNumber(1);    // compilenode identifier
            block5737.real = function(var_partnr) {
              setLineNumber(1327);    // compilenode string
              var string5738 = new GraceString(";");
              var call5740 = callmethodChecked(var_o, "with", [0]);
              var call5741 = callmethodChecked(call5740, "at", [1], var_partnr);
              var call5742 = callmethodChecked(call5741, "args", [0]);
              var call5743 = callmethodChecked(call5742, "size", [0]);
              var string5745 = new GraceString("] = ");
              var diff5749 = callmethodChecked(var_partnr, "-", [1], new GraceNum(1));
              var string5751 = new GraceString("  partcv[");
              var opresult5753 = callmethodChecked(string5751, "++", [1], diff5749);
              var opresult5755 = callmethodChecked(opresult5753, "++", [1], string5745);
              var opresult5757 = callmethodChecked(opresult5755, "++", [1], call5743);
              var opresult5759 = callmethodChecked(opresult5757, "++", [1], string5738);
              onSelf = true;
              var call5760 = callmethodChecked(this, "out", [1], opresult5759);
              return call5760;
            };
            var call5761 = callmethodChecked(var_prelude, "for()do", [1, 1], call5736, block5737);
            setLineNumber(1330);    // compilenode string
            var string5762 = new GraceString(", partcv, params, CFLAG_SELF);");
            var string5765 = new GraceString("");
            var opresult5767 = callmethodChecked(string5765, "++", [1], var_nparts);
            var opresult5769 = callmethodChecked(opresult5767, "++", [1], string5762);
            setLineNumber(1329);    // compilenode string
            var string5771 = new GraceString("\", ");
            var string5774 = new GraceString(" = callmethodflags(self, \"");
            var string5777 = new GraceString("  Object call");
            var opresult5779 = callmethodChecked(string5777, "++", [1], var_auto__95__count);
            var opresult5781 = callmethodChecked(opresult5779, "++", [1], string5774);
            var opresult5783 = callmethodChecked(opresult5781, "++", [1], var_evl);
            var opresult5785 = callmethodChecked(opresult5783, "++", [1], string5771);
            var opresult5787 = callmethodChecked(opresult5785, "++", [1], opresult5769);
            onSelf = true;
            var call5788 = callmethodChecked(this, "out", [1], opresult5787);
            if5684 = call5788;
          } else {
            var if5789 = GraceDone;
            setLineNumber(1331);    // compilenode block
            var block5790 = new GraceBlock(this, 1331, 0);
            block5790.real = function() {
              setLineNumber(1332);    // compilenode string
              var string5791 = new GraceString("prelude");
              var call5793 = callmethodChecked(var_o, "value", [0]);
              var call5794 = callmethodChecked(call5793, "in", [0]);
              var call5795 = callmethodChecked(call5794, "value", [0]);
              var opresult5797 = callmethodChecked(call5795, "==", [1], string5791);
              setLineNumber(1331);    // compilenode string
              var string5799 = new GraceString("identifier");
              var call5801 = callmethodChecked(var_o, "value", [0]);
              var call5802 = callmethodChecked(call5801, "in", [0]);
              var call5803 = callmethodChecked(call5802, "kind", [0]);
              var opresult5805 = callmethodChecked(call5803, "==", [1], string5799);
              var opresult5807 = callmethodChecked(opresult5805, "&&", [1], opresult5797);
              return opresult5807;
            };
            var string5809 = new GraceString("member");
            var call5811 = callmethodChecked(var_o, "value", [0]);
            var call5812 = callmethodChecked(call5811, "kind", [0]);
            var opresult5814 = callmethodChecked(call5812, "==", [1], string5809);
            var opresult5816 = callmethodChecked(opresult5814, "&&", [1], block5790);
            if (Grace_isTrue(opresult5816)) {
              setLineNumber(1333);    // compilenode string
              var string5817 = new GraceString("// call case 5: prelude request");
              onSelf = true;
              var call5818 = callmethodChecked(this, "out", [1], string5817);
              setLineNumber(1334);    // compilenode block
              var block5819 = new GraceBlock(this, 1334, 1);
              setLineNumber(1);    // compilenode identifier
              block5819.real = function(var_arg) {
                setLineNumber(1335);    // compilenode string
                var string5820 = new GraceString(";");
                var string5823 = new GraceString("] = ");
                var string5826 = new GraceString("  params[");
                var opresult5828 = callmethodChecked(string5826, "++", [1], var_i);
                var opresult5830 = callmethodChecked(opresult5828, "++", [1], string5823);
                var opresult5832 = callmethodChecked(opresult5830, "++", [1], var_arg);
                var opresult5834 = callmethodChecked(opresult5832, "++", [1], string5820);
                onSelf = true;
                var call5835 = callmethodChecked(this, "out", [1], opresult5834);
                setLineNumber(1336);    // compilenode identifier
                var opresult5838 = callmethodChecked(var_i, "+", [1], new GraceNum(1));
                var_i = opresult5838;
                return GraceDone;
              };
              var call5839 = callmethodChecked(var_prelude, "for()do", [1, 1], var_args, block5819);
              setLineNumber(1338);    // compilenode identifier
              var call5840 = callmethodChecked(var_o, "with", [0]);
              var call5841 = callmethodChecked(call5840, "indices", [0]);
              var block5842 = new GraceBlock(this, 1338, 1);
              setLineNumber(1);    // compilenode identifier
              block5842.real = function(var_partnr) {
                setLineNumber(1339);    // compilenode string
                var string5843 = new GraceString(";");
                var call5845 = callmethodChecked(var_o, "with", [0]);
                var call5846 = callmethodChecked(call5845, "at", [1], var_partnr);
                var call5847 = callmethodChecked(call5846, "args", [0]);
                var call5848 = callmethodChecked(call5847, "size", [0]);
                var string5850 = new GraceString("] = ");
                var diff5854 = callmethodChecked(var_partnr, "-", [1], new GraceNum(1));
                var string5856 = new GraceString("  partcv[");
                var opresult5858 = callmethodChecked(string5856, "++", [1], diff5854);
                var opresult5860 = callmethodChecked(opresult5858, "++", [1], string5850);
                var opresult5862 = callmethodChecked(opresult5860, "++", [1], call5848);
                var opresult5864 = callmethodChecked(opresult5862, "++", [1], string5843);
                onSelf = true;
                var call5865 = callmethodChecked(this, "out", [1], opresult5864);
                return call5865;
              };
              var call5866 = callmethodChecked(var_prelude, "for()do", [1, 1], call5841, block5842);
              setLineNumber(1342);    // compilenode string
              var string5867 = new GraceString(", partcv, params, CFLAG_SELF);");
              var string5870 = new GraceString("");
              var opresult5872 = callmethodChecked(string5870, "++", [1], var_nparts);
              var opresult5874 = callmethodChecked(opresult5872, "++", [1], string5867);
              setLineNumber(1341);    // compilenode string
              var string5876 = new GraceString("\", ");
              var string5879 = new GraceString(" = callmethodflags(prelude, \"");
              var string5882 = new GraceString("  Object call");
              var opresult5884 = callmethodChecked(string5882, "++", [1], var_auto__95__count);
              var opresult5886 = callmethodChecked(opresult5884, "++", [1], string5879);
              var opresult5888 = callmethodChecked(opresult5886, "++", [1], var_evl);
              var opresult5890 = callmethodChecked(opresult5888, "++", [1], string5876);
              var opresult5892 = callmethodChecked(opresult5890, "++", [1], opresult5874);
              onSelf = true;
              var call5893 = callmethodChecked(this, "out", [1], opresult5892);
              if5789 = call5893;
            } else {
              var if5894 = GraceDone;
              setLineNumber(1343);    // compilenode string
              var string5895 = new GraceString("member");
              var call5897 = callmethodChecked(var_o, "value", [0]);
              var call5898 = callmethodChecked(call5897, "kind", [0]);
              var opresult5900 = callmethodChecked(call5898, "==", [1], string5895);
              if (Grace_isTrue(opresult5900)) {
                setLineNumber(1344);    // compilenode string
                var string5901 = new GraceString("// call case 6: other member request");
                onSelf = true;
                var call5902 = callmethodChecked(this, "out", [1], string5901);
                setLineNumber(1345);    // compilenode identifier
                var call5903 = callmethodChecked(var_o, "value", [0]);
                var call5904 = callmethodChecked(call5903, "in", [0]);
                onSelf = true;
                var call5905 = callmethodChecked(this, "compilenode", [1], call5904);
                var_obj = call5905;
                setLineNumber(1346);    // compilenode block
                var block5906 = new GraceBlock(this, 1346, 1);
                setLineNumber(1);    // compilenode identifier
                block5906.real = function(var_arg) {
                  setLineNumber(1347);    // compilenode string
                  var string5907 = new GraceString(";");
                  var string5910 = new GraceString("] = ");
                  var string5913 = new GraceString("  params[");
                  var opresult5915 = callmethodChecked(string5913, "++", [1], var_i);
                  var opresult5917 = callmethodChecked(opresult5915, "++", [1], string5910);
                  var opresult5919 = callmethodChecked(opresult5917, "++", [1], var_arg);
                  var opresult5921 = callmethodChecked(opresult5919, "++", [1], string5907);
                  onSelf = true;
                  var call5922 = callmethodChecked(this, "out", [1], opresult5921);
                  setLineNumber(1348);    // compilenode identifier
                  var opresult5925 = callmethodChecked(var_i, "+", [1], new GraceNum(1));
                  var_i = opresult5925;
                  return GraceDone;
                };
                var call5926 = callmethodChecked(var_prelude, "for()do", [1, 1], var_args, block5906);
                setLineNumber(1350);    // compilenode identifier
                var call5927 = callmethodChecked(var_o, "with", [0]);
                var call5928 = callmethodChecked(call5927, "indices", [0]);
                var block5929 = new GraceBlock(this, 1350, 1);
                setLineNumber(1);    // compilenode identifier
                block5929.real = function(var_partnr) {
                  setLineNumber(1351);    // compilenode string
                  var string5930 = new GraceString(";");
                  var call5932 = callmethodChecked(var_o, "with", [0]);
                  var call5933 = callmethodChecked(call5932, "at", [1], var_partnr);
                  var call5934 = callmethodChecked(call5933, "args", [0]);
                  var call5935 = callmethodChecked(call5934, "size", [0]);
                  var string5937 = new GraceString("] = ");
                  var diff5941 = callmethodChecked(var_partnr, "-", [1], new GraceNum(1));
                  var string5943 = new GraceString("  partcv[");
                  var opresult5945 = callmethodChecked(string5943, "++", [1], diff5941);
                  var opresult5947 = callmethodChecked(opresult5945, "++", [1], string5937);
                  var opresult5949 = callmethodChecked(opresult5947, "++", [1], call5935);
                  var opresult5951 = callmethodChecked(opresult5949, "++", [1], string5930);
                  onSelf = true;
                  var call5952 = callmethodChecked(this, "out", [1], opresult5951);
                  return call5952;
                };
                var call5953 = callmethodChecked(var_prelude, "for()do", [1, 1], call5928, block5929);
                var if5954 = GraceDone;
                setLineNumber(1353);    // compilenode identifier
                if (Grace_isTrue(var_tailcall)) {
                  setLineNumber(1354);    // compilenode string
                  var string5955 = new GraceString("\",");
                  var string5958 = new GraceString(", \"");
                  var string5961 = new GraceString(" = tailcall(");
                  var string5964 = new GraceString("  Object call");
                  var opresult5966 = callmethodChecked(string5964, "++", [1], var_auto__95__count);
                  var opresult5968 = callmethodChecked(opresult5966, "++", [1], string5961);
                  var opresult5970 = callmethodChecked(opresult5968, "++", [1], var_obj);
                  var opresult5972 = callmethodChecked(opresult5970, "++", [1], string5958);
                  var opresult5974 = callmethodChecked(opresult5972, "++", [1], var_evl);
                  var opresult5976 = callmethodChecked(opresult5974, "++", [1], string5955);
                  onSelf = true;
                  var call5977 = callmethodChecked(this, "out", [1], opresult5976);
                  setLineNumber(1355);    // compilenode string
                  var string5978 = new GraceString(", partcv, params, 0);");
                  var string5981 = new GraceString("    ");
                  var opresult5983 = callmethodChecked(string5981, "++", [1], var_nparts);
                  var opresult5985 = callmethodChecked(opresult5983, "++", [1], string5978);
                  onSelf = true;
                  var call5986 = callmethodChecked(this, "out", [1], opresult5985);
                  if5954 = call5986;
                } else {
                  setLineNumber(1357);    // compilenode string
                  var string5987 = new GraceString("\",");
                  var string5990 = new GraceString(", \"");
                  var string5993 = new GraceString(" = callmethod(");
                  var string5996 = new GraceString("  Object call");
                  var opresult5998 = callmethodChecked(string5996, "++", [1], var_auto__95__count);
                  var opresult6000 = callmethodChecked(opresult5998, "++", [1], string5993);
                  var opresult6002 = callmethodChecked(opresult6000, "++", [1], var_obj);
                  var opresult6004 = callmethodChecked(opresult6002, "++", [1], string5990);
                  var opresult6006 = callmethodChecked(opresult6004, "++", [1], var_evl);
                  var opresult6008 = callmethodChecked(opresult6006, "++", [1], string5987);
                  onSelf = true;
                  var call6009 = callmethodChecked(this, "out", [1], opresult6008);
                  setLineNumber(1358);    // compilenode string
                  var string6010 = new GraceString(", partcv, params);");
                  var string6013 = new GraceString("    ");
                  var opresult6015 = callmethodChecked(string6013, "++", [1], var_nparts);
                  var opresult6017 = callmethodChecked(opresult6015, "++", [1], string6010);
                  onSelf = true;
                  var call6018 = callmethodChecked(this, "out", [1], opresult6017);
                  if5954 = call6018;
                }
                if5894 = if5954;
              } else {
                setLineNumber(1361);    // compilenode string
                var string6019 = new GraceString("// call case 7: all other requests");
                onSelf = true;
                var call6020 = callmethodChecked(this, "out", [1], string6019);
                setLineNumber(1362);    // compilenode string
                var string6021 = new GraceString("self");
                var_obj = string6021;
                setLineNumber(1363);    // compilenode block
                var block6022 = new GraceBlock(this, 1363, 1);
                setLineNumber(1);    // compilenode identifier
                block6022.real = function(var_arg) {
                  setLineNumber(1364);    // compilenode string
                  var string6023 = new GraceString(";");
                  var string6026 = new GraceString("] = ");
                  var string6029 = new GraceString("  params[");
                  var opresult6031 = callmethodChecked(string6029, "++", [1], var_i);
                  var opresult6033 = callmethodChecked(opresult6031, "++", [1], string6026);
                  var opresult6035 = callmethodChecked(opresult6033, "++", [1], var_arg);
                  var opresult6037 = callmethodChecked(opresult6035, "++", [1], string6023);
                  onSelf = true;
                  var call6038 = callmethodChecked(this, "out", [1], opresult6037);
                  setLineNumber(1365);    // compilenode identifier
                  var opresult6041 = callmethodChecked(var_i, "+", [1], new GraceNum(1));
                  var_i = opresult6041;
                  return GraceDone;
                };
                var call6042 = callmethodChecked(var_prelude, "for()do", [1, 1], var_args, block6022);
                setLineNumber(1367);    // compilenode identifier
                var call6043 = callmethodChecked(var_o, "with", [0]);
                var call6044 = callmethodChecked(call6043, "indices", [0]);
                var block6045 = new GraceBlock(this, 1367, 1);
                setLineNumber(1);    // compilenode identifier
                block6045.real = function(var_partnr) {
                  setLineNumber(1368);    // compilenode string
                  var string6046 = new GraceString(";");
                  var call6048 = callmethodChecked(var_o, "with", [0]);
                  var call6049 = callmethodChecked(call6048, "at", [1], var_partnr);
                  var call6050 = callmethodChecked(call6049, "args", [0]);
                  var call6051 = callmethodChecked(call6050, "size", [0]);
                  var string6053 = new GraceString("] = ");
                  var diff6057 = callmethodChecked(var_partnr, "-", [1], new GraceNum(1));
                  var string6059 = new GraceString("  partcv[");
                  var opresult6061 = callmethodChecked(string6059, "++", [1], diff6057);
                  var opresult6063 = callmethodChecked(opresult6061, "++", [1], string6053);
                  var opresult6065 = callmethodChecked(opresult6063, "++", [1], call6051);
                  var opresult6067 = callmethodChecked(opresult6065, "++", [1], string6046);
                  onSelf = true;
                  var call6068 = callmethodChecked(this, "out", [1], opresult6067);
                  return call6068;
                };
                var call6069 = callmethodChecked(var_prelude, "for()do", [1, 1], call6044, block6045);
                var if6070 = GraceDone;
                setLineNumber(1370);    // compilenode identifier
                if (Grace_isTrue(var_tailcall)) {
                  setLineNumber(1371);    // compilenode string
                  var string6071 = new GraceString("\",");
                  var string6074 = new GraceString(" = tailcall(self, \"");
                  var string6077 = new GraceString("  Object call");
                  var opresult6079 = callmethodChecked(string6077, "++", [1], var_auto__95__count);
                  var opresult6081 = callmethodChecked(opresult6079, "++", [1], string6074);
                  var opresult6083 = callmethodChecked(opresult6081, "++", [1], var_evl);
                  var opresult6085 = callmethodChecked(opresult6083, "++", [1], string6071);
                  onSelf = true;
                  var call6086 = callmethodChecked(this, "out", [1], opresult6085);
                  setLineNumber(1372);    // compilenode string
                  var string6087 = new GraceString(", partcv, params, 0);");
                  var string6090 = new GraceString("    ");
                  var opresult6092 = callmethodChecked(string6090, "++", [1], var_nparts);
                  var opresult6094 = callmethodChecked(opresult6092, "++", [1], string6087);
                  onSelf = true;
                  var call6095 = callmethodChecked(this, "out", [1], opresult6094);
                  if6070 = call6095;
                } else {
                  setLineNumber(1374);    // compilenode string
                  var string6096 = new GraceString("\",");
                  var string6099 = new GraceString(" = callmethod(self, \"");
                  var string6102 = new GraceString("  Object call");
                  var opresult6104 = callmethodChecked(string6102, "++", [1], var_auto__95__count);
                  var opresult6106 = callmethodChecked(opresult6104, "++", [1], string6099);
                  var opresult6108 = callmethodChecked(opresult6106, "++", [1], var_evl);
                  var opresult6110 = callmethodChecked(opresult6108, "++", [1], string6096);
                  onSelf = true;
                  var call6111 = callmethodChecked(this, "out", [1], opresult6110);
                  setLineNumber(1375);    // compilenode string
                  var string6112 = new GraceString(", partcv, params);");
                  var string6115 = new GraceString("    ");
                  var opresult6117 = callmethodChecked(string6115, "++", [1], var_nparts);
                  var opresult6119 = callmethodChecked(opresult6117, "++", [1], string6112);
                  onSelf = true;
                  var call6120 = callmethodChecked(this, "out", [1], opresult6119);
                  if6070 = call6120;
                }
                if5894 = if6070;
              }
              if5789 = if5894;
            }
            if5684 = if5789;
          }
          if5625 = if5684;
        }
        if5509 = if5625;
      }
      if5400 = if5509;
    }
    setLineNumber(1378);    // compilenode string
    var string6121 = new GraceString(");");
    var string6124 = new GraceString("  gc_frame_end(callframe");
    var opresult6126 = callmethodChecked(string6124, "++", [1], var_myc);
    var opresult6128 = callmethodChecked(opresult6126, "++", [1], string6121);
    onSelf = true;
    var call6129 = callmethodChecked(this, "out", [1], opresult6128);
    setLineNumber(1379);    // compilenode string
    var string6131 = new GraceString("call");
    var opresult6133 = callmethodChecked(string6131, "++", [1], var_auto__95__count);
    var call6134 = callmethodChecked(var_o, "register:=", [1], opresult6133);
    setLineNumber(1380);    // compilenode identifier
    var opresult6137 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult6137;
    return GraceDone;
  };
  func5273.paramCounts = [2];
  this.methods["compilecall"] = func5273;
  func5273.definitionLine = 1248;
  func5273.definitionModule = "genc";
  setLineNumber(1383);    // compilenode method
  var func6138 = function(argcv) {    // method compiledialect(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compiledialect(1)"));
    setModuleName("genc");
    setLineNumber(1384);    // compilenode string
    var string6139 = new GraceString("\"");
    var call6141 = callmethodChecked(var_o, "value", [0]);
    var string6143 = new GraceString("// Dialect \"");
    var opresult6145 = callmethodChecked(string6143, "++", [1], call6141);
    var opresult6147 = callmethodChecked(opresult6145, "++", [1], string6139);
    onSelf = true;
    var call6148 = callmethodChecked(this, "out", [1], opresult6147);
    setLineNumber(1385);    // compilenode string
    var string6149 = new GraceString("");
    var var_snm = string6149;
    setLineNumber(1386);    // compilenode identifier
    var call6150 = callmethodChecked(var_o, "value", [0]);
    var block6151 = new GraceBlock(this, 1386, 1);
    setLineNumber(1);    // compilenode identifier
    block6151.real = function(var_c) {
      var if6152 = GraceDone;
      setLineNumber(1387);    // compilenode string
      var string6153 = new GraceString("/");
      var opresult6156 = callmethodChecked(var_c, "==", [1], string6153);
      if (Grace_isTrue(opresult6156)) {
        setLineNumber(1388);    // compilenode string
        var string6157 = new GraceString("");
        var_snm = string6157;
        if6152 = GraceDone;
      } else {
        setLineNumber(1390);    // compilenode identifier
        var opresult6160 = callmethodChecked(var_snm, "++", [1], var_c);
        var_snm = opresult6160;
        if6152 = GraceDone;
      }
      return if6152;
    };
    var call6161 = callmethodChecked(var_prelude, "for()do", [1, 1], call6150, block6151);
    setLineNumber(1393);    // compilenode identifier
    var call6162 = callmethodChecked(var_o, "value", [0]);
    onSelf = true;
    var call6163 = callmethodChecked(this, "escapestring2", [1], call6162);
    var var_fn = call6163;
    setLineNumber(1394);    // compilenode identifier
    onSelf = true;
    var call6164 = callmethodChecked(this, "escapeident", [1], var_snm);
    var string6166 = new GraceString("module_");
    var opresult6168 = callmethodChecked(string6166, "++", [1], call6164);
    var var_modg = opresult6168;
    setLineNumber(1395);    // compilenode string
    var string6169 = new GraceString(" == NULL)");
    var string6172 = new GraceString("  if (");
    var opresult6174 = callmethodChecked(string6172, "++", [1], var_modg);
    var opresult6176 = callmethodChecked(opresult6174, "++", [1], string6169);
    onSelf = true;
    var call6177 = callmethodChecked(this, "out", [1], opresult6176);
    var if6178 = GraceDone;
    setLineNumber(1396);    // compilenode identifier
    var call6179 = callmethodChecked(var_o, "value", [0]);
    var call6180 = callmethodChecked(var_imports, "static", [0]);
    var call6181 = callmethodChecked(call6180, "contains", [1], call6179);
    if (Grace_isTrue(call6181)) {
      setLineNumber(1397);    // compilenode string
      var string6182 = new GraceString("_init();");
      var string6185 = new GraceString(" = ");
      var string6188 = new GraceString("    ");
      var opresult6190 = callmethodChecked(string6188, "++", [1], var_modg);
      var opresult6192 = callmethodChecked(opresult6190, "++", [1], string6185);
      var opresult6194 = callmethodChecked(opresult6192, "++", [1], var_modg);
      var opresult6196 = callmethodChecked(opresult6194, "++", [1], string6182);
      onSelf = true;
      var call6197 = callmethodChecked(this, "out", [1], opresult6196);
      if6178 = call6197;
    } else {
      setLineNumber(1399);    // compilenode string
      var string6198 = new GraceString("\");");
      var string6201 = new GraceString(" = dlmodule(\"");
      var string6204 = new GraceString("    ");
      var opresult6206 = callmethodChecked(string6204, "++", [1], var_modg);
      var opresult6208 = callmethodChecked(opresult6206, "++", [1], string6201);
      var opresult6210 = callmethodChecked(opresult6208, "++", [1], var_fn);
      var opresult6212 = callmethodChecked(opresult6210, "++", [1], string6198);
      onSelf = true;
      var call6213 = callmethodChecked(this, "out", [1], opresult6212);
      if6178 = call6213;
    }
    setLineNumber(1401);    // compilenode string
    var string6214 = new GraceString("  Object *var_dialect = alloc_var();");
    onSelf = true;
    var call6215 = callmethodChecked(this, "out", [1], string6214);
    setLineNumber(1402);    // compilenode string
    var string6216 = new GraceString(";");
    var string6219 = new GraceString("  *var_dialect = ");
    var opresult6221 = callmethodChecked(string6219, "++", [1], var_modg);
    var opresult6223 = callmethodChecked(opresult6221, "++", [1], string6216);
    onSelf = true;
    var call6224 = callmethodChecked(this, "out", [1], opresult6223);
    setLineNumber(1403);    // compilenode string
    var string6225 = new GraceString(";");
    var string6228 = new GraceString("  prelude = ");
    var opresult6230 = callmethodChecked(string6228, "++", [1], var_modg);
    var opresult6232 = callmethodChecked(opresult6230, "++", [1], string6225);
    onSelf = true;
    var call6233 = callmethodChecked(this, "out", [1], opresult6232);
    setLineNumber(1404);    // compilenode string
    var string6234 = new GraceString("_init();");
    var string6237 = new GraceString("Object ");
    var opresult6239 = callmethodChecked(string6237, "++", [1], var_modg);
    var opresult6241 = callmethodChecked(opresult6239, "++", [1], string6234);
    var call6242 = callmethodChecked(var_globals, "push", [1], opresult6241);
    setLineNumber(1405);    // compilenode string
    var string6243 = new GraceString(";");
    var string6246 = new GraceString("Object ");
    var opresult6248 = callmethodChecked(string6246, "++", [1], var_modg);
    var opresult6250 = callmethodChecked(opresult6248, "++", [1], string6243);
    var call6251 = callmethodChecked(var_globals, "push", [1], opresult6250);
    setLineNumber(1406);    // compilenode identifier
    var opresult6254 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult6254;
    var if6255 = GraceDone;
    setLineNumber(1407);    // compilenode identifier
    var call6256 = callmethodChecked(var_xmodule, "currentDialect", [0]);
    var call6257 = callmethodChecked(call6256, "hasAtEnd", [0]);
    if (Grace_isTrue(call6257)) {
      setLineNumber(1408);    // compilenode string
      var string6258 = new GraceString("  partcv[0] = 1;");
      onSelf = true;
      var call6259 = callmethodChecked(this, "out", [1], string6258);
      setLineNumber(1409);    // compilenode string
      var string6260 = new GraceString("\");");
      onSelf = true;
      var call6262 = callmethodChecked(this, "escapestring", [1], var_modname);
      var string6264 = new GraceString("  params[0] = alloc_String(\"");
      var opresult6266 = callmethodChecked(string6264, "++", [1], call6262);
      var opresult6268 = callmethodChecked(opresult6266, "++", [1], string6260);
      onSelf = true;
      var call6269 = callmethodChecked(this, "out", [1], opresult6268);
      setLineNumber(1411);    // compilenode string
      var string6270 = new GraceString("1, partcv, params, CFLAG_SELF);");
      setLineNumber(1410);    // compilenode string
      var string6272 = new GraceString("  callmethodflags(prelude, \"atModuleStart\", ");
      var opresult6274 = callmethodChecked(string6272, "++", [1], string6270);
      onSelf = true;
      var call6275 = callmethodChecked(this, "out", [1], opresult6274);
      if6255 = call6275;
    }
    setLineNumber(1413);    // compilenode string
    var string6276 = new GraceString("done");
    var call6277 = callmethodChecked(var_o, "register:=", [1], string6276);
    return call6277;
  };
  func6138.paramCounts = [1];
  this.methods["compiledialect"] = func6138;
  func6138.definitionLine = 1383;
  func6138.definitionModule = "genc";
  setLineNumber(1415);    // compilenode method
  var func6278 = function(argcv) {    // method compileimport(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compileimport(1)"));
    setModuleName("genc");
    setLineNumber(1416);    // compilenode string
    var string6279 = new GraceString("");
    var call6281 = callmethodChecked(var_o, "nameString", [0]);
    var string6283 = new GraceString(" as ");
    var call6285 = callmethodChecked(var_o, "path", [0]);
    var string6287 = new GraceString("// Import of ");
    var opresult6289 = callmethodChecked(string6287, "++", [1], call6285);
    var opresult6291 = callmethodChecked(opresult6289, "++", [1], string6283);
    var opresult6293 = callmethodChecked(opresult6291, "++", [1], call6281);
    var opresult6295 = callmethodChecked(opresult6293, "++", [1], string6279);
    onSelf = true;
    var call6296 = callmethodChecked(this, "out", [1], opresult6295);
    setLineNumber(1417);    // compilenode string
    var string6297 = new GraceString("");
    var var_snm = string6297;
    setLineNumber(1418);    // compilenode identifier
    var call6298 = callmethodChecked(var_o, "path", [0]);
    var block6299 = new GraceBlock(this, 1418, 1);
    setLineNumber(1);    // compilenode identifier
    block6299.real = function(var_c) {
      var if6300 = GraceDone;
      setLineNumber(1419);    // compilenode string
      var string6301 = new GraceString("/");
      var opresult6304 = callmethodChecked(var_c, "==", [1], string6301);
      if (Grace_isTrue(opresult6304)) {
        setLineNumber(1420);    // compilenode string
        var string6305 = new GraceString("");
        var_snm = string6305;
        if6300 = GraceDone;
      } else {
        setLineNumber(1422);    // compilenode identifier
        var opresult6308 = callmethodChecked(var_snm, "++", [1], var_c);
        var_snm = opresult6308;
        if6300 = GraceDone;
      }
      return if6300;
    };
    var call6309 = callmethodChecked(var_prelude, "for()do", [1, 1], call6298, block6299);
    setLineNumber(1425);    // compilenode identifier
    onSelf = true;
    var call6310 = callmethodChecked(this, "escapeident", [1], var_snm);
    var_snm = call6310;
    setLineNumber(1426);    // compilenode string
    var string6311 = new GraceString("done");
    var call6312 = callmethodChecked(var_o, "register:=", [1], string6311);
    setLineNumber(1427);    // compilenode identifier
    var call6313 = callmethodChecked(var_o, "nameString", [0]);
    onSelf = true;
    var call6314 = callmethodChecked(this, "escapeident", [1], call6313);
    var var_nm = call6314;
    setLineNumber(1428);    // compilenode string
    var string6316 = new GraceString("module_");
    var opresult6318 = callmethodChecked(string6316, "++", [1], var_snm);
    var var_modg = opresult6318;
    setLineNumber(1429);    // compilenode identifier
    var call6319 = callmethodChecked(var_declaredvars, "push", [1], var_nm);
    setLineNumber(1430);    // compilenode string
    var string6320 = new GraceString(";");
    var string6323 = new GraceString("Object ");
    var opresult6325 = callmethodChecked(string6323, "++", [1], var_modg);
    var opresult6327 = callmethodChecked(opresult6325, "++", [1], string6320);
    var call6328 = callmethodChecked(var_globals, "push", [1], opresult6327);
    setLineNumber(1431);    // compilenode string
    var string6329 = new GraceString(" == NULL)");
    var string6332 = new GraceString("  if (");
    var opresult6334 = callmethodChecked(string6332, "++", [1], var_modg);
    var opresult6336 = callmethodChecked(opresult6334, "++", [1], string6329);
    onSelf = true;
    var call6337 = callmethodChecked(this, "out", [1], opresult6336);
    var if6338 = GraceDone;
    setLineNumber(1432);    // compilenode identifier
    var call6339 = callmethodChecked(var_o, "path", [0]);
    var call6340 = callmethodChecked(var_xmodule, "dynamicCModules", [0]);
    var call6341 = callmethodChecked(call6340, "contains", [1], call6339);
    if (Grace_isTrue(call6341)) {
      setLineNumber(1433);    // compilenode string
      var string6342 = new GraceString("\");");
      var string6345 = new GraceString(" = dlmodule(\"");
      var string6348 = new GraceString("    ");
      var opresult6350 = callmethodChecked(string6348, "++", [1], var_modg);
      var opresult6352 = callmethodChecked(opresult6350, "++", [1], string6345);
      var opresult6354 = callmethodChecked(opresult6352, "++", [1], var_snm);
      var opresult6356 = callmethodChecked(opresult6354, "++", [1], string6342);
      onSelf = true;
      var call6357 = callmethodChecked(this, "out", [1], opresult6356);
      if6338 = call6357;
    } else {
      var if6358 = GraceDone;
      setLineNumber(1434);    // compilenode identifier
      var call6359 = callmethodChecked(var_o, "path", [0]);
      var call6360 = callmethodChecked(var_xmodule, "builtInModules", [0]);
      var call6361 = callmethodChecked(call6360, "contains", [1], call6359);
      if (Grace_isTrue(call6361)) {
        setLineNumber(1435);    // compilenode string
        var string6362 = new GraceString("_init();");
        var string6365 = new GraceString(" = ");
        var string6368 = new GraceString("    ");
        var opresult6370 = callmethodChecked(string6368, "++", [1], var_modg);
        var opresult6372 = callmethodChecked(opresult6370, "++", [1], string6365);
        var opresult6374 = callmethodChecked(opresult6372, "++", [1], var_modg);
        var opresult6376 = callmethodChecked(opresult6374, "++", [1], string6362);
        onSelf = true;
        var call6377 = callmethodChecked(this, "out", [1], opresult6376);
        if6358 = call6377;
      } else {
        setLineNumber(1437);    // compilenode string
        var string6378 = new GraceString(");");
        var string6381 = new GraceString(" = LOAD_MODULE(");
        var string6384 = new GraceString("    ");
        var opresult6386 = callmethodChecked(string6384, "++", [1], var_modg);
        var opresult6388 = callmethodChecked(opresult6386, "++", [1], string6381);
        var opresult6390 = callmethodChecked(opresult6388, "++", [1], var_snm);
        var opresult6392 = callmethodChecked(opresult6390, "++", [1], string6378);
        onSelf = true;
        var call6393 = callmethodChecked(this, "out", [1], opresult6392);
        if6358 = call6393;
      }
      if6338 = if6358;
    }
    setLineNumber(1440);    // compilenode string
    var string6394 = new GraceString(";");
    var string6397 = new GraceString(" = ");
    var string6400 = new GraceString("  *var_");
    var opresult6402 = callmethodChecked(string6400, "++", [1], var_nm);
    var opresult6404 = callmethodChecked(opresult6402, "++", [1], string6397);
    var opresult6406 = callmethodChecked(opresult6404, "++", [1], var_modg);
    var opresult6408 = callmethodChecked(opresult6406, "++", [1], string6394);
    onSelf = true;
    var call6409 = callmethodChecked(this, "out", [1], opresult6408);
    var if6410 = GraceDone;
    setLineNumber(1441);    // compilenode identifier
    var opresult6413 = callmethodChecked(var_compilationDepth, "==", [1], new GraceNum(1));
    if (Grace_isTrue(opresult6413)) {
      setLineNumber(1442);    // compilenode identifier
      var call6414 = callmethodChecked(var_o, "value", [0]);
      var var_methodIdent = call6414;
      setLineNumber(1443);    // compilenode identifier
      var call6415 = callmethodChecked(var_o, "line", [0]);
      var call6416 = callmethodChecked(var_methodIdent, "line:=", [1], call6415);
      setLineNumber(1444);    // compilenode identifier
      var call6417 = callmethodChecked(var_o, "linePos", [0]);
      var call6418 = callmethodChecked(var_methodIdent, "linePos:=", [1], call6417);
      setLineNumber(1445);    // compilenode identifier
      var call6420 = callmethodChecked(var_o, "name", [0]);
      var call6421 = callmethodChecked(var_ast, "signaturePart", [0]);
      var call6422 = callmethodChecked(call6421, "partName", [1], call6420);
      var array6419 = new PrimitiveGraceList([call6422]);
      setLineNumber(1446);    // compilenode identifier
      var array6423 = new PrimitiveGraceList([var_methodIdent]);
      var call6424 = callmethodChecked(var_o, "dtype", [0]);
      setLineNumber(1445);    // compilenode identifier
      var call6425 = callmethodChecked(var_ast, "methodNode", [0]);
      var call6426 = callmethodChecked(call6425, "new", [4], var_methodIdent, array6419, array6423, call6424);
      var var_accessor = call6426;
      setLineNumber(1447);    // compilenode identifier
      var call6427 = callmethodChecked(var_o, "line", [0]);
      var call6428 = callmethodChecked(var_accessor, "line:=", [1], call6427);
      setLineNumber(1448);    // compilenode identifier
      var call6429 = callmethodChecked(var_o, "linePos", [0]);
      var call6430 = callmethodChecked(var_accessor, "linePos:=", [1], call6429);
      var if6431 = GraceDone;
      setLineNumber(1449);    // compilenode identifier
      var call6432 = callmethodChecked(var_o, "isConfidential", [0]);
      if (Grace_isTrue(call6432)) {
        setLineNumber(1450);    // compilenode string
        var string6433 = new GraceString("confidential");
        var call6434 = callmethodChecked(var_ast, "identifierNode", [0]);
        var call6435 = callmethodChecked(call6434, "new", [2], string6433, GraceFalse);
        var call6436 = callmethodChecked(var_accessor, "annotations", [0]);
        var call6437 = callmethodChecked(call6436, "push", [1], call6435);
        if6431 = call6437;
      }
      if6410 = if6431;
    }
    setLineNumber(1454);    // compilenode string
    var string6438 = new GraceString("_init();");
    var string6441 = new GraceString("Object ");
    var opresult6443 = callmethodChecked(string6441, "++", [1], var_modg);
    var opresult6445 = callmethodChecked(opresult6443, "++", [1], string6438);
    var call6446 = callmethodChecked(var_globals, "push", [1], opresult6445);
    return call6446;
  };
  func6278.paramCounts = [1];
  this.methods["compileimport"] = func6278;
  func6278.definitionLine = 1415;
  func6278.definitionModule = "genc";
  setLineNumber(1456);    // compilenode method
  var func6447 = function(argcv) {    // method compilereturn(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compilereturn(1)"));
    setModuleName("genc");
    setLineNumber(1457);    // compilenode vardec
    var var_reg;
    var if6448 = GraceDone;
    setLineNumber(1459);    // compilenode block
    var block6449 = new GraceBlock(this, 1459, 0);
    block6449.real = function() {
      var string6450 = new GraceString("TailCall");
      var call6451 = callmethodChecked(var_util, "extensions", [0]);
      var call6452 = callmethodChecked(call6451, "contains", [1], string6450);
      return call6452;
    };
    setLineNumber(1458);    // compilenode string
    var string6454 = new GraceString("call");
    var call6456 = callmethodChecked(var_o, "value", [0]);
    var call6457 = callmethodChecked(call6456, "kind", [0]);
    var opresult6459 = callmethodChecked(call6457, "==", [1], string6454);
    var opresult6461 = callmethodChecked(opresult6459, "&&", [1], block6449);
    if (Grace_isTrue(opresult6461)) {
      setLineNumber(1461);    // compilenode identifier
      var call6462 = callmethodChecked(var_o, "value", [0]);
      onSelf = true;
      var call6463 = callmethodChecked(this, "compilecall", [2], call6462, GraceTrue);
      setLineNumber(1462);    // compilenode identifier
      var call6464 = callmethodChecked(var_o, "value", [0]);
      var call6465 = callmethodChecked(call6464, "register", [0]);
      var_reg = call6465;
      if6448 = GraceDone;
    } else {
      setLineNumber(1464);    // compilenode identifier
      var call6466 = callmethodChecked(var_o, "value", [0]);
      onSelf = true;
      var call6467 = callmethodChecked(this, "compilenode", [1], call6466);
      var_reg = call6467;
      if6448 = GraceDone;
    }
    var if6468 = GraceDone;
    setLineNumber(1466);    // compilenode identifier
    if (Grace_isTrue(var_inBlock)) {
      setLineNumber(1467);    // compilenode string
      var string6469 = new GraceString(");");
      var string6472 = new GraceString("  block_return(realself, ");
      var opresult6474 = callmethodChecked(string6472, "++", [1], var_reg);
      var opresult6476 = callmethodChecked(opresult6474, "++", [1], string6469);
      onSelf = true;
      var call6477 = callmethodChecked(this, "out", [1], opresult6476);
      if6468 = call6477;
    } else {
      setLineNumber(1469);    // compilenode string
      var string6478 = new GraceString(";");
      var string6481 = new GraceString("  return ");
      var opresult6483 = callmethodChecked(string6481, "++", [1], var_reg);
      var opresult6485 = callmethodChecked(opresult6483, "++", [1], string6478);
      onSelf = true;
      var call6486 = callmethodChecked(this, "out", [1], opresult6485);
      if6468 = call6486;
    }
    setLineNumber(1471);    // compilenode string
    var string6487 = new GraceString("undefined");
    var call6488 = callmethodChecked(var_o, "register:=", [1], string6487);
    return call6488;
  };
  func6447.paramCounts = [1];
  this.methods["compilereturn"] = func6447;
  func6447.definitionLine = 1456;
  func6447.definitionModule = "genc";
  setLineNumber(1473);    // compilenode method
  var func6489 = function(argcv) {    // method compilePrint(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compilePrint(1)"));
    setModuleName("genc");
    setLineNumber(1474);    // compilenode array
    var array6490 = new PrimitiveGraceList([]);
    var var_args = array6490;
    setLineNumber(1475);    // compilenode identifier
    var call6491 = callmethodChecked(var_o, "with", [0]);
    var call6492 = callmethodChecked(call6491, "first", [0]);
    var call6493 = callmethodChecked(call6492, "args", [0]);
    var block6494 = new GraceBlock(this, 1475, 1);
    setLineNumber(1);    // compilenode identifier
    block6494.real = function(var_prm) {
      setLineNumber(1476);    // compilenode identifier
      onSelf = true;
      var call6495 = callmethodChecked(this, "compilenode", [1], var_prm);
      var var_r = call6495;
      setLineNumber(1477);    // compilenode identifier
      var call6496 = callmethodChecked(var_args, "push", [1], var_r);
      return call6496;
    };
    var call6497 = callmethodChecked(var_prelude, "for()do", [1, 1], call6493, block6494);
    setLineNumber(1479);    // compilenode num
    var var_parami = new GraceNum(0);
    setLineNumber(1480);    // compilenode block
    var block6498 = new GraceBlock(this, 1480, 1);
    setLineNumber(1);    // compilenode identifier
    block6498.real = function(var_arg) {
      setLineNumber(1481);    // compilenode string
      var string6499 = new GraceString(";");
      var string6502 = new GraceString("] = ");
      var string6505 = new GraceString("  params[");
      var opresult6507 = callmethodChecked(string6505, "++", [1], var_parami);
      var opresult6509 = callmethodChecked(opresult6507, "++", [1], string6502);
      var opresult6511 = callmethodChecked(opresult6509, "++", [1], var_arg);
      var opresult6513 = callmethodChecked(opresult6511, "++", [1], string6499);
      onSelf = true;
      var call6514 = callmethodChecked(this, "out", [1], opresult6513);
      setLineNumber(1482);    // compilenode identifier
      var opresult6517 = callmethodChecked(var_parami, "+", [1], new GraceNum(1));
      var_parami = opresult6517;
      return GraceDone;
    };
    var call6518 = callmethodChecked(var_prelude, "for()do", [1, 1], var_args, block6498);
    setLineNumber(1485);    // compilenode string
    var string6519 = new GraceString(",  params);");
    var call6521 = callmethodChecked(var_args, "size", [0]);
    setLineNumber(1484);    // compilenode string
    var string6523 = new GraceString(" = gracelib_print(NULL, ");
    var string6526 = new GraceString("  Object call");
    var opresult6528 = callmethodChecked(string6526, "++", [1], var_auto__95__count);
    var opresult6530 = callmethodChecked(opresult6528, "++", [1], string6523);
    var opresult6532 = callmethodChecked(opresult6530, "++", [1], call6521);
    var opresult6534 = callmethodChecked(opresult6532, "++", [1], string6519);
    onSelf = true;
    var call6535 = callmethodChecked(this, "out", [1], opresult6534);
    setLineNumber(1486);    // compilenode string
    var string6537 = new GraceString("call");
    var opresult6539 = callmethodChecked(string6537, "++", [1], var_auto__95__count);
    var call6540 = callmethodChecked(var_o, "register:=", [1], opresult6539);
    setLineNumber(1487);    // compilenode identifier
    var opresult6543 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult6543;
    return GraceDone;
  };
  func6489.paramCounts = [1];
  this.methods["compilePrint"] = func6489;
  func6489.definitionLine = 1473;
  func6489.definitionModule = "genc";
  setLineNumber(1489);    // compilenode method
  var func6544 = function(argcv) {    // method compileNativeCode(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compileNativeCode(1)"));
    setModuleName("genc");
    var if6545 = GraceDone;
    setLineNumber(1490);    // compilenode identifier
    var call6547 = callmethodChecked(var_o, "with", [0]);
    var call6548 = callmethodChecked(call6547, "size", [0]);
    var opresult6550 = callmethodChecked(call6548, "\u2260", [1], new GraceNum(2));
    if (Grace_isTrue(opresult6550)) {
      setLineNumber(1491);    // compilenode string
      var string6551 = new GraceString("method native()code takes two arguments");
      setLineNumber(1492);    // compilenode identifier
      var call6552 = callmethodChecked(var_o, "line", [0]);
      var call6553 = callmethodChecked(var_o, "linePos", [0]);
      var call6555 = callmethodChecked(var_o, "linePos", [0]);
      var opresult6557 = callmethodChecked(call6555, "+", [1], new GraceNum(5));
      setLineNumber(1491);    // compilenode identifier
      var call6558 = callmethodChecked(var_errormessages, "syntaxError()atRange", [1, 3], string6551, call6552, call6553, opresult6557);
      if6545 = call6558;
    }
    setLineNumber(1494);    // compilenode identifier
    var call6559 = callmethodChecked(var_o, "with", [0]);
    var call6560 = callmethodChecked(call6559, "first", [0]);
    var call6561 = callmethodChecked(call6560, "args", [0]);
    var call6562 = callmethodChecked(call6561, "first", [0]);
    var var_param1 = call6562;
    var if6563 = GraceDone;
    setLineNumber(1495);    // compilenode string
    var string6564 = new GraceString("string");
    var call6566 = callmethodChecked(var_param1, "kind", [0]);
    var opresult6568 = callmethodChecked(call6566, "\u2260", [1], string6564);
    if (Grace_isTrue(opresult6568)) {
      setLineNumber(1496);    // compilenode string
      var string6569 = new GraceString("the first argument to native()code must be a string literal");
      setLineNumber(1497);    // compilenode identifier
      var call6570 = callmethodChecked(var_param1, "line", [0]);
      var call6571 = callmethodChecked(var_param1, "linePos", [0]);
      var call6572 = callmethodChecked(var_param1, "linePos", [0]);
      setLineNumber(1496);    // compilenode identifier
      var call6573 = callmethodChecked(var_errormessages, "syntaxError()atRange", [1, 3], string6569, call6570, call6571, call6572);
      if6563 = call6573;
    }
    var if6574 = GraceDone;
    setLineNumber(1499);    // compilenode string
    var string6575 = new GraceString("c");
    var call6577 = callmethodChecked(var_param1, "value", [0]);
    var opresult6579 = callmethodChecked(call6577, "\u2260", [1], string6575);
    if (Grace_isTrue(opresult6579)) {
      setLineNumber(1500);    // compilenode string
      var string6580 = new GraceString("done");
      var call6581 = callmethodChecked(var_o, "register:=", [1], string6580);
      setLineNumber(1502);    // compilenode identifier
      return var_done;
    }
    setLineNumber(1503);    // compilenode identifier
    var call6582 = callmethodChecked(var_o, "with", [0]);
    var call6583 = callmethodChecked(call6582, "second", [0]);
    var call6584 = callmethodChecked(call6583, "args", [0]);
    var call6585 = callmethodChecked(call6584, "first", [0]);
    var var_param2 = call6585;
    var if6586 = GraceDone;
    setLineNumber(1504);    // compilenode string
    var string6587 = new GraceString("string");
    var call6589 = callmethodChecked(var_param2, "kind", [0]);
    var opresult6591 = callmethodChecked(call6589, "\u2260", [1], string6587);
    if (Grace_isTrue(opresult6591)) {
      setLineNumber(1505);    // compilenode string
      var string6592 = new GraceString("the second argument to native()code must be a string literal");
      setLineNumber(1506);    // compilenode identifier
      var call6593 = callmethodChecked(var_param2, "line", [0]);
      setLineNumber(1505);    // compilenode identifier
      var call6594 = callmethodChecked(var_errormessages, "syntaxError()atLine", [1, 1], string6592, call6593);
      if6586 = call6594;
    }
    setLineNumber(1508);    // compilenode identifier
    var call6595 = callmethodChecked(var_param2, "value", [0]);
    var var_codeString = call6595;
    setLineNumber(1509);    // compilenode string
    var string6596 = new GraceString("");
    var call6598 = callmethodChecked(var_o, "line", [0]);
    var string6600 = new GraceString("   // start native code from line ");
    var opresult6602 = callmethodChecked(string6600, "++", [1], call6598);
    var opresult6604 = callmethodChecked(opresult6602, "++", [1], string6596);
    onSelf = true;
    var call6605 = callmethodChecked(this, "out", [1], opresult6604);
    setLineNumber(1510);    // compilenode string
    var string6607 = new GraceString("nat");
    var opresult6609 = callmethodChecked(string6607, "++", [1], var_auto__95__count);
    var var_reg = opresult6609;
    setLineNumber(1511);    // compilenode identifier
    var opresult6612 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult6612;
    setLineNumber(1512);    // compilenode string
    var string6613 = new GraceString(";");
    var string6616 = new GraceString("  Object ");
    var opresult6618 = callmethodChecked(string6616, "++", [1], var_reg);
    var opresult6620 = callmethodChecked(opresult6618, "++", [1], string6613);
    onSelf = true;
    var call6621 = callmethodChecked(this, "out", [1], opresult6620);
    setLineNumber(1513);    // compilenode string
    var string6622 = new GraceString("  { Object result = done;");
    onSelf = true;
    var call6623 = callmethodChecked(this, "out", [1], string6622);
    setLineNumber(1514);    // compilenode identifier
    onSelf = true;
    var call6624 = callmethodChecked(this, "out", [1], var_codeString);
    setLineNumber(1515);    // compilenode string
    var string6625 = new GraceString(" = result;");
    var string6628 = new GraceString("  ");
    var opresult6630 = callmethodChecked(string6628, "++", [1], var_reg);
    var opresult6632 = callmethodChecked(opresult6630, "++", [1], string6625);
    onSelf = true;
    var call6633 = callmethodChecked(this, "out", [1], opresult6632);
    setLineNumber(1516);    // compilenode string
    var string6634 = new GraceString("  }");
    onSelf = true;
    var call6635 = callmethodChecked(this, "out", [1], string6634);
    setLineNumber(1517);    // compilenode identifier
    var call6636 = callmethodChecked(var_o, "register:=", [1], var_reg);
    return call6636;
  };
  func6544.paramCounts = [1];
  this.methods["compileNativeCode"] = func6544;
  func6544.definitionLine = 1489;
  func6544.definitionModule = "genc";
  setLineNumber(1520);    // compilenode method
  var func6637 = function(argcv) {    // method compilenum(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compilenum(1)"));
    setModuleName("genc");
    setLineNumber(1521);    // compilenode identifier
    var call6638 = callmethodChecked(var_o, "value", [0]);
    var var_cnum = call6638;
    setLineNumber(1522);    // compilenode identifier
    var var_havedot = GraceFalse;
    setLineNumber(1523);    // compilenode block
    var block6639 = new GraceBlock(this, 1523, 1);
    setLineNumber(1);    // compilenode identifier
    block6639.real = function(var_c) {
      var if6640 = GraceDone;
      setLineNumber(1524);    // compilenode string
      var string6641 = new GraceString(".");
      var opresult6644 = callmethodChecked(var_c, "==", [1], string6641);
      if (Grace_isTrue(opresult6644)) {
        setLineNumber(1525);    // compilenode identifier
        var_havedot = GraceTrue;
        if6640 = GraceDone;
      }
      return if6640;
    };
    var call6645 = callmethodChecked(var_prelude, "for()do", [1, 1], var_cnum, block6639);
    setLineNumber(1528);    // compilenode string
    var string6646 = new GraceString(");");
    var string6649 = new GraceString(" = alloc_Float64(");
    var string6652 = new GraceString("  Object num");
    var opresult6654 = callmethodChecked(string6652, "++", [1], var_auto__95__count);
    var opresult6656 = callmethodChecked(opresult6654, "++", [1], string6649);
    var opresult6658 = callmethodChecked(opresult6656, "++", [1], var_cnum);
    var opresult6660 = callmethodChecked(opresult6658, "++", [1], string6646);
    onSelf = true;
    var call6661 = callmethodChecked(this, "out", [1], opresult6660);
    setLineNumber(1529);    // compilenode string
    var string6663 = new GraceString("num");
    var opresult6665 = callmethodChecked(string6663, "++", [1], var_auto__95__count);
    var call6666 = callmethodChecked(var_o, "register:=", [1], opresult6665);
    setLineNumber(1530);    // compilenode identifier
    var opresult6669 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
    var_auto__95__count = opresult6669;
    return GraceDone;
  };
  func6637.paramCounts = [1];
  this.methods["compilenum"] = func6637;
  func6637.definitionLine = 1520;
  func6637.definitionModule = "genc";
  setLineNumber(1532);    // compilenode method
  var func6670 = function(argcv) {    // method compilenode(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compilenode(1)"));
    setModuleName("genc");
    setLineNumber(1533);    // compilenode identifier
    var opresult6673 = callmethodChecked(var_compilationDepth, "+", [1], new GraceNum(1));
    var_compilationDepth = opresult6673;
    var if6674 = GraceDone;
    setLineNumber(1534);    // compilenode identifier
    var call6675 = callmethodChecked(var_o, "line", [0]);
    var opresult6678 = callmethodChecked(var_linenum, "\u2260", [1], call6675);
    if (Grace_isTrue(opresult6678)) {
      setLineNumber(1535);    // compilenode identifier
      var call6679 = callmethodChecked(var_o, "line", [0]);
      var_linenum = call6679;
      setLineNumber(1536);    // compilenode string
      var string6681 = new GraceString("// Begin line ");
      var opresult6683 = callmethodChecked(string6681, "++", [1], var_linenum);
      onSelf = true;
      var call6684 = callmethodChecked(this, "out", [1], opresult6683);
      setLineNumber(1537);    // compilenode string
      var string6685 = new GraceString(");");
      var string6688 = new GraceString("  setline(");
      var opresult6690 = callmethodChecked(string6688, "++", [1], var_linenum);
      var opresult6692 = callmethodChecked(opresult6690, "++", [1], string6685);
      onSelf = true;
      var call6693 = callmethodChecked(this, "out", [1], opresult6692);
      setLineNumber(1538);    // compilenode string
      var string6694 = new GraceString("  setmodule(modulename);");
      onSelf = true;
      var call6695 = callmethodChecked(this, "out", [1], string6694);
      setLineNumber(1539);    // compilenode string
      var string6696 = new GraceString("  setsource(originalSourceLines);");
      onSelf = true;
      var call6697 = callmethodChecked(this, "out", [1], string6696);
      if6674 = call6697;
    }
    setLineNumber(1541);    // compilenode identifier
    var call6698 = callmethodChecked(var_o, "kind", [0]);
    var var_oKind = call6698;
    setLineNumber(1542);    // compilenode string
    var string6699 = new GraceString(")");
    var string6702 = new GraceString(" node (depth = ");
    var string6705 = new GraceString("// starting to compile ");
    var opresult6707 = callmethodChecked(string6705, "++", [1], var_oKind);
    var opresult6709 = callmethodChecked(opresult6707, "++", [1], string6702);
    var opresult6711 = callmethodChecked(opresult6709, "++", [1], var_compilationDepth);
    var opresult6713 = callmethodChecked(opresult6711, "++", [1], string6699);
    onSelf = true;
    var call6714 = callmethodChecked(this, "out", [1], opresult6713);
    var if6715 = GraceDone;
    setLineNumber(1543);    // compilenode string
    var string6716 = new GraceString("num");
    var opresult6719 = callmethodChecked(var_oKind, "==", [1], string6716);
    if (Grace_isTrue(opresult6719)) {
      setLineNumber(1544);    // compilenode identifier
      onSelf = true;
      var call6720 = callmethodChecked(this, "compilenum", [1], var_o);
      if6715 = call6720;
    } else {
      var if6721 = GraceDone;
      setLineNumber(1545);    // compilenode string
      var string6722 = new GraceString("string");
      var opresult6725 = callmethodChecked(var_oKind, "==", [1], string6722);
      if (Grace_isTrue(opresult6725)) {
        setLineNumber(1546);    // compilenode identifier
        var call6726 = callmethodChecked(var_o, "value", [0]);
        onSelf = true;
        var call6727 = callmethodChecked(this, "escapestring2", [1], call6726);
        var call6728 = callmethodChecked(var_o, "value:=", [1], call6727);
        setLineNumber(1547);    // compilenode string
        var string6729 = new GraceString(" == NULL) {");
        var string6732 = new GraceString("  if (strlit");
        var opresult6734 = callmethodChecked(string6732, "++", [1], var_auto__95__count);
        var opresult6736 = callmethodChecked(opresult6734, "++", [1], string6729);
        onSelf = true;
        var call6737 = callmethodChecked(this, "out", [1], opresult6736);
        setLineNumber(1548);    // compilenode string
        var string6738 = new GraceString("\");");
        var call6740 = callmethodChecked(var_o, "value", [0]);
        var string6742 = new GraceString(" = alloc_String(\"");
        var string6745 = new GraceString("    strlit");
        var opresult6747 = callmethodChecked(string6745, "++", [1], var_auto__95__count);
        var opresult6749 = callmethodChecked(opresult6747, "++", [1], string6742);
        var opresult6751 = callmethodChecked(opresult6749, "++", [1], call6740);
        var opresult6753 = callmethodChecked(opresult6751, "++", [1], string6738);
        onSelf = true;
        var call6754 = callmethodChecked(this, "out", [1], opresult6753);
        setLineNumber(1549);    // compilenode string
        var string6755 = new GraceString(");");
        var string6758 = new GraceString("    gc_root(strlit");
        var opresult6760 = callmethodChecked(string6758, "++", [1], var_auto__95__count);
        var opresult6762 = callmethodChecked(opresult6760, "++", [1], string6755);
        onSelf = true;
        var call6763 = callmethodChecked(this, "out", [1], opresult6762);
        setLineNumber(1550);    // compilenode string
        var string6764 = new GraceString("  }");
        onSelf = true;
        var call6765 = callmethodChecked(this, "out", [1], string6764);
        setLineNumber(1551);    // compilenode string
        var string6766 = new GraceString(";");
        var string6769 = new GraceString("static Object strlit");
        var opresult6771 = callmethodChecked(string6769, "++", [1], var_auto__95__count);
        var opresult6773 = callmethodChecked(opresult6771, "++", [1], string6766);
        var call6774 = callmethodChecked(var_globals, "push", [1], opresult6773);
        setLineNumber(1552);    // compilenode string
        var string6776 = new GraceString("strlit");
        var opresult6778 = callmethodChecked(string6776, "++", [1], var_auto__95__count);
        var call6779 = callmethodChecked(var_o, "register:=", [1], opresult6778);
        setLineNumber(1553);    // compilenode identifier
        var opresult6782 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
        var_auto__95__count = opresult6782;
        if6721 = GraceDone;
      } else {
        var if6783 = GraceDone;
        setLineNumber(1554);    // compilenode string
        var string6784 = new GraceString("dialect");
        var opresult6787 = callmethodChecked(var_oKind, "==", [1], string6784);
        if (Grace_isTrue(opresult6787)) {
          setLineNumber(1555);    // compilenode identifier
          onSelf = true;
          var call6788 = callmethodChecked(this, "compiledialect", [1], var_o);
          if6783 = call6788;
        } else {
          var if6789 = GraceDone;
          setLineNumber(1556);    // compilenode string
          var string6790 = new GraceString("import");
          var opresult6793 = callmethodChecked(var_oKind, "==", [1], string6790);
          if (Grace_isTrue(opresult6793)) {
            setLineNumber(1557);    // compilenode identifier
            onSelf = true;
            var call6794 = callmethodChecked(this, "compileimport", [1], var_o);
            if6789 = call6794;
          } else {
            var if6795 = GraceDone;
            setLineNumber(1558);    // compilenode string
            var string6796 = new GraceString("return");
            var opresult6799 = callmethodChecked(var_oKind, "==", [1], string6796);
            if (Grace_isTrue(opresult6799)) {
              setLineNumber(1559);    // compilenode identifier
              onSelf = true;
              var call6800 = callmethodChecked(this, "compilereturn", [1], var_o);
              if6795 = call6800;
            } else {
              var if6801 = GraceDone;
              setLineNumber(1560);    // compilenode string
              var string6802 = new GraceString("generic");
              var opresult6805 = callmethodChecked(var_oKind, "==", [1], string6802);
              if (Grace_isTrue(opresult6805)) {
                setLineNumber(1561);    // compilenode identifier
                var call6806 = callmethodChecked(var_o, "value", [0]);
                onSelf = true;
                var call6807 = callmethodChecked(this, "compilenode", [1], call6806);
                var call6808 = callmethodChecked(var_o, "register:=", [1], call6807);
                if6801 = call6808;
              } else {
                var if6809 = GraceDone;
                setLineNumber(1562);    // compilenode string
                var string6810 = new GraceString("identifier");
                var opresult6813 = callmethodChecked(var_oKind, "==", [1], string6810);
                if (Grace_isTrue(opresult6813)) {
                  var if6814 = GraceDone;
                  setLineNumber(1563);    // compilenode string
                  var string6815 = new GraceString("false");
                  var call6817 = callmethodChecked(var_o, "value", [0]);
                  var opresult6819 = callmethodChecked(call6817, "==", [1], string6815);
                  var string6821 = new GraceString("true");
                  var call6823 = callmethodChecked(var_o, "value", [0]);
                  var opresult6825 = callmethodChecked(call6823, "==", [1], string6821);
                  var opresult6827 = callmethodChecked(opresult6825, "||", [1], opresult6819);
                  if (Grace_isTrue(opresult6827)) {
                    setLineNumber(1564);    // compilenode num
                    var var_val = new GraceNum(0);
                    var if6828 = GraceDone;
                    setLineNumber(1565);    // compilenode string
                    var string6829 = new GraceString("true");
                    var call6831 = callmethodChecked(var_o, "value", [0]);
                    var opresult6833 = callmethodChecked(call6831, "==", [1], string6829);
                    if (Grace_isTrue(opresult6833)) {
                      setLineNumber(1566);    // compilenode num
                      var_val = new GraceNum(1);
                      if6828 = GraceDone;
                    }
                    setLineNumber(1568);    // compilenode string
                    var string6834 = new GraceString(");");
                    var string6837 = new GraceString(" = alloc_Boolean(");
                    var opresult6839 = callmethodChecked(string6837, "++", [1], var_val);
                    var opresult6841 = callmethodChecked(opresult6839, "++", [1], string6834);
                    var string6844 = new GraceString("  Object bool");
                    var opresult6846 = callmethodChecked(string6844, "++", [1], var_auto__95__count);
                    var opresult6848 = callmethodChecked(opresult6846, "++", [1], opresult6841);
                    onSelf = true;
                    var call6849 = callmethodChecked(this, "out", [1], opresult6848);
                    setLineNumber(1569);    // compilenode string
                    var string6851 = new GraceString("bool");
                    var opresult6853 = callmethodChecked(string6851, "++", [1], var_auto__95__count);
                    var call6854 = callmethodChecked(var_o, "register:=", [1], opresult6853);
                    setLineNumber(1570);    // compilenode identifier
                    var opresult6857 = callmethodChecked(var_auto__95__count, "+", [1], new GraceNum(1));
                    var_auto__95__count = opresult6857;
                    if6814 = GraceDone;
                  } else {
                    setLineNumber(1572);    // compilenode identifier
                    onSelf = true;
                    var call6858 = callmethodChecked(this, "compileidentifier", [1], var_o);
                    if6814 = call6858;
                  }
                  if6809 = if6814;
                } else {
                  var if6859 = GraceDone;
                  setLineNumber(1574);    // compilenode string
                  var string6860 = new GraceString("defdec");
                  var opresult6863 = callmethodChecked(var_oKind, "==", [1], string6860);
                  if (Grace_isTrue(opresult6863)) {
                    setLineNumber(1575);    // compilenode identifier
                    onSelf = true;
                    var call6864 = callmethodChecked(this, "compiledefdec", [1], var_o);
                    if6859 = call6864;
                  } else {
                    var if6865 = GraceDone;
                    setLineNumber(1576);    // compilenode string
                    var string6866 = new GraceString("vardec");
                    var opresult6869 = callmethodChecked(var_oKind, "==", [1], string6866);
                    if (Grace_isTrue(opresult6869)) {
                      setLineNumber(1577);    // compilenode identifier
                      onSelf = true;
                      var call6870 = callmethodChecked(this, "compilevardec", [1], var_o);
                      if6865 = call6870;
                    } else {
                      var if6871 = GraceDone;
                      setLineNumber(1578);    // compilenode string
                      var string6872 = new GraceString("block");
                      var opresult6875 = callmethodChecked(var_oKind, "==", [1], string6872);
                      if (Grace_isTrue(opresult6875)) {
                        setLineNumber(1579);    // compilenode identifier
                        onSelf = true;
                        var call6876 = callmethodChecked(this, "compileblock", [1], var_o);
                        if6871 = call6876;
                      } else {
                        var if6877 = GraceDone;
                        setLineNumber(1580);    // compilenode string
                        var string6878 = new GraceString("method");
                        var opresult6881 = callmethodChecked(var_oKind, "==", [1], string6878);
                        if (Grace_isTrue(opresult6881)) {
                          setLineNumber(1581);    // compilenode string
                          var string6882 = new GraceString("self");
                          onSelf = true;
                          var call6883 = callmethodChecked(this, "compilemethod", [3], var_o, string6882, var_topLevelMethodPos);
                          setLineNumber(1582);    // compilenode identifier
                          var opresult6886 = callmethodChecked(var_topLevelMethodPos, "+", [1], new GraceNum(1));
                          var_topLevelMethodPos = opresult6886;
                          if6877 = GraceDone;
                        } else {
                          var if6887 = GraceDone;
                          setLineNumber(1583);    // compilenode string
                          var string6888 = new GraceString("array");
                          var opresult6891 = callmethodChecked(var_oKind, "==", [1], string6888);
                          if (Grace_isTrue(opresult6891)) {
                            setLineNumber(1584);    // compilenode identifier
                            onSelf = true;
                            var call6892 = callmethodChecked(this, "compilearray", [1], var_o);
                            if6887 = call6892;
                          } else {
                            var if6893 = GraceDone;
                            setLineNumber(1585);    // compilenode string
                            var string6894 = new GraceString("bind");
                            var opresult6897 = callmethodChecked(var_oKind, "==", [1], string6894);
                            if (Grace_isTrue(opresult6897)) {
                              setLineNumber(1586);    // compilenode identifier
                              onSelf = true;
                              var call6898 = callmethodChecked(this, "compilebind", [1], var_o);
                              if6893 = call6898;
                            } else {
                              var if6899 = GraceDone;
                              setLineNumber(1587);    // compilenode string
                              var string6900 = new GraceString("if");
                              var opresult6903 = callmethodChecked(var_oKind, "==", [1], string6900);
                              if (Grace_isTrue(opresult6903)) {
                                setLineNumber(1588);    // compilenode identifier
                                onSelf = true;
                                var call6904 = callmethodChecked(this, "compileif", [1], var_o);
                                if6899 = call6904;
                              } else {
                                var if6905 = GraceDone;
                                setLineNumber(1589);    // compilenode string
                                var string6906 = new GraceString("matchcase");
                                var opresult6909 = callmethodChecked(var_oKind, "==", [1], string6906);
                                if (Grace_isTrue(opresult6909)) {
                                  setLineNumber(1590);    // compilenode identifier
                                  onSelf = true;
                                  var call6910 = callmethodChecked(this, "compilematchcase", [1], var_o);
                                  if6905 = call6910;
                                } else {
                                  var if6911 = GraceDone;
                                  setLineNumber(1591);    // compilenode string
                                  var string6912 = new GraceString("trycatch");
                                  var opresult6915 = callmethodChecked(var_oKind, "==", [1], string6912);
                                  if (Grace_isTrue(opresult6915)) {
                                    setLineNumber(1592);    // compilenode identifier
                                    onSelf = true;
                                    var call6916 = callmethodChecked(this, "compiletrycatch", [1], var_o);
                                    if6911 = call6916;
                                  } else {
                                    var if6917 = GraceDone;
                                    setLineNumber(1593);    // compilenode string
                                    var string6918 = new GraceString("object");
                                    var opresult6921 = callmethodChecked(var_oKind, "==", [1], string6918);
                                    if (Grace_isTrue(opresult6921)) {
                                      setLineNumber(1594);    // compilenode string
                                      var string6922 = new GraceString("self");
                                      onSelf = true;
                                      var call6923 = callmethodChecked(this, "compileobject", [2], var_o, string6922);
                                      if6917 = call6923;
                                    } else {
                                      var if6924 = GraceDone;
                                      setLineNumber(1595);    // compilenode string
                                      var string6925 = new GraceString("typedec");
                                      var opresult6928 = callmethodChecked(var_oKind, "==", [1], string6925);
                                      if (Grace_isTrue(opresult6928)) {
                                        setLineNumber(1596);    // compilenode identifier
                                        onSelf = true;
                                        var call6929 = callmethodChecked(this, "compiletypedec", [1], var_o);
                                        if6924 = call6929;
                                      } else {
                                        var if6930 = GraceDone;
                                        setLineNumber(1597);    // compilenode string
                                        var string6931 = new GraceString("typeliteral");
                                        var opresult6934 = callmethodChecked(var_oKind, "==", [1], string6931);
                                        if (Grace_isTrue(opresult6934)) {
                                          setLineNumber(1598);    // compilenode identifier
                                          onSelf = true;
                                          var call6935 = callmethodChecked(this, "compiletypeliteral", [1], var_o);
                                          if6930 = call6935;
                                        } else {
                                          var if6936 = GraceDone;
                                          setLineNumber(1599);    // compilenode string
                                          var string6937 = new GraceString("member");
                                          var opresult6940 = callmethodChecked(var_oKind, "==", [1], string6937);
                                          if (Grace_isTrue(opresult6940)) {
                                            setLineNumber(1600);    // compilenode identifier
                                            onSelf = true;
                                            var call6941 = callmethodChecked(this, "compilemember", [1], var_o);
                                            if6936 = call6941;
                                          } else {
                                            var if6942 = GraceDone;
                                            setLineNumber(1601);    // compilenode string
                                            var string6943 = new GraceString("call");
                                            var opresult6946 = callmethodChecked(var_oKind, "==", [1], string6943);
                                            if (Grace_isTrue(opresult6946)) {
                                              var if6947 = GraceDone;
                                              setLineNumber(1602);    // compilenode block
                                              var block6948 = new GraceBlock(this, 1602, 0);
                                              block6948.real = function() {
                                                var string6949 = new GraceString("prelude");
                                                var call6951 = callmethodChecked(var_o, "value", [0]);
                                                var call6952 = callmethodChecked(call6951, "in", [0]);
                                                var call6953 = callmethodChecked(call6952, "value", [0]);
                                                var opresult6955 = callmethodChecked(call6953, "==", [1], string6949);
                                                return opresult6955;
                                              };
                                              var call6957 = callmethodChecked(var_o, "value", [0]);
                                              var call6958 = callmethodChecked(call6957, "isMember", [0]);
                                              var opresult6960 = callmethodChecked(call6958, "&&", [1], block6948);
                                              if (Grace_isTrue(opresult6960)) {
                                                var if6961 = GraceDone;
                                                setLineNumber(1603);    // compilenode string
                                                var string6962 = new GraceString("print");
                                                var call6964 = callmethodChecked(var_o, "nameString", [0]);
                                                var opresult6966 = callmethodChecked(call6964, "==", [1], string6962);
                                                if (Grace_isTrue(opresult6966)) {
                                                  setLineNumber(1604);    // compilenode identifier
                                                  onSelf = true;
                                                  var call6967 = callmethodChecked(this, "compilePrint", [1], var_o);
                                                  if6961 = call6967;
                                                } else {
                                                  var if6968 = GraceDone;
                                                  setLineNumber(1605);    // compilenode string
                                                  var string6969 = new GraceString("native()code");
                                                  var call6971 = callmethodChecked(var_o, "nameString", [0]);
                                                  var opresult6973 = callmethodChecked(call6971, "==", [1], string6969);
                                                  if (Grace_isTrue(opresult6973)) {
                                                    setLineNumber(1606);    // compilenode identifier
                                                    onSelf = true;
                                                    var call6974 = callmethodChecked(this, "compileNativeCode", [1], var_o);
                                                    if6968 = call6974;
                                                  } else {
                                                    setLineNumber(1608);    // compilenode identifier
                                                    onSelf = true;
                                                    var call6975 = callmethodChecked(this, "compilecall", [2], var_o, GraceFalse);
                                                    if6968 = call6975;
                                                  }
                                                  if6961 = if6968;
                                                }
                                                if6947 = if6961;
                                              } else {
                                                setLineNumber(1611);    // compilenode identifier
                                                onSelf = true;
                                                var call6976 = callmethodChecked(this, "compilecall", [2], var_o, GraceFalse);
                                                if6947 = call6976;
                                              }
                                              if6942 = if6947;
                                            } else {
                                              var if6977 = GraceDone;
                                              setLineNumber(1613);    // compilenode string
                                              var string6978 = new GraceString("op");
                                              var opresult6981 = callmethodChecked(var_oKind, "==", [1], string6978);
                                              if (Grace_isTrue(opresult6981)) {
                                                setLineNumber(1614);    // compilenode identifier
                                                onSelf = true;
                                                var call6982 = callmethodChecked(this, "compileop", [1], var_o);
                                                if6977 = call6982;
                                              }
                                              if6942 = if6977;
                                            }
                                            if6936 = if6942;
                                          }
                                          if6930 = if6936;
                                        }
                                        if6924 = if6930;
                                      }
                                      if6917 = if6924;
                                    }
                                    if6911 = if6917;
                                  }
                                  if6905 = if6911;
                                }
                                if6899 = if6905;
                              }
                              if6893 = if6899;
                            }
                            if6887 = if6893;
                          }
                          if6877 = if6887;
                        }
                        if6871 = if6877;
                      }
                      if6865 = if6871;
                    }
                    if6859 = if6865;
                  }
                  if6809 = if6859;
                }
                if6801 = if6809;
              }
              if6795 = if6801;
            }
            if6789 = if6795;
          }
          if6783 = if6789;
        }
        if6721 = if6783;
      }
      if6715 = if6721;
    }
    setLineNumber(1616);    // compilenode string
    var string6983 = new GraceString(")");
    var string6986 = new GraceString(" (depth = ");
    var call6988 = callmethodChecked(var_o, "register", [0]);
    var string6990 = new GraceString(" node returning ");
    var string6993 = new GraceString("// compiled ");
    var opresult6995 = callmethodChecked(string6993, "++", [1], var_oKind);
    var opresult6997 = callmethodChecked(opresult6995, "++", [1], string6990);
    var opresult6999 = callmethodChecked(opresult6997, "++", [1], call6988);
    var opresult7001 = callmethodChecked(opresult6999, "++", [1], string6986);
    var opresult7003 = callmethodChecked(opresult7001, "++", [1], var_compilationDepth);
    var opresult7005 = callmethodChecked(opresult7003, "++", [1], string6983);
    onSelf = true;
    var call7006 = callmethodChecked(this, "out", [1], opresult7005);
    setLineNumber(1617);    // compilenode identifier
    var diff7009 = callmethodChecked(var_compilationDepth, "-", [1], new GraceNum(1));
    var_compilationDepth = diff7009;
    setLineNumber(1618);    // compilenode identifier
    var call7010 = callmethodChecked(var_o, "register", [0]);
    return call7010;
  };
  func6670.paramCounts = [1];
  this.methods["compilenode"] = func6670;
  func6670.definitionLine = 1532;
  func6670.definitionModule = "genc";
  setLineNumber(1621);    // compilenode method
  var func7011 = function(argcv) {    // method compileDynamicModule(2)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_fnBase = arguments[curarg];
    curarg++;
    var var_buildinfo = arguments[curarg];
    curarg++;
    if (argcv[0] !== 2)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compileDynamicModule(2)"));
    setModuleName("genc");
    setLineNumber(1624);    // compilenode string
    var string7012 = new GraceString("");
    var var_dlbit = string7012;
    setLineNumber(1625);    // compilenode string
    var string7013 = new GraceString("");
    var var_exportDynamicBit = string7013;
    setLineNumber(1626);    // compilenode string
    var string7014 = new GraceString("ld -ldl -o /dev/null 2>/dev/null");
    var var_cmd = string7014;
    var if7015 = GraceDone;
    setLineNumber(1627);    // compilenode identifier
    var call7016 = callmethodChecked(var_io, "system", [1], var_cmd);
    if (Grace_isTrue(call7016)) {
      setLineNumber(1628);    // compilenode string
      var string7017 = new GraceString("-ldl");
      var_dlbit = string7017;
      if7015 = GraceDone;
    }
    setLineNumber(1630);    // compilenode string
    var string7018 = new GraceString("ld -o /dev/null --export-dynamic -lc >/dev/null 2>&1");
    var_cmd = string7018;
    var if7019 = GraceDone;
    setLineNumber(1631);    // compilenode identifier
    var call7020 = callmethodChecked(var_io, "system", [1], var_cmd);
    if (Grace_isTrue(call7020)) {
      setLineNumber(1632);    // compilenode string
      var string7021 = new GraceString("-Wl,--export-dynamic");
      var_exportDynamicBit = string7021;
      if7019 = GraceDone;
    } else {
      setLineNumber(1634);    // compilenode string
      var string7022 = new GraceString("ld -o /dev/null -undefined dynamic_lookup -lc >/dev/null 2>&1");
      var_cmd = string7022;
      var if7023 = GraceDone;
      setLineNumber(1635);    // compilenode identifier
      var call7024 = callmethodChecked(var_io, "system", [1], var_cmd);
      if (Grace_isTrue(call7024)) {
        setLineNumber(1636);    // compilenode string
        var string7025 = new GraceString("-Wl,-undefined -Wl,dynamic_lookup");
        var_exportDynamicBit = string7025;
        if7023 = GraceDone;
      }
      if7019 = if7023;
    }
    setLineNumber(1641);    // compilenode string
    var string7026 = new GraceString(".c\" ");
    var string7029 = new GraceString(" \"");
    var string7032 = new GraceString("-fPIC ");
    var opresult7034 = callmethodChecked(string7032, "++", [1], var_exportDynamicBit);
    var opresult7036 = callmethodChecked(opresult7034, "++", [1], string7029);
    var opresult7038 = callmethodChecked(opresult7036, "++", [1], var_fnBase);
    var opresult7040 = callmethodChecked(opresult7038, "++", [1], string7026);
    setLineNumber(1640);    // compilenode string
    var string7042 = new GraceString(".gso\" ");
    var string7045 = new GraceString("\" -shared -o \"");
    var call7047 = callmethodChecked(var_buildinfo, "includepath", [0]);
    var string7049 = new GraceString("\" -I\"");
    var call7051 = callmethodChecked(var_sys, "execPath", [0]);
    var string7053 = new GraceString("-I\"");
    var opresult7055 = callmethodChecked(string7053, "++", [1], call7051);
    var opresult7057 = callmethodChecked(opresult7055, "++", [1], string7049);
    var opresult7059 = callmethodChecked(opresult7057, "++", [1], call7047);
    var opresult7061 = callmethodChecked(opresult7059, "++", [1], string7045);
    var opresult7063 = callmethodChecked(opresult7061, "++", [1], var_fnBase);
    var opresult7065 = callmethodChecked(opresult7063, "++", [1], string7042);
    setLineNumber(1639);    // compilenode string
    var string7067 = new GraceString("/../include\" ");
    var call7069 = callmethodChecked(var_sys, "execPath", [0]);
    var string7071 = new GraceString("\" -I\"");
    var call7073 = callmethodChecked(var_util, "gracelibPath", [0]);
    var string7075 = new GraceString("gcc -DDYNAMIC -g -I\"");
    var opresult7077 = callmethodChecked(string7075, "++", [1], call7073);
    var opresult7079 = callmethodChecked(opresult7077, "++", [1], string7071);
    var opresult7081 = callmethodChecked(opresult7079, "++", [1], call7069);
    var opresult7083 = callmethodChecked(opresult7081, "++", [1], string7067);
    var opresult7085 = callmethodChecked(opresult7083, "++", [1], opresult7065);
    var opresult7087 = callmethodChecked(opresult7085, "++", [1], opresult7040);
    var_cmd = opresult7087;
    var if7088 = GraceDone;
    setLineNumber(1642);    // compilenode identifier
    var call7089 = callmethodChecked(var_io, "system", [1], var_cmd);
    var call7090 = callmethodChecked(call7089, "not", [0]);
    if (Grace_isTrue(call7090)) {
      setLineNumber(1643);    // compilenode string
      var string7091 = new GraceString("Fatal error: Failed compiling dynamic module.\n");
      var call7092 = callmethodChecked(var_io, "error", [0]);
      var call7093 = callmethodChecked(call7092, "write", [1], string7091);
      setLineNumber(1644);    // compilenode string
      var string7094 = new GraceString("\n");
      var string7097 = new GraceString("The failing command was\n");
      var opresult7099 = callmethodChecked(string7097, "++", [1], var_cmd);
      var opresult7101 = callmethodChecked(opresult7099, "++", [1], string7094);
      var call7102 = callmethodChecked(var_io, "error", [0]);
      var call7103 = callmethodChecked(call7102, "write", [1], opresult7101);
      setLineNumber(1645);    // compilenode identifier
      var call7104 = callmethodChecked(var_sys, "exit", [1], new GraceNum(3));
      if7088 = call7104;
    }
    return if7088;
  };
  func7011.paramCounts = [2];
  this.methods["compileDynamicModule"] = func7011;
  func7011.definitionLine = 1621;
  func7011.definitionModule = "genc";
  setLineNumber(1648);    // compilenode method
  var func7105 = function(argcv) {    // method compileStaticModule(2)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_fnBase = arguments[curarg];
    curarg++;
    var var_buildinfo = arguments[curarg];
    curarg++;
    if (argcv[0] !== 2)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compileStaticModule(2)"));
    setModuleName("genc");
    setLineNumber(1652);    // compilenode string
    var string7106 = new GraceString(".c\"");
    var string7109 = new GraceString(".gcn\" -c \"");
    var string7112 = new GraceString("\" -o \"");
    var call7114 = callmethodChecked(var_buildinfo, "includepath", [0]);
    var string7116 = new GraceString("\" -I\"");
    var call7118 = callmethodChecked(var_sys, "execPath", [0]);
    var string7120 = new GraceString("-I\"");
    var opresult7122 = callmethodChecked(string7120, "++", [1], call7118);
    var opresult7124 = callmethodChecked(opresult7122, "++", [1], string7116);
    var opresult7126 = callmethodChecked(opresult7124, "++", [1], call7114);
    var opresult7128 = callmethodChecked(opresult7126, "++", [1], string7112);
    var opresult7130 = callmethodChecked(opresult7128, "++", [1], var_fnBase);
    var opresult7132 = callmethodChecked(opresult7130, "++", [1], string7109);
    var opresult7134 = callmethodChecked(opresult7132, "++", [1], var_fnBase);
    var opresult7136 = callmethodChecked(opresult7134, "++", [1], string7106);
    setLineNumber(1651);    // compilenode string
    var string7138 = new GraceString("/../include\" ");
    var call7140 = callmethodChecked(var_sys, "execPath", [0]);
    var string7142 = new GraceString("\" -I\"");
    var call7144 = callmethodChecked(var_util, "gracelibPath", [0]);
    var string7146 = new GraceString("gcc -std=c99 -g -I\"");
    var opresult7148 = callmethodChecked(string7146, "++", [1], call7144);
    var opresult7150 = callmethodChecked(opresult7148, "++", [1], string7142);
    var opresult7152 = callmethodChecked(opresult7150, "++", [1], call7140);
    var opresult7154 = callmethodChecked(opresult7152, "++", [1], string7138);
    var opresult7156 = callmethodChecked(opresult7154, "++", [1], opresult7136);
    var var_cmd = opresult7156;
    var if7157 = GraceDone;
    setLineNumber(1656);    // compilenode identifier
    var call7158 = callmethodChecked(var_io, "system", [1], var_cmd);
    var call7159 = callmethodChecked(call7158, "not", [0]);
    if (Grace_isTrue(call7159)) {
      setLineNumber(1657);    // compilenode string
      var string7160 = new GraceString(" failed.\n");
      var string7163 = new GraceString("Fatal error: C compilation of ");
      var opresult7165 = callmethodChecked(string7163, "++", [1], var_modname);
      var opresult7167 = callmethodChecked(opresult7165, "++", [1], string7160);
      var call7168 = callmethodChecked(var_io, "error", [0]);
      var call7169 = callmethodChecked(call7168, "write", [1], opresult7167);
      setLineNumber(1658);    // compilenode string
      var string7170 = new GraceString("\n");
      var string7173 = new GraceString("The failing command was\n");
      var opresult7175 = callmethodChecked(string7173, "++", [1], var_cmd);
      var opresult7177 = callmethodChecked(opresult7175, "++", [1], string7170);
      var call7178 = callmethodChecked(var_io, "error", [0]);
      var call7179 = callmethodChecked(call7178, "write", [1], opresult7177);
      setLineNumber(1659);    // compilenode identifier
      var call7180 = callmethodChecked(var_sys, "exit", [1], new GraceNum(3));
      if7157 = call7180;
    }
    return if7157;
  };
  func7105.paramCounts = [2];
  this.methods["compileStaticModule"] = func7105;
  func7105.definitionLine = 1648;
  func7105.definitionModule = "genc";
  setLineNumber(1663);    // compilenode method
  var func7181 = function(argcv) {    // method linkExecutable(2)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_fnBase = arguments[curarg];
    curarg++;
    var var_buildinfo = arguments[curarg];
    curarg++;
    if (argcv[0] !== 2)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for linkExecutable(2)"));
    setModuleName("genc");
    setLineNumber(1664);    // compilenode string
    var string7182 = new GraceString("linking.");
    var call7183 = callmethodChecked(var_util, "log_verbose", [1], string7182);
    setLineNumber(1665);    // compilenode string
    var string7184 = new GraceString("");
    var var_dlbit = string7184;
    setLineNumber(1666);    // compilenode string
    var string7185 = new GraceString("");
    var var_exportDynamicBit = string7185;
    setLineNumber(1667);    // compilenode string
    var string7186 = new GraceString("ld -ldl -o /dev/null 2>/dev/null");
    var var_cmd = string7186;
    var if7187 = GraceDone;
    setLineNumber(1668);    // compilenode identifier
    var call7188 = callmethodChecked(var_io, "system", [1], var_cmd);
    if (Grace_isTrue(call7188)) {
      setLineNumber(1669);    // compilenode string
      var string7189 = new GraceString("-ldl");
      var_dlbit = string7189;
      if7187 = GraceDone;
    }
    setLineNumber(1671);    // compilenode string
    var string7190 = new GraceString("ld -o /dev/null --export-dynamic -lc >/dev/null 2>&1");
    var_cmd = string7190;
    var if7191 = GraceDone;
    setLineNumber(1672);    // compilenode identifier
    var call7192 = callmethodChecked(var_io, "system", [1], var_cmd);
    if (Grace_isTrue(call7192)) {
      setLineNumber(1673);    // compilenode string
      var string7193 = new GraceString("-Wl,--export-dynamic");
      var_exportDynamicBit = string7193;
      if7191 = GraceDone;
    }
    setLineNumber(1675);    // compilenode string
    var string7194 = new GraceString(".gcn\" ");
    var string7197 = new GraceString(" \"");
    var string7200 = new GraceString("\" -fPIC ");
    var string7203 = new GraceString("gcc -g -o \"");
    var opresult7205 = callmethodChecked(string7203, "++", [1], var_fnBase);
    var opresult7207 = callmethodChecked(opresult7205, "++", [1], string7200);
    var opresult7209 = callmethodChecked(opresult7207, "++", [1], var_exportDynamicBit);
    var opresult7211 = callmethodChecked(opresult7209, "++", [1], string7197);
    var opresult7213 = callmethodChecked(opresult7211, "++", [1], var_fnBase);
    var opresult7215 = callmethodChecked(opresult7213, "++", [1], string7194);
    var_cmd = opresult7215;
    var if7216 = GraceDone;
    setLineNumber(1677);    // compilenode string
    var string7217 = new GraceString("/gracelib.o");
    var call7219 = callmethodChecked(var_util, "gracelibPath", [0]);
    var string7221 = new GraceString("");
    var opresult7223 = callmethodChecked(string7221, "++", [1], call7219);
    var opresult7225 = callmethodChecked(opresult7223, "++", [1], string7217);
    var call7226 = callmethodChecked(var_io, "exists", [1], opresult7225);
    if (Grace_isTrue(call7226)) {
      setLineNumber(1678);    // compilenode string
      var string7227 = new GraceString("/gracelib.o\" ");
      var call7229 = callmethodChecked(var_util, "gracelibPath", [0]);
      var string7231 = new GraceString("\"");
      var opresult7233 = callmethodChecked(string7231, "++", [1], call7229);
      var opresult7235 = callmethodChecked(opresult7233, "++", [1], string7227);
      var opresult7238 = callmethodChecked(var_cmd, "++", [1], opresult7235);
      var_cmd = opresult7238;
      if7216 = GraceDone;
    } else {
      var if7239 = GraceDone;
      setLineNumber(1679);    // compilenode string
      var string7240 = new GraceString("/gracelib.o");
      var call7242 = callmethodChecked(var_buildinfo, "objectpath", [0]);
      var string7244 = new GraceString("");
      var opresult7246 = callmethodChecked(string7244, "++", [1], call7242);
      var opresult7248 = callmethodChecked(opresult7246, "++", [1], string7240);
      var call7249 = callmethodChecked(var_io, "exists", [1], opresult7248);
      if (Grace_isTrue(call7249)) {
        setLineNumber(1680);    // compilenode string
        var string7250 = new GraceString("/gracelib.o\" ");
        var call7252 = callmethodChecked(var_buildinfo, "objectpath", [0]);
        var string7254 = new GraceString("\"");
        var opresult7256 = callmethodChecked(string7254, "++", [1], call7252);
        var opresult7258 = callmethodChecked(opresult7256, "++", [1], string7250);
        var opresult7261 = callmethodChecked(var_cmd, "++", [1], opresult7258);
        var_cmd = opresult7261;
        if7239 = GraceDone;
      } else {
        var if7262 = GraceDone;
        setLineNumber(1681);    // compilenode string
        var string7263 = new GraceString("/gracelib.o");
        var call7265 = callmethodChecked(var_util, "outDir", [0]);
        var string7267 = new GraceString("");
        var opresult7269 = callmethodChecked(string7267, "++", [1], call7265);
        var opresult7271 = callmethodChecked(opresult7269, "++", [1], string7263);
        var call7272 = callmethodChecked(var_io, "exists", [1], opresult7271);
        if (Grace_isTrue(call7272)) {
          setLineNumber(1682);    // compilenode string
          var string7273 = new GraceString("/gracelib.o\" ");
          var call7275 = callmethodChecked(var_util, "outDir", [0]);
          var string7277 = new GraceString("\"");
          var opresult7279 = callmethodChecked(string7277, "++", [1], call7275);
          var opresult7281 = callmethodChecked(opresult7279, "++", [1], string7273);
          var opresult7284 = callmethodChecked(var_cmd, "++", [1], opresult7281);
          var_cmd = opresult7284;
          if7262 = GraceDone;
        } else {
          var if7285 = GraceDone;
          setLineNumber(1683);    // compilenode string
          var string7286 = new GraceString("/gracelib.o");
          var call7288 = callmethodChecked(var_util, "execDir", [0]);
          var string7290 = new GraceString("");
          var opresult7292 = callmethodChecked(string7290, "++", [1], call7288);
          var opresult7294 = callmethodChecked(opresult7292, "++", [1], string7286);
          var call7295 = callmethodChecked(var_io, "exists", [1], opresult7294);
          if (Grace_isTrue(call7295)) {
            setLineNumber(1684);    // compilenode string
            var string7296 = new GraceString("/gracelib.o\" ");
            var call7298 = callmethodChecked(var_util, "execDir", [0]);
            var string7300 = new GraceString("\"");
            var opresult7302 = callmethodChecked(string7300, "++", [1], call7298);
            var opresult7304 = callmethodChecked(opresult7302, "++", [1], string7296);
            var opresult7307 = callmethodChecked(var_cmd, "++", [1], opresult7304);
            var_cmd = opresult7307;
            if7285 = GraceDone;
          } else {
            setLineNumber(1686);    // compilenode string
            var string7308 = new GraceString("Unable to link: can't find file gracelib.o\n");
            var call7309 = callmethodChecked(var_io, "error", [0]);
            var call7310 = callmethodChecked(call7309, "write", [1], string7308);
            setLineNumber(1687);    // compilenode identifier
            var call7311 = callmethodChecked(var_sys, "exit", [1], new GraceNum(3));
            if7285 = call7311;
          }
          if7262 = if7285;
        }
        if7239 = if7262;
      }
      if7216 = if7239;
    }
    setLineNumber(1691);    // compilenode identifier
    var call7312 = callmethodChecked(var_imports, "linkfiles", [0]);
    var block7313 = new GraceBlock(this, 1691, 1);
    setLineNumber(1);    // compilenode identifier
    block7313.real = function(var_fn) {
      setLineNumber(1692);    // compilenode string
      var string7314 = new GraceString("\"");
      var string7317 = new GraceString(" \"");
      var string7320 = new GraceString("");
      var opresult7322 = callmethodChecked(string7320, "++", [1], var_cmd);
      var opresult7324 = callmethodChecked(opresult7322, "++", [1], string7317);
      var opresult7326 = callmethodChecked(opresult7324, "++", [1], var_fn);
      var opresult7328 = callmethodChecked(opresult7326, "++", [1], string7314);
      var_cmd = opresult7328;
      return GraceDone;
    };
    var call7329 = callmethodChecked(var_prelude, "for()do", [1, 1], call7312, block7313);
    setLineNumber(1694);    // compilenode string
    var string7330 = new GraceString("");
    var string7333 = new GraceString(" -lm ");
    var string7336 = new GraceString("");
    var opresult7338 = callmethodChecked(string7336, "++", [1], var_cmd);
    var opresult7340 = callmethodChecked(opresult7338, "++", [1], string7333);
    var opresult7342 = callmethodChecked(opresult7340, "++", [1], var_dlbit);
    var opresult7344 = callmethodChecked(opresult7342, "++", [1], string7330);
    var_cmd = opresult7344;
    var if7345 = GraceDone;
    setLineNumber(1695);    // compilenode identifier
    var call7346 = callmethodChecked(var_io, "system", [1], var_cmd);
    var call7347 = callmethodChecked(call7346, "not", [0]);
    if (Grace_isTrue(call7347)) {
      setLineNumber(1696);    // compilenode string
      var string7348 = new GraceString(".\n");
      var string7351 = new GraceString("Fatal Error: Failed linking executable for ");
      var opresult7353 = callmethodChecked(string7351, "++", [1], var_modname);
      var opresult7355 = callmethodChecked(opresult7353, "++", [1], string7348);
      var call7356 = callmethodChecked(var_io, "error", [0]);
      var call7357 = callmethodChecked(call7356, "write", [1], opresult7355);
      setLineNumber(1697);    // compilenode string
      var string7358 = new GraceString("\n");
      var string7361 = new GraceString("The failing command was\n");
      var opresult7363 = callmethodChecked(string7361, "++", [1], var_cmd);
      var opresult7365 = callmethodChecked(opresult7363, "++", [1], string7358);
      var call7366 = callmethodChecked(var_io, "error", [0]);
      var call7367 = callmethodChecked(call7366, "write", [1], opresult7365);
      setLineNumber(1698);    // compilenode identifier
      var call7368 = callmethodChecked(var_sys, "exit", [1], new GraceNum(3));
      if7345 = call7368;
    }
    return if7345;
  };
  func7181.paramCounts = [2];
  this.methods["linkExecutable"] = func7181;
  func7181.definitionLine = 1663;
  func7181.definitionModule = "genc";
  setLineNumber(1702);    // compilenode method
  var func7369 = function(argcv) {    // method implementAliasesAndExclusionsFor(1)inheriting(2)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for implementAliasesAndExclusionsFor (arg list 1) of implementAliasesAndExclusionsFor(1)inheriting(2)"));
    var var_e = arguments[curarg];
    curarg++;
    var var_superobj = arguments[curarg];
    curarg++;
    if (argcv[1] !== 2)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for inheriting (arg list 2) of implementAliasesAndExclusionsFor(1)inheriting(2)"));
    setModuleName("genc");
    var if7370 = GraceDone;
    setLineNumber(1706);    // compilenode identifier
    var call7371 = callmethodChecked(var_e, "exclusions", [0]);
    var call7372 = callmethodChecked(call7371, "isEmpty", [0]);
    var call7374 = callmethodChecked(var_e, "aliases", [0]);
    var call7375 = callmethodChecked(call7374, "isEmpty", [0]);
    var opresult7377 = callmethodChecked(call7375, "&&", [1], call7372);
    if (Grace_isTrue(opresult7377)) {
      return var_done;
    }
    setLineNumber(1709);    // compilenode string
    var string7378 = new GraceString("by the C code generator.");
    setLineNumber(1708);    // compilenode string
    var string7380 = new GraceString("I'm sorry, aliases and exclusions are not yet supported ");
    var opresult7382 = callmethodChecked(string7380, "++", [1], string7378);
    setLineNumber(1709);    // compilenode identifier
    var call7383 = callmethodChecked(var_e, "line", [0]);
    setLineNumber(1708);    // compilenode identifier
    var call7384 = callmethodChecked(var_errormessages, "error()atLine", [1, 1], opresult7382, call7383);
    return call7384;
  };
  func7369.paramCounts = [1, 2];
  this.methods["implementAliasesAndExclusionsFor()inheriting"] = func7369;
  func7369.definitionLine = 1702;
  func7369.definitionModule = "genc";
  setLineNumber(1712);    // compilenode method
  var func7385 = function(argcv) {    // method compile(5)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_moduleObject = arguments[curarg];
    curarg++;
    var var_outfile = arguments[curarg];
    curarg++;
    var var_rm = arguments[curarg];
    curarg++;
    var var_bt = arguments[curarg];
    curarg++;
    var var_buildinfo = arguments[curarg];
    curarg++;
    if (argcv[0] !== 5)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compile(5)"));
    setModuleName("genc");
    setLineNumber(1713);    // compilenode string
    var string7386 = new GraceString("generating C code.");
    var call7387 = callmethodChecked(var_util, "log_verbose", [1], string7386);
    setLineNumber(1714);    // compilenode identifier
    var call7388 = callmethodChecked(var_sys, "argv", [0]);
    var var_argv = call7388;
    setLineNumber(1715);    // compilenode vardec
    var var_cmd;
    setLineNumber(1716);    // compilenode identifier
    var call7389 = callmethodChecked(var_moduleObject, "value", [0]);
    var_values = call7389;
    var if7390 = GraceDone;
    setLineNumber(1717);    // compilenode string
    var string7391 = new GraceString("ExtendedLineups");
    var call7392 = callmethodChecked(var_util, "extensions", [0]);
    var call7393 = callmethodChecked(call7392, "contains", [1], string7391);
    if (Grace_isTrue(call7393)) {
      setLineNumber(1718);    // compilenode string
      var string7394 = new GraceString("alloc_BuiltinList()");
      var_bracketConstructor = string7394;
      if7390 = GraceDone;
    }
    setLineNumber(1720);    // compilenode identifier
    onSelf = true;
    var call7395 = callmethodChecked(this, "countbindings", [1], var_values);
    var opresult7398 = callmethodChecked(new GraceNum(2), "+", [1], call7395);
    var var_nummethods = opresult7398;
    setLineNumber(1721);    // compilenode block
    var block7399 = new GraceBlock(this, 1721, 1);
    setLineNumber(1);    // compilenode identifier
    block7399.real = function(var_v) {
      var if7400 = GraceDone;
      setLineNumber(1722);    // compilenode string
      var string7401 = new GraceString("vardec");
      var call7403 = callmethodChecked(var_v, "kind", [0]);
      var opresult7405 = callmethodChecked(call7403, "==", [1], string7401);
      if (Grace_isTrue(opresult7405)) {
        setLineNumber(1723);    // compilenode identifier
        var opresult7408 = callmethodChecked(var_nummethods, "+", [1], new GraceNum(1));
        var_nummethods = opresult7408;
        if7400 = GraceDone;
      } else {
        var if7409 = GraceDone;
        setLineNumber(1724);    // compilenode string
        var string7410 = new GraceString("method");
        var call7412 = callmethodChecked(var_v, "kind", [0]);
        var opresult7414 = callmethodChecked(call7412, "==", [1], string7410);
        if (Grace_isTrue(opresult7414)) {
          setLineNumber(1725);    // compilenode identifier
          var opresult7417 = callmethodChecked(var_nummethods, "+", [1], new GraceNum(1));
          var_nummethods = opresult7417;
          var if7418 = GraceDone;
          setLineNumber(1726);    // compilenode identifier
          var call7419 = callmethodChecked(var_v, "isFresh", [0]);
          if (Grace_isTrue(call7419)) {
            setLineNumber(1727);    // compilenode identifier
            var opresult7422 = callmethodChecked(var_nummethods, "+", [1], new GraceNum(1));
            var_nummethods = opresult7422;
            if7418 = GraceDone;
          }
          if7409 = if7418;
        }
        if7400 = if7409;
      }
      return if7400;
    };
    var call7423 = callmethodChecked(var_prelude, "for()do", [1, 1], var_values, block7399);
    setLineNumber(1731);    // compilenode identifier
    var call7424 = callmethodChecked(var_moduleObject, "name", [0]);
    var_modname = call7424;
    setLineNumber(1732);    // compilenode identifier
    onSelf = true;
    var call7425 = callmethodChecked(this, "escapeident", [1], var_modname);
    var_escmodname = call7425;
    setLineNumber(1733);    // compilenode identifier
    var_runmode = var_rm;
    setLineNumber(1734);    // compilenode identifier
    var_buildtype = var_bt;
    setLineNumber(1735);    // compilenode string
    var string7426 = new GraceString("#include <gracelib.h>");
    onSelf = true;
    var call7427 = callmethodChecked(this, "outprint", [1], string7426);
    setLineNumber(1736);    // compilenode string
    var string7428 = new GraceString("#include <stdlib.h>");
    onSelf = true;
    var call7429 = callmethodChecked(this, "outprint", [1], string7428);
    setLineNumber(1737);    // compilenode string
    var string7430 = new GraceString("#include <math.h>");
    onSelf = true;
    var call7431 = callmethodChecked(this, "outprint", [1], string7430);
    setLineNumber(1738);    // compilenode string
    var string7432 = new GraceString("#include <float.h>");
    onSelf = true;
    var call7433 = callmethodChecked(this, "outprint", [1], string7432);
    var if7434 = GraceDone;
    setLineNumber(1739);    // compilenode string
    var string7435 = new GraceString("NoMain");
    var call7436 = callmethodChecked(var_util, "extensions", [0]);
    var call7437 = callmethodChecked(call7436, "contains", [1], string7435);
    var call7438 = callmethodChecked(call7437, "prefix!", [0]);
    if (Grace_isTrue(call7438)) {
      setLineNumber(1740);    // compilenode string
      var string7439 = new GraceString("#ifndef __CYGWIN__");
      onSelf = true;
      var call7440 = callmethodChecked(this, "outprint", [1], string7439);
      setLineNumber(1741);    // compilenode string
      var string7441 = new GraceString("#pragma weak main");
      onSelf = true;
      var call7442 = callmethodChecked(this, "outprint", [1], string7441);
      setLineNumber(1742);    // compilenode string
      var string7443 = new GraceString("#endif");
      onSelf = true;
      var call7444 = callmethodChecked(this, "outprint", [1], string7443);
      if7434 = call7444;
    }
    setLineNumber(1744);    // compilenode string
    var string7445 = new GraceString("\";");
    var call7447 = callmethodChecked(var_buildinfo, "gitrevision", [0]);
    var string7449 = new GraceString("static char compilerRevision[] = \"");
    var opresult7451 = callmethodChecked(string7449, "++", [1], call7447);
    var opresult7453 = callmethodChecked(opresult7451, "++", [1], string7445);
    onSelf = true;
    var call7454 = callmethodChecked(this, "outprint", [1], opresult7453);
    setLineNumber(1745);    // compilenode string
    var string7455 = new GraceString("static Object undefined;");
    onSelf = true;
    var call7456 = callmethodChecked(this, "outprint", [1], string7455);
    setLineNumber(1746);    // compilenode string
    var string7457 = new GraceString("extern Object done;");
    onSelf = true;
    var call7458 = callmethodChecked(this, "outprint", [1], string7457);
    setLineNumber(1747);    // compilenode string
    var string7459 = new GraceString("extern Object _prelude;");
    onSelf = true;
    var call7460 = callmethodChecked(this, "outprint", [1], string7459);
    setLineNumber(1748);    // compilenode string
    var string7461 = new GraceString("extern Object ObjectType;");
    onSelf = true;
    var call7462 = callmethodChecked(this, "outprint", [1], string7461);
    setLineNumber(1749);    // compilenode string
    var string7463 = new GraceString("extern Object String;");
    onSelf = true;
    var call7464 = callmethodChecked(this, "outprint", [1], string7463);
    setLineNumber(1750);    // compilenode string
    var string7465 = new GraceString("extern Object Number;");
    onSelf = true;
    var call7466 = callmethodChecked(this, "outprint", [1], string7465);
    setLineNumber(1751);    // compilenode string
    var string7467 = new GraceString("extern Object Boolean;");
    onSelf = true;
    var call7468 = callmethodChecked(this, "outprint", [1], string7467);
    setLineNumber(1752);    // compilenode string
    var string7469 = new GraceString("extern Object Dynamic;");
    onSelf = true;
    var call7470 = callmethodChecked(this, "outprint", [1], string7469);
    setLineNumber(1753);    // compilenode string
    var string7471 = new GraceString("extern Object Unknown;");
    onSelf = true;
    var call7472 = callmethodChecked(this, "outprint", [1], string7471);
    setLineNumber(1754);    // compilenode string
    var string7473 = new GraceString("extern Object Block;");
    onSelf = true;
    var call7474 = callmethodChecked(this, "outprint", [1], string7473);
    setLineNumber(1755);    // compilenode string
    var string7475 = new GraceString("extern Object Done;");
    onSelf = true;
    var call7476 = callmethodChecked(this, "outprint", [1], string7475);
    setLineNumber(1756);    // compilenode string
    var string7477 = new GraceString("extern Object Type;");
    onSelf = true;
    var call7478 = callmethodChecked(this, "outprint", [1], string7477);
    setLineNumber(1757);    // compilenode string
    var string7479 = new GraceString("extern Object GraceDefaultObject;");
    onSelf = true;
    var call7480 = callmethodChecked(this, "outprint", [1], string7479);
    setLineNumber(1758);    // compilenode string
    var string7481 = new GraceString("extern Object sourceObject;");
    onSelf = true;
    var call7482 = callmethodChecked(this, "outprint", [1], string7481);
    setLineNumber(1759);    // compilenode string
    var string7483 = new GraceString("static Object type_Object;");
    onSelf = true;
    var call7484 = callmethodChecked(this, "outprint", [1], string7483);
    setLineNumber(1760);    // compilenode string
    var string7485 = new GraceString("static Object type_String;");
    onSelf = true;
    var call7486 = callmethodChecked(this, "outprint", [1], string7485);
    setLineNumber(1761);    // compilenode string
    var string7487 = new GraceString("static Object type_Number;");
    onSelf = true;
    var call7488 = callmethodChecked(this, "outprint", [1], string7487);
    setLineNumber(1762);    // compilenode string
    var string7489 = new GraceString("static Object type_Boolean;");
    onSelf = true;
    var call7490 = callmethodChecked(this, "outprint", [1], string7489);
    setLineNumber(1763);    // compilenode string
    var string7491 = new GraceString("static Object type_Block;");
    onSelf = true;
    var call7492 = callmethodChecked(this, "outprint", [1], string7491);
    setLineNumber(1764);    // compilenode string
    var string7493 = new GraceString("static Object type_Done;");
    onSelf = true;
    var call7494 = callmethodChecked(this, "outprint", [1], string7493);
    setLineNumber(1765);    // compilenode string
    var string7495 = new GraceString("static Object type_Type;");
    onSelf = true;
    var call7496 = callmethodChecked(this, "outprint", [1], string7495);
    setLineNumber(1766);    // compilenode string
    var string7497 = new GraceString("static Object argv;");
    onSelf = true;
    var call7498 = callmethodChecked(this, "outprint", [1], string7497);
    setLineNumber(1767);    // compilenode string
    var string7499 = new GraceString("static Object emptyclosure;");
    onSelf = true;
    var call7500 = callmethodChecked(this, "outprint", [1], string7499);
    setLineNumber(1768);    // compilenode string
    var string7501 = new GraceString("static Object prelude;");
    onSelf = true;
    var call7502 = callmethodChecked(this, "outprint", [1], string7501);
    setLineNumber(1769);    // compilenode string
    var string7503 = new GraceString("static int isTailObject = 0;");
    onSelf = true;
    var call7504 = callmethodChecked(this, "outprint", [1], string7503);
    setLineNumber(1770);    // compilenode string
    var string7505 = new GraceString("static Object inheritingObject = NULL;");
    onSelf = true;
    var call7506 = callmethodChecked(this, "outprint", [1], string7505);
    setLineNumber(1771);    // compilenode string
    var string7507 = new GraceString("\";");
    var string7510 = new GraceString("static const char modulename[] = \"");
    var opresult7512 = callmethodChecked(string7510, "++", [1], var_modname);
    var opresult7514 = callmethodChecked(opresult7512, "++", [1], string7507);
    onSelf = true;
    var call7515 = callmethodChecked(this, "outprint", [1], opresult7514);
    setLineNumber(1772);    // compilenode string
    var string7516 = new GraceString("Object module_StandardPrelude_init();");
    onSelf = true;
    var call7517 = callmethodChecked(this, "outprint", [1], string7516);
    setLineNumber(1773);    // compilenode string
    var string7518 = new GraceString("static char *originalSourceLines[] = {");
    onSelf = true;
    var call7519 = callmethodChecked(this, "outprint", [1], string7518);
    setLineNumber(1774);    // compilenode identifier
    var call7520 = callmethodChecked(var_util, "cLines", [0]);
    var block7521 = new GraceBlock(this, 1774, 1);
    setLineNumber(1);    // compilenode identifier
    block7521.real = function(var_l) {
      setLineNumber(1775);    // compilenode string
      var string7522 = new GraceString("\",");
      var string7525 = new GraceString("  \"");
      var opresult7527 = callmethodChecked(string7525, "++", [1], var_l);
      var opresult7529 = callmethodChecked(opresult7527, "++", [1], string7522);
      onSelf = true;
      var call7530 = callmethodChecked(this, "outprint", [1], opresult7529);
      return call7530;
    };
    var call7531 = callmethodChecked(var_prelude, "for()do", [1, 1], call7520, block7521);
    setLineNumber(1777);    // compilenode string
    var string7532 = new GraceString("  NULL\n};");
    onSelf = true;
    var call7533 = callmethodChecked(this, "outprint", [1], string7532);
    setLineNumber(1778);    // compilenode string
    var string7534 = new GraceString("String");
    var call7535 = callmethodChecked(var_topLevelTypes, "put", [2], string7534, GraceTrue);
    setLineNumber(1779);    // compilenode string
    var string7536 = new GraceString("Number");
    var call7537 = callmethodChecked(var_topLevelTypes, "put", [2], string7536, GraceTrue);
    setLineNumber(1780);    // compilenode string
    var string7538 = new GraceString("Boolean");
    var call7539 = callmethodChecked(var_topLevelTypes, "put", [2], string7538, GraceTrue);
    setLineNumber(1781);    // compilenode string
    var string7540 = new GraceString("Done");
    var call7541 = callmethodChecked(var_topLevelTypes, "put", [2], string7540, GraceTrue);
    setLineNumber(1782);    // compilenode string
    var string7542 = new GraceString("Block");
    var call7543 = callmethodChecked(var_topLevelTypes, "put", [2], string7542, GraceTrue);
    setLineNumber(1783);    // compilenode string
    var string7544 = new GraceString("_init() {");
    var string7547 = new GraceString("Object module_");
    var opresult7549 = callmethodChecked(string7547, "++", [1], var_escmodname);
    var opresult7551 = callmethodChecked(opresult7549, "++", [1], string7544);
    onSelf = true;
    var call7552 = callmethodChecked(this, "out", [1], opresult7551);
    setLineNumber(1784);    // compilenode string
    var string7553 = new GraceString("  int flags = 0;");
    onSelf = true;
    var call7554 = callmethodChecked(this, "out", [1], string7553);
    setLineNumber(1785);    // compilenode string
    var string7555 = new GraceString("  int frame = gc_frame_new();");
    onSelf = true;
    var call7556 = callmethodChecked(this, "out", [1], string7555);
    setLineNumber(1786);    // compilenode string
    var string7557 = new GraceString(");");
    var string7560 = new GraceString(", ");
    var string7563 = new GraceString("  Object self = alloc_obj2(");
    var opresult7565 = callmethodChecked(string7563, "++", [1], var_nummethods);
    var opresult7567 = callmethodChecked(opresult7565, "++", [1], string7560);
    var opresult7569 = callmethodChecked(opresult7567, "++", [1], var_nummethods);
    var opresult7571 = callmethodChecked(opresult7569, "++", [1], string7557);
    onSelf = true;
    var call7572 = callmethodChecked(this, "out", [1], opresult7571);
    setLineNumber(1787);    // compilenode string
    var string7573 = new GraceString("  self->class->definitionModule = modulename;");
    onSelf = true;
    var call7574 = callmethodChecked(this, "out", [1], string7573);
    setLineNumber(1788);    // compilenode string
    var string7575 = new GraceString("  gc_root(self);");
    onSelf = true;
    var call7576 = callmethodChecked(this, "out", [1], string7575);
    var if7577 = GraceDone;
    setLineNumber(1789);    // compilenode string
    var string7578 = new GraceString("NativePrelude");
    var call7579 = callmethodChecked(var_util, "extensions", [0]);
    var call7580 = callmethodChecked(call7579, "contains", [1], string7578);
    if (Grace_isTrue(call7580)) {
      setLineNumber(1790);    // compilenode string
      var string7581 = new GraceString("  prelude = grace_prelude();");
      onSelf = true;
      var call7582 = callmethodChecked(this, "out", [1], string7581);
      setLineNumber(1791);    // compilenode string
      var string7583 = new GraceString("  adddatum2(self, grace_prelude(), 0);");
      onSelf = true;
      var call7584 = callmethodChecked(this, "out", [1], string7583);
      setLineNumber(1792);    // compilenode string
      var string7585 = new GraceString("  Object ObjectType = alloc_ObjectType();");
      onSelf = true;
      var call7586 = callmethodChecked(this, "out", [1], string7585);
      if7577 = call7586;
    } else {
      setLineNumber(1794);    // compilenode string
      var string7587 = new GraceString("  prelude = module_StandardPrelude_init();");
      onSelf = true;
      var call7588 = callmethodChecked(this, "out", [1], string7587);
      setLineNumber(1795);    // compilenode string
      var string7589 = new GraceString("  adddatum2(self, prelude, 0);");
      onSelf = true;
      var call7590 = callmethodChecked(this, "out", [1], string7589);
      if7577 = call7590;
    }
    setLineNumber(1797);    // compilenode string
    var string7591 = new GraceString("  addmethod2(self, \"outer\", &grace_userobj_outer);");
    onSelf = true;
    var call7592 = callmethodChecked(this, "out", [1], string7591);
    setLineNumber(1798);    // compilenode string
    var string7593 = new GraceString("  setline(1);");
    onSelf = true;
    var call7594 = callmethodChecked(this, "out", [1], string7593);
    setLineNumber(1799);    // compilenode string
    var string7595 = new GraceString("  setmodule(modulename);");
    onSelf = true;
    var call7596 = callmethodChecked(this, "out", [1], string7595);
    setLineNumber(1800);    // compilenode string
    var string7597 = new GraceString("  setsource(originalSourceLines);");
    onSelf = true;
    var call7598 = callmethodChecked(this, "out", [1], string7597);
    setLineNumber(1801);    // compilenode string
    var string7599 = new GraceString(">");
    var string7602 = new GraceString("Module<");
    var opresult7604 = callmethodChecked(string7602, "++", [1], var_modname);
    var opresult7606 = callmethodChecked(opresult7604, "++", [1], string7599);
    var var_modn = opresult7606;
    setLineNumber(1802);    // compilenode string
    var string7607 = new GraceString("\");");
    var string7610 = new GraceString("  setclassname(self, \"");
    var opresult7612 = callmethodChecked(string7610, "++", [1], var_modn);
    var opresult7614 = callmethodChecked(opresult7612, "++", [1], string7607);
    onSelf = true;
    var call7615 = callmethodChecked(this, "out", [1], opresult7614);
    setLineNumber(1803);    // compilenode string
    var string7616 = new GraceString("  Object *var_MatchFailed = alloc_var();");
    onSelf = true;
    var call7617 = callmethodChecked(this, "out", [1], string7616);
    setLineNumber(1804);    // compilenode string
    var string7618 = new GraceString("  *var_MatchFailed = alloc_MatchFailed();");
    onSelf = true;
    var call7619 = callmethodChecked(this, "out", [1], string7618);
    setLineNumber(1805);    // compilenode string
    var string7620 = new GraceString("  Object *var_noSuchValue = alloc_var();");
    onSelf = true;
    var call7621 = callmethodChecked(this, "out", [1], string7620);
    setLineNumber(1806);    // compilenode string
    var string7622 = new GraceString("  *var_noSuchValue = done;");
    onSelf = true;
    var call7623 = callmethodChecked(this, "out", [1], string7622);
    setLineNumber(1807);    // compilenode string
    var string7624 = new GraceString("  Object *var_done = alloc_var();");
    onSelf = true;
    var call7625 = callmethodChecked(this, "out", [1], string7624);
    setLineNumber(1808);    // compilenode string
    var string7626 = new GraceString("  *var_done = done;");
    onSelf = true;
    var call7627 = callmethodChecked(this, "out", [1], string7626);
    setLineNumber(1809);    // compilenode string
    var string7628 = new GraceString("  Object *var_Object = alloc_var();");
    onSelf = true;
    var call7629 = callmethodChecked(this, "out", [1], string7628);
    setLineNumber(1810);    // compilenode string
    var string7630 = new GraceString("  *var_Object = ObjectType;");
    onSelf = true;
    var call7631 = callmethodChecked(this, "out", [1], string7630);
    setLineNumber(1811);    // compilenode string
    var string7632 = new GraceString("  type_Object = ObjectType;");
    onSelf = true;
    var call7633 = callmethodChecked(this, "out", [1], string7632);
    setLineNumber(1812);    // compilenode string
    var string7634 = new GraceString("  Object *var_String = alloc_var();");
    onSelf = true;
    var call7635 = callmethodChecked(this, "out", [1], string7634);
    setLineNumber(1813);    // compilenode string
    var string7636 = new GraceString("  *var_String = String;");
    onSelf = true;
    var call7637 = callmethodChecked(this, "out", [1], string7636);
    setLineNumber(1814);    // compilenode string
    var string7638 = new GraceString("  type_String = String;");
    onSelf = true;
    var call7639 = callmethodChecked(this, "out", [1], string7638);
    setLineNumber(1815);    // compilenode string
    var string7640 = new GraceString("  Object *var_Block = alloc_var();");
    onSelf = true;
    var call7641 = callmethodChecked(this, "out", [1], string7640);
    setLineNumber(1816);    // compilenode string
    var string7642 = new GraceString("  *var_Block = Block;");
    onSelf = true;
    var call7643 = callmethodChecked(this, "out", [1], string7642);
    setLineNumber(1817);    // compilenode string
    var string7644 = new GraceString("  type_Block = Block;");
    onSelf = true;
    var call7645 = callmethodChecked(this, "out", [1], string7644);
    setLineNumber(1818);    // compilenode string
    var string7646 = new GraceString("  Object *var_Done = alloc_var();");
    onSelf = true;
    var call7647 = callmethodChecked(this, "out", [1], string7646);
    setLineNumber(1819);    // compilenode string
    var string7648 = new GraceString("  *var_Done = Done;");
    onSelf = true;
    var call7649 = callmethodChecked(this, "out", [1], string7648);
    setLineNumber(1820);    // compilenode string
    var string7650 = new GraceString("  type_Done = Done;");
    onSelf = true;
    var call7651 = callmethodChecked(this, "out", [1], string7650);
    setLineNumber(1821);    // compilenode string
    var string7652 = new GraceString("  Object *var_Number = alloc_var();");
    onSelf = true;
    var call7653 = callmethodChecked(this, "out", [1], string7652);
    setLineNumber(1822);    // compilenode string
    var string7654 = new GraceString("  *var_Number = Number;");
    onSelf = true;
    var call7655 = callmethodChecked(this, "out", [1], string7654);
    setLineNumber(1823);    // compilenode string
    var string7656 = new GraceString("  type_Number = Number;");
    onSelf = true;
    var call7657 = callmethodChecked(this, "out", [1], string7656);
    setLineNumber(1824);    // compilenode string
    var string7658 = new GraceString("  Object *var_Boolean = alloc_var();");
    onSelf = true;
    var call7659 = callmethodChecked(this, "out", [1], string7658);
    setLineNumber(1825);    // compilenode string
    var string7660 = new GraceString("  *var_Boolean = Boolean;");
    onSelf = true;
    var call7661 = callmethodChecked(this, "out", [1], string7660);
    setLineNumber(1826);    // compilenode string
    var string7662 = new GraceString("  type_Boolean = Boolean;");
    onSelf = true;
    var call7663 = callmethodChecked(this, "out", [1], string7662);
    setLineNumber(1827);    // compilenode string
    var string7664 = new GraceString("  Object *var_Dynamic = alloc_var();");
    onSelf = true;
    var call7665 = callmethodChecked(this, "out", [1], string7664);
    setLineNumber(1828);    // compilenode string
    var string7666 = new GraceString("  *var_Dynamic = Dynamic;");
    onSelf = true;
    var call7667 = callmethodChecked(this, "out", [1], string7666);
    setLineNumber(1829);    // compilenode string
    var string7668 = new GraceString("  Object *var_Unknown = alloc_var();");
    onSelf = true;
    var call7669 = callmethodChecked(this, "out", [1], string7668);
    setLineNumber(1830);    // compilenode string
    var string7670 = new GraceString("  *var_Unknown= Unknown;");
    onSelf = true;
    var call7671 = callmethodChecked(this, "out", [1], string7670);
    setLineNumber(1831);    // compilenode string
    var string7672 = new GraceString("  Object *var_Type = alloc_var();");
    onSelf = true;
    var call7673 = callmethodChecked(this, "out", [1], string7672);
    setLineNumber(1832);    // compilenode string
    var string7674 = new GraceString("  *var_Type = Type;");
    onSelf = true;
    var call7675 = callmethodChecked(this, "out", [1], string7674);
    setLineNumber(1833);    // compilenode string
    var string7676 = new GraceString("  type_Done = Type;");
    onSelf = true;
    var call7677 = callmethodChecked(this, "out", [1], string7676);
    setLineNumber(1834);    // compilenode string
    var string7678 = new GraceString("  Object *var__prelude = alloc_var();");
    onSelf = true;
    var call7679 = callmethodChecked(this, "out", [1], string7678);
    setLineNumber(1835);    // compilenode string
    var string7680 = new GraceString("  *var__prelude = grace_prelude();");
    onSelf = true;
    var call7681 = callmethodChecked(this, "out", [1], string7680);
    setLineNumber(1836);    // compilenode string
    var string7682 = new GraceString("  Object *var_prelude = alloc_var();");
    onSelf = true;
    var call7683 = callmethodChecked(this, "out", [1], string7682);
    setLineNumber(1837);    // compilenode string
    var string7684 = new GraceString("  *var_prelude = prelude;");
    onSelf = true;
    var call7685 = callmethodChecked(this, "out", [1], string7684);
    setLineNumber(1838);    // compilenode string
    var string7686 = new GraceString("  gc_root(*var_MatchFailed);");
    onSelf = true;
    var call7687 = callmethodChecked(this, "out", [1], string7686);
    setLineNumber(1839);    // compilenode string
    var string7688 = new GraceString("  emptyclosure = createclosure(0, \"empty\");");
    onSelf = true;
    var call7689 = callmethodChecked(this, "out", [1], string7688);
    setLineNumber(1840);    // compilenode string
    var string7690 = new GraceString("  gc_root(emptyclosure);");
    onSelf = true;
    var call7691 = callmethodChecked(this, "out", [1], string7690);
    setLineNumber(1841);    // compilenode string
    var string7692 = new GraceString(", NULL);");
    var string7695 = new GraceString("  struct StackFrameObject *stackframe = alloc_StackFrame(");
    var opresult7697 = callmethodChecked(string7695, "++", [1], var_nummethods);
    var opresult7699 = callmethodChecked(opresult7697, "++", [1], string7692);
    onSelf = true;
    var call7700 = callmethodChecked(this, "out", [1], opresult7699);
    setLineNumber(1842);    // compilenode string
    var string7701 = new GraceString("  gc_root((Object)stackframe);");
    onSelf = true;
    var call7702 = callmethodChecked(this, "out", [1], string7701);
    setLineNumber(1843);    // compilenode string
    var string7703 = new GraceString("  pushstackframe(stackframe, \"module scope\");");
    onSelf = true;
    var call7704 = callmethodChecked(this, "out", [1], string7703);
    setLineNumber(1844);    // compilenode string
    var string7705 = new GraceString("  Object *selfslot = &(stackframe->slots[0]);");
    onSelf = true;
    var call7706 = callmethodChecked(this, "out", [1], string7705);
    setLineNumber(1845);    // compilenode string
    var string7707 = new GraceString("  *selfslot = self;");
    onSelf = true;
    var call7708 = callmethodChecked(this, "out", [1], string7707);
    setLineNumber(1846);    // compilenode string
    var string7709 = new GraceString("  setframeelementname(stackframe, 0, \"self\");");
    onSelf = true;
    var call7710 = callmethodChecked(this, "out", [1], string7709);
    setLineNumber(1847);    // compilenode string
    var string7711 = new GraceString("// end of preamble");
    onSelf = true;
    var call7712 = callmethodChecked(this, "out", [1], string7711);
    setLineNumber(1848);    // compilenode identifier
    var var_tmpo = var_output;
    setLineNumber(1849);    // compilenode array
    var array7713 = new PrimitiveGraceList([]);
    var_output = array7713;
    setLineNumber(1850);    // compilenode num
    onSelf = true;
    var call7714 = callmethodChecked(this, "definebindings", [2], var_values, new GraceNum(1));
    setLineNumber(1851);    // compilenode block
    var block7715 = new GraceBlock(this, 1851, 1);
    setLineNumber(1);    // compilenode identifier
    block7715.real = function(var_o) {
      var if7716 = GraceDone;
      setLineNumber(1852);    // compilenode string
      var string7717 = new GraceString("method");
      var call7719 = callmethodChecked(var_o, "kind", [0]);
      var opresult7721 = callmethodChecked(call7719, "==", [1], string7717);
      if (Grace_isTrue(opresult7721)) {
        setLineNumber(1853);    // compilenode identifier
        onSelf = true;
        var call7722 = callmethodChecked(this, "compilenode", [1], var_o);
        if7716 = call7722;
      }
      var if7723 = GraceDone;
      setLineNumber(1855);    // compilenode string
      var string7724 = new GraceString("type");
      var call7726 = callmethodChecked(var_o, "kind", [0]);
      var opresult7728 = callmethodChecked(call7726, "==", [1], string7724);
      if (Grace_isTrue(opresult7728)) {
        setLineNumber(1856);    // compilenode identifier
        onSelf = true;
        var call7729 = callmethodChecked(this, "compilenode", [1], var_o);
        setLineNumber(1857);    // compilenode identifier
        var call7730 = callmethodChecked(var_o, "value", [0]);
        onSelf = true;
        var call7731 = callmethodChecked(this, "escapeident", [1], call7730);
        var var_typeid = call7731;
        setLineNumber(1858);    // compilenode string
        var string7732 = new GraceString(";");
        var string7735 = new GraceString(" = *var_");
        var string7738 = new GraceString("type_");
        var opresult7740 = callmethodChecked(string7738, "++", [1], var_typeid);
        var opresult7742 = callmethodChecked(opresult7740, "++", [1], string7735);
        var opresult7744 = callmethodChecked(opresult7742, "++", [1], var_typeid);
        var opresult7746 = callmethodChecked(opresult7744, "++", [1], string7732);
        onSelf = true;
        var call7747 = callmethodChecked(this, "out", [1], opresult7746);
        if7723 = call7747;
      }
      return if7723;
    };
    var call7748 = callmethodChecked(var_prelude, "for()do", [1, 1], var_values, block7715);
    var if7749 = GraceDone;
    setLineNumber(1861);    // compilenode string
    var string7750 = new GraceString("StandardPrelude");
    var opresult7753 = callmethodChecked(var_modname, "==", [1], string7750);
    if (Grace_isTrue(opresult7753)) {
      setLineNumber(1863);    // compilenode string
      var string7754 = new GraceString("  self = setsuperobj(self, *var__prelude);");
      onSelf = true;
      var call7755 = callmethodChecked(this, "out", [1], string7754);
      setLineNumber(1864);    // compilenode string
      var string7756 = new GraceString("  *selfslot = self;");
      onSelf = true;
      var call7757 = callmethodChecked(this, "out", [1], string7756);
      if7749 = call7757;
    } else {
      setLineNumber(1866);    // compilenode block
      var block7758 = new GraceBlock(this, 1866, 1);
      setLineNumber(1);    // compilenode identifier
      block7758.real = function(var_o) {
        setLineNumber(1866);    // compilenode identifier
        onSelf = true;
        var call7759 = callmethodChecked(this, "compilenode", [1], var_o);
        return call7759;
      };
      var call7760 = callmethodChecked(var_moduleObject, "externalsDo", [1], block7758);
      var if7761 = GraceDone;
      setLineNumber(1867);    // compilenode identifier
      var call7762 = callmethodChecked(var_moduleObject, "superclass", [0]);
      var opresult7765 = callmethodChecked(GraceFalse, "\u2260", [1], call7762);
      if (Grace_isTrue(opresult7765)) {
        setLineNumber(1868);    // compilenode identifier
        var call7766 = callmethodChecked(var_moduleObject, "superclass", [0]);
        var call7767 = callmethodChecked(call7766, "value", [0]);
        onSelf = true;
        var call7768 = callmethodChecked(this, "compilenode", [1], call7767);
        var var_superobj = call7768;
        setLineNumber(1869);    // compilenode string
        var string7769 = new GraceString(");");
        var string7772 = new GraceString("  self = setsuperobj(self, ");
        var opresult7774 = callmethodChecked(string7772, "++", [1], var_superobj);
        var opresult7776 = callmethodChecked(opresult7774, "++", [1], string7769);
        onSelf = true;
        var call7777 = callmethodChecked(this, "out", [1], opresult7776);
        setLineNumber(1870);    // compilenode string
        var string7778 = new GraceString("  *selfslot = self;");
        onSelf = true;
        var call7779 = callmethodChecked(this, "out", [1], string7778);
        setLineNumber(1872);    // compilenode identifier
        var call7780 = callmethodChecked(var_moduleObject, "superclass", [0]);
        onSelf = true;
        var call7781 = callmethodChecked(this, "implementAliasesAndExclusionsFor()inheriting", [1, 2], var_moduleObject, call7780, var_superobj);
        if7761 = call7781;
      }
      if7749 = if7761;
    }
    setLineNumber(1876);    // compilenode block
    var block7782 = new GraceBlock(this, 1876, 1);
    setLineNumber(1);    // compilenode identifier
    block7782.real = function(var_t) {
      setLineNumber(1878);    // compilenode string
      var string7783 = new GraceString("the C code generator.");
      setLineNumber(1877);    // compilenode string
      var string7785 = new GraceString("I'm sorry, trait usage is not yet supported by ");
      var opresult7787 = callmethodChecked(string7785, "++", [1], string7783);
      setLineNumber(1878);    // compilenode identifier
      var call7788 = callmethodChecked(var_t, "line", [0]);
      var call7789 = callmethodChecked(call7788, "t", [0]);
      var call7790 = callmethodChecked(call7789, "linePos", [0]);
      var call7792 = callmethodChecked(var_t, "linePos", [0]);
      var opresult7794 = callmethodChecked(call7792, "+", [1], new GraceNum(3));
      setLineNumber(1877);    // compilenode identifier
      var call7795 = callmethodChecked(var_errormessages, "error()atRange", [1, 2], opresult7787, call7790, opresult7794);
      return call7795;
    };
    setLineNumber(1876);    // compilenode identifier
    var call7796 = callmethodChecked(var_moduleObject, "usedTraits", [0]);
    var call7797 = callmethodChecked(call7796, "do", [1], block7782);
    setLineNumber(1881);    // compilenode block
    var block7798 = new GraceBlock(this, 1881, 1);
    setLineNumber(1);    // compilenode identifier
    block7798.real = function(var_o) {
      var if7799 = GraceDone;
      setLineNumber(1882);    // compilenode identifier
      var call7800 = callmethodChecked(var_o, "isExternal", [0]);
      if (Grace_isTrue(call7800)) {
        var if7801 = GraceDone;
        setLineNumber(1883);    // compilenode string
        var string7802 = new GraceString("StandardPrelude");
        var opresult7805 = callmethodChecked(var_modname, "==", [1], string7802);
        if (Grace_isTrue(opresult7805)) {
          setLineNumber(1884);    // compilenode identifier
          onSelf = true;
          var call7806 = callmethodChecked(this, "compilenode", [1], var_o);
          if7801 = call7806;
        }
        if7799 = if7801;
      } else {
        var if7807 = GraceDone;
        setLineNumber(1888);    // compilenode string
        var string7808 = new GraceString("type");
        var call7810 = callmethodChecked(var_o, "kind", [0]);
        var opresult7812 = callmethodChecked(call7810, "\u2260", [1], string7808);
        var string7814 = new GraceString("method");
        var call7816 = callmethodChecked(var_o, "kind", [0]);
        var opresult7818 = callmethodChecked(call7816, "\u2260", [1], string7814);
        var opresult7820 = callmethodChecked(opresult7818, "&&", [1], opresult7812);
        if (Grace_isTrue(opresult7820)) {
          setLineNumber(1889);    // compilenode identifier
          onSelf = true;
          var call7821 = callmethodChecked(this, "compilenode", [1], var_o);
          if7807 = call7821;
        }
        if7799 = if7807;
      }
      return if7799;
    };
    setLineNumber(1881);    // compilenode identifier
    var call7822 = callmethodChecked(var_moduleObject, "value", [0]);
    var call7823 = callmethodChecked(call7822, "do", [1], block7798);
    var if7824 = GraceDone;
    setLineNumber(1892);    // compilenode identifier
    var call7825 = callmethodChecked(var_xmodule, "currentDialect", [0]);
    var call7826 = callmethodChecked(call7825, "hasAtEnd", [0]);
    if (Grace_isTrue(call7826)) {
      setLineNumber(1893);    // compilenode string
      var string7827 = new GraceString("  partcv[0] = 1;");
      onSelf = true;
      var call7828 = callmethodChecked(this, "out", [1], string7827);
      setLineNumber(1894);    // compilenode string
      var string7829 = new GraceString("  params[0] = self;");
      onSelf = true;
      var call7830 = callmethodChecked(this, "out", [1], string7829);
      setLineNumber(1896);    // compilenode string
      var string7831 = new GraceString("1, partcv, params, CFLAG_SELF);");
      setLineNumber(1895);    // compilenode string
      var string7833 = new GraceString("  callmethodflags(prelude, \"atModuleEnd\", ");
      var opresult7835 = callmethodChecked(string7833, "++", [1], string7831);
      onSelf = true;
      var call7836 = callmethodChecked(this, "out", [1], opresult7835);
      if7824 = call7836;
    }
    setLineNumber(1898);    // compilenode block
    var block7837 = new GraceBlock(this, 1898, 1);
    setLineNumber(1);    // compilenode identifier
    block7837.real = function(var_e) {
      setLineNumber(1899);    // compilenode identifier
      onSelf = true;
      var call7838 = callmethodChecked(this, "outprint", [1], var_e);
      return call7838;
    };
    var call7839 = callmethodChecked(var_prelude, "for()do", [1, 1], var_globals, block7837);
    setLineNumber(1901);    // compilenode identifier
    var var_tmpo2 = var_output;
    setLineNumber(1902);    // compilenode identifier
    var_output = var_tmpo;
    setLineNumber(1903);    // compilenode string
    var string7840 = new GraceString("];");
    var string7843 = new GraceString("  Object params[");
    var opresult7845 = callmethodChecked(string7843, "++", [1], var_paramsUsed);
    var opresult7847 = callmethodChecked(opresult7845, "++", [1], string7840);
    onSelf = true;
    var call7848 = callmethodChecked(this, "out", [1], opresult7847);
    setLineNumber(1904);    // compilenode string
    var string7849 = new GraceString("];");
    var string7852 = new GraceString("  int partcv[");
    var opresult7854 = callmethodChecked(string7852, "++", [1], var_partsUsed);
    var opresult7856 = callmethodChecked(opresult7854, "++", [1], string7849);
    onSelf = true;
    var call7857 = callmethodChecked(this, "out", [1], opresult7856);
    setLineNumber(1905);    // compilenode block
    var block7858 = new GraceBlock(this, 1905, 1);
    setLineNumber(1);    // compilenode identifier
    block7858.real = function(var_l) {
      setLineNumber(1906);    // compilenode identifier
      onSelf = true;
      var call7859 = callmethodChecked(this, "out", [1], var_l);
      return call7859;
    };
    var call7860 = callmethodChecked(var_prelude, "for()do", [1, 1], var_tmpo2, block7858);
    setLineNumber(1908);    // compilenode num
    var_paramsUsed = new GraceNum(1);
    setLineNumber(1909);    // compilenode num
    var_partsUsed = new GraceNum(1);
    setLineNumber(1910);    // compilenode string
    var string7861 = new GraceString("  gc_frame_end(frame);");
    onSelf = true;
    var call7862 = callmethodChecked(this, "out", [1], string7861);
    setLineNumber(1911);    // compilenode string
    var string7863 = new GraceString("  return self;");
    onSelf = true;
    var call7864 = callmethodChecked(this, "out", [1], string7863);
    setLineNumber(1912);    // compilenode string
    var string7865 = new GraceString("}");
    onSelf = true;
    var call7866 = callmethodChecked(this, "out", [1], string7865);
    var if7867 = GraceDone;
    setLineNumber(1913);    // compilenode string
    var string7868 = new GraceString("NoMain");
    var call7869 = callmethodChecked(var_util, "extensions", [0]);
    var call7870 = callmethodChecked(call7869, "contains", [1], string7868);
    var call7871 = callmethodChecked(call7870, "prefix!", [0]);
    if (Grace_isTrue(call7871)) {
      setLineNumber(1914);    // compilenode string
      var string7872 = new GraceString("int main(int argc, char **argv) {");
      onSelf = true;
      var call7873 = callmethodChecked(this, "out", [1], string7872);
      setLineNumber(1915);    // compilenode string
      var string7874 = new GraceString("  initprofiling();");
      onSelf = true;
      var call7875 = callmethodChecked(this, "out", [1], string7874);
      var if7876 = GraceDone;
      setLineNumber(1916);    // compilenode string
      var string7877 = new GraceString("LogCallGraph");
      var call7878 = callmethodChecked(var_util, "extensions", [0]);
      var call7879 = callmethodChecked(call7878, "contains", [1], string7877);
      if (Grace_isTrue(call7879)) {
        setLineNumber(1917);    // compilenode string
        var string7880 = new GraceString("LogCallGraph");
        var call7881 = callmethodChecked(var_util, "extensions", [0]);
        var call7882 = callmethodChecked(call7881, "get", [1], string7880);
        var var_lcgfile = call7882;
        setLineNumber(1918);    // compilenode string
        var string7883 = new GraceString("\");");
        var string7886 = new GraceString("  enable_callgraph(\"");
        var opresult7888 = callmethodChecked(string7886, "++", [1], var_lcgfile);
        var opresult7890 = callmethodChecked(opresult7888, "++", [1], string7883);
        onSelf = true;
        var call7891 = callmethodChecked(this, "out", [1], opresult7890);
        if7876 = call7891;
      }
      setLineNumber(1920);    // compilenode string
      var string7892 = new GraceString("\");");
      var call7894 = callmethodChecked(var_sys, "execPath", [0]);
      var call7895 = callmethodChecked(var_io, "realpath", [1], call7894);
      var string7897 = new GraceString("  setCompilerModulePath(\"");
      var opresult7899 = callmethodChecked(string7897, "++", [1], call7895);
      var opresult7901 = callmethodChecked(opresult7899, "++", [1], string7892);
      onSelf = true;
      var call7902 = callmethodChecked(this, "out", [1], opresult7901);
      var if7903 = GraceDone;
      setLineNumber(1921);    // compilenode string
      var string7904 = new GraceString("");
      var call7906 = callmethodChecked(var_buildinfo, "modulepath", [0]);
      var opresult7908 = callmethodChecked(call7906, "\u2260", [1], string7904);
      if (Grace_isTrue(opresult7908)) {
        setLineNumber(1922);    // compilenode string
        var string7909 = new GraceString("\");");
        var call7911 = callmethodChecked(var_buildinfo, "modulepath", [0]);
        var string7913 = new GraceString("  setModulePath(\"");
        var opresult7915 = callmethodChecked(string7913, "++", [1], call7911);
        var opresult7917 = callmethodChecked(opresult7915, "++", [1], string7909);
        onSelf = true;
        var call7918 = callmethodChecked(this, "out", [1], opresult7917);
        if7903 = call7918;
      }
      setLineNumber(1924);    // compilenode string
      var string7919 = new GraceString("  gracelib_argv(argv);");
      onSelf = true;
      var call7920 = callmethodChecked(this, "out", [1], string7919);
      setLineNumber(1925);    // compilenode string
      var string7921 = new GraceString("  Object params[1];");
      onSelf = true;
      var call7922 = callmethodChecked(this, "out", [1], string7921);
      setLineNumber(1926);    // compilenode string
      var string7923 = new GraceString("  undefined = alloc_Undefined();");
      onSelf = true;
      var call7924 = callmethodChecked(this, "out", [1], string7923);
      setLineNumber(1927);    // compilenode string
      var string7925 = new GraceString("  done = alloc_done();");
      onSelf = true;
      var call7926 = callmethodChecked(this, "out", [1], string7925);
      setLineNumber(1928);    // compilenode string
      var string7927 = new GraceString("  Object tmp_argv = alloc_BuiltinList();");
      onSelf = true;
      var call7928 = callmethodChecked(this, "out", [1], string7927);
      setLineNumber(1929);    // compilenode string
      var string7929 = new GraceString("  gc_root(tmp_argv);");
      onSelf = true;
      var call7930 = callmethodChecked(this, "out", [1], string7929);
      setLineNumber(1930);    // compilenode string
      var string7931 = new GraceString("  int partcv_push[] = {1};");
      onSelf = true;
      var call7932 = callmethodChecked(this, "out", [1], string7931);
      setLineNumber(1931);    // compilenode string
      var string7933 = new GraceString("  int i; for (i=0; i<argc; i++) {");
      onSelf = true;
      var call7934 = callmethodChecked(this, "out", [1], string7933);
      setLineNumber(1932);    // compilenode string
      var string7935 = new GraceString("    params[0] = alloc_String(argv[i]);");
      onSelf = true;
      var call7936 = callmethodChecked(this, "out", [1], string7935);
      setLineNumber(1933);    // compilenode string
      var string7937 = new GraceString("    callmethodflags(tmp_argv, \"push\", 1, partcv_push, params, CFLAG_SELF);");
      onSelf = true;
      var call7938 = callmethodChecked(this, "out", [1], string7937);
      setLineNumber(1934);    // compilenode string
      var string7939 = new GraceString("  }");
      onSelf = true;
      var call7940 = callmethodChecked(this, "out", [1], string7939);
      setLineNumber(1935);    // compilenode string
      var string7941 = new GraceString("  module_sys_init_argv(tmp_argv);");
      onSelf = true;
      var call7942 = callmethodChecked(this, "out", [1], string7941);
      setLineNumber(1936);    // compilenode string
      var string7943 = new GraceString("_init();");
      var string7946 = new GraceString("  module_");
      var opresult7948 = callmethodChecked(string7946, "++", [1], var_escmodname);
      var opresult7950 = callmethodChecked(opresult7948, "++", [1], string7943);
      onSelf = true;
      var call7951 = callmethodChecked(this, "out", [1], opresult7950);
      setLineNumber(1937);    // compilenode string
      var string7952 = new GraceString("  gracelib_stats();");
      onSelf = true;
      var call7953 = callmethodChecked(this, "out", [1], string7952);
      setLineNumber(1938);    // compilenode string
      var string7954 = new GraceString("  return 0;");
      onSelf = true;
      var call7955 = callmethodChecked(this, "out", [1], string7954);
      setLineNumber(1939);    // compilenode string
      var string7956 = new GraceString("}");
      onSelf = true;
      var call7957 = callmethodChecked(this, "out", [1], string7956);
      if7867 = call7957;
    }
    setLineNumber(1941);    // compilenode block
    var block7958 = new GraceBlock(this, 1941, 1);
    setLineNumber(1);    // compilenode identifier
    block7958.real = function(var_x) {
      setLineNumber(1942);    // compilenode identifier
      onSelf = true;
      var call7959 = callmethodChecked(this, "outprint", [1], var_x);
      return call7959;
    };
    var call7960 = callmethodChecked(var_prelude, "for()do", [1, 1], var_topOutput, block7958);
    setLineNumber(1944);    // compilenode block
    var block7961 = new GraceBlock(this, 1944, 1);
    setLineNumber(1);    // compilenode identifier
    block7961.real = function(var_x) {
      setLineNumber(1945);    // compilenode identifier
      onSelf = true;
      var call7962 = callmethodChecked(this, "outprint", [1], var_x);
      return call7962;
    };
    var call7963 = callmethodChecked(var_prelude, "for()do", [1, 1], var_output, block7961);
    setLineNumber(1948);    // compilenode identifier
    var call7964 = callmethodChecked(var_imports, "other", [0]);
    var call7966 = callmethodChecked(var_imports, "static", [0]);
    var opresult7968 = callmethodChecked(call7966, "++", [1], call7964);
    var call7969 = callmethodChecked(var_moduleObject, "imports:=", [1], opresult7968);
    setLineNumber(1949);    // compilenode identifier
    var call7970 = callmethodChecked(var_xmodule, "writeGctForModule", [1], var_moduleObject);
    setLineNumber(1951);    // compilenode identifier
    var call7971 = callmethodChecked(var_outfile, "close", [0]);
    var if7972 = GraceDone;
    setLineNumber(1953);    // compilenode string
    var string7973 = new GraceString("make");
    var opresult7976 = callmethodChecked(var_runmode, "==", [1], string7973);
    if (Grace_isTrue(opresult7976)) {
      setLineNumber(1954);    // compilenode string
      var string7977 = new GraceString("compiling C code.");
      var call7978 = callmethodChecked(var_util, "log_verbose", [1], string7977);
      setLineNumber(1955);    // compilenode identifier
      var call7979 = callmethodChecked(var_outfile, "pathname", [0]);
      var var_ofpn = call7979;
      setLineNumber(1956);    // compilenode identifier
      var call7980 = callmethodChecked(var_ofpn, "size", [0]);
      var var_ix = call7980;
      setLineNumber(1957);    // compilenode block
      var block7981 = new GraceBlock(this, 1957, 0);
      block7981.real = function() {
        var block7982 = new GraceBlock(this, 1957, 0);
        block7982.real = function() {
          var string7983 = new GraceString(".");
          var call7985 = callmethodChecked(var_ofpn, "at", [1], var_ix);
          var opresult7987 = callmethodChecked(call7985, "\u2260", [1], string7983);
          return opresult7987;
        };
        var opresult7991 = callmethodChecked(var_ix, ">", [1], new GraceNum(1));
        var opresult7993 = callmethodChecked(opresult7991, "&&", [1], block7982);
        return opresult7993;
      };
      var block7994 = new GraceBlock(this, 1957, 0);
      block7994.real = function() {
        var diff7997 = callmethodChecked(var_ix, "-", [1], new GraceNum(1));
        var_ix = diff7997;
        return GraceDone;
      };
      var call7998 = callmethodChecked(var_prelude, "while()do", [1, 1], block7981, block7994);
      var if7999 = GraceDone;
      setLineNumber(1958);    // compilenode identifier
      var opresult8002 = callmethodChecked(var_ix, ">", [1], new GraceNum(0));
      if (Grace_isTrue(opresult8002)) {
        setLineNumber(1959);    // compilenode identifier
        var diff8005 = callmethodChecked(var_ix, "-", [1], new GraceNum(1));
        var call8006 = callmethodChecked(var_ofpn, "substringFrom()to", [1, 1], new GraceNum(1), diff8005);
        if7999 = call8006;
      } else {
        setLineNumber(1961);    // compilenode identifier
        if7999 = var_ofpn;
      }
      var var_ofpnBase = if7999;
      setLineNumber(1963);    // compilenode identifier
      onSelf = true;
      var call8007 = callmethodChecked(this, "compileStaticModule", [2], var_ofpnBase, var_buildinfo);
      setLineNumber(1964);    // compilenode identifier
      onSelf = true;
      var call8008 = callmethodChecked(this, "compileDynamicModule", [2], var_ofpnBase, var_buildinfo);
      var if8009 = GraceDone;
      setLineNumber(1965);    // compilenode identifier
      var call8010 = callmethodChecked(var_util, "noexec", [0]);
      var call8011 = callmethodChecked(call8010, "not", [0]);
      if (Grace_isTrue(call8011)) {
        setLineNumber(1966);    // compilenode identifier
        onSelf = true;
        var call8012 = callmethodChecked(this, "linkExecutable", [2], var_ofpnBase, var_buildinfo);
        if8009 = call8012;
      }
      setLineNumber(1968);    // compilenode string
      var string8013 = new GraceString("done.");
      var call8014 = callmethodChecked(var_util, "log_verbose", [1], string8013);
      var if8015 = GraceDone;
      setLineNumber(1969);    // compilenode string
      var string8016 = new GraceString("run");
      var opresult8019 = callmethodChecked(var_buildtype, "==", [1], string8016);
      if (Grace_isTrue(opresult8019)) {
        var if8020 = GraceDone;
        setLineNumber(1970);    // compilenode string
        var string8021 = new GraceString("/");
        var call8023 = callmethodChecked(var_ofpnBase, "first", [0]);
        var opresult8025 = callmethodChecked(call8023, "\u2260", [1], string8021);
        if (Grace_isTrue(opresult8025)) {
          setLineNumber(1971);    // compilenode string
          var string8027 = new GraceString("./");
          var opresult8029 = callmethodChecked(string8027, "++", [1], var_ofpnBase);
          var_cmd = opresult8029;
          if8020 = GraceDone;
        } else {
          setLineNumber(1973);    // compilenode identifier
          var_cmd = var_ofpnBase;
          if8020 = GraceDone;
        }
        setLineNumber(1975);    // compilenode array
        var array8030 = new PrimitiveGraceList([]);
        var call8031 = callmethodChecked(var_io, "spawn", [2], var_cmd, array8030);
        var call8032 = callmethodChecked(call8031, "wait", [0]);
        var var_runExitCode = call8032;
        var if8033 = GraceDone;
        setLineNumber(1976);    // compilenode identifier
        var opresult8036 = callmethodChecked(var_runExitCode, "<", [1], new GraceNum(0));
        if (Grace_isTrue(opresult8036)) {
          setLineNumber(1977);    // compilenode string
          var string8037 = new GraceString(".\n");
          var call8039 = callmethodChecked(var_runExitCode, "prefix-", [0]);
          var string8041 = new GraceString(" exited with error ");
          var string8044 = new GraceString("minigrace: Program ");
          var opresult8046 = callmethodChecked(string8044, "++", [1], var_modname);
          var opresult8048 = callmethodChecked(opresult8046, "++", [1], string8041);
          var opresult8050 = callmethodChecked(opresult8048, "++", [1], call8039);
          var opresult8052 = callmethodChecked(opresult8050, "++", [1], string8037);
          var call8053 = callmethodChecked(var_io, "error", [0]);
          var call8054 = callmethodChecked(call8053, "write", [1], opresult8052);
          setLineNumber(1978);    // compilenode identifier
          var call8055 = callmethodChecked(var_sys, "exit", [1], new GraceNum(4));
          if8033 = call8055;
        }
        if8015 = if8033;
      }
      if7972 = if8015;
    }
    return if7972;
  };
  func7385.paramCounts = [5];
  this.methods["compile"] = func7385;
  func7385.definitionLine = 1712;
  func7385.definitionModule = "genc";
  setLineNumber(17);    // compilenode vardec
  var var_tmp;
  setLineNumber(1977);    // compilenode method
  var func8056 = function(argcv) {    // method tmp
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for tmp"));
    setModuleName("genc");
    // tmp is a simple accessor - elide try ... catch
    setLineNumber(17);    // compilenode identifier
    return var_tmp;
  };
  func8056.paramCounts = [0];
  this.methods["tmp"] = func8056;
  func8056.definitionLine = 1977;
  func8056.definitionModule = "genc";
  setLineNumber(1977);    // compilenode method
  var func8057 = function(argcv) {    // method tmp:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for tmp:=(1)"));
    setModuleName("genc");
    var_tmp = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func8057.paramCounts = [1];
  this.methods["tmp:="] = func8057;
  func8057.definitionLine = 1977;
  func8057.definitionModule = "genc";
  this.methods["tmp"].debug = "var";
  setLineNumber(18);    // compilenode num
  var var_verbosity = new GraceNum(30);
  setLineNumber(1977);    // compilenode method
  var func8058 = function(argcv) {    // method verbosity
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for verbosity"));
    setModuleName("genc");
    // verbosity is a simple accessor - elide try ... catch
    setLineNumber(18);    // compilenode identifier
    return var_verbosity;
  };
  func8058.paramCounts = [0];
  this.methods["verbosity"] = func8058;
  func8058.definitionLine = 1977;
  func8058.definitionModule = "genc";
  setLineNumber(1977);    // compilenode method
  var func8059 = function(argcv) {    // method verbosity:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for verbosity:=(1)"));
    setModuleName("genc");
    var_verbosity = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func8059.paramCounts = [1];
  this.methods["verbosity:="] = func8059;
  func8059.definitionLine = 1977;
  func8059.definitionModule = "genc";
  this.methods["verbosity"].debug = "var";
  setLineNumber(19);    // compilenode num
  var var_pad1 = new GraceNum(1);
  setLineNumber(1977);    // compilenode method
  var func8060 = function(argcv) {    // method pad1
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for pad1"));
    setModuleName("genc");
    // pad1 is a simple accessor - elide try ... catch
    setLineNumber(19);    // compilenode identifier
    return var_pad1;
  };
  func8060.paramCounts = [0];
  this.methods["pad1"] = func8060;
  func8060.definitionLine = 1977;
  func8060.definitionModule = "genc";
  setLineNumber(1977);    // compilenode method
  var func8061 = function(argcv) {    // method pad1:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for pad1:=(1)"));
    setModuleName("genc");
    var_pad1 = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func8061.paramCounts = [1];
  this.methods["pad1:="] = func8061;
  func8061.definitionLine = 1977;
  func8061.definitionModule = "genc";
  this.methods["pad1"].debug = "var";
  setLineNumber(20);    // compilenode num
  var var_auto__95__count = new GraceNum(1);
  setLineNumber(1977);    // compilenode method
  var func8062 = function(argcv) {    // method auto_count
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for auto_count"));
    setModuleName("genc");
    // auto_count is a simple accessor - elide try ... catch
    setLineNumber(20);    // compilenode identifier
    return var_auto__95__count;
  };
  func8062.paramCounts = [0];
  this.methods["auto_count"] = func8062;
  func8062.definitionLine = 1977;
  func8062.definitionModule = "genc";
  setLineNumber(1977);    // compilenode method
  var func8063 = function(argcv) {    // method auto_count:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for auto_count:=(1)"));
    setModuleName("genc");
    var_auto__95__count = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func8063.paramCounts = [1];
  this.methods["auto_count:="] = func8063;
  func8063.definitionLine = 1977;
  func8063.definitionModule = "genc";
  this.methods["auto_count"].debug = "var";
  setLineNumber(21);    // compilenode array
  var array8064 = new PrimitiveGraceList([]);
  var var_constants = array8064;
  setLineNumber(1977);    // compilenode method
  var func8065 = function(argcv) {    // method constants
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for constants"));
    setModuleName("genc");
    // constants is a simple accessor - elide try ... catch
    setLineNumber(21);    // compilenode identifier
    return var_constants;
  };
  func8065.paramCounts = [0];
  this.methods["constants"] = func8065;
  func8065.definitionLine = 1977;
  func8065.definitionModule = "genc";
  setLineNumber(1977);    // compilenode method
  var func8066 = function(argcv) {    // method constants:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for constants:=(1)"));
    setModuleName("genc");
    var_constants = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func8066.paramCounts = [1];
  this.methods["constants:="] = func8066;
  func8066.definitionLine = 1977;
  func8066.definitionModule = "genc";
  this.methods["constants"].debug = "var";
  setLineNumber(22);    // compilenode array
  var array8067 = new PrimitiveGraceList([]);
  var var_globals = array8067;
  setLineNumber(1977);    // compilenode method
  var func8068 = function(argcv) {    // method globals
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for globals"));
    setModuleName("genc");
    // globals is a simple accessor - elide try ... catch
    setLineNumber(22);    // compilenode identifier
    return var_globals;
  };
  func8068.paramCounts = [0];
  this.methods["globals"] = func8068;
  func8068.definitionLine = 1977;
  func8068.definitionModule = "genc";
  setLineNumber(1977);    // compilenode method
  var func8069 = function(argcv) {    // method globals:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for globals:=(1)"));
    setModuleName("genc");
    var_globals = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func8069.paramCounts = [1];
  this.methods["globals:="] = func8069;
  func8069.definitionLine = 1977;
  func8069.definitionModule = "genc";
  this.methods["globals"].debug = "var";
  setLineNumber(23);    // compilenode array
  var array8070 = new PrimitiveGraceList([]);
  var var_output = array8070;
  setLineNumber(1977);    // compilenode method
  var func8071 = function(argcv) {    // method output
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for output"));
    setModuleName("genc");
    // output is a simple accessor - elide try ... catch
    setLineNumber(23);    // compilenode identifier
    return var_output;
  };
  func8071.paramCounts = [0];
  this.methods["output"] = func8071;
  func8071.definitionLine = 1977;
  func8071.definitionModule = "genc";
  setLineNumber(1977);    // compilenode method
  var func8072 = function(argcv) {    // method output:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for output:=(1)"));
    setModuleName("genc");
    var_output = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func8072.paramCounts = [1];
  this.methods["output:="] = func8072;
  func8072.definitionLine = 1977;
  func8072.definitionModule = "genc";
  this.methods["output"].debug = "var";
  setLineNumber(24);    // compilenode array
  var array8073 = new PrimitiveGraceList([]);
  var var_usedvars = array8073;
  setLineNumber(1977);    // compilenode method
  var func8074 = function(argcv) {    // method usedvars
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for usedvars"));
    setModuleName("genc");
    // usedvars is a simple accessor - elide try ... catch
    setLineNumber(24);    // compilenode identifier
    return var_usedvars;
  };
  func8074.paramCounts = [0];
  this.methods["usedvars"] = func8074;
  func8074.definitionLine = 1977;
  func8074.definitionModule = "genc";
  setLineNumber(1977);    // compilenode method
  var func8075 = function(argcv) {    // method usedvars:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for usedvars:=(1)"));
    setModuleName("genc");
    var_usedvars = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func8075.paramCounts = [1];
  this.methods["usedvars:="] = func8075;
  func8075.definitionLine = 1977;
  func8075.definitionModule = "genc";
  this.methods["usedvars"].debug = "var";
  setLineNumber(25);    // compilenode array
  var array8076 = new PrimitiveGraceList([]);
  var var_declaredvars = array8076;
  setLineNumber(1977);    // compilenode method
  var func8077 = function(argcv) {    // method declaredvars
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for declaredvars"));
    setModuleName("genc");
    // declaredvars is a simple accessor - elide try ... catch
    setLineNumber(25);    // compilenode identifier
    return var_declaredvars;
  };
  func8077.paramCounts = [0];
  this.methods["declaredvars"] = func8077;
  func8077.definitionLine = 1977;
  func8077.definitionModule = "genc";
  setLineNumber(1977);    // compilenode method
  var func8078 = function(argcv) {    // method declaredvars:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for declaredvars:=(1)"));
    setModuleName("genc");
    var_declaredvars = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func8078.paramCounts = [1];
  this.methods["declaredvars:="] = func8078;
  func8078.definitionLine = 1977;
  func8078.definitionModule = "genc";
  this.methods["declaredvars"].debug = "var";
  setLineNumber(26);    // compilenode string
  var string8079 = new GraceString("entry");
  var var_bblock = string8079;
  setLineNumber(1977);    // compilenode method
  var func8080 = function(argcv) {    // method bblock
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for bblock"));
    setModuleName("genc");
    // bblock is a simple accessor - elide try ... catch
    setLineNumber(26);    // compilenode identifier
    return var_bblock;
  };
  func8080.paramCounts = [0];
  this.methods["bblock"] = func8080;
  func8080.definitionLine = 1977;
  func8080.definitionModule = "genc";
  setLineNumber(1977);    // compilenode method
  var func8081 = function(argcv) {    // method bblock:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for bblock:=(1)"));
    setModuleName("genc");
    var_bblock = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func8081.paramCounts = [1];
  this.methods["bblock:="] = func8081;
  func8081.definitionLine = 1977;
  func8081.definitionModule = "genc";
  this.methods["bblock"].debug = "var";
  setLineNumber(27);    // compilenode num
  var var_linenum = new GraceNum(0);
  setLineNumber(1977);    // compilenode method
  var func8082 = function(argcv) {    // method linenum
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for linenum"));
    setModuleName("genc");
    // linenum is a simple accessor - elide try ... catch
    setLineNumber(27);    // compilenode identifier
    return var_linenum;
  };
  func8082.paramCounts = [0];
  this.methods["linenum"] = func8082;
  func8082.definitionLine = 1977;
  func8082.definitionModule = "genc";
  setLineNumber(1977);    // compilenode method
  var func8083 = function(argcv) {    // method linenum:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for linenum:=(1)"));
    setModuleName("genc");
    var_linenum = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func8083.paramCounts = [1];
  this.methods["linenum:="] = func8083;
  func8083.definitionLine = 1977;
  func8083.definitionModule = "genc";
  this.methods["linenum"].debug = "var";
  setLineNumber(28);    // compilenode array
  var array8084 = new PrimitiveGraceList([]);
  var var_values = array8084;
  setLineNumber(1977);    // compilenode method
  var func8085 = function(argcv) {    // method values
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for values"));
    setModuleName("genc");
    // values is a simple accessor - elide try ... catch
    setLineNumber(28);    // compilenode identifier
    return var_values;
  };
  func8085.paramCounts = [0];
  this.methods["values"] = func8085;
  func8085.definitionLine = 1977;
  func8085.definitionModule = "genc";
  setLineNumber(1977);    // compilenode method
  var func8086 = function(argcv) {    // method values:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for values:=(1)"));
    setModuleName("genc");
    var_values = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func8086.paramCounts = [1];
  this.methods["values:="] = func8086;
  func8086.definitionLine = 1977;
  func8086.definitionModule = "genc";
  this.methods["values"].debug = "var";
  setLineNumber(29);    // compilenode string
  var string8087 = new GraceString("main");
  var var_modname = string8087;
  setLineNumber(1977);    // compilenode method
  var func8088 = function(argcv) {    // method modname
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for modname"));
    setModuleName("genc");
    // modname is a simple accessor - elide try ... catch
    setLineNumber(29);    // compilenode identifier
    return var_modname;
  };
  func8088.paramCounts = [0];
  this.methods["modname"] = func8088;
  func8088.definitionLine = 1977;
  func8088.definitionModule = "genc";
  setLineNumber(1977);    // compilenode method
  var func8089 = function(argcv) {    // method modname:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for modname:=(1)"));
    setModuleName("genc");
    var_modname = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func8089.paramCounts = [1];
  this.methods["modname:="] = func8089;
  func8089.definitionLine = 1977;
  func8089.definitionModule = "genc";
  this.methods["modname"].debug = "var";
  setLineNumber(30);    // compilenode string
  var string8090 = new GraceString("main");
  var var_escmodname = string8090;
  setLineNumber(1977);    // compilenode method
  var func8091 = function(argcv) {    // method escmodname
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for escmodname"));
    setModuleName("genc");
    // escmodname is a simple accessor - elide try ... catch
    setLineNumber(30);    // compilenode identifier
    return var_escmodname;
  };
  func8091.paramCounts = [0];
  this.methods["escmodname"] = func8091;
  func8091.definitionLine = 1977;
  func8091.definitionModule = "genc";
  setLineNumber(1977);    // compilenode method
  var func8092 = function(argcv) {    // method escmodname:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for escmodname:=(1)"));
    setModuleName("genc");
    var_escmodname = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func8092.paramCounts = [1];
  this.methods["escmodname:="] = func8092;
  func8092.definitionLine = 1977;
  func8092.definitionModule = "genc";
  this.methods["escmodname"].debug = "var";
  setLineNumber(31);    // compilenode string
  var string8093 = new GraceString("build");
  var var_runmode = string8093;
  setLineNumber(1977);    // compilenode method
  var func8094 = function(argcv) {    // method runmode
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for runmode"));
    setModuleName("genc");
    // runmode is a simple accessor - elide try ... catch
    setLineNumber(31);    // compilenode identifier
    return var_runmode;
  };
  func8094.paramCounts = [0];
  this.methods["runmode"] = func8094;
  func8094.definitionLine = 1977;
  func8094.definitionModule = "genc";
  setLineNumber(1977);    // compilenode method
  var func8095 = function(argcv) {    // method runmode:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for runmode:=(1)"));
    setModuleName("genc");
    var_runmode = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func8095.paramCounts = [1];
  this.methods["runmode:="] = func8095;
  func8095.definitionLine = 1977;
  func8095.definitionModule = "genc";
  this.methods["runmode"].debug = "var";
  setLineNumber(32);    // compilenode string
  var string8096 = new GraceString("bc");
  var var_buildtype = string8096;
  setLineNumber(1977);    // compilenode method
  var func8097 = function(argcv) {    // method buildtype
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for buildtype"));
    setModuleName("genc");
    // buildtype is a simple accessor - elide try ... catch
    setLineNumber(32);    // compilenode identifier
    return var_buildtype;
  };
  func8097.paramCounts = [0];
  this.methods["buildtype"] = func8097;
  func8097.definitionLine = 1977;
  func8097.definitionModule = "genc";
  setLineNumber(1977);    // compilenode method
  var func8098 = function(argcv) {    // method buildtype:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for buildtype:=(1)"));
    setModuleName("genc");
    var_buildtype = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func8098.paramCounts = [1];
  this.methods["buildtype:="] = func8098;
  func8098.definitionLine = 1977;
  func8098.definitionModule = "genc";
  this.methods["buildtype"].debug = "var";
  setLineNumber(33);    // compilenode identifier
  var var_inBlock = GraceFalse;
  setLineNumber(1977);    // compilenode method
  var func8099 = function(argcv) {    // method inBlock
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for inBlock"));
    setModuleName("genc");
    // inBlock is a simple accessor - elide try ... catch
    setLineNumber(33);    // compilenode identifier
    return var_inBlock;
  };
  func8099.paramCounts = [0];
  this.methods["inBlock"] = func8099;
  func8099.definitionLine = 1977;
  func8099.definitionModule = "genc";
  setLineNumber(1977);    // compilenode method
  var func8100 = function(argcv) {    // method inBlock:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for inBlock:=(1)"));
    setModuleName("genc");
    var_inBlock = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func8100.paramCounts = [1];
  this.methods["inBlock:="] = func8100;
  func8100.definitionLine = 1977;
  func8100.definitionModule = "genc";
  this.methods["inBlock"].debug = "var";
  setLineNumber(34);    // compilenode num
  var var_paramsUsed = new GraceNum(1);
  setLineNumber(1977);    // compilenode method
  var func8101 = function(argcv) {    // method paramsUsed
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for paramsUsed"));
    setModuleName("genc");
    // paramsUsed is a simple accessor - elide try ... catch
    setLineNumber(34);    // compilenode identifier
    return var_paramsUsed;
  };
  func8101.paramCounts = [0];
  this.methods["paramsUsed"] = func8101;
  func8101.definitionLine = 1977;
  func8101.definitionModule = "genc";
  setLineNumber(1977);    // compilenode method
  var func8102 = function(argcv) {    // method paramsUsed:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for paramsUsed:=(1)"));
    setModuleName("genc");
    var_paramsUsed = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func8102.paramCounts = [1];
  this.methods["paramsUsed:="] = func8102;
  func8102.definitionLine = 1977;
  func8102.definitionModule = "genc";
  this.methods["paramsUsed"].debug = "var";
  setLineNumber(35);    // compilenode num
  var var_partsUsed = new GraceNum(1);
  setLineNumber(1977);    // compilenode method
  var func8103 = function(argcv) {    // method partsUsed
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for partsUsed"));
    setModuleName("genc");
    // partsUsed is a simple accessor - elide try ... catch
    setLineNumber(35);    // compilenode identifier
    return var_partsUsed;
  };
  func8103.paramCounts = [0];
  this.methods["partsUsed"] = func8103;
  func8103.definitionLine = 1977;
  func8103.definitionModule = "genc";
  setLineNumber(1977);    // compilenode method
  var func8104 = function(argcv) {    // method partsUsed:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for partsUsed:=(1)"));
    setModuleName("genc");
    var_partsUsed = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func8104.paramCounts = [1];
  this.methods["partsUsed:="] = func8104;
  func8104.definitionLine = 1977;
  func8104.definitionModule = "genc";
  this.methods["partsUsed"].debug = "var";
  setLineNumber(36);    // compilenode num
  var var_topLevelMethodPos = new GraceNum(1);
  setLineNumber(1977);    // compilenode method
  var func8105 = function(argcv) {    // method topLevelMethodPos
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for topLevelMethodPos"));
    setModuleName("genc");
    // topLevelMethodPos is a simple accessor - elide try ... catch
    setLineNumber(36);    // compilenode identifier
    return var_topLevelMethodPos;
  };
  func8105.paramCounts = [0];
  this.methods["topLevelMethodPos"] = func8105;
  func8105.definitionLine = 1977;
  func8105.definitionModule = "genc";
  setLineNumber(1977);    // compilenode method
  var func8106 = function(argcv) {    // method topLevelMethodPos:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for topLevelMethodPos:=(1)"));
    setModuleName("genc");
    var_topLevelMethodPos = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func8106.paramCounts = [1];
  this.methods["topLevelMethodPos:="] = func8106;
  func8106.definitionLine = 1977;
  func8106.definitionModule = "genc";
  this.methods["topLevelMethodPos"].debug = "var";
  setLineNumber(37);    // compilenode array
  var array8107 = new PrimitiveGraceList([]);
  var var_topOutput = array8107;
  setLineNumber(1977);    // compilenode method
  var func8108 = function(argcv) {    // method topOutput
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for topOutput"));
    setModuleName("genc");
    // topOutput is a simple accessor - elide try ... catch
    setLineNumber(37);    // compilenode identifier
    return var_topOutput;
  };
  func8108.paramCounts = [0];
  this.methods["topOutput"] = func8108;
  func8108.definitionLine = 1977;
  func8108.definitionModule = "genc";
  setLineNumber(1977);    // compilenode method
  var func8109 = function(argcv) {    // method topOutput:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for topOutput:=(1)"));
    setModuleName("genc");
    var_topOutput = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func8109.paramCounts = [1];
  this.methods["topOutput:="] = func8109;
  func8109.definitionLine = 1977;
  func8109.definitionModule = "genc";
  this.methods["topOutput"].debug = "var";
  setLineNumber(38);    // compilenode identifier
  var var_bottomOutput = var_output;
  setLineNumber(1977);    // compilenode method
  var func8110 = function(argcv) {    // method bottomOutput
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for bottomOutput"));
    setModuleName("genc");
    // bottomOutput is a simple accessor - elide try ... catch
    setLineNumber(38);    // compilenode identifier
    return var_bottomOutput;
  };
  func8110.paramCounts = [0];
  this.methods["bottomOutput"] = func8110;
  func8110.definitionLine = 1977;
  func8110.definitionModule = "genc";
  setLineNumber(1977);    // compilenode method
  var func8111 = function(argcv) {    // method bottomOutput:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for bottomOutput:=(1)"));
    setModuleName("genc");
    var_bottomOutput = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func8111.paramCounts = [1];
  this.methods["bottomOutput:="] = func8111;
  func8111.definitionLine = 1977;
  func8111.definitionModule = "genc";
  this.methods["bottomOutput"].debug = "var";
  setLineNumber(39);    // compilenode num
  var var_compilationDepth = new GraceNum(0);
  setLineNumber(1977);    // compilenode method
  var func8112 = function(argcv) {    // method compilationDepth
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compilationDepth"));
    setModuleName("genc");
    // compilationDepth is a simple accessor - elide try ... catch
    setLineNumber(39);    // compilenode identifier
    return var_compilationDepth;
  };
  func8112.paramCounts = [0];
  this.methods["compilationDepth"] = func8112;
  func8112.definitionLine = 1977;
  func8112.definitionModule = "genc";
  setLineNumber(1977);    // compilenode method
  var func8113 = function(argcv) {    // method compilationDepth:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for compilationDepth:=(1)"));
    setModuleName("genc");
    var_compilationDepth = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func8113.paramCounts = [1];
  this.methods["compilationDepth:="] = func8113;
  func8113.definitionLine = 1977;
  func8113.definitionModule = "genc";
  this.methods["compilationDepth"].debug = "var";
  setLineNumber(40);    // compilenode identifier
  var call8114 = callmethodChecked(var_map, "new", [0]);
  var var_topLevelTypes = call8114;
  var func8115 = function(argcv) {    // method topLevelTypes
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for topLevelTypes"));
    setModuleName("genc");
    // topLevelTypes is a simple accessor - elide try ... catch
    return var_topLevelTypes;
  };
  func8115.paramCounts = [0];
  this.methods["topLevelTypes"] = func8115;
  func8115.definitionLine = 40;
  func8115.definitionModule = "genc";
  this.methods["topLevelTypes"].debug = "def";
  setLineNumber(41);    // compilenode identifier
  var call8116 = callmethodChecked(var_util, "requiredModules", [0]);
  var var_imports = call8116;
  var func8117 = function(argcv) {    // method imports
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for imports"));
    setModuleName("genc");
    // imports is a simple accessor - elide try ... catch
    return var_imports;
  };
  func8117.paramCounts = [0];
  this.methods["imports"] = func8117;
  func8117.definitionLine = 41;
  func8117.definitionModule = "genc";
  this.methods["imports"].debug = "def";
  setLineNumber(42);    // compilenode string
  var string8118 = new GraceString("alloc_Lineup()");
  var var_bracketConstructor = string8118;
  setLineNumber(41);    // compilenode method
  var func8119 = function(argcv) {    // method bracketConstructor
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for bracketConstructor"));
    setModuleName("genc");
    // bracketConstructor is a simple accessor - elide try ... catch
    setLineNumber(42);    // compilenode identifier
    return var_bracketConstructor;
  };
  func8119.paramCounts = [0];
  this.methods["bracketConstructor"] = func8119;
  func8119.definitionLine = 41;
  func8119.definitionModule = "genc";
  setLineNumber(41);    // compilenode method
  var func8120 = function(argcv) {    // method bracketConstructor:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for bracketConstructor:=(1)"));
    setModuleName("genc");
    var_bracketConstructor = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func8120.paramCounts = [1];
  this.methods["bracketConstructor:="] = func8120;
  func8120.definitionLine = 41;
  func8120.definitionModule = "genc";
  this.methods["bracketConstructor"].debug = "var";
  return this;
}
gracecode_genc.imports = ['ast', 'errormessages', 'io', 'mirrors', 'stringMap', 'sys', 'util', 'xmodule'];
if (typeof gctCache !== "undefined")
  gctCache['genc'] = "classes:\nconfidential:\nfresh-methods:\nmodules:\n ast\n errormessages\n identifierKinds\n io\n mirrors\n stringMap\n sys\n unixFilePath\n util\n xmodule\npath:\n genc\npublic:\n beginblock\n compile\n compileDynamicModule\n compileNativeCode\n compilePrint\n compileStaticModule\n compilearray\n compilebind\n compileblock\n compilecall\n compiledefdec\n compiledialect\n compilefreshmethod\n compileidentifier\n compileif\n compileifexpr\n compileimport\n compilematchcase\n compilemember\n compilemethod\n compilemethodtypes\n compilenode\n compilenum\n compileobjdefdec\n compileobjdefdecdata\n compileobjdefdecmeth\n compileobject\n compileobjouter\n compileobjtypemeth\n compileobjvardec\n compileobjvardecdata\n compileobjvardecmeth\n compileop\n compilereturn\n compiletrycatch\n compiletype\n compiletypedec\n compiletypeliteral\n compilevardec\n countbindings\n countnodebindings\n definebindings\n escapeident\n escapestring\n escapestring2\n implementAliasesAndExclusionsFor()inheriting\n linkExecutable\n out\n outprint\n outswitchdown\n outswitchup\ntypes:\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["genc"] = [
    "#pragma ExtendedLineups",
    "import \"ast\" as ast",
    "import \"errormessages\" as errormessages",
    "import \"io\" as io",
    "import \"stringMap\" as map",
    "import \"mirrors\" as mirrors",
    "import \"sys\" as sys",
    "import \"util\" as util",
    "import \"xmodule\" as xmodule",
    "",
    "// genc produces C code from the AST, and optionally links and",
    "// compiles it to native code. Code that affects the way the compiler behaves",
    "// is in the \"compile\" method at the bottom. Other methods principally deal",
    "// with translating a single AST node to C, and parallel the AST and",
    "// parser.",
    "",
    "var tmp",
    "var verbosity := 30",
    "var pad1 := 1",
    "var auto_count := 1",
    "var constants := []",
    "var globals := []",
    "var output := []",
    "var usedvars := []",
    "var declaredvars := []",
    "var bblock := \"entry\"",
    "var linenum := 0",
    "var values := []",
    "var modname := \"main\"",
    "var escmodname := \"main\"",
    "var runmode := \"build\"",
    "var buildtype := \"bc\"",
    "var inBlock := false",
    "var paramsUsed := 1",
    "var partsUsed := 1",
    "var topLevelMethodPos := 1",
    "var topOutput := []",
    "var bottomOutput := output",
    "var compilationDepth := 0",
    "def topLevelTypes = map.new",
    "def imports = util.requiredModules",
    "var bracketConstructor := \"alloc_Lineup()\"",
    "",
    "method out(s) {",
    "    output.push(s)",
    "}",
    "method outprint(s) {",
    "    util.outprint(s)",
    "}",
    "method outswitchup {",
    "    output := topOutput",
    "}",
    "method outswitchdown {",
    "    output := bottomOutput",
    "}",
    "method countnodebindings(n) {",
    "    if (n.kind == \"if\") then {",
    "        countbindings(n.thenblock.body) + countbindings(n.elseblock.body)",
    "    } else {",
    "        0",
    "    }",
    "}",
    "method countbindings(l) {",
    "    var numslots := 0",
    "    for (l) do { n ->",
    "        def k = n.kind",
    "        if ((k == \"vardec\") || (k == \"defdec\") || (k == \"typedec\")) then {",
    "            numslots := numslots + 1",
    "        } elseif { n.kind == \"if\" } then {",
    "            numslots := numslots + countnodebindings(n)",
    "        }",
    "    }",
    "    numslots",
    "}",
    "method definebindings(l, slot') {",
    "    var slot := slot'",
    "    for (l) do { n ->",
    "        def k = n.kind",
    "        if ((k == \"vardec\") || (k == \"defdec\") || (k == \"typedec\")) then {",
    "            var tnm := \"\"",
    "            var snm := \"\"",
    "            if (n.name.kind == \"generic\") then {",
    "                tnm := escapeident(n.name.value.value)",
    "                snm := escapestring(n.name.value.value)",
    "            } else {  // identifier",
    "                tnm := escapeident(n.name.value)",
    "                snm := escapestring(n.name.value)",
    "            }",
    "            if (!declaredvars.contains(tnm)) then {",
    "                declaredvars.push(tnm)",
    "                out(\"  Object *var_{tnm} = &(stackframe->slots[{slot}]);\")",
    "                out(\"  setframeelementname(stackframe, {slot}, \\\"{snm}\\\");\")",
    "                slot := slot + 1",
    "            }",
    "        } elseif {k == \"if\"} then {",
    "            slot := definebindings(n.thenblock.body, slot)",
    "            slot := definebindings(n.elseblock.body, slot)",
    "            n.handledIdentifiers := true",
    "        } elseif {n.kind == \"import\"} then {",
    "            var tnm := escapeident(n.nameString)",
    "            out \"  Object *var_{tnm} = alloc_var();\"",
    "            // TODO: why is this different from a def?  Handle annotations!",
    "        }",
    "    }",
    "    slot",
    "}",
    "method beginblock(s) {",
    "    bblock := \"%\" ++ s",
    "    out(s ++ \":\")",
    "}",
    "method escapeident(s) {",
    "    var ns := \"\"",
    "    for (s) do { c ->",
    "        def o = c.ord",
    "        if (((o >= 65) && (o <= 90))",
    "            || ((o >= 97) && (o <= 122))",
    "            || ((o >= 48) && (o <= 57))",
    "            || (o == 95)) then {",
    "            ns := ns ++ c",
    "        } else {",
    "            ns := ns ++ \"_{o}_\"",
    "        }",
    "    }",
    "    ns",
    "}",
    "method escapestring(s) {",
    "    s._escape",
    "}",
    "method escapestring2(s) {",
    "    var ns := \"\"",
    "    var cd := 0",
    "    var ls := false",
    "    for (escapestring(s)) do { c->",
    "        if (ls && (c == \"\\\\\")) then {",
    "            ls := false",
    "            ns := ns ++ \"\\\\\\\\\"",
    "        } elseif { c == \"\\\\\" } then {",
    "            ls := true",
    "        } elseif { ls } then {",
    "            ns := ns ++ \"\\\"\\\"\\\\x\" ++ c",
    "            ls := false",
    "            cd := 2",
    "        } else {",
    "            ns := ns ++ c",
    "        }",
    "        if (cd == 1) then {",
    "            ns := ns ++ \"\\\"\\\"\"",
    "            cd := 0",
    "        } elseif { cd > 0 } then {",
    "            cd := cd - 1",
    "        }",
    "    }",
    "    ns",
    "}",
    "method compilearray(o) {",
    "    var myc := auto_count",
    "    auto_count := auto_count + 1",
    "    var r",
    "    out \"  Object array{myc} = {bracketConstructor};\"",
    "    out \"  gc_pause();\"",
    "    var i := 0",
    "    for (o.value) do {a ->",
    "        r := compilenode(a)",
    "        out(\"  params[0] = {r};\")",
    "        out(\"  partcv[0] = 1;\")",
    "        out(\"  callmethodflags(array{myc}, \\\"push\\\", 1, partcv, params, CFLAG_SELF);\")",
    "        i := i + 1",
    "    }",
    "    out(\"  gc_unpause();\")",
    "    o.register := \"array\" ++ myc",
    "}",
    "method compilemember(o) {",
    "    // Member in value position is actually a nullary method call.",
    "    util.setline(o.line)",
    "    var c := ast.callNode.new(o, [ast.callWithPart.request(o.value) withArgs( [] )])",
    "    var r := compilenode(c)",
    "    o.register := r",
    "}",
    "method compileobjouter(selfr, outerRef) {",
    "    var myc := auto_count",
    "    auto_count := auto_count + 1",
    "    var nm := \"outer\"",
    "    var enm := escapestring2(nm)",
    "    out(\"// OBJECT OUTER DEC \" ++ enm)",
    "    out(\"  adddatum2({selfr}, {outerRef}, 0);\")",
    "    outprint(\"Object reader_{escmodname}_{enm}_{myc}\"",
    "        ++ \"(Object self, int nparams, int *argcv, \"",
    "        ++ \"Object* args, int flags) \\{\")",
    "    outprint(\"  struct UserObject *uo = (struct UserObject*)self;\")",
    "    outprint(\"  return uo->data[0];\")",
    "    outprint(\"\\}\")",
    "    out(\"  addmethodreal({selfr},\\\"outer\\\", &reader_{escmodname}_{enm}_{myc});\")",
    "}",
    "method compileobjtypemeth(o, selfr, pos) {",
    "    var myc := auto_count",
    "    auto_count := auto_count + 1",
    "    var nm := o.nameString",
    "    var enm := escapestring2(nm)",
    "    var inm := escapeident(nm)",
    "    outprint(\"Object reader_{escmodname}_{inm}_{myc}\"",
    "        ++ \"(Object self, int nparams, int *argcv, \"",
    "        ++ \"Object* args, int flags) \\{\")",
    "    var flags := \"MFLAG_DEF\"",
    "    for (o.annotations) do {ann->",
    "        if ((ann.kind == \"identifier\") && {ann.value == \"confidential\"}) then {",
    "            flags := \"{flags} | MFLAG_CONFIDENTIAL\"",
    "        }",
    "    }",
    "    outprint(\"  struct UserObject *uo = (struct UserObject *)self;\")",
    "    outprint(\"  return uo->data[{pos}];\")",
    "    outprint(\"\\}\")",
    "    out(\"  Method *reader{myc} = addmethodrealflags({selfr}, \\\"{enm}\\\",&reader_{escmodname}_{inm}_{myc}, {flags});\")",
    "    out(\"  reader{myc}->definitionModule = modulename;\")",
    "    out(\"  reader{myc}->definitionLine = {o.line};\")",
    "}",
    "method compileobjdefdecdata(o, selfr, pos) {",
    "    var val := \"undefined\"",
    "    if (false != o.value) then {",
    "        if (o.value.kind == \"object\") then {",
    "            compileobject(o.value, selfr)",
    "            val := o.value.register",
    "        } else {",
    "            val := compilenode(o.value)",
    "        }",
    "    }",
    "    out(\"  adddatum2({selfr}, {val}, {pos});\")",
    "    if (ast.findAnnotation(o, \"parent\")) then {",
    "        out(\"  ((struct UserObject *){selfr})->super = {val};\")",
    "    }",
    "}",
    "method compileobjdefdecmeth(o, selfr, pos) {",
    "    var myc := auto_count",
    "    auto_count := auto_count + 1",
    "    var nm := o.name.value",
    "    var enm := escapestring2(nm)",
    "    var inm := escapeident(nm)",
    "    outprint(\"Object reader_{escmodname}_{inm}_{myc}\"",
    "        ++ \"(Object self, int nparams, int *argcv, \"",
    "        ++ \"Object* args, int flags) \\{\")",
    "    var flags := \"MFLAG_DEF\"",
    "    var isPublic := false",
    "    for (o.annotations) do {ann->",
    "        if ((ann.kind == \"identifier\") && {ann.value == \"public\"}) then {",
    "            isPublic := true",
    "        }",
    "        if ((ann.kind == \"identifier\") && {ann.value == \"readable\"}) then {",
    "            isPublic := true",
    "        }",
    "    }",
    "    if (!isPublic) then {",
    "        flags := \"{flags} | MFLAG_CONFIDENTIAL\"",
    "    }",
    "    outprint(\"  struct UserObject *uo = (struct UserObject *)self;\")",
    "    outprint(\"  return uo->data[{pos}];\")",
    "    outprint(\"\\}\")",
    "    out(\"  Method *reader{myc} = addmethodrealflags({selfr}, \\\"{enm}\\\",&reader_{escmodname}_{inm}_{myc}, {flags});\")",
    "    out(\"  reader{myc}->definitionModule = modulename;\")",
    "    out(\"  reader{myc}->definitionLine = {o.line};\")",
    "}",
    "method compileobjdefdec(o, selfr, pos) {",
    "    var val := \"undefined\"",
    "    if (false != o.value) then {",
    "        if (o.value.kind == \"object\") then {",
    "            compileobject(o.value, selfr)",
    "            val := o.value.register",
    "        } else {",
    "            val := compilenode(o.value)",
    "        }",
    "    }",
    "    var myc := auto_count",
    "    auto_count := auto_count + 1",
    "    var nm := o.name.value",
    "    var enm := escapestring2(nm)",
    "    var inm := escapeident(nm)",
    "    out(\"// OBJECT CONST DEC \" ++ enm)",
    "    out(\"  adddatum2({selfr}, {val}, {pos});\")",
    "    outprint(\"Object reader_{escmodname}_{inm}_{myc}\"",
    "        ++ \"(Object self, int nparams, int *argcv, \"",
    "        ++ \"Object* args, int flags) \\{\")",
    "    outprint(\"  struct UserObject *uo = (struct UserObject *)self;\")",
    "    outprint(\"  return uo->data[{pos}];\")",
    "    outprint(\"\\}\")",
    "    out(\"  Method *reader{myc} = addmethodrealflags({selfr}, \\\"{enm}\\\",&reader_{escmodname}_{inm}_{myc}, MFLAG_DEF);\")",
    "}",
    "method compileobjvardecdata(o, selfr, pos) {",
    "    var val := \"undefined\"",
    "    if (false != o.value) then {",
    "        val := compilenode(o.value)",
    "    }",
    "    out(\"  adddatum2({selfr}, {val}, {pos});\")",
    "}",
    "method compileobjvardecmeth(o, selfr, pos) {",
    "    var myc := auto_count",
    "    auto_count := auto_count + 1",
    "    var nm := o.name.value",
    "    var enm := escapestring2(nm)",
    "    var inm := escapeident(nm)",
    "    outprint(\"Object reader_{escmodname}_{inm}_{myc}\"",
    "        ++ \"(Object self, int nparams, int *argcv, \"",
    "        ++ \"Object* args, int flags) \\{\")",
    "    var rflags := \"MFLAG_CONFIDENTIAL\"",
    "    var wflags := \"MFLAG_CONFIDENTIAL\"",
    "    for (o.annotations) do {ann->",
    "        if ((ann.kind == \"identifier\") && {ann.value == \"public\"}) then {",
    "            rflags := \"0\"",
    "            wflags := \"0\"",
    "        }",
    "        if ((ann.kind == \"identifier\") && {ann.value == \"readable\"}) then {",
    "            rflags := \"0\"",
    "        }",
    "        if ((ann.kind == \"identifier\") && {ann.value == \"writable\"}) then {",
    "            wflags := \"0\"",
    "        }",
    "    }",
    "    outprint(\"  struct UserObject *uo = (struct UserObject *)self;\")",
    "    outprint(\"  return uo->data[{pos}];\")",
    "    outprint(\"\\}\")",
    "    out(\"  Method *reader{myc} = addmethodrealflags({selfr}, \\\"{enm}\\\",&reader_{escmodname}_{inm}_{myc}, {rflags});\")",
    "    var nmw := nm ++ \":=\"",
    "    nmw := escapestring2(nmw)",
    "    outprint(\"Object writer_{escmodname}_{inm}_{myc}\"",
    "        ++ \"(Object self, int nparams, int *argcv, \"",
    "        ++ \"Object* args, int flags) \\{\")",
    "    outprint(\"  struct UserObject *uo = (struct UserObject *)self;\")",
    "    outprint(\"  uo->data[{pos}] = args[0];\")",
    "    outprint(\"  return done;\");",
    "    outprint(\"\\}\")",
    "    out(\"  Method *writer{myc} = addmethodrealflags({selfr}, \\\"{enm}:=\\\",&writer_{escmodname}_{inm}_{myc}, {wflags});\")",
    "    out(\"  reader{myc}->definitionModule = modulename;\")",
    "    out(\"  writer{myc}->definitionModule = modulename;\")",
    "    out(\"  reader{myc}->definitionLine = {o.line};\")",
    "    out(\"  writer{myc}->definitionLine = {o.line};\")",
    "}",
    "method compileobjvardec(o, selfr, pos) {",
    "    var val := \"undefined\"",
    "    if (false != o.value) then {",
    "        val := compilenode(o.value)",
    "    }",
    "    var myc := auto_count",
    "    auto_count := auto_count + 1",
    "    var nm := o.name.value",
    "    var enm := escapestring2(nm)",
    "    var inm := escapeident(nm)",
    "    out(\"// OBJECT VAR DEC \" ++ nm)",
    "    out(\"  adddatum2({selfr}, {val}, {pos});\")",
    "    outprint(\"Object reader_{escmodname}_{inm}_{myc}\"",
    "        ++ \"(Object self, int nparams, int *argcv, \"",
    "        ++ \"Object* args, int flags) \\{\")",
    "    outprint(\"  struct UserObject *uo = (struct UserObject *)self;\")",
    "    outprint(\"  return uo->data[{pos}];\")",
    "    outprint(\"\\}\")",
    "    out(\"  addmethodreal({selfr}, \\\"{enm}\\\",&reader_{escmodname}_{inm}_{myc});\")",
    "    var nmw := nm ++ \":=\"",
    "    nmw := escapestring2(nmw)",
    "    outprint(\"Object writer_{escmodname}_{inm}_{myc}\"",
    "        ++ \"(Object self, int nparams, int *argcv, \"",
    "        ++ \"Object* args, int flags) \\{\")",
    "    outprint(\"  struct UserObject *uo = (struct UserObject *)self;\")",
    "    outprint(\"  uo->data[{pos}] = args[0];\")",
    "    outprint(\"  return done;\");",
    "    outprint(\"\\}\")",
    "    out(\"  addmethodreal({selfr}, \\\"{enm}:=\\\", &writer_{escmodname}_{inm}_{myc});\")",
    "}",
    "method compileobject(o, outerRef) {",
    "    var origInBlock := inBlock",
    "    inBlock := false",
    "    var myc := auto_count",
    "    auto_count := auto_count + 1",
    "    var selfr := \"obj\" ++ myc",
    "    var numFields := 1",
    "    var numMethods := 0",
    "    var pos := 1",
    "    var superobj := false",
    "    out \"  Object inheritingObject{myc} = inheritingObject;\"",
    "    out \"  if (isTailObject) \\{\"",
    "    out \"    isTailObject = 0;\"",
    "    out \"    inheritingObject = NULL;\"",
    "    out \"  \\}\"",
    "    for (o.value) do { e ->",
    "        if (e.kind == \"vardec\") then {",
    "            numMethods := numMethods + 1",
    "        }",
    "        if (e.kind == \"method\") then {",
    "            if (e.isFresh) then {",
    "                numMethods := numMethods + 1",
    "                numFields := numFields + 1",
    "            }",
    "        }",
    "        numMethods := numMethods + 1",
    "        numFields := numFields + 1",
    "    }",
    "    if (numFields == 3) then {",
    "        numFields := 4",
    "    }",
    "    globals.push(\"static ClassData objclass{myc};\");",
    "    out(\"  Object \" ++ selfr ++ \" = alloc_userobj2({numMethods},\"",
    "        ++ \"{numFields}, objclass{myc});\")",
    "    out(\"  gc_frame_newslot({selfr});\")",
    "    if (o.name != \"object\") then {",
    "        out(\"if (objclass{myc} == NULL) \\{\")",
    "        out(\"  glfree({selfr}->class->name);\")",
    "        out(\"  {selfr}->class->name = \\\"{o.name}\\\";\")",
    "        out(\"\\}\")",
    "    }",
    "    compileobjouter(selfr, outerRef)",
    "    out(\"  Object oldself{myc} = self;\")",
    "    out(\"  struct StackFrameObject *oldstackframe{myc} = stackframe;\")",
    "    out(\"  stackframe = alloc_StackFrame(1, oldstackframe{myc});\")",
    "    out(\"  gc_frame_newslot((Object)stackframe);\")",
    "    out(\"  self = {selfr};\")",
    "    out(\"  Object *oldselfslot{myc} = selfslot;\")",
    "    out(\"  selfslot = &stackframe->slots[0];\")",
    "    out(\"  *selfslot = self;\")",
    "    out(\"  setframeelementname(stackframe, 0, \\\"self\\\");\")",
    "    out \"  Object thisouter{myc} = (*(struct UserObject *)self).data[0], lowerouter{myc} = thisouter{myc};\"",
    "    out \"  if (inheritingObject{myc}) \\{\"",
    "    out \"    struct UserObject *inho{myc} = (struct UserObject *)inheritingObject{myc};\"",
    "    out \"    while (inho{myc}->super != GraceDefaultObject) inho{myc} = (struct UserObject *)inho{myc}->super;\"",
    "    out \"    inho{myc}->super = {selfr};\"",
    "    out \"    self = inheritingObject{myc};\"",
    "    out \"    *selfslot = self;\"",
    "    out \"    lowerouter{myc} = (*(struct UserObject *)self).data[0];\"",
    "    out \"    (*(struct UserObject *)self).data[0] = thisouter{myc};\"",
    "    out \"  \\}\"",
    "    for (o.value) do { e ->",
    "        if (e.kind == \"method\") then {",
    "            compilemethod(e, selfr, pos)",
    "        } elseif { e.kind == \"vardec\" } then {",
    "            out(\"if (objclass{myc} == NULL) \\{\")",
    "            compileobjvardecmeth(e, selfr, pos)",
    "            out(\"\\}\")",
    "            out(\"{selfr}->flags |= OFLAG_MUTABLE;\")",
    "            out(\"adddatum2({selfr}, alloc_Undefined(), {pos});\")",
    "        } elseif { e.kind == \"defdec\" } then {",
    "            out(\"if (objclass{myc} == NULL) \\{\")",
    "            compileobjdefdecmeth(e, selfr, pos)",
    "            out(\"\\}\")",
    "            out(\"adddatum2({selfr}, alloc_Undefined(), {pos});\")",
    "        } elseif { e.kind == \"typedec\" } then {",
    "            out(\"if (objclass{myc} == NULL) \\{\")",
    "            compileobjtypemeth(e, selfr, pos)",
    "            out(\"\\}\")",
    "            out(\"adddatum2({selfr}, alloc_Undefined(), {pos});\")",
    "        } else {",
    "            pos := pos - 1",
    "        }",
    "        pos := pos + 1",
    "    }",
    "    pos := 1",
    "    ",
    "    def content = [ ]",
    "    if (false != o.superclass) then { content.add(o.superclass) }",
    "    o.usedTraits.do { t -> content.add(t) }",
    "    o.value.do { e -> content.add(e) }",
    "",
    "    content.do { e ->",
    "        out \"  sourceObject = {selfr};\"",
    "        if (e.kind == \"method\") then {",
    "        } elseif { e.kind == \"vardec\" } then {",
    "            compileobjvardecdata(e, selfr, pos)",
    "        } elseif { e.kind == \"defdec\" } then {",
    "            compileobjdefdecdata(e, selfr, pos)",
    "        } elseif { e.kind == \"typedec\" } then {",
    "            compileobjdefdecdata(e, selfr, pos)",
    "        } elseif { e.kind == \"inherits\" } then {",
    "            // The return value is irrelevant with factory inheritance,",
    "            // but we save it as super for the sake of \"inherits true\".",
    "            superobj := compilenode(e.value)",
    "            out \"  struct UserObject *{selfr}_uo = (struct UserObject *){selfr};\"",
    "            out \"  {selfr}_uo->super = {superobj};\"",
    "            implementAliasesAndExclusionsFor(o) inheriting(e, superobj)",
    "            pos := pos - 1",
    "        } else {",
    "            compilenode(e)",
    "            pos := pos - 1 // Compensate for below",
    "        }",
    "        pos := pos + 1",
    "    }",
    "    out(\"  objclass{myc} = {selfr}->class;\")",
    "    out(\"  objclass{myc}->definitionModule = modulename;\")",
    "    out(\"  objclass{myc}->definitionLine = {o.line};\")",
    "    out \"  (*(struct UserObject *)self).data[0] = lowerouter{myc};\"",
    "    out(\"  self = oldself{myc};\")",
    "    out(\"  selfslot = oldselfslot{myc};\")",
    "    out(\"  stackframe = oldstackframe{myc};\")",
    "    o.register := selfr",
    "    inBlock := origInBlock",
    "}",
    "method compileblock(o) {",
    "    def origInBlock = inBlock",
    "    inBlock := true",
    "    var myc := auto_count",
    "    auto_count := auto_count + 1",
    "    var obj := \"block{myc}\"",
    "    out(\"  Object {obj} = alloc_Block(NULL, NULL, \\\"{modname}\\\", {linenum});\")",
    "    out(\"  gc_frame_newslot({obj});\")",
    "    var id := ast.identifierNode.new(\"_apply\", false)",
    "    var applymeth := ast.methodNode.new(id, [ast.signaturePart.partName(id) params(o.params)], o.body, false)",
    "    applymeth.selfclosure := true",
    "    compilemethod(applymeth, obj, 0)",
    "    if (false != o.matchingPattern) then {",
    "        def pat = compilenode(o.matchingPattern)",
    "        out(\"((struct UserObject *){obj})->data[1] = {pat};\")",
    "    }",
    "    if (false != o.extraRuntimeData) then {",
    "        def erdid = ast.identifierNode.new(\"extraRuntimeData\", false)",
    "        def erdmeth = ast.methodNode.new(erdid,",
    "            [ast.signaturePart.partName(erdid)],",
    "            [o.extraRuntimeData], false)",
    "        compilemethod(erdmeth, obj, 2)",
    "    }",
    "    // TODO: get rid of extraRuntimeData — it doesn't appear to be used.",
    "    o.register := obj",
    "    inBlock := origInBlock",
    "}",
    "method compiletype(o) {     // dead code!",
    "    def myc = auto_count",
    "    auto_count := auto_count + 1",
    "    def escName = escapestring2(o.value)",
    "    def idName = escapeident(o.value)",
    "    out(\"// Type {o.value}\")",
    "    out(\"Object type{myc} = alloc_Type(\\\"{escName}\\\", {o.methods.size});\")",
    "    if (!o.anonymous) then {",
    "        out(\"*var_{idName} = type{myc};\")",
    "    }",
    "    for (o.methods) do {meth->",
    "        def mnm = escapestring2(meth.value)",
    "        out(\"add_Method((ClassData)type{myc}, \\\"{mnm}\\\", NULL);\")",
    "    }",
    "    o.register := \"done\"",
    "    if (o.anonymous) then {",
    "        o.register := \"type{myc}\"",
    "    }",
    "    if (compilationDepth == 1) then {",
    "        def idd = ast.identifierNode.new(o.value, false)",
    "        compilenode(ast.methodNode.new(idd, [ast.signaturePart.partName(o.value)],",
    "            [idd], false))",
    "    }",
    "}",
    "method compiletypedec(o) {",
    "    def myc = auto_count",
    "    auto_count := auto_count + 1",
    "    def idName = if (o.name.kind == \"generic\") then {",
    "                        escapeident(o.name.value.value)",
    "                    } else {",
    "                        escapeident(o.name.value)",
    "                    }",
    "    out(\"// Type decl {o.name.value}\")",
    "    declaredvars.push(idName)",
    "    if (o.value.kind == \"typeliteral\") then {o.value.name := idName }",
    "    compilenode(o.value)",
    "    out(\"  *var_{idName} = {o.value.register};\")",
    "    o.register := \"done\"",
    "    if (compilationDepth == 1) then {",
    "        compilenode(ast.methodNode.new(o.name, [ast.signaturePart.partName(o.name)],",
    "            [o.name], false))  // TODO: should be TypeType",
    "    }",
    "}",
    "method compiletypeliteral(o) {",
    "    def myc = auto_count",
    "    auto_count := auto_count + 1",
    "    out(\"//   Type literal \")",
    "    out(\"    Object type{myc} = alloc_Type(\\\"{o.name}\\\", {o.methods.size});\")",
    "    for (o.methods) do {meth->",
    "        def mnm = escapestring2(meth.value)",
    "        out(\"    add_Method((ClassData)type{myc}, \\\"{mnm}\\\", NULL);\")",
    "    }",
    "    // TODO: types in the type literal",
    "    o.register := \"type{myc}\"",
    "}",
    "method compilemethod(o, selfobj, pos) {",
    "    // How to deal with closures:",
    "    // Calculate body, find difference of usedvars/declaredvars, if closure",
    "    // then build as such. At top of method body bind var_x as usual, but",
    "    // set to pointer from the additional closure parameter.",
    "    out \"// method \\\"{o.nameString}\\\"\"",
    "    var origParamsUsed := paramsUsed",
    "    paramsUsed := 1",
    "    var origPartsUsed := partsUsed",
    "    partsUsed := 1",
    "    var origInBlock := inBlock",
    "    inBlock := o.selfclosure",
    "    var oldout := output",
    "    var oldbblock := bblock",
    "    var oldusedvars := usedvars",
    "    var olddeclaredvars := declaredvars",
    "    output := []",
    "    usedvars := []      // accumulates identifiers mentioned inside this method",
    "    declaredvars := []",
    "    var myc := auto_count",
    "    auto_count := auto_count + 1",
    "    var name := o.value.value",
    "    var nm := name ++ myc",
    "    var numslots := 0",
    "    var slot := 0",
    "    var haveTypedParams := false",
    "    out(\"  int i;\")",
    "    out(\"  int curarg = 0;\")",
    "    out(\"  int pushcv[] = \\{1\\};\")",
    "    if (!o.selfclosure) then {",
    "        out \"  if (nparts < {o.signature.size} && args)\"",
    "        out(\"    graceRaise(RequestError(), \\\"missing argument list for {name.quoted} (probably \"",
    "            ++ \"reflection error): got %i lists, expected \"",
    "            ++ \"{o.signature.size}.\\\", nparts);\")",
    "    }",
    "    for (o.signature.indices) do { partnr ->",
    "        var part := o.signature.at(partnr)",
    "        for (part.params) do { param ->",
    "            var pn := escapeident(param.value)",
    "            out(\"  Object *var_{pn} = &(stackframe->slots[{slot}]);\")",
    "            out(\"  *var_{pn} = args[curarg];\")",
    "            out(\"  curarg++;\")",
    "            declaredvars.push(pn)",
    "            slot := slot + 1",
    "            numslots := numslots + 1",
    "            if (param.dtype != false) then {",
    "                if ((param.dtype.value != \"Unknown\")",
    "                    && ((param.dtype.kind == \"identifier\")",
    "                        || (param.dtype.kind == \"typeliteral\"))) then {",
    "                    haveTypedParams := true",
    "                }",
    "            }",
    "        }",
    "        if (!o.selfclosure) then {",
    "            out \"  if (argcv && argcv[{partnr - 1}] != {part.params.size})\"",
    "            out \"    graceRaise(RequestError(), \\\"wrong number of arguments for {part.name.quoted}\\\");\"",
    "        }",
    "    }",
    "    out(\"  Object *selfslot = &(stackframe->slots[{slot}]);\")",
    "    out(\"  *selfslot = self;\")",
    "    out(\"  setframeelementname(stackframe, 0, \\\"self\\\");\")",
    "    slot := slot + 1",
    "    numslots := numslots + 1",
    "    out \"  if (methodInheritingObject) curarg++;\"",
    "    if (o.typeParams != false) then {",
    "        out(\"// Start typeParams\")",
    "        o.typeParams.do {g->",
    "            var gn := escapeident(g.value)",
    "            declaredvars.push(gn)",
    "            out(\"  Object *var_{gn} = &(stackframe->slots[{slot}]);\")",
    "            slot := slot + 1",
    "            numslots := numslots + 1",
    "        }",
    "        out(\"  if (nparts == 1 + {o.signature.size} + (methodInheritingObject != NULL)) \\{\")",
    "        out(\"    if (argcv[nparts-1] < {o.typeParams.size}) \\{\")",
    "        out(\"      graceRaise(RequestError(), \\\"insufficient generic parameters\\\");\")",
    "        out(\"    \\}\")",
    "        o.typeParams.do {g->",
    "            var gn := escapeident(g.value)",
    "            out(\"    *var_{gn} = args[curarg++];\")",
    "        }",
    "        out(\"  \\} else \\{\")",
    "        o.typeParams.do {g->",
    "            var gn := escapeident(g.value)",
    "            out(\"    *var_{gn} = Unknown;\")",
    "        }",
    "        out(\"  \\}\")",
    "        out(\"// End typeParams\")",
    "    }",
    "    var ret := \"done\"",
    "    numslots := numslots + countbindings(o.body)",
    "    definebindings(o.body, slot)",
    "    var tailObject := false",
    "    var tco := false",
    "    if ((o.body.size > 0) && {o.body.last.kind == \"call\"}",
    "        && {util.extensions.contains(\"TailCall\")}) then {",
    "        tco := o.body.pop",
    "    }",
    "    if ((o.body.size > 0) && {o.body.last.kind == \"object\"}) then {",
    "        tailObject := o.body.pop       // remove tail object",
    "        if (tailObject.name == \"object\") then {",
    "            var selfName := selfobj",
    "            if (selfName.startsWith \"var_\") then {",
    "                selfName := selfName.substringFrom 5 to(selfName.size)",
    "            }",
    "            tailObject.name := selfobj ++ \".\" ++ o.nameString",
    "        }",
    "    }",
    "    for (o.body) do { l ->",
    "        ret := compilenode(l)",
    "    }",
    "    if (false != tailObject) then {",
    "        o.body.push(tailObject)        // put tail object back",
    "        out \"  isTailObject = 1;\"",
    "        out \"  inheritingObject = methodInheritingObject;\"",
    "        compileobject(tailObject, \"self\")",
    "        ret := tailObject.register",
    "    }",
    "    if (false != tco) then {",
    "        compilecall(tco, true)",
    "        ret := tco.register",
    "    }",
    "    out(\"  gc_frame_end(frame);\")",
    "    out(\"  return {ret};\")",
    "    out(\"\\}\")",
    "    // Now we've finished compiling the body of the method, we need to ",
    "    // construct the closure that makes the variables available.",
    "    var body := output",
    "    outswitchup",
    "    var closurevars := []",
    "    for (usedvars) do { u ->",
    "        var decl := false",
    "        for (declaredvars) do { d->",
    "            if (d == u) then {",
    "                decl := true",
    "            }",
    "        }",
    "        if (decl) then {",
    "            decl := decl",
    "        } else {",
    "            var found := false",
    "            for (closurevars) do { v ->",
    "                if (v == u) then {",
    "                    found := true",
    "                }",
    "            }",
    "            if (found) then {",
    "                found := found",
    "            } else {",
    "                closurevars.push(u)",
    "            }",
    "        }",
    "    }",
    "    if (o.selfclosure) then {",
    "        closurevars.push(\"self\")",
    "    }",
    "    var litname := escapeident(\"meth_{modname}_{escapestring2(nm)}\")",
    "    if (closurevars.size > 0) then {",
    "        if (o.selfclosure) then {",
    "            out(\"Object {litname}(Object realself, int nparts, int *argcv, \"",
    "                ++ \"Object *args, int32_t flags) \\{\")",
    "            out(\"  struct UserObject *uo = (struct UserObject*)realself;\")",
    "        } else {",
    "            out(\"Object {litname}(Object self, int nparts, int *argcv, Object *args, \"",
    "                ++ \"int32_t flags) \\{\")",
    "            out(\"  struct UserObject *uo = (struct UserObject*)self;\")",
    "        }",
    "        out(\"  Object closure = getdatum((Object)uo, {pos}, (flags>>24)&0xff);\")",
    "        out(\"  struct StackFrameObject *stackframe = alloc_StackFrame({numslots}, getclosureframe(closure));\")",
    "        out(\"  pushclosure(closure);\")",
    "    } else {",
    "        out(\"Object {litname}(Object self, int nparts, int *argcv, Object *args, \"",
    "            ++ \"int32_t flags) \\{\")",
    "        out(\"  struct StackFrameObject *stackframe = alloc_StackFrame({numslots}, NULL);\")",
    "        out(\"  pushclosure(NULL);\")",
    "    }",
    "    out(\"  pushstackframe(stackframe, \\\"{escapestring2(name)}\\\");\")",
    "    out(\"  int frame = gc_frame_new();\")",
    "    out(\"  gc_frame_newslot((Object)stackframe);\")",
    "    out \"  Object methodInheritingObject = NULL;\"",
    "    for (o.signature.indices) do { partnr ->",
    "        def part = o.signature.at(partnr)",
    "        if (part.params.size > 0) then {",
    "            out(\"  if (nparts > 0 && argcv[{partnr - 1}] < {part.params.size})\")",
    "            out(\"    graceRaise(RequestError(), \\\"insufficient arguments to method {name.quoted}\\\");\")",
    "        }",
    "    }",
    "    // We need to detect which parameters are used in a closure, and",
    "    // treat those specially. As params[] is stack-allocated, references",
    "    // to those variables would fail once the method was out of scope",
    "    // unless we copied them onto the heap.",
    "    var i := 0",
    "    def toremove = []",
    "    for (o.signature) do { part ->",
    "        for (part.params) do { p ->",
    "            var pn := escapeident(p.value)",
    "            if (closurevars.contains(pn)) then {",
    "                toremove.push(pn)",
    "            }",
    "        }",
    "    }",
    "    // APB: I believe that `toremove` is the list of enclosing",
    "    // variables that are shadowed by parameters.  This is unnecessary, ",
    "    // since it is syntactially illgeal for a parameter to have the",
    "    // same name as a variable in an enclosing scope.",
    "    def origclosurevars = closurevars",
    "    closurevars := []",
    "    for (origclosurevars) do {pn->",
    "        if (toremove.contains(pn)) then {",
    "            // Remove this one",
    "        } else {",
    "            closurevars.push(pn)",
    "        }",
    "    }",
    "    out(\"  Object params[{paramsUsed}];\")",
    "    out(\"  int partcv[{partsUsed}];\")",
    "    var j := 0",
    "    for (closurevars) do { cv ->",
    "        if (cv == \"self\") then {",
    "            out(\"  Object self = *(getfromclosure(closure, {j}));\")",
    "            out(\"  sourceObject = self;\")",
    "        } else {",
    "            out(\"  Object *var_{cv} = getfromclosure(closure, {j});\")",
    "        }",
    "        j := j + 1",
    "    }",
    "    for (body) do { l->",
    "        out(l)",
    "    }",
    "    outswitchdown",
    "    output := oldout",
    "    bblock := oldbblock",
    "    usedvars := oldusedvars",
    "    declaredvars := olddeclaredvars",
    "    for (closurevars) do { cv ->",
    "        if (cv != \"self\") then {",
    "            if ((usedvars.contains(cv)).not) then {",
    "                usedvars.push(cv)",
    "            }",
    "        }",
    "    }",
    "    if (selfobj == false) then {",
    "    } elseif { closurevars.size == 0 } then {",
    "        var uo2 := \"uo{myc}\"",
    "        out(\"  struct UserObject *{uo2} = (struct UserObject*){selfobj};\")",
    "        out(\"  {uo2}->data[{pos}] = emptyclosure;\")",
    "        out(\"  Method *meth_{litname} = addmethod2pos({selfobj}, \\\"{escapestring2(name)}\\\", &{litname}, {pos});\")",
    "        compilemethodtypes(litname, o)",
    "    } else {",
    "        out(\"  block_savedest({selfobj});\")",
    "        out(\"  Object closure\" ++ myc ++ \" = createclosure(\"",
    "            ++ closurevars.size ++ \", \\\"{escapestring2(name)}\\\");\")",
    "        out(\"  setclosureframe(closure{myc}, stackframe);\")",
    "        for (closurevars) do { v ->",
    "            if (v == \"self\") then {",
    "                out(\"  addtoclosure(closure{myc}, selfslot);\")",
    "                auto_count := auto_count + 1",
    "            } else {",
    "                out(\"  addtoclosure(closure{myc}, var_{v});\")",
    "            }",
    "        }",
    "        var uo := \"uo{myc}\"",
    "        out(\"  struct UserObject *{uo} = (struct UserObject*){selfobj};\")",
    "        out(\"  {uo}->data[{pos}] = (Object)closure{myc};\")",
    "        out(\"  Method *meth_{litname} = addmethod2pos({selfobj}, \\\"{escapestring2(name)}\\\", &{litname}, {pos});\")",
    "        compilemethodtypes(litname, o)",
    "    }",
    "    for (o.annotations) do {ann->",
    "        if ((ann.kind == \"identifier\") && {ann.value == \"confidential\"}) then {",
    "            out(\"  meth_{litname}->flags |= MFLAG_CONFIDENTIAL;\");",
    "        }",
    "    }",
    "    out(\"  meth_{litname}->definitionModule = modulename;\")",
    "    out(\"  meth_{litname}->definitionLine = {o.line};\")",
    "    if (o.isFresh) then {",
    "        compilefreshmethod(o, nm, body, closurevars, selfobj, pos, numslots,",
    "            oldout)",
    "    }",
    "    inBlock := origInBlock",
    "    paramsUsed := origParamsUsed",
    "    partsUsed := origPartsUsed",
    "} // end of compilemethod",
    "",
    "// Compiles the \"fresh\" method version of a method, when applicable.",
    "// This method is given a different name ending in _object, with the final",
    "// parameter being the object into which to insert methods.",
    "method compilefreshmethod(o, nm, body, closurevars, selfobj, pos, numslots,",
    "        oldout) {",
    "    def myc = auto_count",
    "    auto_count := auto_count + 1",
    "    var litname := escapeident(\"meth_{modname}_{escapestring2(nm)}_object\")",
    "    def name = escapestring2(o.value.value ++ \"()object\")",
    "    outswitchup",
    "    if (closurevars.size > 0) then {",
    "        if (o.selfclosure) then {",
    "            out(\"Object {litname}(Object realself, int nparts, int *argcv, \"",
    "                ++ \"Object *args, int32_t flags) \\{\")",
    "            out(\"  struct UserObject *uo = (struct UserObject*)realself;\")",
    "        } else {",
    "            out(\"Object {litname}(Object self, int nparts, int *argcv, Object *args, \"",
    "                ++ \"int32_t flags) \\{\")",
    "            out(\"  struct UserObject *uo = (struct UserObject*)self;\")",
    "        }",
    "        out(\"  Object closure = getdatum((Object)uo, {pos}, (flags>>24)&0xff);\")",
    "        out(\"  struct StackFrameObject *stackframe = alloc_StackFrame({numslots}, getclosureframe(closure));\")",
    "        out(\"  pushclosure(closure);\")",
    "    } else {",
    "        out(\"Object {litname}(Object self, int nparts, int *argcv, Object *args, \"",
    "            ++ \"int32_t flags) \\{\")",
    "        out(\"  struct StackFrameObject *stackframe = alloc_StackFrame({numslots}, NULL);\")",
    "        out(\"  pushclosure(NULL);\")",
    "    }",
    "    out(\"  pushstackframe(stackframe, \\\"{escapestring2(name)}\\\");\")",
    "    out(\"  int frame = gc_frame_new();\")",
    "    out(\"  gc_frame_newslot((Object)stackframe);\")",
    "    var sumAccum := \"0\"",
    "    for (o.signature.indices) do { partnr ->",
    "        sumAccum := sumAccum ++ \" + argcv[{partnr - 1}]\"",
    "    }",
    "    out \"  Object methodInheritingObject = args[{sumAccum}];\"",
    "    for (o.signature.indices) do { partnr ->",
    "        def part = o.signature.at(partnr)",
    "        if (part.params.size > 0) then {",
    "            out(\"  if (nparts > 0 && argcv[{partnr - 1}] < {part.params.size})\")",
    "            out(\"    graceRaise(RequestError(), \\\"insufficient arguments to method {name}\\\");\")",
    "        }",
    "    }",
    "    out(\"  Object params[{paramsUsed}];\")",
    "    out(\"  int partcv[{partsUsed}];\")",
    "    var j := 0",
    "    for (closurevars) do { cv ->",
    "        if (cv == \"self\") then {",
    "            out(\"  Object self = *(getfromclosure(closure, {j}));\")",
    "            out(\"  sourceObject = self;\")",
    "        } else {",
    "            out(\"  Object *var_{cv} = getfromclosure(closure, {j});\")",
    "        }",
    "        j := j + 1",
    "    }",
    "    for (body) do { l->",
    "        out(l)",
    "    }",
    "    output := oldout",
    "    if (selfobj == false) then {",
    "    } elseif { closurevars.size == 0 } then {",
    "        out(\"  Method *meth_{litname} = addmethod2pos({selfobj}, \\\"{escapestring2(name)}\\\", &{litname}, {pos});\")",
    "        compilemethodtypes(litname, o)",
    "    } else {",
    "        out(\"  block_savedest({selfobj});\")",
    "        out(\"  Object closure\" ++ myc ++ \" = createclosure(\"",
    "            ++ closurevars.size ++ \", \\\"{escapestring2(name)}\\\");\")",
    "        out(\"  setclosureframe(closure{myc}, stackframe);\")",
    "        for (closurevars) do { v ->",
    "            if (v == \"self\") then {",
    "                out(\"  addtoclosure(closure{myc}, selfslot);\")",
    "                auto_count := auto_count + 1",
    "            } else {",
    "                out(\"  addtoclosure(closure{myc}, var_{v});\")",
    "            }",
    "        }",
    "        var uo := \"uo{myc}\"",
    "        out(\"  Method *meth_{litname} = addmethod2pos({selfobj}, \\\"{escapestring2(name)}\\\", &{litname}, {pos});\")",
    "    }",
    "    for (o.annotations) do {ann->",
    "        if ((ann.kind == \"identifier\") && {ann.value == \"confidential\"}) then {",
    "            out(\"  meth_{litname}->flags |= MFLAG_CONFIDENTIAL;\");",
    "        }",
    "    }",
    "    out(\"  meth_{litname}->definitionModule = modulename;\")",
    "    out(\"  meth_{litname}->definitionLine = {o.line};\")",
    "}",
    "method compilemethodtypes(litname, o) {",
    "    var argcv := \"  int argcv_{litname}[] = \\{\"",
    "    for (o.signature.indices) do { partnr ->",
    "        var part := o.signature.at(partnr)",
    "        argcv := argcv ++ part.params.size",
    "        if (partnr < o.signature.size) then {",
    "            argcv := argcv ++ \", \"",
    "        }",
    "    }",
    "    argcv := argcv ++ \"\\};\"",
    "    out(argcv)",
    "    out(\"  meth_{litname}->type = alloc_MethodType({o.signature.size}, argcv_{litname});\")",
    "    var pi := 0",
    "    for (o.signature) do { part ->",
    "        for (part.params) do { p ->",
    "            // We store information for static top-level types only:",
    "            // absent information is treated as Unknown (and unchecked).",
    "            if (false != p.dtype) then {",
    "                if ((p.dtype.kind == \"identifier\")",
    "                    || (p.dtype.kind == \"typeliteral\")) then {",
    "                    def typeid = escapeident(p.dtype.value)",
    "                    if (topLevelTypes.contains(typeid)) then {",
    "                        out(\"meth_{litname}->type->types[{pi}] \"",
    "                            ++ \"= type_{typeid};\")",
    "                        out(\"meth_{litname}->type->names[{pi}] \"",
    "                            ++ \"= \\\"{escapestring2(p.value)}\\\";\")",
    "                    }",
    "                }",
    "            }",
    "            pi := pi + 1",
    "        }",
    "    }",
    "}",
    "method compileifexpr(o) {",
    "    var myc := auto_count",
    "    auto_count := auto_count + 1",
    "    var cond := compilenode(o.value)",
    "    out(\"  Object if{myc} = done;\")",
    "    out(\"struct StackFrameObject *iftmpstackframe{myc} = stackframe;\")",
    "    out(\"  if (istrue({cond})) \\{\")",
    "    var numslots := countbindings(o.thenblock.body)",
    "    out(\"stackframe = alloc_StackFrame({numslots}, iftmpstackframe{myc});\")",
    "    out(\"gc_frame_newslot((Object)stackframe);\")",
    "    var tret := \"done\"",
    "    var fret := \"done\"",
    "    var tblock := \"ERROR\"",
    "    var fblock := \"ERROR\"",
    "    def thenList = o.thenblock.body",
    "    definebindings(thenList, 0)",
    "    for (thenList) do { l->",
    "        tret := compilenode(l)",
    "    }",
    "    out(\"    gc_frame_newslot({tret});\")",
    "    out(\"    if{myc} = {tret};\")",
    "    out(\"  \\} else \\{\")",
    "    def elseList = o.elseblock.body",
    "    if (elseList.size > 0) then {",
    "        numslots := countbindings(elseList)",
    "        out(\"  stackframe = alloc_StackFrame({numslots}, iftmpstackframe{myc});\")",
    "        out(\"  gc_frame_newslot((Object)stackframe);\")",
    "        definebindings(elseList, 0)",
    "        for (elseList) do { l->",
    "            fret := compilenode(l)",
    "        }",
    "        out(\"    gc_frame_newslot({fret});\")",
    "        out(\"    if{myc} = {fret};\")",
    "    }",
    "    out(\"  \\}\")",
    "    out(\"stackframe = iftmpstackframe{myc};\")",
    "    o.register := \"if\" ++ myc",
    "}",
    "method compileif(o) {",
    "    if (o.handledIdentifiers == false) then {",
    "        return compileifexpr(o)",
    "    }",
    "    var myc := auto_count",
    "    auto_count := auto_count + 1",
    "    var cond := compilenode(o.value)",
    "    out(\"  Object if{myc} = done;\")",
    "    out(\"  if (istrue({cond})) \\{\")",
    "    var tret := \"done\"",
    "    var fret := \"done\"",
    "    var tblock := \"ERROR\"",
    "    var fblock := \"ERROR\"",
    "    def thenList = o.thenblock.body",
    "    for (thenList) do { l->",
    "        tret := compilenode(l)",
    "    }",
    "    out(\"    gc_frame_newslot({tret});\")",
    "    out(\"    if{myc} = {tret};\")",
    "    out(\"  \\} else \\{\")",
    "    def elseList = o.elseblock.body",
    "    if (elseList.size > 0) then {",
    "        for (elseList) do { l->",
    "            fret := compilenode(l)",
    "        }",
    "        out(\"    gc_frame_newslot({fret});\")",
    "        out(\"    if{myc} = {fret};\")",
    "    }",
    "    out(\"  \\}\")",
    "    o.register := \"if\" ++ myc",
    "}",
    "method compileidentifier(o) {",
    "    var name := escapeident(o.value)",
    "    if (name == \"super\") then {",
    "        def sugg = errormessages.suggestion.new",
    "        sugg.replaceRange(o.linePos, o.linePos + 4)with \"self\" onLine(o.line)",
    "        errormessages.syntaxError(\"'super' can be used only to the \"",
    "                ++ \"left of the . in a method request. \"",
    "                ++ \"Use 'self' instead?\")",
    "            atRange(",
    "                o.line, o.linePos, o.linePos + 4)withSuggestion(sugg)",
    "    }",
    "    if (name == \"self\") then {",
    "        o.register := \"self\"",
    "    } elseif { name == \"__compilerRevision\" } then {",
    "        out(\"  Object var_val___compilerRevision\" ++ auto_count",
    "            ++ \" = alloc_String(compilerRevision);\")",
    "        o.register := \"var_val___compilerRevision\" ++ auto_count",
    "        auto_count := auto_count + 1",
    "    } elseif { name == \"_46__46__46_\" } then {",
    "        out(\"  Object ellipsis{auto_count} = alloc_ellipsis();\")",
    "        o.register := \"ellipsis{auto_count}\"",
    "        auto_count := auto_count + 1",
    "    } else {",
    "        name := escapestring2(name)",
    "        usedvars.push(name)",
    "        o.register := \"*var_{name}\"",
    "    }",
    "}",
    "method compilebind(o) {",
    "    def lhs = o.dest",
    "    if (lhs.isIdentifier) then {",
    "        def val = compilenode(o.value)",
    "        def nm = escapeident(lhs.value)",
    "        usedvars.push(nm)",
    "        out(\"  *var_{nm} = {val};\")",
    "        out(\"  if ({val} == undefined)\")",
    "        out(\"    callmethod(done, \\\"assignment\\\", 0, NULL, NULL);\")",
    "        // APB: not clear what the above test is trying to accomplish",
    "        auto_count := auto_count + 1",
    "        o.register := \"done\"",
    "    } else {",
    "        ProgrammingError.raise \"bindNode {o} does not bind an indentifer\"",
    "    }",
    "}",
    "method compiledefdec(o) {",
    "    var nm",
    "    if (o.name.kind == \"generic\") then {",
    "        nm := escapeident(o.name.value.value)",
    "    } else {",
    "        nm := escapeident(o.name.value)",
    "    }",
    "    declaredvars.push(nm)",
    "    var val := compilenode(o.value)",
    "    out(\"  *var_{nm} = {val};\")",
    "    out(\"  if ({val} == undefined)\")",
    "    out(\"    callmethod(done, \\\"assignment\\\", 0, NULL, NULL);\")",
    "    if (compilationDepth == 1) then {",
    "        compilenode(ast.methodNode.new(o.name, [ast.signaturePart.partName(o.name)], [o.name], false))",
    "        if (ast.findAnnotation(o, \"parent\")) then {",
    "            out(\"  ((struct UserObject *)self)->super = {val};\")",
    "        }",
    "    }",
    "    o.register := \"done\"",
    "}",
    "method compilevardec(o) {",
    "    var nm := escapeident(o.name.value)",
    "    declaredvars.push(nm)",
    "    var val := o.value",
    "    var hadval := false",
    "    if (false != val) then {",
    "        val := compilenode(val)",
    "        hadval := true",
    "    } else {",
    "        val := \"undefined\"",
    "    }",
    "    out(\"  *var_{nm} = {val};\")",
    "    if (hadval) then {",
    "        out(\"  if ({val} == undefined)\")",
    "        out(\"    callmethod(done, \\\"assignment\\\", 0, NULL, NULL);\")",
    "    }",
    "    if (compilationDepth == 1) then {",
    "        compilenode(ast.methodNode.new(o.name, [ast.signaturePart.partName(o.name)], [o.name], false))",
    "        def assignID = ast.identifierNode.new(o.name.value ++ \":=\", false)",
    "        def tmpID = ast.identifierNode.new(\"_var_assign_tmp\", false)",
    "        compilenode(ast.methodNode.new(assignID, [ast.signaturePart.partName(assignID) params( [tmpID] )],",
    "            [ast.bindNode.new(o.name, tmpID)], false))",
    "    }",
    "    o.register := \"done\"",
    "}",
    "method compiletrycatch(o) {",
    "    def myc = auto_count",
    "    auto_count := auto_count + 1",
    "    def cases = o.cases",
    "    if (o.cases.size > paramsUsed) then {",
    "        paramsUsed := o.cases.size",
    "    }",
    "    def mainblock = compilenode(o.value)",
    "    out(\"  int frame{myc} = gc_frame_new();\")",
    "    out(\"  gc_frame_newslot({mainblock});\")",
    "    var i := 0",
    "    def params = []",
    "    for (cases) do {c->",
    "        def e = compilenode(c)",
    "        out(\"  gc_frame_newslot({e});\")",
    "        params.push([i, e])",
    "        i := i + 1",
    "    }",
    "    var finally := \"NULL\"",
    "    if (false != o.finally) then {",
    "        finally := compilenode(o.finally)",
    "        out(\"  gc_frame_newslot({finally});\")",
    "    }",
    "    for (params) do {ie->",
    "        def idx = ie.first",
    "        def e = ie.second",
    "        out(\"  params[{idx}] = {e};\")",
    "    }",
    "    out \"  setline({o.line});\"",
    "    out(\"  Object catchres{myc} = tryCatch({mainblock}, params, {cases.size},\"",
    "        ++ \"{finally});\")",
    "    out(\"  gc_frame_end(frame{myc});\")",
    "    o.register := \"catchres\" ++ myc",
    "}",
    "method compilematchcase(o) {",
    "    def myc = auto_count",
    "    auto_count := auto_count + 1",
    "    def cases = o.cases",
    "    if (o.cases.size > paramsUsed) then {",
    "        paramsUsed := o.cases.size",
    "    }",
    "    def matchee = compilenode(o.value)",
    "    out(\"  int frame{myc} = gc_frame_new();\")",
    "    out(\"  gc_frame_newslot({matchee});\")",
    "    var i := 0",
    "    def params = []",
    "    for (cases) do {c->",
    "        def e = compilenode(c)",
    "        out(\"  gc_frame_newslot({e});\")",
    "        params.push([i, e])",
    "        i := i + 1",
    "    }",
    "    var elsecase := \"NULL\"",
    "    if (false != o.elsecase) then {",
    "        elsecase := compilenode(o.elsecase)",
    "        out(\"  gc_frame_newslot({elsecase});\")",
    "    }",
    "    for (params) do {ie->",
    "        def idx = ie.first",
    "        def e = ie.second",
    "        out(\"  params[{idx}] = {e};\")",
    "    }",
    "    out(\"  Object matchres{myc} = matchCase({matchee}, params, {cases.size},\"",
    "        ++ \"{elsecase});\")",
    "    out(\"  gc_frame_end(frame{myc});\")",
    "    o.register := \"matchres\" ++ myc",
    "}",
    "method compileop(o) {",
    "    def myc = auto_count",
    "    auto_count := auto_count + 1",
    "    var right := compilenode(o.right)",
    "    out(\"  int op_slot_right_{myc} = gc_frame_newslot({right});\")",
    "    auto_count := auto_count + 1",
    "    if ((o.left.kind == \"identifier\") && {o.left.value == \"super\"}) then {",
    "        def evl = escapestring2(o.value)",
    "        out(\"  params[0] = {right};\")",
    "        out(\"  partcv[0] = 1;\")",
    "        out(\"  Object opresult{myc} = callmethod4(self, \"",
    "            ++ \"\\\"{evl}\\\", 1, partcv, params, ((flags >> 24) & 0xff) + 1,\"",
    "            ++ \"CFLAG_SELF);\")",
    "        o.register := \"opresult{myc}\"",
    "        return true",
    "    }",
    "    var left := compilenode(o.left)",
    "    out(\"  int op_slot_left_{myc} = gc_frame_newslot({left});\")",
    "    if ((o.value == \"+\") || (o.value == \"*\") || (o.value == \"/\") ||",
    "        (o.value == \"-\") || (o.value == \"%\")) then {",
    "        var rnm := \"sum\"",
    "        if (o.value == \"*\") then {",
    "            rnm := \"prod\"",
    "        }",
    "        if (o.value == \"/\") then {",
    "            rnm := \"quotient\"",
    "        }",
    "        if (o.value == \"-\") then {",
    "            rnm := \"diff\"",
    "        }",
    "        if (o.value == \"%\") then {",
    "            rnm := \"modulus\"",
    "        }",
    "        out(\"  params[0] = {right};\")",
    "        out(\"  partcv[0] = 1;\")",
    "        out(\"  Object {rnm}{auto_count} = callmethod({left}, \\\"{o.value}\\\", \"",
    "            ++ \"1, partcv, params);\")",
    "        o.register := rnm ++ auto_count",
    "        auto_count := auto_count + 1",
    "    } else {",
    "        out(\"  params[0] = {right};\")",
    "        out(\"  partcv[0] = 1;\")",
    "        out(\"  Object opresult{auto_count} = \"",
    "            ++ \"callmethod({left}, \\\"{o.value.quoted}\\\", 1, partcv, params);\")",
    "        o.register := \"opresult\" ++ auto_count",
    "        auto_count := auto_count + 1",
    "    }",
    "}",
    "method compilecall(o, tailcall) {",
    "    def myc = auto_count",
    "    auto_count := auto_count + 1",
    "    var args := []",
    "    var obj := \"\"",
    "    var evl",
    "    var i := 0",
    "    out(\"  int callframe{myc} = gc_frame_new();\")",
    "    for (o.with) do { part ->",
    "        for (part.args) do { p ->",
    "            var r := compilenode(p)",
    "            args.push(r)",
    "            out(\"  gc_frame_newslot({r});\")",
    "        }",
    "    }",
    "    if (args.size > paramsUsed) then {",
    "        paramsUsed := args.size",
    "    }",
    "    if (o.with.size > partsUsed) then {",
    "        partsUsed := o.with.size",
    "    }",
    "    var nparts := o.with.size",
    "    if (false != o.generics) then {",
    "        if (partsUsed == o.with.size) then {",
    "            partsUsed := partsUsed + 1",
    "        }",
    "        if (paramsUsed < (args.size + o.generics.size)) then {",
    "            paramsUsed := paramsUsed + o.generics.size",
    "        }",
    "        nparts := nparts + 1",
    "        out(\"  partcv[{o.with.size}] = {o.generics.size};\")",
    "        i := args.size",
    "        o.generics.do {g->",
    "            out(\"  params[{i}] = {compilenode(g)};\")",
    "            i := i + 1",
    "        }",
    "        i := 0",
    "    }",
    "    evl := escapestring2(o.value.value)",
    "    if ((o.value.kind == \"member\") && {(o.value.in.kind == \"identifier\")",
    "        && (o.value.in.value == \"super\")}) then {",
    "        out \"// call case 1: super request\"",
    "        for (args) do { arg ->",
    "            out(\"  params[{i}] = {arg};\")",
    "            i := i + 1",
    "        }",
    "        for (o.with.indices) do { partnr ->",
    "            out(\"  partcv[{partnr - 1}] = {o.with.at(partnr).args.size};\")",
    "        }",
    "        out(\"  Object call{auto_count} = callmethod4(self, \\\"{evl}\\\", \"",
    "            ++ \"{nparts}, partcv, params, ((flags >> 24) & 0xff) + 1, \"",
    "            ++ \"CFLAG_SELF);\")",
    "    } elseif {(o.value.kind == \"member\") && {",
    "        o.value.in.kind == \"member\"} && {",
    "            o.value.in.value == \"outer\"} } then {",
    "        out \"// call case 2: outer request\"",
    "        def ot = compilenode(o.value.in)",
    "        for (args) do { arg ->",
    "            out(\"  params[{i}] = {arg};\")",
    "            i := i + 1",
    "        }",
    "        for (o.with.indices) do { partnr ->",
    "            out(\"  partcv[{partnr - 1}] = {o.with.at(partnr).args.size};\")",
    "        }",
    "        out(\"  Object call{auto_count} = callmethodflags({ot}, \\\"{evl}\\\", \"",
    "            ++ \"{nparts}, partcv, params, CFLAG_SELF);\")",
    "    } elseif { (o.value.kind == \"member\") && {(o.value.in.kind == \"identifier\")",
    "        && (o.value.in.value == \"self\") && (o.value.value == \"outer\")} } then {",
    "        out \"// call case 3: self.outer request\"",
    "        out(\"  Object call{auto_count} = callmethod3(self, \\\"{evl}\\\", \"",
    "            ++ \"0, 0, NULL, ((flags >> 24) & 0xff));\")",
    "    } elseif { (o.value.kind == \"member\") && {(o.value.in.kind == \"identifier\")",
    "        && (o.value.in.value == \"self\")} } then {",
    "        out \"// call case 4: self request\"",
    "        for (args) do { arg ->",
    "            out(\"  params[{i}] = {arg};\")",
    "            i := i + 1",
    "        }",
    "        for (o.with.indices) do { partnr ->",
    "            out(\"  partcv[{partnr - 1}] = {o.with.at(partnr).args.size};\")",
    "        }",
    "        out(\"  Object call{auto_count} = callmethodflags(self, \\\"{evl}\\\", \"",
    "            ++ \"{nparts}, partcv, params, CFLAG_SELF);\")",
    "    } elseif { (o.value.kind == \"member\") && {(o.value.in.kind == \"identifier\")",
    "        && (o.value.in.value == \"prelude\")} } then {",
    "        out \"// call case 5: prelude request\"",
    "        for (args) do { arg ->",
    "            out(\"  params[{i}] = {arg};\")",
    "            i := i + 1",
    "        }",
    "        for (o.with.indices) do { partnr ->",
    "            out(\"  partcv[{partnr - 1}] = {o.with.at(partnr).args.size};\")",
    "        }",
    "        out(\"  Object call{auto_count} = callmethodflags(prelude, \\\"{evl}\\\", \"",
    "            ++ \"{nparts}, partcv, params, CFLAG_SELF);\")",
    "    } elseif { o.value.kind == \"member\" } then {",
    "        out \"// call case 6: other member request\"",
    "        obj := compilenode(o.value.in)",
    "        for (args) do { arg ->",
    "            out(\"  params[{i}] = {arg};\")",
    "            i := i + 1",
    "        }",
    "        for (o.with.indices) do { partnr ->",
    "            out(\"  partcv[{partnr - 1}] = {o.with.at(partnr).args.size};\")",
    "        }",
    "        if (tailcall) then {",
    "            out(\"  Object call{auto_count} = tailcall({obj}, \\\"{evl}\\\",\")",
    "            out(\"    {nparts}, partcv, params, 0);\")",
    "        } else {",
    "            out(\"  Object call{auto_count} = callmethod({obj}, \\\"{evl}\\\",\")",
    "            out(\"    {nparts}, partcv, params);\")",
    "        }",
    "    } else {",
    "        out \"// call case 7: all other requests\"",
    "        obj := \"self\"",
    "        for (args) do { arg ->",
    "            out(\"  params[{i}] = {arg};\")",
    "            i := i + 1",
    "        }",
    "        for (o.with.indices) do { partnr ->",
    "            out(\"  partcv[{partnr - 1}] = {o.with.at(partnr).args.size};\")",
    "        }",
    "        if (tailcall) then {",
    "            out(\"  Object call{auto_count} = tailcall(self, \\\"{evl}\\\",\")",
    "            out(\"    {nparts}, partcv, params, 0);\")",
    "        } else {",
    "            out(\"  Object call{auto_count} = callmethod(self, \\\"{evl}\\\",\")",
    "            out(\"    {nparts}, partcv, params);\")",
    "        }",
    "    }",
    "    out(\"  gc_frame_end(callframe{myc});\")",
    "    o.register := \"call\" ++ auto_count",
    "    auto_count := auto_count + 1",
    "}",
    "",
    "method compiledialect(o) {",
    "    out(\"// Dialect \\\"{o.value}\\\"\")",
    "    var snm := \"\"",
    "    for (o.value) do {c->",
    "        if (c == \"/\") then {",
    "            snm := \"\"",
    "        } else {",
    "            snm := snm ++ c",
    "        }",
    "    }",
    "    var fn := escapestring2(o.value)",
    "    var modg := \"module_\" ++ escapeident(snm)",
    "    out(\"  if ({modg} == NULL)\")",
    "    if (imports.static.contains(o.value)) then {",
    "        out(\"    {modg} = {modg}_init();\")",
    "    } else {",
    "        out(\"    {modg} = dlmodule(\\\"{fn}\\\");\")",
    "    }",
    "    out(\"  Object *var_dialect = alloc_var();\")",
    "    out(\"  *var_dialect = {modg};\")",
    "    out(\"  prelude = {modg};\")",
    "    globals.push(\"Object {modg}_init();\")",
    "    globals.push(\"Object {modg};\")",
    "    auto_count := auto_count + 1",
    "    if (xmodule.currentDialect.hasAtEnd) then {",
    "        out(\"  partcv[0] = 1;\")",
    "        out(\"  params[0] = alloc_String(\\\"{escapestring(modname)}\\\");\")",
    "        out(\"  callmethodflags(prelude, \\\"atModuleStart\\\", \"",
    "            ++ \"1, partcv, params, CFLAG_SELF);\")",
    "    }",
    "    o.register := \"done\"",
    "}",
    "method compileimport(o) {",
    "    out(\"// Import of {o.path} as {o.nameString}\")",
    "    var snm := \"\"",
    "    for (o.path) do {c->",
    "        if (c == \"/\") then {",
    "            snm := \"\"",
    "        } else {",
    "            snm := snm ++ c",
    "        }",
    "    }",
    "    snm := escapeident(snm)",
    "    o.register := \"done\"",
    "    var nm := escapeident(o.nameString)",
    "    var modg := \"module_\" ++ snm",
    "    declaredvars.push(nm)",
    "    globals.push(\"Object {modg};\")",
    "    out(\"  if ({modg} == NULL)\")",
    "    if (xmodule.dynamicCModules.contains(o.path)) then {",
    "        out \"    {modg} = dlmodule(\\\"{snm}\\\");\"",
    "    } elseif { xmodule.builtInModules.contains(o.path) } then {",
    "        out \"    {modg} = {modg}_init();\"",
    "    } else {",
    "        out \"    {modg} = LOAD_MODULE({snm});\"",
    "        // for later transformation by the C preproecessor",
    "    }",
    "    out(\"  *var_{nm} = {modg};\")",
    "    if (compilationDepth == 1) then {",
    "        def methodIdent = o.value",
    "        methodIdent.line := o.line",
    "        methodIdent.linePos := o.linePos",
    "        def accessor = (ast.methodNode.new(methodIdent, [ast.signaturePart.partName(o.name)],",
    "                        [methodIdent], o.dtype))",
    "        accessor.line := o.line",
    "        accessor.linePos := o.linePos",
    "        if ( o.isConfidential ) then {",
    "            accessor.annotations.push(ast.identifierNode.new(\"confidential\", false))",
    "        }",
    "//        compilenode(accessor)",
    "    }",
    "    globals.push(\"Object {modg}_init();\")",
    "}",
    "method compilereturn(o) {",
    "    var reg",
    "    if ((o.value.kind == \"call\") &&",
    "        {util.extensions.contains(\"TailCall\")}) then {",
    "        // Tail-call support",
    "        compilecall(o.value, true)",
    "        reg := o.value.register",
    "    } else {",
    "        reg := compilenode(o.value)",
    "    }",
    "    if (inBlock) then {",
    "        out(\"  block_return(realself, {reg});\")",
    "    } else {",
    "        out(\"  return {reg};\")",
    "    }",
    "    o.register := \"undefined\"",
    "}",
    "method compilePrint(o) {",
    "    var args := []",
    "    for (o.with.first.args) do { prm ->",
    "        var r := compilenode(prm)",
    "        args.push(r)",
    "    }",
    "    var parami := 0",
    "    for (args) do { arg ->",
    "        out(\"  params[{parami}] = {arg};\")",
    "        parami := parami + 1",
    "    }",
    "    out(\"  Object call{auto_count} = gracelib_print(NULL, \"",
    "          ++ args.size ++ \",  params);\")",
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
    "    if (param1.value != \"c\") then { ",
    "        o.register := \"done\"",
    "        return",
    "    }",
    "    def param2 = o.with.second.args.first",
    "    if (param2.kind != \"string\") then {",
    "        errormessages.syntaxError \"the second argument to native()code must be a string literal\"",
    "            atLine(param2.line)",
    "    }",
    "    def codeString = param2.value",
    "    out \"   // start native code from line {o.line}\"",
    "    def reg = \"nat\" ++ auto_count",
    "    auto_count := auto_count + 1",
    "    out \"  Object {reg};\"",
    "    out \"  \\{ Object result = done;\"",
    "    out(codeString)",
    "    out \"  {reg} = result;\"",
    "    out \"  }\"",
    "    o.register := reg",
    "}",
    "",
    "method compilenum(o) {",
    "    var cnum := o.value",
    "    var havedot := false",
    "    for (cnum) do {c->",
    "        if (c == \".\") then {",
    "            havedot := true",
    "        }",
    "    }",
    "    out(\"  Object num{auto_count} = alloc_Float64({cnum});\")",
    "    o.register := \"num\" ++ auto_count",
    "    auto_count := auto_count + 1",
    "}",
    "method compilenode(o) {",
    "    compilationDepth := compilationDepth + 1",
    "    if (linenum != o.line) then {",
    "        linenum := o.line",
    "        out(\"// Begin line \" ++ linenum)",
    "        out(\"  setline({linenum});\")",
    "        out(\"  setmodule(modulename);\")",
    "        out(\"  setsource(originalSourceLines);\")",
    "    }",
    "    def oKind = o.kind",
    "    out \"// starting to compile {oKind} node (depth = {compilationDepth})\"",
    "    if (oKind == \"num\") then {",
    "        compilenum(o)",
    "    } elseif { oKind == \"string\" } then {",
    "        o.value := escapestring2(o.value)",
    "        out(\"  if (strlit{auto_count} == NULL) \\{\")",
    "        out(\"    strlit{auto_count} = alloc_String(\\\"{o.value}\\\");\")",
    "        out(\"    gc_root(strlit{auto_count});\")",
    "        out(\"  \\}\")",
    "        globals.push(\"static Object strlit{auto_count};\")",
    "        o.register := \"strlit\" ++ auto_count",
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
    "        if ((o.value == \"true\") || (o.value == \"false\")) then {",
    "            var val := 0",
    "            if (o.value == \"true\") then {",
    "                val := 1",
    "            }",
    "            out(\"  Object bool\" ++ auto_count ++ \" = alloc_Boolean({val});\")",
    "            o.register := \"bool\" ++ auto_count",
    "            auto_count := auto_count + 1",
    "        } else {",
    "            compileidentifier(o)",
    "        }",
    "    } elseif { oKind == \"defdec\" } then {",
    "        compiledefdec(o)",
    "    } elseif { oKind == \"vardec\" } then {",
    "        compilevardec(o)",
    "    } elseif { oKind == \"block\" } then {",
    "        compileblock(o)",
    "    } elseif { oKind == \"method\" } then {",
    "        compilemethod(o, \"self\", topLevelMethodPos)",
    "        topLevelMethodPos := topLevelMethodPos + 1",
    "    } elseif { oKind == \"array\" } then {",
    "        compilearray(o)",
    "    } elseif { oKind == \"bind\" } then {",
    "        compilebind(o)",
    "    } elseif { oKind == \"if\" } then {",
    "        compileif(o)",
    "    } elseif { oKind == \"matchcase\" } then {",
    "        compilematchcase(o)",
    "    } elseif { oKind == \"trycatch\" } then {",
    "        compiletrycatch(o)",
    "    } elseif { oKind == \"object\" } then {",
    "        compileobject(o, \"self\")",
    "    } elseif { oKind == \"typedec\" } then {",
    "        compiletypedec(o)",
    "    } elseif { oKind == \"typeliteral\" } then {",
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
    "                compilecall(o, false)",
    "            }",
    "        } else {",
    "            compilecall(o, false)",
    "        }",
    "    } elseif { oKind == \"op\" } then {",
    "        compileop(o)",
    "    }",
    "    out \"// compiled {oKind} node returning {o.register} (depth = {compilationDepth})\"",
    "    compilationDepth := compilationDepth - 1",
    "    o.register",
    "}",
    "",
    "method compileDynamicModule(fnBase, buildinfo) {",
    "    // compile a dynamicly-linkable version as .gso",
    "//    util.log 50 verbose \"producing dynamic module {modname}.gso\"",
    "    var dlbit := \"\"",
    "    var exportDynamicBit := \"\"",
    "    var cmd := \"ld -ldl -o /dev/null 2>/dev/null\"",
    "    if (io.system(cmd)) then {",
    "        dlbit := \"-ldl\"",
    "    }",
    "    cmd := \"ld -o /dev/null --export-dynamic -lc >/dev/null 2>&1\"",
    "    if (io.system(cmd)) then {",
    "        exportDynamicBit := \"-Wl,--export-dynamic\"",
    "    } else {",
    "        cmd := \"ld -o /dev/null -undefined dynamic_lookup -lc >/dev/null 2>&1\"",
    "        if (io.system(cmd)) then {",
    "            exportDynamicBit := \"-Wl,-undefined -Wl,dynamic_lookup\"",
    "        }",
    "    }",
    "    cmd := \"gcc -DDYNAMIC -g -I\\\"{util.gracelibPath}\\\" -I\\\"{sys.execPath}/../include\\\" \" ++",
    "        \"-I\\\"{sys.execPath}\\\" -I\\\"{buildinfo.includepath}\\\" -shared -o \\\"{fnBase}.gso\\\" \" ++",
    "        \"-fPIC {exportDynamicBit} \\\"{fnBase}.c\\\" \"",
    "    if ((io.system(cmd)).not) then {",
    "        io.error.write(\"Fatal error: Failed compiling dynamic module.\\n\")",
    "        io.error.write(\"The failing command was\\n{cmd}\\n\")",
    "        sys.exit(3)",
    "    }",
    "}",
    "method compileStaticModule(fnBase, buildinfo) {",
    "    // compile a statically-linkable version as .gcn",
    "//    util.log 50 verbose \"producing static module {modname}.gcn\"",
    "    def cmd = \"gcc -std=c99 -g -I\\\"{util.gracelibPath}\\\" -I\\\"{sys.execPath}/../include\\\" \" ++",
    "        \"-I\\\"{sys.execPath}\\\" -I\\\"{buildinfo.includepath}\\\" -o \\\"{fnBase}.gcn\\\" -c \\\"{fnBase}.c\\\"\"",
    "        // -c          => don't run linker",
    "        // -o <file>   => names the output file",
    "    ",
    "    if ((io.system(cmd)).not) then {",
    "        io.error.write(\"Fatal error: C compilation of {modname} failed.\\n\")",
    "        io.error.write(\"The failing command was\\n{cmd}\\n\")",
    "        sys.exit(3)",
    "    }",
    "}",
    "",
    "method linkExecutable(fnBase, buildinfo) {",
    "    util.log_verbose \"linking.\"",
    "    var dlbit := \"\"",
    "    var exportDynamicBit := \"\"",
    "    var cmd := \"ld -ldl -o /dev/null 2>/dev/null\"",
    "    if (io.system(cmd)) then {",
    "        dlbit := \"-ldl\"",
    "    }",
    "    cmd := \"ld -o /dev/null --export-dynamic -lc >/dev/null 2>&1\"",
    "    if (io.system(cmd)) then {",
    "        exportDynamicBit := \"-Wl,--export-dynamic\"",
    "    }",
    "    cmd := \"gcc -g -o \\\"{fnBase}\\\" -fPIC {exportDynamicBit} \\\"{fnBase}.gcn\\\" \"",
    "",
    "    if (io.exists \"{util.gracelibPath}/gracelib.o\") then {",
    "        cmd := cmd ++ \"\\\"{util.gracelibPath}/gracelib.o\\\" \"",
    "    } elseif { io.exists \"{buildinfo.objectpath}/gracelib.o\" } then {",
    "        cmd := cmd ++ \"\\\"{buildinfo.objectpath}/gracelib.o\\\" \"",
    "    } elseif { io.exists \"{util.outDir}/gracelib.o\" } then {",
    "        cmd := cmd ++ \"\\\"{util.outDir}/gracelib.o\\\" \"",
    "    } elseif { io.exists \"{util.execDir}/gracelib.o\" } then {",
    "        cmd := cmd ++ \"\\\"{util.execDir}/gracelib.o\\\" \"",
    "    } else {",
    "        io.error.write(\"Unable to link: can't find file gracelib.o\\n\")",
    "        sys.exit(3)",
    "    }",
    "//    util.log 50 verbose \"linking with {cmd}\"",
    "",
    "    for (imports.linkfiles) do { fn ->",
    "        cmd := \"{cmd} \\\"{fn}\\\"\"",
    "    }",
    "    cmd := \"{cmd} -lm {dlbit}\"",
    "    if ((io.system(cmd)).not) then {",
    "        io.error.write(\"Fatal Error: Failed linking executable for {modname}.\\n\")",
    "        io.error.write(\"The failing command was\\n{cmd}\\n\")",
    "        sys.exit(3)",
    "    }",
    "}",
    "",
    "method implementAliasesAndExclusionsFor(o) inheriting(e, superobj) {",
    "    // o is an object node, and e an inherits node.  e has already been",
    "    // compiled into register superobj.",
    "    ",
    "    if (e.aliases.isEmpty && e.exclusions.isEmpty) then { return }",
    "",
    "    errormessages.error(\"I'm sorry, aliases and exclusions are not yet supported \" ++",
    "        \"by the C code generator.\") atLine (e.line)",
    "}",
    "",
    "method compile(moduleObject, outfile, rm, bt, buildinfo) {",
    "    util.log_verbose \"generating C code.\"",
    "    var argv := sys.argv",
    "    var cmd",
    "    values := moduleObject.value",
    "    if (util.extensions.contains \"ExtendedLineups\") then {",
    "        bracketConstructor := \"alloc_BuiltinList()\"",
    "    }",
    "    var nummethods := 2 + countbindings(values)",
    "    for (values) do { v->",
    "        if (v.kind == \"vardec\") then {",
    "            nummethods := nummethods + 1",
    "        } elseif { v.kind == \"method\" } then {",
    "            nummethods := nummethods + 1",
    "            if (v.isFresh) then {",
    "                nummethods := nummethods + 1",
    "            }",
    "        }",
    "    }",
    "    modname := moduleObject.name",
    "    escmodname := escapeident(modname)",
    "    runmode := rm",
    "    buildtype := bt",
    "    outprint(\"#include <gracelib.h>\")",
    "    outprint(\"#include <stdlib.h>\")",
    "    outprint(\"#include <math.h>\")",
    "    outprint(\"#include <float.h>\")",
    "    if (!util.extensions.contains(\"NoMain\")) then {",
    "        outprint \"#ifndef __CYGWIN__\"",
    "        outprint \"#pragma weak main\"",
    "        outprint \"#endif\"",
    "    }",
    "    outprint(\"static char compilerRevision[] = \\\"{buildinfo.gitrevision}\\\";\")",
    "    outprint(\"static Object undefined;\")",
    "    outprint(\"extern Object done;\")",
    "    outprint(\"extern Object _prelude;\")",
    "    outprint(\"extern Object ObjectType;\")",
    "    outprint(\"extern Object String;\")",
    "    outprint(\"extern Object Number;\")",
    "    outprint(\"extern Object Boolean;\")",
    "    outprint(\"extern Object Dynamic;\")",
    "    outprint(\"extern Object Unknown;\")",
    "    outprint(\"extern Object Block;\")",
    "    outprint(\"extern Object Done;\")",
    "    outprint(\"extern Object Type;\")",
    "    outprint(\"extern Object GraceDefaultObject;\")",
    "    outprint(\"extern Object sourceObject;\")",
    "    outprint(\"static Object type_Object;\")",
    "    outprint(\"static Object type_String;\")",
    "    outprint(\"static Object type_Number;\")",
    "    outprint(\"static Object type_Boolean;\")",
    "    outprint(\"static Object type_Block;\")",
    "    outprint(\"static Object type_Done;\")",
    "    outprint(\"static Object type_Type;\")",
    "    outprint(\"static Object argv;\")",
    "    outprint(\"static Object emptyclosure;\")",
    "    outprint(\"static Object prelude;\")",
    "    outprint(\"static int isTailObject = 0;\")",
    "    outprint(\"static Object inheritingObject = NULL;\")",
    "    outprint(\"static const char modulename[] = \\\"{modname}\\\";\");",
    "    outprint(\"Object module_StandardPrelude_init();\");",
    "    outprint(\"static char *originalSourceLines[] = \\{\")",
    "    for (util.cLines) do {l->",
    "        outprint(\"  \\\"{l}\\\",\")",
    "    }",
    "    outprint(\"  NULL\\n\\};\")",
    "    topLevelTypes.put(\"String\", true)",
    "    topLevelTypes.put(\"Number\", true)",
    "    topLevelTypes.put(\"Boolean\", true)",
    "    topLevelTypes.put(\"Done\", true)",
    "    topLevelTypes.put(\"Block\", true)",
    "    out(\"Object module_{escmodname}_init() \\{\")",
    "    out(\"  int flags = 0;\")",
    "    out(\"  int frame = gc_frame_new();\")",
    "    out(\"  Object self = alloc_obj2({nummethods}, {nummethods});\")",
    "    out \"  self->class->definitionModule = modulename;\"",
    "    out \"  gc_root(self);\"",
    "    if (util.extensions.contains(\"NativePrelude\")) then {",
    "        out \"  prelude = grace_prelude();\"",
    "        out \"  adddatum2(self, grace_prelude(), 0);\"",
    "        out \"  Object ObjectType = alloc_ObjectType();\"",
    "    } else {",
    "        out(\"  prelude = module_StandardPrelude_init();\")",
    "        out(\"  adddatum2(self, prelude, 0);\")",
    "    }",
    "    out(\"  addmethod2(self, \\\"outer\\\", &grace_userobj_outer);\")",
    "    out(\"  setline(1);\")",
    "    out(\"  setmodule(modulename);\")",
    "    out(\"  setsource(originalSourceLines);\")",
    "    var modn := \"Module<{modname}>\"",
    "    out(\"  setclassname(self, \\\"{modn}\\\");\")",
    "    out(\"  Object *var_MatchFailed = alloc_var();\")",
    "    out(\"  *var_MatchFailed = alloc_MatchFailed();\")",
    "    out(\"  Object *var_noSuchValue = alloc_var();\")",
    "    out(\"  *var_noSuchValue = done;\")",
    "    out(\"  Object *var_done = alloc_var();\")",
    "    out(\"  *var_done = done;\")",
    "    out(\"  Object *var_Object = alloc_var();\")",
    "    out(\"  *var_Object = ObjectType;\")",
    "    out(\"  type_Object = ObjectType;\")",
    "    out(\"  Object *var_String = alloc_var();\")",
    "    out(\"  *var_String = String;\")",
    "    out(\"  type_String = String;\")",
    "    out(\"  Object *var_Block = alloc_var();\")",
    "    out(\"  *var_Block = Block;\")",
    "    out(\"  type_Block = Block;\")",
    "    out(\"  Object *var_Done = alloc_var();\")",
    "    out(\"  *var_Done = Done;\")",
    "    out(\"  type_Done = Done;\")",
    "    out(\"  Object *var_Number = alloc_var();\")",
    "    out(\"  *var_Number = Number;\")",
    "    out(\"  type_Number = Number;\")",
    "    out(\"  Object *var_Boolean = alloc_var();\")",
    "    out(\"  *var_Boolean = Boolean;\")",
    "    out(\"  type_Boolean = Boolean;\")",
    "    out(\"  Object *var_Dynamic = alloc_var();\")",
    "    out(\"  *var_Dynamic = Dynamic;\")",
    "    out(\"  Object *var_Unknown = alloc_var();\")",
    "    out(\"  *var_Unknown= Unknown;\")",
    "    out(\"  Object *var_Type = alloc_var();\")",
    "    out(\"  *var_Type = Type;\")",
    "    out(\"  type_Done = Type;\")",
    "    out(\"  Object *var__prelude = alloc_var();\")",
    "    out(\"  *var__prelude = grace_prelude();\")",
    "    out(\"  Object *var_prelude = alloc_var();\")",
    "    out(\"  *var_prelude = prelude;\")",
    "    out(\"  gc_root(*var_MatchFailed);\")",
    "    out(\"  emptyclosure = createclosure(0, \\\"empty\\\");\")",
    "    out(\"  gc_root(emptyclosure);\")",
    "    out(\"  struct StackFrameObject *stackframe = alloc_StackFrame({nummethods}, NULL);\")",
    "    out(\"  gc_root((Object)stackframe);\")",
    "    out(\"  pushstackframe(stackframe, \\\"module scope\\\");\")",
    "    out(\"  Object *selfslot = &(stackframe->slots[0]);\")",
    "    out(\"  *selfslot = self;\")",
    "    out(\"  setframeelementname(stackframe, 0, \\\"self\\\");\")",
    "    out(\"// end of preamble\")",
    "    var tmpo := output",
    "    output := []",
    "    definebindings(values, 1)",
    "    for (values) do { o ->",
    "        if (o.kind == \"method\") then {",
    "            compilenode(o)",
    "        }",
    "        if (o.kind == \"type\") then {",
    "            compilenode(o)",
    "            def typeid = escapeident(o.value)",
    "            out(\"type_{typeid} = *var_{typeid};\")",
    "        }",
    "    }",
    "    if (modname == \"StandardPrelude\") then {",
    "    // this has the same effect as \"inherits _prelude\" in the source",
    "        out(\"  self = setsuperobj(self, *var__prelude);\")",
    "        out(\"  *selfslot = self;\")",
    "    } else {",
    "        moduleObject.externalsDo { o -> compilenode(o) }",
    "        if (false != moduleObject.superclass) then {",
    "            def superobj = compilenode(moduleObject.superclass.value)",
    "            out(\"  self = setsuperobj(self, {superobj});\")",
    "            out(\"  *selfslot = self;\")",
    "            implementAliasesAndExclusionsFor(moduleObject) ",
    "                inheriting(moduleObject.superclass, superobj)",
    "        }",
    "    }",
    "    ",
    "    moduleObject.usedTraits.do { t -> ",
    "        errormessages.error(\"I'm sorry, trait usage is not yet supported by \" ++",
    "              \"the C code generator.\") atRange(t.line. t.linePos, t.linePos + 3)",
    "    }",
    "",
    "    moduleObject.value.do { o ->",
    "        if (o.isExternal) then {",
    "            if (modname == \"StandardPrelude\") then {",
    "                compilenode(o)",
    "            } else {",
    "                // do nothing, because it was already compiled above",
    "            }",
    "        } elseif { (o.kind != \"method\") && (o.kind != \"type\") } then {",
    "            compilenode(o)",
    "        }",
    "    }",
    "    if (xmodule.currentDialect.hasAtEnd) then {",
    "        out(\"  partcv[0] = 1;\")",
    "        out(\"  params[0] = self;\")",
    "        out(\"  callmethodflags(prelude, \\\"atModuleEnd\\\", \"",
    "            ++ \"1, partcv, params, CFLAG_SELF);\")",
    "    }",
    "    for (globals) do {e->",
    "        outprint(e)",
    "    }",
    "    var tmpo2 := output",
    "    output := tmpo",
    "    out(\"  Object params[{paramsUsed}];\")",
    "    out(\"  int partcv[{partsUsed}];\")",
    "    for (tmpo2) do { l->",
    "        out(l)",
    "    }",
    "    paramsUsed := 1",
    "    partsUsed := 1",
    "    out(\"  gc_frame_end(frame);\")",
    "    out(\"  return self;\")",
    "    out(\"}\")",
    "    if (!util.extensions.contains(\"NoMain\")) then {",
    "        out(\"int main(int argc, char **argv) \\{\")",
    "        out(\"  initprofiling();\")",
    "        if (util.extensions.contains(\"LogCallGraph\")) then {",
    "            var lcgfile := util.extensions.get(\"LogCallGraph\")",
    "            out(\"  enable_callgraph(\\\"{lcgfile}\\\");\")",
    "        }",
    "        out(\"  setCompilerModulePath(\\\"{io.realpath(sys.execPath)}\\\");\")",
    "        if(buildinfo.modulepath != \"\") then {",
    "            out(\"  setModulePath(\\\"{buildinfo.modulepath}\\\");\")",
    "        }",
    "        out(\"  gracelib_argv(argv);\")",
    "        out(\"  Object params[1];\")",
    "        out(\"  undefined = alloc_Undefined();\")",
    "        out(\"  done = alloc_done();\")",
    "        out(\"  Object tmp_argv = alloc_BuiltinList();\")",
    "        out(\"  gc_root(tmp_argv);\")",
    "        out(\"  int partcv_push[] = \\{1\\};\")",
    "        out(\"  int i; for (i=0; i<argc; i++) \\{\")",
    "        out(\"    params[0] = alloc_String(argv[i]);\")",
    "        out(\"    callmethodflags(tmp_argv, \\\"push\\\", 1, partcv_push, params, CFLAG_SELF);\")",
    "        out(\"  \\}\")",
    "        out(\"  module_sys_init_argv(tmp_argv);\")",
    "        out(\"  module_{escmodname}_init();\")",
    "        out(\"  gracelib_stats();\")",
    "        out(\"  return 0;\")",
    "        out(\"}\")",
    "    }",
    "    for (topOutput) do { x ->",
    "        outprint(x)",
    "    }",
    "    for (output) do { x ->",
    "        outprint(x)",
    "    }",
    "",
    "    moduleObject.imports := imports.static ++ imports.other",
    "    xmodule.writeGctForModule(moduleObject)",
    "        ",
    "    outfile.close",
    "",
    "    if (runmode == \"make\") then {",
    "        util.log_verbose \"compiling C code.\"",
    "        def ofpn = outfile.pathname",
    "        var ix := ofpn.size",
    "        while { (ix > 1) && {ofpn.at(ix) != \".\"} } do { ix := ix - 1 }",
    "        def ofpnBase = if (ix > 0) then { ",
    "                ofpn.substringFrom 1 to (ix-1)",
    "            } else {",
    "                ofpn",
    "            }",
    "        compileStaticModule(ofpnBase, buildinfo)",
    "        compileDynamicModule(ofpnBase, buildinfo)",
    "        if (util.noexec.not) then { ",
    "            linkExecutable(ofpnBase, buildinfo)",
    "        }",
    "        util.log_verbose \"done.\"",
    "        if (buildtype == \"run\") then {",
    "            if (ofpnBase.first != \"/\") then {",
    "                cmd := \"./\" ++ ofpnBase",
    "            } else {",
    "                cmd := ofpnBase",
    "            }",
    "            def runExitCode = io.spawn(cmd, []).wait",
    "            if (runExitCode < 0) then {",
    "                io.error.write \"minigrace: Program {modname} exited with error {-runExitCode}.\\n\"",
    "                sys.exit(4)",
    "            }",
    "        }",
    "    }",
    "}" ];
}
if (typeof global !== "undefined")
  global.gracecode_genc = gracecode_genc;
if (typeof window !== "undefined")
  window.gracecode_genc = gracecode_genc;
