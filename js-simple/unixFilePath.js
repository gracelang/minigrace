"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_unixFilePath() {
  setModuleName("unixFilePath");
  this.definitionModule = "unixFilePath";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_unixFilePath_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_unixFilePath_outer0;
  setLineNumber(1);    // compilenode import
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
    setModuleName("unixFilePath");
    // io is a simple accessor - elide try ... catch
    return var_io;
  };
  func1.paramCounts = [0];
  this.methods["io"] = func1;
  func1.definitionLine = 1;
  func1.definitionModule = "unixFilePath";
  func1.debug = "import";
  func1.confidential = true;
  setModuleName("unixFilePath");
  setLineNumber(3);    // compilenode method
  var func2 = function(argcv) {    // method null
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for null"));
    setModuleName("unixFilePath");
    var obj3 = Grace_allocObject(GraceObject, "unixFilePath.null");
    obj3.definitionModule = "unixFilePath";
    obj3.definitionLine = 3;
    obj3.outer = this;
    var reader_unixFilePath_outer4 = function() {
      return this.outer;
    };
    obj3.methods["outer"] = reader_unixFilePath_outer4;
    var obj_init_3 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj3;
      var func5 = function(argcv) {    // method asString
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
        setModuleName("unixFilePath");
        setLineNumber(15);    // compilenode call
        onSelf = true;
        var call6 = callmethodChecked(this, "extension", [0]);
        onSelf = true;
        var call8 = callmethodChecked(this, "base", [0]);
        onSelf = true;
        var call10 = callmethodChecked(this, "dir", [0]);
        var opresult12 = callmethodChecked(call10, "++", [1], call8);
        var opresult14 = callmethodChecked(opresult12, "++", [1], call6);
        return opresult14;
      };
      func5.paramCounts = [0];
      obj3.methods["asString"] = func5;
      func5.definitionLine = 15;
      func5.definitionModule = "unixFilePath";
      var func15 = function(argcv) {    // method shortName
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for shortName"));
        setModuleName("unixFilePath");
        setLineNumber(18);    // compilenode call
        onSelf = true;
        var call16 = callmethodChecked(this, "extension", [0]);
        onSelf = true;
        var call18 = callmethodChecked(this, "base", [0]);
        var opresult20 = callmethodChecked(call18, "++", [1], call16);
        return opresult20;
      };
      func15.paramCounts = [0];
      obj3.methods["shortName"] = func15;
      func15.definitionLine = 18;
      func15.definitionModule = "unixFilePath";
      var func21 = function(argcv) {    // method asDebugString
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asDebugString"));
        setModuleName("unixFilePath");
        setLineNumber(21);    // compilenode string
        var string22 = new GraceString("]");
        onSelf = true;
        var call24 = callmethodChecked(this, "extension", [0]);
        var string26 = new GraceString("|");
        onSelf = true;
        var call28 = callmethodChecked(this, "base", [0]);
        var string30 = new GraceString("|");
        onSelf = true;
        var call32 = callmethodChecked(this, "dir", [0]);
        var string34 = new GraceString("unixFilePath[");
        var opresult36 = callmethodChecked(string34, "++", [1], call32);
        var opresult38 = callmethodChecked(opresult36, "++", [1], string30);
        var opresult40 = callmethodChecked(opresult38, "++", [1], call28);
        var opresult42 = callmethodChecked(opresult40, "++", [1], string26);
        var opresult44 = callmethodChecked(opresult42, "++", [1], call24);
        var opresult46 = callmethodChecked(opresult44, "++", [1], string22);
        return opresult46;
      };
      func21.paramCounts = [0];
      obj3.methods["asDebugString"] = func21;
      func21.definitionLine = 21;
      func21.definitionModule = "unixFilePath";
      var func47 = function(argcv) {    // method directory
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for directory"));
        setModuleName("unixFilePath");
        var if48 = GraceDone;
        setLineNumber(26);    // compilenode string
        var string49 = new GraceString("");
        onSelf = true;
        var call51 = callmethodChecked(this, "dir", [0]);
        var opresult53 = callmethodChecked(call51, "==", [1], string49);
        if (Grace_isTrue(opresult53)) {
          var string54 = new GraceString("./");
          if48 = string54;
        } else {
          onSelf = true;
          var call55 = callmethodChecked(this, "dir", [0]);
          if48 = call55;
        }
        return if48;
      };
      func47.paramCounts = [0];
      obj3.methods["directory"] = func47;
      func47.definitionLine = 24;
      func47.definitionModule = "unixFilePath";
      var func56 = function(argcv) {    // method directory:=(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_d = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for directory:=(1)"));
        setModuleName("unixFilePath");
        setLineNumber(31);    // compilenode identifier
        var var_newDir = var_d;
        var if57 = GraceDone;
        setLineNumber(32);    // compilenode string
        var string58 = new GraceString("");
        var opresult61 = callmethodChecked(var_newDir, "==", [1], string58);
        if (Grace_isTrue(opresult61)) {
          setLineNumber(33);    // compilenode string
          var string62 = new GraceString("");
          onSelf = true;
          var call63 = callmethodChecked(this, "dir:=", [1], string62);
          setLineNumber(35);    // compilenode identifier
          return var_done;
        }
        var if64 = GraceDone;
        setLineNumber(36);    // compilenode string
        var string65 = new GraceString("/");
        var call67 = callmethodChecked(var_newDir, "size", [0]);
        var call68 = callmethodChecked(var_newDir, "at", [1], call67);
        var opresult70 = callmethodChecked(call68, "\u2260", [1], string65);
        if (Grace_isTrue(opresult70)) {
          setLineNumber(37);    // compilenode string
          var string71 = new GraceString("/");
          var opresult74 = callmethodChecked(var_newDir, "++", [1], string71);
          var_newDir = opresult74;
          if64 = GraceDone;
        }
        var if75 = GraceDone;
        setLineNumber(39);    // compilenode string
        var string76 = new GraceString("./");
        var opresult79 = callmethodChecked(var_newDir, "==", [1], string76);
        if (Grace_isTrue(opresult79)) {
          var string80 = new GraceString("");
          var_newDir = string80;
          if75 = GraceDone;
        }
        setLineNumber(40);    // compilenode identifier
        onSelf = true;
        var call81 = callmethodChecked(this, "dir:=", [1], var_newDir);
        return call81;
      };
      func56.paramCounts = [1];
      obj3.methods["directory:="] = func56;
      func56.definitionLine = 29;
      func56.definitionModule = "unixFilePath";
      var func82 = function(argcv) {    // method setDirectory(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_d = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for setDirectory(1)"));
        setModuleName("unixFilePath");
        setLineNumber(44);    // compilenode identifier
        onSelf = true;
        var call83 = callmethodChecked(this, "directory:=", [1], var_d);
        setLineNumber(45);    // compilenode identifier
        return this;
      };
      func82.paramCounts = [1];
      obj3.methods["setDirectory"] = func82;
      func82.definitionLine = 42;
      func82.definitionModule = "unixFilePath";
      var func84 = function(argcv) {    // method setBase(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_b = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for setBase(1)"));
        setModuleName("unixFilePath");
        setLineNumber(49);    // compilenode identifier
        onSelf = true;
        var call85 = callmethodChecked(this, "base:=", [1], var_b);
        setLineNumber(50);    // compilenode identifier
        return this;
      };
      func84.paramCounts = [1];
      obj3.methods["setBase"] = func84;
      func84.definitionLine = 47;
      func84.definitionModule = "unixFilePath";
      var func86 = function(argcv) {    // method setExtension(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_e = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for setExtension(1)"));
        setModuleName("unixFilePath");
        var if87 = GraceDone;
        setLineNumber(54);    // compilenode string
        var string88 = new GraceString(".");
        var call90 = callmethodChecked(var_e, "first", [0]);
        var opresult92 = callmethodChecked(call90, "==", [1], string88);
        if (Grace_isTrue(opresult92)) {
          setLineNumber(55);    // compilenode identifier
          onSelf = true;
          var call93 = callmethodChecked(this, "extension:=", [1], var_e);
          if87 = call93;
        } else {
          setLineNumber(57);    // compilenode string
          var string95 = new GraceString(".");
          var opresult97 = callmethodChecked(string95, "++", [1], var_e);
          onSelf = true;
          var call98 = callmethodChecked(this, "extension:=", [1], opresult97);
          if87 = call98;
        }
        setLineNumber(59);    // compilenode identifier
        return this;
      };
      func86.paramCounts = [1];
      obj3.methods["setExtension"] = func86;
      func86.definitionLine = 52;
      func86.definitionModule = "unixFilePath";
      var func99 = function(argcv) {    // method exists
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for exists"));
        setModuleName("unixFilePath");
        setLineNumber(63);    // compilenode call
        onSelf = true;
        var call100 = callmethodChecked(this, "asString", [0]);
        var call101 = callmethodChecked(var_io, "exists", [1], call100);
        if (!Grace_isTrue(callmethod(var_Boolean, "match", [1], call101)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method exists does not have " + 
                    callmethod(var_Boolean, "asString", [0])._value + "."));
        return call101;
      };
      func99.paramCounts = [0];
      obj3.methods["exists"] = func99;
      func99.definitionLine = 61;
      func99.definitionModule = "unixFilePath";
      var func102 = function(argcv) {    // method newer(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_other = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for newer(1)"));
        setModuleName("unixFilePath");
        setLineNumber(67);    // compilenode call
        onSelf = true;
        var call103 = callmethodChecked(this, "asString", [0]);
        var call104 = callmethodChecked(var_other, "asString", [0]);
        var call105 = callmethodChecked(var_io, "newer", [2], call103, call104);
        if (!Grace_isTrue(callmethod(var_Boolean, "match", [1], call105)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method newer(1) does not have " + 
                    callmethod(var_Boolean, "asString", [0])._value + "."));
        return call105;
      };
      func102.paramCounts = [1];
      obj3.methods["newer"] = func102;
      func102.definitionLine = 65;
      func102.definitionModule = "unixFilePath";
      var func106 = function(argcv) {    // method copy
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for copy"));
        setModuleName("unixFilePath");
        setLineNumber(72);    // compilenode call
        var call107 = callmethodChecked(superDepth, "outer", [0]);
        onOuter = true;
        onSelf = true;
        var call108 = callmethodChecked(call107, "null", [0]);
        var var_p = call108;
        setLineNumber(73);    // compilenode call
        onSelf = true;
        var call109 = callmethodChecked(this, "directory", [0]);
        var call110 = callmethodChecked(var_p, "directory:=", [1], call109);
        setLineNumber(74);    // compilenode call
        onSelf = true;
        var call111 = callmethodChecked(this, "base", [0]);
        var call112 = callmethodChecked(var_p, "base:=", [1], call111);
        setLineNumber(75);    // compilenode call
        onSelf = true;
        var call113 = callmethodChecked(this, "extension", [0]);
        var call114 = callmethodChecked(var_p, "extension:=", [1], call113);
        setLineNumber(76);    // compilenode identifier
        return var_p;
      };
      func106.paramCounts = [0];
      obj3.methods["copy"] = func106;
      func106.definitionLine = 70;
      func106.definitionModule = "unixFilePath";
      var func115 = function(argcv) {    // method ==(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_other = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ==(1)"));
        setModuleName("unixFilePath");
        var if116 = GraceDone;
        setLineNumber(81);    // compilenode identifier
        var call117 = callmethodChecked(var_other, "directory", [0]);
        onSelf = true;
        var call119 = callmethodChecked(this, "directory", [0]);
        var opresult121 = callmethodChecked(call119, "\u2260", [1], call117);
        if (Grace_isTrue(opresult121)) {
          return GraceFalse;
        }
        var if122 = GraceDone;
        setLineNumber(82);    // compilenode identifier
        var call123 = callmethodChecked(var_other, "base", [0]);
        onSelf = true;
        var call125 = callmethodChecked(this, "base", [0]);
        var opresult127 = callmethodChecked(call125, "\u2260", [1], call123);
        if (Grace_isTrue(opresult127)) {
          return GraceFalse;
        }
        var if128 = GraceDone;
        setLineNumber(83);    // compilenode identifier
        var call129 = callmethodChecked(var_other, "extension", [0]);
        onSelf = true;
        var call131 = callmethodChecked(this, "extension", [0]);
        var opresult133 = callmethodChecked(call131, "\u2260", [1], call129);
        if (Grace_isTrue(opresult133)) {
          return GraceFalse;
        }
        setLineNumber(84);    // compilenode identifier
        return GraceTrue;
      };
      func115.paramCounts = [1];
      obj3.methods["=="] = func115;
      func115.definitionLine = 79;
      func115.definitionModule = "unixFilePath";
      setLineNumber(6);    // compilenode string
      var string134 = new GraceString("");
      obj3.data["dir"] = string134;
      var reader_unixFilePath_dir135 = function() {
        return this.data["dir"];
      };
      obj3.methods["dir"] = reader_unixFilePath_dir135;
      obj3.data["dir"] = string134;
      var writer_unixFilePath_dir135 = function(argcv, o) {
        this.data["dir"] = o;
        return GraceDone;
      };
      obj3.methods["dir:="] = writer_unixFilePath_dir135;
      reader_unixFilePath_dir135.confidential = true;
      writer_unixFilePath_dir135.confidential = true;
      obj3.mutable = true;
      setLineNumber(9);    // compilenode string
      var string136 = new GraceString("");
      obj3.data["base"] = string136;
      var reader_unixFilePath_base137 = function() {
        return this.data["base"];
      };
      obj3.methods["base"] = reader_unixFilePath_base137;
      obj3.data["base"] = string136;
      var writer_unixFilePath_base137 = function(argcv, o) {
        this.data["base"] = o;
        return GraceDone;
      };
      obj3.methods["base:="] = writer_unixFilePath_base137;
      obj3.mutable = true;
      setLineNumber(12);    // compilenode string
      var string138 = new GraceString("");
      obj3.data["extension"] = string138;
      var reader_unixFilePath_extension139 = function() {
        return this.data["extension"];
      };
      obj3.methods["extension"] = reader_unixFilePath_extension139;
      obj3.data["extension"] = string138;
      var writer_unixFilePath_extension139 = function(argcv, o) {
        this.data["extension"] = o;
        return GraceDone;
      };
      obj3.methods["extension:="] = writer_unixFilePath_extension139;
      obj3.mutable = true;
      superDepth = origSuperDepth;
    };
    obj_init_3.apply(obj3, []);
    return obj3;
  };
  func2.paramCounts = [0];
  this.methods["null"] = func2;
  func2.definitionLine = 3;
  func2.definitionModule = "unixFilePath";
    var func140 = function(argcv) {    // method null()object
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      // Start argument processing
      curarg = 1;
      // End argument processing
      setModuleName("unixFilePath");
      var returnTarget = invocationCount;
      invocationCount++;
      var obj141 = Grace_allocObject(GraceObject, "null");
      obj141.definitionModule = "unixFilePath";
      obj141.definitionLine = 3;
      var inho141 = inheritingObject;
      while (inho141.superobj) inho141 = inho141.superobj;
      inho141.superobj = obj141;
      obj141.data = inheritingObject.data;
      if (inheritingObject.hasOwnProperty('_value'))
        obj141._value = inheritingObject._value;
      obj141.outer = this;
      var reader_unixFilePath_outer142 = function() {
        return this.outer;
      };
      obj141.methods["outer"] = reader_unixFilePath_outer142;
      var obj_init_141 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj141;
        var func143 = function(argcv) {    // method asString
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
          setModuleName("unixFilePath");
          setLineNumber(15);    // compilenode call
          onSelf = true;
          var call144 = callmethodChecked(this, "extension", [0]);
          onSelf = true;
          var call146 = callmethodChecked(this, "base", [0]);
          onSelf = true;
          var call148 = callmethodChecked(this, "dir", [0]);
          var opresult150 = callmethodChecked(call148, "++", [1], call146);
          var opresult152 = callmethodChecked(opresult150, "++", [1], call144);
          return opresult152;
        };
        func143.paramCounts = [0];
        obj141.methods["asString"] = func143;
        func143.definitionLine = 15;
        func143.definitionModule = "unixFilePath";
        var func153 = function(argcv) {    // method shortName
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for shortName"));
          setModuleName("unixFilePath");
          setLineNumber(18);    // compilenode call
          onSelf = true;
          var call154 = callmethodChecked(this, "extension", [0]);
          onSelf = true;
          var call156 = callmethodChecked(this, "base", [0]);
          var opresult158 = callmethodChecked(call156, "++", [1], call154);
          return opresult158;
        };
        func153.paramCounts = [0];
        obj141.methods["shortName"] = func153;
        func153.definitionLine = 18;
        func153.definitionModule = "unixFilePath";
        var func159 = function(argcv) {    // method asDebugString
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asDebugString"));
          setModuleName("unixFilePath");
          setLineNumber(21);    // compilenode string
          var string160 = new GraceString("]");
          onSelf = true;
          var call162 = callmethodChecked(this, "extension", [0]);
          var string164 = new GraceString("|");
          onSelf = true;
          var call166 = callmethodChecked(this, "base", [0]);
          var string168 = new GraceString("|");
          onSelf = true;
          var call170 = callmethodChecked(this, "dir", [0]);
          var string172 = new GraceString("unixFilePath[");
          var opresult174 = callmethodChecked(string172, "++", [1], call170);
          var opresult176 = callmethodChecked(opresult174, "++", [1], string168);
          var opresult178 = callmethodChecked(opresult176, "++", [1], call166);
          var opresult180 = callmethodChecked(opresult178, "++", [1], string164);
          var opresult182 = callmethodChecked(opresult180, "++", [1], call162);
          var opresult184 = callmethodChecked(opresult182, "++", [1], string160);
          return opresult184;
        };
        func159.paramCounts = [0];
        obj141.methods["asDebugString"] = func159;
        func159.definitionLine = 21;
        func159.definitionModule = "unixFilePath";
        var func185 = function(argcv) {    // method directory
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for directory"));
          setModuleName("unixFilePath");
          var if186 = GraceDone;
          setLineNumber(26);    // compilenode string
          var string187 = new GraceString("");
          onSelf = true;
          var call189 = callmethodChecked(this, "dir", [0]);
          var opresult191 = callmethodChecked(call189, "==", [1], string187);
          if (Grace_isTrue(opresult191)) {
            var string192 = new GraceString("./");
            if186 = string192;
          } else {
            onSelf = true;
            var call193 = callmethodChecked(this, "dir", [0]);
            if186 = call193;
          }
          return if186;
        };
        func185.paramCounts = [0];
        obj141.methods["directory"] = func185;
        func185.definitionLine = 24;
        func185.definitionModule = "unixFilePath";
        var func194 = function(argcv) {    // method directory:=(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_d = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for directory:=(1)"));
          setModuleName("unixFilePath");
          setLineNumber(31);    // compilenode identifier
          var var_newDir = var_d;
          var if195 = GraceDone;
          setLineNumber(32);    // compilenode string
          var string196 = new GraceString("");
          var opresult199 = callmethodChecked(var_newDir, "==", [1], string196);
          if (Grace_isTrue(opresult199)) {
            setLineNumber(33);    // compilenode string
            var string200 = new GraceString("");
            onSelf = true;
            var call201 = callmethodChecked(this, "dir:=", [1], string200);
            setLineNumber(35);    // compilenode identifier
            return var_done;
          }
          var if202 = GraceDone;
          setLineNumber(36);    // compilenode string
          var string203 = new GraceString("/");
          var call205 = callmethodChecked(var_newDir, "size", [0]);
          var call206 = callmethodChecked(var_newDir, "at", [1], call205);
          var opresult208 = callmethodChecked(call206, "\u2260", [1], string203);
          if (Grace_isTrue(opresult208)) {
            setLineNumber(37);    // compilenode string
            var string209 = new GraceString("/");
            var opresult212 = callmethodChecked(var_newDir, "++", [1], string209);
            var_newDir = opresult212;
            if202 = GraceDone;
          }
          var if213 = GraceDone;
          setLineNumber(39);    // compilenode string
          var string214 = new GraceString("./");
          var opresult217 = callmethodChecked(var_newDir, "==", [1], string214);
          if (Grace_isTrue(opresult217)) {
            var string218 = new GraceString("");
            var_newDir = string218;
            if213 = GraceDone;
          }
          setLineNumber(40);    // compilenode identifier
          onSelf = true;
          var call219 = callmethodChecked(this, "dir:=", [1], var_newDir);
          return call219;
        };
        func194.paramCounts = [1];
        obj141.methods["directory:="] = func194;
        func194.definitionLine = 29;
        func194.definitionModule = "unixFilePath";
        var func220 = function(argcv) {    // method setDirectory(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_d = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for setDirectory(1)"));
          setModuleName("unixFilePath");
          setLineNumber(44);    // compilenode identifier
          onSelf = true;
          var call221 = callmethodChecked(this, "directory:=", [1], var_d);
          setLineNumber(45);    // compilenode identifier
          return this;
        };
        func220.paramCounts = [1];
        obj141.methods["setDirectory"] = func220;
        func220.definitionLine = 42;
        func220.definitionModule = "unixFilePath";
        var func222 = function(argcv) {    // method setBase(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_b = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for setBase(1)"));
          setModuleName("unixFilePath");
          setLineNumber(49);    // compilenode identifier
          onSelf = true;
          var call223 = callmethodChecked(this, "base:=", [1], var_b);
          setLineNumber(50);    // compilenode identifier
          return this;
        };
        func222.paramCounts = [1];
        obj141.methods["setBase"] = func222;
        func222.definitionLine = 47;
        func222.definitionModule = "unixFilePath";
        var func224 = function(argcv) {    // method setExtension(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_e = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for setExtension(1)"));
          setModuleName("unixFilePath");
          var if225 = GraceDone;
          setLineNumber(54);    // compilenode string
          var string226 = new GraceString(".");
          var call228 = callmethodChecked(var_e, "first", [0]);
          var opresult230 = callmethodChecked(call228, "==", [1], string226);
          if (Grace_isTrue(opresult230)) {
            setLineNumber(55);    // compilenode identifier
            onSelf = true;
            var call231 = callmethodChecked(this, "extension:=", [1], var_e);
            if225 = call231;
          } else {
            setLineNumber(57);    // compilenode string
            var string233 = new GraceString(".");
            var opresult235 = callmethodChecked(string233, "++", [1], var_e);
            onSelf = true;
            var call236 = callmethodChecked(this, "extension:=", [1], opresult235);
            if225 = call236;
          }
          setLineNumber(59);    // compilenode identifier
          return this;
        };
        func224.paramCounts = [1];
        obj141.methods["setExtension"] = func224;
        func224.definitionLine = 52;
        func224.definitionModule = "unixFilePath";
        var func237 = function(argcv) {    // method exists
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for exists"));
          setModuleName("unixFilePath");
          setLineNumber(63);    // compilenode call
          onSelf = true;
          var call238 = callmethodChecked(this, "asString", [0]);
          var call239 = callmethodChecked(var_io, "exists", [1], call238);
          if (!Grace_isTrue(callmethod(var_Boolean, "match", [1], call239)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method exists does not have " + 
                      callmethod(var_Boolean, "asString", [0])._value + "."));
          return call239;
        };
        func237.paramCounts = [0];
        obj141.methods["exists"] = func237;
        func237.definitionLine = 61;
        func237.definitionModule = "unixFilePath";
        var func240 = function(argcv) {    // method newer(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_other = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for newer(1)"));
          setModuleName("unixFilePath");
          setLineNumber(67);    // compilenode call
          onSelf = true;
          var call241 = callmethodChecked(this, "asString", [0]);
          var call242 = callmethodChecked(var_other, "asString", [0]);
          var call243 = callmethodChecked(var_io, "newer", [2], call241, call242);
          if (!Grace_isTrue(callmethod(var_Boolean, "match", [1], call243)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method newer(1) does not have " + 
                      callmethod(var_Boolean, "asString", [0])._value + "."));
          return call243;
        };
        func240.paramCounts = [1];
        obj141.methods["newer"] = func240;
        func240.definitionLine = 65;
        func240.definitionModule = "unixFilePath";
        var func244 = function(argcv) {    // method copy
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for copy"));
          setModuleName("unixFilePath");
          setLineNumber(72);    // compilenode call
          var call245 = callmethodChecked(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call246 = callmethodChecked(call245, "null", [0]);
          var var_p = call246;
          setLineNumber(73);    // compilenode call
          onSelf = true;
          var call247 = callmethodChecked(this, "directory", [0]);
          var call248 = callmethodChecked(var_p, "directory:=", [1], call247);
          setLineNumber(74);    // compilenode call
          onSelf = true;
          var call249 = callmethodChecked(this, "base", [0]);
          var call250 = callmethodChecked(var_p, "base:=", [1], call249);
          setLineNumber(75);    // compilenode call
          onSelf = true;
          var call251 = callmethodChecked(this, "extension", [0]);
          var call252 = callmethodChecked(var_p, "extension:=", [1], call251);
          setLineNumber(76);    // compilenode identifier
          return var_p;
        };
        func244.paramCounts = [0];
        obj141.methods["copy"] = func244;
        func244.definitionLine = 70;
        func244.definitionModule = "unixFilePath";
        var func253 = function(argcv) {    // method ==(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_other = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ==(1)"));
          setModuleName("unixFilePath");
          var if254 = GraceDone;
          setLineNumber(81);    // compilenode identifier
          var call255 = callmethodChecked(var_other, "directory", [0]);
          onSelf = true;
          var call257 = callmethodChecked(this, "directory", [0]);
          var opresult259 = callmethodChecked(call257, "\u2260", [1], call255);
          if (Grace_isTrue(opresult259)) {
            return GraceFalse;
          }
          var if260 = GraceDone;
          setLineNumber(82);    // compilenode identifier
          var call261 = callmethodChecked(var_other, "base", [0]);
          onSelf = true;
          var call263 = callmethodChecked(this, "base", [0]);
          var opresult265 = callmethodChecked(call263, "\u2260", [1], call261);
          if (Grace_isTrue(opresult265)) {
            return GraceFalse;
          }
          var if266 = GraceDone;
          setLineNumber(83);    // compilenode identifier
          var call267 = callmethodChecked(var_other, "extension", [0]);
          onSelf = true;
          var call269 = callmethodChecked(this, "extension", [0]);
          var opresult271 = callmethodChecked(call269, "\u2260", [1], call267);
          if (Grace_isTrue(opresult271)) {
            return GraceFalse;
          }
          setLineNumber(84);    // compilenode identifier
          return GraceTrue;
        };
        func253.paramCounts = [1];
        obj141.methods["=="] = func253;
        func253.definitionLine = 79;
        func253.definitionModule = "unixFilePath";
        setLineNumber(6);    // compilenode string
        var string272 = new GraceString("");
        obj141.data["dir"] = string272;
        var reader_unixFilePath_dir273 = function() {
          return this.data["dir"];
        };
        obj141.methods["dir"] = reader_unixFilePath_dir273;
        obj141.data["dir"] = string272;
        var writer_unixFilePath_dir273 = function(argcv, o) {
          this.data["dir"] = o;
          return GraceDone;
        };
        obj141.methods["dir:="] = writer_unixFilePath_dir273;
        reader_unixFilePath_dir273.confidential = true;
        writer_unixFilePath_dir273.confidential = true;
        obj141.mutable = true;
        setLineNumber(9);    // compilenode string
        var string274 = new GraceString("");
        obj141.data["base"] = string274;
        var reader_unixFilePath_base275 = function() {
          return this.data["base"];
        };
        obj141.methods["base"] = reader_unixFilePath_base275;
        obj141.data["base"] = string274;
        var writer_unixFilePath_base275 = function(argcv, o) {
          this.data["base"] = o;
          return GraceDone;
        };
        obj141.methods["base:="] = writer_unixFilePath_base275;
        obj141.mutable = true;
        setLineNumber(12);    // compilenode string
        var string276 = new GraceString("");
        obj141.data["extension"] = string276;
        var reader_unixFilePath_extension277 = function() {
          return this.data["extension"];
        };
        obj141.methods["extension"] = reader_unixFilePath_extension277;
        obj141.data["extension"] = string276;
        var writer_unixFilePath_extension277 = function(argcv, o) {
          this.data["extension"] = o;
          return GraceDone;
        };
        obj141.methods["extension:="] = writer_unixFilePath_extension277;
        obj141.mutable = true;
        superDepth = origSuperDepth;
      };
      obj_init_141.apply(inheritingObject, []);
      return obj141;
      };
      this.methods["null()object"] = func140;
    setLineNumber(88);    // compilenode method
    var func278 = function(argcv) {    // method withDirectory(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_d = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for withDirectory(1)"));
      setModuleName("unixFilePath");
      setLineNumber(89);    // compilenode call
      onSelf = true;
      var call279 = callmethodChecked(this, "null", [0]);
      var call280 = callmethodChecked(call279, "setDirectory", [1], var_d);
      return call280;
    };
    func278.paramCounts = [1];
    this.methods["withDirectory"] = func278;
    func278.definitionLine = 88;
    func278.definitionModule = "unixFilePath";
    setLineNumber(92);    // compilenode method
    var func281 = function(argcv) {    // method withBase(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_b = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for withBase(1)"));
      setModuleName("unixFilePath");
      setLineNumber(93);    // compilenode call
      onSelf = true;
      var call282 = callmethodChecked(this, "null", [0]);
      var call283 = callmethodChecked(call282, "setBase", [1], var_b);
      return call283;
    };
    func281.paramCounts = [1];
    this.methods["withBase"] = func281;
    func281.definitionLine = 92;
    func281.definitionModule = "unixFilePath";
    setLineNumber(96);    // compilenode method
    var func284 = function(argcv) {    // method withExtension(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_e = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for withExtension(1)"));
      setModuleName("unixFilePath");
      setLineNumber(97);    // compilenode call
      onSelf = true;
      var call285 = callmethodChecked(this, "null", [0]);
      var call286 = callmethodChecked(call285, "setExtension", [1], var_e);
      return call286;
    };
    func284.paramCounts = [1];
    this.methods["withExtension"] = func284;
    func284.definitionLine = 96;
    func284.definitionModule = "unixFilePath";
    setLineNumber(100);    // compilenode method
    var func287 = function(argcv) {    // method withDirectory(1)base(1)extension(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_d = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for withDirectory (arg list 1) of withDirectory(1)base(1)extension(1)"));
      var var_b = arguments[curarg];
      curarg++;
      if (argcv[1] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for base (arg list 2) of withDirectory(1)base(1)extension(1)"));
      var var_e = arguments[curarg];
      curarg++;
      if (argcv[2] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for extension (arg list 3) of withDirectory(1)base(1)extension(1)"));
      setModuleName("unixFilePath");
      setLineNumber(102);    // compilenode call
      onSelf = true;
      var call288 = callmethodChecked(this, "null", [0]);
      var call289 = callmethodChecked(call288, "setDirectory", [1], var_d);
      var call290 = callmethodChecked(call289, "setBase", [1], var_b);
      var call291 = callmethodChecked(call290, "setExtension", [1], var_e);
      return call291;
    };
    func287.paramCounts = [1, 1, 1];
    this.methods["withDirectory()base()extension"] = func287;
    func287.definitionLine = 100;
    func287.definitionModule = "unixFilePath";
    setLineNumber(105);    // compilenode method
    var func292 = function(argcv) {    // method fromString(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_s = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for fromString(1)"));
      setModuleName("unixFilePath");
      setLineNumber(107);    // compilenode call
      onSelf = true;
      var call293 = callmethodChecked(this, "null", [0]);
      var var_p = call293;
      setLineNumber(108);    // compilenode num
      var var_slashPosn = new GraceNum(0);
      setLineNumber(109);    // compilenode identifier
      var call294 = callmethodChecked(var_s, "size", [0]);
      var var_sSize = call294;
      setLineNumber(110);    // compilenode identifier
      var var_ix = var_sSize;
      setLineNumber(111);    // compilenode block
      var block295 = new GraceBlock(this, 111, 0);
      block295.real = function() {
        var opresult298 = callmethodChecked(var_ix, ">", [1], new GraceNum(0));
        var opresult302 = callmethodChecked(var_slashPosn, "==", [1], new GraceNum(0));
        var opresult304 = callmethodChecked(opresult302, "&&", [1], opresult298);
        return opresult304;
      };
      var block305 = new GraceBlock(this, 111, 0);
      block305.real = function() {
        var if306 = GraceDone;
        setLineNumber(112);    // compilenode string
        var string307 = new GraceString("/");
        var call309 = callmethodChecked(var_s, "at", [1], var_ix);
        var opresult311 = callmethodChecked(call309, "==", [1], string307);
        if (Grace_isTrue(opresult311)) {
          setLineNumber(113);    // compilenode identifier
          var_slashPosn = var_ix;
          if306 = GraceDone;
        } else {
          setLineNumber(115);    // compilenode identifier
          var diff314 = callmethodChecked(var_ix, "-", [1], new GraceNum(1));
          var_ix = diff314;
          if306 = GraceDone;
        }
        return if306;
      };
      var call315 = callmethodChecked(var_prelude, "while()do", [1, 1], block295, block305);
      setLineNumber(118);    // compilenode identifier
      var call316 = callmethodChecked(var_s, "substringFrom()to", [1, 1], new GraceNum(1), var_slashPosn);
      var call317 = callmethodChecked(var_p, "directory:=", [1], call316);
      setLineNumber(119);    // compilenode identifier
      var opresult320 = callmethodChecked(var_sSize, "+", [1], new GraceNum(1));
      var var_dotPosn = opresult320;
      setLineNumber(120);    // compilenode identifier
      var_ix = var_sSize;
      setLineNumber(121);    // compilenode block
      var block321 = new GraceBlock(this, 121, 0);
      block321.real = function() {
        var opresult324 = callmethodChecked(var_ix, ">", [1], var_slashPosn);
        var opresult328 = callmethodChecked(var_dotPosn, ">", [1], var_sSize);
        var opresult330 = callmethodChecked(opresult328, "&&", [1], opresult324);
        return opresult330;
      };
      var block331 = new GraceBlock(this, 121, 0);
      block331.real = function() {
        var if332 = GraceDone;
        setLineNumber(122);    // compilenode string
        var string333 = new GraceString(".");
        var call335 = callmethodChecked(var_s, "at", [1], var_ix);
        var opresult337 = callmethodChecked(call335, "==", [1], string333);
        if (Grace_isTrue(opresult337)) {
          setLineNumber(123);    // compilenode identifier
          var_dotPosn = var_ix;
          if332 = GraceDone;
        } else {
          setLineNumber(125);    // compilenode identifier
          var diff340 = callmethodChecked(var_ix, "-", [1], new GraceNum(1));
          var_ix = diff340;
          if332 = GraceDone;
        }
        return if332;
      };
      var call341 = callmethodChecked(var_prelude, "while()do", [1, 1], block321, block331);
      var if342 = GraceDone;
      setLineNumber(128);    // compilenode identifier
      var opresult345 = callmethodChecked(var_dotPosn, "\u2264", [1], var_sSize);
      if (Grace_isTrue(opresult345)) {
        setLineNumber(129);    // compilenode identifier
        var call346 = callmethodChecked(var_s, "substringFrom()to", [1, 1], var_dotPosn, var_sSize);
        var call347 = callmethodChecked(var_p, "extension:=", [1], call346);
        if342 = call347;
      }
      setLineNumber(131);    // compilenode identifier
      var opresult350 = callmethodChecked(var_slashPosn, "+", [1], new GraceNum(1));
      var diff353 = callmethodChecked(var_dotPosn, "-", [1], new GraceNum(1));
      var call354 = callmethodChecked(var_s, "substringFrom()to", [1, 1], opresult350, diff353);
      var call355 = callmethodChecked(var_p, "base:=", [1], call354);
      setLineNumber(132);    // compilenode identifier
      return var_p;
    };
    func292.paramCounts = [1];
    this.methods["fromString"] = func292;
    func292.definitionLine = 105;
    func292.definitionModule = "unixFilePath";
    setLineNumber(135);    // compilenode method
    var func356 = function(argcv) {    // method split(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_pathString = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for split(1)"));
      setModuleName("unixFilePath");
      setLineNumber(138);    // compilenode call
      var call357 = callmethodChecked(var_prelude, "emptyList", [0]);
      var var_locations = call357;
      setLineNumber(139);    // compilenode num
      var var_ix = new GraceNum(1);
      setLineNumber(140);    // compilenode num
      var var_ox = new GraceNum(1);
      setLineNumber(141);    // compilenode identifier
      var call358 = callmethodChecked(var_pathString, "size", [0]);
      var var_pss = call358;
      setLineNumber(142);    // compilenode block
      var block359 = new GraceBlock(this, 142, 0);
      block359.real = function() {
        var opresult362 = callmethodChecked(var_ox, "\u2264", [1], var_pss);
        return opresult362;
      };
      var block363 = new GraceBlock(this, 142, 0);
      block363.real = function() {
        setLineNumber(143);    // compilenode block
        var block364 = new GraceBlock(this, 143, 0);
        block364.real = function() {
          var block365 = new GraceBlock(this, 143, 0);
          block365.real = function() {
            var string366 = new GraceString(":");
            var call368 = callmethodChecked(var_pathString, "at", [1], var_ox);
            var opresult370 = callmethodChecked(call368, "\u2260", [1], string366);
            return opresult370;
          };
          var opresult374 = callmethodChecked(var_ox, "\u2264", [1], var_pss);
          var opresult376 = callmethodChecked(opresult374, "&&", [1], block365);
          return opresult376;
        };
        var block377 = new GraceBlock(this, 143, 0);
        block377.real = function() {
          setLineNumber(144);    // compilenode identifier
          var opresult380 = callmethodChecked(var_ox, "+", [1], new GraceNum(1));
          var_ox = opresult380;
          return GraceDone;
        };
        var call381 = callmethodChecked(var_prelude, "while()do", [1, 1], block364, block377);
        setLineNumber(146);    // compilenode identifier
        var diff384 = callmethodChecked(var_ox, "-", [1], new GraceNum(1));
        var call385 = callmethodChecked(var_pathString, "substringFrom()to", [1, 1], var_ix, diff384);
        var var_item = call385;
        var if386 = GraceDone;
        setLineNumber(147);    // compilenode string
        var string387 = new GraceString("/");
        var call389 = callmethodChecked(var_item, "size", [0]);
        var call390 = callmethodChecked(var_item, "at", [1], call389);
        var opresult392 = callmethodChecked(call390, "\u2260", [1], string387);
        if (Grace_isTrue(opresult392)) {
          var string393 = new GraceString("/");
          var opresult396 = callmethodChecked(var_item, "++", [1], string393);
          var_item = opresult396;
          if386 = GraceDone;
        }
        setLineNumber(148);    // compilenode identifier
        var call397 = callmethodChecked(var_locations, "addLast", [1], var_item);
        setLineNumber(149);    // compilenode identifier
        var opresult400 = callmethodChecked(var_ox, "+", [1], new GraceNum(1));
        var_ix = opresult400;
        setLineNumber(150);    // compilenode identifier
        var_ox = var_ix;
        return GraceDone;
      };
      var call401 = callmethodChecked(var_prelude, "while()do", [1, 1], block359, block363);
      setLineNumber(152);    // compilenode identifier
      return var_locations;
    };
    func356.paramCounts = [1];
    this.methods["split"] = func356;
    func356.definitionLine = 135;
    func356.definitionModule = "unixFilePath";
    setLineNumber(155);    // compilenode method
    var func402 = function(argcv) {    // method file(1)onPath(1)otherwise(1)
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
      setModuleName("unixFilePath");
      setLineNumber(156);    // compilenode identifier
      onSelf = true;
      var call403 = callmethodChecked(this, "split", [1], var_pathString);
      var var_locations = call403;
      setLineNumber(157);    // compilenode string
      var string404 = new GraceString("./");
      var call405 = callmethodChecked(var_locations, "addFirst", [1], string404);
      setLineNumber(158);    // compilenode identifier
      var call406 = callmethodChecked(var_name, "copy", [0]);
      var var_candidate = call406;
      setLineNumber(159);    // compilenode identifier
      var call407 = callmethodChecked(var_name, "dir", [0]);
      var var_originalDir = call407;
      var if408 = GraceDone;
      setLineNumber(160);    // compilenode string
      var string409 = new GraceString("/");
      var call411 = callmethodChecked(var_originalDir, "first", [0]);
      var opresult413 = callmethodChecked(call411, "==", [1], string409);
      if (Grace_isTrue(opresult413)) {
        var if414 = GraceDone;
        setLineNumber(161);    // compilenode identifier
        var call415 = callmethodChecked(var_candidate, "exists", [0]);
        if (Grace_isTrue(call415)) {
          setLineNumber(162);    // compilenode identifier
          return var_candidate;
        } else {
          setLineNumber(164);    // compilenode string
          var string416 = new GraceString("");
          var call417 = callmethodChecked(var_action, "apply", [1], string416);
          return call417;
        }
        if408 = if414;
      }
      setLineNumber(167);    // compilenode block
      var block418 = new GraceBlock(this, 167, 1);
      setLineNumber(1);    // compilenode identifier
      block418.real = function(var_each) {
        setLineNumber(168);    // compilenode identifier
        var opresult421 = callmethodChecked(var_each, "++", [1], var_originalDir);
        var call422 = callmethodChecked(var_candidate, "setDirectory", [1], opresult421);
        var if423 = GraceDone;
        setLineNumber(169);    // compilenode identifier
        var call424 = callmethodChecked(var_candidate, "exists", [0]);
        if (Grace_isTrue(call424)) {
          setLineNumber(170);    // compilenode identifier
          throw new ReturnException(var_candidate, returnTarget);
        }
        return if423;
      };
      setLineNumber(167);    // compilenode identifier
      var call425 = callmethodChecked(var_locations, "do", [1], block418);
      setLineNumber(173);    // compilenode identifier
      var call426 = callmethodChecked(var_action, "apply", [1], var_locations);
      return call426;
    };
    func402.paramCounts = [1, 1, 1];
    this.methods["file()onPath()otherwise"] = func402;
    func402.definitionLine = 155;
    func402.definitionModule = "unixFilePath";
    return this;
  }
  gracecode_unixFilePath.imports = ['io'];
  if (typeof gctCache !== "undefined")
    gctCache['unixFilePath'] = "classes:\nconfidential:\nfresh-methods:\n null\nfresh:null:\n ==\n asDebugString\n asString\n base\n copy\n dir\n directory\n directory:=\n exists\n extension\n newer\n setBase\n setDirectory\n setExtension\n shortName\nmodules:\n io\npath:\n unixFilePath\npublic:\n file()onPath()otherwise\n fromString\n null\n split\n withBase\n withDirectory\n withDirectory()base()extension\n withExtension\ntypes:\n";
  if (typeof originalSourceLines !== "undefined") {
    originalSourceLines["unixFilePath"] = [
      "import \"io\" as io",
      "",
      "class null {",
      "    // creates a unixFilePath with empty components",
      "",
      "    var dir := \"\"",
      "    // the directory part; \"\" if in current directory",
      "",
      "    var base is public := \"\"",
      "    // the base part of the file name (without an extension)",
      "",
      "    var extension is public := \"\"",
      "    // the extension (like `.grace`) , including the `.`",
      "",
      "    method asString { dir ++ base ++ extension }",
      "    // the whole file name as a string",
      "",
      "    method shortName { base ++ extension }",
      "    // the file name without the directory part",
      "",
      "    method asDebugString { \"unixFilePath[{dir}|{base}|{extension}]\" }",
      "    // for debugging; shows the division into parts",
      "",
      "    method directory {",
      "    // the directory part; \"./\" if in current directory",
      "        if (dir == \"\") then { \"./\" } else { dir }",
      "    }",
      "",
      "    method directory:=(d) {",
      "    // set the directory part",
      "        var newDir := d",
      "        if (newDir == \"\") then {",
      "            dir := \"\"",
      "            return",
      "        }",
      "        if (newDir.at(newDir.size) != \"/\") then {",
      "            newDir := newDir ++ \"/\"",
      "        }",
      "        if (newDir == \"./\") then { newDir := \"\" }",
      "        dir := newDir",
      "    }",
      "    method setDirectory(d) {",
      "    // set the directory part; answers self for chaining",
      "        directory := d",
      "        self",
      "    }",
      "    method setBase(b) {",
      "    // set the base part; answers self for chaining",
      "        base := b",
      "        self",
      "    }",
      "    method setExtension(e) {",
      "    // set the extension; answers self for chaining",
      "        if (e.first == \".\") then {",
      "            extension := e",
      "        } else {",
      "            extension := \".\" ++ e",
      "        }",
      "        self",
      "    }",
      "    method exists -> Boolean {",
      "    // true if his file exists",
      "        io.exists(self.asString)",
      "    }",
      "    method newer(other) -> Boolean {",
      "    // true if this file is newer than other",
      "        io.newer(self.asString, other.asString)",
      "    }",
      "",
      "    method copy {",
      "    // a copy of this filePath",
      "        def p = null",
      "        p.directory := directory",
      "        p.base := base",
      "        p.extension := extension",
      "        p",
      "    }",
      "",
      "    method == (other) {",
      "    // am I equal to other?",
      "        if (directory != other.directory) then { return false }",
      "        if (base != other.base) then { return false }",
      "        if (extension != other.extension) then { return false }",
      "        return true",
      "    }",
      "}",
      "",
      "method withDirectory(d) {",
      "    null.setDirectory(d)",
      "}",
      "",
      "method withBase(b) {",
      "    null.setBase(b)",
      "}",
      "",
      "method withExtension(e) {",
      "    null.setExtension(e)",
      "}",
      "",
      "method withDirectory(d) base(b) extension(e) {",
      "    // creates a unixFilePath with directory d, base b and extension e",
      "    null.setDirectory(d).setBase(b).setExtension(e)",
      "}",
      "",
      "method fromString(s) {",
      "    // parses the filename s into components and answers the approriate unixFilePath",
      "    def p = null",
      "    var slashPosn := 0",
      "    def sSize = s.size",
      "    var ix := sSize",
      "    while { (slashPosn == 0) && (ix > 0) } do {",
      "        if (s.at(ix) == \"/\") then {",
      "            slashPosn := ix",
      "        } else {",
      "            ix := ix - 1",
      "        }",
      "    }",
      "    p.directory := s.substringFrom 1 to (slashPosn)",
      "    var dotPosn := sSize + 1",
      "    ix := sSize",
      "    while { (dotPosn > sSize) && (ix > slashPosn) } do {",
      "        if (s.at(ix) == \".\") then {",
      "            dotPosn := ix",
      "        } else {",
      "            ix := ix - 1",
      "        }",
      "    }",
      "    if (dotPosn <= sSize) then {",
      "        p.extension := s.substringFrom (dotPosn) to (sSize)",
      "    }",
      "    p.base := s.substringFrom (slashPosn + 1) to (dotPosn - 1)",
      "    p",
      "}",
      "",
      "method split(pathString) -> List<String> {",
      "    // splits pathString, assumed to be a Unix PATH containing items separated",
      "    // by colons, into a List of items.  Ensures that each item ends with /",
      "    def locations = emptyList",
      "    var ix := 1",
      "    var ox := 1",
      "    def pss = pathString.size",
      "    while { ox <= pss } do {",
      "        while { (ox <= pss) && {pathString.at(ox) != \":\"} } do {",
      "            ox := ox + 1",
      "        }",
      "        var item := pathString.substringFrom(ix) to(ox-1)",
      "        if (item.at(item.size) != \"/\") then { item := item ++ \"/\" }",
      "        locations.addLast (item)",
      "        ix := ox + 1",
      "        ox := ix",
      "    }",
      "    return locations",
      "}",
      "",
      "method file(name) onPath(pathString) otherwise(action) {",
      "    def locations = split(pathString)",
      "    locations.addFirst \"./\"",
      "    def candidate = name.copy",
      "    def originalDir = name.dir",
      "    if (originalDir.first == \"/\") then {",
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
      "}" ];
  }
  if (typeof global !== "undefined")
    global.gracecode_unixFilePath = gracecode_unixFilePath;
  if (typeof window !== "undefined")
    window.gracecode_unixFilePath = gracecode_unixFilePath;
