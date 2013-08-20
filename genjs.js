function gracecode_genjs() {
  lineNumber = 33
var func0 = function(argcv) {    // method out(1)
  var curarg = 1;
  var var_s = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func0.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method out(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 34
  var call1 = callmethod(var_output,"push", [1], var_s);
  return call1
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func0.paramCounts = [1];
  func0.variableArities = [false];
  this.methods["out"] = func0;
  lineNumber = 36
var func2 = function(argcv) {    // method outprint(1)
  var curarg = 1;
  var var_s = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func2.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method outprint(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 37
  var call3 = callmethod(var_util,"outprint", [1], var_s);
  return call3
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func2.paramCounts = [1];
  func2.variableArities = [false];
  this.methods["outprint"] = func2;
  lineNumber = 39
var func4 = function(argcv) {    // method log_verbose(1)
  var curarg = 1;
  var var_s = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func4.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method log_verbose(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 40
  var call5 = callmethod(var_util,"log_verbose", [1], var_s);
  return call5
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4.paramCounts = [1];
  func4.variableArities = [false];
  this.methods["log_verbose"] = func4;
  lineNumber = 42
var func6 = function(argcv) {    // method escapeident(1)
  var curarg = 1;
  var var_vn = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func6.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method escapeident(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 43
  var string7 = new GraceString("");
  var var_nm = string7;
  lineNumber = 43;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_nm)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'nm' to be of type Dynamic"))
  lineNumber = 44
  var block8 = Grace_allocObject();
  block8.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block8.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block8.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block8.methods["match"] = GraceBlock_match;
  block8.receiver = this;
  block8.className = 'block<genjs:44>';
  block8.real = function(
var_c
) {
  sourceObject = this;
  lineNumber = 45
  lineNumber = 1
  lineNumber = 45
  var call9 = callmethod(var_c,"ord", [0]);
  var var_o = call9;
  lineNumber = 45;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_o)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'o' to be of type Dynamic"))
  lineNumber = 46
  lineNumber = 47
  lineNumber = 46
  var opresult12 = callmethod(var_o, ">=", [1], new GraceNum(97));
  var opresult14 = callmethod(var_o, "<=", [1], new GraceNum(122));
  var opresult16 = callmethod(opresult12, "&&", [1], opresult14);
  var opresult18 = callmethod(var_o, ">=", [1], new GraceNum(65));
  var opresult20 = callmethod(var_o, "<=", [1], new GraceNum(90));
  var opresult22 = callmethod(opresult18, "&&", [1], opresult20);
  var opresult24 = callmethod(opresult16, "||", [1], opresult22);
  lineNumber = 47
  var opresult26 = callmethod(var_o, ">=", [1], new GraceNum(48));
  var opresult28 = callmethod(var_o, "<=", [1], new GraceNum(57));
  var opresult30 = callmethod(opresult26, "&&", [1], opresult28);
  var opresult32 = callmethod(opresult24, "||", [1], opresult30);
  if (Grace_isTrue(opresult32)) {
  lineNumber = 49
  lineNumber = 48
  var opresult34 = callmethod(var_nm, "++", [1], var_c);
  var_nm = opresult34;
  var if10 = opresult34;
  } else {
  lineNumber = 51
  lineNumber = 50
  var string35 = new GraceString("__");
  var opresult37 = callmethod(var_nm, "++", [1], string35);
  var opresult39 = callmethod(opresult37, "++", [1], var_o);
  var string40 = new GraceString("__");
  var opresult42 = callmethod(opresult39, "++", [1], string40);
  var_nm = opresult42;
  var if10 = opresult42;
}
  return if10;
};
  var call43 = callmethod(Grace_prelude,"for()do", [1, 1], var_vn, block8);
  lineNumber = 53
  return var_nm
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func6.paramCounts = [1];
  func6.variableArities = [false];
  this.methods["escapeident"] = func6;
  lineNumber = 55
var func44 = function(argcv) {    // method escapestring(1)
  var curarg = 1;
  var var_s = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func44.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method escapestring(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 56
  var string45 = new GraceString("");
  var var_os = string45;
  lineNumber = 56;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_os)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'os' to be of type Dynamic"))
  lineNumber = 57
  var block46 = Grace_allocObject();
  block46.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block46.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block46.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block46.methods["match"] = GraceBlock_match;
  block46.receiver = this;
  block46.className = 'block<genjs:57>';
  block46.real = function(
var_c
) {
  sourceObject = this;
  lineNumber = 58
  var string48 = new GraceString("\"");
  var opresult50 = callmethod(var_c, "==", [1], string48);
  if (Grace_isTrue(opresult50)) {
  lineNumber = 60
  lineNumber = 59
  var string51 = new GraceString("\\\"");
  var opresult53 = callmethod(var_os, "++", [1], string51);
  var_os = opresult53;
  var if47 = opresult53;
  } else {
  lineNumber = 62
  lineNumber = 60
  var string55 = new GraceString("\\");
  var opresult57 = callmethod(var_c, "==", [1], string55);
  if (Grace_isTrue(opresult57)) {
  lineNumber = 62
  lineNumber = 61
  var string58 = new GraceString("\\\\");
  var opresult60 = callmethod(var_os, "++", [1], string58);
  var_os = opresult60;
  var if54 = opresult60;
  } else {
  lineNumber = 64
  lineNumber = 62
  var string62 = new GraceString("\n");
  var opresult64 = callmethod(var_c, "==", [1], string62);
  if (Grace_isTrue(opresult64)) {
  lineNumber = 64
  lineNumber = 63
  var string65 = new GraceString("\\n");
  var opresult67 = callmethod(var_os, "++", [1], string65);
  var_os = opresult67;
  var if61 = opresult67;
  } else {
  lineNumber = 70
  lineNumber = 64
  lineNumber = 1
  lineNumber = 64
  var call69 = callmethod(var_c,"ord", [0]);
  var opresult71 = callmethod(call69, "<", [1], new GraceNum(32));
  lineNumber = 1
  lineNumber = 64
  var call72 = callmethod(var_c,"ord", [0]);
  var opresult74 = callmethod(call72, ">", [1], new GraceNum(126));
  var opresult76 = callmethod(opresult71, "||", [1], opresult74);
  if (Grace_isTrue(opresult76)) {
  lineNumber = 65
  lineNumber = 1
  lineNumber = 65
  var call77 = callmethod(var_c,"ord", [0]);
  var call78 = callmethod(var_util,"hex", [1], call77);
  var var_uh = call78;
  lineNumber = 65;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_uh)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'uh' to be of type Dynamic"))
  lineNumber = 66
  var block79 = Grace_allocObject();
  block79.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block79.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block79.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block79.methods["match"] = GraceBlock_match;
  block79.receiver = this;
  block79.className = 'block<genjs:66>';
  block79.real = function(
) {
  sourceObject = this;
  lineNumber = 1
  lineNumber = 66
  var call80 = callmethod(var_uh,"size", [0]);
  var opresult82 = callmethod(call80, "<", [1], new GraceNum(4));
  return opresult82;
};
  var block83 = Grace_allocObject();
  block83.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block83.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block83.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block83.methods["match"] = GraceBlock_match;
  block83.receiver = this;
  block83.className = 'block<genjs:66>';
  block83.real = function(
) {
  sourceObject = this;
  lineNumber = 68
  lineNumber = 67
  var string84 = new GraceString("0");
  var opresult86 = callmethod(string84, "++", [1], var_uh);
  var_uh = opresult86;
  return opresult86;
};
  var call87 = callmethod(Grace_prelude,"while()do", [1, 1], block79, block83);
  lineNumber = 70
  lineNumber = 69
  var string88 = new GraceString("\\u");
  var opresult90 = callmethod(var_os, "++", [1], string88);
  var opresult92 = callmethod(opresult90, "++", [1], var_uh);
  var_os = opresult92;
  var if68 = opresult92;
  } else {
  lineNumber = 72
  lineNumber = 71
  var opresult94 = callmethod(var_os, "++", [1], var_c);
  var_os = opresult94;
  var if68 = opresult94;
}
  var if61 = if68;
}
  var if54 = if61;
}
  var if47 = if54;
}
  return if47;
};
  var call95 = callmethod(Grace_prelude,"for()do", [1, 1], var_s, block46);
  lineNumber = 74
  return var_os
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func44.paramCounts = [1];
  func44.variableArities = [false];
  this.methods["escapestring"] = func44;
  lineNumber = 76
var func96 = function(argcv) {    // method varf(1)
  var curarg = 1;
  var var_vn = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func96.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method varf(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 77
  var string97 = new GraceString("var_");
onSelf = true;
  var call98 = callmethod(this, "escapeident", [1], var_vn);
  var opresult100 = callmethod(string97, "++", [1], call98);
  return opresult100
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func96.paramCounts = [1];
  func96.variableArities = [false];
  this.methods["varf"] = func96;
  lineNumber = 79
var func101 = function(argcv) {    // method beginblock(1)
  var curarg = 1;
  var var_s = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func101.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method beginblock(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 81
  lineNumber = 80
  var string102 = new GraceString("%");
  var opresult104 = callmethod(string102, "++", [1], var_s);
  var_bblock = opresult104;
  lineNumber = 81
  var string105 = new GraceString(":");
  var opresult107 = callmethod(var_s, "++", [1], string105);
onSelf = true;
  var call108 = callmethod(this, "out", [1], opresult107);
  return call108
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func101.paramCounts = [1];
  func101.variableArities = [false];
  this.methods["beginblock"] = func101;
  lineNumber = 83
var func109 = function(argcv) {    // method compilearray(1)
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func109.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method compilearray(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 84
  var var_myc = var_auto__95__count;
  lineNumber = 84;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_myc)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'myc' to be of type Dynamic"))
  lineNumber = 86
  lineNumber = 85
  var opresult111 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult111;
  lineNumber = 86
  var var_r;
  lineNumber = 87
  var array112 = new GraceList([
]);

  var var_vals = array112;
  lineNumber = 87;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_vals)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'vals' to be of type Dynamic"))
  lineNumber = 88
  lineNumber = 1
  lineNumber = 88
  var call113 = callmethod(var_o,"value", [0]);
  var block114 = Grace_allocObject();
  block114.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block114.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block114.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block114.methods["match"] = GraceBlock_match;
  block114.receiver = this;
  block114.className = 'block<genjs:88>';
  block114.real = function(
var_a
) {
  sourceObject = this;
  lineNumber = 89
onSelf = true;
  var call115 = callmethod(this, "compilenode", [1], var_a);
  var_r = call115;
  lineNumber = 90
  var call116 = callmethod(var_vals,"push", [1], var_r);
  return call116;
};
  var call117 = callmethod(Grace_prelude,"for()do", [1, 1], call113, block114);
  lineNumber = 92
  var string118 = new GraceString("  var array");
  var opresult120 = callmethod(string118, "++", [1], var_myc);
  var string121 = new GraceString(" = new GraceList([");
  var opresult123 = callmethod(opresult120, "++", [1], string121);
onSelf = true;
  var call124 = callmethod(this, "out", [1], opresult123);
  lineNumber = 93
  var block125 = Grace_allocObject();
  block125.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block125.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block125.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block125.methods["match"] = GraceBlock_match;
  block125.receiver = this;
  block125.className = 'block<genjs:93>';
  block125.real = function(
var_v
) {
  sourceObject = this;
  lineNumber = 94
  var string126 = new GraceString(",");
  var opresult128 = callmethod(var_v, "++", [1], string126);
onSelf = true;
  var call129 = callmethod(this, "out", [1], opresult128);
  return call129;
};
  var call130 = callmethod(Grace_prelude,"for()do", [1, 1], var_vals, block125);
  lineNumber = 96
  var string131 = new GraceString("]);\n");
onSelf = true;
  var call132 = callmethod(this, "out", [1], string131);
  lineNumber = 98
  lineNumber = 1
  lineNumber = 98
  lineNumber = 97
  var string133 = new GraceString("array");
  var opresult135 = callmethod(string133, "++", [1], var_myc);
  var call136 = callmethod(var_o,"register:=", [1], opresult135);
  return call136
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func109.paramCounts = [1];
  func109.variableArities = [false];
  this.methods["compilearray"] = func109;
  lineNumber = 99
var func137 = function(argcv) {    // method compilemember(1)
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func137.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method compilemember(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 101
  lineNumber = 1
  lineNumber = 101
  var call139 = callmethod(var_o,"value", [0]);
  lineNumber = 1
  lineNumber = 101
  var call140 = callmethod(var_ast,"callWithPart", [0]);
  var call141 = callmethod(call140,"new", [1], call139);
  var array138 = new GraceList([
call141,
]);

  lineNumber = 1
  lineNumber = 101
  var call142 = callmethod(var_ast,"callNode", [0]);
  var call143 = callmethod(call142,"new", [2], var_o, array138);
  var var_c = call143;
  lineNumber = 101;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_c)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'c' to be of type Dynamic"))
  lineNumber = 102
onSelf = true;
  var call144 = callmethod(this, "compilenode", [1], var_c);
  var var_r = call144;
  lineNumber = 102;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_r)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'r' to be of type Dynamic"))
  lineNumber = 104
  lineNumber = 1
  lineNumber = 103
  var call145 = callmethod(var_o,"register:=", [1], var_r);
  return call145
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func137.paramCounts = [1];
  func137.variableArities = [false];
  this.methods["compilemember"] = func137;
  lineNumber = 105
var func146 = function(argcv) {    // method compileobjouter(2)
  var curarg = 1;
  var var_selfr = arguments[curarg];
  curarg++;
  var var_outerRef = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func146.paramCounts[0]) // != 2 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method compileobjouter(2) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 106
  var var_myc = var_auto__95__count;
  lineNumber = 106;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_myc)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'myc' to be of type Dynamic"))
  lineNumber = 108
  lineNumber = 107
  var opresult148 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult148;
  lineNumber = 108
  var string149 = new GraceString("outer");
onSelf = true;
  var call150 = callmethod(this, "escapestring", [1], string149);
  var var_nm = call150;
  lineNumber = 108;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_nm)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'nm' to be of type Dynamic"))
  lineNumber = 109
  var string151 = new GraceString("outer");
onSelf = true;
  var call152 = callmethod(this, "escapeident", [1], string151);
  var var_nmi = call152;
  lineNumber = 109;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_nmi)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'nmi' to be of type Dynamic"))
  lineNumber = 110
  var string153 = new GraceString("  ");
  var opresult155 = callmethod(string153, "++", [1], var_selfr);
  var string156 = new GraceString(".outer = ");
  var opresult158 = callmethod(opresult155, "++", [1], string156);
  var opresult160 = callmethod(opresult158, "++", [1], var_outerRef);
  var string161 = new GraceString(";");
  var opresult163 = callmethod(opresult160, "++", [1], string161);
onSelf = true;
  var call164 = callmethod(this, "out", [1], opresult163);
  lineNumber = 111
  var string165 = new GraceString("    var reader_");
  var opresult167 = callmethod(string165, "++", [1], var_modname);
  var string168 = new GraceString("_");
  var opresult170 = callmethod(opresult167, "++", [1], string168);
  var opresult172 = callmethod(opresult170, "++", [1], var_nmi);
  var opresult174 = callmethod(opresult172, "++", [1], var_myc);
  var string175 = new GraceString(" = function() {");
  var opresult177 = callmethod(opresult174, "++", [1], string175);
onSelf = true;
  var call178 = callmethod(this, "out", [1], opresult177);
  lineNumber = 112
  var string179 = new GraceString("    return this.outer;");
onSelf = true;
  var call180 = callmethod(this, "out", [1], string179);
  lineNumber = 113
  var string181 = new GraceString("  }");
onSelf = true;
  var call182 = callmethod(this, "out", [1], string181);
  lineNumber = 114
  lineNumber = 115
  lineNumber = 114
  var string183 = new GraceString("  ");
  var opresult185 = callmethod(string183, "++", [1], var_selfr);
  var string186 = new GraceString(".methods[\"");
  var opresult188 = callmethod(opresult185, "++", [1], string186);
  var opresult190 = callmethod(opresult188, "++", [1], var_nm);
  var string191 = new GraceString("\"] = reader_");
  var opresult193 = callmethod(opresult190, "++", [1], string191);
  var opresult195 = callmethod(opresult193, "++", [1], var_modname);
  var string196 = new GraceString("_");
  var opresult198 = callmethod(opresult195, "++", [1], string196);
  lineNumber = 115
  var opresult200 = callmethod(opresult198, "++", [1], var_nmi);
  var opresult202 = callmethod(opresult200, "++", [1], var_myc);
  var string203 = new GraceString(";");
  var opresult205 = callmethod(opresult202, "++", [1], string203);
onSelf = true;
  var call206 = callmethod(this, "out", [1], opresult205);
  return call206
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func146.paramCounts = [2];
  func146.variableArities = [false];
  this.methods["compileobjouter"] = func146;
  lineNumber = 117
var func207 = function(argcv) {    // method compileobjtype(3)
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var var_selfr = arguments[curarg];
  curarg++;
  var var_pos = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func207.paramCounts[0]) // != 3 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method compileobjtype(3) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 118
  var string208 = new GraceString("undefined");
  var var_val = string208;
  lineNumber = 118;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_val)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'val' to be of type Dynamic"))
  lineNumber = 119
  var var_myc = var_auto__95__count;
  lineNumber = 119;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_myc)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'myc' to be of type Dynamic"))
  lineNumber = 121
  lineNumber = 120
  var opresult210 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult210;
  lineNumber = 121
  lineNumber = 1
  lineNumber = 121
  var call211 = callmethod(var_o,"value", [0]);
onSelf = true;
  var call212 = callmethod(this, "escapestring", [1], call211);
  var var_nm = call212;
  lineNumber = 121;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_nm)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'nm' to be of type Dynamic"))
  lineNumber = 122
  lineNumber = 1
  lineNumber = 122
  var call213 = callmethod(var_o,"value", [0]);
onSelf = true;
  var call214 = callmethod(this, "escapeident", [1], call213);
  var var_nmi = call214;
  lineNumber = 122;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_nmi)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'nmi' to be of type Dynamic"))
  lineNumber = 124
  lineNumber = 1
  lineNumber = 123
  var bool215 = new GraceBoolean(true)
  var call216 = callmethod(var_o,"anonymous:=", [1], bool215);
  lineNumber = 124
onSelf = true;
  var call217 = callmethod(this, "compilenode", [1], var_o);
  var_val = call217;
  lineNumber = 125
  var string218 = new GraceString("  ");
  var opresult220 = callmethod(string218, "++", [1], var_selfr);
  var string221 = new GraceString(".data[\"");
  var opresult223 = callmethod(opresult220, "++", [1], string221);
  var opresult225 = callmethod(opresult223, "++", [1], var_nm);
  var string226 = new GraceString("\"] = ");
  var opresult228 = callmethod(opresult225, "++", [1], string226);
  var opresult230 = callmethod(opresult228, "++", [1], var_val);
  var string231 = new GraceString(";");
  var opresult233 = callmethod(opresult230, "++", [1], string231);
onSelf = true;
  var call234 = callmethod(this, "out", [1], opresult233);
  lineNumber = 126
  var string235 = new GraceString("    var reader_");
  var opresult237 = callmethod(string235, "++", [1], var_modname);
  var string238 = new GraceString("_");
  var opresult240 = callmethod(opresult237, "++", [1], string238);
  var opresult242 = callmethod(opresult240, "++", [1], var_nmi);
  var opresult244 = callmethod(opresult242, "++", [1], var_myc);
  var string245 = new GraceString(" = function() {");
  var opresult247 = callmethod(opresult244, "++", [1], string245);
onSelf = true;
  var call248 = callmethod(this, "out", [1], opresult247);
  lineNumber = 127
  var string249 = new GraceString("    return this.data[\"");
  var opresult251 = callmethod(string249, "++", [1], var_nm);
  var string252 = new GraceString("\"];");
  var opresult254 = callmethod(opresult251, "++", [1], string252);
onSelf = true;
  var call255 = callmethod(this, "out", [1], opresult254);
  lineNumber = 128
  var string256 = new GraceString("  }");
onSelf = true;
  var call257 = callmethod(this, "out", [1], string256);
  lineNumber = 129
  var string258 = new GraceString("  reader_");
  var opresult260 = callmethod(string258, "++", [1], var_modname);
  var string261 = new GraceString("_");
  var opresult263 = callmethod(opresult260, "++", [1], string261);
  var opresult265 = callmethod(opresult263, "++", [1], var_nmi);
  var string266 = new GraceString("");
  var opresult268 = callmethod(opresult265, "++", [1], string266);
  var opresult270 = callmethod(opresult268, "++", [1], var_myc);
  var string271 = new GraceString(".def = true;");
  var opresult273 = callmethod(opresult270, "++", [1], string271);
onSelf = true;
  var call274 = callmethod(this, "out", [1], opresult273);
  lineNumber = 130
  var bool275 = new GraceBoolean(false)
  var var_isReadable = bool275;
  lineNumber = 130;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_isReadable)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'isReadable' to be of type Dynamic"))
  lineNumber = 131
  lineNumber = 1
  lineNumber = 131
  var call276 = callmethod(var_o,"annotations", [0]);
  var block277 = Grace_allocObject();
  block277.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block277.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block277.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block277.methods["match"] = GraceBlock_match;
  block277.receiver = this;
  block277.className = 'block<genjs:131>';
  block277.real = function(
var_ann
) {
  sourceObject = this;
  lineNumber = 132
  lineNumber = 133
  var block279 = Grace_allocObject();
  block279.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block279.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block279.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block279.methods["match"] = GraceBlock_match;
  block279.receiver = this;
  block279.className = 'block<genjs:133>';
  block279.real = function(
) {
  sourceObject = this;
  lineNumber = 1
  lineNumber = 133
  var call280 = callmethod(var_ann,"value", [0]);
  var string281 = new GraceString("confidential");
  var opresult283 = callmethod(call280, "==", [1], string281);
  return opresult283;
};
  lineNumber = 132
  lineNumber = 1
  lineNumber = 132
  var call284 = callmethod(var_ann,"kind", [0]);
  var string285 = new GraceString("identifier");
  var opresult287 = callmethod(call284, "==", [1], string285);
  var call288 = callmethod(opresult287,"andAlso", [1], block279);
  if (Grace_isTrue(call288)) {
  lineNumber = 134
  var string289 = new GraceString("  reader_");
  var opresult291 = callmethod(string289, "++", [1], var_modname);
  var string292 = new GraceString("_");
  var opresult294 = callmethod(opresult291, "++", [1], string292);
  var opresult296 = callmethod(opresult294, "++", [1], var_nmi);
  var string297 = new GraceString("");
  var opresult299 = callmethod(opresult296, "++", [1], string297);
  var opresult301 = callmethod(opresult299, "++", [1], var_myc);
  var string302 = new GraceString(".confidential = true;");
  var opresult304 = callmethod(opresult301, "++", [1], string302);
onSelf = true;
  var call305 = callmethod(this, "out", [1], opresult304);
  var if278 = call305;
}
  lineNumber = 136
  lineNumber = 137
  var block307 = Grace_allocObject();
  block307.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block307.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block307.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block307.methods["match"] = GraceBlock_match;
  block307.receiver = this;
  block307.className = 'block<genjs:137>';
  block307.real = function(
) {
  sourceObject = this;
  lineNumber = 1
  lineNumber = 137
  var call308 = callmethod(var_ann,"value", [0]);
  var string309 = new GraceString("readable");
  var opresult311 = callmethod(call308, "==", [1], string309);
  return opresult311;
};
  lineNumber = 136
  lineNumber = 1
  lineNumber = 136
  var call312 = callmethod(var_ann,"kind", [0]);
  var string313 = new GraceString("identifier");
  var opresult315 = callmethod(call312, "==", [1], string313);
  var call316 = callmethod(opresult315,"andAlso", [1], block307);
  if (Grace_isTrue(call316)) {
  lineNumber = 139
  lineNumber = 138
  var bool317 = new GraceBoolean(true)
  var_isReadable = bool317;
  var if306 = bool317;
}
  return if306;
};
  var call318 = callmethod(Grace_prelude,"for()do", [1, 1], call276, block277);
  lineNumber = 141
  var call320 = callmethod(var_isReadable,"prefix!", [0]);
  if (Grace_isTrue(call320)) {
  lineNumber = 142
  var string321 = new GraceString("  reader_");
  var opresult323 = callmethod(string321, "++", [1], var_modname);
  var string324 = new GraceString("_");
  var opresult326 = callmethod(opresult323, "++", [1], string324);
  var opresult328 = callmethod(opresult326, "++", [1], var_nmi);
  var string329 = new GraceString("");
  var opresult331 = callmethod(opresult328, "++", [1], string329);
  var opresult333 = callmethod(opresult331, "++", [1], var_myc);
  var string334 = new GraceString("._private = true;");
  var opresult336 = callmethod(opresult333, "++", [1], string334);
onSelf = true;
  var call337 = callmethod(this, "out", [1], opresult336);
  var if319 = call337;
}
  lineNumber = 144
  lineNumber = 145
  lineNumber = 144
  var string338 = new GraceString("  ");
  var opresult340 = callmethod(string338, "++", [1], var_selfr);
  var string341 = new GraceString(".methods[\"");
  var opresult343 = callmethod(opresult340, "++", [1], string341);
  var opresult345 = callmethod(opresult343, "++", [1], var_nm);
  var string346 = new GraceString("\"] = reader_");
  var opresult348 = callmethod(opresult345, "++", [1], string346);
  var opresult350 = callmethod(opresult348, "++", [1], var_modname);
  var string351 = new GraceString("_");
  var opresult353 = callmethod(opresult350, "++", [1], string351);
  lineNumber = 145
  var opresult355 = callmethod(opresult353, "++", [1], var_nmi);
  var opresult357 = callmethod(opresult355, "++", [1], var_myc);
  var string358 = new GraceString(";");
  var opresult360 = callmethod(opresult357, "++", [1], string358);
onSelf = true;
  var call361 = callmethod(this, "out", [1], opresult360);
  return call361
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func207.paramCounts = [3];
  func207.variableArities = [false];
  this.methods["compileobjtype"] = func207;
  lineNumber = 147
var func362 = function(argcv) {    // method compileobjdefdec(3)
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var var_selfr = arguments[curarg];
  curarg++;
  var var_pos = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func362.paramCounts[0]) // != 3 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method compileobjdefdec(3) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 148
  var string363 = new GraceString("undefined");
  var var_val = string363;
  lineNumber = 148;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_val)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'val' to be of type Dynamic"))
  lineNumber = 149
  var bool365 = new GraceBoolean(false)
  lineNumber = 1
  lineNumber = 149
  var call366 = callmethod(var_o,"value", [0]);
  var opresult368 = callmethod(bool365, "!=", [1], call366);
  if (Grace_isTrue(opresult368)) {
  lineNumber = 150
  lineNumber = 1
  lineNumber = 150
  lineNumber = 1
  lineNumber = 150
  var call370 = callmethod(var_o,"value", [0]);
  var call371 = callmethod(call370,"kind", [0]);
  var string372 = new GraceString("object");
  var opresult374 = callmethod(call371, "==", [1], string372);
  if (Grace_isTrue(opresult374)) {
  lineNumber = 151
  lineNumber = 1
  lineNumber = 151
  var call375 = callmethod(var_o,"value", [0]);
  var bool376 = new GraceBoolean(false)
onSelf = true;
  var call377 = callmethod(this, "compileobject", [3], call375, var_selfr, bool376);
  lineNumber = 153
  lineNumber = 152
  lineNumber = 1
  lineNumber = 152
  lineNumber = 1
  lineNumber = 152
  var call378 = callmethod(var_o,"value", [0]);
  var call379 = callmethod(call378,"register", [0]);
  var_val = call379;
  var if369 = call379;
  } else {
  lineNumber = 154
  lineNumber = 1
  lineNumber = 154
  var call380 = callmethod(var_o,"value", [0]);
onSelf = true;
  var call381 = callmethod(this, "compilenode", [1], call380);
  var_val = call381;
  var if369 = call381;
}
  var if364 = if369;
}
  lineNumber = 157
  var var_myc = var_auto__95__count;
  lineNumber = 157;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_myc)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'myc' to be of type Dynamic"))
  lineNumber = 159
  lineNumber = 158
  var opresult383 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult383;
  lineNumber = 159
  lineNumber = 1
  lineNumber = 159
  lineNumber = 1
  lineNumber = 159
  var call384 = callmethod(var_o,"name", [0]);
  var call385 = callmethod(call384,"value", [0]);
onSelf = true;
  var call386 = callmethod(this, "escapestring", [1], call385);
  var var_nm = call386;
  lineNumber = 159;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_nm)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'nm' to be of type Dynamic"))
  lineNumber = 160
  lineNumber = 1
  lineNumber = 160
  lineNumber = 1
  lineNumber = 160
  var call387 = callmethod(var_o,"name", [0]);
  var call388 = callmethod(call387,"value", [0]);
onSelf = true;
  var call389 = callmethod(this, "escapeident", [1], call388);
  var var_nmi = call389;
  lineNumber = 160;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_nmi)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'nmi' to be of type Dynamic"))
  lineNumber = 161
  var string390 = new GraceString("  ");
  var opresult392 = callmethod(string390, "++", [1], var_selfr);
  var string393 = new GraceString(".data[\"");
  var opresult395 = callmethod(opresult392, "++", [1], string393);
  var opresult397 = callmethod(opresult395, "++", [1], var_nm);
  var string398 = new GraceString("\"] = ");
  var opresult400 = callmethod(opresult397, "++", [1], string398);
  var opresult402 = callmethod(opresult400, "++", [1], var_val);
  var string403 = new GraceString(";");
  var opresult405 = callmethod(opresult402, "++", [1], string403);
onSelf = true;
  var call406 = callmethod(this, "out", [1], opresult405);
  lineNumber = 162
  var string407 = new GraceString("    var reader_");
  var opresult409 = callmethod(string407, "++", [1], var_modname);
  var string410 = new GraceString("_");
  var opresult412 = callmethod(opresult409, "++", [1], string410);
  var opresult414 = callmethod(opresult412, "++", [1], var_nmi);
  var opresult416 = callmethod(opresult414, "++", [1], var_myc);
  var string417 = new GraceString(" = function() {");
  var opresult419 = callmethod(opresult416, "++", [1], string417);
onSelf = true;
  var call420 = callmethod(this, "out", [1], opresult419);
  lineNumber = 163
  var string421 = new GraceString("    return this.data[\"");
  var opresult423 = callmethod(string421, "++", [1], var_nm);
  var string424 = new GraceString("\"];");
  var opresult426 = callmethod(opresult423, "++", [1], string424);
onSelf = true;
  var call427 = callmethod(this, "out", [1], opresult426);
  lineNumber = 164
  var string428 = new GraceString("  }");
onSelf = true;
  var call429 = callmethod(this, "out", [1], string428);
  lineNumber = 165
  var string430 = new GraceString("  reader_");
  var opresult432 = callmethod(string430, "++", [1], var_modname);
  var string433 = new GraceString("_");
  var opresult435 = callmethod(opresult432, "++", [1], string433);
  var opresult437 = callmethod(opresult435, "++", [1], var_nmi);
  var string438 = new GraceString("");
  var opresult440 = callmethod(opresult437, "++", [1], string438);
  var opresult442 = callmethod(opresult440, "++", [1], var_myc);
  var string443 = new GraceString(".def = true;");
  var opresult445 = callmethod(opresult442, "++", [1], string443);
onSelf = true;
  var call446 = callmethod(this, "out", [1], opresult445);
  lineNumber = 166
  var bool447 = new GraceBoolean(false)
  var var_isReadable = bool447;
  lineNumber = 166;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_isReadable)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'isReadable' to be of type Dynamic"))
  lineNumber = 167
  lineNumber = 1
  lineNumber = 167
  var call448 = callmethod(var_o,"annotations", [0]);
  var block449 = Grace_allocObject();
  block449.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block449.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block449.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block449.methods["match"] = GraceBlock_match;
  block449.receiver = this;
  block449.className = 'block<genjs:167>';
  block449.real = function(
var_ann
) {
  sourceObject = this;
  lineNumber = 168
  lineNumber = 169
  var block451 = Grace_allocObject();
  block451.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block451.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block451.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block451.methods["match"] = GraceBlock_match;
  block451.receiver = this;
  block451.className = 'block<genjs:169>';
  block451.real = function(
) {
  sourceObject = this;
  lineNumber = 1
  lineNumber = 169
  var call452 = callmethod(var_ann,"value", [0]);
  var string453 = new GraceString("confidential");
  var opresult455 = callmethod(call452, "==", [1], string453);
  return opresult455;
};
  lineNumber = 168
  lineNumber = 1
  lineNumber = 168
  var call456 = callmethod(var_ann,"kind", [0]);
  var string457 = new GraceString("identifier");
  var opresult459 = callmethod(call456, "==", [1], string457);
  var call460 = callmethod(opresult459,"andAlso", [1], block451);
  if (Grace_isTrue(call460)) {
  lineNumber = 170
  var string461 = new GraceString("  reader_");
  var opresult463 = callmethod(string461, "++", [1], var_modname);
  var string464 = new GraceString("_");
  var opresult466 = callmethod(opresult463, "++", [1], string464);
  var opresult468 = callmethod(opresult466, "++", [1], var_nmi);
  var string469 = new GraceString("");
  var opresult471 = callmethod(opresult468, "++", [1], string469);
  var opresult473 = callmethod(opresult471, "++", [1], var_myc);
  var string474 = new GraceString(".confidential = true;");
  var opresult476 = callmethod(opresult473, "++", [1], string474);
onSelf = true;
  var call477 = callmethod(this, "out", [1], opresult476);
  var if450 = call477;
}
  lineNumber = 172
  lineNumber = 173
  var block479 = Grace_allocObject();
  block479.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block479.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block479.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block479.methods["match"] = GraceBlock_match;
  block479.receiver = this;
  block479.className = 'block<genjs:173>';
  block479.real = function(
) {
  sourceObject = this;
  lineNumber = 1
  lineNumber = 173
  var call480 = callmethod(var_ann,"value", [0]);
  var string481 = new GraceString("readable");
  var opresult483 = callmethod(call480, "==", [1], string481);
  return opresult483;
};
  lineNumber = 172
  lineNumber = 1
  lineNumber = 172
  var call484 = callmethod(var_ann,"kind", [0]);
  var string485 = new GraceString("identifier");
  var opresult487 = callmethod(call484, "==", [1], string485);
  var call488 = callmethod(opresult487,"andAlso", [1], block479);
  if (Grace_isTrue(call488)) {
  lineNumber = 175
  lineNumber = 174
  var bool489 = new GraceBoolean(true)
  var_isReadable = bool489;
  var if478 = bool489;
}
  return if478;
};
  var call490 = callmethod(Grace_prelude,"for()do", [1, 1], call448, block449);
  lineNumber = 177
  var call492 = callmethod(var_isReadable,"prefix!", [0]);
  if (Grace_isTrue(call492)) {
  lineNumber = 178
  var string493 = new GraceString("  reader_");
  var opresult495 = callmethod(string493, "++", [1], var_modname);
  var string496 = new GraceString("_");
  var opresult498 = callmethod(opresult495, "++", [1], string496);
  var opresult500 = callmethod(opresult498, "++", [1], var_nmi);
  var string501 = new GraceString("");
  var opresult503 = callmethod(opresult500, "++", [1], string501);
  var opresult505 = callmethod(opresult503, "++", [1], var_myc);
  var string506 = new GraceString("._private = true;");
  var opresult508 = callmethod(opresult505, "++", [1], string506);
onSelf = true;
  var call509 = callmethod(this, "out", [1], opresult508);
  var if491 = call509;
}
  lineNumber = 180
  lineNumber = 181
  lineNumber = 180
  var string510 = new GraceString("  ");
  var opresult512 = callmethod(string510, "++", [1], var_selfr);
  var string513 = new GraceString(".methods[\"");
  var opresult515 = callmethod(opresult512, "++", [1], string513);
  var opresult517 = callmethod(opresult515, "++", [1], var_nm);
  var string518 = new GraceString("\"] = reader_");
  var opresult520 = callmethod(opresult517, "++", [1], string518);
  var opresult522 = callmethod(opresult520, "++", [1], var_modname);
  var string523 = new GraceString("_");
  var opresult525 = callmethod(opresult522, "++", [1], string523);
  lineNumber = 181
  var opresult527 = callmethod(opresult525, "++", [1], var_nmi);
  var opresult529 = callmethod(opresult527, "++", [1], var_myc);
  var string530 = new GraceString(";");
  var opresult532 = callmethod(opresult529, "++", [1], string530);
onSelf = true;
  var call533 = callmethod(this, "out", [1], opresult532);
  lineNumber = 182
  var string535 = new GraceString("parent");
  var call536 = callmethod(var_ast,"findAnnotation", [2], var_o, string535);
  if (Grace_isTrue(call536)) {
  lineNumber = 183
  var string537 = new GraceString("  ");
  var opresult539 = callmethod(string537, "++", [1], var_selfr);
  var string540 = new GraceString(".superobj = ");
  var opresult542 = callmethod(opresult539, "++", [1], string540);
  var opresult544 = callmethod(opresult542, "++", [1], var_val);
  var string545 = new GraceString(";");
  var opresult547 = callmethod(opresult544, "++", [1], string545);
onSelf = true;
  var call548 = callmethod(this, "out", [1], opresult547);
  var if534 = call548;
}
  lineNumber = 185
  lineNumber = 1
  lineNumber = 185
  var call550 = callmethod(var_o,"dtype", [0]);
  var bool551 = new GraceBoolean(false)
  var opresult553 = callmethod(call550, "!=", [1], bool551);
  if (Grace_isTrue(opresult553)) {
  lineNumber = 187
  lineNumber = 186
  lineNumber = 1
  lineNumber = 186
  var call554 = callmethod(var_o,"line", [0]);
  var_linenum = call554;
  lineNumber = 187
  var string555 = new GraceString("  lineNumber = ");
  var opresult557 = callmethod(string555, "++", [1], var_linenum);
  var string558 = new GraceString(";");
  var opresult560 = callmethod(opresult557, "++", [1], string558);
onSelf = true;
  var call561 = callmethod(this, "out", [1], opresult560);
  lineNumber = 188
  var string562 = new GraceString("  if (!Grace_isTrue(callmethod(");
  lineNumber = 1
  lineNumber = 188
  var call563 = callmethod(var_o,"dtype", [0]);
onSelf = true;
  var call564 = callmethod(this, "compilenode", [1], call563);
  var opresult566 = callmethod(string562, "++", [1], call564);
  var string567 = new GraceString(", \"match\",");
  var opresult569 = callmethod(opresult566, "++", [1], string567);
onSelf = true;
  var call570 = callmethod(this, "out", [1], opresult569);
  lineNumber = 189
  var string571 = new GraceString("    [1], ");
  var opresult573 = callmethod(string571, "++", [1], var_val);
  var string574 = new GraceString(")))");
  var opresult576 = callmethod(opresult573, "++", [1], string574);
onSelf = true;
  var call577 = callmethod(this, "out", [1], opresult576);
  lineNumber = 190
  var string578 = new GraceString("      throw new GraceExceptionPacket(TypeErrorObject,");
onSelf = true;
  var call579 = callmethod(this, "out", [1], string578);
  lineNumber = 191
  var string580 = new GraceString("            new GraceString(\"expected \"");
onSelf = true;
  var call581 = callmethod(this, "out", [1], string580);
  lineNumber = 192
  var string582 = new GraceString("            + \"initial value of def '");
  lineNumber = 1
  lineNumber = 192
  lineNumber = 1
  lineNumber = 192
  var call583 = callmethod(var_o,"name", [0]);
  var call584 = callmethod(call583,"value", [0]);
  var opresult586 = callmethod(string582, "++", [1], call584);
  var string587 = new GraceString("' to be of type ");
  var opresult589 = callmethod(opresult586, "++", [1], string587);
  lineNumber = 1
  lineNumber = 192
  lineNumber = 1
  lineNumber = 192
  var call590 = callmethod(var_o,"dtype", [0]);
  var call591 = callmethod(call590,"value", [0]);
  var opresult593 = callmethod(opresult589, "++", [1], call591);
  var string594 = new GraceString("\"))");
  var opresult596 = callmethod(opresult593, "++", [1], string594);
onSelf = true;
  var call597 = callmethod(this, "out", [1], opresult596);
  var if549 = call597;
}
  return if549
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func362.paramCounts = [3];
  func362.variableArities = [false];
  this.methods["compileobjdefdec"] = func362;
  lineNumber = 195
var func598 = function(argcv) {    // method compileobjvardec(3)
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var var_selfr = arguments[curarg];
  curarg++;
  var var_pos = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func598.paramCounts[0]) // != 3 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method compileobjvardec(3) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 196
  var string599 = new GraceString("undefined");
  var var_val = string599;
  lineNumber = 196;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_val)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'val' to be of type Dynamic"))
  lineNumber = 197
  var bool601 = new GraceBoolean(false)
  lineNumber = 1
  lineNumber = 197
  var call602 = callmethod(var_o,"value", [0]);
  var opresult604 = callmethod(bool601, "!=", [1], call602);
  if (Grace_isTrue(opresult604)) {
  lineNumber = 198
  lineNumber = 1
  lineNumber = 198
  var call605 = callmethod(var_o,"value", [0]);
onSelf = true;
  var call606 = callmethod(this, "compilenode", [1], call605);
  var_val = call606;
  var if600 = call606;
}
  lineNumber = 200
  var var_myc = var_auto__95__count;
  lineNumber = 200;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_myc)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'myc' to be of type Dynamic"))
  lineNumber = 202
  lineNumber = 201
  var opresult608 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult608;
  lineNumber = 202
  lineNumber = 1
  lineNumber = 202
  lineNumber = 1
  lineNumber = 202
  var call609 = callmethod(var_o,"name", [0]);
  var call610 = callmethod(call609,"value", [0]);
onSelf = true;
  var call611 = callmethod(this, "escapestring", [1], call610);
  var var_nm = call611;
  lineNumber = 202;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_nm)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'nm' to be of type Dynamic"))
  lineNumber = 203
  lineNumber = 1
  lineNumber = 203
  lineNumber = 1
  lineNumber = 203
  var call612 = callmethod(var_o,"name", [0]);
  var call613 = callmethod(call612,"value", [0]);
onSelf = true;
  var call614 = callmethod(this, "escapeident", [1], call613);
  var var_nmi = call614;
  lineNumber = 203;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_nmi)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'nmi' to be of type Dynamic"))
  lineNumber = 204
  var string615 = new GraceString("  ");
  var opresult617 = callmethod(string615, "++", [1], var_selfr);
  var string618 = new GraceString(".data[\"");
  var opresult620 = callmethod(opresult617, "++", [1], string618);
  var opresult622 = callmethod(opresult620, "++", [1], var_nm);
  var string623 = new GraceString("\"] = ");
  var opresult625 = callmethod(opresult622, "++", [1], string623);
  var opresult627 = callmethod(opresult625, "++", [1], var_val);
  var string628 = new GraceString(";");
  var opresult630 = callmethod(opresult627, "++", [1], string628);
onSelf = true;
  var call631 = callmethod(this, "out", [1], opresult630);
  lineNumber = 205
  var string632 = new GraceString("    var reader_");
  var opresult634 = callmethod(string632, "++", [1], var_modname);
  var string635 = new GraceString("_");
  var opresult637 = callmethod(opresult634, "++", [1], string635);
  var opresult639 = callmethod(opresult637, "++", [1], var_nmi);
  var opresult641 = callmethod(opresult639, "++", [1], var_myc);
  var string642 = new GraceString(" = function() {");
  var opresult644 = callmethod(opresult641, "++", [1], string642);
onSelf = true;
  var call645 = callmethod(this, "out", [1], opresult644);
  lineNumber = 206
  var string646 = new GraceString("    return this.data[\"");
  var opresult648 = callmethod(string646, "++", [1], var_nm);
  var string649 = new GraceString("\"];");
  var opresult651 = callmethod(opresult648, "++", [1], string649);
onSelf = true;
  var call652 = callmethod(this, "out", [1], opresult651);
  lineNumber = 207
  var string653 = new GraceString("  }");
onSelf = true;
  var call654 = callmethod(this, "out", [1], string653);
  lineNumber = 208
  lineNumber = 209
  lineNumber = 208
  var string655 = new GraceString("  ");
  var opresult657 = callmethod(string655, "++", [1], var_selfr);
  var string658 = new GraceString(".methods[\"");
  var opresult660 = callmethod(opresult657, "++", [1], string658);
  var opresult662 = callmethod(opresult660, "++", [1], var_nm);
  var string663 = new GraceString("\"] = reader_");
  var opresult665 = callmethod(opresult662, "++", [1], string663);
  var opresult667 = callmethod(opresult665, "++", [1], var_modname);
  var string668 = new GraceString("_");
  var opresult670 = callmethod(opresult667, "++", [1], string668);
  lineNumber = 209
  var opresult672 = callmethod(opresult670, "++", [1], var_nmi);
  var opresult674 = callmethod(opresult672, "++", [1], var_myc);
  var string675 = new GraceString(";");
  var opresult677 = callmethod(opresult674, "++", [1], string675);
onSelf = true;
  var call678 = callmethod(this, "out", [1], opresult677);
  lineNumber = 210
  var string679 = new GraceString("  ");
  var opresult681 = callmethod(string679, "++", [1], var_selfr);
  var string682 = new GraceString(".data[\"");
  var opresult684 = callmethod(opresult681, "++", [1], string682);
  var opresult686 = callmethod(opresult684, "++", [1], var_nm);
  var string687 = new GraceString("\"] = ");
  var opresult689 = callmethod(opresult686, "++", [1], string687);
  var opresult691 = callmethod(opresult689, "++", [1], var_val);
  var string692 = new GraceString(";");
  var opresult694 = callmethod(opresult691, "++", [1], string692);
onSelf = true;
  var call695 = callmethod(this, "out", [1], opresult694);
  lineNumber = 211
  var string696 = new GraceString("  var writer_");
  var opresult698 = callmethod(string696, "++", [1], var_modname);
  var string699 = new GraceString("_");
  var opresult701 = callmethod(opresult698, "++", [1], string699);
  var opresult703 = callmethod(opresult701, "++", [1], var_nmi);
  var opresult705 = callmethod(opresult703, "++", [1], var_myc);
  var string706 = new GraceString(" = function(argcv, o) {");
  var opresult708 = callmethod(opresult705, "++", [1], string706);
onSelf = true;
  var call709 = callmethod(this, "out", [1], opresult708);
  lineNumber = 212
  var string710 = new GraceString("    this.data[\"");
  var opresult712 = callmethod(string710, "++", [1], var_nm);
  var string713 = new GraceString("\"] = o;");
  var opresult715 = callmethod(opresult712, "++", [1], string713);
onSelf = true;
  var call716 = callmethod(this, "out", [1], opresult715);
  lineNumber = 213
  var string717 = new GraceString("  }");
onSelf = true;
  var call718 = callmethod(this, "out", [1], string717);
  lineNumber = 214
  lineNumber = 215
  lineNumber = 214
  var string719 = new GraceString("  ");
  var opresult721 = callmethod(string719, "++", [1], var_selfr);
  var string722 = new GraceString(".methods[\"");
  var opresult724 = callmethod(opresult721, "++", [1], string722);
  var opresult726 = callmethod(opresult724, "++", [1], var_nm);
  var string727 = new GraceString(":=\"] = writer_");
  var opresult729 = callmethod(opresult726, "++", [1], string727);
  var opresult731 = callmethod(opresult729, "++", [1], var_modname);
  var string732 = new GraceString("_");
  var opresult734 = callmethod(opresult731, "++", [1], string732);
  lineNumber = 215
  var opresult736 = callmethod(opresult734, "++", [1], var_nmi);
  var opresult738 = callmethod(opresult736, "++", [1], var_myc);
  var string739 = new GraceString(";");
  var opresult741 = callmethod(opresult738, "++", [1], string739);
onSelf = true;
  var call742 = callmethod(this, "out", [1], opresult741);
  lineNumber = 216
  var bool743 = new GraceBoolean(false)
  var var_isReadable = bool743;
  lineNumber = 216;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_isReadable)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'isReadable' to be of type Dynamic"))
  lineNumber = 217
  var bool744 = new GraceBoolean(false)
  var var_isWritable = bool744;
  lineNumber = 217;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_isWritable)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'isWritable' to be of type Dynamic"))
  lineNumber = 218
  lineNumber = 1
  lineNumber = 218
  var call745 = callmethod(var_o,"annotations", [0]);
  var block746 = Grace_allocObject();
  block746.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block746.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block746.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block746.methods["match"] = GraceBlock_match;
  block746.receiver = this;
  block746.className = 'block<genjs:218>';
  block746.real = function(
var_ann
) {
  sourceObject = this;
  lineNumber = 219
  lineNumber = 220
  var block748 = Grace_allocObject();
  block748.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block748.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block748.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block748.methods["match"] = GraceBlock_match;
  block748.receiver = this;
  block748.className = 'block<genjs:220>';
  block748.real = function(
) {
  sourceObject = this;
  lineNumber = 1
  lineNumber = 220
  var call749 = callmethod(var_ann,"value", [0]);
  var string750 = new GraceString("confidential");
  var opresult752 = callmethod(call749, "==", [1], string750);
  return opresult752;
};
  lineNumber = 219
  lineNumber = 1
  lineNumber = 219
  var call753 = callmethod(var_ann,"kind", [0]);
  var string754 = new GraceString("identifier");
  var opresult756 = callmethod(call753, "==", [1], string754);
  var call757 = callmethod(opresult756,"andAlso", [1], block748);
  if (Grace_isTrue(call757)) {
  lineNumber = 221
  var string758 = new GraceString("  reader_");
  var opresult760 = callmethod(string758, "++", [1], var_modname);
  var string761 = new GraceString("_");
  var opresult763 = callmethod(opresult760, "++", [1], string761);
  var opresult765 = callmethod(opresult763, "++", [1], var_nmi);
  var string766 = new GraceString("");
  var opresult768 = callmethod(opresult765, "++", [1], string766);
  var opresult770 = callmethod(opresult768, "++", [1], var_myc);
  var string771 = new GraceString(".confidential = true;");
  var opresult773 = callmethod(opresult770, "++", [1], string771);
onSelf = true;
  var call774 = callmethod(this, "out", [1], opresult773);
  lineNumber = 222
  var string775 = new GraceString("  writer_");
  var opresult777 = callmethod(string775, "++", [1], var_modname);
  var string778 = new GraceString("_");
  var opresult780 = callmethod(opresult777, "++", [1], string778);
  var opresult782 = callmethod(opresult780, "++", [1], var_nmi);
  var string783 = new GraceString("");
  var opresult785 = callmethod(opresult782, "++", [1], string783);
  var opresult787 = callmethod(opresult785, "++", [1], var_myc);
  var string788 = new GraceString(".confidential = true;");
  var opresult790 = callmethod(opresult787, "++", [1], string788);
onSelf = true;
  var call791 = callmethod(this, "out", [1], opresult790);
  var if747 = call791;
}
  lineNumber = 224
  lineNumber = 225
  var block793 = Grace_allocObject();
  block793.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block793.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block793.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block793.methods["match"] = GraceBlock_match;
  block793.receiver = this;
  block793.className = 'block<genjs:225>';
  block793.real = function(
) {
  sourceObject = this;
  lineNumber = 1
  lineNumber = 225
  var call794 = callmethod(var_ann,"value", [0]);
  var string795 = new GraceString("readable");
  var opresult797 = callmethod(call794, "==", [1], string795);
  return opresult797;
};
  lineNumber = 224
  lineNumber = 1
  lineNumber = 224
  var call798 = callmethod(var_ann,"kind", [0]);
  var string799 = new GraceString("identifier");
  var opresult801 = callmethod(call798, "==", [1], string799);
  var call802 = callmethod(opresult801,"andAlso", [1], block793);
  if (Grace_isTrue(call802)) {
  lineNumber = 227
  lineNumber = 226
  var bool803 = new GraceBoolean(true)
  var_isReadable = bool803;
  var if792 = bool803;
}
  lineNumber = 228
  lineNumber = 229
  var block805 = Grace_allocObject();
  block805.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block805.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block805.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block805.methods["match"] = GraceBlock_match;
  block805.receiver = this;
  block805.className = 'block<genjs:229>';
  block805.real = function(
) {
  sourceObject = this;
  lineNumber = 1
  lineNumber = 229
  var call806 = callmethod(var_ann,"value", [0]);
  var string807 = new GraceString("writable");
  var opresult809 = callmethod(call806, "==", [1], string807);
  return opresult809;
};
  lineNumber = 228
  lineNumber = 1
  lineNumber = 228
  var call810 = callmethod(var_ann,"kind", [0]);
  var string811 = new GraceString("identifier");
  var opresult813 = callmethod(call810, "==", [1], string811);
  var call814 = callmethod(opresult813,"andAlso", [1], block805);
  if (Grace_isTrue(call814)) {
  lineNumber = 231
  lineNumber = 230
  var bool815 = new GraceBoolean(true)
  var_isWritable = bool815;
  var if804 = bool815;
}
  return if804;
};
  var call816 = callmethod(Grace_prelude,"for()do", [1, 1], call745, block746);
  lineNumber = 233
  var call818 = callmethod(var_isReadable,"prefix!", [0]);
  if (Grace_isTrue(call818)) {
  lineNumber = 234
  var string819 = new GraceString("  reader_");
  var opresult821 = callmethod(string819, "++", [1], var_modname);
  var string822 = new GraceString("_");
  var opresult824 = callmethod(opresult821, "++", [1], string822);
  var opresult826 = callmethod(opresult824, "++", [1], var_nmi);
  var string827 = new GraceString("");
  var opresult829 = callmethod(opresult826, "++", [1], string827);
  var opresult831 = callmethod(opresult829, "++", [1], var_myc);
  var string832 = new GraceString("._private = true;");
  var opresult834 = callmethod(opresult831, "++", [1], string832);
onSelf = true;
  var call835 = callmethod(this, "out", [1], opresult834);
  var if817 = call835;
}
  lineNumber = 236
  var call837 = callmethod(var_isWritable,"prefix!", [0]);
  if (Grace_isTrue(call837)) {
  lineNumber = 237
  var string838 = new GraceString("  writer_");
  var opresult840 = callmethod(string838, "++", [1], var_modname);
  var string841 = new GraceString("_");
  var opresult843 = callmethod(opresult840, "++", [1], string841);
  var opresult845 = callmethod(opresult843, "++", [1], var_nmi);
  var string846 = new GraceString("");
  var opresult848 = callmethod(opresult845, "++", [1], string846);
  var opresult850 = callmethod(opresult848, "++", [1], var_myc);
  var string851 = new GraceString("._private = true;");
  var opresult853 = callmethod(opresult850, "++", [1], string851);
onSelf = true;
  var call854 = callmethod(this, "out", [1], opresult853);
  var if836 = call854;
}
  lineNumber = 239
  lineNumber = 1
  lineNumber = 239
  var call856 = callmethod(var_o,"dtype", [0]);
  var bool857 = new GraceBoolean(false)
  var opresult859 = callmethod(call856, "!=", [1], bool857);
  if (Grace_isTrue(opresult859)) {
  lineNumber = 240
  var string861 = new GraceString("undefined");
  var opresult863 = callmethod(var_val, "==", [1], string861);
  if (Grace_isTrue(opresult863)) {
  lineNumber = 242
  lineNumber = 241
  var bool864 = new GraceBoolean(true)
  return bool864
  var if860 = undefined;
}
  lineNumber = 244
  lineNumber = 243
  lineNumber = 1
  lineNumber = 243
  var call865 = callmethod(var_o,"line", [0]);
  var_linenum = call865;
  lineNumber = 244
  var string866 = new GraceString("  lineNumber = ");
  var opresult868 = callmethod(string866, "++", [1], var_linenum);
  var string869 = new GraceString(";");
  var opresult871 = callmethod(opresult868, "++", [1], string869);
onSelf = true;
  var call872 = callmethod(this, "out", [1], opresult871);
  lineNumber = 245
  var string873 = new GraceString("  if (!Grace_isTrue(callmethod(");
  lineNumber = 1
  lineNumber = 245
  var call874 = callmethod(var_o,"dtype", [0]);
onSelf = true;
  var call875 = callmethod(this, "compilenode", [1], call874);
  var opresult877 = callmethod(string873, "++", [1], call875);
  var string878 = new GraceString(", \"match\",");
  var opresult880 = callmethod(opresult877, "++", [1], string878);
onSelf = true;
  var call881 = callmethod(this, "out", [1], opresult880);
  lineNumber = 246
  var string882 = new GraceString("    [1], ");
  var opresult884 = callmethod(string882, "++", [1], var_val);
  var string885 = new GraceString(")))");
  var opresult887 = callmethod(opresult884, "++", [1], string885);
onSelf = true;
  var call888 = callmethod(this, "out", [1], opresult887);
  lineNumber = 247
  var string889 = new GraceString("      throw new GraceExceptionPacket(TypeErrorObject,");
onSelf = true;
  var call890 = callmethod(this, "out", [1], string889);
  lineNumber = 248
  var string891 = new GraceString("            new GraceString(\"expected \"");
onSelf = true;
  var call892 = callmethod(this, "out", [1], string891);
  lineNumber = 249
  var string893 = new GraceString("            + \"initial value of var '");
  lineNumber = 1
  lineNumber = 249
  lineNumber = 1
  lineNumber = 249
  var call894 = callmethod(var_o,"name", [0]);
  var call895 = callmethod(call894,"value", [0]);
  var opresult897 = callmethod(string893, "++", [1], call895);
  var string898 = new GraceString("' to be of type ");
  var opresult900 = callmethod(opresult897, "++", [1], string898);
  lineNumber = 1
  lineNumber = 249
  lineNumber = 1
  lineNumber = 249
  var call901 = callmethod(var_o,"dtype", [0]);
  var call902 = callmethod(call901,"value", [0]);
  var opresult904 = callmethod(opresult900, "++", [1], call902);
  var string905 = new GraceString("\"))");
  var opresult907 = callmethod(opresult904, "++", [1], string905);
onSelf = true;
  var call908 = callmethod(this, "out", [1], opresult907);
  var if855 = call908;
}
  return if855
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func598.paramCounts = [3];
  func598.variableArities = [false];
  this.methods["compileobjvardec"] = func598;
  lineNumber = 252
var func909 = function(argcv) {    // method compileclass(1)
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func909.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method compileclass(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 253
  lineNumber = 1
  lineNumber = 253
  var call910 = callmethod(var_o,"signature", [0]);
  var var_signature = call910;
  lineNumber = 253;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_signature)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'signature' to be of type Dynamic"))
  lineNumber = 254
  lineNumber = 1
  lineNumber = 254
  var call912 = callmethod(var_o,"value", [0]);
  lineNumber = 1
  lineNumber = 254
  var call913 = callmethod(var_o,"superclass", [0]);
  lineNumber = 1
  lineNumber = 254
  var call914 = callmethod(var_ast,"objectNode", [0]);
  var call915 = callmethod(call914,"new", [2], call912, call913);
  var array911 = new GraceList([
call915,
]);

  var var_mbody = array911;
  lineNumber = 254;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_mbody)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'mbody' to be of type Dynamic"))
  lineNumber = 255
  lineNumber = 1
  lineNumber = 255
  var call916 = callmethod(var_o,"constructor", [0]);
  lineNumber = 256
  var bool917 = new GraceBoolean(false)
  lineNumber = 255
  lineNumber = 1
  lineNumber = 255
  var call918 = callmethod(var_ast,"methodNode", [0]);
  var call919 = callmethod(call918,"new", [4], call916, var_signature, var_mbody, bool917);
  var var_newmeth = call919;
  lineNumber = 255;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_newmeth)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'newmeth' to be of type Dynamic"))
  lineNumber = 257
  var bool921 = new GraceBoolean(false)
  lineNumber = 1
  lineNumber = 257
  var call922 = callmethod(var_o,"generics", [0]);
  var opresult924 = callmethod(bool921, "!=", [1], call922);
  if (Grace_isTrue(opresult924)) {
  lineNumber = 259
  lineNumber = 1
  lineNumber = 258
  lineNumber = 1
  lineNumber = 258
  var call925 = callmethod(var_o,"generics", [0]);
  var call926 = callmethod(var_newmeth,"generics:=", [1], call925);
  var if920 = call926;
}
  lineNumber = 260
  var string927 = new GraceString("fresh");
  var bool928 = new GraceBoolean(true)
  lineNumber = 1
  lineNumber = 260
  var call929 = callmethod(var_newmeth,"properties", [0]);
  var call930 = callmethod(call929,"put", [2], string927, bool928);
  lineNumber = 261
  var array931 = new GraceList([
var_newmeth,
]);

  var var_obody = array931;
  lineNumber = 261;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_obody)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'obody' to be of type Dynamic"))
  lineNumber = 262
  var bool932 = new GraceBoolean(false)
  lineNumber = 1
  lineNumber = 262
  var call933 = callmethod(var_ast,"objectNode", [0]);
  var call934 = callmethod(call933,"new", [2], var_obody, bool932);
  var var_cobj = call934;
  lineNumber = 262;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_cobj)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'cobj' to be of type Dynamic"))
  lineNumber = 263
  lineNumber = 1
  lineNumber = 263
  var call935 = callmethod(var_o,"name", [0]);
  var bool936 = new GraceBoolean(false)
  lineNumber = 1
  lineNumber = 263
  var call937 = callmethod(var_ast,"defDecNode", [0]);
  var call938 = callmethod(call937,"new", [3], call935, var_cobj, bool936);
  var var_con = call938;
  lineNumber = 263;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_con)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'con' to be of type Dynamic"))
  lineNumber = 264
  var opresult941 = callmethod(var_compilationDepth, "==", [1], new GraceNum(1));
  var block942 = Grace_allocObject();
  block942.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block942.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block942.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block942.methods["match"] = GraceBlock_match;
  block942.receiver = this;
  block942.className = 'block<genjs:264>';
  block942.real = function(
) {
  sourceObject = this;
  lineNumber = 1
  lineNumber = 264
  lineNumber = 1
  lineNumber = 264
  var call943 = callmethod(var_o,"name", [0]);
  var call944 = callmethod(call943,"kind", [0]);
  var string945 = new GraceString("generic");
  var opresult947 = callmethod(call944, "!=", [1], string945);
  return opresult947;
};
  var opresult949 = callmethod(opresult941, "&&", [1], block942);
  if (Grace_isTrue(opresult949)) {
  lineNumber = 265
  lineNumber = 1
  lineNumber = 265
  var call950 = callmethod(var_o,"name", [0]);
  lineNumber = 1
  lineNumber = 265
  lineNumber = 1
  lineNumber = 265
  var call952 = callmethod(var_o,"name", [0]);
  var call953 = callmethod(call952,"value", [0]);
  lineNumber = 1
  lineNumber = 265
  var call954 = callmethod(var_ast,"signaturePart", [0]);
  var call955 = callmethod(call954,"new", [1], call953);
  var array951 = new GraceList([
call955,
]);

  lineNumber = 266
  lineNumber = 1
  lineNumber = 266
  var call957 = callmethod(var_o,"name", [0]);
  var array956 = new GraceList([
call957,
]);

  var bool958 = new GraceBoolean(false)
  lineNumber = 265
  lineNumber = 1
  lineNumber = 265
  var call959 = callmethod(var_ast,"methodNode", [0]);
  var call960 = callmethod(call959,"new", [4], call950, array951, array956, bool958);
  var var_meth = call960;
  lineNumber = 265;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_meth)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'meth' to be of type Dynamic"))
  lineNumber = 267
onSelf = true;
  var call961 = callmethod(this, "compilenode", [1], var_meth);
  var if939 = call961;
}
  lineNumber = 269
  lineNumber = 1
  lineNumber = 269
  var call962 = callmethod(var_o,"annotations", [0]);
  var block963 = Grace_allocObject();
  block963.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block963.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block963.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block963.methods["match"] = GraceBlock_match;
  block963.receiver = this;
  block963.className = 'block<genjs:269>';
  block963.real = function(
var_a
) {
  sourceObject = this;
  lineNumber = 270
  lineNumber = 1
  lineNumber = 270
  var call964 = callmethod(var_con,"annotations", [0]);
  var call965 = callmethod(call964,"push", [1], var_a);
  return call965;
};
  var call966 = callmethod(Grace_prelude,"for()do", [1, 1], call962, block963);
  lineNumber = 272
  lineNumber = 1
  lineNumber = 272
onSelf = true;
  var call967 = callmethod(this, "compilenode", [1], var_con);
  var call968 = callmethod(var_o,"register:=", [1], call967);
  return call968
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func909.paramCounts = [1];
  func909.variableArities = [false];
  this.methods["compileclass"] = func909;
  lineNumber = 274
var func969 = function(argcv) {    // method compileobject(3)
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var var_outerRef = arguments[curarg];
  curarg++;
  var var_inheritingObject = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func969.paramCounts[0]) // != 3 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method compileobject(3) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 275
  var var_origInBlock = var_inBlock;
  lineNumber = 275;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_origInBlock)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'origInBlock' to be of type Dynamic"))
  lineNumber = 277
  lineNumber = 276
  var bool970 = new GraceBoolean(false)
  var_inBlock = bool970;
  lineNumber = 277
  var var_myc = var_auto__95__count;
  lineNumber = 277;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_myc)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'myc' to be of type Dynamic"))
  lineNumber = 279
  lineNumber = 278
  var opresult972 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult972;
  lineNumber = 279
  lineNumber = 280
  lineNumber = 279
  var string973 = new GraceString("obj");
  var opresult975 = callmethod(string973, "++", [1], var_myc);
  var var_selfr = opresult975;
  lineNumber = 279;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_selfr)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'selfr' to be of type Dynamic"))
  lineNumber = 280
  var bool976 = new GraceBoolean(false)
  var var_superobj = bool976;
  lineNumber = 280;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_superobj)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'superobj' to be of type Dynamic"))
  lineNumber = 281
  lineNumber = 1
  lineNumber = 281
  var call977 = callmethod(var_o,"value", [0]);
  var block978 = Grace_allocObject();
  block978.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block978.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block978.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block978.methods["match"] = GraceBlock_match;
  block978.receiver = this;
  block978.className = 'block<genjs:281>';
  block978.real = function(
var_e
) {
  sourceObject = this;
  lineNumber = 282
  lineNumber = 1
  lineNumber = 282
  var call980 = callmethod(var_e,"kind", [0]);
  var string981 = new GraceString("inherits");
  var opresult983 = callmethod(call980, "==", [1], string981);
  if (Grace_isTrue(opresult983)) {
  lineNumber = 284
  lineNumber = 283
  lineNumber = 1
  lineNumber = 283
  var call984 = callmethod(var_e,"value", [0]);
  var_superobj = call984;
  var if979 = call984;
}
  return if979;
};
  var call985 = callmethod(Grace_prelude,"for()do", [1, 1], call977, block978);
  lineNumber = 286
  var string986 = new GraceString("  var ");
  var opresult988 = callmethod(string986, "++", [1], var_selfr);
  var string989 = new GraceString(" = Grace_allocObject();");
  var opresult991 = callmethod(opresult988, "++", [1], string989);
onSelf = true;
  var call992 = callmethod(this, "out", [1], opresult991);
  lineNumber = 287
  if (Grace_isTrue(var_inheritingObject)) {
  lineNumber = 288
  var string994 = new GraceString("  var inho");
  var opresult996 = callmethod(string994, "++", [1], var_myc);
  var string997 = new GraceString(" = inheritingObject;");
  var opresult999 = callmethod(opresult996, "++", [1], string997);
onSelf = true;
  var call1000 = callmethod(this, "out", [1], opresult999);
  lineNumber = 289
  var string1001 = new GraceString("  while (inho");
  var opresult1003 = callmethod(string1001, "++", [1], var_myc);
  var string1004 = new GraceString(".superobj) inho");
  var opresult1006 = callmethod(opresult1003, "++", [1], string1004);
  var opresult1008 = callmethod(opresult1006, "++", [1], var_myc);
  var string1009 = new GraceString(" = inho");
  var opresult1011 = callmethod(opresult1008, "++", [1], string1009);
  var opresult1013 = callmethod(opresult1011, "++", [1], var_myc);
  var string1014 = new GraceString(".superobj;");
  var opresult1016 = callmethod(opresult1013, "++", [1], string1014);
onSelf = true;
  var call1017 = callmethod(this, "out", [1], opresult1016);
  lineNumber = 290
  var string1018 = new GraceString("  inho");
  var opresult1020 = callmethod(string1018, "++", [1], var_myc);
  var string1021 = new GraceString(".superobj = ");
  var opresult1023 = callmethod(opresult1020, "++", [1], string1021);
  var opresult1025 = callmethod(opresult1023, "++", [1], var_selfr);
  var string1026 = new GraceString(";");
  var opresult1028 = callmethod(opresult1025, "++", [1], string1026);
onSelf = true;
  var call1029 = callmethod(this, "out", [1], opresult1028);
  lineNumber = 291
  var string1030 = new GraceString("  ");
  var opresult1032 = callmethod(string1030, "++", [1], var_selfr);
  var string1033 = new GraceString(".data = inheritingObject.data;");
  var opresult1035 = callmethod(opresult1032, "++", [1], string1033);
onSelf = true;
  var call1036 = callmethod(this, "out", [1], opresult1035);
  var if993 = call1036;
}
  lineNumber = 293
onSelf = true;
  var call1037 = callmethod(this, "compileobjouter", [2], var_selfr, var_outerRef);
  lineNumber = 294
  var string1038 = new GraceString("function obj_init_");
  var opresult1040 = callmethod(string1038, "++", [1], var_myc);
  var string1041 = new GraceString("() {");
  var opresult1043 = callmethod(opresult1040, "++", [1], string1041);
onSelf = true;
  var call1044 = callmethod(this, "out", [1], opresult1043);
  lineNumber = 295
  var string1045 = new GraceString("  var origSuperDepth = superDepth;");
onSelf = true;
  var call1046 = callmethod(this, "out", [1], string1045);
  lineNumber = 296
  var string1047 = new GraceString("  superDepth = ");
  var opresult1049 = callmethod(string1047, "++", [1], var_selfr);
  var string1050 = new GraceString(";");
  var opresult1052 = callmethod(opresult1049, "++", [1], string1050);
onSelf = true;
  var call1053 = callmethod(this, "out", [1], opresult1052);
  lineNumber = 297
  var var_pos = new GraceNum(0);
  lineNumber = 297;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_pos)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'pos' to be of type Dynamic"))
  lineNumber = 298
  lineNumber = 1
  lineNumber = 298
  var call1054 = callmethod(var_o,"value", [0]);
  var block1055 = Grace_allocObject();
  block1055.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1055.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1055.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1055.methods["match"] = GraceBlock_match;
  block1055.receiver = this;
  block1055.className = 'block<genjs:298>';
  block1055.real = function(
var_e
) {
  sourceObject = this;
  lineNumber = 299
  lineNumber = 1
  lineNumber = 299
  var call1057 = callmethod(var_e,"kind", [0]);
  var string1058 = new GraceString("method");
  var opresult1060 = callmethod(call1057, "==", [1], string1058);
  if (Grace_isTrue(opresult1060)) {
  lineNumber = 300
onSelf = true;
  var call1061 = callmethod(this, "compilemethod", [2], var_e, var_selfr);
  var if1056 = call1061;
}
  return if1056;
};
  var call1062 = callmethod(Grace_prelude,"for()do", [1, 1], call1054, block1055);
  lineNumber = 303
  lineNumber = 1
  lineNumber = 303
  var call1063 = callmethod(var_o,"value", [0]);
  var block1064 = Grace_allocObject();
  block1064.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1064.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1064.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1064.methods["match"] = GraceBlock_match;
  block1064.receiver = this;
  block1064.className = 'block<genjs:303>';
  block1064.real = function(
var_e
) {
  sourceObject = this;
  lineNumber = 304
  var string1065 = new GraceString("  sourceObject = ");
  var opresult1067 = callmethod(string1065, "++", [1], var_selfr);
  var string1068 = new GraceString(";");
  var opresult1070 = callmethod(opresult1067, "++", [1], string1068);
onSelf = true;
  var call1071 = callmethod(this, "out", [1], opresult1070);
  lineNumber = 305
  lineNumber = 1
  lineNumber = 305
  var call1073 = callmethod(var_e,"kind", [0]);
  var string1074 = new GraceString("method");
  var opresult1076 = callmethod(call1073, "==", [1], string1074);
  if (Grace_isTrue(opresult1076)) {
  var if1072 = undefined;
  } else {
  lineNumber = 310
  lineNumber = 306
  lineNumber = 1
  lineNumber = 306
  var call1078 = callmethod(var_e,"kind", [0]);
  var string1079 = new GraceString("vardec");
  var opresult1081 = callmethod(call1078, "==", [1], string1079);
  if (Grace_isTrue(opresult1081)) {
  lineNumber = 307
onSelf = true;
  var call1082 = callmethod(this, "compileobjvardec", [3], var_e, var_selfr, var_pos);
  lineNumber = 308
  var string1083 = new GraceString("");
  var opresult1085 = callmethod(string1083, "++", [1], var_selfr);
  var string1086 = new GraceString(".mutable = true;");
  var opresult1088 = callmethod(opresult1085, "++", [1], string1086);
onSelf = true;
  var call1089 = callmethod(this, "out", [1], opresult1088);
  lineNumber = 310
  lineNumber = 309
  var opresult1091 = callmethod(var_pos, "+", [1], new GraceNum(1));
  var_pos = opresult1091;
  var if1077 = opresult1091;
  } else {
  lineNumber = 313
  lineNumber = 310
  lineNumber = 1
  lineNumber = 310
  var call1093 = callmethod(var_e,"kind", [0]);
  var string1094 = new GraceString("defdec");
  var opresult1096 = callmethod(call1093, "==", [1], string1094);
  if (Grace_isTrue(opresult1096)) {
  lineNumber = 311
onSelf = true;
  var call1097 = callmethod(this, "compileobjdefdec", [3], var_e, var_selfr, var_pos);
  lineNumber = 313
  lineNumber = 312
  var opresult1099 = callmethod(var_pos, "+", [1], new GraceNum(1));
  var_pos = opresult1099;
  var if1092 = opresult1099;
  } else {
  lineNumber = 316
  lineNumber = 313
  lineNumber = 1
  lineNumber = 313
  var call1101 = callmethod(var_e,"kind", [0]);
  var string1102 = new GraceString("type");
  var opresult1104 = callmethod(call1101, "==", [1], string1102);
  if (Grace_isTrue(opresult1104)) {
  lineNumber = 314
onSelf = true;
  var call1105 = callmethod(this, "compileobjtype", [3], var_e, var_selfr, var_pos);
  lineNumber = 316
  lineNumber = 315
  var opresult1107 = callmethod(var_pos, "+", [1], new GraceNum(1));
  var_pos = opresult1107;
  var if1100 = opresult1107;
  } else {
  lineNumber = 318
  lineNumber = 316
  lineNumber = 1
  lineNumber = 316
  var call1109 = callmethod(var_e,"kind", [0]);
  var string1110 = new GraceString("object");
  var opresult1112 = callmethod(call1109, "==", [1], string1110);
  if (Grace_isTrue(opresult1112)) {
  lineNumber = 317
  var bool1113 = new GraceBoolean(false)
onSelf = true;
  var call1114 = callmethod(this, "compileobject", [3], var_e, var_selfr, bool1113);
  var if1108 = call1114;
  } else {
  lineNumber = 322
  lineNumber = 318
  lineNumber = 1
  lineNumber = 318
  var call1116 = callmethod(var_e,"kind", [0]);
  var string1117 = new GraceString("inherits");
  var opresult1119 = callmethod(call1116, "==", [1], string1117);
  if (Grace_isTrue(opresult1119)) {
  lineNumber = 319
  lineNumber = 1
  lineNumber = 319
  var call1120 = callmethod(var_e,"value", [0]);
onSelf = true;
  var call1121 = callmethod(this, "compilenode", [1], call1120);
  var var_so = call1121;
  lineNumber = 319;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_so)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'so' to be of type Dynamic"))
  lineNumber = 320
  var string1122 = new GraceString("  ");
  var opresult1124 = callmethod(string1122, "++", [1], var_selfr);
  var string1125 = new GraceString(".superobj = ");
  var opresult1127 = callmethod(opresult1124, "++", [1], string1125);
  var opresult1129 = callmethod(opresult1127, "++", [1], var_so);
  var string1130 = new GraceString(";");
  var opresult1132 = callmethod(opresult1129, "++", [1], string1130);
onSelf = true;
  var call1133 = callmethod(this, "out", [1], opresult1132);
  lineNumber = 321
  var string1134 = new GraceString("  ");
  var opresult1136 = callmethod(string1134, "++", [1], var_selfr);
  var string1137 = new GraceString("._value = ");
  var opresult1139 = callmethod(opresult1136, "++", [1], string1137);
  var opresult1141 = callmethod(opresult1139, "++", [1], var_so);
  var string1142 = new GraceString("._value;");
  var opresult1144 = callmethod(opresult1141, "++", [1], string1142);
onSelf = true;
  var call1145 = callmethod(this, "out", [1], opresult1144);
  var if1115 = call1145;
  } else {
  lineNumber = 323
onSelf = true;
  var call1146 = callmethod(this, "compilenode", [1], var_e);
  var if1115 = call1146;
}
  var if1108 = if1115;
}
  var if1100 = if1108;
}
  var if1092 = if1100;
}
  var if1077 = if1092;
}
  var if1072 = if1077;
}
  return if1072;
};
  var call1147 = callmethod(Grace_prelude,"for()do", [1, 1], call1063, block1064);
  lineNumber = 326
  var string1148 = new GraceString("  superDepth = origSuperDepth;");
onSelf = true;
  var call1149 = callmethod(this, "out", [1], string1148);
  lineNumber = 327
  var string1150 = new GraceString("}");
onSelf = true;
  var call1151 = callmethod(this, "out", [1], string1150);
  lineNumber = 328
  if (Grace_isTrue(var_inheritingObject)) {
  lineNumber = 329
  var string1153 = new GraceString("obj_init_");
  var opresult1155 = callmethod(string1153, "++", [1], var_myc);
  var string1156 = new GraceString(".apply(inheritingObject, []);");
  var opresult1158 = callmethod(opresult1155, "++", [1], string1156);
onSelf = true;
  var call1159 = callmethod(this, "out", [1], opresult1158);
  var if1152 = call1159;
  } else {
  lineNumber = 331
  var string1160 = new GraceString("obj_init_");
  var opresult1162 = callmethod(string1160, "++", [1], var_myc);
  var string1163 = new GraceString(".apply(");
  var opresult1165 = callmethod(opresult1162, "++", [1], string1163);
  var opresult1167 = callmethod(opresult1165, "++", [1], var_selfr);
  var string1168 = new GraceString(", []);");
  var opresult1170 = callmethod(opresult1167, "++", [1], string1168);
onSelf = true;
  var call1171 = callmethod(this, "out", [1], opresult1170);
  var if1152 = call1171;
}
  lineNumber = 334
  lineNumber = 1
  lineNumber = 333
  var call1172 = callmethod(var_o,"register:=", [1], var_selfr);
  lineNumber = 335
  lineNumber = 334
  var_inBlock = var_origInBlock;
  return var_origInBlock
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func969.paramCounts = [3];
  func969.variableArities = [false];
  this.methods["compileobject"] = func969;
  lineNumber = 336
var func1173 = function(argcv) {    // method compileblock(1)
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func1173.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method compileblock(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 337
  var var_origInBlock = var_inBlock;
  lineNumber = 337;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_origInBlock)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'origInBlock' to be of type Dynamic"))
  lineNumber = 339
  lineNumber = 338
  var bool1174 = new GraceBoolean(true)
  var_inBlock = bool1174;
  lineNumber = 339
  var var_myc = var_auto__95__count;
  lineNumber = 339;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_myc)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'myc' to be of type Dynamic"))
  lineNumber = 341
  lineNumber = 340
  var opresult1176 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult1176;
  lineNumber = 341
  var string1177 = new GraceString("  var block");
  var opresult1179 = callmethod(string1177, "++", [1], var_myc);
  var string1180 = new GraceString(" = Grace_allocObject();");
  var opresult1182 = callmethod(opresult1179, "++", [1], string1180);
onSelf = true;
  var call1183 = callmethod(this, "out", [1], opresult1182);
  lineNumber = 342
  var string1184 = new GraceString("  block");
  var opresult1186 = callmethod(string1184, "++", [1], var_myc);
  var string1187 = new GraceString(".methods[\"apply\"] = function() {");
  var opresult1189 = callmethod(opresult1186, "++", [1], string1187);
onSelf = true;
  var call1190 = callmethod(this, "out", [1], opresult1189);
  lineNumber = 343
  var string1191 = new GraceString("    var args = Array.prototype.slice.call(arguments, 1);");
onSelf = true;
  var call1192 = callmethod(this, "out", [1], string1191);
  lineNumber = 344
  var string1193 = new GraceString("    return this.real.apply(this.receiver, args);");
onSelf = true;
  var call1194 = callmethod(this, "out", [1], string1193);
  lineNumber = 345
  var string1195 = new GraceString("  }");
onSelf = true;
  var call1196 = callmethod(this, "out", [1], string1195);
  lineNumber = 346
  var string1197 = new GraceString("  block");
  var opresult1199 = callmethod(string1197, "++", [1], var_myc);
  var string1200 = new GraceString(".methods[\"applyIndirectly\"] = function(argcv, a) {");
  var opresult1202 = callmethod(opresult1199, "++", [1], string1200);
onSelf = true;
  var call1203 = callmethod(this, "out", [1], opresult1202);
  lineNumber = 347
  var string1204 = new GraceString("    return this.real.apply(this.receiver, a._value);");
onSelf = true;
  var call1205 = callmethod(this, "out", [1], string1204);
  lineNumber = 348
  var string1206 = new GraceString("  }");
onSelf = true;
  var call1207 = callmethod(this, "out", [1], string1206);
  lineNumber = 349
  var string1208 = new GraceString("  block");
  var opresult1210 = callmethod(string1208, "++", [1], var_myc);
  var string1211 = new GraceString(".methods[\"outer\"] = function() {");
  var opresult1213 = callmethod(opresult1210, "++", [1], string1211);
onSelf = true;
  var call1214 = callmethod(this, "out", [1], opresult1213);
  lineNumber = 350
  var string1215 = new GraceString("    return callmethod(this.receiver, 'outer', [0]);");
onSelf = true;
  var call1216 = callmethod(this, "out", [1], string1215);
  lineNumber = 351
  var string1217 = new GraceString("  }");
onSelf = true;
  var call1218 = callmethod(this, "out", [1], string1217);
  lineNumber = 352
  var bool1220 = new GraceBoolean(false)
  lineNumber = 1
  lineNumber = 352
  var call1221 = callmethod(var_o,"matchingPattern", [0]);
  var opresult1223 = callmethod(bool1220, "!=", [1], call1221);
  if (Grace_isTrue(opresult1223)) {
  lineNumber = 353
  lineNumber = 1
  lineNumber = 353
  var call1224 = callmethod(var_o,"matchingPattern", [0]);
onSelf = true;
  var call1225 = callmethod(this, "compilenode", [1], call1224);
  var var_pat = call1225;
  lineNumber = 353;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_pat)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'pat' to be of type Dynamic"))
  lineNumber = 354
  var string1226 = new GraceString("  block");
  var opresult1228 = callmethod(string1226, "++", [1], var_myc);
  var string1229 = new GraceString(".pattern = ");
  var opresult1231 = callmethod(opresult1228, "++", [1], string1229);
  var opresult1233 = callmethod(opresult1231, "++", [1], var_pat);
  var string1234 = new GraceString(";");
  var opresult1236 = callmethod(opresult1233, "++", [1], string1234);
onSelf = true;
  var call1237 = callmethod(this, "out", [1], opresult1236);
  var if1219 = call1237;
}
  lineNumber = 356
  var string1238 = new GraceString("  block");
  var opresult1240 = callmethod(string1238, "++", [1], var_myc);
  var string1241 = new GraceString(".methods[\"match\"] = GraceBlock_match;");
  var opresult1243 = callmethod(opresult1240, "++", [1], string1241);
onSelf = true;
  var call1244 = callmethod(this, "out", [1], opresult1243);
  lineNumber = 357
  var string1245 = new GraceString("  block");
  var opresult1247 = callmethod(string1245, "++", [1], var_myc);
  var string1248 = new GraceString(".receiver = this;");
  var opresult1250 = callmethod(opresult1247, "++", [1], string1248);
onSelf = true;
  var call1251 = callmethod(this, "out", [1], opresult1250);
  lineNumber = 358
  var string1252 = new GraceString("  block");
  var opresult1254 = callmethod(string1252, "++", [1], var_myc);
  var string1255 = new GraceString(".className = 'block<");
  var opresult1257 = callmethod(opresult1254, "++", [1], string1255);
  var opresult1259 = callmethod(opresult1257, "++", [1], var_modname);
  var string1260 = new GraceString(":");
  var opresult1262 = callmethod(opresult1259, "++", [1], string1260);
  lineNumber = 1
  lineNumber = 358
  var call1263 = callmethod(var_o,"line", [0]);
  var opresult1265 = callmethod(opresult1262, "++", [1], call1263);
  var string1266 = new GraceString(">';");
  var opresult1268 = callmethod(opresult1265, "++", [1], string1266);
onSelf = true;
  var call1269 = callmethod(this, "out", [1], opresult1268);
  lineNumber = 359
  var string1270 = new GraceString("  block");
  var opresult1272 = callmethod(string1270, "++", [1], var_myc);
  var string1273 = new GraceString(".real = function(");
  var opresult1275 = callmethod(opresult1272, "++", [1], string1273);
onSelf = true;
  var call1276 = callmethod(this, "out", [1], opresult1275);
  lineNumber = 360
  var bool1277 = new GraceBoolean(true)
  var var_first = bool1277;
  lineNumber = 360;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_first)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'first' to be of type Dynamic"))
  lineNumber = 361
  lineNumber = 1
  lineNumber = 361
  var call1278 = callmethod(var_o,"params", [0]);
  var block1279 = Grace_allocObject();
  block1279.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1279.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1279.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1279.methods["match"] = GraceBlock_match;
  block1279.receiver = this;
  block1279.className = 'block<genjs:361>';
  block1279.real = function(
var_p
) {
  sourceObject = this;
  lineNumber = 362
  lineNumber = 1
  lineNumber = 362
  var call1281 = callmethod(var_first,"not", [0]);
  if (Grace_isTrue(call1281)) {
  lineNumber = 363
  var string1282 = new GraceString(",");
onSelf = true;
  var call1283 = callmethod(this, "out", [1], string1282);
  var if1280 = call1283;
}
  lineNumber = 366
  lineNumber = 365
  var bool1284 = new GraceBoolean(false)
  var_first = bool1284;
  lineNumber = 366
  lineNumber = 1
  lineNumber = 366
  var call1285 = callmethod(var_p,"value", [0]);
onSelf = true;
  var call1286 = callmethod(this, "varf", [1], call1285);
onSelf = true;
  var call1287 = callmethod(this, "out", [1], call1286);
  return call1287;
};
  var call1288 = callmethod(Grace_prelude,"for()do", [1, 1], call1278, block1279);
  lineNumber = 368
  var string1289 = new GraceString(") {");
onSelf = true;
  var call1290 = callmethod(this, "out", [1], string1289);
  lineNumber = 369
  var string1291 = new GraceString("  sourceObject = this;");
onSelf = true;
  var call1292 = callmethod(this, "out", [1], string1291);
  lineNumber = 370
  var string1293 = new GraceString("undefined");
  var var_ret = string1293;
  lineNumber = 370;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_ret)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'ret' to be of type Dynamic"))
  lineNumber = 371
  lineNumber = 1
  lineNumber = 371
  var call1294 = callmethod(var_o,"body", [0]);
  var block1295 = Grace_allocObject();
  block1295.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1295.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1295.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1295.methods["match"] = GraceBlock_match;
  block1295.receiver = this;
  block1295.className = 'block<genjs:371>';
  block1295.real = function(
var_l
) {
  sourceObject = this;
  lineNumber = 372
onSelf = true;
  var call1296 = callmethod(this, "compilenode", [1], var_l);
  var_ret = call1296;
  return call1296;
};
  var call1297 = callmethod(Grace_prelude,"for()do", [1, 1], call1294, block1295);
  lineNumber = 374
  var string1298 = new GraceString("  return ");
  var opresult1300 = callmethod(string1298, "++", [1], var_ret);
  var string1301 = new GraceString(";");
  var opresult1303 = callmethod(opresult1300, "++", [1], string1301);
onSelf = true;
  var call1304 = callmethod(this, "out", [1], opresult1303);
  lineNumber = 375
  var string1305 = new GraceString("};");
onSelf = true;
  var call1306 = callmethod(this, "out", [1], string1305);
  lineNumber = 377
  lineNumber = 1
  lineNumber = 377
  lineNumber = 376
  var string1307 = new GraceString("block");
  var opresult1309 = callmethod(string1307, "++", [1], var_myc);
  var call1310 = callmethod(var_o,"register:=", [1], opresult1309);
  lineNumber = 378
  lineNumber = 377
  var_inBlock = var_origInBlock;
  return var_origInBlock
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func1173.paramCounts = [1];
  func1173.variableArities = [false];
  this.methods["compileblock"] = func1173;
  lineNumber = 379
var func1311 = function(argcv) {    // method compiletype(1)
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func1311.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method compiletype(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 380
  var var_myc = var_auto__95__count;
  lineNumber = 380;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_myc)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'myc' to be of type Dynamic"))
  lineNumber = 382
  lineNumber = 381
  var opresult1313 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult1313;
  lineNumber = 382
  lineNumber = 1
  lineNumber = 382
  var call1314 = callmethod(var_o,"value", [0]);
onSelf = true;
  var call1315 = callmethod(this, "escapestring", [1], call1314);
  var var_escName = call1315;
  lineNumber = 382;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_escName)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'escName' to be of type Dynamic"))
  lineNumber = 383
  lineNumber = 1
  lineNumber = 383
  var call1316 = callmethod(var_o,"value", [0]);
onSelf = true;
  var call1317 = callmethod(this, "escapeident", [1], call1316);
  var var_idName = call1317;
  lineNumber = 383;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_idName)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'idName' to be of type Dynamic"))
  lineNumber = 384
  var string1318 = new GraceString("var type");
  var opresult1320 = callmethod(string1318, "++", [1], var_myc);
  var string1321 = new GraceString(" = new GraceType(\"");
  var opresult1323 = callmethod(opresult1320, "++", [1], string1321);
  var opresult1325 = callmethod(opresult1323, "++", [1], var_escName);
  var string1326 = new GraceString("\");");
  var opresult1328 = callmethod(opresult1325, "++", [1], string1326);
onSelf = true;
  var call1329 = callmethod(this, "out", [1], opresult1328);
  lineNumber = 385
  lineNumber = 1
  lineNumber = 385
  var call1331 = callmethod(var_o,"anonymous", [0]);
  var call1332 = callmethod(call1331,"prefix!", [0]);
  if (Grace_isTrue(call1332)) {
  lineNumber = 386
  var string1333 = new GraceString("var var_");
  var opresult1335 = callmethod(string1333, "++", [1], var_idName);
  var string1336 = new GraceString(" = type");
  var opresult1338 = callmethod(opresult1335, "++", [1], string1336);
  var opresult1340 = callmethod(opresult1338, "++", [1], var_myc);
  var string1341 = new GraceString(";");
  var opresult1343 = callmethod(opresult1340, "++", [1], string1341);
onSelf = true;
  var call1344 = callmethod(this, "out", [1], opresult1343);
  var if1330 = call1344;
}
  lineNumber = 388
  lineNumber = 1
  lineNumber = 388
  var call1345 = callmethod(var_o,"methods", [0]);
  var block1346 = Grace_allocObject();
  block1346.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1346.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1346.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1346.methods["match"] = GraceBlock_match;
  block1346.receiver = this;
  block1346.className = 'block<genjs:388>';
  block1346.real = function(
var_meth
) {
  sourceObject = this;
  lineNumber = 389
  lineNumber = 1
  lineNumber = 389
  var call1347 = callmethod(var_meth,"value", [0]);
onSelf = true;
  var call1348 = callmethod(this, "escapestring", [1], call1347);
  var var_mnm = call1348;
  lineNumber = 389;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_mnm)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'mnm' to be of type Dynamic"))
  lineNumber = 390
  var string1349 = new GraceString("type");
  var opresult1351 = callmethod(string1349, "++", [1], var_myc);
  var string1352 = new GraceString(".typeMethods.push(\"");
  var opresult1354 = callmethod(opresult1351, "++", [1], string1352);
  var opresult1356 = callmethod(opresult1354, "++", [1], var_mnm);
  var string1357 = new GraceString("\");");
  var opresult1359 = callmethod(opresult1356, "++", [1], string1357);
onSelf = true;
  var call1360 = callmethod(this, "out", [1], opresult1359);
  return call1360;
};
  var call1361 = callmethod(Grace_prelude,"for()do", [1, 1], call1345, block1346);
  lineNumber = 392
  var opresult1364 = callmethod(var_compilationDepth, "==", [1], new GraceNum(1));
  if (Grace_isTrue(opresult1364)) {
  lineNumber = 393
  lineNumber = 1
  lineNumber = 393
  var call1365 = callmethod(var_o,"value", [0]);
  var bool1366 = new GraceBoolean(false)
  lineNumber = 1
  lineNumber = 393
  var call1367 = callmethod(var_ast,"identifierNode", [0]);
  var call1368 = callmethod(call1367,"new", [2], call1365, bool1366);
  var var_idd = call1368;
  lineNumber = 393;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_idd)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'idd' to be of type Dynamic"))
  lineNumber = 394
  lineNumber = 1
  lineNumber = 394
  var call1370 = callmethod(var_o,"value", [0]);
  lineNumber = 1
  lineNumber = 394
  var call1371 = callmethod(var_ast,"signaturePart", [0]);
  var call1372 = callmethod(call1371,"new", [1], call1370);
  var array1369 = new GraceList([
call1372,
]);

  lineNumber = 395
  var array1373 = new GraceList([
var_idd,
]);

  var bool1374 = new GraceBoolean(false)
  lineNumber = 394
  lineNumber = 1
  lineNumber = 394
  var call1375 = callmethod(var_ast,"methodNode", [0]);
  var call1376 = callmethod(call1375,"new", [4], var_idd, array1369, array1373, bool1374);
onSelf = true;
  var call1377 = callmethod(this, "compilenode", [1], call1376);
  var if1362 = call1377;
}
  lineNumber = 398
  lineNumber = 1
  lineNumber = 397
  var string1378 = new GraceString("type");
  var opresult1380 = callmethod(string1378, "++", [1], var_myc);
  var string1381 = new GraceString("");
  var opresult1383 = callmethod(opresult1380, "++", [1], string1381);
  var call1384 = callmethod(var_o,"register:=", [1], opresult1383);
  return call1384
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func1311.paramCounts = [1];
  func1311.variableArities = [false];
  this.methods["compiletype"] = func1311;
  lineNumber = 399
var func1385 = function(argcv) {    // method compilefor(1)
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func1385.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method compilefor(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 400
  var var_myc = var_auto__95__count;
  lineNumber = 400;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_myc)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'myc' to be of type Dynamic"))
  lineNumber = 402
  lineNumber = 401
  var opresult1387 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult1387;
  lineNumber = 402
  lineNumber = 1
  lineNumber = 402
  var call1388 = callmethod(var_o,"value", [0]);
onSelf = true;
  var call1389 = callmethod(this, "compilenode", [1], call1388);
  var var_over = call1389;
  lineNumber = 402;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_over)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'over' to be of type Dynamic"))
  lineNumber = 403
  lineNumber = 1
  lineNumber = 403
  var call1390 = callmethod(var_o,"body", [0]);
  var var_blk = call1390;
  lineNumber = 403;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_blk)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'blk' to be of type Dynamic"))
  lineNumber = 404
onSelf = true;
  var call1391 = callmethod(this, "compilenode", [1], var_blk);
  var var_blko = call1391;
  lineNumber = 404;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_blko)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'blko' to be of type Dynamic"))
  lineNumber = 405
  lineNumber = 406
  lineNumber = 405
  var string1392 = new GraceString("  var it");
  var opresult1394 = callmethod(string1392, "++", [1], var_myc);
  var string1395 = new GraceString(" = ");
  var opresult1397 = callmethod(opresult1394, "++", [1], string1395);
  var opresult1399 = callmethod(opresult1397, "++", [1], var_over);
  var string1400 = new GraceString(".methods[\"iterator\"].call(");
  var opresult1402 = callmethod(opresult1399, "++", [1], string1400);
  lineNumber = 406
  var opresult1404 = callmethod(opresult1402, "++", [1], var_over);
  var string1405 = new GraceString(", [0]);");
  var opresult1407 = callmethod(opresult1404, "++", [1], string1405);
onSelf = true;
  var call1408 = callmethod(this, "out", [1], opresult1407);
  lineNumber = 407
  lineNumber = 408
  lineNumber = 407
  var string1409 = new GraceString("while (Grace_isTrue(it");
  var opresult1411 = callmethod(string1409, "++", [1], var_myc);
  var string1412 = new GraceString(".methods[\"havemore\"].call(");
  var opresult1414 = callmethod(opresult1411, "++", [1], string1412);
  lineNumber = 408
  var string1415 = new GraceString("it");
  var opresult1417 = callmethod(opresult1414, "++", [1], string1415);
  var opresult1419 = callmethod(opresult1417, "++", [1], var_myc);
  var string1420 = new GraceString(", [0]))) {");
  var opresult1422 = callmethod(opresult1419, "++", [1], string1420);
onSelf = true;
  var call1423 = callmethod(this, "out", [1], opresult1422);
  lineNumber = 409
  lineNumber = 410
  lineNumber = 409
  var string1424 = new GraceString("    var fv");
  var opresult1426 = callmethod(string1424, "++", [1], var_myc);
  var string1427 = new GraceString(" = it");
  var opresult1429 = callmethod(opresult1426, "++", [1], string1427);
  var opresult1431 = callmethod(opresult1429, "++", [1], var_myc);
  var string1432 = new GraceString(".methods[\"next\"].call(");
  var opresult1434 = callmethod(opresult1431, "++", [1], string1432);
  lineNumber = 410
  var string1435 = new GraceString("it");
  var opresult1437 = callmethod(opresult1434, "++", [1], string1435);
  var opresult1439 = callmethod(opresult1437, "++", [1], var_myc);
  var string1440 = new GraceString(", [0]);");
  var opresult1442 = callmethod(opresult1439, "++", [1], string1440);
onSelf = true;
  var call1443 = callmethod(this, "out", [1], opresult1442);
  lineNumber = 411
  lineNumber = 412
  lineNumber = 411
  var string1444 = new GraceString("    ");
  var opresult1446 = callmethod(string1444, "++", [1], var_blko);
  var string1447 = new GraceString(".methods[\"apply\"].call(");
  var opresult1449 = callmethod(opresult1446, "++", [1], string1447);
  lineNumber = 412
  var opresult1451 = callmethod(opresult1449, "++", [1], var_blko);
  var string1452 = new GraceString(", [1], fv");
  var opresult1454 = callmethod(opresult1451, "++", [1], string1452);
  var opresult1456 = callmethod(opresult1454, "++", [1], var_myc);
  var string1457 = new GraceString(");");
  var opresult1459 = callmethod(opresult1456, "++", [1], string1457);
onSelf = true;
  var call1460 = callmethod(this, "out", [1], opresult1459);
  lineNumber = 413
  var string1461 = new GraceString("  }");
onSelf = true;
  var call1462 = callmethod(this, "out", [1], string1461);
  lineNumber = 415
  lineNumber = 1
  lineNumber = 414
  var call1463 = callmethod(var_o,"register:=", [1], var_over);
  return call1463
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func1385.paramCounts = [1];
  func1385.variableArities = [false];
  this.methods["compilefor"] = func1385;
  lineNumber = 416
var func1464 = function(argcv) {    // method compilemethod(2)
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var var_selfobj = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func1464.paramCounts[0]) // != 2 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method compilemethod(2) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 417
  var var_oldusedvars = var_usedvars;
  lineNumber = 417;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_oldusedvars)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'oldusedvars' to be of type Dynamic"))
  lineNumber = 418
  var var_olddeclaredvars = var_declaredvars;
  lineNumber = 418;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_olddeclaredvars)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'olddeclaredvars' to be of type Dynamic"))
  lineNumber = 419
  var string1465 = new GraceString("");
  lineNumber = 420
  var block1466 = Grace_allocObject();
  block1466.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1466.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1466.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1466.methods["match"] = GraceBlock_match;
  block1466.receiver = this;
  block1466.className = 'block<genjs:420>';
  block1466.real = function(
var_acc
,
var_each
) {
  sourceObject = this;
  lineNumber = 1
  lineNumber = 420
  var call1467 = callmethod(var_each,"name", [0]);
  var opresult1469 = callmethod(var_acc, "++", [1], call1467);
  lineNumber = 1
  lineNumber = 420
  lineNumber = 1
  lineNumber = 420
  var call1471 = callmethod(var_each,"params", [0]);
  var call1472 = callmethod(call1471,"size", [0]);
  var opresult1474 = callmethod(call1472, "==", [1], new GraceNum(0));
  if (Grace_isTrue(opresult1474)) {
  var string1475 = new GraceString("");
  var if1470 = string1475;
  } else {
  var string1476 = new GraceString("()");
  var if1470 = string1476;
}
  var opresult1478 = callmethod(opresult1469, "++", [1], if1470);
  return opresult1478;
};
  lineNumber = 419
  lineNumber = 1
  lineNumber = 419
  var call1479 = callmethod(var_o,"signature", [0]);
  var call1480 = callmethod(call1479,"reduce", [2], string1465, block1466);
  var var_wholeMethodName = call1480;
  lineNumber = 419;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_wholeMethodName)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'wholeMethodName' to be of type Dynamic"))
  lineNumber = 421
  var string1481 = new GraceString("");
  var var_textualSignature = string1481;
  lineNumber = 421;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_textualSignature)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'textualSignature' to be of type Dynamic"))
  lineNumber = 422
  lineNumber = 1
  lineNumber = 422
  var call1482 = callmethod(var_o,"signature", [0]);
  var block1483 = Grace_allocObject();
  block1483.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1483.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1483.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1483.methods["match"] = GraceBlock_match;
  block1483.receiver = this;
  block1483.className = 'block<genjs:422>';
  block1483.real = function(
var_part
) {
  sourceObject = this;
  lineNumber = 423
  lineNumber = 1
  lineNumber = 423
  lineNumber = 1
  lineNumber = 423
  var call1484 = callmethod(var_part,"params", [0]);
  var call1485 = callmethod(call1484,"size", [0]);
  var var_size = call1485;
  lineNumber = 423;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_size)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'size' to be of type Dynamic"))
  lineNumber = 424
  lineNumber = 425
  lineNumber = 424
  lineNumber = 1
  lineNumber = 424
  var call1486 = callmethod(var_part,"vararg", [0]);
  var bool1487 = new GraceBoolean(false)
  var opresult1489 = callmethod(call1486, "!=", [1], bool1487);
  var var_isVar = opresult1489;
  lineNumber = 424;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_isVar)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'isVar' to be of type Dynamic"))
  lineNumber = 425
  if (Grace_isTrue(var_isVar)) {
  var string1491 = new GraceString("+");
  var if1490 = string1491;
  } else {
  var string1492 = new GraceString("");
  var if1490 = string1492;
}
  var var_varChar = if1490;
  lineNumber = 425;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_varChar)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'varChar' to be of type Dynamic"))
  lineNumber = 427
  lineNumber = 426
  lineNumber = 1
  lineNumber = 426
  var call1493 = callmethod(var_part,"name", [0]);
  var opresult1495 = callmethod(var_textualSignature, "++", [1], call1493);
  var_textualSignature = opresult1495;
  lineNumber = 427
  var opresult1498 = callmethod(var_size, ">", [1], new GraceNum(0));
  var opresult1500 = callmethod(opresult1498, "||", [1], var_isVar);
  if (Grace_isTrue(opresult1500)) {
  lineNumber = 429
  lineNumber = 428
  var string1501 = new GraceString("(");
  var opresult1503 = callmethod(string1501, "++", [1], var_size);
  var string1504 = new GraceString("");
  var opresult1506 = callmethod(opresult1503, "++", [1], string1504);
  var opresult1508 = callmethod(opresult1506, "++", [1], var_varChar);
  var string1509 = new GraceString(")");
  var opresult1511 = callmethod(opresult1508, "++", [1], string1509);
  var opresult1513 = callmethod(var_textualSignature, "++", [1], opresult1511);
  var_textualSignature = opresult1513;
  var if1496 = opresult1513;
}
  return if1496;
};
  var call1514 = callmethod(Grace_prelude,"for()do", [1, 1], call1482, block1483);
  lineNumber = 431
  var array1515 = new GraceList([
]);

  var var_paramCounts = array1515;
  lineNumber = 431;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_paramCounts)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'paramCounts' to be of type Dynamic"))
  lineNumber = 432
  var array1516 = new GraceList([
]);

  var var_variableArities = array1516;
  lineNumber = 432;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_variableArities)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'variableArities' to be of type Dynamic"))
  lineNumber = 433
  lineNumber = 1
  lineNumber = 433
  var call1517 = callmethod(var_o,"signature", [0]);
  var block1518 = Grace_allocObject();
  block1518.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1518.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1518.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1518.methods["match"] = GraceBlock_match;
  block1518.receiver = this;
  block1518.className = 'block<genjs:433>';
  block1518.real = function(
var_part
) {
  sourceObject = this;
  lineNumber = 434
  lineNumber = 1
  lineNumber = 434
  lineNumber = 1
  lineNumber = 434
  var call1519 = callmethod(var_part,"params", [0]);
  var call1520 = callmethod(call1519,"size", [0]);
  var call1521 = callmethod(var_paramCounts,"push", [1], call1520);
  lineNumber = 435
  lineNumber = 1
  lineNumber = 435
  var call1522 = callmethod(var_part,"vararg", [0]);
  var bool1523 = new GraceBoolean(false)
  var opresult1525 = callmethod(call1522, "!=", [1], bool1523);
  var call1526 = callmethod(var_variableArities,"push", [1], opresult1525);
  return call1526;
};
  var call1527 = callmethod(Grace_prelude,"for()do", [1, 1], call1517, block1518);
  lineNumber = 437
  lineNumber = 436
  var array1528 = new GraceList([
]);

  var_usedvars = array1528;
  lineNumber = 438
  lineNumber = 437
  var array1529 = new GraceList([
]);

  var_declaredvars = array1529;
  lineNumber = 438
  var var_myc = var_auto__95__count;
  lineNumber = 438;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_myc)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'myc' to be of type Dynamic"))
  lineNumber = 440
  lineNumber = 439
  var opresult1531 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult1531;
  lineNumber = 440
  lineNumber = 1
  lineNumber = 440
  lineNumber = 1
  lineNumber = 440
  var call1532 = callmethod(var_o,"value", [0]);
  var call1533 = callmethod(call1532,"value", [0]);
onSelf = true;
  var call1534 = callmethod(this, "escapestring", [1], call1533);
  var var_name = call1534;
  lineNumber = 440;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_name)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'name' to be of type Dynamic"))
  lineNumber = 441
  lineNumber = 442
  lineNumber = 441
  var opresult1536 = callmethod(var_name, "++", [1], var_myc);
  var var_nm = opresult1536;
  lineNumber = 441;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_nm)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'nm' to be of type Dynamic"))
  lineNumber = 442
  var array1537 = new GraceList([
]);

  var var_closurevars = array1537;
  lineNumber = 442;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_closurevars)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'closurevars' to be of type Dynamic"))
  lineNumber = 443
  var bool1538 = new GraceBoolean(false)
  var var_haveTypedParams = bool1538;
  lineNumber = 443;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_haveTypedParams)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'haveTypedParams' to be of type Dynamic"))
  lineNumber = 444
  lineNumber = 1
  lineNumber = 444
  var call1539 = callmethod(var_o,"signature", [0]);
  var block1540 = Grace_allocObject();
  block1540.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1540.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1540.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1540.methods["match"] = GraceBlock_match;
  block1540.receiver = this;
  block1540.className = 'block<genjs:444>';
  block1540.real = function(
var_part
) {
  sourceObject = this;
  lineNumber = 445
  lineNumber = 1
  lineNumber = 445
  var call1541 = callmethod(var_part,"params", [0]);
  var block1542 = Grace_allocObject();
  block1542.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1542.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1542.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1542.methods["match"] = GraceBlock_match;
  block1542.receiver = this;
  block1542.className = 'block<genjs:445>';
  block1542.real = function(
var_p
) {
  sourceObject = this;
  lineNumber = 446
  lineNumber = 1
  lineNumber = 446
  var call1544 = callmethod(var_p,"dtype", [0]);
  var bool1545 = new GraceBoolean(false)
  var opresult1547 = callmethod(call1544, "!=", [1], bool1545);
  if (Grace_isTrue(opresult1547)) {
  lineNumber = 447
  lineNumber = 449
  lineNumber = 447
  lineNumber = 1
  lineNumber = 447
  lineNumber = 1
  lineNumber = 447
  var call1549 = callmethod(var_p,"dtype", [0]);
  var call1550 = callmethod(call1549,"value", [0]);
  var string1551 = new GraceString("Dynamic");
  var opresult1553 = callmethod(call1550, "!=", [1], string1551);
  lineNumber = 449
  lineNumber = 448
  lineNumber = 1
  lineNumber = 448
  lineNumber = 1
  lineNumber = 448
  var call1554 = callmethod(var_p,"dtype", [0]);
  var call1555 = callmethod(call1554,"kind", [0]);
  var string1556 = new GraceString("identifier");
  var opresult1558 = callmethod(call1555, "==", [1], string1556);
  lineNumber = 449
  lineNumber = 1
  lineNumber = 449
  lineNumber = 1
  lineNumber = 449
  var call1559 = callmethod(var_p,"dtype", [0]);
  var call1560 = callmethod(call1559,"kind", [0]);
  var string1561 = new GraceString("type");
  var opresult1563 = callmethod(call1560, "==", [1], string1561);
  var opresult1565 = callmethod(opresult1558, "||", [1], opresult1563);
  var opresult1567 = callmethod(opresult1553, "&&", [1], opresult1565);
  if (Grace_isTrue(opresult1567)) {
  lineNumber = 451
  lineNumber = 450
  var bool1568 = new GraceBoolean(true)
  var_haveTypedParams = bool1568;
  var if1548 = bool1568;
}
  var if1543 = if1548;
}
  return if1543;
};
  var call1569 = callmethod(Grace_prelude,"for()do", [1, 1], call1541, block1542);
  return call1569;
};
  var call1570 = callmethod(Grace_prelude,"for()do", [1, 1], call1539, block1540);
  lineNumber = 456
  var string1571 = new GraceString("var func");
  var opresult1573 = callmethod(string1571, "++", [1], var_myc);
  var string1574 = new GraceString(" = function(argcv) {    // method ");
  var opresult1576 = callmethod(opresult1573, "++", [1], string1574);
  var opresult1578 = callmethod(opresult1576, "++", [1], var_textualSignature);
onSelf = true;
  var call1579 = callmethod(this, "out", [1], opresult1578);
  lineNumber = 457
  var string1580 = new GraceString("  var curarg = 1;");
onSelf = true;
  var call1581 = callmethod(this, "out", [1], string1580);
  lineNumber = 458
  lineNumber = 1
  lineNumber = 458
  lineNumber = 1
  lineNumber = 458
  var call1582 = callmethod(var_o,"signature", [0]);
  var call1583 = callmethod(call1582,"indices", [0]);
  var block1584 = Grace_allocObject();
  block1584.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1584.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1584.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1584.methods["match"] = GraceBlock_match;
  block1584.receiver = this;
  block1584.className = 'block<genjs:458>';
  block1584.real = function(
var_partnr
) {
  sourceObject = this;
  lineNumber = 459
  lineNumber = 460
  lineNumber = 459
  lineNumber = 1
  lineNumber = 459
  var call1585 = callmethod(var_o,"signature", [0]);
  var idxres1586 = call1585.methods["[]"].call(call1585, [1], var_partnr);
  var var_part = idxres1586;
  lineNumber = 459;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_part)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'part' to be of type Dynamic"))
  lineNumber = 460
  lineNumber = 1
  lineNumber = 460
  var call1587 = callmethod(var_part,"params", [0]);
  var block1588 = Grace_allocObject();
  block1588.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1588.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1588.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1588.methods["match"] = GraceBlock_match;
  block1588.receiver = this;
  block1588.className = 'block<genjs:460>';
  block1588.real = function(
var_p
) {
  sourceObject = this;
  lineNumber = 461
  var string1589 = new GraceString("  var ");
  lineNumber = 1
  lineNumber = 461
  var call1590 = callmethod(var_p,"value", [0]);
onSelf = true;
  var call1591 = callmethod(this, "varf", [1], call1590);
  var opresult1593 = callmethod(string1589, "++", [1], call1591);
  var string1594 = new GraceString(" = arguments[curarg];");
  var opresult1596 = callmethod(opresult1593, "++", [1], string1594);
onSelf = true;
  var call1597 = callmethod(this, "out", [1], opresult1596);
  lineNumber = 462
  var string1598 = new GraceString("  curarg++;");
onSelf = true;
  var call1599 = callmethod(this, "out", [1], string1598);
  return call1599;
};
  var call1600 = callmethod(Grace_prelude,"for()do", [1, 1], call1587, block1588);
  lineNumber = 464
  lineNumber = 1
  lineNumber = 464
  var call1602 = callmethod(var_part,"vararg", [0]);
  var bool1603 = new GraceBoolean(false)
  var opresult1605 = callmethod(call1602, "!=", [1], bool1603);
  if (Grace_isTrue(opresult1605)) {
  lineNumber = 465
  lineNumber = 467
  lineNumber = 465
  var string1606 = new GraceString("  var ");
  lineNumber = 1
  lineNumber = 465
  lineNumber = 1
  lineNumber = 465
  var call1607 = callmethod(var_part,"vararg", [0]);
  var call1608 = callmethod(call1607,"value", [0]);
onSelf = true;
  var call1609 = callmethod(this, "varf", [1], call1608);
  var opresult1611 = callmethod(string1606, "++", [1], call1609);
  var string1612 = new GraceString(" = new GraceList(");
  var opresult1614 = callmethod(opresult1611, "++", [1], string1612);
  lineNumber = 466
  var string1615 = new GraceString("Array.prototype.slice.call(arguments, curarg, ");
  var opresult1617 = callmethod(opresult1614, "++", [1], string1615);
  lineNumber = 467
  var string1618 = new GraceString("curarg + argcv[");
  var diff1620 = callmethod(var_partnr, "-", [1], new GraceNum(1));
  var opresult1622 = callmethod(string1618, "++", [1], diff1620);
  var string1623 = new GraceString("] - ");
  var opresult1625 = callmethod(opresult1622, "++", [1], string1623);
  lineNumber = 1
  lineNumber = 467
  lineNumber = 1
  lineNumber = 467
  var call1626 = callmethod(var_part,"params", [0]);
  var call1627 = callmethod(call1626,"size", [0]);
  var opresult1629 = callmethod(opresult1625, "++", [1], call1627);
  var string1630 = new GraceString("));");
  var opresult1632 = callmethod(opresult1629, "++", [1], string1630);
  var opresult1634 = callmethod(opresult1617, "++", [1], opresult1632);
onSelf = true;
  var call1635 = callmethod(this, "out", [1], opresult1634);
  lineNumber = 468
  var string1636 = new GraceString("  curarg += argcv[");
  var diff1638 = callmethod(var_partnr, "-", [1], new GraceNum(1));
  var opresult1640 = callmethod(string1636, "++", [1], diff1638);
  var string1641 = new GraceString("] - ");
  var opresult1643 = callmethod(opresult1640, "++", [1], string1641);
  lineNumber = 1
  lineNumber = 468
  lineNumber = 1
  lineNumber = 468
  var call1644 = callmethod(var_part,"params", [0]);
  var call1645 = callmethod(call1644,"size", [0]);
  var opresult1647 = callmethod(opresult1643, "++", [1], call1645);
  var string1648 = new GraceString(";");
  var opresult1650 = callmethod(opresult1647, "++", [1], string1648);
onSelf = true;
  var call1651 = callmethod(this, "out", [1], opresult1650);
  var if1601 = call1651;
  } else {
  lineNumber = 470
  lineNumber = 1
  lineNumber = 470
  var call1653 = callmethod(var_o,"selfclosure", [0]);
  var call1654 = callmethod(call1653,"prefix!", [0]);
  if (Grace_isTrue(call1654)) {
  lineNumber = 471
  var string1655 = new GraceString("  if (argcv[");
  var diff1657 = callmethod(var_partnr, "-", [1], new GraceNum(1));
  var opresult1659 = callmethod(string1655, "++", [1], diff1657);
  var string1660 = new GraceString("] !=  func");
  var opresult1662 = callmethod(opresult1659, "++", [1], string1660);
  var opresult1664 = callmethod(opresult1662, "++", [1], var_myc);
  var string1665 = new GraceString(".paramCounts[");
  var opresult1667 = callmethod(opresult1664, "++", [1], string1665);
  var diff1669 = callmethod(var_partnr, "-", [1], new GraceNum(1));
  var opresult1671 = callmethod(opresult1667, "++", [1], diff1669);
  var string1672 = new GraceString("]) // != ");
  var opresult1674 = callmethod(opresult1671, "++", [1], string1672);
  lineNumber = 1
  lineNumber = 471
  lineNumber = 1
  lineNumber = 471
  var call1675 = callmethod(var_part,"params", [0]);
  var call1676 = callmethod(call1675,"size", [0]);
  var opresult1678 = callmethod(opresult1674, "++", [1], call1676);
  var string1679 = new GraceString(" ");
  var opresult1681 = callmethod(opresult1678, "++", [1], string1679);
onSelf = true;
  var call1682 = callmethod(this, "out", [1], opresult1681);
  lineNumber = 472
  lineNumber = 473
  lineNumber = 472
  var string1683 = new GraceString("      callmethod(var_RuntimeError, \"raise\", [1], new ");
  lineNumber = 473
  var string1684 = new GraceString("GraceString(\"argument list ");
  var opresult1686 = callmethod(string1684, "++", [1], var_partnr);
  var string1687 = new GraceString(" to method ");
  var opresult1689 = callmethod(opresult1686, "++", [1], string1687);
  var opresult1691 = callmethod(opresult1689, "++", [1], var_textualSignature);
  var string1692 = new GraceString(" is of wrong size\"));");
  var opresult1694 = callmethod(opresult1691, "++", [1], string1692);
  var opresult1696 = callmethod(string1683, "++", [1], opresult1694);
onSelf = true;
  var call1697 = callmethod(this, "out", [1], opresult1696);
  var if1652 = call1697;
}
  var if1601 = if1652;
}
  return if1601;
};
  var call1698 = callmethod(Grace_prelude,"for()do", [1, 1], call1583, block1584);
  lineNumber = 477
  lineNumber = 1
  lineNumber = 477
  lineNumber = 1
  lineNumber = 477
  var call1700 = callmethod(var_o,"generics", [0]);
  var call1701 = callmethod(call1700,"size", [0]);
  var opresult1703 = callmethod(call1701, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult1703)) {
  lineNumber = 478
  var string1704 = new GraceString("// Start generics");
onSelf = true;
  var call1705 = callmethod(this, "out", [1], string1704);
  lineNumber = 479
  var string1706 = new GraceString("  if (argcv.length == 1 + ");
  lineNumber = 1
  lineNumber = 479
  lineNumber = 1
  lineNumber = 479
  var call1707 = callmethod(var_o,"signature", [0]);
  var call1708 = callmethod(call1707,"size", [0]);
  var opresult1710 = callmethod(string1706, "++", [1], call1708);
  var string1711 = new GraceString(") {");
  var opresult1713 = callmethod(opresult1710, "++", [1], string1711);
onSelf = true;
  var call1714 = callmethod(this, "out", [1], opresult1713);
  lineNumber = 480
  var string1715 = new GraceString("    if (argcv[argcv.length-1] < ");
  lineNumber = 1
  lineNumber = 480
  lineNumber = 1
  lineNumber = 480
  var call1716 = callmethod(var_o,"generics", [0]);
  var call1717 = callmethod(call1716,"size", [0]);
  var opresult1719 = callmethod(string1715, "++", [1], call1717);
  var string1720 = new GraceString(") {");
  var opresult1722 = callmethod(opresult1719, "++", [1], string1720);
onSelf = true;
  var call1723 = callmethod(this, "out", [1], opresult1722);
  lineNumber = 481
  lineNumber = 482
  lineNumber = 481
  var string1724 = new GraceString("      callmethod(var_RuntimeError, \"raise\", [1], ");
  lineNumber = 482
  var string1725 = new GraceString("new GraceString(\"insufficient generic parameters\"));");
  var opresult1727 = callmethod(string1724, "++", [1], string1725);
onSelf = true;
  var call1728 = callmethod(this, "out", [1], opresult1727);
  lineNumber = 483
  var string1729 = new GraceString("    }");
onSelf = true;
  var call1730 = callmethod(this, "out", [1], string1729);
  lineNumber = 484
  lineNumber = 1
  lineNumber = 484
  var call1731 = callmethod(var_o,"generics", [0]);
  var block1732 = Grace_allocObject();
  block1732.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1732.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1732.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1732.methods["match"] = GraceBlock_match;
  block1732.receiver = this;
  block1732.className = 'block<genjs:484>';
  block1732.real = function(
var_g
) {
  sourceObject = this;
  lineNumber = 485
  var string1733 = new GraceString("  var ");
  lineNumber = 1
  lineNumber = 485
  var call1734 = callmethod(var_g,"value", [0]);
onSelf = true;
  var call1735 = callmethod(this, "varf", [1], call1734);
  var opresult1737 = callmethod(string1733, "++", [1], call1735);
  var string1738 = new GraceString(" = arguments[curarg++];");
  var opresult1740 = callmethod(opresult1737, "++", [1], string1738);
onSelf = true;
  var call1741 = callmethod(this, "out", [1], opresult1740);
  return call1741;
};
  var call1742 = callmethod(Grace_prelude,"for()do", [1, 1], call1731, block1732);
  lineNumber = 487
  var string1743 = new GraceString("  } else {");
onSelf = true;
  var call1744 = callmethod(this, "out", [1], string1743);
  lineNumber = 488
  lineNumber = 1
  lineNumber = 488
  var call1745 = callmethod(var_o,"generics", [0]);
  var block1746 = Grace_allocObject();
  block1746.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1746.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1746.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1746.methods["match"] = GraceBlock_match;
  block1746.receiver = this;
  block1746.className = 'block<genjs:488>';
  block1746.real = function(
var_g
) {
  sourceObject = this;
  lineNumber = 489
  var string1747 = new GraceString("    ");
  lineNumber = 1
  lineNumber = 489
  var call1748 = callmethod(var_g,"value", [0]);
onSelf = true;
  var call1749 = callmethod(this, "varf", [1], call1748);
  var opresult1751 = callmethod(string1747, "++", [1], call1749);
  var string1752 = new GraceString(" = var_Dynamic;");
  var opresult1754 = callmethod(opresult1751, "++", [1], string1752);
onSelf = true;
  var call1755 = callmethod(this, "out", [1], opresult1754);
  return call1755;
};
  var call1756 = callmethod(Grace_prelude,"for()do", [1, 1], call1745, block1746);
  lineNumber = 491
  var string1757 = new GraceString("  }");
onSelf = true;
  var call1758 = callmethod(this, "out", [1], string1757);
  lineNumber = 492
  var string1759 = new GraceString("// End generics");
onSelf = true;
  var call1760 = callmethod(this, "out", [1], string1759);
  lineNumber = 493
  var string1761 = new GraceString("var curarg2 = 1;");
onSelf = true;
  var call1762 = callmethod(this, "out", [1], string1761);
  lineNumber = 494
  lineNumber = 1
  lineNumber = 494
  lineNumber = 1
  lineNumber = 494
  var call1763 = callmethod(var_o,"signature", [0]);
  var call1764 = callmethod(call1763,"indices", [0]);
  var block1765 = Grace_allocObject();
  block1765.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1765.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1765.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1765.methods["match"] = GraceBlock_match;
  block1765.receiver = this;
  block1765.className = 'block<genjs:494>';
  block1765.real = function(
var_partnr
) {
  sourceObject = this;
  lineNumber = 495
  lineNumber = 496
  lineNumber = 495
  lineNumber = 1
  lineNumber = 495
  var call1766 = callmethod(var_o,"signature", [0]);
  var idxres1767 = call1766.methods["[]"].call(call1766, [1], var_partnr);
  var var_part = idxres1767;
  lineNumber = 495;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_part)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'part' to be of type Dynamic"))
  lineNumber = 496
  lineNumber = 1
  lineNumber = 496
  var call1768 = callmethod(var_part,"params", [0]);
  var block1769 = Grace_allocObject();
  block1769.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1769.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1769.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1769.methods["match"] = GraceBlock_match;
  block1769.receiver = this;
  block1769.className = 'block<genjs:496>';
  block1769.real = function(
var_p
) {
  sourceObject = this;
  lineNumber = 497
  lineNumber = 1
  lineNumber = 497
  var call1771 = callmethod(var_p,"dtype", [0]);
  var bool1772 = new GraceBoolean(false)
  var opresult1774 = callmethod(call1771, "!=", [1], bool1772);
  if (Grace_isTrue(opresult1774)) {
  lineNumber = 498
  lineNumber = 1
  lineNumber = 498
  var call1775 = callmethod(var_o,"generics", [0]);
  var block1776 = Grace_allocObject();
  block1776.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1776.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1776.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1776.methods["match"] = GraceBlock_match;
  block1776.receiver = this;
  block1776.className = 'block<genjs:498>';
  block1776.real = function(
var_g
) {
  sourceObject = this;
  lineNumber = 499
  lineNumber = 1
  lineNumber = 499
  lineNumber = 1
  lineNumber = 499
  var call1778 = callmethod(var_p,"dtype", [0]);
  var call1779 = callmethod(call1778,"value", [0]);
  lineNumber = 1
  lineNumber = 499
  var call1780 = callmethod(var_g,"value", [0]);
  var opresult1782 = callmethod(call1779, "==", [1], call1780);
  if (Grace_isTrue(opresult1782)) {
  lineNumber = 501
  lineNumber = 500
  lineNumber = 1
  lineNumber = 500
  var call1783 = callmethod(var_o,"line", [0]);
  var_linenum = call1783;
  lineNumber = 501
  var string1784 = new GraceString("  lineNumber = ");
  var opresult1786 = callmethod(string1784, "++", [1], var_linenum);
  var string1787 = new GraceString(";");
  var opresult1789 = callmethod(opresult1786, "++", [1], string1787);
onSelf = true;
  var call1790 = callmethod(this, "out", [1], opresult1789);
  lineNumber = 502
  var string1791 = new GraceString("  if (!Grace_isTrue(callmethod(");
  lineNumber = 1
  lineNumber = 502
  var call1792 = callmethod(var_p,"dtype", [0]);
onSelf = true;
  var call1793 = callmethod(this, "compilenode", [1], call1792);
  var opresult1795 = callmethod(string1791, "++", [1], call1793);
  var string1796 = new GraceString(", \"match\",");
  var opresult1798 = callmethod(opresult1795, "++", [1], string1796);
onSelf = true;
  var call1799 = callmethod(this, "out", [1], opresult1798);
  lineNumber = 503
  var string1800 = new GraceString("    [1], arguments[curarg2])))");
onSelf = true;
  var call1801 = callmethod(this, "out", [1], string1800);
  lineNumber = 504
  var string1802 = new GraceString("      throw new GraceExceptionPacket(TypeErrorObject,");
onSelf = true;
  var call1803 = callmethod(this, "out", [1], string1802);
  lineNumber = 505
  var string1804 = new GraceString("            new GraceString(\"expected \"");
onSelf = true;
  var call1805 = callmethod(this, "out", [1], string1804);
  lineNumber = 506
  var string1806 = new GraceString("             + \"parameter '");
  lineNumber = 1
  lineNumber = 506
  var call1807 = callmethod(var_p,"value", [0]);
  var opresult1809 = callmethod(string1806, "++", [1], call1807);
  var string1810 = new GraceString("' \"");
  var opresult1812 = callmethod(opresult1809, "++", [1], string1810);
onSelf = true;
  var call1813 = callmethod(this, "out", [1], opresult1812);
  lineNumber = 507
  var string1814 = new GraceString("             + \"to be of type ");
  lineNumber = 1
  lineNumber = 507
  lineNumber = 1
  lineNumber = 507
  var call1815 = callmethod(var_p,"dtype", [0]);
  var call1816 = callmethod(call1815,"value", [0]);
  var opresult1818 = callmethod(string1814, "++", [1], call1816);
  var string1819 = new GraceString("\"));");
  var opresult1821 = callmethod(opresult1818, "++", [1], string1819);
onSelf = true;
  var call1822 = callmethod(this, "out", [1], opresult1821);
  var if1777 = call1822;
}
  return if1777;
};
  var call1823 = callmethod(Grace_prelude,"for()do", [1, 1], call1775, block1776);
  var if1770 = call1823;
}
  lineNumber = 511
  var string1824 = new GraceString("  curarg2++;");
onSelf = true;
  var call1825 = callmethod(this, "out", [1], string1824);
  return call1825;
};
  var call1826 = callmethod(Grace_prelude,"for()do", [1, 1], call1768, block1769);
  lineNumber = 513
  lineNumber = 1
  lineNumber = 513
  var call1828 = callmethod(var_part,"vararg", [0]);
  var bool1829 = new GraceBoolean(false)
  var opresult1831 = callmethod(call1828, "!=", [1], bool1829);
  if (Grace_isTrue(opresult1831)) {
  lineNumber = 514
  lineNumber = 516
  lineNumber = 514
  var string1832 = new GraceString("  var ");
  lineNumber = 1
  lineNumber = 514
  lineNumber = 1
  lineNumber = 514
  var call1833 = callmethod(var_part,"vararg", [0]);
  var call1834 = callmethod(call1833,"value", [0]);
onSelf = true;
  var call1835 = callmethod(this, "varf", [1], call1834);
  var opresult1837 = callmethod(string1832, "++", [1], call1835);
  var string1838 = new GraceString(" = new GraceList(");
  var opresult1840 = callmethod(opresult1837, "++", [1], string1838);
  lineNumber = 515
  var string1841 = new GraceString("Array.prototype.slice.call(arguments, curarg2, ");
  var opresult1843 = callmethod(opresult1840, "++", [1], string1841);
  lineNumber = 516
  var string1844 = new GraceString("curarg2 + argcv[");
  var diff1846 = callmethod(var_partnr, "-", [1], new GraceNum(1));
  var opresult1848 = callmethod(string1844, "++", [1], diff1846);
  var string1849 = new GraceString("] - ");
  var opresult1851 = callmethod(opresult1848, "++", [1], string1849);
  lineNumber = 1
  lineNumber = 516
  lineNumber = 1
  lineNumber = 516
  var call1852 = callmethod(var_part,"params", [0]);
  var call1853 = callmethod(call1852,"size", [0]);
  var opresult1855 = callmethod(opresult1851, "++", [1], call1853);
  var string1856 = new GraceString("));");
  var opresult1858 = callmethod(opresult1855, "++", [1], string1856);
  var opresult1860 = callmethod(opresult1843, "++", [1], opresult1858);
onSelf = true;
  var call1861 = callmethod(this, "out", [1], opresult1860);
  lineNumber = 517
  var string1862 = new GraceString("  curarg2 += argcv[");
  var diff1864 = callmethod(var_partnr, "-", [1], new GraceNum(1));
  var opresult1866 = callmethod(string1862, "++", [1], diff1864);
  var string1867 = new GraceString("] - ");
  var opresult1869 = callmethod(opresult1866, "++", [1], string1867);
  lineNumber = 1
  lineNumber = 517
  lineNumber = 1
  lineNumber = 517
  var call1870 = callmethod(var_part,"params", [0]);
  var call1871 = callmethod(call1870,"size", [0]);
  var opresult1873 = callmethod(opresult1869, "++", [1], call1871);
  var string1874 = new GraceString(";");
  var opresult1876 = callmethod(opresult1873, "++", [1], string1874);
onSelf = true;
  var call1877 = callmethod(this, "out", [1], opresult1876);
  var if1827 = call1877;
}
  return if1827;
};
  var call1878 = callmethod(Grace_prelude,"for()do", [1, 1], call1764, block1765);
  lineNumber = 520
  var string1879 = new GraceString("// End checking generics");
onSelf = true;
  var call1880 = callmethod(this, "out", [1], string1879);
  var if1699 = call1880;
}
  lineNumber = 522
  var string1881 = new GraceString("  var returnTarget = invocationCount;");
onSelf = true;
  var call1882 = callmethod(this, "out", [1], string1881);
  lineNumber = 523
  var string1883 = new GraceString("  invocationCount++;");
onSelf = true;
  var call1884 = callmethod(this, "out", [1], string1883);
  lineNumber = 524
  var string1885 = new GraceString("  try {");
onSelf = true;
  var call1886 = callmethod(this, "out", [1], string1885);
  lineNumber = 525
  var string1887 = new GraceString("undefined");
  var var_ret = string1887;
  lineNumber = 525;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_ret)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'ret' to be of type Dynamic"))
  lineNumber = 526
  lineNumber = 1
  lineNumber = 526
  var call1888 = callmethod(var_o,"body", [0]);
  var block1889 = Grace_allocObject();
  block1889.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1889.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1889.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1889.methods["match"] = GraceBlock_match;
  block1889.receiver = this;
  block1889.className = 'block<genjs:526>';
  block1889.real = function(
var_l
) {
  sourceObject = this;
  lineNumber = 527
onSelf = true;
  var call1890 = callmethod(this, "compilenode", [1], var_l);
  var_ret = call1890;
  return call1890;
};
  var call1891 = callmethod(Grace_prelude,"for()do", [1, 1], call1888, block1889);
  lineNumber = 529
  var string1892 = new GraceString("  return ");
  var opresult1894 = callmethod(string1892, "++", [1], var_ret);
onSelf = true;
  var call1895 = callmethod(this, "out", [1], opresult1894);
  lineNumber = 530
  var string1896 = new GraceString("  } catch(e) {");
onSelf = true;
  var call1897 = callmethod(this, "out", [1], string1896);
  lineNumber = 531
  var string1898 = new GraceString("    if ((e.exctype == 'return') && (e.target == returnTarget)) {");
onSelf = true;
  var call1899 = callmethod(this, "out", [1], string1898);
  lineNumber = 532
  var string1900 = new GraceString("      return e.returnvalue;");
onSelf = true;
  var call1901 = callmethod(this, "out", [1], string1900);
  lineNumber = 533
  var string1902 = new GraceString("    } else {");
onSelf = true;
  var call1903 = callmethod(this, "out", [1], string1902);
  lineNumber = 534
  var string1904 = new GraceString("      throw e;");
onSelf = true;
  var call1905 = callmethod(this, "out", [1], string1904);
  lineNumber = 535
  var string1906 = new GraceString("    }");
onSelf = true;
  var call1907 = callmethod(this, "out", [1], string1906);
  lineNumber = 536
  var string1908 = new GraceString("  }");
onSelf = true;
  var call1909 = callmethod(this, "out", [1], string1908);
  lineNumber = 537
  var string1910 = new GraceString("}");
onSelf = true;
  var call1911 = callmethod(this, "out", [1], string1910);
  lineNumber = 539
  lineNumber = 538
  var_usedvars = var_oldusedvars;
  lineNumber = 540
  lineNumber = 539
  var_declaredvars = var_olddeclaredvars;
  lineNumber = 540
  if (Grace_isTrue(var_haveTypedParams)) {
  lineNumber = 541
  var string1913 = new GraceString("func");
  var opresult1915 = callmethod(string1913, "++", [1], var_myc);
  var string1916 = new GraceString("");
  var opresult1918 = callmethod(opresult1915, "++", [1], string1916);
onSelf = true;
  var call1919 = callmethod(this, "compilemethodtypes", [2], opresult1918, var_o);
  var if1912 = call1919;
}
  lineNumber = 543
  lineNumber = 1
  lineNumber = 543
  var call1920 = callmethod(var_o,"annotations", [0]);
  var block1921 = Grace_allocObject();
  block1921.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1921.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1921.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1921.methods["match"] = GraceBlock_match;
  block1921.receiver = this;
  block1921.className = 'block<genjs:543>';
  block1921.real = function(
var_ann
) {
  sourceObject = this;
  lineNumber = 544
  lineNumber = 545
  var block1923 = Grace_allocObject();
  block1923.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1923.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1923.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1923.methods["match"] = GraceBlock_match;
  block1923.receiver = this;
  block1923.className = 'block<genjs:545>';
  block1923.real = function(
) {
  sourceObject = this;
  lineNumber = 1
  lineNumber = 545
  var call1924 = callmethod(var_ann,"value", [0]);
  var string1925 = new GraceString("confidential");
  var opresult1927 = callmethod(call1924, "==", [1], string1925);
  return opresult1927;
};
  lineNumber = 544
  lineNumber = 1
  lineNumber = 544
  var call1928 = callmethod(var_ann,"kind", [0]);
  var string1929 = new GraceString("identifier");
  var opresult1931 = callmethod(call1928, "==", [1], string1929);
  var call1932 = callmethod(opresult1931,"andAlso", [1], block1923);
  if (Grace_isTrue(call1932)) {
  lineNumber = 546
  var string1933 = new GraceString("func");
  var opresult1935 = callmethod(string1933, "++", [1], var_myc);
  var string1936 = new GraceString(".confidential = true;");
  var opresult1938 = callmethod(opresult1935, "++", [1], string1936);
onSelf = true;
  var call1939 = callmethod(this, "out", [1], opresult1938);
  var if1922 = call1939;
}
  return if1922;
};
  var call1940 = callmethod(Grace_prelude,"for()do", [1, 1], call1920, block1921);
  lineNumber = 549
  var string1941 = new GraceString("  func");
  var opresult1943 = callmethod(string1941, "++", [1], var_myc);
  var string1944 = new GraceString(".paramCounts = ");
  var opresult1946 = callmethod(opresult1943, "++", [1], string1944);
  var opresult1948 = callmethod(opresult1946, "++", [1], var_paramCounts);
  var string1949 = new GraceString(";");
  var opresult1951 = callmethod(opresult1948, "++", [1], string1949);
onSelf = true;
  var call1952 = callmethod(this, "out", [1], opresult1951);
  lineNumber = 550
  var string1953 = new GraceString("  func");
  var opresult1955 = callmethod(string1953, "++", [1], var_myc);
  var string1956 = new GraceString(".variableArities = ");
  var opresult1958 = callmethod(opresult1955, "++", [1], string1956);
  var opresult1960 = callmethod(opresult1958, "++", [1], var_variableArities);
  var string1961 = new GraceString(";");
  var opresult1963 = callmethod(opresult1960, "++", [1], string1961);
onSelf = true;
  var call1964 = callmethod(this, "out", [1], opresult1963);
  lineNumber = 551
  var string1965 = new GraceString("  ");
  var opresult1967 = callmethod(string1965, "++", [1], var_selfobj);
  var string1968 = new GraceString(".methods[\"");
  var opresult1970 = callmethod(opresult1967, "++", [1], string1968);
  var opresult1972 = callmethod(opresult1970, "++", [1], var_name);
  var string1973 = new GraceString("\"] = func");
  var opresult1975 = callmethod(opresult1972, "++", [1], string1973);
  var opresult1977 = callmethod(opresult1975, "++", [1], var_myc);
  var string1978 = new GraceString(";");
  var opresult1980 = callmethod(opresult1977, "++", [1], string1978);
onSelf = true;
  var call1981 = callmethod(this, "out", [1], opresult1980);
  lineNumber = 552
  var string1983 = new GraceString("fresh");
  lineNumber = 1
  lineNumber = 552
  var call1984 = callmethod(var_o,"properties", [0]);
  var call1985 = callmethod(call1984,"contains", [1], string1983);
  if (Grace_isTrue(call1985)) {
  lineNumber = 553
onSelf = true;
  var call1986 = callmethod(this, "compilefreshmethod", [2], var_o, var_selfobj);
  var if1982 = call1986;
}
  return if1982
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func1464.paramCounts = [2];
  func1464.variableArities = [false];
  this.methods["compilemethod"] = func1464;
  lineNumber = 556
var func1987 = function(argcv) {    // method compilefreshmethod(2)
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  var var_selfobj = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func1987.paramCounts[0]) // != 2 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method compilefreshmethod(2) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 557
  var var_myc = var_auto__95__count;
  lineNumber = 557;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_myc)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'myc' to be of type Dynamic"))
  lineNumber = 559
  lineNumber = 558
  var opresult1989 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult1989;
  lineNumber = 559
  lineNumber = 1
  lineNumber = 559
  lineNumber = 1
  lineNumber = 559
  var call1990 = callmethod(var_o,"value", [0]);
  var call1991 = callmethod(call1990,"value", [0]);
onSelf = true;
  var call1992 = callmethod(this, "escapestring", [1], call1991);
  var var_name = call1992;
  lineNumber = 559;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_name)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'name' to be of type Dynamic"))
  lineNumber = 560
  lineNumber = 561
  lineNumber = 560
  var opresult1994 = callmethod(var_name, "++", [1], var_myc);
  var var_nm = opresult1994;
  lineNumber = 560;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_nm)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'nm' to be of type Dynamic"))
  lineNumber = 561
  var bool1995 = new GraceBoolean(false)
  var var_haveTypedParams = bool1995;
  lineNumber = 561;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_haveTypedParams)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'haveTypedParams' to be of type Dynamic"))
  lineNumber = 562
  lineNumber = 1
  lineNumber = 562
  var call1996 = callmethod(var_o,"signature", [0]);
  var block1997 = Grace_allocObject();
  block1997.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1997.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1997.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1997.methods["match"] = GraceBlock_match;
  block1997.receiver = this;
  block1997.className = 'block<genjs:562>';
  block1997.real = function(
var_part
) {
  sourceObject = this;
  lineNumber = 563
  lineNumber = 1
  lineNumber = 563
  var call1998 = callmethod(var_part,"params", [0]);
  var block1999 = Grace_allocObject();
  block1999.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block1999.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block1999.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block1999.methods["match"] = GraceBlock_match;
  block1999.receiver = this;
  block1999.className = 'block<genjs:563>';
  block1999.real = function(
var_p
) {
  sourceObject = this;
  lineNumber = 564
  lineNumber = 1
  lineNumber = 564
  var call2001 = callmethod(var_p,"dtype", [0]);
  var bool2002 = new GraceBoolean(false)
  var opresult2004 = callmethod(call2001, "!=", [1], bool2002);
  if (Grace_isTrue(opresult2004)) {
  lineNumber = 565
  lineNumber = 567
  lineNumber = 565
  lineNumber = 1
  lineNumber = 565
  lineNumber = 1
  lineNumber = 565
  var call2006 = callmethod(var_p,"dtype", [0]);
  var call2007 = callmethod(call2006,"value", [0]);
  var string2008 = new GraceString("Dynamic");
  var opresult2010 = callmethod(call2007, "!=", [1], string2008);
  lineNumber = 567
  lineNumber = 566
  lineNumber = 1
  lineNumber = 566
  lineNumber = 1
  lineNumber = 566
  var call2011 = callmethod(var_p,"dtype", [0]);
  var call2012 = callmethod(call2011,"kind", [0]);
  var string2013 = new GraceString("identifier");
  var opresult2015 = callmethod(call2012, "==", [1], string2013);
  lineNumber = 567
  lineNumber = 1
  lineNumber = 567
  lineNumber = 1
  lineNumber = 567
  var call2016 = callmethod(var_p,"dtype", [0]);
  var call2017 = callmethod(call2016,"kind", [0]);
  var string2018 = new GraceString("type");
  var opresult2020 = callmethod(call2017, "==", [1], string2018);
  var opresult2022 = callmethod(opresult2015, "||", [1], opresult2020);
  var opresult2024 = callmethod(opresult2010, "&&", [1], opresult2022);
  if (Grace_isTrue(opresult2024)) {
  lineNumber = 569
  lineNumber = 568
  var bool2025 = new GraceBoolean(true)
  var_haveTypedParams = bool2025;
  var if2005 = bool2025;
}
  var if2000 = if2005;
}
  return if2000;
};
  var call2026 = callmethod(Grace_prelude,"for()do", [1, 1], call1998, block1999);
  return call2026;
};
  var call2027 = callmethod(Grace_prelude,"for()do", [1, 1], call1996, block1997);
  lineNumber = 573
  var string2028 = new GraceString("var func");
  var opresult2030 = callmethod(string2028, "++", [1], var_myc);
  var string2031 = new GraceString(" = function(argcv) {");
  var opresult2033 = callmethod(opresult2030, "++", [1], string2031);
onSelf = true;
  var call2034 = callmethod(this, "out", [1], opresult2033);
  lineNumber = 574
  var string2035 = new GraceString("  var curarg = 1;");
onSelf = true;
  var call2036 = callmethod(this, "out", [1], string2035);
  lineNumber = 575
  lineNumber = 1
  lineNumber = 575
  lineNumber = 1
  lineNumber = 575
  var call2037 = callmethod(var_o,"signature", [0]);
  var call2038 = callmethod(call2037,"indices", [0]);
  var block2039 = Grace_allocObject();
  block2039.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2039.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2039.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2039.methods["match"] = GraceBlock_match;
  block2039.receiver = this;
  block2039.className = 'block<genjs:575>';
  block2039.real = function(
var_partnr
) {
  sourceObject = this;
  lineNumber = 576
  lineNumber = 577
  lineNumber = 576
  lineNumber = 1
  lineNumber = 576
  var call2040 = callmethod(var_o,"signature", [0]);
  var idxres2041 = call2040.methods["[]"].call(call2040, [1], var_partnr);
  var var_part = idxres2041;
  lineNumber = 576;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_part)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'part' to be of type Dynamic"))
  lineNumber = 577
  lineNumber = 1
  lineNumber = 577
  var call2042 = callmethod(var_part,"params", [0]);
  var block2043 = Grace_allocObject();
  block2043.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2043.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2043.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2043.methods["match"] = GraceBlock_match;
  block2043.receiver = this;
  block2043.className = 'block<genjs:577>';
  block2043.real = function(
var_p
) {
  sourceObject = this;
  lineNumber = 578
  var string2044 = new GraceString("  var ");
  lineNumber = 1
  lineNumber = 578
  var call2045 = callmethod(var_p,"value", [0]);
onSelf = true;
  var call2046 = callmethod(this, "varf", [1], call2045);
  var opresult2048 = callmethod(string2044, "++", [1], call2046);
  var string2049 = new GraceString(" = arguments[curarg];");
  var opresult2051 = callmethod(opresult2048, "++", [1], string2049);
onSelf = true;
  var call2052 = callmethod(this, "out", [1], opresult2051);
  lineNumber = 579
  var string2053 = new GraceString("  curarg++;");
onSelf = true;
  var call2054 = callmethod(this, "out", [1], string2053);
  return call2054;
};
  var call2055 = callmethod(Grace_prelude,"for()do", [1, 1], call2042, block2043);
  lineNumber = 581
  lineNumber = 1
  lineNumber = 581
  var call2057 = callmethod(var_part,"vararg", [0]);
  var bool2058 = new GraceBoolean(false)
  var opresult2060 = callmethod(call2057, "!=", [1], bool2058);
  if (Grace_isTrue(opresult2060)) {
  lineNumber = 582
  lineNumber = 584
  lineNumber = 582
  var string2061 = new GraceString("  var ");
  lineNumber = 1
  lineNumber = 582
  lineNumber = 1
  lineNumber = 582
  var call2062 = callmethod(var_part,"vararg", [0]);
  var call2063 = callmethod(call2062,"value", [0]);
onSelf = true;
  var call2064 = callmethod(this, "varf", [1], call2063);
  var opresult2066 = callmethod(string2061, "++", [1], call2064);
  var string2067 = new GraceString(" = new GraceList(");
  var opresult2069 = callmethod(opresult2066, "++", [1], string2067);
  lineNumber = 583
  var string2070 = new GraceString("Array.prototype.slice.call(arguments, curarg, ");
  var opresult2072 = callmethod(opresult2069, "++", [1], string2070);
  lineNumber = 584
  var string2073 = new GraceString("curarg + argcv[");
  var diff2075 = callmethod(var_partnr, "-", [1], new GraceNum(1));
  var opresult2077 = callmethod(string2073, "++", [1], diff2075);
  var string2078 = new GraceString("] - ");
  var opresult2080 = callmethod(opresult2077, "++", [1], string2078);
  lineNumber = 1
  lineNumber = 584
  lineNumber = 1
  lineNumber = 584
  var call2081 = callmethod(var_part,"params", [0]);
  var call2082 = callmethod(call2081,"size", [0]);
  var opresult2084 = callmethod(opresult2080, "++", [1], call2082);
  var string2085 = new GraceString("));");
  var opresult2087 = callmethod(opresult2084, "++", [1], string2085);
  var opresult2089 = callmethod(opresult2072, "++", [1], opresult2087);
onSelf = true;
  var call2090 = callmethod(this, "out", [1], opresult2089);
  lineNumber = 585
  var string2091 = new GraceString("  curarg += argcv[");
  var diff2093 = callmethod(var_partnr, "-", [1], new GraceNum(1));
  var opresult2095 = callmethod(string2091, "++", [1], diff2093);
  var string2096 = new GraceString("] - ");
  var opresult2098 = callmethod(opresult2095, "++", [1], string2096);
  lineNumber = 1
  lineNumber = 585
  lineNumber = 1
  lineNumber = 585
  var call2099 = callmethod(var_part,"params", [0]);
  var call2100 = callmethod(call2099,"size", [0]);
  var opresult2102 = callmethod(opresult2098, "++", [1], call2100);
  var string2103 = new GraceString(";");
  var opresult2105 = callmethod(opresult2102, "++", [1], string2103);
onSelf = true;
  var call2106 = callmethod(this, "out", [1], opresult2105);
  var if2056 = call2106;
}
  return if2056;
};
  var call2107 = callmethod(Grace_prelude,"for()do", [1, 1], call2038, block2039);
  lineNumber = 588
  var string2108 = new GraceString("  var inheritingObject = arguments[curarg++];");
onSelf = true;
  var call2109 = callmethod(this, "out", [1], string2108);
  lineNumber = 589
  lineNumber = 1
  lineNumber = 589
  lineNumber = 1
  lineNumber = 589
  var call2111 = callmethod(var_o,"generics", [0]);
  var call2112 = callmethod(call2111,"size", [0]);
  var opresult2114 = callmethod(call2112, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult2114)) {
  lineNumber = 590
  var string2115 = new GraceString("// Start generics");
onSelf = true;
  var call2116 = callmethod(this, "out", [1], string2115);
  lineNumber = 591
  var string2117 = new GraceString("  if (argcv.length == 1 + ");
  lineNumber = 1
  lineNumber = 591
  lineNumber = 1
  lineNumber = 591
  var call2118 = callmethod(var_o,"signature", [0]);
  var call2119 = callmethod(call2118,"size", [0]);
  var opresult2121 = callmethod(string2117, "++", [1], call2119);
  var string2122 = new GraceString(") {");
  var opresult2124 = callmethod(opresult2121, "++", [1], string2122);
onSelf = true;
  var call2125 = callmethod(this, "out", [1], opresult2124);
  lineNumber = 592
  var string2126 = new GraceString("    if (argcv[argcv.length-1] < ");
  lineNumber = 1
  lineNumber = 592
  lineNumber = 1
  lineNumber = 592
  var call2127 = callmethod(var_o,"generics", [0]);
  var call2128 = callmethod(call2127,"size", [0]);
  var opresult2130 = callmethod(string2126, "++", [1], call2128);
  var string2131 = new GraceString(") {");
  var opresult2133 = callmethod(opresult2130, "++", [1], string2131);
onSelf = true;
  var call2134 = callmethod(this, "out", [1], opresult2133);
  lineNumber = 593
  lineNumber = 594
  lineNumber = 593
  var string2135 = new GraceString("      callmethod(var_RuntimeError, \"raise\", [1], ");
  lineNumber = 594
  var string2136 = new GraceString("new GraceString(\"insufficient generic parameters\"));");
  var opresult2138 = callmethod(string2135, "++", [1], string2136);
onSelf = true;
  var call2139 = callmethod(this, "out", [1], opresult2138);
  lineNumber = 595
  var string2140 = new GraceString("    }");
onSelf = true;
  var call2141 = callmethod(this, "out", [1], string2140);
  lineNumber = 596
  lineNumber = 1
  lineNumber = 596
  var call2142 = callmethod(var_o,"generics", [0]);
  var block2143 = Grace_allocObject();
  block2143.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2143.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2143.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2143.methods["match"] = GraceBlock_match;
  block2143.receiver = this;
  block2143.className = 'block<genjs:596>';
  block2143.real = function(
var_g
) {
  sourceObject = this;
  lineNumber = 597
  var string2144 = new GraceString("  var ");
  lineNumber = 1
  lineNumber = 597
  var call2145 = callmethod(var_g,"value", [0]);
onSelf = true;
  var call2146 = callmethod(this, "varf", [1], call2145);
  var opresult2148 = callmethod(string2144, "++", [1], call2146);
  var string2149 = new GraceString(" = arguments[curarg++];");
  var opresult2151 = callmethod(opresult2148, "++", [1], string2149);
onSelf = true;
  var call2152 = callmethod(this, "out", [1], opresult2151);
  return call2152;
};
  var call2153 = callmethod(Grace_prelude,"for()do", [1, 1], call2142, block2143);
  lineNumber = 599
  var string2154 = new GraceString("  } else {");
onSelf = true;
  var call2155 = callmethod(this, "out", [1], string2154);
  lineNumber = 600
  lineNumber = 1
  lineNumber = 600
  var call2156 = callmethod(var_o,"generics", [0]);
  var block2157 = Grace_allocObject();
  block2157.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2157.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2157.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2157.methods["match"] = GraceBlock_match;
  block2157.receiver = this;
  block2157.className = 'block<genjs:600>';
  block2157.real = function(
var_g
) {
  sourceObject = this;
  lineNumber = 601
  var string2158 = new GraceString("    ");
  lineNumber = 1
  lineNumber = 601
  var call2159 = callmethod(var_g,"value", [0]);
onSelf = true;
  var call2160 = callmethod(this, "varf", [1], call2159);
  var opresult2162 = callmethod(string2158, "++", [1], call2160);
  var string2163 = new GraceString(" = var_Dynamic;");
  var opresult2165 = callmethod(opresult2162, "++", [1], string2163);
onSelf = true;
  var call2166 = callmethod(this, "out", [1], opresult2165);
  return call2166;
};
  var call2167 = callmethod(Grace_prelude,"for()do", [1, 1], call2156, block2157);
  lineNumber = 603
  var string2168 = new GraceString("  }");
onSelf = true;
  var call2169 = callmethod(this, "out", [1], string2168);
  lineNumber = 604
  var string2170 = new GraceString("// End generics");
onSelf = true;
  var call2171 = callmethod(this, "out", [1], string2170);
  var if2110 = call2171;
}
  lineNumber = 606
  var string2172 = new GraceString("  var returnTarget = invocationCount;");
onSelf = true;
  var call2173 = callmethod(this, "out", [1], string2172);
  lineNumber = 607
  var string2174 = new GraceString("  invocationCount++;");
onSelf = true;
  var call2175 = callmethod(this, "out", [1], string2174);
  lineNumber = 608
  var string2176 = new GraceString("  try {");
onSelf = true;
  var call2177 = callmethod(this, "out", [1], string2176);
  lineNumber = 609
  var bool2178 = new GraceBoolean(false)
  var var_tailObject = bool2178;
  lineNumber = 609;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_tailObject)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'tailObject' to be of type Dynamic"))
  lineNumber = 610
  var block2180 = Grace_allocObject();
  block2180.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2180.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2180.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2180.methods["match"] = GraceBlock_match;
  block2180.receiver = this;
  block2180.className = 'block<genjs:610>';
  block2180.real = function(
) {
  sourceObject = this;
  lineNumber = 1
  lineNumber = 610
  lineNumber = 1
  lineNumber = 610
  lineNumber = 1
  lineNumber = 610
  var call2181 = callmethod(var_o,"body", [0]);
  var call2182 = callmethod(call2181,"last", [0]);
  var call2183 = callmethod(call2182,"kind", [0]);
  var string2184 = new GraceString("object");
  var opresult2186 = callmethod(call2183, "==", [1], string2184);
  return opresult2186;
};
  lineNumber = 1
  lineNumber = 610
  lineNumber = 1
  lineNumber = 610
  var call2187 = callmethod(var_o,"body", [0]);
  var call2188 = callmethod(call2187,"size", [0]);
  var opresult2190 = callmethod(call2188, ">", [1], new GraceNum(0));
  var call2191 = callmethod(opresult2190,"andAlso", [1], block2180);
  if (Grace_isTrue(call2191)) {
  lineNumber = 612
  lineNumber = 611
  lineNumber = 1
  lineNumber = 611
  lineNumber = 1
  lineNumber = 611
  var call2192 = callmethod(var_o,"body", [0]);
  var call2193 = callmethod(call2192,"pop", [0]);
  var_tailObject = call2193;
  var if2179 = call2193;
}
  lineNumber = 613
  var string2194 = new GraceString("undefined");
  var var_ret = string2194;
  lineNumber = 613;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_ret)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'ret' to be of type Dynamic"))
  lineNumber = 614
  lineNumber = 1
  lineNumber = 614
  var call2195 = callmethod(var_o,"body", [0]);
  var block2196 = Grace_allocObject();
  block2196.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2196.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2196.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2196.methods["match"] = GraceBlock_match;
  block2196.receiver = this;
  block2196.className = 'block<genjs:614>';
  block2196.real = function(
var_l
) {
  sourceObject = this;
  lineNumber = 615
onSelf = true;
  var call2197 = callmethod(this, "compilenode", [1], var_l);
  var_ret = call2197;
  return call2197;
};
  var call2198 = callmethod(Grace_prelude,"for()do", [1, 1], call2195, block2196);
  lineNumber = 617
  var bool2200 = new GraceBoolean(false)
  var opresult2202 = callmethod(bool2200, "!=", [1], var_tailObject);
  if (Grace_isTrue(opresult2202)) {
  lineNumber = 618
  var string2203 = new GraceString("this");
  var bool2204 = new GraceBoolean(true)
onSelf = true;
  var call2205 = callmethod(this, "compileobject", [3], var_tailObject, string2203, bool2204);
  lineNumber = 620
  lineNumber = 619
  lineNumber = 1
  lineNumber = 619
  var call2206 = callmethod(var_tailObject,"register", [0]);
  var_ret = call2206;
  var if2199 = call2206;
}
  lineNumber = 621
  var string2207 = new GraceString("  return ");
  var opresult2209 = callmethod(string2207, "++", [1], var_ret);
onSelf = true;
  var call2210 = callmethod(this, "out", [1], opresult2209);
  lineNumber = 622
  var string2211 = new GraceString("  } catch(e) {");
onSelf = true;
  var call2212 = callmethod(this, "out", [1], string2211);
  lineNumber = 623
  var string2213 = new GraceString("    if ((e.exctype == 'return') && (e.target == returnTarget)) {");
onSelf = true;
  var call2214 = callmethod(this, "out", [1], string2213);
  lineNumber = 624
  var string2215 = new GraceString("      return e.returnvalue;");
onSelf = true;
  var call2216 = callmethod(this, "out", [1], string2215);
  lineNumber = 625
  var string2217 = new GraceString("    } else {");
onSelf = true;
  var call2218 = callmethod(this, "out", [1], string2217);
  lineNumber = 626
  var string2219 = new GraceString("      throw e;");
onSelf = true;
  var call2220 = callmethod(this, "out", [1], string2219);
  lineNumber = 627
  var string2221 = new GraceString("    }");
onSelf = true;
  var call2222 = callmethod(this, "out", [1], string2221);
  lineNumber = 628
  var string2223 = new GraceString("  }");
onSelf = true;
  var call2224 = callmethod(this, "out", [1], string2223);
  lineNumber = 629
  var string2225 = new GraceString("}");
onSelf = true;
  var call2226 = callmethod(this, "out", [1], string2225);
  lineNumber = 630
  if (Grace_isTrue(var_haveTypedParams)) {
  lineNumber = 631
  var string2228 = new GraceString("func");
  var opresult2230 = callmethod(string2228, "++", [1], var_myc);
  var string2231 = new GraceString("");
  var opresult2233 = callmethod(opresult2230, "++", [1], string2231);
onSelf = true;
  var call2234 = callmethod(this, "compilemethodtypes", [2], opresult2233, var_o);
  var if2227 = call2234;
}
  lineNumber = 633
  lineNumber = 1
  lineNumber = 633
  var call2235 = callmethod(var_o,"annotations", [0]);
  var block2236 = Grace_allocObject();
  block2236.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2236.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2236.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2236.methods["match"] = GraceBlock_match;
  block2236.receiver = this;
  block2236.className = 'block<genjs:633>';
  block2236.real = function(
var_ann
) {
  sourceObject = this;
  lineNumber = 634
  lineNumber = 635
  var block2238 = Grace_allocObject();
  block2238.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2238.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2238.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2238.methods["match"] = GraceBlock_match;
  block2238.receiver = this;
  block2238.className = 'block<genjs:635>';
  block2238.real = function(
) {
  sourceObject = this;
  lineNumber = 1
  lineNumber = 635
  var call2239 = callmethod(var_ann,"value", [0]);
  var string2240 = new GraceString("confidential");
  var opresult2242 = callmethod(call2239, "==", [1], string2240);
  return opresult2242;
};
  lineNumber = 634
  lineNumber = 1
  lineNumber = 634
  var call2243 = callmethod(var_ann,"kind", [0]);
  var string2244 = new GraceString("identifier");
  var opresult2246 = callmethod(call2243, "==", [1], string2244);
  var call2247 = callmethod(opresult2246,"andAlso", [1], block2238);
  if (Grace_isTrue(call2247)) {
  lineNumber = 636
  var string2248 = new GraceString("func");
  var opresult2250 = callmethod(string2248, "++", [1], var_myc);
  var string2251 = new GraceString(".confidential = true;");
  var opresult2253 = callmethod(opresult2250, "++", [1], string2251);
onSelf = true;
  var call2254 = callmethod(this, "out", [1], opresult2253);
  var if2237 = call2254;
}
  return if2237;
};
  var call2255 = callmethod(Grace_prelude,"for()do", [1, 1], call2235, block2236);
  lineNumber = 639
  var string2256 = new GraceString("  ");
  var opresult2258 = callmethod(string2256, "++", [1], var_selfobj);
  var string2259 = new GraceString(".methods[\"");
  var opresult2261 = callmethod(opresult2258, "++", [1], string2259);
  var opresult2263 = callmethod(opresult2261, "++", [1], var_name);
  var string2264 = new GraceString("()object\"] = func");
  var opresult2266 = callmethod(opresult2263, "++", [1], string2264);
  var opresult2268 = callmethod(opresult2266, "++", [1], var_myc);
  var string2269 = new GraceString(";");
  var opresult2271 = callmethod(opresult2268, "++", [1], string2269);
onSelf = true;
  var call2272 = callmethod(this, "out", [1], opresult2271);
  return call2272
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func1987.paramCounts = [2];
  func1987.variableArities = [false];
  this.methods["compilefreshmethod"] = func1987;
  lineNumber = 641
var func2273 = function(argcv) {    // method compilemethodtypes(2)
  var curarg = 1;
  var var_func = arguments[curarg];
  curarg++;
  var var_o = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func2273.paramCounts[0]) // != 2 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method compilemethodtypes(2) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 642
  var string2274 = new GraceString("");
  var opresult2276 = callmethod(string2274, "++", [1], var_func);
  var string2277 = new GraceString(".paramTypes = [];");
  var opresult2279 = callmethod(opresult2276, "++", [1], string2277);
onSelf = true;
  var call2280 = callmethod(this, "out", [1], opresult2279);
  lineNumber = 643
  var var_pi = new GraceNum(0);
  lineNumber = 643;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_pi)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'pi' to be of type Dynamic"))
  lineNumber = 644
  lineNumber = 1
  lineNumber = 644
  var call2281 = callmethod(var_o,"signature", [0]);
  var block2282 = Grace_allocObject();
  block2282.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2282.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2282.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2282.methods["match"] = GraceBlock_match;
  block2282.receiver = this;
  block2282.className = 'block<genjs:644>';
  block2282.real = function(
var_part
) {
  sourceObject = this;
  lineNumber = 645
  lineNumber = 1
  lineNumber = 645
  var call2283 = callmethod(var_part,"params", [0]);
  var block2284 = Grace_allocObject();
  block2284.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2284.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2284.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2284.methods["match"] = GraceBlock_match;
  block2284.receiver = this;
  block2284.className = 'block<genjs:645>';
  block2284.real = function(
var_p
) {
  sourceObject = this;
  lineNumber = 648
  var bool2286 = new GraceBoolean(false)
  lineNumber = 1
  lineNumber = 648
  var call2287 = callmethod(var_p,"dtype", [0]);
  var opresult2289 = callmethod(bool2286, "!=", [1], call2287);
  if (Grace_isTrue(opresult2289)) {
  lineNumber = 649
  lineNumber = 650
  lineNumber = 649
  lineNumber = 1
  lineNumber = 649
  lineNumber = 1
  lineNumber = 649
  var call2291 = callmethod(var_p,"dtype", [0]);
  var call2292 = callmethod(call2291,"kind", [0]);
  var string2293 = new GraceString("identifier");
  var opresult2295 = callmethod(call2292, "==", [1], string2293);
  lineNumber = 650
  lineNumber = 1
  lineNumber = 650
  lineNumber = 1
  lineNumber = 650
  var call2296 = callmethod(var_p,"dtype", [0]);
  var call2297 = callmethod(call2296,"kind", [0]);
  var string2298 = new GraceString("type");
  var opresult2300 = callmethod(call2297, "==", [1], string2298);
  var opresult2302 = callmethod(opresult2295, "||", [1], opresult2300);
  if (Grace_isTrue(opresult2302)) {
  lineNumber = 651
  lineNumber = 1
  lineNumber = 651
  lineNumber = 1
  lineNumber = 651
  var call2303 = callmethod(var_p,"dtype", [0]);
  var call2304 = callmethod(call2303,"value", [0]);
onSelf = true;
  var call2305 = callmethod(this, "escapeident", [1], call2304);
  var var_typeid = call2305;
  lineNumber = 651;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_typeid)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'typeid' to be of type Dynamic"))
  lineNumber = 652
  var call2307 = callmethod(var_topLevelTypes,"contains", [1], var_typeid);
  if (Grace_isTrue(call2307)) {
  lineNumber = 653
  lineNumber = 654
  lineNumber = 653
  var string2308 = new GraceString("");
  var opresult2310 = callmethod(string2308, "++", [1], var_func);
  var string2311 = new GraceString(".paramTypes.push([");
  var opresult2313 = callmethod(opresult2310, "++", [1], string2311);
  lineNumber = 654
  var string2314 = new GraceString("type_");
  var opresult2316 = callmethod(string2314, "++", [1], var_typeid);
  var string2317 = new GraceString(", \"");
  var opresult2319 = callmethod(opresult2316, "++", [1], string2317);
  lineNumber = 1
  lineNumber = 654
  var call2320 = callmethod(var_p,"value", [0]);
onSelf = true;
  var call2321 = callmethod(this, "escapestring", [1], call2320);
  var opresult2323 = callmethod(opresult2319, "++", [1], call2321);
  var string2324 = new GraceString("\"]);");
  var opresult2326 = callmethod(opresult2323, "++", [1], string2324);
  var opresult2328 = callmethod(opresult2313, "++", [1], opresult2326);
onSelf = true;
  var call2329 = callmethod(this, "out", [1], opresult2328);
  var if2306 = call2329;
  } else {
  lineNumber = 656
  var string2330 = new GraceString("");
  var opresult2332 = callmethod(string2330, "++", [1], var_func);
  var string2333 = new GraceString(".paramTypes.push([]);");
  var opresult2335 = callmethod(opresult2332, "++", [1], string2333);
onSelf = true;
  var call2336 = callmethod(this, "out", [1], opresult2335);
  var if2306 = call2336;
}
  var if2290 = if2306;
  } else {
  lineNumber = 659
  var string2337 = new GraceString("");
  var opresult2339 = callmethod(string2337, "++", [1], var_func);
  var string2340 = new GraceString(".paramTypes.push([]);");
  var opresult2342 = callmethod(opresult2339, "++", [1], string2340);
onSelf = true;
  var call2343 = callmethod(this, "out", [1], opresult2342);
  var if2290 = call2343;
}
  var if2285 = if2290;
  } else {
  lineNumber = 662
  var string2344 = new GraceString("");
  var opresult2346 = callmethod(string2344, "++", [1], var_func);
  var string2347 = new GraceString(".paramTypes.push([]);");
  var opresult2349 = callmethod(opresult2346, "++", [1], string2347);
onSelf = true;
  var call2350 = callmethod(this, "out", [1], opresult2349);
  var if2285 = call2350;
}
  lineNumber = 665
  lineNumber = 664
  var opresult2352 = callmethod(var_pi, "+", [1], new GraceNum(1));
  var_pi = opresult2352;
  return opresult2352;
};
  var call2353 = callmethod(Grace_prelude,"for()do", [1, 1], call2283, block2284);
  return call2353;
};
  var call2354 = callmethod(Grace_prelude,"for()do", [1, 1], call2281, block2282);
  return call2354
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func2273.paramCounts = [2];
  func2273.variableArities = [false];
  this.methods["compilemethodtypes"] = func2273;
  lineNumber = 668
var func2355 = function(argcv) {    // method compilewhile(1)
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func2355.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method compilewhile(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 669
  var var_myc = var_auto__95__count;
  lineNumber = 669;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_myc)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'myc' to be of type Dynamic"))
  lineNumber = 671
  lineNumber = 670
  var opresult2357 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2357;
  lineNumber = 671
  lineNumber = 1
  lineNumber = 671
  var call2358 = callmethod(var_o,"value", [0]);
onSelf = true;
  var call2359 = callmethod(this, "compilenode", [1], call2358);
  var var_cond = call2359;
  lineNumber = 671;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_cond)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'cond' to be of type Dynamic"))
  lineNumber = 672
  var string2360 = new GraceString("  var wcond");
  var opresult2362 = callmethod(string2360, "++", [1], var_myc);
  var string2363 = new GraceString(" = Grace_isTrue(");
  var opresult2365 = callmethod(opresult2362, "++", [1], string2363);
  var opresult2367 = callmethod(opresult2365, "++", [1], var_cond);
  var string2368 = new GraceString(");");
  var opresult2370 = callmethod(opresult2367, "++", [1], string2368);
onSelf = true;
  var call2371 = callmethod(this, "out", [1], opresult2370);
  lineNumber = 673
  var string2372 = new GraceString("  while (wcond");
  var opresult2374 = callmethod(string2372, "++", [1], var_myc);
  var string2375 = new GraceString(") {");
  var opresult2377 = callmethod(opresult2374, "++", [1], string2375);
onSelf = true;
  var call2378 = callmethod(this, "out", [1], opresult2377);
  lineNumber = 674
  var string2379 = new GraceString("null");
  var var_tret = string2379;
  lineNumber = 674;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_tret)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'tret' to be of type Dynamic"))
  lineNumber = 675
  lineNumber = 1
  lineNumber = 675
  var call2380 = callmethod(var_o,"body", [0]);
  var block2381 = Grace_allocObject();
  block2381.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2381.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2381.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2381.methods["match"] = GraceBlock_match;
  block2381.receiver = this;
  block2381.className = 'block<genjs:675>';
  block2381.real = function(
var_l
) {
  sourceObject = this;
  lineNumber = 676
onSelf = true;
  var call2382 = callmethod(this, "compilenode", [1], var_l);
  var_tret = call2382;
  return call2382;
};
  var call2383 = callmethod(Grace_prelude,"for()do", [1, 1], call2380, block2381);
  lineNumber = 678
  lineNumber = 1
  lineNumber = 678
  var call2384 = callmethod(var_o,"value", [0]);
onSelf = true;
  var call2385 = callmethod(this, "compilenode", [1], call2384);
  var_cond = call2385;
  lineNumber = 679
  var string2386 = new GraceString("  wcond");
  var opresult2388 = callmethod(string2386, "++", [1], var_myc);
  var string2389 = new GraceString(" = Grace_isTrue(");
  var opresult2391 = callmethod(opresult2388, "++", [1], string2389);
  var opresult2393 = callmethod(opresult2391, "++", [1], var_cond);
  var string2394 = new GraceString(");");
  var opresult2396 = callmethod(opresult2393, "++", [1], string2394);
onSelf = true;
  var call2397 = callmethod(this, "out", [1], opresult2396);
  lineNumber = 680
  var string2398 = new GraceString("  }");
onSelf = true;
  var call2399 = callmethod(this, "out", [1], string2398);
  lineNumber = 682
  lineNumber = 1
  lineNumber = 681
  var call2400 = callmethod(var_o,"register:=", [1], var_cond);
  return call2400
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func2355.paramCounts = [1];
  func2355.variableArities = [false];
  this.methods["compilewhile"] = func2355;
  lineNumber = 683
var func2401 = function(argcv) {    // method compileif(1)
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func2401.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method compileif(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 684
  var var_myc = var_auto__95__count;
  lineNumber = 684;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_myc)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'myc' to be of type Dynamic"))
  lineNumber = 686
  lineNumber = 685
  var opresult2403 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2403;
  lineNumber = 686
  var string2404 = new GraceString("  if (Grace_isTrue(");
  lineNumber = 1
  lineNumber = 686
  var call2405 = callmethod(var_o,"value", [0]);
onSelf = true;
  var call2406 = callmethod(this, "compilenode", [1], call2405);
  var opresult2408 = callmethod(string2404, "++", [1], call2406);
  var string2409 = new GraceString(")) {");
  var opresult2411 = callmethod(opresult2408, "++", [1], string2409);
onSelf = true;
  var call2412 = callmethod(this, "out", [1], opresult2411);
  lineNumber = 687
  var string2413 = new GraceString("undefined");
  var var_tret = string2413;
  lineNumber = 687;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_tret)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'tret' to be of type Dynamic"))
  lineNumber = 688
  var string2414 = new GraceString("undefined");
  var var_fret = string2414;
  lineNumber = 688;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_fret)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'fret' to be of type Dynamic"))
  lineNumber = 689
  lineNumber = 1
  lineNumber = 689
  var call2415 = callmethod(var_o,"thenblock", [0]);
  var block2416 = Grace_allocObject();
  block2416.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2416.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2416.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2416.methods["match"] = GraceBlock_match;
  block2416.receiver = this;
  block2416.className = 'block<genjs:689>';
  block2416.real = function(
var_l
) {
  sourceObject = this;
  lineNumber = 690
onSelf = true;
  var call2417 = callmethod(this, "compilenode", [1], var_l);
  var_tret = call2417;
  return call2417;
};
  var call2418 = callmethod(Grace_prelude,"for()do", [1, 1], call2415, block2416);
  lineNumber = 692
  var string2419 = new GraceString("  var if");
  var opresult2421 = callmethod(string2419, "++", [1], var_myc);
  var string2422 = new GraceString(" = ");
  var opresult2424 = callmethod(opresult2421, "++", [1], string2422);
  var opresult2426 = callmethod(opresult2424, "++", [1], var_tret);
  var string2427 = new GraceString(";");
  var opresult2429 = callmethod(opresult2426, "++", [1], string2427);
onSelf = true;
  var call2430 = callmethod(this, "out", [1], opresult2429);
  lineNumber = 693
  lineNumber = 1
  lineNumber = 693
  lineNumber = 1
  lineNumber = 693
  var call2432 = callmethod(var_o,"elseblock", [0]);
  var call2433 = callmethod(call2432,"size", [0]);
  var opresult2435 = callmethod(call2433, ">", [1], new GraceNum(0));
  if (Grace_isTrue(opresult2435)) {
  lineNumber = 694
  var string2436 = new GraceString("  } else {");
onSelf = true;
  var call2437 = callmethod(this, "out", [1], string2436);
  lineNumber = 695
  lineNumber = 1
  lineNumber = 695
  var call2438 = callmethod(var_o,"elseblock", [0]);
  var block2439 = Grace_allocObject();
  block2439.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2439.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2439.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2439.methods["match"] = GraceBlock_match;
  block2439.receiver = this;
  block2439.className = 'block<genjs:695>';
  block2439.real = function(
var_l
) {
  sourceObject = this;
  lineNumber = 696
onSelf = true;
  var call2440 = callmethod(this, "compilenode", [1], var_l);
  var_fret = call2440;
  return call2440;
};
  var call2441 = callmethod(Grace_prelude,"for()do", [1, 1], call2438, block2439);
  lineNumber = 698
  var string2442 = new GraceString("  var if");
  var opresult2444 = callmethod(string2442, "++", [1], var_myc);
  var string2445 = new GraceString(" = ");
  var opresult2447 = callmethod(opresult2444, "++", [1], string2445);
  var opresult2449 = callmethod(opresult2447, "++", [1], var_fret);
  var string2450 = new GraceString(";");
  var opresult2452 = callmethod(opresult2449, "++", [1], string2450);
onSelf = true;
  var call2453 = callmethod(this, "out", [1], opresult2452);
  var if2431 = call2453;
}
  lineNumber = 700
  var string2454 = new GraceString("}");
onSelf = true;
  var call2455 = callmethod(this, "out", [1], string2454);
  lineNumber = 702
  lineNumber = 1
  lineNumber = 702
  lineNumber = 701
  var string2456 = new GraceString("if");
  var opresult2458 = callmethod(string2456, "++", [1], var_myc);
  var call2459 = callmethod(var_o,"register:=", [1], opresult2458);
  return call2459
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func2401.paramCounts = [1];
  func2401.variableArities = [false];
  this.methods["compileif"] = func2401;
  lineNumber = 703
var func2460 = function(argcv) {    // method compileidentifier(1)
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func2460.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method compileidentifier(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 704
  lineNumber = 1
  lineNumber = 704
  var call2461 = callmethod(var_o,"value", [0]);
  var var_name = call2461;
  lineNumber = 704;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_name)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'name' to be of type Dynamic"))
  lineNumber = 705
  var string2463 = new GraceString("self");
  var opresult2465 = callmethod(var_name, "==", [1], string2463);
  if (Grace_isTrue(opresult2465)) {
  lineNumber = 707
  lineNumber = 1
  lineNumber = 706
  var string2466 = new GraceString("this");
  var call2467 = callmethod(var_o,"register:=", [1], string2466);
  var if2462 = call2467;
  } else {
  lineNumber = 709
  lineNumber = 707
  var string2469 = new GraceString("...");
  var opresult2471 = callmethod(var_name, "==", [1], string2469);
  if (Grace_isTrue(opresult2471)) {
  lineNumber = 709
  lineNumber = 1
  lineNumber = 708
  var string2472 = new GraceString("ellipsis");
  var call2473 = callmethod(var_o,"register:=", [1], string2472);
  var if2468 = call2473;
  } else {
  lineNumber = 710
  var call2475 = callmethod(var_modules,"contains", [1], var_name);
  if (Grace_isTrue(call2475)) {
  lineNumber = 711
  var string2476 = new GraceString("  // WARNING: module support not implemented in JS backend");
onSelf = true;
  var call2477 = callmethod(this, "out", [1], string2476);
  lineNumber = 712
  lineNumber = 713
  lineNumber = 712
  var string2478 = new GraceString("  \"var_val_");
  var opresult2480 = callmethod(string2478, "++", [1], var_name);
  var opresult2482 = callmethod(opresult2480, "++", [1], var_auto__95__count);
  lineNumber = 713
  var string2483 = new GraceString("\" = load %object** @.module.");
  var opresult2485 = callmethod(opresult2482, "++", [1], string2483);
  var opresult2487 = callmethod(opresult2485, "++", [1], var_name);
onSelf = true;
  var call2488 = callmethod(this, "out", [1], opresult2487);
  var if2474 = call2488;
  } else {
  lineNumber = 715
  var call2489 = callmethod(var_usedvars,"push", [1], var_name);
  lineNumber = 716
  lineNumber = 1
  lineNumber = 716
onSelf = true;
  var call2490 = callmethod(this, "varf", [1], var_name);
  var call2491 = callmethod(var_o,"register:=", [1], call2490);
  var if2474 = call2491;
}
  var if2468 = if2474;
}
  var if2462 = if2468;
}
  return if2462
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func2460.paramCounts = [1];
  func2460.variableArities = [false];
  this.methods["compileidentifier"] = func2460;
  lineNumber = 720
var func2492 = function(argcv) {    // method compilebind(1)
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func2492.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method compilebind(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 721
  lineNumber = 1
  lineNumber = 721
  var call2493 = callmethod(var_o,"dest", [0]);
  var var_dest = call2493;
  lineNumber = 721;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_dest)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'dest' to be of type Dynamic"))
  lineNumber = 722
  var string2494 = new GraceString("");
  var var_val = string2494;
  lineNumber = 722;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_val)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'val' to be of type Dynamic"))
  lineNumber = 723
  var string2495 = new GraceString("");
  var var_c = string2495;
  lineNumber = 723;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_c)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'c' to be of type Dynamic"))
  lineNumber = 724
  var string2496 = new GraceString("");
  var var_r = string2496;
  lineNumber = 724;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_r)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'r' to be of type Dynamic"))
  lineNumber = 725
  lineNumber = 1
  lineNumber = 725
  var call2498 = callmethod(var_dest,"kind", [0]);
  var string2499 = new GraceString("identifier");
  var opresult2501 = callmethod(call2498, "==", [1], string2499);
  if (Grace_isTrue(opresult2501)) {
  lineNumber = 727
  lineNumber = 726
  lineNumber = 1
  lineNumber = 726
  var call2502 = callmethod(var_o,"value", [0]);
  var_val = call2502;
  lineNumber = 727
onSelf = true;
  var call2503 = callmethod(this, "compilenode", [1], var_val);
  var_val = call2503;
  lineNumber = 728
  lineNumber = 1
  lineNumber = 728
  var call2504 = callmethod(var_dest,"value", [0]);
onSelf = true;
  var call2505 = callmethod(this, "escapestring", [1], call2504);
  var var_nm = call2505;
  lineNumber = 728;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_nm)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'nm' to be of type Dynamic"))
  lineNumber = 729
  var call2506 = callmethod(var_usedvars,"push", [1], var_nm);
  lineNumber = 730
  var string2507 = new GraceString("  ");
onSelf = true;
  var call2508 = callmethod(this, "varf", [1], var_nm);
  var opresult2510 = callmethod(string2507, "++", [1], call2508);
  var string2511 = new GraceString(" = ");
  var opresult2513 = callmethod(opresult2510, "++", [1], string2511);
  var opresult2515 = callmethod(opresult2513, "++", [1], var_val);
  var string2516 = new GraceString(";");
  var opresult2518 = callmethod(opresult2515, "++", [1], string2516);
onSelf = true;
  var call2519 = callmethod(this, "out", [1], opresult2518);
  lineNumber = 732
  lineNumber = 1
  lineNumber = 731
  var call2520 = callmethod(var_o,"register:=", [1], var_val);
  var if2497 = call2520;
  } else {
  lineNumber = 740
  lineNumber = 732
  lineNumber = 1
  lineNumber = 732
  var call2522 = callmethod(var_dest,"kind", [0]);
  var string2523 = new GraceString("member");
  var opresult2525 = callmethod(call2522, "==", [1], string2523);
  if (Grace_isTrue(opresult2525)) {
  lineNumber = 733
  lineNumber = 734
  lineNumber = 733
  lineNumber = 1
  lineNumber = 733
  lineNumber = 1
  lineNumber = 733
  var call2527 = callmethod(var_dest,"value", [0]);
  var call2528 = callmethod(call2527,"size", [0]);
  var diff2530 = callmethod(call2528, "-", [1], new GraceNum(1));
  lineNumber = 1
  lineNumber = 733
  lineNumber = 1
  lineNumber = 733
  var call2531 = callmethod(var_dest,"value", [0]);
  var call2532 = callmethod(call2531,"size", [0]);
  lineNumber = 1
  lineNumber = 733
  var call2533 = callmethod(var_dest,"value", [0]);
  var call2534 = callmethod(call2533,"substringFrom()to", [1, 1], diff2530, call2532);
  lineNumber = 734
  var string2535 = new GraceString(":=");
  var opresult2537 = callmethod(call2534, "!=", [1], string2535);
  if (Grace_isTrue(opresult2537)) {
  lineNumber = 736
  lineNumber = 1
  lineNumber = 736
  lineNumber = 735
  lineNumber = 1
  lineNumber = 735
  var call2538 = callmethod(var_dest,"value", [0]);
  var string2539 = new GraceString(":=");
  var opresult2541 = callmethod(call2538, "++", [1], string2539);
  var call2542 = callmethod(var_dest,"value:=", [1], opresult2541);
  var if2526 = call2542;
}
  lineNumber = 737
  lineNumber = 1
  lineNumber = 737
  var call2544 = callmethod(var_dest,"value", [0]);
  lineNumber = 1
  lineNumber = 737
  var call2546 = callmethod(var_o,"value", [0]);
  var array2545 = new GraceList([
call2546,
]);

  lineNumber = 1
  lineNumber = 737
  var call2547 = callmethod(var_ast,"callWithPart", [0]);
  var call2548 = callmethod(call2547,"new", [2], call2544, array2545);
  var array2543 = new GraceList([
call2548,
]);

  lineNumber = 1
  lineNumber = 737
  var call2549 = callmethod(var_ast,"callNode", [0]);
  var call2550 = callmethod(call2549,"new", [2], var_dest, array2543);
  var_c = call2550;
  lineNumber = 738
onSelf = true;
  var call2551 = callmethod(this, "compilenode", [1], var_c);
  var_r = call2551;
  lineNumber = 740
  lineNumber = 1
  lineNumber = 739
  var call2552 = callmethod(var_o,"register:=", [1], var_r);
  var if2521 = call2552;
  } else {
  lineNumber = 746
  lineNumber = 740
  lineNumber = 1
  lineNumber = 740
  var call2554 = callmethod(var_dest,"kind", [0]);
  var string2555 = new GraceString("index");
  var opresult2557 = callmethod(call2554, "==", [1], string2555);
  if (Grace_isTrue(opresult2557)) {
  lineNumber = 741
  var string2558 = new GraceString("[]:=");
  lineNumber = 1
  lineNumber = 741
  var call2559 = callmethod(var_dest,"value", [0]);
  lineNumber = 1
  lineNumber = 741
  var call2560 = callmethod(var_ast,"memberNode", [0]);
  var call2561 = callmethod(call2560,"new", [2], string2558, call2559);
  var var_imem = call2561;
  lineNumber = 741;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_imem)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'imem' to be of type Dynamic"))
  lineNumber = 742
  lineNumber = 1
  lineNumber = 742
  var call2563 = callmethod(var_imem,"value", [0]);
  lineNumber = 1
  lineNumber = 742
  var call2565 = callmethod(var_dest,"index", [0]);
  lineNumber = 1
  lineNumber = 742
  var call2566 = callmethod(var_o,"value", [0]);
  var array2564 = new GraceList([
call2565,
call2566,
]);

  lineNumber = 1
  lineNumber = 742
  var call2567 = callmethod(var_ast,"callWithPart", [0]);
  var call2568 = callmethod(call2567,"new", [2], call2563, array2564);
  var array2562 = new GraceList([
call2568,
]);

  lineNumber = 1
  lineNumber = 742
  var call2569 = callmethod(var_ast,"callNode", [0]);
  var call2570 = callmethod(call2569,"new", [2], var_imem, array2562);
  var_c = call2570;
  lineNumber = 743
onSelf = true;
  var call2571 = callmethod(this, "compilenode", [1], var_c);
  var_r = call2571;
  lineNumber = 745
  lineNumber = 1
  lineNumber = 744
  var call2572 = callmethod(var_o,"register:=", [1], var_r);
  var if2553 = call2572;
}
  var if2521 = if2553;
}
  var if2497 = if2521;
}
  return if2497
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func2492.paramCounts = [1];
  func2492.variableArities = [false];
  this.methods["compilebind"] = func2492;
  lineNumber = 747
var func2573 = function(argcv) {    // method compiledefdec(1)
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func2573.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method compiledefdec(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 748
  var var_nm;
  lineNumber = 749
  var var_snm;
  lineNumber = 750
  lineNumber = 1
  lineNumber = 750
  lineNumber = 1
  lineNumber = 750
  var call2575 = callmethod(var_o,"name", [0]);
  var call2576 = callmethod(call2575,"kind", [0]);
  var string2577 = new GraceString("generic");
  var opresult2579 = callmethod(call2576, "==", [1], string2577);
  if (Grace_isTrue(opresult2579)) {
  lineNumber = 752
  lineNumber = 751
  lineNumber = 1
  lineNumber = 751
  lineNumber = 1
  lineNumber = 751
  lineNumber = 1
  lineNumber = 751
  var call2580 = callmethod(var_o,"name", [0]);
  var call2581 = callmethod(call2580,"value", [0]);
  var call2582 = callmethod(call2581,"value", [0]);
  var_snm = call2582;
  var if2574 = call2582;
  } else {
  lineNumber = 754
  lineNumber = 753
  lineNumber = 1
  lineNumber = 753
  lineNumber = 1
  lineNumber = 753
  var call2583 = callmethod(var_o,"name", [0]);
  var call2584 = callmethod(call2583,"value", [0]);
  var_snm = call2584;
  var if2574 = call2584;
}
  lineNumber = 755
onSelf = true;
  var call2585 = callmethod(this, "escapestring", [1], var_snm);
  var_nm = call2585;
  lineNumber = 756
  var call2586 = callmethod(var_declaredvars,"push", [1], var_nm);
  lineNumber = 757
  lineNumber = 1
  lineNumber = 757
  var call2587 = callmethod(var_o,"value", [0]);
onSelf = true;
  var call2588 = callmethod(this, "compilenode", [1], call2587);
  var var_val = call2588;
  lineNumber = 757;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_val)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'val' to be of type Dynamic"))
  lineNumber = 758
  var string2589 = new GraceString("  var ");
onSelf = true;
  var call2590 = callmethod(this, "varf", [1], var_nm);
  var opresult2592 = callmethod(string2589, "++", [1], call2590);
  var string2593 = new GraceString(" = ");
  var opresult2595 = callmethod(opresult2592, "++", [1], string2593);
  var opresult2597 = callmethod(opresult2595, "++", [1], var_val);
  var string2598 = new GraceString(";");
  var opresult2600 = callmethod(opresult2597, "++", [1], string2598);
onSelf = true;
  var call2601 = callmethod(this, "out", [1], opresult2600);
  lineNumber = 759
  var opresult2604 = callmethod(var_compilationDepth, "==", [1], new GraceNum(1));
  if (Grace_isTrue(opresult2604)) {
  lineNumber = 760
  lineNumber = 1
  lineNumber = 760
  var call2605 = callmethod(var_o,"name", [0]);
  lineNumber = 1
  lineNumber = 760
  lineNumber = 1
  lineNumber = 760
  var call2607 = callmethod(var_o,"name", [0]);
  var call2608 = callmethod(call2607,"value", [0]);
  lineNumber = 1
  lineNumber = 760
  var call2609 = callmethod(var_ast,"signaturePart", [0]);
  var call2610 = callmethod(call2609,"new", [1], call2608);
  var array2606 = new GraceList([
call2610,
]);

  lineNumber = 761
  lineNumber = 1
  lineNumber = 761
  var call2612 = callmethod(var_o,"name", [0]);
  var array2611 = new GraceList([
call2612,
]);

  var bool2613 = new GraceBoolean(false)
  lineNumber = 760
  lineNumber = 1
  lineNumber = 760
  var call2614 = callmethod(var_ast,"methodNode", [0]);
  var call2615 = callmethod(call2614,"new", [4], call2605, array2606, array2611, bool2613);
onSelf = true;
  var call2616 = callmethod(this, "compilenode", [1], call2615);
  lineNumber = 762
  var string2618 = new GraceString("parent");
  var call2619 = callmethod(var_ast,"findAnnotation", [2], var_o, string2618);
  if (Grace_isTrue(call2619)) {
  lineNumber = 763
  var string2620 = new GraceString("  this.superobj = ");
  var opresult2622 = callmethod(string2620, "++", [1], var_val);
  var string2623 = new GraceString(";");
  var opresult2625 = callmethod(opresult2622, "++", [1], string2623);
onSelf = true;
  var call2626 = callmethod(this, "out", [1], opresult2625);
  var if2617 = call2626;
}
  lineNumber = 765
  var string2627 = new GraceString("  this.methods[\"");
  var opresult2629 = callmethod(string2627, "++", [1], var_nm);
  var string2630 = new GraceString("\"].debug = \"def\";");
  var opresult2632 = callmethod(opresult2629, "++", [1], string2630);
onSelf = true;
  var call2633 = callmethod(this, "out", [1], opresult2632);
  var if2602 = call2633;
}
  lineNumber = 767
  lineNumber = 1
  lineNumber = 767
  var call2635 = callmethod(var_o,"dtype", [0]);
  var bool2636 = new GraceBoolean(false)
  var opresult2638 = callmethod(call2635, "!=", [1], bool2636);
  if (Grace_isTrue(opresult2638)) {
  lineNumber = 769
  lineNumber = 768
  lineNumber = 1
  lineNumber = 768
  var call2639 = callmethod(var_o,"line", [0]);
  var_linenum = call2639;
  lineNumber = 769
  var string2640 = new GraceString("  lineNumber = ");
  var opresult2642 = callmethod(string2640, "++", [1], var_linenum);
  var string2643 = new GraceString(";");
  var opresult2645 = callmethod(opresult2642, "++", [1], string2643);
onSelf = true;
  var call2646 = callmethod(this, "out", [1], opresult2645);
  lineNumber = 770
  var string2647 = new GraceString("  if (!Grace_isTrue(callmethod(");
  lineNumber = 1
  lineNumber = 770
  var call2648 = callmethod(var_o,"dtype", [0]);
onSelf = true;
  var call2649 = callmethod(this, "compilenode", [1], call2648);
  var opresult2651 = callmethod(string2647, "++", [1], call2649);
  var string2652 = new GraceString(", \"match\",");
  var opresult2654 = callmethod(opresult2651, "++", [1], string2652);
onSelf = true;
  var call2655 = callmethod(this, "out", [1], opresult2654);
  lineNumber = 771
  var string2656 = new GraceString("    [1], ");
onSelf = true;
  var call2657 = callmethod(this, "varf", [1], var_nm);
  var opresult2659 = callmethod(string2656, "++", [1], call2657);
  var string2660 = new GraceString(")))");
  var opresult2662 = callmethod(opresult2659, "++", [1], string2660);
onSelf = true;
  var call2663 = callmethod(this, "out", [1], opresult2662);
  lineNumber = 772
  var string2664 = new GraceString("      throw new GraceExceptionPacket(TypeErrorObject,");
onSelf = true;
  var call2665 = callmethod(this, "out", [1], string2664);
  lineNumber = 773
  var string2666 = new GraceString("            new GraceString(\"expected \"");
onSelf = true;
  var call2667 = callmethod(this, "out", [1], string2666);
  lineNumber = 774
  var string2668 = new GraceString("            + \"initial value of def '");
  var opresult2670 = callmethod(string2668, "++", [1], var_snm);
  var string2671 = new GraceString("' to be of type ");
  var opresult2673 = callmethod(opresult2670, "++", [1], string2671);
  lineNumber = 1
  lineNumber = 774
  lineNumber = 1
  lineNumber = 774
  var call2674 = callmethod(var_o,"dtype", [0]);
  var call2675 = callmethod(call2674,"value", [0]);
  var opresult2677 = callmethod(opresult2673, "++", [1], call2675);
  var string2678 = new GraceString("\"))");
  var opresult2680 = callmethod(opresult2677, "++", [1], string2678);
onSelf = true;
  var call2681 = callmethod(this, "out", [1], opresult2680);
  var if2634 = call2681;
}
  lineNumber = 777
  lineNumber = 1
  lineNumber = 776
  var call2682 = callmethod(var_o,"register:=", [1], var_val);
  return call2682
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func2573.paramCounts = [1];
  func2573.variableArities = [false];
  this.methods["compiledefdec"] = func2573;
  lineNumber = 778
var func2683 = function(argcv) {    // method compilevardec(1)
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func2683.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method compilevardec(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 779
  lineNumber = 1
  lineNumber = 779
  lineNumber = 1
  lineNumber = 779
  var call2684 = callmethod(var_o,"name", [0]);
  var call2685 = callmethod(call2684,"value", [0]);
onSelf = true;
  var call2686 = callmethod(this, "escapestring", [1], call2685);
  var var_nm = call2686;
  lineNumber = 779;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_nm)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'nm' to be of type Dynamic"))
  lineNumber = 780
  var call2687 = callmethod(var_declaredvars,"push", [1], var_nm);
  lineNumber = 781
  lineNumber = 1
  lineNumber = 781
  var call2688 = callmethod(var_o,"value", [0]);
  var var_val = call2688;
  lineNumber = 781;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_val)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'val' to be of type Dynamic"))
  lineNumber = 782
  var bool2690 = new GraceBoolean(false)
  var opresult2692 = callmethod(bool2690, "!=", [1], var_val);
  if (Grace_isTrue(opresult2692)) {
  lineNumber = 783
onSelf = true;
  var call2693 = callmethod(this, "compilenode", [1], var_val);
  var_val = call2693;
  lineNumber = 784
  var string2694 = new GraceString("  var ");
onSelf = true;
  var call2695 = callmethod(this, "varf", [1], var_nm);
  var opresult2697 = callmethod(string2694, "++", [1], call2695);
  var string2698 = new GraceString(" = ");
  var opresult2700 = callmethod(opresult2697, "++", [1], string2698);
  var opresult2702 = callmethod(opresult2700, "++", [1], var_val);
  var string2703 = new GraceString(";");
  var opresult2705 = callmethod(opresult2702, "++", [1], string2703);
onSelf = true;
  var call2706 = callmethod(this, "out", [1], opresult2705);
  var if2689 = call2706;
  } else {
  lineNumber = 786
  var string2707 = new GraceString("  var ");
onSelf = true;
  var call2708 = callmethod(this, "varf", [1], var_nm);
  var opresult2710 = callmethod(string2707, "++", [1], call2708);
  var string2711 = new GraceString(";");
  var opresult2713 = callmethod(opresult2710, "++", [1], string2711);
onSelf = true;
  var call2714 = callmethod(this, "out", [1], opresult2713);
  lineNumber = 788
  lineNumber = 787
  var string2715 = new GraceString("false");
  var_val = string2715;
  var if2689 = string2715;
}
  lineNumber = 789
  var opresult2718 = callmethod(var_compilationDepth, "==", [1], new GraceNum(1));
  if (Grace_isTrue(opresult2718)) {
  lineNumber = 790
  lineNumber = 1
  lineNumber = 790
  var call2719 = callmethod(var_o,"name", [0]);
  lineNumber = 1
  lineNumber = 790
  lineNumber = 1
  lineNumber = 790
  var call2721 = callmethod(var_o,"name", [0]);
  var call2722 = callmethod(call2721,"value", [0]);
  lineNumber = 1
  lineNumber = 790
  var call2723 = callmethod(var_ast,"signaturePart", [0]);
  var call2724 = callmethod(call2723,"new", [1], call2722);
  var array2720 = new GraceList([
call2724,
]);

  lineNumber = 791
  lineNumber = 1
  lineNumber = 791
  var call2726 = callmethod(var_o,"name", [0]);
  var array2725 = new GraceList([
call2726,
]);

  var bool2727 = new GraceBoolean(false)
  lineNumber = 790
  lineNumber = 1
  lineNumber = 790
  var call2728 = callmethod(var_ast,"methodNode", [0]);
  var call2729 = callmethod(call2728,"new", [4], call2719, array2720, array2725, bool2727);
onSelf = true;
  var call2730 = callmethod(this, "compilenode", [1], call2729);
  lineNumber = 792
  lineNumber = 1
  lineNumber = 792
  lineNumber = 1
  lineNumber = 792
  var call2731 = callmethod(var_o,"name", [0]);
  var call2732 = callmethod(call2731,"value", [0]);
  var string2733 = new GraceString(":=");
  var opresult2735 = callmethod(call2732, "++", [1], string2733);
  var bool2736 = new GraceBoolean(false)
  lineNumber = 1
  lineNumber = 792
  var call2737 = callmethod(var_ast,"identifierNode", [0]);
  var call2738 = callmethod(call2737,"new", [2], opresult2735, bool2736);
  var var_assignID = call2738;
  lineNumber = 792;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_assignID)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'assignID' to be of type Dynamic"))
  lineNumber = 793
  var string2739 = new GraceString("_var_assign_tmp");
  var bool2740 = new GraceBoolean(false)
  lineNumber = 1
  lineNumber = 793
  var call2741 = callmethod(var_ast,"identifierNode", [0]);
  var call2742 = callmethod(call2741,"new", [2], string2739, bool2740);
  var var_tmpID = call2742;
  lineNumber = 793;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_tmpID)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'tmpID' to be of type Dynamic"))
  lineNumber = 794
  lineNumber = 795
  lineNumber = 1
  lineNumber = 795
  var call2744 = callmethod(var_assignID,"value", [0]);
  var array2745 = new GraceList([
var_tmpID,
]);

  lineNumber = 1
  lineNumber = 795
  var call2746 = callmethod(var_ast,"signaturePart", [0]);
  var call2747 = callmethod(call2746,"new", [2], call2744, array2745);
  var array2743 = new GraceList([
call2747,
]);

  lineNumber = 796
  lineNumber = 1
  lineNumber = 796
  var call2749 = callmethod(var_o,"name", [0]);
  lineNumber = 1
  lineNumber = 796
  var call2750 = callmethod(var_ast,"bindNode", [0]);
  var call2751 = callmethod(call2750,"new", [2], call2749, var_tmpID);
  var array2748 = new GraceList([
call2751,
]);

  var bool2752 = new GraceBoolean(false)
  lineNumber = 794
  lineNumber = 1
  lineNumber = 794
  var call2753 = callmethod(var_ast,"methodNode", [0]);
  var call2754 = callmethod(call2753,"new", [4], var_assignID, array2743, array2748, bool2752);
onSelf = true;
  var call2755 = callmethod(this, "compilenode", [1], call2754);
  lineNumber = 797
  var string2756 = new GraceString("  this.methods[\"");
  var opresult2758 = callmethod(string2756, "++", [1], var_nm);
  var string2759 = new GraceString("\"].debug = \"var\";");
  var opresult2761 = callmethod(opresult2758, "++", [1], string2759);
onSelf = true;
  var call2762 = callmethod(this, "out", [1], opresult2761);
  var if2716 = call2762;
}
  lineNumber = 799
  lineNumber = 1
  lineNumber = 799
  var call2764 = callmethod(var_o,"dtype", [0]);
  var bool2765 = new GraceBoolean(false)
  var opresult2767 = callmethod(call2764, "!=", [1], bool2765);
  if (Grace_isTrue(opresult2767)) {
  lineNumber = 800
  var string2769 = new GraceString("false");
  var opresult2771 = callmethod(var_val, "!=", [1], string2769);
  if (Grace_isTrue(opresult2771)) {
  lineNumber = 802
  lineNumber = 801
  lineNumber = 1
  lineNumber = 801
  var call2772 = callmethod(var_o,"line", [0]);
  var_linenum = call2772;
  lineNumber = 802
  var string2773 = new GraceString("  lineNumber = ");
  var opresult2775 = callmethod(string2773, "++", [1], var_linenum);
  var string2776 = new GraceString(";");
  var opresult2778 = callmethod(opresult2775, "++", [1], string2776);
onSelf = true;
  var call2779 = callmethod(this, "out", [1], opresult2778);
  lineNumber = 803
  var string2780 = new GraceString("  if (!Grace_isTrue(callmethod(");
  lineNumber = 1
  lineNumber = 803
  var call2781 = callmethod(var_o,"dtype", [0]);
onSelf = true;
  var call2782 = callmethod(this, "compilenode", [1], call2781);
  var opresult2784 = callmethod(string2780, "++", [1], call2782);
  var string2785 = new GraceString(", \"match\",");
  var opresult2787 = callmethod(opresult2784, "++", [1], string2785);
onSelf = true;
  var call2788 = callmethod(this, "out", [1], opresult2787);
  lineNumber = 804
  var string2789 = new GraceString("    [1], ");
onSelf = true;
  var call2790 = callmethod(this, "varf", [1], var_nm);
  var opresult2792 = callmethod(string2789, "++", [1], call2790);
  var string2793 = new GraceString(")))");
  var opresult2795 = callmethod(opresult2792, "++", [1], string2793);
onSelf = true;
  var call2796 = callmethod(this, "out", [1], opresult2795);
  lineNumber = 805
  var string2797 = new GraceString("      throw new GraceExceptionPacket(TypeErrorObject,");
onSelf = true;
  var call2798 = callmethod(this, "out", [1], string2797);
  lineNumber = 806
  var string2799 = new GraceString("            new GraceString(\"expected \"");
onSelf = true;
  var call2800 = callmethod(this, "out", [1], string2799);
  lineNumber = 807
  var string2801 = new GraceString("            + \"initial value of var '");
  lineNumber = 1
  lineNumber = 807
  lineNumber = 1
  lineNumber = 807
  var call2802 = callmethod(var_o,"name", [0]);
  var call2803 = callmethod(call2802,"value", [0]);
  var opresult2805 = callmethod(string2801, "++", [1], call2803);
  var string2806 = new GraceString("' to be of type ");
  var opresult2808 = callmethod(opresult2805, "++", [1], string2806);
  lineNumber = 1
  lineNumber = 807
  lineNumber = 1
  lineNumber = 807
  var call2809 = callmethod(var_o,"dtype", [0]);
  var call2810 = callmethod(call2809,"value", [0]);
  var opresult2812 = callmethod(opresult2808, "++", [1], call2810);
  var string2813 = new GraceString("\"))");
  var opresult2815 = callmethod(opresult2812, "++", [1], string2813);
onSelf = true;
  var call2816 = callmethod(this, "out", [1], opresult2815);
  var if2768 = call2816;
}
  var if2763 = if2768;
}
  lineNumber = 811
  lineNumber = 1
  lineNumber = 810
  var call2817 = callmethod(var_o,"register:=", [1], var_val);
  return call2817
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func2683.paramCounts = [1];
  func2683.variableArities = [false];
  this.methods["compilevardec"] = func2683;
  lineNumber = 812
var func2818 = function(argcv) {    // method compileindex(1)
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func2818.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method compileindex(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 813
  lineNumber = 1
  lineNumber = 813
  var call2819 = callmethod(var_o,"value", [0]);
onSelf = true;
  var call2820 = callmethod(this, "compilenode", [1], call2819);
  var var_of = call2820;
  lineNumber = 813;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_of)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'of' to be of type Dynamic"))
  lineNumber = 814
  lineNumber = 1
  lineNumber = 814
  var call2821 = callmethod(var_o,"index", [0]);
onSelf = true;
  var call2822 = callmethod(this, "compilenode", [1], call2821);
  var var_index = call2822;
  lineNumber = 814;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_index)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'index' to be of type Dynamic"))
  lineNumber = 815
  lineNumber = 816
  lineNumber = 815
  var string2823 = new GraceString("  var idxres");
  var opresult2825 = callmethod(string2823, "++", [1], var_auto__95__count);
  var string2826 = new GraceString(" = ");
  var opresult2828 = callmethod(opresult2825, "++", [1], string2826);
  var opresult2830 = callmethod(opresult2828, "++", [1], var_of);
  var string2831 = new GraceString(".methods[\"[]\"]");
  var opresult2833 = callmethod(opresult2830, "++", [1], string2831);
  lineNumber = 816
  var string2834 = new GraceString(".call(");
  var opresult2836 = callmethod(opresult2833, "++", [1], string2834);
  var opresult2838 = callmethod(opresult2836, "++", [1], var_of);
  var string2839 = new GraceString(", [1], ");
  var opresult2841 = callmethod(opresult2838, "++", [1], string2839);
  var opresult2843 = callmethod(opresult2841, "++", [1], var_index);
  var string2844 = new GraceString(");");
  var opresult2846 = callmethod(opresult2843, "++", [1], string2844);
onSelf = true;
  var call2847 = callmethod(this, "out", [1], opresult2846);
  lineNumber = 818
  lineNumber = 1
  lineNumber = 818
  lineNumber = 817
  var string2848 = new GraceString("idxres");
  var opresult2850 = callmethod(string2848, "++", [1], var_auto__95__count);
  var call2851 = callmethod(var_o,"register:=", [1], opresult2850);
  lineNumber = 819
  lineNumber = 818
  var opresult2853 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2853;
  return opresult2853
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func2818.paramCounts = [1];
  func2818.variableArities = [false];
  this.methods["compileindex"] = func2818;
  lineNumber = 820
var func2854 = function(argcv) {    // method compilecatchcase(1)
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func2854.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method compilecatchcase(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 821
  var var_myc = var_auto__95__count;
  lineNumber = 821;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_myc)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'myc' to be of type Dynamic"))
  lineNumber = 823
  lineNumber = 822
  var opresult2856 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2856;
  lineNumber = 823
  lineNumber = 1
  lineNumber = 823
  var call2857 = callmethod(var_o,"cases", [0]);
  var var_cases = call2857;
  lineNumber = 823;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_cases)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'cases' to be of type Dynamic"))
  lineNumber = 824
  lineNumber = 1
  lineNumber = 824
  var call2858 = callmethod(var_o,"value", [0]);
onSelf = true;
  var call2859 = callmethod(this, "compilenode", [1], call2858);
  var var_mainblock = call2859;
  lineNumber = 824;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_mainblock)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'mainblock' to be of type Dynamic"))
  lineNumber = 825
  var string2860 = new GraceString("  var cases");
  var opresult2862 = callmethod(string2860, "++", [1], var_myc);
  var string2863 = new GraceString(" = [];");
  var opresult2865 = callmethod(opresult2862, "++", [1], string2863);
onSelf = true;
  var call2866 = callmethod(this, "out", [1], opresult2865);
  lineNumber = 826
  var block2867 = Grace_allocObject();
  block2867.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2867.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2867.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2867.methods["match"] = GraceBlock_match;
  block2867.receiver = this;
  block2867.className = 'block<genjs:826>';
  block2867.real = function(
var_c
) {
  sourceObject = this;
  lineNumber = 827
onSelf = true;
  var call2868 = callmethod(this, "compilenode", [1], var_c);
  var var_e = call2868;
  lineNumber = 827;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_e)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'e' to be of type Dynamic"))
  lineNumber = 828
  var string2869 = new GraceString("  cases");
  var opresult2871 = callmethod(string2869, "++", [1], var_myc);
  var string2872 = new GraceString(".push(");
  var opresult2874 = callmethod(opresult2871, "++", [1], string2872);
  var opresult2876 = callmethod(opresult2874, "++", [1], var_e);
  var string2877 = new GraceString(");");
  var opresult2879 = callmethod(opresult2876, "++", [1], string2877);
onSelf = true;
  var call2880 = callmethod(this, "out", [1], opresult2879);
  return call2880;
};
  var call2881 = callmethod(Grace_prelude,"for()do", [1, 1], var_cases, block2867);
  lineNumber = 830
  var string2882 = new GraceString("false");
  var var_finally = string2882;
  lineNumber = 830;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_finally)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'finally' to be of type Dynamic"))
  lineNumber = 831
  var bool2884 = new GraceBoolean(false)
  lineNumber = 1
  lineNumber = 831
  var call2885 = callmethod(var_o,"finally", [0]);
  var opresult2887 = callmethod(bool2884, "!=", [1], call2885);
  if (Grace_isTrue(opresult2887)) {
  lineNumber = 832
  lineNumber = 1
  lineNumber = 832
  var call2888 = callmethod(var_o,"finally", [0]);
onSelf = true;
  var call2889 = callmethod(this, "compilenode", [1], call2888);
  var_finally = call2889;
  var if2883 = call2889;
}
  lineNumber = 834
  var string2890 = new GraceString("  var catchres");
  var opresult2892 = callmethod(string2890, "++", [1], var_myc);
  var string2893 = new GraceString(" = catchCase(");
  var opresult2895 = callmethod(opresult2892, "++", [1], string2893);
  var opresult2897 = callmethod(opresult2895, "++", [1], var_mainblock);
  var string2898 = new GraceString(",cases");
  var opresult2900 = callmethod(opresult2897, "++", [1], string2898);
  var opresult2902 = callmethod(opresult2900, "++", [1], var_myc);
  var string2903 = new GraceString(",");
  var opresult2905 = callmethod(opresult2902, "++", [1], string2903);
  var opresult2907 = callmethod(opresult2905, "++", [1], var_finally);
  var string2908 = new GraceString(");");
  var opresult2910 = callmethod(opresult2907, "++", [1], string2908);
onSelf = true;
  var call2911 = callmethod(this, "out", [1], opresult2910);
  lineNumber = 836
  lineNumber = 1
  lineNumber = 836
  lineNumber = 835
  var string2912 = new GraceString("catchres");
  var opresult2914 = callmethod(string2912, "++", [1], var_myc);
  var call2915 = callmethod(var_o,"register:=", [1], opresult2914);
  return call2915
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func2854.paramCounts = [1];
  func2854.variableArities = [false];
  this.methods["compilecatchcase"] = func2854;
  lineNumber = 837
var func2916 = function(argcv) {    // method compilematchcase(1)
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func2916.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method compilematchcase(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 838
  var var_myc = var_auto__95__count;
  lineNumber = 838;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_myc)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'myc' to be of type Dynamic"))
  lineNumber = 840
  lineNumber = 839
  var opresult2918 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2918;
  lineNumber = 840
  lineNumber = 1
  lineNumber = 840
  var call2919 = callmethod(var_o,"cases", [0]);
  var var_cases = call2919;
  lineNumber = 840;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_cases)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'cases' to be of type Dynamic"))
  lineNumber = 841
  lineNumber = 1
  lineNumber = 841
  var call2920 = callmethod(var_o,"value", [0]);
onSelf = true;
  var call2921 = callmethod(this, "compilenode", [1], call2920);
  var var_matchee = call2921;
  lineNumber = 841;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_matchee)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'matchee' to be of type Dynamic"))
  lineNumber = 842
  var string2922 = new GraceString("  var cases");
  var opresult2924 = callmethod(string2922, "++", [1], var_myc);
  var string2925 = new GraceString(" = [];");
  var opresult2927 = callmethod(opresult2924, "++", [1], string2925);
onSelf = true;
  var call2928 = callmethod(this, "out", [1], opresult2927);
  lineNumber = 843
  var block2929 = Grace_allocObject();
  block2929.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block2929.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block2929.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block2929.methods["match"] = GraceBlock_match;
  block2929.receiver = this;
  block2929.className = 'block<genjs:843>';
  block2929.real = function(
var_c
) {
  sourceObject = this;
  lineNumber = 844
onSelf = true;
  var call2930 = callmethod(this, "compilenode", [1], var_c);
  var var_e = call2930;
  lineNumber = 844;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_e)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'e' to be of type Dynamic"))
  lineNumber = 845
  var string2931 = new GraceString("  cases");
  var opresult2933 = callmethod(string2931, "++", [1], var_myc);
  var string2934 = new GraceString(".push(");
  var opresult2936 = callmethod(opresult2933, "++", [1], string2934);
  var opresult2938 = callmethod(opresult2936, "++", [1], var_e);
  var string2939 = new GraceString(");");
  var opresult2941 = callmethod(opresult2938, "++", [1], string2939);
onSelf = true;
  var call2942 = callmethod(this, "out", [1], opresult2941);
  return call2942;
};
  var call2943 = callmethod(Grace_prelude,"for()do", [1, 1], var_cases, block2929);
  lineNumber = 847
  var string2944 = new GraceString("false");
  var var_elsecase = string2944;
  lineNumber = 847;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_elsecase)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'elsecase' to be of type Dynamic"))
  lineNumber = 848
  var bool2946 = new GraceBoolean(false)
  lineNumber = 1
  lineNumber = 848
  var call2947 = callmethod(var_o,"elsecase", [0]);
  var opresult2949 = callmethod(bool2946, "!=", [1], call2947);
  if (Grace_isTrue(opresult2949)) {
  lineNumber = 849
  lineNumber = 1
  lineNumber = 849
  var call2950 = callmethod(var_o,"elsecase", [0]);
onSelf = true;
  var call2951 = callmethod(this, "compilenode", [1], call2950);
  var_elsecase = call2951;
  var if2945 = call2951;
}
  lineNumber = 851
  var string2952 = new GraceString("  var matchres");
  var opresult2954 = callmethod(string2952, "++", [1], var_myc);
  var string2955 = new GraceString(" = matchCase(");
  var opresult2957 = callmethod(opresult2954, "++", [1], string2955);
  var opresult2959 = callmethod(opresult2957, "++", [1], var_matchee);
  var string2960 = new GraceString(",cases");
  var opresult2962 = callmethod(opresult2959, "++", [1], string2960);
  var opresult2964 = callmethod(opresult2962, "++", [1], var_myc);
  var string2965 = new GraceString(",");
  var opresult2967 = callmethod(opresult2964, "++", [1], string2965);
  var opresult2969 = callmethod(opresult2967, "++", [1], var_elsecase);
  var string2970 = new GraceString(");");
  var opresult2972 = callmethod(opresult2969, "++", [1], string2970);
onSelf = true;
  var call2973 = callmethod(this, "out", [1], opresult2972);
  lineNumber = 853
  lineNumber = 1
  lineNumber = 853
  lineNumber = 852
  var string2974 = new GraceString("matchres");
  var opresult2976 = callmethod(string2974, "++", [1], var_myc);
  var call2977 = callmethod(var_o,"register:=", [1], opresult2976);
  return call2977
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func2916.paramCounts = [1];
  func2916.variableArities = [false];
  this.methods["compilematchcase"] = func2916;
  lineNumber = 854
var func2978 = function(argcv) {    // method compileop(1)
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func2978.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method compileop(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 855
  lineNumber = 1
  lineNumber = 855
  var call2979 = callmethod(var_o,"left", [0]);
onSelf = true;
  var call2980 = callmethod(this, "compilenode", [1], call2979);
  var var_left = call2980;
  lineNumber = 855;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_left)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'left' to be of type Dynamic"))
  lineNumber = 856
  lineNumber = 1
  lineNumber = 856
  var call2981 = callmethod(var_o,"right", [0]);
onSelf = true;
  var call2982 = callmethod(this, "compilenode", [1], call2981);
  var var_right = call2982;
  lineNumber = 856;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_right)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'right' to be of type Dynamic"))
  lineNumber = 858
  lineNumber = 857
  var opresult2984 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult2984;
  lineNumber = 858
  var string2985 = new GraceString("opresult");
  var var_rnm = string2985;
  lineNumber = 858;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_rnm)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'rnm' to be of type Dynamic"))
  lineNumber = 859
  lineNumber = 1
  lineNumber = 859
  var call2987 = callmethod(var_o,"value", [0]);
  var string2988 = new GraceString("*");
  var opresult2990 = callmethod(call2987, "==", [1], string2988);
  if (Grace_isTrue(opresult2990)) {
  lineNumber = 861
  lineNumber = 860
  var string2991 = new GraceString("prod");
  var_rnm = string2991;
  var if2986 = string2991;
}
  lineNumber = 862
  lineNumber = 1
  lineNumber = 862
  var call2993 = callmethod(var_o,"value", [0]);
  var string2994 = new GraceString("/");
  var opresult2996 = callmethod(call2993, "==", [1], string2994);
  if (Grace_isTrue(opresult2996)) {
  lineNumber = 864
  lineNumber = 863
  var string2997 = new GraceString("quotient");
  var_rnm = string2997;
  var if2992 = string2997;
}
  lineNumber = 865
  lineNumber = 1
  lineNumber = 865
  var call2999 = callmethod(var_o,"value", [0]);
  var string3000 = new GraceString("-");
  var opresult3002 = callmethod(call2999, "==", [1], string3000);
  if (Grace_isTrue(opresult3002)) {
  lineNumber = 867
  lineNumber = 866
  var string3003 = new GraceString("diff");
  var_rnm = string3003;
  var if2998 = string3003;
}
  lineNumber = 868
  lineNumber = 1
  lineNumber = 868
  var call3005 = callmethod(var_o,"value", [0]);
  var string3006 = new GraceString("%");
  var opresult3008 = callmethod(call3005, "==", [1], string3006);
  if (Grace_isTrue(opresult3008)) {
  lineNumber = 870
  lineNumber = 869
  var string3009 = new GraceString("modulus");
  var_rnm = string3009;
  var if3004 = string3009;
}
  lineNumber = 871
  lineNumber = 872
  lineNumber = 871
  var string3010 = new GraceString("  var ");
  var opresult3012 = callmethod(string3010, "++", [1], var_rnm);
  var opresult3014 = callmethod(opresult3012, "++", [1], var_auto__95__count);
  var string3015 = new GraceString(" = callmethod(");
  var opresult3017 = callmethod(opresult3014, "++", [1], string3015);
  var opresult3019 = callmethod(opresult3017, "++", [1], var_left);
  lineNumber = 872
  var string3020 = new GraceString(", \"");
  var opresult3022 = callmethod(opresult3019, "++", [1], string3020);
  lineNumber = 1
  lineNumber = 872
  var call3023 = callmethod(var_o,"value", [0]);
  var opresult3025 = callmethod(opresult3022, "++", [1], call3023);
  var string3026 = new GraceString("\", [1], ");
  var opresult3028 = callmethod(opresult3025, "++", [1], string3026);
  var opresult3030 = callmethod(opresult3028, "++", [1], var_right);
  var string3031 = new GraceString(");");
  var opresult3033 = callmethod(opresult3030, "++", [1], string3031);
onSelf = true;
  var call3034 = callmethod(this, "out", [1], opresult3033);
  lineNumber = 874
  lineNumber = 1
  lineNumber = 874
  lineNumber = 873
  var opresult3036 = callmethod(var_rnm, "++", [1], var_auto__95__count);
  var call3037 = callmethod(var_o,"register:=", [1], opresult3036);
  lineNumber = 875
  lineNumber = 874
  var opresult3039 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult3039;
  return opresult3039
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func2978.paramCounts = [1];
  func2978.variableArities = [false];
  this.methods["compileop"] = func2978;
  lineNumber = 876
var func3040 = function(argcv) {    // method compilecall(1)
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func3040.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method compilecall(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 877
  var array3041 = new GraceList([
]);

  var var_args = array3041;
  lineNumber = 877;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_args)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'args' to be of type Dynamic"))
  lineNumber = 878
  var string3042 = new GraceString("");
  var var_obj = string3042;
  lineNumber = 878;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_obj)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'obj' to be of type Dynamic"))
  lineNumber = 879
  var var_len = new GraceNum(0);
  lineNumber = 879;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_len)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'len' to be of type Dynamic"))
  lineNumber = 880
  var string3043 = new GraceString("");
  var var_con = string3043;
  lineNumber = 880;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_con)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'con' to be of type Dynamic"))
  lineNumber = 881
  lineNumber = 1
  lineNumber = 881
  var call3044 = callmethod(var_o,"with", [0]);
  var block3045 = Grace_allocObject();
  block3045.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3045.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3045.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3045.methods["match"] = GraceBlock_match;
  block3045.receiver = this;
  block3045.className = 'block<genjs:881>';
  block3045.real = function(
var_part
) {
  sourceObject = this;
  lineNumber = 882
  lineNumber = 1
  lineNumber = 882
  var call3046 = callmethod(var_part,"args", [0]);
  var block3047 = Grace_allocObject();
  block3047.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3047.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3047.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3047.methods["match"] = GraceBlock_match;
  block3047.receiver = this;
  block3047.className = 'block<genjs:882>';
  block3047.real = function(
var_p
) {
  sourceObject = this;
  lineNumber = 883
onSelf = true;
  var call3048 = callmethod(this, "compilenode", [1], var_p);
  var var_r = call3048;
  lineNumber = 883;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_r)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'r' to be of type Dynamic"))
  lineNumber = 884
  var call3049 = callmethod(var_args,"push", [1], var_r);
  return call3049;
};
  var call3050 = callmethod(Grace_prelude,"for()do", [1, 1], call3046, block3047);
  return call3050;
};
  var call3051 = callmethod(Grace_prelude,"for()do", [1, 1], call3044, block3045);
  lineNumber = 887
  var bool3053 = new GraceBoolean(false)
  lineNumber = 1
  lineNumber = 887
  var call3054 = callmethod(var_o,"generics", [0]);
  var opresult3056 = callmethod(bool3053, "!=", [1], call3054);
  if (Grace_isTrue(opresult3056)) {
  lineNumber = 888
  lineNumber = 1
  lineNumber = 888
  var call3057 = callmethod(var_o,"generics", [0]);
  var block3058 = Grace_allocObject();
  block3058.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3058.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3058.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3058.methods["match"] = GraceBlock_match;
  block3058.receiver = this;
  block3058.className = 'block<genjs:888>';
  block3058.real = function(
var_g
) {
  sourceObject = this;
  lineNumber = 889
onSelf = true;
  var call3059 = callmethod(this, "compilenode", [1], var_g);
  var call3060 = callmethod(var_args,"push", [1], call3059);
  return call3060;
};
  var call3061 = callmethod(Grace_prelude,"for()do", [1, 1], call3057, block3058);
  var if3052 = call3061;
}
  lineNumber = 892
  var string3062 = new GraceString("");
  var var_partl = string3062;
  lineNumber = 892;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_partl)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'partl' to be of type Dynamic"))
  lineNumber = 893
  lineNumber = 1
  lineNumber = 893
  lineNumber = 1
  lineNumber = 893
  var call3063 = callmethod(var_o,"with", [0]);
  var call3064 = callmethod(call3063,"indices", [0]);
  var block3065 = Grace_allocObject();
  block3065.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3065.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3065.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3065.methods["match"] = GraceBlock_match;
  block3065.receiver = this;
  block3065.className = 'block<genjs:893>';
  block3065.real = function(
var_partnr
) {
  sourceObject = this;
  lineNumber = 895
  lineNumber = 894
  lineNumber = 1
  lineNumber = 894
  lineNumber = 1
  lineNumber = 894
  lineNumber = 1
  lineNumber = 894
  var call3066 = callmethod(var_o,"with", [0]);
  var idxres3067 = call3066.methods["[]"].call(call3066, [1], var_partnr);
  var call3068 = callmethod(idxres3067,"args", [0]);
  var call3069 = callmethod(call3068,"size", [0]);
  var opresult3071 = callmethod(var_partl, "++", [1], call3069);
  var_partl = opresult3071;
  lineNumber = 895
  lineNumber = 1
  lineNumber = 895
  lineNumber = 1
  lineNumber = 895
  var call3073 = callmethod(var_o,"with", [0]);
  var call3074 = callmethod(call3073,"size", [0]);
  var opresult3076 = callmethod(var_partnr, "<", [1], call3074);
  if (Grace_isTrue(opresult3076)) {
  lineNumber = 897
  lineNumber = 896
  var string3077 = new GraceString(", ");
  var opresult3079 = callmethod(var_partl, "++", [1], string3077);
  var_partl = opresult3079;
  var if3072 = opresult3079;
}
  return if3072;
};
  var call3080 = callmethod(Grace_prelude,"for()do", [1, 1], call3064, block3065);
  lineNumber = 899
  var bool3082 = new GraceBoolean(false)
  lineNumber = 1
  lineNumber = 899
  var call3083 = callmethod(var_o,"generics", [0]);
  var opresult3085 = callmethod(bool3082, "!=", [1], call3083);
  if (Grace_isTrue(opresult3085)) {
  lineNumber = 901
  lineNumber = 900
  var string3086 = new GraceString(", ");
  lineNumber = 1
  lineNumber = 900
  lineNumber = 1
  lineNumber = 900
  var call3087 = callmethod(var_o,"generics", [0]);
  var call3088 = callmethod(call3087,"size", [0]);
  var opresult3090 = callmethod(string3086, "++", [1], call3088);
  var string3091 = new GraceString("");
  var opresult3093 = callmethod(opresult3090, "++", [1], string3091);
  var opresult3095 = callmethod(var_partl, "++", [1], opresult3093);
  var_partl = opresult3095;
  var if3081 = opresult3095;
}
  lineNumber = 902
  lineNumber = 1
  lineNumber = 902
  lineNumber = 1
  lineNumber = 902
  var call3097 = callmethod(var_o,"value", [0]);
  var call3098 = callmethod(call3097,"kind", [0]);
  var string3099 = new GraceString("member");
  var opresult3101 = callmethod(call3098, "==", [1], string3099);
  var block3102 = Grace_allocObject();
  block3102.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3102.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3102.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3102.methods["match"] = GraceBlock_match;
  block3102.receiver = this;
  block3102.className = 'block<genjs:902>';
  block3102.real = function(
) {
  sourceObject = this;
  lineNumber = 903
  lineNumber = 902
  lineNumber = 1
  lineNumber = 902
  lineNumber = 1
  lineNumber = 902
  lineNumber = 1
  lineNumber = 902
  var call3103 = callmethod(var_o,"value", [0]);
  var call3104 = callmethod(call3103,"in", [0]);
  var call3105 = callmethod(call3104,"kind", [0]);
  var string3106 = new GraceString("identifier");
  var opresult3108 = callmethod(call3105, "==", [1], string3106);
  lineNumber = 903
  lineNumber = 1
  lineNumber = 903
  lineNumber = 1
  lineNumber = 903
  lineNumber = 1
  lineNumber = 903
  var call3109 = callmethod(var_o,"value", [0]);
  var call3110 = callmethod(call3109,"in", [0]);
  var call3111 = callmethod(call3110,"value", [0]);
  var string3112 = new GraceString("super");
  var opresult3114 = callmethod(call3111, "==", [1], string3112);
  var opresult3116 = callmethod(opresult3108, "&&", [1], opresult3114);
  return opresult3116;
};
  var opresult3118 = callmethod(opresult3101, "&&", [1], block3102);
  if (Grace_isTrue(opresult3118)) {
  lineNumber = 904
  lineNumber = 906
  lineNumber = 905
  lineNumber = 904
  var string3119 = new GraceString("  var call");
  var opresult3121 = callmethod(string3119, "++", [1], var_auto__95__count);
  var string3122 = new GraceString(" = callmethodsuper(this");
  var opresult3124 = callmethod(opresult3121, "++", [1], string3122);
  lineNumber = 905
  var string3125 = new GraceString(", \"");
  var opresult3127 = callmethod(opresult3124, "++", [1], string3125);
  lineNumber = 1
  lineNumber = 905
  lineNumber = 1
  lineNumber = 905
  var call3128 = callmethod(var_o,"value", [0]);
  var call3129 = callmethod(call3128,"value", [0]);
onSelf = true;
  var call3130 = callmethod(this, "escapestring", [1], call3129);
  var opresult3132 = callmethod(opresult3127, "++", [1], call3130);
  var string3133 = new GraceString("\", [");
  var opresult3135 = callmethod(opresult3132, "++", [1], string3133);
  var var_call = opresult3135;
  lineNumber = 904;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_call)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'call' to be of type Dynamic"))
  lineNumber = 907
  lineNumber = 906
  var opresult3137 = callmethod(var_call, "++", [1], var_partl);
  var string3138 = new GraceString("]");
  var opresult3140 = callmethod(opresult3137, "++", [1], string3138);
  var_call = opresult3140;
  lineNumber = 907
  var block3141 = Grace_allocObject();
  block3141.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3141.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3141.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3141.methods["match"] = GraceBlock_match;
  block3141.receiver = this;
  block3141.className = 'block<genjs:907>';
  block3141.real = function(
var_arg
) {
  sourceObject = this;
  lineNumber = 909
  lineNumber = 908
  var string3142 = new GraceString(", ");
  var opresult3144 = callmethod(var_call, "++", [1], string3142);
  var opresult3146 = callmethod(opresult3144, "++", [1], var_arg);
  var_call = opresult3146;
  return opresult3146;
};
  var call3147 = callmethod(Grace_prelude,"for()do", [1, 1], var_args, block3141);
  lineNumber = 911
  lineNumber = 910
  var string3148 = new GraceString(");");
  var opresult3150 = callmethod(var_call, "++", [1], string3148);
  var_call = opresult3150;
  lineNumber = 911
onSelf = true;
  var call3151 = callmethod(this, "out", [1], var_call);
  var if3096 = call3151;
  } else {
  lineNumber = 926
  lineNumber = 913
  var block3153 = Grace_allocObject();
  block3153.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3153.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3153.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3153.methods["match"] = GraceBlock_match;
  block3153.receiver = this;
  block3153.className = 'block<genjs:913>';
  block3153.real = function(
) {
  sourceObject = this;
  lineNumber = 914
  lineNumber = 1
  lineNumber = 914
  lineNumber = 1
  lineNumber = 914
  lineNumber = 1
  lineNumber = 914
  var call3154 = callmethod(var_o,"value", [0]);
  var call3155 = callmethod(call3154,"in", [0]);
  var call3156 = callmethod(call3155,"value", [0]);
  var string3157 = new GraceString("outer");
  var opresult3159 = callmethod(call3156, "==", [1], string3157);
  return opresult3159;
};
  lineNumber = 912
  var block3160 = Grace_allocObject();
  block3160.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3160.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3160.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3160.methods["match"] = GraceBlock_match;
  block3160.receiver = this;
  block3160.className = 'block<genjs:912>';
  block3160.real = function(
) {
  sourceObject = this;
  lineNumber = 913
  lineNumber = 1
  lineNumber = 913
  lineNumber = 1
  lineNumber = 913
  lineNumber = 1
  lineNumber = 913
  var call3161 = callmethod(var_o,"value", [0]);
  var call3162 = callmethod(call3161,"in", [0]);
  var call3163 = callmethod(call3162,"kind", [0]);
  var string3164 = new GraceString("member");
  var opresult3166 = callmethod(call3163, "==", [1], string3164);
  return opresult3166;
};
  lineNumber = 912
  lineNumber = 1
  lineNumber = 912
  lineNumber = 1
  lineNumber = 912
  var call3167 = callmethod(var_o,"value", [0]);
  var call3168 = callmethod(call3167,"kind", [0]);
  var string3169 = new GraceString("member");
  var opresult3171 = callmethod(call3168, "==", [1], string3169);
  var call3172 = callmethod(opresult3171,"andAlso", [1], block3160);
  var call3173 = callmethod(call3172,"andAlso", [1], block3153);
  if (Grace_isTrue(call3173)) {
  lineNumber = 915
  lineNumber = 1
  lineNumber = 915
  lineNumber = 1
  lineNumber = 915
  var call3174 = callmethod(var_o,"value", [0]);
  var call3175 = callmethod(call3174,"in", [0]);
onSelf = true;
  var call3176 = callmethod(this, "compilenode", [1], call3175);
  var var_ot = call3176;
  lineNumber = 915;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_ot)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'ot' to be of type Dynamic"))
  lineNumber = 916
  lineNumber = 918
  lineNumber = 917
  lineNumber = 916
  var string3177 = new GraceString("  var call");
  var opresult3179 = callmethod(string3177, "++", [1], var_auto__95__count);
  var string3180 = new GraceString(" = callmethod(");
  var opresult3182 = callmethod(string3180, "++", [1], var_ot);
  var string3183 = new GraceString("");
  var opresult3185 = callmethod(opresult3182, "++", [1], string3183);
  var opresult3187 = callmethod(opresult3179, "++", [1], opresult3185);
  lineNumber = 917
  var string3188 = new GraceString(", \"");
  var opresult3190 = callmethod(opresult3187, "++", [1], string3188);
  lineNumber = 1
  lineNumber = 917
  lineNumber = 1
  lineNumber = 917
  var call3191 = callmethod(var_o,"value", [0]);
  var call3192 = callmethod(call3191,"value", [0]);
onSelf = true;
  var call3193 = callmethod(this, "escapestring", [1], call3192);
  var opresult3195 = callmethod(opresult3190, "++", [1], call3193);
  var string3196 = new GraceString("\", [");
  var opresult3198 = callmethod(opresult3195, "++", [1], string3196);
  var var_call = opresult3198;
  lineNumber = 916;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_call)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'call' to be of type Dynamic"))
  lineNumber = 919
  lineNumber = 918
  var opresult3200 = callmethod(var_call, "++", [1], var_partl);
  var string3201 = new GraceString("]");
  var opresult3203 = callmethod(opresult3200, "++", [1], string3201);
  var_call = opresult3203;
  lineNumber = 919
  var block3204 = Grace_allocObject();
  block3204.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3204.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3204.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3204.methods["match"] = GraceBlock_match;
  block3204.receiver = this;
  block3204.className = 'block<genjs:919>';
  block3204.real = function(
var_arg
) {
  sourceObject = this;
  lineNumber = 921
  lineNumber = 920
  var string3205 = new GraceString(", ");
  var opresult3207 = callmethod(var_call, "++", [1], string3205);
  var opresult3209 = callmethod(opresult3207, "++", [1], var_arg);
  var_call = opresult3209;
  return opresult3209;
};
  var call3210 = callmethod(Grace_prelude,"for()do", [1, 1], var_args, block3204);
  lineNumber = 923
  lineNumber = 922
  var string3211 = new GraceString(");");
  var opresult3213 = callmethod(var_call, "++", [1], string3211);
  var_call = opresult3213;
  lineNumber = 923
  var string3214 = new GraceString("onOuter = true;");
onSelf = true;
  var call3215 = callmethod(this, "out", [1], string3214);
  lineNumber = 924
  var string3216 = new GraceString("onSelf = true;");
onSelf = true;
  var call3217 = callmethod(this, "out", [1], string3216);
  lineNumber = 925
onSelf = true;
  var call3218 = callmethod(this, "out", [1], var_call);
  var if3152 = call3218;
  } else {
  lineNumber = 931
  lineNumber = 926
  lineNumber = 1
  lineNumber = 926
  lineNumber = 1
  lineNumber = 926
  var call3220 = callmethod(var_o,"value", [0]);
  var call3221 = callmethod(call3220,"kind", [0]);
  var string3222 = new GraceString("member");
  var opresult3224 = callmethod(call3221, "==", [1], string3222);
  var block3225 = Grace_allocObject();
  block3225.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3225.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3225.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3225.methods["match"] = GraceBlock_match;
  block3225.receiver = this;
  block3225.className = 'block<genjs:926>';
  block3225.real = function(
) {
  sourceObject = this;
  lineNumber = 927
  lineNumber = 926
  lineNumber = 1
  lineNumber = 926
  lineNumber = 1
  lineNumber = 926
  lineNumber = 1
  lineNumber = 926
  var call3226 = callmethod(var_o,"value", [0]);
  var call3227 = callmethod(call3226,"in", [0]);
  var call3228 = callmethod(call3227,"kind", [0]);
  var string3229 = new GraceString("identifier");
  var opresult3231 = callmethod(call3228, "==", [1], string3229);
  lineNumber = 927
  lineNumber = 1
  lineNumber = 927
  lineNumber = 1
  lineNumber = 927
  lineNumber = 1
  lineNumber = 927
  var call3232 = callmethod(var_o,"value", [0]);
  var call3233 = callmethod(call3232,"in", [0]);
  var call3234 = callmethod(call3233,"value", [0]);
  var string3235 = new GraceString("self");
  var opresult3237 = callmethod(call3234, "==", [1], string3235);
  var opresult3239 = callmethod(opresult3231, "&&", [1], opresult3237);
  lineNumber = 1
  lineNumber = 927
  lineNumber = 1
  lineNumber = 927
  var call3240 = callmethod(var_o,"value", [0]);
  var call3241 = callmethod(call3240,"value", [0]);
  var string3242 = new GraceString("outer");
  var opresult3244 = callmethod(call3241, "==", [1], string3242);
  var opresult3246 = callmethod(opresult3239, "&&", [1], opresult3244);
  return opresult3246;
};
  var opresult3248 = callmethod(opresult3224, "&&", [1], block3225);
  if (Grace_isTrue(opresult3248)) {
  lineNumber = 929
  lineNumber = 930
  lineNumber = 929
  var string3249 = new GraceString("  var call");
  var opresult3251 = callmethod(string3249, "++", [1], var_auto__95__count);
  var string3252 = new GraceString(" = callmethod(superDepth, ");
  var opresult3254 = callmethod(opresult3251, "++", [1], string3252);
  lineNumber = 930
  var string3255 = new GraceString("\"outer\", [0]);");
  var opresult3257 = callmethod(opresult3254, "++", [1], string3255);
onSelf = true;
  var call3258 = callmethod(this, "out", [1], opresult3257);
  var if3219 = call3258;
  } else {
  lineNumber = 942
  lineNumber = 931
  lineNumber = 1
  lineNumber = 931
  lineNumber = 1
  lineNumber = 931
  var call3260 = callmethod(var_o,"value", [0]);
  var call3261 = callmethod(call3260,"kind", [0]);
  var string3262 = new GraceString("member");
  var opresult3264 = callmethod(call3261, "==", [1], string3262);
  var block3265 = Grace_allocObject();
  block3265.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3265.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3265.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3265.methods["match"] = GraceBlock_match;
  block3265.receiver = this;
  block3265.className = 'block<genjs:931>';
  block3265.real = function(
) {
  sourceObject = this;
  lineNumber = 932
  lineNumber = 931
  lineNumber = 1
  lineNumber = 931
  lineNumber = 1
  lineNumber = 931
  lineNumber = 1
  lineNumber = 931
  var call3266 = callmethod(var_o,"value", [0]);
  var call3267 = callmethod(call3266,"in", [0]);
  var call3268 = callmethod(call3267,"kind", [0]);
  var string3269 = new GraceString("identifier");
  var opresult3271 = callmethod(call3268, "==", [1], string3269);
  lineNumber = 932
  lineNumber = 1
  lineNumber = 932
  lineNumber = 1
  lineNumber = 932
  lineNumber = 1
  lineNumber = 932
  var call3272 = callmethod(var_o,"value", [0]);
  var call3273 = callmethod(call3272,"in", [0]);
  var call3274 = callmethod(call3273,"value", [0]);
  var string3275 = new GraceString("self");
  var opresult3277 = callmethod(call3274, "==", [1], string3275);
  var opresult3279 = callmethod(opresult3271, "&&", [1], opresult3277);
  return opresult3279;
};
  var opresult3281 = callmethod(opresult3264, "&&", [1], block3265);
  if (Grace_isTrue(opresult3281)) {
  lineNumber = 933
  lineNumber = 935
  lineNumber = 934
  lineNumber = 933
  var string3282 = new GraceString("  var call");
  var opresult3284 = callmethod(string3282, "++", [1], var_auto__95__count);
  var string3285 = new GraceString(" = callmethod(this");
  var opresult3287 = callmethod(opresult3284, "++", [1], string3285);
  lineNumber = 934
  var string3288 = new GraceString(", \"");
  var opresult3290 = callmethod(opresult3287, "++", [1], string3288);
  lineNumber = 1
  lineNumber = 934
  lineNumber = 1
  lineNumber = 934
  var call3291 = callmethod(var_o,"value", [0]);
  var call3292 = callmethod(call3291,"value", [0]);
onSelf = true;
  var call3293 = callmethod(this, "escapestring", [1], call3292);
  var opresult3295 = callmethod(opresult3290, "++", [1], call3293);
  var string3296 = new GraceString("\", [");
  var opresult3298 = callmethod(opresult3295, "++", [1], string3296);
  var var_call = opresult3298;
  lineNumber = 933;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_call)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'call' to be of type Dynamic"))
  lineNumber = 936
  lineNumber = 935
  var opresult3300 = callmethod(var_call, "++", [1], var_partl);
  var string3301 = new GraceString("]");
  var opresult3303 = callmethod(opresult3300, "++", [1], string3301);
  var_call = opresult3303;
  lineNumber = 936
  var block3304 = Grace_allocObject();
  block3304.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3304.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3304.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3304.methods["match"] = GraceBlock_match;
  block3304.receiver = this;
  block3304.className = 'block<genjs:936>';
  block3304.real = function(
var_arg
) {
  sourceObject = this;
  lineNumber = 938
  lineNumber = 937
  var string3305 = new GraceString(", ");
  var opresult3307 = callmethod(var_call, "++", [1], string3305);
  var opresult3309 = callmethod(opresult3307, "++", [1], var_arg);
  var_call = opresult3309;
  return opresult3309;
};
  var call3310 = callmethod(Grace_prelude,"for()do", [1, 1], var_args, block3304);
  lineNumber = 940
  lineNumber = 939
  var string3311 = new GraceString(");");
  var opresult3313 = callmethod(var_call, "++", [1], string3311);
  var_call = opresult3313;
  lineNumber = 940
  var string3314 = new GraceString("onSelf = true;");
onSelf = true;
  var call3315 = callmethod(this, "out", [1], string3314);
  lineNumber = 941
onSelf = true;
  var call3316 = callmethod(this, "out", [1], var_call);
  var if3259 = call3316;
  } else {
  lineNumber = 952
  lineNumber = 942
  lineNumber = 1
  lineNumber = 942
  lineNumber = 1
  lineNumber = 942
  var call3318 = callmethod(var_o,"value", [0]);
  var call3319 = callmethod(call3318,"kind", [0]);
  var string3320 = new GraceString("member");
  var opresult3322 = callmethod(call3319, "==", [1], string3320);
  var block3323 = Grace_allocObject();
  block3323.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3323.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3323.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3323.methods["match"] = GraceBlock_match;
  block3323.receiver = this;
  block3323.className = 'block<genjs:942>';
  block3323.real = function(
) {
  sourceObject = this;
  lineNumber = 943
  lineNumber = 942
  lineNumber = 1
  lineNumber = 942
  lineNumber = 1
  lineNumber = 942
  lineNumber = 1
  lineNumber = 942
  var call3324 = callmethod(var_o,"value", [0]);
  var call3325 = callmethod(call3324,"in", [0]);
  var call3326 = callmethod(call3325,"kind", [0]);
  var string3327 = new GraceString("identifier");
  var opresult3329 = callmethod(call3326, "==", [1], string3327);
  lineNumber = 943
  lineNumber = 1
  lineNumber = 943
  lineNumber = 1
  lineNumber = 943
  lineNumber = 1
  lineNumber = 943
  var call3330 = callmethod(var_o,"value", [0]);
  var call3331 = callmethod(call3330,"in", [0]);
  var call3332 = callmethod(call3331,"value", [0]);
  var string3333 = new GraceString("prelude");
  var opresult3335 = callmethod(call3332, "==", [1], string3333);
  var opresult3337 = callmethod(opresult3329, "&&", [1], opresult3335);
  return opresult3337;
};
  var opresult3339 = callmethod(opresult3322, "&&", [1], block3323);
  if (Grace_isTrue(opresult3339)) {
  lineNumber = 944
  lineNumber = 946
  lineNumber = 945
  lineNumber = 944
  var string3340 = new GraceString("  var call");
  var opresult3342 = callmethod(string3340, "++", [1], var_auto__95__count);
  var string3343 = new GraceString(" = callmethod(Grace_prelude");
  var opresult3345 = callmethod(opresult3342, "++", [1], string3343);
  lineNumber = 945
  var string3346 = new GraceString(",\"");
  var opresult3348 = callmethod(opresult3345, "++", [1], string3346);
  lineNumber = 1
  lineNumber = 945
  lineNumber = 1
  lineNumber = 945
  var call3349 = callmethod(var_o,"value", [0]);
  var call3350 = callmethod(call3349,"value", [0]);
onSelf = true;
  var call3351 = callmethod(this, "escapestring", [1], call3350);
  var opresult3353 = callmethod(opresult3348, "++", [1], call3351);
  var string3354 = new GraceString("\", [");
  var opresult3356 = callmethod(opresult3353, "++", [1], string3354);
  var var_call = opresult3356;
  lineNumber = 944;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_call)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'call' to be of type Dynamic"))
  lineNumber = 947
  lineNumber = 946
  var opresult3358 = callmethod(var_call, "++", [1], var_partl);
  var string3359 = new GraceString("]");
  var opresult3361 = callmethod(opresult3358, "++", [1], string3359);
  var_call = opresult3361;
  lineNumber = 947
  var block3362 = Grace_allocObject();
  block3362.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3362.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3362.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3362.methods["match"] = GraceBlock_match;
  block3362.receiver = this;
  block3362.className = 'block<genjs:947>';
  block3362.real = function(
var_arg
) {
  sourceObject = this;
  lineNumber = 949
  lineNumber = 948
  var string3363 = new GraceString(", ");
  var opresult3365 = callmethod(var_call, "++", [1], string3363);
  var opresult3367 = callmethod(opresult3365, "++", [1], var_arg);
  var_call = opresult3367;
  return opresult3367;
};
  var call3368 = callmethod(Grace_prelude,"for()do", [1, 1], var_args, block3362);
  lineNumber = 951
  lineNumber = 950
  var string3369 = new GraceString(");");
  var opresult3371 = callmethod(var_call, "++", [1], string3369);
  var_call = opresult3371;
  lineNumber = 951
onSelf = true;
  var call3372 = callmethod(this, "out", [1], var_call);
  var if3317 = call3372;
  } else {
  lineNumber = 962
  lineNumber = 952
  lineNumber = 1
  lineNumber = 952
  lineNumber = 1
  lineNumber = 952
  var call3374 = callmethod(var_o,"value", [0]);
  var call3375 = callmethod(call3374,"kind", [0]);
  var string3376 = new GraceString("member");
  var opresult3378 = callmethod(call3375, "==", [1], string3376);
  if (Grace_isTrue(opresult3378)) {
  lineNumber = 953
  lineNumber = 1
  lineNumber = 953
  lineNumber = 1
  lineNumber = 953
  var call3379 = callmethod(var_o,"value", [0]);
  var call3380 = callmethod(call3379,"in", [0]);
onSelf = true;
  var call3381 = callmethod(this, "compilenode", [1], call3380);
  var_obj = call3381;
  lineNumber = 954
  lineNumber = 956
  lineNumber = 955
  lineNumber = 954
  var string3382 = new GraceString("  var call");
  var opresult3384 = callmethod(string3382, "++", [1], var_auto__95__count);
  var string3385 = new GraceString(" = callmethod(");
  var opresult3387 = callmethod(opresult3384, "++", [1], string3385);
  var opresult3389 = callmethod(opresult3387, "++", [1], var_obj);
  lineNumber = 955
  var string3390 = new GraceString(",\"");
  var opresult3392 = callmethod(opresult3389, "++", [1], string3390);
  lineNumber = 1
  lineNumber = 955
  lineNumber = 1
  lineNumber = 955
  var call3393 = callmethod(var_o,"value", [0]);
  var call3394 = callmethod(call3393,"value", [0]);
onSelf = true;
  var call3395 = callmethod(this, "escapestring", [1], call3394);
  var opresult3397 = callmethod(opresult3392, "++", [1], call3395);
  var string3398 = new GraceString("\", [");
  var opresult3400 = callmethod(opresult3397, "++", [1], string3398);
  var var_call = opresult3400;
  lineNumber = 954;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_call)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'call' to be of type Dynamic"))
  lineNumber = 957
  lineNumber = 956
  var opresult3402 = callmethod(var_call, "++", [1], var_partl);
  var string3403 = new GraceString("]");
  var opresult3405 = callmethod(opresult3402, "++", [1], string3403);
  var_call = opresult3405;
  lineNumber = 957
  var block3406 = Grace_allocObject();
  block3406.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3406.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3406.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3406.methods["match"] = GraceBlock_match;
  block3406.receiver = this;
  block3406.className = 'block<genjs:957>';
  block3406.real = function(
var_arg
) {
  sourceObject = this;
  lineNumber = 959
  lineNumber = 958
  var string3407 = new GraceString(", ");
  var opresult3409 = callmethod(var_call, "++", [1], string3407);
  var opresult3411 = callmethod(opresult3409, "++", [1], var_arg);
  var_call = opresult3411;
  return opresult3411;
};
  var call3412 = callmethod(Grace_prelude,"for()do", [1, 1], var_args, block3406);
  lineNumber = 961
  lineNumber = 960
  var string3413 = new GraceString(");");
  var opresult3415 = callmethod(var_call, "++", [1], string3413);
  var_call = opresult3415;
  lineNumber = 961
onSelf = true;
  var call3416 = callmethod(this, "out", [1], var_call);
  var if3373 = call3416;
  } else {
  lineNumber = 964
  lineNumber = 963
  var string3417 = new GraceString("this");
  var_obj = string3417;
  lineNumber = 964
  lineNumber = 966
  lineNumber = 965
  lineNumber = 964
  var string3418 = new GraceString("  var call");
  var opresult3420 = callmethod(string3418, "++", [1], var_auto__95__count);
  var string3421 = new GraceString(" = callmethod(this,");
  var opresult3423 = callmethod(opresult3420, "++", [1], string3421);
  lineNumber = 965
  var string3424 = new GraceString("\"");
  var opresult3426 = callmethod(opresult3423, "++", [1], string3424);
  lineNumber = 1
  lineNumber = 965
  lineNumber = 1
  lineNumber = 965
  var call3427 = callmethod(var_o,"value", [0]);
  var call3428 = callmethod(call3427,"value", [0]);
onSelf = true;
  var call3429 = callmethod(this, "escapestring", [1], call3428);
  var opresult3431 = callmethod(opresult3426, "++", [1], call3429);
  var string3432 = new GraceString("\", [");
  var opresult3434 = callmethod(opresult3431, "++", [1], string3432);
  var var_call = opresult3434;
  lineNumber = 964;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_call)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'call' to be of type Dynamic"))
  lineNumber = 967
  lineNumber = 966
  var opresult3436 = callmethod(var_call, "++", [1], var_partl);
  var string3437 = new GraceString("]");
  var opresult3439 = callmethod(opresult3436, "++", [1], string3437);
  var_call = opresult3439;
  lineNumber = 967
  var block3440 = Grace_allocObject();
  block3440.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3440.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3440.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3440.methods["match"] = GraceBlock_match;
  block3440.receiver = this;
  block3440.className = 'block<genjs:967>';
  block3440.real = function(
var_arg
) {
  sourceObject = this;
  lineNumber = 969
  lineNumber = 968
  var string3441 = new GraceString(", ");
  var opresult3443 = callmethod(var_call, "++", [1], string3441);
  var opresult3445 = callmethod(opresult3443, "++", [1], var_arg);
  var_call = opresult3445;
  return opresult3445;
};
  var call3446 = callmethod(Grace_prelude,"for()do", [1, 1], var_args, block3440);
  lineNumber = 971
  lineNumber = 970
  var string3447 = new GraceString(");");
  var opresult3449 = callmethod(var_call, "++", [1], string3447);
  var_call = opresult3449;
  lineNumber = 971
onSelf = true;
  var call3450 = callmethod(this, "out", [1], var_call);
  var if3373 = call3450;
}
  var if3317 = if3373;
}
  var if3259 = if3317;
}
  var if3219 = if3259;
}
  var if3152 = if3219;
}
  var if3096 = if3152;
}
  lineNumber = 974
  lineNumber = 1
  lineNumber = 974
  lineNumber = 973
  var string3451 = new GraceString("call");
  var opresult3453 = callmethod(string3451, "++", [1], var_auto__95__count);
  var call3454 = callmethod(var_o,"register:=", [1], opresult3453);
  lineNumber = 975
  lineNumber = 974
  var opresult3456 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult3456;
  return opresult3456
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func3040.paramCounts = [1];
  func3040.variableArities = [false];
  this.methods["compilecall"] = func3040;
  lineNumber = 976
var func3457 = function(argcv) {    // method compileoctets(1)
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func3457.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method compileoctets(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 977
  var string3458 = new GraceString("");
  var var_escval = string3458;
  lineNumber = 977;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_escval)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'escval' to be of type Dynamic"))
  lineNumber = 978
  lineNumber = 979
  lineNumber = 978
  lineNumber = 1
  lineNumber = 978
  lineNumber = 1
  lineNumber = 978
  var call3459 = callmethod(var_o,"value", [0]);
  var call3460 = callmethod(call3459,"size", [0]);
  var quotient3462 = callmethod(call3460, "/", [1], new GraceNum(2));
  var var_l = quotient3462;
  lineNumber = 978;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_l)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'l' to be of type Dynamic"))
  lineNumber = 979
  var var_i = new GraceNum(0);
  lineNumber = 979;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_i)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'i' to be of type Dynamic"))
  lineNumber = 980
  lineNumber = 1
  lineNumber = 980
  var call3463 = callmethod(var_o,"value", [0]);
  var block3464 = Grace_allocObject();
  block3464.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3464.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3464.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3464.methods["match"] = GraceBlock_match;
  block3464.receiver = this;
  block3464.className = 'block<genjs:980>';
  block3464.real = function(
var_c
) {
  sourceObject = this;
  lineNumber = 981
  var modulus3467 = callmethod(var_i, "%", [1], new GraceNum(2));
  var opresult3469 = callmethod(modulus3467, "==", [1], new GraceNum(0));
  if (Grace_isTrue(opresult3469)) {
  lineNumber = 983
  lineNumber = 982
  var string3470 = new GraceString("\\");
  var opresult3472 = callmethod(var_escval, "++", [1], string3470);
  var_escval = opresult3472;
  var if3465 = opresult3472;
}
  lineNumber = 985
  lineNumber = 984
  var opresult3474 = callmethod(var_escval, "++", [1], var_c);
  var_escval = opresult3474;
  lineNumber = 986
  lineNumber = 985
  var opresult3476 = callmethod(var_i, "+", [1], new GraceNum(1));
  var_i = opresult3476;
  return opresult3476;
};
  var call3477 = callmethod(Grace_prelude,"for()do", [1, 1], call3463, block3464);
  lineNumber = 987
  lineNumber = 988
  lineNumber = 987
  var string3478 = new GraceString("  %tmp");
  var opresult3480 = callmethod(string3478, "++", [1], var_auto__95__count);
  var string3481 = new GraceString(" = load %object** @.octlit");
  var opresult3483 = callmethod(opresult3480, "++", [1], string3481);
  lineNumber = 988
  var opresult3485 = callmethod(opresult3483, "++", [1], var_auto__95__count);
onSelf = true;
  var call3486 = callmethod(this, "out", [1], opresult3485);
  lineNumber = 989
  lineNumber = 990
  lineNumber = 989
  var string3487 = new GraceString("  %cmp");
  var opresult3489 = callmethod(string3487, "++", [1], var_auto__95__count);
  var string3490 = new GraceString(" = icmp ne %object* %tmp");
  var opresult3492 = callmethod(opresult3489, "++", [1], string3490);
  lineNumber = 990
  var opresult3494 = callmethod(opresult3492, "++", [1], var_auto__95__count);
  var string3495 = new GraceString(", null");
  var opresult3497 = callmethod(opresult3494, "++", [1], string3495);
onSelf = true;
  var call3498 = callmethod(this, "out", [1], opresult3497);
  lineNumber = 991
  lineNumber = 993
  lineNumber = 992
  lineNumber = 991
  var string3499 = new GraceString("  br i1 %cmp");
  var opresult3501 = callmethod(string3499, "++", [1], var_auto__95__count);
  var string3502 = new GraceString(", label %octlit");
  var opresult3504 = callmethod(opresult3501, "++", [1], string3502);
  lineNumber = 992
  var opresult3506 = callmethod(opresult3504, "++", [1], var_auto__95__count);
  var string3507 = new GraceString(".already, label %octlit");
  var opresult3509 = callmethod(opresult3506, "++", [1], string3507);
  lineNumber = 993
  var opresult3511 = callmethod(opresult3509, "++", [1], var_auto__95__count);
  var string3512 = new GraceString(".define");
  var opresult3514 = callmethod(opresult3511, "++", [1], string3512);
onSelf = true;
  var call3515 = callmethod(this, "out", [1], opresult3514);
  lineNumber = 994
  var string3516 = new GraceString("octlit");
  var opresult3518 = callmethod(string3516, "++", [1], var_auto__95__count);
  var string3519 = new GraceString(".already");
  var opresult3521 = callmethod(opresult3518, "++", [1], string3519);
onSelf = true;
  var call3522 = callmethod(this, "beginblock", [1], opresult3521);
  lineNumber = 995
  lineNumber = 996
  lineNumber = 995
  var string3523 = new GraceString("  %alreadyoctets");
  var opresult3525 = callmethod(string3523, "++", [1], var_auto__95__count);
  var string3526 = new GraceString(" = load %object** @.octlit");
  var opresult3528 = callmethod(opresult3525, "++", [1], string3526);
  lineNumber = 996
  var opresult3530 = callmethod(opresult3528, "++", [1], var_auto__95__count);
onSelf = true;
  var call3531 = callmethod(this, "out", [1], opresult3530);
  lineNumber = 997
  var string3532 = new GraceString("  br label %octlit");
  var opresult3534 = callmethod(string3532, "++", [1], var_auto__95__count);
  var string3535 = new GraceString(".end");
  var opresult3537 = callmethod(opresult3534, "++", [1], string3535);
onSelf = true;
  var call3538 = callmethod(this, "out", [1], opresult3537);
  lineNumber = 998
  var string3539 = new GraceString("octlit");
  var opresult3541 = callmethod(string3539, "++", [1], var_auto__95__count);
  var string3542 = new GraceString(".define");
  var opresult3544 = callmethod(opresult3541, "++", [1], string3542);
onSelf = true;
  var call3545 = callmethod(this, "beginblock", [1], opresult3544);
  lineNumber = 999
  var string3546 = new GraceString("  %oct");
  var opresult3548 = callmethod(string3546, "++", [1], var_auto__95__count);
  var string3549 = new GraceString(" = getelementptr [");
  var opresult3551 = callmethod(opresult3548, "++", [1], string3549);
  var opresult3553 = callmethod(opresult3551, "++", [1], var_l);
  var string3554 = new GraceString(" x i8]* @.oct");
  var opresult3556 = callmethod(opresult3553, "++", [1], string3554);
  lineNumber = 1
  lineNumber = 999
  var call3557 = callmethod(var_constants,"size", [0]);
  var opresult3559 = callmethod(opresult3556, "++", [1], call3557);
  var string3560 = new GraceString(", i32 0, i32 0");
  var opresult3562 = callmethod(opresult3559, "++", [1], string3560);
onSelf = true;
  var call3563 = callmethod(this, "out", [1], opresult3562);
  lineNumber = 1000
  lineNumber = 1002
  lineNumber = 1001
  lineNumber = 1000
  var string3564 = new GraceString("  %defoctets");
  var opresult3566 = callmethod(string3564, "++", [1], var_auto__95__count);
  var string3567 = new GraceString(" = call %object* ");
  var opresult3569 = callmethod(opresult3566, "++", [1], string3567);
  lineNumber = 1001
  var string3570 = new GraceString("@alloc_Octets(i8* ");
  var opresult3572 = callmethod(opresult3569, "++", [1], string3570);
  lineNumber = 1002
  var string3573 = new GraceString("%oct");
  var opresult3575 = callmethod(opresult3572, "++", [1], string3573);
  var opresult3577 = callmethod(opresult3575, "++", [1], var_auto__95__count);
  var string3578 = new GraceString(", i32 ");
  var opresult3580 = callmethod(opresult3577, "++", [1], string3578);
  var opresult3582 = callmethod(opresult3580, "++", [1], var_l);
  var string3583 = new GraceString(")");
  var opresult3585 = callmethod(opresult3582, "++", [1], string3583);
onSelf = true;
  var call3586 = callmethod(this, "out", [1], opresult3585);
  lineNumber = 1003
  lineNumber = 1004
  lineNumber = 1003
  var string3587 = new GraceString("  store %object* %defoctets");
  var opresult3589 = callmethod(string3587, "++", [1], var_auto__95__count);
  var string3590 = new GraceString(", %object** ");
  var opresult3592 = callmethod(opresult3589, "++", [1], string3590);
  lineNumber = 1004
  var string3593 = new GraceString("@.octlit");
  var opresult3595 = callmethod(opresult3592, "++", [1], string3593);
  var opresult3597 = callmethod(opresult3595, "++", [1], var_auto__95__count);
onSelf = true;
  var call3598 = callmethod(this, "out", [1], opresult3597);
  lineNumber = 1005
  var string3599 = new GraceString("br label %octlit");
  var opresult3601 = callmethod(string3599, "++", [1], var_auto__95__count);
  var string3602 = new GraceString(".end");
  var opresult3604 = callmethod(opresult3601, "++", [1], string3602);
onSelf = true;
  var call3605 = callmethod(this, "out", [1], opresult3604);
  lineNumber = 1006
  var string3606 = new GraceString("octlit");
  var opresult3608 = callmethod(string3606, "++", [1], var_auto__95__count);
  var string3609 = new GraceString(".end");
  var opresult3611 = callmethod(opresult3608, "++", [1], string3609);
onSelf = true;
  var call3612 = callmethod(this, "beginblock", [1], opresult3611);
  lineNumber = 1007
  lineNumber = 1010
  lineNumber = 1009
  lineNumber = 1008
  lineNumber = 1007
  var string3613 = new GraceString(" %octets");
  var opresult3615 = callmethod(string3613, "++", [1], var_auto__95__count);
  var string3616 = new GraceString(" = phi %object* [%alreadyoctets");
  var opresult3618 = callmethod(opresult3615, "++", [1], string3616);
  lineNumber = 1008
  var opresult3620 = callmethod(opresult3618, "++", [1], var_auto__95__count);
  var string3621 = new GraceString(", %octlit");
  var opresult3623 = callmethod(opresult3620, "++", [1], string3621);
  var opresult3625 = callmethod(opresult3623, "++", [1], var_auto__95__count);
  var string3626 = new GraceString(".already], ");
  var opresult3628 = callmethod(opresult3625, "++", [1], string3626);
  lineNumber = 1009
  var string3629 = new GraceString("[%defoctets");
  var opresult3631 = callmethod(opresult3628, "++", [1], string3629);
  var opresult3633 = callmethod(opresult3631, "++", [1], var_auto__95__count);
  var string3634 = new GraceString(", %octlit");
  var opresult3636 = callmethod(opresult3633, "++", [1], string3634);
  var opresult3638 = callmethod(opresult3636, "++", [1], var_auto__95__count);
  lineNumber = 1010
  var string3639 = new GraceString(".define]");
  var opresult3641 = callmethod(opresult3638, "++", [1], string3639);
onSelf = true;
  var call3642 = callmethod(this, "out", [1], opresult3641);
  lineNumber = 1011
  lineNumber = 1013
  lineNumber = 1012
  lineNumber = 1011
  var string3643 = new GraceString("@.oct");
  lineNumber = 1
  lineNumber = 1011
  var call3644 = callmethod(var_constants,"size", [0]);
  var opresult3646 = callmethod(string3643, "++", [1], call3644);
  var string3647 = new GraceString(" = private unnamed_addr ");
  var opresult3649 = callmethod(opresult3646, "++", [1], string3647);
  lineNumber = 1012
  var string3650 = new GraceString("constant [");
  var opresult3652 = callmethod(opresult3649, "++", [1], string3650);
  var opresult3654 = callmethod(opresult3652, "++", [1], var_l);
  var string3655 = new GraceString(" x i8] c\"");
  var opresult3657 = callmethod(opresult3654, "++", [1], string3655);
  var opresult3659 = callmethod(opresult3657, "++", [1], var_escval);
  var string3660 = new GraceString("\"");
  var opresult3662 = callmethod(opresult3659, "++", [1], string3660);
  var var_con = opresult3662;
  lineNumber = 1011;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_con)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'con' to be of type Dynamic"))
  lineNumber = 1013
  var call3663 = callmethod(var_constants,"push", [1], var_con);
  lineNumber = 1016
  lineNumber = 1015
  lineNumber = 1014
  var string3664 = new GraceString("@.octlit");
  var opresult3666 = callmethod(string3664, "++", [1], var_auto__95__count);
  lineNumber = 1015
  var string3667 = new GraceString(" = private global %object* null");
  var opresult3669 = callmethod(opresult3666, "++", [1], string3667);
  var_con = opresult3669;
  lineNumber = 1016
  var call3670 = callmethod(var_constants,"push", [1], var_con);
  lineNumber = 1018
  lineNumber = 1
  lineNumber = 1018
  lineNumber = 1017
  var string3671 = new GraceString("%octets");
  var opresult3673 = callmethod(string3671, "++", [1], var_auto__95__count);
  var call3674 = callmethod(var_o,"register:=", [1], opresult3673);
  lineNumber = 1019
  lineNumber = 1018
  var opresult3676 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult3676;
  return opresult3676
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func3457.paramCounts = [1];
  func3457.variableArities = [false];
  this.methods["compileoctets"] = func3457;
  lineNumber = 1020
var func3677 = function(argcv) {    // method compiledialect(1)
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func3677.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method compiledialect(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1021
  var string3678 = new GraceString("// Dialect import of ");
  lineNumber = 1
  lineNumber = 1021
  var call3679 = callmethod(var_o,"value", [0]);
  var opresult3681 = callmethod(string3678, "++", [1], call3679);
  var string3682 = new GraceString("");
  var opresult3684 = callmethod(opresult3681, "++", [1], string3682);
onSelf = true;
  var call3685 = callmethod(this, "out", [1], opresult3684);
  lineNumber = 1022
  var string3686 = new GraceString("");
  var var_snm = string3686;
  lineNumber = 1022;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_snm)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'snm' to be of type Dynamic"))
  lineNumber = 1023
  lineNumber = 1
  lineNumber = 1023
  var call3687 = callmethod(var_o,"value", [0]);
  var block3688 = Grace_allocObject();
  block3688.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3688.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3688.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3688.methods["match"] = GraceBlock_match;
  block3688.receiver = this;
  block3688.className = 'block<genjs:1023>';
  block3688.real = function(
var_c
) {
  sourceObject = this;
  lineNumber = 1024
  var string3690 = new GraceString("/");
  var opresult3692 = callmethod(var_c, "==", [1], string3690);
  if (Grace_isTrue(opresult3692)) {
  lineNumber = 1026
  lineNumber = 1025
  var string3693 = new GraceString("");
  var_snm = string3693;
  var if3689 = string3693;
  } else {
  lineNumber = 1028
  lineNumber = 1027
  var opresult3695 = callmethod(var_snm, "++", [1], var_c);
  var_snm = opresult3695;
  var if3689 = opresult3695;
}
  return if3689;
};
  var call3696 = callmethod(Grace_prelude,"for()do", [1, 1], call3687, block3688);
  lineNumber = 1030
  lineNumber = 1
  lineNumber = 1030
  var call3697 = callmethod(var_o,"value", [0]);
onSelf = true;
  var call3698 = callmethod(this, "escapestring", [1], call3697);
  var var_fn = call3698;
  lineNumber = 1030;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_fn)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'fn' to be of type Dynamic"))
  lineNumber = 1031
  var string3699 = new GraceString("this.outer = do_import(\"");
  var opresult3701 = callmethod(string3699, "++", [1], var_fn);
  var string3702 = new GraceString("\", gracecode_");
  var opresult3704 = callmethod(opresult3701, "++", [1], string3702);
  var opresult3706 = callmethod(opresult3704, "++", [1], var_snm);
  var string3707 = new GraceString(");");
  var opresult3709 = callmethod(opresult3706, "++", [1], string3707);
onSelf = true;
  var call3710 = callmethod(this, "out", [1], opresult3709);
  lineNumber = 1032
  var string3711 = new GraceString("var Grace_prelude = this.outer;");
onSelf = true;
  var call3712 = callmethod(this, "out", [1], string3711);
  lineNumber = 1034
  lineNumber = 1
  lineNumber = 1033
  var string3713 = new GraceString("undefined");
  var call3714 = callmethod(var_o,"register:=", [1], string3713);
  return call3714
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func3677.paramCounts = [1];
  func3677.variableArities = [false];
  this.methods["compiledialect"] = func3677;
  lineNumber = 1035
var func3715 = function(argcv) {    // method compileimport(1)
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func3715.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method compileimport(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1036
  var string3716 = new GraceString("// Import of ");
  lineNumber = 1
  lineNumber = 1036
  var call3717 = callmethod(var_o,"path", [0]);
  var opresult3719 = callmethod(string3716, "++", [1], call3717);
onSelf = true;
  var call3720 = callmethod(this, "out", [1], opresult3719);
  lineNumber = 1037
  var string3721 = new GraceString("");
  var var_snm = string3721;
  lineNumber = 1037;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_snm)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'snm' to be of type Dynamic"))
  lineNumber = 1038
  lineNumber = 1
  lineNumber = 1038
  var call3722 = callmethod(var_o,"path", [0]);
  var block3723 = Grace_allocObject();
  block3723.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block3723.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block3723.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block3723.methods["match"] = GraceBlock_match;
  block3723.receiver = this;
  block3723.className = 'block<genjs:1038>';
  block3723.real = function(
var_c
) {
  sourceObject = this;
  lineNumber = 1039
  var string3725 = new GraceString("/");
  var opresult3727 = callmethod(var_c, "==", [1], string3725);
  if (Grace_isTrue(opresult3727)) {
  lineNumber = 1041
  lineNumber = 1040
  var string3728 = new GraceString("");
  var_snm = string3728;
  var if3724 = string3728;
  } else {
  lineNumber = 1043
  lineNumber = 1042
  var opresult3730 = callmethod(var_snm, "++", [1], var_c);
  var_snm = opresult3730;
  var if3724 = opresult3730;
}
  return if3724;
};
  var call3731 = callmethod(Grace_prelude,"for()do", [1, 1], call3722, block3723);
  lineNumber = 1045
  lineNumber = 1
  lineNumber = 1045
  var call3732 = callmethod(var_o,"value", [0]);
onSelf = true;
  var call3733 = callmethod(this, "escapestring", [1], call3732);
  var var_nm = call3733;
  lineNumber = 1045;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_nm)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'nm' to be of type Dynamic"))
  lineNumber = 1046
  lineNumber = 1
  lineNumber = 1046
  var call3734 = callmethod(var_o,"path", [0]);
onSelf = true;
  var call3735 = callmethod(this, "escapestring", [1], call3734);
  var var_fn = call3735;
  lineNumber = 1046;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_fn)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'fn' to be of type Dynamic"))
  lineNumber = 1047
  var string3736 = new GraceString("  if (typeof gracecode_");
  var opresult3738 = callmethod(string3736, "++", [1], var_snm);
  var string3739 = new GraceString(" == 'undefined')");
  var opresult3741 = callmethod(opresult3738, "++", [1], string3739);
onSelf = true;
  var call3742 = callmethod(this, "out", [1], opresult3741);
  lineNumber = 1048
  var string3743 = new GraceString("    throw new GraceExceptionPacket(RuntimeErrorObject, ");
onSelf = true;
  var call3744 = callmethod(this, "out", [1], string3743);
  lineNumber = 1049
  var string3745 = new GraceString("      new GraceString('could not find module ");
  var opresult3747 = callmethod(string3745, "++", [1], var_snm);
  var string3748 = new GraceString("'));");
  var opresult3750 = callmethod(opresult3747, "++", [1], string3748);
onSelf = true;
  var call3751 = callmethod(this, "out", [1], opresult3750);
  lineNumber = 1050
  var string3752 = new GraceString("  var ");
onSelf = true;
  var call3753 = callmethod(this, "varf", [1], var_nm);
  var opresult3755 = callmethod(string3752, "++", [1], call3753);
  var string3756 = new GraceString(" = do_import(\"");
  var opresult3758 = callmethod(string3756, "++", [1], var_fn);
  var string3759 = new GraceString("\", gracecode_");
  var opresult3761 = callmethod(opresult3758, "++", [1], string3759);
  var opresult3763 = callmethod(opresult3761, "++", [1], var_snm);
  var string3764 = new GraceString(");");
  var opresult3766 = callmethod(opresult3763, "++", [1], string3764);
  var opresult3768 = callmethod(opresult3755, "++", [1], opresult3766);
onSelf = true;
  var call3769 = callmethod(this, "out", [1], opresult3768);
  lineNumber = 1051
  lineNumber = 1
  lineNumber = 1051
  var call3771 = callmethod(var_o,"dtype", [0]);
  var bool3772 = new GraceBoolean(false)
  var opresult3774 = callmethod(call3771, "!=", [1], bool3772);
  if (Grace_isTrue(opresult3774)) {
  lineNumber = 1052
  var string3775 = new GraceString("  if (!Grace_isTrue(callmethod(");
  lineNumber = 1
  lineNumber = 1052
  var call3776 = callmethod(var_o,"dtype", [0]);
onSelf = true;
  var call3777 = callmethod(this, "compilenode", [1], call3776);
  var opresult3779 = callmethod(string3775, "++", [1], call3777);
  var string3780 = new GraceString(", \"match\",");
  var opresult3782 = callmethod(opresult3779, "++", [1], string3780);
onSelf = true;
  var call3783 = callmethod(this, "out", [1], opresult3782);
  lineNumber = 1053
  var string3784 = new GraceString("    [1], ");
onSelf = true;
  var call3785 = callmethod(this, "varf", [1], var_nm);
  var opresult3787 = callmethod(string3784, "++", [1], call3785);
  var string3788 = new GraceString(")))");
  var opresult3790 = callmethod(opresult3787, "++", [1], string3788);
onSelf = true;
  var call3791 = callmethod(this, "out", [1], opresult3790);
  lineNumber = 1054
  var string3792 = new GraceString("      throw new GraceExceptionPacket(TypeErrorObject,");
onSelf = true;
  var call3793 = callmethod(this, "out", [1], string3792);
  lineNumber = 1055
  var string3794 = new GraceString("            new GraceString(\"expected \"");
onSelf = true;
  var call3795 = callmethod(this, "out", [1], string3794);
  lineNumber = 1056
  var string3796 = new GraceString("            + \"module ");
  var opresult3798 = callmethod(string3796, "++", [1], var_snm);
  var string3799 = new GraceString(" to be of type ");
  var opresult3801 = callmethod(opresult3798, "++", [1], string3799);
  lineNumber = 1
  lineNumber = 1056
  lineNumber = 1
  lineNumber = 1056
  var call3802 = callmethod(var_o,"dtype", [0]);
  var call3803 = callmethod(call3802,"value", [0]);
  var opresult3805 = callmethod(opresult3801, "++", [1], call3803);
  var string3806 = new GraceString("\"))");
  var opresult3808 = callmethod(opresult3805, "++", [1], string3806);
onSelf = true;
  var call3809 = callmethod(this, "out", [1], opresult3808);
  var if3770 = call3809;
}
  lineNumber = 1059
  lineNumber = 1
  lineNumber = 1058
  var string3810 = new GraceString("undefined");
  var call3811 = callmethod(var_o,"register:=", [1], string3810);
  return call3811
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func3715.paramCounts = [1];
  func3715.variableArities = [false];
  this.methods["compileimport"] = func3715;
  lineNumber = 1060
var func3812 = function(argcv) {    // method compilereturn(1)
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func3812.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method compilereturn(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1061
  lineNumber = 1
  lineNumber = 1061
  var call3813 = callmethod(var_o,"value", [0]);
onSelf = true;
  var call3814 = callmethod(this, "compilenode", [1], call3813);
  var var_reg = call3814;
  lineNumber = 1061;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_reg)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'reg' to be of type Dynamic"))
  lineNumber = 1062
  if (Grace_isTrue(var_inBlock)) {
  lineNumber = 1063
  var string3816 = new GraceString("  throw new ReturnException(");
  var opresult3818 = callmethod(string3816, "++", [1], var_reg);
  var string3819 = new GraceString(", returnTarget);");
  var opresult3821 = callmethod(opresult3818, "++", [1], string3819);
onSelf = true;
  var call3822 = callmethod(this, "out", [1], opresult3821);
  var if3815 = call3822;
  } else {
  lineNumber = 1065
  var string3823 = new GraceString("  return ");
  var opresult3825 = callmethod(string3823, "++", [1], var_reg);
onSelf = true;
  var call3826 = callmethod(this, "out", [1], opresult3825);
  var if3815 = call3826;
}
  lineNumber = 1068
  lineNumber = 1
  lineNumber = 1067
  var string3827 = new GraceString("undefined");
  var call3828 = callmethod(var_o,"register:=", [1], string3827);
  return call3828
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func3812.paramCounts = [1];
  func3812.variableArities = [false];
  this.methods["compilereturn"] = func3812;
  lineNumber = 1069
var func3829 = function(argcv) {    // method compilenode(1)
  var curarg = 1;
  var var_o = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func3829.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method compilenode(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1071
  lineNumber = 1070
  var opresult3831 = callmethod(var_compilationDepth, "+", [1], new GraceNum(1));
  var_compilationDepth = opresult3831;
  lineNumber = 1071
  lineNumber = 1
  lineNumber = 1071
  var call3833 = callmethod(var_o,"line", [0]);
  var opresult3835 = callmethod(var_linenum, "!=", [1], call3833);
  if (Grace_isTrue(opresult3835)) {
  lineNumber = 1073
  lineNumber = 1072
  lineNumber = 1
  lineNumber = 1072
  var call3836 = callmethod(var_o,"line", [0]);
  var_linenum = call3836;
  lineNumber = 1073
  var string3837 = new GraceString("  lineNumber = ");
  var opresult3839 = callmethod(string3837, "++", [1], var_linenum);
onSelf = true;
  var call3840 = callmethod(this, "out", [1], opresult3839);
  var if3832 = call3840;
}
  lineNumber = 1075
  lineNumber = 1
  lineNumber = 1075
  var call3842 = callmethod(var_o,"kind", [0]);
  var string3843 = new GraceString("num");
  var opresult3845 = callmethod(call3842, "==", [1], string3843);
  if (Grace_isTrue(opresult3845)) {
  lineNumber = 1077
  lineNumber = 1
  lineNumber = 1077
  lineNumber = 1076
  var string3846 = new GraceString("new GraceNum(");
  lineNumber = 1
  lineNumber = 1076
  var call3847 = callmethod(var_o,"value", [0]);
  var opresult3849 = callmethod(string3846, "++", [1], call3847);
  var string3850 = new GraceString(")");
  var opresult3852 = callmethod(opresult3849, "++", [1], string3850);
  var call3853 = callmethod(var_o,"register:=", [1], opresult3852);
  var if3841 = call3853;
}
  lineNumber = 1078
  var string3854 = new GraceString("");
  var var_l = string3854;
  lineNumber = 1078;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_l)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'l' to be of type Dynamic"))
  lineNumber = 1079
  lineNumber = 1
  lineNumber = 1079
  var call3856 = callmethod(var_o,"kind", [0]);
  var string3857 = new GraceString("string");
  var opresult3859 = callmethod(call3856, "==", [1], string3857);
  if (Grace_isTrue(opresult3859)) {
  lineNumber = 1081
  lineNumber = 1080
  lineNumber = 1
  lineNumber = 1080
  lineNumber = 1
  lineNumber = 1080
  var call3860 = callmethod(var_o,"value", [0]);
  var call3861 = callmethod(call3860,"size", [0]);
  var_l = call3861;
  lineNumber = 1082
  lineNumber = 1081
  var opresult3863 = callmethod(var_l, "+", [1], new GraceNum(1));
  var_l = opresult3863;
  lineNumber = 1082
  var string3864 = new GraceString("");
  var var_os = string3864;
  lineNumber = 1082;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_os)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'os' to be of type Dynamic"))
  lineNumber = 1084
  lineNumber = 1
  lineNumber = 1084
  var call3865 = callmethod(var_o,"value", [0]);
onSelf = true;
  var call3866 = callmethod(this, "escapestring", [1], call3865);
  var_os = call3866;
  lineNumber = 1085
  lineNumber = 1086
  lineNumber = 1085
  var string3867 = new GraceString("  var string");
  var opresult3869 = callmethod(string3867, "++", [1], var_auto__95__count);
  var string3870 = new GraceString(" = new GraceString(\"");
  var opresult3872 = callmethod(opresult3869, "++", [1], string3870);
  lineNumber = 1086
  var opresult3874 = callmethod(opresult3872, "++", [1], var_os);
  var string3875 = new GraceString("\");");
  var opresult3877 = callmethod(opresult3874, "++", [1], string3875);
onSelf = true;
  var call3878 = callmethod(this, "out", [1], opresult3877);
  lineNumber = 1088
  lineNumber = 1
  lineNumber = 1088
  lineNumber = 1087
  var string3879 = new GraceString("string");
  var opresult3881 = callmethod(string3879, "++", [1], var_auto__95__count);
  var call3882 = callmethod(var_o,"register:=", [1], opresult3881);
  lineNumber = 1089
  lineNumber = 1088
  var opresult3884 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult3884;
  var if3855 = opresult3884;
}
  lineNumber = 1090
  lineNumber = 1
  lineNumber = 1090
  var call3886 = callmethod(var_o,"kind", [0]);
  var string3887 = new GraceString("index");
  var opresult3889 = callmethod(call3886, "==", [1], string3887);
  if (Grace_isTrue(opresult3889)) {
  lineNumber = 1091
onSelf = true;
  var call3890 = callmethod(this, "compileindex", [1], var_o);
  var if3885 = call3890;
}
  lineNumber = 1093
  lineNumber = 1
  lineNumber = 1093
  var call3892 = callmethod(var_o,"kind", [0]);
  var string3893 = new GraceString("octets");
  var opresult3895 = callmethod(call3892, "==", [1], string3893);
  if (Grace_isTrue(opresult3895)) {
  lineNumber = 1094
onSelf = true;
  var call3896 = callmethod(this, "compileoctets", [1], var_o);
  var if3891 = call3896;
}
  lineNumber = 1096
  lineNumber = 1
  lineNumber = 1096
  var call3898 = callmethod(var_o,"kind", [0]);
  var string3899 = new GraceString("dialect");
  var opresult3901 = callmethod(call3898, "==", [1], string3899);
  if (Grace_isTrue(opresult3901)) {
  lineNumber = 1097
onSelf = true;
  var call3902 = callmethod(this, "compiledialect", [1], var_o);
  var if3897 = call3902;
}
  lineNumber = 1099
  lineNumber = 1
  lineNumber = 1099
  var call3904 = callmethod(var_o,"kind", [0]);
  var string3905 = new GraceString("import");
  var opresult3907 = callmethod(call3904, "==", [1], string3905);
  if (Grace_isTrue(opresult3907)) {
  lineNumber = 1100
onSelf = true;
  var call3908 = callmethod(this, "compileimport", [1], var_o);
  var if3903 = call3908;
}
  lineNumber = 1102
  lineNumber = 1
  lineNumber = 1102
  var call3910 = callmethod(var_o,"kind", [0]);
  var string3911 = new GraceString("return");
  var opresult3913 = callmethod(call3910, "==", [1], string3911);
  if (Grace_isTrue(opresult3913)) {
  lineNumber = 1103
onSelf = true;
  var call3914 = callmethod(this, "compilereturn", [1], var_o);
  var if3909 = call3914;
}
  lineNumber = 1105
  lineNumber = 1
  lineNumber = 1105
  var call3916 = callmethod(var_o,"kind", [0]);
  var string3917 = new GraceString("generic");
  var opresult3919 = callmethod(call3916, "==", [1], string3917);
  if (Grace_isTrue(opresult3919)) {
  lineNumber = 1106
  lineNumber = 1
  lineNumber = 1106
  lineNumber = 1
  lineNumber = 1106
  var call3920 = callmethod(var_o,"value", [0]);
onSelf = true;
  var call3921 = callmethod(this, "compilenode", [1], call3920);
  var call3922 = callmethod(var_o,"register:=", [1], call3921);
  var if3915 = call3922;
}
  lineNumber = 1108
  lineNumber = 1109
  lineNumber = 1108
  lineNumber = 1
  lineNumber = 1108
  var call3924 = callmethod(var_o,"kind", [0]);
  var string3925 = new GraceString("identifier");
  var opresult3927 = callmethod(call3924, "==", [1], string3925);
  lineNumber = 1109
  lineNumber = 1
  lineNumber = 1109
  var call3928 = callmethod(var_o,"value", [0]);
  var string3929 = new GraceString("true");
  var opresult3931 = callmethod(call3928, "==", [1], string3929);
  lineNumber = 1
  lineNumber = 1109
  var call3932 = callmethod(var_o,"value", [0]);
  var string3933 = new GraceString("false");
  var opresult3935 = callmethod(call3932, "==", [1], string3933);
  var opresult3937 = callmethod(opresult3931, "||", [1], opresult3935);
  var opresult3939 = callmethod(opresult3927, "&&", [1], opresult3937);
  if (Grace_isTrue(opresult3939)) {
  lineNumber = 1110
  var var_val = new GraceNum(0);
  lineNumber = 1110;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_val)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'val' to be of type Dynamic"))
  lineNumber = 1111
  lineNumber = 1
  lineNumber = 1111
  var call3941 = callmethod(var_o,"value", [0]);
  var string3942 = new GraceString("true");
  var opresult3944 = callmethod(call3941, "==", [1], string3942);
  if (Grace_isTrue(opresult3944)) {
  lineNumber = 1113
  lineNumber = 1112
  var_val = new GraceNum(1);
  var if3940 = new GraceNum(1);
}
  lineNumber = 1114
  var string3945 = new GraceString("  var bool");
  var opresult3947 = callmethod(string3945, "++", [1], var_auto__95__count);
  var string3948 = new GraceString(" = new GraceBoolean(");
  var opresult3950 = callmethod(opresult3947, "++", [1], string3948);
  lineNumber = 1
  lineNumber = 1114
  var call3951 = callmethod(var_o,"value", [0]);
  var opresult3953 = callmethod(opresult3950, "++", [1], call3951);
  var string3954 = new GraceString(")");
  var opresult3956 = callmethod(opresult3953, "++", [1], string3954);
onSelf = true;
  var call3957 = callmethod(this, "out", [1], opresult3956);
  lineNumber = 1116
  lineNumber = 1
  lineNumber = 1116
  lineNumber = 1115
  var string3958 = new GraceString("bool");
  var opresult3960 = callmethod(string3958, "++", [1], var_auto__95__count);
  var call3961 = callmethod(var_o,"register:=", [1], opresult3960);
  lineNumber = 1117
  lineNumber = 1116
  var opresult3963 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult3963;
  var if3923 = opresult3963;
  } else {
  lineNumber = 1120
  lineNumber = 1117
  lineNumber = 1
  lineNumber = 1117
  var call3965 = callmethod(var_o,"kind", [0]);
  var string3966 = new GraceString("identifier");
  var opresult3968 = callmethod(call3965, "==", [1], string3966);
  if (Grace_isTrue(opresult3968)) {
  lineNumber = 1118
onSelf = true;
  var call3969 = callmethod(this, "compileidentifier", [1], var_o);
  var if3964 = call3969;
}
  var if3923 = if3964;
}
  lineNumber = 1120
  lineNumber = 1
  lineNumber = 1120
  var call3971 = callmethod(var_o,"kind", [0]);
  var string3972 = new GraceString("defdec");
  var opresult3974 = callmethod(call3971, "==", [1], string3972);
  if (Grace_isTrue(opresult3974)) {
  lineNumber = 1121
onSelf = true;
  var call3975 = callmethod(this, "compiledefdec", [1], var_o);
  var if3970 = call3975;
}
  lineNumber = 1123
  lineNumber = 1
  lineNumber = 1123
  var call3977 = callmethod(var_o,"kind", [0]);
  var string3978 = new GraceString("vardec");
  var opresult3980 = callmethod(call3977, "==", [1], string3978);
  if (Grace_isTrue(opresult3980)) {
  lineNumber = 1124
onSelf = true;
  var call3981 = callmethod(this, "compilevardec", [1], var_o);
  var if3976 = call3981;
}
  lineNumber = 1126
  lineNumber = 1
  lineNumber = 1126
  var call3983 = callmethod(var_o,"kind", [0]);
  var string3984 = new GraceString("block");
  var opresult3986 = callmethod(call3983, "==", [1], string3984);
  if (Grace_isTrue(opresult3986)) {
  lineNumber = 1127
onSelf = true;
  var call3987 = callmethod(this, "compileblock", [1], var_o);
  var if3982 = call3987;
}
  lineNumber = 1129
  lineNumber = 1
  lineNumber = 1129
  var call3989 = callmethod(var_o,"kind", [0]);
  var string3990 = new GraceString("method");
  var opresult3992 = callmethod(call3989, "==", [1], string3990);
  if (Grace_isTrue(opresult3992)) {
  lineNumber = 1130
  var string3993 = new GraceString("this");
onSelf = true;
  var call3994 = callmethod(this, "compilemethod", [2], var_o, string3993);
  var if3988 = call3994;
}
  lineNumber = 1132
  lineNumber = 1
  lineNumber = 1132
  var call3996 = callmethod(var_o,"kind", [0]);
  var string3997 = new GraceString("array");
  var opresult3999 = callmethod(call3996, "==", [1], string3997);
  if (Grace_isTrue(opresult3999)) {
  lineNumber = 1133
onSelf = true;
  var call4000 = callmethod(this, "compilearray", [1], var_o);
  var if3995 = call4000;
}
  lineNumber = 1135
  lineNumber = 1
  lineNumber = 1135
  var call4002 = callmethod(var_o,"kind", [0]);
  var string4003 = new GraceString("bind");
  var opresult4005 = callmethod(call4002, "==", [1], string4003);
  if (Grace_isTrue(opresult4005)) {
  lineNumber = 1136
onSelf = true;
  var call4006 = callmethod(this, "compilebind", [1], var_o);
  var if4001 = call4006;
}
  lineNumber = 1138
  lineNumber = 1
  lineNumber = 1138
  var call4008 = callmethod(var_o,"kind", [0]);
  var string4009 = new GraceString("while");
  var opresult4011 = callmethod(call4008, "==", [1], string4009);
  if (Grace_isTrue(opresult4011)) {
  lineNumber = 1139
onSelf = true;
  var call4012 = callmethod(this, "compilewhile", [1], var_o);
  var if4007 = call4012;
}
  lineNumber = 1141
  lineNumber = 1
  lineNumber = 1141
  var call4014 = callmethod(var_o,"kind", [0]);
  var string4015 = new GraceString("if");
  var opresult4017 = callmethod(call4014, "==", [1], string4015);
  if (Grace_isTrue(opresult4017)) {
  lineNumber = 1142
onSelf = true;
  var call4018 = callmethod(this, "compileif", [1], var_o);
  var if4013 = call4018;
}
  lineNumber = 1144
  lineNumber = 1
  lineNumber = 1144
  var call4020 = callmethod(var_o,"kind", [0]);
  var string4021 = new GraceString("catchcase");
  var opresult4023 = callmethod(call4020, "==", [1], string4021);
  if (Grace_isTrue(opresult4023)) {
  lineNumber = 1145
onSelf = true;
  var call4024 = callmethod(this, "compilecatchcase", [1], var_o);
  var if4019 = call4024;
}
  lineNumber = 1147
  lineNumber = 1
  lineNumber = 1147
  var call4026 = callmethod(var_o,"kind", [0]);
  var string4027 = new GraceString("matchcase");
  var opresult4029 = callmethod(call4026, "==", [1], string4027);
  if (Grace_isTrue(opresult4029)) {
  lineNumber = 1148
onSelf = true;
  var call4030 = callmethod(this, "compilematchcase", [1], var_o);
  var if4025 = call4030;
}
  lineNumber = 1150
  lineNumber = 1
  lineNumber = 1150
  var call4032 = callmethod(var_o,"kind", [0]);
  var string4033 = new GraceString("class");
  var opresult4035 = callmethod(call4032, "==", [1], string4033);
  if (Grace_isTrue(opresult4035)) {
  lineNumber = 1151
onSelf = true;
  var call4036 = callmethod(this, "compileclass", [1], var_o);
  var if4031 = call4036;
}
  lineNumber = 1153
  lineNumber = 1
  lineNumber = 1153
  var call4038 = callmethod(var_o,"kind", [0]);
  var string4039 = new GraceString("object");
  var opresult4041 = callmethod(call4038, "==", [1], string4039);
  if (Grace_isTrue(opresult4041)) {
  lineNumber = 1154
  var string4042 = new GraceString("this");
  var bool4043 = new GraceBoolean(false)
onSelf = true;
  var call4044 = callmethod(this, "compileobject", [3], var_o, string4042, bool4043);
  var if4037 = call4044;
}
  lineNumber = 1156
  lineNumber = 1
  lineNumber = 1156
  var call4046 = callmethod(var_o,"kind", [0]);
  var string4047 = new GraceString("type");
  var opresult4049 = callmethod(call4046, "==", [1], string4047);
  if (Grace_isTrue(opresult4049)) {
  lineNumber = 1157
onSelf = true;
  var call4050 = callmethod(this, "compiletype", [1], var_o);
  var if4045 = call4050;
}
  lineNumber = 1159
  lineNumber = 1
  lineNumber = 1159
  var call4052 = callmethod(var_o,"kind", [0]);
  var string4053 = new GraceString("member");
  var opresult4055 = callmethod(call4052, "==", [1], string4053);
  if (Grace_isTrue(opresult4055)) {
  lineNumber = 1160
onSelf = true;
  var call4056 = callmethod(this, "compilemember", [1], var_o);
  var if4051 = call4056;
}
  lineNumber = 1162
  lineNumber = 1
  lineNumber = 1162
  var call4058 = callmethod(var_o,"kind", [0]);
  var string4059 = new GraceString("for");
  var opresult4061 = callmethod(call4058, "==", [1], string4059);
  if (Grace_isTrue(opresult4061)) {
  lineNumber = 1163
onSelf = true;
  var call4062 = callmethod(this, "compilefor", [1], var_o);
  var if4057 = call4062;
}
  lineNumber = 1165
  lineNumber = 1
  lineNumber = 1165
  var call4064 = callmethod(var_o,"kind", [0]);
  var string4065 = new GraceString("call");
  var opresult4067 = callmethod(call4064, "==", [1], string4065);
  if (Grace_isTrue(opresult4067)) {
  lineNumber = 1166
  lineNumber = 1
  lineNumber = 1166
  lineNumber = 1
  lineNumber = 1166
  var call4069 = callmethod(var_o,"value", [0]);
  var call4070 = callmethod(call4069,"value", [0]);
  var string4071 = new GraceString("print");
  var opresult4073 = callmethod(call4070, "==", [1], string4071);
  lineNumber = 1
  lineNumber = 1166
  lineNumber = 1
  lineNumber = 1166
  lineNumber = 1
  lineNumber = 1166
  var call4074 = callmethod(var_o,"value", [0]);
  var call4075 = callmethod(call4074,"in", [0]);
  var call4076 = callmethod(call4075,"value", [0]);
  var string4077 = new GraceString("prelude");
  var opresult4079 = callmethod(call4076, "==", [1], string4077);
  var opresult4081 = callmethod(opresult4073, "&&", [1], opresult4079);
  if (Grace_isTrue(opresult4081)) {
  lineNumber = 1167
  var array4082 = new GraceList([
]);

  var var_args = array4082;
  lineNumber = 1167;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_args)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'args' to be of type Dynamic"))
  lineNumber = 1168
  lineNumber = 1
  lineNumber = 1168
  var call4083 = callmethod(var_o,"with", [0]);
  var block4084 = Grace_allocObject();
  block4084.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4084.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4084.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4084.methods["match"] = GraceBlock_match;
  block4084.receiver = this;
  block4084.className = 'block<genjs:1168>';
  block4084.real = function(
var_part
) {
  sourceObject = this;
  lineNumber = 1169
  lineNumber = 1
  lineNumber = 1169
  var call4085 = callmethod(var_part,"args", [0]);
  var block4086 = Grace_allocObject();
  block4086.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4086.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4086.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4086.methods["match"] = GraceBlock_match;
  block4086.receiver = this;
  block4086.className = 'block<genjs:1169>';
  block4086.real = function(
var_prm
) {
  sourceObject = this;
  lineNumber = 1170
onSelf = true;
  var call4087 = callmethod(this, "compilenode", [1], var_prm);
  var var_r = call4087;
  lineNumber = 1170;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_r)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'r' to be of type Dynamic"))
  lineNumber = 1171
  var call4088 = callmethod(var_args,"push", [1], var_r);
  return call4088;
};
  var call4089 = callmethod(Grace_prelude,"for()do", [1, 1], call4085, block4086);
  return call4089;
};
  var call4090 = callmethod(Grace_prelude,"for()do", [1, 1], call4083, block4084);
  lineNumber = 1174
  lineNumber = 1
  lineNumber = 1174
  var call4092 = callmethod(var_args,"size", [0]);
  var opresult4094 = callmethod(call4092, "==", [1], new GraceNum(0));
  if (Grace_isTrue(opresult4094)) {
  lineNumber = 1175
  var string4095 = new GraceString("  var call");
  var opresult4097 = callmethod(string4095, "++", [1], var_auto__95__count);
  var string4098 = new GraceString(" = Grace_print(new GraceString(\"\"));");
  var opresult4100 = callmethod(opresult4097, "++", [1], string4098);
onSelf = true;
  var call4101 = callmethod(this, "out", [1], opresult4100);
  var if4091 = call4101;
  } else {
  lineNumber = 1177
  var string4102 = new GraceString("  var call");
  var opresult4104 = callmethod(string4102, "++", [1], var_auto__95__count);
  var string4105 = new GraceString(" = Grace_print(");
  var opresult4107 = callmethod(opresult4104, "++", [1], string4105);
  lineNumber = 1
  lineNumber = 1177
  var call4108 = callmethod(var_args,"first", [0]);
  var opresult4110 = callmethod(opresult4107, "++", [1], call4108);
  var string4111 = new GraceString(");");
  var opresult4113 = callmethod(opresult4110, "++", [1], string4111);
onSelf = true;
  var call4114 = callmethod(this, "out", [1], opresult4113);
  var if4091 = call4114;
}
  lineNumber = 1180
  lineNumber = 1
  lineNumber = 1180
  lineNumber = 1179
  var string4115 = new GraceString("call");
  var opresult4117 = callmethod(string4115, "++", [1], var_auto__95__count);
  var call4118 = callmethod(var_o,"register:=", [1], opresult4117);
  lineNumber = 1181
  lineNumber = 1180
  var opresult4120 = callmethod(var_auto__95__count, "+", [1], new GraceNum(1));
  var_auto__95__count = opresult4120;
  var if4068 = opresult4120;
  } else {
  lineNumber = 1182
onSelf = true;
  var call4121 = callmethod(this, "compilecall", [1], var_o);
  var if4068 = call4121;
}
  var if4063 = if4068;
}
  lineNumber = 1185
  lineNumber = 1
  lineNumber = 1185
  var call4123 = callmethod(var_o,"kind", [0]);
  var string4124 = new GraceString("op");
  var opresult4126 = callmethod(call4123, "==", [1], string4124);
  if (Grace_isTrue(opresult4126)) {
  lineNumber = 1186
onSelf = true;
  var call4127 = callmethod(this, "compileop", [1], var_o);
  var if4122 = call4127;
}
  lineNumber = 1189
  lineNumber = 1188
  var diff4129 = callmethod(var_compilationDepth, "-", [1], new GraceNum(1));
  var_compilationDepth = diff4129;
  lineNumber = 1189
  lineNumber = 1
  lineNumber = 1189
  var call4130 = callmethod(var_o,"register", [0]);
  return call4130
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func3829.paramCounts = [1];
  func3829.variableArities = [false];
  this.methods["compilenode"] = func3829;
  lineNumber = 1191
var func4131 = function(argcv) {    // method addTransitiveImports(2)
  var curarg = 1;
  var var_filepath = arguments[curarg];
  curarg++;
  var var_epath = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func4131.paramCounts[0]) // != 2 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method addTransitiveImports(2) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1192
  var call4132 = callmethod(var_xmodule,"parseGCT", [2], var_epath, var_filepath);
  var var_data = call4132;
  lineNumber = 1192;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_data)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'data' to be of type Dynamic"))
  lineNumber = 1193
  var string4134 = new GraceString("modules");
  var call4135 = callmethod(var_data,"contains", [1], string4134);
  if (Grace_isTrue(call4135)) {
  lineNumber = 1194
  var string4136 = new GraceString("modules");
  var call4137 = callmethod(var_data,"get", [1], string4136);
  var block4138 = Grace_allocObject();
  block4138.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4138.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4138.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4138.methods["match"] = GraceBlock_match;
  block4138.receiver = this;
  block4138.className = 'block<genjs:1194>';
  block4138.real = function(
var_m
) {
  sourceObject = this;
  lineNumber = 1195
  lineNumber = 1
  lineNumber = 1195
  var call4140 = callmethod(var_util,"modname", [0]);
  var opresult4142 = callmethod(var_m, "==", [1], call4140);
  if (Grace_isTrue(opresult4142)) {
  lineNumber = 1196
  lineNumber = 1197
  lineNumber = 1196
  var string4143 = new GraceString("Cyclic import detected: '");
  var opresult4145 = callmethod(string4143, "++", [1], var_m);
  var string4146 = new GraceString("' is imported ");
  var opresult4148 = callmethod(opresult4145, "++", [1], string4146);
  lineNumber = 1197
  var string4149 = new GraceString("by '");
  var opresult4151 = callmethod(string4149, "++", [1], var_epath);
  var string4152 = new GraceString("', which is imported by '");
  var opresult4154 = callmethod(opresult4151, "++", [1], string4152);
  var opresult4156 = callmethod(opresult4154, "++", [1], var_m);
  var string4157 = new GraceString("' (and so on).");
  var opresult4159 = callmethod(opresult4156, "++", [1], string4157);
  var opresult4161 = callmethod(opresult4148, "++", [1], opresult4159);
  lineNumber = 1196
  var call4162 = callmethod(var_util,"syntax_error", [1], opresult4161);
  var if4139 = call4162;
}
  lineNumber = 1199
onSelf = true;
  var call4163 = callmethod(this, "checkimport", [1], var_m);
  return call4163;
};
  var call4164 = callmethod(Grace_prelude,"for()do", [1, 1], call4137, block4138);
  var if4133 = call4164;
}
  lineNumber = 1202
  var string4166 = new GraceString("path");
  var call4167 = callmethod(var_data,"contains", [1], string4166);
  if (Grace_isTrue(call4167)) {
  lineNumber = 1203
  lineNumber = 1
  lineNumber = 1203
  var string4168 = new GraceString("path");
  var call4169 = callmethod(var_data,"get", [1], string4168);
  var call4170 = callmethod(call4169,"first", [0]);
  var var_path = call4170;
  lineNumber = 1203;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_path)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'path' to be of type Dynamic"))
  lineNumber = 1204
  var opresult4173 = callmethod(var_path, "!=", [1], var_epath);
  if (Grace_isTrue(opresult4173)) {
  lineNumber = 1205
  lineNumber = 1206
  lineNumber = 1205
  var string4174 = new GraceString("Imported module '");
  var opresult4176 = callmethod(string4174, "++", [1], var_epath);
  var string4177 = new GraceString("' compiled with");
  var opresult4179 = callmethod(opresult4176, "++", [1], string4177);
  lineNumber = 1206
  var string4180 = new GraceString(" different path '");
  var opresult4182 = callmethod(string4180, "++", [1], var_path);
  var string4183 = new GraceString("'.");
  var opresult4185 = callmethod(opresult4182, "++", [1], string4183);
  var opresult4187 = callmethod(opresult4179, "++", [1], opresult4185);
  lineNumber = 1205
  var call4188 = callmethod(var_util,"syntax_error", [1], opresult4187);
  var if4171 = call4188;
}
  var if4165 = if4171;
}
  return if4165
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4131.paramCounts = [2];
  func4131.variableArities = [false];
  this.methods["addTransitiveImports"] = func4131;
  lineNumber = 1210
var func4189 = function(argcv) {    // method checkimport(1)
  var curarg = 1;
  var var_nm = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func4189.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method checkimport(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1211
  var bool4190 = new GraceBoolean(false)
  var var_exists = bool4190;
  lineNumber = 1211;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_exists)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'exists' to be of type Dynamic"))
  lineNumber = 1212
  var bool4191 = new GraceBoolean(false)
  var var_ext = bool4191;
  lineNumber = 1212;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_ext)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'ext' to be of type Dynamic"))
  lineNumber = 1213
  var var_cmd;
  lineNumber = 1214
  lineNumber = 1
  lineNumber = 1214
  var call4192 = callmethod(var_sys,"argv", [0]);
  var var_argv = call4192;
  lineNumber = 1214;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_argv)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'argv' to be of type Dynamic"))
  lineNumber = 1215
  var call4194 = callmethod(var_staticmodules,"contains", [1], var_nm);
  if (Grace_isTrue(call4194)) {
  lineNumber = 1217
  lineNumber = 1216
  var bool4195 = new GraceBoolean(true)
  return bool4195
  var if4193 = undefined;
}
  lineNumber = 1218
  var string4197 = new GraceString("");
  var opresult4199 = callmethod(string4197, "++", [1], var_nm);
  var string4200 = new GraceString(".grace");
  var opresult4202 = callmethod(opresult4199, "++", [1], string4200);
  var call4203 = callmethod(var_io,"exists", [1], opresult4202);
  if (Grace_isTrue(call4203)) {
  lineNumber = 1219
  var call4204 = callmethod(var_staticmodules,"add", [1], var_nm);
  lineNumber = 1220
  var string4205 = new GraceString(".gct");
  var opresult4207 = callmethod(var_nm, "++", [1], string4205);
onSelf = true;
  var call4208 = callmethod(this, "addTransitiveImports", [2], opresult4207, var_nm);
  var if4196 = call4208;
  } else {
  lineNumber = 1224
  lineNumber = 1221
  var string4210 = new GraceString("");
  lineNumber = 1
  lineNumber = 1221
  var call4211 = callmethod(var_sys,"execPath", [0]);
  var opresult4213 = callmethod(string4210, "++", [1], call4211);
  var string4214 = new GraceString("/modules/");
  var opresult4216 = callmethod(opresult4213, "++", [1], string4214);
  var opresult4218 = callmethod(opresult4216, "++", [1], var_nm);
  var string4219 = new GraceString(".grace");
  var opresult4221 = callmethod(opresult4218, "++", [1], string4219);
  var call4222 = callmethod(var_io,"exists", [1], opresult4221);
  if (Grace_isTrue(call4222)) {
  lineNumber = 1222
  var call4223 = callmethod(var_staticmodules,"add", [1], var_nm);
  lineNumber = 1223
  var string4224 = new GraceString("");
  lineNumber = 1
  lineNumber = 1223
  var call4225 = callmethod(var_sys,"execPath", [0]);
  var opresult4227 = callmethod(string4224, "++", [1], call4225);
  var string4228 = new GraceString("/modules/");
  var opresult4230 = callmethod(opresult4227, "++", [1], string4228);
  var opresult4232 = callmethod(opresult4230, "++", [1], var_nm);
  var string4233 = new GraceString(".gct");
  var opresult4235 = callmethod(opresult4232, "++", [1], string4233);
onSelf = true;
  var call4236 = callmethod(this, "addTransitiveImports", [2], opresult4235, var_nm);
  var if4209 = call4236;
  } else {
  lineNumber = 1227
  lineNumber = 1224
  var string4238 = new GraceString("");
  lineNumber = 1
  lineNumber = 1224
  var call4239 = callmethod(var_sys,"execPath", [0]);
  var opresult4241 = callmethod(string4238, "++", [1], call4239);
  var string4242 = new GraceString("/../lib/minigrace/modules/");
  var opresult4244 = callmethod(opresult4241, "++", [1], string4242);
  var opresult4246 = callmethod(opresult4244, "++", [1], var_nm);
  var string4247 = new GraceString(".grace");
  var opresult4249 = callmethod(opresult4246, "++", [1], string4247);
  var call4250 = callmethod(var_io,"exists", [1], opresult4249);
  if (Grace_isTrue(call4250)) {
  lineNumber = 1225
  var call4251 = callmethod(var_staticmodules,"add", [1], var_nm);
  lineNumber = 1226
  var string4252 = new GraceString("");
  lineNumber = 1
  lineNumber = 1226
  var call4253 = callmethod(var_sys,"execPath", [0]);
  var opresult4255 = callmethod(string4252, "++", [1], call4253);
  var string4256 = new GraceString("/../lib/minigrace/modules/");
  var opresult4258 = callmethod(opresult4255, "++", [1], string4256);
  var opresult4260 = callmethod(opresult4258, "++", [1], var_nm);
  var string4261 = new GraceString(".gct");
  var opresult4263 = callmethod(opresult4260, "++", [1], string4261);
onSelf = true;
  var call4264 = callmethod(this, "addTransitiveImports", [2], opresult4263, var_nm);
  var if4237 = call4264;
  } else {
  lineNumber = 1230
  lineNumber = 1227
  var string4266 = new GraceString("");
  lineNumber = 1
  lineNumber = 1227
  var call4267 = callmethod(var_sys,"execPath", [0]);
  var opresult4269 = callmethod(string4266, "++", [1], call4267);
  var string4270 = new GraceString("/");
  var opresult4272 = callmethod(opresult4269, "++", [1], string4270);
  var opresult4274 = callmethod(opresult4272, "++", [1], var_nm);
  var string4275 = new GraceString(".grace");
  var opresult4277 = callmethod(opresult4274, "++", [1], string4275);
  var call4278 = callmethod(var_io,"exists", [1], opresult4277);
  if (Grace_isTrue(call4278)) {
  lineNumber = 1228
  var call4279 = callmethod(var_staticmodules,"add", [1], var_nm);
  lineNumber = 1229
  var string4280 = new GraceString("");
  lineNumber = 1
  lineNumber = 1229
  var call4281 = callmethod(var_sys,"execPath", [0]);
  var opresult4283 = callmethod(string4280, "++", [1], call4281);
  var string4284 = new GraceString("/");
  var opresult4286 = callmethod(opresult4283, "++", [1], string4284);
  var opresult4288 = callmethod(opresult4286, "++", [1], var_nm);
  var string4289 = new GraceString(".gct");
  var opresult4291 = callmethod(opresult4288, "++", [1], string4289);
onSelf = true;
  var call4292 = callmethod(this, "addTransitiveImports", [2], opresult4291, var_nm);
  var if4265 = call4292;
  } else {
  lineNumber = 1231
  var string4293 = new GraceString(".gct");
  var opresult4295 = callmethod(var_nm, "++", [1], string4293);
  var call4296 = callmethod(var_xmodule,"parseGCT", [2], var_nm, opresult4295);
  var if4265 = call4296;
}
  var if4237 = if4265;
}
  var if4209 = if4237;
}
  var if4196 = if4209;
}
  return if4196
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4189.paramCounts = [1];
  func4189.variableArities = [false];
  this.methods["checkimport"] = func4189;
  lineNumber = 1234
var func4297 = function(argcv) {    // method processDialect(1)
  var curarg = 1;
  var var_values__39__ = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func4297.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method processDialect(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1235
  var string4298 = new GraceString("checking imports.");
onSelf = true;
  var call4299 = callmethod(this, "log_verbose", [1], string4298);
  lineNumber = 1236
  var block4300 = Grace_allocObject();
  block4300.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4300.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4300.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4300.methods["match"] = GraceBlock_match;
  block4300.receiver = this;
  block4300.className = 'block<genjs:1236>';
  block4300.real = function(
var_v
) {
  sourceObject = this;
  lineNumber = 1237
  lineNumber = 1
  lineNumber = 1237
  var call4302 = callmethod(var_v,"kind", [0]);
  var string4303 = new GraceString("import");
  var opresult4305 = callmethod(call4302, "==", [1], string4303);
  if (Grace_isTrue(opresult4305)) {
  lineNumber = 1238
  lineNumber = 1
  lineNumber = 1238
  var call4306 = callmethod(var_v,"path", [0]);
onSelf = true;
  var call4307 = callmethod(this, "checkimport", [1], call4306);
  var if4301 = call4307;
}
  lineNumber = 1240
  lineNumber = 1
  lineNumber = 1240
  var call4309 = callmethod(var_v,"kind", [0]);
  var string4310 = new GraceString("dialect");
  var opresult4312 = callmethod(call4309, "==", [1], string4310);
  if (Grace_isTrue(opresult4312)) {
  lineNumber = 1241
  lineNumber = 1
  lineNumber = 1241
  var call4313 = callmethod(var_v,"value", [0]);
  var var_nm = call4313;
  lineNumber = 1241;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_nm)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'nm' to be of type Dynamic"))
  lineNumber = 1242
onSelf = true;
  var call4314 = callmethod(this, "checkimport", [1], var_nm);
  lineNumber = 1243
  var string4315 = new GraceString("loading dialect for checkers.");
onSelf = true;
  var call4316 = callmethod(this, "log_verbose", [1], string4315);
  lineNumber = 1244
  var string4317 = new GraceString("CheckerFailure");
  var call4318 = callmethod(Grace_prelude,"Exception", [0]);
  var call4319 = callmethod(call4318,"refine", [1], string4317);
  var var_CheckerFailure = call4319;
  lineNumber = 1244;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_CheckerFailure)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'CheckerFailure' to be of type Dynamic"))
  lineNumber = 1260
  lineNumber = 1245
  var block4321 = Grace_allocObject();
  block4321.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4321.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4321.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4321.methods["match"] = GraceBlock_match;
  block4321.receiver = this;
  block4321.className = 'block<genjs:1245>';
  block4321.real = function(
) {
  sourceObject = this;
  lineNumber = 1246
  var call4322 = callmethod(var_mirrors,"loadDynamicModule", [1], var_nm);
  var var_dobj = call4322;
  lineNumber = 1246;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_dobj)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'dobj' to be of type Dynamic"))
  lineNumber = 1247
  lineNumber = 1
  lineNumber = 1247
  var call4323 = callmethod(var_mirrors,"reflect", [1], var_dobj);
  var call4324 = callmethod(call4323,"methods", [0]);
  var var_mths = call4324;
  lineNumber = 1247;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_mths)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'mths' to be of type Dynamic"))
  lineNumber = 1248
  var block4325 = Grace_allocObject();
  block4325.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4325.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4325.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4325.methods["match"] = GraceBlock_match;
  block4325.receiver = this;
  block4325.className = 'block<genjs:1248>';
  block4325.real = function(
var_m
) {
  sourceObject = this;
  lineNumber = 1249
  lineNumber = 1
  lineNumber = 1249
  var call4327 = callmethod(var_m,"name", [0]);
  var string4328 = new GraceString("checker");
  var opresult4330 = callmethod(call4327, "==", [1], string4328);
  if (Grace_isTrue(opresult4330)) {
  lineNumber = 1250
  var string4331 = new GraceString("running dialect's checkers.");
onSelf = true;
  var call4332 = callmethod(this, "log_verbose", [1], string4331);
  lineNumber = 1251
  var call4333 = callmethod(var_dobj,"checker", [1], var_values__39__);
  var if4326 = call4333;
}
  lineNumber = 1253
  lineNumber = 1
  lineNumber = 1253
  var call4335 = callmethod(var_m,"name", [0]);
  var string4336 = new GraceString("atModuleEnd");
  var opresult4338 = callmethod(call4335, "==", [1], string4336);
  if (Grace_isTrue(opresult4338)) {
  lineNumber = 1255
  lineNumber = 1254
  var bool4339 = new GraceBoolean(true)
  var_dialectHasAtModuleEnd = bool4339;
  var if4334 = bool4339;
}
  return if4334;
};
  var call4340 = callmethod(Grace_prelude,"for()do", [1, 1], var_mths, block4325);
  return call4340;
};
  var cases4320 = [];
  lineNumber = 1257
  var block4341 = Grace_allocObject();
  block4341.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4341.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4341.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  lineNumber = 1259
  var string4342 = new GraceString("e");
  lineNumber = 1
  var call4343 = callmethod(Grace_prelude,"VariablePattern", [0]);
  var call4344 = callmethod(call4343,"new", [1], string4342);
  lineNumber = 1259
  lineNumber = 1257
  lineNumber = 1
  var call4345 = callmethod(Grace_prelude,"RuntimeError", [0]);
  lineNumber = 1259
  var array4346 = new GraceList([
]);

  lineNumber = 1
  var call4347 = callmethod(Grace_prelude,"MatchAndDestructuringPattern", [0]);
  var call4348 = callmethod(call4347,"new", [2], call4345, array4346);
  lineNumber = 1259
  lineNumber = 1
  var call4349 = callmethod(Grace_prelude,"AndPattern", [0]);
  var call4350 = callmethod(call4349,"new", [2], call4344, call4348);
  block4341.pattern = call4350;
  block4341.methods["match"] = GraceBlock_match;
  block4341.receiver = this;
  block4341.className = 'block<genjs:1257>';
  block4341.real = function(
var_e
) {
  sourceObject = this;
  lineNumber = 1258
  lineNumber = 1
  lineNumber = 1258
  var call4351 = callmethod(var_v,"line", [0]);
  var call4352 = callmethod(var_util,"setPosition", [2], call4351, new GraceNum(1));
  lineNumber = 1259
  var string4353 = new GraceString("Dialect '");
  var opresult4355 = callmethod(string4353, "++", [1], var_nm);
  var string4356 = new GraceString("' failed to load: ");
  var opresult4358 = callmethod(opresult4355, "++", [1], string4356);
  var opresult4360 = callmethod(opresult4358, "++", [1], var_e);
  var string4361 = new GraceString(".");
  var opresult4363 = callmethod(opresult4360, "++", [1], string4361);
  var call4364 = callmethod(var_util,"syntax_error", [1], opresult4363);
  return call4364;
};
  cases4320.push(block4341);
  lineNumber = 1260
  var block4365 = Grace_allocObject();
  block4365.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4365.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4365.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  lineNumber = 1264
  var string4366 = new GraceString("e");
  lineNumber = 1
  var call4367 = callmethod(Grace_prelude,"VariablePattern", [0]);
  var call4368 = callmethod(call4367,"new", [1], string4366);
  lineNumber = 1260
  lineNumber = 1264
  lineNumber = 1
  var call4369 = callmethod(Grace_prelude,"AndPattern", [0]);
  var call4370 = callmethod(call4369,"new", [2], call4368, var_CheckerFailure);
  block4365.pattern = call4370;
  block4365.methods["match"] = GraceBlock_match;
  block4365.receiver = this;
  block4365.className = 'block<genjs:1260>';
  block4365.real = function(
var_e
) {
  sourceObject = this;
  lineNumber = 1261
  lineNumber = 1
  lineNumber = 1261
  var call4372 = callmethod(var_e,"data", [0]);
  var opresult4374 = callmethod(var_nothing, "!=", [1], call4372);
  if (Grace_isTrue(opresult4374)) {
  lineNumber = 1262
  lineNumber = 1
  lineNumber = 1262
  lineNumber = 1
  lineNumber = 1262
  var call4375 = callmethod(var_e,"data", [0]);
  var call4376 = callmethod(call4375,"line", [0]);
  lineNumber = 1
  lineNumber = 1262
  lineNumber = 1
  lineNumber = 1262
  var call4377 = callmethod(var_e,"data", [0]);
  var call4378 = callmethod(call4377,"linePos", [0]);
  var call4379 = callmethod(var_util,"setPosition", [2], call4376, call4378);
  var if4371 = call4379;
}
  lineNumber = 1264
  var string4380 = new GraceString("Dialect failure: ");
  lineNumber = 1
  lineNumber = 1264
  var call4381 = callmethod(var_e,"message", [0]);
  var opresult4383 = callmethod(string4380, "++", [1], call4381);
  var string4384 = new GraceString(".");
  var opresult4386 = callmethod(opresult4383, "++", [1], string4384);
  var call4387 = callmethod(var_util,"syntax_error", [1], opresult4386);
  return call4387;
};
  cases4320.push(block4365);
  var catchres4320 = catchCase(block4321,cases4320,false);
  var if4308 = catchres4320;
}
  return if4308;
};
  var call4388 = callmethod(Grace_prelude,"for()do", [1, 1], var_values__39__, block4300);
  return call4388
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4297.paramCounts = [1];
  func4297.variableArities = [false];
  this.methods["processDialect"] = func4297;
  lineNumber = 1269
var func4389 = function(argcv) {    // method compile(6)
  var curarg = 1;
  var var_vl = arguments[curarg];
  curarg++;
  var var_of = arguments[curarg];
  curarg++;
  var var_mn = arguments[curarg];
  curarg++;
  var var_rm = arguments[curarg];
  curarg++;
  var var_bt = arguments[curarg];
  curarg++;
  var var_glpath = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func4389.paramCounts[0]) // != 6 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method compile(6) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 1270
  lineNumber = 1
  lineNumber = 1270
  var call4390 = callmethod(var_sys,"argv", [0]);
  var var_argv = call4390;
  lineNumber = 1270;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_argv)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'argv' to be of type Dynamic"))
  lineNumber = 1271
  var var_cmd;
  lineNumber = 1273
  lineNumber = 1272
  var_values = var_vl;
  lineNumber = 1274
  lineNumber = 1273
  var_outfile = var_of;
  lineNumber = 1275
  lineNumber = 1274
  var_modname = var_mn;
  lineNumber = 1276
  lineNumber = 1275
  var_runmode = var_rm;
  lineNumber = 1277
  lineNumber = 1276
  var_buildtype = var_bt;
  lineNumber = 1278
  lineNumber = 1277
  var_gracelibPath = var_glpath;
  lineNumber = 1278
  var string4391 = new GraceString("generating ECMAScript code.");
  var call4392 = callmethod(var_util,"log_verbose", [1], string4391);
  lineNumber = 1279
  var string4393 = new GraceString("String");
  var bool4394 = new GraceBoolean(true)
  var call4395 = callmethod(var_topLevelTypes,"put", [2], string4393, bool4394);
  lineNumber = 1280
  var string4396 = new GraceString("Number");
  var bool4397 = new GraceBoolean(true)
  var call4398 = callmethod(var_topLevelTypes,"put", [2], string4396, bool4397);
  lineNumber = 1281
  var string4399 = new GraceString("Boolean");
  var bool4400 = new GraceBoolean(true)
  var call4401 = callmethod(var_topLevelTypes,"put", [2], string4399, bool4400);
  lineNumber = 1282
  var string4402 = new GraceString("Block");
  var bool4403 = new GraceBoolean(true)
  var call4404 = callmethod(var_topLevelTypes,"put", [2], string4402, bool4403);
  lineNumber = 1283
  var string4405 = new GraceString("None");
  var bool4406 = new GraceBoolean(true)
  var call4407 = callmethod(var_topLevelTypes,"put", [2], string4405, bool4406);
  lineNumber = 1284
  var block4408 = Grace_allocObject();
  block4408.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4408.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4408.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4408.methods["match"] = GraceBlock_match;
  block4408.receiver = this;
  block4408.className = 'block<genjs:1284>';
  block4408.real = function(
var_v
) {
  sourceObject = this;
  lineNumber = 1285
  lineNumber = 1
  lineNumber = 1285
  var call4410 = callmethod(var_v,"kind", [0]);
  var string4411 = new GraceString("type");
  var opresult4413 = callmethod(call4410, "==", [1], string4411);
  if (Grace_isTrue(opresult4413)) {
  lineNumber = 1286
  lineNumber = 1
  lineNumber = 1286
  var call4414 = callmethod(var_v,"value", [0]);
onSelf = true;
  var call4415 = callmethod(this, "escapeident", [1], call4414);
  var var_typeid = call4415;
  lineNumber = 1286;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_typeid)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'typeid' to be of type Dynamic"))
  lineNumber = 1287
  var bool4416 = new GraceBoolean(true)
  var call4417 = callmethod(var_topLevelTypes,"put", [2], var_typeid, bool4416);
  var if4409 = call4417;
}
  return if4409;
};
  var call4418 = callmethod(Grace_prelude,"for()do", [1, 1], var_values, block4408);
  lineNumber = 1290
  var call4419 = callmethod(var_util,"setline", [1], new GraceNum(1));
  lineNumber = 1291
  var string4420 = new GraceString("function gracecode_");
  var opresult4422 = callmethod(string4420, "++", [1], var_modname);
  var string4423 = new GraceString("() {");
  var opresult4425 = callmethod(opresult4422, "++", [1], string4423);
onSelf = true;
  var call4426 = callmethod(this, "out", [1], opresult4425);
  lineNumber = 1292
  var string4428 = new GraceString("NativePrelude");
  lineNumber = 1
  lineNumber = 1292
  var call4429 = callmethod(var_util,"extensions", [0]);
  var call4430 = callmethod(call4429,"contains", [1], string4428);
  if (Grace_isTrue(call4430)) {
  lineNumber = 1293
  var string4431 = new GraceString("var Grace_prelude = window.Grace_native_prelude;");
onSelf = true;
  var call4432 = callmethod(this, "out", [1], string4431);
  var if4427 = call4432;
}
  lineNumber = 1295
  var block4433 = Grace_allocObject();
  block4433.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4433.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4433.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4433.methods["match"] = GraceBlock_match;
  block4433.receiver = this;
  block4433.className = 'block<genjs:1295>';
  block4433.real = function(
var_o
) {
  sourceObject = this;
  lineNumber = 1296
  lineNumber = 1
  lineNumber = 1296
  var call4435 = callmethod(var_o,"kind", [0]);
  var string4436 = new GraceString("method");
  var opresult4438 = callmethod(call4435, "==", [1], string4436);
  if (Grace_isTrue(opresult4438)) {
  lineNumber = 1297
onSelf = true;
  var call4439 = callmethod(this, "compilenode", [1], var_o);
  var if4434 = call4439;
}
  lineNumber = 1299
  lineNumber = 1
  lineNumber = 1299
  var call4441 = callmethod(var_o,"kind", [0]);
  var string4442 = new GraceString("type");
  var opresult4444 = callmethod(call4441, "==", [1], string4442);
  if (Grace_isTrue(opresult4444)) {
  lineNumber = 1300
onSelf = true;
  var call4445 = callmethod(this, "compilenode", [1], var_o);
  lineNumber = 1301
  lineNumber = 1
  lineNumber = 1301
  var call4446 = callmethod(var_o,"value", [0]);
onSelf = true;
  var call4447 = callmethod(this, "escapeident", [1], call4446);
  var var_typeid = call4447;
  lineNumber = 1301;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_typeid)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'typeid' to be of type Dynamic"))
  lineNumber = 1302
  var string4448 = new GraceString("var type_");
  var opresult4450 = callmethod(string4448, "++", [1], var_typeid);
  var string4451 = new GraceString(" = var_");
  var opresult4453 = callmethod(opresult4450, "++", [1], string4451);
  var opresult4455 = callmethod(opresult4453, "++", [1], var_typeid);
  var string4456 = new GraceString(";");
  var opresult4458 = callmethod(opresult4455, "++", [1], string4456);
onSelf = true;
  var call4459 = callmethod(this, "out", [1], opresult4458);
  var if4440 = call4459;
}
  return if4440;
};
  var call4460 = callmethod(Grace_prelude,"for()do", [1, 1], var_values, block4433);
  lineNumber = 1305
  var block4461 = Grace_allocObject();
  block4461.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4461.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4461.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4461.methods["match"] = GraceBlock_match;
  block4461.receiver = this;
  block4461.className = 'block<genjs:1305>';
  block4461.real = function(
var_o
) {
  sourceObject = this;
  lineNumber = 1306
  lineNumber = 1
  lineNumber = 1306
  var call4463 = callmethod(var_o,"kind", [0]);
  var string4464 = new GraceString("inherits");
  var opresult4466 = callmethod(call4463, "==", [1], string4464);
  if (Grace_isTrue(opresult4466)) {
  lineNumber = 1307
  lineNumber = 1
  lineNumber = 1307
  var call4467 = callmethod(var_o,"value", [0]);
onSelf = true;
  var call4468 = callmethod(this, "compilenode", [1], call4467);
  var var_sup = call4468;
  lineNumber = 1307;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_sup)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'sup' to be of type Dynamic"))
  lineNumber = 1308
  var string4469 = new GraceString("  this.superobj = ");
  var opresult4471 = callmethod(string4469, "++", [1], var_sup);
  var string4472 = new GraceString(";");
  var opresult4474 = callmethod(opresult4471, "++", [1], string4472);
onSelf = true;
  var call4475 = callmethod(this, "out", [1], opresult4474);
  lineNumber = 1309
  var string4476 = new GraceString("  this.data = ");
  var opresult4478 = callmethod(string4476, "++", [1], var_sup);
  var string4479 = new GraceString(".data;");
  var opresult4481 = callmethod(opresult4478, "++", [1], string4479);
onSelf = true;
  var call4482 = callmethod(this, "out", [1], opresult4481);
  lineNumber = 1310
  var string4483 = new GraceString("  this._value = ");
  var opresult4485 = callmethod(string4483, "++", [1], var_sup);
  var string4486 = new GraceString("._value;");
  var opresult4488 = callmethod(opresult4485, "++", [1], string4486);
onSelf = true;
  var call4489 = callmethod(this, "out", [1], opresult4488);
  var if4462 = call4489;
}
  lineNumber = 1312
  lineNumber = 1
  lineNumber = 1312
  var call4491 = callmethod(var_o,"kind", [0]);
  var string4492 = new GraceString("method");
  var opresult4494 = callmethod(call4491, "!=", [1], string4492);
  lineNumber = 1
  lineNumber = 1312
  var call4495 = callmethod(var_o,"kind", [0]);
  var string4496 = new GraceString("type");
  var opresult4498 = callmethod(call4495, "!=", [1], string4496);
  var opresult4500 = callmethod(opresult4494, "&&", [1], opresult4498);
  if (Grace_isTrue(opresult4500)) {
  lineNumber = 1313
onSelf = true;
  var call4501 = callmethod(this, "compilenode", [1], var_o);
  var if4490 = call4501;
}
  return if4490;
};
  var call4502 = callmethod(Grace_prelude,"for()do", [1, 1], var_values, block4461);
  lineNumber = 1316
  if (Grace_isTrue(var_dialectHasAtModuleEnd)) {
  lineNumber = 1317
  var string4504 = new GraceString("  callmethod(Grace_prelude,\"atModuleEnd\", [1], this);");
onSelf = true;
  var call4505 = callmethod(this, "out", [1], string4504);
  var if4503 = call4505;
}
  lineNumber = 1319
  var string4506 = new GraceString("  return this;");
onSelf = true;
  var call4507 = callmethod(this, "out", [1], string4506);
  lineNumber = 1320
  var string4508 = new GraceString("}");
onSelf = true;
  var call4509 = callmethod(this, "out", [1], string4508);
  lineNumber = 1321
  var bool4510 = new GraceBoolean(false)
  var var_lineOut = bool4510;
  lineNumber = 1321;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_lineOut)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'lineOut' to be of type Dynamic"))
  lineNumber = 1322
  var block4511 = Grace_allocObject();
  block4511.methods["apply"] = function() {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.real.apply(this.receiver, args);
  }
  block4511.methods["applyIndirectly"] = function(argcv, a) {
    return this.real.apply(this.receiver, a._value);
  }
  block4511.methods["outer"] = function() {
    return callmethod(this.receiver, 'outer', [0]);
  }
  block4511.methods["match"] = GraceBlock_match;
  block4511.receiver = this;
  block4511.className = 'block<genjs:1322>';
  block4511.real = function(
var_o
) {
  sourceObject = this;
  lineNumber = 1323
  var string4513 = new GraceString("  lineNumber =");
  var call4514 = callmethod(var_o,"substringFrom()to", [1, 1], new GraceNum(0), new GraceNum(14));
  var opresult4516 = callmethod(string4513, "==", [1], call4514);
  if (Grace_isTrue(opresult4516)) {
  lineNumber = 1325
  lineNumber = 1324
  var_lineOut = var_o;
  var if4512 = var_o;
  } else {
  lineNumber = 1326
  var bool4518 = new GraceBoolean(false)
  var opresult4520 = callmethod(bool4518, "!=", [1], var_lineOut);
  if (Grace_isTrue(opresult4520)) {
  lineNumber = 1327
onSelf = true;
  var call4521 = callmethod(this, "outprint", [1], var_lineOut);
  lineNumber = 1329
  lineNumber = 1328
  var bool4522 = new GraceBoolean(false)
  var_lineOut = bool4522;
  var if4517 = bool4522;
}
  lineNumber = 1330
onSelf = true;
  var call4523 = callmethod(this, "outprint", [1], var_o);
  var if4512 = call4523;
}
  return if4512;
};
  var call4524 = callmethod(Grace_prelude,"for()do", [1, 1], var_output, block4511);
  lineNumber = 1333
  var string4525 = new GraceString(".gct");
  var opresult4527 = callmethod(var_modname, "++", [1], string4525);
  lineNumber = 1334
  lineNumber = 1333
  var call4528 = callmethod(var_xmodule,"writeGCT()fromValues()modules", [2, 1, 1], var_modname, opresult4527, var_values, var_staticmodules);
  lineNumber = 1335
  var string4529 = new GraceString("done.");
onSelf = true;
  var call4530 = callmethod(this, "log_verbose", [1], string4529);
  return call4530
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4389.paramCounts = [6];
  func4389.variableArities = [false];
  this.methods["compile"] = func4389;
  lineNumber = 3
// Import of io
  if (typeof gracecode_io == 'undefined')
    throw new GraceExceptionPacket(RuntimeErrorObject, 
      new GraceString('could not find module io'));
  var var_io = do_import("io", gracecode_io);
  lineNumber = 4
// Import of sys
  if (typeof gracecode_sys == 'undefined')
    throw new GraceExceptionPacket(RuntimeErrorObject, 
      new GraceString('could not find module sys'));
  var var_sys = do_import("sys", gracecode_sys);
  lineNumber = 5
// Import of ast
  if (typeof gracecode_ast == 'undefined')
    throw new GraceExceptionPacket(RuntimeErrorObject, 
      new GraceString('could not find module ast'));
  var var_ast = do_import("ast", gracecode_ast);
  lineNumber = 6
// Import of util
  if (typeof gracecode_util == 'undefined')
    throw new GraceExceptionPacket(RuntimeErrorObject, 
      new GraceString('could not find module util'));
  var var_util = do_import("util", gracecode_util);
  lineNumber = 7
// Import of mgcollections
  if (typeof gracecode_mgcollections == 'undefined')
    throw new GraceExceptionPacket(RuntimeErrorObject, 
      new GraceString('could not find module mgcollections'));
  var var_mgcollections = do_import("mgcollections", gracecode_mgcollections);
  lineNumber = 8
// Import of xmodule
  if (typeof gracecode_xmodule == 'undefined')
    throw new GraceExceptionPacket(RuntimeErrorObject, 
      new GraceString('could not find module xmodule'));
  var var_xmodule = do_import("xmodule", gracecode_xmodule);
  lineNumber = 10
// Import of mirrors
  if (typeof gracecode_mirrors == 'undefined')
    throw new GraceExceptionPacket(RuntimeErrorObject, 
      new GraceString('could not find module mirrors'));
  var var_mirrors = do_import("mirrors", gracecode_mirrors);
  var var_tmp;
  lineNumber = 1
var func4531 = function(argcv) {    // method tmp
  var curarg = 1;
  if (argcv[0] !=  func4531.paramCounts[0]) // != 0 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method tmp is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 10
  return var_tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4531.paramCounts = [0];
  func4531.variableArities = [false];
  this.methods["tmp"] = func4531;
  lineNumber = 1
var func4532 = function(argcv) {    // method tmp:=(1)
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func4532.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method tmp:=(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_tmp = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4532.paramCounts = [1];
  func4532.variableArities = [false];
  this.methods["tmp:="] = func4532;
  lineNumber = 11
  var var_verbosity = new GraceNum(30);
  lineNumber = 1
var func4533 = function(argcv) {    // method verbosity
  var curarg = 1;
  if (argcv[0] !=  func4533.paramCounts[0]) // != 0 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method verbosity is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 11
  return var_verbosity
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4533.paramCounts = [0];
  func4533.variableArities = [false];
  this.methods["verbosity"] = func4533;
  lineNumber = 1
var func4534 = function(argcv) {    // method verbosity:=(1)
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func4534.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method verbosity:=(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_verbosity = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4534.paramCounts = [1];
  func4534.variableArities = [false];
  this.methods["verbosity:="] = func4534;
  lineNumber = 11;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_verbosity)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'verbosity' to be of type Dynamic"))
  lineNumber = 12
  var var_pad1 = new GraceNum(1);
  lineNumber = 1
var func4535 = function(argcv) {    // method pad1
  var curarg = 1;
  if (argcv[0] !=  func4535.paramCounts[0]) // != 0 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method pad1 is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 12
  return var_pad1
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4535.paramCounts = [0];
  func4535.variableArities = [false];
  this.methods["pad1"] = func4535;
  lineNumber = 1
var func4536 = function(argcv) {    // method pad1:=(1)
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func4536.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method pad1:=(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_pad1 = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4536.paramCounts = [1];
  func4536.variableArities = [false];
  this.methods["pad1:="] = func4536;
  lineNumber = 12;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_pad1)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'pad1' to be of type Dynamic"))
  lineNumber = 13
  var var_auto__95__count = new GraceNum(0);
  lineNumber = 1
var func4537 = function(argcv) {    // method auto_count
  var curarg = 1;
  if (argcv[0] !=  func4537.paramCounts[0]) // != 0 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method auto_count is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 13
  return var_auto__95__count
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4537.paramCounts = [0];
  func4537.variableArities = [false];
  this.methods["auto_count"] = func4537;
  lineNumber = 1
var func4538 = function(argcv) {    // method auto_count:=(1)
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func4538.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method auto_count:=(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_auto__95__count = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4538.paramCounts = [1];
  func4538.variableArities = [false];
  this.methods["auto_count:="] = func4538;
  lineNumber = 13;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_auto__95__count)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'auto_count' to be of type Dynamic"))
  lineNumber = 14
  var array4539 = new GraceList([
]);

  var var_constants = array4539;
  lineNumber = 1
var func4540 = function(argcv) {    // method constants
  var curarg = 1;
  if (argcv[0] !=  func4540.paramCounts[0]) // != 0 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method constants is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 14
  return var_constants
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4540.paramCounts = [0];
  func4540.variableArities = [false];
  this.methods["constants"] = func4540;
  lineNumber = 1
var func4541 = function(argcv) {    // method constants:=(1)
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func4541.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method constants:=(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_constants = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4541.paramCounts = [1];
  func4541.variableArities = [false];
  this.methods["constants:="] = func4541;
  lineNumber = 14;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_constants)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'constants' to be of type Dynamic"))
  lineNumber = 15
  var array4542 = new GraceList([
]);

  var var_output = array4542;
  lineNumber = 1
var func4543 = function(argcv) {    // method output
  var curarg = 1;
  if (argcv[0] !=  func4543.paramCounts[0]) // != 0 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method output is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 15
  return var_output
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4543.paramCounts = [0];
  func4543.variableArities = [false];
  this.methods["output"] = func4543;
  lineNumber = 1
var func4544 = function(argcv) {    // method output:=(1)
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func4544.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method output:=(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_output = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4544.paramCounts = [1];
  func4544.variableArities = [false];
  this.methods["output:="] = func4544;
  lineNumber = 15;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_output)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'output' to be of type Dynamic"))
  lineNumber = 16
  var array4545 = new GraceList([
]);

  var var_usedvars = array4545;
  lineNumber = 1
var func4546 = function(argcv) {    // method usedvars
  var curarg = 1;
  if (argcv[0] !=  func4546.paramCounts[0]) // != 0 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method usedvars is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 16
  return var_usedvars
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4546.paramCounts = [0];
  func4546.variableArities = [false];
  this.methods["usedvars"] = func4546;
  lineNumber = 1
var func4547 = function(argcv) {    // method usedvars:=(1)
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func4547.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method usedvars:=(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_usedvars = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4547.paramCounts = [1];
  func4547.variableArities = [false];
  this.methods["usedvars:="] = func4547;
  lineNumber = 16;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_usedvars)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'usedvars' to be of type Dynamic"))
  lineNumber = 17
  var array4548 = new GraceList([
]);

  var var_declaredvars = array4548;
  lineNumber = 1
var func4549 = function(argcv) {    // method declaredvars
  var curarg = 1;
  if (argcv[0] !=  func4549.paramCounts[0]) // != 0 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method declaredvars is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 17
  return var_declaredvars
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4549.paramCounts = [0];
  func4549.variableArities = [false];
  this.methods["declaredvars"] = func4549;
  lineNumber = 1
var func4550 = function(argcv) {    // method declaredvars:=(1)
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func4550.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method declaredvars:=(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_declaredvars = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4550.paramCounts = [1];
  func4550.variableArities = [false];
  this.methods["declaredvars:="] = func4550;
  lineNumber = 17;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_declaredvars)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'declaredvars' to be of type Dynamic"))
  lineNumber = 18
  var string4551 = new GraceString("entry");
  var var_bblock = string4551;
  lineNumber = 1
var func4552 = function(argcv) {    // method bblock
  var curarg = 1;
  if (argcv[0] !=  func4552.paramCounts[0]) // != 0 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method bblock is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 18
  return var_bblock
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4552.paramCounts = [0];
  func4552.variableArities = [false];
  this.methods["bblock"] = func4552;
  lineNumber = 1
var func4553 = function(argcv) {    // method bblock:=(1)
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func4553.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method bblock:=(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_bblock = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4553.paramCounts = [1];
  func4553.variableArities = [false];
  this.methods["bblock:="] = func4553;
  lineNumber = 18;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_bblock)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'bblock' to be of type Dynamic"))
  lineNumber = 19
  var var_linenum = new GraceNum(0);
  lineNumber = 1
var func4554 = function(argcv) {    // method linenum
  var curarg = 1;
  if (argcv[0] !=  func4554.paramCounts[0]) // != 0 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method linenum is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 19
  return var_linenum
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4554.paramCounts = [0];
  func4554.variableArities = [false];
  this.methods["linenum"] = func4554;
  lineNumber = 1
var func4555 = function(argcv) {    // method linenum:=(1)
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func4555.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method linenum:=(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_linenum = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4555.paramCounts = [1];
  func4555.variableArities = [false];
  this.methods["linenum:="] = func4555;
  lineNumber = 19;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_linenum)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'linenum' to be of type Dynamic"))
  lineNumber = 20
  var array4556 = new GraceList([
]);

  var var_modules = array4556;
  lineNumber = 1
var func4557 = function(argcv) {    // method modules
  var curarg = 1;
  if (argcv[0] !=  func4557.paramCounts[0]) // != 0 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method modules is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 20
  return var_modules
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4557.paramCounts = [0];
  func4557.variableArities = [false];
  this.methods["modules"] = func4557;
  lineNumber = 1
var func4558 = function(argcv) {    // method modules:=(1)
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func4558.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method modules:=(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_modules = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4558.paramCounts = [1];
  func4558.variableArities = [false];
  this.methods["modules:="] = func4558;
  lineNumber = 20;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_modules)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'modules' to be of type Dynamic"))
  lineNumber = 21
  var array4559 = new GraceList([
]);

  var var_values = array4559;
  lineNumber = 1
var func4560 = function(argcv) {    // method values
  var curarg = 1;
  if (argcv[0] !=  func4560.paramCounts[0]) // != 0 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method values is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 21
  return var_values
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4560.paramCounts = [0];
  func4560.variableArities = [false];
  this.methods["values"] = func4560;
  lineNumber = 1
var func4561 = function(argcv) {    // method values:=(1)
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func4561.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method values:=(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_values = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4561.paramCounts = [1];
  func4561.variableArities = [false];
  this.methods["values:="] = func4561;
  lineNumber = 21;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_values)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'values' to be of type Dynamic"))
  lineNumber = 22
  var var_outfile;
  lineNumber = 1
var func4562 = function(argcv) {    // method outfile
  var curarg = 1;
  if (argcv[0] !=  func4562.paramCounts[0]) // != 0 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method outfile is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 22
  return var_outfile
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4562.paramCounts = [0];
  func4562.variableArities = [false];
  this.methods["outfile"] = func4562;
  lineNumber = 1
var func4563 = function(argcv) {    // method outfile:=(1)
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func4563.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method outfile:=(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_outfile = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4563.paramCounts = [1];
  func4563.variableArities = [false];
  this.methods["outfile:="] = func4563;
  lineNumber = 23
  var string4564 = new GraceString("main");
  var var_modname = string4564;
  lineNumber = 1
var func4565 = function(argcv) {    // method modname
  var curarg = 1;
  if (argcv[0] !=  func4565.paramCounts[0]) // != 0 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method modname is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 23
  return var_modname
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4565.paramCounts = [0];
  func4565.variableArities = [false];
  this.methods["modname"] = func4565;
  lineNumber = 1
var func4566 = function(argcv) {    // method modname:=(1)
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func4566.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method modname:=(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_modname = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4566.paramCounts = [1];
  func4566.variableArities = [false];
  this.methods["modname:="] = func4566;
  lineNumber = 23;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_modname)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'modname' to be of type Dynamic"))
  lineNumber = 24
  var string4567 = new GraceString("build");
  var var_runmode = string4567;
  lineNumber = 1
var func4568 = function(argcv) {    // method runmode
  var curarg = 1;
  if (argcv[0] !=  func4568.paramCounts[0]) // != 0 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method runmode is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 24
  return var_runmode
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4568.paramCounts = [0];
  func4568.variableArities = [false];
  this.methods["runmode"] = func4568;
  lineNumber = 1
var func4569 = function(argcv) {    // method runmode:=(1)
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func4569.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method runmode:=(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_runmode = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4569.paramCounts = [1];
  func4569.variableArities = [false];
  this.methods["runmode:="] = func4569;
  lineNumber = 24;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_runmode)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'runmode' to be of type Dynamic"))
  lineNumber = 25
  var string4570 = new GraceString("bc");
  var var_buildtype = string4570;
  lineNumber = 1
var func4571 = function(argcv) {    // method buildtype
  var curarg = 1;
  if (argcv[0] !=  func4571.paramCounts[0]) // != 0 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method buildtype is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 25
  return var_buildtype
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4571.paramCounts = [0];
  func4571.variableArities = [false];
  this.methods["buildtype"] = func4571;
  lineNumber = 1
var func4572 = function(argcv) {    // method buildtype:=(1)
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func4572.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method buildtype:=(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_buildtype = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4572.paramCounts = [1];
  func4572.variableArities = [false];
  this.methods["buildtype:="] = func4572;
  lineNumber = 25;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_buildtype)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'buildtype' to be of type Dynamic"))
  lineNumber = 26
  var string4573 = new GraceString("gracelib.o");
  var var_gracelibPath = string4573;
  lineNumber = 1
var func4574 = function(argcv) {    // method gracelibPath
  var curarg = 1;
  if (argcv[0] !=  func4574.paramCounts[0]) // != 0 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method gracelibPath is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 26
  return var_gracelibPath
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4574.paramCounts = [0];
  func4574.variableArities = [false];
  this.methods["gracelibPath"] = func4574;
  lineNumber = 1
var func4575 = function(argcv) {    // method gracelibPath:=(1)
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func4575.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method gracelibPath:=(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_gracelibPath = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4575.paramCounts = [1];
  func4575.variableArities = [false];
  this.methods["gracelibPath:="] = func4575;
  lineNumber = 26;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_gracelibPath)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'gracelibPath' to be of type Dynamic"))
  lineNumber = 27
  var bool4576 = new GraceBoolean(false)
  var var_inBlock = bool4576;
  lineNumber = 1
var func4577 = function(argcv) {    // method inBlock
  var curarg = 1;
  if (argcv[0] !=  func4577.paramCounts[0]) // != 0 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method inBlock is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 27
  return var_inBlock
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4577.paramCounts = [0];
  func4577.variableArities = [false];
  this.methods["inBlock"] = func4577;
  lineNumber = 1
var func4578 = function(argcv) {    // method inBlock:=(1)
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func4578.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method inBlock:=(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_inBlock = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4578.paramCounts = [1];
  func4578.variableArities = [false];
  this.methods["inBlock:="] = func4578;
  lineNumber = 27;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_inBlock)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'inBlock' to be of type Dynamic"))
  lineNumber = 28
  var var_compilationDepth = new GraceNum(0);
  lineNumber = 1
var func4579 = function(argcv) {    // method compilationDepth
  var curarg = 1;
  if (argcv[0] !=  func4579.paramCounts[0]) // != 0 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method compilationDepth is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 28
  return var_compilationDepth
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4579.paramCounts = [0];
  func4579.variableArities = [false];
  this.methods["compilationDepth"] = func4579;
  lineNumber = 1
var func4580 = function(argcv) {    // method compilationDepth:=(1)
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func4580.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method compilationDepth:=(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_compilationDepth = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4580.paramCounts = [1];
  func4580.variableArities = [false];
  this.methods["compilationDepth:="] = func4580;
  lineNumber = 28;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_compilationDepth)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'compilationDepth' to be of type Dynamic"))
  lineNumber = 29
  lineNumber = 1
  lineNumber = 29
  lineNumber = 1
  lineNumber = 29
  var call4581 = callmethod(var_mgcollections,"set", [0]);
  var call4582 = callmethod(call4581,"new", [0]);
  var var_staticmodules = call4582;
  lineNumber = 1
var func4583 = function(argcv) {    // method staticmodules
  var curarg = 1;
  if (argcv[0] !=  func4583.paramCounts[0]) // != 0 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method staticmodules is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 29
  return var_staticmodules
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4583.paramCounts = [0];
  func4583.variableArities = [false];
  this.methods["staticmodules"] = func4583;
  lineNumber = 29;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_staticmodules)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'staticmodules' to be of type Dynamic"))
  lineNumber = 30
  lineNumber = 1
  lineNumber = 30
  lineNumber = 1
  lineNumber = 30
  var call4584 = callmethod(var_mgcollections,"map", [0]);
  var call4585 = callmethod(call4584,"new", [0]);
  var var_topLevelTypes = call4585;
  lineNumber = 1
var func4586 = function(argcv) {    // method topLevelTypes
  var curarg = 1;
  if (argcv[0] !=  func4586.paramCounts[0]) // != 0 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method topLevelTypes is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 30
  return var_topLevelTypes
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4586.paramCounts = [0];
  func4586.variableArities = [false];
  this.methods["topLevelTypes"] = func4586;
  lineNumber = 30;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_topLevelTypes)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'topLevelTypes' to be of type Dynamic"))
  lineNumber = 31
  var bool4587 = new GraceBoolean(false)
  var var_dialectHasAtModuleEnd = bool4587;
  lineNumber = 1
var func4588 = function(argcv) {    // method dialectHasAtModuleEnd
  var curarg = 1;
  if (argcv[0] !=  func4588.paramCounts[0]) // != 0 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method dialectHasAtModuleEnd is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  lineNumber = 31
  return var_dialectHasAtModuleEnd
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4588.paramCounts = [0];
  func4588.variableArities = [false];
  this.methods["dialectHasAtModuleEnd"] = func4588;
  lineNumber = 1
var func4589 = function(argcv) {    // method dialectHasAtModuleEnd:=(1)
  var curarg = 1;
  var var___95__var__95__assign__95__tmp = arguments[curarg];
  curarg++;
  if (argcv[0] !=  func4589.paramCounts[0]) // != 1 
      callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method dialectHasAtModuleEnd:=(1) is of wrong size"));
  var returnTarget = invocationCount;
  invocationCount++;
  try {
  var_dialectHasAtModuleEnd = var___95__var__95__assign__95__tmp;
  return var___95__var__95__assign__95__tmp
  } catch(e) {
    if ((e.exctype == 'return') && (e.target == returnTarget)) {
      return e.returnvalue;
    } else {
      throw e;
    }
  }
}
  func4589.paramCounts = [1];
  func4589.variableArities = [false];
  this.methods["dialectHasAtModuleEnd:="] = func4589;
  lineNumber = 31;
  if (!Grace_isTrue(callmethod(var_Dynamic, "match",
    [1], var_dialectHasAtModuleEnd)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'dialectHasAtModuleEnd' to be of type Dynamic"))
  return this;
}
