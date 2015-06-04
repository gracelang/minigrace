"use strict";
this.outer = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_util () {
  setModuleName("util");
  if (callStack.length == 0)
    callStack = ["execution environment"]
  this.definitionModule = "util";
  this.definitionLine = 0;
  setLineNumber(45)    // compilenode method;
  var func0 = function(argcv) {    // method parseargs
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for parseargs"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      setLineNumber(46)    // compilenode identifier;
      var call1 = callmethod(var_sys,"argv", [0]);
      var var_argv = call1;
      setLineNumber(47)    // compilenode identifier;
      var var_toStdout = GraceFalse;
      var if2 = GraceDone;
      setLineNumber(48)    // compilenode identifier;
      var call4 = callmethod(var_argv,"size", [0]);
      var opresult6 = callmethod(call4, ">", [1], new GraceNum(1));
      if (Grace_isTrue(opresult6)) {
        setLineNumber(49)    // compilenode identifier;
        var call7 = callmethod(var_argv,"indices", [0]);
        var var_indices = call7;
        setLineNumber(51)    // compilenode vardec;
        var var_arg;
        var var_skip = GraceTrue;
        setLineNumber(52)    // compilenode block;
        var block8 = new GraceBlock(this, 52, 1);
        block8.real = function(var_ai) {
          sourceObject = this;
          setLineNumber(53)    // compilenode identifier;
          var call9 = callmethod(var_argv,"at", [1], var_ai);
          var_arg = call9;
          var if10 = GraceDone;
          setLineNumber(54)    // compilenode string;
          var string11 = new GraceString("-");
          var call13 = callmethod(var_arg,"at", [1], new GraceNum(1));
          var opresult15 = callmethod(call13, "==", [1], string11);
          if (Grace_isTrue(opresult15)) {
            setLineNumber(55)    // compilenode identifier;
            var cases16 = [];
            setLineNumber(56)    // compilenode block;
            var block17 = new GraceBlock(this, 56, 0);
            var string18 = new GraceString("-o");
            block17.pattern = string18;
            block17.real = function() {
              sourceObject = this;
              var if19 = GraceDone;
              setLineNumber(57)    // compilenode identifier;
              var opresult22 = callmethod(var_ai, "+", [1], new GraceNum(1));
              var call24 = callmethod(var_argv,"size", [0]);
              var opresult26 = callmethod(call24, "<", [1], opresult22);
              if (Grace_isTrue(opresult26)) {
                setLineNumber(58)    // compilenode string;
                var string27 = new GraceString("minigrace: -o requires argument.\n");
                var call28 = callmethod(var_io,"error", [0]);
                var call29 = callmethod(call28,"write", [1], string27);
                setLineNumber(59)    // compilenode identifier;
                var call30 = callmethod(var_sys,"exit", [1], new GraceNum(1));
                if19 = call30;
              }
              setLineNumber(61)    // compilenode identifier;
              var opresult33 = callmethod(var_ai, "+", [1], new GraceNum(1));
              var call34 = callmethod(var_argv,"at", [1], opresult33);
              var string35 = new GraceString("w");
              var call36 = callmethod(var_io,"open", [2], call34, string35);
              var_outfilev = call36;
              setLineNumber(62)    // compilenode identifier;
              var_skip = GraceTrue;
              return GraceTrue;
            };
            cases16.push(block17);
            setLineNumber(63)    // compilenode block;
            var block37 = new GraceBlock(this, 63, 0);
            var string38 = new GraceString("--verbose");
            block37.pattern = string38;
            block37.real = function() {
              sourceObject = this;
              setLineNumber(64)    // compilenode num;
              var_verbosityv = new GraceNum(40);
              return new GraceNum(40);
            };
            cases16.push(block37);
            setLineNumber(65)    // compilenode block;
            var block39 = new GraceBlock(this, 65, 0);
            var string40 = new GraceString("--help");
            block39.pattern = string40;
            block39.real = function() {
              sourceObject = this;
              setLineNumber(66)    // compilenode call;
              onSelf = true;
              var call41 = callmethod(this, "printhelp", [0]);
              return call41;
            };
            cases16.push(block39);
            setLineNumber(67)    // compilenode block;
            var block42 = new GraceBlock(this, 67, 0);
            var string43 = new GraceString("--vtag");
            block42.pattern = string43;
            block42.real = function() {
              sourceObject = this;
              setLineNumber(68)    // compilenode identifier;
              var_skip = GraceTrue;
              var if44 = GraceDone;
              setLineNumber(69)    // compilenode identifier;
              var opresult47 = callmethod(var_ai, "+", [1], new GraceNum(1));
              var call49 = callmethod(var_argv,"size", [0]);
              var opresult51 = callmethod(call49, "<", [1], opresult47);
              if (Grace_isTrue(opresult51)) {
                setLineNumber(70)    // compilenode string;
                var string52 = new GraceString("minigrace: --vtag requires argument.\n");
                var call53 = callmethod(var_io,"error", [0]);
                var call54 = callmethod(call53,"write", [1], string52);
                setLineNumber(71)    // compilenode identifier;
                var call55 = callmethod(var_sys,"exit", [1], new GraceNum(1));
                if44 = call55;
              }
              setLineNumber(73)    // compilenode identifier;
              var opresult58 = callmethod(var_ai, "+", [1], new GraceNum(1));
              var call59 = callmethod(var_argv,"at", [1], opresult58);
              var_vtagv = call59;
              return call59;
            };
            cases16.push(block42);
            setLineNumber(74)    // compilenode block;
            var block60 = new GraceBlock(this, 74, 0);
            var string61 = new GraceString("--make");
            block60.pattern = string61;
            block60.real = function() {
              sourceObject = this;
              setLineNumber(75)    // compilenode string;
              var string62 = new GraceString("make");
              var_runmodev = string62;
              setLineNumber(76)    // compilenode string;
              var string63 = new GraceString("bc");
              var_buildtypev = string63;
              return string63;
            };
            cases16.push(block60);
            setLineNumber(77)    // compilenode block;
            var block64 = new GraceBlock(this, 77, 0);
            var string65 = new GraceString("--no-recurse");
            block64.pattern = string65;
            block64.real = function() {
              sourceObject = this;
              setLineNumber(78)    // compilenode identifier;
              var_recurse = GraceFalse;
              return GraceFalse;
            };
            cases16.push(block64);
            setLineNumber(79)    // compilenode block;
            var block66 = new GraceBlock(this, 79, 0);
            var string67 = new GraceString("--dynamic-module");
            block66.pattern = string67;
            block66.real = function() {
              sourceObject = this;
              setLineNumber(80)    // compilenode identifier;
              var_dynamicModule = GraceTrue;
              setLineNumber(81)    // compilenode string;
              var string68 = new GraceString("make");
              var_runmodev = string68;
              setLineNumber(82)    // compilenode identifier;
              var_noexecv = GraceTrue;
              setLineNumber(83)    // compilenode string;
              var string69 = new GraceString("bc");
              var_buildtypev = string69;
              return string69;
            };
            cases16.push(block66);
            setLineNumber(84)    // compilenode block;
            var block70 = new GraceBlock(this, 84, 0);
            var string71 = new GraceString("--import-dynamic");
            block70.pattern = string71;
            block70.real = function() {
              sourceObject = this;
              setLineNumber(85)    // compilenode identifier;
              var_importDynamic = GraceTrue;
              return GraceTrue;
            };
            cases16.push(block70);
            setLineNumber(86)    // compilenode block;
            var block72 = new GraceBlock(this, 86, 0);
            var string73 = new GraceString("--run");
            block72.pattern = string73;
            block72.real = function() {
              sourceObject = this;
              setLineNumber(87)    // compilenode string;
              var string74 = new GraceString("run");
              var_buildtypev = string74;
              setLineNumber(88)    // compilenode string;
              var string75 = new GraceString("make");
              var_runmodev = string75;
              return string75;
            };
            cases16.push(block72);
            setLineNumber(89)    // compilenode block;
            var block76 = new GraceBlock(this, 89, 0);
            var string77 = new GraceString("--source");
            block76.pattern = string77;
            block76.real = function() {
              sourceObject = this;
              setLineNumber(90)    // compilenode string;
              var string78 = new GraceString("source");
              var_buildtypev = string78;
              setLineNumber(91)    // compilenode string;
              var string79 = new GraceString("build");
              var_runmodev = string79;
              return string79;
            };
            cases16.push(block76);
            setLineNumber(92)    // compilenode block;
            var block80 = new GraceBlock(this, 92, 0);
            var string81 = new GraceString("--native");
            block80.pattern = string81;
            block80.real = function() {
              sourceObject = this;
              setLineNumber(93)    // compilenode string;
              var string82 = new GraceString("native");
              var_buildtypev = string82;
              return string82;
            };
            cases16.push(block80);
            setLineNumber(94)    // compilenode block;
            var block83 = new GraceBlock(this, 94, 0);
            var string84 = new GraceString("--interactive");
            block83.pattern = string84;
            block83.real = function() {
              sourceObject = this;
              setLineNumber(95)    // compilenode identifier;
              var_interactivev = GraceTrue;
              return GraceTrue;
            };
            cases16.push(block83);
            setLineNumber(96)    // compilenode block;
            var block85 = new GraceBlock(this, 96, 0);
            var string86 = new GraceString("--noexec");
            block85.pattern = string86;
            block85.real = function() {
              sourceObject = this;
              setLineNumber(97)    // compilenode identifier;
              var_noexecv = GraceTrue;
              setLineNumber(98)    // compilenode string;
              var string87 = new GraceString("bc");
              var_buildtypev = string87;
              return string87;
            };
            cases16.push(block85);
            setLineNumber(99)    // compilenode block;
            var block88 = new GraceBlock(this, 99, 0);
            var string89 = new GraceString("--yesexec");
            block88.pattern = string89;
            block88.real = function() {
              sourceObject = this;
              setLineNumber(100)    // compilenode identifier;
              var_noexecv = GraceFalse;
              return GraceFalse;
            };
            cases16.push(block88);
            setLineNumber(101)    // compilenode block;
            var block90 = new GraceBlock(this, 101, 0);
            var string91 = new GraceString("--stdout");
            block90.pattern = string91;
            block90.real = function() {
              sourceObject = this;
              setLineNumber(102)    // compilenode identifier;
              var_toStdout = GraceTrue;
              return GraceTrue;
            };
            cases16.push(block90);
            setLineNumber(103)    // compilenode block;
            var block92 = new GraceBlock(this, 103, 0);
            var string93 = new GraceString("-");
            block92.pattern = string93;
            block92.real = function() {
              sourceObject = this;
              setLineNumber(104)    // compilenode identifier;
              var_toStdout = GraceTrue;
              return GraceTrue;
            };
            cases16.push(block92);
            setLineNumber(105)    // compilenode block;
            var block94 = new GraceBlock(this, 105, 0);
            var string95 = new GraceString("--module");
            block94.pattern = string95;
            block94.real = function() {
              sourceObject = this;
              setLineNumber(106)    // compilenode identifier;
              var_skip = GraceTrue;
              var if96 = GraceDone;
              setLineNumber(107)    // compilenode identifier;
              var opresult99 = callmethod(var_ai, "+", [1], new GraceNum(1));
              var call101 = callmethod(var_argv,"size", [0]);
              var opresult103 = callmethod(call101, "<", [1], opresult99);
              if (Grace_isTrue(opresult103)) {
                setLineNumber(108)    // compilenode string;
                var string104 = new GraceString("minigrace: --module requires argument.\n");
                var call105 = callmethod(var_io,"error", [0]);
                var call106 = callmethod(call105,"write", [1], string104);
                setLineNumber(109)    // compilenode identifier;
                var call107 = callmethod(var_sys,"exit", [1], new GraceNum(1));
                if96 = call107;
              }
              setLineNumber(111)    // compilenode identifier;
              var opresult110 = callmethod(var_ai, "+", [1], new GraceNum(1));
              var call111 = callmethod(var_argv,"at", [1], opresult110);
              var_modnamev = call111;
              return call111;
            };
            cases16.push(block94);
            setLineNumber(112)    // compilenode block;
            var block112 = new GraceBlock(this, 112, 0);
            var string113 = new GraceString("--gracelib");
            block112.pattern = string113;
            block112.real = function() {
              sourceObject = this;
              setLineNumber(113)    // compilenode identifier;
              var_skip = GraceTrue;
              var if114 = GraceDone;
              setLineNumber(114)    // compilenode identifier;
              var opresult117 = callmethod(var_ai, "+", [1], new GraceNum(1));
              var call119 = callmethod(var_argv,"size", [0]);
              var opresult121 = callmethod(call119, "<", [1], opresult117);
              if (Grace_isTrue(opresult121)) {
                setLineNumber(115)    // compilenode string;
                var string122 = new GraceString("minigrace: --gracelib requires argument.\n");
                var call123 = callmethod(var_io,"error", [0]);
                var call124 = callmethod(call123,"write", [1], string122);
                setLineNumber(116)    // compilenode identifier;
                var call125 = callmethod(var_sys,"exit", [1], new GraceNum(1));
                if114 = call125;
              }
              setLineNumber(118)    // compilenode identifier;
              var opresult128 = callmethod(var_ai, "+", [1], new GraceNum(1));
              var call129 = callmethod(var_argv,"at", [1], opresult128);
              var_gracelibPathv = call129;
              return call129;
            };
            cases16.push(block112);
            setLineNumber(119)    // compilenode block;
            var block130 = new GraceBlock(this, 119, 0);
            var string131 = new GraceString("--target");
            block130.pattern = string131;
            block130.real = function() {
              sourceObject = this;
              setLineNumber(120)    // compilenode identifier;
              var_skip = GraceTrue;
              var if132 = GraceDone;
              setLineNumber(121)    // compilenode identifier;
              var opresult135 = callmethod(var_ai, "+", [1], new GraceNum(1));
              var call137 = callmethod(var_argv,"size", [0]);
              var opresult139 = callmethod(call137, "<", [1], opresult135);
              if (Grace_isTrue(opresult139)) {
                setLineNumber(122)    // compilenode string;
                var string140 = new GraceString("minigrace: --target requires argument.\n");
                var call141 = callmethod(var_io,"error", [0]);
                var call142 = callmethod(call141,"write", [1], string140);
                setLineNumber(123)    // compilenode identifier;
                var call143 = callmethod(var_sys,"exit", [1], new GraceNum(1));
                if132 = call143;
              }
              setLineNumber(125)    // compilenode identifier;
              var opresult146 = callmethod(var_ai, "+", [1], new GraceNum(1));
              var call147 = callmethod(var_argv,"at", [1], opresult146);
              var_targetv = call147;
              return call147;
            };
            cases16.push(block130);
            setLineNumber(126)    // compilenode block;
            var block148 = new GraceBlock(this, 126, 0);
            var string149 = new GraceString("-j");
            block148.pattern = string149;
            block148.real = function() {
              sourceObject = this;
              setLineNumber(127)    // compilenode identifier;
              var_skip = GraceTrue;
              var if150 = GraceDone;
              setLineNumber(128)    // compilenode identifier;
              var opresult153 = callmethod(var_ai, "+", [1], new GraceNum(1));
              var call155 = callmethod(var_argv,"size", [0]);
              var opresult157 = callmethod(call155, "<", [1], opresult153);
              if (Grace_isTrue(opresult157)) {
                setLineNumber(129)    // compilenode string;
                var string158 = new GraceString("minigrace: -j requires argument.\n");
                var call159 = callmethod(var_io,"error", [0]);
                var call160 = callmethod(call159,"write", [1], string158);
                setLineNumber(130)    // compilenode identifier;
                var call161 = callmethod(var_sys,"exit", [1], new GraceNum(1));
                if150 = call161;
              }
              setLineNumber(132)    // compilenode identifier;
              var opresult164 = callmethod(var_ai, "+", [1], new GraceNum(1));
              var call165 = callmethod(var_argv,"at", [1], opresult164);
              var call166 = callmethod(call165,"asNumber", [0]);
              var_jobs = call166;
              return call166;
            };
            cases16.push(block148);
            setLineNumber(133)    // compilenode block;
            var block167 = new GraceBlock(this, 133, 0);
            var string168 = new GraceString("--version");
            block167.pattern = string168;
            block167.real = function() {
              sourceObject = this;
              setLineNumber(135)    // compilenode string;
              var string169 = new GraceString("");
              var call171 = callmethod(var_buildinfo,"gitgeneration", [0]);
              var string173 = new GraceString("");
              var opresult175 = callmethod(string173, "++", [1], call171);
              var opresult177 = callmethod(opresult175, "++", [1], string169);
              setLineNumber(134)    // compilenode string;
              var string179 = new GraceString("minigrace version ");
              var opresult181 = callmethod(string179, "++", [1], opresult177);
              var call182 = Grace_print(opresult181);
              setLineNumber(136)    // compilenode identifier;
              var call183 = callmethod(var_buildinfo,"gitrevision", [0]);
              var string185 = new GraceString("git revision ");
              var opresult187 = callmethod(string185, "++", [1], call183);
              var call188 = Grace_print(opresult187);
              setLineNumber(137)    // compilenode identifier;
              var call189 = callmethod(var_sys,"exit", [1], new GraceNum(0));
              return call189;
            };
            cases16.push(block167);
            setLineNumber(138)    // compilenode block;
            var block190 = new GraceBlock(this, 138, 1);
            block190.real = function(var___95____95__0) {
              sourceObject = this;
              var if191 = GraceDone;
              setLineNumber(139)    // compilenode string;
              var string192 = new GraceString("X");
              var call194 = callmethod(var_arg,"at", [1], new GraceNum(2));
              var opresult196 = callmethod(call194, "==", [1], string192);
              if (Grace_isTrue(opresult196)) {
                setLineNumber(140)    // compilenode identifier;
                var call197 = callmethod(var_arg,"size", [0]);
                var call198 = callmethod(var_arg,"substringFrom()to", [1, 1], new GraceNum(3), call197);
                var var_ext = call198;
                setLineNumber(141)    // compilenode identifier;
                onSelf = true;
                var call199 = callmethod(this, "processExtension", [1], var_ext);
                if191 = call199;
              } else {
                setLineNumber(144)    // compilenode string;
                var string200 = new GraceString(".\n");
                var string203 = new GraceString("argument ");
                var opresult205 = callmethod(string203, "++", [1], var_arg);
                var opresult207 = callmethod(opresult205, "++", [1], string200);
                setLineNumber(143)    // compilenode string;
                var string209 = new GraceString("minigrace: invalid ");
                var opresult211 = callmethod(string209, "++", [1], opresult207);
                var call212 = callmethod(var_io,"error", [0]);
                var call213 = callmethod(call212,"write", [1], opresult211);
                setLineNumber(145)    // compilenode identifier;
                var call214 = callmethod(var_sys,"exit", [1], new GraceNum(1));
                if191 = call214;
              }
              return if191;
            };
            cases16.push(block190);
            setLineNumber(138)    // compilematchcase;
            var matchres16 = matchCase(var_arg,cases16,false);
            setModuleName("util");
            if10 = matchres16;
          } else {
            var if215 = GraceDone;
            setLineNumber(149)    // compilenode identifier;
            if (Grace_isTrue(var_skip)) {
              setLineNumber(150)    // compilenode identifier;
              var_skip = GraceFalse;
              if215 = GraceFalse;
            } else {
              setLineNumber(152)    // compilenode identifier;
              var_filename = var_arg;
              setLineNumber(153)    // compilenode block;
              var block217 = new GraceBlock(this, 153, 0);
              block217.real = function() {
                sourceObject = this;
                setLineNumber(154)    // compilenode string;
                var string218 = new GraceString("r");
                var call219 = callmethod(var_io,"open", [2], var_filename, string218);
                var_infilev = call219;
                return call219;
              };
              var cases216 = [];
              setLineNumber(155)    // compilenode block;
              var block220 = new GraceBlock(this, 155, 1);
              setLineNumber(133)    // compilenode string;
              var string221 = new GraceString("ex");
              var call222 = callmethod(Grace_prelude, "VariablePattern", [0]);
              var call223 = callmethod(call222,"new", [1], string221);
              setLineNumber(156)    // compilenode call;
              var call224 = callmethod(Grace_prelude, "EnvironmentException", [0]);
              setLineNumber(133)    // compilenode call;
              var call225 = callmethod(Grace_prelude, "AndPattern", [0]);
              var call226 = callmethod(call225,"new", [2], call223, call224);
              block220.pattern = call226;
              block220.real = function(var_ex) {
                sourceObject = this;
                setLineNumber(157)    // compilenode string;
                var string227 = new GraceString("");
                var string230 = new GraceString("Can't open file ");
                var opresult232 = callmethod(string230, "++", [1], var_filename);
                var opresult234 = callmethod(opresult232, "++", [1], string227);
                setLineNumber(158)    // compilenode string;
                var string235 = new GraceString("");
                var call236 = callmethod(Grace_prelude, "sequence", [0]);
                var call237 = callmethod(call236,"empty", [0]);
                onSelf = true;
                var call238 = callmethod(this, "generalError", [6], opresult234, new GraceNum(0), new GraceNum(0), string235, GraceFalse, call237);
                return call238;
              };
              cases216.push(block220);
              setLineNumber(155)    // compilecatchcase;
              var catchres216 = catchCase(block217,cases216,false);
              setModuleName("util");
              var if239 = GraceDone;
              setLineNumber(160)    // compilenode string;
              var string240 = new GraceString("standardInput");
              var opresult243 = callmethod(var_modnamev, "==", [1], string240);
              if (Grace_isTrue(opresult243)) {
                setLineNumber(161)    // compilenode string;
                var string244 = new GraceString("");
                var var_accum = string244;
                setLineNumber(162)    // compilenode string;
                var string245 = new GraceString("");
                var_modnamev = string245;
                setLineNumber(163)    // compilenode block;
                var block246 = new GraceBlock(this, 163, 1);
                block246.real = function(var_c) {
                  sourceObject = this;
                  var if247 = GraceDone;
                  setLineNumber(164)    // compilenode string;
                  var string248 = new GraceString("/");
                  var opresult251 = callmethod(var_c, "==", [1], string248);
                  if (Grace_isTrue(opresult251)) {
                    setLineNumber(165)    // compilenode string;
                    var string252 = new GraceString("");
                    var_accum = string252;
                    if247 = string252;
                  } else {
                    var if253 = GraceDone;
                    setLineNumber(166)    // compilenode string;
                    var string254 = new GraceString(".");
                    var opresult257 = callmethod(var_c, "==", [1], string254);
                    if (Grace_isTrue(opresult257)) {
                      setLineNumber(167)    // compilenode identifier;
                      var_modnamev = var_accum;
                      if253 = var_accum;
                    } else {
                      setLineNumber(169)    // compilenode identifier;
                      var opresult260 = callmethod(var_accum, "++", [1], var_c);
                      var_accum = opresult260;
                      if253 = opresult260;
                    }
                    if247 = if253;
                  }
                  return if247;
                };
                var call261 = callmethod(Grace_prelude, "for()do", [1, 1], var_filename, block246);
                if239 = call261;
              }
              if215 = if239;
            }
            if10 = if215;
          }
          return if10;
        };
        var call262 = callmethod(Grace_prelude, "for()do", [1, 1], var_indices, block8);
        if2 = call262;
      }
      var if263 = GraceDone;
      setLineNumber(177)    // compilenode block;
      var block264 = new GraceBlock(this, 177, 0);
      block264.real = function() {
        sourceObject = this;
        var call265 = callmethod(var_toStdout,"prefix!", [0]);
        return call265;
      };
      var call267 = callmethod(var_io,"output", [0]);
      var opresult270 = callmethod(var_outfilev, "==", [1], call267);
      var opresult272 = callmethod(opresult270, "&&", [1], block264);
      if (Grace_isTrue(opresult272)) {
        setLineNumber(178)    // compilenode identifier;
        var cases273 = [];
        setLineNumber(179)    // compilenode block;
        var block274 = new GraceBlock(this, 179, 0);
        var string275 = new GraceString("c");
        block274.pattern = string275;
        block274.real = function() {
          sourceObject = this;
          var string276 = new GraceString(".c");
          onSelf = true;
          var call279 = callmethod(this, "sourceDir", [0]);
          var opresult281 = callmethod(call279, "++", [1], var_modnamev);
          var opresult283 = callmethod(opresult281, "++", [1], string276);
          var string284 = new GraceString("w");
          var call285 = callmethod(var_io,"open", [2], opresult283, string284);
          return call285;
        };
        cases273.push(block274);
        setLineNumber(180)    // compilenode block;
        var block286 = new GraceBlock(this, 180, 0);
        var string287 = new GraceString("js");
        block286.pattern = string287;
        block286.real = function() {
          sourceObject = this;
          var string288 = new GraceString(".js");
          onSelf = true;
          var call291 = callmethod(this, "sourceDir", [0]);
          var opresult293 = callmethod(call291, "++", [1], var_modnamev);
          var opresult295 = callmethod(opresult293, "++", [1], string288);
          var string296 = new GraceString("w");
          var call297 = callmethod(var_io,"open", [2], opresult295, string296);
          return call297;
        };
        cases273.push(block286);
        setLineNumber(181)    // compilenode block;
        var block298 = new GraceBlock(this, 181, 0);
        var string299 = new GraceString("parse");
        block298.pattern = string299;
        block298.real = function() {
          sourceObject = this;
          var string300 = new GraceString(".parse");
          onSelf = true;
          var call303 = callmethod(this, "sourceDir", [0]);
          var opresult305 = callmethod(call303, "++", [1], var_modnamev);
          var opresult307 = callmethod(opresult305, "++", [1], string300);
          var string308 = new GraceString("w");
          var call309 = callmethod(var_io,"open", [2], opresult307, string308);
          return call309;
        };
        cases273.push(block298);
        setLineNumber(182)    // compilenode block;
        var block310 = new GraceBlock(this, 182, 0);
        var string311 = new GraceString("lex");
        block310.pattern = string311;
        block310.real = function() {
          sourceObject = this;
          var string312 = new GraceString(".lex");
          onSelf = true;
          var call315 = callmethod(this, "sourceDir", [0]);
          var opresult317 = callmethod(call315, "++", [1], var_modnamev);
          var opresult319 = callmethod(opresult317, "++", [1], string312);
          var string320 = new GraceString("w");
          var call321 = callmethod(var_io,"open", [2], opresult319, string320);
          return call321;
        };
        cases273.push(block310);
        setLineNumber(183)    // compilenode block;
        var block322 = new GraceBlock(this, 183, 0);
        var string323 = new GraceString("processed-ast");
        block322.pattern = string323;
        block322.real = function() {
          sourceObject = this;
          var string324 = new GraceString(".processed");
          onSelf = true;
          var call327 = callmethod(this, "sourceDir", [0]);
          var opresult329 = callmethod(call327, "++", [1], var_modnamev);
          var opresult331 = callmethod(opresult329, "++", [1], string324);
          var string332 = new GraceString("w");
          var call333 = callmethod(var_io,"open", [2], opresult331, string332);
          return call333;
        };
        cases273.push(block322);
        setLineNumber(184)    // compilenode block;
        var block334 = new GraceBlock(this, 184, 0);
        var string335 = new GraceString("symbols");
        block334.pattern = string335;
        block334.real = function() {
          sourceObject = this;
          var string336 = new GraceString(".processed-ast");
          onSelf = true;
          var call339 = callmethod(this, "sourceDir", [0]);
          var opresult341 = callmethod(call339, "++", [1], var_modnamev);
          var opresult343 = callmethod(opresult341, "++", [1], string336);
          var string344 = new GraceString("w");
          var call345 = callmethod(var_io,"open", [2], opresult343, string344);
          return call345;
        };
        cases273.push(block334);
        setLineNumber(185)    // compilenode block;
        var block346 = new GraceBlock(this, 185, 0);
        var string347 = new GraceString("patterns");
        block346.pattern = string347;
        block346.real = function() {
          sourceObject = this;
          var string348 = new GraceString(".patterns");
          onSelf = true;
          var call351 = callmethod(this, "sourceDir", [0]);
          var opresult353 = callmethod(call351, "++", [1], var_modnamev);
          var opresult355 = callmethod(opresult353, "++", [1], string348);
          var string356 = new GraceString("w");
          var call357 = callmethod(var_io,"open", [2], opresult355, string356);
          return call357;
        };
        cases273.push(block346);
        setLineNumber(186)    // compilenode block;
        var block358 = new GraceBlock(this, 186, 1);
        block358.real = function(var___95____95__1) {
          sourceObject = this;
          var call359 = callmethod(var_io,"output", [0]);
          return call359;
        };
        cases273.push(block358);
        var matchres273 = matchCase(var_targetv,cases273,false);
        setModuleName("util");
        var_outfilev = matchres273;
        if263 = matchres273;
      }
      var if360 = GraceDone;
      setLineNumber(188)    // compilenode identifier;
      var opresult363 = callmethod(var_gracelibPathv, "==", [1], GraceFalse);
      if (Grace_isTrue(opresult363)) {
        var if364 = GraceDone;
        setLineNumber(189)    // compilenode string;
        var string365 = new GraceString("/../lib/minigrace/gracelib.o");
        var call367 = callmethod(var_sys,"execPath", [0]);
        var opresult369 = callmethod(call367, "++", [1], string365);
        var call370 = callmethod(var_io,"exists", [1], opresult369);
        if (Grace_isTrue(call370)) {
          setLineNumber(190)    // compilenode string;
          var string371 = new GraceString("/../lib/minigrace");
          var call373 = callmethod(var_sys,"execPath", [0]);
          var opresult375 = callmethod(call373, "++", [1], string371);
          var_gracelibPathv = opresult375;
          if364 = opresult375;
        } else {
          setLineNumber(192)    // compilenode identifier;
          var call376 = callmethod(var_sys,"execPath", [0]);
          var_gracelibPathv = call376;
          if364 = call376;
        }
        if360 = if364;
      }
      var if377 = GraceDone;
      setLineNumber(195)    // compilenode identifier;
      var call378 = callmethod(var_io,"input", [0]);
      var opresult381 = callmethod(var_infilev, "==", [1], call378);
      if (Grace_isTrue(opresult381)) {
        var if382 = GraceDone;
        setLineNumber(196)    // compilenode identifier;
        var call383 = callmethod(var_infilev,"isatty", [0]);
        if (Grace_isTrue(call383)) {
          setLineNumber(198)    // compilenode identifier;
          var call384 = callmethod(var_buildinfo,"gitrevision", [0]);
          setLineNumber(197)    // compilenode string;
          var string386 = new GraceString(" / ");
          var call388 = callmethod(var_buildinfo,"gitgeneration", [0]);
          var string390 = new GraceString("minigrace ");
          var opresult392 = callmethod(string390, "++", [1], call388);
          var opresult394 = callmethod(opresult392, "++", [1], string386);
          var opresult396 = callmethod(opresult394, "++", [1], call384);
          var call397 = Grace_print(opresult396);
          setLineNumber(199)    // compilenode string;
          var string398 = new GraceString("Copyright \u00a9 2011-2015 rests with the authors.");
          var call399 = Grace_print(string398);
          setLineNumber(201)    // compilenode string;
          var string400 = new GraceString("Say minigrace.w for details.");
          setLineNumber(200)    // compilenode string;
          var string402 = new GraceString("This is free software with absolutely no warranty. ");
          var opresult404 = callmethod(string402, "++", [1], string400);
          var call405 = Grace_print(opresult404);
          setLineNumber(202)    // compilenode string;
          var string406 = new GraceString("");
          var call407 = Grace_print(string406);
          var if408 = GraceDone;
          setLineNumber(203)    // compilenode identifier;
          var call409 = callmethod(var_interactivev,"not", [0]);
          if (Grace_isTrue(call409)) {
            setLineNumber(204)    // compilenode string;
            var string410 = new GraceString("Enter a program and press Ctrl-D to execute it.");
            var call411 = Grace_print(string410);
            setLineNumber(205)    // compilenode string;
            var string412 = new GraceString("");
            var call413 = Grace_print(string412);
            if408 = call413;
          }
          if382 = if408;
        }
        if377 = if382;
      }
      return if377;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func0.paramCounts = [
      0,
  ];
  func0.variableArities = [
      false,
  ];
  this.methods["parseargs"] = func0;
  func0.definitionLine = 45;
  func0.definitionModule = "util";
  setLineNumber(214)    // compilenode method;
  var func414 = function(argcv) {    // method log_verbose(1)
    var curarg = 1;
    var var_s = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for log_verbose(1)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var if415 = GraceDone;
      setLineNumber(215)    // compilenode identifier;
      var opresult418 = callmethod(var_verbosityv, ">=", [1], new GraceNum(40));
      if (Grace_isTrue(opresult418)) {
        setLineNumber(216)    // compilenode string;
        var string419 = new GraceString("");
        var var_vtagw = string419;
        var if420 = GraceDone;
        setLineNumber(217)    // compilenode identifier;
        var opresult423 = callmethod(GraceFalse, "!=", [1], var_vtagv);
        if (Grace_isTrue(opresult423)) {
          setLineNumber(218)    // compilenode string;
          var string424 = new GraceString("]");
          var string427 = new GraceString("[");
          var opresult429 = callmethod(string427, "++", [1], var_vtagv);
          var opresult431 = callmethod(opresult429, "++", [1], string424);
          var_vtagw = opresult431;
          if420 = opresult431;
        }
        setLineNumber(220)    // compilenode identifier;
        var call434 = callmethod(var_sys,"cputime", [0]);
        var prod436 = callmethod(call434, "*", [1], new GraceNum(100));
        var call437 = callmethod(prod436,"rounded", [0]);
        var quotient439 = callmethod(call437, "/", [1], new GraceNum(100));
        var var_cpu = quotient439;
        setLineNumber(221)    // compilenode identifier;
        var call442 = callmethod(var_sys,"elapsed", [0]);
        var prod444 = callmethod(call442, "*", [1], new GraceNum(100));
        var call445 = callmethod(prod444,"rounded", [0]);
        var quotient447 = callmethod(call445, "/", [1], new GraceNum(100));
        var var_elapsed = quotient447;
        setLineNumber(223)    // compilenode string;
        var string448 = new GraceString("\n");
        var string451 = new GraceString("): ");
        var diff455 = callmethod(var_elapsed, "-", [1], var_previousElapsed);
        var string457 = new GraceString("/");
        var diff461 = callmethod(var_cpu, "-", [1], var_previousCPU);
        var string463 = new GraceString(" (+");
        var string466 = new GraceString("");
        var opresult468 = callmethod(string466, "++", [1], var_elapsed);
        var opresult470 = callmethod(opresult468, "++", [1], string463);
        var opresult472 = callmethod(opresult470, "++", [1], diff461);
        var opresult474 = callmethod(opresult472, "++", [1], string457);
        var opresult476 = callmethod(opresult474, "++", [1], diff455);
        var opresult478 = callmethod(opresult476, "++", [1], string451);
        var opresult480 = callmethod(opresult478, "++", [1], var_s);
        var opresult482 = callmethod(opresult480, "++", [1], string448);
        setLineNumber(222)    // compilenode string;
        var string484 = new GraceString("/");
        var string487 = new GraceString(": ");
        var string490 = new GraceString(": ");
        var string493 = new GraceString("minigrace");
        var opresult495 = callmethod(string493, "++", [1], var_vtagw);
        var opresult497 = callmethod(opresult495, "++", [1], string490);
        var opresult499 = callmethod(opresult497, "++", [1], var_modnamev);
        var opresult501 = callmethod(opresult499, "++", [1], string487);
        var opresult503 = callmethod(opresult501, "++", [1], var_cpu);
        var opresult505 = callmethod(opresult503, "++", [1], string484);
        var opresult507 = callmethod(opresult505, "++", [1], opresult482);
        var call508 = callmethod(var_io,"error", [0]);
        var call509 = callmethod(call508,"write", [1], opresult507);
        setLineNumber(224)    // compilenode identifier;
        var_previousElapsed = var_elapsed;
        setLineNumber(225)    // compilenode identifier;
        var_previousCPU = var_cpu;
        if415 = var_cpu;
      }
      return if415;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func414.paramCounts = [
      1,
  ];
  func414.variableArities = [
      false,
  ];
  this.methods["log_verbose"] = func414;
  func414.definitionLine = 214;
  func414.definitionModule = "util";
  setLineNumber(229)    // compilenode method;
  var func510 = function(argcv) {    // method outprint(1)
    var curarg = 1;
    var var_s = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for outprint(1)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      setLineNumber(230)    // compilenode identifier;
      var call511 = callmethod(var_outfilev,"write", [1], var_s);
      setLineNumber(231)    // compilenode string;
      var string512 = new GraceString("\n");
      var call513 = callmethod(var_outfilev,"write", [1], string512);
      return call513;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func510.paramCounts = [
      1,
  ];
  func510.variableArities = [
      false,
  ];
  this.methods["outprint"] = func510;
  func510.definitionLine = 229;
  func510.definitionModule = "util";
  setLineNumber(242)    // compilenode method;
  var func514 = function(argcv) {    // method syntaxError(6)
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
    if (argcv[0] != 6)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for syntaxError(6)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      setLineNumber(243)    // compilenode string;
      var string515 = new GraceString("");
      var string518 = new GraceString("Syntax error: ");
      var opresult520 = callmethod(string518, "++", [1], var_message);
      var opresult522 = callmethod(opresult520, "++", [1], string515);
      setLineNumber(244)    // compilenode identifier;
      onSelf = true;
      var call523 = callmethod(this, "generalError", [6], opresult522, var_errlinenum, var_position, var_arr, var_spacePos, var_suggestions);
      return call523;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func514.paramCounts = [
      6,
  ];
  func514.variableArities = [
      false,
  ];
  this.methods["syntaxError"] = func514;
  func514.definitionLine = 242;
  func514.definitionModule = "util";
  setLineNumber(247)    // compilenode method;
  var func524 = function(argcv) {    // method generalError(6)
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
    if (argcv[0] != 6)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for generalError(6)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var if525 = GraceDone;
      setLineNumber(248)    // compilenode identifier;
      if (Grace_isTrue(var_vtagv)) {
        setLineNumber(249)    // compilenode string;
        var string526 = new GraceString("]");
        var string529 = new GraceString("[");
        var opresult531 = callmethod(string529, "++", [1], var_vtagv);
        var opresult533 = callmethod(opresult531, "++", [1], string526);
        var call534 = callmethod(var_io,"error", [0]);
        var call535 = callmethod(call534,"write", [1], opresult533);
        if525 = call535;
      }
      setLineNumber(251)    // compilenode string;
      var string536 = new GraceString("\n");
      var string539 = new GraceString("]: ");
      var string542 = new GraceString("");
      var string545 = new GraceString(".grace[");
      var string548 = new GraceString("");
      var opresult550 = callmethod(string548, "++", [1], var_modnamev);
      var opresult552 = callmethod(opresult550, "++", [1], string545);
      var opresult554 = callmethod(opresult552, "++", [1], var_errlinenum);
      var opresult556 = callmethod(opresult554, "++", [1], string542);
      var opresult558 = callmethod(opresult556, "++", [1], var_position);
      var opresult560 = callmethod(opresult558, "++", [1], string539);
      var opresult562 = callmethod(opresult560, "++", [1], var_message);
      var opresult564 = callmethod(opresult562, "++", [1], string536);
      var call565 = callmethod(var_io,"error", [0]);
      var call566 = callmethod(call565,"write", [1], opresult564);
      var if567 = GraceDone;
      setLineNumber(252)    // compilenode identifier;
      var call569 = callmethod(var_lines,"size", [0]);
      var opresult571 = callmethod(call569, ">", [1], new GraceNum(1));
      var opresult575 = callmethod(var_errlinenum, ">", [1], new GraceNum(1));
      var opresult577 = callmethod(opresult575, "&&", [1], opresult571);
      if (Grace_isTrue(opresult577)) {
        setLineNumber(253)    // compilenode string;
        var string578 = new GraceString("\n");
        var diff582 = callmethod(var_errlinenum, "-", [1], new GraceNum(1));
        var call583 = callmethod(var_lines,"at", [1], diff582);
        var string585 = new GraceString(": ");
        var diff589 = callmethod(var_errlinenum, "-", [1], new GraceNum(1));
        var string591 = new GraceString("  ");
        var opresult593 = callmethod(string591, "++", [1], diff589);
        var opresult595 = callmethod(opresult593, "++", [1], string585);
        var opresult597 = callmethod(opresult595, "++", [1], call583);
        var opresult599 = callmethod(opresult597, "++", [1], string578);
        var call600 = callmethod(var_io,"error", [0]);
        var call601 = callmethod(call600,"write", [1], opresult599);
        if567 = call601;
      }
      var if602 = GraceDone;
      setLineNumber(255)    // compilenode identifier;
      var opresult605 = callmethod(var_errlinenum, ">", [1], new GraceNum(0));
      var call608 = callmethod(var_lines,"size", [0]);
      var opresult610 = callmethod(call608, ">=", [1], var_errlinenum);
      var opresult612 = callmethod(opresult610, "&&", [1], opresult605);
      if (Grace_isTrue(opresult612)) {
        setLineNumber(256)    // compilenode identifier;
        var call613 = callmethod(var_lines,"at", [1], var_errlinenum);
        var var_line = call613;
        var if614 = GraceDone;
        setLineNumber(257)    // compilenode identifier;
        var opresult617 = callmethod(var_spacePos, "!=", [1], GraceFalse);
        if (Grace_isTrue(opresult617)) {
          setLineNumber(258)    // compilenode string;
          var string618 = new GraceString("\n");
          var call620 = callmethod(var_line,"size", [0]);
          var call621 = callmethod(var_line,"substringFrom()to", [1, 1], var_spacePos, call620);
          var string623 = new GraceString(" ");
          var diff627 = callmethod(var_spacePos, "-", [1], new GraceNum(1));
          var call628 = callmethod(var_line,"substringFrom()to", [1, 1], new GraceNum(1), diff627);
          var string630 = new GraceString(": ");
          var string633 = new GraceString("  ");
          var opresult635 = callmethod(string633, "++", [1], var_errlinenum);
          var opresult637 = callmethod(opresult635, "++", [1], string630);
          var opresult639 = callmethod(opresult637, "++", [1], call628);
          var opresult641 = callmethod(opresult639, "++", [1], string623);
          var opresult643 = callmethod(opresult641, "++", [1], call621);
          var opresult645 = callmethod(opresult643, "++", [1], string618);
          var call646 = callmethod(var_io,"error", [0]);
          var call647 = callmethod(call646,"write", [1], opresult645);
          if614 = call647;
        } else {
          setLineNumber(260)    // compilenode string;
          var string648 = new GraceString("\n");
          var string651 = new GraceString(": ");
          var string654 = new GraceString("  ");
          var opresult656 = callmethod(string654, "++", [1], var_errlinenum);
          var opresult658 = callmethod(opresult656, "++", [1], string651);
          var opresult660 = callmethod(opresult658, "++", [1], var_line);
          var opresult662 = callmethod(opresult660, "++", [1], string648);
          var call663 = callmethod(var_io,"error", [0]);
          var call664 = callmethod(call663,"write", [1], opresult662);
          if614 = call664;
        }
        setLineNumber(262)    // compilenode string;
        var string665 = new GraceString("\n");
        var string668 = new GraceString("");
        var opresult670 = callmethod(string668, "++", [1], var_arr);
        var opresult672 = callmethod(opresult670, "++", [1], string665);
        var call673 = callmethod(var_io,"error", [0]);
        var call674 = callmethod(call673,"write", [1], opresult672);
        if602 = call674;
      }
      var if675 = GraceDone;
      setLineNumber(264)    // compilenode identifier;
      var call677 = callmethod(var_suggestions,"size", [0]);
      var opresult679 = callmethod(call677, ">", [1], new GraceNum(0));
      if (Grace_isTrue(opresult679)) {
        setLineNumber(265)    // compilenode block;
        var block680 = new GraceBlock(this, 265, 1);
        block680.real = function(var_s) {
          sourceObject = this;
          setLineNumber(266)    // compilenode string;
          var string681 = new GraceString("\nDid you mean:\n");
          var call682 = callmethod(var_io,"error", [0]);
          var call683 = callmethod(call682,"write", [1], string681);
          setLineNumber(267)    // compilenode identifier;
          var call684 = callmethod(var_s,"print", [0]);
          return call684;
        };
        var call685 = callmethod(Grace_prelude, "for()do", [1, 1], var_suggestions, block680);
        if675 = call685;
      }
      var if686 = GraceDone;
      setLineNumber(270)    // compilenode identifier;
      var call687 = callmethod(var_interactivev,"not", [0]);
      if (Grace_isTrue(call687)) {
        setLineNumber(271)    // compilenode identifier;
        var call688 = callmethod(var_sys,"exit", [1], new GraceNum(2));
        if686 = call688;
      } else {
        setLineNumber(273)    // compilenode num;
        var_errno = new GraceNum(2);
        if686 = new GraceNum(2);
      }
      return if686;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func524.paramCounts = [
      6,
  ];
  func524.variableArities = [
      false,
  ];
  this.methods["generalError"] = func524;
  func524.definitionLine = 247;
  func524.definitionModule = "util";
  setLineNumber(277)    // compilenode method;
  var func689 = function(argcv) {    // method type_error(1)
    var curarg = 1;
    var var_s = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for type_error(1)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var if690 = GraceDone;
      setLineNumber(278)    // compilenode string;
      var string691 = new GraceString("IgnoreTypes");
      var call692 = callmethod(var_extensionsv,"contains", [1], string691);
      if (Grace_isTrue(call692)) {
        setLineNumber(279)    // compilenode identifier;
          return GraceTrue
        if690 = undefined;
      }
      var if693 = GraceDone;
      setLineNumber(281)    // compilenode identifier;
      if (Grace_isTrue(var_vtagv)) {
        setLineNumber(282)    // compilenode string;
        var string694 = new GraceString("]");
        var string697 = new GraceString("[");
        var opresult699 = callmethod(string697, "++", [1], var_vtagv);
        var opresult701 = callmethod(opresult699, "++", [1], string694);
        var call702 = callmethod(var_io,"error", [0]);
        var call703 = callmethod(call702,"write", [1], opresult701);
        if693 = call703;
      }
      setLineNumber(284)    // compilenode string;
      var string704 = new GraceString("");
      var string707 = new GraceString(": Type error: ");
      var string710 = new GraceString(":");
      var string713 = new GraceString(".grace:");
      var string716 = new GraceString("");
      var opresult718 = callmethod(string716, "++", [1], var_modnamev);
      var opresult720 = callmethod(opresult718, "++", [1], string713);
      var opresult722 = callmethod(opresult720, "++", [1], var_linenumv);
      var opresult724 = callmethod(opresult722, "++", [1], string710);
      var opresult726 = callmethod(opresult724, "++", [1], var_lineposv);
      var opresult728 = callmethod(opresult726, "++", [1], string707);
      var opresult730 = callmethod(opresult728, "++", [1], var_s);
      var opresult732 = callmethod(opresult730, "++", [1], string704);
      var call733 = callmethod(var_io,"error", [0]);
      var call734 = callmethod(call733,"write", [1], opresult732);
      setLineNumber(285)    // compilenode string;
      var string735 = new GraceString("\n");
      var call736 = callmethod(var_io,"error", [0]);
      var call737 = callmethod(call736,"write", [1], string735);
      setLineNumber(286)    // compilenode string;
      var string738 = new GraceString("\n");
      var call740 = callmethod(var_lines,"at", [1], var_linenumv);
      var opresult742 = callmethod(call740, "++", [1], string738);
      var call743 = callmethod(var_io,"error", [0]);
      var call744 = callmethod(call743,"write", [1], opresult742);
      var if745 = GraceDone;
      setLineNumber(287)    // compilenode identifier;
      var call746 = callmethod(var_interactivev,"not", [0]);
      if (Grace_isTrue(call746)) {
        setLineNumber(288)    // compilenode identifier;
        var call747 = callmethod(var_sys,"exit", [1], new GraceNum(2));
        if745 = call747;
      } else {
        setLineNumber(290)    // compilenode num;
        var_errno = new GraceNum(2);
        if745 = new GraceNum(2);
      }
      return if745;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func689.paramCounts = [
      1,
  ];
  func689.variableArities = [
      false,
  ];
  this.methods["type_error"] = func689;
  func689.definitionLine = 277;
  func689.definitionModule = "util";
  setLineNumber(293)    // compilenode method;
  var func748 = function(argcv) {    // method semantic_error(1)
    var curarg = 1;
    var var_s = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for semantic_error(1)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var if749 = GraceDone;
      setLineNumber(294)    // compilenode identifier;
      if (Grace_isTrue(var_vtagv)) {
        setLineNumber(295)    // compilenode string;
        var string750 = new GraceString("]");
        var string753 = new GraceString("[");
        var opresult755 = callmethod(string753, "++", [1], var_vtagv);
        var opresult757 = callmethod(opresult755, "++", [1], string750);
        var call758 = callmethod(var_io,"error", [0]);
        var call759 = callmethod(call758,"write", [1], opresult757);
        if749 = call759;
      }
      setLineNumber(297)    // compilenode string;
      var string760 = new GraceString(": Semantic error");
      var string763 = new GraceString(":");
      var string766 = new GraceString(".grace:");
      var string769 = new GraceString("");
      var opresult771 = callmethod(string769, "++", [1], var_modnamev);
      var opresult773 = callmethod(opresult771, "++", [1], string766);
      var opresult775 = callmethod(opresult773, "++", [1], var_linenumv);
      var opresult777 = callmethod(opresult775, "++", [1], string763);
      var opresult779 = callmethod(opresult777, "++", [1], var_lineposv);
      var opresult781 = callmethod(opresult779, "++", [1], string760);
      var call782 = callmethod(var_io,"error", [0]);
      var call783 = callmethod(call782,"write", [1], opresult781);
      var if784 = GraceDone;
      setLineNumber(298)    // compilenode string;
      var string785 = new GraceString("");
      var opresult788 = callmethod(var_s, "==", [1], string785);
      if (Grace_isTrue(opresult788)) {
        setLineNumber(299)    // compilenode string;
        var string789 = new GraceString("\n");
        var call790 = callmethod(var_io,"error", [0]);
        var call791 = callmethod(call790,"write", [1], string789);
        var if792 = GraceDone;
        setLineNumber(300)    // compilenode identifier;
        var call793 = callmethod(var_interactivev,"prefix!", [0]);
        if (Grace_isTrue(call793)) {
          setLineNumber(301)    // compilenode identifier;
          var call794 = callmethod(var_sys,"exit", [1], new GraceNum(2));
          if792 = call794;
        }
        if784 = if792;
      }
      setLineNumber(304)    // compilenode string;
      var string795 = new GraceString("\n");
      var string798 = new GraceString(": ");
      var opresult800 = callmethod(string798, "++", [1], var_s);
      var opresult802 = callmethod(opresult800, "++", [1], string795);
      var call803 = callmethod(var_io,"error", [0]);
      var call804 = callmethod(call803,"write", [1], opresult802);
      var if805 = GraceDone;
      setLineNumber(305)    // compilenode identifier;
      var opresult808 = callmethod(var_linenumv, ">", [1], new GraceNum(1));
      if (Grace_isTrue(opresult808)) {
        var if809 = GraceDone;
        setLineNumber(306)    // compilenode identifier;
        var call811 = callmethod(var_lines,"size", [0]);
        var opresult813 = callmethod(call811, ">", [1], new GraceNum(0));
        if (Grace_isTrue(opresult813)) {
          setLineNumber(307)    // compilenode string;
          var string814 = new GraceString("\n");
          var diff818 = callmethod(var_linenumv, "-", [1], new GraceNum(1));
          var call819 = callmethod(var_lines,"at", [1], diff818);
          var string821 = new GraceString(": ");
          var diff825 = callmethod(var_linenumv, "-", [1], new GraceNum(1));
          var string827 = new GraceString("  ");
          var opresult829 = callmethod(string827, "++", [1], diff825);
          var opresult831 = callmethod(opresult829, "++", [1], string821);
          var opresult833 = callmethod(opresult831, "++", [1], call819);
          var opresult835 = callmethod(opresult833, "++", [1], string814);
          var call836 = callmethod(var_io,"error", [0]);
          var call837 = callmethod(call836,"write", [1], opresult835);
          if809 = call837;
        }
        if805 = if809;
      }
      setLineNumber(310)    // compilenode string;
      var string838 = new GraceString("----");
      var var_arr = string838;
      setLineNumber(311)    // compilenode identifier;
      var call839 = callmethod(var_linenumv,"asString", [0]);
      var call840 = callmethod(call839,"size", [0]);
      var opresult843 = callmethod(var_lineposv, "+", [1], call840);
      var opresult846 = callmethod(new GraceNum(2), "..", [1], opresult843);
      var block847 = new GraceBlock(this, 311, 1);
      block847.real = function(var___95____95__2) {
        sourceObject = this;
        setLineNumber(312)    // compilenode string;
        var string848 = new GraceString("-");
        var opresult851 = callmethod(var_arr, "++", [1], string848);
        var_arr = opresult851;
        return opresult851;
      };
      var call852 = callmethod(Grace_prelude, "for()do", [1, 1], opresult846, block847);
      var if853 = GraceDone;
      setLineNumber(314)    // compilenode identifier;
      var call855 = callmethod(var_lines,"size", [0]);
      var opresult857 = callmethod(call855, ">=", [1], var_linenumv);
      if (Grace_isTrue(opresult857)) {
        setLineNumber(315)    // compilenode string;
        var string858 = new GraceString("^\n");
        var string861 = new GraceString("\n");
        var call863 = callmethod(var_lines,"at", [1], var_linenumv);
        var string865 = new GraceString(": ");
        var string868 = new GraceString("  ");
        var opresult870 = callmethod(string868, "++", [1], var_linenumv);
        var opresult872 = callmethod(opresult870, "++", [1], string865);
        var opresult874 = callmethod(opresult872, "++", [1], call863);
        var opresult876 = callmethod(opresult874, "++", [1], string861);
        var opresult878 = callmethod(opresult876, "++", [1], var_arr);
        var opresult880 = callmethod(opresult878, "++", [1], string858);
        var call881 = callmethod(var_io,"error", [0]);
        var call882 = callmethod(call881,"write", [1], opresult880);
        if853 = call882;
      }
      var if883 = GraceDone;
      setLineNumber(317)    // compilenode identifier;
      var call884 = callmethod(var_lines,"size", [0]);
      var opresult887 = callmethod(var_linenumv, "<", [1], call884);
      if (Grace_isTrue(opresult887)) {
        setLineNumber(318)    // compilenode string;
        var string888 = new GraceString("\n");
        var opresult892 = callmethod(var_linenumv, "+", [1], new GraceNum(1));
        var call893 = callmethod(var_lines,"at", [1], opresult892);
        var string895 = new GraceString(": ");
        var opresult899 = callmethod(var_linenumv, "+", [1], new GraceNum(1));
        var string901 = new GraceString("  ");
        var opresult903 = callmethod(string901, "++", [1], opresult899);
        var opresult905 = callmethod(opresult903, "++", [1], string895);
        var opresult907 = callmethod(opresult905, "++", [1], call893);
        var opresult909 = callmethod(opresult907, "++", [1], string888);
        var call910 = callmethod(var_io,"error", [0]);
        var call911 = callmethod(call910,"write", [1], opresult909);
        if883 = call911;
      }
      var if912 = GraceDone;
      setLineNumber(320)    // compilenode identifier;
      var call913 = callmethod(var_interactivev,"not", [0]);
      if (Grace_isTrue(call913)) {
        setLineNumber(321)    // compilenode identifier;
        var call914 = callmethod(var_sys,"exit", [1], new GraceNum(2));
        if912 = call914;
      } else {
        setLineNumber(323)    // compilenode num;
        var_errno = new GraceNum(2);
        if912 = new GraceNum(2);
      }
      return if912;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func748.paramCounts = [
      1,
  ];
  func748.variableArities = [
      false,
  ];
  this.methods["semantic_error"] = func748;
  func748.definitionLine = 293;
  func748.definitionModule = "util";
  setLineNumber(326)    // compilenode method;
  var func915 = function(argcv) {    // method warning(1)
    var curarg = 1;
    var var_s = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for warning(1)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      setLineNumber(327)    // compilenode string;
      var string916 = new GraceString("");
      var string919 = new GraceString(": warning: ");
      var string922 = new GraceString(":");
      var string925 = new GraceString(".grace:");
      var string928 = new GraceString("");
      var opresult930 = callmethod(string928, "++", [1], var_modnamev);
      var opresult932 = callmethod(opresult930, "++", [1], string925);
      var opresult934 = callmethod(opresult932, "++", [1], var_linenumv);
      var opresult936 = callmethod(opresult934, "++", [1], string922);
      var opresult938 = callmethod(opresult936, "++", [1], var_lineposv);
      var opresult940 = callmethod(opresult938, "++", [1], string919);
      var opresult942 = callmethod(opresult940, "++", [1], var_s);
      var opresult944 = callmethod(opresult942, "++", [1], string916);
      var call945 = callmethod(var_io,"error", [0]);
      var call946 = callmethod(call945,"write", [1], opresult944);
      setLineNumber(328)    // compilenode string;
      var string947 = new GraceString("\n");
      var call948 = callmethod(var_io,"error", [0]);
      var call949 = callmethod(call948,"write", [1], string947);
      return call949;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func915.paramCounts = [
      1,
  ];
  func915.variableArities = [
      false,
  ];
  this.methods["warning"] = func915;
  func915.definitionLine = 326;
  func915.definitionModule = "util";
  setLineNumber(331)    // compilenode method;
  var func950 = function(argcv) {    // method verbosity
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for verbosity"));
    setModuleName("util");
    // verbosity is a simple accessor - elide try ... catch
    setLineNumber(332)    // compilenode identifier;
    return var_verbosityv;
  }
  func950.paramCounts = [
      0,
  ];
  func950.variableArities = [
      false,
  ];
  this.methods["verbosity"] = func950;
  func950.definitionLine = 331;
  func950.definitionModule = "util";
  setLineNumber(334)    // compilenode method;
  var func951 = function(argcv) {    // method outfile
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for outfile"));
    setModuleName("util");
    // outfile is a simple accessor - elide try ... catch
    setLineNumber(335)    // compilenode identifier;
    return var_outfilev;
  }
  func951.paramCounts = [
      0,
  ];
  func951.variableArities = [
      false,
  ];
  this.methods["outfile"] = func951;
  func951.definitionLine = 334;
  func951.definitionModule = "util";
  setLineNumber(337)    // compilenode method;
  var func952 = function(argcv) {    // method infile
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for infile"));
    setModuleName("util");
    // infile is a simple accessor - elide try ... catch
    setLineNumber(338)    // compilenode identifier;
    return var_infilev;
  }
  func952.paramCounts = [
      0,
  ];
  func952.variableArities = [
      false,
  ];
  this.methods["infile"] = func952;
  func952.definitionLine = 337;
  func952.definitionModule = "util";
  setLineNumber(340)    // compilenode method;
  var func953 = function(argcv) {    // method modname
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for modname"));
    setModuleName("util");
    // modname is a simple accessor - elide try ... catch
    setLineNumber(341)    // compilenode identifier;
    return var_modnamev;
  }
  func953.paramCounts = [
      0,
  ];
  func953.variableArities = [
      false,
  ];
  this.methods["modname"] = func953;
  func953.definitionLine = 340;
  func953.definitionModule = "util";
  setLineNumber(343)    // compilenode method;
  var func954 = function(argcv) {    // method runmode
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for runmode"));
    setModuleName("util");
    // runmode is a simple accessor - elide try ... catch
    setLineNumber(344)    // compilenode identifier;
    return var_runmodev;
  }
  func954.paramCounts = [
      0,
  ];
  func954.variableArities = [
      false,
  ];
  this.methods["runmode"] = func954;
  func954.definitionLine = 343;
  func954.definitionModule = "util";
  setLineNumber(346)    // compilenode method;
  var func955 = function(argcv) {    // method buildtype
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for buildtype"));
    setModuleName("util");
    // buildtype is a simple accessor - elide try ... catch
    setLineNumber(347)    // compilenode identifier;
    return var_buildtypev;
  }
  func955.paramCounts = [
      0,
  ];
  func955.variableArities = [
      false,
  ];
  this.methods["buildtype"] = func955;
  func955.definitionLine = 346;
  func955.definitionModule = "util";
  setLineNumber(349)    // compilenode method;
  var func956 = function(argcv) {    // method interactive
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for interactive"));
    setModuleName("util");
    // interactive is a simple accessor - elide try ... catch
    setLineNumber(350)    // compilenode identifier;
    return var_interactivev;
  }
  func956.paramCounts = [
      0,
  ];
  func956.variableArities = [
      false,
  ];
  this.methods["interactive"] = func956;
  func956.definitionLine = 349;
  func956.definitionModule = "util";
  setLineNumber(352)    // compilenode method;
  var func957 = function(argcv) {    // method gracelibPath
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for gracelibPath"));
    setModuleName("util");
    // gracelibPath is a simple accessor - elide try ... catch
    setLineNumber(353)    // compilenode identifier;
    return var_gracelibPathv;
  }
  func957.paramCounts = [
      0,
  ];
  func957.variableArities = [
      false,
  ];
  this.methods["gracelibPath"] = func957;
  func957.definitionLine = 352;
  func957.definitionModule = "util";
  setLineNumber(355)    // compilenode method;
  var func958 = function(argcv) {    // method setline(1)
    var curarg = 1;
    var var_l = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for setline(1)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      setLineNumber(356)    // compilenode identifier;
      var_linenumv = var_l;
      return var_l;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func958.paramCounts = [
      1,
  ];
  func958.variableArities = [
      false,
  ];
  this.methods["setline"] = func958;
  func958.definitionLine = 355;
  func958.definitionModule = "util";
  setLineNumber(358)    // compilenode method;
  var func959 = function(argcv) {    // method setPosition(2)
    var curarg = 1;
    var var_l = arguments[curarg];
    curarg++;
    var var_p = arguments[curarg];
    curarg++;
    if (argcv[0] != 2)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for setPosition(2)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      setLineNumber(359)    // compilenode identifier;
      var_linenumv = var_l;
      setLineNumber(360)    // compilenode identifier;
      var_lineposv = var_p;
      return var_p;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func959.paramCounts = [
      2,
  ];
  func959.variableArities = [
      false,
  ];
  this.methods["setPosition"] = func959;
  func959.definitionLine = 358;
  func959.definitionModule = "util";
  setLineNumber(362)    // compilenode method;
  var func960 = function(argcv) {    // method linenum
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for linenum"));
    setModuleName("util");
    // linenum is a simple accessor - elide try ... catch
    setLineNumber(363)    // compilenode identifier;
    return var_linenumv;
  }
  func960.paramCounts = [
      0,
  ];
  func960.variableArities = [
      false,
  ];
  this.methods["linenum"] = func960;
  func960.definitionLine = 362;
  func960.definitionModule = "util";
  setLineNumber(365)    // compilenode method;
  var func961 = function(argcv) {    // method linepos
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for linepos"));
    setModuleName("util");
    // linepos is a simple accessor - elide try ... catch
    setLineNumber(366)    // compilenode identifier;
    return var_lineposv;
  }
  func961.paramCounts = [
      0,
  ];
  func961.variableArities = [
      false,
  ];
  this.methods["linepos"] = func961;
  func961.definitionLine = 365;
  func961.definitionModule = "util";
  setLineNumber(368)    // compilenode method;
  var func962 = function(argcv) {    // method vtag
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for vtag"));
    setModuleName("util");
    // vtag is a simple accessor - elide try ... catch
    setLineNumber(369)    // compilenode identifier;
    return var_vtagv;
  }
  func962.paramCounts = [
      0,
  ];
  func962.variableArities = [
      false,
  ];
  this.methods["vtag"] = func962;
  func962.definitionLine = 368;
  func962.definitionModule = "util";
  setLineNumber(371)    // compilenode method;
  var func963 = function(argcv) {    // method noexec
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for noexec"));
    setModuleName("util");
    // noexec is a simple accessor - elide try ... catch
    setLineNumber(372)    // compilenode identifier;
    return var_noexecv;
  }
  func963.paramCounts = [
      0,
  ];
  func963.variableArities = [
      false,
  ];
  this.methods["noexec"] = func963;
  func963.definitionLine = 371;
  func963.definitionModule = "util";
  setLineNumber(374)    // compilenode method;
  var func964 = function(argcv) {    // method target
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for target"));
    setModuleName("util");
    // target is a simple accessor - elide try ... catch
    setLineNumber(375)    // compilenode identifier;
    return var_targetv;
  }
  func964.paramCounts = [
      0,
  ];
  func964.variableArities = [
      false,
  ];
  this.methods["target"] = func964;
  func964.definitionLine = 374;
  func964.definitionModule = "util";
  setLineNumber(377)    // compilenode method;
  var func965 = function(argcv) {    // method extensions
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for extensions"));
    setModuleName("util");
    // extensions is a simple accessor - elide try ... catch
    setLineNumber(378)    // compilenode identifier;
    return var_extensionsv;
  }
  func965.paramCounts = [
      0,
  ];
  func965.variableArities = [
      false,
  ];
  this.methods["extensions"] = func965;
  func965.definitionLine = 377;
  func965.definitionModule = "util";
  setLineNumber(380)    // compilenode method;
  var func966 = function(argcv) {    // method str(1)lastIndexOf(1)
    var curarg = 1;
    var var_s = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for str (arg list 1) of str(1)lastIndexOf(1)"));
    var var_ch = arguments[curarg];
    curarg++;
    if (argcv[1] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for lastIndexOf (arg list 2) of str(1)lastIndexOf(1)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      setLineNumber(381)    // compilenode identifier;
      var call967 = callmethod(var_s,"size", [0]);
      var var_ix = call967;
      setLineNumber(382)    // compilenode block;
      var block968 = new GraceBlock(this, 382, 0);
      block968.real = function() {
        sourceObject = this;
        var opresult971 = callmethod(var_ix, ">", [1], new GraceNum(0));
        return opresult971;
      };
      var block972 = new GraceBlock(this, 382, 0);
      block972.real = function() {
        sourceObject = this;
        var if973 = GraceDone;
        setLineNumber(383)    // compilenode identifier;
        var call975 = callmethod(var_s,"at", [1], var_ix);
        var opresult977 = callmethod(call975, "==", [1], var_ch);
        if (Grace_isTrue(opresult977)) {
          throw new ReturnException(var_ix, returnTarget);
          if973 = undefined;
        }
        setLineNumber(384)    // compilenode identifier;
        var diff980 = callmethod(var_ix, "-", [1], new GraceNum(1));
        var_ix = diff980;
        return diff980;
      };
      var call981 = callmethod(Grace_prelude, "while()do", [1, 1], block968, block972);
      setLineNumber(386)    // compilenode num;
        return new GraceNum(0)
      return undefined;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func966.paramCounts = [
      1,
      1,
  ];
  func966.variableArities = [
      false,
      false,
  ];
  this.methods["str()lastIndexOf"] = func966;
  func966.definitionLine = 380;
  func966.definitionModule = "util";
  setLineNumber(389)    // compilenode method;
  var func982 = function(argcv) {    // method sourceDir
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for sourceDir"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var if983 = GraceDone;
      setLineNumber(390)    // compilenode string;
      var string984 = new GraceString("");
      var opresult987 = callmethod(var_sourceDirCache, "==", [1], string984);
      if (Grace_isTrue(opresult987)) {
        setLineNumber(391)    // compilenode string;
        var string988 = new GraceString("/");
        onSelf = true;
        var call989 = callmethod(this, "str()lastIndexOf", [1, 1], var_filename, string988);
        var call990 = callmethod(var_filename,"substringFrom()to", [1, 1], new GraceNum(1), call989);
        var_sourceDirCache = call990;
        if983 = call990;
      }
      var if991 = GraceDone;
      setLineNumber(393)    // compilenode string;
      var string992 = new GraceString("");
      var opresult995 = callmethod(var_sourceDirCache, "==", [1], string992);
      if (Grace_isTrue(opresult995)) {
        var string996 = new GraceString("./");
        var_sourceDirCache = string996;
        if991 = string996;
      }
      setLineNumber(394)    // compilenode identifier;
      return var_sourceDirCache;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func982.paramCounts = [
      0,
  ];
  func982.variableArities = [
      false,
  ];
  this.methods["sourceDir"] = func982;
  func982.definitionLine = 389;
  func982.definitionModule = "util";
  setLineNumber(397)    // compilenode method;
  var func997 = function(argcv) {    // method execDir
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for execDir"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var if998 = GraceDone;
      setLineNumber(398)    // compilenode string;
      var string999 = new GraceString("");
      var opresult1002 = callmethod(var_execDirCache, "==", [1], string999);
      if (Grace_isTrue(opresult1002)) {
        setLineNumber(399)    // compilenode identifier;
        var call1003 = callmethod(var_sys,"execPath", [0]);
        var_execDirCache = call1003;
        var if1004 = GraceDone;
        setLineNumber(400)    // compilenode string;
        var string1005 = new GraceString("/");
        var call1007 = callmethod(var_execDirCache,"size", [0]);
        var call1008 = callmethod(var_execDirCache,"at", [1], call1007);
        var opresult1010 = callmethod(call1008, "!=", [1], string1005);
        if (Grace_isTrue(opresult1010)) {
          setLineNumber(401)    // compilenode string;
          var string1011 = new GraceString("/");
          var opresult1014 = callmethod(var_execDirCache, "++", [1], string1011);
          var_execDirCache = opresult1014;
          if1004 = opresult1014;
        }
        if998 = if1004;
      }
      setLineNumber(404)    // compilenode identifier;
      return var_execDirCache;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func997.paramCounts = [
      0,
  ];
  func997.variableArities = [
      false,
  ];
  this.methods["execDir"] = func997;
  func997.definitionLine = 397;
  func997.definitionModule = "util";
  setLineNumber(406)    // compilenode method;
  var func1015 = function(argcv) {    // method splitPath(1)
    var curarg = 1;
    var var_pathString = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for splitPath(1)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      setLineNumber(407)    // compilenode call;
      var call1016 = callmethod(Grace_prelude, "list", [0]);
      var call1017 = callmethod(call1016,"empty", [0]);
      var var_locations = call1017;
      setLineNumber(408)    // compilenode num;
      var var_ix = new GraceNum(1);
      setLineNumber(409)    // compilenode num;
      var var_ox = new GraceNum(1);
      setLineNumber(410)    // compilenode identifier;
      var call1018 = callmethod(var_pathString,"size", [0]);
      var var_pss = call1018;
      setLineNumber(411)    // compilenode block;
      var block1019 = new GraceBlock(this, 411, 0);
      block1019.real = function() {
        sourceObject = this;
        var opresult1022 = callmethod(var_ox, "<=", [1], var_pss);
        return opresult1022;
      };
      var block1023 = new GraceBlock(this, 411, 0);
      block1023.real = function() {
        sourceObject = this;
        setLineNumber(412)    // compilenode block;
        var block1024 = new GraceBlock(this, 412, 0);
        block1024.real = function() {
          sourceObject = this;
          var block1025 = new GraceBlock(this, 412, 0);
          block1025.real = function() {
            sourceObject = this;
            var string1026 = new GraceString(":");
            var call1028 = callmethod(var_pathString,"at", [1], var_ox);
            var opresult1030 = callmethod(call1028, "!=", [1], string1026);
            return opresult1030;
          };
          var opresult1033 = callmethod(var_ox, "<=", [1], var_pss);
          var call1034 = callmethod(opresult1033,"andAlso", [1], block1025);
          return call1034;
        };
        var block1035 = new GraceBlock(this, 412, 0);
        block1035.real = function() {
          sourceObject = this;
          setLineNumber(413)    // compilenode identifier;
          var opresult1038 = callmethod(var_ox, "+", [1], new GraceNum(1));
          var_ox = opresult1038;
          return opresult1038;
        };
        var call1039 = callmethod(Grace_prelude, "while()do", [1, 1], block1024, block1035);
        setLineNumber(415)    // compilenode identifier;
        var diff1042 = callmethod(var_ox, "-", [1], new GraceNum(1));
        var call1043 = callmethod(var_pathString,"substringFrom()to", [1, 1], var_ix, diff1042);
        var var_item = call1043;
        var if1044 = GraceDone;
        setLineNumber(416)    // compilenode string;
        var string1045 = new GraceString("/");
        var call1047 = callmethod(var_item,"size", [0]);
        var call1048 = callmethod(var_item,"at", [1], call1047);
        var opresult1050 = callmethod(call1048, "!=", [1], string1045);
        if (Grace_isTrue(opresult1050)) {
          var string1051 = new GraceString("/");
          var opresult1054 = callmethod(var_item, "++", [1], string1051);
          var_item = opresult1054;
          if1044 = opresult1054;
        }
        setLineNumber(417)    // compilenode identifier;
        var call1055 = callmethod(var_locations,"addLast", [1], var_item);
        setLineNumber(418)    // compilenode identifier;
        var opresult1058 = callmethod(var_ox, "+", [1], new GraceNum(1));
        var_ix = opresult1058;
        setLineNumber(419)    // compilenode identifier;
        var_ox = var_ix;
        return var_ix;
      };
      var call1059 = callmethod(Grace_prelude, "while()do", [1, 1], block1019, block1023);
      setLineNumber(421)    // compilenode identifier;
        return var_locations
      return undefined;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1015.paramCounts = [
      1,
  ];
  func1015.variableArities = [
      false,
  ];
  this.methods["splitPath"] = func1015;
  func1015.definitionLine = 406;
  func1015.definitionModule = "util";
  setLineNumber(423)    // compilenode method;
  var func1060 = function(argcv) {    // method file(1)on(1)orPath(1)otherwise(1)
    var curarg = 1;
    var var_name = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for file (arg list 1) of file(1)on(1)orPath(1)otherwise(1)"));
    var var_origin = arguments[curarg];
    curarg++;
    if (argcv[1] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for on (arg list 2) of file(1)on(1)orPath(1)otherwise(1)"));
    var var_pathString = arguments[curarg];
    curarg++;
    if (argcv[2] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for orPath (arg list 3) of file(1)on(1)orPath(1)otherwise(1)"));
    var var_action = arguments[curarg];
    curarg++;
    if (argcv[3] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for otherwise (arg list 4) of file(1)on(1)orPath(1)otherwise(1)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      setLineNumber(424)    // compilenode identifier;
      onSelf = true;
      var call1061 = callmethod(this, "splitPath", [1], var_pathString);
      var var_locations = call1061;
      setLineNumber(425)    // compilenode identifier;
      var call1062 = callmethod(var_locations,"addFirst", [1], var_origin);
      setLineNumber(426)    // compilenode string;
      var string1063 = new GraceString("./");
      var call1064 = callmethod(var_locations,"addFirst", [1], string1063);
      setLineNumber(427)    // compilenode call;
      onSelf = true;
      var call1065 = callmethod(this, "execDir", [0]);
      var call1066 = callmethod(var_locations,"addLast", [1], call1065);
      setLineNumber(429)    // compilenode block;
      var block1067 = new GraceBlock(this, 429, 1);
      block1067.real = function(var_each) {
        sourceObject = this;
        setLineNumber(430)    // compilenode identifier;
        var opresult1070 = callmethod(var_each, "++", [1], var_name);
        var var_candidate = opresult1070;
        var if1071 = GraceDone;
        setLineNumber(431)    // compilenode identifier;
        var call1072 = callmethod(var_io,"exists", [1], var_candidate);
        if (Grace_isTrue(call1072)) {
          setLineNumber(432)    // compilenode identifier;
          throw new ReturnException(var_candidate, returnTarget);
          if1071 = undefined;
        }
        return if1071;
      };
      setLineNumber(429)    // compilenode identifier;
      var call1073 = callmethod(var_locations,"do", [1], block1067);
      setLineNumber(435)    // compilenode identifier;
      var call1074 = callmethod(var_action,"apply", [1], var_locations);
      return call1074;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1060.paramCounts = [
      1,
      1,
      1,
      1,
  ];
  func1060.variableArities = [
      false,
      false,
      false,
      false,
  ];
  this.methods["file()on()orPath()otherwise"] = func1060;
  func1060.definitionLine = 423;
  func1060.definitionModule = "util";
  setLineNumber(437)    // compilenode method;
  var func1075 = function(argcv) {    // method file(1)onPath(1)otherwise(1)
    var curarg = 1;
    var var_name = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for file (arg list 1) of file(1)onPath(1)otherwise(1)"));
    var var_pathString = arguments[curarg];
    curarg++;
    if (argcv[1] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for onPath (arg list 2) of file(1)onPath(1)otherwise(1)"));
    var var_action = arguments[curarg];
    curarg++;
    if (argcv[2] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for otherwise (arg list 3) of file(1)onPath(1)otherwise(1)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      setLineNumber(438)    // compilenode call;
      onSelf = true;
      var call1076 = callmethod(this, "sourceDir", [0]);
      onSelf = true;
      var call1077 = callmethod(this, "file()on()orPath()otherwise", [1, 1, 1, 1], var_name, call1076, var_pathString, var_action);
      return call1077;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1075.paramCounts = [
      1,
      1,
      1,
  ];
  func1075.variableArities = [
      false,
      false,
      false,
  ];
  this.methods["file()onPath()otherwise"] = func1075;
  func1075.definitionLine = 437;
  func1075.definitionModule = "util";
  setLineNumber(441)    // compilenode method;
  var func1078 = function(argcv) {    // method processExtension(1)
    var curarg = 1;
    var var_ext = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for processExtension(1)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      setLineNumber(442)    // compilenode string;
      var string1079 = new GraceString("");
      var var_extn = string1079;
      setLineNumber(443)    // compilenode identifier;
      var var_extv = GraceTrue;
      setLineNumber(444)    // compilenode identifier;
      var var_seeneq = GraceFalse;
      setLineNumber(445)    // compilenode block;
      var block1080 = new GraceBlock(this, 445, 1);
      block1080.real = function(var_c) {
        sourceObject = this;
        var if1081 = GraceDone;
        setLineNumber(446)    // compilenode string;
        var string1082 = new GraceString("=");
        var opresult1085 = callmethod(var_c, "==", [1], string1082);
        if (Grace_isTrue(opresult1085)) {
          setLineNumber(447)    // compilenode identifier;
          var_seeneq = GraceTrue;
          setLineNumber(448)    // compilenode string;
          var string1086 = new GraceString("");
          var_extv = string1086;
          if1081 = string1086;
        } else {
          var if1087 = GraceDone;
          setLineNumber(450)    // compilenode identifier;
          var call1088 = callmethod(var_seeneq,"prefix!", [0]);
          if (Grace_isTrue(call1088)) {
            setLineNumber(451)    // compilenode identifier;
            var opresult1091 = callmethod(var_extn, "++", [1], var_c);
            var_extn = opresult1091;
            if1087 = opresult1091;
          } else {
            setLineNumber(453)    // compilenode identifier;
            var opresult1094 = callmethod(var_extv, "++", [1], var_c);
            var_extv = opresult1094;
            if1087 = opresult1094;
          }
          if1081 = if1087;
        }
        return if1081;
      };
      var call1095 = callmethod(Grace_prelude, "for()do", [1, 1], var_ext, block1080);
      setLineNumber(457)    // compilenode identifier;
      var call1096 = callmethod(var_extensionsv,"put", [2], var_extn, var_extv);
      return call1096;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1078.paramCounts = [
      1,
  ];
  func1078.variableArities = [
      false,
  ];
  this.methods["processExtension"] = func1078;
  func1078.definitionLine = 441;
  func1078.definitionModule = "util";
  setLineNumber(459)    // compilenode method;
  var func1097 = function(argcv) {    // method printhelp
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for printhelp"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      setLineNumber(460)    // compilenode string;
      var string1098 = new GraceString(" [OPTION]... [FILE]");
      var call1100 = callmethod(var_sys,"argv", [0]);
      var call1101 = callmethod(call1100,"at", [1], new GraceNum(1));
      var string1103 = new GraceString("Usage: ");
      var opresult1105 = callmethod(string1103, "++", [1], call1101);
      var opresult1107 = callmethod(opresult1105, "++", [1], string1098);
      var call1108 = Grace_print(opresult1107);
      setLineNumber(461)    // compilenode string;
      var string1109 = new GraceString("Compile, process, or run a Grace source file or standard input.");
      var call1110 = Grace_print(string1109);
      setLineNumber(462)    // compilenode string;
      var string1111 = new GraceString("");
      var call1112 = Grace_print(string1111);
      setLineNumber(463)    // compilenode string;
      var string1113 = new GraceString("Modes:");
      var call1114 = Grace_print(string1113);
      setLineNumber(464)    // compilenode string;
      var string1115 = new GraceString("  --make           Compile FILE and link, creating a native executable");
      var call1116 = Grace_print(string1115);
      setLineNumber(465)    // compilenode string;
      var string1117 = new GraceString("  --run            Compile FILE and execute the program [default]");
      var call1118 = Grace_print(string1117);
      setLineNumber(466)    // compilenode string;
      var string1119 = new GraceString("  --source         Compile FILE to C source, but no further");
      var call1120 = Grace_print(string1119);
      setLineNumber(467)    // compilenode string;
      var string1121 = new GraceString("  --noexec         Compile FILE to native object code, but don't create executable");
      var call1122 = Grace_print(string1121);
      setLineNumber(468)    // compilenode string;
      var string1123 = new GraceString("  --dynamic-module Compile FILE as a dynamic module");
      var call1124 = Grace_print(string1123);
      setLineNumber(469)    // compilenode string;
      var string1125 = new GraceString("  --interactive    Launch interactive read-eval-print interpreter");
      var call1126 = Grace_print(string1125);
      setLineNumber(470)    // compilenode string;
      var string1127 = new GraceString("");
      var call1128 = Grace_print(string1127);
      setLineNumber(471)    // compilenode string;
      var string1129 = new GraceString("Options:");
      var call1130 = Grace_print(string1129);
      setLineNumber(472)    // compilenode string;
      var string1131 = new GraceString("  --verbose        Give more detailed output");
      var call1132 = Grace_print(string1131);
      setLineNumber(473)    // compilenode string;
      var string1133 = new GraceString("  --target TGT     Choose a non-default compilation target TGT");
      var call1134 = Grace_print(string1133);
      setLineNumber(474)    // compilenode string;
      var string1135 = new GraceString("                   Use --target help to list supported targets.");
      var call1136 = Grace_print(string1135);
      setLineNumber(475)    // compilenode string;
      var string1137 = new GraceString("  -o OFILE         Output to OFILE instead of default");
      var call1138 = Grace_print(string1137);
      setLineNumber(476)    // compilenode string;
      var string1139 = new GraceString("  -j N             Spawn at most N concurrent subprocesses");
      var call1140 = Grace_print(string1139);
      setLineNumber(477)    // compilenode string;
      var string1141 = new GraceString("  --help           This text");
      var call1142 = Grace_print(string1141);
      setLineNumber(478)    // compilenode string;
      var string1143 = new GraceString("  --module         Override default module name (derived from FILE)");
      var call1144 = Grace_print(string1143);
      setLineNumber(479)    // compilenode string;
      var string1145 = new GraceString("  --no-recurse     Do not compile imported modules");
      var call1146 = Grace_print(string1145);
      setLineNumber(480)    // compilenode string;
      var string1147 = new GraceString("  --stdout         Output to standard output rather than a file");
      var call1148 = Grace_print(string1147);
      setLineNumber(481)    // compilenode string;
      var string1149 = new GraceString("  --version        Print version information");
      var call1150 = Grace_print(string1149);
      setLineNumber(482)    // compilenode string;
      var string1151 = new GraceString("");
      var call1152 = Grace_print(string1151);
      setLineNumber(483)    // compilenode string;
      var string1153 = new GraceString(" FILE will compile and execute FILE.");
      var call1155 = callmethod(var_sys,"argv", [0]);
      var call1156 = callmethod(call1155,"at", [1], new GraceNum(1));
      var string1158 = new GraceString("By default, ");
      var opresult1160 = callmethod(string1158, "++", [1], call1156);
      var opresult1162 = callmethod(opresult1160, "++", [1], string1153);
      var call1163 = Grace_print(opresult1162);
      setLineNumber(484)    // compilenode string;
      var string1164 = new GraceString("More detailed usage information is in the <doc/usage> file in the source tree.");
      var call1165 = Grace_print(string1164);
      setLineNumber(485)    // compilenode identifier;
      var call1166 = callmethod(var_sys,"exit", [1], new GraceNum(0));
      return call1166;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1097.paramCounts = [
      0,
  ];
  func1097.variableArities = [
      false,
  ];
  this.methods["printhelp"] = func1097;
  func1097.definitionLine = 459;
  func1097.definitionModule = "util";
  setLineNumber(487)    // compilenode method;
  var func1167 = function(argcv) {    // method debug(1)
    var curarg = 1;
    var var_s = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for debug(1)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      return GraceDone;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1167.paramCounts = [
      1,
  ];
  func1167.variableArities = [
      false,
  ];
  this.methods["debug"] = func1167;
  func1167.definitionLine = 487;
  func1167.definitionModule = "util";
  setLineNumber(491)    // compilenode method;
  var func1168 = function(argcv) {    // method hex(1)
    var curarg = 1;
    var var_num = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for hex(1)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      setLineNumber(492)    // compilenode identifier;
      var var_tmp = var_num;
      setLineNumber(493)    // compilenode string;
      var string1169 = new GraceString("");
      var var_s = string1169;
      setLineNumber(494)    // compilenode block;
      var block1170 = new GraceBlock(this, 494, 0);
      block1170.real = function() {
        sourceObject = this;
        var opresult1173 = callmethod(var_tmp, ">", [1], new GraceNum(0));
        return opresult1173;
      };
      var block1174 = new GraceBlock(this, 494, 0);
      block1174.real = function() {
        sourceObject = this;
        setLineNumber(495)    // compilenode identifier;
        var modulus1177 = callmethod(var_tmp, "%", [1], new GraceNum(16));
        var var_i = modulus1177;
        setLineNumber(496)    // compilenode identifier;
        var opresult1181 = callmethod(var_i, "+", [1], new GraceNum(1));
        var call1182 = callmethod(var_hexdigits,"at", [1], opresult1181);
        var opresult1184 = callmethod(call1182, "++", [1], var_s);
        var_s = opresult1184;
        setLineNumber(497)    // compilenode identifier;
        var diff1187 = callmethod(var_tmp, "-", [1], var_i);
        var_tmp = diff1187;
        setLineNumber(498)    // compilenode identifier;
        var quotient1190 = callmethod(var_tmp, "/", [1], new GraceNum(16));
        var_tmp = quotient1190;
        return quotient1190;
      };
      var call1191 = callmethod(Grace_prelude, "while()do", [1, 1], block1170, block1174);
      setLineNumber(500)    // compilenode identifier;
      return var_s;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1168.paramCounts = [
      1,
  ];
  func1168.variableArities = [
      false,
  ];
  this.methods["hex"] = func1168;
  func1168.definitionLine = 491;
  func1168.definitionModule = "util";
  setLineNumber(1)    // compilenode import;
  // Import of io as io
  if (typeof gracecode_io == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module io'));
  var var_io = do_import("io", gracecode_io);
  var func1192 = function(argcv) {    // method io
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for io"));
    setModuleName("util");
    // io is a simple accessor - elide try ... catch
    return var_io;
  }
  func1192.paramCounts = [
      0,
  ];
  func1192.variableArities = [
      false,
  ];
  this.methods["io"] = func1192;
  func1192.definitionLine = 1;
  func1192.definitionModule = "util";
  func1192.debug = "import";
  func1192.confidential = true;
  setModuleName("util");
  setLineNumber(2)    // compilenode import;
  // Import of sys as sys
  if (typeof gracecode_sys == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module sys'));
  var var_sys = do_import("sys", gracecode_sys);
  var func1193 = function(argcv) {    // method sys
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for sys"));
    setModuleName("util");
    // sys is a simple accessor - elide try ... catch
    return var_sys;
  }
  func1193.paramCounts = [
      0,
  ];
  func1193.variableArities = [
      false,
  ];
  this.methods["sys"] = func1193;
  func1193.definitionLine = 2;
  func1193.definitionModule = "util";
  func1193.debug = "import";
  func1193.confidential = true;
  setModuleName("util");
  setLineNumber(3)    // compilenode import;
  // Import of buildinfo as buildinfo
  if (typeof gracecode_buildinfo == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module buildinfo'));
  var var_buildinfo = do_import("buildinfo", gracecode_buildinfo);
  var func1194 = function(argcv) {    // method buildinfo
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for buildinfo"));
    setModuleName("util");
    // buildinfo is a simple accessor - elide try ... catch
    return var_buildinfo;
  }
  func1194.paramCounts = [
      0,
  ];
  func1194.variableArities = [
      false,
  ];
  this.methods["buildinfo"] = func1194;
  func1194.definitionLine = 3;
  func1194.definitionModule = "util";
  func1194.debug = "import";
  func1194.confidential = true;
  setModuleName("util");
  setLineNumber(4)    // compilenode import;
  // Import of mgcollections as mgcollections
  if (typeof gracecode_mgcollections == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module mgcollections'));
  var var_mgcollections = do_import("mgcollections", gracecode_mgcollections);
  var func1195 = function(argcv) {    // method mgcollections
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for mgcollections"));
    setModuleName("util");
    // mgcollections is a simple accessor - elide try ... catch
    return var_mgcollections;
  }
  func1195.paramCounts = [
      0,
  ];
  func1195.variableArities = [
      false,
  ];
  this.methods["mgcollections"] = func1195;
  func1195.definitionLine = 4;
  func1195.definitionModule = "util";
  func1195.debug = "import";
  func1195.confidential = true;
  setModuleName("util");
  setLineNumber(6)    // compilenode num;
  var var_verbosityv = new GraceNum(30);
  setLineNumber(483)    // compilenode method;
  var func1196 = function(argcv) {    // method verbosityv
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for verbosityv"));
    setModuleName("util");
    // verbosityv is a simple accessor - elide try ... catch
    setLineNumber(6)    // compilenode identifier;
    return var_verbosityv;
  }
  func1196.paramCounts = [
      0,
  ];
  func1196.variableArities = [
      false,
  ];
  this.methods["verbosityv"] = func1196;
  func1196.definitionLine = 483;
  func1196.definitionModule = "util";
  setLineNumber(483)    // compilenode method;
  var func1197 = function(argcv) {    // method verbosityv:=(1)
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for verbosityv:=(1)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var_verbosityv = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1197.paramCounts = [
      1,
  ];
  func1197.variableArities = [
      false,
  ];
  this.methods["verbosityv:="] = func1197;
  func1197.definitionLine = 483;
  func1197.definitionModule = "util";
  this.methods["verbosityv"].debug = "var";
  setLineNumber(7)    // compilenode identifier;
  var call1198 = callmethod(var_io,"output", [0]);
  var var_outfilev = call1198;
  var func1199 = function(argcv) {    // method outfilev
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for outfilev"));
    setModuleName("util");
    // outfilev is a simple accessor - elide try ... catch
    return var_outfilev;
  }
  func1199.paramCounts = [
      0,
  ];
  func1199.variableArities = [
      false,
  ];
  this.methods["outfilev"] = func1199;
  func1199.definitionLine = 7;
  func1199.definitionModule = "util";
  var func1200 = function(argcv) {    // method outfilev:=(1)
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for outfilev:=(1)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var_outfilev = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1200.paramCounts = [
      1,
  ];
  func1200.variableArities = [
      false,
  ];
  this.methods["outfilev:="] = func1200;
  func1200.definitionLine = 7;
  func1200.definitionModule = "util";
  this.methods["outfilev"].debug = "var";
  setLineNumber(8)    // compilenode identifier;
  var call1201 = callmethod(var_io,"input", [0]);
  var var_infilev = call1201;
  var func1202 = function(argcv) {    // method infilev
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for infilev"));
    setModuleName("util");
    // infilev is a simple accessor - elide try ... catch
    return var_infilev;
  }
  func1202.paramCounts = [
      0,
  ];
  func1202.variableArities = [
      false,
  ];
  this.methods["infilev"] = func1202;
  func1202.definitionLine = 8;
  func1202.definitionModule = "util";
  var func1203 = function(argcv) {    // method infilev:=(1)
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for infilev:=(1)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var_infilev = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1203.paramCounts = [
      1,
  ];
  func1203.variableArities = [
      false,
  ];
  this.methods["infilev:="] = func1203;
  func1203.definitionLine = 8;
  func1203.definitionModule = "util";
  this.methods["infilev"].debug = "var";
  setLineNumber(9)    // compilenode string;
  var string1204 = new GraceString("standardInput");
  var var_modnamev = string1204;
  setLineNumber(8)    // compilenode method;
  var func1205 = function(argcv) {    // method modnamev
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for modnamev"));
    setModuleName("util");
    // modnamev is a simple accessor - elide try ... catch
    setLineNumber(9)    // compilenode identifier;
    return var_modnamev;
  }
  func1205.paramCounts = [
      0,
  ];
  func1205.variableArities = [
      false,
  ];
  this.methods["modnamev"] = func1205;
  func1205.definitionLine = 8;
  func1205.definitionModule = "util";
  setLineNumber(8)    // compilenode method;
  var func1206 = function(argcv) {    // method modnamev:=(1)
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for modnamev:=(1)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var_modnamev = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1206.paramCounts = [
      1,
  ];
  func1206.variableArities = [
      false,
  ];
  this.methods["modnamev:="] = func1206;
  func1206.definitionLine = 8;
  func1206.definitionModule = "util";
  this.methods["modnamev"].debug = "var";
  setLineNumber(10)    // compilenode string;
  var string1207 = new GraceString("make");
  var var_runmodev = string1207;
  setLineNumber(8)    // compilenode method;
  var func1208 = function(argcv) {    // method runmodev
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for runmodev"));
    setModuleName("util");
    // runmodev is a simple accessor - elide try ... catch
    setLineNumber(10)    // compilenode identifier;
    return var_runmodev;
  }
  func1208.paramCounts = [
      0,
  ];
  func1208.variableArities = [
      false,
  ];
  this.methods["runmodev"] = func1208;
  func1208.definitionLine = 8;
  func1208.definitionModule = "util";
  setLineNumber(8)    // compilenode method;
  var func1209 = function(argcv) {    // method runmodev:=(1)
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for runmodev:=(1)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var_runmodev = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1209.paramCounts = [
      1,
  ];
  func1209.variableArities = [
      false,
  ];
  this.methods["runmodev:="] = func1209;
  func1209.definitionLine = 8;
  func1209.definitionModule = "util";
  this.methods["runmodev"].debug = "var";
  setLineNumber(11)    // compilenode string;
  var string1210 = new GraceString("run");
  var var_buildtypev = string1210;
  setLineNumber(8)    // compilenode method;
  var func1211 = function(argcv) {    // method buildtypev
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for buildtypev"));
    setModuleName("util");
    // buildtypev is a simple accessor - elide try ... catch
    setLineNumber(11)    // compilenode identifier;
    return var_buildtypev;
  }
  func1211.paramCounts = [
      0,
  ];
  func1211.variableArities = [
      false,
  ];
  this.methods["buildtypev"] = func1211;
  func1211.definitionLine = 8;
  func1211.definitionModule = "util";
  setLineNumber(8)    // compilenode method;
  var func1212 = function(argcv) {    // method buildtypev:=(1)
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for buildtypev:=(1)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var_buildtypev = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1212.paramCounts = [
      1,
  ];
  func1212.variableArities = [
      false,
  ];
  this.methods["buildtypev:="] = func1212;
  func1212.definitionLine = 8;
  func1212.definitionModule = "util";
  this.methods["buildtypev"].debug = "var";
  setLineNumber(12)    // compilenode identifier;
  var var_interactivev = GraceFalse;
  setLineNumber(8)    // compilenode method;
  var func1213 = function(argcv) {    // method interactivev
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for interactivev"));
    setModuleName("util");
    // interactivev is a simple accessor - elide try ... catch
    setLineNumber(12)    // compilenode identifier;
    return var_interactivev;
  }
  func1213.paramCounts = [
      0,
  ];
  func1213.variableArities = [
      false,
  ];
  this.methods["interactivev"] = func1213;
  func1213.definitionLine = 8;
  func1213.definitionModule = "util";
  setLineNumber(8)    // compilenode method;
  var func1214 = function(argcv) {    // method interactivev:=(1)
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for interactivev:=(1)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var_interactivev = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1214.paramCounts = [
      1,
  ];
  func1214.variableArities = [
      false,
  ];
  this.methods["interactivev:="] = func1214;
  func1214.definitionLine = 8;
  func1214.definitionModule = "util";
  this.methods["interactivev"].debug = "var";
  setLineNumber(13)    // compilenode identifier;
  var var_gracelibPathv = GraceFalse;
  setLineNumber(8)    // compilenode method;
  var func1215 = function(argcv) {    // method gracelibPathv
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for gracelibPathv"));
    setModuleName("util");
    // gracelibPathv is a simple accessor - elide try ... catch
    setLineNumber(13)    // compilenode identifier;
    return var_gracelibPathv;
  }
  func1215.paramCounts = [
      0,
  ];
  func1215.variableArities = [
      false,
  ];
  this.methods["gracelibPathv"] = func1215;
  func1215.definitionLine = 8;
  func1215.definitionModule = "util";
  setLineNumber(8)    // compilenode method;
  var func1216 = function(argcv) {    // method gracelibPathv:=(1)
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for gracelibPathv:=(1)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var_gracelibPathv = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1216.paramCounts = [
      1,
  ];
  func1216.variableArities = [
      false,
  ];
  this.methods["gracelibPathv:="] = func1216;
  func1216.definitionLine = 8;
  func1216.definitionModule = "util";
  this.methods["gracelibPathv"].debug = "var";
  setLineNumber(14)    // compilenode num;
  var var_linenumv = new GraceNum(1);
  setLineNumber(8)    // compilenode method;
  var func1217 = function(argcv) {    // method linenumv
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for linenumv"));
    setModuleName("util");
    // linenumv is a simple accessor - elide try ... catch
    setLineNumber(14)    // compilenode identifier;
    return var_linenumv;
  }
  func1217.paramCounts = [
      0,
  ];
  func1217.variableArities = [
      false,
  ];
  this.methods["linenumv"] = func1217;
  func1217.definitionLine = 8;
  func1217.definitionModule = "util";
  setLineNumber(8)    // compilenode method;
  var func1218 = function(argcv) {    // method linenumv:=(1)
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for linenumv:=(1)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var_linenumv = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1218.paramCounts = [
      1,
  ];
  func1218.variableArities = [
      false,
  ];
  this.methods["linenumv:="] = func1218;
  func1218.definitionLine = 8;
  func1218.definitionModule = "util";
  this.methods["linenumv"].debug = "var";
  setLineNumber(15)    // compilenode num;
  var var_lineposv = new GraceNum(1);
  setLineNumber(8)    // compilenode method;
  var func1219 = function(argcv) {    // method lineposv
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for lineposv"));
    setModuleName("util");
    // lineposv is a simple accessor - elide try ... catch
    setLineNumber(15)    // compilenode identifier;
    return var_lineposv;
  }
  func1219.paramCounts = [
      0,
  ];
  func1219.variableArities = [
      false,
  ];
  this.methods["lineposv"] = func1219;
  func1219.definitionLine = 8;
  func1219.definitionModule = "util";
  setLineNumber(8)    // compilenode method;
  var func1220 = function(argcv) {    // method lineposv:=(1)
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for lineposv:=(1)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var_lineposv = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1220.paramCounts = [
      1,
  ];
  func1220.variableArities = [
      false,
  ];
  this.methods["lineposv:="] = func1220;
  func1220.definitionLine = 8;
  func1220.definitionModule = "util";
  this.methods["lineposv"].debug = "var";
  setLineNumber(16)    // compilenode identifier;
  var var_vtagv = GraceFalse;
  setLineNumber(8)    // compilenode method;
  var func1221 = function(argcv) {    // method vtagv
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for vtagv"));
    setModuleName("util");
    // vtagv is a simple accessor - elide try ... catch
    setLineNumber(16)    // compilenode identifier;
    return var_vtagv;
  }
  func1221.paramCounts = [
      0,
  ];
  func1221.variableArities = [
      false,
  ];
  this.methods["vtagv"] = func1221;
  func1221.definitionLine = 8;
  func1221.definitionModule = "util";
  setLineNumber(8)    // compilenode method;
  var func1222 = function(argcv) {    // method vtagv:=(1)
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for vtagv:=(1)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var_vtagv = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1222.paramCounts = [
      1,
  ];
  func1222.variableArities = [
      false,
  ];
  this.methods["vtagv:="] = func1222;
  func1222.definitionLine = 8;
  func1222.definitionModule = "util";
  this.methods["vtagv"].debug = "var";
  setLineNumber(17)    // compilenode identifier;
  var var_noexecv = GraceFalse;
  setLineNumber(8)    // compilenode method;
  var func1223 = function(argcv) {    // method noexecv
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for noexecv"));
    setModuleName("util");
    // noexecv is a simple accessor - elide try ... catch
    setLineNumber(17)    // compilenode identifier;
    return var_noexecv;
  }
  func1223.paramCounts = [
      0,
  ];
  func1223.variableArities = [
      false,
  ];
  this.methods["noexecv"] = func1223;
  func1223.definitionLine = 8;
  func1223.definitionModule = "util";
  setLineNumber(8)    // compilenode method;
  var func1224 = function(argcv) {    // method noexecv:=(1)
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for noexecv:=(1)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var_noexecv = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1224.paramCounts = [
      1,
  ];
  func1224.variableArities = [
      false,
  ];
  this.methods["noexecv:="] = func1224;
  func1224.definitionLine = 8;
  func1224.definitionModule = "util";
  this.methods["noexecv"].debug = "var";
  setLineNumber(18)    // compilenode string;
  var string1225 = new GraceString("c");
  var var_targetv = string1225;
  setLineNumber(8)    // compilenode method;
  var func1226 = function(argcv) {    // method targetv
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for targetv"));
    setModuleName("util");
    // targetv is a simple accessor - elide try ... catch
    setLineNumber(18)    // compilenode identifier;
    return var_targetv;
  }
  func1226.paramCounts = [
      0,
  ];
  func1226.variableArities = [
      false,
  ];
  this.methods["targetv"] = func1226;
  func1226.definitionLine = 8;
  func1226.definitionModule = "util";
  setLineNumber(8)    // compilenode method;
  var func1227 = function(argcv) {    // method targetv:=(1)
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for targetv:=(1)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var_targetv = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1227.paramCounts = [
      1,
  ];
  func1227.variableArities = [
      false,
  ];
  this.methods["targetv:="] = func1227;
  func1227.definitionLine = 8;
  func1227.definitionModule = "util";
  this.methods["targetv"].debug = "var";
  setLineNumber(19)    // compilenode identifier;
  var call1228 = callmethod(var_mgcollections,"map", [0]);
  var call1229 = callmethod(call1228,"new", [0]);
  var var_extensionsv = call1229;
  var func1230 = function(argcv) {    // method extensionsv
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for extensionsv"));
    setModuleName("util");
    // extensionsv is a simple accessor - elide try ... catch
    return var_extensionsv;
  }
  func1230.paramCounts = [
      0,
  ];
  func1230.variableArities = [
      false,
  ];
  this.methods["extensionsv"] = func1230;
  func1230.definitionLine = 19;
  func1230.definitionModule = "util";
  var func1231 = function(argcv) {    // method extensionsv:=(1)
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for extensionsv:=(1)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var_extensionsv = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1231.paramCounts = [
      1,
  ];
  func1231.variableArities = [
      false,
  ];
  this.methods["extensionsv:="] = func1231;
  func1231.definitionLine = 19;
  func1231.definitionModule = "util";
  this.methods["extensionsv"].debug = "var";
  setLineNumber(20)    // compilenode identifier;
  var var_recurse = GraceTrue;
  setLineNumber(19)    // compilenode method;
  var func1232 = function(argcv) {    // method recurse
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for recurse"));
    setModuleName("util");
    // recurse is a simple accessor - elide try ... catch
    setLineNumber(20)    // compilenode identifier;
    return var_recurse;
  }
  func1232.paramCounts = [
      0,
  ];
  func1232.variableArities = [
      false,
  ];
  this.methods["recurse"] = func1232;
  func1232.definitionLine = 19;
  func1232.definitionModule = "util";
  setLineNumber(19)    // compilenode method;
  var func1233 = function(argcv) {    // method recurse:=(1)
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for recurse:=(1)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var_recurse = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1233.paramCounts = [
      1,
  ];
  func1233.variableArities = [
      false,
  ];
  this.methods["recurse:="] = func1233;
  func1233.definitionLine = 19;
  func1233.definitionModule = "util";
  this.methods["recurse"].debug = "var";
  setLineNumber(21)    // compilenode identifier;
  var var_dynamicModule = GraceFalse;
  setLineNumber(19)    // compilenode method;
  var func1234 = function(argcv) {    // method dynamicModule
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for dynamicModule"));
    setModuleName("util");
    // dynamicModule is a simple accessor - elide try ... catch
    setLineNumber(21)    // compilenode identifier;
    return var_dynamicModule;
  }
  func1234.paramCounts = [
      0,
  ];
  func1234.variableArities = [
      false,
  ];
  this.methods["dynamicModule"] = func1234;
  func1234.definitionLine = 19;
  func1234.definitionModule = "util";
  setLineNumber(19)    // compilenode method;
  var func1235 = function(argcv) {    // method dynamicModule:=(1)
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for dynamicModule:=(1)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var_dynamicModule = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1235.paramCounts = [
      1,
  ];
  func1235.variableArities = [
      false,
  ];
  this.methods["dynamicModule:="] = func1235;
  func1235.definitionLine = 19;
  func1235.definitionModule = "util";
  this.methods["dynamicModule"].debug = "var";
  setLineNumber(22)    // compilenode identifier;
  var var_importDynamic = GraceFalse;
  setLineNumber(19)    // compilenode method;
  var func1236 = function(argcv) {    // method importDynamic
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for importDynamic"));
    setModuleName("util");
    // importDynamic is a simple accessor - elide try ... catch
    setLineNumber(22)    // compilenode identifier;
    return var_importDynamic;
  }
  func1236.paramCounts = [
      0,
  ];
  func1236.variableArities = [
      false,
  ];
  this.methods["importDynamic"] = func1236;
  func1236.definitionLine = 19;
  func1236.definitionModule = "util";
  setLineNumber(19)    // compilenode method;
  var func1237 = function(argcv) {    // method importDynamic:=(1)
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for importDynamic:=(1)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var_importDynamic = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1237.paramCounts = [
      1,
  ];
  func1237.variableArities = [
      false,
  ];
  this.methods["importDynamic:="] = func1237;
  func1237.definitionLine = 19;
  func1237.definitionModule = "util";
  this.methods["importDynamic"].debug = "var";
  setLineNumber(23)    // compilenode num;
  var var_jobs = new GraceNum(2);
  setLineNumber(19)    // compilenode method;
  var func1238 = function(argcv) {    // method jobs
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for jobs"));
    setModuleName("util");
    // jobs is a simple accessor - elide try ... catch
    setLineNumber(23)    // compilenode identifier;
    return var_jobs;
  }
  func1238.paramCounts = [
      0,
  ];
  func1238.variableArities = [
      false,
  ];
  this.methods["jobs"] = func1238;
  func1238.definitionLine = 19;
  func1238.definitionModule = "util";
  setLineNumber(19)    // compilenode method;
  var func1239 = function(argcv) {    // method jobs:=(1)
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for jobs:=(1)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var_jobs = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1239.paramCounts = [
      1,
  ];
  func1239.variableArities = [
      false,
  ];
  this.methods["jobs:="] = func1239;
  func1239.definitionLine = 19;
  func1239.definitionModule = "util";
  this.methods["jobs"].debug = "var";
  setLineNumber(24)    // compilenode call;
  var call1240 = callmethod(Grace_prelude, "list", [0]);
  var call1241 = callmethod(call1240,"empty", [0]);
  var var_cLines = call1241;
  var func1242 = function(argcv) {    // method cLines
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for cLines"));
    setModuleName("util");
    // cLines is a simple accessor - elide try ... catch
    return var_cLines;
  }
  func1242.paramCounts = [
      0,
  ];
  func1242.variableArities = [
      false,
  ];
  this.methods["cLines"] = func1242;
  func1242.definitionLine = 24;
  func1242.definitionModule = "util";
  var func1243 = function(argcv) {    // method cLines:=(1)
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for cLines:=(1)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var_cLines = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1243.paramCounts = [
      1,
  ];
  func1243.variableArities = [
      false,
  ];
  this.methods["cLines:="] = func1243;
  func1243.definitionLine = 24;
  func1243.definitionModule = "util";
  this.methods["cLines"].debug = "var";
  setLineNumber(25)    // compilenode call;
  var call1244 = callmethod(Grace_prelude, "list", [0]);
  var call1245 = callmethod(call1244,"empty", [0]);
  var var_lines = call1245;
  var func1246 = function(argcv) {    // method lines
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for lines"));
    setModuleName("util");
    // lines is a simple accessor - elide try ... catch
    return var_lines;
  }
  func1246.paramCounts = [
      0,
  ];
  func1246.variableArities = [
      false,
  ];
  this.methods["lines"] = func1246;
  func1246.definitionLine = 25;
  func1246.definitionModule = "util";
  var func1247 = function(argcv) {    // method lines:=(1)
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for lines:=(1)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var_lines = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1247.paramCounts = [
      1,
  ];
  func1247.variableArities = [
      false,
  ];
  this.methods["lines:="] = func1247;
  func1247.definitionLine = 25;
  func1247.definitionModule = "util";
  this.methods["lines"].debug = "var";
  setLineNumber(26)    // compilenode string;
  var string1248 = new GraceString("standardInput.grace");
  var var_filename = string1248;
  setLineNumber(25)    // compilenode method;
  var func1249 = function(argcv) {    // method filename
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for filename"));
    setModuleName("util");
    // filename is a simple accessor - elide try ... catch
    setLineNumber(26)    // compilenode identifier;
    return var_filename;
  }
  func1249.paramCounts = [
      0,
  ];
  func1249.variableArities = [
      false,
  ];
  this.methods["filename"] = func1249;
  func1249.definitionLine = 25;
  func1249.definitionModule = "util";
  setLineNumber(25)    // compilenode method;
  var func1250 = function(argcv) {    // method filename:=(1)
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for filename:=(1)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var_filename = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1250.paramCounts = [
      1,
  ];
  func1250.variableArities = [
      false,
  ];
  this.methods["filename:="] = func1250;
  func1250.definitionLine = 25;
  func1250.definitionModule = "util";
  this.methods["filename"].debug = "var";
  setLineNumber(28)    // compilenode object;
  var obj1251 = Grace_allocObject();
  obj1251.definitionModule = "util";
  obj1251.definitionLine = 28;
  obj1251.outer = this;
  var reader_util_outer1252 = function() {
    return this.outer;
  }
  obj1251.methods["outer"] = reader_util_outer1252;
  var obj_init_1251 = function () {
    var origSuperDepth = superDepth;
    superDepth = obj1251;
    var func1253 = function(argcv) {    // method isAlready(1)
      var curarg = 1;
      var var_moduleName = arguments[curarg];
      curarg++;
      if (argcv[0] != 1)
        callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for isAlready(1)"));
      setModuleName("util");
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var if1254 = GraceDone;
        setLineNumber(33)    // compilenode call;
        onSelf = true;
        var call1255 = callmethod(this, "static", [0]);
        var call1256 = callmethod(call1255,"contains", [1], var_moduleName);
        if (Grace_isTrue(call1256)) {
          setLineNumber(34)    // compilenode identifier;
          if1254 = GraceTrue;
        } else {
          var if1257 = GraceDone;
          setLineNumber(35)    // compilenode call;
          onSelf = true;
          var call1258 = callmethod(this, "other", [0]);
          var call1259 = callmethod(call1258,"contains", [1], var_moduleName);
          if (Grace_isTrue(call1259)) {
            setLineNumber(36)    // compilenode identifier;
            if1257 = GraceTrue;
          } else {
            setLineNumber(38)    // compilenode identifier;
            if1257 = GraceFalse;
          }
          if1254 = if1257;
        }
        return if1254;
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1253.paramCounts = [
        1,
    ];
    func1253.variableArities = [
        false,
    ];
    obj1251.methods["isAlready"] = func1253;
    func1253.definitionLine = 32;
    func1253.definitionModule = "util";
    sourceObject = obj1251;
    setLineNumber(29)    // compilenode call;
    var call1260 = callmethod(Grace_prelude, "set", [0]);
    var call1261 = callmethod(call1260,"empty", [0]);
    obj1251.data["static"] = call1261;
    var reader_util_static1262 = function() {
      return this.data["static"];
    }
    reader_util_static1262.def = true;
    obj1251.methods["static"] = reader_util_static1262;
    sourceObject = obj1251;
    setLineNumber(30)    // compilenode call;
    var call1263 = callmethod(Grace_prelude, "list", [0]);
    var call1264 = callmethod(call1263,"empty", [0]);
    obj1251.data["linkfiles"] = call1264;
    var reader_util_linkfiles1265 = function() {
      return this.data["linkfiles"];
    }
    reader_util_linkfiles1265.def = true;
    obj1251.methods["linkfiles"] = reader_util_linkfiles1265;
    sourceObject = obj1251;
    setLineNumber(31)    // compilenode call;
    var call1266 = callmethod(Grace_prelude, "set", [0]);
    var call1267 = callmethod(call1266,"empty", [0]);
    obj1251.data["other"] = call1267;
    var reader_util_other1268 = function() {
      return this.data["other"];
    }
    reader_util_other1268.def = true;
    obj1251.methods["other"] = reader_util_other1268;
    sourceObject = obj1251;
    superDepth = origSuperDepth;
  }
  obj_init_1251.apply(obj1251, []);
  var var_requiredModules = obj1251;
  var func1269 = function(argcv) {    // method requiredModules
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for requiredModules"));
    setModuleName("util");
    // requiredModules is a simple accessor - elide try ... catch
    setLineNumber(28)    // compilenode identifier;
    return var_requiredModules;
  }
  func1269.paramCounts = [
      0,
  ];
  func1269.variableArities = [
      false,
  ];
  this.methods["requiredModules"] = func1269;
  func1269.definitionLine = 31;
  func1269.definitionModule = "util";
  this.methods["requiredModules"].debug = "def";
  setLineNumber(43)    // compilenode num;
  var var_errno = new GraceNum(0);
  setLineNumber(31)    // compilenode method;
  var func1270 = function(argcv) {    // method errno
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for errno"));
    setModuleName("util");
    // errno is a simple accessor - elide try ... catch
    setLineNumber(43)    // compilenode identifier;
    return var_errno;
  }
  func1270.paramCounts = [
      0,
  ];
  func1270.variableArities = [
      false,
  ];
  this.methods["errno"] = func1270;
  func1270.definitionLine = 31;
  func1270.definitionModule = "util";
  setLineNumber(31)    // compilenode method;
  var func1271 = function(argcv) {    // method errno:=(1)
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for errno:=(1)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var_errno = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1271.paramCounts = [
      1,
  ];
  func1271.variableArities = [
      false,
  ];
  this.methods["errno:="] = func1271;
  func1271.definitionLine = 31;
  func1271.definitionModule = "util";
  this.methods["errno"].debug = "var";
  setLineNumber(211)    // compilenode num;
  var var_previousElapsed = new GraceNum(0);
  setLineNumber(31)    // compilenode method;
  var func1272 = function(argcv) {    // method previousElapsed
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for previousElapsed"));
    setModuleName("util");
    // previousElapsed is a simple accessor - elide try ... catch
    setLineNumber(211)    // compilenode identifier;
    return var_previousElapsed;
  }
  func1272.paramCounts = [
      0,
  ];
  func1272.variableArities = [
      false,
  ];
  this.methods["previousElapsed"] = func1272;
  func1272.definitionLine = 31;
  func1272.definitionModule = "util";
  setLineNumber(31)    // compilenode method;
  var func1273 = function(argcv) {    // method previousElapsed:=(1)
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for previousElapsed:=(1)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var_previousElapsed = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1273.paramCounts = [
      1,
  ];
  func1273.variableArities = [
      false,
  ];
  this.methods["previousElapsed:="] = func1273;
  func1273.definitionLine = 31;
  func1273.definitionModule = "util";
  this.methods["previousElapsed"].debug = "var";
  setLineNumber(212)    // compilenode num;
  var var_previousCPU = new GraceNum(0);
  setLineNumber(31)    // compilenode method;
  var func1274 = function(argcv) {    // method previousCPU
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for previousCPU"));
    setModuleName("util");
    // previousCPU is a simple accessor - elide try ... catch
    setLineNumber(212)    // compilenode identifier;
    return var_previousCPU;
  }
  func1274.paramCounts = [
      0,
  ];
  func1274.variableArities = [
      false,
  ];
  this.methods["previousCPU"] = func1274;
  func1274.definitionLine = 31;
  func1274.definitionModule = "util";
  setLineNumber(31)    // compilenode method;
  var func1275 = function(argcv) {    // method previousCPU:=(1)
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for previousCPU:=(1)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var_previousCPU = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1275.paramCounts = [
      1,
  ];
  func1275.variableArities = [
      false,
  ];
  this.methods["previousCPU:="] = func1275;
  func1275.definitionLine = 31;
  func1275.definitionModule = "util";
  this.methods["previousCPU"].debug = "var";
  setLineNumber(388)    // compilenode string;
  var string1276 = new GraceString("");
  var var_sourceDirCache = string1276;
  setLineNumber(31)    // compilenode method;
  var func1277 = function(argcv) {    // method sourceDirCache
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for sourceDirCache"));
    setModuleName("util");
    // sourceDirCache is a simple accessor - elide try ... catch
    setLineNumber(388)    // compilenode identifier;
    return var_sourceDirCache;
  }
  func1277.paramCounts = [
      0,
  ];
  func1277.variableArities = [
      false,
  ];
  this.methods["sourceDirCache"] = func1277;
  func1277.definitionLine = 31;
  func1277.definitionModule = "util";
  setLineNumber(31)    // compilenode method;
  var func1278 = function(argcv) {    // method sourceDirCache:=(1)
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for sourceDirCache:=(1)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var_sourceDirCache = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1278.paramCounts = [
      1,
  ];
  func1278.variableArities = [
      false,
  ];
  this.methods["sourceDirCache:="] = func1278;
  func1278.definitionLine = 31;
  func1278.definitionModule = "util";
  this.methods["sourceDirCache"].debug = "var";
  setLineNumber(396)    // compilenode string;
  var string1279 = new GraceString("");
  var var_execDirCache = string1279;
  setLineNumber(31)    // compilenode method;
  var func1280 = function(argcv) {    // method execDirCache
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for execDirCache"));
    setModuleName("util");
    // execDirCache is a simple accessor - elide try ... catch
    setLineNumber(396)    // compilenode identifier;
    return var_execDirCache;
  }
  func1280.paramCounts = [
      0,
  ];
  func1280.variableArities = [
      false,
  ];
  this.methods["execDirCache"] = func1280;
  func1280.definitionLine = 31;
  func1280.definitionModule = "util";
  setLineNumber(31)    // compilenode method;
  var func1281 = function(argcv) {    // method execDirCache:=(1)
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for execDirCache:=(1)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var_execDirCache = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1281.paramCounts = [
      1,
  ];
  func1281.variableArities = [
      false,
  ];
  this.methods["execDirCache:="] = func1281;
  func1281.definitionLine = 31;
  func1281.definitionModule = "util";
  this.methods["execDirCache"].debug = "var";
  setLineNumber(490)    // compilenode string;
  var string1282 = new GraceString("0123456789abcdef");
  var var_hexdigits = string1282;
  setLineNumber(31)    // compilenode method;
  var func1283 = function(argcv) {    // method hexdigits
    var curarg = 1;
    if (argcv[0] != 0)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for hexdigits"));
    setModuleName("util");
    // hexdigits is a simple accessor - elide try ... catch
    setLineNumber(490)    // compilenode identifier;
    return var_hexdigits;
  }
  func1283.paramCounts = [
      0,
  ];
  func1283.variableArities = [
      false,
  ];
  this.methods["hexdigits"] = func1283;
  func1283.definitionLine = 31;
  func1283.definitionModule = "util";
  setLineNumber(31)    // compilenode method;
  var func1284 = function(argcv) {    // method hexdigits:=(1)
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] != 1)
      callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for hexdigits:=(1)"));
    setModuleName("util");
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var_hexdigits = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp;
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1284.paramCounts = [
      1,
  ];
  func1284.variableArities = [
      false,
  ];
  this.methods["hexdigits:="] = func1284;
  func1284.definitionLine = 31;
  func1284.definitionModule = "util";
  this.methods["hexdigits"].debug = "var";
  return this;
}
gracecode_util.imports = [
'io',
'sys',
'buildinfo',
'mgcollections',
];
if (typeof gctCache !== "undefined")
  gctCache['util'] = "path:\n util\nclasses:\npublic:\n recurse\n filename\n requiredModules\n errno\n parseargs\n log_verbose\n outprint\n syntaxError\n generalError\n type_error\n semantic_error\n warning\n verbosity\n outfile\n infile\n modname\n runmode\n buildtype\n interactive\n gracelibPath\n setline\n setPosition\n linenum\n linepos\n vtag\n noexec\n target\n extensions\n str()lastIndexOf\n sourceDir\n execDir\n splitPath\n file()on()orPath()otherwise\n file()onPath()otherwise\n processExtension\n printhelp\n debug\n hex\nconfidential:\nfresh-methods:\nmodules:\n buildinfo\n mgcollections\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["util"] = [
    "import \"io\" as io",
    "import \"sys\" as sys",
    "import \"buildinfo\" as buildinfo",
    "import \"mgcollections\" as mgcollections",
    "",
    "var verbosityv := 30",
    "var outfilev := io.output",
    "var infilev := io.input",
    "var modnamev := \"standardInput\"",
    "var runmodev := \"make\"",
    "var buildtypev := \"run\"",
    "var interactivev := false",
    "var gracelibPathv := false",
    "var linenumv := 1",
    "var lineposv := 1",
    "var vtagv := false",
    "var noexecv := false",
    "var targetv := \"c\"",
    "var extensionsv := mgcollections.map.new",
    "var recurse is readable := true",
    "var dynamicModule := false",
    "var importDynamic := false",
    "var jobs := 2",
    "var cLines := list.empty",
    "var lines := list.empty",
    "var filename is readable := \"standardInput.grace\"",
    "",
    "def requiredModules is public = object {",
    "    def static is public = set.empty",
    "    def linkfiles is public = list.empty",
    "    def other is public = set.empty",
    "    method isAlready ( moduleName ) -> Boolean {",
    "        if ( static.contains(moduleName) ) then {",
    "            true ",
    "        } elseif { other.contains(moduleName ) } then {",
    "            true ",
    "        } else {",
    "            false",
    "        }",
    "    }",
    "}",
    "",
    "var errno is readable := 0",
    "",
    "method parseargs {",
    "    var argv := sys.argv",
    "    var toStdout := false",
    "    if (argv.size > 1) then {",
    "        var indices := argv.indices",
    "        var arg",
    "        var skip := true",
    "        for (indices) do { ai->",
    "            arg := argv.at(ai)",
    "            if (arg.at(1) == \"-\") then {",
    "                match(arg)",
    "                    case { \"-o\" ->",
    "                        if(argv.size < (ai + 1)) then {",
    "                            io.error.write(\"minigrace: -o requires argument.\\n\")",
    "                            sys.exit(1)",
    "                        }",
    "                        outfilev := io.open(argv.at(ai + 1), \"w\")",
    "                        skip := true",
    "                    } case { \"--verbose\" ->",
    "                        verbosityv := 40",
    "                    } case { \"--help\" ->",
    "                        printhelp",
    "                    } case { \"--vtag\" ->",
    "                        skip := true",
    "                        if(argv.size < (ai + 1)) then {",
    "                            io.error.write(\"minigrace: --vtag requires argument.\\n\")",
    "                            sys.exit(1)",
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
    "                    } case { \"--interactive\" ->",
    "                        interactivev := true",
    "                    } case { \"--noexec\" ->",
    "                        noexecv := true",
    "                        buildtypev := \"bc\"",
    "                    } case { \"--yesexec\" ->",
    "                        noexecv := false",
    "                    } case { \"--stdout\" ->",
    "                        toStdout := true",
    "                    } case { \"-\" ->",
    "                        toStdout := true",
    "                    } case { \"--module\" ->",
    "                        skip := true",
    "                        if(argv.size < (ai + 1)) then {",
    "                            io.error.write(\"minigrace: --module requires argument.\\n\")",
    "                            sys.exit(1)",
    "                        }",
    "                        modnamev := argv.at(ai + 1)",
    "                    } case { \"--gracelib\" ->",
    "                        skip := true",
    "                        if(argv.size < (ai + 1)) then {",
    "                            io.error.write(\"minigrace: --gracelib requires argument.\\n\")",
    "                            sys.exit(1)",
    "                        }",
    "                        gracelibPathv := argv.at(ai + 1)",
    "                    } case { \"--target\" ->",
    "                        skip := true",
    "                        if(argv.size < (ai + 1)) then {",
    "                            io.error.write(\"minigrace: --target requires argument.\\n\")",
    "                            sys.exit(1)",
    "                        }",
    "                        targetv := argv.at(ai + 1)",
    "                    } case { \"-j\" ->",
    "                        skip := true",
    "                        if(argv.size < (ai + 1)) then {",
    "                            io.error.write(\"minigrace: -j requires argument.\\n\")",
    "                            sys.exit(1)",
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
    "                            processExtension(ext)",
    "                        } else {",
    "                            io.error.write(\"minigrace: invalid \"",
    "                                ++ \"argument {arg}.\\n\")",
    "                            sys.exit(1)",
    "                        }",
    "                    }",
    "            } else {",
    "                if (skip) then {",
    "                    skip := false",
    "                } else {",
    "                    filename := arg",
    "                    try {",
    "                        infilev := io.open(filename, \"r\")",
    "                    } catch {",
    "                        ex:EnvironmentException -> ",
    "                            generalError (\"Can't open file {filename}\",",
    "                                0, 0, \"\", false, sequence.empty)",
    "                    }",
    "                    if (modnamev == \"standardInput\") then {",
    "                        var accum := \"\"",
    "                        modnamev := \"\"",
    "                        for (filename) do { c->",
    "                            if (c == \"/\") then {",
    "                                accum := \"\"",
    "                            } elseif {c == \".\"} then {",
    "                                modnamev := accum",
    "                            } else {",
    "                                accum := accum ++ c",
    "                            }",
    "                        }",
    "                    }",
    "                }",
    "            }",
    "        }",
    "    }",
    "    if ((outfilev == io.output) && {!toStdout}) then {",
    "        outfilev := match(targetv)",
    "            case { \"c\" -> io.open(sourceDir ++ modnamev ++ \".c\", \"w\") }",
    "            case { \"js\" -> io.open(sourceDir ++ modnamev ++ \".js\", \"w\") }",
    "            case { \"parse\" -> io.open(sourceDir ++ modnamev ++ \".parse\", \"w\") }",
    "            case { \"lex\" -> io.open(sourceDir ++ modnamev ++ \".lex\", \"w\") }",
    "            case { \"processed-ast\" -> io.open(sourceDir ++ modnamev ++ \".processed\", \"w\") }",
    "            case { \"symbols\" -> io.open(sourceDir ++ modnamev ++ \".processed-ast\", \"w\") }",
    "            case { \"patterns\" -> io.open(sourceDir ++ modnamev ++ \".patterns\", \"w\") }",
    "            case { _ -> io.output }",
    "    }",
    "    if (gracelibPathv == false) then {",
    "        if (io.exists(sys.execPath ++ \"/../lib/minigrace/gracelib.o\")) then {",
    "            gracelibPathv := sys.execPath ++ \"/../lib/minigrace\"",
    "        } else {",
    "            gracelibPathv := sys.execPath",
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
    "            if (interactivev.not) then {",
    "                print \"Enter a program and press Ctrl-D to execute it.\"",
    "                print \"\"",
    "            }",
    "        }",
    "    }",
    "}",
    "",
    "var previousElapsed := 0",
    "var previousCPU := 0",
    "",
    "method log_verbose(s) {",
    "    if (verbosityv >= 40) then {",
    "        var vtagw := \"\"",
    "        if (false != vtagv) then {",
    "            vtagw := \"[\" ++ vtagv ++ \"]\"",
    "        }",
    "        def cpu = (sys.cputime * 100).rounded / 100",
    "        def elapsed = (sys.elapsed * 100).rounded / 100",
    "        io.error.write(\"minigrace{vtagw}: {modnamev}: {cpu}/\"",
    "            ++ \"{elapsed} (+{cpu-previousCPU}/{elapsed-previousElapsed}): {s}\\n\")",
    "        previousElapsed := elapsed",
    "        previousCPU := cpu",
    "    }",
    "}",
    "",
    "method outprint(s) {",
    "    outfilev.write(s)",
    "    outfilev.write(\"\\n\")",
    "}",
    "",
    "// This is called by various wrapper methods in the errormessages module.",
    "// The parameters are explained as follows:",
    "// - message: The text of the error message.",
    "// - errlinenum: The line number on which the error occurred.",
    "// - position: A string used to show the position of the error in the error message.",
    "// - arr: The string used to draw an arrow showing the position of the error.",
    "// - spacePos: The position in the error line that a space should be inserted, or false.",
    "// - suggestions: A (possibly empty) list of suggestions to correct the error.",
    "method syntaxError(message, errlinenum, position, arr, spacePos, suggestions) {",
    "    generalError(\"Syntax error: {message}\", errlinenum, position, arr, spacePos,",
    "        suggestions)",
    "}",
    "",
    "method generalError(message, errlinenum, position, arr, spacePos, suggestions) {",
    "    if (vtagv) then {",
    "        io.error.write(\"[\" ++ vtagv ++ \"]\")",
    "    }",
    "    io.error.write(\"{modnamev}.grace[{errlinenum}{position}]: {message}\\n\")",
    "    if ((errlinenum > 1) && (lines.size > 1)) then {",
    "        io.error.write(\"  {errlinenum - 1}: {lines.at(errlinenum - 1)}\\n\")",
    "    }",
    "    if ((lines.size >= errlinenum) && (errlinenum > 0)) then {",
    "        var line := lines.at(errlinenum)",
    "        if(spacePos != false) then {",
    "            io.error.write(\"  {errlinenum}: {line.substringFrom(1)to(spacePos-1)} {line.substringFrom(spacePos)to(line.size)}\\n\")",
    "        } else {",
    "            io.error.write(\"  {errlinenum}: {line}\\n\")",
    "        }",
    "        io.error.write(\"{arr}\\n\")",
    "    }",
    "    if (suggestions.size > 0) then {",
    "        for(suggestions) do { s ->",
    "            io.error.write(\"\\nDid you mean:\\n\")",
    "            s.print",
    "        }",
    "    }",
    "    if (interactivev.not) then {",
    "        sys.exit(2)",
    "    } else {",
    "        errno := 2",
    "    }",
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
    "    if (interactivev.not) then {",
    "        sys.exit(2)",
    "    } else {",
    "        errno := 2",
    "    }",
    "}",
    "method semantic_error(s) {",
    "    if (vtagv) then {",
    "        io.error.write(\"[\" ++ vtagv ++ \"]\")",
    "    }",
    "    io.error.write \"{modnamev}.grace:{linenumv}:{lineposv}: Semantic error\"",
    "    if (s == \"\") then {",
    "        io.error.write \"\\n\"",
    "        if (!interactivev) then {",
    "            sys.exit(2)",
    "        }",
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
    "    if (interactivev.not) then {",
    "        sys.exit(2)",
    "    } else {",
    "        errno := 2",
    "    }",
    "}",
    "method warning(s) {",
    "    io.error.write(\"{modnamev}.grace:{linenumv}:{lineposv}: warning: {s}\")",
    "    io.error.write(\"\\n\")",
    "}",
    "",
    "method verbosity {",
    "    verbosityv",
    "}",
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
    "method interactive {",
    "    interactivev",
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
    "var sourceDirCache := \"\"",
    "method sourceDir {",
    "    if (sourceDirCache == \"\") then {",
    "        sourceDirCache := filename.substringFrom 1 to (str(filename) lastIndexOf(\"/\"))",
    "    }",
    "    if (sourceDirCache == \"\") then { sourceDirCache := \"./\" }",
    "    sourceDirCache",
    "}",
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
    "method splitPath(pathString) -> List<String> {",
    "    def locations = list.empty",
    "    var ix := 1",
    "    var ox := 1",
    "    def pss = pathString.size",
    "    while { ox <= pss } do {",
    "        while { (ox <= pss).andAlso{pathString.at(ox) != \":\"} } do {",
    "            ox := ox + 1 ",
    "        }",
    "        var item := pathString.substringFrom(ix) to(ox-1)",
    "        if (item.at(item.size) != \"/\") then { item := item ++ \"/\" }",
    "        locations.addLast (item)",
    "        ix := ox + 1",
    "        ox := ix",
    "    }",
    "    return locations",
    "}",
    "method file(name) on(origin) orPath(pathString) otherwise(action) {",
    "    def locations = splitPath(pathString)",
    "    locations.addFirst(origin)",
    "    locations.addFirst \"./\"",
    "    locations.addLast(execDir)",
    "",
    "    locations.do { each ->",
    "        def candidate = each ++ name",
    "        if ( io.exists(candidate) ) then {",
    "            return candidate",
    "        }",
    "    }",
    "    action.apply(locations)",
    "}",
    "method file(name) onPath(pathString) otherwise(action) {",
    "    file(name) on(sourceDir) orPath(pathString) otherwise(action)",
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
    "    print \"  --make           Compile FILE and link, creating a native executable\"",
    "    print \"  --run            Compile FILE and execute the program [default]\"",
    "    print \"  --source         Compile FILE to C source, but no further\"",
    "    print \"  --noexec         Compile FILE to native object code, but don't create executable\"",
    "    print \"  --dynamic-module Compile FILE as a dynamic module\"",
    "    print \"  --interactive    Launch interactive read-eval-print interpreter\"",
    "    print \"\"",
    "    print \"Options:\"",
    "    print \"  --verbose        Give more detailed output\"",
    "    print \"  --target TGT     Choose a non-default compilation target TGT\"",
    "    print \"                   Use --target help to list supported targets.\"",
    "    print \"  -o OFILE         Output to OFILE instead of default\"",
    "    print \"  -j N             Spawn at most N concurrent subprocesses\"",
    "    print \"  --help           This text\"",
    "    print \"  --module         Override default module name (derived from FILE)\"",
    "    print \"  --no-recurse     Do not compile imported modules\"",
    "    print \"  --stdout         Output to standard output rather than a file\"",
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
    "}",
  ];
};
if (typeof global !== "undefined")
  global.gracecode_util = gracecode_util;
if (typeof window !== "undefined")
  window.gracecode_util = gracecode_util;
