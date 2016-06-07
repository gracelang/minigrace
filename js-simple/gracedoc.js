"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_gracedoc() {
  setModuleName("gracedoc");
  this.definitionModule = "gracedoc";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_gracedoc_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_gracedoc_outer0;
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
    setModuleName("gracedoc");
    // ast is a simple accessor - elide try ... catch
    return var_ast;
  };
  func1.paramCounts = [0];
  this.methods["ast"] = func1;
  func1.definitionLine = 1;
  func1.definitionModule = "gracedoc";
  func1.debug = "import";
  func1.confidential = true;
  setModuleName("gracedoc");
  setLineNumber(2);    // compilenode import
  // Import of parser as parser
  if (typeof gracecode_parser == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module parser'));
  var var_parser = do_import("parser", gracecode_parser);
  var func2 = function(argcv) {    // method parser
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for parser"));
    setModuleName("gracedoc");
    // parser is a simple accessor - elide try ... catch
    return var_parser;
  };
  func2.paramCounts = [0];
  this.methods["parser"] = func2;
  func2.definitionLine = 2;
  func2.definitionModule = "gracedoc";
  func2.debug = "import";
  func2.confidential = true;
  setModuleName("gracedoc");
  setLineNumber(3);    // compilenode import
  // Import of lexer as lexer
  if (typeof gracecode_lexer == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module lexer'));
  var var_lexer = do_import("lexer", gracecode_lexer);
  var func3 = function(argcv) {    // method lexer
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for lexer"));
    setModuleName("gracedoc");
    // lexer is a simple accessor - elide try ... catch
    return var_lexer;
  };
  func3.paramCounts = [0];
  this.methods["lexer"] = func3;
  func3.definitionLine = 3;
  func3.definitionModule = "gracedoc";
  func3.debug = "import";
  func3.confidential = true;
  setModuleName("gracedoc");
  setLineNumber(4);    // compilenode import
  // Import of io as io
  if (typeof gracecode_io == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module io'));
  var var_io = do_import("io", gracecode_io);
  var func4 = function(argcv) {    // method io
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for io"));
    setModuleName("gracedoc");
    // io is a simple accessor - elide try ... catch
    return var_io;
  };
  func4.paramCounts = [0];
  this.methods["io"] = func4;
  func4.definitionLine = 4;
  func4.definitionModule = "gracedoc";
  func4.debug = "import";
  func4.confidential = true;
  setModuleName("gracedoc");
  setLineNumber(5);    // compilenode import
  // Import of sys as sys
  if (typeof gracecode_sys == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module sys'));
  var var_sys = do_import("sys", gracecode_sys);
  var func5 = function(argcv) {    // method sys
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for sys"));
    setModuleName("gracedoc");
    // sys is a simple accessor - elide try ... catch
    return var_sys;
  };
  func5.paramCounts = [0];
  this.methods["sys"] = func5;
  func5.definitionLine = 5;
  func5.definitionModule = "gracedoc";
  func5.debug = "import";
  func5.confidential = true;
  setModuleName("gracedoc");
  setLineNumber(15);    // compilenode method
  var func6 = function(argcv) {    // method parseArguments
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for parseArguments"));
    setModuleName("gracedoc");
    setLineNumber(16);    // compilenode identifier
    var call7 = callmethodChecked(var_sys, "argv", [0]);
    var var_args = call7;
    var if8 = GraceDone;
    setLineNumber(17);    // compilenode identifier
    var call10 = callmethodChecked(var_args, "size", [0]);
    var opresult12 = callmethodChecked(call10, ">", [1], new GraceNum(1));
    if (Grace_isTrue(opresult12)) {
      setLineNumber(18);    // compilenode identifier
      var call13 = callmethodChecked(var_args, "indices", [0]);
      var var_indices = call13;
      setLineNumber(19);    // compilenode identifier
      var var_skip = GraceTrue;
      setLineNumber(20);    // compilenode block
      var block14 = new GraceBlock(this, 20, 1);
      setLineNumber(1);    // compilenode identifier
      block14.real = function(var_i) {
        setLineNumber(21);    // compilenode identifier
        var call15 = callmethodChecked(var_args, "at", [1], var_i);
        var var_arg = call15;
        var if16 = GraceDone;
        setLineNumber(22);    // compilenode string
        var string17 = new GraceString("-");
        var call19 = callmethodChecked(var_arg, "at", [1], new GraceNum(1));
        var opresult21 = callmethodChecked(call19, "==", [1], string17);
        if (Grace_isTrue(opresult21)) {
          setLineNumber(23);    // compilenode identifier
          var cases22 = [];
          setLineNumber(24);    // compilenode block
          var block23 = new GraceBlock(this, 24, 0);
          var string24 = new GraceString("-i");
          block23.pattern = string24;
          block23.real = function() {
            var if25 = GraceDone;
            setLineNumber(25);    // compilenode identifier
            var opresult28 = callmethodChecked(var_i, "+", [1], new GraceNum(1));
            var call30 = callmethodChecked(var_args, "size", [0]);
            var opresult32 = callmethodChecked(call30, "<", [1], opresult28);
            if (Grace_isTrue(opresult32)) {
              setLineNumber(26);    // compilenode string
              var string33 = new GraceString("gracedoc: -i requires an argument.\n");
              var call34 = callmethodChecked(var_io, "error", [0]);
              var call35 = callmethodChecked(call34, "write", [1], string33);
              setLineNumber(27);    // compilenode identifier
              var call36 = callmethodChecked(var_sys, "exit", [1], new GraceNum(1));
              if25 = call36;
            }
            setLineNumber(29);    // compilenode identifier
            var_skip = GraceTrue;
            setLineNumber(30);    // compilenode identifier
            var opresult39 = callmethodChecked(var_i, "+", [1], new GraceNum(1));
            var call40 = callmethodChecked(var_args, "at", [1], opresult39);
            var call41 = callmethodChecked(var_settings, "inputdir:=", [1], call40);
            return call41;
          };
          cases22.push(block23);
          setLineNumber(31);    // compilenode block
          var block42 = new GraceBlock(this, 31, 0);
          var string43 = new GraceString("-o");
          block42.pattern = string43;
          block42.real = function() {
            var if44 = GraceDone;
            setLineNumber(32);    // compilenode identifier
            var opresult47 = callmethodChecked(var_i, "+", [1], new GraceNum(1));
            var call49 = callmethodChecked(var_args, "size", [0]);
            var opresult51 = callmethodChecked(call49, "<", [1], opresult47);
            if (Grace_isTrue(opresult51)) {
              setLineNumber(33);    // compilenode string
              var string52 = new GraceString("gracedoc: -o requires an argument.\n");
              var call53 = callmethodChecked(var_io, "error", [0]);
              var call54 = callmethodChecked(call53, "write", [1], string52);
              setLineNumber(34);    // compilenode identifier
              var call55 = callmethodChecked(var_sys, "exit", [1], new GraceNum(1));
              if44 = call55;
            }
            setLineNumber(36);    // compilenode identifier
            var_skip = GraceTrue;
            setLineNumber(37);    // compilenode identifier
            var opresult58 = callmethodChecked(var_i, "+", [1], new GraceNum(1));
            var call59 = callmethodChecked(var_args, "at", [1], opresult58);
            var call60 = callmethodChecked(var_settings, "outputdir:=", [1], call59);
            return call60;
          };
          cases22.push(block42);
          setLineNumber(38);    // compilenode block
          var block61 = new GraceBlock(this, 38, 0);
          var string62 = new GraceString("-v");
          block61.pattern = string62;
          block61.real = function() {
            var if63 = GraceDone;
            setLineNumber(39);    // compilenode identifier
            var opresult66 = callmethodChecked(var_i, "+", [1], new GraceNum(1));
            var call68 = callmethodChecked(var_args, "size", [0]);
            var opresult70 = callmethodChecked(call68, "<", [1], opresult66);
            if (Grace_isTrue(opresult70)) {
              setLineNumber(40);    // compilenode string
              var string71 = new GraceString("gracedoc: -v requires an argument.\n");
              var call72 = callmethodChecked(var_io, "error", [0]);
              var call73 = callmethodChecked(call72, "write", [1], string71);
              setLineNumber(41);    // compilenode identifier
              var call74 = callmethodChecked(var_sys, "exit", [1], new GraceNum(1));
              if63 = call74;
            }
            setLineNumber(43);    // compilenode identifier
            var_skip = GraceTrue;
            setLineNumber(44);    // compilenode identifier
            var opresult77 = callmethodChecked(var_i, "+", [1], new GraceNum(1));
            var call78 = callmethodChecked(var_args, "at", [1], opresult77);
            var call79 = callmethodChecked(call78, "asNumber", [0]);
            var call80 = callmethodChecked(var_settings, "verbosity:=", [1], call79);
            return call80;
          };
          cases22.push(block61);
          setLineNumber(45);    // compilenode block
          var block81 = new GraceBlock(this, 45, 0);
          var string82 = new GraceString("--publiconly");
          block81.pattern = string82;
          block81.real = function() {
            setLineNumber(46);    // compilenode identifier
            var call83 = callmethodChecked(var_settings, "publicOnly:=", [1], GraceTrue);
            return call83;
          };
          cases22.push(block81);
          setLineNumber(47);    // compilenode block
          var block84 = new GraceBlock(this, 47, 0);
          var string85 = new GraceString("--help");
          block84.pattern = string85;
          block84.real = function() {
            setLineNumber(48);    // compilenode string
            var string86 = new GraceString(" -i <path> -o <path> [-v <level>] [--help] [--publiconly]");
            var call88 = callmethodChecked(var_args, "at", [1], new GraceNum(1));
            var string90 = new GraceString("Usage: ");
            var opresult92 = callmethodChecked(string90, "++", [1], call88);
            var opresult94 = callmethodChecked(opresult92, "++", [1], string86);
            var call95 = Grace_print(opresult94);
            setLineNumber(49);    // compilenode string
            var string96 = new GraceString("  -i <path>      The directory to process (contains .grace files)");
            var call97 = Grace_print(string96);
            setLineNumber(50);    // compilenode string
            var string98 = new GraceString("  -o <path>      The directory to contain the generated HTML files");
            var call99 = Grace_print(string98);
            setLineNumber(51);    // compilenode string
            var string100 = new GraceString("  [-v <level>]   Optional. Level of detail in output (0 = none, 1 = some, 2 = all); default is 0");
            var call101 = Grace_print(string100);
            setLineNumber(52);    // compilenode string
            var string102 = new GraceString("  [--publiconly] Optional. If set, only public methods are documented and public ");
            var call103 = Grace_print(string102);
            setLineNumber(53);    // compilenode string
            var string104 = new GraceString("                 variables are listed as methods. Default is off.");
            var call105 = Grace_print(string104);
            setLineNumber(54);    // compilenode string
            var string106 = new GraceString("  [--help]       Optional. Print this usage information.");
            var call107 = Grace_print(string106);
            return call107;
          };
          cases22.push(block84);
          setLineNumber(55);    // compilenode block
          var block108 = new GraceBlock(this, 55, 1);
          setLineNumber(1);    // compilenode identifier
          block108.real = function(var___95____95__0) {
            setLineNumber(56);    // compilenode string
            var string109 = new GraceString(".\n");
            var string112 = new GraceString("gracedoc: Invalid argument ");
            var opresult114 = callmethodChecked(string112, "++", [1], var_arg);
            var opresult116 = callmethodChecked(opresult114, "++", [1], string109);
            var call117 = callmethodChecked(var_io, "error", [0]);
            var call118 = callmethodChecked(call117, "write", [1], opresult116);
            return call118;
          };
          cases22.push(block108);
          setLineNumber(23);    // compilematchcase
          var matchres22 = matchCase(var_arg,cases22,false);
          setModuleName("gracedoc");
          if16 = matchres22;
        } else {
          var if119 = GraceDone;
          setLineNumber(59);    // compilenode identifier
          var opresult122 = callmethodChecked(var_skip, "==", [1], GraceTrue);
          if (Grace_isTrue(opresult122)) {
            setLineNumber(60);    // compilenode identifier
            var_skip = GraceFalse;
            if119 = GraceDone;
          } else {
            setLineNumber(62);    // compilenode string
            var string123 = new GraceString(". Arguments must start with a -.\n");
            var string126 = new GraceString("gracedoc: Invalid argument ");
            var opresult128 = callmethodChecked(string126, "++", [1], var_arg);
            var opresult130 = callmethodChecked(opresult128, "++", [1], string123);
            var call131 = callmethodChecked(var_io, "error", [0]);
            var call132 = callmethodChecked(call131, "write", [1], opresult130);
            setLineNumber(63);    // compilenode identifier
            var call133 = callmethodChecked(var_sys, "exit", [1], new GraceNum(1));
            if119 = call133;
          }
          if16 = if119;
        }
        return if16;
      };
      var call134 = callmethodChecked(var_prelude, "for()do", [1, 1], var_indices, block14);
      var if135 = GraceDone;
      setLineNumber(67);    // compilenode string
      var string136 = new GraceString("");
      var call138 = callmethodChecked(var_settings, "outputdir", [0]);
      var opresult140 = callmethodChecked(call138, "==", [1], string136);
      var string142 = new GraceString("");
      var call144 = callmethodChecked(var_settings, "inputdir", [0]);
      var opresult146 = callmethodChecked(call144, "==", [1], string142);
      var opresult148 = callmethodChecked(opresult146, "||", [1], opresult140);
      if (Grace_isTrue(opresult148)) {
        setLineNumber(68);    // compilenode string
        var string149 = new GraceString("gracedoc: Both the -i and -o arguments are required.\n");
        var call150 = callmethodChecked(var_io, "error", [0]);
        var call151 = callmethodChecked(call150, "write", [1], string149);
        setLineNumber(69);    // compilenode identifier
        var call152 = callmethodChecked(var_sys, "exit", [1], new GraceNum(1));
        if135 = call152;
      }
      if8 = if135;
    } else {
      setLineNumber(72);    // compilenode string
      var string153 = new GraceString("gracedoc: Both the -i and -o arguments are required.\n");
      var call154 = callmethodChecked(var_io, "error", [0]);
      var call155 = callmethodChecked(call154, "write", [1], string153);
      setLineNumber(73);    // compilenode identifier
      var call156 = callmethodChecked(var_sys, "exit", [1], new GraceNum(1));
      if8 = call156;
    }
    return if8;
  };
  func6.paramCounts = [0];
  this.methods["parseArguments"] = func6;
  func6.definitionLine = 15;
  func6.definitionModule = "gracedoc";
  setLineNumber(115);    // compilenode method
  var func157 = function(argcv) {    // method trim(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_c = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for trim(1)"));
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_String, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in trim (arg list 1), which corresponds to parameter c, does not have " + 
                callmethod(var_String, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("gracedoc");
    setLineNumber(116);    // compilenode num
    var var_start = new GraceNum(1);
    setLineNumber(117);    // compilenode identifier
    var call158 = callmethodChecked(var_c, "size", [0]);
    var var_end = call158;
    setLineNumber(118);    // compilenode block
    var block159 = new GraceBlock(this, 118, 0);
    block159.real = function() {
      var string160 = new GraceString(" ");
      var call162 = callmethodChecked(var_c, "at", [1], var_start);
      var opresult164 = callmethodChecked(call162, "==", [1], string160);
      return opresult164;
    };
    var block165 = new GraceBlock(this, 118, 0);
    block165.real = function() {
      var opresult168 = callmethodChecked(var_start, "+", [1], new GraceNum(1));
      var_start = opresult168;
      return GraceDone;
    };
    var call169 = callmethodChecked(var_prelude, "while()do", [1, 1], block159, block165);
    setLineNumber(119);    // compilenode block
    var block170 = new GraceBlock(this, 119, 0);
    block170.real = function() {
      var string171 = new GraceString(" ");
      var call173 = callmethodChecked(var_c, "at", [1], var_end);
      var opresult175 = callmethodChecked(call173, "==", [1], string171);
      return opresult175;
    };
    var block176 = new GraceBlock(this, 119, 0);
    block176.real = function() {
      var diff179 = callmethodChecked(var_end, "-", [1], new GraceNum(1));
      var_end = diff179;
      return GraceDone;
    };
    var call180 = callmethodChecked(var_prelude, "while()do", [1, 1], block170, block176);
    setLineNumber(120);    // compilenode identifier
    var call181 = callmethodChecked(var_c, "substringFrom()to", [1, 1], var_start, var_end);
    return call181;
  };
  func157.paramTypes = [];
  func157.paramTypes.push([type_String, "c"]);
  func157.paramCounts = [1];
  this.methods["trim"] = func157;
  func157.definitionLine = 115;
  func157.definitionModule = "gracedoc";
  setLineNumber(123);    // compilenode method
  var func182 = function(argcv) {    // method indent(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_n = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for indent(1)"));
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_Number, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in indent (arg list 1), which corresponds to parameter n, does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("gracedoc");
    var if183 = GraceDone;
    setLineNumber(125);    // compilenode identifier
    var opresult186 = callmethodChecked(var_n, "==", [1], new GraceNum(0));
    if (Grace_isTrue(opresult186)) {
      var string187 = new GraceString("");
      return string187;
    } else {
      var if188 = GraceDone;
      setLineNumber(126);    // compilenode identifier
      var opresult191 = callmethodChecked(var_n, "==", [1], new GraceNum(1));
      if (Grace_isTrue(opresult191)) {
        var string192 = new GraceString("    ");
        return string192;
      } else {
        var if193 = GraceDone;
        setLineNumber(127);    // compilenode identifier
        var opresult196 = callmethodChecked(var_n, "==", [1], new GraceNum(2));
        if (Grace_isTrue(opresult196)) {
          var string197 = new GraceString("        ");
          return string197;
        } else {
          var if198 = GraceDone;
          setLineNumber(128);    // compilenode identifier
          var opresult201 = callmethodChecked(var_n, "==", [1], new GraceNum(3));
          if (Grace_isTrue(opresult201)) {
            var string202 = new GraceString("            ");
            return string202;
          } else {
            var if203 = GraceDone;
            setLineNumber(129);    // compilenode identifier
            var opresult206 = callmethodChecked(var_n, "==", [1], new GraceNum(4));
            if (Grace_isTrue(opresult206)) {
              var string207 = new GraceString("                ");
              return string207;
            } else {
              var if208 = GraceDone;
              setLineNumber(130);    // compilenode identifier
              var opresult211 = callmethodChecked(var_n, "==", [1], new GraceNum(5));
              if (Grace_isTrue(opresult211)) {
                var string212 = new GraceString("                    ");
                return string212;
              } else {
                var if213 = GraceDone;
                setLineNumber(131);    // compilenode identifier
                var opresult216 = callmethodChecked(var_n, "==", [1], new GraceNum(6));
                if (Grace_isTrue(opresult216)) {
                  var string217 = new GraceString("                        ");
                  return string217;
                } else {
                  var if218 = GraceDone;
                  setLineNumber(132);    // compilenode identifier
                  var opresult221 = callmethodChecked(var_n, "==", [1], new GraceNum(7));
                  if (Grace_isTrue(opresult221)) {
                    var string222 = new GraceString("                            ");
                    return string222;
                  } else {
                    var if223 = GraceDone;
                    setLineNumber(133);    // compilenode identifier
                    var opresult226 = callmethodChecked(var_n, "==", [1], new GraceNum(8));
                    if (Grace_isTrue(opresult226)) {
                      var string227 = new GraceString("                                ");
                      return string227;
                    } else {
                      setLineNumber(134);    // compilenode string
                      var string228 = new GraceString("                                    ");
                      return string228;
                    }
                    if218 = if223;
                  }
                  if213 = if218;
                }
                if208 = if213;
              }
              if203 = if208;
            }
            if198 = if203;
          }
          if193 = if198;
        }
        if188 = if193;
      }
      if183 = if188;
    }
    setLineNumber(125);    // return value
    if (!Grace_isTrue(callmethod(var_String, "match", [1], if183)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("result of method indent(1) does not have " + 
                callmethod(var_String, "asString", [0])._value + "."));
    return if183;
  };
  func182.paramTypes = [];
  func182.paramTypes.push([type_Number, "n"]);
  func182.paramCounts = [1];
  this.methods["indent"] = func182;
  func182.definitionLine = 123;
  func182.definitionModule = "gracedoc";
  setLineNumber(137);    // compilenode method
  var func229 = function(argcv) {    // method autoindent(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_input = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for autoindent(1)"));
    setModuleName("gracedoc");
    setLineNumber(138);    // compilenode string
    var string231 = new GraceString("link");
    var string232 = new GraceString("td");
    var string233 = new GraceString("meta");
    var string234 = new GraceString("style");
    var string235 = new GraceString("title");
    setLineNumber(139);    // compilenode string
    var string236 = new GraceString("table");
    var string237 = new GraceString("div");
    var string238 = new GraceString("tr");
    var string239 = new GraceString("th");
    var string240 = new GraceString("iframe");
    var string241 = new GraceString("script");
    var string242 = new GraceString("section");
    var string243 = new GraceString("h1");
    var string244 = new GraceString("h2");
    setLineNumber(140);    // compilenode string
    var string245 = new GraceString("h3");
    var string246 = new GraceString("h4");
    var string247 = new GraceString("h5");
    var string248 = new GraceString("h6");
    var string249 = new GraceString("ul");
    var string250 = new GraceString("li");
    var string251 = new GraceString("html");
    var string252 = new GraceString("body");
    var string253 = new GraceString("head");
    var string254 = new GraceString("hr");
    var array230 = new Lineup([string231, string232, string233, string234, string235, string236, string237, string238, string239, string240, string241, string242, string243, string244, string245, string246, string247, string248, string249, string250, string251, string252, string253, string254]);
    var call255 = callmethodChecked(var_prelude, "set", [1], array230);
    var var_indentedtags = call255;
    setLineNumber(141);    // compilenode string
    var string257 = new GraceString("a");
    var string258 = new GraceString("span");
    var string259 = new GraceString("td");
    var string260 = new GraceString("th");
    var string261 = new GraceString("li");
    var string262 = new GraceString("h1");
    setLineNumber(142);    // compilenode string
    var string263 = new GraceString("h2");
    var string264 = new GraceString("h3");
    var string265 = new GraceString("h4");
    var string266 = new GraceString("h5");
    var string267 = new GraceString("h6");
    var string268 = new GraceString("title");
    var string269 = new GraceString("script");
    var string270 = new GraceString("b");
    var string271 = new GraceString("i");
    var string272 = new GraceString("em");
    setLineNumber(143);    // compilenode string
    var string273 = new GraceString("strong");
    var array256 = new Lineup([string257, string258, string259, string260, string261, string262, string263, string264, string265, string266, string267, string268, string269, string270, string271, string272, string273]);
    var call274 = callmethodChecked(var_prelude, "set", [1], array256);
    var var_samelineclosingtags = call274;
    setLineNumber(144);    // compilenode num
    var var_stack = new GraceNum(0);
    if (!Grace_isTrue(callmethod(var_Number, "match", [1], var_stack)))
      throw new GraceExceptionPacket(TypeErrorObject,
          new GraceString("initial value of var 'stack' is not of type Number"));
    setLineNumber(145);    // compilenode identifier
    var call275 = callmethodChecked(var_input, "length", [0]);
    var var_inputSize = call275;
    setLineNumber(146);    // compilenode string
    var string276 = new GraceString("");
    var var_output = string276;
    setLineNumber(147);    // compilenode vardec
    var var_char1;
    setLineNumber(148);    // compilenode vardec
    var var_char2;
    setLineNumber(149);    // compilenode num
    var var_cidx = new GraceNum(1);
    setLineNumber(150);    // compilenode vardec
    var var_tagName;
    setLineNumber(151);    // compilenode block
    var block277 = new GraceBlock(this, 151, 0);
    block277.real = function() {
      var opresult280 = callmethodChecked(var_cidx, "\u2264", [1], var_inputSize);
      return opresult280;
    };
    var block281 = new GraceBlock(this, 151, 0);
    block281.real = function() {
      setLineNumber(152);    // compilenode string
      var string282 = new GraceString("");
      var_tagName = string282;
      setLineNumber(153);    // compilenode identifier
      var call283 = callmethodChecked(var_input, "at", [1], var_cidx);
      var_char1 = call283;
      setLineNumber(154);    // compilenode identifier
      var opresult286 = callmethodChecked(var_cidx, "+", [1], new GraceNum(1));
      var call287 = callmethodChecked(var_input, "at", [1], opresult286);
      var_char2 = call287;
      var if288 = GraceDone;
      setLineNumber(155);    // compilenode string
      var string289 = new GraceString("<");
      var opresult292 = callmethodChecked(var_char1, "==", [1], string289);
      if (Grace_isTrue(opresult292)) {
        var if293 = GraceDone;
        setLineNumber(156);    // compilenode string
        var string294 = new GraceString("/");
        var opresult297 = callmethodChecked(var_char2, "\u2260", [1], string294);
        if (Grace_isTrue(opresult297)) {
          setLineNumber(158);    // compilenode identifier
          var opresult300 = callmethodChecked(var_cidx, "+", [1], new GraceNum(1));
          var var_idx = opresult300;
          setLineNumber(159);    // compilenode block
          var block301 = new GraceBlock(this, 159, 0);
          block301.real = function() {
            var string302 = new GraceString(">");
            var call304 = callmethodChecked(var_input, "at", [1], var_idx);
            var opresult306 = callmethodChecked(call304, "\u2260", [1], string302);
            var string308 = new GraceString(" ");
            var call310 = callmethodChecked(var_input, "at", [1], var_idx);
            var opresult312 = callmethodChecked(call310, "\u2260", [1], string308);
            var opresult314 = callmethodChecked(opresult312, "&&", [1], opresult306);
            return opresult314;
          };
          var block315 = new GraceBlock(this, 159, 0);
          block315.real = function() {
            setLineNumber(160);    // compilenode identifier
            var call316 = callmethodChecked(var_input, "at", [1], var_idx);
            var opresult319 = callmethodChecked(var_tagName, "++", [1], call316);
            var_tagName = opresult319;
            setLineNumber(161);    // compilenode identifier
            var opresult322 = callmethodChecked(var_idx, "+", [1], new GraceNum(1));
            var_idx = opresult322;
            return GraceDone;
          };
          var call323 = callmethodChecked(var_prelude, "while()do", [1, 1], block301, block315);
          var if324 = GraceDone;
          setLineNumber(163);    // compilenode identifier
          var call325 = callmethodChecked(var_indentedtags, "contains", [1], var_tagName);
          if (Grace_isTrue(call325)) {
            var if326 = GraceDone;
            setLineNumber(164);    // compilenode string
            var string327 = new GraceString("html");
            var opresult330 = callmethodChecked(var_tagName, "\u2260", [1], string327);
            if (Grace_isTrue(opresult330)) {
              setLineNumber(165);    // compilenode string
              var string331 = new GraceString("\n");
              var opresult334 = callmethodChecked(var_output, "++", [1], string331);
              var_output = opresult334;
              if326 = GraceDone;
            }
            setLineNumber(167);    // compilenode identifier
            onSelf = true;
            var call335 = callmethodChecked(this, "indent", [1], var_stack);
            var opresult338 = callmethodChecked(var_output, "++", [1], call335);
            var_output = opresult338;
            setLineNumber(168);    // compilenode identifier
            var opresult341 = callmethodChecked(var_stack, "+", [1], new GraceNum(1));
            var_stack = opresult341;
            if324 = GraceDone;
          }
          if293 = if324;
        } else {
          setLineNumber(172);    // compilenode identifier
          var opresult344 = callmethodChecked(var_cidx, "+", [1], new GraceNum(2));
          var var_idx = opresult344;
          setLineNumber(173);    // compilenode block
          var block345 = new GraceBlock(this, 173, 0);
          block345.real = function() {
            var string346 = new GraceString(">");
            var call348 = callmethodChecked(var_input, "at", [1], var_idx);
            var opresult350 = callmethodChecked(call348, "\u2260", [1], string346);
            return opresult350;
          };
          var block351 = new GraceBlock(this, 173, 0);
          block351.real = function() {
            setLineNumber(174);    // compilenode identifier
            var call352 = callmethodChecked(var_input, "at", [1], var_idx);
            var opresult355 = callmethodChecked(var_tagName, "++", [1], call352);
            var_tagName = opresult355;
            setLineNumber(175);    // compilenode identifier
            var opresult358 = callmethodChecked(var_idx, "+", [1], new GraceNum(1));
            var_idx = opresult358;
            return GraceDone;
          };
          var call359 = callmethodChecked(var_prelude, "while()do", [1, 1], block345, block351);
          var if360 = GraceDone;
          setLineNumber(177);    // compilenode identifier
          var call361 = callmethodChecked(var_indentedtags, "contains", [1], var_tagName);
          if (Grace_isTrue(call361)) {
            setLineNumber(178);    // compilenode identifier
            var diff364 = callmethodChecked(var_stack, "-", [1], new GraceNum(1));
            var_stack = diff364;
            var if365 = GraceDone;
            setLineNumber(179);    // compilenode identifier
            var call366 = callmethodChecked(var_samelineclosingtags, "contains", [1], var_tagName);
            var call367 = callmethodChecked(call366, "prefix!", [0]);
            if (Grace_isTrue(call367)) {
              setLineNumber(180);    // compilenode identifier
              onSelf = true;
              var call368 = callmethodChecked(this, "indent", [1], var_stack);
              var string370 = new GraceString("\n");
              var opresult373 = callmethodChecked(var_output, "++", [1], string370);
              var opresult375 = callmethodChecked(opresult373, "++", [1], call368);
              var_output = opresult375;
              if365 = GraceDone;
            }
            if360 = if365;
          }
          if293 = if360;
        }
        if288 = if293;
      } else {
        var if376 = GraceDone;
        setLineNumber(184);    // compilenode string
        var string377 = new GraceString(">");
        var opresult380 = callmethodChecked(var_char2, "==", [1], string377);
        var string382 = new GraceString("/");
        var opresult385 = callmethodChecked(var_char1, "==", [1], string382);
        var opresult387 = callmethodChecked(opresult385, "&&", [1], opresult380);
        if (Grace_isTrue(opresult387)) {
          setLineNumber(186);    // compilenode identifier
          var diff390 = callmethodChecked(var_stack, "-", [1], new GraceNum(1));
          var_stack = diff390;
          if376 = GraceDone;
        }
        if288 = if376;
      }
      setLineNumber(188);    // compilenode identifier
      var opresult393 = callmethodChecked(var_output, "++", [1], var_char1);
      var_output = opresult393;
      setLineNumber(189);    // compilenode identifier
      var opresult396 = callmethodChecked(var_cidx, "+", [1], new GraceNum(1));
      var_cidx = opresult396;
      return GraceDone;
    };
    var call397 = callmethodChecked(var_prelude, "while()do", [1, 1], block277, block281);
    setLineNumber(191);    // compilenode identifier
    return var_output;
  };
  func229.paramCounts = [1];
  this.methods["autoindent"] = func229;
  func229.definitionLine = 137;
  func229.definitionModule = "gracedoc";
  setLineNumber(194);    // compilenode method
  var func398 = function(argcv) {    // method directoryBuilderForFile(1)outTo(1)as(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_in = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for directoryBuilderForFile (arg list 1) of directoryBuilderForFile(1)outTo(1)as(1)"));
    var var_dir = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for outTo (arg list 2) of directoryBuilderForFile(1)outTo(1)as(1)"));
    var var_pageType = arguments[curarg];
    curarg++;
    if (argcv[2] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for as (arg list 3) of directoryBuilderForFile(1)outTo(1)as(1)"));
    setModuleName("gracedoc");
    var obj399 = Grace_allocObject(null, "gracedoc.directoryBuilderForFile()outTo()as");
    obj399.definitionModule = "gracedoc";
    obj399.definitionLine = 194;
    obj399.outer = this;
    var reader_gracedoc_outer400 = function() {
      return this.outer;
    };
    obj399.methods["outer"] = reader_gracedoc_outer400;
    var obj_init_399 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj399;
      var func401 = function(argcv) {    // method generate
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for generate"));
        setModuleName("gracedoc");
        setLineNumber(211);    // compilenode vardec
        var var_outfile;
        var if402 = GraceDone;
        setLineNumber(212);    // compilenode string
        var string403 = new GraceString("");
        var call405 = callmethodChecked(var_settings, "outputdir", [0]);
        var string407 = new GraceString("");
        var opresult409 = callmethodChecked(string407, "++", [1], call405);
        var opresult411 = callmethodChecked(opresult409, "++", [1], string403);
        var call412 = callmethodChecked(var_io, "exists", [1], opresult411);
        var call413 = callmethodChecked(call412, "prefix!", [0]);
        if (Grace_isTrue(call413)) {
          var string414 = new GraceString("");
          var call416 = callmethodChecked(var_settings, "outputdir", [0]);
          var string418 = new GraceString("mkdir ");
          var opresult420 = callmethodChecked(string418, "++", [1], call416);
          var opresult422 = callmethodChecked(opresult420, "++", [1], string414);
          var call423 = callmethodChecked(var_io, "system", [1], opresult422);
          if402 = call423;
        }
        var if424 = GraceDone;
        setLineNumber(213);    // compilenode string
        var string425 = new GraceString("");
        onSelf = true;
        var call427 = callmethodChecked(this, "outdir", [0]);
        var string429 = new GraceString("/");
        var call431 = callmethodChecked(var_settings, "outputdir", [0]);
        var string433 = new GraceString("");
        var opresult435 = callmethodChecked(string433, "++", [1], call431);
        var opresult437 = callmethodChecked(opresult435, "++", [1], string429);
        var opresult439 = callmethodChecked(opresult437, "++", [1], call427);
        var opresult441 = callmethodChecked(opresult439, "++", [1], string425);
        var call442 = callmethodChecked(var_io, "exists", [1], opresult441);
        var call443 = callmethodChecked(call442, "prefix!", [0]);
        if (Grace_isTrue(call443)) {
          var string444 = new GraceString("");
          onSelf = true;
          var call446 = callmethodChecked(this, "outdir", [0]);
          var string448 = new GraceString("/");
          var call450 = callmethodChecked(var_settings, "outputdir", [0]);
          var string452 = new GraceString("mkdir ");
          var opresult454 = callmethodChecked(string452, "++", [1], call450);
          var opresult456 = callmethodChecked(opresult454, "++", [1], string448);
          var opresult458 = callmethodChecked(opresult456, "++", [1], call446);
          var opresult460 = callmethodChecked(opresult458, "++", [1], string444);
          var call461 = callmethodChecked(var_io, "system", [1], opresult460);
          if424 = call461;
        }
        var if462 = GraceDone;
        setLineNumber(214);    // compilenode string
        var string463 = new GraceString("/classes");
        onSelf = true;
        var call465 = callmethodChecked(this, "outdir", [0]);
        var string467 = new GraceString("/");
        var call469 = callmethodChecked(var_settings, "outputdir", [0]);
        var string471 = new GraceString("");
        var opresult473 = callmethodChecked(string471, "++", [1], call469);
        var opresult475 = callmethodChecked(opresult473, "++", [1], string467);
        var opresult477 = callmethodChecked(opresult475, "++", [1], call465);
        var opresult479 = callmethodChecked(opresult477, "++", [1], string463);
        var call480 = callmethodChecked(var_io, "exists", [1], opresult479);
        var call481 = callmethodChecked(call480, "prefix!", [0]);
        if (Grace_isTrue(call481)) {
          setLineNumber(215);    // compilenode string
          var string482 = new GraceString("/classes");
          onSelf = true;
          var call484 = callmethodChecked(this, "outdir", [0]);
          var string486 = new GraceString("/");
          var call488 = callmethodChecked(var_settings, "outputdir", [0]);
          var string490 = new GraceString("mkdir ");
          var opresult492 = callmethodChecked(string490, "++", [1], call488);
          var opresult494 = callmethodChecked(opresult492, "++", [1], string486);
          var opresult496 = callmethodChecked(opresult494, "++", [1], call484);
          var opresult498 = callmethodChecked(opresult496, "++", [1], string482);
          var call499 = callmethodChecked(var_io, "system", [1], opresult498);
          if462 = call499;
        }
        var if500 = GraceDone;
        setLineNumber(217);    // compilenode string
        var string501 = new GraceString("/types");
        onSelf = true;
        var call503 = callmethodChecked(this, "outdir", [0]);
        var string505 = new GraceString("/");
        var call507 = callmethodChecked(var_settings, "outputdir", [0]);
        var string509 = new GraceString("");
        var opresult511 = callmethodChecked(string509, "++", [1], call507);
        var opresult513 = callmethodChecked(opresult511, "++", [1], string505);
        var opresult515 = callmethodChecked(opresult513, "++", [1], call503);
        var opresult517 = callmethodChecked(opresult515, "++", [1], string501);
        var call518 = callmethodChecked(var_io, "exists", [1], opresult517);
        var call519 = callmethodChecked(call518, "prefix!", [0]);
        if (Grace_isTrue(call519)) {
          setLineNumber(218);    // compilenode string
          var string520 = new GraceString("/types");
          onSelf = true;
          var call522 = callmethodChecked(this, "outdir", [0]);
          var string524 = new GraceString("/");
          var call526 = callmethodChecked(var_settings, "outputdir", [0]);
          var string528 = new GraceString("mkdir ");
          var opresult530 = callmethodChecked(string528, "++", [1], call526);
          var opresult532 = callmethodChecked(opresult530, "++", [1], string524);
          var opresult534 = callmethodChecked(opresult532, "++", [1], call522);
          var opresult536 = callmethodChecked(opresult534, "++", [1], string520);
          var call537 = callmethodChecked(var_io, "system", [1], opresult536);
          if500 = call537;
        }
        var if538 = GraceDone;
        setLineNumber(220);    // compilenode call
        onSelf = true;
        var call539 = callmethodChecked(this, "isOnClassPage", [0]);
        if (Grace_isTrue(call539)) {
          setLineNumber(221);    // compilenode string
          var string540 = new GraceString(".html");
          onSelf = true;
          var call542 = callmethodChecked(this, "pageName", [0]);
          var string544 = new GraceString("/classes/");
          onSelf = true;
          var call546 = callmethodChecked(this, "outdir", [0]);
          var string548 = new GraceString("/");
          var call550 = callmethodChecked(var_settings, "outputdir", [0]);
          var string552 = new GraceString("");
          var opresult554 = callmethodChecked(string552, "++", [1], call550);
          var opresult556 = callmethodChecked(opresult554, "++", [1], string548);
          var opresult558 = callmethodChecked(opresult556, "++", [1], call546);
          var opresult560 = callmethodChecked(opresult558, "++", [1], string544);
          var opresult562 = callmethodChecked(opresult560, "++", [1], call542);
          var opresult564 = callmethodChecked(opresult562, "++", [1], string540);
          var string565 = new GraceString("w");
          var call566 = callmethodChecked(var_io, "open", [2], opresult564, string565);
          var_outfile = call566;
          if538 = GraceDone;
        } else {
          var if567 = GraceDone;
          setLineNumber(222);    // compilenode call
          onSelf = true;
          var call568 = callmethodChecked(this, "isOnTypePage", [0]);
          if (Grace_isTrue(call568)) {
            setLineNumber(223);    // compilenode string
            var string569 = new GraceString(".html");
            onSelf = true;
            var call571 = callmethodChecked(this, "pageName", [0]);
            var string573 = new GraceString("/types/");
            onSelf = true;
            var call575 = callmethodChecked(this, "outdir", [0]);
            var string577 = new GraceString("/");
            var call579 = callmethodChecked(var_settings, "outputdir", [0]);
            var string581 = new GraceString("");
            var opresult583 = callmethodChecked(string581, "++", [1], call579);
            var opresult585 = callmethodChecked(opresult583, "++", [1], string577);
            var opresult587 = callmethodChecked(opresult585, "++", [1], call575);
            var opresult589 = callmethodChecked(opresult587, "++", [1], string573);
            var opresult591 = callmethodChecked(opresult589, "++", [1], call571);
            var opresult593 = callmethodChecked(opresult591, "++", [1], string569);
            var string594 = new GraceString("w");
            var call595 = callmethodChecked(var_io, "open", [2], opresult593, string594);
            var_outfile = call595;
            if567 = GraceDone;
          } else {
            setLineNumber(225);    // compilenode string
            var string596 = new GraceString(".html");
            onSelf = true;
            var call598 = callmethodChecked(this, "pageName", [0]);
            var string600 = new GraceString("/");
            onSelf = true;
            var call602 = callmethodChecked(this, "outdir", [0]);
            var string604 = new GraceString("/");
            var call606 = callmethodChecked(var_settings, "outputdir", [0]);
            var string608 = new GraceString("");
            var opresult610 = callmethodChecked(string608, "++", [1], call606);
            var opresult612 = callmethodChecked(opresult610, "++", [1], string604);
            var opresult614 = callmethodChecked(opresult612, "++", [1], call602);
            var opresult616 = callmethodChecked(opresult614, "++", [1], string600);
            var opresult618 = callmethodChecked(opresult616, "++", [1], call598);
            var opresult620 = callmethodChecked(opresult618, "++", [1], string596);
            var string621 = new GraceString("w");
            var call622 = callmethodChecked(var_io, "open", [2], opresult620, string621);
            var_outfile = call622;
            if567 = GraceDone;
          }
          if538 = if567;
        }
        setLineNumber(227);    // compilenode string
        var string623 = new GraceString("TEMPORARY");
        var call624 = callmethodChecked(var_outfile, "write", [1], string623);
        setLineNumber(228);    // compilenode identifier
        var call625 = callmethodChecked(var_outfile, "close", [0]);
        var if626 = GraceDone;
        setLineNumber(230);    // compilenode call
        onSelf = true;
        var call627 = callmethodChecked(this, "isOnTypePage", [0]);
        var call628 = callmethodChecked(call627, "prefix!", [0]);
        onSelf = true;
        var call630 = callmethodChecked(this, "isOnClassPage", [0]);
        var call631 = callmethodChecked(call630, "prefix!", [0]);
        var opresult633 = callmethodChecked(call631, "&&", [1], call628);
        if (Grace_isTrue(opresult633)) {
          setLineNumber(232);    // compilenode string
          var string634 = new GraceString(" -- https://github.com/reid47/gracedoc -->\n");
          var call636 = callmethodChecked(var_settings, "version", [0]);
          var string638 = new GraceString("<!-- generated by Gracedoc, v");
          var opresult640 = callmethodChecked(string638, "++", [1], call636);
          var opresult642 = callmethodChecked(opresult640, "++", [1], string634);
          var var_out = opresult642;
          setLineNumber(233);    // compilenode string
          var string643 = new GraceString("<!DOCTYPE html>\n<html>");
          var opresult646 = callmethodChecked(var_out, "++", [1], string643);
          var_out = opresult646;
          setLineNumber(234);    // compilenode string
          var string647 = new GraceString("<head>");
          var opresult650 = callmethodChecked(var_out, "++", [1], string647);
          var_out = opresult650;
          setLineNumber(235);    // compilenode string
          var string651 = new GraceString("<title>Modules | GraceDocs</title>");
          var opresult654 = callmethodChecked(var_out, "++", [1], string651);
          var_out = opresult654;
          setLineNumber(236);    // compilenode string
          var string655 = new GraceString("<meta charset=\"UTF-8\" />");
          var opresult658 = callmethodChecked(var_out, "++", [1], string655);
          var_out = opresult658;
          setLineNumber(237);    // compilenode string
          var string659 = new GraceString("<link rel=\"stylesheet\" href=\"gracedoc.css\">");
          var opresult662 = callmethodChecked(var_out, "++", [1], string659);
          var_out = opresult662;
          setLineNumber(238);    // compilenode string
          var string663 = new GraceString("<script type='text/javascript' src=\"gracedoc.js\"></script>");
          var opresult666 = callmethodChecked(var_out, "++", [1], string663);
          var_out = opresult666;
          setLineNumber(239);    // compilenode string
          var string667 = new GraceString("</head>");
          var opresult670 = callmethodChecked(var_out, "++", [1], string667);
          var_out = opresult670;
          setLineNumber(240);    // compilenode string
          var string671 = new GraceString("<body>");
          var opresult674 = callmethodChecked(var_out, "++", [1], string671);
          var_out = opresult674;
          setLineNumber(241);    // compilenode string
          var string675 = new GraceString("<div class='list-container'>");
          var opresult678 = callmethodChecked(var_out, "++", [1], string675);
          var_out = opresult678;
          setLineNumber(242);    // compilenode string
          var string679 = new GraceString("<h5>Modules</h5><ul>");
          var opresult682 = callmethodChecked(var_out, "++", [1], string679);
          var_out = opresult682;
          setLineNumber(243);    // compilenode identifier
          var call683 = callmethodChecked(var_settings, "outputdir", [0]);
          var call684 = callmethodChecked(var_io, "listdir", [1], call683);
          var var_modules = call684;
          setLineNumber(244);    // compilenode identifier
          var call685 = callmethodChecked(var_modules, "iterator", [0]);
          var var_modit = call685;
          setLineNumber(245);    // compilenode block
          var block686 = new GraceBlock(this, 245, 0);
          block686.real = function() {
            var call687 = callmethodChecked(var_modit, "hasNext", [0]);
            return call687;
          };
          var block688 = new GraceBlock(this, 245, 0);
          block688.real = function() {
            setLineNumber(246);    // compilenode identifier
            var call689 = callmethodChecked(var_modit, "next", [0]);
            var var_mod = call689;
            var if690 = GraceDone;
            setLineNumber(247);    // compilenode string
            var string691 = new GraceString("inputs");
            var opresult694 = callmethodChecked(var_mod, "\u2260", [1], string691);
            var string696 = new GraceString("404.html");
            var opresult699 = callmethodChecked(var_mod, "\u2260", [1], string696);
            var string701 = new GraceString("modules.html");
            var opresult704 = callmethodChecked(var_mod, "\u2260", [1], string701);
            var string706 = new GraceString("index.html");
            var opresult709 = callmethodChecked(var_mod, "\u2260", [1], string706);
            var string711 = new GraceString(".js");
            var call712 = callmethodChecked(var_mod, "endsWith", [1], string711);
            var call713 = callmethodChecked(call712, "prefix!", [0]);
            var string715 = new GraceString(".css");
            var call716 = callmethodChecked(var_mod, "endsWith", [1], string715);
            var call717 = callmethodChecked(call716, "prefix!", [0]);
            var string720 = new GraceString(".");
            var call721 = callmethodChecked(var_mod, "startsWith", [1], string720);
            var opresult723 = callmethodChecked(call721, "==", [1], GraceFalse);
            var opresult725 = callmethodChecked(opresult723, "&&", [1], call717);
            var opresult727 = callmethodChecked(opresult725, "&&", [1], call713);
            var opresult729 = callmethodChecked(opresult727, "&&", [1], opresult709);
            var opresult731 = callmethodChecked(opresult729, "&&", [1], opresult704);
            var opresult733 = callmethodChecked(opresult731, "&&", [1], opresult699);
            var opresult735 = callmethodChecked(opresult733, "&&", [1], opresult694);
            if (Grace_isTrue(opresult735)) {
              setLineNumber(248);    // compilenode string
              var string736 = new GraceString("</a></li>");
              var string739 = new GraceString(".html' target='mainFrame'>");
              var string742 = new GraceString("/");
              var string745 = new GraceString("');\">&#9654;</span><a href='");
              var string748 = new GraceString("' onclick=\"toggleContents('");
              var string751 = new GraceString("<li><span class='arrow-button-toggle' id='arrow-button-");
              var opresult753 = callmethodChecked(string751, "++", [1], var_mod);
              var opresult755 = callmethodChecked(opresult753, "++", [1], string748);
              var opresult757 = callmethodChecked(opresult755, "++", [1], var_mod);
              var opresult759 = callmethodChecked(opresult757, "++", [1], string745);
              var opresult761 = callmethodChecked(opresult759, "++", [1], var_mod);
              var opresult763 = callmethodChecked(opresult761, "++", [1], string742);
              var opresult765 = callmethodChecked(opresult763, "++", [1], var_mod);
              var opresult767 = callmethodChecked(opresult765, "++", [1], string739);
              var opresult769 = callmethodChecked(opresult767, "++", [1], var_mod);
              var opresult771 = callmethodChecked(opresult769, "++", [1], string736);
              var opresult774 = callmethodChecked(var_out, "++", [1], opresult771);
              var_out = opresult774;
              setLineNumber(250);    // compilenode string
              var string775 = new GraceString("' style='display:none;'>");
              var string778 = new GraceString("<div class='contents-list' id='contents-");
              var opresult780 = callmethodChecked(string778, "++", [1], var_mod);
              var opresult782 = callmethodChecked(opresult780, "++", [1], string775);
              var opresult785 = callmethodChecked(var_out, "++", [1], opresult782);
              var_out = opresult785;
              setLineNumber(252);    // compilenode string
              var string786 = new GraceString("<h6>Types</h6><ul>");
              var opresult789 = callmethodChecked(var_out, "++", [1], string786);
              var_out = opresult789;
              setLineNumber(253);    // compilenode string
              var string790 = new GraceString("/types");
              var string793 = new GraceString("/");
              var call795 = callmethodChecked(var_settings, "outputdir", [0]);
              var string797 = new GraceString("");
              var opresult799 = callmethodChecked(string797, "++", [1], call795);
              var opresult801 = callmethodChecked(opresult799, "++", [1], string793);
              var opresult803 = callmethodChecked(opresult801, "++", [1], var_mod);
              var opresult805 = callmethodChecked(opresult803, "++", [1], string790);
              var call806 = callmethodChecked(var_io, "listdir", [1], opresult805);
              var var_types = call806;
              setLineNumber(254);    // compilenode identifier
              var call807 = callmethodChecked(var_types, "iterator", [0]);
              var var_typit = call807;
              setLineNumber(255);    // compilenode block
              var block808 = new GraceBlock(this, 255, 0);
              block808.real = function() {
                var call809 = callmethodChecked(var_typit, "hasNext", [0]);
                return call809;
              };
              var block810 = new GraceBlock(this, 255, 0);
              block810.real = function() {
                setLineNumber(256);    // compilenode identifier
                var call811 = callmethodChecked(var_typit, "next", [0]);
                var var_typ = call811;
                setLineNumber(257);    // compilenode identifier
                var call813 = callmethodChecked(var_typ, "size", [0]);
                var diff815 = callmethodChecked(call813, "-", [1], new GraceNum(5));
                var call816 = callmethodChecked(var_typ, "substringFrom()to", [1, 1], new GraceNum(1), diff815);
                var_typ = call816;
                var if817 = GraceDone;
                setLineNumber(258);    // compilenode string
                var string818 = new GraceString("contents.html");
                var opresult821 = callmethodChecked(var_typ, "\u2260", [1], string818);
                var string824 = new GraceString(".");
                var call825 = callmethodChecked(var_typ, "startsWith", [1], string824);
                var opresult827 = callmethodChecked(call825, "==", [1], GraceFalse);
                var opresult829 = callmethodChecked(opresult827, "&&", [1], opresult821);
                if (Grace_isTrue(opresult829)) {
                  setLineNumber(259);    // compilenode string
                  var string830 = new GraceString("</a></li>");
                  var string833 = new GraceString(".html' target='mainFrame'>");
                  var string836 = new GraceString("/types/");
                  var string839 = new GraceString("<li><a href='");
                  var opresult841 = callmethodChecked(string839, "++", [1], var_mod);
                  var opresult843 = callmethodChecked(opresult841, "++", [1], string836);
                  var opresult845 = callmethodChecked(opresult843, "++", [1], var_typ);
                  var opresult847 = callmethodChecked(opresult845, "++", [1], string833);
                  var opresult849 = callmethodChecked(opresult847, "++", [1], var_typ);
                  var opresult851 = callmethodChecked(opresult849, "++", [1], string830);
                  var opresult854 = callmethodChecked(var_out, "++", [1], opresult851);
                  var_out = opresult854;
                  if817 = GraceDone;
                }
                return if817;
              };
              var call855 = callmethodChecked(var_prelude, "while()do", [1, 1], block808, block810);
              setLineNumber(262);    // compilenode string
              var string856 = new GraceString("</ul>");
              var opresult859 = callmethodChecked(var_out, "++", [1], string856);
              var_out = opresult859;
              setLineNumber(264);    // compilenode string
              var string860 = new GraceString("<h6>Classes</h6><ul>");
              var opresult863 = callmethodChecked(var_out, "++", [1], string860);
              var_out = opresult863;
              setLineNumber(265);    // compilenode string
              var string864 = new GraceString("/classes");
              var string867 = new GraceString("/");
              var call869 = callmethodChecked(var_settings, "outputdir", [0]);
              var string871 = new GraceString("");
              var opresult873 = callmethodChecked(string871, "++", [1], call869);
              var opresult875 = callmethodChecked(opresult873, "++", [1], string867);
              var opresult877 = callmethodChecked(opresult875, "++", [1], var_mod);
              var opresult879 = callmethodChecked(opresult877, "++", [1], string864);
              var call880 = callmethodChecked(var_io, "listdir", [1], opresult879);
              var var_clss = call880;
              setLineNumber(266);    // compilenode identifier
              var call881 = callmethodChecked(var_clss, "iterator", [0]);
              var var_clsit = call881;
              setLineNumber(267);    // compilenode block
              var block882 = new GraceBlock(this, 267, 0);
              block882.real = function() {
                var call883 = callmethodChecked(var_clsit, "hasNext", [0]);
                return call883;
              };
              var block884 = new GraceBlock(this, 267, 0);
              block884.real = function() {
                setLineNumber(268);    // compilenode identifier
                var call885 = callmethodChecked(var_clsit, "next", [0]);
                var var_cls = call885;
                setLineNumber(269);    // compilenode identifier
                var call887 = callmethodChecked(var_cls, "size", [0]);
                var diff889 = callmethodChecked(call887, "-", [1], new GraceNum(5));
                var call890 = callmethodChecked(var_cls, "substringFrom()to", [1, 1], new GraceNum(1), diff889);
                var_cls = call890;
                var if891 = GraceDone;
                setLineNumber(270);    // compilenode string
                var string892 = new GraceString("contents.html");
                var opresult895 = callmethodChecked(var_cls, "\u2260", [1], string892);
                var string898 = new GraceString(".");
                var call899 = callmethodChecked(var_cls, "startsWith", [1], string898);
                var opresult901 = callmethodChecked(call899, "==", [1], GraceFalse);
                var opresult903 = callmethodChecked(opresult901, "&&", [1], opresult895);
                if (Grace_isTrue(opresult903)) {
                  setLineNumber(271);    // compilenode string
                  var string904 = new GraceString("</a></li>");
                  var string907 = new GraceString(".html' target='mainFrame'>");
                  var string910 = new GraceString("/classes/");
                  var string913 = new GraceString("<li><a href='");
                  var opresult915 = callmethodChecked(string913, "++", [1], var_mod);
                  var opresult917 = callmethodChecked(opresult915, "++", [1], string910);
                  var opresult919 = callmethodChecked(opresult917, "++", [1], var_cls);
                  var opresult921 = callmethodChecked(opresult919, "++", [1], string907);
                  var opresult923 = callmethodChecked(opresult921, "++", [1], var_cls);
                  var opresult925 = callmethodChecked(opresult923, "++", [1], string904);
                  var opresult928 = callmethodChecked(var_out, "++", [1], opresult925);
                  var_out = opresult928;
                  if891 = GraceDone;
                }
                return if891;
              };
              var call929 = callmethodChecked(var_prelude, "while()do", [1, 1], block882, block884);
              setLineNumber(274);    // compilenode string
              var string930 = new GraceString("</ul>");
              var opresult933 = callmethodChecked(var_out, "++", [1], string930);
              var_out = opresult933;
              setLineNumber(276);    // compilenode string
              var string934 = new GraceString("</div>");
              var opresult937 = callmethodChecked(var_out, "++", [1], string934);
              var_out = opresult937;
              if690 = GraceDone;
            }
            return if690;
          };
          var call938 = callmethodChecked(var_prelude, "while()do", [1, 1], block686, block688);
          setLineNumber(279);    // compilenode string
          var string939 = new GraceString("</ul></div></body>");
          var opresult942 = callmethodChecked(var_out, "++", [1], string939);
          var_out = opresult942;
          setLineNumber(280);    // compilenode string
          var string943 = new GraceString("</html>");
          var opresult946 = callmethodChecked(var_out, "++", [1], string943);
          var_out = opresult946;
          setLineNumber(281);    // compilenode string
          var string947 = new GraceString("/modules.html");
          var call949 = callmethodChecked(var_settings, "outputdir", [0]);
          var string951 = new GraceString("");
          var opresult953 = callmethodChecked(string951, "++", [1], call949);
          var opresult955 = callmethodChecked(opresult953, "++", [1], string947);
          var string956 = new GraceString("w");
          var call957 = callmethodChecked(var_io, "open", [2], opresult955, string956);
          var var_moduleslistfile = call957;
          setLineNumber(282);    // compilenode call
          var call958 = callmethodChecked(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call959 = callmethodChecked(call958, "autoindent", [1], var_out);
          var call960 = callmethodChecked(var_moduleslistfile, "write", [1], call959);
          setLineNumber(283);    // compilenode identifier
          var call961 = callmethodChecked(var_moduleslistfile, "close", [0]);
          if626 = call961;
        }
        return if626;
      };
      func401.paramCounts = [0];
      obj399.methods["generate"] = func401;
      func401.definitionLine = 210;
      func401.definitionModule = "gracedoc";
      var func962 = function(argcv) {    // method visitTypeDec(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_o = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitTypeDec(1)"));
        setModuleName("gracedoc");
        var if963 = GraceDone;
        setLineNumber(288);    // compilenode call
        onSelf = true;
        var call965 = callmethodChecked(this, "isOnTypePage", [0]);
        var opresult967 = callmethodChecked(call965, "==", [1], GraceFalse);
        if (Grace_isTrue(opresult967)) {
          setLineNumber(289);    // compilenode identifier
          var call968 = callmethodChecked(var_o, "name", [0]);
          var call969 = callmethodChecked(call968, "value", [0]);
          onSelf = true;
          var call970 = callmethodChecked(this, "outdir", [0]);
          var string971 = new GraceString("type");
          var call972 = callmethodChecked(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call973 = callmethodChecked(call972, "directoryBuilderForFile()outTo()as", [1, 1, 1], call969, call970, string971);
          var var_typeVis = call973;
          setLineNumber(290);    // compilenode identifier
          var call974 = callmethodChecked(var_o, "accept", [1], var_typeVis);
          setLineNumber(291);    // compilenode identifier
          var call975 = callmethodChecked(var_typeVis, "generate", [0]);
          setLineNumber(292);    // compilenode identifier
          return GraceFalse;
        }
        setLineNumber(294);    // compilenode identifier
        return GraceTrue;
      };
      func962.paramCounts = [1];
      obj399.methods["visitTypeDec"] = func962;
      func962.definitionLine = 287;
      func962.definitionModule = "gracedoc";
      var func976 = function(argcv) {    // method visitMethod(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_m = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitMethod(1)"));
        setModuleName("gracedoc");
        var if977 = GraceDone;
        setLineNumber(298);    // compilenode identifier
        var call978 = callmethodChecked(var_m, "isClass", [0]);
        var call979 = callmethodChecked(call978, "not", [0]);
        if (Grace_isTrue(call979)) {
          return GraceFalse;
        }
        var if980 = GraceDone;
        setLineNumber(299);    // compilenode call
        onSelf = true;
        var call982 = callmethodChecked(this, "isOnClassPage", [0]);
        var opresult984 = callmethodChecked(call982, "==", [1], GraceFalse);
        if (Grace_isTrue(opresult984)) {
          setLineNumber(300);    // compilenode identifier
          var call985 = callmethodChecked(var_m, "body", [0]);
          var call986 = callmethodChecked(call985, "last", [0]);
          var var_o = call986;
          var if987 = GraceDone;
          setLineNumber(301);    // compilenode identifier
          var call989 = callmethodChecked(var_o, "superclass", [0]);
          var opresult991 = callmethodChecked(call989, "\u2260", [1], GraceFalse);
          if (Grace_isTrue(opresult991)) {
            setLineNumber(302);    // compilenode identifier
            var call992 = callmethodChecked(var_o, "superclass", [0]);
            var call993 = callmethodChecked(call992, "accept", [1], this);
            if987 = call993;
          }
          setLineNumber(304);    // compilenode identifier
          var call994 = callmethodChecked(var_o, "name", [0]);
          onSelf = true;
          var call995 = callmethodChecked(this, "outdir", [0]);
          var string996 = new GraceString("class");
          var call997 = callmethodChecked(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call998 = callmethodChecked(call997, "directoryBuilderForFile()outTo()as", [1, 1, 1], call994, call995, string996);
          var var_classVis = call998;
          setLineNumber(305);    // compilenode identifier
          var call999 = callmethodChecked(var_o, "accept", [1], var_classVis);
          setLineNumber(306);    // compilenode identifier
          var call1000 = callmethodChecked(var_classVis, "generate", [0]);
          setLineNumber(307);    // compilenode identifier
          return GraceFalse;
        }
        setLineNumber(309);    // compilenode identifier
        return GraceTrue;
      };
      func976.paramCounts = [1];
      obj399.methods["visitMethod"] = func976;
      func976.definitionLine = 297;
      func976.definitionModule = "gracedoc";
      setLineNumber(195);    // compilenode identifier
      var call1001 = callmethodChecked(var_ast, "baseVisitor()object", [0, 1], this);
      obj399.superobj = call1001;
      if (call1001.data) obj399.data = call1001.data;
      if (call1001.hasOwnProperty('_value'))
          obj399._value = call1001._value;
      setLineNumber(197);    // compilenode identifier
      obj399.data["isOnClassPage"] = GraceFalse;
      var reader_gracedoc_isOnClassPage1002 = function() {
        return this.data["isOnClassPage"];
      };
      obj399.methods["isOnClassPage"] = reader_gracedoc_isOnClassPage1002;
      obj399.data["isOnClassPage"] = GraceFalse;
      var writer_gracedoc_isOnClassPage1002 = function(argcv, o) {
        this.data["isOnClassPage"] = o;
        return GraceDone;
      };
      obj399.methods["isOnClassPage:="] = writer_gracedoc_isOnClassPage1002;
      reader_gracedoc_isOnClassPage1002.confidential = true;
      writer_gracedoc_isOnClassPage1002.confidential = true;
      obj399.mutable = true;
      setLineNumber(198);    // compilenode identifier
      obj399.data["isOnTypePage"] = GraceFalse;
      var reader_gracedoc_isOnTypePage1003 = function() {
        return this.data["isOnTypePage"];
      };
      obj399.methods["isOnTypePage"] = reader_gracedoc_isOnTypePage1003;
      obj399.data["isOnTypePage"] = GraceFalse;
      var writer_gracedoc_isOnTypePage1003 = function(argcv, o) {
        this.data["isOnTypePage"] = o;
        return GraceDone;
      };
      obj399.methods["isOnTypePage:="] = writer_gracedoc_isOnTypePage1003;
      reader_gracedoc_isOnTypePage1003.confidential = true;
      writer_gracedoc_isOnTypePage1003.confidential = true;
      obj399.mutable = true;
      var if1004 = GraceDone;
      setLineNumber(199);    // compilenode string
      var string1005 = new GraceString("class");
      var opresult1008 = callmethodChecked(var_pageType, "==", [1], string1005);
      if (Grace_isTrue(opresult1008)) {
        onSelf = true;
        var call1009 = callmethodChecked(this, "isOnClassPage:=", [1], GraceTrue);
        if1004 = call1009;
      } else {
        var if1010 = GraceDone;
        setLineNumber(200);    // compilenode string
        var string1011 = new GraceString("type");
        var opresult1014 = callmethodChecked(var_pageType, "==", [1], string1011);
        if (Grace_isTrue(opresult1014)) {
          onSelf = true;
          var call1015 = callmethodChecked(this, "isOnTypePage:=", [1], GraceTrue);
          if1010 = call1015;
        }
        if1004 = if1010;
      }
      var if1016 = GraceDone;
      setLineNumber(202);    // compilenode string
      var string1017 = new GraceString(".grace");
      var call1018 = callmethodChecked(var_in, "endsWith", [1], string1017);
      var call1019 = callmethodChecked(call1018, "not", [0]);
      if (Grace_isTrue(call1019)) {
        if1016 = var_in;
      } else {
        setLineNumber(203);    // compilenode identifier
        var call1021 = callmethodChecked(var_in, "size", [0]);
        var diff1023 = callmethodChecked(call1021, "-", [1], new GraceNum(6));
        var call1024 = callmethodChecked(var_in, "substringFrom()to", [1, 1], new GraceNum(0), diff1023);
        if1016 = call1024;
      }
      obj399.data["pageName"] = if1016;
      var reader_gracedoc_pageName1025 = function() {
        return this.data["pageName"];
      };
      reader_gracedoc_pageName1025.def = true;
      reader_gracedoc_pageName1025.confidential = true;
      obj399.methods["pageName"] = reader_gracedoc_pageName1025;
      var if1026 = GraceDone;
      setLineNumber(204);    // compilenode call
      onSelf = true;
      var call1027 = callmethodChecked(this, "isOnTypePage", [0]);
      if (Grace_isTrue(call1027)) {
        var string1028 = new GraceString("");
        onSelf = true;
        var call1030 = callmethodChecked(this, "pageName", [0]);
        var string1032 = new GraceString("Type: ");
        var opresult1034 = callmethodChecked(string1032, "++", [1], call1030);
        var opresult1036 = callmethodChecked(opresult1034, "++", [1], string1028);
        if1026 = opresult1036;
      } else {
        var if1037 = GraceDone;
        setLineNumber(205);    // compilenode call
        onSelf = true;
        var call1038 = callmethodChecked(this, "isOnClassPage", [0]);
        if (Grace_isTrue(call1038)) {
          var string1039 = new GraceString("");
          onSelf = true;
          var call1041 = callmethodChecked(this, "pageName", [0]);
          var string1043 = new GraceString("Class: ");
          var opresult1045 = callmethodChecked(string1043, "++", [1], call1041);
          var opresult1047 = callmethodChecked(opresult1045, "++", [1], string1039);
          if1037 = opresult1047;
        } else {
          setLineNumber(206);    // compilenode string
          var string1048 = new GraceString("");
          onSelf = true;
          var call1050 = callmethodChecked(this, "pageName", [0]);
          var string1052 = new GraceString("Module: ");
          var opresult1054 = callmethodChecked(string1052, "++", [1], call1050);
          var opresult1056 = callmethodChecked(opresult1054, "++", [1], string1048);
          if1037 = opresult1056;
        }
        if1026 = if1037;
      }
      obj399.data["title"] = if1026;
      var reader_gracedoc_title1057 = function() {
        return this.data["title"];
      };
      reader_gracedoc_title1057.def = true;
      reader_gracedoc_title1057.confidential = true;
      obj399.methods["title"] = reader_gracedoc_title1057;
      var if1058 = GraceDone;
      setLineNumber(208);    // compilenode call
      onSelf = true;
      var call1059 = callmethodChecked(this, "isOnTypePage", [0]);
      onSelf = true;
      var call1061 = callmethodChecked(this, "isOnClassPage", [0]);
      var opresult1063 = callmethodChecked(call1061, "||", [1], call1059);
      if (Grace_isTrue(opresult1063)) {
        if1058 = var_dir;
      } else {
        onSelf = true;
        var call1064 = callmethodChecked(this, "pageName", [0]);
        if1058 = call1064;
      }
      obj399.data["outdir"] = if1058;
      var reader_gracedoc_outdir1065 = function() {
        return this.data["outdir"];
      };
      reader_gracedoc_outdir1065.def = true;
      reader_gracedoc_outdir1065.confidential = true;
      obj399.methods["outdir"] = reader_gracedoc_outdir1065;
      superDepth = origSuperDepth;
    };
    obj_init_399.apply(obj399, []);
    return obj399;
  };
  func398.paramCounts = [1, 1, 1];
  this.methods["directoryBuilderForFile()outTo()as"] = func398;
  func398.definitionLine = 194;
  func398.definitionModule = "gracedoc";
    var func1066 = function(argcv) {    // method directoryBuilderForFile(1     )outTo(1     )as(1     )()object
      var curarg = 1;
      var var_in = arguments[curarg];
      curarg++;
      var var_dir = arguments[curarg];
      curarg++;
      var var_pageType = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      // Start argument processing
      curarg = 1;
      curarg++;
      curarg++;
      curarg++;
      // End argument processing
      setModuleName("gracedoc");
      var returnTarget = invocationCount;
      invocationCount++;
      var obj1067 = Grace_allocObject(null, "directoryBuilderForFile()outTo()as");
      obj1067.definitionModule = "gracedoc";
      obj1067.definitionLine = 194;
      var inho1067 = inheritingObject;
      while (inho1067.superobj) inho1067 = inho1067.superobj;
      inho1067.superobj = obj1067;
      obj1067.data = inheritingObject.data;
      if (inheritingObject.hasOwnProperty('_value'))
        obj1067._value = inheritingObject._value;
      obj1067.outer = this;
      var reader_gracedoc_outer1068 = function() {
        return this.outer;
      };
      obj1067.methods["outer"] = reader_gracedoc_outer1068;
      var obj_init_1067 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj1067;
        var func1069 = function(argcv) {    // method generate
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for generate"));
          setModuleName("gracedoc");
          setLineNumber(211);    // compilenode vardec
          var var_outfile;
          var if1070 = GraceDone;
          setLineNumber(212);    // compilenode string
          var string1071 = new GraceString("");
          var call1073 = callmethodChecked(var_settings, "outputdir", [0]);
          var string1075 = new GraceString("");
          var opresult1077 = callmethodChecked(string1075, "++", [1], call1073);
          var opresult1079 = callmethodChecked(opresult1077, "++", [1], string1071);
          var call1080 = callmethodChecked(var_io, "exists", [1], opresult1079);
          var call1081 = callmethodChecked(call1080, "prefix!", [0]);
          if (Grace_isTrue(call1081)) {
            var string1082 = new GraceString("");
            var call1084 = callmethodChecked(var_settings, "outputdir", [0]);
            var string1086 = new GraceString("mkdir ");
            var opresult1088 = callmethodChecked(string1086, "++", [1], call1084);
            var opresult1090 = callmethodChecked(opresult1088, "++", [1], string1082);
            var call1091 = callmethodChecked(var_io, "system", [1], opresult1090);
            if1070 = call1091;
          }
          var if1092 = GraceDone;
          setLineNumber(213);    // compilenode string
          var string1093 = new GraceString("");
          onSelf = true;
          var call1095 = callmethodChecked(this, "outdir", [0]);
          var string1097 = new GraceString("/");
          var call1099 = callmethodChecked(var_settings, "outputdir", [0]);
          var string1101 = new GraceString("");
          var opresult1103 = callmethodChecked(string1101, "++", [1], call1099);
          var opresult1105 = callmethodChecked(opresult1103, "++", [1], string1097);
          var opresult1107 = callmethodChecked(opresult1105, "++", [1], call1095);
          var opresult1109 = callmethodChecked(opresult1107, "++", [1], string1093);
          var call1110 = callmethodChecked(var_io, "exists", [1], opresult1109);
          var call1111 = callmethodChecked(call1110, "prefix!", [0]);
          if (Grace_isTrue(call1111)) {
            var string1112 = new GraceString("");
            onSelf = true;
            var call1114 = callmethodChecked(this, "outdir", [0]);
            var string1116 = new GraceString("/");
            var call1118 = callmethodChecked(var_settings, "outputdir", [0]);
            var string1120 = new GraceString("mkdir ");
            var opresult1122 = callmethodChecked(string1120, "++", [1], call1118);
            var opresult1124 = callmethodChecked(opresult1122, "++", [1], string1116);
            var opresult1126 = callmethodChecked(opresult1124, "++", [1], call1114);
            var opresult1128 = callmethodChecked(opresult1126, "++", [1], string1112);
            var call1129 = callmethodChecked(var_io, "system", [1], opresult1128);
            if1092 = call1129;
          }
          var if1130 = GraceDone;
          setLineNumber(214);    // compilenode string
          var string1131 = new GraceString("/classes");
          onSelf = true;
          var call1133 = callmethodChecked(this, "outdir", [0]);
          var string1135 = new GraceString("/");
          var call1137 = callmethodChecked(var_settings, "outputdir", [0]);
          var string1139 = new GraceString("");
          var opresult1141 = callmethodChecked(string1139, "++", [1], call1137);
          var opresult1143 = callmethodChecked(opresult1141, "++", [1], string1135);
          var opresult1145 = callmethodChecked(opresult1143, "++", [1], call1133);
          var opresult1147 = callmethodChecked(opresult1145, "++", [1], string1131);
          var call1148 = callmethodChecked(var_io, "exists", [1], opresult1147);
          var call1149 = callmethodChecked(call1148, "prefix!", [0]);
          if (Grace_isTrue(call1149)) {
            setLineNumber(215);    // compilenode string
            var string1150 = new GraceString("/classes");
            onSelf = true;
            var call1152 = callmethodChecked(this, "outdir", [0]);
            var string1154 = new GraceString("/");
            var call1156 = callmethodChecked(var_settings, "outputdir", [0]);
            var string1158 = new GraceString("mkdir ");
            var opresult1160 = callmethodChecked(string1158, "++", [1], call1156);
            var opresult1162 = callmethodChecked(opresult1160, "++", [1], string1154);
            var opresult1164 = callmethodChecked(opresult1162, "++", [1], call1152);
            var opresult1166 = callmethodChecked(opresult1164, "++", [1], string1150);
            var call1167 = callmethodChecked(var_io, "system", [1], opresult1166);
            if1130 = call1167;
          }
          var if1168 = GraceDone;
          setLineNumber(217);    // compilenode string
          var string1169 = new GraceString("/types");
          onSelf = true;
          var call1171 = callmethodChecked(this, "outdir", [0]);
          var string1173 = new GraceString("/");
          var call1175 = callmethodChecked(var_settings, "outputdir", [0]);
          var string1177 = new GraceString("");
          var opresult1179 = callmethodChecked(string1177, "++", [1], call1175);
          var opresult1181 = callmethodChecked(opresult1179, "++", [1], string1173);
          var opresult1183 = callmethodChecked(opresult1181, "++", [1], call1171);
          var opresult1185 = callmethodChecked(opresult1183, "++", [1], string1169);
          var call1186 = callmethodChecked(var_io, "exists", [1], opresult1185);
          var call1187 = callmethodChecked(call1186, "prefix!", [0]);
          if (Grace_isTrue(call1187)) {
            setLineNumber(218);    // compilenode string
            var string1188 = new GraceString("/types");
            onSelf = true;
            var call1190 = callmethodChecked(this, "outdir", [0]);
            var string1192 = new GraceString("/");
            var call1194 = callmethodChecked(var_settings, "outputdir", [0]);
            var string1196 = new GraceString("mkdir ");
            var opresult1198 = callmethodChecked(string1196, "++", [1], call1194);
            var opresult1200 = callmethodChecked(opresult1198, "++", [1], string1192);
            var opresult1202 = callmethodChecked(opresult1200, "++", [1], call1190);
            var opresult1204 = callmethodChecked(opresult1202, "++", [1], string1188);
            var call1205 = callmethodChecked(var_io, "system", [1], opresult1204);
            if1168 = call1205;
          }
          var if1206 = GraceDone;
          setLineNumber(220);    // compilenode call
          onSelf = true;
          var call1207 = callmethodChecked(this, "isOnClassPage", [0]);
          if (Grace_isTrue(call1207)) {
            setLineNumber(221);    // compilenode string
            var string1208 = new GraceString(".html");
            onSelf = true;
            var call1210 = callmethodChecked(this, "pageName", [0]);
            var string1212 = new GraceString("/classes/");
            onSelf = true;
            var call1214 = callmethodChecked(this, "outdir", [0]);
            var string1216 = new GraceString("/");
            var call1218 = callmethodChecked(var_settings, "outputdir", [0]);
            var string1220 = new GraceString("");
            var opresult1222 = callmethodChecked(string1220, "++", [1], call1218);
            var opresult1224 = callmethodChecked(opresult1222, "++", [1], string1216);
            var opresult1226 = callmethodChecked(opresult1224, "++", [1], call1214);
            var opresult1228 = callmethodChecked(opresult1226, "++", [1], string1212);
            var opresult1230 = callmethodChecked(opresult1228, "++", [1], call1210);
            var opresult1232 = callmethodChecked(opresult1230, "++", [1], string1208);
            var string1233 = new GraceString("w");
            var call1234 = callmethodChecked(var_io, "open", [2], opresult1232, string1233);
            var_outfile = call1234;
            if1206 = GraceDone;
          } else {
            var if1235 = GraceDone;
            setLineNumber(222);    // compilenode call
            onSelf = true;
            var call1236 = callmethodChecked(this, "isOnTypePage", [0]);
            if (Grace_isTrue(call1236)) {
              setLineNumber(223);    // compilenode string
              var string1237 = new GraceString(".html");
              onSelf = true;
              var call1239 = callmethodChecked(this, "pageName", [0]);
              var string1241 = new GraceString("/types/");
              onSelf = true;
              var call1243 = callmethodChecked(this, "outdir", [0]);
              var string1245 = new GraceString("/");
              var call1247 = callmethodChecked(var_settings, "outputdir", [0]);
              var string1249 = new GraceString("");
              var opresult1251 = callmethodChecked(string1249, "++", [1], call1247);
              var opresult1253 = callmethodChecked(opresult1251, "++", [1], string1245);
              var opresult1255 = callmethodChecked(opresult1253, "++", [1], call1243);
              var opresult1257 = callmethodChecked(opresult1255, "++", [1], string1241);
              var opresult1259 = callmethodChecked(opresult1257, "++", [1], call1239);
              var opresult1261 = callmethodChecked(opresult1259, "++", [1], string1237);
              var string1262 = new GraceString("w");
              var call1263 = callmethodChecked(var_io, "open", [2], opresult1261, string1262);
              var_outfile = call1263;
              if1235 = GraceDone;
            } else {
              setLineNumber(225);    // compilenode string
              var string1264 = new GraceString(".html");
              onSelf = true;
              var call1266 = callmethodChecked(this, "pageName", [0]);
              var string1268 = new GraceString("/");
              onSelf = true;
              var call1270 = callmethodChecked(this, "outdir", [0]);
              var string1272 = new GraceString("/");
              var call1274 = callmethodChecked(var_settings, "outputdir", [0]);
              var string1276 = new GraceString("");
              var opresult1278 = callmethodChecked(string1276, "++", [1], call1274);
              var opresult1280 = callmethodChecked(opresult1278, "++", [1], string1272);
              var opresult1282 = callmethodChecked(opresult1280, "++", [1], call1270);
              var opresult1284 = callmethodChecked(opresult1282, "++", [1], string1268);
              var opresult1286 = callmethodChecked(opresult1284, "++", [1], call1266);
              var opresult1288 = callmethodChecked(opresult1286, "++", [1], string1264);
              var string1289 = new GraceString("w");
              var call1290 = callmethodChecked(var_io, "open", [2], opresult1288, string1289);
              var_outfile = call1290;
              if1235 = GraceDone;
            }
            if1206 = if1235;
          }
          setLineNumber(227);    // compilenode string
          var string1291 = new GraceString("TEMPORARY");
          var call1292 = callmethodChecked(var_outfile, "write", [1], string1291);
          setLineNumber(228);    // compilenode identifier
          var call1293 = callmethodChecked(var_outfile, "close", [0]);
          var if1294 = GraceDone;
          setLineNumber(230);    // compilenode call
          onSelf = true;
          var call1295 = callmethodChecked(this, "isOnTypePage", [0]);
          var call1296 = callmethodChecked(call1295, "prefix!", [0]);
          onSelf = true;
          var call1298 = callmethodChecked(this, "isOnClassPage", [0]);
          var call1299 = callmethodChecked(call1298, "prefix!", [0]);
          var opresult1301 = callmethodChecked(call1299, "&&", [1], call1296);
          if (Grace_isTrue(opresult1301)) {
            setLineNumber(232);    // compilenode string
            var string1302 = new GraceString(" -- https://github.com/reid47/gracedoc -->\n");
            var call1304 = callmethodChecked(var_settings, "version", [0]);
            var string1306 = new GraceString("<!-- generated by Gracedoc, v");
            var opresult1308 = callmethodChecked(string1306, "++", [1], call1304);
            var opresult1310 = callmethodChecked(opresult1308, "++", [1], string1302);
            var var_out = opresult1310;
            setLineNumber(233);    // compilenode string
            var string1311 = new GraceString("<!DOCTYPE html>\n<html>");
            var opresult1314 = callmethodChecked(var_out, "++", [1], string1311);
            var_out = opresult1314;
            setLineNumber(234);    // compilenode string
            var string1315 = new GraceString("<head>");
            var opresult1318 = callmethodChecked(var_out, "++", [1], string1315);
            var_out = opresult1318;
            setLineNumber(235);    // compilenode string
            var string1319 = new GraceString("<title>Modules | GraceDocs</title>");
            var opresult1322 = callmethodChecked(var_out, "++", [1], string1319);
            var_out = opresult1322;
            setLineNumber(236);    // compilenode string
            var string1323 = new GraceString("<meta charset=\"UTF-8\" />");
            var opresult1326 = callmethodChecked(var_out, "++", [1], string1323);
            var_out = opresult1326;
            setLineNumber(237);    // compilenode string
            var string1327 = new GraceString("<link rel=\"stylesheet\" href=\"gracedoc.css\">");
            var opresult1330 = callmethodChecked(var_out, "++", [1], string1327);
            var_out = opresult1330;
            setLineNumber(238);    // compilenode string
            var string1331 = new GraceString("<script type='text/javascript' src=\"gracedoc.js\"></script>");
            var opresult1334 = callmethodChecked(var_out, "++", [1], string1331);
            var_out = opresult1334;
            setLineNumber(239);    // compilenode string
            var string1335 = new GraceString("</head>");
            var opresult1338 = callmethodChecked(var_out, "++", [1], string1335);
            var_out = opresult1338;
            setLineNumber(240);    // compilenode string
            var string1339 = new GraceString("<body>");
            var opresult1342 = callmethodChecked(var_out, "++", [1], string1339);
            var_out = opresult1342;
            setLineNumber(241);    // compilenode string
            var string1343 = new GraceString("<div class='list-container'>");
            var opresult1346 = callmethodChecked(var_out, "++", [1], string1343);
            var_out = opresult1346;
            setLineNumber(242);    // compilenode string
            var string1347 = new GraceString("<h5>Modules</h5><ul>");
            var opresult1350 = callmethodChecked(var_out, "++", [1], string1347);
            var_out = opresult1350;
            setLineNumber(243);    // compilenode identifier
            var call1351 = callmethodChecked(var_settings, "outputdir", [0]);
            var call1352 = callmethodChecked(var_io, "listdir", [1], call1351);
            var var_modules = call1352;
            setLineNumber(244);    // compilenode identifier
            var call1353 = callmethodChecked(var_modules, "iterator", [0]);
            var var_modit = call1353;
            setLineNumber(245);    // compilenode block
            var block1354 = new GraceBlock(this, 245, 0);
            block1354.real = function() {
              var call1355 = callmethodChecked(var_modit, "hasNext", [0]);
              return call1355;
            };
            var block1356 = new GraceBlock(this, 245, 0);
            block1356.real = function() {
              setLineNumber(246);    // compilenode identifier
              var call1357 = callmethodChecked(var_modit, "next", [0]);
              var var_mod = call1357;
              var if1358 = GraceDone;
              setLineNumber(247);    // compilenode string
              var string1359 = new GraceString("inputs");
              var opresult1362 = callmethodChecked(var_mod, "\u2260", [1], string1359);
              var string1364 = new GraceString("404.html");
              var opresult1367 = callmethodChecked(var_mod, "\u2260", [1], string1364);
              var string1369 = new GraceString("modules.html");
              var opresult1372 = callmethodChecked(var_mod, "\u2260", [1], string1369);
              var string1374 = new GraceString("index.html");
              var opresult1377 = callmethodChecked(var_mod, "\u2260", [1], string1374);
              var string1379 = new GraceString(".js");
              var call1380 = callmethodChecked(var_mod, "endsWith", [1], string1379);
              var call1381 = callmethodChecked(call1380, "prefix!", [0]);
              var string1383 = new GraceString(".css");
              var call1384 = callmethodChecked(var_mod, "endsWith", [1], string1383);
              var call1385 = callmethodChecked(call1384, "prefix!", [0]);
              var string1388 = new GraceString(".");
              var call1389 = callmethodChecked(var_mod, "startsWith", [1], string1388);
              var opresult1391 = callmethodChecked(call1389, "==", [1], GraceFalse);
              var opresult1393 = callmethodChecked(opresult1391, "&&", [1], call1385);
              var opresult1395 = callmethodChecked(opresult1393, "&&", [1], call1381);
              var opresult1397 = callmethodChecked(opresult1395, "&&", [1], opresult1377);
              var opresult1399 = callmethodChecked(opresult1397, "&&", [1], opresult1372);
              var opresult1401 = callmethodChecked(opresult1399, "&&", [1], opresult1367);
              var opresult1403 = callmethodChecked(opresult1401, "&&", [1], opresult1362);
              if (Grace_isTrue(opresult1403)) {
                setLineNumber(248);    // compilenode string
                var string1404 = new GraceString("</a></li>");
                var string1407 = new GraceString(".html' target='mainFrame'>");
                var string1410 = new GraceString("/");
                var string1413 = new GraceString("');\">&#9654;</span><a href='");
                var string1416 = new GraceString("' onclick=\"toggleContents('");
                var string1419 = new GraceString("<li><span class='arrow-button-toggle' id='arrow-button-");
                var opresult1421 = callmethodChecked(string1419, "++", [1], var_mod);
                var opresult1423 = callmethodChecked(opresult1421, "++", [1], string1416);
                var opresult1425 = callmethodChecked(opresult1423, "++", [1], var_mod);
                var opresult1427 = callmethodChecked(opresult1425, "++", [1], string1413);
                var opresult1429 = callmethodChecked(opresult1427, "++", [1], var_mod);
                var opresult1431 = callmethodChecked(opresult1429, "++", [1], string1410);
                var opresult1433 = callmethodChecked(opresult1431, "++", [1], var_mod);
                var opresult1435 = callmethodChecked(opresult1433, "++", [1], string1407);
                var opresult1437 = callmethodChecked(opresult1435, "++", [1], var_mod);
                var opresult1439 = callmethodChecked(opresult1437, "++", [1], string1404);
                var opresult1442 = callmethodChecked(var_out, "++", [1], opresult1439);
                var_out = opresult1442;
                setLineNumber(250);    // compilenode string
                var string1443 = new GraceString("' style='display:none;'>");
                var string1446 = new GraceString("<div class='contents-list' id='contents-");
                var opresult1448 = callmethodChecked(string1446, "++", [1], var_mod);
                var opresult1450 = callmethodChecked(opresult1448, "++", [1], string1443);
                var opresult1453 = callmethodChecked(var_out, "++", [1], opresult1450);
                var_out = opresult1453;
                setLineNumber(252);    // compilenode string
                var string1454 = new GraceString("<h6>Types</h6><ul>");
                var opresult1457 = callmethodChecked(var_out, "++", [1], string1454);
                var_out = opresult1457;
                setLineNumber(253);    // compilenode string
                var string1458 = new GraceString("/types");
                var string1461 = new GraceString("/");
                var call1463 = callmethodChecked(var_settings, "outputdir", [0]);
                var string1465 = new GraceString("");
                var opresult1467 = callmethodChecked(string1465, "++", [1], call1463);
                var opresult1469 = callmethodChecked(opresult1467, "++", [1], string1461);
                var opresult1471 = callmethodChecked(opresult1469, "++", [1], var_mod);
                var opresult1473 = callmethodChecked(opresult1471, "++", [1], string1458);
                var call1474 = callmethodChecked(var_io, "listdir", [1], opresult1473);
                var var_types = call1474;
                setLineNumber(254);    // compilenode identifier
                var call1475 = callmethodChecked(var_types, "iterator", [0]);
                var var_typit = call1475;
                setLineNumber(255);    // compilenode block
                var block1476 = new GraceBlock(this, 255, 0);
                block1476.real = function() {
                  var call1477 = callmethodChecked(var_typit, "hasNext", [0]);
                  return call1477;
                };
                var block1478 = new GraceBlock(this, 255, 0);
                block1478.real = function() {
                  setLineNumber(256);    // compilenode identifier
                  var call1479 = callmethodChecked(var_typit, "next", [0]);
                  var var_typ = call1479;
                  setLineNumber(257);    // compilenode identifier
                  var call1481 = callmethodChecked(var_typ, "size", [0]);
                  var diff1483 = callmethodChecked(call1481, "-", [1], new GraceNum(5));
                  var call1484 = callmethodChecked(var_typ, "substringFrom()to", [1, 1], new GraceNum(1), diff1483);
                  var_typ = call1484;
                  var if1485 = GraceDone;
                  setLineNumber(258);    // compilenode string
                  var string1486 = new GraceString("contents.html");
                  var opresult1489 = callmethodChecked(var_typ, "\u2260", [1], string1486);
                  var string1492 = new GraceString(".");
                  var call1493 = callmethodChecked(var_typ, "startsWith", [1], string1492);
                  var opresult1495 = callmethodChecked(call1493, "==", [1], GraceFalse);
                  var opresult1497 = callmethodChecked(opresult1495, "&&", [1], opresult1489);
                  if (Grace_isTrue(opresult1497)) {
                    setLineNumber(259);    // compilenode string
                    var string1498 = new GraceString("</a></li>");
                    var string1501 = new GraceString(".html' target='mainFrame'>");
                    var string1504 = new GraceString("/types/");
                    var string1507 = new GraceString("<li><a href='");
                    var opresult1509 = callmethodChecked(string1507, "++", [1], var_mod);
                    var opresult1511 = callmethodChecked(opresult1509, "++", [1], string1504);
                    var opresult1513 = callmethodChecked(opresult1511, "++", [1], var_typ);
                    var opresult1515 = callmethodChecked(opresult1513, "++", [1], string1501);
                    var opresult1517 = callmethodChecked(opresult1515, "++", [1], var_typ);
                    var opresult1519 = callmethodChecked(opresult1517, "++", [1], string1498);
                    var opresult1522 = callmethodChecked(var_out, "++", [1], opresult1519);
                    var_out = opresult1522;
                    if1485 = GraceDone;
                  }
                  return if1485;
                };
                var call1523 = callmethodChecked(var_prelude, "while()do", [1, 1], block1476, block1478);
                setLineNumber(262);    // compilenode string
                var string1524 = new GraceString("</ul>");
                var opresult1527 = callmethodChecked(var_out, "++", [1], string1524);
                var_out = opresult1527;
                setLineNumber(264);    // compilenode string
                var string1528 = new GraceString("<h6>Classes</h6><ul>");
                var opresult1531 = callmethodChecked(var_out, "++", [1], string1528);
                var_out = opresult1531;
                setLineNumber(265);    // compilenode string
                var string1532 = new GraceString("/classes");
                var string1535 = new GraceString("/");
                var call1537 = callmethodChecked(var_settings, "outputdir", [0]);
                var string1539 = new GraceString("");
                var opresult1541 = callmethodChecked(string1539, "++", [1], call1537);
                var opresult1543 = callmethodChecked(opresult1541, "++", [1], string1535);
                var opresult1545 = callmethodChecked(opresult1543, "++", [1], var_mod);
                var opresult1547 = callmethodChecked(opresult1545, "++", [1], string1532);
                var call1548 = callmethodChecked(var_io, "listdir", [1], opresult1547);
                var var_clss = call1548;
                setLineNumber(266);    // compilenode identifier
                var call1549 = callmethodChecked(var_clss, "iterator", [0]);
                var var_clsit = call1549;
                setLineNumber(267);    // compilenode block
                var block1550 = new GraceBlock(this, 267, 0);
                block1550.real = function() {
                  var call1551 = callmethodChecked(var_clsit, "hasNext", [0]);
                  return call1551;
                };
                var block1552 = new GraceBlock(this, 267, 0);
                block1552.real = function() {
                  setLineNumber(268);    // compilenode identifier
                  var call1553 = callmethodChecked(var_clsit, "next", [0]);
                  var var_cls = call1553;
                  setLineNumber(269);    // compilenode identifier
                  var call1555 = callmethodChecked(var_cls, "size", [0]);
                  var diff1557 = callmethodChecked(call1555, "-", [1], new GraceNum(5));
                  var call1558 = callmethodChecked(var_cls, "substringFrom()to", [1, 1], new GraceNum(1), diff1557);
                  var_cls = call1558;
                  var if1559 = GraceDone;
                  setLineNumber(270);    // compilenode string
                  var string1560 = new GraceString("contents.html");
                  var opresult1563 = callmethodChecked(var_cls, "\u2260", [1], string1560);
                  var string1566 = new GraceString(".");
                  var call1567 = callmethodChecked(var_cls, "startsWith", [1], string1566);
                  var opresult1569 = callmethodChecked(call1567, "==", [1], GraceFalse);
                  var opresult1571 = callmethodChecked(opresult1569, "&&", [1], opresult1563);
                  if (Grace_isTrue(opresult1571)) {
                    setLineNumber(271);    // compilenode string
                    var string1572 = new GraceString("</a></li>");
                    var string1575 = new GraceString(".html' target='mainFrame'>");
                    var string1578 = new GraceString("/classes/");
                    var string1581 = new GraceString("<li><a href='");
                    var opresult1583 = callmethodChecked(string1581, "++", [1], var_mod);
                    var opresult1585 = callmethodChecked(opresult1583, "++", [1], string1578);
                    var opresult1587 = callmethodChecked(opresult1585, "++", [1], var_cls);
                    var opresult1589 = callmethodChecked(opresult1587, "++", [1], string1575);
                    var opresult1591 = callmethodChecked(opresult1589, "++", [1], var_cls);
                    var opresult1593 = callmethodChecked(opresult1591, "++", [1], string1572);
                    var opresult1596 = callmethodChecked(var_out, "++", [1], opresult1593);
                    var_out = opresult1596;
                    if1559 = GraceDone;
                  }
                  return if1559;
                };
                var call1597 = callmethodChecked(var_prelude, "while()do", [1, 1], block1550, block1552);
                setLineNumber(274);    // compilenode string
                var string1598 = new GraceString("</ul>");
                var opresult1601 = callmethodChecked(var_out, "++", [1], string1598);
                var_out = opresult1601;
                setLineNumber(276);    // compilenode string
                var string1602 = new GraceString("</div>");
                var opresult1605 = callmethodChecked(var_out, "++", [1], string1602);
                var_out = opresult1605;
                if1358 = GraceDone;
              }
              return if1358;
            };
            var call1606 = callmethodChecked(var_prelude, "while()do", [1, 1], block1354, block1356);
            setLineNumber(279);    // compilenode string
            var string1607 = new GraceString("</ul></div></body>");
            var opresult1610 = callmethodChecked(var_out, "++", [1], string1607);
            var_out = opresult1610;
            setLineNumber(280);    // compilenode string
            var string1611 = new GraceString("</html>");
            var opresult1614 = callmethodChecked(var_out, "++", [1], string1611);
            var_out = opresult1614;
            setLineNumber(281);    // compilenode string
            var string1615 = new GraceString("/modules.html");
            var call1617 = callmethodChecked(var_settings, "outputdir", [0]);
            var string1619 = new GraceString("");
            var opresult1621 = callmethodChecked(string1619, "++", [1], call1617);
            var opresult1623 = callmethodChecked(opresult1621, "++", [1], string1615);
            var string1624 = new GraceString("w");
            var call1625 = callmethodChecked(var_io, "open", [2], opresult1623, string1624);
            var var_moduleslistfile = call1625;
            setLineNumber(282);    // compilenode call
            var call1626 = callmethodChecked(superDepth, "outer", [0]);
            onOuter = true;
            onSelf = true;
            var call1627 = callmethodChecked(call1626, "autoindent", [1], var_out);
            var call1628 = callmethodChecked(var_moduleslistfile, "write", [1], call1627);
            setLineNumber(283);    // compilenode identifier
            var call1629 = callmethodChecked(var_moduleslistfile, "close", [0]);
            if1294 = call1629;
          }
          return if1294;
        };
        func1069.paramCounts = [0];
        obj1067.methods["generate"] = func1069;
        func1069.definitionLine = 210;
        func1069.definitionModule = "gracedoc";
        var func1630 = function(argcv) {    // method visitTypeDec(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitTypeDec(1)"));
          setModuleName("gracedoc");
          var if1631 = GraceDone;
          setLineNumber(288);    // compilenode call
          onSelf = true;
          var call1633 = callmethodChecked(this, "isOnTypePage", [0]);
          var opresult1635 = callmethodChecked(call1633, "==", [1], GraceFalse);
          if (Grace_isTrue(opresult1635)) {
            setLineNumber(289);    // compilenode identifier
            var call1636 = callmethodChecked(var_o, "name", [0]);
            var call1637 = callmethodChecked(call1636, "value", [0]);
            onSelf = true;
            var call1638 = callmethodChecked(this, "outdir", [0]);
            var string1639 = new GraceString("type");
            var call1640 = callmethodChecked(superDepth, "outer", [0]);
            onOuter = true;
            onSelf = true;
            var call1641 = callmethodChecked(call1640, "directoryBuilderForFile()outTo()as", [1, 1, 1], call1637, call1638, string1639);
            var var_typeVis = call1641;
            setLineNumber(290);    // compilenode identifier
            var call1642 = callmethodChecked(var_o, "accept", [1], var_typeVis);
            setLineNumber(291);    // compilenode identifier
            var call1643 = callmethodChecked(var_typeVis, "generate", [0]);
            setLineNumber(292);    // compilenode identifier
            return GraceFalse;
          }
          setLineNumber(294);    // compilenode identifier
          return GraceTrue;
        };
        func1630.paramCounts = [1];
        obj1067.methods["visitTypeDec"] = func1630;
        func1630.definitionLine = 287;
        func1630.definitionModule = "gracedoc";
        var func1644 = function(argcv) {    // method visitMethod(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_m = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitMethod(1)"));
          setModuleName("gracedoc");
          var if1645 = GraceDone;
          setLineNumber(298);    // compilenode identifier
          var call1646 = callmethodChecked(var_m, "isClass", [0]);
          var call1647 = callmethodChecked(call1646, "not", [0]);
          if (Grace_isTrue(call1647)) {
            return GraceFalse;
          }
          var if1648 = GraceDone;
          setLineNumber(299);    // compilenode call
          onSelf = true;
          var call1650 = callmethodChecked(this, "isOnClassPage", [0]);
          var opresult1652 = callmethodChecked(call1650, "==", [1], GraceFalse);
          if (Grace_isTrue(opresult1652)) {
            setLineNumber(300);    // compilenode identifier
            var call1653 = callmethodChecked(var_m, "body", [0]);
            var call1654 = callmethodChecked(call1653, "last", [0]);
            var var_o = call1654;
            var if1655 = GraceDone;
            setLineNumber(301);    // compilenode identifier
            var call1657 = callmethodChecked(var_o, "superclass", [0]);
            var opresult1659 = callmethodChecked(call1657, "\u2260", [1], GraceFalse);
            if (Grace_isTrue(opresult1659)) {
              setLineNumber(302);    // compilenode identifier
              var call1660 = callmethodChecked(var_o, "superclass", [0]);
              var call1661 = callmethodChecked(call1660, "accept", [1], this);
              if1655 = call1661;
            }
            setLineNumber(304);    // compilenode identifier
            var call1662 = callmethodChecked(var_o, "name", [0]);
            onSelf = true;
            var call1663 = callmethodChecked(this, "outdir", [0]);
            var string1664 = new GraceString("class");
            var call1665 = callmethodChecked(superDepth, "outer", [0]);
            onOuter = true;
            onSelf = true;
            var call1666 = callmethodChecked(call1665, "directoryBuilderForFile()outTo()as", [1, 1, 1], call1662, call1663, string1664);
            var var_classVis = call1666;
            setLineNumber(305);    // compilenode identifier
            var call1667 = callmethodChecked(var_o, "accept", [1], var_classVis);
            setLineNumber(306);    // compilenode identifier
            var call1668 = callmethodChecked(var_classVis, "generate", [0]);
            setLineNumber(307);    // compilenode identifier
            return GraceFalse;
          }
          setLineNumber(309);    // compilenode identifier
          return GraceTrue;
        };
        func1644.paramCounts = [1];
        obj1067.methods["visitMethod"] = func1644;
        func1644.definitionLine = 297;
        func1644.definitionModule = "gracedoc";
        setLineNumber(195);    // compilenode identifier
        var call1669 = callmethodChecked(var_ast, "baseVisitor()object", [0, 1], this);
        obj1067.superobj = call1669;
        if (call1669.data) obj1067.data = call1669.data;
        if (call1669.hasOwnProperty('_value'))
            obj1067._value = call1669._value;
        setLineNumber(197);    // compilenode identifier
        obj1067.data["isOnClassPage"] = GraceFalse;
        var reader_gracedoc_isOnClassPage1670 = function() {
          return this.data["isOnClassPage"];
        };
        obj1067.methods["isOnClassPage"] = reader_gracedoc_isOnClassPage1670;
        obj1067.data["isOnClassPage"] = GraceFalse;
        var writer_gracedoc_isOnClassPage1670 = function(argcv, o) {
          this.data["isOnClassPage"] = o;
          return GraceDone;
        };
        obj1067.methods["isOnClassPage:="] = writer_gracedoc_isOnClassPage1670;
        reader_gracedoc_isOnClassPage1670.confidential = true;
        writer_gracedoc_isOnClassPage1670.confidential = true;
        obj1067.mutable = true;
        setLineNumber(198);    // compilenode identifier
        obj1067.data["isOnTypePage"] = GraceFalse;
        var reader_gracedoc_isOnTypePage1671 = function() {
          return this.data["isOnTypePage"];
        };
        obj1067.methods["isOnTypePage"] = reader_gracedoc_isOnTypePage1671;
        obj1067.data["isOnTypePage"] = GraceFalse;
        var writer_gracedoc_isOnTypePage1671 = function(argcv, o) {
          this.data["isOnTypePage"] = o;
          return GraceDone;
        };
        obj1067.methods["isOnTypePage:="] = writer_gracedoc_isOnTypePage1671;
        reader_gracedoc_isOnTypePage1671.confidential = true;
        writer_gracedoc_isOnTypePage1671.confidential = true;
        obj1067.mutable = true;
        var if1672 = GraceDone;
        setLineNumber(199);    // compilenode string
        var string1673 = new GraceString("class");
        var opresult1676 = callmethodChecked(var_pageType, "==", [1], string1673);
        if (Grace_isTrue(opresult1676)) {
          onSelf = true;
          var call1677 = callmethodChecked(this, "isOnClassPage:=", [1], GraceTrue);
          if1672 = call1677;
        } else {
          var if1678 = GraceDone;
          setLineNumber(200);    // compilenode string
          var string1679 = new GraceString("type");
          var opresult1682 = callmethodChecked(var_pageType, "==", [1], string1679);
          if (Grace_isTrue(opresult1682)) {
            onSelf = true;
            var call1683 = callmethodChecked(this, "isOnTypePage:=", [1], GraceTrue);
            if1678 = call1683;
          }
          if1672 = if1678;
        }
        var if1684 = GraceDone;
        setLineNumber(202);    // compilenode string
        var string1685 = new GraceString(".grace");
        var call1686 = callmethodChecked(var_in, "endsWith", [1], string1685);
        var call1687 = callmethodChecked(call1686, "not", [0]);
        if (Grace_isTrue(call1687)) {
          if1684 = var_in;
        } else {
          setLineNumber(203);    // compilenode identifier
          var call1689 = callmethodChecked(var_in, "size", [0]);
          var diff1691 = callmethodChecked(call1689, "-", [1], new GraceNum(6));
          var call1692 = callmethodChecked(var_in, "substringFrom()to", [1, 1], new GraceNum(0), diff1691);
          if1684 = call1692;
        }
        obj1067.data["pageName"] = if1684;
        var reader_gracedoc_pageName1693 = function() {
          return this.data["pageName"];
        };
        reader_gracedoc_pageName1693.def = true;
        reader_gracedoc_pageName1693.confidential = true;
        obj1067.methods["pageName"] = reader_gracedoc_pageName1693;
        var if1694 = GraceDone;
        setLineNumber(204);    // compilenode call
        onSelf = true;
        var call1695 = callmethodChecked(this, "isOnTypePage", [0]);
        if (Grace_isTrue(call1695)) {
          var string1696 = new GraceString("");
          onSelf = true;
          var call1698 = callmethodChecked(this, "pageName", [0]);
          var string1700 = new GraceString("Type: ");
          var opresult1702 = callmethodChecked(string1700, "++", [1], call1698);
          var opresult1704 = callmethodChecked(opresult1702, "++", [1], string1696);
          if1694 = opresult1704;
        } else {
          var if1705 = GraceDone;
          setLineNumber(205);    // compilenode call
          onSelf = true;
          var call1706 = callmethodChecked(this, "isOnClassPage", [0]);
          if (Grace_isTrue(call1706)) {
            var string1707 = new GraceString("");
            onSelf = true;
            var call1709 = callmethodChecked(this, "pageName", [0]);
            var string1711 = new GraceString("Class: ");
            var opresult1713 = callmethodChecked(string1711, "++", [1], call1709);
            var opresult1715 = callmethodChecked(opresult1713, "++", [1], string1707);
            if1705 = opresult1715;
          } else {
            setLineNumber(206);    // compilenode string
            var string1716 = new GraceString("");
            onSelf = true;
            var call1718 = callmethodChecked(this, "pageName", [0]);
            var string1720 = new GraceString("Module: ");
            var opresult1722 = callmethodChecked(string1720, "++", [1], call1718);
            var opresult1724 = callmethodChecked(opresult1722, "++", [1], string1716);
            if1705 = opresult1724;
          }
          if1694 = if1705;
        }
        obj1067.data["title"] = if1694;
        var reader_gracedoc_title1725 = function() {
          return this.data["title"];
        };
        reader_gracedoc_title1725.def = true;
        reader_gracedoc_title1725.confidential = true;
        obj1067.methods["title"] = reader_gracedoc_title1725;
        var if1726 = GraceDone;
        setLineNumber(208);    // compilenode call
        onSelf = true;
        var call1727 = callmethodChecked(this, "isOnTypePage", [0]);
        onSelf = true;
        var call1729 = callmethodChecked(this, "isOnClassPage", [0]);
        var opresult1731 = callmethodChecked(call1729, "||", [1], call1727);
        if (Grace_isTrue(opresult1731)) {
          if1726 = var_dir;
        } else {
          onSelf = true;
          var call1732 = callmethodChecked(this, "pageName", [0]);
          if1726 = call1732;
        }
        obj1067.data["outdir"] = if1726;
        var reader_gracedoc_outdir1733 = function() {
          return this.data["outdir"];
        };
        reader_gracedoc_outdir1733.def = true;
        reader_gracedoc_outdir1733.confidential = true;
        obj1067.methods["outdir"] = reader_gracedoc_outdir1733;
        superDepth = origSuperDepth;
      };
      obj_init_1067.apply(inheritingObject, []);
      return obj1067;
      };
      this.methods["directoryBuilderForFile()outTo()as()object"] = func1066;
    setLineNumber(1248);    // compilenode method
    var func1734 = function(argcv) {    // method formatComments(1)rowClass(1)colspan(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_astNode = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for formatComments (arg list 1) of formatComments(1)rowClass(1)colspan(1)"));
      var var_rowClassName = arguments[curarg];
      curarg++;
      if (argcv[1] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for rowClass (arg list 2) of formatComments(1)rowClass(1)colspan(1)"));
      var var_n = arguments[curarg];
      curarg++;
      if (argcv[2] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for colspan (arg list 3) of formatComments(1)rowClass(1)colspan(1)"));
      setModuleName("gracedoc");
      setLineNumber(1249);    // compilenode string
      var string1735 = new GraceString("");
      var var_t = string1735;
      var if1736 = GraceDone;
      setLineNumber(1250);    // compilenode identifier
      var call1737 = callmethodChecked(var_astNode, "comments", [0]);
      var opresult1740 = callmethodChecked(GraceFalse, "\u2260", [1], call1737);
      if (Grace_isTrue(opresult1740)) {
        setLineNumber(1251);    // compilenode string
        var string1741 = new GraceString("'>");
        var string1744 = new GraceString("'><td colspan='");
        var string1747 = new GraceString("<tr class='");
        var opresult1749 = callmethodChecked(string1747, "++", [1], var_rowClassName);
        var opresult1751 = callmethodChecked(opresult1749, "++", [1], string1744);
        var opresult1753 = callmethodChecked(opresult1751, "++", [1], var_n);
        var opresult1755 = callmethodChecked(opresult1753, "++", [1], string1741);
        var opresult1758 = callmethodChecked(var_t, "++", [1], opresult1755);
        var_t = opresult1758;
        setLineNumber(1252);    // compilenode string
        var string1759 = new GraceString("\n");
        var call1761 = callmethodChecked(var_astNode, "comments", [0]);
        var call1762 = callmethodChecked(call1761, "value", [0]);
        var opresult1765 = callmethodChecked(var_t, "++", [1], call1762);
        var opresult1767 = callmethodChecked(opresult1765, "++", [1], string1759);
        var_t = opresult1767;
        setLineNumber(1253);    // compilenode string
        var string1768 = new GraceString("</td></tr>");
        var opresult1771 = callmethodChecked(var_t, "++", [1], string1768);
        var_t = opresult1771;
        if1736 = GraceDone;
      }
      setLineNumber(1255);    // return value
      if (!Grace_isTrue(callmethod(var_String, "match", [1], var_t)))
          throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("result of method formatComments(1)rowClass(1)colspan(1) does not have " + 
                  callmethod(var_String, "asString", [0])._value + "."));
      return var_t;
    };
    func1734.paramCounts = [1, 1, 1];
    this.methods["formatComments()rowClass()colspan"] = func1734;
    func1734.definitionLine = 1248;
    func1734.definitionModule = "gracedoc";
    setLineNumber(7);    // compilenode object
    var obj1772 = Grace_allocObject(GraceObject, "settings");
    obj1772.definitionModule = "gracedoc";
    obj1772.definitionLine = 7;
    obj1772.outer = this;
    var reader_gracedoc_outer1773 = function() {
      return this.outer;
    };
    obj1772.methods["outer"] = reader_gracedoc_outer1773;
    var obj_init_1772 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj1772;
      setLineNumber(8);    // compilenode string
      var string1774 = new GraceString("");
      obj1772.data["inputdir"] = string1774;
      var reader_gracedoc_inputdir1775 = function() {
        return this.data["inputdir"];
      };
      obj1772.methods["inputdir"] = reader_gracedoc_inputdir1775;
      obj1772.data["inputdir"] = string1774;
      var writer_gracedoc_inputdir1775 = function(argcv, o) {
        this.data["inputdir"] = o;
        return GraceDone;
      };
      obj1772.methods["inputdir:="] = writer_gracedoc_inputdir1775;
      if (!Grace_isTrue(callmethod(var_String, "match", [1], string1774)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("initial value of var 'inputdir' is not of type String"));
      obj1772.mutable = true;
      setLineNumber(9);    // compilenode string
      var string1776 = new GraceString("");
      obj1772.data["outputdir"] = string1776;
      var reader_gracedoc_outputdir1777 = function() {
        return this.data["outputdir"];
      };
      obj1772.methods["outputdir"] = reader_gracedoc_outputdir1777;
      obj1772.data["outputdir"] = string1776;
      var writer_gracedoc_outputdir1777 = function(argcv, o) {
        this.data["outputdir"] = o;
        return GraceDone;
      };
      obj1772.methods["outputdir:="] = writer_gracedoc_outputdir1777;
      if (!Grace_isTrue(callmethod(var_String, "match", [1], string1776)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("initial value of var 'outputdir' is not of type String"));
      obj1772.mutable = true;
      setLineNumber(10);    // compilenode num
      obj1772.data["verbosity"] = new GraceNum(0);
      var reader_gracedoc_verbosity1778 = function() {
        return this.data["verbosity"];
      };
      obj1772.methods["verbosity"] = reader_gracedoc_verbosity1778;
      obj1772.data["verbosity"] = new GraceNum(0);
      var writer_gracedoc_verbosity1778 = function(argcv, o) {
        this.data["verbosity"] = o;
        return GraceDone;
      };
      obj1772.methods["verbosity:="] = writer_gracedoc_verbosity1778;
      if (!Grace_isTrue(callmethod(var_Number, "match", [1], new GraceNum(0))))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("initial value of var 'verbosity' is not of type Number"));
      obj1772.mutable = true;
      setLineNumber(11);    // compilenode identifier
      obj1772.data["publicOnly"] = GraceFalse;
      var reader_gracedoc_publicOnly1779 = function() {
        return this.data["publicOnly"];
      };
      obj1772.methods["publicOnly"] = reader_gracedoc_publicOnly1779;
      obj1772.data["publicOnly"] = GraceFalse;
      var writer_gracedoc_publicOnly1779 = function(argcv, o) {
        this.data["publicOnly"] = o;
        return GraceDone;
      };
      obj1772.methods["publicOnly:="] = writer_gracedoc_publicOnly1779;
      if (!Grace_isTrue(callmethod(var_Boolean, "match", [1], GraceFalse)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("initial value of var 'publicOnly' is not of type Boolean"));
      obj1772.mutable = true;
      setLineNumber(12);    // compilenode num
      obj1772.data["version"] = new GraceNum(1.0);
      var reader_gracedoc_version1780 = function() {
        return this.data["version"];
      };
      reader_gracedoc_version1780.def = true;
      obj1772.methods["version"] = reader_gracedoc_version1780;
      if (!Grace_isTrue(callmethod(var_Number, "match", [1], new GraceNum(1.0))))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("value of def 'version' is not of type Number"));
      superDepth = origSuperDepth;
    };
    obj_init_1772.apply(obj1772, []);
    var var_settings = obj1772;
    setLineNumber(1252);    // compilenode method
    var func1781 = function(argcv) {    // method settings
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for settings"));
      setModuleName("gracedoc");
      // settings is a simple accessor - elide try ... catch
      setLineNumber(7);    // compilenode identifier
      return var_settings;
    };
    func1781.paramCounts = [0];
    this.methods["settings"] = func1781;
    func1781.definitionLine = 1252;
    func1781.definitionModule = "gracedoc";
    this.methods["settings"].debug = "def";
    setLineNumber(77);    // compilenode typedec
    // Type decl Section
    //   Type literal 
    var type1783 = new GraceType("Section");
    type1783.typeMethods.push("html");
    type1783.typeMethods.push("isEmpty");
    type1783.typeMethods.push("insert");
    var var_Section = type1783;
    setLineNumber(1252);    // compilenode method
    var func1784 = function(argcv) {    // method Section
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Section"));
      setModuleName("gracedoc");
      // Section is a simple accessor - elide try ... catch
      setLineNumber(77);    // compilenode identifier
      return var_Section;
    };
    func1784.paramCounts = [0];
    this.methods["Section"] = func1784;
    func1784.definitionLine = 1252;
    func1784.definitionModule = "gracedoc";
    setLineNumber(83);    // compilenode object
    var obj1785 = Grace_allocObject(GraceObject, "section");
    obj1785.definitionModule = "gracedoc";
    obj1785.definitionLine = 83;
    obj1785.outer = this;
    var reader_gracedoc_outer1786 = function() {
      return this.outer;
    };
    obj1785.methods["outer"] = reader_gracedoc_outer1786;
    var obj_init_1785 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj1785;
      var func1787 = function(argcv) {    // method withTemplate(1)andCursorAt(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_html__39__ = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for withTemplate (arg list 1) of withTemplate(1)andCursorAt(1)"));
        var var_idx = arguments[curarg];
        curarg++;
        if (argcv[1] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for andCursorAt (arg list 2) of withTemplate(1)andCursorAt(1)"));
        setModuleName("gracedoc");
        var obj1788 = Grace_allocObject(GraceObject, "section.section.withTemplate()andCursorAt");
        obj1788.definitionModule = "gracedoc";
        obj1788.definitionLine = 83;
        obj1788.outer = this;
        var reader_gracedoc_outer1789 = function() {
          return this.outer;
        };
        obj1788.methods["outer"] = reader_gracedoc_outer1789;
        var obj_init_1788 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj1788;
          var func1790 = function(argcv) {    // method addElement(1)withText(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_n = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addElement (arg list 1) of addElement(1)withText(1)"));
            var var_t = arguments[curarg];
            curarg++;
            if (argcv[1] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for withText (arg list 2) of addElement(1)withText(1)"));
            // Start argument checking
            curarg = 1;
            setLineNumber(88);    // compilenode identifier
            if (!Grace_isTrue(callmethod(var_String, "match",  [1], arguments[curarg])))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("argument 1 in addElement (arg list 1), which corresponds to parameter n, does not have " + 
                        callmethod(var_String, "asString", [0])._value + "."));
            curarg++;
            if (!Grace_isTrue(callmethod(var_String, "match",  [1], arguments[curarg])))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("argument 1 in withText (arg list 2), which corresponds to parameter t, does not have " + 
                        callmethod(var_String, "asString", [0])._value + "."));
            curarg++;
            // End argument checking
            setModuleName("gracedoc");
            setLineNumber(89);    // compilenode identifier
            onSelf = true;
            var call1791 = callmethodChecked(this, "hasContent:=", [1], GraceTrue);
            setLineNumber(90);    // compilenode call
            onSelf = true;
            var call1792 = callmethodChecked(this, "elts", [0]);
            var call1793 = callmethodChecked(call1792, "at()put", [1, 1], var_n, var_t);
            return call1793;
          };
          func1790.paramTypes = [];
          func1790.paramTypes.push([type_String, "n"]);
          func1790.paramTypes.push([type_String, "t"]);
          func1790.paramCounts = [1, 1];
          obj1788.methods["addElement()withText"] = func1790;
          func1790.definitionLine = 88;
          func1790.definitionModule = "gracedoc";
          var func1794 = function(argcv) {    // method insert(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_t = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for insert(1)"));
            // Start argument checking
            curarg = 1;
            setLineNumber(92);    // compilenode identifier
            if (!Grace_isTrue(callmethod(var_String, "match",  [1], arguments[curarg])))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("argument 1 in insert (arg list 1), which corresponds to parameter t, does not have " + 
                        callmethod(var_String, "asString", [0])._value + "."));
            curarg++;
            // End argument checking
            setModuleName("gracedoc");
            setLineNumber(93);    // compilenode identifier
            onSelf = true;
            var call1795 = callmethodChecked(this, "hasContent:=", [1], GraceTrue);
            setLineNumber(94);    // compilenode call
            onSelf = true;
            var call1796 = callmethodChecked(this, "cursor", [0]);
            onSelf = true;
            var call1797 = callmethodChecked(this, "html", [0]);
            var call1798 = callmethodChecked(call1797, "substringFrom()to", [1, 1], new GraceNum(1), call1796);
            var var_begin = call1798;
            setLineNumber(95);    // compilenode call
            onSelf = true;
            var call1800 = callmethodChecked(this, "cursor", [0]);
            var opresult1802 = callmethodChecked(call1800, "+", [1], new GraceNum(1));
            onSelf = true;
            var call1803 = callmethodChecked(this, "html", [0]);
            var call1804 = callmethodChecked(call1803, "size", [0]);
            onSelf = true;
            var call1805 = callmethodChecked(this, "html", [0]);
            var call1806 = callmethodChecked(call1805, "substringFrom()to", [1, 1], opresult1802, call1804);
            var var_end = call1806;
            setLineNumber(96);    // compilenode string
            var string1807 = new GraceString("");
            var string1810 = new GraceString("");
            var string1813 = new GraceString("");
            var string1816 = new GraceString("");
            var opresult1818 = callmethodChecked(string1816, "++", [1], var_begin);
            var opresult1820 = callmethodChecked(opresult1818, "++", [1], string1813);
            var opresult1822 = callmethodChecked(opresult1820, "++", [1], var_t);
            var opresult1824 = callmethodChecked(opresult1822, "++", [1], string1810);
            var opresult1826 = callmethodChecked(opresult1824, "++", [1], var_end);
            var opresult1828 = callmethodChecked(opresult1826, "++", [1], string1807);
            onSelf = true;
            var call1829 = callmethodChecked(this, "html:=", [1], opresult1828);
            setLineNumber(97);    // compilenode identifier
            var call1830 = callmethodChecked(var_t, "size", [0]);
            onSelf = true;
            var call1832 = callmethodChecked(this, "cursor", [0]);
            var opresult1834 = callmethodChecked(call1832, "+", [1], call1830);
            onSelf = true;
            var call1835 = callmethodChecked(this, "cursor:=", [1], opresult1834);
            return call1835;
          };
          func1794.paramTypes = [];
          func1794.paramTypes.push([type_String, "t"]);
          func1794.paramCounts = [1];
          obj1788.methods["insert"] = func1794;
          func1794.definitionLine = 92;
          func1794.definitionModule = "gracedoc";
          var func1836 = function(argcv) {    // method alphabetize
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for alphabetize"));
            setModuleName("gracedoc");
            setLineNumber(100);    // compilenode call
            onSelf = true;
            var call1837 = callmethodChecked(this, "elts", [0]);
            var call1838 = callmethodChecked(call1837, "keys", [0]);
            var call1839 = callmethodChecked(call1838, "sorted", [0]);
            var var_alpha = call1839;
            setLineNumber(101);    // compilenode num
            var var_numElts = new GraceNum(0);
            setLineNumber(102);    // compilenode block
            var block1840 = new GraceBlock(this, 102, 1);
            setLineNumber(1);    // compilenode identifier
            block1840.real = function(var_k) {
              setLineNumber(103);    // compilenode vardec
              var var_rowClass;
              var if1841 = GraceDone;
              setLineNumber(104);    // compilenode identifier
              var modulus1845 = callmethodChecked(var_numElts, "%", [1], new GraceNum(2));
              var opresult1847 = callmethodChecked(modulus1845, "==", [1], new GraceNum(0));
              if (Grace_isTrue(opresult1847)) {
                setLineNumber(105);    // compilenode string
                var string1848 = new GraceString("row-even");
                var_rowClass = string1848;
                if1841 = GraceDone;
              } else {
                setLineNumber(106);    // compilenode string
                var string1849 = new GraceString("row-odd");
                var_rowClass = string1849;
                if1841 = GraceDone;
              }
              setLineNumber(107);    // compilenode string
              var string1850 = new GraceString("class='placeholder'");
              setLineNumber(108);    // compilenode string
              var string1851 = new GraceString("'");
              var string1854 = new GraceString("class='");
              var opresult1856 = callmethodChecked(string1854, "++", [1], var_rowClass);
              var opresult1858 = callmethodChecked(opresult1856, "++", [1], string1851);
              setLineNumber(107);    // compilenode call
              onSelf = true;
              var call1859 = callmethodChecked(this, "elts", [0]);
              var call1860 = callmethodChecked(call1859, "at", [1], var_k);
              var call1861 = callmethodChecked(call1860, "replace()with", [1, 1], string1850, opresult1858);
              onSelf = true;
              var call1862 = callmethodChecked(this, "elts", [0]);
              var call1863 = callmethodChecked(call1862, "at()put", [1, 1], var_k, call1861);
              setLineNumber(109);    // compilenode call
              onSelf = true;
              var call1864 = callmethodChecked(this, "elts", [0]);
              var call1865 = callmethodChecked(call1864, "at", [1], var_k);
              onSelf = true;
              var call1866 = callmethodChecked(this, "insert", [1], call1865);
              setLineNumber(110);    // compilenode identifier
              var opresult1869 = callmethodChecked(var_numElts, "+", [1], new GraceNum(1));
              var_numElts = opresult1869;
              return GraceDone;
            };
            var call1870 = callmethodChecked(var_prelude, "for()do", [1, 1], var_alpha, block1840);
            return call1870;
          };
          func1836.paramCounts = [0];
          obj1788.methods["alphabetize"] = func1836;
          func1836.definitionLine = 99;
          func1836.definitionModule = "gracedoc";
          setLineNumber(84);    // compilenode identifier
          obj1788.data["html"] = var_html__39__;
          var reader_gracedoc_html1871 = function() {
            return this.data["html"];
          };
          obj1788.methods["html"] = reader_gracedoc_html1871;
          obj1788.data["html"] = var_html__39__;
          var writer_gracedoc_html1871 = function(argcv, o) {
            this.data["html"] = o;
            return GraceDone;
          };
          obj1788.methods["html:="] = writer_gracedoc_html1871;
          writer_gracedoc_html1871.confidential = true;
          if (!Grace_isTrue(callmethod(var_String, "match", [1], var_html__39__)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("initial value of var 'html' is not of type String"));
          obj1788.mutable = true;
          setLineNumber(85);    // compilenode identifier
          obj1788.data["hasContent"] = GraceFalse;
          var reader_gracedoc_hasContent1872 = function() {
            return this.data["hasContent"];
          };
          obj1788.methods["hasContent"] = reader_gracedoc_hasContent1872;
          obj1788.data["hasContent"] = GraceFalse;
          var writer_gracedoc_hasContent1872 = function(argcv, o) {
            this.data["hasContent"] = o;
            return GraceDone;
          };
          obj1788.methods["hasContent:="] = writer_gracedoc_hasContent1872;
          writer_gracedoc_hasContent1872.confidential = true;
          obj1788.mutable = true;
          setLineNumber(86);    // compilenode identifier
          obj1788.data["cursor"] = var_idx;
          var reader_gracedoc_cursor1873 = function() {
            return this.data["cursor"];
          };
          obj1788.methods["cursor"] = reader_gracedoc_cursor1873;
          obj1788.data["cursor"] = var_idx;
          var writer_gracedoc_cursor1873 = function(argcv, o) {
            this.data["cursor"] = o;
            return GraceDone;
          };
          obj1788.methods["cursor:="] = writer_gracedoc_cursor1873;
          reader_gracedoc_cursor1873.confidential = true;
          writer_gracedoc_cursor1873.confidential = true;
          if (!Grace_isTrue(callmethod(var_Number, "match", [1], var_idx)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("initial value of var 'cursor' is not of type Number"));
          obj1788.mutable = true;
          setLineNumber(87);    // compilenode call
          var call1874 = callmethodChecked(var_prelude, "dictionary", [0]);
          var call1875 = callmethodChecked(call1874, "empty", [0]);
          obj1788.data["elts"] = call1875;
          var reader_gracedoc_elts1876 = function() {
            return this.data["elts"];
          };
          obj1788.methods["elts"] = reader_gracedoc_elts1876;
          obj1788.data["elts"] = call1875;
          var writer_gracedoc_elts1876 = function(argcv, o) {
            this.data["elts"] = o;
            return GraceDone;
          };
          obj1788.methods["elts:="] = writer_gracedoc_elts1876;
          obj1788.mutable = true;
          superDepth = origSuperDepth;
        };
        obj_init_1788.apply(obj1788, []);
        setLineNumber(83);    // return value
        if (!Grace_isTrue(callmethod(var_Section, "match", [1], obj1788)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method withTemplate(1)andCursorAt(1) does not have " + 
                    callmethod(var_Section, "asString", [0])._value + "."));
        return obj1788;
      };
      func1787.paramCounts = [1, 1];
      obj1785.methods["withTemplate()andCursorAt"] = func1787;
      func1787.definitionLine = 83;
      func1787.definitionModule = "gracedoc";
        var func1877 = function(argcv) {    // method withTemplate(1     )andCursorAt(1     )()object
          var curarg = 1;
          var var_html__39__ = arguments[curarg];
          curarg++;
          var var_idx = arguments[curarg];
          curarg++;
          var inheritingObject = arguments[curarg++];
          // Start argument processing
          curarg = 1;
          curarg++;
          curarg++;
          // End argument processing
          setModuleName("gracedoc");
          var returnTarget = invocationCount;
          invocationCount++;
          var obj1878 = Grace_allocObject(GraceObject, "withTemplate()andCursorAt");
          obj1878.definitionModule = "gracedoc";
          obj1878.definitionLine = 83;
          var inho1878 = inheritingObject;
          while (inho1878.superobj) inho1878 = inho1878.superobj;
          inho1878.superobj = obj1878;
          obj1878.data = inheritingObject.data;
          if (inheritingObject.hasOwnProperty('_value'))
            obj1878._value = inheritingObject._value;
          obj1878.outer = this;
          var reader_gracedoc_outer1879 = function() {
            return this.outer;
          };
          obj1878.methods["outer"] = reader_gracedoc_outer1879;
          var obj_init_1878 = function() {
            var origSuperDepth = superDepth;
            superDepth = obj1878;
            var func1880 = function(argcv) {    // method addElement(1)withText(1)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_n = arguments[curarg];
              curarg++;
              if (argcv[0] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addElement (arg list 1) of addElement(1)withText(1)"));
              var var_t = arguments[curarg];
              curarg++;
              if (argcv[1] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for withText (arg list 2) of addElement(1)withText(1)"));
              // Start argument checking
              curarg = 1;
              setLineNumber(88);    // compilenode identifier
              if (!Grace_isTrue(callmethod(var_String, "match",  [1], arguments[curarg])))
                  throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("argument 1 in addElement (arg list 1), which corresponds to parameter n, does not have " + 
                          callmethod(var_String, "asString", [0])._value + "."));
              curarg++;
              if (!Grace_isTrue(callmethod(var_String, "match",  [1], arguments[curarg])))
                  throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("argument 1 in withText (arg list 2), which corresponds to parameter t, does not have " + 
                          callmethod(var_String, "asString", [0])._value + "."));
              curarg++;
              // End argument checking
              setModuleName("gracedoc");
              setLineNumber(89);    // compilenode identifier
              onSelf = true;
              var call1881 = callmethodChecked(this, "hasContent:=", [1], GraceTrue);
              setLineNumber(90);    // compilenode call
              onSelf = true;
              var call1882 = callmethodChecked(this, "elts", [0]);
              var call1883 = callmethodChecked(call1882, "at()put", [1, 1], var_n, var_t);
              return call1883;
            };
            func1880.paramTypes = [];
            func1880.paramTypes.push([type_String, "n"]);
            func1880.paramTypes.push([type_String, "t"]);
            func1880.paramCounts = [1, 1];
            obj1878.methods["addElement()withText"] = func1880;
            func1880.definitionLine = 88;
            func1880.definitionModule = "gracedoc";
            var func1884 = function(argcv) {    // method insert(1)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_t = arguments[curarg];
              curarg++;
              if (argcv[0] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for insert(1)"));
              // Start argument checking
              curarg = 1;
              setLineNumber(92);    // compilenode identifier
              if (!Grace_isTrue(callmethod(var_String, "match",  [1], arguments[curarg])))
                  throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("argument 1 in insert (arg list 1), which corresponds to parameter t, does not have " + 
                          callmethod(var_String, "asString", [0])._value + "."));
              curarg++;
              // End argument checking
              setModuleName("gracedoc");
              setLineNumber(93);    // compilenode identifier
              onSelf = true;
              var call1885 = callmethodChecked(this, "hasContent:=", [1], GraceTrue);
              setLineNumber(94);    // compilenode call
              onSelf = true;
              var call1886 = callmethodChecked(this, "cursor", [0]);
              onSelf = true;
              var call1887 = callmethodChecked(this, "html", [0]);
              var call1888 = callmethodChecked(call1887, "substringFrom()to", [1, 1], new GraceNum(1), call1886);
              var var_begin = call1888;
              setLineNumber(95);    // compilenode call
              onSelf = true;
              var call1890 = callmethodChecked(this, "cursor", [0]);
              var opresult1892 = callmethodChecked(call1890, "+", [1], new GraceNum(1));
              onSelf = true;
              var call1893 = callmethodChecked(this, "html", [0]);
              var call1894 = callmethodChecked(call1893, "size", [0]);
              onSelf = true;
              var call1895 = callmethodChecked(this, "html", [0]);
              var call1896 = callmethodChecked(call1895, "substringFrom()to", [1, 1], opresult1892, call1894);
              var var_end = call1896;
              setLineNumber(96);    // compilenode string
              var string1897 = new GraceString("");
              var string1900 = new GraceString("");
              var string1903 = new GraceString("");
              var string1906 = new GraceString("");
              var opresult1908 = callmethodChecked(string1906, "++", [1], var_begin);
              var opresult1910 = callmethodChecked(opresult1908, "++", [1], string1903);
              var opresult1912 = callmethodChecked(opresult1910, "++", [1], var_t);
              var opresult1914 = callmethodChecked(opresult1912, "++", [1], string1900);
              var opresult1916 = callmethodChecked(opresult1914, "++", [1], var_end);
              var opresult1918 = callmethodChecked(opresult1916, "++", [1], string1897);
              onSelf = true;
              var call1919 = callmethodChecked(this, "html:=", [1], opresult1918);
              setLineNumber(97);    // compilenode identifier
              var call1920 = callmethodChecked(var_t, "size", [0]);
              onSelf = true;
              var call1922 = callmethodChecked(this, "cursor", [0]);
              var opresult1924 = callmethodChecked(call1922, "+", [1], call1920);
              onSelf = true;
              var call1925 = callmethodChecked(this, "cursor:=", [1], opresult1924);
              return call1925;
            };
            func1884.paramTypes = [];
            func1884.paramTypes.push([type_String, "t"]);
            func1884.paramCounts = [1];
            obj1878.methods["insert"] = func1884;
            func1884.definitionLine = 92;
            func1884.definitionModule = "gracedoc";
            var func1926 = function(argcv) {    // method alphabetize
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for alphabetize"));
              setModuleName("gracedoc");
              setLineNumber(100);    // compilenode call
              onSelf = true;
              var call1927 = callmethodChecked(this, "elts", [0]);
              var call1928 = callmethodChecked(call1927, "keys", [0]);
              var call1929 = callmethodChecked(call1928, "sorted", [0]);
              var var_alpha = call1929;
              setLineNumber(101);    // compilenode num
              var var_numElts = new GraceNum(0);
              setLineNumber(102);    // compilenode block
              var block1930 = new GraceBlock(this, 102, 1);
              setLineNumber(1);    // compilenode identifier
              block1930.real = function(var_k) {
                setLineNumber(103);    // compilenode vardec
                var var_rowClass;
                var if1931 = GraceDone;
                setLineNumber(104);    // compilenode identifier
                var modulus1935 = callmethodChecked(var_numElts, "%", [1], new GraceNum(2));
                var opresult1937 = callmethodChecked(modulus1935, "==", [1], new GraceNum(0));
                if (Grace_isTrue(opresult1937)) {
                  setLineNumber(105);    // compilenode string
                  var string1938 = new GraceString("row-even");
                  var_rowClass = string1938;
                  if1931 = GraceDone;
                } else {
                  setLineNumber(106);    // compilenode string
                  var string1939 = new GraceString("row-odd");
                  var_rowClass = string1939;
                  if1931 = GraceDone;
                }
                setLineNumber(107);    // compilenode string
                var string1940 = new GraceString("class='placeholder'");
                setLineNumber(108);    // compilenode string
                var string1941 = new GraceString("'");
                var string1944 = new GraceString("class='");
                var opresult1946 = callmethodChecked(string1944, "++", [1], var_rowClass);
                var opresult1948 = callmethodChecked(opresult1946, "++", [1], string1941);
                setLineNumber(107);    // compilenode call
                onSelf = true;
                var call1949 = callmethodChecked(this, "elts", [0]);
                var call1950 = callmethodChecked(call1949, "at", [1], var_k);
                var call1951 = callmethodChecked(call1950, "replace()with", [1, 1], string1940, opresult1948);
                onSelf = true;
                var call1952 = callmethodChecked(this, "elts", [0]);
                var call1953 = callmethodChecked(call1952, "at()put", [1, 1], var_k, call1951);
                setLineNumber(109);    // compilenode call
                onSelf = true;
                var call1954 = callmethodChecked(this, "elts", [0]);
                var call1955 = callmethodChecked(call1954, "at", [1], var_k);
                onSelf = true;
                var call1956 = callmethodChecked(this, "insert", [1], call1955);
                setLineNumber(110);    // compilenode identifier
                var opresult1959 = callmethodChecked(var_numElts, "+", [1], new GraceNum(1));
                var_numElts = opresult1959;
                return GraceDone;
              };
              var call1960 = callmethodChecked(var_prelude, "for()do", [1, 1], var_alpha, block1930);
              return call1960;
            };
            func1926.paramCounts = [0];
            obj1878.methods["alphabetize"] = func1926;
            func1926.definitionLine = 99;
            func1926.definitionModule = "gracedoc";
            setLineNumber(84);    // compilenode identifier
            obj1878.data["html"] = var_html__39__;
            var reader_gracedoc_html1961 = function() {
              return this.data["html"];
            };
            obj1878.methods["html"] = reader_gracedoc_html1961;
            obj1878.data["html"] = var_html__39__;
            var writer_gracedoc_html1961 = function(argcv, o) {
              this.data["html"] = o;
              return GraceDone;
            };
            obj1878.methods["html:="] = writer_gracedoc_html1961;
            writer_gracedoc_html1961.confidential = true;
            if (!Grace_isTrue(callmethod(var_String, "match", [1], var_html__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("initial value of var 'html' is not of type String"));
            obj1878.mutable = true;
            setLineNumber(85);    // compilenode identifier
            obj1878.data["hasContent"] = GraceFalse;
            var reader_gracedoc_hasContent1962 = function() {
              return this.data["hasContent"];
            };
            obj1878.methods["hasContent"] = reader_gracedoc_hasContent1962;
            obj1878.data["hasContent"] = GraceFalse;
            var writer_gracedoc_hasContent1962 = function(argcv, o) {
              this.data["hasContent"] = o;
              return GraceDone;
            };
            obj1878.methods["hasContent:="] = writer_gracedoc_hasContent1962;
            writer_gracedoc_hasContent1962.confidential = true;
            obj1878.mutable = true;
            setLineNumber(86);    // compilenode identifier
            obj1878.data["cursor"] = var_idx;
            var reader_gracedoc_cursor1963 = function() {
              return this.data["cursor"];
            };
            obj1878.methods["cursor"] = reader_gracedoc_cursor1963;
            obj1878.data["cursor"] = var_idx;
            var writer_gracedoc_cursor1963 = function(argcv, o) {
              this.data["cursor"] = o;
              return GraceDone;
            };
            obj1878.methods["cursor:="] = writer_gracedoc_cursor1963;
            reader_gracedoc_cursor1963.confidential = true;
            writer_gracedoc_cursor1963.confidential = true;
            if (!Grace_isTrue(callmethod(var_Number, "match", [1], var_idx)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("initial value of var 'cursor' is not of type Number"));
            obj1878.mutable = true;
            setLineNumber(87);    // compilenode call
            var call1964 = callmethodChecked(var_prelude, "dictionary", [0]);
            var call1965 = callmethodChecked(call1964, "empty", [0]);
            obj1878.data["elts"] = call1965;
            var reader_gracedoc_elts1966 = function() {
              return this.data["elts"];
            };
            obj1878.methods["elts"] = reader_gracedoc_elts1966;
            obj1878.data["elts"] = call1965;
            var writer_gracedoc_elts1966 = function(argcv, o) {
              this.data["elts"] = o;
              return GraceDone;
            };
            obj1878.methods["elts:="] = writer_gracedoc_elts1966;
            obj1878.mutable = true;
            superDepth = origSuperDepth;
          };
          obj_init_1878.apply(inheritingObject, []);
          return obj1878;
          };
          obj1785.methods["withTemplate()andCursorAt()object"] = func1877;
        var func1967 = function(argcv) {    // method 
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("gracedoc");
          setLineNumber(83);    // compilenode string
          var string1968 = new GraceString("class section");
          return string1968;
        };
        func1967.paramCounts = [];
        obj1785.methods["asString"] = func1967;
        func1967.definitionLine = 83;
        func1967.definitionModule = "gracedoc";
        superDepth = origSuperDepth;
      };
      obj_init_1785.apply(obj1785, []);
      var var_section = obj1785;
      setLineNumber(87);    // compilenode method
      var func1969 = function(argcv) {    // method section
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for section"));
        setModuleName("gracedoc");
        // section is a simple accessor - elide try ... catch
        setLineNumber(83);    // compilenode identifier
        return var_section;
      };
      func1969.paramCounts = [0];
      this.methods["section"] = func1969;
      func1969.definitionLine = 87;
      func1969.definitionModule = "gracedoc";
      this.methods["section"].debug = "def";
      setLineNumber(314);    // compilenode object
      var obj1970 = Grace_allocObject(GraceObject, "graceDocVisitor");
      obj1970.definitionModule = "gracedoc";
      obj1970.definitionLine = 314;
      obj1970.outer = this;
      var reader_gracedoc_outer1971 = function() {
        return this.outer;
      };
      obj1970.methods["outer"] = reader_gracedoc_outer1971;
      var obj_init_1970 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj1970;
        var func1972 = function(argcv) {    // method createFrom(1)outTo(1)as(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_in = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for createFrom (arg list 1) of createFrom(1)outTo(1)as(1)"));
          var var_dir = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for outTo (arg list 2) of createFrom(1)outTo(1)as(1)"));
          var var_pageType = arguments[curarg];
          curarg++;
          if (argcv[2] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for as (arg list 3) of createFrom(1)outTo(1)as(1)"));
          setModuleName("gracedoc");
          var obj1973 = Grace_allocObject(null, "graceDocVisitor.graceDocVisitor.createFrom()outTo()as");
          obj1973.definitionModule = "gracedoc";
          obj1973.definitionLine = 314;
          obj1973.outer = this;
          var reader_gracedoc_outer1974 = function() {
            return this.outer;
          };
          obj1973.methods["outer"] = reader_gracedoc_outer1974;
          var obj_init_1973 = function() {
            var origSuperDepth = superDepth;
            superDepth = obj1973;
            var func1975 = function(argcv) {    // method getTypeLink(1)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_v = arguments[curarg];
              curarg++;
              if (argcv[0] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for getTypeLink(1)"));
              // Start argument checking
              curarg = 1;
              setLineNumber(342);    // compilenode identifier
              if (!Grace_isTrue(callmethod(var_String, "match",  [1], arguments[curarg])))
                  throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("argument 1 in getTypeLink (arg list 1), which corresponds to parameter v, does not have " + 
                          callmethod(var_String, "asString", [0])._value + "."));
              curarg++;
              // End argument checking
              setModuleName("gracedoc");
              setLineNumber(343);    // compilenode string
              var string1976 = new GraceString(".html");
              var string1979 = new GraceString("");
              var opresult1981 = callmethodChecked(string1979, "++", [1], var_v);
              var opresult1983 = callmethodChecked(opresult1981, "++", [1], string1976);
              var var_filename = opresult1983;
              setLineNumber(344);    // compilenode string
              var string1984 = new GraceString("<a href='");
              var var_out = string1984;
              var if1985 = GraceDone;
              setLineNumber(346);    // compilenode string
              var string1986 = new GraceString("");
              var string1989 = new GraceString("/types/");
              onSelf = true;
              var call1991 = callmethodChecked(this, "outdir", [0]);
              var string1993 = new GraceString("/");
              var call1995 = callmethodChecked(var_settings, "outputdir", [0]);
              var string1997 = new GraceString("");
              var opresult1999 = callmethodChecked(string1997, "++", [1], call1995);
              var opresult2001 = callmethodChecked(opresult1999, "++", [1], string1993);
              var opresult2003 = callmethodChecked(opresult2001, "++", [1], call1991);
              var opresult2005 = callmethodChecked(opresult2003, "++", [1], string1989);
              var opresult2007 = callmethodChecked(opresult2005, "++", [1], var_filename);
              var opresult2009 = callmethodChecked(opresult2007, "++", [1], string1986);
              var call2010 = callmethodChecked(var_io, "exists", [1], opresult2009);
              if (Grace_isTrue(call2010)) {
                var if2011 = GraceDone;
                setLineNumber(347);    // compilenode call
                onSelf = true;
                var call2012 = callmethodChecked(this, "isOnTypePage", [0]);
                if (Grace_isTrue(call2012)) {
                  setLineNumber(348);    // compilenode string
                  var string2013 = new GraceString("");
                  var string2016 = new GraceString("");
                  var opresult2018 = callmethodChecked(string2016, "++", [1], var_filename);
                  var opresult2020 = callmethodChecked(opresult2018, "++", [1], string2013);
                  var opresult2023 = callmethodChecked(var_out, "++", [1], opresult2020);
                  var_out = opresult2023;
                  if2011 = GraceDone;
                } else {
                  var if2024 = GraceDone;
                  setLineNumber(349);    // compilenode call
                  onSelf = true;
                  var call2025 = callmethodChecked(this, "isOnClassPage", [0]);
                  if (Grace_isTrue(call2025)) {
                    setLineNumber(350);    // compilenode string
                    var string2026 = new GraceString("");
                    var string2029 = new GraceString("../types/");
                    var opresult2031 = callmethodChecked(string2029, "++", [1], var_filename);
                    var opresult2033 = callmethodChecked(opresult2031, "++", [1], string2026);
                    var opresult2036 = callmethodChecked(var_out, "++", [1], opresult2033);
                    var_out = opresult2036;
                    if2024 = GraceDone;
                  } else {
                    setLineNumber(352);    // compilenode string
                    var string2037 = new GraceString("");
                    var string2040 = new GraceString("types/");
                    var opresult2042 = callmethodChecked(string2040, "++", [1], var_filename);
                    var opresult2044 = callmethodChecked(opresult2042, "++", [1], string2037);
                    var opresult2047 = callmethodChecked(var_out, "++", [1], opresult2044);
                    var_out = opresult2047;
                    if2024 = GraceDone;
                  }
                  if2011 = if2024;
                }
                if1985 = if2011;
              } else {
                var if2048 = GraceDone;
                setLineNumber(355);    // compilenode string
                var string2049 = new GraceString("");
                var string2052 = new GraceString("/imported/types/");
                var call2054 = callmethodChecked(var_settings, "outputdir", [0]);
                var string2056 = new GraceString("");
                var opresult2058 = callmethodChecked(string2056, "++", [1], call2054);
                var opresult2060 = callmethodChecked(opresult2058, "++", [1], string2052);
                var opresult2062 = callmethodChecked(opresult2060, "++", [1], var_filename);
                var opresult2064 = callmethodChecked(opresult2062, "++", [1], string2049);
                var call2065 = callmethodChecked(var_io, "exists", [1], opresult2064);
                if (Grace_isTrue(call2065)) {
                  var if2066 = GraceDone;
                  setLineNumber(356);    // compilenode call
                  onSelf = true;
                  var call2067 = callmethodChecked(this, "isOnClassPage", [0]);
                  onSelf = true;
                  var call2069 = callmethodChecked(this, "isOnTypePage", [0]);
                  var opresult2071 = callmethodChecked(call2069, "||", [1], call2067);
                  if (Grace_isTrue(opresult2071)) {
                    setLineNumber(357);    // compilenode string
                    var string2072 = new GraceString("");
                    var string2075 = new GraceString("../../imported/types/");
                    var opresult2077 = callmethodChecked(string2075, "++", [1], var_filename);
                    var opresult2079 = callmethodChecked(opresult2077, "++", [1], string2072);
                    var opresult2082 = callmethodChecked(var_out, "++", [1], opresult2079);
                    var_out = opresult2082;
                    if2066 = GraceDone;
                  } else {
                    setLineNumber(359);    // compilenode string
                    var string2083 = new GraceString("");
                    var string2086 = new GraceString("../imported/types/");
                    var opresult2088 = callmethodChecked(string2086, "++", [1], var_filename);
                    var opresult2090 = callmethodChecked(opresult2088, "++", [1], string2083);
                    var opresult2093 = callmethodChecked(var_out, "++", [1], opresult2090);
                    var_out = opresult2093;
                    if2066 = GraceDone;
                  }
                  if2048 = if2066;
                } else {
                  var if2094 = GraceDone;
                  setLineNumber(362);    // compilenode string
                  var string2095 = new GraceString("");
                  var string2098 = new GraceString("/gracelib/types/");
                  var call2100 = callmethodChecked(var_settings, "outputdir", [0]);
                  var string2102 = new GraceString("");
                  var opresult2104 = callmethodChecked(string2102, "++", [1], call2100);
                  var opresult2106 = callmethodChecked(opresult2104, "++", [1], string2098);
                  var opresult2108 = callmethodChecked(opresult2106, "++", [1], var_filename);
                  var opresult2110 = callmethodChecked(opresult2108, "++", [1], string2095);
                  var call2111 = callmethodChecked(var_io, "exists", [1], opresult2110);
                  if (Grace_isTrue(call2111)) {
                    var if2112 = GraceDone;
                    setLineNumber(363);    // compilenode call
                    onSelf = true;
                    var call2113 = callmethodChecked(this, "isOnClassPage", [0]);
                    onSelf = true;
                    var call2115 = callmethodChecked(this, "isOnTypePage", [0]);
                    var opresult2117 = callmethodChecked(call2115, "||", [1], call2113);
                    if (Grace_isTrue(opresult2117)) {
                      setLineNumber(364);    // compilenode string
                      var string2118 = new GraceString("");
                      var string2121 = new GraceString("../../gracelib/types/");
                      var opresult2123 = callmethodChecked(string2121, "++", [1], var_filename);
                      var opresult2125 = callmethodChecked(opresult2123, "++", [1], string2118);
                      var opresult2128 = callmethodChecked(var_out, "++", [1], opresult2125);
                      var_out = opresult2128;
                      if2112 = GraceDone;
                    } else {
                      setLineNumber(366);    // compilenode string
                      var string2129 = new GraceString("");
                      var string2132 = new GraceString("../gracelib/types/");
                      var opresult2134 = callmethodChecked(string2132, "++", [1], var_filename);
                      var opresult2136 = callmethodChecked(opresult2134, "++", [1], string2129);
                      var opresult2139 = callmethodChecked(var_out, "++", [1], opresult2136);
                      var_out = opresult2139;
                      if2112 = GraceDone;
                    }
                    if2094 = if2112;
                  } else {
                    setLineNumber(369);    // compilenode string
                    var string2140 = new GraceString("");
                    var var_dots = string2140;
                    var if2141 = GraceDone;
                    setLineNumber(370);    // compilenode call
                    onSelf = true;
                    var call2142 = callmethodChecked(this, "isOnTypePage", [0]);
                    onSelf = true;
                    var call2144 = callmethodChecked(this, "isOnClassPage", [0]);
                    var opresult2146 = callmethodChecked(call2144, "||", [1], call2142);
                    if (Grace_isTrue(opresult2146)) {
                      setLineNumber(371);    // compilenode string
                      var string2147 = new GraceString("../../");
                      var_dots = string2147;
                      if2141 = GraceDone;
                    } else {
                      setLineNumber(373);    // compilenode string
                      var string2148 = new GraceString("../");
                      var_dots = string2148;
                      if2141 = GraceDone;
                    }
                    setLineNumber(375);    // compilenode string
                    var string2149 = new GraceString("404.html");
                    var string2152 = new GraceString("");
                    var opresult2154 = callmethodChecked(string2152, "++", [1], var_dots);
                    var opresult2156 = callmethodChecked(opresult2154, "++", [1], string2149);
                    var opresult2159 = callmethodChecked(var_out, "++", [1], opresult2156);
                    var_out = opresult2159;
                    if2094 = GraceDone;
                  }
                  if2048 = if2094;
                }
                if1985 = if2048;
              }
              setLineNumber(377);    // compilenode string
              var string2160 = new GraceString("</a>");
              var string2163 = new GraceString("'>");
              var opresult2165 = callmethodChecked(string2163, "++", [1], var_v);
              var opresult2167 = callmethodChecked(opresult2165, "++", [1], string2160);
              var opresult2170 = callmethodChecked(var_out, "++", [1], opresult2167);
              var_out = opresult2170;
              setLineNumber(378);    // compilenode identifier
              return var_out;
            };
            func1975.paramTypes = [];
            func1975.paramTypes.push([type_String, "v"]);
            func1975.confidential = true;
            func1975.paramCounts = [1];
            obj1973.methods["getTypeLink"] = func1975;
            func1975.definitionLine = 342;
            func1975.definitionModule = "gracedoc";
            var func2171 = function(argcv) {    // method getClassLink(1)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_c = arguments[curarg];
              curarg++;
              if (argcv[0] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for getClassLink(1)"));
              // Start argument checking
              curarg = 1;
              setLineNumber(381);    // compilenode identifier
              if (!Grace_isTrue(callmethod(var_String, "match",  [1], arguments[curarg])))
                  throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("argument 1 in getClassLink (arg list 1), which corresponds to parameter c, does not have " + 
                          callmethod(var_String, "asString", [0])._value + "."));
              curarg++;
              // End argument checking
              setModuleName("gracedoc");
              setLineNumber(382);    // compilenode string
              var string2172 = new GraceString(".html");
              var string2175 = new GraceString("");
              var opresult2177 = callmethodChecked(string2175, "++", [1], var_c);
              var opresult2179 = callmethodChecked(opresult2177, "++", [1], string2172);
              var var_filename = opresult2179;
              setLineNumber(383);    // compilenode string
              var string2180 = new GraceString("<a href='");
              var var_out = string2180;
              var if2181 = GraceDone;
              setLineNumber(385);    // compilenode string
              var string2182 = new GraceString("");
              var string2185 = new GraceString("/classes/");
              onSelf = true;
              var call2187 = callmethodChecked(this, "outdir", [0]);
              var string2189 = new GraceString("/");
              var call2191 = callmethodChecked(var_settings, "outputdir", [0]);
              var string2193 = new GraceString("");
              var opresult2195 = callmethodChecked(string2193, "++", [1], call2191);
              var opresult2197 = callmethodChecked(opresult2195, "++", [1], string2189);
              var opresult2199 = callmethodChecked(opresult2197, "++", [1], call2187);
              var opresult2201 = callmethodChecked(opresult2199, "++", [1], string2185);
              var opresult2203 = callmethodChecked(opresult2201, "++", [1], var_filename);
              var opresult2205 = callmethodChecked(opresult2203, "++", [1], string2182);
              var call2206 = callmethodChecked(var_io, "exists", [1], opresult2205);
              if (Grace_isTrue(call2206)) {
                var if2207 = GraceDone;
                setLineNumber(386);    // compilenode call
                onSelf = true;
                var call2208 = callmethodChecked(this, "isOnClassPage", [0]);
                if (Grace_isTrue(call2208)) {
                  setLineNumber(387);    // compilenode string
                  var string2209 = new GraceString("");
                  var string2212 = new GraceString("");
                  var opresult2214 = callmethodChecked(string2212, "++", [1], var_filename);
                  var opresult2216 = callmethodChecked(opresult2214, "++", [1], string2209);
                  var opresult2219 = callmethodChecked(var_out, "++", [1], opresult2216);
                  var_out = opresult2219;
                  if2207 = GraceDone;
                } else {
                  var if2220 = GraceDone;
                  setLineNumber(388);    // compilenode call
                  onSelf = true;
                  var call2221 = callmethodChecked(this, "isOnTypePage", [0]);
                  if (Grace_isTrue(call2221)) {
                    setLineNumber(389);    // compilenode string
                    var string2222 = new GraceString("");
                    var string2225 = new GraceString("../classes/");
                    var opresult2227 = callmethodChecked(string2225, "++", [1], var_filename);
                    var opresult2229 = callmethodChecked(opresult2227, "++", [1], string2222);
                    var opresult2232 = callmethodChecked(var_out, "++", [1], opresult2229);
                    var_out = opresult2232;
                    if2220 = GraceDone;
                  } else {
                    setLineNumber(391);    // compilenode string
                    var string2233 = new GraceString("");
                    var string2236 = new GraceString("classes/");
                    var opresult2238 = callmethodChecked(string2236, "++", [1], var_filename);
                    var opresult2240 = callmethodChecked(opresult2238, "++", [1], string2233);
                    var opresult2243 = callmethodChecked(var_out, "++", [1], opresult2240);
                    var_out = opresult2243;
                    if2220 = GraceDone;
                  }
                  if2207 = if2220;
                }
                if2181 = if2207;
              } else {
                var if2244 = GraceDone;
                setLineNumber(394);    // compilenode string
                var string2245 = new GraceString("");
                var string2248 = new GraceString("/imported/classes/");
                var call2250 = callmethodChecked(var_settings, "outputdir", [0]);
                var string2252 = new GraceString("");
                var opresult2254 = callmethodChecked(string2252, "++", [1], call2250);
                var opresult2256 = callmethodChecked(opresult2254, "++", [1], string2248);
                var opresult2258 = callmethodChecked(opresult2256, "++", [1], var_filename);
                var opresult2260 = callmethodChecked(opresult2258, "++", [1], string2245);
                var call2261 = callmethodChecked(var_io, "exists", [1], opresult2260);
                if (Grace_isTrue(call2261)) {
                  var if2262 = GraceDone;
                  setLineNumber(395);    // compilenode call
                  onSelf = true;
                  var call2263 = callmethodChecked(this, "isOnClassPage", [0]);
                  onSelf = true;
                  var call2265 = callmethodChecked(this, "isOnTypePage", [0]);
                  var opresult2267 = callmethodChecked(call2265, "||", [1], call2263);
                  if (Grace_isTrue(opresult2267)) {
                    setLineNumber(396);    // compilenode string
                    var string2268 = new GraceString("");
                    var string2271 = new GraceString("../../imported/classes/");
                    var opresult2273 = callmethodChecked(string2271, "++", [1], var_filename);
                    var opresult2275 = callmethodChecked(opresult2273, "++", [1], string2268);
                    var opresult2278 = callmethodChecked(var_out, "++", [1], opresult2275);
                    var_out = opresult2278;
                    if2262 = GraceDone;
                  } else {
                    setLineNumber(398);    // compilenode string
                    var string2279 = new GraceString("");
                    var string2282 = new GraceString("../imported/classes/");
                    var opresult2284 = callmethodChecked(string2282, "++", [1], var_filename);
                    var opresult2286 = callmethodChecked(opresult2284, "++", [1], string2279);
                    var opresult2289 = callmethodChecked(var_out, "++", [1], opresult2286);
                    var_out = opresult2289;
                    if2262 = GraceDone;
                  }
                  if2244 = if2262;
                } else {
                  var if2290 = GraceDone;
                  setLineNumber(401);    // compilenode string
                  var string2291 = new GraceString("");
                  var string2294 = new GraceString("/gracelib/classes/");
                  var call2296 = callmethodChecked(var_settings, "outputdir", [0]);
                  var string2298 = new GraceString("");
                  var opresult2300 = callmethodChecked(string2298, "++", [1], call2296);
                  var opresult2302 = callmethodChecked(opresult2300, "++", [1], string2294);
                  var opresult2304 = callmethodChecked(opresult2302, "++", [1], var_filename);
                  var opresult2306 = callmethodChecked(opresult2304, "++", [1], string2291);
                  var call2307 = callmethodChecked(var_io, "exists", [1], opresult2306);
                  if (Grace_isTrue(call2307)) {
                    var if2308 = GraceDone;
                    setLineNumber(402);    // compilenode call
                    onSelf = true;
                    var call2309 = callmethodChecked(this, "isOnClassPage", [0]);
                    onSelf = true;
                    var call2311 = callmethodChecked(this, "isOnTypePage", [0]);
                    var opresult2313 = callmethodChecked(call2311, "||", [1], call2309);
                    if (Grace_isTrue(opresult2313)) {
                      setLineNumber(403);    // compilenode string
                      var string2314 = new GraceString("");
                      var string2317 = new GraceString("../../gracelib/classes/");
                      var opresult2319 = callmethodChecked(string2317, "++", [1], var_filename);
                      var opresult2321 = callmethodChecked(opresult2319, "++", [1], string2314);
                      var opresult2324 = callmethodChecked(var_out, "++", [1], opresult2321);
                      var_out = opresult2324;
                      if2308 = GraceDone;
                    } else {
                      setLineNumber(405);    // compilenode string
                      var string2325 = new GraceString("");
                      var string2328 = new GraceString("../gracelib/classes/");
                      var opresult2330 = callmethodChecked(string2328, "++", [1], var_filename);
                      var opresult2332 = callmethodChecked(opresult2330, "++", [1], string2325);
                      var opresult2335 = callmethodChecked(var_out, "++", [1], opresult2332);
                      var_out = opresult2335;
                      if2308 = GraceDone;
                    }
                    if2290 = if2308;
                  } else {
                    setLineNumber(408);    // compilenode string
                    var string2336 = new GraceString("");
                    var var_dots = string2336;
                    var if2337 = GraceDone;
                    setLineNumber(409);    // compilenode call
                    onSelf = true;
                    var call2338 = callmethodChecked(this, "isOnTypePage", [0]);
                    onSelf = true;
                    var call2340 = callmethodChecked(this, "isOnClassPage", [0]);
                    var opresult2342 = callmethodChecked(call2340, "||", [1], call2338);
                    if (Grace_isTrue(opresult2342)) {
                      setLineNumber(410);    // compilenode string
                      var string2343 = new GraceString("../../");
                      var_dots = string2343;
                      if2337 = GraceDone;
                    } else {
                      setLineNumber(412);    // compilenode string
                      var string2344 = new GraceString("../");
                      var_dots = string2344;
                      if2337 = GraceDone;
                    }
                    setLineNumber(414);    // compilenode string
                    var string2345 = new GraceString("404.html");
                    var string2348 = new GraceString("");
                    var opresult2350 = callmethodChecked(string2348, "++", [1], var_dots);
                    var opresult2352 = callmethodChecked(opresult2350, "++", [1], string2345);
                    var opresult2355 = callmethodChecked(var_out, "++", [1], opresult2352);
                    var_out = opresult2355;
                    if2290 = GraceDone;
                  }
                  if2244 = if2290;
                }
                if2181 = if2244;
              }
              setLineNumber(416);    // compilenode string
              var string2356 = new GraceString("</a>");
              var string2359 = new GraceString("'>");
              var opresult2361 = callmethodChecked(string2359, "++", [1], var_c);
              var opresult2363 = callmethodChecked(opresult2361, "++", [1], string2356);
              var opresult2366 = callmethodChecked(var_out, "++", [1], opresult2363);
              var_out = opresult2366;
              setLineNumber(417);    // compilenode identifier
              return var_out;
            };
            func2171.paramTypes = [];
            func2171.paramTypes.push([type_String, "c"]);
            func2171.confidential = true;
            func2171.paramCounts = [1];
            obj1973.methods["getClassLink"] = func2171;
            func2171.definitionLine = 381;
            func2171.definitionModule = "gracedoc";
            var func2367 = function(argcv) {    // method buildTemplate
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for buildTemplate"));
              setModuleName("gracedoc");
              setLineNumber(421);    // compilenode num
              var var_cursor = new GraceNum(0);
              setLineNumber(422);    // compilenode string
              var string2368 = new GraceString(" -- https://github.com/reid47/gracedoc -->\n");
              var call2370 = callmethodChecked(var_settings, "version", [0]);
              var string2372 = new GraceString("<!-- generated by Gracedoc, v");
              var opresult2374 = callmethodChecked(string2372, "++", [1], call2370);
              var opresult2376 = callmethodChecked(opresult2374, "++", [1], string2368);
              var var_out = opresult2376;
              setLineNumber(423);    // compilenode string
              var string2377 = new GraceString("<!DOCTYPE html>\n<html>");
              var opresult2380 = callmethodChecked(var_out, "++", [1], string2377);
              var_out = opresult2380;
              setLineNumber(424);    // compilenode string
              var string2381 = new GraceString("<head>");
              var opresult2384 = callmethodChecked(var_out, "++", [1], string2381);
              var_out = opresult2384;
              setLineNumber(425);    // compilenode string
              var string2385 = new GraceString(" | GraceDocs</title>");
              onSelf = true;
              var call2387 = callmethodChecked(this, "title", [0]);
              var string2389 = new GraceString("<title>");
              var opresult2391 = callmethodChecked(string2389, "++", [1], call2387);
              var opresult2393 = callmethodChecked(opresult2391, "++", [1], string2385);
              var opresult2396 = callmethodChecked(var_out, "++", [1], opresult2393);
              var_out = opresult2396;
              setLineNumber(426);    // compilenode string
              var string2397 = new GraceString("<meta charset=\"UTF-8\" />");
              var opresult2400 = callmethodChecked(var_out, "++", [1], string2397);
              var_out = opresult2400;
              setLineNumber(427);    // compilenode vardec
              var var_cssDir;
              var if2401 = GraceDone;
              setLineNumber(428);    // compilenode call
              onSelf = true;
              var call2402 = callmethodChecked(this, "isOnTypePage", [0]);
              onSelf = true;
              var call2404 = callmethodChecked(this, "isOnClassPage", [0]);
              var opresult2406 = callmethodChecked(call2404, "||", [1], call2402);
              if (Grace_isTrue(opresult2406)) {
                var string2407 = new GraceString("../../gracedoc.css");
                var_cssDir = string2407;
                if2401 = GraceDone;
              } else {
                setLineNumber(429);    // compilenode string
                var string2408 = new GraceString("../gracedoc.css");
                var_cssDir = string2408;
                if2401 = GraceDone;
              }
              setLineNumber(430);    // compilenode string
              var string2409 = new GraceString("\" />");
              var string2412 = new GraceString("<link rel=\"stylesheet\" href=\"");
              var opresult2414 = callmethodChecked(string2412, "++", [1], var_cssDir);
              var opresult2416 = callmethodChecked(opresult2414, "++", [1], string2409);
              var opresult2419 = callmethodChecked(var_out, "++", [1], opresult2416);
              var_out = opresult2419;
              setLineNumber(431);    // compilenode string
              var string2420 = new GraceString("</head>");
              var opresult2423 = callmethodChecked(var_out, "++", [1], string2420);
              var_out = opresult2423;
              setLineNumber(432);    // compilenode string
              var string2424 = new GraceString("<body>");
              var opresult2427 = callmethodChecked(var_out, "++", [1], string2424);
              var_out = opresult2427;
              setLineNumber(433);    // compilenode string
              var string2428 = new GraceString("");
              onSelf = true;
              var call2430 = callmethodChecked(this, "title", [0]);
              var string2432 = new GraceString("<div class='header'><span class='header-left'>");
              var opresult2434 = callmethodChecked(string2432, "++", [1], call2430);
              var opresult2436 = callmethodChecked(opresult2434, "++", [1], string2428);
              var opresult2439 = callmethodChecked(var_out, "++", [1], opresult2436);
              var_out = opresult2439;
              setLineNumber(434);    // compilenode identifier
              var call2440 = callmethodChecked(var_out, "size", [0]);
              var_cursor = call2440;
              setLineNumber(435);    // compilenode string
              var string2441 = new GraceString("</span><span class='header-right'>GraceDocs</span></div>");
              var opresult2444 = callmethodChecked(var_out, "++", [1], string2441);
              var_out = opresult2444;
              setLineNumber(436);    // compilenode string
              var string2445 = new GraceString("<div class='container'>");
              var opresult2448 = callmethodChecked(var_out, "++", [1], string2445);
              var_out = opresult2448;
              setLineNumber(437);    // compilenode identifier
              var call2449 = callmethodChecked(var_section, "withTemplate()andCursorAt", [1, 1], var_out, var_cursor);
              onSelf = true;
              var call2450 = callmethodChecked(this, "headerSection:=", [1], call2449);
              setLineNumber(439);    // compilenode num
              var_cursor = new GraceNum(0);
              setLineNumber(440);    // compilenode string
              var string2451 = new GraceString("<section id='top-description'>");
              var_out = string2451;
              setLineNumber(441);    // compilenode string
              var string2452 = new GraceString("<div class='top-box'>");
              var opresult2455 = callmethodChecked(var_out, "++", [1], string2452);
              var_out = opresult2455;
              setLineNumber(442);    // compilenode identifier
              var call2456 = callmethodChecked(var_out, "size", [0]);
              var_cursor = call2456;
              setLineNumber(443);    // compilenode string
              var string2457 = new GraceString("</div>");
              var opresult2460 = callmethodChecked(var_out, "++", [1], string2457);
              var_out = opresult2460;
              setLineNumber(444);    // compilenode string
              var string2461 = new GraceString("</section>");
              var opresult2464 = callmethodChecked(var_out, "++", [1], string2461);
              var_out = opresult2464;
              setLineNumber(445);    // compilenode identifier
              var call2465 = callmethodChecked(var_section, "withTemplate()andCursorAt", [1, 1], var_out, var_cursor);
              onSelf = true;
              var call2466 = callmethodChecked(this, "topDescSection:=", [1], call2465);
              setLineNumber(447);    // compilenode num
              var_cursor = new GraceNum(0);
              setLineNumber(448);    // compilenode string
              var string2467 = new GraceString("<section id='fields'>");
              var_out = string2467;
              setLineNumber(449);    // compilenode string
              var string2468 = new GraceString("<h4>Fields</h4>");
              var opresult2471 = callmethodChecked(var_out, "++", [1], string2468);
              var_out = opresult2471;
              setLineNumber(450);    // compilenode string
              var string2472 = new GraceString("<table>");
              var opresult2475 = callmethodChecked(var_out, "++", [1], string2472);
              var_out = opresult2475;
              setLineNumber(451);    // compilenode string
              var string2476 = new GraceString("<tr><th></th><th>Field name</th><th>Type (if given)</th></tr>");
              var opresult2479 = callmethodChecked(var_out, "++", [1], string2476);
              var_out = opresult2479;
              setLineNumber(452);    // compilenode identifier
              var call2480 = callmethodChecked(var_out, "size", [0]);
              var_cursor = call2480;
              setLineNumber(453);    // compilenode string
              var string2481 = new GraceString("</table>");
              var opresult2484 = callmethodChecked(var_out, "++", [1], string2481);
              var_out = opresult2484;
              setLineNumber(454);    // compilenode string
              var string2485 = new GraceString("</section>");
              var opresult2488 = callmethodChecked(var_out, "++", [1], string2485);
              var_out = opresult2488;
              setLineNumber(455);    // compilenode identifier
              var call2489 = callmethodChecked(var_section, "withTemplate()andCursorAt", [1, 1], var_out, var_cursor);
              onSelf = true;
              var call2490 = callmethodChecked(this, "fieldsSection:=", [1], call2489);
              setLineNumber(457);    // compilenode num
              var_cursor = new GraceNum(0);
              setLineNumber(458);    // compilenode string
              var string2491 = new GraceString("<section id='methodtypes'>");
              var_out = string2491;
              setLineNumber(459);    // compilenode string
              var string2492 = new GraceString("<h4>Added methods</h4>");
              var opresult2495 = callmethodChecked(var_out, "++", [1], string2492);
              var_out = opresult2495;
              setLineNumber(460);    // compilenode string
              var string2496 = new GraceString("<table>");
              var opresult2499 = callmethodChecked(var_out, "++", [1], string2496);
              var_out = opresult2499;
              setLineNumber(461);    // compilenode string
              var string2500 = new GraceString("<tr><th>Method signature</th><th>Return type</th></tr>");
              var opresult2503 = callmethodChecked(var_out, "++", [1], string2500);
              var_out = opresult2503;
              setLineNumber(462);    // compilenode identifier
              var call2504 = callmethodChecked(var_out, "size", [0]);
              var_cursor = call2504;
              setLineNumber(463);    // compilenode string
              var string2505 = new GraceString("</table>");
              var opresult2508 = callmethodChecked(var_out, "++", [1], string2505);
              var_out = opresult2508;
              setLineNumber(464);    // compilenode string
              var string2509 = new GraceString("</section>");
              var opresult2512 = callmethodChecked(var_out, "++", [1], string2509);
              var_out = opresult2512;
              setLineNumber(465);    // compilenode identifier
              var call2513 = callmethodChecked(var_section, "withTemplate()andCursorAt", [1, 1], var_out, var_cursor);
              onSelf = true;
              var call2514 = callmethodChecked(this, "methodtypesSection:=", [1], call2513);
              setLineNumber(467);    // compilenode num
              var_cursor = new GraceNum(0);
              setLineNumber(468);    // compilenode string
              var string2515 = new GraceString("<section id='types'>");
              var_out = string2515;
              setLineNumber(469);    // compilenode string
              var string2516 = new GraceString("<h4>Types</h4>");
              var opresult2519 = callmethodChecked(var_out, "++", [1], string2516);
              var_out = opresult2519;
              setLineNumber(470);    // compilenode string
              var string2520 = new GraceString("<table>");
              var opresult2523 = callmethodChecked(var_out, "++", [1], string2520);
              var_out = opresult2523;
              setLineNumber(471);    // compilenode string
              var string2524 = new GraceString("<tr><th>Type name</th></tr>");
              var opresult2527 = callmethodChecked(var_out, "++", [1], string2524);
              var_out = opresult2527;
              setLineNumber(472);    // compilenode identifier
              var call2528 = callmethodChecked(var_out, "size", [0]);
              var_cursor = call2528;
              setLineNumber(473);    // compilenode string
              var string2529 = new GraceString("</table>");
              var opresult2532 = callmethodChecked(var_out, "++", [1], string2529);
              var_out = opresult2532;
              setLineNumber(474);    // compilenode string
              var string2533 = new GraceString("</section>");
              var opresult2536 = callmethodChecked(var_out, "++", [1], string2533);
              var_out = opresult2536;
              setLineNumber(475);    // compilenode identifier
              var call2537 = callmethodChecked(var_section, "withTemplate()andCursorAt", [1, 1], var_out, var_cursor);
              onSelf = true;
              var call2538 = callmethodChecked(this, "typesSection:=", [1], call2537);
              setLineNumber(477);    // compilenode num
              var_cursor = new GraceNum(0);
              setLineNumber(478);    // compilenode string
              var string2539 = new GraceString("<section id='classes'>");
              var_out = string2539;
              setLineNumber(479);    // compilenode string
              var string2540 = new GraceString("<h4>Classes</h4>");
              var opresult2543 = callmethodChecked(var_out, "++", [1], string2540);
              var_out = opresult2543;
              setLineNumber(480);    // compilenode string
              var string2544 = new GraceString("<table>");
              var opresult2547 = callmethodChecked(var_out, "++", [1], string2544);
              var_out = opresult2547;
              setLineNumber(481);    // compilenode string
              var string2548 = new GraceString("<tr><th>Class name & constructor</th></tr>");
              var opresult2551 = callmethodChecked(var_out, "++", [1], string2548);
              var_out = opresult2551;
              setLineNumber(482);    // compilenode identifier
              var call2552 = callmethodChecked(var_out, "size", [0]);
              var_cursor = call2552;
              setLineNumber(483);    // compilenode string
              var string2553 = new GraceString("</table>");
              var opresult2556 = callmethodChecked(var_out, "++", [1], string2553);
              var_out = opresult2556;
              setLineNumber(484);    // compilenode string
              var string2557 = new GraceString("</section>");
              var opresult2560 = callmethodChecked(var_out, "++", [1], string2557);
              var_out = opresult2560;
              setLineNumber(485);    // compilenode identifier
              var call2561 = callmethodChecked(var_section, "withTemplate()andCursorAt", [1, 1], var_out, var_cursor);
              onSelf = true;
              var call2562 = callmethodChecked(this, "classesSection:=", [1], call2561);
              setLineNumber(487);    // compilenode num
              var_cursor = new GraceNum(0);
              setLineNumber(488);    // compilenode string
              var string2563 = new GraceString("<section id='methods'>");
              var_out = string2563;
              setLineNumber(489);    // compilenode string
              var string2564 = new GraceString("<h4>Methods</h4>");
              var opresult2567 = callmethodChecked(var_out, "++", [1], string2564);
              var_out = opresult2567;
              setLineNumber(490);    // compilenode string
              var string2568 = new GraceString("<table>");
              var opresult2571 = callmethodChecked(var_out, "++", [1], string2568);
              var_out = opresult2571;
              setLineNumber(491);    // compilenode string
              var string2572 = new GraceString("<tr><th>Method signature</th><th>Return type</th></tr>");
              var opresult2575 = callmethodChecked(var_out, "++", [1], string2572);
              var_out = opresult2575;
              setLineNumber(492);    // compilenode identifier
              var call2576 = callmethodChecked(var_out, "size", [0]);
              var_cursor = call2576;
              setLineNumber(493);    // compilenode string
              var string2577 = new GraceString("</table>");
              var opresult2580 = callmethodChecked(var_out, "++", [1], string2577);
              var_out = opresult2580;
              setLineNumber(494);    // compilenode string
              var string2581 = new GraceString("</section>");
              var opresult2584 = callmethodChecked(var_out, "++", [1], string2581);
              var_out = opresult2584;
              setLineNumber(495);    // compilenode identifier
              var call2585 = callmethodChecked(var_section, "withTemplate()andCursorAt", [1, 1], var_out, var_cursor);
              onSelf = true;
              var call2586 = callmethodChecked(this, "methodsSection:=", [1], call2585);
              setLineNumber(497);    // compilenode num
              var_cursor = new GraceNum(0);
              setLineNumber(498);    // compilenode string
              var string2587 = new GraceString("</div></body>");
              var_out = string2587;
              setLineNumber(499);    // compilenode string
              var string2588 = new GraceString("</html>");
              var opresult2591 = callmethodChecked(var_out, "++", [1], string2588);
              var_out = opresult2591;
              setLineNumber(500);    // compilenode identifier
              var call2592 = callmethodChecked(var_section, "withTemplate()andCursorAt", [1, 1], var_out, var_cursor);
              onSelf = true;
              var call2593 = callmethodChecked(this, "footerSection:=", [1], call2592);
              return call2593;
            };
            func2367.confidential = true;
            func2367.paramCounts = [0];
            obj1973.methods["buildTemplate"] = func2367;
            func2367.definitionLine = 420;
            func2367.definitionModule = "gracedoc";
            var func2594 = function(argcv) {    // method build404
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for build404"));
              setModuleName("gracedoc");
              setLineNumber(504);    // compilenode string
              var string2595 = new GraceString(" -- https://github.com/reid47/gracedoc -->\n");
              var call2597 = callmethodChecked(var_settings, "version", [0]);
              var string2599 = new GraceString("<!-- generated by Gracedoc, v");
              var opresult2601 = callmethodChecked(string2599, "++", [1], call2597);
              var opresult2603 = callmethodChecked(opresult2601, "++", [1], string2595);
              var var_out = opresult2603;
              setLineNumber(505);    // compilenode string
              var string2604 = new GraceString("<!DOCTYPE html>\n<html>");
              var opresult2607 = callmethodChecked(var_out, "++", [1], string2604);
              var_out = opresult2607;
              setLineNumber(506);    // compilenode string
              var string2608 = new GraceString("<head><title>404 - Page not found | GraceDocs</title></head>");
              var opresult2611 = callmethodChecked(var_out, "++", [1], string2608);
              var_out = opresult2611;
              setLineNumber(507);    // compilenode string
              var string2612 = new GraceString("<body><div id='message-404'>404 - Page not found</div></body>");
              var opresult2615 = callmethodChecked(var_out, "++", [1], string2612);
              var_out = opresult2615;
              setLineNumber(508);    // compilenode string
              var string2616 = new GraceString("</html>");
              var opresult2619 = callmethodChecked(var_out, "++", [1], string2616);
              var_out = opresult2619;
              setLineNumber(509);    // compilenode string
              var string2620 = new GraceString("/404.html");
              var call2622 = callmethodChecked(var_settings, "outputdir", [0]);
              var string2624 = new GraceString("");
              var opresult2626 = callmethodChecked(string2624, "++", [1], call2622);
              var opresult2628 = callmethodChecked(opresult2626, "++", [1], string2620);
              var string2629 = new GraceString("w");
              var call2630 = callmethodChecked(var_io, "open", [2], opresult2628, string2629);
              var var_file404 = call2630;
              setLineNumber(510);    // compilenode call
              var call2631 = callmethodChecked(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call2632 = callmethodChecked(call2631, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call2633 = callmethodChecked(call2632, "autoindent", [1], var_out);
              var call2634 = callmethodChecked(var_file404, "write", [1], call2633);
              setLineNumber(511);    // compilenode identifier
              var call2635 = callmethodChecked(var_file404, "close", [0]);
              return call2635;
            };
            func2594.paramCounts = [0];
            obj1973.methods["build404"] = func2594;
            func2594.definitionLine = 503;
            func2594.definitionModule = "gracedoc";
            var func2636 = function(argcv) {    // method buildindex
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for buildindex"));
              setModuleName("gracedoc");
              setLineNumber(515);    // compilenode string
              var string2637 = new GraceString(" -- https://github.com/reid47/gracedoc -->\n");
              var call2639 = callmethodChecked(var_settings, "version", [0]);
              var string2641 = new GraceString("<!-- generated by Gracedoc, v");
              var opresult2643 = callmethodChecked(string2641, "++", [1], call2639);
              var opresult2645 = callmethodChecked(opresult2643, "++", [1], string2637);
              var var_out = opresult2645;
              setLineNumber(516);    // compilenode string
              var string2646 = new GraceString("<!DOCTYPE html>\n<html lang=\"en\">");
              var opresult2649 = callmethodChecked(var_out, "++", [1], string2646);
              var_out = opresult2649;
              setLineNumber(517);    // compilenode string
              var string2650 = new GraceString("<head>");
              var opresult2653 = callmethodChecked(var_out, "++", [1], string2650);
              var_out = opresult2653;
              setLineNumber(518);    // compilenode string
              var string2654 = new GraceString("<title>GraceDocs</title>");
              var opresult2657 = callmethodChecked(var_out, "++", [1], string2654);
              var_out = opresult2657;
              setLineNumber(519);    // compilenode string
              var string2658 = new GraceString("<link rel=\"stylesheet\" href=\"graceDoc.css\">");
              var opresult2661 = callmethodChecked(var_out, "++", [1], string2658);
              var_out = opresult2661;
              setLineNumber(520);    // compilenode string
              var string2662 = new GraceString("</head>");
              var opresult2665 = callmethodChecked(var_out, "++", [1], string2662);
              var_out = opresult2665;
              setLineNumber(521);    // compilenode string
              var string2666 = new GraceString("<body>");
              var opresult2669 = callmethodChecked(var_out, "++", [1], string2666);
              var_out = opresult2669;
              setLineNumber(522);    // compilenode string
              var string2670 = new GraceString("<iframe id=\"frame-sidebar\" src=\"modules.html\" name=\"moduleFrame\"></iframe>");
              var opresult2673 = callmethodChecked(var_out, "++", [1], string2670);
              var_out = opresult2673;
              setLineNumber(523);    // compilenode string
              var string2674 = new GraceString("<iframe id=\"frame-main\" src=\"\" name=\"mainFrame\"></iframe>");
              var opresult2677 = callmethodChecked(var_out, "++", [1], string2674);
              var_out = opresult2677;
              setLineNumber(524);    // compilenode string
              var string2678 = new GraceString("</body>");
              var opresult2681 = callmethodChecked(var_out, "++", [1], string2678);
              var_out = opresult2681;
              setLineNumber(525);    // compilenode string
              var string2682 = new GraceString("</html>");
              var opresult2685 = callmethodChecked(var_out, "++", [1], string2682);
              var_out = opresult2685;
              setLineNumber(526);    // compilenode string
              var string2686 = new GraceString("/index.html");
              var call2688 = callmethodChecked(var_settings, "outputdir", [0]);
              var string2690 = new GraceString("");
              var opresult2692 = callmethodChecked(string2690, "++", [1], call2688);
              var opresult2694 = callmethodChecked(opresult2692, "++", [1], string2686);
              var string2695 = new GraceString("w");
              var call2696 = callmethodChecked(var_io, "open", [2], opresult2694, string2695);
              var var_fileindex = call2696;
              setLineNumber(527);    // compilenode call
              var call2697 = callmethodChecked(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call2698 = callmethodChecked(call2697, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call2699 = callmethodChecked(call2698, "autoindent", [1], var_out);
              var call2700 = callmethodChecked(var_fileindex, "write", [1], call2699);
              setLineNumber(528);    // compilenode identifier
              var call2701 = callmethodChecked(var_fileindex, "close", [0]);
              return call2701;
            };
            func2636.paramCounts = [0];
            obj1973.methods["buildindex"] = func2636;
            func2636.definitionLine = 514;
            func2636.definitionModule = "gracedoc";
            var func2702 = function(argcv) {    // method buildjs
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for buildjs"));
              setModuleName("gracedoc");
              setLineNumber(532);    // compilenode string
              var string2703 = new GraceString("function toggleContents(eltid) {\n    var elt = document.getElementById('contents-'+eltid)\n    var arrow = document.getElementById('arrow-button-'+eltid)\n    if (elt.style.display == 'none') {\n        elt.style.display = 'block';\n        arrow.innerHTML = '&#9660';\n    } else {\n        elt.style.display = 'none';\n        arrow.innerHTML = '&#9654';\n    }\n}");
              var var_out = string2703;
              setLineNumber(543);    // compilenode string
              var string2704 = new GraceString("/gracedoc.js");
              var call2706 = callmethodChecked(var_settings, "outputdir", [0]);
              var string2708 = new GraceString("");
              var opresult2710 = callmethodChecked(string2708, "++", [1], call2706);
              var opresult2712 = callmethodChecked(opresult2710, "++", [1], string2704);
              var string2713 = new GraceString("w");
              var call2714 = callmethodChecked(var_io, "open", [2], opresult2712, string2713);
              var var_filejs = call2714;
              setLineNumber(544);    // compilenode identifier
              var call2715 = callmethodChecked(var_filejs, "write", [1], var_out);
              setLineNumber(545);    // compilenode identifier
              var call2716 = callmethodChecked(var_filejs, "close", [0]);
              return call2716;
            };
            func2702.paramCounts = [0];
            obj1973.methods["buildjs"] = func2702;
            func2702.definitionLine = 531;
            func2702.definitionModule = "gracedoc";
            var func2717 = function(argcv) {    // method buildcss
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for buildcss"));
              setModuleName("gracedoc");
              setLineNumber(549);    // compilenode string
              var string2718 = new GraceString("@import url(http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,700);\n\n* {\n    margin: 0px;\n    padding: 0px;\n}\n\nbody {\n    font-size: 16px;\n    font-family: 'Open Sans', Helvetica, Arial, sans-serif;\n}\n\na, a:visited {\n    color: #00d;\n}\n\n.header {\n    height: 50px;\n    line-height: 50px;\n    padding: 0px 20px;\n    font-weight: bold;\n    background-color: rgb(0,80,105);\n    border-bottom: 2px solid #333;\n    font-size: 20px;\n    color: #fff;\n}\n\n.header-left {\n    float: left;\n}\n\n.header-right {\n    float: right;\n}\n\n.description {\n    font-style: italic;\n    font-size: 14px;\n}\n\n.container {\n    padding: 20px;\n}\n\nsection {\n    border: 1px solid #079;\n    border-radius: 0px;\n}\n\nsection > h4 {\n    margin: 0px;\n    background-color: rgb(80,160,185);\n    padding: 5px 10px;\n}\n\nsection + section {\n    margin-top: 20px;\n}\n\ntable {\n    margin: 0px;\n    width: 100%;\n    border-collapse: collapse;\n    table-layout: fixed;\n}\n\nth {\n    text-align: left;\n    background: rgb(130,200,215);\n    color: rgb(0,80,105);\n    font-size: 10px;\n    padding: 5px 10px;\n    border-bottom: 1px solid #079;\n}\n\ntd {\n    padding: 10px;\n    word-wrap: break-word;\n}\n\n.row-odd { background-color: #eeeeee; }\n.row-odd + tr.description {\n    background-color: #eeeeee;\n}\n\n.row-even { background-color: #ffffff; }\n.row-even + tr.description {\n    background-color: #ffffff;\n}\n\ntr.description > td {\n    padding-top: 0px;\n}\n.code, code {\n    font-family: Monaco, monospace;\n}\n.description {\n    font-size: 14px;\n    width: 50%;\n}\n.parameter-type {\n    font-family: Monaco, monospace;\n}\n.type-name {\n    font-family: Monaco, monospace;\n    font-weight: bold;\n}\n.method-name {\n    font-weight: bold;\n}\n.class-name {\n    font-weight: bold;\n}\n.identifier-name {\n    font-family: Monaco, monospace;\n    font-weight: bold;\n}\n\n/* MODULES LIST */\n\n.list-container h5 {\n    font-size: 16px;\n    background-color: rgb(0,80,105);\n    color: #ffffff;\n    padding: 5px 10px;\n}\n\n.list-container h6 {\n    font-size: 12px;\n    margin: 0px;\n    color: #000;\n    padding: 0px 5px;\n}\n\n.list-container ul {\n    padding: 5px 10px 10px 10px;\n}\n.list-container li {\n    list-style-type: none;\n}\n\niframe {\n    border: none;\n}\n\n#frame-sidebar {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 20%;\n    height: 100%;\n}\n\n#frame-main {\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 80%;\n    height: 100%;\n    border-left: 4px solid #bbb\n}\n\n.contents-list {\n    background: #e0e8f0;\n    padding: 10px 5px 5px 5px;\n    margin-left: 20px;\n    margin-right: 20px;\n    font-size: 14px;\n}\n\n.arrow-button-toggle {\n    font-family: monospace;\n    font-size: 14px;\n    color: rgb(0,0,105);\n    cursor: pointer;\n    width: 20px;\n    display: inline-block;\n}\n\n.top-box {\n    word-wrap: break-word;\n    margin: 20px;\n}\n\n.top-box hr {\n    margin: 10px 0;\n    border: 1px solid #079;\n}\n\n.headline {\n    font-size: 18px;\n}\n\n.quiet {\n    color: #888;\n    font-size: 14px;\n}");
              var var_out = string2718;
              setLineNumber(746);    // compilenode string
              var string2719 = new GraceString("/gracedoc.css");
              var call2721 = callmethodChecked(var_settings, "outputdir", [0]);
              var string2723 = new GraceString("");
              var opresult2725 = callmethodChecked(string2723, "++", [1], call2721);
              var opresult2727 = callmethodChecked(opresult2725, "++", [1], string2719);
              var string2728 = new GraceString("w");
              var call2729 = callmethodChecked(var_io, "open", [2], opresult2727, string2728);
              var var_filecss = call2729;
              setLineNumber(747);    // compilenode identifier
              var call2730 = callmethodChecked(var_filecss, "write", [1], var_out);
              setLineNumber(748);    // compilenode identifier
              var call2731 = callmethodChecked(var_filecss, "close", [0]);
              return call2731;
            };
            func2717.paramCounts = [0];
            obj1973.methods["buildcss"] = func2717;
            func2717.definitionLine = 548;
            func2717.definitionModule = "gracedoc";
            var func2732 = function(argcv) {    // method generate
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for generate"));
              setModuleName("gracedoc");
              var if2733 = GraceDone;
              setLineNumber(752);    // compilenode identifier
              var call2735 = callmethodChecked(var_settings, "verbosity", [0]);
              var opresult2737 = callmethodChecked(call2735, ">", [1], new GraceNum(1));
              if (Grace_isTrue(opresult2737)) {
                var string2738 = new GraceString(")");
                var call2740 = callmethodChecked(var_sys, "elapsedTime", [0]);
                var string2742 = new GraceString(" - starting to assemble HTML (");
                onSelf = true;
                var call2744 = callmethodChecked(this, "title", [0]);
                var string2746 = new GraceString("On ");
                var opresult2748 = callmethodChecked(string2746, "++", [1], call2744);
                var opresult2750 = callmethodChecked(opresult2748, "++", [1], string2742);
                var opresult2752 = callmethodChecked(opresult2750, "++", [1], call2740);
                var opresult2754 = callmethodChecked(opresult2752, "++", [1], string2738);
                var call2755 = Grace_print(opresult2754);
                if2733 = call2755;
              }
              setLineNumber(754);    // compilenode vardec
              var var_outfile;
              setLineNumber(755);    // compilenode string
              var string2756 = new GraceString("");
              var var_output = string2756;
              var if2757 = GraceDone;
              setLineNumber(756);    // compilenode call
              onSelf = true;
              var call2758 = callmethodChecked(this, "isOnClassPage", [0]);
              if (Grace_isTrue(call2758)) {
                setLineNumber(757);    // compilenode string
                var string2759 = new GraceString(".html");
                onSelf = true;
                var call2761 = callmethodChecked(this, "pageName", [0]);
                var string2763 = new GraceString("/classes/");
                onSelf = true;
                var call2765 = callmethodChecked(this, "outdir", [0]);
                var string2767 = new GraceString("/");
                var call2769 = callmethodChecked(var_settings, "outputdir", [0]);
                var string2771 = new GraceString("");
                var opresult2773 = callmethodChecked(string2771, "++", [1], call2769);
                var opresult2775 = callmethodChecked(opresult2773, "++", [1], string2767);
                var opresult2777 = callmethodChecked(opresult2775, "++", [1], call2765);
                var opresult2779 = callmethodChecked(opresult2777, "++", [1], string2763);
                var opresult2781 = callmethodChecked(opresult2779, "++", [1], call2761);
                var opresult2783 = callmethodChecked(opresult2781, "++", [1], string2759);
                var string2784 = new GraceString("w");
                var call2785 = callmethodChecked(var_io, "open", [2], opresult2783, string2784);
                var_outfile = call2785;
                if2757 = GraceDone;
              } else {
                var if2786 = GraceDone;
                setLineNumber(758);    // compilenode call
                onSelf = true;
                var call2787 = callmethodChecked(this, "isOnTypePage", [0]);
                if (Grace_isTrue(call2787)) {
                  setLineNumber(759);    // compilenode string
                  var string2788 = new GraceString(".html");
                  onSelf = true;
                  var call2790 = callmethodChecked(this, "pageName", [0]);
                  var string2792 = new GraceString("/types/");
                  onSelf = true;
                  var call2794 = callmethodChecked(this, "outdir", [0]);
                  var string2796 = new GraceString("/");
                  var call2798 = callmethodChecked(var_settings, "outputdir", [0]);
                  var string2800 = new GraceString("");
                  var opresult2802 = callmethodChecked(string2800, "++", [1], call2798);
                  var opresult2804 = callmethodChecked(opresult2802, "++", [1], string2796);
                  var opresult2806 = callmethodChecked(opresult2804, "++", [1], call2794);
                  var opresult2808 = callmethodChecked(opresult2806, "++", [1], string2792);
                  var opresult2810 = callmethodChecked(opresult2808, "++", [1], call2790);
                  var opresult2812 = callmethodChecked(opresult2810, "++", [1], string2788);
                  var string2813 = new GraceString("w");
                  var call2814 = callmethodChecked(var_io, "open", [2], opresult2812, string2813);
                  var_outfile = call2814;
                  if2786 = GraceDone;
                } else {
                  setLineNumber(761);    // compilenode string
                  var string2815 = new GraceString(".html");
                  onSelf = true;
                  var call2817 = callmethodChecked(this, "pageName", [0]);
                  var string2819 = new GraceString("/");
                  onSelf = true;
                  var call2821 = callmethodChecked(this, "outdir", [0]);
                  var string2823 = new GraceString("/");
                  var call2825 = callmethodChecked(var_settings, "outputdir", [0]);
                  var string2827 = new GraceString("");
                  var opresult2829 = callmethodChecked(string2827, "++", [1], call2825);
                  var opresult2831 = callmethodChecked(opresult2829, "++", [1], string2823);
                  var opresult2833 = callmethodChecked(opresult2831, "++", [1], call2821);
                  var opresult2835 = callmethodChecked(opresult2833, "++", [1], string2819);
                  var opresult2837 = callmethodChecked(opresult2835, "++", [1], call2817);
                  var opresult2839 = callmethodChecked(opresult2837, "++", [1], string2815);
                  var string2840 = new GraceString("w");
                  var call2841 = callmethodChecked(var_io, "open", [2], opresult2839, string2840);
                  var_outfile = call2841;
                  if2786 = GraceDone;
                }
                if2757 = if2786;
              }
              setLineNumber(763);    // compilenode call
              onSelf = true;
              var call2842 = callmethodChecked(this, "headerSection", [0]);
              var call2843 = callmethodChecked(call2842, "html", [0]);
              var opresult2846 = callmethodChecked(var_output, "++", [1], call2843);
              var_output = opresult2846;
              var if2847 = GraceDone;
              setLineNumber(764);    // compilenode call
              onSelf = true;
              var call2848 = callmethodChecked(this, "topDescSection", [0]);
              var call2849 = callmethodChecked(call2848, "hasContent", [0]);
              if (Grace_isTrue(call2849)) {
                setLineNumber(765);    // compilenode call
                onSelf = true;
                var call2850 = callmethodChecked(this, "topDescSection", [0]);
                var call2851 = callmethodChecked(call2850, "html", [0]);
                var opresult2854 = callmethodChecked(var_output, "++", [1], call2851);
                var_output = opresult2854;
                if2847 = GraceDone;
              }
              var if2855 = GraceDone;
              setLineNumber(767);    // compilenode call
              onSelf = true;
              var call2856 = callmethodChecked(this, "fieldsSection", [0]);
              var call2857 = callmethodChecked(call2856, "hasContent", [0]);
              if (Grace_isTrue(call2857)) {
                setLineNumber(768);    // compilenode call
                onSelf = true;
                var call2858 = callmethodChecked(this, "fieldsSection", [0]);
                var call2859 = callmethodChecked(call2858, "alphabetize", [0]);
                setLineNumber(769);    // compilenode call
                onSelf = true;
                var call2860 = callmethodChecked(this, "fieldsSection", [0]);
                var call2861 = callmethodChecked(call2860, "html", [0]);
                var opresult2864 = callmethodChecked(var_output, "++", [1], call2861);
                var_output = opresult2864;
                if2855 = GraceDone;
              }
              var if2865 = GraceDone;
              setLineNumber(771);    // compilenode call
              onSelf = true;
              var call2866 = callmethodChecked(this, "methodtypesSection", [0]);
              var call2867 = callmethodChecked(call2866, "hasContent", [0]);
              if (Grace_isTrue(call2867)) {
                setLineNumber(772);    // compilenode call
                onSelf = true;
                var call2868 = callmethodChecked(this, "methodtypesSection", [0]);
                var call2869 = callmethodChecked(call2868, "alphabetize", [0]);
                setLineNumber(773);    // compilenode call
                onSelf = true;
                var call2870 = callmethodChecked(this, "methodtypesSection", [0]);
                var call2871 = callmethodChecked(call2870, "html", [0]);
                var opresult2874 = callmethodChecked(var_output, "++", [1], call2871);
                var_output = opresult2874;
                if2865 = GraceDone;
              }
              var if2875 = GraceDone;
              setLineNumber(775);    // compilenode call
              onSelf = true;
              var call2876 = callmethodChecked(this, "typesSection", [0]);
              var call2877 = callmethodChecked(call2876, "hasContent", [0]);
              if (Grace_isTrue(call2877)) {
                setLineNumber(776);    // compilenode call
                onSelf = true;
                var call2878 = callmethodChecked(this, "typesSection", [0]);
                var call2879 = callmethodChecked(call2878, "alphabetize", [0]);
                setLineNumber(777);    // compilenode call
                onSelf = true;
                var call2880 = callmethodChecked(this, "typesSection", [0]);
                var call2881 = callmethodChecked(call2880, "html", [0]);
                var opresult2884 = callmethodChecked(var_output, "++", [1], call2881);
                var_output = opresult2884;
                if2875 = GraceDone;
              }
              var if2885 = GraceDone;
              setLineNumber(779);    // compilenode call
              onSelf = true;
              var call2886 = callmethodChecked(this, "classesSection", [0]);
              var call2887 = callmethodChecked(call2886, "hasContent", [0]);
              if (Grace_isTrue(call2887)) {
                setLineNumber(780);    // compilenode call
                onSelf = true;
                var call2888 = callmethodChecked(this, "classesSection", [0]);
                var call2889 = callmethodChecked(call2888, "alphabetize", [0]);
                setLineNumber(781);    // compilenode call
                onSelf = true;
                var call2890 = callmethodChecked(this, "classesSection", [0]);
                var call2891 = callmethodChecked(call2890, "html", [0]);
                var opresult2894 = callmethodChecked(var_output, "++", [1], call2891);
                var_output = opresult2894;
                if2885 = GraceDone;
              }
              var if2895 = GraceDone;
              setLineNumber(783);    // compilenode call
              onSelf = true;
              var call2896 = callmethodChecked(this, "methodsSection", [0]);
              var call2897 = callmethodChecked(call2896, "hasContent", [0]);
              if (Grace_isTrue(call2897)) {
                setLineNumber(784);    // compilenode call
                onSelf = true;
                var call2898 = callmethodChecked(this, "methodsSection", [0]);
                var call2899 = callmethodChecked(call2898, "alphabetize", [0]);
                setLineNumber(785);    // compilenode call
                onSelf = true;
                var call2900 = callmethodChecked(this, "methodsSection", [0]);
                var call2901 = callmethodChecked(call2900, "html", [0]);
                var opresult2904 = callmethodChecked(var_output, "++", [1], call2901);
                var_output = opresult2904;
                if2895 = GraceDone;
              }
              setLineNumber(787);    // compilenode call
              onSelf = true;
              var call2905 = callmethodChecked(this, "footerSection", [0]);
              var call2906 = callmethodChecked(call2905, "html", [0]);
              var opresult2909 = callmethodChecked(var_output, "++", [1], call2906);
              var_output = opresult2909;
              setLineNumber(788);    // compilenode call
              var call2910 = callmethodChecked(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call2911 = callmethodChecked(call2910, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call2912 = callmethodChecked(call2911, "autoindent", [1], var_output);
              var_output = call2912;
              setLineNumber(789);    // compilenode identifier
              var call2913 = callmethodChecked(var_outfile, "write", [1], var_output);
              setLineNumber(790);    // compilenode identifier
              var call2914 = callmethodChecked(var_outfile, "close", [0]);
              var if2915 = GraceDone;
              setLineNumber(791);    // compilenode identifier
              var call2917 = callmethodChecked(var_settings, "verbosity", [0]);
              var opresult2919 = callmethodChecked(call2917, ">", [1], new GraceNum(1));
              if (Grace_isTrue(opresult2919)) {
                var string2920 = new GraceString(")");
                var call2922 = callmethodChecked(var_sys, "elapsedTime", [0]);
                var string2924 = new GraceString(" - file written (");
                onSelf = true;
                var call2926 = callmethodChecked(this, "title", [0]);
                var string2928 = new GraceString("On ");
                var opresult2930 = callmethodChecked(string2928, "++", [1], call2926);
                var opresult2932 = callmethodChecked(opresult2930, "++", [1], string2924);
                var opresult2934 = callmethodChecked(opresult2932, "++", [1], call2922);
                var opresult2936 = callmethodChecked(opresult2934, "++", [1], string2920);
                var call2937 = Grace_print(opresult2936);
                if2915 = call2937;
              }
              return if2915;
            };
            func2732.paramCounts = [0];
            obj1973.methods["generate"] = func2732;
            func2732.definitionLine = 751;
            func2732.definitionModule = "gracedoc";
            var func2938 = function(argcv) {    // method visitMethodType(1)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_o = arguments[curarg];
              curarg++;
              if (argcv[0] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitMethodType(1)"));
              setModuleName("gracedoc");
              var if2939 = GraceDone;
              setLineNumber(795);    // compilenode call
              onSelf = true;
              var call2940 = callmethodChecked(this, "isOnTypePage", [0]);
              if (Grace_isTrue(call2940)) {
                setLineNumber(796);    // compilenode string
                var string2941 = new GraceString("<tr class='placeholder'><td><code>");
                var var_t = string2941;
                setLineNumber(797);    // compilenode string
                var string2942 = new GraceString("");
                var var_n = string2942;
                setLineNumber(798);    // compilenode identifier
                var call2943 = callmethodChecked(var_o, "signature", [0]);
                var block2944 = new GraceBlock(this, 798, 1);
                setLineNumber(1);    // compilenode identifier
                block2944.real = function(var_part) {
                  setLineNumber(799);    // compilenode string
                  var string2945 = new GraceString("</span>");
                  var call2947 = callmethodChecked(var_part, "name", [0]);
                  var string2949 = new GraceString("<span class='method-name'>");
                  var opresult2952 = callmethodChecked(var_t, "++", [1], string2949);
                  var opresult2954 = callmethodChecked(opresult2952, "++", [1], call2947);
                  var opresult2956 = callmethodChecked(opresult2954, "++", [1], string2945);
                  var_t = opresult2956;
                  setLineNumber(800);    // compilenode identifier
                  var call2957 = callmethodChecked(var_part, "name", [0]);
                  var opresult2960 = callmethodChecked(var_n, "++", [1], call2957);
                  var_n = opresult2960;
                  var if2961 = GraceDone;
                  setLineNumber(801);    // compilenode identifier
                  var call2962 = callmethodChecked(var_o, "signature", [0]);
                  var call2963 = callmethodChecked(call2962, "last", [0]);
                  var opresult2966 = callmethodChecked(var_part, "\u2260", [1], call2963);
                  if (Grace_isTrue(opresult2966)) {
                    var string2967 = new GraceString("()");
                    var opresult2970 = callmethodChecked(var_n, "++", [1], string2967);
                    var_n = opresult2970;
                    if2961 = GraceDone;
                  }
                  var if2971 = GraceDone;
                  setLineNumber(802);    // compilenode identifier
                  var call2973 = callmethodChecked(var_part, "params", [0]);
                  var call2974 = callmethodChecked(call2973, "size", [0]);
                  var opresult2976 = callmethodChecked(call2974, ">", [1], new GraceNum(0));
                  if (Grace_isTrue(opresult2976)) {
                    setLineNumber(803);    // compilenode string
                    var string2977 = new GraceString("(");
                    var opresult2980 = callmethodChecked(var_t, "++", [1], string2977);
                    var_t = opresult2980;
                    setLineNumber(804);    // compilenode identifier
                    var call2981 = callmethodChecked(var_part, "params", [0]);
                    var block2982 = new GraceBlock(this, 804, 1);
                    setLineNumber(1);    // compilenode identifier
                    block2982.real = function(var_param) {
                      var if2983 = GraceDone;
                      setLineNumber(805);    // compilenode identifier
                      var call2985 = callmethodChecked(var_param, "dtype", [0]);
                      var opresult2987 = callmethodChecked(call2985, "\u2260", [1], GraceFalse);
                      if (Grace_isTrue(opresult2987)) {
                        setLineNumber(806);    // compilenode string
                        var string2988 = new GraceString("</span>");
                        var call2990 = callmethodChecked(var_param, "nameString", [0]);
                        var string2992 = new GraceString("<span class='parameter-name'>");
                        var opresult2995 = callmethodChecked(var_t, "++", [1], string2992);
                        var opresult2997 = callmethodChecked(opresult2995, "++", [1], call2990);
                        var opresult2999 = callmethodChecked(opresult2997, "++", [1], string2988);
                        var_t = opresult2999;
                        setLineNumber(807);    // compilenode string
                        var string3000 = new GraceString(":");
                        var opresult3003 = callmethodChecked(var_t, "++", [1], string3000);
                        var_t = opresult3003;
                        var if3004 = GraceDone;
                        setLineNumber(808);    // compilenode string
                        var string3005 = new GraceString("identifier");
                        var call3007 = callmethodChecked(var_param, "dtype", [0]);
                        var call3008 = callmethodChecked(call3007, "kind", [0]);
                        var opresult3010 = callmethodChecked(call3008, "==", [1], string3005);
                        if (Grace_isTrue(opresult3010)) {
                          setLineNumber(809);    // compilenode identifier
                          var call3011 = callmethodChecked(var_param, "dtype", [0]);
                          var call3012 = callmethodChecked(call3011, "value", [0]);
                          onSelf = true;
                          var call3013 = callmethodChecked(this, "getTypeLink", [1], call3012);
                          var opresult3016 = callmethodChecked(var_t, "++", [1], call3013);
                          var_t = opresult3016;
                          if3004 = GraceDone;
                        } else {
                          var if3017 = GraceDone;
                          setLineNumber(810);    // compilenode string
                          var string3018 = new GraceString("generic");
                          var call3020 = callmethodChecked(var_param, "dtype", [0]);
                          var call3021 = callmethodChecked(call3020, "kind", [0]);
                          var opresult3023 = callmethodChecked(call3021, "==", [1], string3018);
                          if (Grace_isTrue(opresult3023)) {
                            setLineNumber(811);    // compilenode string
                            var string3024 = new GraceString("&lt;");
                            var call3026 = callmethodChecked(var_param, "dtype", [0]);
                            var call3027 = callmethodChecked(call3026, "value", [0]);
                            var call3028 = callmethodChecked(call3027, "value", [0]);
                            onSelf = true;
                            var call3029 = callmethodChecked(this, "getTypeLink", [1], call3028);
                            var opresult3032 = callmethodChecked(var_t, "++", [1], call3029);
                            var opresult3034 = callmethodChecked(opresult3032, "++", [1], string3024);
                            var_t = opresult3034;
                            setLineNumber(812);    // compilenode block
                            var block3035 = new GraceBlock(this, 812, 1);
                            setLineNumber(1);    // compilenode identifier
                            block3035.real = function(var_each) {
                              setLineNumber(812);    // compilenode string
                              var string3036 = new GraceString("");
                              var call3038 = callmethodChecked(var_each, "value", [0]);
                              onSelf = true;
                              var call3039 = callmethodChecked(this, "getTypeLink", [1], call3038);
                              var string3041 = new GraceString("");
                              var string3044 = new GraceString("");
                              var opresult3046 = callmethodChecked(string3044, "++", [1], var_t);
                              var opresult3048 = callmethodChecked(opresult3046, "++", [1], string3041);
                              var opresult3050 = callmethodChecked(opresult3048, "++", [1], call3039);
                              var opresult3052 = callmethodChecked(opresult3050, "++", [1], string3036);
                              var_t = opresult3052;
                              return GraceDone;
                            };
                            var block3053 = new GraceBlock(this, 812, 0);
                            block3053.real = function() {
                              var string3054 = new GraceString(", ");
                              var opresult3057 = callmethodChecked(var_t, "++", [1], string3054);
                              var_t = opresult3057;
                              return GraceDone;
                            };
                            var call3058 = callmethodChecked(var_param, "dtype", [0]);
                            var call3059 = callmethodChecked(call3058, "args", [0]);
                            var call3060 = callmethodChecked(call3059, "do()separatedBy", [1, 1], block3035, block3053);
                            setLineNumber(813);    // compilenode string
                            var string3061 = new GraceString("&gt;");
                            var opresult3064 = callmethodChecked(var_t, "++", [1], string3061);
                            var_t = opresult3064;
                            if3017 = GraceDone;
                          }
                          if3004 = if3017;
                        }
                        if2983 = if3004;
                      } else {
                        setLineNumber(816);    // compilenode string
                        var string3065 = new GraceString("</span>");
                        var call3067 = callmethodChecked(var_param, "nameString", [0]);
                        var string3069 = new GraceString("<span class='parameter-name'>");
                        var opresult3072 = callmethodChecked(var_t, "++", [1], string3069);
                        var opresult3074 = callmethodChecked(opresult3072, "++", [1], call3067);
                        var opresult3076 = callmethodChecked(opresult3074, "++", [1], string3065);
                        var_t = opresult3076;
                        if2983 = GraceDone;
                      }
                      var if3077 = GraceDone;
                      setLineNumber(818);    // compilenode identifier
                      var call3078 = callmethodChecked(var_part, "params", [0]);
                      var call3079 = callmethodChecked(call3078, "last", [0]);
                      var opresult3082 = callmethodChecked(var_param, "\u2260", [1], call3079);
                      var call3085 = callmethodChecked(var_part, "params", [0]);
                      var call3086 = callmethodChecked(call3085, "size", [0]);
                      var opresult3088 = callmethodChecked(call3086, ">", [1], new GraceNum(1));
                      var opresult3090 = callmethodChecked(opresult3088, "&&", [1], opresult3082);
                      if (Grace_isTrue(opresult3090)) {
                        setLineNumber(819);    // compilenode string
                        var string3091 = new GraceString(", ");
                        var opresult3094 = callmethodChecked(var_t, "++", [1], string3091);
                        var_t = opresult3094;
                        if3077 = GraceDone;
                      }
                      return if3077;
                    };
                    var call3095 = callmethodChecked(var_prelude, "for()do", [1, 1], call2981, block2982);
                    setLineNumber(822);    // compilenode string
                    var string3096 = new GraceString(")");
                    var opresult3099 = callmethodChecked(var_t, "++", [1], string3096);
                    var_t = opresult3099;
                    if2971 = GraceDone;
                  }
                  return if2971;
                };
                var call3100 = callmethodChecked(var_prelude, "for()do", [1, 1], call2943, block2944);
                setLineNumber(825);    // compilenode string
                var string3101 = new GraceString("</code></td>");
                var opresult3104 = callmethodChecked(var_t, "++", [1], string3101);
                var_t = opresult3104;
                setLineNumber(826);    // compilenode string
                var string3105 = new GraceString("<td><code>");
                var opresult3108 = callmethodChecked(var_t, "++", [1], string3105);
                var_t = opresult3108;
                var if3109 = GraceDone;
                setLineNumber(827);    // compilenode identifier
                var call3111 = callmethodChecked(var_o, "rtype", [0]);
                var opresult3113 = callmethodChecked(call3111, "\u2260", [1], GraceFalse);
                if (Grace_isTrue(opresult3113)) {
                  var if3114 = GraceDone;
                  setLineNumber(828);    // compilenode string
                  var string3115 = new GraceString("identifier");
                  var call3117 = callmethodChecked(var_o, "rtype", [0]);
                  var call3118 = callmethodChecked(call3117, "kind", [0]);
                  var opresult3120 = callmethodChecked(call3118, "==", [1], string3115);
                  if (Grace_isTrue(opresult3120)) {
                    setLineNumber(829);    // compilenode identifier
                    var call3121 = callmethodChecked(var_o, "rtype", [0]);
                    var call3122 = callmethodChecked(call3121, "value", [0]);
                    onSelf = true;
                    var call3123 = callmethodChecked(this, "getTypeLink", [1], call3122);
                    var opresult3126 = callmethodChecked(var_t, "++", [1], call3123);
                    var_t = opresult3126;
                    if3114 = GraceDone;
                  } else {
                    var if3127 = GraceDone;
                    setLineNumber(830);    // compilenode string
                    var string3128 = new GraceString("generic");
                    var call3130 = callmethodChecked(var_o, "rtype", [0]);
                    var call3131 = callmethodChecked(call3130, "kind", [0]);
                    var opresult3133 = callmethodChecked(call3131, "==", [1], string3128);
                    if (Grace_isTrue(opresult3133)) {
                      setLineNumber(831);    // compilenode string
                      var string3134 = new GraceString("&lt;");
                      var call3136 = callmethodChecked(var_o, "rtype", [0]);
                      var call3137 = callmethodChecked(call3136, "value", [0]);
                      var call3138 = callmethodChecked(call3137, "value", [0]);
                      onSelf = true;
                      var call3139 = callmethodChecked(this, "getTypeLink", [1], call3138);
                      var opresult3142 = callmethodChecked(var_t, "++", [1], call3139);
                      var opresult3144 = callmethodChecked(opresult3142, "++", [1], string3134);
                      var_t = opresult3144;
                      setLineNumber(832);    // compilenode block
                      var block3145 = new GraceBlock(this, 832, 1);
                      setLineNumber(1);    // compilenode identifier
                      block3145.real = function(var_each) {
                        setLineNumber(832);    // compilenode string
                        var string3146 = new GraceString("");
                        var call3148 = callmethodChecked(var_each, "value", [0]);
                        onSelf = true;
                        var call3149 = callmethodChecked(this, "getTypeLink", [1], call3148);
                        var string3151 = new GraceString("");
                        var string3154 = new GraceString("");
                        var opresult3156 = callmethodChecked(string3154, "++", [1], var_t);
                        var opresult3158 = callmethodChecked(opresult3156, "++", [1], string3151);
                        var opresult3160 = callmethodChecked(opresult3158, "++", [1], call3149);
                        var opresult3162 = callmethodChecked(opresult3160, "++", [1], string3146);
                        var_t = opresult3162;
                        return GraceDone;
                      };
                      var block3163 = new GraceBlock(this, 832, 0);
                      block3163.real = function() {
                        var string3164 = new GraceString(", ");
                        var opresult3167 = callmethodChecked(var_t, "++", [1], string3164);
                        var_t = opresult3167;
                        return GraceDone;
                      };
                      var call3168 = callmethodChecked(var_o, "rtype", [0]);
                      var call3169 = callmethodChecked(call3168, "args", [0]);
                      var call3170 = callmethodChecked(call3169, "do()separatedBy", [1, 1], block3145, block3163);
                      setLineNumber(833);    // compilenode string
                      var string3171 = new GraceString("&gt;");
                      var opresult3174 = callmethodChecked(var_t, "++", [1], string3171);
                      var_t = opresult3174;
                      if3127 = GraceDone;
                    }
                    if3114 = if3127;
                  }
                  if3109 = if3114;
                } else {
                  setLineNumber(836);    // compilenode string
                  var string3175 = new GraceString("Done");
                  var opresult3178 = callmethodChecked(var_t, "++", [1], string3175);
                  var_t = opresult3178;
                  if3109 = GraceDone;
                }
                setLineNumber(838);    // compilenode string
                var string3179 = new GraceString("</code></td></tr>");
                var opresult3182 = callmethodChecked(var_t, "++", [1], string3179);
                var_t = opresult3182;
                setLineNumber(839);    // compilenode string
                var string3183 = new GraceString("description");
                var call3184 = callmethodChecked(superDepth, "outer", [0]);
                onOuter = true;
                onSelf = true;
                var call3185 = callmethodChecked(call3184, "outer", [0]);
                onOuter = true;
                onSelf = true;
                var call3186 = callmethodChecked(call3185, "formatComments()rowClass()colspan", [1, 1, 1], var_o, string3183, new GraceNum(2));
                var opresult3189 = callmethodChecked(var_t, "++", [1], call3186);
                var_t = opresult3189;
                setLineNumber(840);    // compilenode call
                onSelf = true;
                var call3190 = callmethodChecked(this, "methodtypesSection", [0]);
                var call3191 = callmethodChecked(call3190, "addElement()withText", [1, 1], var_n, var_t);
                setLineNumber(841);    // compilenode identifier
                return GraceFalse;
              } else {
                setLineNumber(843);    // compilenode identifier
                return GraceTrue;
              }
              setLineNumber(795);    // return value
              if (!Grace_isTrue(callmethod(var_Boolean, "match", [1], if2939)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("result of method visitMethodType(1) does not have " + 
                          callmethod(var_Boolean, "asString", [0])._value + "."));
              return if2939;
            };
            func2938.paramCounts = [1];
            obj1973.methods["visitMethodType"] = func2938;
            func2938.definitionLine = 794;
            func2938.definitionModule = "gracedoc";
            var func3192 = function(argcv) {    // method visitTypeDec(1)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_o = arguments[curarg];
              curarg++;
              if (argcv[0] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitTypeDec(1)"));
              setModuleName("gracedoc");
              var if3193 = GraceDone;
              setLineNumber(848);    // compilenode call
              onSelf = true;
              var call3195 = callmethodChecked(this, "isOnTypePage", [0]);
              var opresult3197 = callmethodChecked(call3195, "==", [1], GraceFalse);
              if (Grace_isTrue(opresult3197)) {
                setLineNumber(849);    // compilenode string
                var string3198 = new GraceString("<tr class='placeholder'>");
                var var_t = string3198;
                setLineNumber(850);    // compilenode identifier
                var call3199 = callmethodChecked(var_o, "name", [0]);
                var call3200 = callmethodChecked(call3199, "value", [0]);
                var var_n = call3200;
                setLineNumber(851);    // compilenode string
                var string3201 = new GraceString("");
                var call3203 = callmethodChecked(var_o, "name", [0]);
                var call3204 = callmethodChecked(call3203, "value", [0]);
                onSelf = true;
                var call3205 = callmethodChecked(this, "getTypeLink", [1], call3204);
                var string3207 = new GraceString("<td class='type-name'>");
                var opresult3209 = callmethodChecked(string3207, "++", [1], call3205);
                var opresult3211 = callmethodChecked(opresult3209, "++", [1], string3201);
                var opresult3214 = callmethodChecked(var_t, "++", [1], opresult3211);
                var_t = opresult3214;
                var if3215 = GraceDone;
                setLineNumber(852);    // compilenode identifier
                var call3216 = callmethodChecked(var_o, "typeParams", [0]);
                var opresult3219 = callmethodChecked(GraceFalse, "\u2260", [1], call3216);
                if (Grace_isTrue(opresult3219)) {
                  setLineNumber(853);    // compilenode string
                  var string3220 = new GraceString("&lt;");
                  var opresult3223 = callmethodChecked(var_t, "++", [1], string3220);
                  var_t = opresult3223;
                  setLineNumber(854);    // compilenode identifier
                  var call3224 = callmethodChecked(var_o, "typeParams", [0]);
                  var call3225 = callmethodChecked(call3224, "params", [0]);
                  var block3226 = new GraceBlock(this, 854, 1);
                  setLineNumber(1);    // compilenode identifier
                  block3226.real = function(var_g) {
                    setLineNumber(855);    // compilenode identifier
                    var call3227 = callmethodChecked(var_g, "nameString", [0]);
                    var opresult3230 = callmethodChecked(var_t, "++", [1], call3227);
                    var_t = opresult3230;
                    var if3231 = GraceDone;
                    setLineNumber(856);    // compilenode identifier
                    var call3232 = callmethodChecked(var_o, "typeParams", [0]);
                    var call3233 = callmethodChecked(call3232, "params", [0]);
                    var call3234 = callmethodChecked(call3233, "last", [0]);
                    var opresult3237 = callmethodChecked(var_g, "\u2260", [1], call3234);
                    if (Grace_isTrue(opresult3237)) {
                      var string3238 = new GraceString(", ");
                      var opresult3241 = callmethodChecked(var_t, "++", [1], string3238);
                      var_t = opresult3241;
                      if3231 = GraceDone;
                    }
                    return if3231;
                  };
                  var call3242 = callmethodChecked(var_prelude, "for()do", [1, 1], call3225, block3226);
                  setLineNumber(858);    // compilenode string
                  var string3243 = new GraceString("&gt;");
                  var opresult3246 = callmethodChecked(var_t, "++", [1], string3243);
                  var_t = opresult3246;
                  if3215 = GraceDone;
                }
                setLineNumber(860);    // compilenode string
                var string3247 = new GraceString("</td></tr>");
                var opresult3250 = callmethodChecked(var_t, "++", [1], string3247);
                var_t = opresult3250;
                setLineNumber(862);    // compilenode string
                var string3251 = new GraceString("");
                var call3253 = callmethodChecked(var_o, "name", [0]);
                var call3254 = callmethodChecked(call3253, "value", [0]);
                var string3256 = new GraceString("");
                var opresult3258 = callmethodChecked(string3256, "++", [1], call3254);
                var opresult3260 = callmethodChecked(opresult3258, "++", [1], string3251);
                var string3261 = new GraceString("");
                onSelf = true;
                var call3263 = callmethodChecked(this, "outdir", [0]);
                var string3265 = new GraceString("");
                var opresult3267 = callmethodChecked(string3265, "++", [1], call3263);
                var opresult3269 = callmethodChecked(opresult3267, "++", [1], string3261);
                var string3270 = new GraceString("type");
                var call3271 = callmethodChecked(var_graceDocVisitor, "createFrom()outTo()as", [1, 1, 1], opresult3260, opresult3269, string3270);
                var var_typeVis = call3271;
                setLineNumber(863);    // compilenode identifier
                var call3272 = callmethodChecked(var_o, "accept", [1], var_typeVis);
                setLineNumber(864);    // compilenode identifier
                var call3273 = callmethodChecked(var_typeVis, "generate", [0]);
                setLineNumber(865);    // compilenode string
                var string3274 = new GraceString("description");
                var call3275 = callmethodChecked(superDepth, "outer", [0]);
                onOuter = true;
                onSelf = true;
                var call3276 = callmethodChecked(call3275, "outer", [0]);
                onOuter = true;
                onSelf = true;
                var call3277 = callmethodChecked(call3276, "formatComments()rowClass()colspan", [1, 1, 1], var_o, string3274, new GraceNum(1));
                var opresult3280 = callmethodChecked(var_t, "++", [1], call3277);
                var_t = opresult3280;
                setLineNumber(866);    // compilenode call
                onSelf = true;
                var call3281 = callmethodChecked(this, "typesSection", [0]);
                var call3282 = callmethodChecked(call3281, "addElement()withText", [1, 1], var_n, var_t);
                setLineNumber(867);    // compilenode identifier
                return GraceFalse;
              } else {
                setLineNumber(869);    // compilenode string
                var string3283 = new GraceString("");
                var call3285 = callmethodChecked(var_o, "name", [0]);
                var call3286 = callmethodChecked(call3285, "value", [0]);
                var string3288 = new GraceString("<span class='headline'><b><code>");
                var opresult3290 = callmethodChecked(string3288, "++", [1], call3286);
                var opresult3292 = callmethodChecked(opresult3290, "++", [1], string3283);
                var var_t = opresult3292;
                var if3293 = GraceDone;
                setLineNumber(870);    // compilenode identifier
                var call3294 = callmethodChecked(var_o, "typeParams", [0]);
                var opresult3297 = callmethodChecked(GraceFalse, "\u2260", [1], call3294);
                if (Grace_isTrue(opresult3297)) {
                  setLineNumber(871);    // compilenode string
                  var string3298 = new GraceString("&lt;");
                  var opresult3301 = callmethodChecked(var_t, "++", [1], string3298);
                  var_t = opresult3301;
                  setLineNumber(872);    // compilenode identifier
                  var call3302 = callmethodChecked(var_o, "typeParams", [0]);
                  var call3303 = callmethodChecked(call3302, "params", [0]);
                  var block3304 = new GraceBlock(this, 872, 1);
                  setLineNumber(1);    // compilenode identifier
                  block3304.real = function(var_g) {
                    setLineNumber(873);    // compilenode identifier
                    var call3305 = callmethodChecked(var_g, "nameString", [0]);
                    var opresult3308 = callmethodChecked(var_t, "++", [1], call3305);
                    var_t = opresult3308;
                    var if3309 = GraceDone;
                    setLineNumber(874);    // compilenode identifier
                    var call3310 = callmethodChecked(var_o, "typeParams", [0]);
                    var call3311 = callmethodChecked(call3310, "params", [0]);
                    var call3312 = callmethodChecked(call3311, "last", [0]);
                    var opresult3315 = callmethodChecked(var_g, "\u2260", [1], call3312);
                    if (Grace_isTrue(opresult3315)) {
                      var string3316 = new GraceString(", ");
                      var opresult3319 = callmethodChecked(var_t, "++", [1], string3316);
                      var_t = opresult3319;
                      if3309 = GraceDone;
                    }
                    return if3309;
                  };
                  var call3320 = callmethodChecked(var_prelude, "for()do", [1, 1], call3303, block3304);
                  setLineNumber(876);    // compilenode string
                  var string3321 = new GraceString("&gt;");
                  var opresult3324 = callmethodChecked(var_t, "++", [1], string3321);
                  var_t = opresult3324;
                  if3293 = GraceDone;
                }
                setLineNumber(878);    // compilenode string
                var string3325 = new GraceString("</b> = ");
                var opresult3328 = callmethodChecked(var_t, "++", [1], string3325);
                var_t = opresult3328;
                setLineNumber(879);    // compilenode string
                var string3329 = new GraceString("");
                var var_temp = string3329;
                setLineNumber(880);    // compilenode call
                var call3330 = callmethodChecked(var_prelude, "list", [0]);
                var call3331 = callmethodChecked(call3330, "empty", [0]);
                var var_ops = call3331;
                setLineNumber(881);    // compilenode call
                var call3332 = callmethodChecked(var_prelude, "list", [0]);
                var call3333 = callmethodChecked(call3332, "empty", [0]);
                var var_tps = call3333;
                setLineNumber(882);    // compilenode identifier
                var call3334 = callmethodChecked(var_o, "value", [0]);
                var var_node = call3334;
                var if3335 = GraceDone;
                setLineNumber(884);    // compilenode string
                var string3336 = new GraceString("op");
                var call3338 = callmethodChecked(var_node, "kind", [0]);
                var opresult3340 = callmethodChecked(call3338, "==", [1], string3336);
                if (Grace_isTrue(opresult3340)) {
                  setLineNumber(885);    // compilenode block
                  var block3341 = new GraceBlock(this, 885, 0);
                  block3341.real = function() {
                    var string3342 = new GraceString("op");
                    var call3344 = callmethodChecked(var_node, "kind", [0]);
                    var opresult3346 = callmethodChecked(call3344, "==", [1], string3342);
                    return opresult3346;
                  };
                  var block3347 = new GraceBlock(this, 885, 0);
                  block3347.real = function() {
                    setLineNumber(886);    // compilenode identifier
                    var call3348 = callmethodChecked(var_node, "value", [0]);
                    var call3349 = callmethodChecked(var_ops, "push", [1], call3348);
                    var if3350 = GraceDone;
                    setLineNumber(887);    // compilenode string
                    var string3351 = new GraceString("identifier");
                    var call3353 = callmethodChecked(var_node, "right", [0]);
                    var call3354 = callmethodChecked(call3353, "kind", [0]);
                    var opresult3356 = callmethodChecked(call3354, "==", [1], string3351);
                    var string3358 = new GraceString("identifier");
                    var call3360 = callmethodChecked(var_node, "left", [0]);
                    var call3361 = callmethodChecked(call3360, "kind", [0]);
                    var opresult3363 = callmethodChecked(call3361, "==", [1], string3358);
                    var opresult3365 = callmethodChecked(opresult3363, "&&", [1], opresult3356);
                    if (Grace_isTrue(opresult3365)) {
                      setLineNumber(888);    // compilenode string
                      var string3366 = new GraceString("");
                      var call3368 = callmethodChecked(var_node, "right", [0]);
                      var call3369 = callmethodChecked(call3368, "value", [0]);
                      onSelf = true;
                      var call3370 = callmethodChecked(this, "getTypeLink", [1], call3369);
                      var string3372 = new GraceString(" ");
                      var call3374 = callmethodChecked(var_ops, "pop", [0]);
                      var string3376 = new GraceString(" ");
                      var call3378 = callmethodChecked(var_node, "left", [0]);
                      var call3379 = callmethodChecked(call3378, "value", [0]);
                      onSelf = true;
                      var call3380 = callmethodChecked(this, "getTypeLink", [1], call3379);
                      var string3382 = new GraceString("");
                      var opresult3384 = callmethodChecked(string3382, "++", [1], call3380);
                      var opresult3386 = callmethodChecked(opresult3384, "++", [1], string3376);
                      var opresult3388 = callmethodChecked(opresult3386, "++", [1], call3374);
                      var opresult3390 = callmethodChecked(opresult3388, "++", [1], string3372);
                      var opresult3392 = callmethodChecked(opresult3390, "++", [1], call3370);
                      var opresult3394 = callmethodChecked(opresult3392, "++", [1], string3366);
                      var_temp = opresult3394;
                      if3350 = GraceDone;
                    } else {
                      var if3395 = GraceDone;
                      setLineNumber(889);    // compilenode string
                      var string3396 = new GraceString("identifier");
                      var call3398 = callmethodChecked(var_node, "right", [0]);
                      var call3399 = callmethodChecked(call3398, "kind", [0]);
                      var opresult3401 = callmethodChecked(call3399, "==", [1], string3396);
                      if (Grace_isTrue(opresult3401)) {
                        setLineNumber(890);    // compilenode identifier
                        var call3402 = callmethodChecked(var_node, "right", [0]);
                        var call3403 = callmethodChecked(call3402, "value", [0]);
                        var call3404 = callmethodChecked(var_tps, "push", [1], call3403);
                        if3395 = call3404;
                      } else {
                        var if3405 = GraceDone;
                        setLineNumber(891);    // compilenode string
                        var string3406 = new GraceString("identifier");
                        var call3408 = callmethodChecked(var_node, "left", [0]);
                        var call3409 = callmethodChecked(call3408, "kind", [0]);
                        var opresult3411 = callmethodChecked(call3409, "==", [1], string3406);
                        if (Grace_isTrue(opresult3411)) {
                          setLineNumber(892);    // compilenode string
                          var string3412 = new GraceString("");
                          var call3414 = callmethodChecked(var_ops, "pop", [0]);
                          var string3416 = new GraceString(" ");
                          var call3418 = callmethodChecked(var_node, "left", [0]);
                          var call3419 = callmethodChecked(call3418, "value", [0]);
                          onSelf = true;
                          var call3420 = callmethodChecked(this, "getTypeLink", [1], call3419);
                          var string3422 = new GraceString("");
                          var opresult3424 = callmethodChecked(string3422, "++", [1], call3420);
                          var opresult3426 = callmethodChecked(opresult3424, "++", [1], string3416);
                          var opresult3428 = callmethodChecked(opresult3426, "++", [1], call3414);
                          var opresult3430 = callmethodChecked(opresult3428, "++", [1], string3412);
                          var_temp = opresult3430;
                          if3405 = GraceDone;
                        } else {
                          var if3431 = GraceDone;
                          setLineNumber(893);    // compilenode string
                          var string3432 = new GraceString("member");
                          var call3434 = callmethodChecked(var_node, "left", [0]);
                          var call3435 = callmethodChecked(call3434, "kind", [0]);
                          var opresult3437 = callmethodChecked(call3435, "==", [1], string3432);
                          if (Grace_isTrue(opresult3437)) {
                            setLineNumber(894);    // compilenode string
                            var string3438 = new GraceString("");
                            var call3440 = callmethodChecked(var_ops, "pop", [0]);
                            var string3442 = new GraceString(" ");
                            var opresult3444 = callmethodChecked(string3442, "++", [1], call3440);
                            var opresult3446 = callmethodChecked(opresult3444, "++", [1], string3438);
                            var string3448 = new GraceString("");
                            var call3450 = callmethodChecked(var_node, "left", [0]);
                            var call3451 = callmethodChecked(call3450, "value", [0]);
                            var string3453 = new GraceString(".");
                            var call3455 = callmethodChecked(var_node, "left", [0]);
                            var call3456 = callmethodChecked(call3455, "in", [0]);
                            var call3457 = callmethodChecked(call3456, "value", [0]);
                            var string3459 = new GraceString("");
                            var opresult3461 = callmethodChecked(string3459, "++", [1], call3457);
                            var opresult3463 = callmethodChecked(opresult3461, "++", [1], string3453);
                            var opresult3465 = callmethodChecked(opresult3463, "++", [1], call3451);
                            var opresult3467 = callmethodChecked(opresult3465, "++", [1], string3448);
                            onSelf = true;
                            var call3468 = callmethodChecked(this, "getTypeLink", [1], opresult3467);
                            var opresult3470 = callmethodChecked(call3468, "++", [1], opresult3446);
                            var_temp = opresult3470;
                            if3431 = GraceDone;
                          } else {
                            var if3471 = GraceDone;
                            setLineNumber(895);    // compilenode string
                            var string3472 = new GraceString("member");
                            var call3474 = callmethodChecked(var_node, "right", [0]);
                            var call3475 = callmethodChecked(call3474, "kind", [0]);
                            var opresult3477 = callmethodChecked(call3475, "==", [1], string3472);
                            if (Grace_isTrue(opresult3477)) {
                              setLineNumber(896);    // compilenode string
                              var string3478 = new GraceString("");
                              var call3480 = callmethodChecked(var_node, "left", [0]);
                              var call3481 = callmethodChecked(call3480, "value", [0]);
                              var string3483 = new GraceString(".");
                              var call3485 = callmethodChecked(var_node, "left", [0]);
                              var call3486 = callmethodChecked(call3485, "in", [0]);
                              var call3487 = callmethodChecked(call3486, "value", [0]);
                              var string3489 = new GraceString("");
                              var opresult3491 = callmethodChecked(string3489, "++", [1], call3487);
                              var opresult3493 = callmethodChecked(opresult3491, "++", [1], string3483);
                              var opresult3495 = callmethodChecked(opresult3493, "++", [1], call3481);
                              var opresult3497 = callmethodChecked(opresult3495, "++", [1], string3478);
                              var call3498 = callmethodChecked(var_tps, "push", [1], opresult3497);
                              if3471 = call3498;
                            }
                            if3431 = if3471;
                          }
                          if3405 = if3431;
                        }
                        if3395 = if3405;
                      }
                      if3350 = if3395;
                    }
                    setLineNumber(898);    // compilenode identifier
                    var call3499 = callmethodChecked(var_node, "left", [0]);
                    var_node = call3499;
                    return GraceDone;
                  };
                  var call3500 = callmethodChecked(var_prelude, "while()do", [1, 1], block3341, block3347);
                  setLineNumber(900);    // compilenode block
                  var block3501 = new GraceBlock(this, 900, 0);
                  block3501.real = function() {
                    var call3503 = callmethodChecked(var_ops, "size", [0]);
                    var opresult3505 = callmethodChecked(call3503, ">", [1], new GraceNum(0));
                    var call3508 = callmethodChecked(var_tps, "size", [0]);
                    var opresult3510 = callmethodChecked(call3508, ">", [1], new GraceNum(0));
                    var opresult3512 = callmethodChecked(opresult3510, "&&", [1], opresult3505);
                    return opresult3512;
                  };
                  var block3513 = new GraceBlock(this, 900, 0);
                  block3513.real = function() {
                    setLineNumber(901);    // compilenode identifier
                    var call3514 = callmethodChecked(var_tps, "pop", [0]);
                    var var_p = call3514;
                    setLineNumber(902);    // compilenode string
                    var string3515 = new GraceString("");
                    var call3517 = callmethodChecked(var_p, "value", [0]);
                    onSelf = true;
                    var call3518 = callmethodChecked(this, "getTypeLink", [1], call3517);
                    var string3520 = new GraceString(" ");
                    var call3522 = callmethodChecked(var_ops, "pop", [0]);
                    var string3524 = new GraceString(" ");
                    var string3527 = new GraceString("");
                    var opresult3529 = callmethodChecked(string3527, "++", [1], var_temp);
                    var opresult3531 = callmethodChecked(opresult3529, "++", [1], string3524);
                    var opresult3533 = callmethodChecked(opresult3531, "++", [1], call3522);
                    var opresult3535 = callmethodChecked(opresult3533, "++", [1], string3520);
                    var opresult3537 = callmethodChecked(opresult3535, "++", [1], call3518);
                    var opresult3539 = callmethodChecked(opresult3537, "++", [1], string3515);
                    var_temp = opresult3539;
                    return GraceDone;
                  };
                  var call3540 = callmethodChecked(var_prelude, "while()do", [1, 1], block3501, block3513);
                  var if3541 = GraceDone;
                  setLineNumber(904);    // compilenode identifier
                  var call3543 = callmethodChecked(var_ops, "size", [0]);
                  var opresult3545 = callmethodChecked(call3543, ">", [1], new GraceNum(0));
                  if (Grace_isTrue(opresult3545)) {
                    setLineNumber(905);    // compilenode string
                    var string3546 = new GraceString("");
                    var call3548 = callmethodChecked(var_ops, "pop", [0]);
                    var string3550 = new GraceString(" ");
                    var string3553 = new GraceString("");
                    var opresult3555 = callmethodChecked(string3553, "++", [1], var_temp);
                    var opresult3557 = callmethodChecked(opresult3555, "++", [1], string3550);
                    var opresult3559 = callmethodChecked(opresult3557, "++", [1], call3548);
                    var opresult3561 = callmethodChecked(opresult3559, "++", [1], string3546);
                    var_temp = opresult3561;
                    if3541 = GraceDone;
                  }
                  setLineNumber(907);    // compilenode string
                  var string3562 = new GraceString(" type ");
                  var opresult3566 = callmethodChecked(var_t, "++", [1], var_temp);
                  var opresult3568 = callmethodChecked(opresult3566, "++", [1], string3562);
                  var_t = opresult3568;
                  setLineNumber(908);    // compilenode string
                  var string3569 = new GraceString("{ <span class='quiet'>...added methods below...</span> }");
                  var opresult3572 = callmethodChecked(var_t, "++", [1], string3569);
                  var_t = opresult3572;
                  if3335 = GraceDone;
                } else {
                  var if3573 = GraceDone;
                  setLineNumber(909);    // compilenode string
                  var string3574 = new GraceString("typeliteral");
                  var call3576 = callmethodChecked(var_node, "kind", [0]);
                  var opresult3578 = callmethodChecked(call3576, "==", [1], string3574);
                  if (Grace_isTrue(opresult3578)) {
                    setLineNumber(910);    // compilenode string
                    var string3579 = new GraceString(" type ");
                    var opresult3583 = callmethodChecked(var_t, "++", [1], var_temp);
                    var opresult3585 = callmethodChecked(opresult3583, "++", [1], string3579);
                    var_t = opresult3585;
                    setLineNumber(911);    // compilenode string
                    var string3586 = new GraceString("{ <span class='quiet'>...added methods below...</span> }");
                    var opresult3589 = callmethodChecked(var_t, "++", [1], string3586);
                    var_t = opresult3589;
                    if3573 = GraceDone;
                  } else {
                    var if3590 = GraceDone;
                    setLineNumber(912);    // compilenode string
                    var string3591 = new GraceString("identifier");
                    var call3593 = callmethodChecked(var_node, "kind", [0]);
                    var opresult3595 = callmethodChecked(call3593, "==", [1], string3591);
                    if (Grace_isTrue(opresult3595)) {
                      setLineNumber(913);    // compilenode identifier
                      var call3596 = callmethodChecked(var_node, "value", [0]);
                      onSelf = true;
                      var call3597 = callmethodChecked(this, "getTypeLink", [1], call3596);
                      var string3599 = new GraceString(" ");
                      var opresult3602 = callmethodChecked(var_t, "++", [1], string3599);
                      var opresult3604 = callmethodChecked(opresult3602, "++", [1], call3597);
                      var_t = opresult3604;
                      var if3605 = GraceDone;
                      setLineNumber(914);    // compilenode identifier
                      var call3607 = callmethodChecked(var_node, "generics", [0]);
                      var opresult3609 = callmethodChecked(call3607, "\u2260", [1], GraceFalse);
                      if (Grace_isTrue(opresult3609)) {
                        setLineNumber(915);    // compilenode string
                        var string3610 = new GraceString("&lt;");
                        var opresult3613 = callmethodChecked(var_t, "++", [1], string3610);
                        var_t = opresult3613;
                        setLineNumber(916);    // compilenode identifier
                        var call3614 = callmethodChecked(var_node, "generics", [0]);
                        var block3615 = new GraceBlock(this, 916, 1);
                        setLineNumber(1);    // compilenode identifier
                        block3615.real = function(var_g) {
                          setLineNumber(917);    // compilenode identifier
                          var call3616 = callmethodChecked(var_g, "value", [0]);
                          var opresult3619 = callmethodChecked(var_t, "++", [1], call3616);
                          var_t = opresult3619;
                          var if3620 = GraceDone;
                          setLineNumber(918);    // compilenode identifier
                          var call3621 = callmethodChecked(var_node, "generics", [0]);
                          var call3622 = callmethodChecked(call3621, "last", [0]);
                          var opresult3625 = callmethodChecked(var_g, "\u2260", [1], call3622);
                          if (Grace_isTrue(opresult3625)) {
                            var string3626 = new GraceString(", ");
                            var opresult3629 = callmethodChecked(var_t, "++", [1], string3626);
                            var_t = opresult3629;
                            if3620 = GraceDone;
                          }
                          return if3620;
                        };
                        var call3630 = callmethodChecked(var_prelude, "for()do", [1, 1], call3614, block3615);
                        setLineNumber(920);    // compilenode string
                        var string3631 = new GraceString("&gt;");
                        var opresult3634 = callmethodChecked(var_t, "++", [1], string3631);
                        var_t = opresult3634;
                        if3605 = GraceDone;
                      }
                      if3590 = if3605;
                    } else {
                      var if3635 = GraceDone;
                      setLineNumber(922);    // compilenode string
                      var string3636 = new GraceString("member");
                      var call3638 = callmethodChecked(var_node, "kind", [0]);
                      var opresult3640 = callmethodChecked(call3638, "==", [1], string3636);
                      if (Grace_isTrue(opresult3640)) {
                        setLineNumber(923);    // compilenode string
                        var string3641 = new GraceString("");
                        var call3643 = callmethodChecked(var_node, "value", [0]);
                        var string3645 = new GraceString(".");
                        var call3647 = callmethodChecked(var_node, "in", [0]);
                        var call3648 = callmethodChecked(call3647, "value", [0]);
                        var string3650 = new GraceString("");
                        var opresult3652 = callmethodChecked(string3650, "++", [1], call3648);
                        var opresult3654 = callmethodChecked(opresult3652, "++", [1], string3645);
                        var opresult3656 = callmethodChecked(opresult3654, "++", [1], call3643);
                        var opresult3658 = callmethodChecked(opresult3656, "++", [1], string3641);
                        onSelf = true;
                        var call3659 = callmethodChecked(this, "getTypeLink", [1], opresult3658);
                        var opresult3662 = callmethodChecked(var_t, "++", [1], call3659);
                        var_t = opresult3662;
                        var if3663 = GraceDone;
                        setLineNumber(924);    // compilenode identifier
                        var call3665 = callmethodChecked(var_node, "generics", [0]);
                        var opresult3667 = callmethodChecked(call3665, "\u2260", [1], GraceFalse);
                        if (Grace_isTrue(opresult3667)) {
                          setLineNumber(925);    // compilenode string
                          var string3668 = new GraceString("&lt;");
                          var opresult3671 = callmethodChecked(var_t, "++", [1], string3668);
                          var_t = opresult3671;
                          setLineNumber(926);    // compilenode identifier
                          var call3672 = callmethodChecked(var_node, "generics", [0]);
                          var block3673 = new GraceBlock(this, 926, 1);
                          setLineNumber(1);    // compilenode identifier
                          block3673.real = function(var_g) {
                            setLineNumber(927);    // compilenode identifier
                            var call3674 = callmethodChecked(var_g, "value", [0]);
                            var opresult3677 = callmethodChecked(var_t, "++", [1], call3674);
                            var_t = opresult3677;
                            var if3678 = GraceDone;
                            setLineNumber(928);    // compilenode identifier
                            var call3679 = callmethodChecked(var_node, "generics", [0]);
                            var call3680 = callmethodChecked(call3679, "last", [0]);
                            var opresult3683 = callmethodChecked(var_g, "\u2260", [1], call3680);
                            if (Grace_isTrue(opresult3683)) {
                              var string3684 = new GraceString(", ");
                              var opresult3687 = callmethodChecked(var_t, "++", [1], string3684);
                              var_t = opresult3687;
                              if3678 = GraceDone;
                            }
                            return if3678;
                          };
                          var call3688 = callmethodChecked(var_prelude, "for()do", [1, 1], call3672, block3673);
                          setLineNumber(930);    // compilenode string
                          var string3689 = new GraceString("&gt;");
                          var opresult3692 = callmethodChecked(var_t, "++", [1], string3689);
                          var_t = opresult3692;
                          if3663 = GraceDone;
                        }
                        if3635 = if3663;
                      }
                      if3590 = if3635;
                    }
                    if3573 = if3590;
                  }
                  if3335 = if3573;
                }
                setLineNumber(933);    // compilenode string
                var string3693 = new GraceString("</code></span>");
                var opresult3696 = callmethodChecked(var_t, "++", [1], string3693);
                var_t = opresult3696;
                setLineNumber(934);    // compilenode string
                var string3697 = new GraceString("<hr />");
                var opresult3700 = callmethodChecked(var_t, "++", [1], string3697);
                var_t = opresult3700;
                setLineNumber(935);    // compilenode string
                var string3701 = new GraceString("top-box-description");
                var call3702 = callmethodChecked(superDepth, "outer", [0]);
                onOuter = true;
                onSelf = true;
                var call3703 = callmethodChecked(call3702, "outer", [0]);
                onOuter = true;
                onSelf = true;
                var call3704 = callmethodChecked(call3703, "formatComments()rowClass()colspan", [1, 1, 1], var_o, string3701, new GraceNum(1));
                var opresult3707 = callmethodChecked(var_t, "++", [1], call3704);
                var_t = opresult3707;
                setLineNumber(936);    // compilenode call
                onSelf = true;
                var call3708 = callmethodChecked(this, "topDescSection", [0]);
                var call3709 = callmethodChecked(call3708, "insert", [1], var_t);
                setLineNumber(937);    // compilenode identifier
                return GraceTrue;
              }
              setLineNumber(848);    // return value
              if (!Grace_isTrue(callmethod(var_Boolean, "match", [1], if3193)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("result of method visitTypeDec(1) does not have " + 
                          callmethod(var_Boolean, "asString", [0])._value + "."));
              return if3193;
            };
            func3192.paramCounts = [1];
            obj1973.methods["visitTypeDec"] = func3192;
            func3192.definitionLine = 847;
            func3192.definitionModule = "gracedoc";
            var func3710 = function(argcv) {    // method visitMethod(1)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_o = arguments[curarg];
              curarg++;
              if (argcv[0] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitMethod(1)"));
              setModuleName("gracedoc");
              var if3711 = GraceDone;
              setLineNumber(943);    // compilenode identifier
              var call3712 = callmethodChecked(var_o, "isConfidential", [0]);
              var call3714 = callmethodChecked(var_settings, "publicOnly", [0]);
              var opresult3716 = callmethodChecked(call3714, "&&", [1], call3712);
              if (Grace_isTrue(opresult3716)) {
                return GraceFalse;
              }
              var if3717 = GraceDone;
              setLineNumber(944);    // compilenode identifier
              var call3718 = callmethodChecked(var_o, "isClass", [0]);
              if (Grace_isTrue(call3718)) {
                setLineNumber(945);    // compilenode identifier
                onSelf = true;
                var call3719 = callmethodChecked(this, "doClassMethod", [1], var_o);
                return call3719;
              }
              setLineNumber(947);    // compilenode string
              var string3720 = new GraceString("<tr class='placeholder'><td><code>");
              var var_t = string3720;
              setLineNumber(948);    // compilenode string
              var string3721 = new GraceString("");
              var var_n = string3721;
              setLineNumber(949);    // compilenode identifier
              var call3722 = callmethodChecked(var_o, "signature", [0]);
              var block3723 = new GraceBlock(this, 949, 1);
              setLineNumber(1);    // compilenode identifier
              block3723.real = function(var_part) {
                setLineNumber(950);    // compilenode string
                var string3724 = new GraceString("</span>");
                var call3726 = callmethodChecked(var_part, "name", [0]);
                var string3728 = new GraceString("<span class='method-name'>");
                var opresult3731 = callmethodChecked(var_t, "++", [1], string3728);
                var opresult3733 = callmethodChecked(opresult3731, "++", [1], call3726);
                var opresult3735 = callmethodChecked(opresult3733, "++", [1], string3724);
                var_t = opresult3735;
                setLineNumber(951);    // compilenode identifier
                var call3736 = callmethodChecked(var_part, "name", [0]);
                var opresult3739 = callmethodChecked(var_n, "++", [1], call3736);
                var_n = opresult3739;
                var if3740 = GraceDone;
                setLineNumber(952);    // compilenode identifier
                var call3741 = callmethodChecked(var_o, "signature", [0]);
                var call3742 = callmethodChecked(call3741, "last", [0]);
                var opresult3745 = callmethodChecked(var_part, "\u2260", [1], call3742);
                if (Grace_isTrue(opresult3745)) {
                  var string3746 = new GraceString("()");
                  var opresult3749 = callmethodChecked(var_n, "++", [1], string3746);
                  var_n = opresult3749;
                  if3740 = GraceDone;
                }
                var if3750 = GraceDone;
                setLineNumber(953);    // compilenode identifier
                var call3752 = callmethodChecked(var_part, "params", [0]);
                var call3753 = callmethodChecked(call3752, "size", [0]);
                var opresult3755 = callmethodChecked(call3753, ">", [1], new GraceNum(0));
                if (Grace_isTrue(opresult3755)) {
                  setLineNumber(954);    // compilenode string
                  var string3756 = new GraceString("(");
                  var opresult3759 = callmethodChecked(var_t, "++", [1], string3756);
                  var_t = opresult3759;
                  setLineNumber(955);    // compilenode identifier
                  var call3760 = callmethodChecked(var_part, "params", [0]);
                  var block3761 = new GraceBlock(this, 955, 1);
                  setLineNumber(1);    // compilenode identifier
                  block3761.real = function(var_param) {
                    var if3762 = GraceDone;
                    setLineNumber(956);    // compilenode identifier
                    var call3764 = callmethodChecked(var_param, "dtype", [0]);
                    var opresult3766 = callmethodChecked(call3764, "\u2260", [1], GraceFalse);
                    if (Grace_isTrue(opresult3766)) {
                      setLineNumber(957);    // compilenode string
                      var string3767 = new GraceString("</span>");
                      var call3769 = callmethodChecked(var_param, "nameString", [0]);
                      var string3771 = new GraceString("<span class='parameter-name'>");
                      var opresult3774 = callmethodChecked(var_t, "++", [1], string3771);
                      var opresult3776 = callmethodChecked(opresult3774, "++", [1], call3769);
                      var opresult3778 = callmethodChecked(opresult3776, "++", [1], string3767);
                      var_t = opresult3778;
                      setLineNumber(959);    // compilenode string
                      var string3779 = new GraceString(":<span class='parameter-type'>");
                      var opresult3782 = callmethodChecked(var_t, "++", [1], string3779);
                      var_t = opresult3782;
                      var if3783 = GraceDone;
                      setLineNumber(960);    // compilenode string
                      var string3784 = new GraceString("identifier");
                      var call3786 = callmethodChecked(var_param, "dtype", [0]);
                      var call3787 = callmethodChecked(call3786, "kind", [0]);
                      var opresult3789 = callmethodChecked(call3787, "==", [1], string3784);
                      if (Grace_isTrue(opresult3789)) {
                        setLineNumber(961);    // compilenode identifier
                        var call3790 = callmethodChecked(var_param, "dtype", [0]);
                        var call3791 = callmethodChecked(call3790, "value", [0]);
                        onSelf = true;
                        var call3792 = callmethodChecked(this, "getTypeLink", [1], call3791);
                        var opresult3795 = callmethodChecked(var_t, "++", [1], call3792);
                        var_t = opresult3795;
                        if3783 = GraceDone;
                      } else {
                        var if3796 = GraceDone;
                        setLineNumber(962);    // compilenode string
                        var string3797 = new GraceString("generic");
                        var call3799 = callmethodChecked(var_param, "dtype", [0]);
                        var call3800 = callmethodChecked(call3799, "kind", [0]);
                        var opresult3802 = callmethodChecked(call3800, "==", [1], string3797);
                        if (Grace_isTrue(opresult3802)) {
                          setLineNumber(963);    // compilenode string
                          var string3803 = new GraceString("&lt;");
                          var call3805 = callmethodChecked(var_param, "dtype", [0]);
                          var call3806 = callmethodChecked(call3805, "value", [0]);
                          var call3807 = callmethodChecked(call3806, "value", [0]);
                          onSelf = true;
                          var call3808 = callmethodChecked(this, "getTypeLink", [1], call3807);
                          var opresult3811 = callmethodChecked(var_t, "++", [1], call3808);
                          var opresult3813 = callmethodChecked(opresult3811, "++", [1], string3803);
                          var_t = opresult3813;
                          setLineNumber(964);    // compilenode block
                          var block3814 = new GraceBlock(this, 964, 1);
                          setLineNumber(1);    // compilenode identifier
                          block3814.real = function(var_each) {
                            setLineNumber(964);    // compilenode string
                            var string3815 = new GraceString("");
                            var call3817 = callmethodChecked(var_each, "value", [0]);
                            onSelf = true;
                            var call3818 = callmethodChecked(this, "getTypeLink", [1], call3817);
                            var string3820 = new GraceString("");
                            var string3823 = new GraceString("");
                            var opresult3825 = callmethodChecked(string3823, "++", [1], var_t);
                            var opresult3827 = callmethodChecked(opresult3825, "++", [1], string3820);
                            var opresult3829 = callmethodChecked(opresult3827, "++", [1], call3818);
                            var opresult3831 = callmethodChecked(opresult3829, "++", [1], string3815);
                            var_t = opresult3831;
                            return GraceDone;
                          };
                          var block3832 = new GraceBlock(this, 964, 0);
                          block3832.real = function() {
                            var string3833 = new GraceString(", ");
                            var opresult3836 = callmethodChecked(var_t, "++", [1], string3833);
                            var_t = opresult3836;
                            return GraceDone;
                          };
                          var call3837 = callmethodChecked(var_param, "dtype", [0]);
                          var call3838 = callmethodChecked(call3837, "args", [0]);
                          var call3839 = callmethodChecked(call3838, "do()separatedBy", [1, 1], block3814, block3832);
                          setLineNumber(965);    // compilenode string
                          var string3840 = new GraceString("&gt;");
                          var opresult3843 = callmethodChecked(var_t, "++", [1], string3840);
                          var_t = opresult3843;
                          if3796 = GraceDone;
                        }
                        if3783 = if3796;
                      }
                      setLineNumber(967);    // compilenode string
                      var string3844 = new GraceString("</span>");
                      var opresult3847 = callmethodChecked(var_t, "++", [1], string3844);
                      var_t = opresult3847;
                      if3762 = GraceDone;
                    } else {
                      setLineNumber(970);    // compilenode string
                      var string3848 = new GraceString("</span>");
                      var call3850 = callmethodChecked(var_param, "nameString", [0]);
                      var string3852 = new GraceString("<span class='parameter-name'>");
                      var opresult3855 = callmethodChecked(var_t, "++", [1], string3852);
                      var opresult3857 = callmethodChecked(opresult3855, "++", [1], call3850);
                      var opresult3859 = callmethodChecked(opresult3857, "++", [1], string3848);
                      var_t = opresult3859;
                      if3762 = GraceDone;
                    }
                    var if3860 = GraceDone;
                    setLineNumber(972);    // compilenode identifier
                    var call3861 = callmethodChecked(var_part, "params", [0]);
                    var call3862 = callmethodChecked(call3861, "last", [0]);
                    var opresult3865 = callmethodChecked(var_param, "\u2260", [1], call3862);
                    var call3868 = callmethodChecked(var_part, "params", [0]);
                    var call3869 = callmethodChecked(call3868, "size", [0]);
                    var opresult3871 = callmethodChecked(call3869, ">", [1], new GraceNum(1));
                    var opresult3873 = callmethodChecked(opresult3871, "&&", [1], opresult3865);
                    if (Grace_isTrue(opresult3873)) {
                      setLineNumber(973);    // compilenode string
                      var string3874 = new GraceString(", ");
                      var opresult3877 = callmethodChecked(var_t, "++", [1], string3874);
                      var_t = opresult3877;
                      if3860 = GraceDone;
                    }
                    return if3860;
                  };
                  var call3878 = callmethodChecked(var_prelude, "for()do", [1, 1], call3760, block3761);
                  setLineNumber(976);    // compilenode string
                  var string3879 = new GraceString(")");
                  var opresult3882 = callmethodChecked(var_t, "++", [1], string3879);
                  var_t = opresult3882;
                  if3750 = GraceDone;
                }
                return if3750;
              };
              var call3883 = callmethodChecked(var_prelude, "for()do", [1, 1], call3722, block3723);
              setLineNumber(979);    // compilenode string
              var string3884 = new GraceString("</code></td>");
              var opresult3887 = callmethodChecked(var_t, "++", [1], string3884);
              var_t = opresult3887;
              setLineNumber(980);    // compilenode string
              var string3888 = new GraceString("<td><code>");
              var opresult3891 = callmethodChecked(var_t, "++", [1], string3888);
              var_t = opresult3891;
              var if3892 = GraceDone;
              setLineNumber(981);    // compilenode identifier
              var call3894 = callmethodChecked(var_o, "dtype", [0]);
              var opresult3896 = callmethodChecked(call3894, "\u2260", [1], GraceFalse);
              if (Grace_isTrue(opresult3896)) {
                setLineNumber(982);    // compilenode identifier
                var call3897 = callmethodChecked(var_o, "dtype", [0]);
                var call3898 = callmethodChecked(call3897, "value", [0]);
                onSelf = true;
                var call3899 = callmethodChecked(this, "getTypeLink", [1], call3898);
                var opresult3902 = callmethodChecked(var_t, "++", [1], call3899);
                var_t = opresult3902;
                if3892 = GraceDone;
              } else {
                setLineNumber(984);    // compilenode string
                var string3903 = new GraceString("Done");
                onSelf = true;
                var call3904 = callmethodChecked(this, "getTypeLink", [1], string3903);
                var opresult3907 = callmethodChecked(var_t, "++", [1], call3904);
                var_t = opresult3907;
                if3892 = GraceDone;
              }
              setLineNumber(986);    // compilenode string
              var string3908 = new GraceString("</code></td></tr>");
              var opresult3911 = callmethodChecked(var_t, "++", [1], string3908);
              var_t = opresult3911;
              setLineNumber(987);    // compilenode string
              var string3912 = new GraceString("description");
              var call3913 = callmethodChecked(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call3914 = callmethodChecked(call3913, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call3915 = callmethodChecked(call3914, "formatComments()rowClass()colspan", [1, 1, 1], var_o, string3912, new GraceNum(2));
              var opresult3918 = callmethodChecked(var_t, "++", [1], call3915);
              var_t = opresult3918;
              setLineNumber(988);    // compilenode call
              onSelf = true;
              var call3919 = callmethodChecked(this, "methodsSection", [0]);
              var call3920 = callmethodChecked(call3919, "addElement()withText", [1, 1], var_n, var_t);
              setLineNumber(989);    // compilenode identifier
              return GraceFalse;
            };
            func3710.paramCounts = [1];
            obj1973.methods["visitMethod"] = func3710;
            func3710.definitionLine = 941;
            func3710.definitionModule = "gracedoc";
            var func3921 = function(argcv) {    // method doClassMethod(1)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_m = arguments[curarg];
              curarg++;
              if (argcv[0] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for doClassMethod(1)"));
              setModuleName("gracedoc");
              setLineNumber(993);    // compilenode identifier
              var call3922 = callmethodChecked(var_m, "body", [0]);
              var call3923 = callmethodChecked(call3922, "last", [0]);
              var var_o = call3923;
              var if3924 = GraceDone;
              setLineNumber(995);    // compilenode call
              onSelf = true;
              var call3926 = callmethodChecked(this, "isOnClassPage", [0]);
              var opresult3928 = callmethodChecked(call3926, "==", [1], GraceFalse);
              if (Grace_isTrue(opresult3928)) {
                setLineNumber(996);    // compilenode string
                var string3929 = new GraceString("<tr class='placeholder'>");
                var var_t = string3929;
                setLineNumber(997);    // compilenode identifier
                var call3930 = callmethodChecked(var_m, "nameString", [0]);
                var var_n = call3930;
                setLineNumber(998);    // compilenode string
                var string3931 = new GraceString("</span>");
                onSelf = true;
                var call3933 = callmethodChecked(this, "getClassLink", [1], var_n);
                var string3935 = new GraceString("<td><code><span class='class-name'>");
                var opresult3937 = callmethodChecked(string3935, "++", [1], call3933);
                var opresult3939 = callmethodChecked(opresult3937, "++", [1], string3931);
                var opresult3942 = callmethodChecked(var_t, "++", [1], opresult3939);
                var_t = opresult3942;
                setLineNumber(999);    // compilenode string
                var string3943 = new GraceString(".");
                var opresult3946 = callmethodChecked(var_t, "++", [1], string3943);
                var_t = opresult3946;
                setLineNumber(1000);    // compilenode block
                var block3947 = new GraceBlock(this, 1000, 1);
                setLineNumber(1);    // compilenode identifier
                block3947.real = function(var_part) {
                  setLineNumber(1001);    // compilenode string
                  var string3948 = new GraceString("</span>");
                  var call3950 = callmethodChecked(var_part, "name", [0]);
                  var string3952 = new GraceString("<span class='method-name'>");
                  var opresult3954 = callmethodChecked(string3952, "++", [1], call3950);
                  var opresult3956 = callmethodChecked(opresult3954, "++", [1], string3948);
                  var opresult3959 = callmethodChecked(var_t, "++", [1], opresult3956);
                  var_t = opresult3959;
                  var if3960 = GraceDone;
                  setLineNumber(1002);    // compilenode identifier
                  var call3962 = callmethodChecked(var_part, "params", [0]);
                  var call3963 = callmethodChecked(call3962, "size", [0]);
                  var opresult3965 = callmethodChecked(call3963, ">", [1], new GraceNum(0));
                  if (Grace_isTrue(opresult3965)) {
                    setLineNumber(1003);    // compilenode string
                    var string3966 = new GraceString("(");
                    var opresult3969 = callmethodChecked(var_t, "++", [1], string3966);
                    var_t = opresult3969;
                    setLineNumber(1004);    // compilenode identifier
                    var call3970 = callmethodChecked(var_part, "params", [0]);
                    var block3971 = new GraceBlock(this, 1004, 1);
                    setLineNumber(1);    // compilenode identifier
                    block3971.real = function(var_param) {
                      var if3972 = GraceDone;
                      setLineNumber(1005);    // compilenode identifier
                      var call3974 = callmethodChecked(var_param, "dtype", [0]);
                      var opresult3976 = callmethodChecked(call3974, "\u2260", [1], GraceFalse);
                      if (Grace_isTrue(opresult3976)) {
                        setLineNumber(1006);    // compilenode string
                        var string3977 = new GraceString("</span>");
                        var call3979 = callmethodChecked(var_param, "value", [0]);
                        var string3981 = new GraceString("<span class='parameter-name'>");
                        var opresult3984 = callmethodChecked(var_t, "++", [1], string3981);
                        var opresult3986 = callmethodChecked(opresult3984, "++", [1], call3979);
                        var opresult3988 = callmethodChecked(opresult3986, "++", [1], string3977);
                        var_t = opresult3988;
                        setLineNumber(1007);    // compilenode string
                        var string3989 = new GraceString("</span>");
                        var call3991 = callmethodChecked(var_param, "dtype", [0]);
                        var call3992 = callmethodChecked(call3991, "value", [0]);
                        onSelf = true;
                        var call3993 = callmethodChecked(this, "getTypeLink", [1], call3992);
                        var string3995 = new GraceString(":<span class='parameter-type'>");
                        var opresult3998 = callmethodChecked(var_t, "++", [1], string3995);
                        var opresult4000 = callmethodChecked(opresult3998, "++", [1], call3993);
                        var opresult4002 = callmethodChecked(opresult4000, "++", [1], string3989);
                        var_t = opresult4002;
                        if3972 = GraceDone;
                      } else {
                        setLineNumber(1009);    // compilenode string
                        var string4003 = new GraceString("</span>");
                        var call4005 = callmethodChecked(var_param, "value", [0]);
                        var string4007 = new GraceString("<span class='parameter-name'>");
                        var opresult4010 = callmethodChecked(var_t, "++", [1], string4007);
                        var opresult4012 = callmethodChecked(opresult4010, "++", [1], call4005);
                        var opresult4014 = callmethodChecked(opresult4012, "++", [1], string4003);
                        var_t = opresult4014;
                        if3972 = GraceDone;
                      }
                      var if4015 = GraceDone;
                      setLineNumber(1011);    // compilenode identifier
                      var call4016 = callmethodChecked(var_part, "params", [0]);
                      var call4017 = callmethodChecked(call4016, "last", [0]);
                      var opresult4020 = callmethodChecked(var_param, "\u2260", [1], call4017);
                      var call4023 = callmethodChecked(var_part, "params", [0]);
                      var call4024 = callmethodChecked(call4023, "size", [0]);
                      var opresult4026 = callmethodChecked(call4024, ">", [1], new GraceNum(1));
                      var opresult4028 = callmethodChecked(opresult4026, "&&", [1], opresult4020);
                      if (Grace_isTrue(opresult4028)) {
                        setLineNumber(1012);    // compilenode string
                        var string4029 = new GraceString(", ");
                        var opresult4032 = callmethodChecked(var_t, "++", [1], string4029);
                        var_t = opresult4032;
                        if4015 = GraceDone;
                      }
                      return if4015;
                    };
                    var call4033 = callmethodChecked(var_prelude, "for()do", [1, 1], call3970, block3971);
                    setLineNumber(1015);    // compilenode string
                    var string4034 = new GraceString(")");
                    var opresult4037 = callmethodChecked(var_t, "++", [1], string4034);
                    var_t = opresult4037;
                    if3960 = GraceDone;
                  }
                  return if3960;
                };
                setLineNumber(1000);    // compilenode identifier
                var call4038 = callmethodChecked(var_m, "signature", [0]);
                var call4039 = callmethodChecked(call4038, "do", [1], block3947);
                var if4040 = GraceDone;
                setLineNumber(1019);    // compilenode identifier
                var call4042 = callmethodChecked(var_m, "dtype", [0]);
                var opresult4044 = callmethodChecked(call4042, "\u2260", [1], GraceFalse);
                if (Grace_isTrue(opresult4044)) {
                  setLineNumber(1020);    // compilenode string
                  var string4045 = new GraceString(" -> ");
                  var opresult4048 = callmethodChecked(var_t, "++", [1], string4045);
                  var_t = opresult4048;
                  var if4049 = GraceDone;
                  setLineNumber(1021);    // compilenode string
                  var string4050 = new GraceString("identifier");
                  var call4052 = callmethodChecked(var_m, "dtype", [0]);
                  var call4053 = callmethodChecked(call4052, "kind", [0]);
                  var opresult4055 = callmethodChecked(call4053, "==", [1], string4050);
                  if (Grace_isTrue(opresult4055)) {
                    setLineNumber(1022);    // compilenode identifier
                    var call4056 = callmethodChecked(var_o, "dtype", [0]);
                    var call4057 = callmethodChecked(call4056, "value", [0]);
                    onSelf = true;
                    var call4058 = callmethodChecked(this, "getTypeLink", [1], call4057);
                    var opresult4061 = callmethodChecked(var_t, "++", [1], call4058);
                    var_t = opresult4061;
                    if4049 = GraceDone;
                  } else {
                    var if4062 = GraceDone;
                    setLineNumber(1023);    // compilenode string
                    var string4063 = new GraceString("generic");
                    var call4065 = callmethodChecked(var_m, "dtype", [0]);
                    var call4066 = callmethodChecked(call4065, "kind", [0]);
                    var opresult4068 = callmethodChecked(call4066, "==", [1], string4063);
                    if (Grace_isTrue(opresult4068)) {
                      setLineNumber(1024);    // compilenode string
                      var string4069 = new GraceString("&lt;");
                      var call4071 = callmethodChecked(var_o, "dtype", [0]);
                      var call4072 = callmethodChecked(call4071, "value", [0]);
                      var call4073 = callmethodChecked(call4072, "value", [0]);
                      onSelf = true;
                      var call4074 = callmethodChecked(this, "getTypeLink", [1], call4073);
                      var opresult4077 = callmethodChecked(var_t, "++", [1], call4074);
                      var opresult4079 = callmethodChecked(opresult4077, "++", [1], string4069);
                      var_t = opresult4079;
                      setLineNumber(1025);    // compilenode block
                      var block4080 = new GraceBlock(this, 1025, 1);
                      setLineNumber(1);    // compilenode identifier
                      block4080.real = function(var_each) {
                        setLineNumber(1025);    // compilenode string
                        var string4081 = new GraceString("");
                        var call4083 = callmethodChecked(var_each, "value", [0]);
                        onSelf = true;
                        var call4084 = callmethodChecked(this, "getTypeLink", [1], call4083);
                        var string4086 = new GraceString("");
                        var string4089 = new GraceString("");
                        var opresult4091 = callmethodChecked(string4089, "++", [1], var_t);
                        var opresult4093 = callmethodChecked(opresult4091, "++", [1], string4086);
                        var opresult4095 = callmethodChecked(opresult4093, "++", [1], call4084);
                        var opresult4097 = callmethodChecked(opresult4095, "++", [1], string4081);
                        var_t = opresult4097;
                        return GraceDone;
                      };
                      var block4098 = new GraceBlock(this, 1025, 0);
                      block4098.real = function() {
                        var string4099 = new GraceString(", ");
                        var opresult4102 = callmethodChecked(var_t, "++", [1], string4099);
                        var_t = opresult4102;
                        return GraceDone;
                      };
                      var call4103 = callmethodChecked(var_m, "dtype", [0]);
                      var call4104 = callmethodChecked(call4103, "args", [0]);
                      var call4105 = callmethodChecked(call4104, "do()separatedBy", [1, 1], block4080, block4098);
                      setLineNumber(1026);    // compilenode string
                      var string4106 = new GraceString("&gt;");
                      var opresult4109 = callmethodChecked(var_t, "++", [1], string4106);
                      var_t = opresult4109;
                      if4062 = GraceDone;
                    }
                    if4049 = if4062;
                  }
                  if4040 = if4049;
                }
                setLineNumber(1029);    // compilenode string
                var string4110 = new GraceString("</code></td></tr>");
                var opresult4113 = callmethodChecked(var_t, "++", [1], string4110);
                var_t = opresult4113;
                var if4114 = GraceDone;
                setLineNumber(1031);    // compilenode identifier
                var call4116 = callmethodChecked(var_o, "superclass", [0]);
                var opresult4118 = callmethodChecked(call4116, "\u2260", [1], GraceFalse);
                if (Grace_isTrue(opresult4118)) {
                  setLineNumber(1032);    // compilenode identifier
                  var call4119 = callmethodChecked(var_o, "superclass", [0]);
                  var call4120 = callmethodChecked(call4119, "accept", [1], this);
                  if4114 = call4120;
                }
                setLineNumber(1035);    // compilenode call
                onSelf = true;
                var call4121 = callmethodChecked(this, "outdir", [0]);
                var string4122 = new GraceString("class");
                var call4123 = callmethodChecked(var_graceDocVisitor, "createFrom()outTo()as", [1, 1, 1], var_n, call4121, string4122);
                var var_classVis = call4123;
                setLineNumber(1036);    // compilenode identifier
                var call4124 = callmethodChecked(var_o, "accept", [1], var_classVis);
                setLineNumber(1037);    // compilenode identifier
                var call4125 = callmethodChecked(var_classVis, "generate", [0]);
                setLineNumber(1038);    // compilenode string
                var string4126 = new GraceString("top-box-description");
                var call4127 = callmethodChecked(superDepth, "outer", [0]);
                onOuter = true;
                onSelf = true;
                var call4128 = callmethodChecked(call4127, "outer", [0]);
                onOuter = true;
                onSelf = true;
                var call4129 = callmethodChecked(call4128, "formatComments()rowClass()colspan", [1, 1, 1], var_o, string4126, new GraceNum(1));
                var opresult4132 = callmethodChecked(var_t, "++", [1], call4129);
                var_t = opresult4132;
                setLineNumber(1039);    // compilenode call
                onSelf = true;
                var call4133 = callmethodChecked(this, "classesSection", [0]);
                var call4134 = callmethodChecked(call4133, "addElement()withText", [1, 1], var_n, var_t);
                setLineNumber(1040);    // compilenode identifier
                return GraceFalse;
              } else {
                setLineNumber(1042);    // compilenode string
                var string4135 = new GraceString("</b>.");
                var call4137 = callmethodChecked(var_o, "name", [0]);
                var call4138 = callmethodChecked(call4137, "value", [0]);
                var string4140 = new GraceString("<span class='headline'><code><b>");
                var opresult4142 = callmethodChecked(string4140, "++", [1], call4138);
                var opresult4144 = callmethodChecked(opresult4142, "++", [1], string4135);
                var var_t = opresult4144;
                setLineNumber(1044);    // compilenode identifier
                var call4145 = callmethodChecked(var_m, "signature", [0]);
                var block4146 = new GraceBlock(this, 1044, 1);
                setLineNumber(1);    // compilenode identifier
                block4146.real = function(var_part) {
                  setLineNumber(1045);    // compilenode string
                  var string4147 = new GraceString("</b>");
                  var call4149 = callmethodChecked(var_part, "name", [0]);
                  var string4151 = new GraceString("<b>");
                  var opresult4153 = callmethodChecked(string4151, "++", [1], call4149);
                  var opresult4155 = callmethodChecked(opresult4153, "++", [1], string4147);
                  var opresult4158 = callmethodChecked(var_t, "++", [1], opresult4155);
                  var_t = opresult4158;
                  var if4159 = GraceDone;
                  setLineNumber(1046);    // compilenode identifier
                  var call4161 = callmethodChecked(var_part, "params", [0]);
                  var call4162 = callmethodChecked(call4161, "size", [0]);
                  var opresult4164 = callmethodChecked(call4162, ">", [1], new GraceNum(0));
                  if (Grace_isTrue(opresult4164)) {
                    setLineNumber(1047);    // compilenode string
                    var string4165 = new GraceString("(");
                    var opresult4168 = callmethodChecked(var_t, "++", [1], string4165);
                    var_t = opresult4168;
                    setLineNumber(1048);    // compilenode identifier
                    var call4169 = callmethodChecked(var_part, "params", [0]);
                    var block4170 = new GraceBlock(this, 1048, 1);
                    setLineNumber(1);    // compilenode identifier
                    block4170.real = function(var_param) {
                      var if4171 = GraceDone;
                      setLineNumber(1049);    // compilenode identifier
                      var call4173 = callmethodChecked(var_param, "dtype", [0]);
                      var opresult4175 = callmethodChecked(call4173, "\u2260", [1], GraceFalse);
                      if (Grace_isTrue(opresult4175)) {
                        setLineNumber(1050);    // compilenode identifier
                        var call4176 = callmethodChecked(var_param, "value", [0]);
                        var opresult4179 = callmethodChecked(var_t, "++", [1], call4176);
                        var_t = opresult4179;
                        setLineNumber(1051);    // compilenode identifier
                        var call4180 = callmethodChecked(var_param, "dtype", [0]);
                        var call4181 = callmethodChecked(call4180, "value", [0]);
                        onSelf = true;
                        var call4182 = callmethodChecked(this, "getTypeLink", [1], call4181);
                        var string4184 = new GraceString(":");
                        var opresult4187 = callmethodChecked(var_t, "++", [1], string4184);
                        var opresult4189 = callmethodChecked(opresult4187, "++", [1], call4182);
                        var_t = opresult4189;
                        if4171 = GraceDone;
                      } else {
                        setLineNumber(1053);    // compilenode identifier
                        var call4190 = callmethodChecked(var_param, "value", [0]);
                        var opresult4193 = callmethodChecked(var_t, "++", [1], call4190);
                        var_t = opresult4193;
                        if4171 = GraceDone;
                      }
                      var if4194 = GraceDone;
                      setLineNumber(1055);    // compilenode identifier
                      var call4195 = callmethodChecked(var_part, "params", [0]);
                      var call4196 = callmethodChecked(call4195, "size", [0]);
                      var call4197 = callmethodChecked(var_part, "params", [0]);
                      var call4198 = callmethodChecked(call4197, "at", [1], call4196);
                      var opresult4201 = callmethodChecked(var_param, "\u2260", [1], call4198);
                      var call4204 = callmethodChecked(var_part, "params", [0]);
                      var call4205 = callmethodChecked(call4204, "size", [0]);
                      var opresult4207 = callmethodChecked(call4205, ">", [1], new GraceNum(1));
                      var opresult4209 = callmethodChecked(opresult4207, "&&", [1], opresult4201);
                      if (Grace_isTrue(opresult4209)) {
                        setLineNumber(1056);    // compilenode string
                        var string4210 = new GraceString(", ");
                        var opresult4213 = callmethodChecked(var_t, "++", [1], string4210);
                        var_t = opresult4213;
                        if4194 = GraceDone;
                      }
                      return if4194;
                    };
                    var call4214 = callmethodChecked(var_prelude, "for()do", [1, 1], call4169, block4170);
                    setLineNumber(1059);    // compilenode string
                    var string4215 = new GraceString(")");
                    var opresult4218 = callmethodChecked(var_t, "++", [1], string4215);
                    var_t = opresult4218;
                    if4159 = GraceDone;
                  }
                  return if4159;
                };
                var call4219 = callmethodChecked(var_prelude, "for()do", [1, 1], call4145, block4146);
                var if4220 = GraceDone;
                setLineNumber(1063);    // compilenode identifier
                var call4222 = callmethodChecked(var_m, "dtype", [0]);
                var opresult4224 = callmethodChecked(call4222, "\u2260", [1], GraceFalse);
                if (Grace_isTrue(opresult4224)) {
                  setLineNumber(1064);    // compilenode string
                  var string4225 = new GraceString(" -> ");
                  var opresult4228 = callmethodChecked(var_t, "++", [1], string4225);
                  var_t = opresult4228;
                  var if4229 = GraceDone;
                  setLineNumber(1065);    // compilenode string
                  var string4230 = new GraceString("identifier");
                  var call4232 = callmethodChecked(var_m, "dtype", [0]);
                  var call4233 = callmethodChecked(call4232, "kind", [0]);
                  var opresult4235 = callmethodChecked(call4233, "==", [1], string4230);
                  if (Grace_isTrue(opresult4235)) {
                    setLineNumber(1066);    // compilenode identifier
                    var call4236 = callmethodChecked(var_o, "dtype", [0]);
                    var call4237 = callmethodChecked(call4236, "value", [0]);
                    onSelf = true;
                    var call4238 = callmethodChecked(this, "getTypeLink", [1], call4237);
                    var opresult4241 = callmethodChecked(var_t, "++", [1], call4238);
                    var_t = opresult4241;
                    if4229 = GraceDone;
                  } else {
                    var if4242 = GraceDone;
                    setLineNumber(1067);    // compilenode string
                    var string4243 = new GraceString("generic");
                    var call4245 = callmethodChecked(var_m, "dtype", [0]);
                    var call4246 = callmethodChecked(call4245, "kind", [0]);
                    var opresult4248 = callmethodChecked(call4246, "==", [1], string4243);
                    if (Grace_isTrue(opresult4248)) {
                      setLineNumber(1068);    // compilenode string
                      var string4249 = new GraceString("&lt;");
                      var call4251 = callmethodChecked(var_o, "dtype", [0]);
                      var call4252 = callmethodChecked(call4251, "value", [0]);
                      var call4253 = callmethodChecked(call4252, "value", [0]);
                      onSelf = true;
                      var call4254 = callmethodChecked(this, "getTypeLink", [1], call4253);
                      var opresult4257 = callmethodChecked(var_t, "++", [1], call4254);
                      var opresult4259 = callmethodChecked(opresult4257, "++", [1], string4249);
                      var_t = opresult4259;
                      setLineNumber(1069);    // compilenode block
                      var block4260 = new GraceBlock(this, 1069, 1);
                      setLineNumber(1);    // compilenode identifier
                      block4260.real = function(var_each) {
                        setLineNumber(1069);    // compilenode string
                        var string4261 = new GraceString("");
                        var call4263 = callmethodChecked(var_each, "value", [0]);
                        onSelf = true;
                        var call4264 = callmethodChecked(this, "getTypeLink", [1], call4263);
                        var string4266 = new GraceString("");
                        var string4269 = new GraceString("");
                        var opresult4271 = callmethodChecked(string4269, "++", [1], var_t);
                        var opresult4273 = callmethodChecked(opresult4271, "++", [1], string4266);
                        var opresult4275 = callmethodChecked(opresult4273, "++", [1], call4264);
                        var opresult4277 = callmethodChecked(opresult4275, "++", [1], string4261);
                        var_t = opresult4277;
                        return GraceDone;
                      };
                      var block4278 = new GraceBlock(this, 1069, 0);
                      block4278.real = function() {
                        var string4279 = new GraceString(", ");
                        var opresult4282 = callmethodChecked(var_t, "++", [1], string4279);
                        var_t = opresult4282;
                        return GraceDone;
                      };
                      var call4283 = callmethodChecked(var_m, "dtype", [0]);
                      var call4284 = callmethodChecked(call4283, "args", [0]);
                      var call4285 = callmethodChecked(call4284, "do()separatedBy", [1, 1], block4260, block4278);
                      setLineNumber(1070);    // compilenode string
                      var string4286 = new GraceString("&gt;");
                      var opresult4289 = callmethodChecked(var_t, "++", [1], string4286);
                      var_t = opresult4289;
                      if4242 = GraceDone;
                    }
                    if4229 = if4242;
                  }
                  if4220 = if4229;
                }
                setLineNumber(1074);    // compilenode string
                var string4290 = new GraceString("</code></span><hr />");
                var opresult4293 = callmethodChecked(var_t, "++", [1], string4290);
                var_t = opresult4293;
                setLineNumber(1075);    // compilenode string
                var string4294 = new GraceString("top-box-description");
                var call4295 = callmethodChecked(superDepth, "outer", [0]);
                onOuter = true;
                onSelf = true;
                var call4296 = callmethodChecked(call4295, "outer", [0]);
                onOuter = true;
                onSelf = true;
                var call4297 = callmethodChecked(call4296, "formatComments()rowClass()colspan", [1, 1, 1], var_o, string4294, new GraceNum(1));
                var opresult4300 = callmethodChecked(var_t, "++", [1], call4297);
                var_t = opresult4300;
                setLineNumber(1076);    // compilenode call
                onSelf = true;
                var call4301 = callmethodChecked(this, "topDescSection", [0]);
                var call4302 = callmethodChecked(call4301, "insert", [1], var_t);
                setLineNumber(1077);    // compilenode identifier
                return GraceTrue;
              }
              setLineNumber(995);    // return value
              if (!Grace_isTrue(callmethod(var_Boolean, "match", [1], if3924)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("result of method doClassMethod(1) does not have " + 
                          callmethod(var_Boolean, "asString", [0])._value + "."));
              return if3924;
            };
            func3921.paramCounts = [1];
            obj1973.methods["doClassMethod"] = func3921;
            func3921.definitionLine = 992;
            func3921.definitionModule = "gracedoc";
            var func4303 = function(argcv) {    // method visitDefDec(1)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_o = arguments[curarg];
              curarg++;
              if (argcv[0] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitDefDec(1)"));
              setModuleName("gracedoc");
              var if4304 = GraceDone;
              setLineNumber(1082);    // compilenode call
              onSelf = true;
              var call4306 = callmethodChecked(this, "isOnClassPage", [0]);
              var opresult4308 = callmethodChecked(call4306, "==", [1], GraceTrue);
              if (Grace_isTrue(opresult4308)) {
                var if4309 = GraceDone;
                setLineNumber(1083);    // compilenode identifier
                var call4310 = callmethodChecked(var_settings, "publicOnly", [0]);
                var call4311 = callmethodChecked(call4310, "prefix!", [0]);
                if (Grace_isTrue(call4311)) {
                  setLineNumber(1084);    // compilenode identifier
                  var call4312 = callmethodChecked(var_o, "name", [0]);
                  var call4313 = callmethodChecked(call4312, "value", [0]);
                  var var_n = call4313;
                  setLineNumber(1085);    // compilenode string
                  var string4314 = new GraceString("");
                  var call4316 = callmethodChecked(var_o, "name", [0]);
                  var call4317 = callmethodChecked(call4316, "value", [0]);
                  var string4319 = new GraceString("<tr class='placeholder'><td><code>def</code></td><td class='identifier-name'>");
                  var opresult4321 = callmethodChecked(string4319, "++", [1], call4317);
                  var opresult4323 = callmethodChecked(opresult4321, "++", [1], string4314);
                  var var_t = opresult4323;
                  setLineNumber(1086);    // compilenode string
                  var string4324 = new GraceString("</td><td><code>");
                  var opresult4327 = callmethodChecked(var_t, "++", [1], string4324);
                  var_t = opresult4327;
                  var if4328 = GraceDone;
                  setLineNumber(1087);    // compilenode identifier
                  var call4330 = callmethodChecked(var_o, "dtype", [0]);
                  var opresult4332 = callmethodChecked(call4330, "\u2260", [1], GraceFalse);
                  if (Grace_isTrue(opresult4332)) {
                    var if4333 = GraceDone;
                    setLineNumber(1088);    // compilenode string
                    var string4334 = new GraceString("identifier");
                    var call4336 = callmethodChecked(var_o, "dtype", [0]);
                    var call4337 = callmethodChecked(call4336, "kind", [0]);
                    var opresult4339 = callmethodChecked(call4337, "==", [1], string4334);
                    if (Grace_isTrue(opresult4339)) {
                      setLineNumber(1089);    // compilenode identifier
                      var call4340 = callmethodChecked(var_o, "dtype", [0]);
                      var call4341 = callmethodChecked(call4340, "value", [0]);
                      onSelf = true;
                      var call4342 = callmethodChecked(this, "getTypeLink", [1], call4341);
                      var opresult4345 = callmethodChecked(var_t, "++", [1], call4342);
                      var_t = opresult4345;
                      if4333 = GraceDone;
                    } else {
                      var if4346 = GraceDone;
                      setLineNumber(1090);    // compilenode string
                      var string4347 = new GraceString("generic");
                      var call4349 = callmethodChecked(var_o, "dtype", [0]);
                      var call4350 = callmethodChecked(call4349, "kind", [0]);
                      var opresult4352 = callmethodChecked(call4350, "==", [1], string4347);
                      if (Grace_isTrue(opresult4352)) {
                        setLineNumber(1091);    // compilenode string
                        var string4353 = new GraceString("&lt;");
                        var call4355 = callmethodChecked(var_o, "dtype", [0]);
                        var call4356 = callmethodChecked(call4355, "value", [0]);
                        var call4357 = callmethodChecked(call4356, "value", [0]);
                        onSelf = true;
                        var call4358 = callmethodChecked(this, "getTypeLink", [1], call4357);
                        var opresult4361 = callmethodChecked(var_t, "++", [1], call4358);
                        var opresult4363 = callmethodChecked(opresult4361, "++", [1], string4353);
                        var_t = opresult4363;
                        setLineNumber(1092);    // compilenode block
                        var block4364 = new GraceBlock(this, 1092, 1);
                        setLineNumber(1);    // compilenode identifier
                        block4364.real = function(var_each) {
                          setLineNumber(1092);    // compilenode string
                          var string4365 = new GraceString("");
                          var call4367 = callmethodChecked(var_each, "value", [0]);
                          onSelf = true;
                          var call4368 = callmethodChecked(this, "getTypeLink", [1], call4367);
                          var string4370 = new GraceString("");
                          var string4373 = new GraceString("");
                          var opresult4375 = callmethodChecked(string4373, "++", [1], var_t);
                          var opresult4377 = callmethodChecked(opresult4375, "++", [1], string4370);
                          var opresult4379 = callmethodChecked(opresult4377, "++", [1], call4368);
                          var opresult4381 = callmethodChecked(opresult4379, "++", [1], string4365);
                          var_t = opresult4381;
                          return GraceDone;
                        };
                        var block4382 = new GraceBlock(this, 1092, 0);
                        block4382.real = function() {
                          var string4383 = new GraceString(", ");
                          var opresult4386 = callmethodChecked(var_t, "++", [1], string4383);
                          var_t = opresult4386;
                          return GraceDone;
                        };
                        var call4387 = callmethodChecked(var_o, "dtype", [0]);
                        var call4388 = callmethodChecked(call4387, "args", [0]);
                        var call4389 = callmethodChecked(call4388, "do()separatedBy", [1, 1], block4364, block4382);
                        setLineNumber(1093);    // compilenode string
                        var string4390 = new GraceString("&gt;");
                        var opresult4393 = callmethodChecked(var_t, "++", [1], string4390);
                        var_t = opresult4393;
                        if4346 = GraceDone;
                      }
                      if4333 = if4346;
                    }
                    if4328 = if4333;
                  }
                  setLineNumber(1096);    // compilenode string
                  var string4394 = new GraceString("</code></td></tr>");
                  var opresult4397 = callmethodChecked(var_t, "++", [1], string4394);
                  var_t = opresult4397;
                  setLineNumber(1097);    // compilenode string
                  var string4398 = new GraceString("description");
                  var call4399 = callmethodChecked(superDepth, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call4400 = callmethodChecked(call4399, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call4401 = callmethodChecked(call4400, "formatComments()rowClass()colspan", [1, 1, 1], var_o, string4398, new GraceNum(3));
                  var opresult4404 = callmethodChecked(var_t, "++", [1], call4401);
                  var_t = opresult4404;
                  setLineNumber(1098);    // compilenode call
                  onSelf = true;
                  var call4405 = callmethodChecked(this, "fieldsSection", [0]);
                  var call4406 = callmethodChecked(call4405, "addElement()withText", [1, 1], var_n, var_t);
                  if4309 = call4406;
                } else {
                  var if4407 = GraceDone;
                  setLineNumber(1102);    // compilenode identifier
                  var call4408 = callmethodChecked(var_o, "isReadable", [0]);
                  if (Grace_isTrue(call4408)) {
                    setLineNumber(1104);    // compilenode identifier
                    var call4409 = callmethodChecked(var_o, "name", [0]);
                    var call4410 = callmethodChecked(call4409, "value", [0]);
                    var var_n = call4410;
                    setLineNumber(1105);    // compilenode string
                    var string4411 = new GraceString("");
                    var call4413 = callmethodChecked(var_o, "name", [0]);
                    var call4414 = callmethodChecked(call4413, "value", [0]);
                    var string4416 = new GraceString("<tr class='placeholder'><td class='identifier-name'>");
                    var opresult4418 = callmethodChecked(string4416, "++", [1], call4414);
                    var opresult4420 = callmethodChecked(opresult4418, "++", [1], string4411);
                    var var_t = opresult4420;
                    setLineNumber(1106);    // compilenode string
                    var string4421 = new GraceString("</td><td><code>");
                    var opresult4424 = callmethodChecked(var_t, "++", [1], string4421);
                    var_t = opresult4424;
                    var if4425 = GraceDone;
                    setLineNumber(1107);    // compilenode identifier
                    var call4427 = callmethodChecked(var_o, "dtype", [0]);
                    var opresult4429 = callmethodChecked(call4427, "\u2260", [1], GraceFalse);
                    if (Grace_isTrue(opresult4429)) {
                      var if4430 = GraceDone;
                      setLineNumber(1108);    // compilenode string
                      var string4431 = new GraceString("identifier");
                      var call4433 = callmethodChecked(var_o, "dtype", [0]);
                      var call4434 = callmethodChecked(call4433, "kind", [0]);
                      var opresult4436 = callmethodChecked(call4434, "==", [1], string4431);
                      if (Grace_isTrue(opresult4436)) {
                        setLineNumber(1109);    // compilenode identifier
                        var call4437 = callmethodChecked(var_o, "dtype", [0]);
                        var call4438 = callmethodChecked(call4437, "value", [0]);
                        onSelf = true;
                        var call4439 = callmethodChecked(this, "getTypeLink", [1], call4438);
                        var opresult4442 = callmethodChecked(var_t, "++", [1], call4439);
                        var_t = opresult4442;
                        if4430 = GraceDone;
                      } else {
                        var if4443 = GraceDone;
                        setLineNumber(1110);    // compilenode string
                        var string4444 = new GraceString("generic");
                        var call4446 = callmethodChecked(var_o, "dtype", [0]);
                        var call4447 = callmethodChecked(call4446, "kind", [0]);
                        var opresult4449 = callmethodChecked(call4447, "==", [1], string4444);
                        if (Grace_isTrue(opresult4449)) {
                          setLineNumber(1111);    // compilenode string
                          var string4450 = new GraceString("&lt;");
                          var call4452 = callmethodChecked(var_o, "dtype", [0]);
                          var call4453 = callmethodChecked(call4452, "value", [0]);
                          var call4454 = callmethodChecked(call4453, "value", [0]);
                          onSelf = true;
                          var call4455 = callmethodChecked(this, "getTypeLink", [1], call4454);
                          var opresult4458 = callmethodChecked(var_t, "++", [1], call4455);
                          var opresult4460 = callmethodChecked(opresult4458, "++", [1], string4450);
                          var_t = opresult4460;
                          setLineNumber(1112);    // compilenode block
                          var block4461 = new GraceBlock(this, 1112, 1);
                          setLineNumber(1);    // compilenode identifier
                          block4461.real = function(var_each) {
                            setLineNumber(1112);    // compilenode string
                            var string4462 = new GraceString("");
                            var call4464 = callmethodChecked(var_each, "value", [0]);
                            onSelf = true;
                            var call4465 = callmethodChecked(this, "getTypeLink", [1], call4464);
                            var string4467 = new GraceString("");
                            var string4470 = new GraceString("");
                            var opresult4472 = callmethodChecked(string4470, "++", [1], var_t);
                            var opresult4474 = callmethodChecked(opresult4472, "++", [1], string4467);
                            var opresult4476 = callmethodChecked(opresult4474, "++", [1], call4465);
                            var opresult4478 = callmethodChecked(opresult4476, "++", [1], string4462);
                            var_t = opresult4478;
                            return GraceDone;
                          };
                          var block4479 = new GraceBlock(this, 1112, 0);
                          block4479.real = function() {
                            var string4480 = new GraceString(", ");
                            var opresult4483 = callmethodChecked(var_t, "++", [1], string4480);
                            var_t = opresult4483;
                            return GraceDone;
                          };
                          var call4484 = callmethodChecked(var_o, "dtype", [0]);
                          var call4485 = callmethodChecked(call4484, "args", [0]);
                          var call4486 = callmethodChecked(call4485, "do()separatedBy", [1, 1], block4461, block4479);
                          setLineNumber(1113);    // compilenode string
                          var string4487 = new GraceString("&gt;");
                          var opresult4490 = callmethodChecked(var_t, "++", [1], string4487);
                          var_t = opresult4490;
                          if4443 = GraceDone;
                        }
                        if4430 = if4443;
                      }
                      if4425 = if4430;
                    }
                    setLineNumber(1116);    // compilenode string
                    var string4491 = new GraceString("</code></td></tr>");
                    var opresult4494 = callmethodChecked(var_t, "++", [1], string4491);
                    var_t = opresult4494;
                    setLineNumber(1117);    // compilenode string
                    var string4495 = new GraceString("description");
                    var call4496 = callmethodChecked(superDepth, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call4497 = callmethodChecked(call4496, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call4498 = callmethodChecked(call4497, "formatComments()rowClass()colspan", [1, 1, 1], var_o, string4495, new GraceNum(2));
                    var opresult4501 = callmethodChecked(var_t, "++", [1], call4498);
                    var_t = opresult4501;
                    setLineNumber(1118);    // compilenode call
                    onSelf = true;
                    var call4502 = callmethodChecked(this, "methodsSection", [0]);
                    var call4503 = callmethodChecked(call4502, "addElement()withText", [1, 1], var_n, var_t);
                    if4407 = call4503;
                  }
                  if4309 = if4407;
                }
                setLineNumber(1121);    // compilenode identifier
                return GraceFalse;
              } else {
                var if4504 = GraceDone;
                setLineNumber(1123);    // compilenode identifier
                var call4505 = callmethodChecked(var_settings, "publicOnly", [0]);
                var call4506 = callmethodChecked(call4505, "prefix!", [0]);
                if (Grace_isTrue(call4506)) {
                  setLineNumber(1124);    // compilenode identifier
                  var call4507 = callmethodChecked(var_o, "name", [0]);
                  var call4508 = callmethodChecked(call4507, "value", [0]);
                  var var_n = call4508;
                  setLineNumber(1125);    // compilenode string
                  var string4509 = new GraceString("");
                  var call4511 = callmethodChecked(var_o, "name", [0]);
                  var call4512 = callmethodChecked(call4511, "value", [0]);
                  var string4514 = new GraceString("<tr class='placeholder'><td><code>def</code></td><td class='identifier-name'>");
                  var opresult4516 = callmethodChecked(string4514, "++", [1], call4512);
                  var opresult4518 = callmethodChecked(opresult4516, "++", [1], string4509);
                  var var_t = opresult4518;
                  setLineNumber(1126);    // compilenode string
                  var string4519 = new GraceString("</td><td><code>");
                  var opresult4522 = callmethodChecked(var_t, "++", [1], string4519);
                  var_t = opresult4522;
                  var if4523 = GraceDone;
                  setLineNumber(1127);    // compilenode identifier
                  var call4525 = callmethodChecked(var_o, "dtype", [0]);
                  var opresult4527 = callmethodChecked(call4525, "\u2260", [1], GraceFalse);
                  if (Grace_isTrue(opresult4527)) {
                    var if4528 = GraceDone;
                    setLineNumber(1128);    // compilenode string
                    var string4529 = new GraceString("identifier");
                    var call4531 = callmethodChecked(var_o, "dtype", [0]);
                    var call4532 = callmethodChecked(call4531, "kind", [0]);
                    var opresult4534 = callmethodChecked(call4532, "==", [1], string4529);
                    if (Grace_isTrue(opresult4534)) {
                      setLineNumber(1129);    // compilenode identifier
                      var call4535 = callmethodChecked(var_o, "dtype", [0]);
                      var call4536 = callmethodChecked(call4535, "value", [0]);
                      onSelf = true;
                      var call4537 = callmethodChecked(this, "getTypeLink", [1], call4536);
                      var opresult4540 = callmethodChecked(var_t, "++", [1], call4537);
                      var_t = opresult4540;
                      if4528 = GraceDone;
                    } else {
                      var if4541 = GraceDone;
                      setLineNumber(1130);    // compilenode string
                      var string4542 = new GraceString("generic");
                      var call4544 = callmethodChecked(var_o, "dtype", [0]);
                      var call4545 = callmethodChecked(call4544, "kind", [0]);
                      var opresult4547 = callmethodChecked(call4545, "==", [1], string4542);
                      if (Grace_isTrue(opresult4547)) {
                        setLineNumber(1131);    // compilenode string
                        var string4548 = new GraceString("&lt;");
                        var call4550 = callmethodChecked(var_o, "dtype", [0]);
                        var call4551 = callmethodChecked(call4550, "value", [0]);
                        var call4552 = callmethodChecked(call4551, "value", [0]);
                        onSelf = true;
                        var call4553 = callmethodChecked(this, "getTypeLink", [1], call4552);
                        var opresult4556 = callmethodChecked(var_t, "++", [1], call4553);
                        var opresult4558 = callmethodChecked(opresult4556, "++", [1], string4548);
                        var_t = opresult4558;
                        setLineNumber(1132);    // compilenode block
                        var block4559 = new GraceBlock(this, 1132, 1);
                        setLineNumber(1);    // compilenode identifier
                        block4559.real = function(var_each) {
                          setLineNumber(1132);    // compilenode string
                          var string4560 = new GraceString("");
                          var call4562 = callmethodChecked(var_each, "value", [0]);
                          var string4564 = new GraceString("");
                          var string4567 = new GraceString("");
                          var opresult4569 = callmethodChecked(string4567, "++", [1], var_t);
                          var opresult4571 = callmethodChecked(opresult4569, "++", [1], string4564);
                          var opresult4573 = callmethodChecked(opresult4571, "++", [1], call4562);
                          var opresult4575 = callmethodChecked(opresult4573, "++", [1], string4560);
                          var_t = opresult4575;
                          return GraceDone;
                        };
                        var block4576 = new GraceBlock(this, 1132, 0);
                        block4576.real = function() {
                          var string4577 = new GraceString(", ");
                          var opresult4580 = callmethodChecked(var_t, "++", [1], string4577);
                          var_t = opresult4580;
                          return GraceDone;
                        };
                        var call4581 = callmethodChecked(var_o, "dtype", [0]);
                        var call4582 = callmethodChecked(call4581, "args", [0]);
                        var call4583 = callmethodChecked(call4582, "do()separatedBy", [1, 1], block4559, block4576);
                        setLineNumber(1133);    // compilenode string
                        var string4584 = new GraceString("&gt;");
                        var opresult4587 = callmethodChecked(var_t, "++", [1], string4584);
                        var_t = opresult4587;
                        if4541 = GraceDone;
                      }
                      if4528 = if4541;
                    }
                    if4523 = if4528;
                  }
                  setLineNumber(1136);    // compilenode string
                  var string4588 = new GraceString("</code></td></tr>");
                  var opresult4591 = callmethodChecked(var_t, "++", [1], string4588);
                  var_t = opresult4591;
                  setLineNumber(1137);    // compilenode string
                  var string4592 = new GraceString("description");
                  var call4593 = callmethodChecked(superDepth, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call4594 = callmethodChecked(call4593, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call4595 = callmethodChecked(call4594, "formatComments()rowClass()colspan", [1, 1, 1], var_o, string4592, new GraceNum(3));
                  var opresult4598 = callmethodChecked(var_t, "++", [1], call4595);
                  var_t = opresult4598;
                  setLineNumber(1138);    // compilenode call
                  onSelf = true;
                  var call4599 = callmethodChecked(this, "fieldsSection", [0]);
                  var call4600 = callmethodChecked(call4599, "addElement()withText", [1, 1], var_n, var_t);
                  if4504 = call4600;
                } else {
                  var if4601 = GraceDone;
                  setLineNumber(1142);    // compilenode identifier
                  var call4602 = callmethodChecked(var_o, "isReadable", [0]);
                  if (Grace_isTrue(call4602)) {
                    setLineNumber(1143);    // compilenode string
                    var string4603 = new GraceString("");
                    var call4605 = callmethodChecked(var_o, "name", [0]);
                    var call4606 = callmethodChecked(call4605, "value", [0]);
                    var string4608 = new GraceString("<tr class='placeholder'><td class='identifier-name'>");
                    var opresult4610 = callmethodChecked(string4608, "++", [1], call4606);
                    var opresult4612 = callmethodChecked(opresult4610, "++", [1], string4603);
                    var var_t = opresult4612;
                    setLineNumber(1144);    // compilenode identifier
                    var call4613 = callmethodChecked(var_o, "name", [0]);
                    var call4614 = callmethodChecked(call4613, "value", [0]);
                    var var_n = call4614;
                    setLineNumber(1145);    // compilenode string
                    var string4615 = new GraceString("</td><td><code>");
                    var opresult4618 = callmethodChecked(var_t, "++", [1], string4615);
                    var_t = opresult4618;
                    var if4619 = GraceDone;
                    setLineNumber(1146);    // compilenode identifier
                    var call4621 = callmethodChecked(var_o, "dtype", [0]);
                    var opresult4623 = callmethodChecked(call4621, "\u2260", [1], GraceFalse);
                    if (Grace_isTrue(opresult4623)) {
                      var if4624 = GraceDone;
                      setLineNumber(1147);    // compilenode string
                      var string4625 = new GraceString("identifier");
                      var call4627 = callmethodChecked(var_o, "dtype", [0]);
                      var call4628 = callmethodChecked(call4627, "kind", [0]);
                      var opresult4630 = callmethodChecked(call4628, "==", [1], string4625);
                      if (Grace_isTrue(opresult4630)) {
                        setLineNumber(1148);    // compilenode identifier
                        var call4631 = callmethodChecked(var_o, "dtype", [0]);
                        var call4632 = callmethodChecked(call4631, "value", [0]);
                        onSelf = true;
                        var call4633 = callmethodChecked(this, "getTypeLink", [1], call4632);
                        var opresult4636 = callmethodChecked(var_t, "++", [1], call4633);
                        var_t = opresult4636;
                        if4624 = GraceDone;
                      } else {
                        var if4637 = GraceDone;
                        setLineNumber(1149);    // compilenode string
                        var string4638 = new GraceString("generic");
                        var call4640 = callmethodChecked(var_o, "dtype", [0]);
                        var call4641 = callmethodChecked(call4640, "kind", [0]);
                        var opresult4643 = callmethodChecked(call4641, "==", [1], string4638);
                        if (Grace_isTrue(opresult4643)) {
                          setLineNumber(1150);    // compilenode string
                          var string4644 = new GraceString("&lt;");
                          var call4646 = callmethodChecked(var_o, "dtype", [0]);
                          var call4647 = callmethodChecked(call4646, "value", [0]);
                          var call4648 = callmethodChecked(call4647, "value", [0]);
                          onSelf = true;
                          var call4649 = callmethodChecked(this, "getTypeLink", [1], call4648);
                          var opresult4652 = callmethodChecked(var_t, "++", [1], call4649);
                          var opresult4654 = callmethodChecked(opresult4652, "++", [1], string4644);
                          var_t = opresult4654;
                          setLineNumber(1151);    // compilenode block
                          var block4655 = new GraceBlock(this, 1151, 1);
                          setLineNumber(1);    // compilenode identifier
                          block4655.real = function(var_each) {
                            setLineNumber(1151);    // compilenode string
                            var string4656 = new GraceString("");
                            var call4658 = callmethodChecked(var_each, "value", [0]);
                            onSelf = true;
                            var call4659 = callmethodChecked(this, "getTypeLink", [1], call4658);
                            var string4661 = new GraceString("");
                            var string4664 = new GraceString("");
                            var opresult4666 = callmethodChecked(string4664, "++", [1], var_t);
                            var opresult4668 = callmethodChecked(opresult4666, "++", [1], string4661);
                            var opresult4670 = callmethodChecked(opresult4668, "++", [1], call4659);
                            var opresult4672 = callmethodChecked(opresult4670, "++", [1], string4656);
                            var_t = opresult4672;
                            return GraceDone;
                          };
                          var block4673 = new GraceBlock(this, 1151, 0);
                          block4673.real = function() {
                            var string4674 = new GraceString(", ");
                            var opresult4677 = callmethodChecked(var_t, "++", [1], string4674);
                            var_t = opresult4677;
                            return GraceDone;
                          };
                          var call4678 = callmethodChecked(var_o, "dtype", [0]);
                          var call4679 = callmethodChecked(call4678, "args", [0]);
                          var call4680 = callmethodChecked(call4679, "do()separatedBy", [1, 1], block4655, block4673);
                          setLineNumber(1152);    // compilenode string
                          var string4681 = new GraceString("&gt;");
                          var opresult4684 = callmethodChecked(var_t, "++", [1], string4681);
                          var_t = opresult4684;
                          if4637 = GraceDone;
                        }
                        if4624 = if4637;
                      }
                      if4619 = if4624;
                    }
                    setLineNumber(1155);    // compilenode string
                    var string4685 = new GraceString("</code></td></tr>");
                    var opresult4688 = callmethodChecked(var_t, "++", [1], string4685);
                    var_t = opresult4688;
                    setLineNumber(1156);    // compilenode string
                    var string4689 = new GraceString("description");
                    var call4690 = callmethodChecked(superDepth, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call4691 = callmethodChecked(call4690, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call4692 = callmethodChecked(call4691, "formatComments()rowClass()colspan", [1, 1, 1], var_o, string4689, new GraceNum(2));
                    var opresult4695 = callmethodChecked(var_t, "++", [1], call4692);
                    var_t = opresult4695;
                    setLineNumber(1157);    // compilenode call
                    onSelf = true;
                    var call4696 = callmethodChecked(this, "methodsSection", [0]);
                    var call4697 = callmethodChecked(call4696, "addElement()withText", [1, 1], var_n, var_t);
                    if4601 = call4697;
                  }
                  if4504 = if4601;
                }
                setLineNumber(1160);    // compilenode identifier
                return GraceFalse;
              }
              setLineNumber(1082);    // return value
              if (!Grace_isTrue(callmethod(var_Boolean, "match", [1], if4304)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("result of method visitDefDec(1) does not have " + 
                          callmethod(var_Boolean, "asString", [0])._value + "."));
              return if4304;
            };
            func4303.paramCounts = [1];
            obj1973.methods["visitDefDec"] = func4303;
            func4303.definitionLine = 1081;
            func4303.definitionModule = "gracedoc";
            var func4698 = function(argcv) {    // method visitVarDec(1)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_o = arguments[curarg];
              curarg++;
              if (argcv[0] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitVarDec(1)"));
              setModuleName("gracedoc");
              var if4699 = GraceDone;
              setLineNumber(1165);    // compilenode call
              onSelf = true;
              var call4701 = callmethodChecked(this, "isOnClassPage", [0]);
              var opresult4703 = callmethodChecked(call4701, "==", [1], GraceTrue);
              if (Grace_isTrue(opresult4703)) {
                var if4704 = GraceDone;
                setLineNumber(1166);    // compilenode identifier
                var call4705 = callmethodChecked(var_settings, "publicOnly", [0]);
                var call4706 = callmethodChecked(call4705, "prefix!", [0]);
                if (Grace_isTrue(call4706)) {
                  setLineNumber(1167);    // compilenode identifier
                  var call4707 = callmethodChecked(var_o, "name", [0]);
                  var call4708 = callmethodChecked(call4707, "value", [0]);
                  var var_n = call4708;
                  setLineNumber(1168);    // compilenode string
                  var string4709 = new GraceString("");
                  var call4711 = callmethodChecked(var_o, "name", [0]);
                  var call4712 = callmethodChecked(call4711, "value", [0]);
                  var string4714 = new GraceString("<tr class='placeholder'><td><code>var</code></td><td class='identifier-name'>");
                  var opresult4716 = callmethodChecked(string4714, "++", [1], call4712);
                  var opresult4718 = callmethodChecked(opresult4716, "++", [1], string4709);
                  var var_t = opresult4718;
                  setLineNumber(1169);    // compilenode string
                  var string4719 = new GraceString("</td><td><code>");
                  var opresult4722 = callmethodChecked(var_t, "++", [1], string4719);
                  var_t = opresult4722;
                  var if4723 = GraceDone;
                  setLineNumber(1170);    // compilenode identifier
                  var call4725 = callmethodChecked(var_o, "dtype", [0]);
                  var opresult4727 = callmethodChecked(call4725, "\u2260", [1], GraceFalse);
                  if (Grace_isTrue(opresult4727)) {
                    setLineNumber(1171);    // compilenode string
                    var string4728 = new GraceString("");
                    var call4730 = callmethodChecked(var_o, "dtype", [0]);
                    var call4731 = callmethodChecked(call4730, "value", [0]);
                    onSelf = true;
                    var call4732 = callmethodChecked(this, "getTypeLink", [1], call4731);
                    var string4734 = new GraceString("");
                    var opresult4736 = callmethodChecked(string4734, "++", [1], call4732);
                    var opresult4738 = callmethodChecked(opresult4736, "++", [1], string4728);
                    var opresult4741 = callmethodChecked(var_t, "++", [1], opresult4738);
                    var_t = opresult4741;
                    if4723 = GraceDone;
                  }
                  setLineNumber(1173);    // compilenode string
                  var string4742 = new GraceString("</code></td></tr>");
                  var opresult4745 = callmethodChecked(var_t, "++", [1], string4742);
                  var_t = opresult4745;
                  setLineNumber(1174);    // compilenode string
                  var string4746 = new GraceString("description");
                  var call4747 = callmethodChecked(superDepth, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call4748 = callmethodChecked(call4747, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call4749 = callmethodChecked(call4748, "formatComments()rowClass()colspan", [1, 1, 1], var_o, string4746, new GraceNum(3));
                  var opresult4752 = callmethodChecked(var_t, "++", [1], call4749);
                  var_t = opresult4752;
                  setLineNumber(1175);    // compilenode call
                  onSelf = true;
                  var call4753 = callmethodChecked(this, "fieldsSection", [0]);
                  var call4754 = callmethodChecked(call4753, "addElement()withText", [1, 1], var_n, var_t);
                  if4704 = call4754;
                } else {
                  var if4755 = GraceDone;
                  setLineNumber(1177);    // compilenode identifier
                  var call4756 = callmethodChecked(var_o, "isReadable", [0]);
                  if (Grace_isTrue(call4756)) {
                    setLineNumber(1178);    // compilenode string
                    var string4757 = new GraceString("");
                    var call4759 = callmethodChecked(var_o, "name", [0]);
                    var call4760 = callmethodChecked(call4759, "value", [0]);
                    var string4762 = new GraceString("<tr class='placeholder'><td class='identifier-name'>");
                    var opresult4764 = callmethodChecked(string4762, "++", [1], call4760);
                    var opresult4766 = callmethodChecked(opresult4764, "++", [1], string4757);
                    var var_t = opresult4766;
                    setLineNumber(1179);    // compilenode identifier
                    var call4767 = callmethodChecked(var_o, "name", [0]);
                    var call4768 = callmethodChecked(call4767, "value", [0]);
                    var var_n = call4768;
                    setLineNumber(1180);    // compilenode string
                    var string4769 = new GraceString("</td><td>");
                    var opresult4772 = callmethodChecked(var_t, "++", [1], string4769);
                    var_t = opresult4772;
                    var if4773 = GraceDone;
                    setLineNumber(1181);    // compilenode identifier
                    var call4775 = callmethodChecked(var_o, "dtype", [0]);
                    var opresult4777 = callmethodChecked(call4775, "\u2260", [1], GraceFalse);
                    if (Grace_isTrue(opresult4777)) {
                      setLineNumber(1182);    // compilenode string
                      var string4778 = new GraceString("");
                      var call4780 = callmethodChecked(var_o, "dtype", [0]);
                      var call4781 = callmethodChecked(call4780, "value", [0]);
                      onSelf = true;
                      var call4782 = callmethodChecked(this, "getTypeLink", [1], call4781);
                      var string4784 = new GraceString("");
                      var opresult4786 = callmethodChecked(string4784, "++", [1], call4782);
                      var opresult4788 = callmethodChecked(opresult4786, "++", [1], string4778);
                      var opresult4791 = callmethodChecked(var_t, "++", [1], opresult4788);
                      var_t = opresult4791;
                      if4773 = GraceDone;
                    }
                    setLineNumber(1184);    // compilenode string
                    var string4792 = new GraceString("</code></td></tr>");
                    var opresult4795 = callmethodChecked(var_t, "++", [1], string4792);
                    var_t = opresult4795;
                    setLineNumber(1185);    // compilenode string
                    var string4796 = new GraceString("description");
                    var call4797 = callmethodChecked(superDepth, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call4798 = callmethodChecked(call4797, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call4799 = callmethodChecked(call4798, "formatComments()rowClass()colspan", [1, 1, 1], var_o, string4796, new GraceNum(2));
                    var opresult4802 = callmethodChecked(var_t, "++", [1], call4799);
                    var_t = opresult4802;
                    setLineNumber(1186);    // compilenode call
                    onSelf = true;
                    var call4803 = callmethodChecked(this, "methodsSection", [0]);
                    var call4804 = callmethodChecked(call4803, "addElement()withText", [1, 1], var_n, var_t);
                    if4755 = call4804;
                  }
                  var if4805 = GraceDone;
                  setLineNumber(1188);    // compilenode identifier
                  var call4806 = callmethodChecked(var_o, "isWritable", [0]);
                  if (Grace_isTrue(call4806)) {
                    setLineNumber(1189);    // compilenode string
                    var string4807 = new GraceString(":=</span>");
                    var call4809 = callmethodChecked(var_o, "name", [0]);
                    var call4810 = callmethodChecked(call4809, "value", [0]);
                    var string4812 = new GraceString("<tr class='placeholder'><td><code><span class='method-name'>");
                    var opresult4814 = callmethodChecked(string4812, "++", [1], call4810);
                    var opresult4816 = callmethodChecked(opresult4814, "++", [1], string4807);
                    var var_t = opresult4816;
                    setLineNumber(1190);    // compilenode string
                    var string4817 = new GraceString(":=");
                    var call4819 = callmethodChecked(var_o, "name", [0]);
                    var call4820 = callmethodChecked(call4819, "value", [0]);
                    var string4822 = new GraceString("");
                    var opresult4824 = callmethodChecked(string4822, "++", [1], call4820);
                    var opresult4826 = callmethodChecked(opresult4824, "++", [1], string4817);
                    var var_n = opresult4826;
                    var if4827 = GraceDone;
                    setLineNumber(1191);    // compilenode identifier
                    var call4829 = callmethodChecked(var_o, "dtype", [0]);
                    var opresult4831 = callmethodChecked(call4829, "\u2260", [1], GraceFalse);
                    if (Grace_isTrue(opresult4831)) {
                      setLineNumber(1192);    // compilenode string
                      var string4832 = new GraceString(")");
                      var call4834 = callmethodChecked(var_o, "dtype", [0]);
                      var call4835 = callmethodChecked(call4834, "value", [0]);
                      onSelf = true;
                      var call4836 = callmethodChecked(this, "getTypeLink", [1], call4835);
                      var string4838 = new GraceString("(_:");
                      var opresult4840 = callmethodChecked(string4838, "++", [1], call4836);
                      var opresult4842 = callmethodChecked(opresult4840, "++", [1], string4832);
                      var opresult4845 = callmethodChecked(var_t, "++", [1], opresult4842);
                      var_t = opresult4845;
                      if4827 = GraceDone;
                    }
                    setLineNumber(1194);    // compilenode string
                    var string4846 = new GraceString("</code></td><td><code>Done</code></td></tr>");
                    var opresult4849 = callmethodChecked(var_t, "++", [1], string4846);
                    var_t = opresult4849;
                    setLineNumber(1195);    // compilenode string
                    var string4850 = new GraceString("</td></tr>");
                    var call4852 = callmethodChecked(var_o, "name", [0]);
                    var call4853 = callmethodChecked(call4852, "value", [0]);
                    var string4855 = new GraceString("<tr class='description'><td colspan='2'>Updates ");
                    var opresult4857 = callmethodChecked(string4855, "++", [1], call4853);
                    var opresult4859 = callmethodChecked(opresult4857, "++", [1], string4850);
                    var opresult4862 = callmethodChecked(var_t, "++", [1], opresult4859);
                    var_t = opresult4862;
                    setLineNumber(1196);    // compilenode call
                    onSelf = true;
                    var call4863 = callmethodChecked(this, "methodsSection", [0]);
                    var call4864 = callmethodChecked(call4863, "addElement()withText", [1, 1], var_n, var_t);
                    if4805 = call4864;
                  }
                  if4704 = if4805;
                }
                setLineNumber(1199);    // compilenode identifier
                return GraceFalse;
              } else {
                var if4865 = GraceDone;
                setLineNumber(1201);    // compilenode identifier
                var call4866 = callmethodChecked(var_settings, "publicOnly", [0]);
                var call4867 = callmethodChecked(call4866, "prefix!", [0]);
                if (Grace_isTrue(call4867)) {
                  setLineNumber(1202);    // compilenode identifier
                  var call4868 = callmethodChecked(var_o, "name", [0]);
                  var call4869 = callmethodChecked(call4868, "value", [0]);
                  var var_n = call4869;
                  setLineNumber(1203);    // compilenode string
                  var string4870 = new GraceString("");
                  var call4872 = callmethodChecked(var_o, "name", [0]);
                  var call4873 = callmethodChecked(call4872, "value", [0]);
                  var string4875 = new GraceString("<tr class='placeholder'><td><code>var</code></td><td class='identifier-name'>");
                  var opresult4877 = callmethodChecked(string4875, "++", [1], call4873);
                  var opresult4879 = callmethodChecked(opresult4877, "++", [1], string4870);
                  var var_t = opresult4879;
                  setLineNumber(1204);    // compilenode string
                  var string4880 = new GraceString("</td><td><code>");
                  var opresult4883 = callmethodChecked(var_t, "++", [1], string4880);
                  var_t = opresult4883;
                  var if4884 = GraceDone;
                  setLineNumber(1205);    // compilenode identifier
                  var call4886 = callmethodChecked(var_o, "dtype", [0]);
                  var opresult4888 = callmethodChecked(call4886, "\u2260", [1], GraceFalse);
                  if (Grace_isTrue(opresult4888)) {
                    setLineNumber(1206);    // compilenode string
                    var string4889 = new GraceString("");
                    var call4891 = callmethodChecked(var_o, "dtype", [0]);
                    var call4892 = callmethodChecked(call4891, "value", [0]);
                    onSelf = true;
                    var call4893 = callmethodChecked(this, "getTypeLink", [1], call4892);
                    var string4895 = new GraceString("");
                    var opresult4897 = callmethodChecked(string4895, "++", [1], call4893);
                    var opresult4899 = callmethodChecked(opresult4897, "++", [1], string4889);
                    var opresult4902 = callmethodChecked(var_t, "++", [1], opresult4899);
                    var_t = opresult4902;
                    if4884 = GraceDone;
                  }
                  setLineNumber(1208);    // compilenode string
                  var string4903 = new GraceString("</code></td></tr>");
                  var opresult4906 = callmethodChecked(var_t, "++", [1], string4903);
                  var_t = opresult4906;
                  setLineNumber(1209);    // compilenode string
                  var string4907 = new GraceString("description");
                  var call4908 = callmethodChecked(superDepth, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call4909 = callmethodChecked(call4908, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call4910 = callmethodChecked(call4909, "formatComments()rowClass()colspan", [1, 1, 1], var_o, string4907, new GraceNum(3));
                  var opresult4913 = callmethodChecked(var_t, "++", [1], call4910);
                  var_t = opresult4913;
                  setLineNumber(1210);    // compilenode call
                  onSelf = true;
                  var call4914 = callmethodChecked(this, "fieldsSection", [0]);
                  var call4915 = callmethodChecked(call4914, "addElement()withText", [1, 1], var_n, var_t);
                  if4865 = call4915;
                } else {
                  var if4916 = GraceDone;
                  setLineNumber(1212);    // compilenode identifier
                  var call4917 = callmethodChecked(var_o, "isReadable", [0]);
                  if (Grace_isTrue(call4917)) {
                    setLineNumber(1213);    // compilenode identifier
                    var call4918 = callmethodChecked(var_o, "name", [0]);
                    var call4919 = callmethodChecked(call4918, "value", [0]);
                    var var_n = call4919;
                    setLineNumber(1214);    // compilenode string
                    var string4920 = new GraceString("");
                    var call4922 = callmethodChecked(var_o, "name", [0]);
                    var call4923 = callmethodChecked(call4922, "value", [0]);
                    var string4925 = new GraceString("<tr class='placeholder'><td class='identifier-name'>");
                    var opresult4927 = callmethodChecked(string4925, "++", [1], call4923);
                    var opresult4929 = callmethodChecked(opresult4927, "++", [1], string4920);
                    var var_t = opresult4929;
                    setLineNumber(1215);    // compilenode string
                    var string4930 = new GraceString("</td><td><code>");
                    var opresult4933 = callmethodChecked(var_t, "++", [1], string4930);
                    var_t = opresult4933;
                    var if4934 = GraceDone;
                    setLineNumber(1216);    // compilenode identifier
                    var call4936 = callmethodChecked(var_o, "dtype", [0]);
                    var opresult4938 = callmethodChecked(call4936, "\u2260", [1], GraceFalse);
                    if (Grace_isTrue(opresult4938)) {
                      setLineNumber(1217);    // compilenode string
                      var string4939 = new GraceString("");
                      var call4941 = callmethodChecked(var_o, "dtype", [0]);
                      var call4942 = callmethodChecked(call4941, "value", [0]);
                      onSelf = true;
                      var call4943 = callmethodChecked(this, "getTypeLink", [1], call4942);
                      var string4945 = new GraceString("");
                      var opresult4947 = callmethodChecked(string4945, "++", [1], call4943);
                      var opresult4949 = callmethodChecked(opresult4947, "++", [1], string4939);
                      var opresult4952 = callmethodChecked(var_t, "++", [1], opresult4949);
                      var_t = opresult4952;
                      if4934 = GraceDone;
                    }
                    setLineNumber(1219);    // compilenode string
                    var string4953 = new GraceString("</code></td></tr>");
                    var opresult4956 = callmethodChecked(var_t, "++", [1], string4953);
                    var_t = opresult4956;
                    setLineNumber(1220);    // compilenode string
                    var string4957 = new GraceString("description");
                    var call4958 = callmethodChecked(superDepth, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call4959 = callmethodChecked(call4958, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call4960 = callmethodChecked(call4959, "formatComments()rowClass()colspan", [1, 1, 1], var_o, string4957, new GraceNum(2));
                    var opresult4963 = callmethodChecked(var_t, "++", [1], call4960);
                    var_t = opresult4963;
                    setLineNumber(1221);    // compilenode call
                    onSelf = true;
                    var call4964 = callmethodChecked(this, "methodsSection", [0]);
                    var call4965 = callmethodChecked(call4964, "addElement()withText", [1, 1], var_n, var_t);
                    if4916 = call4965;
                  }
                  var if4966 = GraceDone;
                  setLineNumber(1223);    // compilenode identifier
                  var call4967 = callmethodChecked(var_o, "isWritable", [0]);
                  if (Grace_isTrue(call4967)) {
                    setLineNumber(1224);    // compilenode string
                    var string4968 = new GraceString(":=");
                    var call4970 = callmethodChecked(var_o, "name", [0]);
                    var call4971 = callmethodChecked(call4970, "value", [0]);
                    var string4973 = new GraceString("");
                    var opresult4975 = callmethodChecked(string4973, "++", [1], call4971);
                    var opresult4977 = callmethodChecked(opresult4975, "++", [1], string4968);
                    var var_n = opresult4977;
                    setLineNumber(1225);    // compilenode string
                    var string4978 = new GraceString(":=</span>");
                    var call4980 = callmethodChecked(var_o, "name", [0]);
                    var call4981 = callmethodChecked(call4980, "value", [0]);
                    var string4983 = new GraceString("<tr class='placeholder'><td><code><span class='method-name'>");
                    var opresult4985 = callmethodChecked(string4983, "++", [1], call4981);
                    var opresult4987 = callmethodChecked(opresult4985, "++", [1], string4978);
                    var var_t = opresult4987;
                    var if4988 = GraceDone;
                    setLineNumber(1226);    // compilenode identifier
                    var call4990 = callmethodChecked(var_o, "dtype", [0]);
                    var opresult4992 = callmethodChecked(call4990, "\u2260", [1], GraceFalse);
                    if (Grace_isTrue(opresult4992)) {
                      setLineNumber(1227);    // compilenode string
                      var string4993 = new GraceString(")");
                      var call4995 = callmethodChecked(var_o, "dtype", [0]);
                      var call4996 = callmethodChecked(call4995, "value", [0]);
                      onSelf = true;
                      var call4997 = callmethodChecked(this, "getTypeLink", [1], call4996);
                      var string4999 = new GraceString("(_:");
                      var opresult5001 = callmethodChecked(string4999, "++", [1], call4997);
                      var opresult5003 = callmethodChecked(opresult5001, "++", [1], string4993);
                      var opresult5006 = callmethodChecked(var_t, "++", [1], opresult5003);
                      var_t = opresult5006;
                      if4988 = GraceDone;
                    }
                    setLineNumber(1229);    // compilenode string
                    var string5007 = new GraceString("</code></td><td><code>Done</code></td></tr>");
                    var opresult5010 = callmethodChecked(var_t, "++", [1], string5007);
                    var_t = opresult5010;
                    setLineNumber(1230);    // compilenode string
                    var string5011 = new GraceString("</td></tr>");
                    var call5013 = callmethodChecked(var_o, "name", [0]);
                    var call5014 = callmethodChecked(call5013, "value", [0]);
                    var string5016 = new GraceString("<tr class='description'><td colspan='2'>Updates ");
                    var opresult5018 = callmethodChecked(string5016, "++", [1], call5014);
                    var opresult5020 = callmethodChecked(opresult5018, "++", [1], string5011);
                    var opresult5023 = callmethodChecked(var_t, "++", [1], opresult5020);
                    var_t = opresult5023;
                    setLineNumber(1231);    // compilenode call
                    onSelf = true;
                    var call5024 = callmethodChecked(this, "methodsSection", [0]);
                    var call5025 = callmethodChecked(call5024, "addElement()withText", [1, 1], var_n, var_t);
                    if4966 = call5025;
                  }
                  if4865 = if4966;
                }
                setLineNumber(1234);    // compilenode identifier
                return GraceFalse;
              }
              setLineNumber(1165);    // return value
              if (!Grace_isTrue(callmethod(var_Boolean, "match", [1], if4699)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("result of method visitVarDec(1) does not have " + 
                          callmethod(var_Boolean, "asString", [0])._value + "."));
              return if4699;
            };
            func4698.paramCounts = [1];
            obj1973.methods["visitVarDec"] = func4698;
            func4698.definitionLine = 1164;
            func4698.definitionModule = "gracedoc";
            var func5026 = function(argcv) {    // method visitInherits(1)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_o = arguments[curarg];
              curarg++;
              if (argcv[0] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitInherits(1)"));
              setModuleName("gracedoc");
              setLineNumber(1242);    // compilenode identifier
              return GraceTrue;
            };
            func5026.paramCounts = [1];
            obj1973.methods["visitInherits"] = func5026;
            func5026.definitionLine = 1238;
            func5026.definitionModule = "gracedoc";
            setLineNumber(315);    // compilenode identifier
            var call5027 = callmethodChecked(var_ast, "baseVisitor()object", [0, 1], this);
            obj1973.superobj = call5027;
            if (call5027.data) obj1973.data = call5027.data;
            if (call5027.hasOwnProperty('_value'))
                obj1973._value = call5027._value;
            setLineNumber(317);    // compilenode identifier
            obj1973.data["isOnClassPage"] = GraceFalse;
            var reader_gracedoc_isOnClassPage5028 = function() {
              return this.data["isOnClassPage"];
            };
            obj1973.methods["isOnClassPage"] = reader_gracedoc_isOnClassPage5028;
            obj1973.data["isOnClassPage"] = GraceFalse;
            var writer_gracedoc_isOnClassPage5028 = function(argcv, o) {
              this.data["isOnClassPage"] = o;
              return GraceDone;
            };
            obj1973.methods["isOnClassPage:="] = writer_gracedoc_isOnClassPage5028;
            reader_gracedoc_isOnClassPage5028.confidential = true;
            writer_gracedoc_isOnClassPage5028.confidential = true;
            obj1973.mutable = true;
            setLineNumber(318);    // compilenode identifier
            obj1973.data["isOnTypePage"] = GraceFalse;
            var reader_gracedoc_isOnTypePage5029 = function() {
              return this.data["isOnTypePage"];
            };
            obj1973.methods["isOnTypePage"] = reader_gracedoc_isOnTypePage5029;
            obj1973.data["isOnTypePage"] = GraceFalse;
            var writer_gracedoc_isOnTypePage5029 = function(argcv, o) {
              this.data["isOnTypePage"] = o;
              return GraceDone;
            };
            obj1973.methods["isOnTypePage:="] = writer_gracedoc_isOnTypePage5029;
            reader_gracedoc_isOnTypePage5029.confidential = true;
            writer_gracedoc_isOnTypePage5029.confidential = true;
            obj1973.mutable = true;
            var if5030 = GraceDone;
            setLineNumber(319);    // compilenode string
            var string5031 = new GraceString("class");
            var opresult5034 = callmethodChecked(var_pageType, "==", [1], string5031);
            if (Grace_isTrue(opresult5034)) {
              onSelf = true;
              var call5035 = callmethodChecked(this, "isOnClassPage:=", [1], GraceTrue);
              if5030 = call5035;
            } else {
              var if5036 = GraceDone;
              setLineNumber(320);    // compilenode string
              var string5037 = new GraceString("type");
              var opresult5040 = callmethodChecked(var_pageType, "==", [1], string5037);
              if (Grace_isTrue(opresult5040)) {
                onSelf = true;
                var call5041 = callmethodChecked(this, "isOnTypePage:=", [1], GraceTrue);
                if5036 = call5041;
              }
              if5030 = if5036;
            }
            var if5042 = GraceDone;
            setLineNumber(322);    // compilenode string
            var string5043 = new GraceString(".grace");
            var call5044 = callmethodChecked(var_in, "endsWith", [1], string5043);
            var call5045 = callmethodChecked(call5044, "not", [0]);
            if (Grace_isTrue(call5045)) {
              if5042 = var_in;
            } else {
              setLineNumber(323);    // compilenode identifier
              var call5047 = callmethodChecked(var_in, "size", [0]);
              var diff5049 = callmethodChecked(call5047, "-", [1], new GraceNum(6));
              var call5050 = callmethodChecked(var_in, "substringFrom()to", [1, 1], new GraceNum(0), diff5049);
              if5042 = call5050;
            }
            obj1973.data["pageName"] = if5042;
            var reader_gracedoc_pageName5051 = function() {
              return this.data["pageName"];
            };
            reader_gracedoc_pageName5051.def = true;
            reader_gracedoc_pageName5051.confidential = true;
            obj1973.methods["pageName"] = reader_gracedoc_pageName5051;
            var if5052 = GraceDone;
            setLineNumber(324);    // compilenode call
            onSelf = true;
            var call5053 = callmethodChecked(this, "isOnTypePage", [0]);
            if (Grace_isTrue(call5053)) {
              var string5054 = new GraceString("");
              onSelf = true;
              var call5056 = callmethodChecked(this, "pageName", [0]);
              var string5058 = new GraceString("Type: ");
              var opresult5060 = callmethodChecked(string5058, "++", [1], call5056);
              var opresult5062 = callmethodChecked(opresult5060, "++", [1], string5054);
              if5052 = opresult5062;
            } else {
              var if5063 = GraceDone;
              setLineNumber(325);    // compilenode call
              onSelf = true;
              var call5064 = callmethodChecked(this, "isOnClassPage", [0]);
              if (Grace_isTrue(call5064)) {
                var string5065 = new GraceString("");
                onSelf = true;
                var call5067 = callmethodChecked(this, "pageName", [0]);
                var string5069 = new GraceString("Class: ");
                var opresult5071 = callmethodChecked(string5069, "++", [1], call5067);
                var opresult5073 = callmethodChecked(opresult5071, "++", [1], string5065);
                if5063 = opresult5073;
              } else {
                setLineNumber(326);    // compilenode string
                var string5074 = new GraceString("");
                onSelf = true;
                var call5076 = callmethodChecked(this, "pageName", [0]);
                var string5078 = new GraceString("Module: ");
                var opresult5080 = callmethodChecked(string5078, "++", [1], call5076);
                var opresult5082 = callmethodChecked(opresult5080, "++", [1], string5074);
                if5063 = opresult5082;
              }
              if5052 = if5063;
            }
            obj1973.data["title"] = if5052;
            var reader_gracedoc_title5083 = function() {
              return this.data["title"];
            };
            reader_gracedoc_title5083.def = true;
            reader_gracedoc_title5083.confidential = true;
            obj1973.methods["title"] = reader_gracedoc_title5083;
            obj1973.data["headerSection"] = undefined;
            var reader_gracedoc_headerSection5084 = function() {
              return this.data["headerSection"];
            };
            obj1973.methods["headerSection"] = reader_gracedoc_headerSection5084;
            obj1973.data["headerSection"] = undefined;
            var writer_gracedoc_headerSection5084 = function(argcv, o) {
              this.data["headerSection"] = o;
              return GraceDone;
            };
            obj1973.methods["headerSection:="] = writer_gracedoc_headerSection5084;
            reader_gracedoc_headerSection5084.confidential = true;
            writer_gracedoc_headerSection5084.confidential = true;
            obj1973.mutable = true;
            obj1973.data["methodsSection"] = undefined;
            var reader_gracedoc_methodsSection5085 = function() {
              return this.data["methodsSection"];
            };
            obj1973.methods["methodsSection"] = reader_gracedoc_methodsSection5085;
            obj1973.data["methodsSection"] = undefined;
            var writer_gracedoc_methodsSection5085 = function(argcv, o) {
              this.data["methodsSection"] = o;
              return GraceDone;
            };
            obj1973.methods["methodsSection:="] = writer_gracedoc_methodsSection5085;
            reader_gracedoc_methodsSection5085.confidential = true;
            writer_gracedoc_methodsSection5085.confidential = true;
            obj1973.mutable = true;
            obj1973.data["typesSection"] = undefined;
            var reader_gracedoc_typesSection5086 = function() {
              return this.data["typesSection"];
            };
            obj1973.methods["typesSection"] = reader_gracedoc_typesSection5086;
            obj1973.data["typesSection"] = undefined;
            var writer_gracedoc_typesSection5086 = function(argcv, o) {
              this.data["typesSection"] = o;
              return GraceDone;
            };
            obj1973.methods["typesSection:="] = writer_gracedoc_typesSection5086;
            reader_gracedoc_typesSection5086.confidential = true;
            writer_gracedoc_typesSection5086.confidential = true;
            obj1973.mutable = true;
            obj1973.data["fieldsSection"] = undefined;
            var reader_gracedoc_fieldsSection5087 = function() {
              return this.data["fieldsSection"];
            };
            obj1973.methods["fieldsSection"] = reader_gracedoc_fieldsSection5087;
            obj1973.data["fieldsSection"] = undefined;
            var writer_gracedoc_fieldsSection5087 = function(argcv, o) {
              this.data["fieldsSection"] = o;
              return GraceDone;
            };
            obj1973.methods["fieldsSection:="] = writer_gracedoc_fieldsSection5087;
            reader_gracedoc_fieldsSection5087.confidential = true;
            writer_gracedoc_fieldsSection5087.confidential = true;
            obj1973.mutable = true;
            obj1973.data["classesSection"] = undefined;
            var reader_gracedoc_classesSection5088 = function() {
              return this.data["classesSection"];
            };
            obj1973.methods["classesSection"] = reader_gracedoc_classesSection5088;
            obj1973.data["classesSection"] = undefined;
            var writer_gracedoc_classesSection5088 = function(argcv, o) {
              this.data["classesSection"] = o;
              return GraceDone;
            };
            obj1973.methods["classesSection:="] = writer_gracedoc_classesSection5088;
            reader_gracedoc_classesSection5088.confidential = true;
            writer_gracedoc_classesSection5088.confidential = true;
            obj1973.mutable = true;
            obj1973.data["footerSection"] = undefined;
            var reader_gracedoc_footerSection5089 = function() {
              return this.data["footerSection"];
            };
            obj1973.methods["footerSection"] = reader_gracedoc_footerSection5089;
            obj1973.data["footerSection"] = undefined;
            var writer_gracedoc_footerSection5089 = function(argcv, o) {
              this.data["footerSection"] = o;
              return GraceDone;
            };
            obj1973.methods["footerSection:="] = writer_gracedoc_footerSection5089;
            reader_gracedoc_footerSection5089.confidential = true;
            writer_gracedoc_footerSection5089.confidential = true;
            obj1973.mutable = true;
            obj1973.data["methodtypesSection"] = undefined;
            var reader_gracedoc_methodtypesSection5090 = function() {
              return this.data["methodtypesSection"];
            };
            obj1973.methods["methodtypesSection"] = reader_gracedoc_methodtypesSection5090;
            obj1973.data["methodtypesSection"] = undefined;
            var writer_gracedoc_methodtypesSection5090 = function(argcv, o) {
              this.data["methodtypesSection"] = o;
              return GraceDone;
            };
            obj1973.methods["methodtypesSection:="] = writer_gracedoc_methodtypesSection5090;
            reader_gracedoc_methodtypesSection5090.confidential = true;
            writer_gracedoc_methodtypesSection5090.confidential = true;
            obj1973.mutable = true;
            obj1973.data["topDescSection"] = undefined;
            var reader_gracedoc_topDescSection5091 = function() {
              return this.data["topDescSection"];
            };
            obj1973.methods["topDescSection"] = reader_gracedoc_topDescSection5091;
            obj1973.data["topDescSection"] = undefined;
            var writer_gracedoc_topDescSection5091 = function(argcv, o) {
              this.data["topDescSection"] = o;
              return GraceDone;
            };
            obj1973.methods["topDescSection:="] = writer_gracedoc_topDescSection5091;
            reader_gracedoc_topDescSection5091.confidential = true;
            writer_gracedoc_topDescSection5091.confidential = true;
            obj1973.mutable = true;
            var if5092 = GraceDone;
            setLineNumber(337);    // compilenode identifier
            var call5094 = callmethodChecked(var_settings, "verbosity", [0]);
            var opresult5096 = callmethodChecked(call5094, ">", [1], new GraceNum(1));
            if (Grace_isTrue(opresult5096)) {
              var string5097 = new GraceString(")");
              var call5099 = callmethodChecked(var_sys, "elapsedTime", [0]);
              var string5101 = new GraceString(" - graceDocVisitor created... (");
              onSelf = true;
              var call5103 = callmethodChecked(this, "title", [0]);
              var string5105 = new GraceString("On ");
              var opresult5107 = callmethodChecked(string5105, "++", [1], call5103);
              var opresult5109 = callmethodChecked(opresult5107, "++", [1], string5101);
              var opresult5111 = callmethodChecked(opresult5109, "++", [1], call5099);
              var opresult5113 = callmethodChecked(opresult5111, "++", [1], string5097);
              var call5114 = Grace_print(opresult5113);
              if5092 = call5114;
            }
            var if5115 = GraceDone;
            setLineNumber(339);    // compilenode call
            onSelf = true;
            var call5116 = callmethodChecked(this, "isOnTypePage", [0]);
            onSelf = true;
            var call5118 = callmethodChecked(this, "isOnClassPage", [0]);
            var opresult5120 = callmethodChecked(call5118, "||", [1], call5116);
            if (Grace_isTrue(opresult5120)) {
              if5115 = var_dir;
            } else {
              onSelf = true;
              var call5121 = callmethodChecked(this, "pageName", [0]);
              if5115 = call5121;
            }
            obj1973.data["outdir"] = if5115;
            var reader_gracedoc_outdir5122 = function() {
              return this.data["outdir"];
            };
            reader_gracedoc_outdir5122.def = true;
            reader_gracedoc_outdir5122.confidential = true;
            obj1973.methods["outdir"] = reader_gracedoc_outdir5122;
            setLineNumber(340);    // compilenode call
            onSelf = true;
            var call5123 = callmethodChecked(this, "buildTemplate", [0]);
            superDepth = origSuperDepth;
          };
          obj_init_1973.apply(obj1973, []);
          return obj1973;
        };
        func1972.paramCounts = [1, 1, 1];
        obj1970.methods["createFrom()outTo()as"] = func1972;
        func1972.definitionLine = 314;
        func1972.definitionModule = "gracedoc";
          var func5124 = function(argcv) {    // method createFrom(1     )outTo(1     )as(1     )()object
            var curarg = 1;
            var var_in = arguments[curarg];
            curarg++;
            var var_dir = arguments[curarg];
            curarg++;
            var var_pageType = arguments[curarg];
            curarg++;
            var inheritingObject = arguments[curarg++];
            // Start argument processing
            curarg = 1;
            curarg++;
            curarg++;
            curarg++;
            // End argument processing
            setModuleName("gracedoc");
            var returnTarget = invocationCount;
            invocationCount++;
            var obj5125 = Grace_allocObject(null, "createFrom()outTo()as");
            obj5125.definitionModule = "gracedoc";
            obj5125.definitionLine = 314;
            var inho5125 = inheritingObject;
            while (inho5125.superobj) inho5125 = inho5125.superobj;
            inho5125.superobj = obj5125;
            obj5125.data = inheritingObject.data;
            if (inheritingObject.hasOwnProperty('_value'))
              obj5125._value = inheritingObject._value;
            obj5125.outer = this;
            var reader_gracedoc_outer5126 = function() {
              return this.outer;
            };
            obj5125.methods["outer"] = reader_gracedoc_outer5126;
            var obj_init_5125 = function() {
              var origSuperDepth = superDepth;
              superDepth = obj5125;
              var func5127 = function(argcv) {    // method getTypeLink(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_v = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for getTypeLink(1)"));
                // Start argument checking
                curarg = 1;
                setLineNumber(342);    // compilenode identifier
                if (!Grace_isTrue(callmethod(var_String, "match",  [1], arguments[curarg])))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("argument 1 in getTypeLink (arg list 1), which corresponds to parameter v, does not have " + 
                            callmethod(var_String, "asString", [0])._value + "."));
                curarg++;
                // End argument checking
                setModuleName("gracedoc");
                setLineNumber(343);    // compilenode string
                var string5128 = new GraceString(".html");
                var string5131 = new GraceString("");
                var opresult5133 = callmethodChecked(string5131, "++", [1], var_v);
                var opresult5135 = callmethodChecked(opresult5133, "++", [1], string5128);
                var var_filename = opresult5135;
                setLineNumber(344);    // compilenode string
                var string5136 = new GraceString("<a href='");
                var var_out = string5136;
                var if5137 = GraceDone;
                setLineNumber(346);    // compilenode string
                var string5138 = new GraceString("");
                var string5141 = new GraceString("/types/");
                onSelf = true;
                var call5143 = callmethodChecked(this, "outdir", [0]);
                var string5145 = new GraceString("/");
                var call5147 = callmethodChecked(var_settings, "outputdir", [0]);
                var string5149 = new GraceString("");
                var opresult5151 = callmethodChecked(string5149, "++", [1], call5147);
                var opresult5153 = callmethodChecked(opresult5151, "++", [1], string5145);
                var opresult5155 = callmethodChecked(opresult5153, "++", [1], call5143);
                var opresult5157 = callmethodChecked(opresult5155, "++", [1], string5141);
                var opresult5159 = callmethodChecked(opresult5157, "++", [1], var_filename);
                var opresult5161 = callmethodChecked(opresult5159, "++", [1], string5138);
                var call5162 = callmethodChecked(var_io, "exists", [1], opresult5161);
                if (Grace_isTrue(call5162)) {
                  var if5163 = GraceDone;
                  setLineNumber(347);    // compilenode call
                  onSelf = true;
                  var call5164 = callmethodChecked(this, "isOnTypePage", [0]);
                  if (Grace_isTrue(call5164)) {
                    setLineNumber(348);    // compilenode string
                    var string5165 = new GraceString("");
                    var string5168 = new GraceString("");
                    var opresult5170 = callmethodChecked(string5168, "++", [1], var_filename);
                    var opresult5172 = callmethodChecked(opresult5170, "++", [1], string5165);
                    var opresult5175 = callmethodChecked(var_out, "++", [1], opresult5172);
                    var_out = opresult5175;
                    if5163 = GraceDone;
                  } else {
                    var if5176 = GraceDone;
                    setLineNumber(349);    // compilenode call
                    onSelf = true;
                    var call5177 = callmethodChecked(this, "isOnClassPage", [0]);
                    if (Grace_isTrue(call5177)) {
                      setLineNumber(350);    // compilenode string
                      var string5178 = new GraceString("");
                      var string5181 = new GraceString("../types/");
                      var opresult5183 = callmethodChecked(string5181, "++", [1], var_filename);
                      var opresult5185 = callmethodChecked(opresult5183, "++", [1], string5178);
                      var opresult5188 = callmethodChecked(var_out, "++", [1], opresult5185);
                      var_out = opresult5188;
                      if5176 = GraceDone;
                    } else {
                      setLineNumber(352);    // compilenode string
                      var string5189 = new GraceString("");
                      var string5192 = new GraceString("types/");
                      var opresult5194 = callmethodChecked(string5192, "++", [1], var_filename);
                      var opresult5196 = callmethodChecked(opresult5194, "++", [1], string5189);
                      var opresult5199 = callmethodChecked(var_out, "++", [1], opresult5196);
                      var_out = opresult5199;
                      if5176 = GraceDone;
                    }
                    if5163 = if5176;
                  }
                  if5137 = if5163;
                } else {
                  var if5200 = GraceDone;
                  setLineNumber(355);    // compilenode string
                  var string5201 = new GraceString("");
                  var string5204 = new GraceString("/imported/types/");
                  var call5206 = callmethodChecked(var_settings, "outputdir", [0]);
                  var string5208 = new GraceString("");
                  var opresult5210 = callmethodChecked(string5208, "++", [1], call5206);
                  var opresult5212 = callmethodChecked(opresult5210, "++", [1], string5204);
                  var opresult5214 = callmethodChecked(opresult5212, "++", [1], var_filename);
                  var opresult5216 = callmethodChecked(opresult5214, "++", [1], string5201);
                  var call5217 = callmethodChecked(var_io, "exists", [1], opresult5216);
                  if (Grace_isTrue(call5217)) {
                    var if5218 = GraceDone;
                    setLineNumber(356);    // compilenode call
                    onSelf = true;
                    var call5219 = callmethodChecked(this, "isOnClassPage", [0]);
                    onSelf = true;
                    var call5221 = callmethodChecked(this, "isOnTypePage", [0]);
                    var opresult5223 = callmethodChecked(call5221, "||", [1], call5219);
                    if (Grace_isTrue(opresult5223)) {
                      setLineNumber(357);    // compilenode string
                      var string5224 = new GraceString("");
                      var string5227 = new GraceString("../../imported/types/");
                      var opresult5229 = callmethodChecked(string5227, "++", [1], var_filename);
                      var opresult5231 = callmethodChecked(opresult5229, "++", [1], string5224);
                      var opresult5234 = callmethodChecked(var_out, "++", [1], opresult5231);
                      var_out = opresult5234;
                      if5218 = GraceDone;
                    } else {
                      setLineNumber(359);    // compilenode string
                      var string5235 = new GraceString("");
                      var string5238 = new GraceString("../imported/types/");
                      var opresult5240 = callmethodChecked(string5238, "++", [1], var_filename);
                      var opresult5242 = callmethodChecked(opresult5240, "++", [1], string5235);
                      var opresult5245 = callmethodChecked(var_out, "++", [1], opresult5242);
                      var_out = opresult5245;
                      if5218 = GraceDone;
                    }
                    if5200 = if5218;
                  } else {
                    var if5246 = GraceDone;
                    setLineNumber(362);    // compilenode string
                    var string5247 = new GraceString("");
                    var string5250 = new GraceString("/gracelib/types/");
                    var call5252 = callmethodChecked(var_settings, "outputdir", [0]);
                    var string5254 = new GraceString("");
                    var opresult5256 = callmethodChecked(string5254, "++", [1], call5252);
                    var opresult5258 = callmethodChecked(opresult5256, "++", [1], string5250);
                    var opresult5260 = callmethodChecked(opresult5258, "++", [1], var_filename);
                    var opresult5262 = callmethodChecked(opresult5260, "++", [1], string5247);
                    var call5263 = callmethodChecked(var_io, "exists", [1], opresult5262);
                    if (Grace_isTrue(call5263)) {
                      var if5264 = GraceDone;
                      setLineNumber(363);    // compilenode call
                      onSelf = true;
                      var call5265 = callmethodChecked(this, "isOnClassPage", [0]);
                      onSelf = true;
                      var call5267 = callmethodChecked(this, "isOnTypePage", [0]);
                      var opresult5269 = callmethodChecked(call5267, "||", [1], call5265);
                      if (Grace_isTrue(opresult5269)) {
                        setLineNumber(364);    // compilenode string
                        var string5270 = new GraceString("");
                        var string5273 = new GraceString("../../gracelib/types/");
                        var opresult5275 = callmethodChecked(string5273, "++", [1], var_filename);
                        var opresult5277 = callmethodChecked(opresult5275, "++", [1], string5270);
                        var opresult5280 = callmethodChecked(var_out, "++", [1], opresult5277);
                        var_out = opresult5280;
                        if5264 = GraceDone;
                      } else {
                        setLineNumber(366);    // compilenode string
                        var string5281 = new GraceString("");
                        var string5284 = new GraceString("../gracelib/types/");
                        var opresult5286 = callmethodChecked(string5284, "++", [1], var_filename);
                        var opresult5288 = callmethodChecked(opresult5286, "++", [1], string5281);
                        var opresult5291 = callmethodChecked(var_out, "++", [1], opresult5288);
                        var_out = opresult5291;
                        if5264 = GraceDone;
                      }
                      if5246 = if5264;
                    } else {
                      setLineNumber(369);    // compilenode string
                      var string5292 = new GraceString("");
                      var var_dots = string5292;
                      var if5293 = GraceDone;
                      setLineNumber(370);    // compilenode call
                      onSelf = true;
                      var call5294 = callmethodChecked(this, "isOnTypePage", [0]);
                      onSelf = true;
                      var call5296 = callmethodChecked(this, "isOnClassPage", [0]);
                      var opresult5298 = callmethodChecked(call5296, "||", [1], call5294);
                      if (Grace_isTrue(opresult5298)) {
                        setLineNumber(371);    // compilenode string
                        var string5299 = new GraceString("../../");
                        var_dots = string5299;
                        if5293 = GraceDone;
                      } else {
                        setLineNumber(373);    // compilenode string
                        var string5300 = new GraceString("../");
                        var_dots = string5300;
                        if5293 = GraceDone;
                      }
                      setLineNumber(375);    // compilenode string
                      var string5301 = new GraceString("404.html");
                      var string5304 = new GraceString("");
                      var opresult5306 = callmethodChecked(string5304, "++", [1], var_dots);
                      var opresult5308 = callmethodChecked(opresult5306, "++", [1], string5301);
                      var opresult5311 = callmethodChecked(var_out, "++", [1], opresult5308);
                      var_out = opresult5311;
                      if5246 = GraceDone;
                    }
                    if5200 = if5246;
                  }
                  if5137 = if5200;
                }
                setLineNumber(377);    // compilenode string
                var string5312 = new GraceString("</a>");
                var string5315 = new GraceString("'>");
                var opresult5317 = callmethodChecked(string5315, "++", [1], var_v);
                var opresult5319 = callmethodChecked(opresult5317, "++", [1], string5312);
                var opresult5322 = callmethodChecked(var_out, "++", [1], opresult5319);
                var_out = opresult5322;
                setLineNumber(378);    // compilenode identifier
                return var_out;
              };
              func5127.paramTypes = [];
              func5127.paramTypes.push([type_String, "v"]);
              func5127.confidential = true;
              func5127.paramCounts = [1];
              obj5125.methods["getTypeLink"] = func5127;
              func5127.definitionLine = 342;
              func5127.definitionModule = "gracedoc";
              var func5323 = function(argcv) {    // method getClassLink(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_c = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for getClassLink(1)"));
                // Start argument checking
                curarg = 1;
                setLineNumber(381);    // compilenode identifier
                if (!Grace_isTrue(callmethod(var_String, "match",  [1], arguments[curarg])))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("argument 1 in getClassLink (arg list 1), which corresponds to parameter c, does not have " + 
                            callmethod(var_String, "asString", [0])._value + "."));
                curarg++;
                // End argument checking
                setModuleName("gracedoc");
                setLineNumber(382);    // compilenode string
                var string5324 = new GraceString(".html");
                var string5327 = new GraceString("");
                var opresult5329 = callmethodChecked(string5327, "++", [1], var_c);
                var opresult5331 = callmethodChecked(opresult5329, "++", [1], string5324);
                var var_filename = opresult5331;
                setLineNumber(383);    // compilenode string
                var string5332 = new GraceString("<a href='");
                var var_out = string5332;
                var if5333 = GraceDone;
                setLineNumber(385);    // compilenode string
                var string5334 = new GraceString("");
                var string5337 = new GraceString("/classes/");
                onSelf = true;
                var call5339 = callmethodChecked(this, "outdir", [0]);
                var string5341 = new GraceString("/");
                var call5343 = callmethodChecked(var_settings, "outputdir", [0]);
                var string5345 = new GraceString("");
                var opresult5347 = callmethodChecked(string5345, "++", [1], call5343);
                var opresult5349 = callmethodChecked(opresult5347, "++", [1], string5341);
                var opresult5351 = callmethodChecked(opresult5349, "++", [1], call5339);
                var opresult5353 = callmethodChecked(opresult5351, "++", [1], string5337);
                var opresult5355 = callmethodChecked(opresult5353, "++", [1], var_filename);
                var opresult5357 = callmethodChecked(opresult5355, "++", [1], string5334);
                var call5358 = callmethodChecked(var_io, "exists", [1], opresult5357);
                if (Grace_isTrue(call5358)) {
                  var if5359 = GraceDone;
                  setLineNumber(386);    // compilenode call
                  onSelf = true;
                  var call5360 = callmethodChecked(this, "isOnClassPage", [0]);
                  if (Grace_isTrue(call5360)) {
                    setLineNumber(387);    // compilenode string
                    var string5361 = new GraceString("");
                    var string5364 = new GraceString("");
                    var opresult5366 = callmethodChecked(string5364, "++", [1], var_filename);
                    var opresult5368 = callmethodChecked(opresult5366, "++", [1], string5361);
                    var opresult5371 = callmethodChecked(var_out, "++", [1], opresult5368);
                    var_out = opresult5371;
                    if5359 = GraceDone;
                  } else {
                    var if5372 = GraceDone;
                    setLineNumber(388);    // compilenode call
                    onSelf = true;
                    var call5373 = callmethodChecked(this, "isOnTypePage", [0]);
                    if (Grace_isTrue(call5373)) {
                      setLineNumber(389);    // compilenode string
                      var string5374 = new GraceString("");
                      var string5377 = new GraceString("../classes/");
                      var opresult5379 = callmethodChecked(string5377, "++", [1], var_filename);
                      var opresult5381 = callmethodChecked(opresult5379, "++", [1], string5374);
                      var opresult5384 = callmethodChecked(var_out, "++", [1], opresult5381);
                      var_out = opresult5384;
                      if5372 = GraceDone;
                    } else {
                      setLineNumber(391);    // compilenode string
                      var string5385 = new GraceString("");
                      var string5388 = new GraceString("classes/");
                      var opresult5390 = callmethodChecked(string5388, "++", [1], var_filename);
                      var opresult5392 = callmethodChecked(opresult5390, "++", [1], string5385);
                      var opresult5395 = callmethodChecked(var_out, "++", [1], opresult5392);
                      var_out = opresult5395;
                      if5372 = GraceDone;
                    }
                    if5359 = if5372;
                  }
                  if5333 = if5359;
                } else {
                  var if5396 = GraceDone;
                  setLineNumber(394);    // compilenode string
                  var string5397 = new GraceString("");
                  var string5400 = new GraceString("/imported/classes/");
                  var call5402 = callmethodChecked(var_settings, "outputdir", [0]);
                  var string5404 = new GraceString("");
                  var opresult5406 = callmethodChecked(string5404, "++", [1], call5402);
                  var opresult5408 = callmethodChecked(opresult5406, "++", [1], string5400);
                  var opresult5410 = callmethodChecked(opresult5408, "++", [1], var_filename);
                  var opresult5412 = callmethodChecked(opresult5410, "++", [1], string5397);
                  var call5413 = callmethodChecked(var_io, "exists", [1], opresult5412);
                  if (Grace_isTrue(call5413)) {
                    var if5414 = GraceDone;
                    setLineNumber(395);    // compilenode call
                    onSelf = true;
                    var call5415 = callmethodChecked(this, "isOnClassPage", [0]);
                    onSelf = true;
                    var call5417 = callmethodChecked(this, "isOnTypePage", [0]);
                    var opresult5419 = callmethodChecked(call5417, "||", [1], call5415);
                    if (Grace_isTrue(opresult5419)) {
                      setLineNumber(396);    // compilenode string
                      var string5420 = new GraceString("");
                      var string5423 = new GraceString("../../imported/classes/");
                      var opresult5425 = callmethodChecked(string5423, "++", [1], var_filename);
                      var opresult5427 = callmethodChecked(opresult5425, "++", [1], string5420);
                      var opresult5430 = callmethodChecked(var_out, "++", [1], opresult5427);
                      var_out = opresult5430;
                      if5414 = GraceDone;
                    } else {
                      setLineNumber(398);    // compilenode string
                      var string5431 = new GraceString("");
                      var string5434 = new GraceString("../imported/classes/");
                      var opresult5436 = callmethodChecked(string5434, "++", [1], var_filename);
                      var opresult5438 = callmethodChecked(opresult5436, "++", [1], string5431);
                      var opresult5441 = callmethodChecked(var_out, "++", [1], opresult5438);
                      var_out = opresult5441;
                      if5414 = GraceDone;
                    }
                    if5396 = if5414;
                  } else {
                    var if5442 = GraceDone;
                    setLineNumber(401);    // compilenode string
                    var string5443 = new GraceString("");
                    var string5446 = new GraceString("/gracelib/classes/");
                    var call5448 = callmethodChecked(var_settings, "outputdir", [0]);
                    var string5450 = new GraceString("");
                    var opresult5452 = callmethodChecked(string5450, "++", [1], call5448);
                    var opresult5454 = callmethodChecked(opresult5452, "++", [1], string5446);
                    var opresult5456 = callmethodChecked(opresult5454, "++", [1], var_filename);
                    var opresult5458 = callmethodChecked(opresult5456, "++", [1], string5443);
                    var call5459 = callmethodChecked(var_io, "exists", [1], opresult5458);
                    if (Grace_isTrue(call5459)) {
                      var if5460 = GraceDone;
                      setLineNumber(402);    // compilenode call
                      onSelf = true;
                      var call5461 = callmethodChecked(this, "isOnClassPage", [0]);
                      onSelf = true;
                      var call5463 = callmethodChecked(this, "isOnTypePage", [0]);
                      var opresult5465 = callmethodChecked(call5463, "||", [1], call5461);
                      if (Grace_isTrue(opresult5465)) {
                        setLineNumber(403);    // compilenode string
                        var string5466 = new GraceString("");
                        var string5469 = new GraceString("../../gracelib/classes/");
                        var opresult5471 = callmethodChecked(string5469, "++", [1], var_filename);
                        var opresult5473 = callmethodChecked(opresult5471, "++", [1], string5466);
                        var opresult5476 = callmethodChecked(var_out, "++", [1], opresult5473);
                        var_out = opresult5476;
                        if5460 = GraceDone;
                      } else {
                        setLineNumber(405);    // compilenode string
                        var string5477 = new GraceString("");
                        var string5480 = new GraceString("../gracelib/classes/");
                        var opresult5482 = callmethodChecked(string5480, "++", [1], var_filename);
                        var opresult5484 = callmethodChecked(opresult5482, "++", [1], string5477);
                        var opresult5487 = callmethodChecked(var_out, "++", [1], opresult5484);
                        var_out = opresult5487;
                        if5460 = GraceDone;
                      }
                      if5442 = if5460;
                    } else {
                      setLineNumber(408);    // compilenode string
                      var string5488 = new GraceString("");
                      var var_dots = string5488;
                      var if5489 = GraceDone;
                      setLineNumber(409);    // compilenode call
                      onSelf = true;
                      var call5490 = callmethodChecked(this, "isOnTypePage", [0]);
                      onSelf = true;
                      var call5492 = callmethodChecked(this, "isOnClassPage", [0]);
                      var opresult5494 = callmethodChecked(call5492, "||", [1], call5490);
                      if (Grace_isTrue(opresult5494)) {
                        setLineNumber(410);    // compilenode string
                        var string5495 = new GraceString("../../");
                        var_dots = string5495;
                        if5489 = GraceDone;
                      } else {
                        setLineNumber(412);    // compilenode string
                        var string5496 = new GraceString("../");
                        var_dots = string5496;
                        if5489 = GraceDone;
                      }
                      setLineNumber(414);    // compilenode string
                      var string5497 = new GraceString("404.html");
                      var string5500 = new GraceString("");
                      var opresult5502 = callmethodChecked(string5500, "++", [1], var_dots);
                      var opresult5504 = callmethodChecked(opresult5502, "++", [1], string5497);
                      var opresult5507 = callmethodChecked(var_out, "++", [1], opresult5504);
                      var_out = opresult5507;
                      if5442 = GraceDone;
                    }
                    if5396 = if5442;
                  }
                  if5333 = if5396;
                }
                setLineNumber(416);    // compilenode string
                var string5508 = new GraceString("</a>");
                var string5511 = new GraceString("'>");
                var opresult5513 = callmethodChecked(string5511, "++", [1], var_c);
                var opresult5515 = callmethodChecked(opresult5513, "++", [1], string5508);
                var opresult5518 = callmethodChecked(var_out, "++", [1], opresult5515);
                var_out = opresult5518;
                setLineNumber(417);    // compilenode identifier
                return var_out;
              };
              func5323.paramTypes = [];
              func5323.paramTypes.push([type_String, "c"]);
              func5323.confidential = true;
              func5323.paramCounts = [1];
              obj5125.methods["getClassLink"] = func5323;
              func5323.definitionLine = 381;
              func5323.definitionModule = "gracedoc";
              var func5519 = function(argcv) {    // method buildTemplate
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                if (argcv[0] !== 0)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for buildTemplate"));
                setModuleName("gracedoc");
                setLineNumber(421);    // compilenode num
                var var_cursor = new GraceNum(0);
                setLineNumber(422);    // compilenode string
                var string5520 = new GraceString(" -- https://github.com/reid47/gracedoc -->\n");
                var call5522 = callmethodChecked(var_settings, "version", [0]);
                var string5524 = new GraceString("<!-- generated by Gracedoc, v");
                var opresult5526 = callmethodChecked(string5524, "++", [1], call5522);
                var opresult5528 = callmethodChecked(opresult5526, "++", [1], string5520);
                var var_out = opresult5528;
                setLineNumber(423);    // compilenode string
                var string5529 = new GraceString("<!DOCTYPE html>\n<html>");
                var opresult5532 = callmethodChecked(var_out, "++", [1], string5529);
                var_out = opresult5532;
                setLineNumber(424);    // compilenode string
                var string5533 = new GraceString("<head>");
                var opresult5536 = callmethodChecked(var_out, "++", [1], string5533);
                var_out = opresult5536;
                setLineNumber(425);    // compilenode string
                var string5537 = new GraceString(" | GraceDocs</title>");
                onSelf = true;
                var call5539 = callmethodChecked(this, "title", [0]);
                var string5541 = new GraceString("<title>");
                var opresult5543 = callmethodChecked(string5541, "++", [1], call5539);
                var opresult5545 = callmethodChecked(opresult5543, "++", [1], string5537);
                var opresult5548 = callmethodChecked(var_out, "++", [1], opresult5545);
                var_out = opresult5548;
                setLineNumber(426);    // compilenode string
                var string5549 = new GraceString("<meta charset=\"UTF-8\" />");
                var opresult5552 = callmethodChecked(var_out, "++", [1], string5549);
                var_out = opresult5552;
                setLineNumber(427);    // compilenode vardec
                var var_cssDir;
                var if5553 = GraceDone;
                setLineNumber(428);    // compilenode call
                onSelf = true;
                var call5554 = callmethodChecked(this, "isOnTypePage", [0]);
                onSelf = true;
                var call5556 = callmethodChecked(this, "isOnClassPage", [0]);
                var opresult5558 = callmethodChecked(call5556, "||", [1], call5554);
                if (Grace_isTrue(opresult5558)) {
                  var string5559 = new GraceString("../../gracedoc.css");
                  var_cssDir = string5559;
                  if5553 = GraceDone;
                } else {
                  setLineNumber(429);    // compilenode string
                  var string5560 = new GraceString("../gracedoc.css");
                  var_cssDir = string5560;
                  if5553 = GraceDone;
                }
                setLineNumber(430);    // compilenode string
                var string5561 = new GraceString("\" />");
                var string5564 = new GraceString("<link rel=\"stylesheet\" href=\"");
                var opresult5566 = callmethodChecked(string5564, "++", [1], var_cssDir);
                var opresult5568 = callmethodChecked(opresult5566, "++", [1], string5561);
                var opresult5571 = callmethodChecked(var_out, "++", [1], opresult5568);
                var_out = opresult5571;
                setLineNumber(431);    // compilenode string
                var string5572 = new GraceString("</head>");
                var opresult5575 = callmethodChecked(var_out, "++", [1], string5572);
                var_out = opresult5575;
                setLineNumber(432);    // compilenode string
                var string5576 = new GraceString("<body>");
                var opresult5579 = callmethodChecked(var_out, "++", [1], string5576);
                var_out = opresult5579;
                setLineNumber(433);    // compilenode string
                var string5580 = new GraceString("");
                onSelf = true;
                var call5582 = callmethodChecked(this, "title", [0]);
                var string5584 = new GraceString("<div class='header'><span class='header-left'>");
                var opresult5586 = callmethodChecked(string5584, "++", [1], call5582);
                var opresult5588 = callmethodChecked(opresult5586, "++", [1], string5580);
                var opresult5591 = callmethodChecked(var_out, "++", [1], opresult5588);
                var_out = opresult5591;
                setLineNumber(434);    // compilenode identifier
                var call5592 = callmethodChecked(var_out, "size", [0]);
                var_cursor = call5592;
                setLineNumber(435);    // compilenode string
                var string5593 = new GraceString("</span><span class='header-right'>GraceDocs</span></div>");
                var opresult5596 = callmethodChecked(var_out, "++", [1], string5593);
                var_out = opresult5596;
                setLineNumber(436);    // compilenode string
                var string5597 = new GraceString("<div class='container'>");
                var opresult5600 = callmethodChecked(var_out, "++", [1], string5597);
                var_out = opresult5600;
                setLineNumber(437);    // compilenode identifier
                var call5601 = callmethodChecked(var_section, "withTemplate()andCursorAt", [1, 1], var_out, var_cursor);
                onSelf = true;
                var call5602 = callmethodChecked(this, "headerSection:=", [1], call5601);
                setLineNumber(439);    // compilenode num
                var_cursor = new GraceNum(0);
                setLineNumber(440);    // compilenode string
                var string5603 = new GraceString("<section id='top-description'>");
                var_out = string5603;
                setLineNumber(441);    // compilenode string
                var string5604 = new GraceString("<div class='top-box'>");
                var opresult5607 = callmethodChecked(var_out, "++", [1], string5604);
                var_out = opresult5607;
                setLineNumber(442);    // compilenode identifier
                var call5608 = callmethodChecked(var_out, "size", [0]);
                var_cursor = call5608;
                setLineNumber(443);    // compilenode string
                var string5609 = new GraceString("</div>");
                var opresult5612 = callmethodChecked(var_out, "++", [1], string5609);
                var_out = opresult5612;
                setLineNumber(444);    // compilenode string
                var string5613 = new GraceString("</section>");
                var opresult5616 = callmethodChecked(var_out, "++", [1], string5613);
                var_out = opresult5616;
                setLineNumber(445);    // compilenode identifier
                var call5617 = callmethodChecked(var_section, "withTemplate()andCursorAt", [1, 1], var_out, var_cursor);
                onSelf = true;
                var call5618 = callmethodChecked(this, "topDescSection:=", [1], call5617);
                setLineNumber(447);    // compilenode num
                var_cursor = new GraceNum(0);
                setLineNumber(448);    // compilenode string
                var string5619 = new GraceString("<section id='fields'>");
                var_out = string5619;
                setLineNumber(449);    // compilenode string
                var string5620 = new GraceString("<h4>Fields</h4>");
                var opresult5623 = callmethodChecked(var_out, "++", [1], string5620);
                var_out = opresult5623;
                setLineNumber(450);    // compilenode string
                var string5624 = new GraceString("<table>");
                var opresult5627 = callmethodChecked(var_out, "++", [1], string5624);
                var_out = opresult5627;
                setLineNumber(451);    // compilenode string
                var string5628 = new GraceString("<tr><th></th><th>Field name</th><th>Type (if given)</th></tr>");
                var opresult5631 = callmethodChecked(var_out, "++", [1], string5628);
                var_out = opresult5631;
                setLineNumber(452);    // compilenode identifier
                var call5632 = callmethodChecked(var_out, "size", [0]);
                var_cursor = call5632;
                setLineNumber(453);    // compilenode string
                var string5633 = new GraceString("</table>");
                var opresult5636 = callmethodChecked(var_out, "++", [1], string5633);
                var_out = opresult5636;
                setLineNumber(454);    // compilenode string
                var string5637 = new GraceString("</section>");
                var opresult5640 = callmethodChecked(var_out, "++", [1], string5637);
                var_out = opresult5640;
                setLineNumber(455);    // compilenode identifier
                var call5641 = callmethodChecked(var_section, "withTemplate()andCursorAt", [1, 1], var_out, var_cursor);
                onSelf = true;
                var call5642 = callmethodChecked(this, "fieldsSection:=", [1], call5641);
                setLineNumber(457);    // compilenode num
                var_cursor = new GraceNum(0);
                setLineNumber(458);    // compilenode string
                var string5643 = new GraceString("<section id='methodtypes'>");
                var_out = string5643;
                setLineNumber(459);    // compilenode string
                var string5644 = new GraceString("<h4>Added methods</h4>");
                var opresult5647 = callmethodChecked(var_out, "++", [1], string5644);
                var_out = opresult5647;
                setLineNumber(460);    // compilenode string
                var string5648 = new GraceString("<table>");
                var opresult5651 = callmethodChecked(var_out, "++", [1], string5648);
                var_out = opresult5651;
                setLineNumber(461);    // compilenode string
                var string5652 = new GraceString("<tr><th>Method signature</th><th>Return type</th></tr>");
                var opresult5655 = callmethodChecked(var_out, "++", [1], string5652);
                var_out = opresult5655;
                setLineNumber(462);    // compilenode identifier
                var call5656 = callmethodChecked(var_out, "size", [0]);
                var_cursor = call5656;
                setLineNumber(463);    // compilenode string
                var string5657 = new GraceString("</table>");
                var opresult5660 = callmethodChecked(var_out, "++", [1], string5657);
                var_out = opresult5660;
                setLineNumber(464);    // compilenode string
                var string5661 = new GraceString("</section>");
                var opresult5664 = callmethodChecked(var_out, "++", [1], string5661);
                var_out = opresult5664;
                setLineNumber(465);    // compilenode identifier
                var call5665 = callmethodChecked(var_section, "withTemplate()andCursorAt", [1, 1], var_out, var_cursor);
                onSelf = true;
                var call5666 = callmethodChecked(this, "methodtypesSection:=", [1], call5665);
                setLineNumber(467);    // compilenode num
                var_cursor = new GraceNum(0);
                setLineNumber(468);    // compilenode string
                var string5667 = new GraceString("<section id='types'>");
                var_out = string5667;
                setLineNumber(469);    // compilenode string
                var string5668 = new GraceString("<h4>Types</h4>");
                var opresult5671 = callmethodChecked(var_out, "++", [1], string5668);
                var_out = opresult5671;
                setLineNumber(470);    // compilenode string
                var string5672 = new GraceString("<table>");
                var opresult5675 = callmethodChecked(var_out, "++", [1], string5672);
                var_out = opresult5675;
                setLineNumber(471);    // compilenode string
                var string5676 = new GraceString("<tr><th>Type name</th></tr>");
                var opresult5679 = callmethodChecked(var_out, "++", [1], string5676);
                var_out = opresult5679;
                setLineNumber(472);    // compilenode identifier
                var call5680 = callmethodChecked(var_out, "size", [0]);
                var_cursor = call5680;
                setLineNumber(473);    // compilenode string
                var string5681 = new GraceString("</table>");
                var opresult5684 = callmethodChecked(var_out, "++", [1], string5681);
                var_out = opresult5684;
                setLineNumber(474);    // compilenode string
                var string5685 = new GraceString("</section>");
                var opresult5688 = callmethodChecked(var_out, "++", [1], string5685);
                var_out = opresult5688;
                setLineNumber(475);    // compilenode identifier
                var call5689 = callmethodChecked(var_section, "withTemplate()andCursorAt", [1, 1], var_out, var_cursor);
                onSelf = true;
                var call5690 = callmethodChecked(this, "typesSection:=", [1], call5689);
                setLineNumber(477);    // compilenode num
                var_cursor = new GraceNum(0);
                setLineNumber(478);    // compilenode string
                var string5691 = new GraceString("<section id='classes'>");
                var_out = string5691;
                setLineNumber(479);    // compilenode string
                var string5692 = new GraceString("<h4>Classes</h4>");
                var opresult5695 = callmethodChecked(var_out, "++", [1], string5692);
                var_out = opresult5695;
                setLineNumber(480);    // compilenode string
                var string5696 = new GraceString("<table>");
                var opresult5699 = callmethodChecked(var_out, "++", [1], string5696);
                var_out = opresult5699;
                setLineNumber(481);    // compilenode string
                var string5700 = new GraceString("<tr><th>Class name & constructor</th></tr>");
                var opresult5703 = callmethodChecked(var_out, "++", [1], string5700);
                var_out = opresult5703;
                setLineNumber(482);    // compilenode identifier
                var call5704 = callmethodChecked(var_out, "size", [0]);
                var_cursor = call5704;
                setLineNumber(483);    // compilenode string
                var string5705 = new GraceString("</table>");
                var opresult5708 = callmethodChecked(var_out, "++", [1], string5705);
                var_out = opresult5708;
                setLineNumber(484);    // compilenode string
                var string5709 = new GraceString("</section>");
                var opresult5712 = callmethodChecked(var_out, "++", [1], string5709);
                var_out = opresult5712;
                setLineNumber(485);    // compilenode identifier
                var call5713 = callmethodChecked(var_section, "withTemplate()andCursorAt", [1, 1], var_out, var_cursor);
                onSelf = true;
                var call5714 = callmethodChecked(this, "classesSection:=", [1], call5713);
                setLineNumber(487);    // compilenode num
                var_cursor = new GraceNum(0);
                setLineNumber(488);    // compilenode string
                var string5715 = new GraceString("<section id='methods'>");
                var_out = string5715;
                setLineNumber(489);    // compilenode string
                var string5716 = new GraceString("<h4>Methods</h4>");
                var opresult5719 = callmethodChecked(var_out, "++", [1], string5716);
                var_out = opresult5719;
                setLineNumber(490);    // compilenode string
                var string5720 = new GraceString("<table>");
                var opresult5723 = callmethodChecked(var_out, "++", [1], string5720);
                var_out = opresult5723;
                setLineNumber(491);    // compilenode string
                var string5724 = new GraceString("<tr><th>Method signature</th><th>Return type</th></tr>");
                var opresult5727 = callmethodChecked(var_out, "++", [1], string5724);
                var_out = opresult5727;
                setLineNumber(492);    // compilenode identifier
                var call5728 = callmethodChecked(var_out, "size", [0]);
                var_cursor = call5728;
                setLineNumber(493);    // compilenode string
                var string5729 = new GraceString("</table>");
                var opresult5732 = callmethodChecked(var_out, "++", [1], string5729);
                var_out = opresult5732;
                setLineNumber(494);    // compilenode string
                var string5733 = new GraceString("</section>");
                var opresult5736 = callmethodChecked(var_out, "++", [1], string5733);
                var_out = opresult5736;
                setLineNumber(495);    // compilenode identifier
                var call5737 = callmethodChecked(var_section, "withTemplate()andCursorAt", [1, 1], var_out, var_cursor);
                onSelf = true;
                var call5738 = callmethodChecked(this, "methodsSection:=", [1], call5737);
                setLineNumber(497);    // compilenode num
                var_cursor = new GraceNum(0);
                setLineNumber(498);    // compilenode string
                var string5739 = new GraceString("</div></body>");
                var_out = string5739;
                setLineNumber(499);    // compilenode string
                var string5740 = new GraceString("</html>");
                var opresult5743 = callmethodChecked(var_out, "++", [1], string5740);
                var_out = opresult5743;
                setLineNumber(500);    // compilenode identifier
                var call5744 = callmethodChecked(var_section, "withTemplate()andCursorAt", [1, 1], var_out, var_cursor);
                onSelf = true;
                var call5745 = callmethodChecked(this, "footerSection:=", [1], call5744);
                return call5745;
              };
              func5519.confidential = true;
              func5519.paramCounts = [0];
              obj5125.methods["buildTemplate"] = func5519;
              func5519.definitionLine = 420;
              func5519.definitionModule = "gracedoc";
              var func5746 = function(argcv) {    // method build404
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                if (argcv[0] !== 0)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for build404"));
                setModuleName("gracedoc");
                setLineNumber(504);    // compilenode string
                var string5747 = new GraceString(" -- https://github.com/reid47/gracedoc -->\n");
                var call5749 = callmethodChecked(var_settings, "version", [0]);
                var string5751 = new GraceString("<!-- generated by Gracedoc, v");
                var opresult5753 = callmethodChecked(string5751, "++", [1], call5749);
                var opresult5755 = callmethodChecked(opresult5753, "++", [1], string5747);
                var var_out = opresult5755;
                setLineNumber(505);    // compilenode string
                var string5756 = new GraceString("<!DOCTYPE html>\n<html>");
                var opresult5759 = callmethodChecked(var_out, "++", [1], string5756);
                var_out = opresult5759;
                setLineNumber(506);    // compilenode string
                var string5760 = new GraceString("<head><title>404 - Page not found | GraceDocs</title></head>");
                var opresult5763 = callmethodChecked(var_out, "++", [1], string5760);
                var_out = opresult5763;
                setLineNumber(507);    // compilenode string
                var string5764 = new GraceString("<body><div id='message-404'>404 - Page not found</div></body>");
                var opresult5767 = callmethodChecked(var_out, "++", [1], string5764);
                var_out = opresult5767;
                setLineNumber(508);    // compilenode string
                var string5768 = new GraceString("</html>");
                var opresult5771 = callmethodChecked(var_out, "++", [1], string5768);
                var_out = opresult5771;
                setLineNumber(509);    // compilenode string
                var string5772 = new GraceString("/404.html");
                var call5774 = callmethodChecked(var_settings, "outputdir", [0]);
                var string5776 = new GraceString("");
                var opresult5778 = callmethodChecked(string5776, "++", [1], call5774);
                var opresult5780 = callmethodChecked(opresult5778, "++", [1], string5772);
                var string5781 = new GraceString("w");
                var call5782 = callmethodChecked(var_io, "open", [2], opresult5780, string5781);
                var var_file404 = call5782;
                setLineNumber(510);    // compilenode call
                var call5783 = callmethodChecked(superDepth, "outer", [0]);
                onOuter = true;
                onSelf = true;
                var call5784 = callmethodChecked(call5783, "outer", [0]);
                onOuter = true;
                onSelf = true;
                var call5785 = callmethodChecked(call5784, "autoindent", [1], var_out);
                var call5786 = callmethodChecked(var_file404, "write", [1], call5785);
                setLineNumber(511);    // compilenode identifier
                var call5787 = callmethodChecked(var_file404, "close", [0]);
                return call5787;
              };
              func5746.paramCounts = [0];
              obj5125.methods["build404"] = func5746;
              func5746.definitionLine = 503;
              func5746.definitionModule = "gracedoc";
              var func5788 = function(argcv) {    // method buildindex
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                if (argcv[0] !== 0)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for buildindex"));
                setModuleName("gracedoc");
                setLineNumber(515);    // compilenode string
                var string5789 = new GraceString(" -- https://github.com/reid47/gracedoc -->\n");
                var call5791 = callmethodChecked(var_settings, "version", [0]);
                var string5793 = new GraceString("<!-- generated by Gracedoc, v");
                var opresult5795 = callmethodChecked(string5793, "++", [1], call5791);
                var opresult5797 = callmethodChecked(opresult5795, "++", [1], string5789);
                var var_out = opresult5797;
                setLineNumber(516);    // compilenode string
                var string5798 = new GraceString("<!DOCTYPE html>\n<html lang=\"en\">");
                var opresult5801 = callmethodChecked(var_out, "++", [1], string5798);
                var_out = opresult5801;
                setLineNumber(517);    // compilenode string
                var string5802 = new GraceString("<head>");
                var opresult5805 = callmethodChecked(var_out, "++", [1], string5802);
                var_out = opresult5805;
                setLineNumber(518);    // compilenode string
                var string5806 = new GraceString("<title>GraceDocs</title>");
                var opresult5809 = callmethodChecked(var_out, "++", [1], string5806);
                var_out = opresult5809;
                setLineNumber(519);    // compilenode string
                var string5810 = new GraceString("<link rel=\"stylesheet\" href=\"graceDoc.css\">");
                var opresult5813 = callmethodChecked(var_out, "++", [1], string5810);
                var_out = opresult5813;
                setLineNumber(520);    // compilenode string
                var string5814 = new GraceString("</head>");
                var opresult5817 = callmethodChecked(var_out, "++", [1], string5814);
                var_out = opresult5817;
                setLineNumber(521);    // compilenode string
                var string5818 = new GraceString("<body>");
                var opresult5821 = callmethodChecked(var_out, "++", [1], string5818);
                var_out = opresult5821;
                setLineNumber(522);    // compilenode string
                var string5822 = new GraceString("<iframe id=\"frame-sidebar\" src=\"modules.html\" name=\"moduleFrame\"></iframe>");
                var opresult5825 = callmethodChecked(var_out, "++", [1], string5822);
                var_out = opresult5825;
                setLineNumber(523);    // compilenode string
                var string5826 = new GraceString("<iframe id=\"frame-main\" src=\"\" name=\"mainFrame\"></iframe>");
                var opresult5829 = callmethodChecked(var_out, "++", [1], string5826);
                var_out = opresult5829;
                setLineNumber(524);    // compilenode string
                var string5830 = new GraceString("</body>");
                var opresult5833 = callmethodChecked(var_out, "++", [1], string5830);
                var_out = opresult5833;
                setLineNumber(525);    // compilenode string
                var string5834 = new GraceString("</html>");
                var opresult5837 = callmethodChecked(var_out, "++", [1], string5834);
                var_out = opresult5837;
                setLineNumber(526);    // compilenode string
                var string5838 = new GraceString("/index.html");
                var call5840 = callmethodChecked(var_settings, "outputdir", [0]);
                var string5842 = new GraceString("");
                var opresult5844 = callmethodChecked(string5842, "++", [1], call5840);
                var opresult5846 = callmethodChecked(opresult5844, "++", [1], string5838);
                var string5847 = new GraceString("w");
                var call5848 = callmethodChecked(var_io, "open", [2], opresult5846, string5847);
                var var_fileindex = call5848;
                setLineNumber(527);    // compilenode call
                var call5849 = callmethodChecked(superDepth, "outer", [0]);
                onOuter = true;
                onSelf = true;
                var call5850 = callmethodChecked(call5849, "outer", [0]);
                onOuter = true;
                onSelf = true;
                var call5851 = callmethodChecked(call5850, "autoindent", [1], var_out);
                var call5852 = callmethodChecked(var_fileindex, "write", [1], call5851);
                setLineNumber(528);    // compilenode identifier
                var call5853 = callmethodChecked(var_fileindex, "close", [0]);
                return call5853;
              };
              func5788.paramCounts = [0];
              obj5125.methods["buildindex"] = func5788;
              func5788.definitionLine = 514;
              func5788.definitionModule = "gracedoc";
              var func5854 = function(argcv) {    // method buildjs
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                if (argcv[0] !== 0)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for buildjs"));
                setModuleName("gracedoc");
                setLineNumber(532);    // compilenode string
                var string5855 = new GraceString("function toggleContents(eltid) {\n    var elt = document.getElementById('contents-'+eltid)\n    var arrow = document.getElementById('arrow-button-'+eltid)\n    if (elt.style.display == 'none') {\n        elt.style.display = 'block';\n        arrow.innerHTML = '&#9660';\n    } else {\n        elt.style.display = 'none';\n        arrow.innerHTML = '&#9654';\n    }\n}");
                var var_out = string5855;
                setLineNumber(543);    // compilenode string
                var string5856 = new GraceString("/gracedoc.js");
                var call5858 = callmethodChecked(var_settings, "outputdir", [0]);
                var string5860 = new GraceString("");
                var opresult5862 = callmethodChecked(string5860, "++", [1], call5858);
                var opresult5864 = callmethodChecked(opresult5862, "++", [1], string5856);
                var string5865 = new GraceString("w");
                var call5866 = callmethodChecked(var_io, "open", [2], opresult5864, string5865);
                var var_filejs = call5866;
                setLineNumber(544);    // compilenode identifier
                var call5867 = callmethodChecked(var_filejs, "write", [1], var_out);
                setLineNumber(545);    // compilenode identifier
                var call5868 = callmethodChecked(var_filejs, "close", [0]);
                return call5868;
              };
              func5854.paramCounts = [0];
              obj5125.methods["buildjs"] = func5854;
              func5854.definitionLine = 531;
              func5854.definitionModule = "gracedoc";
              var func5869 = function(argcv) {    // method buildcss
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                if (argcv[0] !== 0)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for buildcss"));
                setModuleName("gracedoc");
                setLineNumber(549);    // compilenode string
                var string5870 = new GraceString("@import url(http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,700);\n\n* {\n    margin: 0px;\n    padding: 0px;\n}\n\nbody {\n    font-size: 16px;\n    font-family: 'Open Sans', Helvetica, Arial, sans-serif;\n}\n\na, a:visited {\n    color: #00d;\n}\n\n.header {\n    height: 50px;\n    line-height: 50px;\n    padding: 0px 20px;\n    font-weight: bold;\n    background-color: rgb(0,80,105);\n    border-bottom: 2px solid #333;\n    font-size: 20px;\n    color: #fff;\n}\n\n.header-left {\n    float: left;\n}\n\n.header-right {\n    float: right;\n}\n\n.description {\n    font-style: italic;\n    font-size: 14px;\n}\n\n.container {\n    padding: 20px;\n}\n\nsection {\n    border: 1px solid #079;\n    border-radius: 0px;\n}\n\nsection > h4 {\n    margin: 0px;\n    background-color: rgb(80,160,185);\n    padding: 5px 10px;\n}\n\nsection + section {\n    margin-top: 20px;\n}\n\ntable {\n    margin: 0px;\n    width: 100%;\n    border-collapse: collapse;\n    table-layout: fixed;\n}\n\nth {\n    text-align: left;\n    background: rgb(130,200,215);\n    color: rgb(0,80,105);\n    font-size: 10px;\n    padding: 5px 10px;\n    border-bottom: 1px solid #079;\n}\n\ntd {\n    padding: 10px;\n    word-wrap: break-word;\n}\n\n.row-odd { background-color: #eeeeee; }\n.row-odd + tr.description {\n    background-color: #eeeeee;\n}\n\n.row-even { background-color: #ffffff; }\n.row-even + tr.description {\n    background-color: #ffffff;\n}\n\ntr.description > td {\n    padding-top: 0px;\n}\n.code, code {\n    font-family: Monaco, monospace;\n}\n.description {\n    font-size: 14px;\n    width: 50%;\n}\n.parameter-type {\n    font-family: Monaco, monospace;\n}\n.type-name {\n    font-family: Monaco, monospace;\n    font-weight: bold;\n}\n.method-name {\n    font-weight: bold;\n}\n.class-name {\n    font-weight: bold;\n}\n.identifier-name {\n    font-family: Monaco, monospace;\n    font-weight: bold;\n}\n\n/* MODULES LIST */\n\n.list-container h5 {\n    font-size: 16px;\n    background-color: rgb(0,80,105);\n    color: #ffffff;\n    padding: 5px 10px;\n}\n\n.list-container h6 {\n    font-size: 12px;\n    margin: 0px;\n    color: #000;\n    padding: 0px 5px;\n}\n\n.list-container ul {\n    padding: 5px 10px 10px 10px;\n}\n.list-container li {\n    list-style-type: none;\n}\n\niframe {\n    border: none;\n}\n\n#frame-sidebar {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 20%;\n    height: 100%;\n}\n\n#frame-main {\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 80%;\n    height: 100%;\n    border-left: 4px solid #bbb\n}\n\n.contents-list {\n    background: #e0e8f0;\n    padding: 10px 5px 5px 5px;\n    margin-left: 20px;\n    margin-right: 20px;\n    font-size: 14px;\n}\n\n.arrow-button-toggle {\n    font-family: monospace;\n    font-size: 14px;\n    color: rgb(0,0,105);\n    cursor: pointer;\n    width: 20px;\n    display: inline-block;\n}\n\n.top-box {\n    word-wrap: break-word;\n    margin: 20px;\n}\n\n.top-box hr {\n    margin: 10px 0;\n    border: 1px solid #079;\n}\n\n.headline {\n    font-size: 18px;\n}\n\n.quiet {\n    color: #888;\n    font-size: 14px;\n}");
                var var_out = string5870;
                setLineNumber(746);    // compilenode string
                var string5871 = new GraceString("/gracedoc.css");
                var call5873 = callmethodChecked(var_settings, "outputdir", [0]);
                var string5875 = new GraceString("");
                var opresult5877 = callmethodChecked(string5875, "++", [1], call5873);
                var opresult5879 = callmethodChecked(opresult5877, "++", [1], string5871);
                var string5880 = new GraceString("w");
                var call5881 = callmethodChecked(var_io, "open", [2], opresult5879, string5880);
                var var_filecss = call5881;
                setLineNumber(747);    // compilenode identifier
                var call5882 = callmethodChecked(var_filecss, "write", [1], var_out);
                setLineNumber(748);    // compilenode identifier
                var call5883 = callmethodChecked(var_filecss, "close", [0]);
                return call5883;
              };
              func5869.paramCounts = [0];
              obj5125.methods["buildcss"] = func5869;
              func5869.definitionLine = 548;
              func5869.definitionModule = "gracedoc";
              var func5884 = function(argcv) {    // method generate
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                if (argcv[0] !== 0)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for generate"));
                setModuleName("gracedoc");
                var if5885 = GraceDone;
                setLineNumber(752);    // compilenode identifier
                var call5887 = callmethodChecked(var_settings, "verbosity", [0]);
                var opresult5889 = callmethodChecked(call5887, ">", [1], new GraceNum(1));
                if (Grace_isTrue(opresult5889)) {
                  var string5890 = new GraceString(")");
                  var call5892 = callmethodChecked(var_sys, "elapsedTime", [0]);
                  var string5894 = new GraceString(" - starting to assemble HTML (");
                  onSelf = true;
                  var call5896 = callmethodChecked(this, "title", [0]);
                  var string5898 = new GraceString("On ");
                  var opresult5900 = callmethodChecked(string5898, "++", [1], call5896);
                  var opresult5902 = callmethodChecked(opresult5900, "++", [1], string5894);
                  var opresult5904 = callmethodChecked(opresult5902, "++", [1], call5892);
                  var opresult5906 = callmethodChecked(opresult5904, "++", [1], string5890);
                  var call5907 = Grace_print(opresult5906);
                  if5885 = call5907;
                }
                setLineNumber(754);    // compilenode vardec
                var var_outfile;
                setLineNumber(755);    // compilenode string
                var string5908 = new GraceString("");
                var var_output = string5908;
                var if5909 = GraceDone;
                setLineNumber(756);    // compilenode call
                onSelf = true;
                var call5910 = callmethodChecked(this, "isOnClassPage", [0]);
                if (Grace_isTrue(call5910)) {
                  setLineNumber(757);    // compilenode string
                  var string5911 = new GraceString(".html");
                  onSelf = true;
                  var call5913 = callmethodChecked(this, "pageName", [0]);
                  var string5915 = new GraceString("/classes/");
                  onSelf = true;
                  var call5917 = callmethodChecked(this, "outdir", [0]);
                  var string5919 = new GraceString("/");
                  var call5921 = callmethodChecked(var_settings, "outputdir", [0]);
                  var string5923 = new GraceString("");
                  var opresult5925 = callmethodChecked(string5923, "++", [1], call5921);
                  var opresult5927 = callmethodChecked(opresult5925, "++", [1], string5919);
                  var opresult5929 = callmethodChecked(opresult5927, "++", [1], call5917);
                  var opresult5931 = callmethodChecked(opresult5929, "++", [1], string5915);
                  var opresult5933 = callmethodChecked(opresult5931, "++", [1], call5913);
                  var opresult5935 = callmethodChecked(opresult5933, "++", [1], string5911);
                  var string5936 = new GraceString("w");
                  var call5937 = callmethodChecked(var_io, "open", [2], opresult5935, string5936);
                  var_outfile = call5937;
                  if5909 = GraceDone;
                } else {
                  var if5938 = GraceDone;
                  setLineNumber(758);    // compilenode call
                  onSelf = true;
                  var call5939 = callmethodChecked(this, "isOnTypePage", [0]);
                  if (Grace_isTrue(call5939)) {
                    setLineNumber(759);    // compilenode string
                    var string5940 = new GraceString(".html");
                    onSelf = true;
                    var call5942 = callmethodChecked(this, "pageName", [0]);
                    var string5944 = new GraceString("/types/");
                    onSelf = true;
                    var call5946 = callmethodChecked(this, "outdir", [0]);
                    var string5948 = new GraceString("/");
                    var call5950 = callmethodChecked(var_settings, "outputdir", [0]);
                    var string5952 = new GraceString("");
                    var opresult5954 = callmethodChecked(string5952, "++", [1], call5950);
                    var opresult5956 = callmethodChecked(opresult5954, "++", [1], string5948);
                    var opresult5958 = callmethodChecked(opresult5956, "++", [1], call5946);
                    var opresult5960 = callmethodChecked(opresult5958, "++", [1], string5944);
                    var opresult5962 = callmethodChecked(opresult5960, "++", [1], call5942);
                    var opresult5964 = callmethodChecked(opresult5962, "++", [1], string5940);
                    var string5965 = new GraceString("w");
                    var call5966 = callmethodChecked(var_io, "open", [2], opresult5964, string5965);
                    var_outfile = call5966;
                    if5938 = GraceDone;
                  } else {
                    setLineNumber(761);    // compilenode string
                    var string5967 = new GraceString(".html");
                    onSelf = true;
                    var call5969 = callmethodChecked(this, "pageName", [0]);
                    var string5971 = new GraceString("/");
                    onSelf = true;
                    var call5973 = callmethodChecked(this, "outdir", [0]);
                    var string5975 = new GraceString("/");
                    var call5977 = callmethodChecked(var_settings, "outputdir", [0]);
                    var string5979 = new GraceString("");
                    var opresult5981 = callmethodChecked(string5979, "++", [1], call5977);
                    var opresult5983 = callmethodChecked(opresult5981, "++", [1], string5975);
                    var opresult5985 = callmethodChecked(opresult5983, "++", [1], call5973);
                    var opresult5987 = callmethodChecked(opresult5985, "++", [1], string5971);
                    var opresult5989 = callmethodChecked(opresult5987, "++", [1], call5969);
                    var opresult5991 = callmethodChecked(opresult5989, "++", [1], string5967);
                    var string5992 = new GraceString("w");
                    var call5993 = callmethodChecked(var_io, "open", [2], opresult5991, string5992);
                    var_outfile = call5993;
                    if5938 = GraceDone;
                  }
                  if5909 = if5938;
                }
                setLineNumber(763);    // compilenode call
                onSelf = true;
                var call5994 = callmethodChecked(this, "headerSection", [0]);
                var call5995 = callmethodChecked(call5994, "html", [0]);
                var opresult5998 = callmethodChecked(var_output, "++", [1], call5995);
                var_output = opresult5998;
                var if5999 = GraceDone;
                setLineNumber(764);    // compilenode call
                onSelf = true;
                var call6000 = callmethodChecked(this, "topDescSection", [0]);
                var call6001 = callmethodChecked(call6000, "hasContent", [0]);
                if (Grace_isTrue(call6001)) {
                  setLineNumber(765);    // compilenode call
                  onSelf = true;
                  var call6002 = callmethodChecked(this, "topDescSection", [0]);
                  var call6003 = callmethodChecked(call6002, "html", [0]);
                  var opresult6006 = callmethodChecked(var_output, "++", [1], call6003);
                  var_output = opresult6006;
                  if5999 = GraceDone;
                }
                var if6007 = GraceDone;
                setLineNumber(767);    // compilenode call
                onSelf = true;
                var call6008 = callmethodChecked(this, "fieldsSection", [0]);
                var call6009 = callmethodChecked(call6008, "hasContent", [0]);
                if (Grace_isTrue(call6009)) {
                  setLineNumber(768);    // compilenode call
                  onSelf = true;
                  var call6010 = callmethodChecked(this, "fieldsSection", [0]);
                  var call6011 = callmethodChecked(call6010, "alphabetize", [0]);
                  setLineNumber(769);    // compilenode call
                  onSelf = true;
                  var call6012 = callmethodChecked(this, "fieldsSection", [0]);
                  var call6013 = callmethodChecked(call6012, "html", [0]);
                  var opresult6016 = callmethodChecked(var_output, "++", [1], call6013);
                  var_output = opresult6016;
                  if6007 = GraceDone;
                }
                var if6017 = GraceDone;
                setLineNumber(771);    // compilenode call
                onSelf = true;
                var call6018 = callmethodChecked(this, "methodtypesSection", [0]);
                var call6019 = callmethodChecked(call6018, "hasContent", [0]);
                if (Grace_isTrue(call6019)) {
                  setLineNumber(772);    // compilenode call
                  onSelf = true;
                  var call6020 = callmethodChecked(this, "methodtypesSection", [0]);
                  var call6021 = callmethodChecked(call6020, "alphabetize", [0]);
                  setLineNumber(773);    // compilenode call
                  onSelf = true;
                  var call6022 = callmethodChecked(this, "methodtypesSection", [0]);
                  var call6023 = callmethodChecked(call6022, "html", [0]);
                  var opresult6026 = callmethodChecked(var_output, "++", [1], call6023);
                  var_output = opresult6026;
                  if6017 = GraceDone;
                }
                var if6027 = GraceDone;
                setLineNumber(775);    // compilenode call
                onSelf = true;
                var call6028 = callmethodChecked(this, "typesSection", [0]);
                var call6029 = callmethodChecked(call6028, "hasContent", [0]);
                if (Grace_isTrue(call6029)) {
                  setLineNumber(776);    // compilenode call
                  onSelf = true;
                  var call6030 = callmethodChecked(this, "typesSection", [0]);
                  var call6031 = callmethodChecked(call6030, "alphabetize", [0]);
                  setLineNumber(777);    // compilenode call
                  onSelf = true;
                  var call6032 = callmethodChecked(this, "typesSection", [0]);
                  var call6033 = callmethodChecked(call6032, "html", [0]);
                  var opresult6036 = callmethodChecked(var_output, "++", [1], call6033);
                  var_output = opresult6036;
                  if6027 = GraceDone;
                }
                var if6037 = GraceDone;
                setLineNumber(779);    // compilenode call
                onSelf = true;
                var call6038 = callmethodChecked(this, "classesSection", [0]);
                var call6039 = callmethodChecked(call6038, "hasContent", [0]);
                if (Grace_isTrue(call6039)) {
                  setLineNumber(780);    // compilenode call
                  onSelf = true;
                  var call6040 = callmethodChecked(this, "classesSection", [0]);
                  var call6041 = callmethodChecked(call6040, "alphabetize", [0]);
                  setLineNumber(781);    // compilenode call
                  onSelf = true;
                  var call6042 = callmethodChecked(this, "classesSection", [0]);
                  var call6043 = callmethodChecked(call6042, "html", [0]);
                  var opresult6046 = callmethodChecked(var_output, "++", [1], call6043);
                  var_output = opresult6046;
                  if6037 = GraceDone;
                }
                var if6047 = GraceDone;
                setLineNumber(783);    // compilenode call
                onSelf = true;
                var call6048 = callmethodChecked(this, "methodsSection", [0]);
                var call6049 = callmethodChecked(call6048, "hasContent", [0]);
                if (Grace_isTrue(call6049)) {
                  setLineNumber(784);    // compilenode call
                  onSelf = true;
                  var call6050 = callmethodChecked(this, "methodsSection", [0]);
                  var call6051 = callmethodChecked(call6050, "alphabetize", [0]);
                  setLineNumber(785);    // compilenode call
                  onSelf = true;
                  var call6052 = callmethodChecked(this, "methodsSection", [0]);
                  var call6053 = callmethodChecked(call6052, "html", [0]);
                  var opresult6056 = callmethodChecked(var_output, "++", [1], call6053);
                  var_output = opresult6056;
                  if6047 = GraceDone;
                }
                setLineNumber(787);    // compilenode call
                onSelf = true;
                var call6057 = callmethodChecked(this, "footerSection", [0]);
                var call6058 = callmethodChecked(call6057, "html", [0]);
                var opresult6061 = callmethodChecked(var_output, "++", [1], call6058);
                var_output = opresult6061;
                setLineNumber(788);    // compilenode call
                var call6062 = callmethodChecked(superDepth, "outer", [0]);
                onOuter = true;
                onSelf = true;
                var call6063 = callmethodChecked(call6062, "outer", [0]);
                onOuter = true;
                onSelf = true;
                var call6064 = callmethodChecked(call6063, "autoindent", [1], var_output);
                var_output = call6064;
                setLineNumber(789);    // compilenode identifier
                var call6065 = callmethodChecked(var_outfile, "write", [1], var_output);
                setLineNumber(790);    // compilenode identifier
                var call6066 = callmethodChecked(var_outfile, "close", [0]);
                var if6067 = GraceDone;
                setLineNumber(791);    // compilenode identifier
                var call6069 = callmethodChecked(var_settings, "verbosity", [0]);
                var opresult6071 = callmethodChecked(call6069, ">", [1], new GraceNum(1));
                if (Grace_isTrue(opresult6071)) {
                  var string6072 = new GraceString(")");
                  var call6074 = callmethodChecked(var_sys, "elapsedTime", [0]);
                  var string6076 = new GraceString(" - file written (");
                  onSelf = true;
                  var call6078 = callmethodChecked(this, "title", [0]);
                  var string6080 = new GraceString("On ");
                  var opresult6082 = callmethodChecked(string6080, "++", [1], call6078);
                  var opresult6084 = callmethodChecked(opresult6082, "++", [1], string6076);
                  var opresult6086 = callmethodChecked(opresult6084, "++", [1], call6074);
                  var opresult6088 = callmethodChecked(opresult6086, "++", [1], string6072);
                  var call6089 = Grace_print(opresult6088);
                  if6067 = call6089;
                }
                return if6067;
              };
              func5884.paramCounts = [0];
              obj5125.methods["generate"] = func5884;
              func5884.definitionLine = 751;
              func5884.definitionModule = "gracedoc";
              var func6090 = function(argcv) {    // method visitMethodType(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_o = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitMethodType(1)"));
                setModuleName("gracedoc");
                var if6091 = GraceDone;
                setLineNumber(795);    // compilenode call
                onSelf = true;
                var call6092 = callmethodChecked(this, "isOnTypePage", [0]);
                if (Grace_isTrue(call6092)) {
                  setLineNumber(796);    // compilenode string
                  var string6093 = new GraceString("<tr class='placeholder'><td><code>");
                  var var_t = string6093;
                  setLineNumber(797);    // compilenode string
                  var string6094 = new GraceString("");
                  var var_n = string6094;
                  setLineNumber(798);    // compilenode identifier
                  var call6095 = callmethodChecked(var_o, "signature", [0]);
                  var block6096 = new GraceBlock(this, 798, 1);
                  setLineNumber(1);    // compilenode identifier
                  block6096.real = function(var_part) {
                    setLineNumber(799);    // compilenode string
                    var string6097 = new GraceString("</span>");
                    var call6099 = callmethodChecked(var_part, "name", [0]);
                    var string6101 = new GraceString("<span class='method-name'>");
                    var opresult6104 = callmethodChecked(var_t, "++", [1], string6101);
                    var opresult6106 = callmethodChecked(opresult6104, "++", [1], call6099);
                    var opresult6108 = callmethodChecked(opresult6106, "++", [1], string6097);
                    var_t = opresult6108;
                    setLineNumber(800);    // compilenode identifier
                    var call6109 = callmethodChecked(var_part, "name", [0]);
                    var opresult6112 = callmethodChecked(var_n, "++", [1], call6109);
                    var_n = opresult6112;
                    var if6113 = GraceDone;
                    setLineNumber(801);    // compilenode identifier
                    var call6114 = callmethodChecked(var_o, "signature", [0]);
                    var call6115 = callmethodChecked(call6114, "last", [0]);
                    var opresult6118 = callmethodChecked(var_part, "\u2260", [1], call6115);
                    if (Grace_isTrue(opresult6118)) {
                      var string6119 = new GraceString("()");
                      var opresult6122 = callmethodChecked(var_n, "++", [1], string6119);
                      var_n = opresult6122;
                      if6113 = GraceDone;
                    }
                    var if6123 = GraceDone;
                    setLineNumber(802);    // compilenode identifier
                    var call6125 = callmethodChecked(var_part, "params", [0]);
                    var call6126 = callmethodChecked(call6125, "size", [0]);
                    var opresult6128 = callmethodChecked(call6126, ">", [1], new GraceNum(0));
                    if (Grace_isTrue(opresult6128)) {
                      setLineNumber(803);    // compilenode string
                      var string6129 = new GraceString("(");
                      var opresult6132 = callmethodChecked(var_t, "++", [1], string6129);
                      var_t = opresult6132;
                      setLineNumber(804);    // compilenode identifier
                      var call6133 = callmethodChecked(var_part, "params", [0]);
                      var block6134 = new GraceBlock(this, 804, 1);
                      setLineNumber(1);    // compilenode identifier
                      block6134.real = function(var_param) {
                        var if6135 = GraceDone;
                        setLineNumber(805);    // compilenode identifier
                        var call6137 = callmethodChecked(var_param, "dtype", [0]);
                        var opresult6139 = callmethodChecked(call6137, "\u2260", [1], GraceFalse);
                        if (Grace_isTrue(opresult6139)) {
                          setLineNumber(806);    // compilenode string
                          var string6140 = new GraceString("</span>");
                          var call6142 = callmethodChecked(var_param, "nameString", [0]);
                          var string6144 = new GraceString("<span class='parameter-name'>");
                          var opresult6147 = callmethodChecked(var_t, "++", [1], string6144);
                          var opresult6149 = callmethodChecked(opresult6147, "++", [1], call6142);
                          var opresult6151 = callmethodChecked(opresult6149, "++", [1], string6140);
                          var_t = opresult6151;
                          setLineNumber(807);    // compilenode string
                          var string6152 = new GraceString(":");
                          var opresult6155 = callmethodChecked(var_t, "++", [1], string6152);
                          var_t = opresult6155;
                          var if6156 = GraceDone;
                          setLineNumber(808);    // compilenode string
                          var string6157 = new GraceString("identifier");
                          var call6159 = callmethodChecked(var_param, "dtype", [0]);
                          var call6160 = callmethodChecked(call6159, "kind", [0]);
                          var opresult6162 = callmethodChecked(call6160, "==", [1], string6157);
                          if (Grace_isTrue(opresult6162)) {
                            setLineNumber(809);    // compilenode identifier
                            var call6163 = callmethodChecked(var_param, "dtype", [0]);
                            var call6164 = callmethodChecked(call6163, "value", [0]);
                            onSelf = true;
                            var call6165 = callmethodChecked(this, "getTypeLink", [1], call6164);
                            var opresult6168 = callmethodChecked(var_t, "++", [1], call6165);
                            var_t = opresult6168;
                            if6156 = GraceDone;
                          } else {
                            var if6169 = GraceDone;
                            setLineNumber(810);    // compilenode string
                            var string6170 = new GraceString("generic");
                            var call6172 = callmethodChecked(var_param, "dtype", [0]);
                            var call6173 = callmethodChecked(call6172, "kind", [0]);
                            var opresult6175 = callmethodChecked(call6173, "==", [1], string6170);
                            if (Grace_isTrue(opresult6175)) {
                              setLineNumber(811);    // compilenode string
                              var string6176 = new GraceString("&lt;");
                              var call6178 = callmethodChecked(var_param, "dtype", [0]);
                              var call6179 = callmethodChecked(call6178, "value", [0]);
                              var call6180 = callmethodChecked(call6179, "value", [0]);
                              onSelf = true;
                              var call6181 = callmethodChecked(this, "getTypeLink", [1], call6180);
                              var opresult6184 = callmethodChecked(var_t, "++", [1], call6181);
                              var opresult6186 = callmethodChecked(opresult6184, "++", [1], string6176);
                              var_t = opresult6186;
                              setLineNumber(812);    // compilenode block
                              var block6187 = new GraceBlock(this, 812, 1);
                              setLineNumber(1);    // compilenode identifier
                              block6187.real = function(var_each) {
                                setLineNumber(812);    // compilenode string
                                var string6188 = new GraceString("");
                                var call6190 = callmethodChecked(var_each, "value", [0]);
                                onSelf = true;
                                var call6191 = callmethodChecked(this, "getTypeLink", [1], call6190);
                                var string6193 = new GraceString("");
                                var string6196 = new GraceString("");
                                var opresult6198 = callmethodChecked(string6196, "++", [1], var_t);
                                var opresult6200 = callmethodChecked(opresult6198, "++", [1], string6193);
                                var opresult6202 = callmethodChecked(opresult6200, "++", [1], call6191);
                                var opresult6204 = callmethodChecked(opresult6202, "++", [1], string6188);
                                var_t = opresult6204;
                                return GraceDone;
                              };
                              var block6205 = new GraceBlock(this, 812, 0);
                              block6205.real = function() {
                                var string6206 = new GraceString(", ");
                                var opresult6209 = callmethodChecked(var_t, "++", [1], string6206);
                                var_t = opresult6209;
                                return GraceDone;
                              };
                              var call6210 = callmethodChecked(var_param, "dtype", [0]);
                              var call6211 = callmethodChecked(call6210, "args", [0]);
                              var call6212 = callmethodChecked(call6211, "do()separatedBy", [1, 1], block6187, block6205);
                              setLineNumber(813);    // compilenode string
                              var string6213 = new GraceString("&gt;");
                              var opresult6216 = callmethodChecked(var_t, "++", [1], string6213);
                              var_t = opresult6216;
                              if6169 = GraceDone;
                            }
                            if6156 = if6169;
                          }
                          if6135 = if6156;
                        } else {
                          setLineNumber(816);    // compilenode string
                          var string6217 = new GraceString("</span>");
                          var call6219 = callmethodChecked(var_param, "nameString", [0]);
                          var string6221 = new GraceString("<span class='parameter-name'>");
                          var opresult6224 = callmethodChecked(var_t, "++", [1], string6221);
                          var opresult6226 = callmethodChecked(opresult6224, "++", [1], call6219);
                          var opresult6228 = callmethodChecked(opresult6226, "++", [1], string6217);
                          var_t = opresult6228;
                          if6135 = GraceDone;
                        }
                        var if6229 = GraceDone;
                        setLineNumber(818);    // compilenode identifier
                        var call6230 = callmethodChecked(var_part, "params", [0]);
                        var call6231 = callmethodChecked(call6230, "last", [0]);
                        var opresult6234 = callmethodChecked(var_param, "\u2260", [1], call6231);
                        var call6237 = callmethodChecked(var_part, "params", [0]);
                        var call6238 = callmethodChecked(call6237, "size", [0]);
                        var opresult6240 = callmethodChecked(call6238, ">", [1], new GraceNum(1));
                        var opresult6242 = callmethodChecked(opresult6240, "&&", [1], opresult6234);
                        if (Grace_isTrue(opresult6242)) {
                          setLineNumber(819);    // compilenode string
                          var string6243 = new GraceString(", ");
                          var opresult6246 = callmethodChecked(var_t, "++", [1], string6243);
                          var_t = opresult6246;
                          if6229 = GraceDone;
                        }
                        return if6229;
                      };
                      var call6247 = callmethodChecked(var_prelude, "for()do", [1, 1], call6133, block6134);
                      setLineNumber(822);    // compilenode string
                      var string6248 = new GraceString(")");
                      var opresult6251 = callmethodChecked(var_t, "++", [1], string6248);
                      var_t = opresult6251;
                      if6123 = GraceDone;
                    }
                    return if6123;
                  };
                  var call6252 = callmethodChecked(var_prelude, "for()do", [1, 1], call6095, block6096);
                  setLineNumber(825);    // compilenode string
                  var string6253 = new GraceString("</code></td>");
                  var opresult6256 = callmethodChecked(var_t, "++", [1], string6253);
                  var_t = opresult6256;
                  setLineNumber(826);    // compilenode string
                  var string6257 = new GraceString("<td><code>");
                  var opresult6260 = callmethodChecked(var_t, "++", [1], string6257);
                  var_t = opresult6260;
                  var if6261 = GraceDone;
                  setLineNumber(827);    // compilenode identifier
                  var call6263 = callmethodChecked(var_o, "rtype", [0]);
                  var opresult6265 = callmethodChecked(call6263, "\u2260", [1], GraceFalse);
                  if (Grace_isTrue(opresult6265)) {
                    var if6266 = GraceDone;
                    setLineNumber(828);    // compilenode string
                    var string6267 = new GraceString("identifier");
                    var call6269 = callmethodChecked(var_o, "rtype", [0]);
                    var call6270 = callmethodChecked(call6269, "kind", [0]);
                    var opresult6272 = callmethodChecked(call6270, "==", [1], string6267);
                    if (Grace_isTrue(opresult6272)) {
                      setLineNumber(829);    // compilenode identifier
                      var call6273 = callmethodChecked(var_o, "rtype", [0]);
                      var call6274 = callmethodChecked(call6273, "value", [0]);
                      onSelf = true;
                      var call6275 = callmethodChecked(this, "getTypeLink", [1], call6274);
                      var opresult6278 = callmethodChecked(var_t, "++", [1], call6275);
                      var_t = opresult6278;
                      if6266 = GraceDone;
                    } else {
                      var if6279 = GraceDone;
                      setLineNumber(830);    // compilenode string
                      var string6280 = new GraceString("generic");
                      var call6282 = callmethodChecked(var_o, "rtype", [0]);
                      var call6283 = callmethodChecked(call6282, "kind", [0]);
                      var opresult6285 = callmethodChecked(call6283, "==", [1], string6280);
                      if (Grace_isTrue(opresult6285)) {
                        setLineNumber(831);    // compilenode string
                        var string6286 = new GraceString("&lt;");
                        var call6288 = callmethodChecked(var_o, "rtype", [0]);
                        var call6289 = callmethodChecked(call6288, "value", [0]);
                        var call6290 = callmethodChecked(call6289, "value", [0]);
                        onSelf = true;
                        var call6291 = callmethodChecked(this, "getTypeLink", [1], call6290);
                        var opresult6294 = callmethodChecked(var_t, "++", [1], call6291);
                        var opresult6296 = callmethodChecked(opresult6294, "++", [1], string6286);
                        var_t = opresult6296;
                        setLineNumber(832);    // compilenode block
                        var block6297 = new GraceBlock(this, 832, 1);
                        setLineNumber(1);    // compilenode identifier
                        block6297.real = function(var_each) {
                          setLineNumber(832);    // compilenode string
                          var string6298 = new GraceString("");
                          var call6300 = callmethodChecked(var_each, "value", [0]);
                          onSelf = true;
                          var call6301 = callmethodChecked(this, "getTypeLink", [1], call6300);
                          var string6303 = new GraceString("");
                          var string6306 = new GraceString("");
                          var opresult6308 = callmethodChecked(string6306, "++", [1], var_t);
                          var opresult6310 = callmethodChecked(opresult6308, "++", [1], string6303);
                          var opresult6312 = callmethodChecked(opresult6310, "++", [1], call6301);
                          var opresult6314 = callmethodChecked(opresult6312, "++", [1], string6298);
                          var_t = opresult6314;
                          return GraceDone;
                        };
                        var block6315 = new GraceBlock(this, 832, 0);
                        block6315.real = function() {
                          var string6316 = new GraceString(", ");
                          var opresult6319 = callmethodChecked(var_t, "++", [1], string6316);
                          var_t = opresult6319;
                          return GraceDone;
                        };
                        var call6320 = callmethodChecked(var_o, "rtype", [0]);
                        var call6321 = callmethodChecked(call6320, "args", [0]);
                        var call6322 = callmethodChecked(call6321, "do()separatedBy", [1, 1], block6297, block6315);
                        setLineNumber(833);    // compilenode string
                        var string6323 = new GraceString("&gt;");
                        var opresult6326 = callmethodChecked(var_t, "++", [1], string6323);
                        var_t = opresult6326;
                        if6279 = GraceDone;
                      }
                      if6266 = if6279;
                    }
                    if6261 = if6266;
                  } else {
                    setLineNumber(836);    // compilenode string
                    var string6327 = new GraceString("Done");
                    var opresult6330 = callmethodChecked(var_t, "++", [1], string6327);
                    var_t = opresult6330;
                    if6261 = GraceDone;
                  }
                  setLineNumber(838);    // compilenode string
                  var string6331 = new GraceString("</code></td></tr>");
                  var opresult6334 = callmethodChecked(var_t, "++", [1], string6331);
                  var_t = opresult6334;
                  setLineNumber(839);    // compilenode string
                  var string6335 = new GraceString("description");
                  var call6336 = callmethodChecked(superDepth, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call6337 = callmethodChecked(call6336, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call6338 = callmethodChecked(call6337, "formatComments()rowClass()colspan", [1, 1, 1], var_o, string6335, new GraceNum(2));
                  var opresult6341 = callmethodChecked(var_t, "++", [1], call6338);
                  var_t = opresult6341;
                  setLineNumber(840);    // compilenode call
                  onSelf = true;
                  var call6342 = callmethodChecked(this, "methodtypesSection", [0]);
                  var call6343 = callmethodChecked(call6342, "addElement()withText", [1, 1], var_n, var_t);
                  setLineNumber(841);    // compilenode identifier
                  return GraceFalse;
                } else {
                  setLineNumber(843);    // compilenode identifier
                  return GraceTrue;
                }
                setLineNumber(795);    // return value
                if (!Grace_isTrue(callmethod(var_Boolean, "match", [1], if6091)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitMethodType(1) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return if6091;
              };
              func6090.paramCounts = [1];
              obj5125.methods["visitMethodType"] = func6090;
              func6090.definitionLine = 794;
              func6090.definitionModule = "gracedoc";
              var func6344 = function(argcv) {    // method visitTypeDec(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_o = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitTypeDec(1)"));
                setModuleName("gracedoc");
                var if6345 = GraceDone;
                setLineNumber(848);    // compilenode call
                onSelf = true;
                var call6347 = callmethodChecked(this, "isOnTypePage", [0]);
                var opresult6349 = callmethodChecked(call6347, "==", [1], GraceFalse);
                if (Grace_isTrue(opresult6349)) {
                  setLineNumber(849);    // compilenode string
                  var string6350 = new GraceString("<tr class='placeholder'>");
                  var var_t = string6350;
                  setLineNumber(850);    // compilenode identifier
                  var call6351 = callmethodChecked(var_o, "name", [0]);
                  var call6352 = callmethodChecked(call6351, "value", [0]);
                  var var_n = call6352;
                  setLineNumber(851);    // compilenode string
                  var string6353 = new GraceString("");
                  var call6355 = callmethodChecked(var_o, "name", [0]);
                  var call6356 = callmethodChecked(call6355, "value", [0]);
                  onSelf = true;
                  var call6357 = callmethodChecked(this, "getTypeLink", [1], call6356);
                  var string6359 = new GraceString("<td class='type-name'>");
                  var opresult6361 = callmethodChecked(string6359, "++", [1], call6357);
                  var opresult6363 = callmethodChecked(opresult6361, "++", [1], string6353);
                  var opresult6366 = callmethodChecked(var_t, "++", [1], opresult6363);
                  var_t = opresult6366;
                  var if6367 = GraceDone;
                  setLineNumber(852);    // compilenode identifier
                  var call6368 = callmethodChecked(var_o, "typeParams", [0]);
                  var opresult6371 = callmethodChecked(GraceFalse, "\u2260", [1], call6368);
                  if (Grace_isTrue(opresult6371)) {
                    setLineNumber(853);    // compilenode string
                    var string6372 = new GraceString("&lt;");
                    var opresult6375 = callmethodChecked(var_t, "++", [1], string6372);
                    var_t = opresult6375;
                    setLineNumber(854);    // compilenode identifier
                    var call6376 = callmethodChecked(var_o, "typeParams", [0]);
                    var call6377 = callmethodChecked(call6376, "params", [0]);
                    var block6378 = new GraceBlock(this, 854, 1);
                    setLineNumber(1);    // compilenode identifier
                    block6378.real = function(var_g) {
                      setLineNumber(855);    // compilenode identifier
                      var call6379 = callmethodChecked(var_g, "nameString", [0]);
                      var opresult6382 = callmethodChecked(var_t, "++", [1], call6379);
                      var_t = opresult6382;
                      var if6383 = GraceDone;
                      setLineNumber(856);    // compilenode identifier
                      var call6384 = callmethodChecked(var_o, "typeParams", [0]);
                      var call6385 = callmethodChecked(call6384, "params", [0]);
                      var call6386 = callmethodChecked(call6385, "last", [0]);
                      var opresult6389 = callmethodChecked(var_g, "\u2260", [1], call6386);
                      if (Grace_isTrue(opresult6389)) {
                        var string6390 = new GraceString(", ");
                        var opresult6393 = callmethodChecked(var_t, "++", [1], string6390);
                        var_t = opresult6393;
                        if6383 = GraceDone;
                      }
                      return if6383;
                    };
                    var call6394 = callmethodChecked(var_prelude, "for()do", [1, 1], call6377, block6378);
                    setLineNumber(858);    // compilenode string
                    var string6395 = new GraceString("&gt;");
                    var opresult6398 = callmethodChecked(var_t, "++", [1], string6395);
                    var_t = opresult6398;
                    if6367 = GraceDone;
                  }
                  setLineNumber(860);    // compilenode string
                  var string6399 = new GraceString("</td></tr>");
                  var opresult6402 = callmethodChecked(var_t, "++", [1], string6399);
                  var_t = opresult6402;
                  setLineNumber(862);    // compilenode string
                  var string6403 = new GraceString("");
                  var call6405 = callmethodChecked(var_o, "name", [0]);
                  var call6406 = callmethodChecked(call6405, "value", [0]);
                  var string6408 = new GraceString("");
                  var opresult6410 = callmethodChecked(string6408, "++", [1], call6406);
                  var opresult6412 = callmethodChecked(opresult6410, "++", [1], string6403);
                  var string6413 = new GraceString("");
                  onSelf = true;
                  var call6415 = callmethodChecked(this, "outdir", [0]);
                  var string6417 = new GraceString("");
                  var opresult6419 = callmethodChecked(string6417, "++", [1], call6415);
                  var opresult6421 = callmethodChecked(opresult6419, "++", [1], string6413);
                  var string6422 = new GraceString("type");
                  var call6423 = callmethodChecked(var_graceDocVisitor, "createFrom()outTo()as", [1, 1, 1], opresult6412, opresult6421, string6422);
                  var var_typeVis = call6423;
                  setLineNumber(863);    // compilenode identifier
                  var call6424 = callmethodChecked(var_o, "accept", [1], var_typeVis);
                  setLineNumber(864);    // compilenode identifier
                  var call6425 = callmethodChecked(var_typeVis, "generate", [0]);
                  setLineNumber(865);    // compilenode string
                  var string6426 = new GraceString("description");
                  var call6427 = callmethodChecked(superDepth, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call6428 = callmethodChecked(call6427, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call6429 = callmethodChecked(call6428, "formatComments()rowClass()colspan", [1, 1, 1], var_o, string6426, new GraceNum(1));
                  var opresult6432 = callmethodChecked(var_t, "++", [1], call6429);
                  var_t = opresult6432;
                  setLineNumber(866);    // compilenode call
                  onSelf = true;
                  var call6433 = callmethodChecked(this, "typesSection", [0]);
                  var call6434 = callmethodChecked(call6433, "addElement()withText", [1, 1], var_n, var_t);
                  setLineNumber(867);    // compilenode identifier
                  return GraceFalse;
                } else {
                  setLineNumber(869);    // compilenode string
                  var string6435 = new GraceString("");
                  var call6437 = callmethodChecked(var_o, "name", [0]);
                  var call6438 = callmethodChecked(call6437, "value", [0]);
                  var string6440 = new GraceString("<span class='headline'><b><code>");
                  var opresult6442 = callmethodChecked(string6440, "++", [1], call6438);
                  var opresult6444 = callmethodChecked(opresult6442, "++", [1], string6435);
                  var var_t = opresult6444;
                  var if6445 = GraceDone;
                  setLineNumber(870);    // compilenode identifier
                  var call6446 = callmethodChecked(var_o, "typeParams", [0]);
                  var opresult6449 = callmethodChecked(GraceFalse, "\u2260", [1], call6446);
                  if (Grace_isTrue(opresult6449)) {
                    setLineNumber(871);    // compilenode string
                    var string6450 = new GraceString("&lt;");
                    var opresult6453 = callmethodChecked(var_t, "++", [1], string6450);
                    var_t = opresult6453;
                    setLineNumber(872);    // compilenode identifier
                    var call6454 = callmethodChecked(var_o, "typeParams", [0]);
                    var call6455 = callmethodChecked(call6454, "params", [0]);
                    var block6456 = new GraceBlock(this, 872, 1);
                    setLineNumber(1);    // compilenode identifier
                    block6456.real = function(var_g) {
                      setLineNumber(873);    // compilenode identifier
                      var call6457 = callmethodChecked(var_g, "nameString", [0]);
                      var opresult6460 = callmethodChecked(var_t, "++", [1], call6457);
                      var_t = opresult6460;
                      var if6461 = GraceDone;
                      setLineNumber(874);    // compilenode identifier
                      var call6462 = callmethodChecked(var_o, "typeParams", [0]);
                      var call6463 = callmethodChecked(call6462, "params", [0]);
                      var call6464 = callmethodChecked(call6463, "last", [0]);
                      var opresult6467 = callmethodChecked(var_g, "\u2260", [1], call6464);
                      if (Grace_isTrue(opresult6467)) {
                        var string6468 = new GraceString(", ");
                        var opresult6471 = callmethodChecked(var_t, "++", [1], string6468);
                        var_t = opresult6471;
                        if6461 = GraceDone;
                      }
                      return if6461;
                    };
                    var call6472 = callmethodChecked(var_prelude, "for()do", [1, 1], call6455, block6456);
                    setLineNumber(876);    // compilenode string
                    var string6473 = new GraceString("&gt;");
                    var opresult6476 = callmethodChecked(var_t, "++", [1], string6473);
                    var_t = opresult6476;
                    if6445 = GraceDone;
                  }
                  setLineNumber(878);    // compilenode string
                  var string6477 = new GraceString("</b> = ");
                  var opresult6480 = callmethodChecked(var_t, "++", [1], string6477);
                  var_t = opresult6480;
                  setLineNumber(879);    // compilenode string
                  var string6481 = new GraceString("");
                  var var_temp = string6481;
                  setLineNumber(880);    // compilenode call
                  var call6482 = callmethodChecked(var_prelude, "list", [0]);
                  var call6483 = callmethodChecked(call6482, "empty", [0]);
                  var var_ops = call6483;
                  setLineNumber(881);    // compilenode call
                  var call6484 = callmethodChecked(var_prelude, "list", [0]);
                  var call6485 = callmethodChecked(call6484, "empty", [0]);
                  var var_tps = call6485;
                  setLineNumber(882);    // compilenode identifier
                  var call6486 = callmethodChecked(var_o, "value", [0]);
                  var var_node = call6486;
                  var if6487 = GraceDone;
                  setLineNumber(884);    // compilenode string
                  var string6488 = new GraceString("op");
                  var call6490 = callmethodChecked(var_node, "kind", [0]);
                  var opresult6492 = callmethodChecked(call6490, "==", [1], string6488);
                  if (Grace_isTrue(opresult6492)) {
                    setLineNumber(885);    // compilenode block
                    var block6493 = new GraceBlock(this, 885, 0);
                    block6493.real = function() {
                      var string6494 = new GraceString("op");
                      var call6496 = callmethodChecked(var_node, "kind", [0]);
                      var opresult6498 = callmethodChecked(call6496, "==", [1], string6494);
                      return opresult6498;
                    };
                    var block6499 = new GraceBlock(this, 885, 0);
                    block6499.real = function() {
                      setLineNumber(886);    // compilenode identifier
                      var call6500 = callmethodChecked(var_node, "value", [0]);
                      var call6501 = callmethodChecked(var_ops, "push", [1], call6500);
                      var if6502 = GraceDone;
                      setLineNumber(887);    // compilenode string
                      var string6503 = new GraceString("identifier");
                      var call6505 = callmethodChecked(var_node, "right", [0]);
                      var call6506 = callmethodChecked(call6505, "kind", [0]);
                      var opresult6508 = callmethodChecked(call6506, "==", [1], string6503);
                      var string6510 = new GraceString("identifier");
                      var call6512 = callmethodChecked(var_node, "left", [0]);
                      var call6513 = callmethodChecked(call6512, "kind", [0]);
                      var opresult6515 = callmethodChecked(call6513, "==", [1], string6510);
                      var opresult6517 = callmethodChecked(opresult6515, "&&", [1], opresult6508);
                      if (Grace_isTrue(opresult6517)) {
                        setLineNumber(888);    // compilenode string
                        var string6518 = new GraceString("");
                        var call6520 = callmethodChecked(var_node, "right", [0]);
                        var call6521 = callmethodChecked(call6520, "value", [0]);
                        onSelf = true;
                        var call6522 = callmethodChecked(this, "getTypeLink", [1], call6521);
                        var string6524 = new GraceString(" ");
                        var call6526 = callmethodChecked(var_ops, "pop", [0]);
                        var string6528 = new GraceString(" ");
                        var call6530 = callmethodChecked(var_node, "left", [0]);
                        var call6531 = callmethodChecked(call6530, "value", [0]);
                        onSelf = true;
                        var call6532 = callmethodChecked(this, "getTypeLink", [1], call6531);
                        var string6534 = new GraceString("");
                        var opresult6536 = callmethodChecked(string6534, "++", [1], call6532);
                        var opresult6538 = callmethodChecked(opresult6536, "++", [1], string6528);
                        var opresult6540 = callmethodChecked(opresult6538, "++", [1], call6526);
                        var opresult6542 = callmethodChecked(opresult6540, "++", [1], string6524);
                        var opresult6544 = callmethodChecked(opresult6542, "++", [1], call6522);
                        var opresult6546 = callmethodChecked(opresult6544, "++", [1], string6518);
                        var_temp = opresult6546;
                        if6502 = GraceDone;
                      } else {
                        var if6547 = GraceDone;
                        setLineNumber(889);    // compilenode string
                        var string6548 = new GraceString("identifier");
                        var call6550 = callmethodChecked(var_node, "right", [0]);
                        var call6551 = callmethodChecked(call6550, "kind", [0]);
                        var opresult6553 = callmethodChecked(call6551, "==", [1], string6548);
                        if (Grace_isTrue(opresult6553)) {
                          setLineNumber(890);    // compilenode identifier
                          var call6554 = callmethodChecked(var_node, "right", [0]);
                          var call6555 = callmethodChecked(call6554, "value", [0]);
                          var call6556 = callmethodChecked(var_tps, "push", [1], call6555);
                          if6547 = call6556;
                        } else {
                          var if6557 = GraceDone;
                          setLineNumber(891);    // compilenode string
                          var string6558 = new GraceString("identifier");
                          var call6560 = callmethodChecked(var_node, "left", [0]);
                          var call6561 = callmethodChecked(call6560, "kind", [0]);
                          var opresult6563 = callmethodChecked(call6561, "==", [1], string6558);
                          if (Grace_isTrue(opresult6563)) {
                            setLineNumber(892);    // compilenode string
                            var string6564 = new GraceString("");
                            var call6566 = callmethodChecked(var_ops, "pop", [0]);
                            var string6568 = new GraceString(" ");
                            var call6570 = callmethodChecked(var_node, "left", [0]);
                            var call6571 = callmethodChecked(call6570, "value", [0]);
                            onSelf = true;
                            var call6572 = callmethodChecked(this, "getTypeLink", [1], call6571);
                            var string6574 = new GraceString("");
                            var opresult6576 = callmethodChecked(string6574, "++", [1], call6572);
                            var opresult6578 = callmethodChecked(opresult6576, "++", [1], string6568);
                            var opresult6580 = callmethodChecked(opresult6578, "++", [1], call6566);
                            var opresult6582 = callmethodChecked(opresult6580, "++", [1], string6564);
                            var_temp = opresult6582;
                            if6557 = GraceDone;
                          } else {
                            var if6583 = GraceDone;
                            setLineNumber(893);    // compilenode string
                            var string6584 = new GraceString("member");
                            var call6586 = callmethodChecked(var_node, "left", [0]);
                            var call6587 = callmethodChecked(call6586, "kind", [0]);
                            var opresult6589 = callmethodChecked(call6587, "==", [1], string6584);
                            if (Grace_isTrue(opresult6589)) {
                              setLineNumber(894);    // compilenode string
                              var string6590 = new GraceString("");
                              var call6592 = callmethodChecked(var_ops, "pop", [0]);
                              var string6594 = new GraceString(" ");
                              var opresult6596 = callmethodChecked(string6594, "++", [1], call6592);
                              var opresult6598 = callmethodChecked(opresult6596, "++", [1], string6590);
                              var string6600 = new GraceString("");
                              var call6602 = callmethodChecked(var_node, "left", [0]);
                              var call6603 = callmethodChecked(call6602, "value", [0]);
                              var string6605 = new GraceString(".");
                              var call6607 = callmethodChecked(var_node, "left", [0]);
                              var call6608 = callmethodChecked(call6607, "in", [0]);
                              var call6609 = callmethodChecked(call6608, "value", [0]);
                              var string6611 = new GraceString("");
                              var opresult6613 = callmethodChecked(string6611, "++", [1], call6609);
                              var opresult6615 = callmethodChecked(opresult6613, "++", [1], string6605);
                              var opresult6617 = callmethodChecked(opresult6615, "++", [1], call6603);
                              var opresult6619 = callmethodChecked(opresult6617, "++", [1], string6600);
                              onSelf = true;
                              var call6620 = callmethodChecked(this, "getTypeLink", [1], opresult6619);
                              var opresult6622 = callmethodChecked(call6620, "++", [1], opresult6598);
                              var_temp = opresult6622;
                              if6583 = GraceDone;
                            } else {
                              var if6623 = GraceDone;
                              setLineNumber(895);    // compilenode string
                              var string6624 = new GraceString("member");
                              var call6626 = callmethodChecked(var_node, "right", [0]);
                              var call6627 = callmethodChecked(call6626, "kind", [0]);
                              var opresult6629 = callmethodChecked(call6627, "==", [1], string6624);
                              if (Grace_isTrue(opresult6629)) {
                                setLineNumber(896);    // compilenode string
                                var string6630 = new GraceString("");
                                var call6632 = callmethodChecked(var_node, "left", [0]);
                                var call6633 = callmethodChecked(call6632, "value", [0]);
                                var string6635 = new GraceString(".");
                                var call6637 = callmethodChecked(var_node, "left", [0]);
                                var call6638 = callmethodChecked(call6637, "in", [0]);
                                var call6639 = callmethodChecked(call6638, "value", [0]);
                                var string6641 = new GraceString("");
                                var opresult6643 = callmethodChecked(string6641, "++", [1], call6639);
                                var opresult6645 = callmethodChecked(opresult6643, "++", [1], string6635);
                                var opresult6647 = callmethodChecked(opresult6645, "++", [1], call6633);
                                var opresult6649 = callmethodChecked(opresult6647, "++", [1], string6630);
                                var call6650 = callmethodChecked(var_tps, "push", [1], opresult6649);
                                if6623 = call6650;
                              }
                              if6583 = if6623;
                            }
                            if6557 = if6583;
                          }
                          if6547 = if6557;
                        }
                        if6502 = if6547;
                      }
                      setLineNumber(898);    // compilenode identifier
                      var call6651 = callmethodChecked(var_node, "left", [0]);
                      var_node = call6651;
                      return GraceDone;
                    };
                    var call6652 = callmethodChecked(var_prelude, "while()do", [1, 1], block6493, block6499);
                    setLineNumber(900);    // compilenode block
                    var block6653 = new GraceBlock(this, 900, 0);
                    block6653.real = function() {
                      var call6655 = callmethodChecked(var_ops, "size", [0]);
                      var opresult6657 = callmethodChecked(call6655, ">", [1], new GraceNum(0));
                      var call6660 = callmethodChecked(var_tps, "size", [0]);
                      var opresult6662 = callmethodChecked(call6660, ">", [1], new GraceNum(0));
                      var opresult6664 = callmethodChecked(opresult6662, "&&", [1], opresult6657);
                      return opresult6664;
                    };
                    var block6665 = new GraceBlock(this, 900, 0);
                    block6665.real = function() {
                      setLineNumber(901);    // compilenode identifier
                      var call6666 = callmethodChecked(var_tps, "pop", [0]);
                      var var_p = call6666;
                      setLineNumber(902);    // compilenode string
                      var string6667 = new GraceString("");
                      var call6669 = callmethodChecked(var_p, "value", [0]);
                      onSelf = true;
                      var call6670 = callmethodChecked(this, "getTypeLink", [1], call6669);
                      var string6672 = new GraceString(" ");
                      var call6674 = callmethodChecked(var_ops, "pop", [0]);
                      var string6676 = new GraceString(" ");
                      var string6679 = new GraceString("");
                      var opresult6681 = callmethodChecked(string6679, "++", [1], var_temp);
                      var opresult6683 = callmethodChecked(opresult6681, "++", [1], string6676);
                      var opresult6685 = callmethodChecked(opresult6683, "++", [1], call6674);
                      var opresult6687 = callmethodChecked(opresult6685, "++", [1], string6672);
                      var opresult6689 = callmethodChecked(opresult6687, "++", [1], call6670);
                      var opresult6691 = callmethodChecked(opresult6689, "++", [1], string6667);
                      var_temp = opresult6691;
                      return GraceDone;
                    };
                    var call6692 = callmethodChecked(var_prelude, "while()do", [1, 1], block6653, block6665);
                    var if6693 = GraceDone;
                    setLineNumber(904);    // compilenode identifier
                    var call6695 = callmethodChecked(var_ops, "size", [0]);
                    var opresult6697 = callmethodChecked(call6695, ">", [1], new GraceNum(0));
                    if (Grace_isTrue(opresult6697)) {
                      setLineNumber(905);    // compilenode string
                      var string6698 = new GraceString("");
                      var call6700 = callmethodChecked(var_ops, "pop", [0]);
                      var string6702 = new GraceString(" ");
                      var string6705 = new GraceString("");
                      var opresult6707 = callmethodChecked(string6705, "++", [1], var_temp);
                      var opresult6709 = callmethodChecked(opresult6707, "++", [1], string6702);
                      var opresult6711 = callmethodChecked(opresult6709, "++", [1], call6700);
                      var opresult6713 = callmethodChecked(opresult6711, "++", [1], string6698);
                      var_temp = opresult6713;
                      if6693 = GraceDone;
                    }
                    setLineNumber(907);    // compilenode string
                    var string6714 = new GraceString(" type ");
                    var opresult6718 = callmethodChecked(var_t, "++", [1], var_temp);
                    var opresult6720 = callmethodChecked(opresult6718, "++", [1], string6714);
                    var_t = opresult6720;
                    setLineNumber(908);    // compilenode string
                    var string6721 = new GraceString("{ <span class='quiet'>...added methods below...</span> }");
                    var opresult6724 = callmethodChecked(var_t, "++", [1], string6721);
                    var_t = opresult6724;
                    if6487 = GraceDone;
                  } else {
                    var if6725 = GraceDone;
                    setLineNumber(909);    // compilenode string
                    var string6726 = new GraceString("typeliteral");
                    var call6728 = callmethodChecked(var_node, "kind", [0]);
                    var opresult6730 = callmethodChecked(call6728, "==", [1], string6726);
                    if (Grace_isTrue(opresult6730)) {
                      setLineNumber(910);    // compilenode string
                      var string6731 = new GraceString(" type ");
                      var opresult6735 = callmethodChecked(var_t, "++", [1], var_temp);
                      var opresult6737 = callmethodChecked(opresult6735, "++", [1], string6731);
                      var_t = opresult6737;
                      setLineNumber(911);    // compilenode string
                      var string6738 = new GraceString("{ <span class='quiet'>...added methods below...</span> }");
                      var opresult6741 = callmethodChecked(var_t, "++", [1], string6738);
                      var_t = opresult6741;
                      if6725 = GraceDone;
                    } else {
                      var if6742 = GraceDone;
                      setLineNumber(912);    // compilenode string
                      var string6743 = new GraceString("identifier");
                      var call6745 = callmethodChecked(var_node, "kind", [0]);
                      var opresult6747 = callmethodChecked(call6745, "==", [1], string6743);
                      if (Grace_isTrue(opresult6747)) {
                        setLineNumber(913);    // compilenode identifier
                        var call6748 = callmethodChecked(var_node, "value", [0]);
                        onSelf = true;
                        var call6749 = callmethodChecked(this, "getTypeLink", [1], call6748);
                        var string6751 = new GraceString(" ");
                        var opresult6754 = callmethodChecked(var_t, "++", [1], string6751);
                        var opresult6756 = callmethodChecked(opresult6754, "++", [1], call6749);
                        var_t = opresult6756;
                        var if6757 = GraceDone;
                        setLineNumber(914);    // compilenode identifier
                        var call6759 = callmethodChecked(var_node, "generics", [0]);
                        var opresult6761 = callmethodChecked(call6759, "\u2260", [1], GraceFalse);
                        if (Grace_isTrue(opresult6761)) {
                          setLineNumber(915);    // compilenode string
                          var string6762 = new GraceString("&lt;");
                          var opresult6765 = callmethodChecked(var_t, "++", [1], string6762);
                          var_t = opresult6765;
                          setLineNumber(916);    // compilenode identifier
                          var call6766 = callmethodChecked(var_node, "generics", [0]);
                          var block6767 = new GraceBlock(this, 916, 1);
                          setLineNumber(1);    // compilenode identifier
                          block6767.real = function(var_g) {
                            setLineNumber(917);    // compilenode identifier
                            var call6768 = callmethodChecked(var_g, "value", [0]);
                            var opresult6771 = callmethodChecked(var_t, "++", [1], call6768);
                            var_t = opresult6771;
                            var if6772 = GraceDone;
                            setLineNumber(918);    // compilenode identifier
                            var call6773 = callmethodChecked(var_node, "generics", [0]);
                            var call6774 = callmethodChecked(call6773, "last", [0]);
                            var opresult6777 = callmethodChecked(var_g, "\u2260", [1], call6774);
                            if (Grace_isTrue(opresult6777)) {
                              var string6778 = new GraceString(", ");
                              var opresult6781 = callmethodChecked(var_t, "++", [1], string6778);
                              var_t = opresult6781;
                              if6772 = GraceDone;
                            }
                            return if6772;
                          };
                          var call6782 = callmethodChecked(var_prelude, "for()do", [1, 1], call6766, block6767);
                          setLineNumber(920);    // compilenode string
                          var string6783 = new GraceString("&gt;");
                          var opresult6786 = callmethodChecked(var_t, "++", [1], string6783);
                          var_t = opresult6786;
                          if6757 = GraceDone;
                        }
                        if6742 = if6757;
                      } else {
                        var if6787 = GraceDone;
                        setLineNumber(922);    // compilenode string
                        var string6788 = new GraceString("member");
                        var call6790 = callmethodChecked(var_node, "kind", [0]);
                        var opresult6792 = callmethodChecked(call6790, "==", [1], string6788);
                        if (Grace_isTrue(opresult6792)) {
                          setLineNumber(923);    // compilenode string
                          var string6793 = new GraceString("");
                          var call6795 = callmethodChecked(var_node, "value", [0]);
                          var string6797 = new GraceString(".");
                          var call6799 = callmethodChecked(var_node, "in", [0]);
                          var call6800 = callmethodChecked(call6799, "value", [0]);
                          var string6802 = new GraceString("");
                          var opresult6804 = callmethodChecked(string6802, "++", [1], call6800);
                          var opresult6806 = callmethodChecked(opresult6804, "++", [1], string6797);
                          var opresult6808 = callmethodChecked(opresult6806, "++", [1], call6795);
                          var opresult6810 = callmethodChecked(opresult6808, "++", [1], string6793);
                          onSelf = true;
                          var call6811 = callmethodChecked(this, "getTypeLink", [1], opresult6810);
                          var opresult6814 = callmethodChecked(var_t, "++", [1], call6811);
                          var_t = opresult6814;
                          var if6815 = GraceDone;
                          setLineNumber(924);    // compilenode identifier
                          var call6817 = callmethodChecked(var_node, "generics", [0]);
                          var opresult6819 = callmethodChecked(call6817, "\u2260", [1], GraceFalse);
                          if (Grace_isTrue(opresult6819)) {
                            setLineNumber(925);    // compilenode string
                            var string6820 = new GraceString("&lt;");
                            var opresult6823 = callmethodChecked(var_t, "++", [1], string6820);
                            var_t = opresult6823;
                            setLineNumber(926);    // compilenode identifier
                            var call6824 = callmethodChecked(var_node, "generics", [0]);
                            var block6825 = new GraceBlock(this, 926, 1);
                            setLineNumber(1);    // compilenode identifier
                            block6825.real = function(var_g) {
                              setLineNumber(927);    // compilenode identifier
                              var call6826 = callmethodChecked(var_g, "value", [0]);
                              var opresult6829 = callmethodChecked(var_t, "++", [1], call6826);
                              var_t = opresult6829;
                              var if6830 = GraceDone;
                              setLineNumber(928);    // compilenode identifier
                              var call6831 = callmethodChecked(var_node, "generics", [0]);
                              var call6832 = callmethodChecked(call6831, "last", [0]);
                              var opresult6835 = callmethodChecked(var_g, "\u2260", [1], call6832);
                              if (Grace_isTrue(opresult6835)) {
                                var string6836 = new GraceString(", ");
                                var opresult6839 = callmethodChecked(var_t, "++", [1], string6836);
                                var_t = opresult6839;
                                if6830 = GraceDone;
                              }
                              return if6830;
                            };
                            var call6840 = callmethodChecked(var_prelude, "for()do", [1, 1], call6824, block6825);
                            setLineNumber(930);    // compilenode string
                            var string6841 = new GraceString("&gt;");
                            var opresult6844 = callmethodChecked(var_t, "++", [1], string6841);
                            var_t = opresult6844;
                            if6815 = GraceDone;
                          }
                          if6787 = if6815;
                        }
                        if6742 = if6787;
                      }
                      if6725 = if6742;
                    }
                    if6487 = if6725;
                  }
                  setLineNumber(933);    // compilenode string
                  var string6845 = new GraceString("</code></span>");
                  var opresult6848 = callmethodChecked(var_t, "++", [1], string6845);
                  var_t = opresult6848;
                  setLineNumber(934);    // compilenode string
                  var string6849 = new GraceString("<hr />");
                  var opresult6852 = callmethodChecked(var_t, "++", [1], string6849);
                  var_t = opresult6852;
                  setLineNumber(935);    // compilenode string
                  var string6853 = new GraceString("top-box-description");
                  var call6854 = callmethodChecked(superDepth, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call6855 = callmethodChecked(call6854, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call6856 = callmethodChecked(call6855, "formatComments()rowClass()colspan", [1, 1, 1], var_o, string6853, new GraceNum(1));
                  var opresult6859 = callmethodChecked(var_t, "++", [1], call6856);
                  var_t = opresult6859;
                  setLineNumber(936);    // compilenode call
                  onSelf = true;
                  var call6860 = callmethodChecked(this, "topDescSection", [0]);
                  var call6861 = callmethodChecked(call6860, "insert", [1], var_t);
                  setLineNumber(937);    // compilenode identifier
                  return GraceTrue;
                }
                setLineNumber(848);    // return value
                if (!Grace_isTrue(callmethod(var_Boolean, "match", [1], if6345)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitTypeDec(1) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return if6345;
              };
              func6344.paramCounts = [1];
              obj5125.methods["visitTypeDec"] = func6344;
              func6344.definitionLine = 847;
              func6344.definitionModule = "gracedoc";
              var func6862 = function(argcv) {    // method visitMethod(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_o = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitMethod(1)"));
                setModuleName("gracedoc");
                var if6863 = GraceDone;
                setLineNumber(943);    // compilenode identifier
                var call6864 = callmethodChecked(var_o, "isConfidential", [0]);
                var call6866 = callmethodChecked(var_settings, "publicOnly", [0]);
                var opresult6868 = callmethodChecked(call6866, "&&", [1], call6864);
                if (Grace_isTrue(opresult6868)) {
                  return GraceFalse;
                }
                var if6869 = GraceDone;
                setLineNumber(944);    // compilenode identifier
                var call6870 = callmethodChecked(var_o, "isClass", [0]);
                if (Grace_isTrue(call6870)) {
                  setLineNumber(945);    // compilenode identifier
                  onSelf = true;
                  var call6871 = callmethodChecked(this, "doClassMethod", [1], var_o);
                  return call6871;
                }
                setLineNumber(947);    // compilenode string
                var string6872 = new GraceString("<tr class='placeholder'><td><code>");
                var var_t = string6872;
                setLineNumber(948);    // compilenode string
                var string6873 = new GraceString("");
                var var_n = string6873;
                setLineNumber(949);    // compilenode identifier
                var call6874 = callmethodChecked(var_o, "signature", [0]);
                var block6875 = new GraceBlock(this, 949, 1);
                setLineNumber(1);    // compilenode identifier
                block6875.real = function(var_part) {
                  setLineNumber(950);    // compilenode string
                  var string6876 = new GraceString("</span>");
                  var call6878 = callmethodChecked(var_part, "name", [0]);
                  var string6880 = new GraceString("<span class='method-name'>");
                  var opresult6883 = callmethodChecked(var_t, "++", [1], string6880);
                  var opresult6885 = callmethodChecked(opresult6883, "++", [1], call6878);
                  var opresult6887 = callmethodChecked(opresult6885, "++", [1], string6876);
                  var_t = opresult6887;
                  setLineNumber(951);    // compilenode identifier
                  var call6888 = callmethodChecked(var_part, "name", [0]);
                  var opresult6891 = callmethodChecked(var_n, "++", [1], call6888);
                  var_n = opresult6891;
                  var if6892 = GraceDone;
                  setLineNumber(952);    // compilenode identifier
                  var call6893 = callmethodChecked(var_o, "signature", [0]);
                  var call6894 = callmethodChecked(call6893, "last", [0]);
                  var opresult6897 = callmethodChecked(var_part, "\u2260", [1], call6894);
                  if (Grace_isTrue(opresult6897)) {
                    var string6898 = new GraceString("()");
                    var opresult6901 = callmethodChecked(var_n, "++", [1], string6898);
                    var_n = opresult6901;
                    if6892 = GraceDone;
                  }
                  var if6902 = GraceDone;
                  setLineNumber(953);    // compilenode identifier
                  var call6904 = callmethodChecked(var_part, "params", [0]);
                  var call6905 = callmethodChecked(call6904, "size", [0]);
                  var opresult6907 = callmethodChecked(call6905, ">", [1], new GraceNum(0));
                  if (Grace_isTrue(opresult6907)) {
                    setLineNumber(954);    // compilenode string
                    var string6908 = new GraceString("(");
                    var opresult6911 = callmethodChecked(var_t, "++", [1], string6908);
                    var_t = opresult6911;
                    setLineNumber(955);    // compilenode identifier
                    var call6912 = callmethodChecked(var_part, "params", [0]);
                    var block6913 = new GraceBlock(this, 955, 1);
                    setLineNumber(1);    // compilenode identifier
                    block6913.real = function(var_param) {
                      var if6914 = GraceDone;
                      setLineNumber(956);    // compilenode identifier
                      var call6916 = callmethodChecked(var_param, "dtype", [0]);
                      var opresult6918 = callmethodChecked(call6916, "\u2260", [1], GraceFalse);
                      if (Grace_isTrue(opresult6918)) {
                        setLineNumber(957);    // compilenode string
                        var string6919 = new GraceString("</span>");
                        var call6921 = callmethodChecked(var_param, "nameString", [0]);
                        var string6923 = new GraceString("<span class='parameter-name'>");
                        var opresult6926 = callmethodChecked(var_t, "++", [1], string6923);
                        var opresult6928 = callmethodChecked(opresult6926, "++", [1], call6921);
                        var opresult6930 = callmethodChecked(opresult6928, "++", [1], string6919);
                        var_t = opresult6930;
                        setLineNumber(959);    // compilenode string
                        var string6931 = new GraceString(":<span class='parameter-type'>");
                        var opresult6934 = callmethodChecked(var_t, "++", [1], string6931);
                        var_t = opresult6934;
                        var if6935 = GraceDone;
                        setLineNumber(960);    // compilenode string
                        var string6936 = new GraceString("identifier");
                        var call6938 = callmethodChecked(var_param, "dtype", [0]);
                        var call6939 = callmethodChecked(call6938, "kind", [0]);
                        var opresult6941 = callmethodChecked(call6939, "==", [1], string6936);
                        if (Grace_isTrue(opresult6941)) {
                          setLineNumber(961);    // compilenode identifier
                          var call6942 = callmethodChecked(var_param, "dtype", [0]);
                          var call6943 = callmethodChecked(call6942, "value", [0]);
                          onSelf = true;
                          var call6944 = callmethodChecked(this, "getTypeLink", [1], call6943);
                          var opresult6947 = callmethodChecked(var_t, "++", [1], call6944);
                          var_t = opresult6947;
                          if6935 = GraceDone;
                        } else {
                          var if6948 = GraceDone;
                          setLineNumber(962);    // compilenode string
                          var string6949 = new GraceString("generic");
                          var call6951 = callmethodChecked(var_param, "dtype", [0]);
                          var call6952 = callmethodChecked(call6951, "kind", [0]);
                          var opresult6954 = callmethodChecked(call6952, "==", [1], string6949);
                          if (Grace_isTrue(opresult6954)) {
                            setLineNumber(963);    // compilenode string
                            var string6955 = new GraceString("&lt;");
                            var call6957 = callmethodChecked(var_param, "dtype", [0]);
                            var call6958 = callmethodChecked(call6957, "value", [0]);
                            var call6959 = callmethodChecked(call6958, "value", [0]);
                            onSelf = true;
                            var call6960 = callmethodChecked(this, "getTypeLink", [1], call6959);
                            var opresult6963 = callmethodChecked(var_t, "++", [1], call6960);
                            var opresult6965 = callmethodChecked(opresult6963, "++", [1], string6955);
                            var_t = opresult6965;
                            setLineNumber(964);    // compilenode block
                            var block6966 = new GraceBlock(this, 964, 1);
                            setLineNumber(1);    // compilenode identifier
                            block6966.real = function(var_each) {
                              setLineNumber(964);    // compilenode string
                              var string6967 = new GraceString("");
                              var call6969 = callmethodChecked(var_each, "value", [0]);
                              onSelf = true;
                              var call6970 = callmethodChecked(this, "getTypeLink", [1], call6969);
                              var string6972 = new GraceString("");
                              var string6975 = new GraceString("");
                              var opresult6977 = callmethodChecked(string6975, "++", [1], var_t);
                              var opresult6979 = callmethodChecked(opresult6977, "++", [1], string6972);
                              var opresult6981 = callmethodChecked(opresult6979, "++", [1], call6970);
                              var opresult6983 = callmethodChecked(opresult6981, "++", [1], string6967);
                              var_t = opresult6983;
                              return GraceDone;
                            };
                            var block6984 = new GraceBlock(this, 964, 0);
                            block6984.real = function() {
                              var string6985 = new GraceString(", ");
                              var opresult6988 = callmethodChecked(var_t, "++", [1], string6985);
                              var_t = opresult6988;
                              return GraceDone;
                            };
                            var call6989 = callmethodChecked(var_param, "dtype", [0]);
                            var call6990 = callmethodChecked(call6989, "args", [0]);
                            var call6991 = callmethodChecked(call6990, "do()separatedBy", [1, 1], block6966, block6984);
                            setLineNumber(965);    // compilenode string
                            var string6992 = new GraceString("&gt;");
                            var opresult6995 = callmethodChecked(var_t, "++", [1], string6992);
                            var_t = opresult6995;
                            if6948 = GraceDone;
                          }
                          if6935 = if6948;
                        }
                        setLineNumber(967);    // compilenode string
                        var string6996 = new GraceString("</span>");
                        var opresult6999 = callmethodChecked(var_t, "++", [1], string6996);
                        var_t = opresult6999;
                        if6914 = GraceDone;
                      } else {
                        setLineNumber(970);    // compilenode string
                        var string7000 = new GraceString("</span>");
                        var call7002 = callmethodChecked(var_param, "nameString", [0]);
                        var string7004 = new GraceString("<span class='parameter-name'>");
                        var opresult7007 = callmethodChecked(var_t, "++", [1], string7004);
                        var opresult7009 = callmethodChecked(opresult7007, "++", [1], call7002);
                        var opresult7011 = callmethodChecked(opresult7009, "++", [1], string7000);
                        var_t = opresult7011;
                        if6914 = GraceDone;
                      }
                      var if7012 = GraceDone;
                      setLineNumber(972);    // compilenode identifier
                      var call7013 = callmethodChecked(var_part, "params", [0]);
                      var call7014 = callmethodChecked(call7013, "last", [0]);
                      var opresult7017 = callmethodChecked(var_param, "\u2260", [1], call7014);
                      var call7020 = callmethodChecked(var_part, "params", [0]);
                      var call7021 = callmethodChecked(call7020, "size", [0]);
                      var opresult7023 = callmethodChecked(call7021, ">", [1], new GraceNum(1));
                      var opresult7025 = callmethodChecked(opresult7023, "&&", [1], opresult7017);
                      if (Grace_isTrue(opresult7025)) {
                        setLineNumber(973);    // compilenode string
                        var string7026 = new GraceString(", ");
                        var opresult7029 = callmethodChecked(var_t, "++", [1], string7026);
                        var_t = opresult7029;
                        if7012 = GraceDone;
                      }
                      return if7012;
                    };
                    var call7030 = callmethodChecked(var_prelude, "for()do", [1, 1], call6912, block6913);
                    setLineNumber(976);    // compilenode string
                    var string7031 = new GraceString(")");
                    var opresult7034 = callmethodChecked(var_t, "++", [1], string7031);
                    var_t = opresult7034;
                    if6902 = GraceDone;
                  }
                  return if6902;
                };
                var call7035 = callmethodChecked(var_prelude, "for()do", [1, 1], call6874, block6875);
                setLineNumber(979);    // compilenode string
                var string7036 = new GraceString("</code></td>");
                var opresult7039 = callmethodChecked(var_t, "++", [1], string7036);
                var_t = opresult7039;
                setLineNumber(980);    // compilenode string
                var string7040 = new GraceString("<td><code>");
                var opresult7043 = callmethodChecked(var_t, "++", [1], string7040);
                var_t = opresult7043;
                var if7044 = GraceDone;
                setLineNumber(981);    // compilenode identifier
                var call7046 = callmethodChecked(var_o, "dtype", [0]);
                var opresult7048 = callmethodChecked(call7046, "\u2260", [1], GraceFalse);
                if (Grace_isTrue(opresult7048)) {
                  setLineNumber(982);    // compilenode identifier
                  var call7049 = callmethodChecked(var_o, "dtype", [0]);
                  var call7050 = callmethodChecked(call7049, "value", [0]);
                  onSelf = true;
                  var call7051 = callmethodChecked(this, "getTypeLink", [1], call7050);
                  var opresult7054 = callmethodChecked(var_t, "++", [1], call7051);
                  var_t = opresult7054;
                  if7044 = GraceDone;
                } else {
                  setLineNumber(984);    // compilenode string
                  var string7055 = new GraceString("Done");
                  onSelf = true;
                  var call7056 = callmethodChecked(this, "getTypeLink", [1], string7055);
                  var opresult7059 = callmethodChecked(var_t, "++", [1], call7056);
                  var_t = opresult7059;
                  if7044 = GraceDone;
                }
                setLineNumber(986);    // compilenode string
                var string7060 = new GraceString("</code></td></tr>");
                var opresult7063 = callmethodChecked(var_t, "++", [1], string7060);
                var_t = opresult7063;
                setLineNumber(987);    // compilenode string
                var string7064 = new GraceString("description");
                var call7065 = callmethodChecked(superDepth, "outer", [0]);
                onOuter = true;
                onSelf = true;
                var call7066 = callmethodChecked(call7065, "outer", [0]);
                onOuter = true;
                onSelf = true;
                var call7067 = callmethodChecked(call7066, "formatComments()rowClass()colspan", [1, 1, 1], var_o, string7064, new GraceNum(2));
                var opresult7070 = callmethodChecked(var_t, "++", [1], call7067);
                var_t = opresult7070;
                setLineNumber(988);    // compilenode call
                onSelf = true;
                var call7071 = callmethodChecked(this, "methodsSection", [0]);
                var call7072 = callmethodChecked(call7071, "addElement()withText", [1, 1], var_n, var_t);
                setLineNumber(989);    // compilenode identifier
                return GraceFalse;
              };
              func6862.paramCounts = [1];
              obj5125.methods["visitMethod"] = func6862;
              func6862.definitionLine = 941;
              func6862.definitionModule = "gracedoc";
              var func7073 = function(argcv) {    // method doClassMethod(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_m = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for doClassMethod(1)"));
                setModuleName("gracedoc");
                setLineNumber(993);    // compilenode identifier
                var call7074 = callmethodChecked(var_m, "body", [0]);
                var call7075 = callmethodChecked(call7074, "last", [0]);
                var var_o = call7075;
                var if7076 = GraceDone;
                setLineNumber(995);    // compilenode call
                onSelf = true;
                var call7078 = callmethodChecked(this, "isOnClassPage", [0]);
                var opresult7080 = callmethodChecked(call7078, "==", [1], GraceFalse);
                if (Grace_isTrue(opresult7080)) {
                  setLineNumber(996);    // compilenode string
                  var string7081 = new GraceString("<tr class='placeholder'>");
                  var var_t = string7081;
                  setLineNumber(997);    // compilenode identifier
                  var call7082 = callmethodChecked(var_m, "nameString", [0]);
                  var var_n = call7082;
                  setLineNumber(998);    // compilenode string
                  var string7083 = new GraceString("</span>");
                  onSelf = true;
                  var call7085 = callmethodChecked(this, "getClassLink", [1], var_n);
                  var string7087 = new GraceString("<td><code><span class='class-name'>");
                  var opresult7089 = callmethodChecked(string7087, "++", [1], call7085);
                  var opresult7091 = callmethodChecked(opresult7089, "++", [1], string7083);
                  var opresult7094 = callmethodChecked(var_t, "++", [1], opresult7091);
                  var_t = opresult7094;
                  setLineNumber(999);    // compilenode string
                  var string7095 = new GraceString(".");
                  var opresult7098 = callmethodChecked(var_t, "++", [1], string7095);
                  var_t = opresult7098;
                  setLineNumber(1000);    // compilenode block
                  var block7099 = new GraceBlock(this, 1000, 1);
                  setLineNumber(1);    // compilenode identifier
                  block7099.real = function(var_part) {
                    setLineNumber(1001);    // compilenode string
                    var string7100 = new GraceString("</span>");
                    var call7102 = callmethodChecked(var_part, "name", [0]);
                    var string7104 = new GraceString("<span class='method-name'>");
                    var opresult7106 = callmethodChecked(string7104, "++", [1], call7102);
                    var opresult7108 = callmethodChecked(opresult7106, "++", [1], string7100);
                    var opresult7111 = callmethodChecked(var_t, "++", [1], opresult7108);
                    var_t = opresult7111;
                    var if7112 = GraceDone;
                    setLineNumber(1002);    // compilenode identifier
                    var call7114 = callmethodChecked(var_part, "params", [0]);
                    var call7115 = callmethodChecked(call7114, "size", [0]);
                    var opresult7117 = callmethodChecked(call7115, ">", [1], new GraceNum(0));
                    if (Grace_isTrue(opresult7117)) {
                      setLineNumber(1003);    // compilenode string
                      var string7118 = new GraceString("(");
                      var opresult7121 = callmethodChecked(var_t, "++", [1], string7118);
                      var_t = opresult7121;
                      setLineNumber(1004);    // compilenode identifier
                      var call7122 = callmethodChecked(var_part, "params", [0]);
                      var block7123 = new GraceBlock(this, 1004, 1);
                      setLineNumber(1);    // compilenode identifier
                      block7123.real = function(var_param) {
                        var if7124 = GraceDone;
                        setLineNumber(1005);    // compilenode identifier
                        var call7126 = callmethodChecked(var_param, "dtype", [0]);
                        var opresult7128 = callmethodChecked(call7126, "\u2260", [1], GraceFalse);
                        if (Grace_isTrue(opresult7128)) {
                          setLineNumber(1006);    // compilenode string
                          var string7129 = new GraceString("</span>");
                          var call7131 = callmethodChecked(var_param, "value", [0]);
                          var string7133 = new GraceString("<span class='parameter-name'>");
                          var opresult7136 = callmethodChecked(var_t, "++", [1], string7133);
                          var opresult7138 = callmethodChecked(opresult7136, "++", [1], call7131);
                          var opresult7140 = callmethodChecked(opresult7138, "++", [1], string7129);
                          var_t = opresult7140;
                          setLineNumber(1007);    // compilenode string
                          var string7141 = new GraceString("</span>");
                          var call7143 = callmethodChecked(var_param, "dtype", [0]);
                          var call7144 = callmethodChecked(call7143, "value", [0]);
                          onSelf = true;
                          var call7145 = callmethodChecked(this, "getTypeLink", [1], call7144);
                          var string7147 = new GraceString(":<span class='parameter-type'>");
                          var opresult7150 = callmethodChecked(var_t, "++", [1], string7147);
                          var opresult7152 = callmethodChecked(opresult7150, "++", [1], call7145);
                          var opresult7154 = callmethodChecked(opresult7152, "++", [1], string7141);
                          var_t = opresult7154;
                          if7124 = GraceDone;
                        } else {
                          setLineNumber(1009);    // compilenode string
                          var string7155 = new GraceString("</span>");
                          var call7157 = callmethodChecked(var_param, "value", [0]);
                          var string7159 = new GraceString("<span class='parameter-name'>");
                          var opresult7162 = callmethodChecked(var_t, "++", [1], string7159);
                          var opresult7164 = callmethodChecked(opresult7162, "++", [1], call7157);
                          var opresult7166 = callmethodChecked(opresult7164, "++", [1], string7155);
                          var_t = opresult7166;
                          if7124 = GraceDone;
                        }
                        var if7167 = GraceDone;
                        setLineNumber(1011);    // compilenode identifier
                        var call7168 = callmethodChecked(var_part, "params", [0]);
                        var call7169 = callmethodChecked(call7168, "last", [0]);
                        var opresult7172 = callmethodChecked(var_param, "\u2260", [1], call7169);
                        var call7175 = callmethodChecked(var_part, "params", [0]);
                        var call7176 = callmethodChecked(call7175, "size", [0]);
                        var opresult7178 = callmethodChecked(call7176, ">", [1], new GraceNum(1));
                        var opresult7180 = callmethodChecked(opresult7178, "&&", [1], opresult7172);
                        if (Grace_isTrue(opresult7180)) {
                          setLineNumber(1012);    // compilenode string
                          var string7181 = new GraceString(", ");
                          var opresult7184 = callmethodChecked(var_t, "++", [1], string7181);
                          var_t = opresult7184;
                          if7167 = GraceDone;
                        }
                        return if7167;
                      };
                      var call7185 = callmethodChecked(var_prelude, "for()do", [1, 1], call7122, block7123);
                      setLineNumber(1015);    // compilenode string
                      var string7186 = new GraceString(")");
                      var opresult7189 = callmethodChecked(var_t, "++", [1], string7186);
                      var_t = opresult7189;
                      if7112 = GraceDone;
                    }
                    return if7112;
                  };
                  setLineNumber(1000);    // compilenode identifier
                  var call7190 = callmethodChecked(var_m, "signature", [0]);
                  var call7191 = callmethodChecked(call7190, "do", [1], block7099);
                  var if7192 = GraceDone;
                  setLineNumber(1019);    // compilenode identifier
                  var call7194 = callmethodChecked(var_m, "dtype", [0]);
                  var opresult7196 = callmethodChecked(call7194, "\u2260", [1], GraceFalse);
                  if (Grace_isTrue(opresult7196)) {
                    setLineNumber(1020);    // compilenode string
                    var string7197 = new GraceString(" -> ");
                    var opresult7200 = callmethodChecked(var_t, "++", [1], string7197);
                    var_t = opresult7200;
                    var if7201 = GraceDone;
                    setLineNumber(1021);    // compilenode string
                    var string7202 = new GraceString("identifier");
                    var call7204 = callmethodChecked(var_m, "dtype", [0]);
                    var call7205 = callmethodChecked(call7204, "kind", [0]);
                    var opresult7207 = callmethodChecked(call7205, "==", [1], string7202);
                    if (Grace_isTrue(opresult7207)) {
                      setLineNumber(1022);    // compilenode identifier
                      var call7208 = callmethodChecked(var_o, "dtype", [0]);
                      var call7209 = callmethodChecked(call7208, "value", [0]);
                      onSelf = true;
                      var call7210 = callmethodChecked(this, "getTypeLink", [1], call7209);
                      var opresult7213 = callmethodChecked(var_t, "++", [1], call7210);
                      var_t = opresult7213;
                      if7201 = GraceDone;
                    } else {
                      var if7214 = GraceDone;
                      setLineNumber(1023);    // compilenode string
                      var string7215 = new GraceString("generic");
                      var call7217 = callmethodChecked(var_m, "dtype", [0]);
                      var call7218 = callmethodChecked(call7217, "kind", [0]);
                      var opresult7220 = callmethodChecked(call7218, "==", [1], string7215);
                      if (Grace_isTrue(opresult7220)) {
                        setLineNumber(1024);    // compilenode string
                        var string7221 = new GraceString("&lt;");
                        var call7223 = callmethodChecked(var_o, "dtype", [0]);
                        var call7224 = callmethodChecked(call7223, "value", [0]);
                        var call7225 = callmethodChecked(call7224, "value", [0]);
                        onSelf = true;
                        var call7226 = callmethodChecked(this, "getTypeLink", [1], call7225);
                        var opresult7229 = callmethodChecked(var_t, "++", [1], call7226);
                        var opresult7231 = callmethodChecked(opresult7229, "++", [1], string7221);
                        var_t = opresult7231;
                        setLineNumber(1025);    // compilenode block
                        var block7232 = new GraceBlock(this, 1025, 1);
                        setLineNumber(1);    // compilenode identifier
                        block7232.real = function(var_each) {
                          setLineNumber(1025);    // compilenode string
                          var string7233 = new GraceString("");
                          var call7235 = callmethodChecked(var_each, "value", [0]);
                          onSelf = true;
                          var call7236 = callmethodChecked(this, "getTypeLink", [1], call7235);
                          var string7238 = new GraceString("");
                          var string7241 = new GraceString("");
                          var opresult7243 = callmethodChecked(string7241, "++", [1], var_t);
                          var opresult7245 = callmethodChecked(opresult7243, "++", [1], string7238);
                          var opresult7247 = callmethodChecked(opresult7245, "++", [1], call7236);
                          var opresult7249 = callmethodChecked(opresult7247, "++", [1], string7233);
                          var_t = opresult7249;
                          return GraceDone;
                        };
                        var block7250 = new GraceBlock(this, 1025, 0);
                        block7250.real = function() {
                          var string7251 = new GraceString(", ");
                          var opresult7254 = callmethodChecked(var_t, "++", [1], string7251);
                          var_t = opresult7254;
                          return GraceDone;
                        };
                        var call7255 = callmethodChecked(var_m, "dtype", [0]);
                        var call7256 = callmethodChecked(call7255, "args", [0]);
                        var call7257 = callmethodChecked(call7256, "do()separatedBy", [1, 1], block7232, block7250);
                        setLineNumber(1026);    // compilenode string
                        var string7258 = new GraceString("&gt;");
                        var opresult7261 = callmethodChecked(var_t, "++", [1], string7258);
                        var_t = opresult7261;
                        if7214 = GraceDone;
                      }
                      if7201 = if7214;
                    }
                    if7192 = if7201;
                  }
                  setLineNumber(1029);    // compilenode string
                  var string7262 = new GraceString("</code></td></tr>");
                  var opresult7265 = callmethodChecked(var_t, "++", [1], string7262);
                  var_t = opresult7265;
                  var if7266 = GraceDone;
                  setLineNumber(1031);    // compilenode identifier
                  var call7268 = callmethodChecked(var_o, "superclass", [0]);
                  var opresult7270 = callmethodChecked(call7268, "\u2260", [1], GraceFalse);
                  if (Grace_isTrue(opresult7270)) {
                    setLineNumber(1032);    // compilenode identifier
                    var call7271 = callmethodChecked(var_o, "superclass", [0]);
                    var call7272 = callmethodChecked(call7271, "accept", [1], this);
                    if7266 = call7272;
                  }
                  setLineNumber(1035);    // compilenode call
                  onSelf = true;
                  var call7273 = callmethodChecked(this, "outdir", [0]);
                  var string7274 = new GraceString("class");
                  var call7275 = callmethodChecked(var_graceDocVisitor, "createFrom()outTo()as", [1, 1, 1], var_n, call7273, string7274);
                  var var_classVis = call7275;
                  setLineNumber(1036);    // compilenode identifier
                  var call7276 = callmethodChecked(var_o, "accept", [1], var_classVis);
                  setLineNumber(1037);    // compilenode identifier
                  var call7277 = callmethodChecked(var_classVis, "generate", [0]);
                  setLineNumber(1038);    // compilenode string
                  var string7278 = new GraceString("top-box-description");
                  var call7279 = callmethodChecked(superDepth, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call7280 = callmethodChecked(call7279, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call7281 = callmethodChecked(call7280, "formatComments()rowClass()colspan", [1, 1, 1], var_o, string7278, new GraceNum(1));
                  var opresult7284 = callmethodChecked(var_t, "++", [1], call7281);
                  var_t = opresult7284;
                  setLineNumber(1039);    // compilenode call
                  onSelf = true;
                  var call7285 = callmethodChecked(this, "classesSection", [0]);
                  var call7286 = callmethodChecked(call7285, "addElement()withText", [1, 1], var_n, var_t);
                  setLineNumber(1040);    // compilenode identifier
                  return GraceFalse;
                } else {
                  setLineNumber(1042);    // compilenode string
                  var string7287 = new GraceString("</b>.");
                  var call7289 = callmethodChecked(var_o, "name", [0]);
                  var call7290 = callmethodChecked(call7289, "value", [0]);
                  var string7292 = new GraceString("<span class='headline'><code><b>");
                  var opresult7294 = callmethodChecked(string7292, "++", [1], call7290);
                  var opresult7296 = callmethodChecked(opresult7294, "++", [1], string7287);
                  var var_t = opresult7296;
                  setLineNumber(1044);    // compilenode identifier
                  var call7297 = callmethodChecked(var_m, "signature", [0]);
                  var block7298 = new GraceBlock(this, 1044, 1);
                  setLineNumber(1);    // compilenode identifier
                  block7298.real = function(var_part) {
                    setLineNumber(1045);    // compilenode string
                    var string7299 = new GraceString("</b>");
                    var call7301 = callmethodChecked(var_part, "name", [0]);
                    var string7303 = new GraceString("<b>");
                    var opresult7305 = callmethodChecked(string7303, "++", [1], call7301);
                    var opresult7307 = callmethodChecked(opresult7305, "++", [1], string7299);
                    var opresult7310 = callmethodChecked(var_t, "++", [1], opresult7307);
                    var_t = opresult7310;
                    var if7311 = GraceDone;
                    setLineNumber(1046);    // compilenode identifier
                    var call7313 = callmethodChecked(var_part, "params", [0]);
                    var call7314 = callmethodChecked(call7313, "size", [0]);
                    var opresult7316 = callmethodChecked(call7314, ">", [1], new GraceNum(0));
                    if (Grace_isTrue(opresult7316)) {
                      setLineNumber(1047);    // compilenode string
                      var string7317 = new GraceString("(");
                      var opresult7320 = callmethodChecked(var_t, "++", [1], string7317);
                      var_t = opresult7320;
                      setLineNumber(1048);    // compilenode identifier
                      var call7321 = callmethodChecked(var_part, "params", [0]);
                      var block7322 = new GraceBlock(this, 1048, 1);
                      setLineNumber(1);    // compilenode identifier
                      block7322.real = function(var_param) {
                        var if7323 = GraceDone;
                        setLineNumber(1049);    // compilenode identifier
                        var call7325 = callmethodChecked(var_param, "dtype", [0]);
                        var opresult7327 = callmethodChecked(call7325, "\u2260", [1], GraceFalse);
                        if (Grace_isTrue(opresult7327)) {
                          setLineNumber(1050);    // compilenode identifier
                          var call7328 = callmethodChecked(var_param, "value", [0]);
                          var opresult7331 = callmethodChecked(var_t, "++", [1], call7328);
                          var_t = opresult7331;
                          setLineNumber(1051);    // compilenode identifier
                          var call7332 = callmethodChecked(var_param, "dtype", [0]);
                          var call7333 = callmethodChecked(call7332, "value", [0]);
                          onSelf = true;
                          var call7334 = callmethodChecked(this, "getTypeLink", [1], call7333);
                          var string7336 = new GraceString(":");
                          var opresult7339 = callmethodChecked(var_t, "++", [1], string7336);
                          var opresult7341 = callmethodChecked(opresult7339, "++", [1], call7334);
                          var_t = opresult7341;
                          if7323 = GraceDone;
                        } else {
                          setLineNumber(1053);    // compilenode identifier
                          var call7342 = callmethodChecked(var_param, "value", [0]);
                          var opresult7345 = callmethodChecked(var_t, "++", [1], call7342);
                          var_t = opresult7345;
                          if7323 = GraceDone;
                        }
                        var if7346 = GraceDone;
                        setLineNumber(1055);    // compilenode identifier
                        var call7347 = callmethodChecked(var_part, "params", [0]);
                        var call7348 = callmethodChecked(call7347, "size", [0]);
                        var call7349 = callmethodChecked(var_part, "params", [0]);
                        var call7350 = callmethodChecked(call7349, "at", [1], call7348);
                        var opresult7353 = callmethodChecked(var_param, "\u2260", [1], call7350);
                        var call7356 = callmethodChecked(var_part, "params", [0]);
                        var call7357 = callmethodChecked(call7356, "size", [0]);
                        var opresult7359 = callmethodChecked(call7357, ">", [1], new GraceNum(1));
                        var opresult7361 = callmethodChecked(opresult7359, "&&", [1], opresult7353);
                        if (Grace_isTrue(opresult7361)) {
                          setLineNumber(1056);    // compilenode string
                          var string7362 = new GraceString(", ");
                          var opresult7365 = callmethodChecked(var_t, "++", [1], string7362);
                          var_t = opresult7365;
                          if7346 = GraceDone;
                        }
                        return if7346;
                      };
                      var call7366 = callmethodChecked(var_prelude, "for()do", [1, 1], call7321, block7322);
                      setLineNumber(1059);    // compilenode string
                      var string7367 = new GraceString(")");
                      var opresult7370 = callmethodChecked(var_t, "++", [1], string7367);
                      var_t = opresult7370;
                      if7311 = GraceDone;
                    }
                    return if7311;
                  };
                  var call7371 = callmethodChecked(var_prelude, "for()do", [1, 1], call7297, block7298);
                  var if7372 = GraceDone;
                  setLineNumber(1063);    // compilenode identifier
                  var call7374 = callmethodChecked(var_m, "dtype", [0]);
                  var opresult7376 = callmethodChecked(call7374, "\u2260", [1], GraceFalse);
                  if (Grace_isTrue(opresult7376)) {
                    setLineNumber(1064);    // compilenode string
                    var string7377 = new GraceString(" -> ");
                    var opresult7380 = callmethodChecked(var_t, "++", [1], string7377);
                    var_t = opresult7380;
                    var if7381 = GraceDone;
                    setLineNumber(1065);    // compilenode string
                    var string7382 = new GraceString("identifier");
                    var call7384 = callmethodChecked(var_m, "dtype", [0]);
                    var call7385 = callmethodChecked(call7384, "kind", [0]);
                    var opresult7387 = callmethodChecked(call7385, "==", [1], string7382);
                    if (Grace_isTrue(opresult7387)) {
                      setLineNumber(1066);    // compilenode identifier
                      var call7388 = callmethodChecked(var_o, "dtype", [0]);
                      var call7389 = callmethodChecked(call7388, "value", [0]);
                      onSelf = true;
                      var call7390 = callmethodChecked(this, "getTypeLink", [1], call7389);
                      var opresult7393 = callmethodChecked(var_t, "++", [1], call7390);
                      var_t = opresult7393;
                      if7381 = GraceDone;
                    } else {
                      var if7394 = GraceDone;
                      setLineNumber(1067);    // compilenode string
                      var string7395 = new GraceString("generic");
                      var call7397 = callmethodChecked(var_m, "dtype", [0]);
                      var call7398 = callmethodChecked(call7397, "kind", [0]);
                      var opresult7400 = callmethodChecked(call7398, "==", [1], string7395);
                      if (Grace_isTrue(opresult7400)) {
                        setLineNumber(1068);    // compilenode string
                        var string7401 = new GraceString("&lt;");
                        var call7403 = callmethodChecked(var_o, "dtype", [0]);
                        var call7404 = callmethodChecked(call7403, "value", [0]);
                        var call7405 = callmethodChecked(call7404, "value", [0]);
                        onSelf = true;
                        var call7406 = callmethodChecked(this, "getTypeLink", [1], call7405);
                        var opresult7409 = callmethodChecked(var_t, "++", [1], call7406);
                        var opresult7411 = callmethodChecked(opresult7409, "++", [1], string7401);
                        var_t = opresult7411;
                        setLineNumber(1069);    // compilenode block
                        var block7412 = new GraceBlock(this, 1069, 1);
                        setLineNumber(1);    // compilenode identifier
                        block7412.real = function(var_each) {
                          setLineNumber(1069);    // compilenode string
                          var string7413 = new GraceString("");
                          var call7415 = callmethodChecked(var_each, "value", [0]);
                          onSelf = true;
                          var call7416 = callmethodChecked(this, "getTypeLink", [1], call7415);
                          var string7418 = new GraceString("");
                          var string7421 = new GraceString("");
                          var opresult7423 = callmethodChecked(string7421, "++", [1], var_t);
                          var opresult7425 = callmethodChecked(opresult7423, "++", [1], string7418);
                          var opresult7427 = callmethodChecked(opresult7425, "++", [1], call7416);
                          var opresult7429 = callmethodChecked(opresult7427, "++", [1], string7413);
                          var_t = opresult7429;
                          return GraceDone;
                        };
                        var block7430 = new GraceBlock(this, 1069, 0);
                        block7430.real = function() {
                          var string7431 = new GraceString(", ");
                          var opresult7434 = callmethodChecked(var_t, "++", [1], string7431);
                          var_t = opresult7434;
                          return GraceDone;
                        };
                        var call7435 = callmethodChecked(var_m, "dtype", [0]);
                        var call7436 = callmethodChecked(call7435, "args", [0]);
                        var call7437 = callmethodChecked(call7436, "do()separatedBy", [1, 1], block7412, block7430);
                        setLineNumber(1070);    // compilenode string
                        var string7438 = new GraceString("&gt;");
                        var opresult7441 = callmethodChecked(var_t, "++", [1], string7438);
                        var_t = opresult7441;
                        if7394 = GraceDone;
                      }
                      if7381 = if7394;
                    }
                    if7372 = if7381;
                  }
                  setLineNumber(1074);    // compilenode string
                  var string7442 = new GraceString("</code></span><hr />");
                  var opresult7445 = callmethodChecked(var_t, "++", [1], string7442);
                  var_t = opresult7445;
                  setLineNumber(1075);    // compilenode string
                  var string7446 = new GraceString("top-box-description");
                  var call7447 = callmethodChecked(superDepth, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call7448 = callmethodChecked(call7447, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call7449 = callmethodChecked(call7448, "formatComments()rowClass()colspan", [1, 1, 1], var_o, string7446, new GraceNum(1));
                  var opresult7452 = callmethodChecked(var_t, "++", [1], call7449);
                  var_t = opresult7452;
                  setLineNumber(1076);    // compilenode call
                  onSelf = true;
                  var call7453 = callmethodChecked(this, "topDescSection", [0]);
                  var call7454 = callmethodChecked(call7453, "insert", [1], var_t);
                  setLineNumber(1077);    // compilenode identifier
                  return GraceTrue;
                }
                setLineNumber(995);    // return value
                if (!Grace_isTrue(callmethod(var_Boolean, "match", [1], if7076)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method doClassMethod(1) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return if7076;
              };
              func7073.paramCounts = [1];
              obj5125.methods["doClassMethod"] = func7073;
              func7073.definitionLine = 992;
              func7073.definitionModule = "gracedoc";
              var func7455 = function(argcv) {    // method visitDefDec(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_o = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitDefDec(1)"));
                setModuleName("gracedoc");
                var if7456 = GraceDone;
                setLineNumber(1082);    // compilenode call
                onSelf = true;
                var call7458 = callmethodChecked(this, "isOnClassPage", [0]);
                var opresult7460 = callmethodChecked(call7458, "==", [1], GraceTrue);
                if (Grace_isTrue(opresult7460)) {
                  var if7461 = GraceDone;
                  setLineNumber(1083);    // compilenode identifier
                  var call7462 = callmethodChecked(var_settings, "publicOnly", [0]);
                  var call7463 = callmethodChecked(call7462, "prefix!", [0]);
                  if (Grace_isTrue(call7463)) {
                    setLineNumber(1084);    // compilenode identifier
                    var call7464 = callmethodChecked(var_o, "name", [0]);
                    var call7465 = callmethodChecked(call7464, "value", [0]);
                    var var_n = call7465;
                    setLineNumber(1085);    // compilenode string
                    var string7466 = new GraceString("");
                    var call7468 = callmethodChecked(var_o, "name", [0]);
                    var call7469 = callmethodChecked(call7468, "value", [0]);
                    var string7471 = new GraceString("<tr class='placeholder'><td><code>def</code></td><td class='identifier-name'>");
                    var opresult7473 = callmethodChecked(string7471, "++", [1], call7469);
                    var opresult7475 = callmethodChecked(opresult7473, "++", [1], string7466);
                    var var_t = opresult7475;
                    setLineNumber(1086);    // compilenode string
                    var string7476 = new GraceString("</td><td><code>");
                    var opresult7479 = callmethodChecked(var_t, "++", [1], string7476);
                    var_t = opresult7479;
                    var if7480 = GraceDone;
                    setLineNumber(1087);    // compilenode identifier
                    var call7482 = callmethodChecked(var_o, "dtype", [0]);
                    var opresult7484 = callmethodChecked(call7482, "\u2260", [1], GraceFalse);
                    if (Grace_isTrue(opresult7484)) {
                      var if7485 = GraceDone;
                      setLineNumber(1088);    // compilenode string
                      var string7486 = new GraceString("identifier");
                      var call7488 = callmethodChecked(var_o, "dtype", [0]);
                      var call7489 = callmethodChecked(call7488, "kind", [0]);
                      var opresult7491 = callmethodChecked(call7489, "==", [1], string7486);
                      if (Grace_isTrue(opresult7491)) {
                        setLineNumber(1089);    // compilenode identifier
                        var call7492 = callmethodChecked(var_o, "dtype", [0]);
                        var call7493 = callmethodChecked(call7492, "value", [0]);
                        onSelf = true;
                        var call7494 = callmethodChecked(this, "getTypeLink", [1], call7493);
                        var opresult7497 = callmethodChecked(var_t, "++", [1], call7494);
                        var_t = opresult7497;
                        if7485 = GraceDone;
                      } else {
                        var if7498 = GraceDone;
                        setLineNumber(1090);    // compilenode string
                        var string7499 = new GraceString("generic");
                        var call7501 = callmethodChecked(var_o, "dtype", [0]);
                        var call7502 = callmethodChecked(call7501, "kind", [0]);
                        var opresult7504 = callmethodChecked(call7502, "==", [1], string7499);
                        if (Grace_isTrue(opresult7504)) {
                          setLineNumber(1091);    // compilenode string
                          var string7505 = new GraceString("&lt;");
                          var call7507 = callmethodChecked(var_o, "dtype", [0]);
                          var call7508 = callmethodChecked(call7507, "value", [0]);
                          var call7509 = callmethodChecked(call7508, "value", [0]);
                          onSelf = true;
                          var call7510 = callmethodChecked(this, "getTypeLink", [1], call7509);
                          var opresult7513 = callmethodChecked(var_t, "++", [1], call7510);
                          var opresult7515 = callmethodChecked(opresult7513, "++", [1], string7505);
                          var_t = opresult7515;
                          setLineNumber(1092);    // compilenode block
                          var block7516 = new GraceBlock(this, 1092, 1);
                          setLineNumber(1);    // compilenode identifier
                          block7516.real = function(var_each) {
                            setLineNumber(1092);    // compilenode string
                            var string7517 = new GraceString("");
                            var call7519 = callmethodChecked(var_each, "value", [0]);
                            onSelf = true;
                            var call7520 = callmethodChecked(this, "getTypeLink", [1], call7519);
                            var string7522 = new GraceString("");
                            var string7525 = new GraceString("");
                            var opresult7527 = callmethodChecked(string7525, "++", [1], var_t);
                            var opresult7529 = callmethodChecked(opresult7527, "++", [1], string7522);
                            var opresult7531 = callmethodChecked(opresult7529, "++", [1], call7520);
                            var opresult7533 = callmethodChecked(opresult7531, "++", [1], string7517);
                            var_t = opresult7533;
                            return GraceDone;
                          };
                          var block7534 = new GraceBlock(this, 1092, 0);
                          block7534.real = function() {
                            var string7535 = new GraceString(", ");
                            var opresult7538 = callmethodChecked(var_t, "++", [1], string7535);
                            var_t = opresult7538;
                            return GraceDone;
                          };
                          var call7539 = callmethodChecked(var_o, "dtype", [0]);
                          var call7540 = callmethodChecked(call7539, "args", [0]);
                          var call7541 = callmethodChecked(call7540, "do()separatedBy", [1, 1], block7516, block7534);
                          setLineNumber(1093);    // compilenode string
                          var string7542 = new GraceString("&gt;");
                          var opresult7545 = callmethodChecked(var_t, "++", [1], string7542);
                          var_t = opresult7545;
                          if7498 = GraceDone;
                        }
                        if7485 = if7498;
                      }
                      if7480 = if7485;
                    }
                    setLineNumber(1096);    // compilenode string
                    var string7546 = new GraceString("</code></td></tr>");
                    var opresult7549 = callmethodChecked(var_t, "++", [1], string7546);
                    var_t = opresult7549;
                    setLineNumber(1097);    // compilenode string
                    var string7550 = new GraceString("description");
                    var call7551 = callmethodChecked(superDepth, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call7552 = callmethodChecked(call7551, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call7553 = callmethodChecked(call7552, "formatComments()rowClass()colspan", [1, 1, 1], var_o, string7550, new GraceNum(3));
                    var opresult7556 = callmethodChecked(var_t, "++", [1], call7553);
                    var_t = opresult7556;
                    setLineNumber(1098);    // compilenode call
                    onSelf = true;
                    var call7557 = callmethodChecked(this, "fieldsSection", [0]);
                    var call7558 = callmethodChecked(call7557, "addElement()withText", [1, 1], var_n, var_t);
                    if7461 = call7558;
                  } else {
                    var if7559 = GraceDone;
                    setLineNumber(1102);    // compilenode identifier
                    var call7560 = callmethodChecked(var_o, "isReadable", [0]);
                    if (Grace_isTrue(call7560)) {
                      setLineNumber(1104);    // compilenode identifier
                      var call7561 = callmethodChecked(var_o, "name", [0]);
                      var call7562 = callmethodChecked(call7561, "value", [0]);
                      var var_n = call7562;
                      setLineNumber(1105);    // compilenode string
                      var string7563 = new GraceString("");
                      var call7565 = callmethodChecked(var_o, "name", [0]);
                      var call7566 = callmethodChecked(call7565, "value", [0]);
                      var string7568 = new GraceString("<tr class='placeholder'><td class='identifier-name'>");
                      var opresult7570 = callmethodChecked(string7568, "++", [1], call7566);
                      var opresult7572 = callmethodChecked(opresult7570, "++", [1], string7563);
                      var var_t = opresult7572;
                      setLineNumber(1106);    // compilenode string
                      var string7573 = new GraceString("</td><td><code>");
                      var opresult7576 = callmethodChecked(var_t, "++", [1], string7573);
                      var_t = opresult7576;
                      var if7577 = GraceDone;
                      setLineNumber(1107);    // compilenode identifier
                      var call7579 = callmethodChecked(var_o, "dtype", [0]);
                      var opresult7581 = callmethodChecked(call7579, "\u2260", [1], GraceFalse);
                      if (Grace_isTrue(opresult7581)) {
                        var if7582 = GraceDone;
                        setLineNumber(1108);    // compilenode string
                        var string7583 = new GraceString("identifier");
                        var call7585 = callmethodChecked(var_o, "dtype", [0]);
                        var call7586 = callmethodChecked(call7585, "kind", [0]);
                        var opresult7588 = callmethodChecked(call7586, "==", [1], string7583);
                        if (Grace_isTrue(opresult7588)) {
                          setLineNumber(1109);    // compilenode identifier
                          var call7589 = callmethodChecked(var_o, "dtype", [0]);
                          var call7590 = callmethodChecked(call7589, "value", [0]);
                          onSelf = true;
                          var call7591 = callmethodChecked(this, "getTypeLink", [1], call7590);
                          var opresult7594 = callmethodChecked(var_t, "++", [1], call7591);
                          var_t = opresult7594;
                          if7582 = GraceDone;
                        } else {
                          var if7595 = GraceDone;
                          setLineNumber(1110);    // compilenode string
                          var string7596 = new GraceString("generic");
                          var call7598 = callmethodChecked(var_o, "dtype", [0]);
                          var call7599 = callmethodChecked(call7598, "kind", [0]);
                          var opresult7601 = callmethodChecked(call7599, "==", [1], string7596);
                          if (Grace_isTrue(opresult7601)) {
                            setLineNumber(1111);    // compilenode string
                            var string7602 = new GraceString("&lt;");
                            var call7604 = callmethodChecked(var_o, "dtype", [0]);
                            var call7605 = callmethodChecked(call7604, "value", [0]);
                            var call7606 = callmethodChecked(call7605, "value", [0]);
                            onSelf = true;
                            var call7607 = callmethodChecked(this, "getTypeLink", [1], call7606);
                            var opresult7610 = callmethodChecked(var_t, "++", [1], call7607);
                            var opresult7612 = callmethodChecked(opresult7610, "++", [1], string7602);
                            var_t = opresult7612;
                            setLineNumber(1112);    // compilenode block
                            var block7613 = new GraceBlock(this, 1112, 1);
                            setLineNumber(1);    // compilenode identifier
                            block7613.real = function(var_each) {
                              setLineNumber(1112);    // compilenode string
                              var string7614 = new GraceString("");
                              var call7616 = callmethodChecked(var_each, "value", [0]);
                              onSelf = true;
                              var call7617 = callmethodChecked(this, "getTypeLink", [1], call7616);
                              var string7619 = new GraceString("");
                              var string7622 = new GraceString("");
                              var opresult7624 = callmethodChecked(string7622, "++", [1], var_t);
                              var opresult7626 = callmethodChecked(opresult7624, "++", [1], string7619);
                              var opresult7628 = callmethodChecked(opresult7626, "++", [1], call7617);
                              var opresult7630 = callmethodChecked(opresult7628, "++", [1], string7614);
                              var_t = opresult7630;
                              return GraceDone;
                            };
                            var block7631 = new GraceBlock(this, 1112, 0);
                            block7631.real = function() {
                              var string7632 = new GraceString(", ");
                              var opresult7635 = callmethodChecked(var_t, "++", [1], string7632);
                              var_t = opresult7635;
                              return GraceDone;
                            };
                            var call7636 = callmethodChecked(var_o, "dtype", [0]);
                            var call7637 = callmethodChecked(call7636, "args", [0]);
                            var call7638 = callmethodChecked(call7637, "do()separatedBy", [1, 1], block7613, block7631);
                            setLineNumber(1113);    // compilenode string
                            var string7639 = new GraceString("&gt;");
                            var opresult7642 = callmethodChecked(var_t, "++", [1], string7639);
                            var_t = opresult7642;
                            if7595 = GraceDone;
                          }
                          if7582 = if7595;
                        }
                        if7577 = if7582;
                      }
                      setLineNumber(1116);    // compilenode string
                      var string7643 = new GraceString("</code></td></tr>");
                      var opresult7646 = callmethodChecked(var_t, "++", [1], string7643);
                      var_t = opresult7646;
                      setLineNumber(1117);    // compilenode string
                      var string7647 = new GraceString("description");
                      var call7648 = callmethodChecked(superDepth, "outer", [0]);
                      onOuter = true;
                      onSelf = true;
                      var call7649 = callmethodChecked(call7648, "outer", [0]);
                      onOuter = true;
                      onSelf = true;
                      var call7650 = callmethodChecked(call7649, "formatComments()rowClass()colspan", [1, 1, 1], var_o, string7647, new GraceNum(2));
                      var opresult7653 = callmethodChecked(var_t, "++", [1], call7650);
                      var_t = opresult7653;
                      setLineNumber(1118);    // compilenode call
                      onSelf = true;
                      var call7654 = callmethodChecked(this, "methodsSection", [0]);
                      var call7655 = callmethodChecked(call7654, "addElement()withText", [1, 1], var_n, var_t);
                      if7559 = call7655;
                    }
                    if7461 = if7559;
                  }
                  setLineNumber(1121);    // compilenode identifier
                  return GraceFalse;
                } else {
                  var if7656 = GraceDone;
                  setLineNumber(1123);    // compilenode identifier
                  var call7657 = callmethodChecked(var_settings, "publicOnly", [0]);
                  var call7658 = callmethodChecked(call7657, "prefix!", [0]);
                  if (Grace_isTrue(call7658)) {
                    setLineNumber(1124);    // compilenode identifier
                    var call7659 = callmethodChecked(var_o, "name", [0]);
                    var call7660 = callmethodChecked(call7659, "value", [0]);
                    var var_n = call7660;
                    setLineNumber(1125);    // compilenode string
                    var string7661 = new GraceString("");
                    var call7663 = callmethodChecked(var_o, "name", [0]);
                    var call7664 = callmethodChecked(call7663, "value", [0]);
                    var string7666 = new GraceString("<tr class='placeholder'><td><code>def</code></td><td class='identifier-name'>");
                    var opresult7668 = callmethodChecked(string7666, "++", [1], call7664);
                    var opresult7670 = callmethodChecked(opresult7668, "++", [1], string7661);
                    var var_t = opresult7670;
                    setLineNumber(1126);    // compilenode string
                    var string7671 = new GraceString("</td><td><code>");
                    var opresult7674 = callmethodChecked(var_t, "++", [1], string7671);
                    var_t = opresult7674;
                    var if7675 = GraceDone;
                    setLineNumber(1127);    // compilenode identifier
                    var call7677 = callmethodChecked(var_o, "dtype", [0]);
                    var opresult7679 = callmethodChecked(call7677, "\u2260", [1], GraceFalse);
                    if (Grace_isTrue(opresult7679)) {
                      var if7680 = GraceDone;
                      setLineNumber(1128);    // compilenode string
                      var string7681 = new GraceString("identifier");
                      var call7683 = callmethodChecked(var_o, "dtype", [0]);
                      var call7684 = callmethodChecked(call7683, "kind", [0]);
                      var opresult7686 = callmethodChecked(call7684, "==", [1], string7681);
                      if (Grace_isTrue(opresult7686)) {
                        setLineNumber(1129);    // compilenode identifier
                        var call7687 = callmethodChecked(var_o, "dtype", [0]);
                        var call7688 = callmethodChecked(call7687, "value", [0]);
                        onSelf = true;
                        var call7689 = callmethodChecked(this, "getTypeLink", [1], call7688);
                        var opresult7692 = callmethodChecked(var_t, "++", [1], call7689);
                        var_t = opresult7692;
                        if7680 = GraceDone;
                      } else {
                        var if7693 = GraceDone;
                        setLineNumber(1130);    // compilenode string
                        var string7694 = new GraceString("generic");
                        var call7696 = callmethodChecked(var_o, "dtype", [0]);
                        var call7697 = callmethodChecked(call7696, "kind", [0]);
                        var opresult7699 = callmethodChecked(call7697, "==", [1], string7694);
                        if (Grace_isTrue(opresult7699)) {
                          setLineNumber(1131);    // compilenode string
                          var string7700 = new GraceString("&lt;");
                          var call7702 = callmethodChecked(var_o, "dtype", [0]);
                          var call7703 = callmethodChecked(call7702, "value", [0]);
                          var call7704 = callmethodChecked(call7703, "value", [0]);
                          onSelf = true;
                          var call7705 = callmethodChecked(this, "getTypeLink", [1], call7704);
                          var opresult7708 = callmethodChecked(var_t, "++", [1], call7705);
                          var opresult7710 = callmethodChecked(opresult7708, "++", [1], string7700);
                          var_t = opresult7710;
                          setLineNumber(1132);    // compilenode block
                          var block7711 = new GraceBlock(this, 1132, 1);
                          setLineNumber(1);    // compilenode identifier
                          block7711.real = function(var_each) {
                            setLineNumber(1132);    // compilenode string
                            var string7712 = new GraceString("");
                            var call7714 = callmethodChecked(var_each, "value", [0]);
                            var string7716 = new GraceString("");
                            var string7719 = new GraceString("");
                            var opresult7721 = callmethodChecked(string7719, "++", [1], var_t);
                            var opresult7723 = callmethodChecked(opresult7721, "++", [1], string7716);
                            var opresult7725 = callmethodChecked(opresult7723, "++", [1], call7714);
                            var opresult7727 = callmethodChecked(opresult7725, "++", [1], string7712);
                            var_t = opresult7727;
                            return GraceDone;
                          };
                          var block7728 = new GraceBlock(this, 1132, 0);
                          block7728.real = function() {
                            var string7729 = new GraceString(", ");
                            var opresult7732 = callmethodChecked(var_t, "++", [1], string7729);
                            var_t = opresult7732;
                            return GraceDone;
                          };
                          var call7733 = callmethodChecked(var_o, "dtype", [0]);
                          var call7734 = callmethodChecked(call7733, "args", [0]);
                          var call7735 = callmethodChecked(call7734, "do()separatedBy", [1, 1], block7711, block7728);
                          setLineNumber(1133);    // compilenode string
                          var string7736 = new GraceString("&gt;");
                          var opresult7739 = callmethodChecked(var_t, "++", [1], string7736);
                          var_t = opresult7739;
                          if7693 = GraceDone;
                        }
                        if7680 = if7693;
                      }
                      if7675 = if7680;
                    }
                    setLineNumber(1136);    // compilenode string
                    var string7740 = new GraceString("</code></td></tr>");
                    var opresult7743 = callmethodChecked(var_t, "++", [1], string7740);
                    var_t = opresult7743;
                    setLineNumber(1137);    // compilenode string
                    var string7744 = new GraceString("description");
                    var call7745 = callmethodChecked(superDepth, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call7746 = callmethodChecked(call7745, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call7747 = callmethodChecked(call7746, "formatComments()rowClass()colspan", [1, 1, 1], var_o, string7744, new GraceNum(3));
                    var opresult7750 = callmethodChecked(var_t, "++", [1], call7747);
                    var_t = opresult7750;
                    setLineNumber(1138);    // compilenode call
                    onSelf = true;
                    var call7751 = callmethodChecked(this, "fieldsSection", [0]);
                    var call7752 = callmethodChecked(call7751, "addElement()withText", [1, 1], var_n, var_t);
                    if7656 = call7752;
                  } else {
                    var if7753 = GraceDone;
                    setLineNumber(1142);    // compilenode identifier
                    var call7754 = callmethodChecked(var_o, "isReadable", [0]);
                    if (Grace_isTrue(call7754)) {
                      setLineNumber(1143);    // compilenode string
                      var string7755 = new GraceString("");
                      var call7757 = callmethodChecked(var_o, "name", [0]);
                      var call7758 = callmethodChecked(call7757, "value", [0]);
                      var string7760 = new GraceString("<tr class='placeholder'><td class='identifier-name'>");
                      var opresult7762 = callmethodChecked(string7760, "++", [1], call7758);
                      var opresult7764 = callmethodChecked(opresult7762, "++", [1], string7755);
                      var var_t = opresult7764;
                      setLineNumber(1144);    // compilenode identifier
                      var call7765 = callmethodChecked(var_o, "name", [0]);
                      var call7766 = callmethodChecked(call7765, "value", [0]);
                      var var_n = call7766;
                      setLineNumber(1145);    // compilenode string
                      var string7767 = new GraceString("</td><td><code>");
                      var opresult7770 = callmethodChecked(var_t, "++", [1], string7767);
                      var_t = opresult7770;
                      var if7771 = GraceDone;
                      setLineNumber(1146);    // compilenode identifier
                      var call7773 = callmethodChecked(var_o, "dtype", [0]);
                      var opresult7775 = callmethodChecked(call7773, "\u2260", [1], GraceFalse);
                      if (Grace_isTrue(opresult7775)) {
                        var if7776 = GraceDone;
                        setLineNumber(1147);    // compilenode string
                        var string7777 = new GraceString("identifier");
                        var call7779 = callmethodChecked(var_o, "dtype", [0]);
                        var call7780 = callmethodChecked(call7779, "kind", [0]);
                        var opresult7782 = callmethodChecked(call7780, "==", [1], string7777);
                        if (Grace_isTrue(opresult7782)) {
                          setLineNumber(1148);    // compilenode identifier
                          var call7783 = callmethodChecked(var_o, "dtype", [0]);
                          var call7784 = callmethodChecked(call7783, "value", [0]);
                          onSelf = true;
                          var call7785 = callmethodChecked(this, "getTypeLink", [1], call7784);
                          var opresult7788 = callmethodChecked(var_t, "++", [1], call7785);
                          var_t = opresult7788;
                          if7776 = GraceDone;
                        } else {
                          var if7789 = GraceDone;
                          setLineNumber(1149);    // compilenode string
                          var string7790 = new GraceString("generic");
                          var call7792 = callmethodChecked(var_o, "dtype", [0]);
                          var call7793 = callmethodChecked(call7792, "kind", [0]);
                          var opresult7795 = callmethodChecked(call7793, "==", [1], string7790);
                          if (Grace_isTrue(opresult7795)) {
                            setLineNumber(1150);    // compilenode string
                            var string7796 = new GraceString("&lt;");
                            var call7798 = callmethodChecked(var_o, "dtype", [0]);
                            var call7799 = callmethodChecked(call7798, "value", [0]);
                            var call7800 = callmethodChecked(call7799, "value", [0]);
                            onSelf = true;
                            var call7801 = callmethodChecked(this, "getTypeLink", [1], call7800);
                            var opresult7804 = callmethodChecked(var_t, "++", [1], call7801);
                            var opresult7806 = callmethodChecked(opresult7804, "++", [1], string7796);
                            var_t = opresult7806;
                            setLineNumber(1151);    // compilenode block
                            var block7807 = new GraceBlock(this, 1151, 1);
                            setLineNumber(1);    // compilenode identifier
                            block7807.real = function(var_each) {
                              setLineNumber(1151);    // compilenode string
                              var string7808 = new GraceString("");
                              var call7810 = callmethodChecked(var_each, "value", [0]);
                              onSelf = true;
                              var call7811 = callmethodChecked(this, "getTypeLink", [1], call7810);
                              var string7813 = new GraceString("");
                              var string7816 = new GraceString("");
                              var opresult7818 = callmethodChecked(string7816, "++", [1], var_t);
                              var opresult7820 = callmethodChecked(opresult7818, "++", [1], string7813);
                              var opresult7822 = callmethodChecked(opresult7820, "++", [1], call7811);
                              var opresult7824 = callmethodChecked(opresult7822, "++", [1], string7808);
                              var_t = opresult7824;
                              return GraceDone;
                            };
                            var block7825 = new GraceBlock(this, 1151, 0);
                            block7825.real = function() {
                              var string7826 = new GraceString(", ");
                              var opresult7829 = callmethodChecked(var_t, "++", [1], string7826);
                              var_t = opresult7829;
                              return GraceDone;
                            };
                            var call7830 = callmethodChecked(var_o, "dtype", [0]);
                            var call7831 = callmethodChecked(call7830, "args", [0]);
                            var call7832 = callmethodChecked(call7831, "do()separatedBy", [1, 1], block7807, block7825);
                            setLineNumber(1152);    // compilenode string
                            var string7833 = new GraceString("&gt;");
                            var opresult7836 = callmethodChecked(var_t, "++", [1], string7833);
                            var_t = opresult7836;
                            if7789 = GraceDone;
                          }
                          if7776 = if7789;
                        }
                        if7771 = if7776;
                      }
                      setLineNumber(1155);    // compilenode string
                      var string7837 = new GraceString("</code></td></tr>");
                      var opresult7840 = callmethodChecked(var_t, "++", [1], string7837);
                      var_t = opresult7840;
                      setLineNumber(1156);    // compilenode string
                      var string7841 = new GraceString("description");
                      var call7842 = callmethodChecked(superDepth, "outer", [0]);
                      onOuter = true;
                      onSelf = true;
                      var call7843 = callmethodChecked(call7842, "outer", [0]);
                      onOuter = true;
                      onSelf = true;
                      var call7844 = callmethodChecked(call7843, "formatComments()rowClass()colspan", [1, 1, 1], var_o, string7841, new GraceNum(2));
                      var opresult7847 = callmethodChecked(var_t, "++", [1], call7844);
                      var_t = opresult7847;
                      setLineNumber(1157);    // compilenode call
                      onSelf = true;
                      var call7848 = callmethodChecked(this, "methodsSection", [0]);
                      var call7849 = callmethodChecked(call7848, "addElement()withText", [1, 1], var_n, var_t);
                      if7753 = call7849;
                    }
                    if7656 = if7753;
                  }
                  setLineNumber(1160);    // compilenode identifier
                  return GraceFalse;
                }
                setLineNumber(1082);    // return value
                if (!Grace_isTrue(callmethod(var_Boolean, "match", [1], if7456)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitDefDec(1) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return if7456;
              };
              func7455.paramCounts = [1];
              obj5125.methods["visitDefDec"] = func7455;
              func7455.definitionLine = 1081;
              func7455.definitionModule = "gracedoc";
              var func7850 = function(argcv) {    // method visitVarDec(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_o = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitVarDec(1)"));
                setModuleName("gracedoc");
                var if7851 = GraceDone;
                setLineNumber(1165);    // compilenode call
                onSelf = true;
                var call7853 = callmethodChecked(this, "isOnClassPage", [0]);
                var opresult7855 = callmethodChecked(call7853, "==", [1], GraceTrue);
                if (Grace_isTrue(opresult7855)) {
                  var if7856 = GraceDone;
                  setLineNumber(1166);    // compilenode identifier
                  var call7857 = callmethodChecked(var_settings, "publicOnly", [0]);
                  var call7858 = callmethodChecked(call7857, "prefix!", [0]);
                  if (Grace_isTrue(call7858)) {
                    setLineNumber(1167);    // compilenode identifier
                    var call7859 = callmethodChecked(var_o, "name", [0]);
                    var call7860 = callmethodChecked(call7859, "value", [0]);
                    var var_n = call7860;
                    setLineNumber(1168);    // compilenode string
                    var string7861 = new GraceString("");
                    var call7863 = callmethodChecked(var_o, "name", [0]);
                    var call7864 = callmethodChecked(call7863, "value", [0]);
                    var string7866 = new GraceString("<tr class='placeholder'><td><code>var</code></td><td class='identifier-name'>");
                    var opresult7868 = callmethodChecked(string7866, "++", [1], call7864);
                    var opresult7870 = callmethodChecked(opresult7868, "++", [1], string7861);
                    var var_t = opresult7870;
                    setLineNumber(1169);    // compilenode string
                    var string7871 = new GraceString("</td><td><code>");
                    var opresult7874 = callmethodChecked(var_t, "++", [1], string7871);
                    var_t = opresult7874;
                    var if7875 = GraceDone;
                    setLineNumber(1170);    // compilenode identifier
                    var call7877 = callmethodChecked(var_o, "dtype", [0]);
                    var opresult7879 = callmethodChecked(call7877, "\u2260", [1], GraceFalse);
                    if (Grace_isTrue(opresult7879)) {
                      setLineNumber(1171);    // compilenode string
                      var string7880 = new GraceString("");
                      var call7882 = callmethodChecked(var_o, "dtype", [0]);
                      var call7883 = callmethodChecked(call7882, "value", [0]);
                      onSelf = true;
                      var call7884 = callmethodChecked(this, "getTypeLink", [1], call7883);
                      var string7886 = new GraceString("");
                      var opresult7888 = callmethodChecked(string7886, "++", [1], call7884);
                      var opresult7890 = callmethodChecked(opresult7888, "++", [1], string7880);
                      var opresult7893 = callmethodChecked(var_t, "++", [1], opresult7890);
                      var_t = opresult7893;
                      if7875 = GraceDone;
                    }
                    setLineNumber(1173);    // compilenode string
                    var string7894 = new GraceString("</code></td></tr>");
                    var opresult7897 = callmethodChecked(var_t, "++", [1], string7894);
                    var_t = opresult7897;
                    setLineNumber(1174);    // compilenode string
                    var string7898 = new GraceString("description");
                    var call7899 = callmethodChecked(superDepth, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call7900 = callmethodChecked(call7899, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call7901 = callmethodChecked(call7900, "formatComments()rowClass()colspan", [1, 1, 1], var_o, string7898, new GraceNum(3));
                    var opresult7904 = callmethodChecked(var_t, "++", [1], call7901);
                    var_t = opresult7904;
                    setLineNumber(1175);    // compilenode call
                    onSelf = true;
                    var call7905 = callmethodChecked(this, "fieldsSection", [0]);
                    var call7906 = callmethodChecked(call7905, "addElement()withText", [1, 1], var_n, var_t);
                    if7856 = call7906;
                  } else {
                    var if7907 = GraceDone;
                    setLineNumber(1177);    // compilenode identifier
                    var call7908 = callmethodChecked(var_o, "isReadable", [0]);
                    if (Grace_isTrue(call7908)) {
                      setLineNumber(1178);    // compilenode string
                      var string7909 = new GraceString("");
                      var call7911 = callmethodChecked(var_o, "name", [0]);
                      var call7912 = callmethodChecked(call7911, "value", [0]);
                      var string7914 = new GraceString("<tr class='placeholder'><td class='identifier-name'>");
                      var opresult7916 = callmethodChecked(string7914, "++", [1], call7912);
                      var opresult7918 = callmethodChecked(opresult7916, "++", [1], string7909);
                      var var_t = opresult7918;
                      setLineNumber(1179);    // compilenode identifier
                      var call7919 = callmethodChecked(var_o, "name", [0]);
                      var call7920 = callmethodChecked(call7919, "value", [0]);
                      var var_n = call7920;
                      setLineNumber(1180);    // compilenode string
                      var string7921 = new GraceString("</td><td>");
                      var opresult7924 = callmethodChecked(var_t, "++", [1], string7921);
                      var_t = opresult7924;
                      var if7925 = GraceDone;
                      setLineNumber(1181);    // compilenode identifier
                      var call7927 = callmethodChecked(var_o, "dtype", [0]);
                      var opresult7929 = callmethodChecked(call7927, "\u2260", [1], GraceFalse);
                      if (Grace_isTrue(opresult7929)) {
                        setLineNumber(1182);    // compilenode string
                        var string7930 = new GraceString("");
                        var call7932 = callmethodChecked(var_o, "dtype", [0]);
                        var call7933 = callmethodChecked(call7932, "value", [0]);
                        onSelf = true;
                        var call7934 = callmethodChecked(this, "getTypeLink", [1], call7933);
                        var string7936 = new GraceString("");
                        var opresult7938 = callmethodChecked(string7936, "++", [1], call7934);
                        var opresult7940 = callmethodChecked(opresult7938, "++", [1], string7930);
                        var opresult7943 = callmethodChecked(var_t, "++", [1], opresult7940);
                        var_t = opresult7943;
                        if7925 = GraceDone;
                      }
                      setLineNumber(1184);    // compilenode string
                      var string7944 = new GraceString("</code></td></tr>");
                      var opresult7947 = callmethodChecked(var_t, "++", [1], string7944);
                      var_t = opresult7947;
                      setLineNumber(1185);    // compilenode string
                      var string7948 = new GraceString("description");
                      var call7949 = callmethodChecked(superDepth, "outer", [0]);
                      onOuter = true;
                      onSelf = true;
                      var call7950 = callmethodChecked(call7949, "outer", [0]);
                      onOuter = true;
                      onSelf = true;
                      var call7951 = callmethodChecked(call7950, "formatComments()rowClass()colspan", [1, 1, 1], var_o, string7948, new GraceNum(2));
                      var opresult7954 = callmethodChecked(var_t, "++", [1], call7951);
                      var_t = opresult7954;
                      setLineNumber(1186);    // compilenode call
                      onSelf = true;
                      var call7955 = callmethodChecked(this, "methodsSection", [0]);
                      var call7956 = callmethodChecked(call7955, "addElement()withText", [1, 1], var_n, var_t);
                      if7907 = call7956;
                    }
                    var if7957 = GraceDone;
                    setLineNumber(1188);    // compilenode identifier
                    var call7958 = callmethodChecked(var_o, "isWritable", [0]);
                    if (Grace_isTrue(call7958)) {
                      setLineNumber(1189);    // compilenode string
                      var string7959 = new GraceString(":=</span>");
                      var call7961 = callmethodChecked(var_o, "name", [0]);
                      var call7962 = callmethodChecked(call7961, "value", [0]);
                      var string7964 = new GraceString("<tr class='placeholder'><td><code><span class='method-name'>");
                      var opresult7966 = callmethodChecked(string7964, "++", [1], call7962);
                      var opresult7968 = callmethodChecked(opresult7966, "++", [1], string7959);
                      var var_t = opresult7968;
                      setLineNumber(1190);    // compilenode string
                      var string7969 = new GraceString(":=");
                      var call7971 = callmethodChecked(var_o, "name", [0]);
                      var call7972 = callmethodChecked(call7971, "value", [0]);
                      var string7974 = new GraceString("");
                      var opresult7976 = callmethodChecked(string7974, "++", [1], call7972);
                      var opresult7978 = callmethodChecked(opresult7976, "++", [1], string7969);
                      var var_n = opresult7978;
                      var if7979 = GraceDone;
                      setLineNumber(1191);    // compilenode identifier
                      var call7981 = callmethodChecked(var_o, "dtype", [0]);
                      var opresult7983 = callmethodChecked(call7981, "\u2260", [1], GraceFalse);
                      if (Grace_isTrue(opresult7983)) {
                        setLineNumber(1192);    // compilenode string
                        var string7984 = new GraceString(")");
                        var call7986 = callmethodChecked(var_o, "dtype", [0]);
                        var call7987 = callmethodChecked(call7986, "value", [0]);
                        onSelf = true;
                        var call7988 = callmethodChecked(this, "getTypeLink", [1], call7987);
                        var string7990 = new GraceString("(_:");
                        var opresult7992 = callmethodChecked(string7990, "++", [1], call7988);
                        var opresult7994 = callmethodChecked(opresult7992, "++", [1], string7984);
                        var opresult7997 = callmethodChecked(var_t, "++", [1], opresult7994);
                        var_t = opresult7997;
                        if7979 = GraceDone;
                      }
                      setLineNumber(1194);    // compilenode string
                      var string7998 = new GraceString("</code></td><td><code>Done</code></td></tr>");
                      var opresult8001 = callmethodChecked(var_t, "++", [1], string7998);
                      var_t = opresult8001;
                      setLineNumber(1195);    // compilenode string
                      var string8002 = new GraceString("</td></tr>");
                      var call8004 = callmethodChecked(var_o, "name", [0]);
                      var call8005 = callmethodChecked(call8004, "value", [0]);
                      var string8007 = new GraceString("<tr class='description'><td colspan='2'>Updates ");
                      var opresult8009 = callmethodChecked(string8007, "++", [1], call8005);
                      var opresult8011 = callmethodChecked(opresult8009, "++", [1], string8002);
                      var opresult8014 = callmethodChecked(var_t, "++", [1], opresult8011);
                      var_t = opresult8014;
                      setLineNumber(1196);    // compilenode call
                      onSelf = true;
                      var call8015 = callmethodChecked(this, "methodsSection", [0]);
                      var call8016 = callmethodChecked(call8015, "addElement()withText", [1, 1], var_n, var_t);
                      if7957 = call8016;
                    }
                    if7856 = if7957;
                  }
                  setLineNumber(1199);    // compilenode identifier
                  return GraceFalse;
                } else {
                  var if8017 = GraceDone;
                  setLineNumber(1201);    // compilenode identifier
                  var call8018 = callmethodChecked(var_settings, "publicOnly", [0]);
                  var call8019 = callmethodChecked(call8018, "prefix!", [0]);
                  if (Grace_isTrue(call8019)) {
                    setLineNumber(1202);    // compilenode identifier
                    var call8020 = callmethodChecked(var_o, "name", [0]);
                    var call8021 = callmethodChecked(call8020, "value", [0]);
                    var var_n = call8021;
                    setLineNumber(1203);    // compilenode string
                    var string8022 = new GraceString("");
                    var call8024 = callmethodChecked(var_o, "name", [0]);
                    var call8025 = callmethodChecked(call8024, "value", [0]);
                    var string8027 = new GraceString("<tr class='placeholder'><td><code>var</code></td><td class='identifier-name'>");
                    var opresult8029 = callmethodChecked(string8027, "++", [1], call8025);
                    var opresult8031 = callmethodChecked(opresult8029, "++", [1], string8022);
                    var var_t = opresult8031;
                    setLineNumber(1204);    // compilenode string
                    var string8032 = new GraceString("</td><td><code>");
                    var opresult8035 = callmethodChecked(var_t, "++", [1], string8032);
                    var_t = opresult8035;
                    var if8036 = GraceDone;
                    setLineNumber(1205);    // compilenode identifier
                    var call8038 = callmethodChecked(var_o, "dtype", [0]);
                    var opresult8040 = callmethodChecked(call8038, "\u2260", [1], GraceFalse);
                    if (Grace_isTrue(opresult8040)) {
                      setLineNumber(1206);    // compilenode string
                      var string8041 = new GraceString("");
                      var call8043 = callmethodChecked(var_o, "dtype", [0]);
                      var call8044 = callmethodChecked(call8043, "value", [0]);
                      onSelf = true;
                      var call8045 = callmethodChecked(this, "getTypeLink", [1], call8044);
                      var string8047 = new GraceString("");
                      var opresult8049 = callmethodChecked(string8047, "++", [1], call8045);
                      var opresult8051 = callmethodChecked(opresult8049, "++", [1], string8041);
                      var opresult8054 = callmethodChecked(var_t, "++", [1], opresult8051);
                      var_t = opresult8054;
                      if8036 = GraceDone;
                    }
                    setLineNumber(1208);    // compilenode string
                    var string8055 = new GraceString("</code></td></tr>");
                    var opresult8058 = callmethodChecked(var_t, "++", [1], string8055);
                    var_t = opresult8058;
                    setLineNumber(1209);    // compilenode string
                    var string8059 = new GraceString("description");
                    var call8060 = callmethodChecked(superDepth, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call8061 = callmethodChecked(call8060, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call8062 = callmethodChecked(call8061, "formatComments()rowClass()colspan", [1, 1, 1], var_o, string8059, new GraceNum(3));
                    var opresult8065 = callmethodChecked(var_t, "++", [1], call8062);
                    var_t = opresult8065;
                    setLineNumber(1210);    // compilenode call
                    onSelf = true;
                    var call8066 = callmethodChecked(this, "fieldsSection", [0]);
                    var call8067 = callmethodChecked(call8066, "addElement()withText", [1, 1], var_n, var_t);
                    if8017 = call8067;
                  } else {
                    var if8068 = GraceDone;
                    setLineNumber(1212);    // compilenode identifier
                    var call8069 = callmethodChecked(var_o, "isReadable", [0]);
                    if (Grace_isTrue(call8069)) {
                      setLineNumber(1213);    // compilenode identifier
                      var call8070 = callmethodChecked(var_o, "name", [0]);
                      var call8071 = callmethodChecked(call8070, "value", [0]);
                      var var_n = call8071;
                      setLineNumber(1214);    // compilenode string
                      var string8072 = new GraceString("");
                      var call8074 = callmethodChecked(var_o, "name", [0]);
                      var call8075 = callmethodChecked(call8074, "value", [0]);
                      var string8077 = new GraceString("<tr class='placeholder'><td class='identifier-name'>");
                      var opresult8079 = callmethodChecked(string8077, "++", [1], call8075);
                      var opresult8081 = callmethodChecked(opresult8079, "++", [1], string8072);
                      var var_t = opresult8081;
                      setLineNumber(1215);    // compilenode string
                      var string8082 = new GraceString("</td><td><code>");
                      var opresult8085 = callmethodChecked(var_t, "++", [1], string8082);
                      var_t = opresult8085;
                      var if8086 = GraceDone;
                      setLineNumber(1216);    // compilenode identifier
                      var call8088 = callmethodChecked(var_o, "dtype", [0]);
                      var opresult8090 = callmethodChecked(call8088, "\u2260", [1], GraceFalse);
                      if (Grace_isTrue(opresult8090)) {
                        setLineNumber(1217);    // compilenode string
                        var string8091 = new GraceString("");
                        var call8093 = callmethodChecked(var_o, "dtype", [0]);
                        var call8094 = callmethodChecked(call8093, "value", [0]);
                        onSelf = true;
                        var call8095 = callmethodChecked(this, "getTypeLink", [1], call8094);
                        var string8097 = new GraceString("");
                        var opresult8099 = callmethodChecked(string8097, "++", [1], call8095);
                        var opresult8101 = callmethodChecked(opresult8099, "++", [1], string8091);
                        var opresult8104 = callmethodChecked(var_t, "++", [1], opresult8101);
                        var_t = opresult8104;
                        if8086 = GraceDone;
                      }
                      setLineNumber(1219);    // compilenode string
                      var string8105 = new GraceString("</code></td></tr>");
                      var opresult8108 = callmethodChecked(var_t, "++", [1], string8105);
                      var_t = opresult8108;
                      setLineNumber(1220);    // compilenode string
                      var string8109 = new GraceString("description");
                      var call8110 = callmethodChecked(superDepth, "outer", [0]);
                      onOuter = true;
                      onSelf = true;
                      var call8111 = callmethodChecked(call8110, "outer", [0]);
                      onOuter = true;
                      onSelf = true;
                      var call8112 = callmethodChecked(call8111, "formatComments()rowClass()colspan", [1, 1, 1], var_o, string8109, new GraceNum(2));
                      var opresult8115 = callmethodChecked(var_t, "++", [1], call8112);
                      var_t = opresult8115;
                      setLineNumber(1221);    // compilenode call
                      onSelf = true;
                      var call8116 = callmethodChecked(this, "methodsSection", [0]);
                      var call8117 = callmethodChecked(call8116, "addElement()withText", [1, 1], var_n, var_t);
                      if8068 = call8117;
                    }
                    var if8118 = GraceDone;
                    setLineNumber(1223);    // compilenode identifier
                    var call8119 = callmethodChecked(var_o, "isWritable", [0]);
                    if (Grace_isTrue(call8119)) {
                      setLineNumber(1224);    // compilenode string
                      var string8120 = new GraceString(":=");
                      var call8122 = callmethodChecked(var_o, "name", [0]);
                      var call8123 = callmethodChecked(call8122, "value", [0]);
                      var string8125 = new GraceString("");
                      var opresult8127 = callmethodChecked(string8125, "++", [1], call8123);
                      var opresult8129 = callmethodChecked(opresult8127, "++", [1], string8120);
                      var var_n = opresult8129;
                      setLineNumber(1225);    // compilenode string
                      var string8130 = new GraceString(":=</span>");
                      var call8132 = callmethodChecked(var_o, "name", [0]);
                      var call8133 = callmethodChecked(call8132, "value", [0]);
                      var string8135 = new GraceString("<tr class='placeholder'><td><code><span class='method-name'>");
                      var opresult8137 = callmethodChecked(string8135, "++", [1], call8133);
                      var opresult8139 = callmethodChecked(opresult8137, "++", [1], string8130);
                      var var_t = opresult8139;
                      var if8140 = GraceDone;
                      setLineNumber(1226);    // compilenode identifier
                      var call8142 = callmethodChecked(var_o, "dtype", [0]);
                      var opresult8144 = callmethodChecked(call8142, "\u2260", [1], GraceFalse);
                      if (Grace_isTrue(opresult8144)) {
                        setLineNumber(1227);    // compilenode string
                        var string8145 = new GraceString(")");
                        var call8147 = callmethodChecked(var_o, "dtype", [0]);
                        var call8148 = callmethodChecked(call8147, "value", [0]);
                        onSelf = true;
                        var call8149 = callmethodChecked(this, "getTypeLink", [1], call8148);
                        var string8151 = new GraceString("(_:");
                        var opresult8153 = callmethodChecked(string8151, "++", [1], call8149);
                        var opresult8155 = callmethodChecked(opresult8153, "++", [1], string8145);
                        var opresult8158 = callmethodChecked(var_t, "++", [1], opresult8155);
                        var_t = opresult8158;
                        if8140 = GraceDone;
                      }
                      setLineNumber(1229);    // compilenode string
                      var string8159 = new GraceString("</code></td><td><code>Done</code></td></tr>");
                      var opresult8162 = callmethodChecked(var_t, "++", [1], string8159);
                      var_t = opresult8162;
                      setLineNumber(1230);    // compilenode string
                      var string8163 = new GraceString("</td></tr>");
                      var call8165 = callmethodChecked(var_o, "name", [0]);
                      var call8166 = callmethodChecked(call8165, "value", [0]);
                      var string8168 = new GraceString("<tr class='description'><td colspan='2'>Updates ");
                      var opresult8170 = callmethodChecked(string8168, "++", [1], call8166);
                      var opresult8172 = callmethodChecked(opresult8170, "++", [1], string8163);
                      var opresult8175 = callmethodChecked(var_t, "++", [1], opresult8172);
                      var_t = opresult8175;
                      setLineNumber(1231);    // compilenode call
                      onSelf = true;
                      var call8176 = callmethodChecked(this, "methodsSection", [0]);
                      var call8177 = callmethodChecked(call8176, "addElement()withText", [1, 1], var_n, var_t);
                      if8118 = call8177;
                    }
                    if8017 = if8118;
                  }
                  setLineNumber(1234);    // compilenode identifier
                  return GraceFalse;
                }
                setLineNumber(1165);    // return value
                if (!Grace_isTrue(callmethod(var_Boolean, "match", [1], if7851)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitVarDec(1) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return if7851;
              };
              func7850.paramCounts = [1];
              obj5125.methods["visitVarDec"] = func7850;
              func7850.definitionLine = 1164;
              func7850.definitionModule = "gracedoc";
              var func8178 = function(argcv) {    // method visitInherits(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_o = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitInherits(1)"));
                setModuleName("gracedoc");
                setLineNumber(1242);    // compilenode identifier
                return GraceTrue;
              };
              func8178.paramCounts = [1];
              obj5125.methods["visitInherits"] = func8178;
              func8178.definitionLine = 1238;
              func8178.definitionModule = "gracedoc";
              setLineNumber(315);    // compilenode identifier
              var call8179 = callmethodChecked(var_ast, "baseVisitor()object", [0, 1], this);
              obj5125.superobj = call8179;
              if (call8179.data) obj5125.data = call8179.data;
              if (call8179.hasOwnProperty('_value'))
                  obj5125._value = call8179._value;
              setLineNumber(317);    // compilenode identifier
              obj5125.data["isOnClassPage"] = GraceFalse;
              var reader_gracedoc_isOnClassPage8180 = function() {
                return this.data["isOnClassPage"];
              };
              obj5125.methods["isOnClassPage"] = reader_gracedoc_isOnClassPage8180;
              obj5125.data["isOnClassPage"] = GraceFalse;
              var writer_gracedoc_isOnClassPage8180 = function(argcv, o) {
                this.data["isOnClassPage"] = o;
                return GraceDone;
              };
              obj5125.methods["isOnClassPage:="] = writer_gracedoc_isOnClassPage8180;
              reader_gracedoc_isOnClassPage8180.confidential = true;
              writer_gracedoc_isOnClassPage8180.confidential = true;
              obj5125.mutable = true;
              setLineNumber(318);    // compilenode identifier
              obj5125.data["isOnTypePage"] = GraceFalse;
              var reader_gracedoc_isOnTypePage8181 = function() {
                return this.data["isOnTypePage"];
              };
              obj5125.methods["isOnTypePage"] = reader_gracedoc_isOnTypePage8181;
              obj5125.data["isOnTypePage"] = GraceFalse;
              var writer_gracedoc_isOnTypePage8181 = function(argcv, o) {
                this.data["isOnTypePage"] = o;
                return GraceDone;
              };
              obj5125.methods["isOnTypePage:="] = writer_gracedoc_isOnTypePage8181;
              reader_gracedoc_isOnTypePage8181.confidential = true;
              writer_gracedoc_isOnTypePage8181.confidential = true;
              obj5125.mutable = true;
              var if8182 = GraceDone;
              setLineNumber(319);    // compilenode string
              var string8183 = new GraceString("class");
              var opresult8186 = callmethodChecked(var_pageType, "==", [1], string8183);
              if (Grace_isTrue(opresult8186)) {
                onSelf = true;
                var call8187 = callmethodChecked(this, "isOnClassPage:=", [1], GraceTrue);
                if8182 = call8187;
              } else {
                var if8188 = GraceDone;
                setLineNumber(320);    // compilenode string
                var string8189 = new GraceString("type");
                var opresult8192 = callmethodChecked(var_pageType, "==", [1], string8189);
                if (Grace_isTrue(opresult8192)) {
                  onSelf = true;
                  var call8193 = callmethodChecked(this, "isOnTypePage:=", [1], GraceTrue);
                  if8188 = call8193;
                }
                if8182 = if8188;
              }
              var if8194 = GraceDone;
              setLineNumber(322);    // compilenode string
              var string8195 = new GraceString(".grace");
              var call8196 = callmethodChecked(var_in, "endsWith", [1], string8195);
              var call8197 = callmethodChecked(call8196, "not", [0]);
              if (Grace_isTrue(call8197)) {
                if8194 = var_in;
              } else {
                setLineNumber(323);    // compilenode identifier
                var call8199 = callmethodChecked(var_in, "size", [0]);
                var diff8201 = callmethodChecked(call8199, "-", [1], new GraceNum(6));
                var call8202 = callmethodChecked(var_in, "substringFrom()to", [1, 1], new GraceNum(0), diff8201);
                if8194 = call8202;
              }
              obj5125.data["pageName"] = if8194;
              var reader_gracedoc_pageName8203 = function() {
                return this.data["pageName"];
              };
              reader_gracedoc_pageName8203.def = true;
              reader_gracedoc_pageName8203.confidential = true;
              obj5125.methods["pageName"] = reader_gracedoc_pageName8203;
              var if8204 = GraceDone;
              setLineNumber(324);    // compilenode call
              onSelf = true;
              var call8205 = callmethodChecked(this, "isOnTypePage", [0]);
              if (Grace_isTrue(call8205)) {
                var string8206 = new GraceString("");
                onSelf = true;
                var call8208 = callmethodChecked(this, "pageName", [0]);
                var string8210 = new GraceString("Type: ");
                var opresult8212 = callmethodChecked(string8210, "++", [1], call8208);
                var opresult8214 = callmethodChecked(opresult8212, "++", [1], string8206);
                if8204 = opresult8214;
              } else {
                var if8215 = GraceDone;
                setLineNumber(325);    // compilenode call
                onSelf = true;
                var call8216 = callmethodChecked(this, "isOnClassPage", [0]);
                if (Grace_isTrue(call8216)) {
                  var string8217 = new GraceString("");
                  onSelf = true;
                  var call8219 = callmethodChecked(this, "pageName", [0]);
                  var string8221 = new GraceString("Class: ");
                  var opresult8223 = callmethodChecked(string8221, "++", [1], call8219);
                  var opresult8225 = callmethodChecked(opresult8223, "++", [1], string8217);
                  if8215 = opresult8225;
                } else {
                  setLineNumber(326);    // compilenode string
                  var string8226 = new GraceString("");
                  onSelf = true;
                  var call8228 = callmethodChecked(this, "pageName", [0]);
                  var string8230 = new GraceString("Module: ");
                  var opresult8232 = callmethodChecked(string8230, "++", [1], call8228);
                  var opresult8234 = callmethodChecked(opresult8232, "++", [1], string8226);
                  if8215 = opresult8234;
                }
                if8204 = if8215;
              }
              obj5125.data["title"] = if8204;
              var reader_gracedoc_title8235 = function() {
                return this.data["title"];
              };
              reader_gracedoc_title8235.def = true;
              reader_gracedoc_title8235.confidential = true;
              obj5125.methods["title"] = reader_gracedoc_title8235;
              obj5125.data["headerSection"] = undefined;
              var reader_gracedoc_headerSection8236 = function() {
                return this.data["headerSection"];
              };
              obj5125.methods["headerSection"] = reader_gracedoc_headerSection8236;
              obj5125.data["headerSection"] = undefined;
              var writer_gracedoc_headerSection8236 = function(argcv, o) {
                this.data["headerSection"] = o;
                return GraceDone;
              };
              obj5125.methods["headerSection:="] = writer_gracedoc_headerSection8236;
              reader_gracedoc_headerSection8236.confidential = true;
              writer_gracedoc_headerSection8236.confidential = true;
              obj5125.mutable = true;
              obj5125.data["methodsSection"] = undefined;
              var reader_gracedoc_methodsSection8237 = function() {
                return this.data["methodsSection"];
              };
              obj5125.methods["methodsSection"] = reader_gracedoc_methodsSection8237;
              obj5125.data["methodsSection"] = undefined;
              var writer_gracedoc_methodsSection8237 = function(argcv, o) {
                this.data["methodsSection"] = o;
                return GraceDone;
              };
              obj5125.methods["methodsSection:="] = writer_gracedoc_methodsSection8237;
              reader_gracedoc_methodsSection8237.confidential = true;
              writer_gracedoc_methodsSection8237.confidential = true;
              obj5125.mutable = true;
              obj5125.data["typesSection"] = undefined;
              var reader_gracedoc_typesSection8238 = function() {
                return this.data["typesSection"];
              };
              obj5125.methods["typesSection"] = reader_gracedoc_typesSection8238;
              obj5125.data["typesSection"] = undefined;
              var writer_gracedoc_typesSection8238 = function(argcv, o) {
                this.data["typesSection"] = o;
                return GraceDone;
              };
              obj5125.methods["typesSection:="] = writer_gracedoc_typesSection8238;
              reader_gracedoc_typesSection8238.confidential = true;
              writer_gracedoc_typesSection8238.confidential = true;
              obj5125.mutable = true;
              obj5125.data["fieldsSection"] = undefined;
              var reader_gracedoc_fieldsSection8239 = function() {
                return this.data["fieldsSection"];
              };
              obj5125.methods["fieldsSection"] = reader_gracedoc_fieldsSection8239;
              obj5125.data["fieldsSection"] = undefined;
              var writer_gracedoc_fieldsSection8239 = function(argcv, o) {
                this.data["fieldsSection"] = o;
                return GraceDone;
              };
              obj5125.methods["fieldsSection:="] = writer_gracedoc_fieldsSection8239;
              reader_gracedoc_fieldsSection8239.confidential = true;
              writer_gracedoc_fieldsSection8239.confidential = true;
              obj5125.mutable = true;
              obj5125.data["classesSection"] = undefined;
              var reader_gracedoc_classesSection8240 = function() {
                return this.data["classesSection"];
              };
              obj5125.methods["classesSection"] = reader_gracedoc_classesSection8240;
              obj5125.data["classesSection"] = undefined;
              var writer_gracedoc_classesSection8240 = function(argcv, o) {
                this.data["classesSection"] = o;
                return GraceDone;
              };
              obj5125.methods["classesSection:="] = writer_gracedoc_classesSection8240;
              reader_gracedoc_classesSection8240.confidential = true;
              writer_gracedoc_classesSection8240.confidential = true;
              obj5125.mutable = true;
              obj5125.data["footerSection"] = undefined;
              var reader_gracedoc_footerSection8241 = function() {
                return this.data["footerSection"];
              };
              obj5125.methods["footerSection"] = reader_gracedoc_footerSection8241;
              obj5125.data["footerSection"] = undefined;
              var writer_gracedoc_footerSection8241 = function(argcv, o) {
                this.data["footerSection"] = o;
                return GraceDone;
              };
              obj5125.methods["footerSection:="] = writer_gracedoc_footerSection8241;
              reader_gracedoc_footerSection8241.confidential = true;
              writer_gracedoc_footerSection8241.confidential = true;
              obj5125.mutable = true;
              obj5125.data["methodtypesSection"] = undefined;
              var reader_gracedoc_methodtypesSection8242 = function() {
                return this.data["methodtypesSection"];
              };
              obj5125.methods["methodtypesSection"] = reader_gracedoc_methodtypesSection8242;
              obj5125.data["methodtypesSection"] = undefined;
              var writer_gracedoc_methodtypesSection8242 = function(argcv, o) {
                this.data["methodtypesSection"] = o;
                return GraceDone;
              };
              obj5125.methods["methodtypesSection:="] = writer_gracedoc_methodtypesSection8242;
              reader_gracedoc_methodtypesSection8242.confidential = true;
              writer_gracedoc_methodtypesSection8242.confidential = true;
              obj5125.mutable = true;
              obj5125.data["topDescSection"] = undefined;
              var reader_gracedoc_topDescSection8243 = function() {
                return this.data["topDescSection"];
              };
              obj5125.methods["topDescSection"] = reader_gracedoc_topDescSection8243;
              obj5125.data["topDescSection"] = undefined;
              var writer_gracedoc_topDescSection8243 = function(argcv, o) {
                this.data["topDescSection"] = o;
                return GraceDone;
              };
              obj5125.methods["topDescSection:="] = writer_gracedoc_topDescSection8243;
              reader_gracedoc_topDescSection8243.confidential = true;
              writer_gracedoc_topDescSection8243.confidential = true;
              obj5125.mutable = true;
              var if8244 = GraceDone;
              setLineNumber(337);    // compilenode identifier
              var call8246 = callmethodChecked(var_settings, "verbosity", [0]);
              var opresult8248 = callmethodChecked(call8246, ">", [1], new GraceNum(1));
              if (Grace_isTrue(opresult8248)) {
                var string8249 = new GraceString(")");
                var call8251 = callmethodChecked(var_sys, "elapsedTime", [0]);
                var string8253 = new GraceString(" - graceDocVisitor created... (");
                onSelf = true;
                var call8255 = callmethodChecked(this, "title", [0]);
                var string8257 = new GraceString("On ");
                var opresult8259 = callmethodChecked(string8257, "++", [1], call8255);
                var opresult8261 = callmethodChecked(opresult8259, "++", [1], string8253);
                var opresult8263 = callmethodChecked(opresult8261, "++", [1], call8251);
                var opresult8265 = callmethodChecked(opresult8263, "++", [1], string8249);
                var call8266 = Grace_print(opresult8265);
                if8244 = call8266;
              }
              var if8267 = GraceDone;
              setLineNumber(339);    // compilenode call
              onSelf = true;
              var call8268 = callmethodChecked(this, "isOnTypePage", [0]);
              onSelf = true;
              var call8270 = callmethodChecked(this, "isOnClassPage", [0]);
              var opresult8272 = callmethodChecked(call8270, "||", [1], call8268);
              if (Grace_isTrue(opresult8272)) {
                if8267 = var_dir;
              } else {
                onSelf = true;
                var call8273 = callmethodChecked(this, "pageName", [0]);
                if8267 = call8273;
              }
              obj5125.data["outdir"] = if8267;
              var reader_gracedoc_outdir8274 = function() {
                return this.data["outdir"];
              };
              reader_gracedoc_outdir8274.def = true;
              reader_gracedoc_outdir8274.confidential = true;
              obj5125.methods["outdir"] = reader_gracedoc_outdir8274;
              setLineNumber(340);    // compilenode call
              onSelf = true;
              var call8275 = callmethodChecked(this, "buildTemplate", [0]);
              superDepth = origSuperDepth;
            };
            obj_init_5125.apply(inheritingObject, []);
            return obj5125;
            };
            obj1970.methods["createFrom()outTo()as()object"] = func5124;
          var func8276 = function(argcv) {    // method 
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("gracedoc");
            setLineNumber(314);    // compilenode string
            var string8277 = new GraceString("class graceDocVisitor");
            return string8277;
          };
          func8276.paramCounts = [];
          obj1970.methods["asString"] = func8276;
          func8276.definitionLine = 314;
          func8276.definitionModule = "gracedoc";
          superDepth = origSuperDepth;
        };
        obj_init_1970.apply(obj1970, []);
        var var_graceDocVisitor = obj1970;
        setLineNumber(340);    // compilenode method
        var func8278 = function(argcv) {    // method graceDocVisitor
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for graceDocVisitor"));
          setModuleName("gracedoc");
          // graceDocVisitor is a simple accessor - elide try ... catch
          setLineNumber(314);    // compilenode identifier
          return var_graceDocVisitor;
        };
        func8278.paramCounts = [0];
        this.methods["graceDocVisitor"] = func8278;
        func8278.definitionLine = 340;
        func8278.definitionModule = "gracedoc";
        this.methods["graceDocVisitor"].debug = "def";
        setLineNumber(1258);    // compilenode call
        onSelf = true;
        var call8279 = callmethodChecked(this, "parseArguments", [0]);
        setLineNumber(1260);    // compilenode vardec
        var var_file;
        setLineNumber(1258);    // compilenode method
        var func8280 = function(argcv) {    // method file
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for file"));
          setModuleName("gracedoc");
          // file is a simple accessor - elide try ... catch
          setLineNumber(1260);    // compilenode identifier
          return var_file;
        };
        func8280.paramCounts = [0];
        this.methods["file"] = func8280;
        func8280.definitionLine = 1258;
        func8280.definitionModule = "gracedoc";
        setLineNumber(1258);    // compilenode method
        var func8281 = function(argcv) {    // method file:=(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var___95__var__95__assign__95__tmp = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for file:=(1)"));
          setModuleName("gracedoc");
          var_file = var___95__var__95__assign__95__tmp;
          return GraceDone;
        };
        func8281.paramCounts = [1];
        this.methods["file:="] = func8281;
        func8281.definitionLine = 1258;
        func8281.definitionModule = "gracedoc";
        this.methods["file"].debug = "var";
        setLineNumber(1261);    // compilenode vardec
        var var_dbv;
        setLineNumber(1258);    // compilenode method
        var func8282 = function(argcv) {    // method dbv
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for dbv"));
          setModuleName("gracedoc");
          // dbv is a simple accessor - elide try ... catch
          setLineNumber(1261);    // compilenode identifier
          return var_dbv;
        };
        func8282.paramCounts = [0];
        this.methods["dbv"] = func8282;
        func8282.definitionLine = 1258;
        func8282.definitionModule = "gracedoc";
        setLineNumber(1258);    // compilenode method
        var func8283 = function(argcv) {    // method dbv:=(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var___95__var__95__assign__95__tmp = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for dbv:=(1)"));
          setModuleName("gracedoc");
          var_dbv = var___95__var__95__assign__95__tmp;
          return GraceDone;
        };
        func8283.paramCounts = [1];
        this.methods["dbv:="] = func8283;
        func8283.definitionLine = 1258;
        func8283.definitionModule = "gracedoc";
        this.methods["dbv"].debug = "var";
        setLineNumber(1262);    // compilenode vardec
        var var_gdv;
        setLineNumber(1258);    // compilenode method
        var func8284 = function(argcv) {    // method gdv
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for gdv"));
          setModuleName("gracedoc");
          // gdv is a simple accessor - elide try ... catch
          setLineNumber(1262);    // compilenode identifier
          return var_gdv;
        };
        func8284.paramCounts = [0];
        this.methods["gdv"] = func8284;
        func8284.definitionLine = 1258;
        func8284.definitionModule = "gracedoc";
        setLineNumber(1258);    // compilenode method
        var func8285 = function(argcv) {    // method gdv:=(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var___95__var__95__assign__95__tmp = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for gdv:=(1)"));
          setModuleName("gracedoc");
          var_gdv = var___95__var__95__assign__95__tmp;
          return GraceDone;
        };
        func8285.paramCounts = [1];
        this.methods["gdv:="] = func8285;
        func8285.definitionLine = 1258;
        func8285.definitionModule = "gracedoc";
        this.methods["gdv"].debug = "var";
        setLineNumber(1263);    // compilenode vardec
        var var_modulename;
        setLineNumber(1258);    // compilenode method
        var func8286 = function(argcv) {    // method modulename
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for modulename"));
          setModuleName("gracedoc");
          // modulename is a simple accessor - elide try ... catch
          setLineNumber(1263);    // compilenode identifier
          return var_modulename;
        };
        func8286.paramCounts = [0];
        this.methods["modulename"] = func8286;
        func8286.definitionLine = 1258;
        func8286.definitionModule = "gracedoc";
        setLineNumber(1258);    // compilenode method
        var func8287 = function(argcv) {    // method modulename:=(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var___95__var__95__assign__95__tmp = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for modulename:=(1)"));
          setModuleName("gracedoc");
          var_modulename = var___95__var__95__assign__95__tmp;
          return GraceDone;
        };
        func8287.paramCounts = [1];
        this.methods["modulename:="] = func8287;
        func8287.definitionLine = 1258;
        func8287.definitionModule = "gracedoc";
        this.methods["modulename"].debug = "var";
        setLineNumber(1264);    // compilenode vardec
        var var_counter;
        setLineNumber(1258);    // compilenode method
        var func8288 = function(argcv) {    // method counter
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for counter"));
          setModuleName("gracedoc");
          // counter is a simple accessor - elide try ... catch
          setLineNumber(1264);    // compilenode identifier
          return var_counter;
        };
        func8288.paramCounts = [0];
        this.methods["counter"] = func8288;
        func8288.definitionLine = 1258;
        func8288.definitionModule = "gracedoc";
        setLineNumber(1258);    // compilenode method
        var func8289 = function(argcv) {    // method counter:=(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var___95__var__95__assign__95__tmp = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for counter:=(1)"));
          setModuleName("gracedoc");
          var_counter = var___95__var__95__assign__95__tmp;
          return GraceDone;
        };
        func8289.paramCounts = [1];
        this.methods["counter:="] = func8289;
        func8289.definitionLine = 1258;
        func8289.definitionModule = "gracedoc";
        this.methods["counter"].debug = "var";
        setLineNumber(1266);    // compilenode identifier
        var call8290 = callmethodChecked(var_settings, "inputdir", [0]);
        var call8291 = callmethodChecked(var_io, "listdir", [1], call8290);
        var var_allModules = call8291;
        var func8292 = function(argcv) {    // method allModules
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for allModules"));
          setModuleName("gracedoc");
          // allModules is a simple accessor - elide try ... catch
          return var_allModules;
        };
        func8292.paramCounts = [0];
        this.methods["allModules"] = func8292;
        func8292.definitionLine = 1266;
        func8292.definitionModule = "gracedoc";
        var func8293 = function(argcv) {    // method allModules:=(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var___95__var__95__assign__95__tmp = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for allModules:=(1)"));
          setModuleName("gracedoc");
          var_allModules = var___95__var__95__assign__95__tmp;
          return GraceDone;
        };
        func8293.paramCounts = [1];
        this.methods["allModules:="] = func8293;
        func8293.definitionLine = 1266;
        func8293.definitionModule = "gracedoc";
        this.methods["allModules"].debug = "var";
        setLineNumber(1267);    // compilenode call
        var call8294 = callmethodChecked(var_prelude, "dictionary", [0]);
        var call8295 = callmethodChecked(call8294, "empty", [0]);
        var var_parsedFiles = call8295;
        var func8296 = function(argcv) {    // method parsedFiles
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for parsedFiles"));
          setModuleName("gracedoc");
          // parsedFiles is a simple accessor - elide try ... catch
          return var_parsedFiles;
        };
        func8296.paramCounts = [0];
        this.methods["parsedFiles"] = func8296;
        func8296.definitionLine = 1267;
        func8296.definitionModule = "gracedoc";
        var func8297 = function(argcv) {    // method parsedFiles:=(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var___95__var__95__assign__95__tmp = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for parsedFiles:=(1)"));
          setModuleName("gracedoc");
          var_parsedFiles = var___95__var__95__assign__95__tmp;
          return GraceDone;
        };
        func8297.paramCounts = [1];
        this.methods["parsedFiles:="] = func8297;
        func8297.definitionLine = 1267;
        func8297.definitionModule = "gracedoc";
        this.methods["parsedFiles"].debug = "var";
        setLineNumber(1268);    // compilenode identifier
        var var_inputWasFound = GraceFalse;
        setLineNumber(1267);    // compilenode method
        var func8298 = function(argcv) {    // method inputWasFound
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for inputWasFound"));
          setModuleName("gracedoc");
          // inputWasFound is a simple accessor - elide try ... catch
          setLineNumber(1268);    // compilenode identifier
          return var_inputWasFound;
        };
        func8298.paramCounts = [0];
        this.methods["inputWasFound"] = func8298;
        func8298.definitionLine = 1267;
        func8298.definitionModule = "gracedoc";
        setLineNumber(1267);    // compilenode method
        var func8299 = function(argcv) {    // method inputWasFound:=(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var___95__var__95__assign__95__tmp = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for inputWasFound:=(1)"));
          setModuleName("gracedoc");
          var_inputWasFound = var___95__var__95__assign__95__tmp;
          return GraceDone;
        };
        func8299.paramCounts = [1];
        this.methods["inputWasFound:="] = func8299;
        func8299.definitionLine = 1267;
        func8299.definitionModule = "gracedoc";
        this.methods["inputWasFound"].debug = "var";
        setLineNumber(1271);    // compilenode num
        var_counter = new GraceNum(1);
        setLineNumber(1272);    // compilenode block
        var block8300 = new GraceBlock(this, 1272, 1);
        setLineNumber(1);    // compilenode identifier
        block8300.real = function(var_filename) {
          var if8301 = GraceDone;
          setLineNumber(1273);    // compilenode string
          var string8302 = new GraceString(".grace");
          var call8303 = callmethodChecked(var_filename, "endsWith", [1], string8302);
          if (Grace_isTrue(call8303)) {
            setLineNumber(1274);    // compilenode string
            var string8304 = new GraceString("");
            var string8307 = new GraceString("/");
            var call8309 = callmethodChecked(var_settings, "inputdir", [0]);
            var string8311 = new GraceString("");
            var opresult8313 = callmethodChecked(string8311, "++", [1], call8309);
            var opresult8315 = callmethodChecked(opresult8313, "++", [1], string8307);
            var opresult8317 = callmethodChecked(opresult8315, "++", [1], var_filename);
            var opresult8319 = callmethodChecked(opresult8317, "++", [1], string8304);
            var string8320 = new GraceString("r");
            var call8321 = callmethodChecked(var_io, "open", [2], opresult8319, string8320);
            var_file = call8321;
            var if8322 = GraceDone;
            setLineNumber(1275);    // compilenode identifier
            var call8324 = callmethodChecked(var_settings, "verbosity", [0]);
            var opresult8326 = callmethodChecked(call8324, ">", [1], new GraceNum(0));
            if (Grace_isTrue(opresult8326)) {
              var string8327 = new GraceString(")");
              var call8329 = callmethodChecked(var_sys, "elapsedTime", [0]);
              var string8331 = new GraceString(" - lexing... (");
              var string8334 = new GraceString("On ");
              var opresult8336 = callmethodChecked(string8334, "++", [1], var_filename);
              var opresult8338 = callmethodChecked(opresult8336, "++", [1], string8331);
              var opresult8340 = callmethodChecked(opresult8338, "++", [1], call8329);
              var opresult8342 = callmethodChecked(opresult8340, "++", [1], string8327);
              var call8343 = Grace_print(opresult8342);
              if8322 = call8343;
            }
            setLineNumber(1276);    // compilenode identifier
            var call8344 = callmethodChecked(var_lexer, "new", [0]);
            var call8345 = callmethodChecked(call8344, "lexfile", [1], var_file);
            var var_tokens = call8345;
            var if8346 = GraceDone;
            setLineNumber(1277);    // compilenode identifier
            var call8348 = callmethodChecked(var_settings, "verbosity", [0]);
            var opresult8350 = callmethodChecked(call8348, ">", [1], new GraceNum(0));
            if (Grace_isTrue(opresult8350)) {
              var string8351 = new GraceString(")");
              var call8353 = callmethodChecked(var_sys, "elapsedTime", [0]);
              var string8355 = new GraceString(" - done lexing... (");
              var string8358 = new GraceString("On ");
              var opresult8360 = callmethodChecked(string8358, "++", [1], var_filename);
              var opresult8362 = callmethodChecked(opresult8360, "++", [1], string8355);
              var opresult8364 = callmethodChecked(opresult8362, "++", [1], call8353);
              var opresult8366 = callmethodChecked(opresult8364, "++", [1], string8351);
              var call8367 = Grace_print(opresult8366);
              if8346 = call8367;
            }
            var if8368 = GraceDone;
            setLineNumber(1278);    // compilenode identifier
            var call8370 = callmethodChecked(var_settings, "verbosity", [0]);
            var opresult8372 = callmethodChecked(call8370, ">", [1], new GraceNum(0));
            if (Grace_isTrue(opresult8372)) {
              var string8373 = new GraceString(")");
              var call8375 = callmethodChecked(var_sys, "elapsedTime", [0]);
              var string8377 = new GraceString(" - parsing... (");
              var string8380 = new GraceString("On ");
              var opresult8382 = callmethodChecked(string8380, "++", [1], var_filename);
              var opresult8384 = callmethodChecked(opresult8382, "++", [1], string8377);
              var opresult8386 = callmethodChecked(opresult8384, "++", [1], call8375);
              var opresult8388 = callmethodChecked(opresult8386, "++", [1], string8373);
              var call8389 = Grace_print(opresult8388);
              if8368 = call8389;
            }
            setLineNumber(1280);    // compilenode identifier
            var call8390 = callmethodChecked(var_parser, "parse", [1], var_tokens);
            var call8391 = callmethodChecked(var_parsedFiles, "at()put", [1, 1], var_counter, call8390);
            var if8392 = GraceDone;
            setLineNumber(1282);    // compilenode identifier
            var call8394 = callmethodChecked(var_settings, "verbosity", [0]);
            var opresult8396 = callmethodChecked(call8394, ">", [1], new GraceNum(0));
            if (Grace_isTrue(opresult8396)) {
              var string8397 = new GraceString(")");
              var call8399 = callmethodChecked(var_sys, "elapsedTime", [0]);
              var string8401 = new GraceString(" - done parsing... (");
              var string8404 = new GraceString("On ");
              var opresult8406 = callmethodChecked(string8404, "++", [1], var_filename);
              var opresult8408 = callmethodChecked(opresult8406, "++", [1], string8401);
              var opresult8410 = callmethodChecked(opresult8408, "++", [1], call8399);
              var opresult8412 = callmethodChecked(opresult8410, "++", [1], string8397);
              var call8413 = Grace_print(opresult8412);
              if8392 = call8413;
            }
            setLineNumber(1283);    // compilenode identifier
            var opresult8416 = callmethodChecked(var_counter, "+", [1], new GraceNum(1));
            var_counter = opresult8416;
            setLineNumber(1284);    // compilenode identifier
            var_inputWasFound = GraceTrue;
            setLineNumber(1285);    // compilenode identifier
            var call8417 = callmethodChecked(var_file, "close", [0]);
            if8301 = call8417;
          }
          return if8301;
        };
        var call8418 = callmethodChecked(var_prelude, "for()do", [1, 1], var_allModules, block8300);
        var if8419 = GraceDone;
        setLineNumber(1289);    // compilenode identifier
        var call8420 = callmethodChecked(var_inputWasFound, "prefix!", [0]);
        if (Grace_isTrue(call8420)) {
          setLineNumber(1290);    // compilenode string
          var string8421 = new GraceString("gracedoc: Input error - no Grace files found in the input directory.");
          var call8422 = callmethodChecked(var_io, "error", [0]);
          var call8423 = callmethodChecked(call8422, "write", [1], string8421);
          setLineNumber(1291);    // compilenode string
          var string8424 = new GraceString("          Either the directory doesn't exist, or it doesn't contain any files.");
          var call8425 = callmethodChecked(var_io, "error", [0]);
          var call8426 = callmethodChecked(call8425, "write", [1], string8424);
          setLineNumber(1292);    // compilenode string
          var string8427 = new GraceString("          Directories should be named relative to the ./minigrace executable.");
          var call8428 = callmethodChecked(var_io, "error", [0]);
          var call8429 = callmethodChecked(call8428, "write", [1], string8427);
          setLineNumber(1293);    // compilenode identifier
          var call8430 = callmethodChecked(var_sys, "exit", [1], new GraceNum(1));
          if8419 = call8430;
        }
        setLineNumber(1297);    // compilenode num
        var_counter = new GraceNum(1);
        setLineNumber(1298);    // compilenode block
        var block8431 = new GraceBlock(this, 1298, 1);
        setLineNumber(1);    // compilenode identifier
        block8431.real = function(var_filename) {
          var if8432 = GraceDone;
          setLineNumber(1299);    // compilenode string
          var string8433 = new GraceString(".grace");
          var call8434 = callmethodChecked(var_filename, "endsWith", [1], string8433);
          if (Grace_isTrue(call8434)) {
            var if8435 = GraceDone;
            setLineNumber(1300);    // compilenode identifier
            var call8437 = callmethodChecked(var_settings, "verbosity", [0]);
            var opresult8439 = callmethodChecked(call8437, ">", [1], new GraceNum(0));
            if (Grace_isTrue(opresult8439)) {
              var string8440 = new GraceString(")");
              var call8442 = callmethodChecked(var_sys, "elapsedTime", [0]);
              var string8444 = new GraceString(" - building directories... (");
              var string8447 = new GraceString("On ");
              var opresult8449 = callmethodChecked(string8447, "++", [1], var_filename);
              var opresult8451 = callmethodChecked(opresult8449, "++", [1], string8444);
              var opresult8453 = callmethodChecked(opresult8451, "++", [1], call8442);
              var opresult8455 = callmethodChecked(opresult8453, "++", [1], string8440);
              var call8456 = Grace_print(opresult8455);
              if8435 = call8456;
            }
            setLineNumber(1301);    // compilenode identifier
            var call8458 = callmethodChecked(var_filename, "size", [0]);
            var diff8460 = callmethodChecked(call8458, "-", [1], new GraceNum(6));
            var call8461 = callmethodChecked(var_filename, "substringFrom()to", [1, 1], new GraceNum(1), diff8460);
            var_modulename = call8461;
            setLineNumber(1302);    // compilenode identifier
            var call8462 = callmethodChecked(var_parsedFiles, "at", [1], var_counter);
            var var_moduleObject = call8462;
            setLineNumber(1303);    // compilenode string
            var string8463 = new GraceString("module");
            onSelf = true;
            var call8464 = callmethodChecked(this, "directoryBuilderForFile()outTo()as", [1, 1, 1], var_filename, var_modulename, string8463);
            var_dbv = call8464;
            setLineNumber(1304);    // compilenode identifier
            var call8465 = callmethodChecked(var_moduleObject, "accept", [1], var_dbv);
            setLineNumber(1305);    // compilenode identifier
            var call8466 = callmethodChecked(var_dbv, "generate", [0]);
            var if8467 = GraceDone;
            setLineNumber(1306);    // compilenode identifier
            var call8469 = callmethodChecked(var_settings, "verbosity", [0]);
            var opresult8471 = callmethodChecked(call8469, ">", [1], new GraceNum(0));
            if (Grace_isTrue(opresult8471)) {
              var string8472 = new GraceString(")");
              var call8474 = callmethodChecked(var_sys, "elapsedTime", [0]);
              var string8476 = new GraceString(" - directories built... (");
              var string8479 = new GraceString("On ");
              var opresult8481 = callmethodChecked(string8479, "++", [1], var_filename);
              var opresult8483 = callmethodChecked(opresult8481, "++", [1], string8476);
              var opresult8485 = callmethodChecked(opresult8483, "++", [1], call8474);
              var opresult8487 = callmethodChecked(opresult8485, "++", [1], string8472);
              var call8488 = Grace_print(opresult8487);
              if8467 = call8488;
            }
            setLineNumber(1307);    // compilenode identifier
            var opresult8491 = callmethodChecked(var_counter, "+", [1], new GraceNum(1));
            var_counter = opresult8491;
            if8432 = GraceDone;
          }
          return if8432;
        };
        var call8492 = callmethodChecked(var_prelude, "for()do", [1, 1], var_allModules, block8431);
        setLineNumber(1312);    // compilenode num
        var_counter = new GraceNum(1);
        setLineNumber(1313);    // compilenode block
        var block8493 = new GraceBlock(this, 1313, 1);
        setLineNumber(1);    // compilenode identifier
        block8493.real = function(var_filename) {
          var if8494 = GraceDone;
          setLineNumber(1314);    // compilenode string
          var string8495 = new GraceString(".grace");
          var call8496 = callmethodChecked(var_filename, "endsWith", [1], string8495);
          if (Grace_isTrue(call8496)) {
            var if8497 = GraceDone;
            setLineNumber(1315);    // compilenode identifier
            var call8499 = callmethodChecked(var_settings, "verbosity", [0]);
            var opresult8501 = callmethodChecked(call8499, ">", [1], new GraceNum(0));
            if (Grace_isTrue(opresult8501)) {
              var string8502 = new GraceString(")");
              var call8504 = callmethodChecked(var_sys, "elapsedTime", [0]);
              var string8506 = new GraceString(" - generating GraceDocs... (");
              var string8509 = new GraceString("On ");
              var opresult8511 = callmethodChecked(string8509, "++", [1], var_filename);
              var opresult8513 = callmethodChecked(opresult8511, "++", [1], string8506);
              var opresult8515 = callmethodChecked(opresult8513, "++", [1], call8504);
              var opresult8517 = callmethodChecked(opresult8515, "++", [1], string8502);
              var call8518 = Grace_print(opresult8517);
              if8497 = call8518;
            }
            setLineNumber(1316);    // compilenode identifier
            var call8520 = callmethodChecked(var_filename, "size", [0]);
            var diff8522 = callmethodChecked(call8520, "-", [1], new GraceNum(6));
            var call8523 = callmethodChecked(var_filename, "substringFrom()to", [1, 1], new GraceNum(1), diff8522);
            var_modulename = call8523;
            setLineNumber(1317);    // compilenode identifier
            var call8524 = callmethodChecked(var_parsedFiles, "at", [1], var_counter);
            var var_moduleObject = call8524;
            setLineNumber(1318);    // compilenode string
            var string8525 = new GraceString("module");
            var call8526 = callmethodChecked(var_graceDocVisitor, "createFrom()outTo()as", [1, 1, 1], var_filename, var_modulename, string8525);
            var_gdv = call8526;
            setLineNumber(1319);    // compilenode identifier
            var call8527 = callmethodChecked(var_moduleObject, "accept", [1], var_gdv);
            setLineNumber(1320);    // compilenode identifier
            var call8528 = callmethodChecked(var_gdv, "generate", [0]);
            setLineNumber(1321);    // compilenode identifier
            var call8529 = callmethodChecked(var_gdv, "buildindex", [0]);
            setLineNumber(1322);    // compilenode identifier
            var call8530 = callmethodChecked(var_gdv, "buildcss", [0]);
            setLineNumber(1323);    // compilenode identifier
            var call8531 = callmethodChecked(var_gdv, "buildjs", [0]);
            setLineNumber(1324);    // compilenode identifier
            var call8532 = callmethodChecked(var_gdv, "build404", [0]);
            var if8533 = GraceDone;
            setLineNumber(1325);    // compilenode identifier
            var call8535 = callmethodChecked(var_settings, "verbosity", [0]);
            var opresult8537 = callmethodChecked(call8535, ">", [1], new GraceNum(0));
            if (Grace_isTrue(opresult8537)) {
              var string8538 = new GraceString(")");
              var call8540 = callmethodChecked(var_sys, "elapsedTime", [0]);
              var string8542 = new GraceString(" - done! (");
              var string8545 = new GraceString("On ");
              var opresult8547 = callmethodChecked(string8545, "++", [1], var_filename);
              var opresult8549 = callmethodChecked(opresult8547, "++", [1], string8542);
              var opresult8551 = callmethodChecked(opresult8549, "++", [1], call8540);
              var opresult8553 = callmethodChecked(opresult8551, "++", [1], string8538);
              var call8554 = Grace_print(opresult8553);
              if8533 = call8554;
            }
            setLineNumber(1326);    // compilenode identifier
            var opresult8557 = callmethodChecked(var_counter, "+", [1], new GraceNum(1));
            var_counter = opresult8557;
            if8494 = GraceDone;
          }
          return if8494;
        };
        var call8558 = callmethodChecked(var_prelude, "for()do", [1, 1], var_allModules, block8493);
        return this;
      }
      gracecode_gracedoc.imports = ['ast', 'io', 'lexer', 'parser', 'sys'];
      if (typeof gctCache !== "undefined")
        gctCache['gracedoc'] = "classes:\n graceDocVisitor\n section\nconfidential:\nconstructors-of:graceDocVisitor:\n createFrom()outTo()as\nconstructors-of:section:\n withTemplate()andCursorAt\nfresh-methods:\n directoryBuilderForFile()outTo()as\nfresh:directoryBuilderForFile()outTo()as:\n asString\n generate\n isOnClassPage\n isOnTypePage\n outdir\n pageName\n title\n visitArray\n visitArray()up\n visitBind\n visitBind()up\n visitBlank\n visitBlank()up\n visitBlock\n visitBlock()up\n visitCall\n visitCall()up\n visitComment\n visitComment()up\n visitDefDec\n visitDefDec()up\n visitDialect\n visitDialect()up\n visitGeneric\n visitGeneric()up\n visitIdentifier\n visitIdentifier()up\n visitIf\n visitIf()up\n visitImport\n visitImport()up\n visitInherits\n visitInherits()up\n visitMatchCase\n visitMatchCase()up\n visitMember\n visitMember()up\n visitMethod\n visitMethod()up\n visitMethodType\n visitMethodType()up\n visitModule\n visitModule()up\n visitNum\n visitNum()up\n visitObject\n visitObject()up\n visitOp\n visitOp()up\n visitReturn\n visitReturn()up\n visitSignaturePart\n visitSignaturePart()up\n visitString\n visitString()up\n visitTryCatch\n visitTryCatch()up\n visitTypeDec\n visitTypeDec()up\n visitTypeLiteral\n visitTypeLiteral()up\n visitTypeParameters\n visitTypeParameters()up\n visitVarDec\n visitVarDec()up\nmethods-of:graceDocVisitor.createFrom()outTo()as:\n asString\n build404\n buildTemplate\n buildcss\n buildindex\n buildjs\n classesSection\n doClassMethod\n fieldsSection\n footerSection\n generate\n getClassLink\n getTypeLink\n headerSection\n isOnClassPage\n isOnTypePage\n methodsSection\n methodtypesSection\n outdir\n pageName\n title\n topDescSection\n typesSection\n visitArray\n visitArray()up\n visitBind\n visitBind()up\n visitBlank\n visitBlank()up\n visitBlock\n visitBlock()up\n visitCall\n visitCall()up\n visitComment\n visitComment()up\n visitDefDec\n visitDefDec()up\n visitDialect\n visitDialect()up\n visitGeneric\n visitGeneric()up\n visitIdentifier\n visitIdentifier()up\n visitIf\n visitIf()up\n visitImport\n visitImport()up\n visitInherits\n visitInherits()up\n visitMatchCase\n visitMatchCase()up\n visitMember\n visitMember()up\n visitMethod\n visitMethod()up\n visitMethodType\n visitMethodType()up\n visitModule\n visitModule()up\n visitNum\n visitNum()up\n visitObject\n visitObject()up\n visitOp\n visitOp()up\n visitReturn\n visitReturn()up\n visitSignaturePart\n visitSignaturePart()up\n visitString\n visitString()up\n visitTryCatch\n visitTryCatch()up\n visitTypeDec\n visitTypeDec()up\n visitTypeLiteral\n visitTypeLiteral()up\n visitTypeParameters\n visitTypeParameters()up\n visitVarDec\n visitVarDec()up\nmethods-of:section.withTemplate()andCursorAt:\n addElement()withText\n alphabetize\n cursor\n elts\n hasContent\n html\n insert\nmethodtypes-of:Section:\n 1 html -> String\n 1 insert -> Done\n 1 isEmpty -> Boolean\nmodules:\n ast\n errormessages\n identifierKinds\n io\n lexer\n parser\n stringMap\n sys\n unicode\n unixFilePath\n util\npath:\n gracedoc\npublic:\n Section\n autoindent\n directoryBuilderForFile()outTo()as\n formatComments()rowClass()colspan\n graceDocVisitor\n indent\n parseArguments\n section\n trim\ntypes:\n Section\n";
      if (typeof originalSourceLines !== "undefined") {
        originalSourceLines["gracedoc"] = [
          "import \"ast\" as ast",
          "import \"parser\" as parser",
          "import \"lexer\" as lexer",
          "import \"io\" as io",
          "import \"sys\" as sys",
          "",
          "def settings = object {",
          "    var inputdir:String is public := \"\"",
          "    var outputdir:String is public := \"\"",
          "    var verbosity:Number is public := 0",
          "    var publicOnly:Boolean is public := false",
          "    def version:Number is public = 1.0",
          "}",
          "",
          "method parseArguments {",
          "    def args = sys.argv",
          "    if (args.size > 1) then {",
          "        def indices = args.indices",
          "        var skip := true",
          "        for (indices) do { i ->",
          "            def arg = args.at(i)",
          "            if (arg.at(1)==\"-\") then {",
          "                match (arg)",
          "                    case { \"-i\" ->",
          "                        if (args.size < (i+1)) then {",
          "                            io.error.write \"gracedoc: -i requires an argument.\\n\"",
          "                            sys.exit(1)",
          "                        }",
          "                        skip := true",
          "                        settings.inputdir := args.at(i+1)",
          "                    } case { \"-o\" ->",
          "                        if (args.size < (i+1)) then {",
          "                            io.error.write \"gracedoc: -o requires an argument.\\n\"",
          "                            sys.exit(1)",
          "                        }",
          "                        skip := true",
          "                        settings.outputdir := args.at(i+1)",
          "                    } case { \"-v\" ->",
          "                        if (args.size < (i+1)) then {",
          "                            io.error.write \"gracedoc: -v requires an argument.\\n\"",
          "                            sys.exit(1)",
          "                        }",
          "                        skip := true",
          "                        settings.verbosity := args.at(i+1).asNumber",
          "                    } case { \"--publiconly\" ->",
          "                        settings.publicOnly := true",
          "                    } case { \"--help\" ->",
          "                        print \"Usage: {args.at(1)} -i <path> -o <path> [-v <level>] [--help] [--publiconly]\"",
          "                        print \"  -i <path>      The directory to process (contains .grace files)\"",
          "                        print \"  -o <path>      The directory to contain the generated HTML files\"",
          "                        print \"  [-v <level>]   Optional. Level of detail in output (0 = none, 1 = some, 2 = all); default is 0\"",
          "                        print \"  [--publiconly] Optional. If set, only public methods are documented and public \"",
          "                        print \"                 variables are listed as methods. Default is off.\"",
          "                        print \"  [--help]       Optional. Print this usage information.\"",
          "                    } case { _ ->",
          "                        io.error.write \"gracedoc: Invalid argument {arg}.\\n\"",
          "                    }",
          "            } else {",
          "                if (skip == true) then {",
          "                    skip := false",
          "                } else {",
          "                    io.error.write \"gracedoc: Invalid argument {arg}. Arguments must start with a -.\\n\"",
          "                    sys.exit(1)",
          "                }",
          "            }",
          "        }",
          "        if ((settings.inputdir==\"\") || (settings.outputdir==\"\")) then {",
          "            io.error.write \"gracedoc: Both the -i and -o arguments are required.\\n\"",
          "            sys.exit(1)",
          "        }",
          "    } else {",
          "        io.error.write \"gracedoc: Both the -i and -o arguments are required.\\n\"",
          "        sys.exit(1)",
          "    }",
          "}",
          "",
          "type Section = type {",
          "    html -> String",
          "    isEmpty -> Boolean",
          "    insert -> Done",
          "}",
          "",
          "class section.withTemplate(html')andCursorAt(idx) -> Section {",
          "    var html:String is readable := html'",
          "    var hasContent is readable := false",
          "    var cursor:Number is confidential := idx",
          "    var elts is public := dictionary.empty",
          "    method addElement(n:String)withText(t:String) {",
          "        hasContent := true",
          "        elts.at(n)put(t)",
          "    }",
          "    method insert(t:String) {",
          "        hasContent := true",
          "        def begin = html.substringFrom(1)to(cursor)",
          "        def end = html.substringFrom(cursor+1)to(html.size)",
          "        html := \"{begin}{t}{end}\"",
          "        cursor := cursor + t.size",
          "    }",
          "    method alphabetize {",
          "        var alpha := elts.keys.sorted",
          "        var numElts := 0",
          "        for (alpha) do { k ->",
          "            var rowClass",
          "            if ((numElts % 2) == 0)",
          "                then { rowClass := \"row-even\" }",
          "                else { rowClass := \"row-odd\" }",
          "            elts.at(k)put(elts.at(k).replace(\"class='placeholder'\")",
          "                                        with(\"class='{rowClass}'\"))",
          "            insert(elts.at(k))",
          "            numElts := numElts + 1",
          "        }",
          "    }",
          "}",
          "",
          "method trim(c:String) -> String {",
          "    var start := 1",
          "    var end := c.size",
          "    while { c.at(start) == \" \" } do { start := start + 1 }",
          "    while { c.at(end) == \" \" } do { end := end - 1 }",
          "    return c.substringFrom(start)to(end)",
          "}",
          "",
          "method indent(n:Number) -> String {",
          "    //unrolled for optimization",
          "    if (n==0) then { return \"\" }",
          "    elseif (n==1) then { return \"    \" }",
          "    elseif (n==2) then { return \"        \" }",
          "    elseif (n==3) then { return \"            \" }",
          "    elseif (n==4) then { return \"                \" }",
          "    elseif (n==5) then { return \"                    \" }",
          "    elseif (n==6) then { return \"                        \" }",
          "    elseif (n==7) then { return \"                            \" }",
          "    elseif (n==8) then { return \"                                \" }",
          "    else { return \"                                    \"}",
          "}",
          "",
          "method autoindent(input) {",
          "    def indentedtags = set [\"link\", \"td\", \"meta\", \"style\", \"title\",",
          "        \"table\", \"div\", \"tr\", \"th\", \"iframe\", \"script\", \"section\", \"h1\", \"h2\",",
          "        \"h3\", \"h4\", \"h5\", \"h6\", \"ul\", \"li\", \"html\", \"body\", \"head\", \"hr\" ]",
          "    def samelineclosingtags = set [\"a\", \"span\", \"td\", \"th\", \"li\", \"h1\",",
          "        \"h2\", \"h3\", \"h4\", \"h5\", \"h6\", \"title\", \"script\", \"b\", \"i\", \"em\",",
          "        \"strong\"]",
          "    var stack:Number := 0",
          "    def inputSize = input.length",
          "    var output := \"\"",
          "    var char1",
          "    var char2",
          "    var cidx := 1",
          "    var tagName",
          "    while { cidx <= inputSize } do {",
          "        tagName := \"\"",
          "        char1 := input.at(cidx)",
          "        char2 := input.at(cidx+1)",
          "        if (char1==\"<\") then {",
          "            if (char2!=\"/\") then {",
          "                //OPENING TAG",
          "                var idx := cidx + 1",
          "                while {(input.at(idx)!=\" \") && (input.at(idx)!=\">\")} do {",
          "                    tagName := tagName ++ input.at(idx)",
          "                    idx := idx + 1",
          "                }",
          "                if (indentedtags.contains(tagName)) then {",
          "                    if (tagName != \"html\") then {",
          "                        output := output ++ \"\\n\"",
          "                    }",
          "                    output := output ++ indent(stack)",
          "                    stack := stack + 1",
          "                }",
          "            } else {",
          "                //CLOSING TAG",
          "                var idx := cidx + 2",
          "                while {input.at(idx)!=\">\"} do {",
          "                    tagName := tagName ++ input.at(idx)",
          "                    idx := idx + 1",
          "                }",
          "                if (indentedtags.contains(tagName)) then {",
          "                    stack := stack - 1",
          "                    if (!samelineclosingtags.contains(tagName)) then {",
          "                        output := output ++ \"\\n\" ++ indent(stack)",
          "                    }",
          "                }",
          "            }",
          "        } elseif ((char1==\"/\") && (char2==\">\")) then {",
          "            //ABBREVIATED CLOSING TAG",
          "            stack := stack - 1",
          "        }",
          "        output := output ++ char1",
          "        cidx := cidx + 1",
          "    }",
          "    return output",
          "}",
          "",
          "class directoryBuilderForFile(in) outTo (dir) as (pageType) {",
          "    inherits ast.baseVisitor",
          "",
          "    var isOnClassPage := false",
          "    var isOnTypePage := false",
          "    if (pageType==\"class\") then { isOnClassPage := true }",
          "    elseif (pageType==\"type\") then { isOnTypePage := true }",
          "",
          "    def pageName = if (in.endsWith(\".grace\").not) then { in }",
          "                   else { in.substringFrom(0)to(in.size - 6) }",
          "    def title = if (isOnTypePage) then { \"Type: {pageName}\" }",
          "                elseif (isOnClassPage) then { \"Class: {pageName}\" }",
          "                else { \"Module: {pageName}\" }",
          "",
          "    def outdir = if (isOnClassPage || isOnTypePage) then { dir } else { pageName }",
          "",
          "    method generate is public {",
          "        var outfile",
          "        if (!io.exists(\"{settings.outputdir}\")) then { io.system(\"mkdir {settings.outputdir}\") }",
          "        if (!io.exists(\"{settings.outputdir}/{outdir}\")) then { io.system(\"mkdir {settings.outputdir}/{outdir}\") }",
          "        if (!io.exists(\"{settings.outputdir}/{outdir}/classes\")) then {",
          "            io.system(\"mkdir {settings.outputdir}/{outdir}/classes\")",
          "        }",
          "        if (!io.exists(\"{settings.outputdir}/{outdir}/types\")) then {",
          "            io.system(\"mkdir {settings.outputdir}/{outdir}/types\")",
          "        }",
          "        if (isOnClassPage) then {",
          "            outfile := io.open(\"{settings.outputdir}/{outdir}/classes/{pageName}.html\", \"w\")",
          "        } elseif (isOnTypePage) then {",
          "            outfile := io.open(\"{settings.outputdir}/{outdir}/types/{pageName}.html\", \"w\")",
          "        } else {",
          "            outfile := io.open(\"{settings.outputdir}/{outdir}/{pageName}.html\", \"w\")",
          "        }",
          "        outfile.write(\"TEMPORARY\")",
          "        outfile.close",
          "",
          "        if (!isOnClassPage && !isOnTypePage) then {",
          "            // Rebuild the modules list with contents",
          "            var out := \"<!-- generated by Gracedoc, v{settings.version} -- https://github.com/reid47/gracedoc -->\\n\"",
          "            out := out ++ \"<!DOCTYPE html>\\n<html>\"",
          "            out := out ++ \"<head>\"",
          "            out := out ++ \"<title>Modules | GraceDocs</title>\"",
          "            out := out ++ \"<meta charset=\\\"UTF-8\\\" />\"",
          "            out := out ++ \"<link rel=\\\"stylesheet\\\" href=\\\"gracedoc.css\\\">\"",
          "            out := out ++ \"<script type='text/javascript' src=\\\"gracedoc.js\\\"></script>\"",
          "            out := out ++ \"</head>\"",
          "            out := out ++ \"<body>\"",
          "            out := out ++ \"<div class='list-container'>\"",
          "            out := out ++ \"<h5>Modules</h5><ul>\"",
          "            var modules := io.listdir(settings.outputdir)",
          "            def modit = modules.iterator",
          "            while {modit.hasNext} do {",
          "                var mod := modit.next",
          "                if ((mod.startsWith(\".\")==false) && (!mod.endsWith(\".css\")) && (!mod.endsWith(\".js\")) && (mod != \"index.html\") && (mod != \"modules.html\") && (mod != \"404.html\") && (mod != \"inputs\")) then {",
          "                    out := out ++ \"<li><span class='arrow-button-toggle' id='arrow-button-{mod}' onclick=\\\"toggleContents('{mod}');\\\">&#9654;</span><a href='{mod}/{mod}.html' target='mainFrame'>{mod}</a></li>\"",
          "",
          "                    out := out ++ \"<div class='contents-list' id='contents-{mod}' style='display:none;'>\"",
          "",
          "                    out := out ++ \"<h6>Types</h6><ul>\"",
          "                    var types := io.listdir(\"{settings.outputdir}/{mod}/types\")",
          "                    def typit = types.iterator",
          "                    while {typit.hasNext} do {",
          "                        var typ := typit.next",
          "                        typ := typ.substringFrom(1)to(typ.size - 5)",
          "                        if ((typ.startsWith(\".\")==false) && (typ != \"contents.html\")) then {",
          "                            out := out ++ \"<li><a href='{mod}/types/{typ}.html' target='mainFrame'>{typ}</a></li>\"",
          "                        }",
          "                    }",
          "                    out := out ++ \"</ul>\"",
          "",
          "                    out := out ++ \"<h6>Classes</h6><ul>\"",
          "                    var clss := io.listdir(\"{settings.outputdir}/{mod}/classes\")",
          "                    def clsit = clss.iterator",
          "                    while {clsit.hasNext} do {",
          "                        var cls := clsit.next",
          "                        cls := cls.substringFrom(1)to(cls.size - 5)",
          "                        if ((cls.startsWith(\".\")==false) && (cls != \"contents.html\")) then {",
          "                            out := out ++ \"<li><a href='{mod}/classes/{cls}.html' target='mainFrame'>{cls}</a></li>\"",
          "                        }",
          "                    }",
          "                    out := out ++ \"</ul>\"",
          "",
          "                    out := out ++ \"</div>\"",
          "                }",
          "            }",
          "            out := out ++ \"</ul></div></body>\"",
          "            out := out ++ \"</html>\"",
          "            var moduleslistfile := io.open(\"{settings.outputdir}/modules.html\", \"w\")",
          "            moduleslistfile.write(autoindent(out))",
          "            moduleslistfile.close",
          "        }",
          "    }",
          "",
          "    method visitTypeDec(o) -> Boolean {",
          "        if (isOnTypePage == false) then {",
          "            def typeVis = directoryBuilderForFile (o.name.value) outTo (outdir) as \"type\"",
          "            o.accept(typeVis)",
          "            typeVis.generate",
          "            return false",
          "        }",
          "        return true",
          "    }",
          "",
          "    method visitMethod(m) -> Boolean {",
          "        if (m.isClass.not) then { return false }",
          "        if (isOnClassPage == false) then {",
          "            def o = m.body.last",
          "            if (o.superclass != false) then {",
          "                o.superclass.accept(self)",
          "            }",
          "            def classVis = directoryBuilderForFile (o.name) outTo (outdir) as \"class\"",
          "            o.accept(classVis)",
          "            classVis.generate",
          "            return false",
          "        } ",
          "        return true",
          "    }",
          "}",
          "",
          "",
          "class graceDocVisitor.createFrom(in) outTo (dir) as (pageType) {",
          "    inherits ast.baseVisitor",
          "",
          "    var isOnClassPage := false",
          "    var isOnTypePage := false",
          "    if (pageType==\"class\") then { isOnClassPage := true }",
          "    elseif (pageType==\"type\") then { isOnTypePage := true }",
          "",
          "    def pageName = if (in.endsWith(\".grace\").not) then { in }",
          "                   else { in.substringFrom(0)to(in.size - 6) }",
          "    def title = if (isOnTypePage) then { \"Type: {pageName}\" }",
          "                elseif (isOnClassPage) then { \"Class: {pageName}\" }",
          "                else { \"Module: {pageName}\" }",
          "    var headerSection",
          "    var methodsSection",
          "    var typesSection",
          "    var fieldsSection",
          "    var classesSection",
          "    var footerSection",
          "    var methodtypesSection",
          "    var topDescSection",
          "",
          "    //debugging",
          "    if (settings.verbosity > 1) then { print \"On {title} - graceDocVisitor created... ({sys.elapsedTime})\" }",
          "",
          "    def outdir = if (isOnClassPage || isOnTypePage) then { dir } else { pageName }",
          "    buildTemplate",
          "",
          "    method getTypeLink(v:String) is confidential {",
          "        def filename = \"{v}.html\"",
          "        var out := \"<a href='\"",
          "        //first, check current module's types directory for filename",
          "        if (io.exists(\"{settings.outputdir}/{outdir}/types/{filename}\")) then {",
          "            if (isOnTypePage) then {",
          "                out := out ++ \"{filename}\"",
          "            } elseif (isOnClassPage) then {",
          "                out := out ++ \"../types/{filename}\"",
          "            } else {",
          "                out := out ++ \"types/{filename}\"",
          "            }",
          "        //if not found, check imported module directories",
          "        } elseif (io.exists(\"{settings.outputdir}/imported/types/{filename}\")) then {",
          "            if (isOnTypePage || isOnClassPage) then {",
          "                out := out ++ \"../../imported/types/{filename}\"",
          "            } else {",
          "                out := out ++ \"../imported/types/{filename}\"",
          "            }",
          "        //if not found, check gracelib types",
          "        } elseif (io.exists(\"{settings.outputdir}/gracelib/types/{filename}\")) then {",
          "            if (isOnTypePage || isOnClassPage) then {",
          "                out := out ++ \"../../gracelib/types/{filename}\"",
          "            } else {",
          "                out := out ++ \"../gracelib/types/{filename}\"",
          "            }",
          "        } else {",
          "            var dots := \"\"",
          "            if (isOnClassPage || isOnTypePage) then {",
          "                dots := \"../../\"",
          "            } else {",
          "                dots := \"../\"",
          "            }",
          "            out := out ++ \"{dots}404.html\"",
          "        }",
          "        out := out ++ \"'>{v}</a>\"",
          "        return out",
          "    }",
          "",
          "    method getClassLink(c:String) is confidential {",
          "        def filename = \"{c}.html\"",
          "        var out := \"<a href='\"",
          "        //first, check current module's class directory for filename",
          "        if (io.exists(\"{settings.outputdir}/{outdir}/classes/{filename}\")) then {",
          "            if (isOnClassPage) then {",
          "                out := out ++ \"{filename}\"",
          "            } elseif (isOnTypePage) then {",
          "                out := out ++ \"../classes/{filename}\"",
          "            } else {",
          "                out := out ++ \"classes/{filename}\"",
          "            }",
          "        //if not found, check imported module directories",
          "        } elseif (io.exists(\"{settings.outputdir}/imported/classes/{filename}\")) then {",
          "            if (isOnTypePage || isOnClassPage) then {",
          "                out := out ++ \"../../imported/classes/{filename}\"",
          "            } else {",
          "                out := out ++ \"../imported/classes/{filename}\"",
          "            }",
          "        //if not found, check gracelib classes",
          "        } elseif (io.exists(\"{settings.outputdir}/gracelib/classes/{filename}\")) then {",
          "            if (isOnTypePage || isOnClassPage) then {",
          "                out := out ++ \"../../gracelib/classes/{filename}\"",
          "            } else {",
          "                out := out ++ \"../gracelib/classes/{filename}\"",
          "            }",
          "        } else {",
          "            var dots := \"\"",
          "            if (isOnClassPage || isOnTypePage) then {",
          "                dots := \"../../\"",
          "            } else {",
          "                dots := \"../\"",
          "            }",
          "            out := out ++ \"{dots}404.html\"",
          "        }",
          "        out := out ++ \"'>{c}</a>\"",
          "        return out",
          "    }",
          "",
          "    method buildTemplate is confidential {",
          "        var cursor := 0",
          "        var out := \"<!-- generated by Gracedoc, v{settings.version} -- https://github.com/reid47/gracedoc -->\\n\"",
          "        out := out ++ \"<!DOCTYPE html>\\n<html>\"",
          "        out := out ++ \"<head>\"",
          "        out := out ++ \"<title>{title} | GraceDocs</title>\"",
          "        out := out ++ \"<meta charset=\\\"UTF-8\\\" />\"",
          "        var cssDir",
          "        if (isOnClassPage || isOnTypePage) then { cssDir := \"../../gracedoc.css\" }",
          "        else { cssDir := \"../gracedoc.css\" }",
          "        out := out ++ \"<link rel=\\\"stylesheet\\\" href=\\\"{cssDir}\\\" />\"",
          "        out := out ++ \"</head>\"",
          "        out := out ++ \"<body>\"",
          "        out := out ++ \"<div class='header'><span class='header-left'>{title}\"",
          "        cursor := out.size",
          "        out := out ++ \"</span><span class='header-right'>GraceDocs</span></div>\"",
          "        out := out ++ \"<div class='container'>\"",
          "        headerSection := section.withTemplate(out)andCursorAt(cursor)",
          "",
          "        cursor := 0",
          "        out := \"<section id='top-description'>\"",
          "        out := out ++ \"<div class='top-box'>\"",
          "        cursor := out.size",
          "        out := out ++ \"</div>\"",
          "        out := out ++ \"</section>\"",
          "        topDescSection := section.withTemplate(out)andCursorAt(cursor)",
          "",
          "        cursor := 0",
          "        out := \"<section id='fields'>\"",
          "        out := out ++ \"<h4>Fields</h4>\"",
          "        out := out ++ \"<table>\"",
          "        out := out ++ \"<tr><th></th><th>Field name</th><th>Type (if given)</th></tr>\"",
          "        cursor := out.size",
          "        out := out ++ \"</table>\"",
          "        out := out ++ \"</section>\"",
          "        fieldsSection := section.withTemplate(out)andCursorAt(cursor)",
          "",
          "        cursor := 0",
          "        out := \"<section id='methodtypes'>\"",
          "        out := out ++ \"<h4>Added methods</h4>\"",
          "        out := out ++ \"<table>\"",
          "        out := out ++ \"<tr><th>Method signature</th><th>Return type</th></tr>\"",
          "        cursor := out.size",
          "        out := out ++ \"</table>\"",
          "        out := out ++ \"</section>\"",
          "        methodtypesSection := section.withTemplate(out)andCursorAt(cursor)",
          "",
          "        cursor := 0",
          "        out := \"<section id='types'>\"",
          "        out := out ++ \"<h4>Types</h4>\"",
          "        out := out ++ \"<table>\"",
          "        out := out ++ \"<tr><th>Type name</th></tr>\"",
          "        cursor := out.size",
          "        out := out ++ \"</table>\"",
          "        out := out ++ \"</section>\"",
          "        typesSection := section.withTemplate(out)andCursorAt(cursor)",
          "",
          "        cursor := 0",
          "        out := \"<section id='classes'>\"",
          "        out := out ++ \"<h4>Classes</h4>\"",
          "        out := out ++ \"<table>\"",
          "        out := out ++ \"<tr><th>Class name & constructor</th></tr>\"",
          "        cursor := out.size",
          "        out := out ++ \"</table>\"",
          "        out := out ++ \"</section>\"",
          "        classesSection := section.withTemplate(out)andCursorAt(cursor)",
          "",
          "        cursor := 0",
          "        out := \"<section id='methods'>\"",
          "        out := out ++ \"<h4>Methods</h4>\"",
          "        out := out ++ \"<table>\"",
          "        out := out ++ \"<tr><th>Method signature</th><th>Return type</th></tr>\"",
          "        cursor := out.size",
          "        out := out ++ \"</table>\"",
          "        out := out ++ \"</section>\"",
          "        methodsSection := section.withTemplate(out)andCursorAt(cursor)",
          "",
          "        cursor := 0",
          "        out := \"</div></body>\"",
          "        out := out ++ \"</html>\"",
          "        footerSection := section.withTemplate(out)andCursorAt(cursor)",
          "    }",
          "",
          "    method build404 {",
          "        var out := \"<!-- generated by Gracedoc, v{settings.version} -- https://github.com/reid47/gracedoc -->\\n\"",
          "        out := out ++ \"<!DOCTYPE html>\\n<html>\"",
          "        out := out ++ \"<head><title>404 - Page not found | GraceDocs</title></head>\"",
          "        out := out ++ \"<body><div id='message-404'>404 - Page not found</div></body>\"",
          "        out := out ++ \"</html>\"",
          "        var file404 := io.open(\"{settings.outputdir}/404.html\", \"w\")",
          "        file404.write(autoindent(out))",
          "        file404.close",
          "    }",
          "",
          "    method buildindex {",
          "        var out := \"<!-- generated by Gracedoc, v{settings.version} -- https://github.com/reid47/gracedoc -->\\n\"",
          "        out := out ++ \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\"",
          "        out := out ++ \"<head>\"",
          "        out := out ++ \"<title>GraceDocs</title>\"",
          "        out := out ++ \"<link rel=\\\"stylesheet\\\" href=\\\"graceDoc.css\\\">\"",
          "        out := out ++ \"</head>\"",
          "        out := out ++ \"<body>\"",
          "        out := out ++ \"<iframe id=\\\"frame-sidebar\\\" src=\\\"modules.html\\\" name=\\\"moduleFrame\\\"></iframe>\"",
          "        out := out ++ \"<iframe id=\\\"frame-main\\\" src=\\\"\\\" name=\\\"mainFrame\\\"></iframe>\"",
          "        out := out ++ \"</body>\"",
          "        out := out ++ \"</html>\"",
          "        var fileindex := io.open(\"{settings.outputdir}/index.html\", \"w\")",
          "        fileindex.write(autoindent(out))",
          "        fileindex.close",
          "    }",
          "",
          "    method buildjs {",
          "        var out := ‹function toggleContents(eltid) {",
          "    var elt = document.getElementById('contents-'+eltid)",
          "    var arrow = document.getElementById('arrow-button-'+eltid)",
          "    if (elt.style.display == 'none') {",
          "        elt.style.display = 'block';",
          "        arrow.innerHTML = '&#9660';",
          "    } else {",
          "        elt.style.display = 'none';",
          "        arrow.innerHTML = '&#9654';",
          "    }",
          "}›",
          "        var filejs := io.open(\"{settings.outputdir}/gracedoc.js\", \"w\")",
          "        filejs.write(out)",
          "        filejs.close",
          "    }",
          "",
          "    method buildcss {",
          "        var out := ‹@import url(http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,700);",
          "",
          "* {",
          "    margin: 0px;",
          "    padding: 0px;",
          "}",
          "",
          "body {",
          "    font-size: 16px;",
          "    font-family: 'Open Sans', Helvetica, Arial, sans-serif;",
          "}",
          "",
          "a, a:visited {",
          "    color: #00d;",
          "}",
          "",
          ".header {",
          "    height: 50px;",
          "    line-height: 50px;",
          "    padding: 0px 20px;",
          "    font-weight: bold;",
          "    background-color: rgb(0,80,105);",
          "    border-bottom: 2px solid #333;",
          "    font-size: 20px;",
          "    color: #fff;",
          "}",
          "",
          ".header-left {",
          "    float: left;",
          "}",
          "",
          ".header-right {",
          "    float: right;",
          "}",
          "",
          ".description {",
          "    font-style: italic;",
          "    font-size: 14px;",
          "}",
          "",
          ".container {",
          "    padding: 20px;",
          "}",
          "",
          "section {",
          "    border: 1px solid #079;",
          "    border-radius: 0px;",
          "}",
          "",
          "section > h4 {",
          "    margin: 0px;",
          "    background-color: rgb(80,160,185);",
          "    padding: 5px 10px;",
          "}",
          "",
          "section + section {",
          "    margin-top: 20px;",
          "}",
          "",
          "table {",
          "    margin: 0px;",
          "    width: 100%;",
          "    border-collapse: collapse;",
          "    table-layout: fixed;",
          "}",
          "",
          "th {",
          "    text-align: left;",
          "    background: rgb(130,200,215);",
          "    color: rgb(0,80,105);",
          "    font-size: 10px;",
          "    padding: 5px 10px;",
          "    border-bottom: 1px solid #079;",
          "}",
          "",
          "td {",
          "    padding: 10px;",
          "    word-wrap: break-word;",
          "}",
          "",
          ".row-odd { background-color: #eeeeee; }",
          ".row-odd + tr.description {",
          "    background-color: #eeeeee;",
          "}",
          "",
          ".row-even { background-color: #ffffff; }",
          ".row-even + tr.description {",
          "    background-color: #ffffff;",
          "}",
          "",
          "tr.description > td {",
          "    padding-top: 0px;",
          "}",
          ".code, code {",
          "    font-family: Monaco, monospace;",
          "}",
          ".description {",
          "    font-size: 14px;",
          "    width: 50%;",
          "}",
          ".parameter-type {",
          "    font-family: Monaco, monospace;",
          "}",
          ".type-name {",
          "    font-family: Monaco, monospace;",
          "    font-weight: bold;",
          "}",
          ".method-name {",
          "    font-weight: bold;",
          "}",
          ".class-name {",
          "    font-weight: bold;",
          "}",
          ".identifier-name {",
          "    font-family: Monaco, monospace;",
          "    font-weight: bold;",
          "}",
          "",
          "/* MODULES LIST */",
          "",
          ".list-container h5 {",
          "    font-size: 16px;",
          "    background-color: rgb(0,80,105);",
          "    color: #ffffff;",
          "    padding: 5px 10px;",
          "}",
          "",
          ".list-container h6 {",
          "    font-size: 12px;",
          "    margin: 0px;",
          "    color: #000;",
          "    padding: 0px 5px;",
          "}",
          "",
          ".list-container ul {",
          "    padding: 5px 10px 10px 10px;",
          "}",
          ".list-container li {",
          "    list-style-type: none;",
          "}",
          "",
          "iframe {",
          "    border: none;",
          "}",
          "",
          "#frame-sidebar {",
          "    position: absolute;",
          "    left: 0;",
          "    top: 0;",
          "    width: 20%;",
          "    height: 100%;",
          "}",
          "",
          "#frame-main {",
          "    position: absolute;",
          "    right: 0;",
          "    top: 0;",
          "    width: 80%;",
          "    height: 100%;",
          "    border-left: 4px solid #bbb",
          "}",
          "",
          ".contents-list {",
          "    background: #e0e8f0;",
          "    padding: 10px 5px 5px 5px;",
          "    margin-left: 20px;",
          "    margin-right: 20px;",
          "    font-size: 14px;",
          "}",
          "",
          ".arrow-button-toggle {",
          "    font-family: monospace;",
          "    font-size: 14px;",
          "    color: rgb(0,0,105);",
          "    cursor: pointer;",
          "    width: 20px;",
          "    display: inline-block;",
          "}",
          "",
          ".top-box {",
          "    word-wrap: break-word;",
          "    margin: 20px;",
          "}",
          "",
          ".top-box hr {",
          "    margin: 10px 0;",
          "    border: 1px solid #079;",
          "}",
          "",
          ".headline {",
          "    font-size: 18px;",
          "}",
          "",
          ".quiet {",
          "    color: #888;",
          "    font-size: 14px;",
          "}›",
          "        var filecss := io.open(\"{settings.outputdir}/gracedoc.css\", \"w\")",
          "        filecss.write(out)",
          "        filecss.close",
          "    }",
          "",
          "    method generate is public {",
          "        if (settings.verbosity > 1) then { print \"On {title} - starting to assemble HTML ({sys.elapsedTime})\" }",
          "",
          "        var outfile",
          "        var output := \"\"",
          "        if (isOnClassPage) then {",
          "            outfile := io.open(\"{settings.outputdir}/{outdir}/classes/{pageName}.html\", \"w\")",
          "        } elseif (isOnTypePage) then {",
          "            outfile := io.open(\"{settings.outputdir}/{outdir}/types/{pageName}.html\", \"w\")",
          "        } else {",
          "            outfile := io.open(\"{settings.outputdir}/{outdir}/{pageName}.html\", \"w\")",
          "        }",
          "        output := output ++ headerSection.html",
          "        if (topDescSection.hasContent) then {",
          "            output := output ++ topDescSection.html",
          "        }",
          "        if (fieldsSection.hasContent) then {",
          "            fieldsSection.alphabetize",
          "            output := output ++ fieldsSection.html",
          "        }",
          "        if (methodtypesSection.hasContent) then {",
          "            methodtypesSection.alphabetize",
          "            output := output ++ methodtypesSection.html",
          "        }",
          "        if (typesSection.hasContent) then {",
          "            typesSection.alphabetize",
          "            output := output ++ typesSection.html",
          "        }",
          "        if (classesSection.hasContent) then {",
          "            classesSection.alphabetize",
          "            output := output ++ classesSection.html",
          "        }",
          "        if (methodsSection.hasContent) then {",
          "            methodsSection.alphabetize",
          "            output := output ++ methodsSection.html",
          "        }",
          "        output := output ++ footerSection.html",
          "        output := autoindent(output)",
          "        outfile.write(output)",
          "        outfile.close",
          "        if (settings.verbosity > 1) then { print \"On {title} - file written ({sys.elapsedTime})\" }",
          "    }",
          "",
          "    method visitMethodType(o) -> Boolean {",
          "        if (isOnTypePage) then {",
          "            var t := \"<tr class='placeholder'><td><code>\"",
          "            var n := \"\"",
          "            for (o.signature) do { part ->",
          "                t := t ++ \"<span class='method-name'>\" ++ part.name ++ \"</span>\"",
          "                n := n ++ part.name",
          "                if (part != o.signature.last) then { n := n ++ \"()\" }",
          "                if (part.params.size > 0) then {",
          "                    t := t ++ \"(\"",
          "                    for (part.params) do { param ->",
          "                        if (param.dtype != false) then {",
          "                            t := t ++ \"<span class='parameter-name'>\" ++ param.nameString ++ \"</span>\"",
          "                            t := t ++ \":\"",
          "                            if (param.dtype.kind == \"identifier\") then {",
          "                                t := t ++ getTypeLink(param.dtype.value)",
          "                            } elseif (param.dtype.kind == \"generic\") then {",
          "                                t := t ++ getTypeLink(param.dtype.value.value) ++ \"&lt;\"",
          "                                param.dtype.args.do { each -> t := \"{t}{getTypeLink(each.value)}\" } separatedBy { t := t ++ \", \" }",
          "                                t := t ++ \"&gt;\"",
          "                            }",
          "                        } else {",
          "                            t := t ++ \"<span class='parameter-name'>\" ++ param.nameString ++ \"</span>\"",
          "                        }",
          "                        if ((part.params.size > 1) && (param != part.params.last)) then {",
          "                            t := t ++ \", \"",
          "                        }",
          "                    }",
          "                    t := t ++ \")\"",
          "                }",
          "            }",
          "            t := t ++ \"</code></td>\"",
          "            t := t ++ \"<td><code>\"",
          "            if (o.rtype != false) then {",
          "                if (o.rtype.kind == \"identifier\") then {",
          "                    t := t ++ getTypeLink(o.rtype.value)",
          "                } elseif (o.rtype.kind == \"generic\") then {",
          "                    t := t ++ getTypeLink(o.rtype.value.value) ++ \"&lt;\"",
          "                    o.rtype.args.do { each -> t := \"{t}{getTypeLink(each.value)}\" } separatedBy { t := t ++ \", \" }",
          "                    t := t ++ \"&gt;\"",
          "                }",
          "            } else {",
          "                t := t ++ \"Done\"",
          "            }",
          "            t := t ++ \"</code></td></tr>\"",
          "            t := t ++ (formatComments(o) rowClass \"description\" colspan 2)",
          "            methodtypesSection.addElement(n)withText(t)",
          "            return false",
          "        } else {",
          "            return true",
          "        }",
          "    }",
          "",
          "    method visitTypeDec(o) -> Boolean {",
          "        if (isOnTypePage == false) then {",
          "            var t := \"<tr class='placeholder'>\"",
          "            def n = o.name.value",
          "            t := t ++ \"<td class='type-name'>{getTypeLink(o.name.value)}\"",
          "            if (false != o.typeParams) then {",
          "                t := t ++ \"&lt;\"",
          "                for (o.typeParams.params) do { g ->",
          "                    t := t ++ g.nameString",
          "                    if (g != o.typeParams.params.last) then { t := t ++ \", \" }",
          "                }",
          "                t := t ++ \"&gt;\"",
          "            }",
          "            t := t ++ \"</td></tr>\"",
          "",
          "            def typeVis = graceDocVisitor.createFrom(\"{o.name.value}\")outTo(\"{outdir}\")as(\"type\")",
          "            o.accept(typeVis)",
          "            typeVis.generate",
          "            t := t ++ formatComments(o) rowClass \"description\" colspan 1",
          "            typesSection.addElement(n)withText(t)",
          "            return false",
          "        } else {",
          "            var t := \"<span class='headline'><b><code>{o.name.value}\"",
          "            if (false != o.typeParams) then {",
          "                t := t ++ \"&lt;\"",
          "                for (o.typeParams.params) do { g->",
          "                    t := t ++ g.nameString",
          "                    if (g != o.typeParams.params.last) then { t := t ++ \", \" }",
          "                }",
          "                t := t ++ \"&gt;\"",
          "            }",
          "            t := t ++ \"</b> = \"",
          "            var temp := \"\"",
          "            var ops := list.empty",
          "            var tps := list.empty",
          "            var node := o.value",
          "",
          "            if (node.kind == \"op\") then {",
          "                while {node.kind == \"op\"} do {",
          "                    ops.push(node.value)",
          "                    if ((node.left.kind == \"identifier\") && (node.right.kind == \"identifier\")) then {",
          "                        temp := \"{getTypeLink(node.left.value)} {ops.pop} {getTypeLink(node.right.value)}\"",
          "                    } elseif (node.right.kind == \"identifier\") then {",
          "                        tps.push(node.right.value)",
          "                    } elseif (node.left.kind == \"identifier\") then {",
          "                        temp := \"{getTypeLink(node.left.value)} {ops.pop}\"",
          "                    } elseif (node.left.kind == \"member\") then {",
          "                        temp := getTypeLink(\"{node.left.in.value}.{node.left.value}\") ++ \" {ops.pop}\"",
          "                    } elseif (node.right.kind == \"member\") then {",
          "                        tps.push(\"{node.left.in.value}.{node.left.value}\")",
          "                    }",
          "                    node := node.left",
          "                }",
          "                while {(tps.size > 0) && (ops.size > 0)} do {",
          "                    def p = tps.pop",
          "                    temp := \"{temp} {ops.pop} {getTypeLink(p.value)}\"",
          "                }",
          "                if (ops.size > 0) then {",
          "                    temp := \"{temp} {ops.pop}\"",
          "                }",
          "                t := t ++ temp ++ \" type \"",
          "                t := t ++ \"\\{ <span class='quiet'>...added methods below...</span> \\}\"",
          "            } elseif (node.kind == \"typeliteral\") then {",
          "                t := t ++ temp ++ \" type \"",
          "                t := t ++ \"\\{ <span class='quiet'>...added methods below...</span> \\}\"",
          "            } elseif (node.kind == \"identifier\") then {",
          "                t := t ++ \" \" ++ getTypeLink(node.value)",
          "                if (node.generics != false) then {",
          "                    t := t ++ \"&lt;\"",
          "                    for (node.generics) do { g->",
          "                        t := t ++ g.value",
          "                        if (g != node.generics.last) then { t := t ++ \", \" }",
          "                    }",
          "                    t := t ++ \"&gt;\"",
          "                }",
          "            } elseif (node.kind == \"member\") then {",
          "                t := t ++ getTypeLink(\"{node.in.value}.{node.value}\")",
          "                if (node.generics != false) then {",
          "                    t := t ++ \"&lt;\"",
          "                    for (node.generics) do { g->",
          "                        t := t ++ g.value",
          "                        if (g != node.generics.last) then { t := t ++ \", \" }",
          "                    }",
          "                    t := t ++ \"&gt;\"",
          "                }",
          "            }",
          "            t := t ++ \"</code></span>\"",
          "            t := t ++ \"<hr />\"",
          "            t := t ++ formatComments(o) rowClass \"top-box-description\" colspan 1",
          "            topDescSection.insert(t)",
          "            return true",
          "        }",
          "    }",
          "",
          "    method visitMethod(o) -> Boolean {",
          "",
          "        if (settings.publicOnly && o.isConfidential) then { return false }",
          "        if (o.isClass) then {",
          "            return doClassMethod(o)",
          "        }",
          "        var t := \"<tr class='placeholder'><td><code>\"",
          "        var n := \"\"",
          "        for (o.signature) do { part ->",
          "            t := t ++ \"<span class='method-name'>\" ++ part.name ++ \"</span>\"",
          "            n := n ++ part.name",
          "            if (part != o.signature.last) then { n := n ++ \"()\" }",
          "            if (part.params.size > 0) then {",
          "                t := t ++ \"(\"",
          "                for (part.params) do { param ->",
          "                    if (param.dtype != false) then {",
          "                        t := t ++ \"<span class='parameter-name'>\" ++ param.nameString ++ \"</span>\"",
          "",
          "                        t := t ++ \":<span class='parameter-type'>\"",
          "                        if (param.dtype.kind == \"identifier\") then {",
          "                            t := t ++ getTypeLink(param.dtype.value)",
          "                        } elseif (param.dtype.kind == \"generic\") then {",
          "                            t := t ++ getTypeLink(param.dtype.value.value) ++ \"&lt;\"",
          "                            param.dtype.args.do { each -> t := \"{t}{getTypeLink(each.value)}\" } separatedBy { t := t ++ \", \" }",
          "                            t := t ++ \"&gt;\"",
          "                        }",
          "                        t := t ++ \"</span>\"",
          "                        //t := t ++ \":<span class='parameter-type'>\" ++ getTypeLink(param.dtype.value) ++ \"</span>\"",
          "                    } else {",
          "                        t := t ++ \"<span class='parameter-name'>\" ++ param.nameString ++ \"</span>\"",
          "                    }",
          "                    if ((part.params.size > 1) && (param != part.params.last)) then {",
          "                        t := t ++ \", \"",
          "                    }",
          "                }",
          "                t := t ++ \")\"",
          "            }",
          "        }",
          "        t := t ++ \"</code></td>\"",
          "        t := t ++ \"<td><code>\"",
          "        if (o.dtype != false) then {",
          "            t := t ++ getTypeLink(o.dtype.value)",
          "        } else {",
          "            t := t ++ getTypeLink(\"Done\")",
          "        }",
          "        t := t ++ \"</code></td></tr>\"",
          "        t := t ++ formatComments(o) rowClass \"description\" colspan 2",
          "        methodsSection.addElement(n)withText(t)",
          "        return false",
          "    }",
          "",
          "    method doClassMethod(m) -> Boolean {",
          "        def o = m.body.last",
          "",
          "        if (isOnClassPage == false) then {",
          "            var t := \"<tr class='placeholder'>\"",
          "            def n = m.nameString",
          "            t := t ++ \"<td><code><span class='class-name'>{getClassLink(n)}</span>\"",
          "            t := t ++ \".\"",
          "            m.signature.do { part ->",
          "                t := t ++ \"<span class='method-name'>{part.name}</span>\"",
          "                if (part.params.size > 0) then {",
          "                    t := t ++ \"(\"",
          "                    for(part.params) do { param ->",
          "                        if (param.dtype != false) then {",
          "                            t := t ++ \"<span class='parameter-name'>\" ++ param.value ++ \"</span>\"",
          "                            t := t ++ \":<span class='parameter-type'>\" ++ getTypeLink(param.dtype.value) ++ \"</span>\"",
          "                        } else {",
          "                            t := t ++ \"<span class='parameter-name'>\" ++ param.value ++ \"</span>\"",
          "                        }",
          "                        if ((part.params.size > 1) && (param != part.params.last)) then {",
          "                            t := t ++ \", \"",
          "                        }",
          "                    }",
          "                    t := t ++ \")\"",
          "                }",
          "            }",
          "",
          "            if (m.dtype != false) then {",
          "                t := t ++ \" -> \"",
          "                if (m.dtype.kind == \"identifier\") then {",
          "                    t := t ++ getTypeLink(o.dtype.value)",
          "                } elseif (m.dtype.kind == \"generic\") then {",
          "                    t := t ++ getTypeLink(o.dtype.value.value) ++ \"&lt;\"",
          "                    m.dtype.args.do { each -> t := \"{t}{getTypeLink(each.value)}\" } separatedBy { t := t ++ \", \" }",
          "                    t := t ++ \"&gt;\"",
          "                }",
          "            }",
          "            t := t ++ \"</code></td></tr>\"",
          "",
          "            if(o.superclass != false) then {",
          "                o.superclass.accept(self)",
          "            }",
          "",
          "            def classVis = graceDocVisitor.createFrom(n) outTo (outdir) as \"class\"",
          "            o.accept(classVis)",
          "            classVis.generate",
          "            t := t ++ formatComments(o) rowClass \"top-box-description\" colspan 1",
          "            classesSection.addElement(n) withText(t)",
          "            return false",
          "          } else {",
          "            var t := \"<span class='headline'><code><b>{o.name.value}</b>.\"",
          "",
          "            for(m.signature) do { part ->",
          "                t := t ++ \"<b>{part.name}</b>\"",
          "                if (part.params.size > 0) then {",
          "                    t := t ++ \"(\"",
          "                    for(part.params) do { param ->",
          "                        if (param.dtype != false) then {",
          "                            t := t ++ param.value",
          "                            t := t ++ \":\" ++ getTypeLink(param.dtype.value)",
          "                        } else {",
          "                            t := t ++ param.value",
          "                        }",
          "                        if ((part.params.size > 1) && (param != part.params.at(part.params.size))) then {",
          "                            t := t ++ \", \"",
          "                        }",
          "                    }",
          "                    t := t ++ \")\"",
          "                }",
          "            }",
          "",
          "            if (m.dtype != false) then {",
          "                t := t ++ \" -> \"",
          "                if (m.dtype.kind == \"identifier\") then {",
          "                    t := t ++ getTypeLink(o.dtype.value)",
          "                } elseif (m.dtype.kind == \"generic\") then {",
          "                    t := t ++ getTypeLink(o.dtype.value.value) ++ \"&lt;\"",
          "                    m.dtype.args.do { each -> t := \"{t}{getTypeLink(each.value)}\" } separatedBy { t := t ++ \", \" }",
          "                    t := t ++ \"&gt;\"",
          "                }",
          "            }",
          "",
          "            t := t ++ \"</code></span><hr />\"",
          "            t := t ++ formatComments(o) rowClass \"top-box-description\" colspan 1",
          "            topDescSection.insert(t)",
          "            return true",
          "        }",
          "    }",
          "",
          "    method visitDefDec(o) -> Boolean {",
          "        if (isOnClassPage == true) then {",
          "            if (!settings.publicOnly) then {",
          "                def n = o.name.value",
          "                var t := \"<tr class='placeholder'><td><code>def</code></td><td class='identifier-name'>{o.name.value}\"",
          "                t := t ++ \"</td><td><code>\"",
          "                if (o.dtype != false) then {",
          "                    if (o.dtype.kind == \"identifier\") then {",
          "                        t := t ++ getTypeLink(o.dtype.value)",
          "                    } elseif (o.dtype.kind == \"generic\") then {",
          "                        t := t ++ getTypeLink(o.dtype.value.value) ++ \"&lt;\"",
          "                        o.dtype.args.do { each -> t := \"{t}{getTypeLink(each.value)}\" } separatedBy { t := t ++ \", \" }",
          "                        t := t ++ \"&gt;\"",
          "                    }",
          "                }",
          "                t := t ++ \"</code></td></tr>\"",
          "                t := t ++ formatComments(o) rowClass \"description\" colspan 3",
          "                fieldsSection.addElement(n) withText(t)",
          "",
          "            } else {",
          "                //in publicOnly mode, readable defs should show up as getter methods",
          "                if (o.isReadable) then {",
          "                    //FIXME: if isOnTypePage, then ???",
          "                    def n = o.name.value",
          "                    var t := \"<tr class='placeholder'><td class='identifier-name'>{o.name.value}\"",
          "                    t := t ++ \"</td><td><code>\"",
          "                    if (o.dtype != false) then {",
          "                        if (o.dtype.kind == \"identifier\") then {",
          "                            t := t ++ getTypeLink(o.dtype.value)",
          "                        } elseif (o.dtype.kind == \"generic\") then {",
          "                            t := t ++ getTypeLink(o.dtype.value.value) ++ \"&lt;\"",
          "                            o.dtype.args.do { each -> t := \"{t}{getTypeLink(each.value)}\" } separatedBy { t := t ++ \", \" }",
          "                            t := t ++ \"&gt;\"",
          "                        }",
          "                    }",
          "                    t := t ++ \"</code></td></tr>\"",
          "                    t := t ++ formatComments(o) rowClass \"description\" colspan 2",
          "                    methodsSection.addElement(n)withText(t)",
          "                }",
          "            }",
          "            return false",
          "        } else {",
          "            if (!settings.publicOnly) then {",
          "                def n = o.name.value",
          "                var t := \"<tr class='placeholder'><td><code>def</code></td><td class='identifier-name'>{o.name.value}\"",
          "                t := t ++ \"</td><td><code>\"",
          "                if (o.dtype != false) then {",
          "                    if (o.dtype.kind == \"identifier\") then {",
          "                        t := t ++ getTypeLink(o.dtype.value)",
          "                    } elseif (o.dtype.kind == \"generic\") then {",
          "                        t := t ++ getTypeLink(o.dtype.value.value) ++ \"&lt;\"",
          "                        o.dtype.args.do { each -> t := \"{t}{each.value}\" } separatedBy { t := t ++ \", \" }",
          "                        t := t ++ \"&gt;\"",
          "                    }",
          "                }",
          "                t := t ++ \"</code></td></tr>\"",
          "                t := t ++ formatComments(o) rowClass \"description\" colspan 3",
          "                fieldsSection.addElement(n)withText(t)",
          "",
          "            } else {",
          "                //in publicOnly mode, readable defs should show up as getter methods",
          "                if (o.isReadable) then {",
          "                    var t := \"<tr class='placeholder'><td class='identifier-name'>{o.name.value}\"",
          "                    def n = o.name.value",
          "                    t := t ++ \"</td><td><code>\"",
          "                    if (o.dtype != false) then {",
          "                        if (o.dtype.kind == \"identifier\") then {",
          "                            t := t ++ getTypeLink(o.dtype.value)",
          "                        } elseif (o.dtype.kind == \"generic\") then {",
          "                            t := t ++ getTypeLink(o.dtype.value.value) ++ \"&lt;\"",
          "                            o.dtype.args.do { each -> t := \"{t}{getTypeLink(each.value)}\" } separatedBy { t := t ++ \", \" }",
          "                            t := t ++ \"&gt;\"",
          "                        }",
          "                    }",
          "                    t := t ++ \"</code></td></tr>\"",
          "                    t := t ++ formatComments(o) rowClass \"description\" colspan 2",
          "                    methodsSection.addElement(n)withText(t)",
          "                }",
          "            }",
          "            return false",
          "        }",
          "    }",
          "",
          "    method visitVarDec(o) -> Boolean {",
          "        if (isOnClassPage == true) then {",
          "            if (!settings.publicOnly) then {",
          "                def n = o.name.value",
          "                var t := \"<tr class='placeholder'><td><code>var</code></td><td class='identifier-name'>{o.name.value}\"",
          "                t := t ++ \"</td><td><code>\"",
          "                if (o.dtype != false) then {",
          "                    t := t ++ \"{getTypeLink(o.dtype.value)}\"",
          "                }",
          "                t := t ++ \"</code></td></tr>\"",
          "                t := t ++ formatComments(o) rowClass \"description\" colspan 3",
          "                fieldsSection.addElement(n)withText(t)",
          "            } else {",
          "                if (o.isReadable) then {",
          "                    var t := \"<tr class='placeholder'><td class='identifier-name'>{o.name.value}\"",
          "                    def n = o.name.value",
          "                    t := t ++ \"</td><td>\"",
          "                    if (o.dtype != false) then {",
          "                        t := t ++ \"{getTypeLink(o.dtype.value)}\"",
          "                    }",
          "                    t := t ++ \"</code></td></tr>\"",
          "                    t := t ++ formatComments(o) rowClass \"description\" colspan 2",
          "                    methodsSection.addElement(n)withText(t)",
          "                }",
          "                if (o.isWritable) then {",
          "                    var t := \"<tr class='placeholder'><td><code><span class='method-name'>{o.name.value}:=</span>\"",
          "                    def n = \"{o.name.value}:=\"",
          "                    if (o.dtype != false) then {",
          "                        t := t ++ \"(_:{getTypeLink(o.dtype.value)})\"",
          "                    }",
          "                    t := t ++ \"</code></td><td><code>Done</code></td></tr>\"",
          "                    t := t ++ \"<tr class='description'><td colspan='2'>Updates {o.name.value}</td></tr>\"",
          "                    methodsSection.addElement(n)withText(t)",
          "                }",
          "            }",
          "            return false",
          "        } else {",
          "            if (!settings.publicOnly) then {",
          "                def n = o.name.value",
          "                var t := \"<tr class='placeholder'><td><code>var</code></td><td class='identifier-name'>{o.name.value}\"",
          "                t := t ++ \"</td><td><code>\"",
          "                if (o.dtype != false) then {",
          "                    t := t ++ \"{getTypeLink(o.dtype.value)}\"",
          "                }",
          "                t := t ++ \"</code></td></tr>\"",
          "                t := t ++ formatComments(o) rowClass \"description\" colspan 3",
          "                fieldsSection.addElement(n)withText(t)",
          "            } else {",
          "                if (o.isReadable) then {",
          "                    def n = o.name.value",
          "                    var t := \"<tr class='placeholder'><td class='identifier-name'>{o.name.value}\"",
          "                    t := t ++ \"</td><td><code>\"",
          "                    if (o.dtype != false) then {",
          "                        t := t ++ \"{getTypeLink(o.dtype.value)}\"",
          "                    }",
          "                    t := t ++ \"</code></td></tr>\"",
          "                    t := t ++ formatComments(o) rowClass \"description\" colspan 2",
          "                    methodsSection.addElement(n)withText(t)",
          "                }",
          "                if (o.isWritable) then {",
          "                    def n = \"{o.name.value}:=\"",
          "                    var t := \"<tr class='placeholder'><td><code><span class='method-name'>{o.name.value}:=</span>\"",
          "                    if (o.dtype != false) then {",
          "                        t := t ++ \"(_:{getTypeLink(o.dtype.value)})\"",
          "                    }",
          "                    t := t ++ \"</code></td><td><code>Done</code></td></tr>\"",
          "                    t := t ++ \"<tr class='description'><td colspan='2'>Updates {o.name.value}</td></tr>\"",
          "                    methodsSection.addElement(n)withText(t)",
          "                }",
          "            }",
          "            return false",
          "        }",
          "    }",
          "",
          "    method visitInherits(o) -> Boolean {",
          "        //if (isOnClassPage) then {",
          "",
          "        //} else {",
          "            return true",
          "        //}",
          "    }",
          "",
          "}",
          "",
          "method formatComments(astNode) rowClass (rowClassName) colspan (n) -> String {",
          "    var t := \"\"",
          "    if (false != astNode.comments) then {",
          "        t := t ++ \"<tr class='{rowClassName}'><td colspan='{n}'>\"",
          "        t := t ++ astNode.comments.value ++ \"\\n\"",
          "        t := t ++ \"</td></tr>\"",
          "    }",
          "    t",
          "}",
          "",
          "parseArguments",
          "",
          "var file",
          "var dbv",
          "var gdv",
          "var modulename",
          "var counter",
          "",
          "var allModules := io.listdir(settings.inputdir)",
          "var parsedFiles := dictionary.empty",
          "var inputWasFound := false",
          "",
          "//LEX AND PARSE ALL INPUT FILES",
          "counter := 1",
          "for (allModules) do { filename ->",
          "    if (filename.endsWith(\".grace\")) then {",
          "        file := io.open(\"{settings.inputdir}/{filename}\", \"r\")",
          "        if (settings.verbosity > 0) then { print \"On {filename} - lexing... ({sys.elapsedTime})\" }",
          "        var tokens := lexer.new.lexfile(file)",
          "        if (settings.verbosity > 0) then { print \"On {filename} - done lexing... ({sys.elapsedTime})\" }",
          "        if (settings.verbosity > 0) then { print \"On {filename} - parsing... ({sys.elapsedTime})\" }",
          "        //var values := parser.parse(tokens)",
          "        parsedFiles.at(counter)put(parser.parse(tokens))",
          "        ",
          "        if (settings.verbosity > 0) then { print \"On {filename} - done parsing... ({sys.elapsedTime})\" }",
          "        counter := counter + 1",
          "        inputWasFound := true",
          "        file.close",
          "    }",
          "}",
          "",
          "if (!inputWasFound) then {",
          "    io.error.write \"gracedoc: Input error - no Grace files found in the input directory.\"",
          "    io.error.write \"          Either the directory doesn't exist, or it doesn't contain any files.\"",
          "    io.error.write \"          Directories should be named relative to the ./minigrace executable.\"",
          "    sys.exit(1)",
          "}",
          "",
          "//BUILD DIRECTORY STRUCTURE",
          "counter := 1",
          "for (allModules) do { filename ->",
          "    if (filename.endsWith(\".grace\")) then {",
          "        if (settings.verbosity > 0) then { print \"On {filename} - building directories... ({sys.elapsedTime})\" }",
          "        modulename := filename.substringFrom(1)to(filename.size - 6)",
          "        def moduleObject = parsedFiles.at(counter)",
          "        dbv := directoryBuilderForFile(filename) outTo (modulename) as \"module\"",
          "        moduleObject.accept(dbv)",
          "        dbv.generate",
          "        if (settings.verbosity > 0) then { print \"On {filename} - directories built... ({sys.elapsedTime})\" }",
          "        counter := counter + 1",
          "    }",
          "}",
          "",
          "//GENERATE ACTUAL HTML PAGES",
          "counter := 1",
          "for (allModules) do { filename ->",
          "    if (filename.endsWith(\".grace\")) then {",
          "        if (settings.verbosity > 0) then { print \"On {filename} - generating GraceDocs... ({sys.elapsedTime})\" }",
          "        modulename := filename.substringFrom(1)to(filename.size - 6)",
          "        def moduleObject = parsedFiles.at (counter)",
          "        gdv := graceDocVisitor.createFrom(filename) outTo (modulename) as \"module\"",
          "        moduleObject.accept(gdv)",
          "        gdv.generate",
          "        gdv.buildindex",
          "        gdv.buildcss",
          "        gdv.buildjs",
          "        gdv.build404",
          "        if (settings.verbosity > 0) then { print \"On {filename} - done! ({sys.elapsedTime})\" }",
          "        counter := counter + 1",
          "    }",
          "}" ];
      }
      if (typeof global !== "undefined")
        global.gracecode_gracedoc = gracecode_gracedoc;
      if (typeof window !== "undefined")
        window.gracecode_gracedoc = gracecode_gracedoc;
