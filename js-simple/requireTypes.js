"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_requireTypes() {
  setModuleName("requireTypes");
  this.definitionModule = "requireTypes";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_requireTypes_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_requireTypes_outer0;
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
    setModuleName("requireTypes");
    // ast is a simple accessor - elide try ... catch
    return var_ast;
  };
  func1.paramCounts = [0];
  this.methods["ast"] = func1;
  func1.definitionLine = 1;
  func1.definitionModule = "requireTypes";
  func1.debug = "import";
  func1.confidential = true;
  setModuleName("requireTypes");
  setLineNumber(2);    // compilenode identifier
  var call2 = callmethodChecked(var_prelude, "methods()object", [0, 1], this);
  this.superobj = call2;
  if (call2.data) this.data = call2.data;
  if (call2.hasOwnProperty('_value'))
      this._value = call2._value;
  setLineNumber(44);    // compilenode method
  var func3 = function(argcv) {    // method checker(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_values = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for checker(1)"));
    setModuleName("requireTypes");
    setLineNumber(45);    // compilenode block
    var block4 = new GraceBlock(this, 45, 1);
    setLineNumber(1);    // compilenode identifier
    block4.real = function(var_v) {
      setLineNumber(46);    // compilenode identifier
      var call5 = callmethodChecked(var_v, "accept", [1], var_staticVisitor);
      return call5;
    };
    var call6 = callmethodChecked(var_prelude, "for()do", [1, 1], var_values, block4);
    return call6;
  };
  func3.paramCounts = [1];
  this.methods["checker"] = func3;
  func3.definitionLine = 44;
  func3.definitionModule = "requireTypes";
  setLineNumber(4);    // compilenode string
  var string7 = new GraceString("CheckerFailure");
  var call8 = callmethodChecked(var_prelude, "Exception", [0]);
  var call9 = callmethodChecked(call8, "refine", [1], string7);
  var var_CheckerFailure = call9;
  var func10 = function(argcv) {    // method CheckerFailure
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for CheckerFailure"));
    setModuleName("requireTypes");
    // CheckerFailure is a simple accessor - elide try ... catch
    return var_CheckerFailure;
  };
  func10.paramCounts = [0];
  this.methods["CheckerFailure"] = func10;
  func10.definitionLine = 4;
  func10.definitionModule = "requireTypes";
  this.methods["CheckerFailure"].debug = "def";
  setLineNumber(5);    // compilenode object
  var obj11 = Grace_allocObject(null, "staticVisitor");
  obj11.definitionModule = "requireTypes";
  obj11.definitionLine = 5;
  obj11.outer = this;
  var reader_requireTypes_outer12 = function() {
    return this.outer;
  };
  obj11.methods["outer"] = reader_requireTypes_outer12;
  var obj_init_11 = function() {
    var origSuperDepth = superDepth;
    superDepth = obj11;
    var func13 = function(argcv) {    // method asString
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
      setModuleName("requireTypes");
      setLineNumber(8);    // compilenode string
      var string14 = new GraceString("the requireTypes visitor");
      return string14;
    };
    func13.paramCounts = [0];
    obj11.methods["asString"] = func13;
    func13.definitionLine = 7;
    func13.definitionModule = "requireTypes";
    var func15 = function(argcv) {    // method visitDefDec(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_v = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitDefDec(1)"));
      setModuleName("requireTypes");
      var if16 = GraceDone;
      setLineNumber(12);    // compilenode identifier
      var call17 = callmethodChecked(var_v, "dtype", [0]);
      var opresult20 = callmethodChecked(GraceFalse, "==", [1], call17);
      if (Grace_isTrue(opresult20)) {
        setLineNumber(14);    // compilenode string
        var string21 = new GraceString("'");
        var call23 = callmethodChecked(var_v, "name", [0]);
        var call24 = callmethodChecked(call23, "value", [0]);
        var string26 = new GraceString(" of def '");
        var opresult28 = callmethodChecked(string26, "++", [1], call24);
        var opresult30 = callmethodChecked(opresult28, "++", [1], string21);
        setLineNumber(13);    // compilenode string
        var string32 = new GraceString("no type given to declaration");
        var opresult34 = callmethodChecked(string32, "++", [1], opresult30);
        setLineNumber(14);    // compilenode identifier
        var call35 = callmethodChecked(var_v, "name", [0]);
        setLineNumber(13);    // compilenode identifier
        var call36 = callmethodChecked(var_CheckerFailure, "raise()with", [1, 1], opresult34, call35);
        if16 = call36;
      }
      return if16;
    };
    func15.paramCounts = [1];
    obj11.methods["visitDefDec"] = func15;
    func15.definitionLine = 11;
    func15.definitionModule = "requireTypes";
    var func37 = function(argcv) {    // method visitVarDec(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_v = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitVarDec(1)"));
      setModuleName("requireTypes");
      var if38 = GraceDone;
      setLineNumber(18);    // compilenode identifier
      var call39 = callmethodChecked(var_v, "dtype", [0]);
      var opresult42 = callmethodChecked(GraceFalse, "==", [1], call39);
      if (Grace_isTrue(opresult42)) {
        setLineNumber(20);    // compilenode string
        var string43 = new GraceString("'");
        var call45 = callmethodChecked(var_v, "name", [0]);
        var call46 = callmethodChecked(call45, "value", [0]);
        var string48 = new GraceString(" of var '");
        var opresult50 = callmethodChecked(string48, "++", [1], call46);
        var opresult52 = callmethodChecked(opresult50, "++", [1], string43);
        setLineNumber(19);    // compilenode string
        var string54 = new GraceString("no type given to declaration");
        var opresult56 = callmethodChecked(string54, "++", [1], opresult52);
        setLineNumber(20);    // compilenode identifier
        var call57 = callmethodChecked(var_v, "name", [0]);
        setLineNumber(19);    // compilenode identifier
        var call58 = callmethodChecked(var_CheckerFailure, "raise()with", [1, 1], opresult56, call57);
        if38 = call58;
      }
      return if38;
    };
    func37.paramCounts = [1];
    obj11.methods["visitVarDec"] = func37;
    func37.definitionLine = 17;
    func37.definitionModule = "requireTypes";
    var func59 = function(argcv) {    // method visitMethod(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_v = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitMethod(1)"));
      setModuleName("requireTypes");
      setLineNumber(24);    // compilenode identifier
      var call60 = callmethodChecked(var_v, "signature", [0]);
      var block61 = new GraceBlock(this, 24, 1);
      setLineNumber(1);    // compilenode identifier
      block61.real = function(var_p) {
        var if62 = GraceDone;
        setLineNumber(25);    // compilenode block
        var block63 = new GraceBlock(this, 25, 0);
        block63.real = function() {
          var call64 = callmethodChecked(var_p, "dtype", [0]);
          var opresult67 = callmethodChecked(GraceFalse, "==", [1], call64);
          var call69 = callmethodChecked(var_p, "wildcard", [0]);
          var call70 = callmethodChecked(call69, "not", [0]);
          var opresult72 = callmethodChecked(call70, "&&", [1], opresult67);
          return opresult72;
        };
        var call74 = callmethodChecked(var_p, "isIdentifier", [0]);
        var opresult76 = callmethodChecked(call74, "&&", [1], block63);
        if (Grace_isTrue(opresult76)) {
          setLineNumber(27);    // compilenode string
          var string77 = new GraceString("'");
          var call79 = callmethodChecked(var_p, "value", [0]);
          var string81 = new GraceString(" of parameter '");
          var opresult83 = callmethodChecked(string81, "++", [1], call79);
          var opresult85 = callmethodChecked(opresult83, "++", [1], string77);
          setLineNumber(26);    // compilenode string
          var string87 = new GraceString("no type given to declaration");
          var opresult89 = callmethodChecked(string87, "++", [1], opresult85);
          var call90 = callmethodChecked(var_CheckerFailure, "raise()with", [1, 1], opresult89, var_p);
          if62 = call90;
        }
        return if62;
      };
      var call91 = callmethodChecked(var_prelude, "for()do", [1, 1], call60, block61);
      var if92 = GraceDone;
      setLineNumber(30);    // compilenode identifier
      var call93 = callmethodChecked(var_v, "dtype", [0]);
      var opresult96 = callmethodChecked(GraceFalse, "==", [1], call93);
      if (Grace_isTrue(opresult96)) {
        setLineNumber(32);    // compilenode string
        var string97 = new GraceString("'");
        var call99 = callmethodChecked(var_v, "value", [0]);
        var call100 = callmethodChecked(call99, "value", [0]);
        var string102 = new GraceString(" of method '");
        var opresult104 = callmethodChecked(string102, "++", [1], call100);
        var opresult106 = callmethodChecked(opresult104, "++", [1], string97);
        setLineNumber(31);    // compilenode string
        var string108 = new GraceString("no return type given to declaration");
        var opresult110 = callmethodChecked(string108, "++", [1], opresult106);
        setLineNumber(32);    // compilenode identifier
        var call111 = callmethodChecked(var_v, "value", [0]);
        setLineNumber(31);    // compilenode identifier
        var call112 = callmethodChecked(var_CheckerFailure, "raise()with", [1, 1], opresult110, call111);
        if92 = call112;
      }
      return if92;
    };
    func59.paramCounts = [1];
    obj11.methods["visitMethod"] = func59;
    func59.definitionLine = 23;
    func59.definitionModule = "requireTypes";
    var func113 = function(argcv) {    // method visitBlock(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_v = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitBlock(1)"));
      setModuleName("requireTypes");
      setLineNumber(36);    // compilenode identifier
      var call114 = callmethodChecked(var_v, "params", [0]);
      var block115 = new GraceBlock(this, 36, 1);
      setLineNumber(1);    // compilenode identifier
      block115.real = function(var_p) {
        var if116 = GraceDone;
        setLineNumber(37);    // compilenode block
        var block117 = new GraceBlock(this, 37, 0);
        block117.real = function() {
          var call118 = callmethodChecked(var_p, "dtype", [0]);
          var opresult121 = callmethodChecked(GraceFalse, "==", [1], call118);
          var call123 = callmethodChecked(var_p, "wildcard", [0]);
          var call124 = callmethodChecked(call123, "not", [0]);
          var opresult126 = callmethodChecked(call124, "&&", [1], opresult121);
          return opresult126;
        };
        var call128 = callmethodChecked(var_p, "isIdentifier", [0]);
        var opresult130 = callmethodChecked(call128, "&&", [1], block117);
        if (Grace_isTrue(opresult130)) {
          setLineNumber(39);    // compilenode string
          var string131 = new GraceString("'");
          var call133 = callmethodChecked(var_p, "value", [0]);
          var string135 = new GraceString(" of block parameter '");
          var opresult137 = callmethodChecked(string135, "++", [1], call133);
          var opresult139 = callmethodChecked(opresult137, "++", [1], string131);
          setLineNumber(38);    // compilenode string
          var string141 = new GraceString("no type given to declaration");
          var opresult143 = callmethodChecked(string141, "++", [1], opresult139);
          var call144 = callmethodChecked(var_CheckerFailure, "raise()with", [1, 1], opresult143, var_p);
          if116 = call144;
        }
        return if116;
      };
      var call145 = callmethodChecked(var_prelude, "for()do", [1, 1], call114, block115);
      return call145;
    };
    func113.paramCounts = [1];
    obj11.methods["visitBlock"] = func113;
    func113.definitionLine = 35;
    func113.definitionModule = "requireTypes";
    setLineNumber(6);    // compilenode identifier
    var call146 = callmethodChecked(var_ast, "baseVisitor()object", [0, 1], this);
    obj11.superobj = call146;
    if (call146.data) obj11.data = call146.data;
    if (call146.hasOwnProperty('_value'))
        obj11._value = call146._value;
    superDepth = origSuperDepth;
  };
  obj_init_11.apply(obj11, []);
  var var_staticVisitor = obj11;
  setLineNumber(39);    // compilenode method
  var func147 = function(argcv) {    // method staticVisitor
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for staticVisitor"));
    setModuleName("requireTypes");
    // staticVisitor is a simple accessor - elide try ... catch
    setLineNumber(5);    // compilenode identifier
    return var_staticVisitor;
  };
  func147.paramCounts = [0];
  this.methods["staticVisitor"] = func147;
  func147.definitionLine = 39;
  func147.definitionModule = "requireTypes";
  this.methods["staticVisitor"].debug = "def";
  return this;
}
gracecode_requireTypes.imports = ['ast'];
if (typeof gctCache !== "undefined")
  gctCache['requireTypes'] = "classes:\nconfidential:\nfresh-methods:\nmodules:\n ast\n identifierKinds\n io\n stringMap\n sys\n unixFilePath\n util\npath:\n requireTypes\npublic:\n AndPattern\n BaseType\n BasicPattern\n Binding\n BindingPattern\n Block0\n Block1\n Block2\n Block3\n BoundsError\n Cmd\n Collection\n ConcurrentModification\n Dictionary\n Enumerable\n ExceptionKind\n Expandable\n Extractable\n FailedMatch\n Fun\n Fun2\n Fun3\n Iterable\n Iterator\n IteratorExhausted\n List\n MatchAndDestructuringPattern\n MatchResult\n NoSuchObject\n OrPattern\n Pattern\n Point\n Proc\n Proc2\n Proc3\n RequestError\n Sequence\n Set\n Singleton\n SubobjectResponsibility\n SuccessfulMatch\n TypeIntersection\n TypeSubtraction\n TypeUnion\n TypeVariant\n UninitializedVariable\n VariablePattern\n WildcardPattern\n abstract\n alwaysEqual\n binding\n checker\n collection\n collections\n dictionary\n do()while\n emptyDictionary\n emptyList\n emptySequence\n emptySet\n enumerable\n for()and()do\n indexable\n list\n max\n methods\n min\n point2Dx()y\n range\n repeat()times\n required\n sequence\n set\n valueOf\ntypes:\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["requireTypes"] = [
    "import \"ast\" as ast",
    "inherits prelude.methods",
    "",
    "def CheckerFailure = Exception.refine \"CheckerFailure\"",
    "def staticVisitor = object {",
    "    inherits ast.baseVisitor",
    "    method asString {",
    "        \"the requireTypes visitor\"",
    "    }",
    "",
    "    method visitDefDec(v) is public {",
    "        if (false == v.dtype) then {",
    "            CheckerFailure.raise (\"no type given to declaration\"",
    "                ++ \" of def '{v.name.value}'\") with (v.name)",
    "        }",
    "    }",
    "    method visitVarDec(v) is public {",
    "        if (false == v.dtype) then {",
    "            CheckerFailure.raise (\"no type given to declaration\"",
    "                ++ \" of var '{v.name.value}'\") with (v.name)",
    "        }",
    "    }",
    "    method visitMethod(v) is public {",
    "        for (v.signature) do {p ->",
    "            if (p.isIdentifier && {p.wildcard.not && (false == p.dtype)}) then {",
    "                CheckerFailure.raise (\"no type given to declaration\"",
    "                    ++ \" of parameter '{p.value}'\") with (p)",
    "            }",
    "        }",
    "        if (false == v.dtype) then {",
    "            CheckerFailure.raise (\"no return type given to declaration\"",
    "                ++ \" of method '{v.value.value}'\") with (v.value)",
    "        }",
    "    }",
    "    method visitBlock(v) is public {",
    "        for (v.params) do {p ->",
    "            if (p.isIdentifier && {p.wildcard.not && (false == p.dtype)}) then {",
    "                CheckerFailure.raise (\"no type given to declaration\"",
    "                    ++ \" of block parameter '{p.value}'\") with (p)",
    "            }",
    "        }",
    "    }",
    "}",
    "method checker(values) is public {",
    "    for (values) do {v->",
    "        v.accept(staticVisitor)",
    "    }",
    "}" ];
}
if (typeof global !== "undefined")
  global.gracecode_requireTypes = gracecode_requireTypes;
if (typeof window !== "undefined")
  window.gracecode_requireTypes = gracecode_requireTypes;
