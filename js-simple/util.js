"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_util() {
  setModuleName("util");
  this.definitionModule = "util";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_util_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_util_outer0;
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
    setModuleName("util");
    // io is a simple accessor - elide try ... catch
    return var_io;
  };
  func1.paramCounts = [0];
  this.methods["io"] = func1;
  func1.definitionLine = 2;
  func1.definitionModule = "util";
  func1.debug = "import";
  func1.confidential = true;
  setModuleName("util");
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
    setModuleName("util");
    // sys is a simple accessor - elide try ... catch
    return var_sys;
  };
  func2.paramCounts = [0];
  this.methods["sys"] = func2;
  func2.definitionLine = 3;
  func2.definitionModule = "util";
  func2.debug = "import";
  func2.confidential = true;
  setModuleName("util");
  setLineNumber(4);    // compilenode import
  // Import of unixFilePath as filePath
  if (typeof gracecode_unixFilePath == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module unixFilePath'));
  var var_filePath = do_import("unixFilePath", gracecode_unixFilePath);
  var func3 = function(argcv) {    // method filePath
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for filePath"));
    setModuleName("util");
    // filePath is a simple accessor - elide try ... catch
    return var_filePath;
  };
  func3.paramCounts = [0];
  this.methods["filePath"] = func3;
  func3.definitionLine = 4;
  func3.definitionModule = "util";
  func3.debug = "import";
  func3.confidential = true;
  setModuleName("util");
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
    setModuleName("util");
    // map is a simple accessor - elide try ... catch
    return var_map;
  };
  func4.paramCounts = [0];
  this.methods["map"] = func4;
  func4.definitionLine = 5;
  func4.definitionModule = "util";
  func4.debug = "import";
  func4.confidential = true;
  setModuleName("util");
  setLineNumber(52);    // compilenode method
  var func5 = function(argcv) {    // method parseargs(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_buildinfo = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for parseargs(1)"));
    setModuleName("util");
    setLineNumber(53);    // compilenode identifier
    var call6 = callmethodChecked(var_sys, "argv", [0]);
    var var_argv = call6;
    setLineNumber(54);    // compilenode identifier
    var var_toStdout = GraceFalse;
    var if7 = GraceDone;
    setLineNumber(55);    // compilenode identifier
    var call9 = callmethodChecked(var_argv, "size", [0]);
    var opresult11 = callmethodChecked(call9, ">", [1], new GraceNum(1));
    if (Grace_isTrue(opresult11)) {
      setLineNumber(56);    // compilenode identifier
      var call12 = callmethodChecked(var_argv, "indices", [0]);
      var var_indices = call12;
      setLineNumber(57);    // compilenode vardec
      var var_arg;
      setLineNumber(58);    // compilenode identifier
      var var_skip = GraceTrue;
      setLineNumber(59);    // compilenode block
      var block13 = new GraceBlock(this, 59, 1);
      setLineNumber(1);    // compilenode identifier
      block13.real = function(var_ai) {
        setLineNumber(60);    // compilenode identifier
        var call14 = callmethodChecked(var_argv, "at", [1], var_ai);
        var_arg = call14;
        var if15 = GraceDone;
        setLineNumber(61);    // compilenode string
        var string16 = new GraceString("-");
        var call18 = callmethodChecked(var_arg, "at", [1], new GraceNum(1));
        var opresult20 = callmethodChecked(call18, "==", [1], string16);
        var call22 = callmethodChecked(var_skip, "prefix!", [0]);
        var opresult24 = callmethodChecked(call22, "&&", [1], opresult20);
        if (Grace_isTrue(opresult24)) {
          setLineNumber(62);    // compilenode identifier
          var cases25 = [];
          setLineNumber(63);    // compilenode block
          var block26 = new GraceBlock(this, 63, 0);
          var string27 = new GraceString("-o");
          block26.pattern = string27;
          block26.real = function() {
            var if28 = GraceDone;
            setLineNumber(64);    // compilenode identifier
            var opresult31 = callmethodChecked(var_ai, "+", [1], new GraceNum(1));
            var call33 = callmethodChecked(var_argv, "size", [0]);
            var opresult35 = callmethodChecked(call33, "<", [1], opresult31);
            if (Grace_isTrue(opresult35)) {
              setLineNumber(65);    // compilenode string
              var string36 = new GraceString("-o requires an argument.");
              onSelf = true;
              var call37 = callmethodChecked(this, "startupFailure", [1], string36);
              if28 = call37;
            }
            setLineNumber(67);    // compilenode identifier
            var opresult40 = callmethodChecked(var_ai, "+", [1], new GraceNum(1));
            var call41 = callmethodChecked(var_argv, "at", [1], opresult40);
            var string42 = new GraceString("w");
            var call43 = callmethodChecked(var_io, "open", [2], call41, string42);
            var_outfilev = call43;
            setLineNumber(68);    // compilenode identifier
            var_skip = GraceTrue;
            return GraceDone;
          };
          cases25.push(block26);
          setLineNumber(69);    // compilenode block
          var block44 = new GraceBlock(this, 69, 0);
          var string45 = new GraceString("--verbose");
          block44.pattern = string45;
          block44.real = function() {
            setLineNumber(70);    // compilenode num
            var_verbosity = new GraceNum(40);
            var if46 = GraceDone;
            setLineNumber(71);    // compilenode identifier
            var opresult49 = callmethodChecked(var_ai, "+", [1], new GraceNum(1));
            var call51 = callmethodChecked(var_argv, "size", [0]);
            var opresult53 = callmethodChecked(call51, "\u2265", [1], opresult49);
            if (Grace_isTrue(opresult53)) {
              setLineNumber(72);    // compilenode identifier
              var opresult56 = callmethodChecked(var_ai, "+", [1], new GraceNum(1));
              var call57 = callmethodChecked(var_argv, "at", [1], opresult56);
              var var_nextArg = call57;
              setLineNumber(73);    // compilenode identifier
              var call58 = callmethodChecked(var_nextArg, "at", [1], new GraceNum(1));
              var var_firstCh = call58;
              var if59 = GraceDone;
              setLineNumber(74);    // compilenode string
              var string60 = new GraceString("9");
              var opresult63 = callmethodChecked(var_firstCh, "\u2264", [1], string60);
              var string65 = new GraceString("0");
              var opresult68 = callmethodChecked(var_firstCh, "\u2265", [1], string65);
              var opresult70 = callmethodChecked(opresult68, "&&", [1], opresult63);
              if (Grace_isTrue(opresult70)) {
                setLineNumber(75);    // compilenode identifier
                var_skip = GraceTrue;
                setLineNumber(76);    // compilenode identifier
                var call71 = callmethodChecked(var_nextArg, "asNumber", [0]);
                var_verbosity = call71;
                if59 = GraceDone;
              }
              if46 = if59;
            }
            return if46;
          };
          cases25.push(block44);
          setLineNumber(79);    // compilenode block
          var block72 = new GraceBlock(this, 79, 0);
          var string73 = new GraceString("--help");
          block72.pattern = string73;
          block72.real = function() {
            setLineNumber(80);    // compilenode call
            onSelf = true;
            var call74 = callmethodChecked(this, "printhelp", [0]);
            return call74;
          };
          cases25.push(block72);
          setLineNumber(81);    // compilenode block
          var block75 = new GraceBlock(this, 81, 0);
          var string76 = new GraceString("--vtag");
          block75.pattern = string76;
          block75.real = function() {
            setLineNumber(82);    // compilenode identifier
            var_skip = GraceTrue;
            var if77 = GraceDone;
            setLineNumber(83);    // compilenode identifier
            var opresult80 = callmethodChecked(var_ai, "+", [1], new GraceNum(1));
            var call82 = callmethodChecked(var_argv, "size", [0]);
            var opresult84 = callmethodChecked(call82, "<", [1], opresult80);
            if (Grace_isTrue(opresult84)) {
              setLineNumber(84);    // compilenode string
              var string85 = new GraceString("--vtag requires an argument.");
              onSelf = true;
              var call86 = callmethodChecked(this, "startupFailure", [1], string85);
              if77 = call86;
            }
            setLineNumber(86);    // compilenode identifier
            var opresult89 = callmethodChecked(var_ai, "+", [1], new GraceNum(1));
            var call90 = callmethodChecked(var_argv, "at", [1], opresult89);
            var_vtagv = call90;
            return GraceDone;
          };
          cases25.push(block75);
          setLineNumber(87);    // compilenode block
          var block91 = new GraceBlock(this, 87, 0);
          var string92 = new GraceString("--make");
          block91.pattern = string92;
          block91.real = function() {
            setLineNumber(88);    // compilenode string
            var string93 = new GraceString("make");
            var_runmodev = string93;
            setLineNumber(89);    // compilenode string
            var string94 = new GraceString("bc");
            var_buildtypev = string94;
            return GraceDone;
          };
          cases25.push(block91);
          setLineNumber(90);    // compilenode block
          var block95 = new GraceBlock(this, 90, 0);
          var string96 = new GraceString("--no-recurse");
          block95.pattern = string96;
          block95.real = function() {
            setLineNumber(91);    // compilenode identifier
            var_recurse = GraceFalse;
            return GraceDone;
          };
          cases25.push(block95);
          setLineNumber(92);    // compilenode block
          var block97 = new GraceBlock(this, 92, 0);
          var string98 = new GraceString("--dynamic-module");
          block97.pattern = string98;
          block97.real = function() {
            setLineNumber(93);    // compilenode identifier
            var_dynamicModule = GraceTrue;
            setLineNumber(94);    // compilenode string
            var string99 = new GraceString("make");
            var_runmodev = string99;
            setLineNumber(95);    // compilenode identifier
            var_noexecv = GraceTrue;
            setLineNumber(96);    // compilenode string
            var string100 = new GraceString("bc");
            var_buildtypev = string100;
            return GraceDone;
          };
          cases25.push(block97);
          setLineNumber(97);    // compilenode block
          var block101 = new GraceBlock(this, 97, 0);
          var string102 = new GraceString("--import-dynamic");
          block101.pattern = string102;
          block101.real = function() {
            setLineNumber(98);    // compilenode identifier
            var_importDynamic = GraceTrue;
            return GraceDone;
          };
          cases25.push(block101);
          setLineNumber(99);    // compilenode block
          var block103 = new GraceBlock(this, 99, 0);
          var string104 = new GraceString("--run");
          block103.pattern = string104;
          block103.real = function() {
            setLineNumber(100);    // compilenode string
            var string105 = new GraceString("run");
            var_buildtypev = string105;
            setLineNumber(101);    // compilenode string
            var string106 = new GraceString("make");
            var_runmodev = string106;
            return GraceDone;
          };
          cases25.push(block103);
          setLineNumber(102);    // compilenode block
          var block107 = new GraceBlock(this, 102, 0);
          var string108 = new GraceString("--source");
          block107.pattern = string108;
          block107.real = function() {
            setLineNumber(103);    // compilenode string
            var string109 = new GraceString("source");
            var_buildtypev = string109;
            setLineNumber(104);    // compilenode string
            var string110 = new GraceString("build");
            var_runmodev = string110;
            return GraceDone;
          };
          cases25.push(block107);
          setLineNumber(105);    // compilenode block
          var block111 = new GraceBlock(this, 105, 0);
          var string112 = new GraceString("--native");
          block111.pattern = string112;
          block111.real = function() {
            setLineNumber(106);    // compilenode string
            var string113 = new GraceString("native");
            var_buildtypev = string113;
            return GraceDone;
          };
          cases25.push(block111);
          setLineNumber(107);    // compilenode block
          var block114 = new GraceBlock(this, 107, 0);
          var string115 = new GraceString("--noexec");
          block114.pattern = string115;
          block114.real = function() {
            setLineNumber(108);    // compilenode identifier
            var_noexecv = GraceTrue;
            setLineNumber(109);    // compilenode string
            var string116 = new GraceString("bc");
            var_buildtypev = string116;
            return GraceDone;
          };
          cases25.push(block114);
          setLineNumber(110);    // compilenode block
          var block117 = new GraceBlock(this, 110, 0);
          var string118 = new GraceString("--dir");
          block117.pattern = string118;
          block117.real = function() {
            setLineNumber(111);    // compilenode identifier
            var_skip = GraceTrue;
            var if119 = GraceDone;
            setLineNumber(112);    // compilenode identifier
            var opresult122 = callmethodChecked(var_ai, "+", [1], new GraceNum(1));
            var call124 = callmethodChecked(var_argv, "size", [0]);
            var opresult126 = callmethodChecked(call124, "<", [1], opresult122);
            if (Grace_isTrue(opresult126)) {
              setLineNumber(113);    // compilenode string
              var string127 = new GraceString("--dir requires an argument.");
              onSelf = true;
              var call128 = callmethodChecked(this, "startupFailure", [1], string127);
              if119 = call128;
            }
            setLineNumber(115);    // compilenode identifier
            var opresult131 = callmethodChecked(var_ai, "+", [1], new GraceNum(1));
            var call132 = callmethodChecked(var_argv, "at", [1], opresult131);
            var_outDirCache = call132;
            setLineNumber(116);    // compilenode identifier
            var_dirFlag = GraceTrue;
            var if133 = GraceDone;
            setLineNumber(117);    // compilenode string
            var string134 = new GraceString("/");
            var call136 = callmethodChecked(var_outDirCache, "size", [0]);
            var call137 = callmethodChecked(var_outDirCache, "at", [1], call136);
            var opresult139 = callmethodChecked(call137, "\u2260", [1], string134);
            if (Grace_isTrue(opresult139)) {
              setLineNumber(118);    // compilenode string
              var string140 = new GraceString("/");
              var opresult143 = callmethodChecked(var_outDirCache, "++", [1], string140);
              var_outDirCache = opresult143;
              if133 = GraceDone;
            }
            setLineNumber(120);    // compilenode identifier
            onSelf = true;
            var call144 = callmethodChecked(this, "createDirectoryIfNecessary", [1], var_outDirCache);
            return call144;
          };
          cases25.push(block117);
          setLineNumber(121);    // compilenode block
          var block145 = new GraceBlock(this, 121, 0);
          var string146 = new GraceString("--stdout");
          block145.pattern = string146;
          block145.real = function() {
            setLineNumber(122);    // compilenode identifier
            var_toStdout = GraceTrue;
            return GraceDone;
          };
          cases25.push(block145);
          setLineNumber(123);    // compilenode block
          var block147 = new GraceBlock(this, 123, 0);
          var string148 = new GraceString("-");
          block147.pattern = string148;
          block147.real = function() {
            setLineNumber(124);    // compilenode identifier
            var_toStdout = GraceTrue;
            return GraceDone;
          };
          cases25.push(block147);
          setLineNumber(125);    // compilenode block
          var block149 = new GraceBlock(this, 125, 0);
          var string150 = new GraceString("--module");
          block149.pattern = string150;
          block149.real = function() {
            setLineNumber(126);    // compilenode identifier
            var_skip = GraceTrue;
            var if151 = GraceDone;
            setLineNumber(127);    // compilenode identifier
            var opresult154 = callmethodChecked(var_ai, "+", [1], new GraceNum(1));
            var call156 = callmethodChecked(var_argv, "size", [0]);
            var opresult158 = callmethodChecked(call156, "<", [1], opresult154);
            if (Grace_isTrue(opresult158)) {
              setLineNumber(128);    // compilenode string
              var string159 = new GraceString("--module requires an argument.");
              onSelf = true;
              var call160 = callmethodChecked(this, "startupFailure", [1], string159);
              if151 = call160;
            }
            setLineNumber(130);    // compilenode identifier
            var opresult163 = callmethodChecked(var_ai, "+", [1], new GraceNum(1));
            var call164 = callmethodChecked(var_argv, "at", [1], opresult163);
            var_modnamev = call164;
            return GraceDone;
          };
          cases25.push(block149);
          setLineNumber(131);    // compilenode block
          var block165 = new GraceBlock(this, 131, 0);
          var string166 = new GraceString("--gracelib");
          block165.pattern = string166;
          block165.real = function() {
            setLineNumber(132);    // compilenode identifier
            var_skip = GraceTrue;
            var if167 = GraceDone;
            setLineNumber(133);    // compilenode identifier
            var opresult170 = callmethodChecked(var_ai, "+", [1], new GraceNum(1));
            var call172 = callmethodChecked(var_argv, "size", [0]);
            var opresult174 = callmethodChecked(call172, "<", [1], opresult170);
            if (Grace_isTrue(opresult174)) {
              setLineNumber(134);    // compilenode string
              var string175 = new GraceString("--gracelib requires an argument.");
              onSelf = true;
              var call176 = callmethodChecked(this, "startupFailure", [1], string175);
              if167 = call176;
            }
            setLineNumber(136);    // compilenode identifier
            var opresult179 = callmethodChecked(var_ai, "+", [1], new GraceNum(1));
            var call180 = callmethodChecked(var_argv, "at", [1], opresult179);
            var_gracelibPathv = call180;
            return GraceDone;
          };
          cases25.push(block165);
          setLineNumber(137);    // compilenode block
          var block181 = new GraceBlock(this, 137, 0);
          var string182 = new GraceString("--target");
          block181.pattern = string182;
          block181.real = function() {
            setLineNumber(138);    // compilenode identifier
            var_skip = GraceTrue;
            var if183 = GraceDone;
            setLineNumber(139);    // compilenode identifier
            var opresult186 = callmethodChecked(var_ai, "+", [1], new GraceNum(1));
            var call188 = callmethodChecked(var_argv, "size", [0]);
            var opresult190 = callmethodChecked(call188, "<", [1], opresult186);
            if (Grace_isTrue(opresult190)) {
              setLineNumber(140);    // compilenode string
              var string191 = new GraceString("--target requires an argument.");
              onSelf = true;
              var call192 = callmethodChecked(this, "startupFailure", [1], string191);
              if183 = call192;
            }
            setLineNumber(142);    // compilenode identifier
            var opresult195 = callmethodChecked(var_ai, "+", [1], new GraceNum(1));
            var call196 = callmethodChecked(var_argv, "at", [1], opresult195);
            var_targetv = call196;
            var if197 = GraceDone;
            setLineNumber(144);    // compilenode string
            var string198 = new GraceString("help");
            var opresult201 = callmethodChecked(var_targetv, "==", [1], string198);
            if (Grace_isTrue(opresult201)) {
              setLineNumber(145);    // compilenode string
              var string202 = new GraceString("Valid targets:\n");
              var call203 = callmethodChecked(var_io, "error", [0]);
              var call204 = callmethodChecked(call203, "write", [1], string202);
              setLineNumber(146);    // compilenode block
              var block205 = new GraceBlock(this, 146, 1);
              setLineNumber(1);    // compilenode identifier
              block205.real = function(var_t) {
                setLineNumber(147);    // compilenode string
                var string206 = new GraceString("\n");
                var string209 = new GraceString("  ");
                var opresult211 = callmethodChecked(string209, "++", [1], var_t);
                var opresult213 = callmethodChecked(opresult211, "++", [1], string206);
                var call214 = callmethodChecked(var_io, "error", [0]);
                var call215 = callmethodChecked(call214, "write", [1], opresult213);
                return call215;
              };
              setLineNumber(146);    // compilenode identifier
              var call216 = callmethodChecked(var_targets, "asList", [0]);
              var call217 = callmethodChecked(call216, "sort", [0]);
              var call218 = callmethodChecked(call217, "do", [1], block205);
              setLineNumber(149);    // compilenode identifier
              var call219 = callmethodChecked(var_sys, "exit", [1], new GraceNum(0));
              if197 = call219;
            }
            return if197;
          };
          cases25.push(block181);
          setLineNumber(151);    // compilenode block
          var block220 = new GraceBlock(this, 151, 0);
          var string221 = new GraceString("-j");
          block220.pattern = string221;
          block220.real = function() {
            setLineNumber(152);    // compilenode identifier
            var_skip = GraceTrue;
            var if222 = GraceDone;
            setLineNumber(153);    // compilenode identifier
            var opresult225 = callmethodChecked(var_ai, "+", [1], new GraceNum(1));
            var call227 = callmethodChecked(var_argv, "size", [0]);
            var opresult229 = callmethodChecked(call227, "<", [1], opresult225);
            if (Grace_isTrue(opresult229)) {
              setLineNumber(154);    // compilenode string
              var string230 = new GraceString("-j requires an argument.");
              onSelf = true;
              var call231 = callmethodChecked(this, "startupFailure", [1], string230);
              if222 = call231;
            }
            setLineNumber(156);    // compilenode identifier
            var opresult234 = callmethodChecked(var_ai, "+", [1], new GraceNum(1));
            var call235 = callmethodChecked(var_argv, "at", [1], opresult234);
            var call236 = callmethodChecked(call235, "asNumber", [0]);
            var_jobs = call236;
            return GraceDone;
          };
          cases25.push(block220);
          setLineNumber(157);    // compilenode block
          var block237 = new GraceBlock(this, 157, 0);
          var string238 = new GraceString("--version");
          block237.pattern = string238;
          block237.real = function() {
            setLineNumber(159);    // compilenode string
            var string239 = new GraceString("");
            var call241 = callmethodChecked(var_buildinfo, "gitgeneration", [0]);
            var string243 = new GraceString("");
            var opresult245 = callmethodChecked(string243, "++", [1], call241);
            var opresult247 = callmethodChecked(opresult245, "++", [1], string239);
            setLineNumber(158);    // compilenode string
            var string249 = new GraceString("minigrace version ");
            var opresult251 = callmethodChecked(string249, "++", [1], opresult247);
            var call252 = Grace_print(opresult251);
            setLineNumber(160);    // compilenode identifier
            var call253 = callmethodChecked(var_buildinfo, "gitrevision", [0]);
            var string255 = new GraceString("git revision ");
            var opresult257 = callmethodChecked(string255, "++", [1], call253);
            var call258 = Grace_print(opresult257);
            setLineNumber(161);    // compilenode identifier
            var call259 = callmethodChecked(var_sys, "exit", [1], new GraceNum(0));
            return call259;
          };
          cases25.push(block237);
          setLineNumber(162);    // compilenode block
          var block260 = new GraceBlock(this, 162, 1);
          setLineNumber(1);    // compilenode identifier
          block260.real = function(var___95____95__0) {
            var if261 = GraceDone;
            setLineNumber(163);    // compilenode string
            var string262 = new GraceString("X");
            var call264 = callmethodChecked(var_arg, "at", [1], new GraceNum(2));
            var opresult266 = callmethodChecked(call264, "==", [1], string262);
            if (Grace_isTrue(opresult266)) {
              setLineNumber(164);    // compilenode identifier
              var call267 = callmethodChecked(var_arg, "size", [0]);
              var call268 = callmethodChecked(var_arg, "substringFrom()to", [1, 1], new GraceNum(3), call267);
              var var_ext = call268;
              setLineNumber(165);    // compilenode string
              var string269 = new GraceString("");
              var string272 = new GraceString(" ");
              var string275 = new GraceString("");
              var opresult277 = callmethodChecked(string275, "++", [1], var_commandLineExtensions);
              var opresult279 = callmethodChecked(opresult277, "++", [1], string272);
              var opresult281 = callmethodChecked(opresult279, "++", [1], var_arg);
              var opresult283 = callmethodChecked(opresult281, "++", [1], string269);
              var_commandLineExtensions = opresult283;
              setLineNumber(166);    // compilenode identifier
              onSelf = true;
              var call284 = callmethodChecked(this, "processExtension", [1], var_ext);
              if261 = call284;
            } else {
              setLineNumber(168);    // compilenode string
              var string285 = new GraceString(".");
              var string288 = new GraceString("invalid argument ");
              var opresult290 = callmethodChecked(string288, "++", [1], var_arg);
              var opresult292 = callmethodChecked(opresult290, "++", [1], string285);
              onSelf = true;
              var call293 = callmethodChecked(this, "startupFailure", [1], opresult292);
              if261 = call293;
            }
            return if261;
          };
          cases25.push(block260);
          setLineNumber(62);    // compilematchcase
          var matchres25 = matchCase(var_arg,cases25,false);
          setModuleName("util");
          if15 = matchres25;
        } else {
          var if294 = GraceDone;
          setLineNumber(172);    // compilenode identifier
          if (Grace_isTrue(var_skip)) {
            setLineNumber(173);    // compilenode identifier
            var_skip = GraceFalse;
            if294 = GraceDone;
          } else {
            var if295 = GraceDone;
            setLineNumber(174);    // compilenode identifier
            var opresult298 = callmethodChecked(var_filename, "==", [1], var_nullFile);
            if (Grace_isTrue(opresult298)) {
              setLineNumber(175);    // compilenode identifier
              var call299 = callmethodChecked(var_filePath, "fromString", [1], var_arg);
              var_filename = call299;
              var if300 = GraceDone;
              setLineNumber(176);    // compilenode string
              var string301 = new GraceString(".grace");
              var call303 = callmethodChecked(var_filename, "extension", [0]);
              var opresult305 = callmethodChecked(call303, "\u2260", [1], string301);
              if (Grace_isTrue(opresult305)) {
                setLineNumber(177);    // compilenode string
                var string306 = new GraceString("' does not end with '.grace'.");
                var string309 = new GraceString("filename '");
                var opresult311 = callmethodChecked(string309, "++", [1], var_filename);
                var opresult313 = callmethodChecked(opresult311, "++", [1], string306);
                onSelf = true;
                var call314 = callmethodChecked(this, "startupFailure", [1], opresult313);
                if300 = call314;
              }
              setLineNumber(179);    // compilenode block
              var block316 = new GraceBlock(this, 179, 0);
              block316.real = function() {
                setLineNumber(180);    // compilenode identifier
                var call317 = callmethodChecked(var_filename, "asString", [0]);
                var string318 = new GraceString("r");
                var call319 = callmethodChecked(var_io, "open", [2], call317, string318);
                var_infilev = call319;
                return GraceDone;
              };
              var cases315 = [];
              setLineNumber(181);    // compilenode block
              var block320 = new GraceBlock(this, 181, 1);
              setLineNumber(157);    // compilenode string
              var string321 = new GraceString("ex");
              var call322 = callmethodChecked(var_prelude, "VariablePattern", [0]);
              var call323 = callmethodChecked(call322, "new", [1], string321);
              setLineNumber(182);    // compilenode call
              var call324 = callmethodChecked(var_prelude, "EnvironmentException", [0]);
              setLineNumber(157);    // compilenode call
              var call325 = callmethodChecked(var_prelude, "AndPattern", [0]);
              var call326 = callmethodChecked(call325, "new", [2], call323, call324);
              block320.pattern = call326;
              setLineNumber(182);    // compilenode call
              var call327 = callmethodChecked(var_prelude, "EnvironmentException", [0]);
              block320.paramTypes = [call327];
              block320.real = function(var_ex) {
                setLineNumber(183);    // compilenode string
                var string328 = new GraceString("");
                var string331 = new GraceString("can't open file ");
                var opresult333 = callmethodChecked(string331, "++", [1], var_filename);
                var opresult335 = callmethodChecked(opresult333, "++", [1], string328);
                onSelf = true;
                var call336 = callmethodChecked(this, "startupFailure", [1], opresult335);
                return call336;
              };
              cases315.push(block320);
              setLineNumber(179);    // compiletrycatch
              var catchres315 = tryCatch(block316,cases315,false);
              setModuleName("util");
              var if337 = GraceDone;
              setLineNumber(185);    // compilenode string
              var string338 = new GraceString("standardInput");
              var opresult341 = callmethodChecked(var_modnamev, "==", [1], string338);
              if (Grace_isTrue(opresult341)) {
                setLineNumber(186);    // compilenode identifier
                var call342 = callmethodChecked(var_filename, "base", [0]);
                var_modnamev = call342;
                if337 = GraceDone;
              }
              if295 = if337;
            } else {
              setLineNumber(189);    // compilenode string
              var string343 = new GraceString("please provide a single Grace file.");
              onSelf = true;
              var call344 = callmethodChecked(this, "startupFailure", [1], string343);
              if295 = call344;
            }
            if294 = if295;
          }
          if15 = if294;
        }
        return if15;
      };
      var call345 = callmethodChecked(var_prelude, "for()do", [1, 1], var_indices, block13);
      if7 = call345;
    }
    var if346 = GraceDone;
    setLineNumber(194);    // compilenode block
    var block347 = new GraceBlock(this, 194, 0);
    block347.real = function() {
      var string348 = new GraceString("");
      var opresult351 = callmethodChecked(var_outDirCache, "\u2260", [1], string348);
      return opresult351;
    };
    var opresult355 = callmethodChecked(GraceFalse, "==", [1], var_vtagv);
    var opresult357 = callmethodChecked(opresult355, "&&", [1], block347);
    if (Grace_isTrue(opresult357)) {
      setLineNumber(195);    // compilenode identifier
      var call359 = callmethodChecked(var_outDirCache, "size", [0]);
      var diff361 = callmethodChecked(call359, "-", [1], new GraceNum(1));
      var call362 = callmethodChecked(var_outDirCache, "substringFrom()to", [1, 1], new GraceNum(1), diff361);
      var_vtagv = call362;
      if346 = GraceDone;
    }
    var if363 = GraceDone;
    setLineNumber(197);    // compilenode block
    var block364 = new GraceBlock(this, 197, 0);
    block364.real = function() {
      var call365 = callmethodChecked(var_toStdout, "prefix!", [0]);
      return call365;
    };
    var call367 = callmethodChecked(var_io, "output", [0]);
    var opresult370 = callmethodChecked(var_outfilev, "==", [1], call367);
    var opresult372 = callmethodChecked(opresult370, "&&", [1], block364);
    if (Grace_isTrue(opresult372)) {
      setLineNumber(198);    // compilenode identifier
      var cases373 = [];
      setLineNumber(199);    // compilenode block
      var block374 = new GraceBlock(this, 199, 0);
      var string375 = new GraceString("c");
      block374.pattern = string375;
      block374.real = function() {
        var string376 = new GraceString(".c");
        onSelf = true;
        var call379 = callmethodChecked(this, "outDir", [0]);
        var opresult381 = callmethodChecked(call379, "++", [1], var_modnamev);
        var opresult383 = callmethodChecked(opresult381, "++", [1], string376);
        var string384 = new GraceString("w");
        var call385 = callmethodChecked(var_io, "open", [2], opresult383, string384);
        return call385;
      };
      cases373.push(block374);
      setLineNumber(200);    // compilenode block
      var block386 = new GraceBlock(this, 200, 0);
      var string387 = new GraceString("js");
      block386.pattern = string387;
      block386.real = function() {
        var string388 = new GraceString(".js");
        onSelf = true;
        var call391 = callmethodChecked(this, "outDir", [0]);
        var opresult393 = callmethodChecked(call391, "++", [1], var_modnamev);
        var opresult395 = callmethodChecked(opresult393, "++", [1], string388);
        var string396 = new GraceString("w");
        var call397 = callmethodChecked(var_io, "open", [2], opresult395, string396);
        return call397;
      };
      cases373.push(block386);
      setLineNumber(201);    // compilenode block
      var block398 = new GraceBlock(this, 201, 0);
      var string399 = new GraceString("parse");
      block398.pattern = string399;
      block398.real = function() {
        var string400 = new GraceString(".parse");
        onSelf = true;
        var call403 = callmethodChecked(this, "outDir", [0]);
        var opresult405 = callmethodChecked(call403, "++", [1], var_modnamev);
        var opresult407 = callmethodChecked(opresult405, "++", [1], string400);
        var string408 = new GraceString("w");
        var call409 = callmethodChecked(var_io, "open", [2], opresult407, string408);
        return call409;
      };
      cases373.push(block398);
      setLineNumber(202);    // compilenode block
      var block410 = new GraceBlock(this, 202, 0);
      var string411 = new GraceString("lex");
      block410.pattern = string411;
      block410.real = function() {
        var string412 = new GraceString(".lex");
        onSelf = true;
        var call415 = callmethodChecked(this, "outDir", [0]);
        var opresult417 = callmethodChecked(call415, "++", [1], var_modnamev);
        var opresult419 = callmethodChecked(opresult417, "++", [1], string412);
        var string420 = new GraceString("w");
        var call421 = callmethodChecked(var_io, "open", [2], opresult419, string420);
        return call421;
      };
      cases373.push(block410);
      setLineNumber(203);    // compilenode block
      var block422 = new GraceBlock(this, 203, 0);
      var string423 = new GraceString("processed-ast");
      block422.pattern = string423;
      block422.real = function() {
        var string424 = new GraceString(".ast");
        onSelf = true;
        var call427 = callmethodChecked(this, "outDir", [0]);
        var opresult429 = callmethodChecked(call427, "++", [1], var_modnamev);
        var opresult431 = callmethodChecked(opresult429, "++", [1], string424);
        var string432 = new GraceString("w");
        var call433 = callmethodChecked(var_io, "open", [2], opresult431, string432);
        return call433;
      };
      cases373.push(block422);
      setLineNumber(204);    // compilenode block
      var block434 = new GraceBlock(this, 204, 0);
      var string435 = new GraceString("ast");
      block434.pattern = string435;
      block434.real = function() {
        var string436 = new GraceString(".ast");
        onSelf = true;
        var call439 = callmethodChecked(this, "outDir", [0]);
        var opresult441 = callmethodChecked(call439, "++", [1], var_modnamev);
        var opresult443 = callmethodChecked(opresult441, "++", [1], string436);
        var string444 = new GraceString("w");
        var call445 = callmethodChecked(var_io, "open", [2], opresult443, string444);
        return call445;
      };
      cases373.push(block434);
      setLineNumber(205);    // compilenode block
      var block446 = new GraceBlock(this, 205, 0);
      var string447 = new GraceString("symbols");
      block446.pattern = string447;
      block446.real = function() {
        var string448 = new GraceString(".symbols");
        onSelf = true;
        var call451 = callmethodChecked(this, "outDir", [0]);
        var opresult453 = callmethodChecked(call451, "++", [1], var_modnamev);
        var opresult455 = callmethodChecked(opresult453, "++", [1], string448);
        var string456 = new GraceString("w");
        var call457 = callmethodChecked(var_io, "open", [2], opresult455, string456);
        return call457;
      };
      cases373.push(block446);
      setLineNumber(206);    // compilenode block
      var block458 = new GraceBlock(this, 206, 0);
      var string459 = new GraceString("patterns");
      block458.pattern = string459;
      block458.real = function() {
        var string460 = new GraceString(".patterns");
        onSelf = true;
        var call463 = callmethodChecked(this, "outDir", [0]);
        var opresult465 = callmethodChecked(call463, "++", [1], var_modnamev);
        var opresult467 = callmethodChecked(opresult465, "++", [1], string460);
        var string468 = new GraceString("w");
        var call469 = callmethodChecked(var_io, "open", [2], opresult467, string468);
        return call469;
      };
      cases373.push(block458);
      setLineNumber(207);    // compilenode block
      var block470 = new GraceBlock(this, 207, 0);
      var string471 = new GraceString("grace");
      block470.pattern = string471;
      block470.real = function() {
        var string472 = new GraceString("_new.grace");
        onSelf = true;
        var call475 = callmethodChecked(this, "outDir", [0]);
        var opresult477 = callmethodChecked(call475, "++", [1], var_modnamev);
        var opresult479 = callmethodChecked(opresult477, "++", [1], string472);
        var string480 = new GraceString("w");
        var call481 = callmethodChecked(var_io, "open", [2], opresult479, string480);
        return call481;
      };
      cases373.push(block470);
      setLineNumber(208);    // compilenode block
      var block482 = new GraceBlock(this, 208, 0);
      var string483 = new GraceString("imports");
      block482.pattern = string483;
      block482.real = function() {
        var call484 = callmethodChecked(var_io, "output", [0]);
        return call484;
      };
      cases373.push(block482);
      setLineNumber(209);    // compilenode block
      var block485 = new GraceBlock(this, 209, 1);
      setLineNumber(1);    // compilenode identifier
      block485.real = function(var___95____95__1) {
        setLineNumber(210);    // compilenode string
        var string486 = new GraceString("'.");
        var string489 = new GraceString("unrecognized target '");
        var opresult491 = callmethodChecked(string489, "++", [1], var_targetv);
        var opresult493 = callmethodChecked(opresult491, "++", [1], string486);
        onSelf = true;
        var call494 = callmethodChecked(this, "startupFailure", [1], opresult493);
        return call494;
      };
      cases373.push(block485);
      setLineNumber(198);    // compilematchcase
      var matchres373 = matchCase(var_targetv,cases373,false);
      setModuleName("util");
      var_outfilev = matchres373;
      if363 = GraceDone;
    }
    var if495 = GraceDone;
    setLineNumber(213);    // compilenode string
    var string496 = new GraceString("js");
    onSelf = true;
    var call498 = callmethodChecked(this, "target", [0]);
    var opresult500 = callmethodChecked(call498, "\u2260", [1], string496);
    var string502 = new GraceString("c");
    onSelf = true;
    var call504 = callmethodChecked(this, "target", [0]);
    var opresult506 = callmethodChecked(call504, "\u2260", [1], string502);
    var opresult508 = callmethodChecked(opresult506, "&&", [1], opresult500);
    if (Grace_isTrue(opresult508)) {
      setLineNumber(214);    // compilenode string
      var string509 = new GraceString("debug");
      var_buildtypev = string509;
      if495 = GraceDone;
    }
    var if510 = GraceDone;
    setLineNumber(216);    // compilenode identifier
    var opresult513 = callmethodChecked(var_gracelibPathv, "==", [1], GraceFalse);
    var string515 = new GraceString("run");
    onSelf = true;
    var call517 = callmethodChecked(this, "buildtype", [0]);
    var opresult519 = callmethodChecked(call517, "==", [1], string515);
    var opresult521 = callmethodChecked(opresult519, "&&", [1], opresult513);
    if (Grace_isTrue(opresult521)) {
      var if522 = GraceDone;
      setLineNumber(217);    // compilenode string
      var string523 = new GraceString("c");
      onSelf = true;
      var call525 = callmethodChecked(this, "target", [0]);
      var opresult527 = callmethodChecked(call525, "==", [1], string523);
      if (Grace_isTrue(opresult527)) {
        var string528 = new GraceString(".o");
        if522 = string528;
      } else {
        onSelf = true;
        var call529 = callmethodChecked(this, "target", [0]);
        var string531 = new GraceString(".");
        var opresult533 = callmethodChecked(string531, "++", [1], call529);
        if522 = opresult533;
      }
      var var_extension = if522;
      setLineNumber(218);    // compilenode call
      onSelf = true;
      var call534 = callmethodChecked(this, "execDir", [0]);
      setLineNumber(219);    // compilenode string
      var string535 = new GraceString("gracelib");
      setLineNumber(218);    // compilenode identifier
      var call536 = callmethodChecked(var_filePath, "withDirectory()base()extension", [1, 1, 1], call534, string535, var_extension);
      var var_soughtLibrary = call536;
      var if537 = GraceDone;
      setLineNumber(220);    // compilenode identifier
      var call538 = callmethodChecked(var_soughtLibrary, "exists", [0]);
      if (Grace_isTrue(call538)) {
        setLineNumber(221);    // compilenode call
        onSelf = true;
        var call539 = callmethodChecked(this, "execDir", [0]);
        var_gracelibPathv = call539;
        if537 = GraceDone;
      } else {
        setLineNumber(223);    // compilenode string
        var string540 = new GraceString("");
        var call541 = callmethodChecked(var_soughtLibrary, "directory:=", [1], string540);
        setLineNumber(225);    // compilenode string
        var string542 = new GraceString("GRACE_MODULE_PATH");
        var call543 = callmethodChecked(var_sys, "environ", [0]);
        var call544 = callmethodChecked(call543, "at", [1], string542);
        setLineNumber(226);    // compilenode block
        var block545 = new GraceBlock(this, 226, 1);
        setLineNumber(1);    // compilenode identifier
        block545.real = function(var_locs) {
          setLineNumber(228);    // compilenode string
          var string546 = new GraceString(".");
          var string549 = new GraceString("looked in ");
          var opresult551 = callmethodChecked(string549, "++", [1], var_locs);
          var opresult553 = callmethodChecked(opresult551, "++", [1], string546);
          setLineNumber(227);    // compilenode string
          var string555 = new GraceString(";\n");
          var call557 = callmethodChecked(var_soughtLibrary, "shortName", [0]);
          var string559 = new GraceString("can't find ");
          var opresult561 = callmethodChecked(string559, "++", [1], call557);
          var opresult563 = callmethodChecked(opresult561, "++", [1], string555);
          var opresult565 = callmethodChecked(opresult563, "++", [1], opresult553);
          onSelf = true;
          var call566 = callmethodChecked(this, "startupFailure", [1], opresult565);
          return call566;
        };
        onSelf = true;
        var call567 = callmethodChecked(this, "file()onPath()otherwise", [1, 1, 1], var_soughtLibrary, call544, block545);
        var var_gracelib = call567;
        setLineNumber(230);    // compilenode identifier
        var call568 = callmethodChecked(var_gracelib, "directory", [0]);
        var_gracelibPathv = call568;
        if537 = GraceDone;
      }
      if510 = if537;
    }
    var if569 = GraceDone;
    setLineNumber(233);    // compilenode identifier
    var call570 = callmethodChecked(var_io, "input", [0]);
    var opresult573 = callmethodChecked(var_infilev, "==", [1], call570);
    if (Grace_isTrue(opresult573)) {
      var if574 = GraceDone;
      setLineNumber(234);    // compilenode identifier
      var call575 = callmethodChecked(var_infilev, "isatty", [0]);
      if (Grace_isTrue(call575)) {
        setLineNumber(236);    // compilenode identifier
        var call576 = callmethodChecked(var_buildinfo, "gitrevision", [0]);
        setLineNumber(235);    // compilenode string
        var string578 = new GraceString(" / ");
        var call580 = callmethodChecked(var_buildinfo, "gitgeneration", [0]);
        var string582 = new GraceString("minigrace ");
        var opresult584 = callmethodChecked(string582, "++", [1], call580);
        var opresult586 = callmethodChecked(opresult584, "++", [1], string578);
        var opresult588 = callmethodChecked(opresult586, "++", [1], call576);
        var call589 = Grace_print(opresult588);
        setLineNumber(237);    // compilenode string
        var string590 = new GraceString("Copyright \u00a9 2011-2015 rests with the authors.");
        var call591 = Grace_print(string590);
        setLineNumber(239);    // compilenode string
        var string592 = new GraceString("Say minigrace.w for details.");
        setLineNumber(238);    // compilenode string
        var string594 = new GraceString("This is free software with absolutely no warranty. ");
        var opresult596 = callmethodChecked(string594, "++", [1], string592);
        var call597 = Grace_print(opresult596);
        setLineNumber(240);    // compilenode string
        var string598 = new GraceString("");
        var call599 = Grace_print(string598);
        setLineNumber(241);    // compilenode string
        var string600 = new GraceString("Enter a program and press Ctrl-D to execute it.");
        var call601 = Grace_print(string600);
        setLineNumber(242);    // compilenode string
        var string602 = new GraceString("");
        var call603 = Grace_print(string602);
        if574 = call603;
      }
      if569 = if574;
    }
    return if569;
  };
  func5.paramCounts = [1];
  this.methods["parseargs"] = func5;
  func5.definitionLine = 52;
  func5.definitionModule = "util";
  setLineNumber(247);    // compilenode method
  var func604 = function(argcv) {    // method createDirectoryIfNecessary(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_d = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for createDirectoryIfNecessary(1)"));
    setModuleName("util");
    var if605 = GraceDone;
    setLineNumber(248);    // compilenode identifier
    var call606 = callmethodChecked(var_io, "exists", [1], var_d);
    if (Grace_isTrue(call606)) {
      return var_done;
    }
    var if607 = GraceDone;
    setLineNumber(249);    // compilenode string
    var string608 = new GraceString("\"");
    var string611 = new GraceString("mkdir \"");
    var opresult613 = callmethodChecked(string611, "++", [1], var_d);
    var opresult615 = callmethodChecked(opresult613, "++", [1], string608);
    var call616 = callmethodChecked(var_io, "system", [1], opresult615);
    if (Grace_isTrue(call616)) {
      return var_done;
    }
    setLineNumber(250);    // compilenode string
    var string617 = new GraceString("\".");
    var string620 = new GraceString("Unable to create directory \"");
    var opresult622 = callmethodChecked(string620, "++", [1], var_d);
    var opresult624 = callmethodChecked(opresult622, "++", [1], string617);
    var call625 = callmethodChecked(var_prelude, "EnvironmentException", [0]);
    var call626 = callmethodChecked(call625, "raise", [1], opresult624);
    return call626;
  };
  func604.confidential = true;
  func604.paramCounts = [1];
  this.methods["createDirectoryIfNecessary"] = func604;
  func604.definitionLine = 247;
  func604.definitionModule = "util";
  setLineNumber(255);    // compilenode method
  var func627 = function(argcv) {    // method log_verbose(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_s = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for log_verbose(1)"));
    setModuleName("util");
    setLineNumber(256);    // compilenode identifier
    var opresult630 = callmethodChecked(var_defaultVerbosity, "+", [1], new GraceNum(1));
    onSelf = true;
    var call631 = callmethodChecked(this, "log()verbose", [1, 1], opresult630, var_s);
    return call631;
  };
  func627.paramCounts = [1];
  this.methods["log_verbose"] = func627;
  func627.definitionLine = 255;
  func627.definitionModule = "util";
  setLineNumber(259);    // compilenode method
  var func632 = function(argcv) {    // method log(1)verbose(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_level = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for log (arg list 1) of log(1)verbose(1)"));
    var var_s = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for verbose (arg list 2) of log(1)verbose(1)"));
    setModuleName("util");
    var if633 = GraceDone;
    setLineNumber(260);    // compilenode identifier
    var opresult636 = callmethodChecked(var_verbosity, "\u2265", [1], var_level);
    if (Grace_isTrue(opresult636)) {
      setLineNumber(261);    // compilenode string
      var string637 = new GraceString("");
      var var_vtagw = string637;
      var if638 = GraceDone;
      setLineNumber(262);    // compilenode identifier
      var opresult641 = callmethodChecked(GraceFalse, "\u2260", [1], var_vtagv);
      if (Grace_isTrue(opresult641)) {
        setLineNumber(263);    // compilenode string
        var string642 = new GraceString("]");
        var string645 = new GraceString("[");
        var opresult647 = callmethodChecked(string645, "++", [1], var_vtagv);
        var opresult649 = callmethodChecked(opresult647, "++", [1], string642);
        var_vtagw = opresult649;
        if638 = GraceDone;
      }
      setLineNumber(265);    // compilenode identifier
      var call652 = callmethodChecked(var_sys, "elapsed", [0]);
      var prod654 = callmethodChecked(call652, "*", [1], new GraceNum(100));
      var call655 = callmethodChecked(prod654, "rounded", [0]);
      var quotient657 = callmethodChecked(call655, "/", [1], new GraceNum(100));
      var var_elapsed = quotient657;
      setLineNumber(267);    // compilenode string
      var string658 = new GraceString("\n");
      var string661 = new GraceString("): ");
      var diff665 = callmethodChecked(var_elapsed, "-", [1], var_previousElapsed);
      var string667 = new GraceString(" (+");
      var string670 = new GraceString("");
      var opresult672 = callmethodChecked(string670, "++", [1], var_elapsed);
      var opresult674 = callmethodChecked(opresult672, "++", [1], string667);
      var opresult676 = callmethodChecked(opresult674, "++", [1], diff665);
      var opresult678 = callmethodChecked(opresult676, "++", [1], string661);
      var opresult680 = callmethodChecked(opresult678, "++", [1], var_s);
      var opresult682 = callmethodChecked(opresult680, "++", [1], string658);
      setLineNumber(266);    // compilenode string
      var string684 = new GraceString(": ");
      var string687 = new GraceString(": ");
      var string690 = new GraceString("minigrace");
      var opresult692 = callmethodChecked(string690, "++", [1], var_vtagw);
      var opresult694 = callmethodChecked(opresult692, "++", [1], string687);
      var opresult696 = callmethodChecked(opresult694, "++", [1], var_modnamev);
      var opresult698 = callmethodChecked(opresult696, "++", [1], string684);
      var opresult700 = callmethodChecked(opresult698, "++", [1], opresult682);
      var call701 = callmethodChecked(var_io, "error", [0]);
      var call702 = callmethodChecked(call701, "write", [1], opresult700);
      setLineNumber(268);    // compilenode identifier
      var_previousElapsed = var_elapsed;
      if633 = GraceDone;
    }
    return if633;
  };
  func632.paramCounts = [1, 1];
  this.methods["log()verbose"] = func632;
  func632.definitionLine = 259;
  func632.definitionModule = "util";
  setLineNumber(272);    // compilenode method
  var func703 = function(argcv) {    // method outprint(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_s = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for outprint(1)"));
    setModuleName("util");
    setLineNumber(273);    // compilenode identifier
    var call704 = callmethodChecked(var_outfilev, "write", [1], var_s);
    setLineNumber(274);    // compilenode string
    var string705 = new GraceString("\n");
    var call706 = callmethodChecked(var_outfilev, "write", [1], string705);
    return call706;
  };
  func703.paramCounts = [1];
  this.methods["outprint"] = func703;
  func703.definitionLine = 272;
  func703.definitionModule = "util";
  setLineNumber(278);    // compilenode method
  var func707 = function(argcv) {    // method syntaxError(6)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_message = arguments[curarg];
    curarg++;
    var var_errlinenum = arguments[curarg];
    curarg++;
    var var_position = arguments[curarg];
    curarg++;
    var var_arr = arguments[curarg];
    curarg++;
    var var_spacePos = arguments[curarg];
    curarg++;
    var var_suggestions = arguments[curarg];
    curarg++;
    if (argcv[0] !== 6)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for syntaxError(6)"));
    setModuleName("util");
    setLineNumber(287);    // compilenode string
    var string708 = new GraceString("");
    var string711 = new GraceString("Syntax error: ");
    var opresult713 = callmethodChecked(string711, "++", [1], var_message);
    var opresult715 = callmethodChecked(opresult713, "++", [1], string708);
    setLineNumber(288);    // compilenode identifier
    onSelf = true;
    var call716 = callmethodChecked(this, "generalError", [6], opresult715, var_errlinenum, var_position, var_arr, var_spacePos, var_suggestions);
    return call716;
  };
  func707.paramCounts = [6];
  this.methods["syntaxError"] = func707;
  func707.definitionLine = 278;
  func707.definitionModule = "util";
  setLineNumber(291);    // compilenode method
  var func717 = function(argcv) {    // method startupFailure(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_message = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for startupFailure(1)"));
    setModuleName("util");
    setLineNumber(294);    // compilenode string
    var string718 = new GraceString(": ");
    var call720 = callmethodChecked(var_sys, "argv", [0]);
    var call721 = callmethodChecked(call720, "at", [1], new GraceNum(1));
    var string723 = new GraceString("");
    var opresult725 = callmethodChecked(string723, "++", [1], call721);
    var opresult727 = callmethodChecked(opresult725, "++", [1], string718);
    var call728 = callmethodChecked(var_io, "error", [0]);
    var call729 = callmethodChecked(call728, "write", [1], opresult727);
    setLineNumber(295);    // compilenode identifier
    var call730 = callmethodChecked(var_io, "error", [0]);
    var call731 = callmethodChecked(call730, "write", [1], var_message);
    setLineNumber(296);    // compilenode string
    var string732 = new GraceString("\n");
    var call733 = callmethodChecked(var_io, "error", [0]);
    var call734 = callmethodChecked(call733, "write", [1], string732);
    setLineNumber(297);    // compilenode identifier
    var call735 = callmethodChecked(var_sys, "exit", [1], new GraceNum(1));
    return call735;
  };
  func717.paramCounts = [1];
  this.methods["startupFailure"] = func717;
  func717.definitionLine = 291;
  func717.definitionModule = "util";
  setLineNumber(301);    // compilenode method
  var func736 = function(argcv) {    // method generalError(6)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_message = arguments[curarg];
    curarg++;
    var var_errlinenum = arguments[curarg];
    curarg++;
    var var_position = arguments[curarg];
    curarg++;
    var var_arr = arguments[curarg];
    curarg++;
    var var_spacePos = arguments[curarg];
    curarg++;
    var var_suggestions = arguments[curarg];
    curarg++;
    if (argcv[0] !== 6)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for generalError(6)"));
    setModuleName("util");
    var if737 = GraceDone;
    setLineNumber(302);    // compilenode identifier
    if (Grace_isTrue(var_vtagv)) {
      setLineNumber(303);    // compilenode string
      var string738 = new GraceString("]");
      var string741 = new GraceString("[");
      var opresult743 = callmethodChecked(string741, "++", [1], var_vtagv);
      var opresult745 = callmethodChecked(opresult743, "++", [1], string738);
      var call746 = callmethodChecked(var_io, "error", [0]);
      var call747 = callmethodChecked(call746, "write", [1], opresult745);
      if737 = call747;
    }
    setLineNumber(305);    // compilenode string
    var string748 = new GraceString("\n");
    var string751 = new GraceString("]: ");
    var string754 = new GraceString("");
    var string757 = new GraceString(".grace[");
    var string760 = new GraceString("");
    var opresult762 = callmethodChecked(string760, "++", [1], var_modnamev);
    var opresult764 = callmethodChecked(opresult762, "++", [1], string757);
    var opresult766 = callmethodChecked(opresult764, "++", [1], var_errlinenum);
    var opresult768 = callmethodChecked(opresult766, "++", [1], string754);
    var opresult770 = callmethodChecked(opresult768, "++", [1], var_position);
    var opresult772 = callmethodChecked(opresult770, "++", [1], string751);
    var opresult774 = callmethodChecked(opresult772, "++", [1], var_message);
    var opresult776 = callmethodChecked(opresult774, "++", [1], string748);
    var call777 = callmethodChecked(var_io, "error", [0]);
    var call778 = callmethodChecked(call777, "write", [1], opresult776);
    var if779 = GraceDone;
    setLineNumber(306);    // compilenode identifier
    var diff782 = callmethodChecked(var_errlinenum, "-", [1], new GraceNum(1));
    var call784 = callmethodChecked(var_lines, "size", [0]);
    var opresult786 = callmethodChecked(call784, "\u2265", [1], diff782);
    var opresult790 = callmethodChecked(var_errlinenum, ">", [1], new GraceNum(1));
    var opresult792 = callmethodChecked(opresult790, "&&", [1], opresult786);
    if (Grace_isTrue(opresult792)) {
      setLineNumber(307);    // compilenode string
      var string793 = new GraceString("\n");
      var diff797 = callmethodChecked(var_errlinenum, "-", [1], new GraceNum(1));
      var call798 = callmethodChecked(var_lines, "at", [1], diff797);
      var string800 = new GraceString(": ");
      var diff804 = callmethodChecked(var_errlinenum, "-", [1], new GraceNum(1));
      var string806 = new GraceString("  ");
      var opresult808 = callmethodChecked(string806, "++", [1], diff804);
      var opresult810 = callmethodChecked(opresult808, "++", [1], string800);
      var opresult812 = callmethodChecked(opresult810, "++", [1], call798);
      var opresult814 = callmethodChecked(opresult812, "++", [1], string793);
      var call815 = callmethodChecked(var_io, "error", [0]);
      var call816 = callmethodChecked(call815, "write", [1], opresult814);
      if779 = call816;
    }
    var if817 = GraceDone;
    setLineNumber(309);    // compilenode identifier
    var call819 = callmethodChecked(var_lines, "size", [0]);
    var opresult821 = callmethodChecked(call819, "\u2265", [1], var_errlinenum);
    var opresult825 = callmethodChecked(var_errlinenum, ">", [1], new GraceNum(0));
    var opresult827 = callmethodChecked(opresult825, "&&", [1], opresult821);
    if (Grace_isTrue(opresult827)) {
      setLineNumber(310);    // compilenode string
      var string828 = new GraceString("\n");
      var call830 = callmethodChecked(var_lines, "at", [1], var_errlinenum);
      var string832 = new GraceString(": ");
      var string835 = new GraceString("  ");
      var opresult837 = callmethodChecked(string835, "++", [1], var_errlinenum);
      var opresult839 = callmethodChecked(opresult837, "++", [1], string832);
      var opresult841 = callmethodChecked(opresult839, "++", [1], call830);
      var opresult843 = callmethodChecked(opresult841, "++", [1], string828);
      var call844 = callmethodChecked(var_io, "error", [0]);
      var call845 = callmethodChecked(call844, "write", [1], opresult843);
      setLineNumber(311);    // compilenode string
      var string846 = new GraceString("\n");
      var string849 = new GraceString("");
      var opresult851 = callmethodChecked(string849, "++", [1], var_arr);
      var opresult853 = callmethodChecked(opresult851, "++", [1], string846);
      var call854 = callmethodChecked(var_io, "error", [0]);
      var call855 = callmethodChecked(call854, "write", [1], opresult853);
      if817 = call855;
    }
    var if856 = GraceDone;
    setLineNumber(313);    // compilenode identifier
    var call858 = callmethodChecked(var_suggestions, "size", [0]);
    var opresult860 = callmethodChecked(call858, ">", [1], new GraceNum(0));
    if (Grace_isTrue(opresult860)) {
      setLineNumber(314);    // compilenode block
      var block861 = new GraceBlock(this, 314, 1);
      setLineNumber(1);    // compilenode identifier
      block861.real = function(var_s) {
        setLineNumber(315);    // compilenode string
        var string862 = new GraceString("\nDid you mean:\n");
        var call863 = callmethodChecked(var_io, "error", [0]);
        var call864 = callmethodChecked(call863, "write", [1], string862);
        setLineNumber(316);    // compilenode identifier
        var call865 = callmethodChecked(var_s, "print", [0]);
        return call865;
      };
      var call866 = callmethodChecked(var_prelude, "for()do", [1, 1], var_suggestions, block861);
      if856 = call866;
    }
    setLineNumber(319);    // compilenode identifier
    var call867 = callmethodChecked(var_sys, "exit", [1], new GraceNum(2));
    return call867;
  };
  func736.paramCounts = [6];
  this.methods["generalError"] = func736;
  func736.definitionLine = 301;
  func736.definitionModule = "util";
  setLineNumber(322);    // compilenode method
  var func868 = function(argcv) {    // method type_error(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_s = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for type_error(1)"));
    setModuleName("util");
    var if869 = GraceDone;
    setLineNumber(323);    // compilenode string
    var string870 = new GraceString("IgnoreTypes");
    var call871 = callmethodChecked(var_extensionsv, "contains", [1], string870);
    if (Grace_isTrue(call871)) {
      setLineNumber(324);    // compilenode identifier
      return GraceTrue;
    }
    var if872 = GraceDone;
    setLineNumber(326);    // compilenode identifier
    if (Grace_isTrue(var_vtagv)) {
      setLineNumber(327);    // compilenode string
      var string873 = new GraceString("]");
      var string876 = new GraceString("[");
      var opresult878 = callmethodChecked(string876, "++", [1], var_vtagv);
      var opresult880 = callmethodChecked(opresult878, "++", [1], string873);
      var call881 = callmethodChecked(var_io, "error", [0]);
      var call882 = callmethodChecked(call881, "write", [1], opresult880);
      if872 = call882;
    }
    setLineNumber(329);    // compilenode string
    var string883 = new GraceString("");
    var string886 = new GraceString(": Type error: ");
    var string889 = new GraceString(":");
    var string892 = new GraceString(".grace:");
    var string895 = new GraceString("");
    var opresult897 = callmethodChecked(string895, "++", [1], var_modnamev);
    var opresult899 = callmethodChecked(opresult897, "++", [1], string892);
    var opresult901 = callmethodChecked(opresult899, "++", [1], var_linenumv);
    var opresult903 = callmethodChecked(opresult901, "++", [1], string889);
    var opresult905 = callmethodChecked(opresult903, "++", [1], var_lineposv);
    var opresult907 = callmethodChecked(opresult905, "++", [1], string886);
    var opresult909 = callmethodChecked(opresult907, "++", [1], var_s);
    var opresult911 = callmethodChecked(opresult909, "++", [1], string883);
    var call912 = callmethodChecked(var_io, "error", [0]);
    var call913 = callmethodChecked(call912, "write", [1], opresult911);
    setLineNumber(330);    // compilenode string
    var string914 = new GraceString("\n");
    var call915 = callmethodChecked(var_io, "error", [0]);
    var call916 = callmethodChecked(call915, "write", [1], string914);
    setLineNumber(331);    // compilenode string
    var string917 = new GraceString("\n");
    var call919 = callmethodChecked(var_lines, "at", [1], var_linenumv);
    var opresult921 = callmethodChecked(call919, "++", [1], string917);
    var call922 = callmethodChecked(var_io, "error", [0]);
    var call923 = callmethodChecked(call922, "write", [1], opresult921);
    setLineNumber(332);    // compilenode identifier
    var call924 = callmethodChecked(var_sys, "exit", [1], new GraceNum(2));
    return call924;
  };
  func868.paramCounts = [1];
  this.methods["type_error"] = func868;
  func868.definitionLine = 322;
  func868.definitionModule = "util";
  setLineNumber(334);    // compilenode method
  var func925 = function(argcv) {    // method semantic_error(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_s = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for semantic_error(1)"));
    setModuleName("util");
    var if926 = GraceDone;
    setLineNumber(335);    // compilenode identifier
    if (Grace_isTrue(var_vtagv)) {
      setLineNumber(336);    // compilenode string
      var string927 = new GraceString("]");
      var string930 = new GraceString("[");
      var opresult932 = callmethodChecked(string930, "++", [1], var_vtagv);
      var opresult934 = callmethodChecked(opresult932, "++", [1], string927);
      var call935 = callmethodChecked(var_io, "error", [0]);
      var call936 = callmethodChecked(call935, "write", [1], opresult934);
      if926 = call936;
    }
    setLineNumber(338);    // compilenode string
    var string937 = new GraceString(": Semantic error");
    var string940 = new GraceString(":");
    var string943 = new GraceString(".grace:");
    var string946 = new GraceString("");
    var opresult948 = callmethodChecked(string946, "++", [1], var_modnamev);
    var opresult950 = callmethodChecked(opresult948, "++", [1], string943);
    var opresult952 = callmethodChecked(opresult950, "++", [1], var_linenumv);
    var opresult954 = callmethodChecked(opresult952, "++", [1], string940);
    var opresult956 = callmethodChecked(opresult954, "++", [1], var_lineposv);
    var opresult958 = callmethodChecked(opresult956, "++", [1], string937);
    var call959 = callmethodChecked(var_io, "error", [0]);
    var call960 = callmethodChecked(call959, "write", [1], opresult958);
    var if961 = GraceDone;
    setLineNumber(339);    // compilenode string
    var string962 = new GraceString("");
    var opresult965 = callmethodChecked(var_s, "==", [1], string962);
    if (Grace_isTrue(opresult965)) {
      setLineNumber(340);    // compilenode string
      var string966 = new GraceString("\n");
      var call967 = callmethodChecked(var_io, "error", [0]);
      var call968 = callmethodChecked(call967, "write", [1], string966);
      setLineNumber(341);    // compilenode identifier
      var call969 = callmethodChecked(var_sys, "exit", [1], new GraceNum(2));
      if961 = call969;
    }
    setLineNumber(343);    // compilenode string
    var string970 = new GraceString("\n");
    var string973 = new GraceString(": ");
    var opresult975 = callmethodChecked(string973, "++", [1], var_s);
    var opresult977 = callmethodChecked(opresult975, "++", [1], string970);
    var call978 = callmethodChecked(var_io, "error", [0]);
    var call979 = callmethodChecked(call978, "write", [1], opresult977);
    var if980 = GraceDone;
    setLineNumber(344);    // compilenode identifier
    var opresult983 = callmethodChecked(var_linenumv, ">", [1], new GraceNum(1));
    if (Grace_isTrue(opresult983)) {
      var if984 = GraceDone;
      setLineNumber(345);    // compilenode identifier
      var call986 = callmethodChecked(var_lines, "size", [0]);
      var opresult988 = callmethodChecked(call986, ">", [1], new GraceNum(0));
      if (Grace_isTrue(opresult988)) {
        setLineNumber(346);    // compilenode string
        var string989 = new GraceString("\n");
        var diff993 = callmethodChecked(var_linenumv, "-", [1], new GraceNum(1));
        var call994 = callmethodChecked(var_lines, "at", [1], diff993);
        var string996 = new GraceString(": ");
        var diff1000 = callmethodChecked(var_linenumv, "-", [1], new GraceNum(1));
        var string1002 = new GraceString("  ");
        var opresult1004 = callmethodChecked(string1002, "++", [1], diff1000);
        var opresult1006 = callmethodChecked(opresult1004, "++", [1], string996);
        var opresult1008 = callmethodChecked(opresult1006, "++", [1], call994);
        var opresult1010 = callmethodChecked(opresult1008, "++", [1], string989);
        var call1011 = callmethodChecked(var_io, "error", [0]);
        var call1012 = callmethodChecked(call1011, "write", [1], opresult1010);
        if984 = call1012;
      }
      if980 = if984;
    }
    setLineNumber(349);    // compilenode string
    var string1013 = new GraceString("----");
    var var_arr = string1013;
    setLineNumber(350);    // compilenode identifier
    var call1014 = callmethodChecked(var_linenumv, "asString", [0]);
    var call1015 = callmethodChecked(call1014, "size", [0]);
    var opresult1018 = callmethodChecked(var_lineposv, "+", [1], call1015);
    var opresult1021 = callmethodChecked(new GraceNum(2), "..", [1], opresult1018);
    var block1022 = new GraceBlock(this, 350, 1);
    setLineNumber(1);    // compilenode identifier
    block1022.real = function(var___95____95__2) {
      setLineNumber(351);    // compilenode string
      var string1023 = new GraceString("-");
      var opresult1026 = callmethodChecked(var_arr, "++", [1], string1023);
      var_arr = opresult1026;
      return GraceDone;
    };
    var call1027 = callmethodChecked(var_prelude, "for()do", [1, 1], opresult1021, block1022);
    var if1028 = GraceDone;
    setLineNumber(353);    // compilenode identifier
    var call1030 = callmethodChecked(var_lines, "size", [0]);
    var opresult1032 = callmethodChecked(call1030, "\u2265", [1], var_linenumv);
    if (Grace_isTrue(opresult1032)) {
      setLineNumber(354);    // compilenode string
      var string1033 = new GraceString("^\n");
      var string1036 = new GraceString("\n");
      var call1038 = callmethodChecked(var_lines, "at", [1], var_linenumv);
      var string1040 = new GraceString(": ");
      var string1043 = new GraceString("  ");
      var opresult1045 = callmethodChecked(string1043, "++", [1], var_linenumv);
      var opresult1047 = callmethodChecked(opresult1045, "++", [1], string1040);
      var opresult1049 = callmethodChecked(opresult1047, "++", [1], call1038);
      var opresult1051 = callmethodChecked(opresult1049, "++", [1], string1036);
      var opresult1053 = callmethodChecked(opresult1051, "++", [1], var_arr);
      var opresult1055 = callmethodChecked(opresult1053, "++", [1], string1033);
      var call1056 = callmethodChecked(var_io, "error", [0]);
      var call1057 = callmethodChecked(call1056, "write", [1], opresult1055);
      if1028 = call1057;
    }
    var if1058 = GraceDone;
    setLineNumber(356);    // compilenode identifier
    var call1059 = callmethodChecked(var_lines, "size", [0]);
    var opresult1062 = callmethodChecked(var_linenumv, "<", [1], call1059);
    if (Grace_isTrue(opresult1062)) {
      setLineNumber(357);    // compilenode string
      var string1063 = new GraceString("\n");
      var opresult1067 = callmethodChecked(var_linenumv, "+", [1], new GraceNum(1));
      var call1068 = callmethodChecked(var_lines, "at", [1], opresult1067);
      var string1070 = new GraceString(": ");
      var opresult1074 = callmethodChecked(var_linenumv, "+", [1], new GraceNum(1));
      var string1076 = new GraceString("  ");
      var opresult1078 = callmethodChecked(string1076, "++", [1], opresult1074);
      var opresult1080 = callmethodChecked(opresult1078, "++", [1], string1070);
      var opresult1082 = callmethodChecked(opresult1080, "++", [1], call1068);
      var opresult1084 = callmethodChecked(opresult1082, "++", [1], string1063);
      var call1085 = callmethodChecked(var_io, "error", [0]);
      var call1086 = callmethodChecked(call1085, "write", [1], opresult1084);
      if1058 = call1086;
    }
    setLineNumber(359);    // compilenode identifier
    var call1087 = callmethodChecked(var_sys, "exit", [1], new GraceNum(2));
    return call1087;
  };
  func925.paramCounts = [1];
  this.methods["semantic_error"] = func925;
  func925.definitionLine = 334;
  func925.definitionModule = "util";
  setLineNumber(361);    // compilenode method
  var func1088 = function(argcv) {    // method warning(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_s = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for warning(1)"));
    setModuleName("util");
    setLineNumber(362);    // compilenode string
    var string1089 = new GraceString("");
    var string1092 = new GraceString(": warning: ");
    var string1095 = new GraceString(":");
    var string1098 = new GraceString(".grace:");
    var string1101 = new GraceString("");
    var opresult1103 = callmethodChecked(string1101, "++", [1], var_modnamev);
    var opresult1105 = callmethodChecked(opresult1103, "++", [1], string1098);
    var opresult1107 = callmethodChecked(opresult1105, "++", [1], var_linenumv);
    var opresult1109 = callmethodChecked(opresult1107, "++", [1], string1095);
    var opresult1111 = callmethodChecked(opresult1109, "++", [1], var_lineposv);
    var opresult1113 = callmethodChecked(opresult1111, "++", [1], string1092);
    var opresult1115 = callmethodChecked(opresult1113, "++", [1], var_s);
    var opresult1117 = callmethodChecked(opresult1115, "++", [1], string1089);
    var call1118 = callmethodChecked(var_io, "error", [0]);
    var call1119 = callmethodChecked(call1118, "write", [1], opresult1117);
    setLineNumber(363);    // compilenode string
    var string1120 = new GraceString("\n");
    var call1121 = callmethodChecked(var_io, "error", [0]);
    var call1122 = callmethodChecked(call1121, "write", [1], string1120);
    return call1122;
  };
  func1088.paramCounts = [1];
  this.methods["warning"] = func1088;
  func1088.definitionLine = 361;
  func1088.definitionModule = "util";
  setLineNumber(366);    // compilenode method
  var func1123 = function(argcv) {    // method outfile
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for outfile"));
    setModuleName("util");
    // outfile is a simple accessor - elide try ... catch
    setLineNumber(367);    // compilenode identifier
    return var_outfilev;
  };
  func1123.paramCounts = [0];
  this.methods["outfile"] = func1123;
  func1123.definitionLine = 366;
  func1123.definitionModule = "util";
  setLineNumber(369);    // compilenode method
  var func1124 = function(argcv) {    // method infile
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for infile"));
    setModuleName("util");
    // infile is a simple accessor - elide try ... catch
    setLineNumber(370);    // compilenode identifier
    return var_infilev;
  };
  func1124.paramCounts = [0];
  this.methods["infile"] = func1124;
  func1124.definitionLine = 369;
  func1124.definitionModule = "util";
  setLineNumber(372);    // compilenode method
  var func1125 = function(argcv) {    // method modname
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for modname"));
    setModuleName("util");
    // modname is a simple accessor - elide try ... catch
    setLineNumber(373);    // compilenode identifier
    return var_modnamev;
  };
  func1125.paramCounts = [0];
  this.methods["modname"] = func1125;
  func1125.definitionLine = 372;
  func1125.definitionModule = "util";
  setLineNumber(375);    // compilenode method
  var func1126 = function(argcv) {    // method runmode
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for runmode"));
    setModuleName("util");
    // runmode is a simple accessor - elide try ... catch
    setLineNumber(376);    // compilenode identifier
    return var_runmodev;
  };
  func1126.paramCounts = [0];
  this.methods["runmode"] = func1126;
  func1126.definitionLine = 375;
  func1126.definitionModule = "util";
  setLineNumber(378);    // compilenode method
  var func1127 = function(argcv) {    // method buildtype
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for buildtype"));
    setModuleName("util");
    // buildtype is a simple accessor - elide try ... catch
    setLineNumber(379);    // compilenode identifier
    return var_buildtypev;
  };
  func1127.paramCounts = [0];
  this.methods["buildtype"] = func1127;
  func1127.definitionLine = 378;
  func1127.definitionModule = "util";
  setLineNumber(381);    // compilenode method
  var func1128 = function(argcv) {    // method gracelibPath
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for gracelibPath"));
    setModuleName("util");
    // gracelibPath is a simple accessor - elide try ... catch
    setLineNumber(382);    // compilenode identifier
    return var_gracelibPathv;
  };
  func1128.paramCounts = [0];
  this.methods["gracelibPath"] = func1128;
  func1128.definitionLine = 381;
  func1128.definitionModule = "util";
  setLineNumber(384);    // compilenode method
  var func1129 = function(argcv) {    // method setline(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_l = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for setline(1)"));
    setModuleName("util");
    setLineNumber(385);    // compilenode identifier
    var_linenumv = var_l;
    return GraceDone;
  };
  func1129.paramCounts = [1];
  this.methods["setline"] = func1129;
  func1129.definitionLine = 384;
  func1129.definitionModule = "util";
  setLineNumber(387);    // compilenode method
  var func1130 = function(argcv) {    // method setPosition(2)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_l = arguments[curarg];
    curarg++;
    var var_p = arguments[curarg];
    curarg++;
    if (argcv[0] !== 2)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for setPosition(2)"));
    setModuleName("util");
    setLineNumber(388);    // compilenode identifier
    var_linenumv = var_l;
    setLineNumber(389);    // compilenode identifier
    var_lineposv = var_p;
    return GraceDone;
  };
  func1130.paramCounts = [2];
  this.methods["setPosition"] = func1130;
  func1130.definitionLine = 387;
  func1130.definitionModule = "util";
  setLineNumber(391);    // compilenode method
  var func1131 = function(argcv) {    // method linenum
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for linenum"));
    setModuleName("util");
    // linenum is a simple accessor - elide try ... catch
    setLineNumber(392);    // compilenode identifier
    return var_linenumv;
  };
  func1131.paramCounts = [0];
  this.methods["linenum"] = func1131;
  func1131.definitionLine = 391;
  func1131.definitionModule = "util";
  setLineNumber(394);    // compilenode method
  var func1132 = function(argcv) {    // method linepos
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for linepos"));
    setModuleName("util");
    // linepos is a simple accessor - elide try ... catch
    setLineNumber(395);    // compilenode identifier
    return var_lineposv;
  };
  func1132.paramCounts = [0];
  this.methods["linepos"] = func1132;
  func1132.definitionLine = 394;
  func1132.definitionModule = "util";
  setLineNumber(397);    // compilenode method
  var func1133 = function(argcv) {    // method vtag
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for vtag"));
    setModuleName("util");
    // vtag is a simple accessor - elide try ... catch
    setLineNumber(398);    // compilenode identifier
    return var_vtagv;
  };
  func1133.paramCounts = [0];
  this.methods["vtag"] = func1133;
  func1133.definitionLine = 397;
  func1133.definitionModule = "util";
  setLineNumber(400);    // compilenode method
  var func1134 = function(argcv) {    // method noexec
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for noexec"));
    setModuleName("util");
    // noexec is a simple accessor - elide try ... catch
    setLineNumber(401);    // compilenode identifier
    return var_noexecv;
  };
  func1134.paramCounts = [0];
  this.methods["noexec"] = func1134;
  func1134.definitionLine = 400;
  func1134.definitionModule = "util";
  setLineNumber(403);    // compilenode method
  var func1135 = function(argcv) {    // method target
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for target"));
    setModuleName("util");
    // target is a simple accessor - elide try ... catch
    setLineNumber(404);    // compilenode identifier
    return var_targetv;
  };
  func1135.paramCounts = [0];
  this.methods["target"] = func1135;
  func1135.definitionLine = 403;
  func1135.definitionModule = "util";
  setLineNumber(406);    // compilenode method
  var func1136 = function(argcv) {    // method extensions
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for extensions"));
    setModuleName("util");
    // extensions is a simple accessor - elide try ... catch
    setLineNumber(407);    // compilenode identifier
    return var_extensionsv;
  };
  func1136.paramCounts = [0];
  this.methods["extensions"] = func1136;
  func1136.definitionLine = 406;
  func1136.definitionModule = "util";
  setLineNumber(409);    // compilenode method
  var func1137 = function(argcv) {    // method str(1)lastIndexOf(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_s = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for str (arg list 1) of str(1)lastIndexOf(1)"));
    var var_ch = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for lastIndexOf (arg list 2) of str(1)lastIndexOf(1)"));
    setModuleName("util");
    setLineNumber(410);    // compilenode identifier
    var call1138 = callmethodChecked(var_s, "size", [0]);
    var var_ix = call1138;
    setLineNumber(411);    // compilenode block
    var block1139 = new GraceBlock(this, 411, 0);
    block1139.real = function() {
      var opresult1142 = callmethodChecked(var_ix, ">", [1], new GraceNum(0));
      return opresult1142;
    };
    var block1143 = new GraceBlock(this, 411, 0);
    block1143.real = function() {
      var if1144 = GraceDone;
      setLineNumber(412);    // compilenode identifier
      var call1146 = callmethodChecked(var_s, "at", [1], var_ix);
      var opresult1148 = callmethodChecked(call1146, "==", [1], var_ch);
      if (Grace_isTrue(opresult1148)) {
        throw new ReturnException(var_ix, returnTarget);
      }
      setLineNumber(413);    // compilenode identifier
      var diff1151 = callmethodChecked(var_ix, "-", [1], new GraceNum(1));
      var_ix = diff1151;
      return GraceDone;
    };
    var call1152 = callmethodChecked(var_prelude, "while()do", [1, 1], block1139, block1143);
    setLineNumber(415);    // compilenode num
    return new GraceNum(0);
  };
  func1137.paramCounts = [1, 1];
  this.methods["str()lastIndexOf"] = func1137;
  func1137.definitionLine = 409;
  func1137.definitionModule = "util";
  setLineNumber(418);    // compilenode method
  var func1153 = function(argcv) {    // method sourceDir
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for sourceDir"));
    setModuleName("util");
    var call1154 = callmethodChecked(var_filename, "directory", [0]);
    return call1154;
  };
  func1153.paramCounts = [0];
  this.methods["sourceDir"] = func1153;
  func1153.definitionLine = 418;
  func1153.definitionModule = "util";
  setLineNumber(422);    // compilenode method
  var func1155 = function(argcv) {    // method outDir
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for outDir"));
    setModuleName("util");
    var if1156 = GraceDone;
    setLineNumber(423);    // compilenode string
    var string1157 = new GraceString("");
    var opresult1160 = callmethodChecked(var_outDirCache, "==", [1], string1157);
    if (Grace_isTrue(opresult1160)) {
      setLineNumber(424);    // compilenode call
      onSelf = true;
      var call1161 = callmethodChecked(this, "sourceDir", [0]);
      var_outDirCache = call1161;
      if1156 = GraceDone;
    }
    setLineNumber(426);    // compilenode identifier
    return var_outDirCache;
  };
  func1155.paramCounts = [0];
  this.methods["outDir"] = func1155;
  func1155.definitionLine = 422;
  func1155.definitionModule = "util";
  setLineNumber(428);    // compilenode method
  var func1162 = function(argcv) {    // method outDir:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_new = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for outDir:=(1)"));
    setModuleName("util");
    setLineNumber(430);    // compilenode identifier
    var_outDirCache = var_new;
    return GraceDone;
  };
  func1162.paramCounts = [1];
  this.methods["outDir:="] = func1162;
  func1162.definitionLine = 428;
  func1162.definitionModule = "util";
  setLineNumber(434);    // compilenode method
  var func1163 = function(argcv) {    // method execDir
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for execDir"));
    setModuleName("util");
    var if1164 = GraceDone;
    setLineNumber(435);    // compilenode string
    var string1165 = new GraceString("");
    var opresult1168 = callmethodChecked(var_execDirCache, "==", [1], string1165);
    if (Grace_isTrue(opresult1168)) {
      setLineNumber(436);    // compilenode identifier
      var call1169 = callmethodChecked(var_sys, "execPath", [0]);
      var_execDirCache = call1169;
      var if1170 = GraceDone;
      setLineNumber(437);    // compilenode string
      var string1171 = new GraceString("/");
      var call1173 = callmethodChecked(var_execDirCache, "size", [0]);
      var call1174 = callmethodChecked(var_execDirCache, "at", [1], call1173);
      var opresult1176 = callmethodChecked(call1174, "\u2260", [1], string1171);
      if (Grace_isTrue(opresult1176)) {
        setLineNumber(438);    // compilenode string
        var string1177 = new GraceString("/");
        var opresult1180 = callmethodChecked(var_execDirCache, "++", [1], string1177);
        var_execDirCache = opresult1180;
        if1170 = GraceDone;
      }
      if1164 = if1170;
    }
    setLineNumber(441);    // compilenode identifier
    return var_execDirCache;
  };
  func1163.paramCounts = [0];
  this.methods["execDir"] = func1163;
  func1163.definitionLine = 434;
  func1163.definitionModule = "util";
  setLineNumber(444);    // compilenode method
  var func1181 = function(argcv) {    // method file(1)on(1)orPath(1)otherwise(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_name = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for file (arg list 1) of file(1)on(1)orPath(1)otherwise(1)"));
    var var_origin = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for on (arg list 2) of file(1)on(1)orPath(1)otherwise(1)"));
    var var_pathString = arguments[curarg];
    curarg++;
    if (argcv[2] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for orPath (arg list 3) of file(1)on(1)orPath(1)otherwise(1)"));
    var var_action = arguments[curarg];
    curarg++;
    if (argcv[3] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for otherwise (arg list 4) of file(1)on(1)orPath(1)otherwise(1)"));
    setModuleName("util");
    setLineNumber(445);    // compilenode identifier
    var call1182 = callmethodChecked(var_filePath, "split", [1], var_pathString);
    var var_locations = call1182;
    setLineNumber(446);    // compilenode identifier
    var call1183 = callmethodChecked(var_locations, "addFirst", [1], var_origin);
    var if1184 = GraceDone;
    setLineNumber(447);    // compilenode string
    var string1185 = new GraceString("./");
    var opresult1188 = callmethodChecked(var_origin, "\u2260", [1], string1185);
    if (Grace_isTrue(opresult1188)) {
      var string1189 = new GraceString("./");
      var call1190 = callmethodChecked(var_locations, "addFirst", [1], string1189);
      if1184 = call1190;
    }
    var if1191 = GraceDone;
    setLineNumber(448);    // compilenode call
    onSelf = true;
    var call1192 = callmethodChecked(this, "execDir", [0]);
    var call1193 = callmethodChecked(var_locations, "contains", [1], call1192);
    var call1194 = callmethodChecked(call1193, "not", [0]);
    if (Grace_isTrue(call1194)) {
      onSelf = true;
      var call1195 = callmethodChecked(this, "execDir", [0]);
      var call1196 = callmethodChecked(var_locations, "addLast", [1], call1195);
      if1191 = call1196;
    }
    setLineNumber(449);    // compilenode identifier
    var call1197 = callmethodChecked(var_name, "copy", [0]);
    var var_candidate = call1197;
    setLineNumber(450);    // compilenode identifier
    var call1198 = callmethodChecked(var_name, "directory", [0]);
    var var_originalDir = call1198;
    var if1199 = GraceDone;
    setLineNumber(451);    // compilenode block
    var block1200 = new GraceBlock(this, 451, 0);
    block1200.real = function() {
      var string1201 = new GraceString("/");
      var call1203 = callmethodChecked(var_originalDir, "first", [0]);
      var opresult1205 = callmethodChecked(call1203, "==", [1], string1201);
      return opresult1205;
    };
    var call1208 = callmethodChecked(var_originalDir, "size", [0]);
    var opresult1210 = callmethodChecked(call1208, ">", [1], new GraceNum(0));
    var opresult1212 = callmethodChecked(opresult1210, "&&", [1], block1200);
    if (Grace_isTrue(opresult1212)) {
      var if1213 = GraceDone;
      setLineNumber(452);    // compilenode identifier
      var call1214 = callmethodChecked(var_candidate, "exists", [0]);
      if (Grace_isTrue(call1214)) {
        setLineNumber(453);    // compilenode identifier
        return var_candidate;
      } else {
        setLineNumber(455);    // compilenode string
        var string1215 = new GraceString("");
        var call1216 = callmethodChecked(var_action, "apply", [1], string1215);
        return call1216;
      }
      if1199 = if1213;
    }
    setLineNumber(458);    // compilenode block
    var block1217 = new GraceBlock(this, 458, 1);
    setLineNumber(1);    // compilenode identifier
    block1217.real = function(var_each) {
      setLineNumber(459);    // compilenode identifier
      var opresult1220 = callmethodChecked(var_each, "++", [1], var_originalDir);
      var call1221 = callmethodChecked(var_candidate, "setDirectory", [1], opresult1220);
      var if1222 = GraceDone;
      setLineNumber(460);    // compilenode identifier
      var call1223 = callmethodChecked(var_candidate, "exists", [0]);
      if (Grace_isTrue(call1223)) {
        setLineNumber(461);    // compilenode identifier
        throw new ReturnException(var_candidate, returnTarget);
      }
      return if1222;
    };
    setLineNumber(458);    // compilenode identifier
    var call1224 = callmethodChecked(var_locations, "do", [1], block1217);
    setLineNumber(464);    // compilenode identifier
    var call1225 = callmethodChecked(var_action, "apply", [1], var_locations);
    return call1225;
  };
  func1181.paramCounts = [1, 1, 1, 1];
  this.methods["file()on()orPath()otherwise"] = func1181;
  func1181.definitionLine = 444;
  func1181.definitionModule = "util";
  setLineNumber(466);    // compilenode method
  var func1226 = function(argcv) {    // method file(1)onPath(1)otherwise(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_name = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for file (arg list 1) of file(1)onPath(1)otherwise(1)"));
    var var_pathString = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onPath (arg list 2) of file(1)onPath(1)otherwise(1)"));
    var var_action = arguments[curarg];
    curarg++;
    if (argcv[2] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for otherwise (arg list 3) of file(1)onPath(1)otherwise(1)"));
    setModuleName("util");
    setLineNumber(467);    // compilenode call
    onSelf = true;
    var call1227 = callmethodChecked(this, "outDir", [0]);
    onSelf = true;
    var call1228 = callmethodChecked(this, "file()on()orPath()otherwise", [1, 1, 1, 1], var_name, call1227, var_pathString, var_action);
    return call1228;
  };
  func1226.paramCounts = [1, 1, 1];
  this.methods["file()onPath()otherwise"] = func1226;
  func1226.definitionLine = 466;
  func1226.definitionModule = "util";
  setLineNumber(470);    // compilenode method
  var func1229 = function(argcv) {    // method processExtension(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_ext = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for processExtension(1)"));
    setModuleName("util");
    setLineNumber(471);    // compilenode string
    var string1230 = new GraceString("");
    var var_extn = string1230;
    setLineNumber(472);    // compilenode identifier
    var var_extv = GraceTrue;
    setLineNumber(473);    // compilenode identifier
    var var_seeneq = GraceFalse;
    setLineNumber(474);    // compilenode block
    var block1231 = new GraceBlock(this, 474, 1);
    setLineNumber(1);    // compilenode identifier
    block1231.real = function(var_c) {
      var if1232 = GraceDone;
      setLineNumber(475);    // compilenode string
      var string1233 = new GraceString("=");
      var opresult1236 = callmethodChecked(var_c, "==", [1], string1233);
      if (Grace_isTrue(opresult1236)) {
        setLineNumber(476);    // compilenode identifier
        var_seeneq = GraceTrue;
        setLineNumber(477);    // compilenode string
        var string1237 = new GraceString("");
        var_extv = string1237;
        if1232 = GraceDone;
      } else {
        var if1238 = GraceDone;
        setLineNumber(479);    // compilenode identifier
        var call1239 = callmethodChecked(var_seeneq, "prefix!", [0]);
        if (Grace_isTrue(call1239)) {
          setLineNumber(480);    // compilenode identifier
          var opresult1242 = callmethodChecked(var_extn, "++", [1], var_c);
          var_extn = opresult1242;
          if1238 = GraceDone;
        } else {
          setLineNumber(482);    // compilenode identifier
          var opresult1245 = callmethodChecked(var_extv, "++", [1], var_c);
          var_extv = opresult1245;
          if1238 = GraceDone;
        }
        if1232 = if1238;
      }
      return if1232;
    };
    var call1246 = callmethodChecked(var_prelude, "for()do", [1, 1], var_ext, block1231);
    setLineNumber(486);    // compilenode identifier
    var call1247 = callmethodChecked(var_extensionsv, "put", [2], var_extn, var_extv);
    return call1247;
  };
  func1229.paramCounts = [1];
  this.methods["processExtension"] = func1229;
  func1229.definitionLine = 470;
  func1229.definitionModule = "util";
  setLineNumber(488);    // compilenode method
  var func1248 = function(argcv) {    // method printhelp
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for printhelp"));
    setModuleName("util");
    setLineNumber(489);    // compilenode string
    var string1249 = new GraceString(" [OPTION]... [FILE]");
    var call1251 = callmethodChecked(var_sys, "argv", [0]);
    var call1252 = callmethodChecked(call1251, "at", [1], new GraceNum(1));
    var string1254 = new GraceString("Usage: ");
    var opresult1256 = callmethodChecked(string1254, "++", [1], call1252);
    var opresult1258 = callmethodChecked(opresult1256, "++", [1], string1249);
    var call1259 = Grace_print(opresult1258);
    setLineNumber(490);    // compilenode string
    var string1260 = new GraceString("Compile, process, or run a Grace source file or standard input.");
    var call1261 = Grace_print(string1260);
    setLineNumber(491);    // compilenode string
    var string1262 = new GraceString("");
    var call1263 = Grace_print(string1262);
    setLineNumber(492);    // compilenode string
    var string1264 = new GraceString("Modes:");
    var call1265 = Grace_print(string1264);
    setLineNumber(493);    // compilenode string
    var string1266 = new GraceString("  --make           Compile FILE and link, creating a executable");
    var call1267 = Grace_print(string1266);
    setLineNumber(494);    // compilenode string
    var string1268 = new GraceString("  --run            Compile FILE and execute the program [default]");
    var call1269 = Grace_print(string1268);
    setLineNumber(495);    // compilenode string
    var string1270 = new GraceString("  --source         Compile FILE to C source, but no further");
    var call1271 = Grace_print(string1270);
    setLineNumber(496);    // compilenode string
    var string1272 = new GraceString("  --noexec         Compile FILE to object code, but don't create executable");
    var call1273 = Grace_print(string1272);
    setLineNumber(497);    // compilenode string
    var string1274 = new GraceString("  --dynamic-module Compile FILE as a dynamic module");
    var call1275 = Grace_print(string1274);
    setLineNumber(498);    // compilenode string
    var string1276 = new GraceString("");
    var call1277 = Grace_print(string1276);
    setLineNumber(499);    // compilenode string
    var string1278 = new GraceString("Options:");
    var call1279 = Grace_print(string1278);
    setLineNumber(500);    // compilenode string
    var string1280 = new GraceString("  --dir DIR        Use the directory DIR for generated output files,");
    var call1281 = Grace_print(string1280);
    setLineNumber(501);    // compilenode string
    var string1282 = new GraceString("                   and for .gct files of imported modules");
    var call1283 = Grace_print(string1282);
    setLineNumber(502);    // compilenode string
    var string1284 = new GraceString("  --gracelib DIR   Look in DIR for gracelib.  If not specified, looks in");
    var call1285 = Grace_print(string1284);
    setLineNumber(503);    // compilenode string
    var string1286 = new GraceString(", and then on GRACE_MODULE_PATH.");
    var call1288 = callmethodChecked(var_sys, "argv", [0]);
    var call1289 = callmethodChecked(call1288, "at", [1], new GraceNum(1));
    var string1291 = new GraceString("                   the same directory as ");
    var opresult1293 = callmethodChecked(string1291, "++", [1], call1289);
    var opresult1295 = callmethodChecked(opresult1293, "++", [1], string1286);
    var call1296 = Grace_print(opresult1295);
    setLineNumber(504);    // compilenode string
    var string1297 = new GraceString("  --help           This text");
    var call1298 = Grace_print(string1297);
    setLineNumber(505);    // compilenode string
    var string1299 = new GraceString("  --module         Override default module name (derived from FILE)");
    var call1300 = Grace_print(string1299);
    setLineNumber(506);    // compilenode string
    var string1301 = new GraceString("  --no-recurse     Do not compile imported modules");
    var call1302 = Grace_print(string1301);
    setLineNumber(507);    // compilenode string
    var string1303 = new GraceString("  -o OFILE         Output to OFILE instead of default");
    var call1304 = Grace_print(string1303);
    setLineNumber(508);    // compilenode string
    var string1305 = new GraceString("  --stdout         Output to standard output rather than a file");
    var call1306 = Grace_print(string1305);
    setLineNumber(509);    // compilenode string
    var string1307 = new GraceString("  --target TGT     Choose a non-default compilation target TGT");
    var call1308 = Grace_print(string1307);
    setLineNumber(510);    // compilenode string
    var string1309 = new GraceString("                   Use --target help to list supported targets.");
    var call1310 = Grace_print(string1309);
    setLineNumber(511);    // compilenode string
    var string1311 = new GraceString("  --verbose n      Give more detailed output (n is optional, default 40)");
    var call1312 = Grace_print(string1311);
    setLineNumber(512);    // compilenode string
    var string1313 = new GraceString("                      n \u2265 20 lists unexpected situations during compilation");
    var call1314 = Grace_print(string1313);
    setLineNumber(513);    // compilenode string
    var string1315 = new GraceString("                      n \u2265 40 also lists phases of the compilation");
    var call1316 = Grace_print(string1315);
    setLineNumber(514);    // compilenode string
    var string1317 = new GraceString("                      n \u2265 50 also lists initiation of sub-compiles");
    var call1318 = Grace_print(string1317);
    setLineNumber(515);    // compilenode string
    var string1319 = new GraceString("                      n \u2265 60 also describes searches for imports");
    var call1320 = Grace_print(string1319);
    setLineNumber(516);    // compilenode string
    var string1321 = new GraceString("                      n \u2265 100 also describes import logic");
    var call1322 = Grace_print(string1321);
    setLineNumber(517);    // compilenode string
    var string1323 = new GraceString("  --version        Print version information");
    var call1324 = Grace_print(string1323);
    setLineNumber(518);    // compilenode string
    var string1325 = new GraceString("");
    var call1326 = Grace_print(string1325);
    setLineNumber(519);    // compilenode string
    var string1327 = new GraceString(" FILE will compile and execute FILE.");
    var call1329 = callmethodChecked(var_sys, "argv", [0]);
    var call1330 = callmethodChecked(call1329, "at", [1], new GraceNum(1));
    var string1332 = new GraceString("By default, ");
    var opresult1334 = callmethodChecked(string1332, "++", [1], call1330);
    var opresult1336 = callmethodChecked(opresult1334, "++", [1], string1327);
    var call1337 = Grace_print(opresult1336);
    setLineNumber(520);    // compilenode string
    var string1338 = new GraceString("More detailed usage information is in the <doc/usage> file in the source tree.");
    var call1339 = Grace_print(string1338);
    setLineNumber(521);    // compilenode identifier
    var call1340 = callmethodChecked(var_sys, "exit", [1], new GraceNum(0));
    return call1340;
  };
  func1248.paramCounts = [0];
  this.methods["printhelp"] = func1248;
  func1248.definitionLine = 488;
  func1248.definitionModule = "util";
  setLineNumber(523);    // compilenode method
  var func1341 = function(argcv) {    // method debug(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_s = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for debug(1)"));
    setModuleName("util");
    return GraceDone;
  };
  func1341.paramCounts = [1];
  this.methods["debug"] = func1341;
  func1341.definitionLine = 523;
  func1341.definitionModule = "util";
  setLineNumber(527);    // compilenode method
  var func1342 = function(argcv) {    // method hex(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_num = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for hex(1)"));
    setModuleName("util");
    setLineNumber(528);    // compilenode identifier
    var var_tmp = var_num;
    setLineNumber(529);    // compilenode string
    var string1343 = new GraceString("");
    var var_s = string1343;
    setLineNumber(530);    // compilenode block
    var block1344 = new GraceBlock(this, 530, 0);
    block1344.real = function() {
      var opresult1347 = callmethodChecked(var_tmp, ">", [1], new GraceNum(0));
      return opresult1347;
    };
    var block1348 = new GraceBlock(this, 530, 0);
    block1348.real = function() {
      setLineNumber(531);    // compilenode identifier
      var modulus1351 = callmethodChecked(var_tmp, "%", [1], new GraceNum(16));
      var var_i = modulus1351;
      setLineNumber(532);    // compilenode identifier
      var opresult1355 = callmethodChecked(var_i, "+", [1], new GraceNum(1));
      var call1356 = callmethodChecked(var_hexdigits, "at", [1], opresult1355);
      var opresult1358 = callmethodChecked(call1356, "++", [1], var_s);
      var_s = opresult1358;
      setLineNumber(533);    // compilenode identifier
      var diff1361 = callmethodChecked(var_tmp, "-", [1], var_i);
      var_tmp = diff1361;
      setLineNumber(534);    // compilenode identifier
      var quotient1364 = callmethodChecked(var_tmp, "/", [1], new GraceNum(16));
      var_tmp = quotient1364;
      return GraceDone;
    };
    var call1365 = callmethodChecked(var_prelude, "while()do", [1, 1], block1344, block1348);
    setLineNumber(536);    // compilenode identifier
    return var_s;
  };
  func1342.paramCounts = [1];
  this.methods["hex"] = func1342;
  func1342.definitionLine = 527;
  func1342.definitionModule = "util";
  setLineNumber(7);    // compilenode num
  var var_defaultVerbosity = new GraceNum(30);
  setLineNumber(519);    // compilenode method
  var func1366 = function(argcv) {    // method defaultVerbosity
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for defaultVerbosity"));
    setModuleName("util");
    // defaultVerbosity is a simple accessor - elide try ... catch
    setLineNumber(7);    // compilenode identifier
    return var_defaultVerbosity;
  };
  func1366.paramCounts = [0];
  this.methods["defaultVerbosity"] = func1366;
  func1366.definitionLine = 519;
  func1366.definitionModule = "util";
  this.methods["defaultVerbosity"].debug = "def";
  setLineNumber(8);    // compilenode identifier
  var var_verbosity = var_defaultVerbosity;
  setLineNumber(519);    // compilenode method
  var func1367 = function(argcv) {    // method verbosity
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for verbosity"));
    setModuleName("util");
    // verbosity is a simple accessor - elide try ... catch
    setLineNumber(8);    // compilenode identifier
    return var_verbosity;
  };
  func1367.paramCounts = [0];
  this.methods["verbosity"] = func1367;
  func1367.definitionLine = 519;
  func1367.definitionModule = "util";
  setLineNumber(519);    // compilenode method
  var func1368 = function(argcv) {    // method verbosity:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for verbosity:=(1)"));
    setModuleName("util");
    var_verbosity = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func1368.paramCounts = [1];
  this.methods["verbosity:="] = func1368;
  func1368.definitionLine = 519;
  func1368.definitionModule = "util";
  this.methods["verbosity"].debug = "var";
  setLineNumber(9);    // compilenode identifier
  var call1369 = callmethodChecked(var_io, "output", [0]);
  var var_outfilev = call1369;
  var func1370 = function(argcv) {    // method outfilev
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for outfilev"));
    setModuleName("util");
    // outfilev is a simple accessor - elide try ... catch
    return var_outfilev;
  };
  func1370.paramCounts = [0];
  this.methods["outfilev"] = func1370;
  func1370.definitionLine = 9;
  func1370.definitionModule = "util";
  var func1371 = function(argcv) {    // method outfilev:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for outfilev:=(1)"));
    setModuleName("util");
    var_outfilev = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func1371.paramCounts = [1];
  this.methods["outfilev:="] = func1371;
  func1371.definitionLine = 9;
  func1371.definitionModule = "util";
  this.methods["outfilev"].debug = "var";
  setLineNumber(10);    // compilenode identifier
  var call1372 = callmethodChecked(var_io, "input", [0]);
  var var_infilev = call1372;
  var func1373 = function(argcv) {    // method infilev
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for infilev"));
    setModuleName("util");
    // infilev is a simple accessor - elide try ... catch
    return var_infilev;
  };
  func1373.paramCounts = [0];
  this.methods["infilev"] = func1373;
  func1373.definitionLine = 10;
  func1373.definitionModule = "util";
  var func1374 = function(argcv) {    // method infilev:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for infilev:=(1)"));
    setModuleName("util");
    var_infilev = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func1374.paramCounts = [1];
  this.methods["infilev:="] = func1374;
  func1374.definitionLine = 10;
  func1374.definitionModule = "util";
  this.methods["infilev"].debug = "var";
  setLineNumber(11);    // compilenode string
  var string1375 = new GraceString("standardInput");
  var var_modnamev = string1375;
  setLineNumber(10);    // compilenode method
  var func1376 = function(argcv) {    // method modnamev
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for modnamev"));
    setModuleName("util");
    // modnamev is a simple accessor - elide try ... catch
    setLineNumber(11);    // compilenode identifier
    return var_modnamev;
  };
  func1376.paramCounts = [0];
  this.methods["modnamev"] = func1376;
  func1376.definitionLine = 10;
  func1376.definitionModule = "util";
  setLineNumber(10);    // compilenode method
  var func1377 = function(argcv) {    // method modnamev:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for modnamev:=(1)"));
    setModuleName("util");
    var_modnamev = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func1377.paramCounts = [1];
  this.methods["modnamev:="] = func1377;
  func1377.definitionLine = 10;
  func1377.definitionModule = "util";
  this.methods["modnamev"].debug = "var";
  setLineNumber(12);    // compilenode string
  var string1378 = new GraceString("make");
  var var_runmodev = string1378;
  setLineNumber(10);    // compilenode method
  var func1379 = function(argcv) {    // method runmodev
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for runmodev"));
    setModuleName("util");
    // runmodev is a simple accessor - elide try ... catch
    setLineNumber(12);    // compilenode identifier
    return var_runmodev;
  };
  func1379.paramCounts = [0];
  this.methods["runmodev"] = func1379;
  func1379.definitionLine = 10;
  func1379.definitionModule = "util";
  setLineNumber(10);    // compilenode method
  var func1380 = function(argcv) {    // method runmodev:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for runmodev:=(1)"));
    setModuleName("util");
    var_runmodev = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func1380.paramCounts = [1];
  this.methods["runmodev:="] = func1380;
  func1380.definitionLine = 10;
  func1380.definitionModule = "util";
  this.methods["runmodev"].debug = "var";
  setLineNumber(13);    // compilenode string
  var string1381 = new GraceString("run");
  var var_buildtypev = string1381;
  setLineNumber(10);    // compilenode method
  var func1382 = function(argcv) {    // method buildtypev
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for buildtypev"));
    setModuleName("util");
    // buildtypev is a simple accessor - elide try ... catch
    setLineNumber(13);    // compilenode identifier
    return var_buildtypev;
  };
  func1382.paramCounts = [0];
  this.methods["buildtypev"] = func1382;
  func1382.definitionLine = 10;
  func1382.definitionModule = "util";
  setLineNumber(10);    // compilenode method
  var func1383 = function(argcv) {    // method buildtypev:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for buildtypev:=(1)"));
    setModuleName("util");
    var_buildtypev = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func1383.paramCounts = [1];
  this.methods["buildtypev:="] = func1383;
  func1383.definitionLine = 10;
  func1383.definitionModule = "util";
  this.methods["buildtypev"].debug = "var";
  setLineNumber(14);    // compilenode identifier
  var var_gracelibPathv = GraceFalse;
  setLineNumber(10);    // compilenode method
  var func1384 = function(argcv) {    // method gracelibPathv
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for gracelibPathv"));
    setModuleName("util");
    // gracelibPathv is a simple accessor - elide try ... catch
    setLineNumber(14);    // compilenode identifier
    return var_gracelibPathv;
  };
  func1384.paramCounts = [0];
  this.methods["gracelibPathv"] = func1384;
  func1384.definitionLine = 10;
  func1384.definitionModule = "util";
  setLineNumber(10);    // compilenode method
  var func1385 = function(argcv) {    // method gracelibPathv:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for gracelibPathv:=(1)"));
    setModuleName("util");
    var_gracelibPathv = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func1385.paramCounts = [1];
  this.methods["gracelibPathv:="] = func1385;
  func1385.definitionLine = 10;
  func1385.definitionModule = "util";
  this.methods["gracelibPathv"].debug = "var";
  setLineNumber(15);    // compilenode num
  var var_linenumv = new GraceNum(1);
  setLineNumber(10);    // compilenode method
  var func1386 = function(argcv) {    // method linenumv
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for linenumv"));
    setModuleName("util");
    // linenumv is a simple accessor - elide try ... catch
    setLineNumber(15);    // compilenode identifier
    return var_linenumv;
  };
  func1386.paramCounts = [0];
  this.methods["linenumv"] = func1386;
  func1386.definitionLine = 10;
  func1386.definitionModule = "util";
  setLineNumber(10);    // compilenode method
  var func1387 = function(argcv) {    // method linenumv:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for linenumv:=(1)"));
    setModuleName("util");
    var_linenumv = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func1387.paramCounts = [1];
  this.methods["linenumv:="] = func1387;
  func1387.definitionLine = 10;
  func1387.definitionModule = "util";
  this.methods["linenumv"].debug = "var";
  setLineNumber(16);    // compilenode num
  var var_lineposv = new GraceNum(1);
  setLineNumber(10);    // compilenode method
  var func1388 = function(argcv) {    // method lineposv
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for lineposv"));
    setModuleName("util");
    // lineposv is a simple accessor - elide try ... catch
    setLineNumber(16);    // compilenode identifier
    return var_lineposv;
  };
  func1388.paramCounts = [0];
  this.methods["lineposv"] = func1388;
  func1388.definitionLine = 10;
  func1388.definitionModule = "util";
  setLineNumber(10);    // compilenode method
  var func1389 = function(argcv) {    // method lineposv:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for lineposv:=(1)"));
    setModuleName("util");
    var_lineposv = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func1389.paramCounts = [1];
  this.methods["lineposv:="] = func1389;
  func1389.definitionLine = 10;
  func1389.definitionModule = "util";
  this.methods["lineposv"].debug = "var";
  setLineNumber(17);    // compilenode identifier
  var var_vtagv = GraceFalse;
  setLineNumber(10);    // compilenode method
  var func1390 = function(argcv) {    // method vtagv
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for vtagv"));
    setModuleName("util");
    // vtagv is a simple accessor - elide try ... catch
    setLineNumber(17);    // compilenode identifier
    return var_vtagv;
  };
  func1390.paramCounts = [0];
  this.methods["vtagv"] = func1390;
  func1390.definitionLine = 10;
  func1390.definitionModule = "util";
  setLineNumber(10);    // compilenode method
  var func1391 = function(argcv) {    // method vtagv:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for vtagv:=(1)"));
    setModuleName("util");
    var_vtagv = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func1391.paramCounts = [1];
  this.methods["vtagv:="] = func1391;
  func1391.definitionLine = 10;
  func1391.definitionModule = "util";
  this.methods["vtagv"].debug = "var";
  setLineNumber(18);    // compilenode identifier
  var var_noexecv = GraceFalse;
  setLineNumber(10);    // compilenode method
  var func1392 = function(argcv) {    // method noexecv
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for noexecv"));
    setModuleName("util");
    // noexecv is a simple accessor - elide try ... catch
    setLineNumber(18);    // compilenode identifier
    return var_noexecv;
  };
  func1392.paramCounts = [0];
  this.methods["noexecv"] = func1392;
  func1392.definitionLine = 10;
  func1392.definitionModule = "util";
  setLineNumber(10);    // compilenode method
  var func1393 = function(argcv) {    // method noexecv:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for noexecv:=(1)"));
    setModuleName("util");
    var_noexecv = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func1393.paramCounts = [1];
  this.methods["noexecv:="] = func1393;
  func1393.definitionLine = 10;
  func1393.definitionModule = "util";
  this.methods["noexecv"].debug = "var";
  setLineNumber(19);    // compilenode string
  var string1394 = new GraceString("c");
  var var_targetv = string1394;
  setLineNumber(10);    // compilenode method
  var func1395 = function(argcv) {    // method targetv
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for targetv"));
    setModuleName("util");
    // targetv is a simple accessor - elide try ... catch
    setLineNumber(19);    // compilenode identifier
    return var_targetv;
  };
  func1395.paramCounts = [0];
  this.methods["targetv"] = func1395;
  func1395.definitionLine = 10;
  func1395.definitionModule = "util";
  setLineNumber(10);    // compilenode method
  var func1396 = function(argcv) {    // method targetv:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for targetv:=(1)"));
    setModuleName("util");
    var_targetv = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func1396.paramCounts = [1];
  this.methods["targetv:="] = func1396;
  func1396.definitionLine = 10;
  func1396.definitionModule = "util";
  this.methods["targetv"].debug = "var";
  setLineNumber(20);    // compilenode identifier
  var call1397 = callmethodChecked(var_map, "new", [0]);
  var var_extensionsv = call1397;
  var func1398 = function(argcv) {    // method extensionsv
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for extensionsv"));
    setModuleName("util");
    // extensionsv is a simple accessor - elide try ... catch
    return var_extensionsv;
  };
  func1398.paramCounts = [0];
  this.methods["extensionsv"] = func1398;
  func1398.definitionLine = 20;
  func1398.definitionModule = "util";
  var func1399 = function(argcv) {    // method extensionsv:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for extensionsv:=(1)"));
    setModuleName("util");
    var_extensionsv = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func1399.paramCounts = [1];
  this.methods["extensionsv:="] = func1399;
  func1399.definitionLine = 20;
  func1399.definitionModule = "util";
  this.methods["extensionsv"].debug = "var";
  setLineNumber(21);    // compilenode identifier
  var var_recurse = GraceTrue;
  setLineNumber(20);    // compilenode method
  var func1400 = function(argcv) {    // method recurse
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for recurse"));
    setModuleName("util");
    // recurse is a simple accessor - elide try ... catch
    setLineNumber(21);    // compilenode identifier
    return var_recurse;
  };
  func1400.paramCounts = [0];
  this.methods["recurse"] = func1400;
  func1400.definitionLine = 20;
  func1400.definitionModule = "util";
  setLineNumber(20);    // compilenode method
  var func1401 = function(argcv) {    // method recurse:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for recurse:=(1)"));
    setModuleName("util");
    var_recurse = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func1401.paramCounts = [1];
  this.methods["recurse:="] = func1401;
  func1401.definitionLine = 20;
  func1401.definitionModule = "util";
  this.methods["recurse"].debug = "var";
  setLineNumber(22);    // compilenode identifier
  var var_dynamicModule = GraceFalse;
  setLineNumber(20);    // compilenode method
  var func1402 = function(argcv) {    // method dynamicModule
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for dynamicModule"));
    setModuleName("util");
    // dynamicModule is a simple accessor - elide try ... catch
    setLineNumber(22);    // compilenode identifier
    return var_dynamicModule;
  };
  func1402.paramCounts = [0];
  this.methods["dynamicModule"] = func1402;
  func1402.definitionLine = 20;
  func1402.definitionModule = "util";
  setLineNumber(20);    // compilenode method
  var func1403 = function(argcv) {    // method dynamicModule:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for dynamicModule:=(1)"));
    setModuleName("util");
    var_dynamicModule = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func1403.paramCounts = [1];
  this.methods["dynamicModule:="] = func1403;
  func1403.definitionLine = 20;
  func1403.definitionModule = "util";
  this.methods["dynamicModule"].debug = "var";
  setLineNumber(23);    // compilenode identifier
  var var_importDynamic = GraceFalse;
  setLineNumber(20);    // compilenode method
  var func1404 = function(argcv) {    // method importDynamic
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for importDynamic"));
    setModuleName("util");
    // importDynamic is a simple accessor - elide try ... catch
    setLineNumber(23);    // compilenode identifier
    return var_importDynamic;
  };
  func1404.paramCounts = [0];
  this.methods["importDynamic"] = func1404;
  func1404.definitionLine = 20;
  func1404.definitionModule = "util";
  setLineNumber(20);    // compilenode method
  var func1405 = function(argcv) {    // method importDynamic:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for importDynamic:=(1)"));
    setModuleName("util");
    var_importDynamic = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func1405.paramCounts = [1];
  this.methods["importDynamic:="] = func1405;
  func1405.definitionLine = 20;
  func1405.definitionModule = "util";
  this.methods["importDynamic"].debug = "var";
  setLineNumber(24);    // compilenode num
  var var_jobs = new GraceNum(2);
  setLineNumber(20);    // compilenode method
  var func1406 = function(argcv) {    // method jobs
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for jobs"));
    setModuleName("util");
    // jobs is a simple accessor - elide try ... catch
    setLineNumber(24);    // compilenode identifier
    return var_jobs;
  };
  func1406.paramCounts = [0];
  this.methods["jobs"] = func1406;
  func1406.definitionLine = 20;
  func1406.definitionModule = "util";
  setLineNumber(20);    // compilenode method
  var func1407 = function(argcv) {    // method jobs:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for jobs:=(1)"));
    setModuleName("util");
    var_jobs = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func1407.paramCounts = [1];
  this.methods["jobs:="] = func1407;
  func1407.definitionLine = 20;
  func1407.definitionModule = "util";
  this.methods["jobs"].debug = "var";
  setLineNumber(25);    // compilenode array
  var array1408 = new PrimitiveGraceList([]);
  var var_cLines = array1408;
  setLineNumber(20);    // compilenode method
  var func1409 = function(argcv) {    // method cLines
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for cLines"));
    setModuleName("util");
    // cLines is a simple accessor - elide try ... catch
    setLineNumber(25);    // compilenode identifier
    return var_cLines;
  };
  func1409.paramCounts = [0];
  this.methods["cLines"] = func1409;
  func1409.definitionLine = 20;
  func1409.definitionModule = "util";
  this.methods["cLines"].debug = "def";
  setLineNumber(26);    // compilenode array
  var array1410 = new PrimitiveGraceList([]);
  var var_lines = array1410;
  setLineNumber(20);    // compilenode method
  var func1411 = function(argcv) {    // method lines
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for lines"));
    setModuleName("util");
    // lines is a simple accessor - elide try ... catch
    setLineNumber(26);    // compilenode identifier
    return var_lines;
  };
  func1411.paramCounts = [0];
  this.methods["lines"] = func1411;
  func1411.definitionLine = 20;
  func1411.definitionModule = "util";
  this.methods["lines"].debug = "def";
  setLineNumber(27);    // compilenode identifier
  var call1412 = callmethodChecked(var_filePath, "null", [0]);
  var var_nullFile = call1412;
  var func1413 = function(argcv) {    // method nullFile
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for nullFile"));
    setModuleName("util");
    // nullFile is a simple accessor - elide try ... catch
    return var_nullFile;
  };
  func1413.paramCounts = [0];
  this.methods["nullFile"] = func1413;
  func1413.definitionLine = 27;
  func1413.definitionModule = "util";
  this.methods["nullFile"].debug = "def";
  setLineNumber(28);    // compilenode identifier
  var var_filename = var_nullFile;
  setLineNumber(27);    // compilenode method
  var func1414 = function(argcv) {    // method filename
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for filename"));
    setModuleName("util");
    // filename is a simple accessor - elide try ... catch
    setLineNumber(28);    // compilenode identifier
    return var_filename;
  };
  func1414.paramCounts = [0];
  this.methods["filename"] = func1414;
  func1414.definitionLine = 27;
  func1414.definitionModule = "util";
  setLineNumber(27);    // compilenode method
  var func1415 = function(argcv) {    // method filename:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for filename:=(1)"));
    setModuleName("util");
    var_filename = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func1415.paramCounts = [1];
  this.methods["filename:="] = func1415;
  func1415.definitionLine = 27;
  func1415.definitionModule = "util";
  this.methods["filename"].debug = "var";
  setLineNumber(29);    // compilenode string
  var string1416 = new GraceString("");
  var var_commandLineExtensions = string1416;
  setLineNumber(27);    // compilenode method
  var func1417 = function(argcv) {    // method commandLineExtensions
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for commandLineExtensions"));
    setModuleName("util");
    // commandLineExtensions is a simple accessor - elide try ... catch
    setLineNumber(29);    // compilenode identifier
    return var_commandLineExtensions;
  };
  func1417.paramCounts = [0];
  this.methods["commandLineExtensions"] = func1417;
  func1417.definitionLine = 27;
  func1417.definitionModule = "util";
  setLineNumber(27);    // compilenode method
  var func1418 = function(argcv) {    // method commandLineExtensions:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for commandLineExtensions:=(1)"));
    setModuleName("util");
    var_commandLineExtensions = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func1418.paramCounts = [1];
  this.methods["commandLineExtensions:="] = func1418;
  func1418.definitionLine = 27;
  func1418.definitionModule = "util";
  this.methods["commandLineExtensions"].debug = "var";
  setLineNumber(32);    // compilenode string
  var string1420 = new GraceString("lex");
  var string1421 = new GraceString("parse");
  var string1422 = new GraceString("grace");
  var string1423 = new GraceString("ast");
  var string1424 = new GraceString("processed-ast");
  setLineNumber(33);    // compilenode string
  var string1425 = new GraceString("patterns");
  var string1426 = new GraceString("symbols");
  var string1427 = new GraceString("imports");
  var string1428 = new GraceString("c");
  var string1429 = new GraceString("js");
  var array1419 = new PrimitiveGraceList([string1420, string1421, string1422, string1423, string1424, string1425, string1426, string1427, string1428, string1429]);
  var call1430 = callmethodChecked(var_prelude, "set", [1], array1419);
  var var_targets = call1430;
  setLineNumber(27);    // compilenode method
  var func1431 = function(argcv) {    // method targets
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for targets"));
    setModuleName("util");
    // targets is a simple accessor - elide try ... catch
    setLineNumber(32);    // compilenode identifier
    return var_targets;
  };
  func1431.paramCounts = [0];
  this.methods["targets"] = func1431;
  func1431.definitionLine = 27;
  func1431.definitionModule = "util";
  this.methods["targets"].debug = "def";
  setLineNumber(35);    // compilenode object
  var obj1432 = Grace_allocObject(GraceObject, "requiredModules");
  obj1432.definitionModule = "util";
  obj1432.definitionLine = 35;
  obj1432.outer = this;
  var reader_util_outer1433 = function() {
    return this.outer;
  };
  obj1432.methods["outer"] = reader_util_outer1433;
  var obj_init_1432 = function() {
    var origSuperDepth = superDepth;
    superDepth = obj1432;
    var func1434 = function(argcv) {    // method isAlready(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_moduleName = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isAlready(1)"));
      setModuleName("util");
      var if1435 = GraceDone;
      setLineNumber(40);    // compilenode call
      onSelf = true;
      var call1436 = callmethodChecked(this, "static", [0]);
      var call1437 = callmethodChecked(call1436, "contains", [1], var_moduleName);
      if (Grace_isTrue(call1437)) {
        setLineNumber(41);    // compilenode identifier
        if1435 = GraceTrue;
      } else {
        var if1438 = GraceDone;
        setLineNumber(42);    // compilenode call
        onSelf = true;
        var call1439 = callmethodChecked(this, "other", [0]);
        var call1440 = callmethodChecked(call1439, "contains", [1], var_moduleName);
        if (Grace_isTrue(call1440)) {
          setLineNumber(43);    // compilenode identifier
          if1438 = GraceTrue;
        } else {
          setLineNumber(45);    // compilenode identifier
          if1438 = GraceFalse;
        }
        if1435 = if1438;
      }
      setLineNumber(40);    // return value
      if (!Grace_isTrue(callmethod(var_Boolean, "match", [1], if1435)))
          throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("result of method isAlready(1) does not have " + 
                  callmethod(var_Boolean, "asString", [0])._value + "."));
      return if1435;
    };
    func1434.paramCounts = [1];
    obj1432.methods["isAlready"] = func1434;
    func1434.definitionLine = 39;
    func1434.definitionModule = "util";
    setLineNumber(36);    // compilenode call
    var call1441 = callmethodChecked(var_prelude, "emptySet", [0]);
    obj1432.data["static"] = call1441;
    var reader_util_static1442 = function() {
      return this.data["static"];
    };
    reader_util_static1442.def = true;
    obj1432.methods["static"] = reader_util_static1442;
    setLineNumber(37);    // compilenode call
    var call1443 = callmethodChecked(var_prelude, "emptySet", [0]);
    obj1432.data["linkfiles"] = call1443;
    var reader_util_linkfiles1444 = function() {
      return this.data["linkfiles"];
    };
    reader_util_linkfiles1444.def = true;
    obj1432.methods["linkfiles"] = reader_util_linkfiles1444;
    setLineNumber(38);    // compilenode call
    var call1445 = callmethodChecked(var_prelude, "emptySet", [0]);
    obj1432.data["other"] = call1445;
    var reader_util_other1446 = function() {
      return this.data["other"];
    };
    reader_util_other1446.def = true;
    obj1432.methods["other"] = reader_util_other1446;
    superDepth = origSuperDepth;
  };
  obj_init_1432.apply(obj1432, []);
  var var_requiredModules = obj1432;
  var func1447 = function(argcv) {    // method requiredModules
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for requiredModules"));
    setModuleName("util");
    // requiredModules is a simple accessor - elide try ... catch
    setLineNumber(35);    // compilenode identifier
    return var_requiredModules;
  };
  func1447.paramCounts = [0];
  this.methods["requiredModules"] = func1447;
  func1447.definitionLine = 38;
  func1447.definitionModule = "util";
  this.methods["requiredModules"].debug = "def";
  setLineNumber(50);    // compilenode num
  var var_errno = new GraceNum(0);
  setLineNumber(38);    // compilenode method
  var func1448 = function(argcv) {    // method errno
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for errno"));
    setModuleName("util");
    // errno is a simple accessor - elide try ... catch
    setLineNumber(50);    // compilenode identifier
    return var_errno;
  };
  func1448.paramCounts = [0];
  this.methods["errno"] = func1448;
  func1448.definitionLine = 38;
  func1448.definitionModule = "util";
  setLineNumber(38);    // compilenode method
  var func1449 = function(argcv) {    // method errno:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for errno:=(1)"));
    setModuleName("util");
    var_errno = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func1449.paramCounts = [1];
  this.methods["errno:="] = func1449;
  func1449.definitionLine = 38;
  func1449.definitionModule = "util";
  this.methods["errno"].debug = "var";
  setLineNumber(253);    // compilenode num
  var var_previousElapsed = new GraceNum(0);
  setLineNumber(38);    // compilenode method
  var func1450 = function(argcv) {    // method previousElapsed
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for previousElapsed"));
    setModuleName("util");
    // previousElapsed is a simple accessor - elide try ... catch
    setLineNumber(253);    // compilenode identifier
    return var_previousElapsed;
  };
  func1450.paramCounts = [0];
  this.methods["previousElapsed"] = func1450;
  func1450.definitionLine = 38;
  func1450.definitionModule = "util";
  setLineNumber(38);    // compilenode method
  var func1451 = function(argcv) {    // method previousElapsed:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for previousElapsed:=(1)"));
    setModuleName("util");
    var_previousElapsed = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func1451.paramCounts = [1];
  this.methods["previousElapsed:="] = func1451;
  func1451.definitionLine = 38;
  func1451.definitionModule = "util";
  this.methods["previousElapsed"].debug = "var";
  setLineNumber(420);    // compilenode string
  var string1452 = new GraceString("");
  var var_outDirCache = string1452;
  setLineNumber(38);    // compilenode method
  var func1453 = function(argcv) {    // method outDirCache
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for outDirCache"));
    setModuleName("util");
    // outDirCache is a simple accessor - elide try ... catch
    setLineNumber(420);    // compilenode identifier
    return var_outDirCache;
  };
  func1453.paramCounts = [0];
  this.methods["outDirCache"] = func1453;
  func1453.definitionLine = 38;
  func1453.definitionModule = "util";
  setLineNumber(38);    // compilenode method
  var func1454 = function(argcv) {    // method outDirCache:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for outDirCache:=(1)"));
    setModuleName("util");
    var_outDirCache = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func1454.paramCounts = [1];
  this.methods["outDirCache:="] = func1454;
  func1454.definitionLine = 38;
  func1454.definitionModule = "util";
  this.methods["outDirCache"].debug = "var";
  setLineNumber(421);    // compilenode identifier
  var var_dirFlag = GraceFalse;
  setLineNumber(38);    // compilenode method
  var func1455 = function(argcv) {    // method dirFlag
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for dirFlag"));
    setModuleName("util");
    // dirFlag is a simple accessor - elide try ... catch
    setLineNumber(421);    // compilenode identifier
    return var_dirFlag;
  };
  func1455.paramCounts = [0];
  this.methods["dirFlag"] = func1455;
  func1455.definitionLine = 38;
  func1455.definitionModule = "util";
  setLineNumber(38);    // compilenode method
  var func1456 = function(argcv) {    // method dirFlag:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for dirFlag:=(1)"));
    setModuleName("util");
    var_dirFlag = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func1456.paramCounts = [1];
  this.methods["dirFlag:="] = func1456;
  func1456.definitionLine = 38;
  func1456.definitionModule = "util";
  this.methods["dirFlag"].debug = "var";
  setLineNumber(433);    // compilenode string
  var string1457 = new GraceString("");
  var var_execDirCache = string1457;
  setLineNumber(38);    // compilenode method
  var func1458 = function(argcv) {    // method execDirCache
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for execDirCache"));
    setModuleName("util");
    // execDirCache is a simple accessor - elide try ... catch
    setLineNumber(433);    // compilenode identifier
    return var_execDirCache;
  };
  func1458.paramCounts = [0];
  this.methods["execDirCache"] = func1458;
  func1458.definitionLine = 38;
  func1458.definitionModule = "util";
  setLineNumber(38);    // compilenode method
  var func1459 = function(argcv) {    // method execDirCache:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for execDirCache:=(1)"));
    setModuleName("util");
    var_execDirCache = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func1459.paramCounts = [1];
  this.methods["execDirCache:="] = func1459;
  func1459.definitionLine = 38;
  func1459.definitionModule = "util";
  this.methods["execDirCache"].debug = "var";
  setLineNumber(526);    // compilenode string
  var string1460 = new GraceString("0123456789abcdef");
  var var_hexdigits = string1460;
  setLineNumber(38);    // compilenode method
  var func1461 = function(argcv) {    // method hexdigits
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for hexdigits"));
    setModuleName("util");
    // hexdigits is a simple accessor - elide try ... catch
    setLineNumber(526);    // compilenode identifier
    return var_hexdigits;
  };
  func1461.paramCounts = [0];
  this.methods["hexdigits"] = func1461;
  func1461.definitionLine = 38;
  func1461.definitionModule = "util";
  setLineNumber(38);    // compilenode method
  var func1462 = function(argcv) {    // method hexdigits:=(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for hexdigits:=(1)"));
    setModuleName("util");
    var_hexdigits = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func1462.paramCounts = [1];
  this.methods["hexdigits:="] = func1462;
  func1462.definitionLine = 38;
  func1462.definitionModule = "util";
  this.methods["hexdigits"].debug = "var";
  return this;
}
gracecode_util.imports = ['io', 'stringMap', 'sys', 'unixFilePath'];
if (typeof gctCache !== "undefined")
  gctCache['util'] = "classes:\nconfidential:\n createDirectoryIfNecessary\nfresh-methods:\nmodules:\n io\n stringMap\n sys\n unixFilePath\npath:\n util\npublic:\n buildtype\n cLines\n commandLineExtensions\n debug\n defaultVerbosity\n dirFlag\n errno\n execDir\n extensions\n file()on()orPath()otherwise\n file()onPath()otherwise\n filename\n generalError\n gracelibPath\n hex\n infile\n linenum\n linepos\n lines\n log()verbose\n log_verbose\n modname\n noexec\n outDir\n outDir:=\n outfile\n outprint\n parseargs\n printhelp\n processExtension\n recurse\n requiredModules\n runmode\n semantic_error\n setPosition\n setline\n sourceDir\n startupFailure\n str()lastIndexOf\n syntaxError\n target\n type_error\n verbosity\n verbosity:=\n vtag\n warning\ntypes:\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["util"] = [
    "#pragma ExtendedLineups",
    "import \"io\" as io",
    "import \"sys\" as sys",
    "import \"unixFilePath\" as filePath",
    "import \"stringMap\" as map",
    "",
    "def defaultVerbosity is public = 30",
    "var verbosity is public := defaultVerbosity",
    "var outfilev := io.output",
    "var infilev := io.input",
    "var modnamev := \"standardInput\"",
    "var runmodev := \"make\"",
    "var buildtypev := \"run\"",
    "var gracelibPathv := false",
    "var linenumv := 1",
    "var lineposv := 1",
    "var vtagv := false",
    "var noexecv := false",
    "var targetv := \"c\"",
    "var extensionsv := map.new",
    "var recurse is readable := true",
    "var dynamicModule := false",
    "var importDynamic := false",
    "var jobs := 2",
    "def cLines is readable = [ ]",
    "def lines is readable = [ ]",
    "def nullFile = filePath.null        // don't modify this one",
    "var filename is readable := nullFile",
    "var commandLineExtensions is readable := \"\"",
    "",
    "",
    "def targets = set [\"lex\", \"parse\", \"grace\", \"ast\", \"processed-ast\",",
    "    \"patterns\", \"symbols\", \"imports\", \"c\", \"js\"]",
    "",
    "def requiredModules is public = object {",
    "    def static is public = emptySet",
    "    def linkfiles is public = emptySet",
    "    def other is public = emptySet",
    "    method isAlready ( moduleName ) -> Boolean {",
    "        if ( static.contains(moduleName) ) then {",
    "            true",
    "        } elseif { other.contains(moduleName ) } then {",
    "            true",
    "        } else {",
    "            false",
    "        }",
    "    }",
    "}",
    "",
    "var errno is readable := 0",
    "",
    "method parseargs(buildinfo) {",
    "    var argv := sys.argv",
    "    var toStdout := false",
    "    if (argv.size > 1) then {",
    "        var indices := argv.indices",
    "        var arg",
    "        var skip := true",
    "        for (indices) do { ai->",
    "            arg := argv.at(ai)",
    "            if (!skip && (arg.at(1) == \"-\")) then {",
    "                match(arg)",
    "                    case { \"-o\" ->",
    "                        if(argv.size < (ai + 1)) then {",
    "                            startupFailure \"-o requires an argument.\"",
    "                        }",
    "                        outfilev := io.open(argv.at(ai + 1), \"w\")",
    "                        skip := true",
    "                    } case { \"--verbose\" ->",
    "                        verbosity := 40",
    "                        if (argv.size >= (ai + 1)) then {",
    "                            def nextArg = argv.at(ai + 1)",
    "                            def firstCh = nextArg.at(1)",
    "                            if ((firstCh >= \"0\") && (firstCh <= \"9\")) then {",
    "                                skip := true",
    "                                verbosity := nextArg.asNumber",
    "                            }",
    "                        }",
    "                    } case { \"--help\" ->",
    "                        printhelp",
    "                    } case { \"--vtag\" ->",
    "                        skip := true",
    "                        if(argv.size < (ai + 1)) then {",
    "                            startupFailure \"--vtag requires an argument.\"",
    "                        }",
    "                        vtagv := argv.at(ai + 1)",
    "                    } case { \"--make\" ->",
    "                        runmodev := \"make\"",
    "                        buildtypev := \"bc\"",
    "                    } case { \"--no-recurse\" ->",
    "                        recurse := false",
    "                    } case { \"--dynamic-module\" ->",
    "                        dynamicModule := true",
    "                        runmodev := \"make\"",
    "                        noexecv := true",
    "                        buildtypev := \"bc\"",
    "                    } case { \"--import-dynamic\" ->",
    "                        importDynamic := true",
    "                    } case { \"--run\" ->",
    "                        buildtypev := \"run\"",
    "                        runmodev := \"make\"",
    "                    } case { \"--source\" ->",
    "                        buildtypev := \"source\"",
    "                        runmodev := \"build\"",
    "                    } case { \"--native\" ->",
    "                        buildtypev := \"native\"",
    "                    } case { \"--noexec\" ->",
    "                        noexecv := true",
    "                        buildtypev := \"bc\"",
    "                    } case { \"--dir\" ->",
    "                        skip := true",
    "                        if(argv.size < (ai + 1)) then {",
    "                            startupFailure \"--dir requires an argument.\"",
    "                        }",
    "                        outDirCache := argv.at(ai + 1)",
    "                        dirFlag := true",
    "                        if (outDirCache.at(outDirCache.size) != \"/\") then {",
    "                            outDirCache := outDirCache ++ \"/\"",
    "                        }",
    "                        createDirectoryIfNecessary(outDirCache)",
    "                    } case { \"--stdout\" ->",
    "                        toStdout := true",
    "                    } case { \"-\" ->",
    "                        toStdout := true",
    "                    } case { \"--module\" ->",
    "                        skip := true",
    "                        if(argv.size < (ai + 1)) then {",
    "                            startupFailure \"--module requires an argument.\"",
    "                        }",
    "                        modnamev := argv.at(ai + 1)",
    "                    } case { \"--gracelib\" ->",
    "                        skip := true",
    "                        if(argv.size < (ai + 1)) then {",
    "                            startupFailure \"--gracelib requires an argument.\"",
    "                        }",
    "                        gracelibPathv := argv.at(ai + 1)",
    "                    } case { \"--target\" ->",
    "                        skip := true",
    "                        if(argv.size < (ai + 1)) then {",
    "                            startupFailure \"--target requires an argument.\"",
    "                        }",
    "                        targetv := argv.at(ai + 1)",
    "",
    "                        if (targetv == \"help\") then {",
    "                            io.error.write \"Valid targets:\\n\"",
    "                            targets.asList.sort.do { t ->",
    "                                io.error.write \"  {t}\\n\"",
    "                            }",
    "                            sys.exit(0)",
    "                        }",
    "                    } case { \"-j\" ->",
    "                        skip := true",
    "                        if(argv.size < (ai + 1)) then {",
    "                            startupFailure \"-j requires an argument.\"",
    "                        }",
    "                        jobs := argv.at(ai + 1).asNumber",
    "                    } case { \"--version\" ->",
    "                        print(\"minigrace version \"",
    "                            ++ \"{buildinfo.gitgeneration}\")",
    "                        print(\"git revision \" ++ buildinfo.gitrevision)",
    "                        sys.exit(0)",
    "                    } case { _ ->",
    "                        if (arg.at(2) == \"X\") then {",
    "                            var ext := arg.substringFrom(3)to(arg.size)",
    "                            commandLineExtensions := \"{commandLineExtensions} {arg}\"",
    "                            processExtension(ext)",
    "                        } else {",
    "                            startupFailure \"invalid argument {arg}.\"",
    "                        }",
    "                    }",
    "            } else {",
    "                if (skip) then {",
    "                    skip := false",
    "                } elseif { filename == nullFile } then {",
    "                    filename := filePath.fromString(arg)",
    "                    if (filename.extension != \".grace\") then {",
    "                        startupFailure \"filename '{filename}' does not end with '.grace'.\"",
    "                    }",
    "                    try {",
    "                        infilev := io.open(filename.asString, \"r\")",
    "                    } catch {",
    "                        ex:EnvironmentException ->",
    "                            startupFailure \"can't open file {filename}\"",
    "                    }",
    "                    if (modnamev == \"standardInput\") then {",
    "                        modnamev := filename.base",
    "                    }",
    "                } else {",
    "                    startupFailure \"please provide a single Grace file.\"",
    "                }",
    "            }",
    "        }",
    "    }",
    "    if ((false == vtagv) && {outDirCache != \"\"}) then {",
    "        vtagv := outDirCache.substringFrom 1 to (outDirCache.size - 1)",
    "    }",
    "    if ((outfilev == io.output) && {!toStdout}) then {",
    "        outfilev := match(targetv)",
    "            case { \"c\" -> io.open(outDir ++ modnamev ++ \".c\", \"w\") }",
    "            case { \"js\" -> io.open(outDir ++ modnamev ++ \".js\", \"w\") }",
    "            case { \"parse\" -> io.open(outDir ++ modnamev ++ \".parse\", \"w\") }",
    "            case { \"lex\" -> io.open(outDir ++ modnamev ++ \".lex\", \"w\") }",
    "            case { \"processed-ast\" -> io.open(outDir ++ modnamev ++ \".ast\", \"w\") }",
    "            case { \"ast\" -> io.open(outDir ++ modnamev ++ \".ast\", \"w\") }",
    "            case { \"symbols\" -> io.open(outDir ++ modnamev ++ \".symbols\", \"w\") }",
    "            case { \"patterns\" -> io.open(outDir ++ modnamev ++ \".patterns\", \"w\") }",
    "            case { \"grace\" -> io.open(outDir ++ modnamev ++ \"_new.grace\", \"w\") }",
    "            case { \"imports\" -> io.output }",
    "            case { _ ->",
    "                startupFailure \"unrecognized target '{targetv}'.\"",
    "            }",
    "    }",
    "    if ((target != \"c\") && (target != \"js\")) then {",
    "        buildtypev := \"debug\"",
    "    }",
    "    if ((buildtype == \"run\") && (gracelibPathv == false)) then {",
    "        def extension = if (target == \"c\") then { \".o\" } else { \".\" ++ target }",
    "        def soughtLibrary = filePath.withDirectory(execDir)",
    "                                base \"gracelib\" extension(extension)",
    "        if (soughtLibrary.exists) then {",
    "            gracelibPathv := execDir",
    "        } else {",
    "            soughtLibrary.directory := \"\"",
    "            def gracelib = file (soughtLibrary)",
    "                onPath (sys.environ.at \"GRACE_MODULE_PATH\")",
    "                otherwise { locs ->",
    "                    startupFailure(\"can't find {soughtLibrary.shortName};\\n\" ++",
    "                          \"looked in {locs}.\")",
    "                }",
    "            gracelibPathv := gracelib.directory",
    "        }",
    "    }",
    "    if (infilev == io.input) then {",
    "        if (infilev.isatty) then {",
    "            print(\"minigrace {buildinfo.gitgeneration} / \"",
    "                ++ buildinfo.gitrevision)",
    "            print \"Copyright © 2011-2015 rests with the authors.\"",
    "            print(\"This is free software with absolutely no warranty. \"",
    "                ++ \"Say minigrace.w for details.\")",
    "            print \"\"",
    "            print \"Enter a program and press Ctrl-D to execute it.\"",
    "            print \"\"",
    "        }",
    "    }",
    "}",
    "",
    "method createDirectoryIfNecessary(d) is confidential {",
    "    if (io.exists(d)) then { return }",
    "    if (io.system \"mkdir \\\"{d}\\\"\") then { return }",
    "    EnvironmentException.raise \"Unable to create directory \\\"{d}\\\".\"",
    "}",
    "",
    "var previousElapsed := 0",
    "",
    "method log_verbose(s) {",
    "    log (defaultVerbosity + 1) verbose (s)",
    "}",
    "",
    "method log(level) verbose(s) {",
    "    if (verbosity >= level) then {",
    "        var vtagw := \"\"",
    "        if (false != vtagv) then {",
    "            vtagw := \"[\" ++ vtagv ++ \"]\"",
    "        }",
    "        def elapsed = (sys.elapsed * 100).rounded / 100",
    "        io.error.write(\"minigrace{vtagw}: {modnamev}: \"",
    "            ++ \"{elapsed} (+{elapsed - previousElapsed}): {s}\\n\")",
    "        previousElapsed := elapsed",
    "    }",
    "}",
    "",
    "method outprint(s) {",
    "    outfilev.write(s)",
    "    outfilev.write(\"\\n\")",
    "}",
    "",
    "",
    "method syntaxError(message, errlinenum, position, arr, spacePos, suggestions) {",
    "    // Used by various wrapper methods in the errormessages module.",
    "    // The parameters mean:",
    "    //   - message: The text of the error message.",
    "    //   - errlinenum: The line number on which the error occurred.",
    "    //   - position: A string used to show the position of the error in the error message.",
    "    //   - arr: The string used to draw an arrow showing the position of the error.",
    "    //   - spacePos: The position in the error line that a space should be inserted, or false.",
    "    //   - suggestions: A (possibly empty) list of suggestions to correct the error.",
    "    generalError(\"Syntax error: {message}\", errlinenum, position, arr, spacePos,",
    "        suggestions)",
    "}",
    "",
    "method startupFailure (message) {",
    "    // Terminates the compilation because of an error in the commmand line",
    "",
    "    io.error.write \"{sys.argv.at(1)}: \"",
    "    io.error.write (message)",
    "    io.error.write \"\\n\"",
    "    sys.exit 1",
    "}",
    "",
    "",
    "method generalError(message, errlinenum, position, arr, spacePos, suggestions) {",
    "    if (vtagv) then {",
    "        io.error.write(\"[\" ++ vtagv ++ \"]\")",
    "    }",
    "    io.error.write(\"{modnamev}.grace[{errlinenum}{position}]: {message}\\n\")",
    "    if ((errlinenum > 1) && (lines.size >= (errlinenum - 1))) then {",
    "        io.error.write(\"  {errlinenum - 1}: {lines.at(errlinenum - 1)}\\n\")",
    "    }",
    "    if ((errlinenum > 0) && (lines.size >= errlinenum)) then {",
    "        io.error.write \"  {errlinenum}: {lines.at(errlinenum)}\\n\"",
    "        io.error.write \"{arr}\\n\"",
    "    }",
    "    if (suggestions.size > 0) then {",
    "        for(suggestions) do { s ->",
    "            io.error.write \"\\nDid you mean:\\n\"",
    "            s.print",
    "        }",
    "    }",
    "    sys.exit(2)",
    "}",
    "",
    "method type_error(s) {",
    "    if (extensionsv.contains(\"IgnoreTypes\")) then {",
    "        return true",
    "    }",
    "    if (vtagv) then {",
    "        io.error.write(\"[\" ++ vtagv ++ \"]\")",
    "    }",
    "    io.error.write(\"{modnamev}.grace:{linenumv}:{lineposv}: Type error: {s}\")",
    "    io.error.write(\"\\n\")",
    "    io.error.write(lines.at(linenumv) ++ \"\\n\")",
    "    sys.exit(2)",
    "}",
    "method semantic_error(s) {",
    "    if (vtagv) then {",
    "        io.error.write(\"[\" ++ vtagv ++ \"]\")",
    "    }",
    "    io.error.write \"{modnamev}.grace:{linenumv}:{lineposv}: Semantic error\"",
    "    if (s == \"\") then {",
    "        io.error.write \"\\n\"",
    "        sys.exit(2)",
    "    }",
    "    io.error.write \": {s}\\n\"",
    "    if (linenumv > 1) then {",
    "        if (lines.size > 0) then {",
    "            io.error.write(\"  {linenumv - 1}: {lines.at(linenumv - 1)}\\n\")",
    "        }",
    "    }",
    "    var arr := \"----\"",
    "    for (2..(lineposv + linenumv.asString.size)) do { _ ->",
    "        arr := arr ++ \"-\"",
    "    }",
    "    if (lines.size >= linenumv) then {",
    "        io.error.write(\"  {linenumv}: {lines.at(linenumv)}\\n{arr}^\\n\")",
    "    }",
    "    if (linenumv < lines.size) then {",
    "        io.error.write(\"  {linenumv + 1}: {lines.at(linenumv + 1)}\\n\")",
    "    }",
    "    sys.exit(2)",
    "}",
    "method warning(s) {",
    "    io.error.write(\"{modnamev}.grace:{linenumv}:{lineposv}: warning: {s}\")",
    "    io.error.write(\"\\n\")",
    "}",
    "",
    "method outfile {",
    "    outfilev",
    "}",
    "method infile {",
    "    infilev",
    "}",
    "method modname {",
    "    modnamev",
    "}",
    "method runmode {",
    "    runmodev",
    "}",
    "method buildtype {",
    "    buildtypev",
    "}",
    "method gracelibPath {",
    "    gracelibPathv",
    "}",
    "method setline(l) {",
    "    linenumv := l",
    "}",
    "method setPosition(l, p) {",
    "    linenumv := l",
    "    lineposv := p",
    "}",
    "method linenum {",
    "    linenumv",
    "}",
    "method linepos {",
    "    lineposv",
    "}",
    "method vtag {",
    "    vtagv",
    "}",
    "method noexec {",
    "    noexecv",
    "}",
    "method target {",
    "    targetv",
    "}",
    "method extensions {",
    "    extensionsv",
    "}",
    "method str(s) lastIndexOf(ch) {",
    "    var ix := s.size",
    "    while { ix > 0 } do {",
    "        if (s.at(ix) == ch) then { return ix }",
    "        ix := ix - 1",
    "    }",
    "    return 0",
    "}",
    "",
    "method sourceDir { filename.directory }",
    "",
    "var outDirCache := \"\"",
    "var dirFlag is readable := false",
    "method outDir {",
    "    if (outDirCache == \"\") then {",
    "        outDirCache := sourceDir",
    "    }",
    "    outDirCache",
    "}",
    "method outDir:=(new) {",
    "    // this method exists for testing, in particular, t179_gctTypeInformation_test",
    "    outDirCache := new",
    "}",
    "",
    "var execDirCache := \"\"",
    "method execDir {",
    "    if (execDirCache == \"\") then {",
    "        execDirCache := sys.execPath",
    "        if (execDirCache.at(execDirCache.size) != \"/\") then {",
    "            execDirCache := execDirCache ++ \"/\"",
    "        }",
    "    }",
    "    execDirCache",
    "}",
    "",
    "method file(name) on(origin) orPath(pathString) otherwise(action) {",
    "    def locations = filePath.split(pathString)",
    "    locations.addFirst(origin)",
    "    if (origin != \"./\") then { locations.addFirst \"./\" }",
    "    if (locations.contains(execDir).not) then { locations.addLast(execDir) }",
    "    def candidate = name.copy",
    "    def originalDir = name.directory",
    "    if ((originalDir.size > 0) && {originalDir.first == \"/\"}) then {",
    "        if (candidate.exists) then {",
    "            return candidate",
    "        } else {",
    "            return action.apply \"\"",
    "        }",
    "    }",
    "    locations.do { each ->",
    "        candidate.setDirectory(each ++ originalDir)",
    "        if ( candidate.exists ) then {",
    "            return candidate",
    "        }",
    "    }",
    "    action.apply(locations)",
    "}",
    "method file(name) onPath(pathString) otherwise(action) {",
    "    file(name) on(outDir) orPath(pathString) otherwise(action)",
    "}",
    "",
    "method processExtension(ext) {",
    "    var extn := \"\"",
    "    var extv := true",
    "    var seeneq := false",
    "    for (ext) do {c->",
    "        if (c == \"=\") then {",
    "            seeneq := true",
    "            extv := \"\"",
    "        } else {",
    "            if (!seeneq) then {",
    "                extn := extn ++ c",
    "            } else {",
    "                extv := extv ++ c",
    "            }",
    "        }",
    "    }",
    "    extensionsv.put(extn, extv)",
    "}",
    "method printhelp {",
    "    print \"Usage: {sys.argv.at(1)} [OPTION]... [FILE]\"",
    "    print \"Compile, process, or run a Grace source file or standard input.\"",
    "    print \"\"",
    "    print \"Modes:\"",
    "    print \"  --make           Compile FILE and link, creating a executable\"",
    "    print \"  --run            Compile FILE and execute the program [default]\"",
    "    print \"  --source         Compile FILE to C source, but no further\"",
    "    print \"  --noexec         Compile FILE to object code, but don't create executable\"",
    "    print \"  --dynamic-module Compile FILE as a dynamic module\"",
    "    print \"\"",
    "    print \"Options:\"",
    "    print \"  --dir DIR        Use the directory DIR for generated output files,\"",
    "    print \"                   and for .gct files of imported modules\"",
    "    print \"  --gracelib DIR   Look in DIR for gracelib.  If not specified, looks in\"",
    "    print \"                   the same directory as {sys.argv.at(1)}, and then on GRACE_MODULE_PATH.\"",
    "    print \"  --help           This text\"",
    "    print \"  --module         Override default module name (derived from FILE)\"",
    "    print \"  --no-recurse     Do not compile imported modules\"",
    "    print \"  -o OFILE         Output to OFILE instead of default\"",
    "    print \"  --stdout         Output to standard output rather than a file\"",
    "    print \"  --target TGT     Choose a non-default compilation target TGT\"",
    "    print \"                   Use --target help to list supported targets.\"",
    "    print \"  --verbose n      Give more detailed output (n is optional, default 40)\"",
    "    print \"                      n ≥ 20 lists unexpected situations during compilation\"",
    "    print \"                      n ≥ 40 also lists phases of the compilation\"",
    "    print \"                      n ≥ 50 also lists initiation of sub-compiles\"",
    "    print \"                      n ≥ 60 also describes searches for imports\"",
    "    print \"                      n ≥ 100 also describes import logic\"",
    "    print \"  --version        Print version information\"",
    "    print \"\"",
    "    print \"By default, {sys.argv.at(1)} FILE will compile and execute FILE.\"",
    "    print \"More detailed usage information is in the <doc/usage> file in the source tree.\"",
    "    sys.exit(0)",
    "}",
    "method debug(s) {",
    "",
    "}",
    "var hexdigits := \"0123456789abcdef\"",
    "method hex(num) {",
    "    var tmp := num",
    "    var s := \"\"",
    "    while {tmp > 0} do {",
    "        var i := tmp % 16",
    "        s := hexdigits.at(i + 1) ++ s",
    "        tmp := tmp - i",
    "        tmp := tmp / 16",
    "    }",
    "    s",
    "}" ];
}
if (typeof global !== "undefined")
  global.gracecode_util = gracecode_util;
if (typeof window !== "undefined")
  window.gracecode_util = gracecode_util;
