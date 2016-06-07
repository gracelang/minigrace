"use strict";
function gracecode_StandardPrelude() {
  setModuleName("StandardPrelude");
  this.definitionModule = "StandardPrelude";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_StandardPrelude_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_StandardPrelude_outer0;
  setLineNumber(24);    // compilenode method
  var func1 = function(argcv) {    // method abstract
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for abstract"));
    setModuleName("StandardPrelude");
    setLineNumber(25);    // compilenode string
    var string2 = new GraceString("abstract method not overriden by subobject");
    var call3 = callmethodChecked(var_SubobjectResponsibility, "raise", [1], string2);
    return call3;
  };
  func1.paramCounts = [0];
  this.methods["abstract"] = func1;
  func1.definitionLine = 24;
  func1.definitionModule = "StandardPrelude";
  setLineNumber(29);    // compilenode method
  var func4 = function(argcv) {    // method required
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for required"));
    setModuleName("StandardPrelude");
    setLineNumber(30);    // compilenode string
    var string5 = new GraceString("required method not overriden by subobject");
    var call6 = callmethodChecked(var_SubobjectResponsibility, "raise", [1], string5);
    return call6;
  };
  func4.paramCounts = [0];
  this.methods["required"] = func4;
  func4.definitionLine = 29;
  func4.definitionModule = "StandardPrelude";
  setLineNumber(33);    // compilenode method
  var func7 = function(argcv) {    // method do(1)while(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_action = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for do (arg list 1) of do(1)while(1)"));
    var var_condition = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for while (arg list 2) of do(1)while(1)"));
    setModuleName("StandardPrelude");
    setLineNumber(34);    // compilenode block
    var block8 = new GraceBlock(this, 34, 0);
    block8.real = function() {
      setLineNumber(35);    // compilenode identifier
      var call9 = callmethodChecked(var_action, "apply", [0]);
      setLineNumber(36);    // compilenode identifier
      var call10 = callmethodChecked(var_condition, "apply", [0]);
      return call10;
    };
    setLineNumber(37);    // compilenode block
    var block11 = new GraceBlock(this, 37, 0);
    block11.real = function() {
      return GraceDone;
    };
    var call12 = callmethodChecked(var_prelude, "while()do", [1, 1], block8, block11);
    return call12;
  };
  func7.paramCounts = [1, 1];
  this.methods["do()while"] = func7;
  func7.definitionLine = 33;
  func7.definitionModule = "StandardPrelude";
  setLineNumber(40);    // compilenode method
  var func13 = function(argcv) {    // method repeat(1)times(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_n = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for repeat (arg list 1) of repeat(1)times(1)"));
    var var_action = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for times (arg list 2) of repeat(1)times(1)"));
    setModuleName("StandardPrelude");
    setLineNumber(41);    // compilenode identifier
    var var_ix = var_n;
    setLineNumber(42);    // compilenode block
    var block14 = new GraceBlock(this, 42, 0);
    block14.real = function() {
      var opresult17 = callmethodChecked(var_ix, ">", [1], new GraceNum(0));
      return opresult17;
    };
    var block18 = new GraceBlock(this, 42, 0);
    block18.real = function() {
      setLineNumber(43);    // compilenode identifier
      var diff21 = callmethodChecked(var_ix, "-", [1], new GraceNum(1));
      var_ix = diff21;
      setLineNumber(44);    // compilenode identifier
      var call22 = callmethodChecked(var_action, "apply", [0]);
      return call22;
    };
    var call23 = callmethodChecked(var_prelude, "while()do", [1, 1], block14, block18);
    return call23;
  };
  func13.paramCounts = [1, 1];
  this.methods["repeat()times"] = func13;
  func13.definitionLine = 40;
  func13.definitionModule = "StandardPrelude";
  setLineNumber(48);    // compilenode method
  var func24 = function(argcv) {    // method for(1)and(1)do(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_cs = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for for (arg list 1) of for(1)and(1)do(1)"));
    var var_ds = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for and (arg list 2) of for(1)and(1)do(1)"));
    var var_action = arguments[curarg];
    curarg++;
    if (argcv[2] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for do (arg list 3) of for(1)and(1)do(1)"));
    setModuleName("StandardPrelude");
    setLineNumber(49);    // compilenode identifier
    var call25 = callmethodChecked(var_ds, "iterator", [0]);
    var var_dIter = call25;
    setLineNumber(50);    // compilenode block
    var block26 = new GraceBlock(this, 50, 1);
    setLineNumber(1);    // compilenode identifier
    block26.real = function(var_c) {
      var if27 = GraceDone;
      setLineNumber(51);    // compilenode identifier
      var call28 = callmethodChecked(var_dIter, "hasNext", [0]);
      if (Grace_isTrue(call28)) {
        setLineNumber(52);    // compilenode identifier
        var call29 = callmethodChecked(var_dIter, "next", [0]);
        var call30 = callmethodChecked(var_action, "apply", [2], var_c, call29);
        if27 = call30;
      } else {
        setLineNumber(55);    // compilenode identifier
        throw new ReturnException(var_done, returnTarget);
      }
      return if27;
    };
    setLineNumber(50);    // compilenode identifier
    var call31 = callmethodChecked(var_cs, "do", [1], block26);
    if (!Grace_isTrue(callmethod(var_Done, "match", [1], call31)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("result of method for(1)and(1)do(1) does not have " + 
                callmethod(var_Done, "asString", [0])._value + "."));
    return call31;
  };
  func24.paramCounts = [1, 1, 1];
  this.methods["for()and()do"] = func24;
  func24.definitionLine = 48;
  func24.definitionModule = "StandardPrelude";
  setLineNumber(59);    // compilenode method
  var func32 = function(argcv) {    // method min(2)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_a = arguments[curarg];
    curarg++;
    var var_b = arguments[curarg];
    curarg++;
    if (argcv[0] !== 2)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for min(2)"));
    setModuleName("StandardPrelude");
    var if33 = GraceDone;
    setLineNumber(60);    // compilenode identifier
    var opresult36 = callmethodChecked(var_a, "<", [1], var_b);
    if (Grace_isTrue(opresult36)) {
      if33 = var_a;
    } else {
      if33 = var_b;
    }
    return if33;
  };
  func32.paramCounts = [2];
  this.methods["min"] = func32;
  func32.definitionLine = 59;
  func32.definitionModule = "StandardPrelude";
  setLineNumber(63);    // compilenode method
  var func37 = function(argcv) {    // method max(2)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_a = arguments[curarg];
    curarg++;
    var var_b = arguments[curarg];
    curarg++;
    if (argcv[0] !== 2)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for max(2)"));
    setModuleName("StandardPrelude");
    var if38 = GraceDone;
    setLineNumber(64);    // compilenode identifier
    var opresult41 = callmethodChecked(var_a, ">", [1], var_b);
    if (Grace_isTrue(opresult41)) {
      if38 = var_a;
    } else {
      if38 = var_b;
    }
    return if38;
  };
  func37.paramCounts = [2];
  this.methods["max"] = func37;
  func37.definitionLine = 63;
  func37.definitionModule = "StandardPrelude";
  setLineNumber(67);    // compilenode method
  var func42 = function(argcv) {    // method valueOf(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_nullaryBlock = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for valueOf(1)"));
    setModuleName("StandardPrelude");
    setLineNumber(68);    // compilenode identifier
    var call43 = callmethodChecked(var_nullaryBlock, "apply", [0]);
    return call43;
  };
  func42.paramCounts = [1];
  this.methods["valueOf"] = func42;
  func42.definitionLine = 67;
  func42.definitionModule = "StandardPrelude";
  setLineNumber(367);    // compilenode method
  var func44 = function(argcv) {    // method alwaysEqual
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for alwaysEqual"));
    setModuleName("StandardPrelude");
    var obj45 = Grace_allocObject(GraceObject, "StandardPrelude.alwaysEqual");
    obj45.definitionModule = "StandardPrelude";
    obj45.definitionLine = 367;
    obj45.outer = this;
    var reader_StandardPrelude_outer46 = function() {
      return this.outer;
    };
    obj45.methods["outer"] = reader_StandardPrelude_outer46;
    var obj_init_45 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj45;
      var func47 = function(argcv) {    // method ==(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_other = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ==(1)"));
        setModuleName("StandardPrelude");
        setLineNumber(369);    // compilenode identifier
        onSelf = true;
        var call48 = callmethodChecked(this, "isMe", [1], var_other);
        return call48;
      };
      func47.paramCounts = [1];
      obj45.methods["=="] = func47;
      func47.definitionLine = 368;
      func47.definitionModule = "StandardPrelude";
      superDepth = origSuperDepth;
    };
    obj_init_45.apply(obj45, []);
    return obj45;
  };
  func44.paramCounts = [0];
  this.methods["alwaysEqual"] = func44;
  func44.definitionLine = 367;
  func44.definitionModule = "StandardPrelude";
    var func49 = function(argcv) {    // method alwaysEqual()object
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      // Start argument processing
      curarg = 1;
      // End argument processing
      setModuleName("StandardPrelude");
      var returnTarget = invocationCount;
      invocationCount++;
      var obj50 = Grace_allocObject(GraceObject, "alwaysEqual");
      obj50.definitionModule = "StandardPrelude";
      obj50.definitionLine = 367;
      var inho50 = inheritingObject;
      while (inho50.superobj) inho50 = inho50.superobj;
      inho50.superobj = obj50;
      obj50.data = inheritingObject.data;
      if (inheritingObject.hasOwnProperty('_value'))
        obj50._value = inheritingObject._value;
      obj50.outer = this;
      var reader_StandardPrelude_outer51 = function() {
        return this.outer;
      };
      obj50.methods["outer"] = reader_StandardPrelude_outer51;
      var obj_init_50 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj50;
        var func52 = function(argcv) {    // method ==(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_other = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ==(1)"));
          setModuleName("StandardPrelude");
          onSelf = true;
          var call53 = callmethodChecked(this, "isMe", [1], var_other);
          return call53;
        };
        func52.paramCounts = [1];
        obj50.methods["=="] = func52;
        func52.definitionLine = 368;
        func52.definitionModule = "StandardPrelude";
        superDepth = origSuperDepth;
      };
      obj_init_50.apply(inheritingObject, []);
      return obj50;
      };
      this.methods["alwaysEqual()object"] = func49;
    setLineNumber(373);    // compilenode method
    var func54 = function(argcv) {    // method point2Dx(1)y(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for point2Dx (arg list 1) of point2Dx(1)y(1)"));
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[1] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for y (arg list 2) of point2Dx(1)y(1)"));
      setModuleName("StandardPrelude");
      var obj55 = Grace_allocObject(GraceObject, "StandardPrelude.point2Dx()y");
      obj55.definitionModule = "StandardPrelude";
      obj55.definitionLine = 373;
      obj55.outer = this;
      var reader_StandardPrelude_outer56 = function() {
        return this.outer;
      };
      obj55.methods["outer"] = reader_StandardPrelude_outer56;
      var obj_init_55 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj55;
        var func57 = function(argcv) {    // method asString
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
          setModuleName("StandardPrelude");
          setLineNumber(376);    // compilenode string
          var string58 = new GraceString(")");
          onSelf = true;
          var call60 = callmethodChecked(this, "y", [0]);
          var string62 = new GraceString("@");
          onSelf = true;
          var call64 = callmethodChecked(this, "x", [0]);
          var string66 = new GraceString("(");
          var opresult68 = callmethodChecked(string66, "++", [1], call64);
          var opresult70 = callmethodChecked(opresult68, "++", [1], string62);
          var opresult72 = callmethodChecked(opresult70, "++", [1], call60);
          var opresult74 = callmethodChecked(opresult72, "++", [1], string58);
          return opresult74;
        };
        func57.paramCounts = [0];
        obj55.methods["asString"] = func57;
        func57.definitionLine = 376;
        func57.definitionModule = "StandardPrelude";
        var func75 = function(argcv) {    // method asDebugString
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asDebugString"));
          setModuleName("StandardPrelude");
          setLineNumber(377);    // compilenode call
          onSelf = true;
          var call76 = callmethodChecked(this, "asString", [0]);
          return call76;
        };
        func75.paramCounts = [0];
        obj55.methods["asDebugString"] = func75;
        func75.definitionLine = 377;
        func75.definitionModule = "StandardPrelude";
        var func77 = function(argcv) {    // method distanceTo(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_other = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for distanceTo(1)"));
          // Start argument checking
          curarg = 1;
          setLineNumber(378);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Point, "match",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in distanceTo (arg list 1), which corresponds to parameter other, does not have " + 
                      callmethod(var_Point, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("StandardPrelude");
          var call80 = callmethodChecked(var_other, "y", [0]);
          onSelf = true;
          var call82 = callmethodChecked(this, "y", [0]);
          var diff84 = callmethodChecked(call82, "-", [1], call80);
          var opresult86 = callmethodChecked(diff84, "^", [1], new GraceNum(2));
          var call89 = callmethodChecked(var_other, "x", [0]);
          onSelf = true;
          var call91 = callmethodChecked(this, "x", [0]);
          var diff93 = callmethodChecked(call91, "-", [1], call89);
          var opresult95 = callmethodChecked(diff93, "^", [1], new GraceNum(2));
          var opresult97 = callmethodChecked(opresult95, "+", [1], opresult86);
          var opresult99 = callmethodChecked(opresult97, "^", [1], new GraceNum(0.5));
          return opresult99;
        };
        func77.paramTypes = [];
        func77.paramTypes.push([]);
        func77.paramCounts = [1];
        obj55.methods["distanceTo"] = func77;
        func77.definitionLine = 378;
        func77.definitionModule = "StandardPrelude";
        var func100 = function(argcv) {    // method -(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_other = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for -(1)"));
          // Start argument checking
          curarg = 1;
          setLineNumber(379);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Point, "match",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in - (arg list 1), which corresponds to parameter other, does not have " + 
                      callmethod(var_Point, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("StandardPrelude");
          var call101 = callmethodChecked(var_other, "x", [0]);
          onSelf = true;
          var call103 = callmethodChecked(this, "x", [0]);
          var diff105 = callmethodChecked(call103, "-", [1], call101);
          var call106 = callmethodChecked(var_other, "y", [0]);
          onSelf = true;
          var call108 = callmethodChecked(this, "y", [0]);
          var diff110 = callmethodChecked(call108, "-", [1], call106);
          var call111 = callmethodChecked(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call112 = callmethodChecked(call111, "point2Dx()y", [1, 1], diff105, diff110);
          return call112;
        };
        func100.paramTypes = [];
        func100.paramTypes.push([]);
        func100.paramCounts = [1];
        obj55.methods["-"] = func100;
        func100.definitionLine = 379;
        func100.definitionModule = "StandardPrelude";
        var func113 = function(argcv) {    // method +(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_other = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for +(1)"));
          // Start argument checking
          curarg = 1;
          setLineNumber(380);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Point, "match",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in + (arg list 1), which corresponds to parameter other, does not have " + 
                      callmethod(var_Point, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("StandardPrelude");
          var call114 = callmethodChecked(var_other, "x", [0]);
          onSelf = true;
          var call116 = callmethodChecked(this, "x", [0]);
          var opresult118 = callmethodChecked(call116, "+", [1], call114);
          var call119 = callmethodChecked(var_other, "y", [0]);
          onSelf = true;
          var call121 = callmethodChecked(this, "y", [0]);
          var opresult123 = callmethodChecked(call121, "+", [1], call119);
          var call124 = callmethodChecked(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call125 = callmethodChecked(call124, "point2Dx()y", [1, 1], opresult118, opresult123);
          return call125;
        };
        func113.paramTypes = [];
        func113.paramTypes.push([]);
        func113.paramCounts = [1];
        obj55.methods["+"] = func113;
        func113.definitionLine = 380;
        func113.definitionModule = "StandardPrelude";
        var func126 = function(argcv) {    // method /(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_other = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for /(1)"));
          // Start argument checking
          curarg = 1;
          setLineNumber(381);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Number, "match",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in / (arg list 1), which corresponds to parameter other, does not have " + 
                      callmethod(var_Number, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("StandardPrelude");
          onSelf = true;
          var call128 = callmethodChecked(this, "x", [0]);
          var quotient130 = callmethodChecked(call128, "/", [1], var_other);
          onSelf = true;
          var call132 = callmethodChecked(this, "y", [0]);
          var quotient134 = callmethodChecked(call132, "/", [1], var_other);
          var call135 = callmethodChecked(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call136 = callmethodChecked(call135, "point2Dx()y", [1, 1], quotient130, quotient134);
          return call136;
        };
        func126.paramTypes = [];
        func126.paramTypes.push([type_Number, "other"]);
        func126.paramCounts = [1];
        obj55.methods["/"] = func126;
        func126.definitionLine = 381;
        func126.definitionModule = "StandardPrelude";
        var func137 = function(argcv) {    // method *(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_other = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for *(1)"));
          // Start argument checking
          curarg = 1;
          setLineNumber(382);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Number, "match",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in * (arg list 1), which corresponds to parameter other, does not have " + 
                      callmethod(var_Number, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("StandardPrelude");
          onSelf = true;
          var call139 = callmethodChecked(this, "x", [0]);
          var prod141 = callmethodChecked(call139, "*", [1], var_other);
          onSelf = true;
          var call143 = callmethodChecked(this, "y", [0]);
          var prod145 = callmethodChecked(call143, "*", [1], var_other);
          var call146 = callmethodChecked(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call147 = callmethodChecked(call146, "point2Dx()y", [1, 1], prod141, prod145);
          return call147;
        };
        func137.paramTypes = [];
        func137.paramTypes.push([type_Number, "other"]);
        func137.paramCounts = [1];
        obj55.methods["*"] = func137;
        func137.definitionLine = 382;
        func137.definitionModule = "StandardPrelude";
        var func148 = function(argcv) {    // method length
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for length"));
          setModuleName("StandardPrelude");
          setLineNumber(383);    // compilenode call
          onSelf = true;
          var call151 = callmethodChecked(this, "y", [0]);
          var opresult153 = callmethodChecked(call151, "^", [1], new GraceNum(2));
          onSelf = true;
          var call156 = callmethodChecked(this, "x", [0]);
          var opresult158 = callmethodChecked(call156, "^", [1], new GraceNum(2));
          var opresult160 = callmethodChecked(opresult158, "+", [1], opresult153);
          var opresult162 = callmethodChecked(opresult160, "^", [1], new GraceNum(0.5));
          return opresult162;
        };
        func148.paramCounts = [0];
        obj55.methods["length"] = func148;
        func148.definitionLine = 383;
        func148.definitionModule = "StandardPrelude";
        var func163 = function(argcv) {    // method ==(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_other = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ==(1)"));
          setModuleName("StandardPrelude");
          setLineNumber(385);    // compilenode identifier
          var cases164 = [];
          setLineNumber(386);    // compilenode block
          var block165 = new GraceBlock(this, 386, 1);
          setLineNumber(0);    // compilenode string
          var string166 = new GraceString("o");
          var call167 = callmethodChecked(var_prelude, "VariablePattern", [0]);
          var call168 = callmethodChecked(call167, "new", [1], string166);
          var call169 = callmethodChecked(var_prelude, "AndPattern", [0]);
          var call170 = callmethodChecked(call169, "new", [2], call168, var_Point);
          block165.pattern = call170;
          setLineNumber(386);    // compilenode identifier
          block165.paramTypes = [var_Point];
          block165.real = function(var_o) {
            var call171 = callmethodChecked(var_o, "y", [0]);
            onSelf = true;
            var call173 = callmethodChecked(this, "y", [0]);
            var opresult175 = callmethodChecked(call173, "==", [1], call171);
            var call177 = callmethodChecked(var_o, "x", [0]);
            onSelf = true;
            var call179 = callmethodChecked(this, "x", [0]);
            var opresult181 = callmethodChecked(call179, "==", [1], call177);
            var opresult183 = callmethodChecked(opresult181, "&&", [1], opresult175);
            return opresult183;
          };
          cases164.push(block165);
          setLineNumber(387);    // compilenode block
          var block184 = new GraceBlock(this, 387, 1);
          setLineNumber(1);    // compilenode identifier
          block184.real = function(var___95____95__5) {
            setLineNumber(387);    // compilenode identifier
            return GraceFalse;
          };
          cases164.push(block184);
          setLineNumber(385);    // compilematchcase
          var matchres164 = matchCase(var_other,cases164,false);
          setModuleName("StandardPrelude");
          return matchres164;
        };
        func163.paramCounts = [1];
        obj55.methods["=="] = func163;
        func163.definitionLine = 384;
        func163.definitionModule = "StandardPrelude";
        var func185 = function(argcv) {    // method prefix-
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for prefix-"));
          setModuleName("StandardPrelude");
          setLineNumber(389);    // compilenode call
          onSelf = true;
          var call186 = callmethodChecked(this, "x", [0]);
          var call187 = callmethodChecked(call186, "prefix-", [0]);
          onSelf = true;
          var call188 = callmethodChecked(this, "y", [0]);
          var call189 = callmethodChecked(call188, "prefix-", [0]);
          var call190 = callmethodChecked(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call191 = callmethodChecked(call190, "point2Dx()y", [1, 1], call187, call189);
          return call191;
        };
        func185.paramCounts = [0];
        obj55.methods["prefix-"] = func185;
        func185.definitionLine = 389;
        func185.definitionModule = "StandardPrelude";
        var func192 = function(argcv) {    // method dot(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_other = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for dot(1)"));
          // Start argument checking
          curarg = 1;
          setLineNumber(390);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Point, "match",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in dot (arg list 1), which corresponds to parameter other, does not have " + 
                      callmethod(var_Point, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("StandardPrelude");
          setLineNumber(392);    // compilenode identifier
          var call193 = callmethodChecked(var_other, "y", [0]);
          onSelf = true;
          var call195 = callmethodChecked(this, "y", [0]);
          var prod197 = callmethodChecked(call195, "*", [1], call193);
          var call199 = callmethodChecked(var_other, "x", [0]);
          onSelf = true;
          var call201 = callmethodChecked(this, "x", [0]);
          var prod203 = callmethodChecked(call201, "*", [1], call199);
          var opresult205 = callmethodChecked(prod203, "+", [1], prod197);
          if (!Grace_isTrue(callmethod(var_Number, "match", [1], opresult205)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method dot(1) does not have " + 
                      callmethod(var_Number, "asString", [0])._value + "."));
          return opresult205;
        };
        func192.paramTypes = [];
        func192.paramTypes.push([]);
        func192.paramCounts = [1];
        obj55.methods["dot"] = func192;
        func192.definitionLine = 390;
        func192.definitionModule = "StandardPrelude";
        var func206 = function(argcv) {    // method ⋅(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_other = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ⋅(1)"));
          // Start argument checking
          curarg = 1;
          setLineNumber(394);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Point, "match",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in ⋅ (arg list 1), which corresponds to parameter other, does not have " + 
                      callmethod(var_Point, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("StandardPrelude");
          setLineNumber(396);    // compilenode identifier
          var call207 = callmethodChecked(var_other, "y", [0]);
          onSelf = true;
          var call209 = callmethodChecked(this, "y", [0]);
          var prod211 = callmethodChecked(call209, "*", [1], call207);
          var call213 = callmethodChecked(var_other, "x", [0]);
          onSelf = true;
          var call215 = callmethodChecked(this, "x", [0]);
          var prod217 = callmethodChecked(call215, "*", [1], call213);
          var opresult219 = callmethodChecked(prod217, "+", [1], prod211);
          if (!Grace_isTrue(callmethod(var_Number, "match", [1], opresult219)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method ⋅(1) does not have " + 
                      callmethod(var_Number, "asString", [0])._value + "."));
          return opresult219;
        };
        func206.paramTypes = [];
        func206.paramTypes.push([]);
        func206.paramCounts = [1];
        obj55.methods["\u22c5"] = func206;
        func206.definitionLine = 394;
        func206.definitionModule = "StandardPrelude";
        setLineNumber(374);    // compilenode identifier
        obj55.data["x"] = var_x__39__;
        var reader_StandardPrelude_x220 = function() {
          return this.data["x"];
        };
        reader_StandardPrelude_x220.def = true;
        obj55.methods["x"] = reader_StandardPrelude_x220;
        setLineNumber(375);    // compilenode identifier
        obj55.data["y"] = var_y__39__;
        var reader_StandardPrelude_y221 = function() {
          return this.data["y"];
        };
        reader_StandardPrelude_y221.def = true;
        obj55.methods["y"] = reader_StandardPrelude_y221;
        superDepth = origSuperDepth;
      };
      obj_init_55.apply(obj55, []);
      return obj55;
    };
    func54.paramCounts = [1, 1];
    this.methods["point2Dx()y"] = func54;
    func54.definitionLine = 373;
    func54.definitionModule = "StandardPrelude";
      var func222 = function(argcv) {    // method point2Dx(1     )y(1     )()object
        var curarg = 1;
        var var_x__39__ = arguments[curarg];
        curarg++;
        var var_y__39__ = arguments[curarg];
        curarg++;
        var inheritingObject = arguments[curarg++];
        // Start argument processing
        curarg = 1;
        curarg++;
        curarg++;
        // End argument processing
        setModuleName("StandardPrelude");
        var returnTarget = invocationCount;
        invocationCount++;
        var obj223 = Grace_allocObject(GraceObject, "point2Dx()y");
        obj223.definitionModule = "StandardPrelude";
        obj223.definitionLine = 373;
        var inho223 = inheritingObject;
        while (inho223.superobj) inho223 = inho223.superobj;
        inho223.superobj = obj223;
        obj223.data = inheritingObject.data;
        if (inheritingObject.hasOwnProperty('_value'))
          obj223._value = inheritingObject._value;
        obj223.outer = this;
        var reader_StandardPrelude_outer224 = function() {
          return this.outer;
        };
        obj223.methods["outer"] = reader_StandardPrelude_outer224;
        var obj_init_223 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj223;
          var func225 = function(argcv) {    // method asString
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
            setModuleName("StandardPrelude");
            setLineNumber(376);    // compilenode string
            var string226 = new GraceString(")");
            onSelf = true;
            var call228 = callmethodChecked(this, "y", [0]);
            var string230 = new GraceString("@");
            onSelf = true;
            var call232 = callmethodChecked(this, "x", [0]);
            var string234 = new GraceString("(");
            var opresult236 = callmethodChecked(string234, "++", [1], call232);
            var opresult238 = callmethodChecked(opresult236, "++", [1], string230);
            var opresult240 = callmethodChecked(opresult238, "++", [1], call228);
            var opresult242 = callmethodChecked(opresult240, "++", [1], string226);
            return opresult242;
          };
          func225.paramCounts = [0];
          obj223.methods["asString"] = func225;
          func225.definitionLine = 376;
          func225.definitionModule = "StandardPrelude";
          var func243 = function(argcv) {    // method asDebugString
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asDebugString"));
            setModuleName("StandardPrelude");
            setLineNumber(377);    // compilenode call
            onSelf = true;
            var call244 = callmethodChecked(this, "asString", [0]);
            return call244;
          };
          func243.paramCounts = [0];
          obj223.methods["asDebugString"] = func243;
          func243.definitionLine = 377;
          func243.definitionModule = "StandardPrelude";
          var func245 = function(argcv) {    // method distanceTo(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for distanceTo(1)"));
            // Start argument checking
            curarg = 1;
            setLineNumber(378);    // compilenode identifier
            if (!Grace_isTrue(callmethod(var_Point, "match",  [1], arguments[curarg])))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("argument 1 in distanceTo (arg list 1), which corresponds to parameter other, does not have " + 
                        callmethod(var_Point, "asString", [0])._value + "."));
            curarg++;
            // End argument checking
            setModuleName("StandardPrelude");
            var call248 = callmethodChecked(var_other, "y", [0]);
            onSelf = true;
            var call250 = callmethodChecked(this, "y", [0]);
            var diff252 = callmethodChecked(call250, "-", [1], call248);
            var opresult254 = callmethodChecked(diff252, "^", [1], new GraceNum(2));
            var call257 = callmethodChecked(var_other, "x", [0]);
            onSelf = true;
            var call259 = callmethodChecked(this, "x", [0]);
            var diff261 = callmethodChecked(call259, "-", [1], call257);
            var opresult263 = callmethodChecked(diff261, "^", [1], new GraceNum(2));
            var opresult265 = callmethodChecked(opresult263, "+", [1], opresult254);
            var opresult267 = callmethodChecked(opresult265, "^", [1], new GraceNum(0.5));
            return opresult267;
          };
          func245.paramTypes = [];
          func245.paramTypes.push([]);
          func245.paramCounts = [1];
          obj223.methods["distanceTo"] = func245;
          func245.definitionLine = 378;
          func245.definitionModule = "StandardPrelude";
          var func268 = function(argcv) {    // method -(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for -(1)"));
            // Start argument checking
            curarg = 1;
            setLineNumber(379);    // compilenode identifier
            if (!Grace_isTrue(callmethod(var_Point, "match",  [1], arguments[curarg])))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("argument 1 in - (arg list 1), which corresponds to parameter other, does not have " + 
                        callmethod(var_Point, "asString", [0])._value + "."));
            curarg++;
            // End argument checking
            setModuleName("StandardPrelude");
            var call269 = callmethodChecked(var_other, "x", [0]);
            onSelf = true;
            var call271 = callmethodChecked(this, "x", [0]);
            var diff273 = callmethodChecked(call271, "-", [1], call269);
            var call274 = callmethodChecked(var_other, "y", [0]);
            onSelf = true;
            var call276 = callmethodChecked(this, "y", [0]);
            var diff278 = callmethodChecked(call276, "-", [1], call274);
            var call279 = callmethodChecked(superDepth, "outer", [0]);
            onOuter = true;
            onSelf = true;
            var call280 = callmethodChecked(call279, "point2Dx()y", [1, 1], diff273, diff278);
            return call280;
          };
          func268.paramTypes = [];
          func268.paramTypes.push([]);
          func268.paramCounts = [1];
          obj223.methods["-"] = func268;
          func268.definitionLine = 379;
          func268.definitionModule = "StandardPrelude";
          var func281 = function(argcv) {    // method +(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for +(1)"));
            // Start argument checking
            curarg = 1;
            setLineNumber(380);    // compilenode identifier
            if (!Grace_isTrue(callmethod(var_Point, "match",  [1], arguments[curarg])))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("argument 1 in + (arg list 1), which corresponds to parameter other, does not have " + 
                        callmethod(var_Point, "asString", [0])._value + "."));
            curarg++;
            // End argument checking
            setModuleName("StandardPrelude");
            var call282 = callmethodChecked(var_other, "x", [0]);
            onSelf = true;
            var call284 = callmethodChecked(this, "x", [0]);
            var opresult286 = callmethodChecked(call284, "+", [1], call282);
            var call287 = callmethodChecked(var_other, "y", [0]);
            onSelf = true;
            var call289 = callmethodChecked(this, "y", [0]);
            var opresult291 = callmethodChecked(call289, "+", [1], call287);
            var call292 = callmethodChecked(superDepth, "outer", [0]);
            onOuter = true;
            onSelf = true;
            var call293 = callmethodChecked(call292, "point2Dx()y", [1, 1], opresult286, opresult291);
            return call293;
          };
          func281.paramTypes = [];
          func281.paramTypes.push([]);
          func281.paramCounts = [1];
          obj223.methods["+"] = func281;
          func281.definitionLine = 380;
          func281.definitionModule = "StandardPrelude";
          var func294 = function(argcv) {    // method /(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for /(1)"));
            // Start argument checking
            curarg = 1;
            setLineNumber(381);    // compilenode identifier
            if (!Grace_isTrue(callmethod(var_Number, "match",  [1], arguments[curarg])))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("argument 1 in / (arg list 1), which corresponds to parameter other, does not have " + 
                        callmethod(var_Number, "asString", [0])._value + "."));
            curarg++;
            // End argument checking
            setModuleName("StandardPrelude");
            onSelf = true;
            var call296 = callmethodChecked(this, "x", [0]);
            var quotient298 = callmethodChecked(call296, "/", [1], var_other);
            onSelf = true;
            var call300 = callmethodChecked(this, "y", [0]);
            var quotient302 = callmethodChecked(call300, "/", [1], var_other);
            var call303 = callmethodChecked(superDepth, "outer", [0]);
            onOuter = true;
            onSelf = true;
            var call304 = callmethodChecked(call303, "point2Dx()y", [1, 1], quotient298, quotient302);
            return call304;
          };
          func294.paramTypes = [];
          func294.paramTypes.push([type_Number, "other"]);
          func294.paramCounts = [1];
          obj223.methods["/"] = func294;
          func294.definitionLine = 381;
          func294.definitionModule = "StandardPrelude";
          var func305 = function(argcv) {    // method *(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for *(1)"));
            // Start argument checking
            curarg = 1;
            setLineNumber(382);    // compilenode identifier
            if (!Grace_isTrue(callmethod(var_Number, "match",  [1], arguments[curarg])))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("argument 1 in * (arg list 1), which corresponds to parameter other, does not have " + 
                        callmethod(var_Number, "asString", [0])._value + "."));
            curarg++;
            // End argument checking
            setModuleName("StandardPrelude");
            onSelf = true;
            var call307 = callmethodChecked(this, "x", [0]);
            var prod309 = callmethodChecked(call307, "*", [1], var_other);
            onSelf = true;
            var call311 = callmethodChecked(this, "y", [0]);
            var prod313 = callmethodChecked(call311, "*", [1], var_other);
            var call314 = callmethodChecked(superDepth, "outer", [0]);
            onOuter = true;
            onSelf = true;
            var call315 = callmethodChecked(call314, "point2Dx()y", [1, 1], prod309, prod313);
            return call315;
          };
          func305.paramTypes = [];
          func305.paramTypes.push([type_Number, "other"]);
          func305.paramCounts = [1];
          obj223.methods["*"] = func305;
          func305.definitionLine = 382;
          func305.definitionModule = "StandardPrelude";
          var func316 = function(argcv) {    // method length
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for length"));
            setModuleName("StandardPrelude");
            setLineNumber(383);    // compilenode call
            onSelf = true;
            var call319 = callmethodChecked(this, "y", [0]);
            var opresult321 = callmethodChecked(call319, "^", [1], new GraceNum(2));
            onSelf = true;
            var call324 = callmethodChecked(this, "x", [0]);
            var opresult326 = callmethodChecked(call324, "^", [1], new GraceNum(2));
            var opresult328 = callmethodChecked(opresult326, "+", [1], opresult321);
            var opresult330 = callmethodChecked(opresult328, "^", [1], new GraceNum(0.5));
            return opresult330;
          };
          func316.paramCounts = [0];
          obj223.methods["length"] = func316;
          func316.definitionLine = 383;
          func316.definitionModule = "StandardPrelude";
          var func331 = function(argcv) {    // method ==(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ==(1)"));
            setModuleName("StandardPrelude");
            setLineNumber(385);    // compilenode identifier
            var cases332 = [];
            setLineNumber(386);    // compilenode block
            var block333 = new GraceBlock(this, 386, 1);
            setLineNumber(0);    // compilenode string
            var string334 = new GraceString("o");
            var call335 = callmethodChecked(var_prelude, "VariablePattern", [0]);
            var call336 = callmethodChecked(call335, "new", [1], string334);
            var call337 = callmethodChecked(var_prelude, "AndPattern", [0]);
            var call338 = callmethodChecked(call337, "new", [2], call336, var_Point);
            block333.pattern = call338;
            setLineNumber(386);    // compilenode identifier
            block333.paramTypes = [var_Point];
            block333.real = function(var_o) {
              var call339 = callmethodChecked(var_o, "y", [0]);
              onSelf = true;
              var call341 = callmethodChecked(this, "y", [0]);
              var opresult343 = callmethodChecked(call341, "==", [1], call339);
              var call345 = callmethodChecked(var_o, "x", [0]);
              onSelf = true;
              var call347 = callmethodChecked(this, "x", [0]);
              var opresult349 = callmethodChecked(call347, "==", [1], call345);
              var opresult351 = callmethodChecked(opresult349, "&&", [1], opresult343);
              return opresult351;
            };
            cases332.push(block333);
            setLineNumber(387);    // compilenode block
            var block352 = new GraceBlock(this, 387, 1);
            setLineNumber(1);    // compilenode identifier
            block352.real = function(var___95____95__5) {
              setLineNumber(387);    // compilenode identifier
              return GraceFalse;
            };
            cases332.push(block352);
            setLineNumber(385);    // compilematchcase
            var matchres332 = matchCase(var_other,cases332,false);
            setModuleName("StandardPrelude");
            return matchres332;
          };
          func331.paramCounts = [1];
          obj223.methods["=="] = func331;
          func331.definitionLine = 384;
          func331.definitionModule = "StandardPrelude";
          var func353 = function(argcv) {    // method prefix-
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for prefix-"));
            setModuleName("StandardPrelude");
            setLineNumber(389);    // compilenode call
            onSelf = true;
            var call354 = callmethodChecked(this, "x", [0]);
            var call355 = callmethodChecked(call354, "prefix-", [0]);
            onSelf = true;
            var call356 = callmethodChecked(this, "y", [0]);
            var call357 = callmethodChecked(call356, "prefix-", [0]);
            var call358 = callmethodChecked(superDepth, "outer", [0]);
            onOuter = true;
            onSelf = true;
            var call359 = callmethodChecked(call358, "point2Dx()y", [1, 1], call355, call357);
            return call359;
          };
          func353.paramCounts = [0];
          obj223.methods["prefix-"] = func353;
          func353.definitionLine = 389;
          func353.definitionModule = "StandardPrelude";
          var func360 = function(argcv) {    // method dot(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for dot(1)"));
            // Start argument checking
            curarg = 1;
            setLineNumber(390);    // compilenode identifier
            if (!Grace_isTrue(callmethod(var_Point, "match",  [1], arguments[curarg])))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("argument 1 in dot (arg list 1), which corresponds to parameter other, does not have " + 
                        callmethod(var_Point, "asString", [0])._value + "."));
            curarg++;
            // End argument checking
            setModuleName("StandardPrelude");
            setLineNumber(392);    // compilenode identifier
            var call361 = callmethodChecked(var_other, "y", [0]);
            onSelf = true;
            var call363 = callmethodChecked(this, "y", [0]);
            var prod365 = callmethodChecked(call363, "*", [1], call361);
            var call367 = callmethodChecked(var_other, "x", [0]);
            onSelf = true;
            var call369 = callmethodChecked(this, "x", [0]);
            var prod371 = callmethodChecked(call369, "*", [1], call367);
            var opresult373 = callmethodChecked(prod371, "+", [1], prod365);
            if (!Grace_isTrue(callmethod(var_Number, "match", [1], opresult373)))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("result of method dot(1) does not have " + 
                        callmethod(var_Number, "asString", [0])._value + "."));
            return opresult373;
          };
          func360.paramTypes = [];
          func360.paramTypes.push([]);
          func360.paramCounts = [1];
          obj223.methods["dot"] = func360;
          func360.definitionLine = 390;
          func360.definitionModule = "StandardPrelude";
          var func374 = function(argcv) {    // method ⋅(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ⋅(1)"));
            // Start argument checking
            curarg = 1;
            setLineNumber(394);    // compilenode identifier
            if (!Grace_isTrue(callmethod(var_Point, "match",  [1], arguments[curarg])))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("argument 1 in ⋅ (arg list 1), which corresponds to parameter other, does not have " + 
                        callmethod(var_Point, "asString", [0])._value + "."));
            curarg++;
            // End argument checking
            setModuleName("StandardPrelude");
            setLineNumber(396);    // compilenode identifier
            var call375 = callmethodChecked(var_other, "y", [0]);
            onSelf = true;
            var call377 = callmethodChecked(this, "y", [0]);
            var prod379 = callmethodChecked(call377, "*", [1], call375);
            var call381 = callmethodChecked(var_other, "x", [0]);
            onSelf = true;
            var call383 = callmethodChecked(this, "x", [0]);
            var prod385 = callmethodChecked(call383, "*", [1], call381);
            var opresult387 = callmethodChecked(prod385, "+", [1], prod379);
            if (!Grace_isTrue(callmethod(var_Number, "match", [1], opresult387)))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("result of method ⋅(1) does not have " + 
                        callmethod(var_Number, "asString", [0])._value + "."));
            return opresult387;
          };
          func374.paramTypes = [];
          func374.paramTypes.push([]);
          func374.paramCounts = [1];
          obj223.methods["\u22c5"] = func374;
          func374.definitionLine = 394;
          func374.definitionModule = "StandardPrelude";
          setLineNumber(374);    // compilenode identifier
          obj223.data["x"] = var_x__39__;
          var reader_StandardPrelude_x388 = function() {
            return this.data["x"];
          };
          reader_StandardPrelude_x388.def = true;
          obj223.methods["x"] = reader_StandardPrelude_x388;
          setLineNumber(375);    // compilenode identifier
          obj223.data["y"] = var_y__39__;
          var reader_StandardPrelude_y389 = function() {
            return this.data["y"];
          };
          reader_StandardPrelude_y389.def = true;
          obj223.methods["y"] = reader_StandardPrelude_y389;
          superDepth = origSuperDepth;
        };
        obj_init_223.apply(inheritingObject, []);
        return obj223;
        };
        this.methods["point2Dx()y()object"] = func222;
      setLineNumber(445);    // compilenode method
      var func390 = function(argcv) {    // method sequence(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_arg = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for sequence(1)"));
        // Start type arguments
        var var_T = var_Unknown;
        if (argcv.length == 2) {
          if (argcv[1] !== 1) {
            throw new GraceExceptionPacket(ProgrammingErrorObject, 
                new GraceString("wrong number of type arguments for sequence(1)"));
          }
          var_T = arguments[curarg++];
        }
        // End type arguments
        setModuleName("StandardPrelude");
        setLineNumber(446);    // compilenode identifier
        var call391 = callmethodChecked(var_collections, "sequence", [0]);
        var call392 = callmethodChecked(call391, "withAll", [1], var_arg);
        return call392;
      };
      func390.paramCounts = [1];
      this.methods["sequence"] = func390;
      func390.definitionLine = 445;
      func390.definitionModule = "StandardPrelude";
      setLineNumber(451);    // compilenode method
      var func393 = function(argcv) {    // method list(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_arg = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for list(1)"));
        // Start type arguments
        var var_T = var_Unknown;
        if (argcv.length == 2) {
          if (argcv[1] !== 1) {
            throw new GraceExceptionPacket(ProgrammingErrorObject, 
                new GraceString("wrong number of type arguments for list(1)"));
          }
          var_T = arguments[curarg++];
        }
        // End type arguments
        setModuleName("StandardPrelude");
        setLineNumber(452);    // compilenode identifier
        var call394 = callmethodChecked(var_collections, "list", [0]);
        var call395 = callmethodChecked(call394, "withAll", [1], var_arg);
        return call395;
      };
      func393.paramCounts = [1];
      this.methods["list"] = func393;
      func393.definitionLine = 451;
      func393.definitionModule = "StandardPrelude";
      setLineNumber(454);    // compilenode method
      var func396 = function(argcv) {    // method emptyList
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for emptyList"));
        setModuleName("StandardPrelude");
        var call397 = callmethodChecked(var_collections, "list", [0]);
        var call398 = callmethodChecked(call397, "empty", [0]);
        return call398;
      };
      func396.paramCounts = [0];
      this.methods["emptyList"] = func396;
      func396.definitionLine = 454;
      func396.definitionModule = "StandardPrelude";
      setLineNumber(456);    // compilenode method
      var func399 = function(argcv) {    // method set(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_arg = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for set(1)"));
        // Start type arguments
        var var_T = var_Unknown;
        if (argcv.length == 2) {
          if (argcv[1] !== 1) {
            throw new GraceExceptionPacket(ProgrammingErrorObject, 
                new GraceString("wrong number of type arguments for set(1)"));
          }
          var_T = arguments[curarg++];
        }
        // End type arguments
        setModuleName("StandardPrelude");
        setLineNumber(457);    // compilenode identifier
        var call400 = callmethodChecked(var_collections, "set", [0]);
        var call401 = callmethodChecked(call400, "withAll", [1], var_arg);
        return call401;
      };
      func399.paramCounts = [1];
      this.methods["set"] = func399;
      func399.definitionLine = 456;
      func399.definitionModule = "StandardPrelude";
      setLineNumber(459);    // compilenode method
      var func402 = function(argcv) {    // method emptySet
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for emptySet"));
        setModuleName("StandardPrelude");
        var call403 = callmethodChecked(var_collections, "set", [0]);
        var call404 = callmethodChecked(call403, "empty", [0]);
        return call404;
      };
      func402.paramCounts = [0];
      this.methods["emptySet"] = func402;
      func402.definitionLine = 459;
      func402.definitionModule = "StandardPrelude";
      setLineNumber(461);    // compilenode method
      var func405 = function(argcv) {    // method dictionary(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_arg = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for dictionary(1)"));
        // Start type arguments
        var var_K = var_Unknown;
        var var_T = var_Unknown;
        if (argcv.length == 2) {
          if (argcv[1] !== 2) {
            throw new GraceExceptionPacket(ProgrammingErrorObject, 
                new GraceString("wrong number of type arguments for dictionary(1)"));
          }
          var_K = arguments[curarg++];
          var_T = arguments[curarg++];
        }
        // End type arguments
        setModuleName("StandardPrelude");
        setLineNumber(462);    // compilenode identifier
        var call406 = callmethodChecked(var_collections, "dictionary", [0]);
        var call407 = callmethodChecked(call406, "withAll", [1], var_arg);
        return call407;
      };
      func405.paramCounts = [1];
      this.methods["dictionary"] = func405;
      func405.definitionLine = 461;
      func405.definitionModule = "StandardPrelude";
      setLineNumber(464);    // compilenode method
      var func408 = function(argcv) {    // method emptyDictionary
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for emptyDictionary"));
        setModuleName("StandardPrelude");
        var call409 = callmethodChecked(var_collections, "dictionary", [0]);
        var call410 = callmethodChecked(call409, "empty", [0]);
        return call410;
      };
      func408.paramCounts = [0];
      this.methods["emptyDictionary"] = func408;
      func408.definitionLine = 464;
      func408.definitionModule = "StandardPrelude";
      setLineNumber(469);    // compilenode method
      var func411 = function(argcv) {    // method methods
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for methods"));
        setModuleName("StandardPrelude");
        setLineNumber(470);    // compilenode identifier
        var call412 = callmethodChecked(var_prelude, "clone", [1], this);
        return call412;
      };
      func411.paramCounts = [0];
      this.methods["methods"] = func411;
      func411.definitionLine = 469;
      func411.definitionModule = "StandardPrelude";
        var func413 = function(argcv) {    // method methods()object
          var curarg = 1;
          var inheritingObject = arguments[curarg++];
          // Start argument processing
          curarg = 1;
          // End argument processing
          setModuleName("StandardPrelude");
          var returnTarget = invocationCount;
          invocationCount++;
          var call414 = callmethodChecked(var_prelude, "clone", [1], this);
          return call414;
          };
          this.methods["methods()object"] = func413;
        setLineNumber(4);    // compilenode identifier
        var var_isStandardPrelude = GraceTrue;
        setLineNumber(464);    // compilenode method
        var func415 = function(argcv) {    // method isStandardPrelude
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isStandardPrelude"));
          setModuleName("StandardPrelude");
          // isStandardPrelude is a simple accessor - elide try ... catch
          setLineNumber(4);    // compilenode identifier
          return var_isStandardPrelude;
        };
        func415.paramCounts = [0];
        this.methods["isStandardPrelude"] = func415;
        func415.definitionLine = 464;
        func415.definitionModule = "StandardPrelude";
        setLineNumber(464);    // compilenode method
        var func416 = function(argcv) {    // method isStandardPrelude:=(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var___95__var__95__assign__95__tmp = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isStandardPrelude:=(1)"));
          setModuleName("StandardPrelude");
          var_isStandardPrelude = var___95__var__95__assign__95__tmp;
          return GraceDone;
        };
        func416.paramCounts = [1];
        this.methods["isStandardPrelude:="] = func416;
        func416.definitionLine = 464;
        func416.definitionModule = "StandardPrelude";
        this.methods["isStandardPrelude"].debug = "var";
        setLineNumber(6);    // compilenode object
        var obj417 = Grace_allocObject(GraceObject, "SuccessfulMatch");
        obj417.definitionModule = "StandardPrelude";
        obj417.definitionLine = 6;
        obj417.outer = this;
        var reader_StandardPrelude_outer418 = function() {
          return this.outer;
        };
        obj417.methods["outer"] = reader_StandardPrelude_outer418;
        var obj_init_417 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj417;
          var func419 = function(argcv) {    // method new(2)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_result__39__ = arguments[curarg];
            curarg++;
            var var_bindings__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !== 2)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for new(2)"));
            setModuleName("StandardPrelude");
            var obj420 = Grace_allocObject(null, "SuccessfulMatch.SuccessfulMatch.new");
            obj420.definitionModule = "StandardPrelude";
            obj420.definitionLine = 6;
            obj420.outer = this;
            var reader_StandardPrelude_outer421 = function() {
              return this.outer;
            };
            obj420.methods["outer"] = reader_StandardPrelude_outer421;
            var obj_init_420 = function() {
              var origSuperDepth = superDepth;
              superDepth = obj420;
              var func422 = function(argcv) {    // method result
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                if (argcv[0] !== 0)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for result"));
                setModuleName("StandardPrelude");
                // result is a simple accessor - elide try ... catch
                setLineNumber(8);    // compilenode identifier
                return var_result__39__;
              };
              func422.paramCounts = [0];
              obj420.methods["result"] = func422;
              func422.definitionLine = 8;
              func422.definitionModule = "StandardPrelude";
              var func423 = function(argcv) {    // method bindings
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                if (argcv[0] !== 0)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for bindings"));
                setModuleName("StandardPrelude");
                // bindings is a simple accessor - elide try ... catch
                setLineNumber(9);    // compilenode identifier
                return var_bindings__39__;
              };
              func423.paramCounts = [0];
              obj420.methods["bindings"] = func423;
              func423.definitionLine = 9;
              func423.definitionModule = "StandardPrelude";
              var func424 = function(argcv) {    // method asString
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                if (argcv[0] !== 0)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                setModuleName("StandardPrelude");
                setLineNumber(11);    // compilenode string
                var string425 = new GraceString(")");
                onSelf = true;
                var call427 = callmethodChecked(this, "bindings", [0]);
                var string429 = new GraceString(", bindings = ");
                onSelf = true;
                var call431 = callmethodChecked(this, "result", [0]);
                var string433 = new GraceString("SuccessfulMatch(result = ");
                var opresult435 = callmethodChecked(string433, "++", [1], call431);
                var opresult437 = callmethodChecked(opresult435, "++", [1], string429);
                var opresult439 = callmethodChecked(opresult437, "++", [1], call427);
                var opresult441 = callmethodChecked(opresult439, "++", [1], string425);
                return opresult441;
              };
              func424.paramCounts = [0];
              obj420.methods["asString"] = func424;
              func424.definitionLine = 10;
              func424.definitionModule = "StandardPrelude";
              setLineNumber(7);    // compilenode identifier
              obj420.superobj = GraceTrue;
              if (GraceTrue.data) obj420.data = GraceTrue.data;
              if (GraceTrue.hasOwnProperty('_value'))
                  obj420._value = GraceTrue._value;
              superDepth = origSuperDepth;
            };
            obj_init_420.apply(obj420, []);
            return obj420;
          };
          func419.paramCounts = [2];
          obj417.methods["new"] = func419;
          func419.definitionLine = 6;
          func419.definitionModule = "StandardPrelude";
            var func442 = function(argcv) {    // method new(2     )()object
              var curarg = 1;
              var var_result__39__ = arguments[curarg];
              curarg++;
              var var_bindings__39__ = arguments[curarg];
              curarg++;
              var inheritingObject = arguments[curarg++];
              // Start argument processing
              curarg = 1;
              curarg++;
              curarg++;
              // End argument processing
              setModuleName("StandardPrelude");
              var returnTarget = invocationCount;
              invocationCount++;
              var obj443 = Grace_allocObject(null, "new");
              obj443.definitionModule = "StandardPrelude";
              obj443.definitionLine = 6;
              var inho443 = inheritingObject;
              while (inho443.superobj) inho443 = inho443.superobj;
              inho443.superobj = obj443;
              obj443.data = inheritingObject.data;
              if (inheritingObject.hasOwnProperty('_value'))
                obj443._value = inheritingObject._value;
              obj443.outer = this;
              var reader_StandardPrelude_outer444 = function() {
                return this.outer;
              };
              obj443.methods["outer"] = reader_StandardPrelude_outer444;
              var obj_init_443 = function() {
                var origSuperDepth = superDepth;
                superDepth = obj443;
                var func445 = function(argcv) {    // method result
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  if (argcv[0] !== 0)
                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for result"));
                  setModuleName("StandardPrelude");
                  // result is a simple accessor - elide try ... catch
                  setLineNumber(8);    // compilenode identifier
                  return var_result__39__;
                };
                func445.paramCounts = [0];
                obj443.methods["result"] = func445;
                func445.definitionLine = 8;
                func445.definitionModule = "StandardPrelude";
                var func446 = function(argcv) {    // method bindings
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  if (argcv[0] !== 0)
                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for bindings"));
                  setModuleName("StandardPrelude");
                  // bindings is a simple accessor - elide try ... catch
                  setLineNumber(9);    // compilenode identifier
                  return var_bindings__39__;
                };
                func446.paramCounts = [0];
                obj443.methods["bindings"] = func446;
                func446.definitionLine = 9;
                func446.definitionModule = "StandardPrelude";
                var func447 = function(argcv) {    // method asString
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  if (argcv[0] !== 0)
                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                  setModuleName("StandardPrelude");
                  setLineNumber(11);    // compilenode string
                  var string448 = new GraceString(")");
                  onSelf = true;
                  var call450 = callmethodChecked(this, "bindings", [0]);
                  var string452 = new GraceString(", bindings = ");
                  onSelf = true;
                  var call454 = callmethodChecked(this, "result", [0]);
                  var string456 = new GraceString("SuccessfulMatch(result = ");
                  var opresult458 = callmethodChecked(string456, "++", [1], call454);
                  var opresult460 = callmethodChecked(opresult458, "++", [1], string452);
                  var opresult462 = callmethodChecked(opresult460, "++", [1], call450);
                  var opresult464 = callmethodChecked(opresult462, "++", [1], string448);
                  return opresult464;
                };
                func447.paramCounts = [0];
                obj443.methods["asString"] = func447;
                func447.definitionLine = 10;
                func447.definitionModule = "StandardPrelude";
                setLineNumber(7);    // compilenode identifier
                obj443.superobj = GraceTrue;
                if (GraceTrue.data) obj443.data = GraceTrue.data;
                if (GraceTrue.hasOwnProperty('_value'))
                    obj443._value = GraceTrue._value;
                superDepth = origSuperDepth;
              };
              obj_init_443.apply(inheritingObject, []);
              return obj443;
              };
              obj417.methods["new()object"] = func442;
            var func465 = function(argcv) {    // method 
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("StandardPrelude");
              setLineNumber(6);    // compilenode string
              var string466 = new GraceString("class SuccessfulMatch");
              return string466;
            };
            func465.paramCounts = [];
            obj417.methods["asString"] = func465;
            func465.definitionLine = 6;
            func465.definitionModule = "StandardPrelude";
            superDepth = origSuperDepth;
          };
          obj_init_417.apply(obj417, []);
          var var_SuccessfulMatch = obj417;
          setLineNumber(11);    // compilenode method
          var func467 = function(argcv) {    // method SuccessfulMatch
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for SuccessfulMatch"));
            setModuleName("StandardPrelude");
            // SuccessfulMatch is a simple accessor - elide try ... catch
            setLineNumber(6);    // compilenode identifier
            return var_SuccessfulMatch;
          };
          func467.paramCounts = [0];
          this.methods["SuccessfulMatch"] = func467;
          func467.definitionLine = 11;
          func467.definitionModule = "StandardPrelude";
          this.methods["SuccessfulMatch"].debug = "def";
          setLineNumber(15);    // compilenode object
          var obj468 = Grace_allocObject(GraceObject, "FailedMatch");
          obj468.definitionModule = "StandardPrelude";
          obj468.definitionLine = 15;
          obj468.outer = this;
          var reader_StandardPrelude_outer469 = function() {
            return this.outer;
          };
          obj468.methods["outer"] = reader_StandardPrelude_outer469;
          var obj_init_468 = function() {
            var origSuperDepth = superDepth;
            superDepth = obj468;
            var func470 = function(argcv) {    // method new(1)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_result__39__ = arguments[curarg];
              curarg++;
              if (argcv[0] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for new(1)"));
              setModuleName("StandardPrelude");
              var obj471 = Grace_allocObject(null, "FailedMatch.FailedMatch.new");
              obj471.definitionModule = "StandardPrelude";
              obj471.definitionLine = 15;
              obj471.outer = this;
              var reader_StandardPrelude_outer472 = function() {
                return this.outer;
              };
              obj471.methods["outer"] = reader_StandardPrelude_outer472;
              var obj_init_471 = function() {
                var origSuperDepth = superDepth;
                superDepth = obj471;
                var func473 = function(argcv) {    // method result
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  if (argcv[0] !== 0)
                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for result"));
                  setModuleName("StandardPrelude");
                  // result is a simple accessor - elide try ... catch
                  setLineNumber(17);    // compilenode identifier
                  return var_result__39__;
                };
                func473.paramCounts = [0];
                obj471.methods["result"] = func473;
                func473.definitionLine = 17;
                func473.definitionModule = "StandardPrelude";
                var func474 = function(argcv) {    // method bindings
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  if (argcv[0] !== 0)
                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for bindings"));
                  setModuleName("StandardPrelude");
                  // bindings is a simple accessor - elide try ... catch
                  setLineNumber(18);    // compilenode identifier
                  return var_emptySequence;
                };
                func474.paramCounts = [0];
                obj471.methods["bindings"] = func474;
                func474.definitionLine = 18;
                func474.definitionModule = "StandardPrelude";
                var func475 = function(argcv) {    // method asString
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  if (argcv[0] !== 0)
                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                  setModuleName("StandardPrelude");
                  setLineNumber(20);    // compilenode string
                  var string476 = new GraceString(")");
                  onSelf = true;
                  var call478 = callmethodChecked(this, "result", [0]);
                  var string480 = new GraceString("FailedMatch(result = ");
                  var opresult482 = callmethodChecked(string480, "++", [1], call478);
                  var opresult484 = callmethodChecked(opresult482, "++", [1], string476);
                  return opresult484;
                };
                func475.paramCounts = [0];
                obj471.methods["asString"] = func475;
                func475.definitionLine = 19;
                func475.definitionModule = "StandardPrelude";
                setLineNumber(16);    // compilenode identifier
                obj471.superobj = GraceFalse;
                if (GraceFalse.data) obj471.data = GraceFalse.data;
                if (GraceFalse.hasOwnProperty('_value'))
                    obj471._value = GraceFalse._value;
                superDepth = origSuperDepth;
              };
              obj_init_471.apply(obj471, []);
              return obj471;
            };
            func470.paramCounts = [1];
            obj468.methods["new"] = func470;
            func470.definitionLine = 15;
            func470.definitionModule = "StandardPrelude";
              var func485 = function(argcv) {    // method new(1     )()object
                var curarg = 1;
                var var_result__39__ = arguments[curarg];
                curarg++;
                var inheritingObject = arguments[curarg++];
                // Start argument processing
                curarg = 1;
                curarg++;
                // End argument processing
                setModuleName("StandardPrelude");
                var returnTarget = invocationCount;
                invocationCount++;
                var obj486 = Grace_allocObject(null, "new");
                obj486.definitionModule = "StandardPrelude";
                obj486.definitionLine = 15;
                var inho486 = inheritingObject;
                while (inho486.superobj) inho486 = inho486.superobj;
                inho486.superobj = obj486;
                obj486.data = inheritingObject.data;
                if (inheritingObject.hasOwnProperty('_value'))
                  obj486._value = inheritingObject._value;
                obj486.outer = this;
                var reader_StandardPrelude_outer487 = function() {
                  return this.outer;
                };
                obj486.methods["outer"] = reader_StandardPrelude_outer487;
                var obj_init_486 = function() {
                  var origSuperDepth = superDepth;
                  superDepth = obj486;
                  var func488 = function(argcv) {    // method result
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    if (argcv[0] !== 0)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for result"));
                    setModuleName("StandardPrelude");
                    // result is a simple accessor - elide try ... catch
                    setLineNumber(17);    // compilenode identifier
                    return var_result__39__;
                  };
                  func488.paramCounts = [0];
                  obj486.methods["result"] = func488;
                  func488.definitionLine = 17;
                  func488.definitionModule = "StandardPrelude";
                  var func489 = function(argcv) {    // method bindings
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    if (argcv[0] !== 0)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for bindings"));
                    setModuleName("StandardPrelude");
                    // bindings is a simple accessor - elide try ... catch
                    setLineNumber(18);    // compilenode identifier
                    return var_emptySequence;
                  };
                  func489.paramCounts = [0];
                  obj486.methods["bindings"] = func489;
                  func489.definitionLine = 18;
                  func489.definitionModule = "StandardPrelude";
                  var func490 = function(argcv) {    // method asString
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    if (argcv[0] !== 0)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                    setModuleName("StandardPrelude");
                    setLineNumber(20);    // compilenode string
                    var string491 = new GraceString(")");
                    onSelf = true;
                    var call493 = callmethodChecked(this, "result", [0]);
                    var string495 = new GraceString("FailedMatch(result = ");
                    var opresult497 = callmethodChecked(string495, "++", [1], call493);
                    var opresult499 = callmethodChecked(opresult497, "++", [1], string491);
                    return opresult499;
                  };
                  func490.paramCounts = [0];
                  obj486.methods["asString"] = func490;
                  func490.definitionLine = 19;
                  func490.definitionModule = "StandardPrelude";
                  setLineNumber(16);    // compilenode identifier
                  obj486.superobj = GraceFalse;
                  if (GraceFalse.data) obj486.data = GraceFalse.data;
                  if (GraceFalse.hasOwnProperty('_value'))
                      obj486._value = GraceFalse._value;
                  superDepth = origSuperDepth;
                };
                obj_init_486.apply(inheritingObject, []);
                return obj486;
                };
                obj468.methods["new()object"] = func485;
              var func500 = function(argcv) {    // method 
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                setModuleName("StandardPrelude");
                setLineNumber(15);    // compilenode string
                var string501 = new GraceString("class FailedMatch");
                return string501;
              };
              func500.paramCounts = [];
              obj468.methods["asString"] = func500;
              func500.definitionLine = 15;
              func500.definitionModule = "StandardPrelude";
              superDepth = origSuperDepth;
            };
            obj_init_468.apply(obj468, []);
            var var_FailedMatch = obj468;
            setLineNumber(20);    // compilenode method
            var func502 = function(argcv) {    // method FailedMatch
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for FailedMatch"));
              setModuleName("StandardPrelude");
              // FailedMatch is a simple accessor - elide try ... catch
              setLineNumber(15);    // compilenode identifier
              return var_FailedMatch;
            };
            func502.paramCounts = [0];
            this.methods["FailedMatch"] = func502;
            func502.definitionLine = 20;
            func502.definitionModule = "StandardPrelude";
            this.methods["FailedMatch"].debug = "def";
            setLineNumber(71);    // compilenode object
            var obj503 = Grace_allocObject(GraceObject, "BasicPattern");
            obj503.definitionModule = "StandardPrelude";
            obj503.definitionLine = 71;
            obj503.outer = this;
            var reader_StandardPrelude_outer504 = function() {
              return this.outer;
            };
            obj503.methods["outer"] = reader_StandardPrelude_outer504;
            var obj_init_503 = function() {
              var origSuperDepth = superDepth;
              superDepth = obj503;
              var func505 = function(argcv) {    // method new
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                if (argcv[0] !== 0)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for new"));
                setModuleName("StandardPrelude");
                var obj506 = Grace_allocObject(GraceObject, "BasicPattern.BasicPattern.new");
                obj506.definitionModule = "StandardPrelude";
                obj506.definitionLine = 71;
                obj506.outer = this;
                var reader_StandardPrelude_outer507 = function() {
                  return this.outer;
                };
                obj506.methods["outer"] = reader_StandardPrelude_outer507;
                var obj_init_506 = function() {
                  var origSuperDepth = superDepth;
                  superDepth = obj506;
                  var func508 = function(argcv) {    // method &(1)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_o = arguments[curarg];
                    curarg++;
                    if (argcv[0] !== 1)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for &(1)"));
                    setModuleName("StandardPrelude");
                    setLineNumber(73);    // compilenode identifier
                    var call509 = callmethodChecked(var_AndPattern, "new", [2], this, var_o);
                    return call509;
                  };
                  func508.paramCounts = [1];
                  obj506.methods["&"] = func508;
                  func508.definitionLine = 72;
                  func508.definitionModule = "StandardPrelude";
                  var func510 = function(argcv) {    // method |(1)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_o = arguments[curarg];
                    curarg++;
                    if (argcv[0] !== 1)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for |(1)"));
                    setModuleName("StandardPrelude");
                    setLineNumber(76);    // compilenode identifier
                    var call511 = callmethodChecked(var_OrPattern, "new", [2], this, var_o);
                    return call511;
                  };
                  func510.paramCounts = [1];
                  obj506.methods["|"] = func510;
                  func510.definitionLine = 75;
                  func510.definitionModule = "StandardPrelude";
                  superDepth = origSuperDepth;
                };
                obj_init_506.apply(obj506, []);
                return obj506;
              };
              func505.paramCounts = [0];
              obj503.methods["new"] = func505;
              func505.definitionLine = 71;
              func505.definitionModule = "StandardPrelude";
                var func512 = function(argcv) {    // method new()object
                  var curarg = 1;
                  var inheritingObject = arguments[curarg++];
                  // Start argument processing
                  curarg = 1;
                  // End argument processing
                  setModuleName("StandardPrelude");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var obj513 = Grace_allocObject(GraceObject, "new");
                  obj513.definitionModule = "StandardPrelude";
                  obj513.definitionLine = 71;
                  var inho513 = inheritingObject;
                  while (inho513.superobj) inho513 = inho513.superobj;
                  inho513.superobj = obj513;
                  obj513.data = inheritingObject.data;
                  if (inheritingObject.hasOwnProperty('_value'))
                    obj513._value = inheritingObject._value;
                  obj513.outer = this;
                  var reader_StandardPrelude_outer514 = function() {
                    return this.outer;
                  };
                  obj513.methods["outer"] = reader_StandardPrelude_outer514;
                  var obj_init_513 = function() {
                    var origSuperDepth = superDepth;
                    superDepth = obj513;
                    var func515 = function(argcv) {    // method &(1)
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var curarg = 1;
                      var var_o = arguments[curarg];
                      curarg++;
                      if (argcv[0] !== 1)
                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for &(1)"));
                      setModuleName("StandardPrelude");
                      setLineNumber(73);    // compilenode identifier
                      var call516 = callmethodChecked(var_AndPattern, "new", [2], this, var_o);
                      return call516;
                    };
                    func515.paramCounts = [1];
                    obj513.methods["&"] = func515;
                    func515.definitionLine = 72;
                    func515.definitionModule = "StandardPrelude";
                    var func517 = function(argcv) {    // method |(1)
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var curarg = 1;
                      var var_o = arguments[curarg];
                      curarg++;
                      if (argcv[0] !== 1)
                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for |(1)"));
                      setModuleName("StandardPrelude");
                      setLineNumber(76);    // compilenode identifier
                      var call518 = callmethodChecked(var_OrPattern, "new", [2], this, var_o);
                      return call518;
                    };
                    func517.paramCounts = [1];
                    obj513.methods["|"] = func517;
                    func517.definitionLine = 75;
                    func517.definitionModule = "StandardPrelude";
                    superDepth = origSuperDepth;
                  };
                  obj_init_513.apply(inheritingObject, []);
                  return obj513;
                  };
                  obj503.methods["new()object"] = func512;
                var func519 = function(argcv) {    // method 
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  setModuleName("StandardPrelude");
                  setLineNumber(71);    // compilenode string
                  var string520 = new GraceString("class BasicPattern");
                  return string520;
                };
                func519.paramCounts = [];
                obj503.methods["asString"] = func519;
                func519.definitionLine = 71;
                func519.definitionModule = "StandardPrelude";
                superDepth = origSuperDepth;
              };
              obj_init_503.apply(obj503, []);
              var var_BasicPattern = obj503;
              setLineNumber(20);    // compilenode method
              var func521 = function(argcv) {    // method BasicPattern
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                if (argcv[0] !== 0)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for BasicPattern"));
                setModuleName("StandardPrelude");
                // BasicPattern is a simple accessor - elide try ... catch
                setLineNumber(71);    // compilenode identifier
                return var_BasicPattern;
              };
              func521.paramCounts = [0];
              this.methods["BasicPattern"] = func521;
              func521.definitionLine = 20;
              func521.definitionModule = "StandardPrelude";
              this.methods["BasicPattern"].debug = "def";
              setLineNumber(79);    // compilenode object
              var obj522 = Grace_allocObject(GraceObject, "MatchAndDestructuringPattern");
              obj522.definitionModule = "StandardPrelude";
              obj522.definitionLine = 79;
              obj522.outer = this;
              var reader_StandardPrelude_outer523 = function() {
                return this.outer;
              };
              obj522.methods["outer"] = reader_StandardPrelude_outer523;
              var obj_init_522 = function() {
                var origSuperDepth = superDepth;
                superDepth = obj522;
                var func524 = function(argcv) {    // method new(2)
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  var var_pat = arguments[curarg];
                  curarg++;
                  var var_items__39__ = arguments[curarg];
                  curarg++;
                  if (argcv[0] !== 2)
                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for new(2)"));
                  setModuleName("StandardPrelude");
                  var obj525 = Grace_allocObject(null, "MatchAndDestructuringPattern.MatchAndDestructuringPattern.new");
                  obj525.definitionModule = "StandardPrelude";
                  obj525.definitionLine = 79;
                  obj525.outer = this;
                  var reader_StandardPrelude_outer526 = function() {
                    return this.outer;
                  };
                  obj525.methods["outer"] = reader_StandardPrelude_outer526;
                  var obj_init_525 = function() {
                    var origSuperDepth = superDepth;
                    superDepth = obj525;
                    var func527 = function(argcv) {    // method match(1)
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var curarg = 1;
                      var var_o = arguments[curarg];
                      curarg++;
                      if (argcv[0] !== 1)
                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for match(1)"));
                      setModuleName("StandardPrelude");
                      setLineNumber(84);    // compilenode identifier
                      var call528 = callmethodChecked(var_pat, "match", [1], var_o);
                      var var_m = call528;
                      var if529 = GraceDone;
                      setLineNumber(85);    // compilenode identifier
                      if (Grace_isTrue(var_m)) {
                        setLineNumber(86);    // compilenode identifier
                        var call530 = callmethodChecked(var_m, "bindings", [0]);
                        var var_mbindings = call530;
                        setLineNumber(87);    // compilenode array
                        var array531 = new PrimitiveGraceList([]);
                        var var_bindings = array531;
                        var if532 = GraceDone;
                        setLineNumber(88);    // compilenode call
                        onSelf = true;
                        var call533 = callmethodChecked(this, "items", [0]);
                        var call534 = callmethodChecked(call533, "size", [0]);
                        var call536 = callmethodChecked(var_mbindings, "size", [0]);
                        var opresult538 = callmethodChecked(call536, "<", [1], call534);
                        if (Grace_isTrue(opresult538)) {
                          var if539 = GraceDone;
                          setLineNumber(89);    // compilenode identifier
                          var call540 = callmethodChecked(var_Extractable, "match", [1], var_o);
                          if (Grace_isTrue(call540)) {
                            setLineNumber(90);    // compilenode identifier
                            var call541 = callmethodChecked(var_o, "extract", [0]);
                            var_mbindings = call541;
                            if539 = GraceDone;
                          } else {
                            setLineNumber(92);    // compilenode identifier
                            var call542 = callmethodChecked(var_FailedMatch, "new", [1], var_o);
                            return call542;
                          }
                          if532 = if539;
                        }
                        setLineNumber(95);    // compilenode call
                        onSelf = true;
                        var call543 = callmethodChecked(this, "items", [0]);
                        var call544 = callmethodChecked(call543, "indices", [0]);
                        var block545 = new GraceBlock(this, 95, 1);
                        setLineNumber(1);    // compilenode identifier
                        block545.real = function(var_i) {
                          setLineNumber(96);    // compilenode identifier
                          var call546 = callmethodChecked(var_mbindings, "at", [1], var_i);
                          onSelf = true;
                          var call547 = callmethodChecked(this, "items", [0]);
                          var call548 = callmethodChecked(call547, "at", [1], var_i);
                          var call549 = callmethodChecked(call548, "match", [1], call546);
                          var var_b = call549;
                          var if550 = GraceDone;
                          setLineNumber(97);    // compilenode identifier
                          var call551 = callmethodChecked(var_b, "prefix!", [0]);
                          if (Grace_isTrue(call551)) {
                            setLineNumber(98);    // compilenode identifier
                            var call552 = callmethodChecked(var_FailedMatch, "new", [1], var_o);
                            throw new ReturnException(call552, returnTarget);
                          }
                          setLineNumber(100);    // compilenode identifier
                          var call553 = callmethodChecked(var_b, "bindings", [0]);
                          var block554 = new GraceBlock(this, 100, 1);
                          setLineNumber(1);    // compilenode identifier
                          block554.real = function(var_bb) {
                            setLineNumber(101);    // compilenode identifier
                            var call555 = callmethodChecked(var_bindings, "push", [1], var_bb);
                            return call555;
                          };
                          var call556 = callmethodChecked(var_prelude, "for()do", [1, 1], call553, block554);
                          return call556;
                        };
                        var call557 = callmethodChecked(var_prelude, "for()do", [1, 1], call544, block545);
                        setLineNumber(104);    // compilenode identifier
                        var call558 = callmethodChecked(var_SuccessfulMatch, "new", [2], var_o, var_bindings);
                        if529 = call558;
                      } else {
                        setLineNumber(106);    // compilenode identifier
                        var call559 = callmethodChecked(var_FailedMatch, "new", [1], var_o);
                        if529 = call559;
                      }
                      return if529;
                    };
                    func527.paramCounts = [1];
                    obj525.methods["match"] = func527;
                    func527.definitionLine = 83;
                    func527.definitionModule = "StandardPrelude";
                    setLineNumber(80);    // compilenode identifier
                    var call560 = callmethodChecked(var_BasicPattern, "new()object", [0, 1], this);
                    obj525.superobj = call560;
                    if (call560.data) obj525.data = call560.data;
                    if (call560.hasOwnProperty('_value'))
                        obj525._value = call560._value;
                    setLineNumber(81);    // compilenode identifier
                    obj525.data["pattern"] = var_pat;
                    var reader_StandardPrelude_pattern561 = function() {
                      return this.data["pattern"];
                    };
                    reader_StandardPrelude_pattern561.def = true;
                    reader_StandardPrelude_pattern561.confidential = true;
                    obj525.methods["pattern"] = reader_StandardPrelude_pattern561;
                    setLineNumber(82);    // compilenode identifier
                    obj525.data["items"] = var_items__39__;
                    var reader_StandardPrelude_items562 = function() {
                      return this.data["items"];
                    };
                    reader_StandardPrelude_items562.def = true;
                    reader_StandardPrelude_items562.confidential = true;
                    obj525.methods["items"] = reader_StandardPrelude_items562;
                    superDepth = origSuperDepth;
                  };
                  obj_init_525.apply(obj525, []);
                  return obj525;
                };
                func524.paramCounts = [2];
                obj522.methods["new"] = func524;
                func524.definitionLine = 79;
                func524.definitionModule = "StandardPrelude";
                  var func563 = function(argcv) {    // method new(2     )()object
                    var curarg = 1;
                    var var_pat = arguments[curarg];
                    curarg++;
                    var var_items__39__ = arguments[curarg];
                    curarg++;
                    var inheritingObject = arguments[curarg++];
                    // Start argument processing
                    curarg = 1;
                    curarg++;
                    curarg++;
                    // End argument processing
                    setModuleName("StandardPrelude");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var obj564 = Grace_allocObject(null, "new");
                    obj564.definitionModule = "StandardPrelude";
                    obj564.definitionLine = 79;
                    var inho564 = inheritingObject;
                    while (inho564.superobj) inho564 = inho564.superobj;
                    inho564.superobj = obj564;
                    obj564.data = inheritingObject.data;
                    if (inheritingObject.hasOwnProperty('_value'))
                      obj564._value = inheritingObject._value;
                    obj564.outer = this;
                    var reader_StandardPrelude_outer565 = function() {
                      return this.outer;
                    };
                    obj564.methods["outer"] = reader_StandardPrelude_outer565;
                    var obj_init_564 = function() {
                      var origSuperDepth = superDepth;
                      superDepth = obj564;
                      var func566 = function(argcv) {    // method match(1)
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var curarg = 1;
                        var var_o = arguments[curarg];
                        curarg++;
                        if (argcv[0] !== 1)
                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for match(1)"));
                        setModuleName("StandardPrelude");
                        setLineNumber(84);    // compilenode identifier
                        var call567 = callmethodChecked(var_pat, "match", [1], var_o);
                        var var_m = call567;
                        var if568 = GraceDone;
                        setLineNumber(85);    // compilenode identifier
                        if (Grace_isTrue(var_m)) {
                          setLineNumber(86);    // compilenode identifier
                          var call569 = callmethodChecked(var_m, "bindings", [0]);
                          var var_mbindings = call569;
                          setLineNumber(87);    // compilenode array
                          var array570 = new PrimitiveGraceList([]);
                          var var_bindings = array570;
                          var if571 = GraceDone;
                          setLineNumber(88);    // compilenode call
                          onSelf = true;
                          var call572 = callmethodChecked(this, "items", [0]);
                          var call573 = callmethodChecked(call572, "size", [0]);
                          var call575 = callmethodChecked(var_mbindings, "size", [0]);
                          var opresult577 = callmethodChecked(call575, "<", [1], call573);
                          if (Grace_isTrue(opresult577)) {
                            var if578 = GraceDone;
                            setLineNumber(89);    // compilenode identifier
                            var call579 = callmethodChecked(var_Extractable, "match", [1], var_o);
                            if (Grace_isTrue(call579)) {
                              setLineNumber(90);    // compilenode identifier
                              var call580 = callmethodChecked(var_o, "extract", [0]);
                              var_mbindings = call580;
                              if578 = GraceDone;
                            } else {
                              setLineNumber(92);    // compilenode identifier
                              var call581 = callmethodChecked(var_FailedMatch, "new", [1], var_o);
                              return call581;
                            }
                            if571 = if578;
                          }
                          setLineNumber(95);    // compilenode call
                          onSelf = true;
                          var call582 = callmethodChecked(this, "items", [0]);
                          var call583 = callmethodChecked(call582, "indices", [0]);
                          var block584 = new GraceBlock(this, 95, 1);
                          setLineNumber(1);    // compilenode identifier
                          block584.real = function(var_i) {
                            setLineNumber(96);    // compilenode identifier
                            var call585 = callmethodChecked(var_mbindings, "at", [1], var_i);
                            onSelf = true;
                            var call586 = callmethodChecked(this, "items", [0]);
                            var call587 = callmethodChecked(call586, "at", [1], var_i);
                            var call588 = callmethodChecked(call587, "match", [1], call585);
                            var var_b = call588;
                            var if589 = GraceDone;
                            setLineNumber(97);    // compilenode identifier
                            var call590 = callmethodChecked(var_b, "prefix!", [0]);
                            if (Grace_isTrue(call590)) {
                              setLineNumber(98);    // compilenode identifier
                              var call591 = callmethodChecked(var_FailedMatch, "new", [1], var_o);
                              throw new ReturnException(call591, returnTarget);
                            }
                            setLineNumber(100);    // compilenode identifier
                            var call592 = callmethodChecked(var_b, "bindings", [0]);
                            var block593 = new GraceBlock(this, 100, 1);
                            setLineNumber(1);    // compilenode identifier
                            block593.real = function(var_bb) {
                              setLineNumber(101);    // compilenode identifier
                              var call594 = callmethodChecked(var_bindings, "push", [1], var_bb);
                              return call594;
                            };
                            var call595 = callmethodChecked(var_prelude, "for()do", [1, 1], call592, block593);
                            return call595;
                          };
                          var call596 = callmethodChecked(var_prelude, "for()do", [1, 1], call583, block584);
                          setLineNumber(104);    // compilenode identifier
                          var call597 = callmethodChecked(var_SuccessfulMatch, "new", [2], var_o, var_bindings);
                          if568 = call597;
                        } else {
                          setLineNumber(106);    // compilenode identifier
                          var call598 = callmethodChecked(var_FailedMatch, "new", [1], var_o);
                          if568 = call598;
                        }
                        return if568;
                      };
                      func566.paramCounts = [1];
                      obj564.methods["match"] = func566;
                      func566.definitionLine = 83;
                      func566.definitionModule = "StandardPrelude";
                      setLineNumber(80);    // compilenode identifier
                      var call599 = callmethodChecked(var_BasicPattern, "new()object", [0, 1], this);
                      obj564.superobj = call599;
                      if (call599.data) obj564.data = call599.data;
                      if (call599.hasOwnProperty('_value'))
                          obj564._value = call599._value;
                      setLineNumber(81);    // compilenode identifier
                      obj564.data["pattern"] = var_pat;
                      var reader_StandardPrelude_pattern600 = function() {
                        return this.data["pattern"];
                      };
                      reader_StandardPrelude_pattern600.def = true;
                      reader_StandardPrelude_pattern600.confidential = true;
                      obj564.methods["pattern"] = reader_StandardPrelude_pattern600;
                      setLineNumber(82);    // compilenode identifier
                      obj564.data["items"] = var_items__39__;
                      var reader_StandardPrelude_items601 = function() {
                        return this.data["items"];
                      };
                      reader_StandardPrelude_items601.def = true;
                      reader_StandardPrelude_items601.confidential = true;
                      obj564.methods["items"] = reader_StandardPrelude_items601;
                      superDepth = origSuperDepth;
                    };
                    obj_init_564.apply(inheritingObject, []);
                    return obj564;
                    };
                    obj522.methods["new()object"] = func563;
                  var func602 = function(argcv) {    // method 
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    setModuleName("StandardPrelude");
                    setLineNumber(79);    // compilenode string
                    var string603 = new GraceString("class MatchAndDestructuringPattern");
                    return string603;
                  };
                  func602.paramCounts = [];
                  obj522.methods["asString"] = func602;
                  func602.definitionLine = 79;
                  func602.definitionModule = "StandardPrelude";
                  superDepth = origSuperDepth;
                };
                obj_init_522.apply(obj522, []);
                var var_MatchAndDestructuringPattern = obj522;
                setLineNumber(100);    // compilenode method
                var func604 = function(argcv) {    // method MatchAndDestructuringPattern
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  if (argcv[0] !== 0)
                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for MatchAndDestructuringPattern"));
                  setModuleName("StandardPrelude");
                  // MatchAndDestructuringPattern is a simple accessor - elide try ... catch
                  setLineNumber(79);    // compilenode identifier
                  return var_MatchAndDestructuringPattern;
                };
                func604.paramCounts = [0];
                this.methods["MatchAndDestructuringPattern"] = func604;
                func604.definitionLine = 100;
                func604.definitionModule = "StandardPrelude";
                this.methods["MatchAndDestructuringPattern"].debug = "def";
                setLineNumber(111);    // compilenode object
                var obj605 = Grace_allocObject(GraceObject, "VariablePattern");
                obj605.definitionModule = "StandardPrelude";
                obj605.definitionLine = 111;
                obj605.outer = this;
                var reader_StandardPrelude_outer606 = function() {
                  return this.outer;
                };
                obj605.methods["outer"] = reader_StandardPrelude_outer606;
                var obj_init_605 = function() {
                  var origSuperDepth = superDepth;
                  superDepth = obj605;
                  var func607 = function(argcv) {    // method new(1)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_nm = arguments[curarg];
                    curarg++;
                    if (argcv[0] !== 1)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for new(1)"));
                    setModuleName("StandardPrelude");
                    var obj608 = Grace_allocObject(null, "VariablePattern.VariablePattern.new");
                    obj608.definitionModule = "StandardPrelude";
                    obj608.definitionLine = 111;
                    obj608.outer = this;
                    var reader_StandardPrelude_outer609 = function() {
                      return this.outer;
                    };
                    obj608.methods["outer"] = reader_StandardPrelude_outer609;
                    var obj_init_608 = function() {
                      var origSuperDepth = superDepth;
                      superDepth = obj608;
                      var func610 = function(argcv) {    // method match(1)
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var curarg = 1;
                        var var_o = arguments[curarg];
                        curarg++;
                        if (argcv[0] !== 1)
                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for match(1)"));
                        setModuleName("StandardPrelude");
                        setLineNumber(114);    // compilenode identifier
                        var array611 = new PrimitiveGraceList([var_o]);
                        var call612 = callmethodChecked(var_SuccessfulMatch, "new", [2], var_o, array611);
                        return call612;
                      };
                      func610.paramCounts = [1];
                      obj608.methods["match"] = func610;
                      func610.definitionLine = 113;
                      func610.definitionModule = "StandardPrelude";
                      setLineNumber(112);    // compilenode identifier
                      var call613 = callmethodChecked(var_BasicPattern, "new()object", [0, 1], this);
                      obj608.superobj = call613;
                      if (call613.data) obj608.data = call613.data;
                      if (call613.hasOwnProperty('_value'))
                          obj608._value = call613._value;
                      superDepth = origSuperDepth;
                    };
                    obj_init_608.apply(obj608, []);
                    return obj608;
                  };
                  func607.paramCounts = [1];
                  obj605.methods["new"] = func607;
                  func607.definitionLine = 111;
                  func607.definitionModule = "StandardPrelude";
                    var func614 = function(argcv) {    // method new(1     )()object
                      var curarg = 1;
                      var var_nm = arguments[curarg];
                      curarg++;
                      var inheritingObject = arguments[curarg++];
                      // Start argument processing
                      curarg = 1;
                      curarg++;
                      // End argument processing
                      setModuleName("StandardPrelude");
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var obj615 = Grace_allocObject(null, "new");
                      obj615.definitionModule = "StandardPrelude";
                      obj615.definitionLine = 111;
                      var inho615 = inheritingObject;
                      while (inho615.superobj) inho615 = inho615.superobj;
                      inho615.superobj = obj615;
                      obj615.data = inheritingObject.data;
                      if (inheritingObject.hasOwnProperty('_value'))
                        obj615._value = inheritingObject._value;
                      obj615.outer = this;
                      var reader_StandardPrelude_outer616 = function() {
                        return this.outer;
                      };
                      obj615.methods["outer"] = reader_StandardPrelude_outer616;
                      var obj_init_615 = function() {
                        var origSuperDepth = superDepth;
                        superDepth = obj615;
                        var func617 = function(argcv) {    // method match(1)
                          var returnTarget = invocationCount;
                          invocationCount++;
                          var curarg = 1;
                          var var_o = arguments[curarg];
                          curarg++;
                          if (argcv[0] !== 1)
                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for match(1)"));
                          setModuleName("StandardPrelude");
                          setLineNumber(114);    // compilenode identifier
                          var array618 = new PrimitiveGraceList([var_o]);
                          var call619 = callmethodChecked(var_SuccessfulMatch, "new", [2], var_o, array618);
                          return call619;
                        };
                        func617.paramCounts = [1];
                        obj615.methods["match"] = func617;
                        func617.definitionLine = 113;
                        func617.definitionModule = "StandardPrelude";
                        setLineNumber(112);    // compilenode identifier
                        var call620 = callmethodChecked(var_BasicPattern, "new()object", [0, 1], this);
                        obj615.superobj = call620;
                        if (call620.data) obj615.data = call620.data;
                        if (call620.hasOwnProperty('_value'))
                            obj615._value = call620._value;
                        superDepth = origSuperDepth;
                      };
                      obj_init_615.apply(inheritingObject, []);
                      return obj615;
                      };
                      obj605.methods["new()object"] = func614;
                    var func621 = function(argcv) {    // method 
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var curarg = 1;
                      setModuleName("StandardPrelude");
                      setLineNumber(111);    // compilenode string
                      var string622 = new GraceString("class VariablePattern");
                      return string622;
                    };
                    func621.paramCounts = [];
                    obj605.methods["asString"] = func621;
                    func621.definitionLine = 111;
                    func621.definitionModule = "StandardPrelude";
                    superDepth = origSuperDepth;
                  };
                  obj_init_605.apply(obj605, []);
                  var var_VariablePattern = obj605;
                  setLineNumber(100);    // compilenode method
                  var func623 = function(argcv) {    // method VariablePattern
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    if (argcv[0] !== 0)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for VariablePattern"));
                    setModuleName("StandardPrelude");
                    // VariablePattern is a simple accessor - elide try ... catch
                    setLineNumber(111);    // compilenode identifier
                    return var_VariablePattern;
                  };
                  func623.paramCounts = [0];
                  this.methods["VariablePattern"] = func623;
                  func623.definitionLine = 100;
                  func623.definitionModule = "StandardPrelude";
                  this.methods["VariablePattern"].debug = "def";
                  setLineNumber(118);    // compilenode object
                  var obj624 = Grace_allocObject(GraceObject, "BindingPattern");
                  obj624.definitionModule = "StandardPrelude";
                  obj624.definitionLine = 118;
                  obj624.outer = this;
                  var reader_StandardPrelude_outer625 = function() {
                    return this.outer;
                  };
                  obj624.methods["outer"] = reader_StandardPrelude_outer625;
                  var obj_init_624 = function() {
                    var origSuperDepth = superDepth;
                    superDepth = obj624;
                    var func626 = function(argcv) {    // method new(1)
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var curarg = 1;
                      var var_pat = arguments[curarg];
                      curarg++;
                      if (argcv[0] !== 1)
                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for new(1)"));
                      setModuleName("StandardPrelude");
                      var obj627 = Grace_allocObject(null, "BindingPattern.BindingPattern.new");
                      obj627.definitionModule = "StandardPrelude";
                      obj627.definitionLine = 118;
                      obj627.outer = this;
                      var reader_StandardPrelude_outer628 = function() {
                        return this.outer;
                      };
                      obj627.methods["outer"] = reader_StandardPrelude_outer628;
                      var obj_init_627 = function() {
                        var origSuperDepth = superDepth;
                        superDepth = obj627;
                        var func629 = function(argcv) {    // method match(1)
                          var returnTarget = invocationCount;
                          invocationCount++;
                          var curarg = 1;
                          var var_o = arguments[curarg];
                          curarg++;
                          if (argcv[0] !== 1)
                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for match(1)"));
                          setModuleName("StandardPrelude");
                          setLineNumber(121);    // compilenode identifier
                          var array630 = new PrimitiveGraceList([var_o]);
                          var var_bindings = array630;
                          setLineNumber(122);    // compilenode identifier
                          var call631 = callmethodChecked(var_pat, "match", [1], var_o);
                          var var_m = call631;
                          var if632 = GraceDone;
                          setLineNumber(123);    // compilenode identifier
                          var call633 = callmethodChecked(var_m, "prefix!", [0]);
                          if (Grace_isTrue(call633)) {
                            setLineNumber(124);    // compilenode identifier
                            return var_m;
                          }
                          setLineNumber(126);    // compilenode identifier
                          var call634 = callmethodChecked(var_m, "bindings", [0]);
                          var block635 = new GraceBlock(this, 126, 1);
                          setLineNumber(1);    // compilenode identifier
                          block635.real = function(var_b) {
                            setLineNumber(127);    // compilenode identifier
                            var call636 = callmethodChecked(var_bindings, "push", [1], var_b);
                            return call636;
                          };
                          var call637 = callmethodChecked(var_prelude, "for()do", [1, 1], call634, block635);
                          setLineNumber(129);    // compilenode identifier
                          var call638 = callmethodChecked(var_SuccessfulMatch, "new", [2], var_o, var_bindings);
                          return call638;
                        };
                        func629.paramCounts = [1];
                        obj627.methods["match"] = func629;
                        func629.definitionLine = 120;
                        func629.definitionModule = "StandardPrelude";
                        setLineNumber(119);    // compilenode identifier
                        var call639 = callmethodChecked(var_BasicPattern, "new()object", [0, 1], this);
                        obj627.superobj = call639;
                        if (call639.data) obj627.data = call639.data;
                        if (call639.hasOwnProperty('_value'))
                            obj627._value = call639._value;
                        superDepth = origSuperDepth;
                      };
                      obj_init_627.apply(obj627, []);
                      return obj627;
                    };
                    func626.paramCounts = [1];
                    obj624.methods["new"] = func626;
                    func626.definitionLine = 118;
                    func626.definitionModule = "StandardPrelude";
                      var func640 = function(argcv) {    // method new(1     )()object
                        var curarg = 1;
                        var var_pat = arguments[curarg];
                        curarg++;
                        var inheritingObject = arguments[curarg++];
                        // Start argument processing
                        curarg = 1;
                        curarg++;
                        // End argument processing
                        setModuleName("StandardPrelude");
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var obj641 = Grace_allocObject(null, "new");
                        obj641.definitionModule = "StandardPrelude";
                        obj641.definitionLine = 118;
                        var inho641 = inheritingObject;
                        while (inho641.superobj) inho641 = inho641.superobj;
                        inho641.superobj = obj641;
                        obj641.data = inheritingObject.data;
                        if (inheritingObject.hasOwnProperty('_value'))
                          obj641._value = inheritingObject._value;
                        obj641.outer = this;
                        var reader_StandardPrelude_outer642 = function() {
                          return this.outer;
                        };
                        obj641.methods["outer"] = reader_StandardPrelude_outer642;
                        var obj_init_641 = function() {
                          var origSuperDepth = superDepth;
                          superDepth = obj641;
                          var func643 = function(argcv) {    // method match(1)
                            var returnTarget = invocationCount;
                            invocationCount++;
                            var curarg = 1;
                            var var_o = arguments[curarg];
                            curarg++;
                            if (argcv[0] !== 1)
                              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for match(1)"));
                            setModuleName("StandardPrelude");
                            setLineNumber(121);    // compilenode identifier
                            var array644 = new PrimitiveGraceList([var_o]);
                            var var_bindings = array644;
                            setLineNumber(122);    // compilenode identifier
                            var call645 = callmethodChecked(var_pat, "match", [1], var_o);
                            var var_m = call645;
                            var if646 = GraceDone;
                            setLineNumber(123);    // compilenode identifier
                            var call647 = callmethodChecked(var_m, "prefix!", [0]);
                            if (Grace_isTrue(call647)) {
                              setLineNumber(124);    // compilenode identifier
                              return var_m;
                            }
                            setLineNumber(126);    // compilenode identifier
                            var call648 = callmethodChecked(var_m, "bindings", [0]);
                            var block649 = new GraceBlock(this, 126, 1);
                            setLineNumber(1);    // compilenode identifier
                            block649.real = function(var_b) {
                              setLineNumber(127);    // compilenode identifier
                              var call650 = callmethodChecked(var_bindings, "push", [1], var_b);
                              return call650;
                            };
                            var call651 = callmethodChecked(var_prelude, "for()do", [1, 1], call648, block649);
                            setLineNumber(129);    // compilenode identifier
                            var call652 = callmethodChecked(var_SuccessfulMatch, "new", [2], var_o, var_bindings);
                            return call652;
                          };
                          func643.paramCounts = [1];
                          obj641.methods["match"] = func643;
                          func643.definitionLine = 120;
                          func643.definitionModule = "StandardPrelude";
                          setLineNumber(119);    // compilenode identifier
                          var call653 = callmethodChecked(var_BasicPattern, "new()object", [0, 1], this);
                          obj641.superobj = call653;
                          if (call653.data) obj641.data = call653.data;
                          if (call653.hasOwnProperty('_value'))
                              obj641._value = call653._value;
                          superDepth = origSuperDepth;
                        };
                        obj_init_641.apply(inheritingObject, []);
                        return obj641;
                        };
                        obj624.methods["new()object"] = func640;
                      var func654 = function(argcv) {    // method 
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var curarg = 1;
                        setModuleName("StandardPrelude");
                        setLineNumber(118);    // compilenode string
                        var string655 = new GraceString("class BindingPattern");
                        return string655;
                      };
                      func654.paramCounts = [];
                      obj624.methods["asString"] = func654;
                      func654.definitionLine = 118;
                      func654.definitionModule = "StandardPrelude";
                      superDepth = origSuperDepth;
                    };
                    obj_init_624.apply(obj624, []);
                    var var_BindingPattern = obj624;
                    setLineNumber(126);    // compilenode method
                    var func656 = function(argcv) {    // method BindingPattern
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var curarg = 1;
                      if (argcv[0] !== 0)
                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for BindingPattern"));
                      setModuleName("StandardPrelude");
                      // BindingPattern is a simple accessor - elide try ... catch
                      setLineNumber(118);    // compilenode identifier
                      return var_BindingPattern;
                    };
                    func656.paramCounts = [0];
                    this.methods["BindingPattern"] = func656;
                    func656.definitionLine = 126;
                    func656.definitionModule = "StandardPrelude";
                    this.methods["BindingPattern"].debug = "def";
                    setLineNumber(133);    // compilenode object
                    var obj657 = Grace_allocObject(GraceObject, "WildcardPattern");
                    obj657.definitionModule = "StandardPrelude";
                    obj657.definitionLine = 133;
                    obj657.outer = this;
                    var reader_StandardPrelude_outer658 = function() {
                      return this.outer;
                    };
                    obj657.methods["outer"] = reader_StandardPrelude_outer658;
                    var obj_init_657 = function() {
                      var origSuperDepth = superDepth;
                      superDepth = obj657;
                      var func659 = function(argcv) {    // method new
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var curarg = 1;
                        if (argcv[0] !== 0)
                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for new"));
                        setModuleName("StandardPrelude");
                        var obj660 = Grace_allocObject(null, "WildcardPattern.WildcardPattern.new");
                        obj660.definitionModule = "StandardPrelude";
                        obj660.definitionLine = 133;
                        obj660.outer = this;
                        var reader_StandardPrelude_outer661 = function() {
                          return this.outer;
                        };
                        obj660.methods["outer"] = reader_StandardPrelude_outer661;
                        var obj_init_660 = function() {
                          var origSuperDepth = superDepth;
                          superDepth = obj660;
                          var func662 = function(argcv) {    // method match(1)
                            var returnTarget = invocationCount;
                            invocationCount++;
                            var curarg = 1;
                            var var_o = arguments[curarg];
                            curarg++;
                            if (argcv[0] !== 1)
                              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for match(1)"));
                            setModuleName("StandardPrelude");
                            setLineNumber(136);    // compilenode array
                            var array663 = new PrimitiveGraceList([]);
                            var call664 = callmethodChecked(var_SuccessfulMatch, "new", [2], var_done, array663);
                            return call664;
                          };
                          func662.paramCounts = [1];
                          obj660.methods["match"] = func662;
                          func662.definitionLine = 135;
                          func662.definitionModule = "StandardPrelude";
                          setLineNumber(134);    // compilenode identifier
                          var call665 = callmethodChecked(var_BasicPattern, "new()object", [0, 1], this);
                          obj660.superobj = call665;
                          if (call665.data) obj660.data = call665.data;
                          if (call665.hasOwnProperty('_value'))
                              obj660._value = call665._value;
                          superDepth = origSuperDepth;
                        };
                        obj_init_660.apply(obj660, []);
                        return obj660;
                      };
                      func659.paramCounts = [0];
                      obj657.methods["new"] = func659;
                      func659.definitionLine = 133;
                      func659.definitionModule = "StandardPrelude";
                        var func666 = function(argcv) {    // method new()object
                          var curarg = 1;
                          var inheritingObject = arguments[curarg++];
                          // Start argument processing
                          curarg = 1;
                          // End argument processing
                          setModuleName("StandardPrelude");
                          var returnTarget = invocationCount;
                          invocationCount++;
                          var obj667 = Grace_allocObject(null, "new");
                          obj667.definitionModule = "StandardPrelude";
                          obj667.definitionLine = 133;
                          var inho667 = inheritingObject;
                          while (inho667.superobj) inho667 = inho667.superobj;
                          inho667.superobj = obj667;
                          obj667.data = inheritingObject.data;
                          if (inheritingObject.hasOwnProperty('_value'))
                            obj667._value = inheritingObject._value;
                          obj667.outer = this;
                          var reader_StandardPrelude_outer668 = function() {
                            return this.outer;
                          };
                          obj667.methods["outer"] = reader_StandardPrelude_outer668;
                          var obj_init_667 = function() {
                            var origSuperDepth = superDepth;
                            superDepth = obj667;
                            var func669 = function(argcv) {    // method match(1)
                              var returnTarget = invocationCount;
                              invocationCount++;
                              var curarg = 1;
                              var var_o = arguments[curarg];
                              curarg++;
                              if (argcv[0] !== 1)
                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for match(1)"));
                              setModuleName("StandardPrelude");
                              setLineNumber(136);    // compilenode array
                              var array670 = new PrimitiveGraceList([]);
                              var call671 = callmethodChecked(var_SuccessfulMatch, "new", [2], var_done, array670);
                              return call671;
                            };
                            func669.paramCounts = [1];
                            obj667.methods["match"] = func669;
                            func669.definitionLine = 135;
                            func669.definitionModule = "StandardPrelude";
                            setLineNumber(134);    // compilenode identifier
                            var call672 = callmethodChecked(var_BasicPattern, "new()object", [0, 1], this);
                            obj667.superobj = call672;
                            if (call672.data) obj667.data = call672.data;
                            if (call672.hasOwnProperty('_value'))
                                obj667._value = call672._value;
                            superDepth = origSuperDepth;
                          };
                          obj_init_667.apply(inheritingObject, []);
                          return obj667;
                          };
                          obj657.methods["new()object"] = func666;
                        var func673 = function(argcv) {    // method 
                          var returnTarget = invocationCount;
                          invocationCount++;
                          var curarg = 1;
                          setModuleName("StandardPrelude");
                          setLineNumber(133);    // compilenode string
                          var string674 = new GraceString("class WildcardPattern");
                          return string674;
                        };
                        func673.paramCounts = [];
                        obj657.methods["asString"] = func673;
                        func673.definitionLine = 133;
                        func673.definitionModule = "StandardPrelude";
                        superDepth = origSuperDepth;
                      };
                      obj_init_657.apply(obj657, []);
                      var var_WildcardPattern = obj657;
                      setLineNumber(126);    // compilenode method
                      var func675 = function(argcv) {    // method WildcardPattern
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var curarg = 1;
                        if (argcv[0] !== 0)
                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for WildcardPattern"));
                        setModuleName("StandardPrelude");
                        // WildcardPattern is a simple accessor - elide try ... catch
                        setLineNumber(133);    // compilenode identifier
                        return var_WildcardPattern;
                      };
                      func675.paramCounts = [0];
                      this.methods["WildcardPattern"] = func675;
                      func675.definitionLine = 126;
                      func675.definitionModule = "StandardPrelude";
                      this.methods["WildcardPattern"].debug = "def";
                      setLineNumber(140);    // compilenode object
                      var obj676 = Grace_allocObject(GraceObject, "AndPattern");
                      obj676.definitionModule = "StandardPrelude";
                      obj676.definitionLine = 140;
                      obj676.outer = this;
                      var reader_StandardPrelude_outer677 = function() {
                        return this.outer;
                      };
                      obj676.methods["outer"] = reader_StandardPrelude_outer677;
                      var obj_init_676 = function() {
                        var origSuperDepth = superDepth;
                        superDepth = obj676;
                        var func678 = function(argcv) {    // method new(2)
                          var returnTarget = invocationCount;
                          invocationCount++;
                          var curarg = 1;
                          var var_p1 = arguments[curarg];
                          curarg++;
                          var var_p2 = arguments[curarg];
                          curarg++;
                          if (argcv[0] !== 2)
                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for new(2)"));
                          setModuleName("StandardPrelude");
                          var obj679 = Grace_allocObject(null, "AndPattern.AndPattern.new");
                          obj679.definitionModule = "StandardPrelude";
                          obj679.definitionLine = 140;
                          obj679.outer = this;
                          var reader_StandardPrelude_outer680 = function() {
                            return this.outer;
                          };
                          obj679.methods["outer"] = reader_StandardPrelude_outer680;
                          var obj_init_679 = function() {
                            var origSuperDepth = superDepth;
                            superDepth = obj679;
                            var func681 = function(argcv) {    // method match(1)
                              var returnTarget = invocationCount;
                              invocationCount++;
                              var curarg = 1;
                              var var_o = arguments[curarg];
                              curarg++;
                              if (argcv[0] !== 1)
                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for match(1)"));
                              setModuleName("StandardPrelude");
                              setLineNumber(143);    // compilenode identifier
                              var call682 = callmethodChecked(var_p1, "match", [1], var_o);
                              var var_m1 = call682;
                              var if683 = GraceDone;
                              setLineNumber(144);    // compilenode identifier
                              var call684 = callmethodChecked(var_m1, "prefix!", [0]);
                              if (Grace_isTrue(call684)) {
                                setLineNumber(145);    // compilenode identifier
                                return var_m1;
                              }
                              setLineNumber(147);    // compilenode identifier
                              var call685 = callmethodChecked(var_p2, "match", [1], var_o);
                              var var_m2 = call685;
                              var if686 = GraceDone;
                              setLineNumber(148);    // compilenode identifier
                              var call687 = callmethodChecked(var_m2, "prefix!", [0]);
                              if (Grace_isTrue(call687)) {
                                setLineNumber(149);    // compilenode identifier
                                return var_m2;
                              }
                              setLineNumber(151);    // compilenode array
                              var array688 = new PrimitiveGraceList([]);
                              var var_bindings = array688;
                              setLineNumber(152);    // compilenode identifier
                              var call689 = callmethodChecked(var_m1, "bindings", [0]);
                              var block690 = new GraceBlock(this, 152, 1);
                              setLineNumber(1);    // compilenode identifier
                              block690.real = function(var_b) {
                                setLineNumber(153);    // compilenode identifier
                                var call691 = callmethodChecked(var_bindings, "push", [1], var_b);
                                return call691;
                              };
                              var call692 = callmethodChecked(var_prelude, "for()do", [1, 1], call689, block690);
                              setLineNumber(155);    // compilenode identifier
                              var call693 = callmethodChecked(var_m2, "bindings", [0]);
                              var block694 = new GraceBlock(this, 155, 1);
                              setLineNumber(1);    // compilenode identifier
                              block694.real = function(var_b) {
                                setLineNumber(156);    // compilenode identifier
                                var call695 = callmethodChecked(var_bindings, "push", [1], var_b);
                                return call695;
                              };
                              var call696 = callmethodChecked(var_prelude, "for()do", [1, 1], call693, block694);
                              setLineNumber(158);    // compilenode identifier
                              var call697 = callmethodChecked(var_SuccessfulMatch, "new", [2], var_o, var_bindings);
                              return call697;
                            };
                            func681.paramCounts = [1];
                            obj679.methods["match"] = func681;
                            func681.definitionLine = 142;
                            func681.definitionModule = "StandardPrelude";
                            setLineNumber(141);    // compilenode identifier
                            var call698 = callmethodChecked(var_BasicPattern, "new()object", [0, 1], this);
                            obj679.superobj = call698;
                            if (call698.data) obj679.data = call698.data;
                            if (call698.hasOwnProperty('_value'))
                                obj679._value = call698._value;
                            superDepth = origSuperDepth;
                          };
                          obj_init_679.apply(obj679, []);
                          return obj679;
                        };
                        func678.paramCounts = [2];
                        obj676.methods["new"] = func678;
                        func678.definitionLine = 140;
                        func678.definitionModule = "StandardPrelude";
                          var func699 = function(argcv) {    // method new(2     )()object
                            var curarg = 1;
                            var var_p1 = arguments[curarg];
                            curarg++;
                            var var_p2 = arguments[curarg];
                            curarg++;
                            var inheritingObject = arguments[curarg++];
                            // Start argument processing
                            curarg = 1;
                            curarg++;
                            curarg++;
                            // End argument processing
                            setModuleName("StandardPrelude");
                            var returnTarget = invocationCount;
                            invocationCount++;
                            var obj700 = Grace_allocObject(null, "new");
                            obj700.definitionModule = "StandardPrelude";
                            obj700.definitionLine = 140;
                            var inho700 = inheritingObject;
                            while (inho700.superobj) inho700 = inho700.superobj;
                            inho700.superobj = obj700;
                            obj700.data = inheritingObject.data;
                            if (inheritingObject.hasOwnProperty('_value'))
                              obj700._value = inheritingObject._value;
                            obj700.outer = this;
                            var reader_StandardPrelude_outer701 = function() {
                              return this.outer;
                            };
                            obj700.methods["outer"] = reader_StandardPrelude_outer701;
                            var obj_init_700 = function() {
                              var origSuperDepth = superDepth;
                              superDepth = obj700;
                              var func702 = function(argcv) {    // method match(1)
                                var returnTarget = invocationCount;
                                invocationCount++;
                                var curarg = 1;
                                var var_o = arguments[curarg];
                                curarg++;
                                if (argcv[0] !== 1)
                                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for match(1)"));
                                setModuleName("StandardPrelude");
                                setLineNumber(143);    // compilenode identifier
                                var call703 = callmethodChecked(var_p1, "match", [1], var_o);
                                var var_m1 = call703;
                                var if704 = GraceDone;
                                setLineNumber(144);    // compilenode identifier
                                var call705 = callmethodChecked(var_m1, "prefix!", [0]);
                                if (Grace_isTrue(call705)) {
                                  setLineNumber(145);    // compilenode identifier
                                  return var_m1;
                                }
                                setLineNumber(147);    // compilenode identifier
                                var call706 = callmethodChecked(var_p2, "match", [1], var_o);
                                var var_m2 = call706;
                                var if707 = GraceDone;
                                setLineNumber(148);    // compilenode identifier
                                var call708 = callmethodChecked(var_m2, "prefix!", [0]);
                                if (Grace_isTrue(call708)) {
                                  setLineNumber(149);    // compilenode identifier
                                  return var_m2;
                                }
                                setLineNumber(151);    // compilenode array
                                var array709 = new PrimitiveGraceList([]);
                                var var_bindings = array709;
                                setLineNumber(152);    // compilenode identifier
                                var call710 = callmethodChecked(var_m1, "bindings", [0]);
                                var block711 = new GraceBlock(this, 152, 1);
                                setLineNumber(1);    // compilenode identifier
                                block711.real = function(var_b) {
                                  setLineNumber(153);    // compilenode identifier
                                  var call712 = callmethodChecked(var_bindings, "push", [1], var_b);
                                  return call712;
                                };
                                var call713 = callmethodChecked(var_prelude, "for()do", [1, 1], call710, block711);
                                setLineNumber(155);    // compilenode identifier
                                var call714 = callmethodChecked(var_m2, "bindings", [0]);
                                var block715 = new GraceBlock(this, 155, 1);
                                setLineNumber(1);    // compilenode identifier
                                block715.real = function(var_b) {
                                  setLineNumber(156);    // compilenode identifier
                                  var call716 = callmethodChecked(var_bindings, "push", [1], var_b);
                                  return call716;
                                };
                                var call717 = callmethodChecked(var_prelude, "for()do", [1, 1], call714, block715);
                                setLineNumber(158);    // compilenode identifier
                                var call718 = callmethodChecked(var_SuccessfulMatch, "new", [2], var_o, var_bindings);
                                return call718;
                              };
                              func702.paramCounts = [1];
                              obj700.methods["match"] = func702;
                              func702.definitionLine = 142;
                              func702.definitionModule = "StandardPrelude";
                              setLineNumber(141);    // compilenode identifier
                              var call719 = callmethodChecked(var_BasicPattern, "new()object", [0, 1], this);
                              obj700.superobj = call719;
                              if (call719.data) obj700.data = call719.data;
                              if (call719.hasOwnProperty('_value'))
                                  obj700._value = call719._value;
                              superDepth = origSuperDepth;
                            };
                            obj_init_700.apply(inheritingObject, []);
                            return obj700;
                            };
                            obj676.methods["new()object"] = func699;
                          var func720 = function(argcv) {    // method 
                            var returnTarget = invocationCount;
                            invocationCount++;
                            var curarg = 1;
                            setModuleName("StandardPrelude");
                            setLineNumber(140);    // compilenode string
                            var string721 = new GraceString("class AndPattern");
                            return string721;
                          };
                          func720.paramCounts = [];
                          obj676.methods["asString"] = func720;
                          func720.definitionLine = 140;
                          func720.definitionModule = "StandardPrelude";
                          superDepth = origSuperDepth;
                        };
                        obj_init_676.apply(obj676, []);
                        var var_AndPattern = obj676;
                        setLineNumber(155);    // compilenode method
                        var func722 = function(argcv) {    // method AndPattern
                          var returnTarget = invocationCount;
                          invocationCount++;
                          var curarg = 1;
                          if (argcv[0] !== 0)
                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for AndPattern"));
                          setModuleName("StandardPrelude");
                          // AndPattern is a simple accessor - elide try ... catch
                          setLineNumber(140);    // compilenode identifier
                          return var_AndPattern;
                        };
                        func722.paramCounts = [0];
                        this.methods["AndPattern"] = func722;
                        func722.definitionLine = 155;
                        func722.definitionModule = "StandardPrelude";
                        this.methods["AndPattern"].debug = "def";
                        setLineNumber(162);    // compilenode object
                        var obj723 = Grace_allocObject(GraceObject, "OrPattern");
                        obj723.definitionModule = "StandardPrelude";
                        obj723.definitionLine = 162;
                        obj723.outer = this;
                        var reader_StandardPrelude_outer724 = function() {
                          return this.outer;
                        };
                        obj723.methods["outer"] = reader_StandardPrelude_outer724;
                        var obj_init_723 = function() {
                          var origSuperDepth = superDepth;
                          superDepth = obj723;
                          var func725 = function(argcv) {    // method new(2)
                            var returnTarget = invocationCount;
                            invocationCount++;
                            var curarg = 1;
                            var var_p1 = arguments[curarg];
                            curarg++;
                            var var_p2 = arguments[curarg];
                            curarg++;
                            if (argcv[0] !== 2)
                              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for new(2)"));
                            setModuleName("StandardPrelude");
                            var obj726 = Grace_allocObject(null, "OrPattern.OrPattern.new");
                            obj726.definitionModule = "StandardPrelude";
                            obj726.definitionLine = 162;
                            obj726.outer = this;
                            var reader_StandardPrelude_outer727 = function() {
                              return this.outer;
                            };
                            obj726.methods["outer"] = reader_StandardPrelude_outer727;
                            var obj_init_726 = function() {
                              var origSuperDepth = superDepth;
                              superDepth = obj726;
                              var func728 = function(argcv) {    // method match(1)
                                var returnTarget = invocationCount;
                                invocationCount++;
                                var curarg = 1;
                                var var_o = arguments[curarg];
                                curarg++;
                                if (argcv[0] !== 1)
                                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for match(1)"));
                                setModuleName("StandardPrelude");
                                var if729 = GraceDone;
                                setLineNumber(165);    // compilenode identifier
                                var call730 = callmethodChecked(var_p1, "match", [1], var_o);
                                if (Grace_isTrue(call730)) {
                                  setLineNumber(166);    // compilenode array
                                  var array731 = new PrimitiveGraceList([]);
                                  var call732 = callmethodChecked(var_SuccessfulMatch, "new", [2], var_o, array731);
                                  return call732;
                                }
                                var if733 = GraceDone;
                                setLineNumber(168);    // compilenode identifier
                                var call734 = callmethodChecked(var_p2, "match", [1], var_o);
                                if (Grace_isTrue(call734)) {
                                  setLineNumber(169);    // compilenode array
                                  var array735 = new PrimitiveGraceList([]);
                                  var call736 = callmethodChecked(var_SuccessfulMatch, "new", [2], var_o, array735);
                                  return call736;
                                }
                                setLineNumber(171);    // compilenode identifier
                                var call737 = callmethodChecked(var_FailedMatch, "new", [1], var_o);
                                return call737;
                              };
                              func728.paramCounts = [1];
                              obj726.methods["match"] = func728;
                              func728.definitionLine = 164;
                              func728.definitionModule = "StandardPrelude";
                              setLineNumber(163);    // compilenode identifier
                              var call738 = callmethodChecked(var_BasicPattern, "new()object", [0, 1], this);
                              obj726.superobj = call738;
                              if (call738.data) obj726.data = call738.data;
                              if (call738.hasOwnProperty('_value'))
                                  obj726._value = call738._value;
                              superDepth = origSuperDepth;
                            };
                            obj_init_726.apply(obj726, []);
                            return obj726;
                          };
                          func725.paramCounts = [2];
                          obj723.methods["new"] = func725;
                          func725.definitionLine = 162;
                          func725.definitionModule = "StandardPrelude";
                            var func739 = function(argcv) {    // method new(2     )()object
                              var curarg = 1;
                              var var_p1 = arguments[curarg];
                              curarg++;
                              var var_p2 = arguments[curarg];
                              curarg++;
                              var inheritingObject = arguments[curarg++];
                              // Start argument processing
                              curarg = 1;
                              curarg++;
                              curarg++;
                              // End argument processing
                              setModuleName("StandardPrelude");
                              var returnTarget = invocationCount;
                              invocationCount++;
                              var obj740 = Grace_allocObject(null, "new");
                              obj740.definitionModule = "StandardPrelude";
                              obj740.definitionLine = 162;
                              var inho740 = inheritingObject;
                              while (inho740.superobj) inho740 = inho740.superobj;
                              inho740.superobj = obj740;
                              obj740.data = inheritingObject.data;
                              if (inheritingObject.hasOwnProperty('_value'))
                                obj740._value = inheritingObject._value;
                              obj740.outer = this;
                              var reader_StandardPrelude_outer741 = function() {
                                return this.outer;
                              };
                              obj740.methods["outer"] = reader_StandardPrelude_outer741;
                              var obj_init_740 = function() {
                                var origSuperDepth = superDepth;
                                superDepth = obj740;
                                var func742 = function(argcv) {    // method match(1)
                                  var returnTarget = invocationCount;
                                  invocationCount++;
                                  var curarg = 1;
                                  var var_o = arguments[curarg];
                                  curarg++;
                                  if (argcv[0] !== 1)
                                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for match(1)"));
                                  setModuleName("StandardPrelude");
                                  var if743 = GraceDone;
                                  setLineNumber(165);    // compilenode identifier
                                  var call744 = callmethodChecked(var_p1, "match", [1], var_o);
                                  if (Grace_isTrue(call744)) {
                                    setLineNumber(166);    // compilenode array
                                    var array745 = new PrimitiveGraceList([]);
                                    var call746 = callmethodChecked(var_SuccessfulMatch, "new", [2], var_o, array745);
                                    return call746;
                                  }
                                  var if747 = GraceDone;
                                  setLineNumber(168);    // compilenode identifier
                                  var call748 = callmethodChecked(var_p2, "match", [1], var_o);
                                  if (Grace_isTrue(call748)) {
                                    setLineNumber(169);    // compilenode array
                                    var array749 = new PrimitiveGraceList([]);
                                    var call750 = callmethodChecked(var_SuccessfulMatch, "new", [2], var_o, array749);
                                    return call750;
                                  }
                                  setLineNumber(171);    // compilenode identifier
                                  var call751 = callmethodChecked(var_FailedMatch, "new", [1], var_o);
                                  return call751;
                                };
                                func742.paramCounts = [1];
                                obj740.methods["match"] = func742;
                                func742.definitionLine = 164;
                                func742.definitionModule = "StandardPrelude";
                                setLineNumber(163);    // compilenode identifier
                                var call752 = callmethodChecked(var_BasicPattern, "new()object", [0, 1], this);
                                obj740.superobj = call752;
                                if (call752.data) obj740.data = call752.data;
                                if (call752.hasOwnProperty('_value'))
                                    obj740._value = call752._value;
                                superDepth = origSuperDepth;
                              };
                              obj_init_740.apply(inheritingObject, []);
                              return obj740;
                              };
                              obj723.methods["new()object"] = func739;
                            var func753 = function(argcv) {    // method 
                              var returnTarget = invocationCount;
                              invocationCount++;
                              var curarg = 1;
                              setModuleName("StandardPrelude");
                              setLineNumber(162);    // compilenode string
                              var string754 = new GraceString("class OrPattern");
                              return string754;
                            };
                            func753.paramCounts = [];
                            obj723.methods["asString"] = func753;
                            func753.definitionLine = 162;
                            func753.definitionModule = "StandardPrelude";
                            superDepth = origSuperDepth;
                          };
                          obj_init_723.apply(obj723, []);
                          var var_OrPattern = obj723;
                          setLineNumber(155);    // compilenode method
                          var func755 = function(argcv) {    // method OrPattern
                            var returnTarget = invocationCount;
                            invocationCount++;
                            var curarg = 1;
                            if (argcv[0] !== 0)
                              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for OrPattern"));
                            setModuleName("StandardPrelude");
                            // OrPattern is a simple accessor - elide try ... catch
                            setLineNumber(162);    // compilenode identifier
                            return var_OrPattern;
                          };
                          func755.paramCounts = [0];
                          this.methods["OrPattern"] = func755;
                          func755.definitionLine = 155;
                          func755.definitionModule = "StandardPrelude";
                          this.methods["OrPattern"].debug = "def";
                          setLineNumber(175);    // compilenode object
                          var obj756 = Grace_allocObject(GraceObject, "Singleton");
                          obj756.definitionModule = "StandardPrelude";
                          obj756.definitionLine = 175;
                          obj756.outer = this;
                          var reader_StandardPrelude_outer757 = function() {
                            return this.outer;
                          };
                          obj756.methods["outer"] = reader_StandardPrelude_outer757;
                          var obj_init_756 = function() {
                            var origSuperDepth = superDepth;
                            superDepth = obj756;
                            var func758 = function(argcv) {    // method new
                              var returnTarget = invocationCount;
                              invocationCount++;
                              var curarg = 1;
                              if (argcv[0] !== 0)
                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for new"));
                              setModuleName("StandardPrelude");
                              setLineNumber(176);    // compilenode object
                              var obj759 = Grace_allocObject(null, "Singleton.identifierBinding‹new›");
                              obj759.definitionModule = "StandardPrelude";
                              obj759.definitionLine = 176;
                              obj759.outer = this;
                              var reader_StandardPrelude_outer760 = function() {
                                return this.outer;
                              };
                              obj759.methods["outer"] = reader_StandardPrelude_outer760;
                              var obj_init_759 = function() {
                                var origSuperDepth = superDepth;
                                superDepth = obj759;
                                var func761 = function(argcv) {    // method match(1)
                                  var returnTarget = invocationCount;
                                  invocationCount++;
                                  var curarg = 1;
                                  var var_other = arguments[curarg];
                                  curarg++;
                                  if (argcv[0] !== 1)
                                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for match(1)"));
                                  setModuleName("StandardPrelude");
                                  var if762 = GraceDone;
                                  setLineNumber(179);    // compilenode identifier
                                  onSelf = true;
                                  var call763 = callmethodChecked(this, "isMe", [1], var_other);
                                  if (Grace_isTrue(call763)) {
                                    setLineNumber(180);    // compilenode array
                                    var array764 = new PrimitiveGraceList([]);
                                    var call765 = callmethodChecked(var_SuccessfulMatch, "new", [2], var_other, array764);
                                    if762 = call765;
                                  } else {
                                    setLineNumber(182);    // compilenode identifier
                                    var call766 = callmethodChecked(var_FailedMatch, "new", [1], var_other);
                                    if762 = call766;
                                  }
                                  return if762;
                                };
                                func761.paramCounts = [1];
                                obj759.methods["match"] = func761;
                                func761.definitionLine = 178;
                                func761.definitionModule = "StandardPrelude";
                                var func767 = function(argcv) {    // method ==(1)
                                  var returnTarget = invocationCount;
                                  invocationCount++;
                                  var curarg = 1;
                                  var var_other = arguments[curarg];
                                  curarg++;
                                  if (argcv[0] !== 1)
                                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ==(1)"));
                                  setModuleName("StandardPrelude");
                                  setLineNumber(185);    // compilenode identifier
                                  onSelf = true;
                                  var call768 = callmethodChecked(this, "isMe", [1], var_other);
                                  return call768;
                                };
                                func767.paramCounts = [1];
                                obj759.methods["=="] = func767;
                                func767.definitionLine = 185;
                                func767.definitionModule = "StandardPrelude";
                                setLineNumber(177);    // compilenode identifier
                                var call769 = callmethodChecked(var_BasicPattern, "new()object", [0, 1], this);
                                obj759.superobj = call769;
                                if (call769.data) obj759.data = call769.data;
                                if (call769.hasOwnProperty('_value'))
                                    obj759._value = call769._value;
                                superDepth = origSuperDepth;
                              };
                              obj_init_759.apply(obj759, []);
                              return obj759;
                            };
                            func758.paramCounts = [0];
                            obj756.methods["new"] = func758;
                            func758.definitionLine = 176;
                            func758.definitionModule = "StandardPrelude";
                              var func770 = function(argcv) {    // method new()object
                                var curarg = 1;
                                var inheritingObject = arguments[curarg++];
                                // Start argument processing
                                curarg = 1;
                                // End argument processing
                                setModuleName("StandardPrelude");
                                var returnTarget = invocationCount;
                                invocationCount++;
                                var obj771 = Grace_allocObject(null, "new");
                                obj771.definitionModule = "StandardPrelude";
                                obj771.definitionLine = 176;
                                var inho771 = inheritingObject;
                                while (inho771.superobj) inho771 = inho771.superobj;
                                inho771.superobj = obj771;
                                obj771.data = inheritingObject.data;
                                if (inheritingObject.hasOwnProperty('_value'))
                                  obj771._value = inheritingObject._value;
                                obj771.outer = this;
                                var reader_StandardPrelude_outer772 = function() {
                                  return this.outer;
                                };
                                obj771.methods["outer"] = reader_StandardPrelude_outer772;
                                var obj_init_771 = function() {
                                  var origSuperDepth = superDepth;
                                  superDepth = obj771;
                                  var func773 = function(argcv) {    // method match(1)
                                    var returnTarget = invocationCount;
                                    invocationCount++;
                                    var curarg = 1;
                                    var var_other = arguments[curarg];
                                    curarg++;
                                    if (argcv[0] !== 1)
                                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for match(1)"));
                                    setModuleName("StandardPrelude");
                                    var if774 = GraceDone;
                                    setLineNumber(179);    // compilenode identifier
                                    onSelf = true;
                                    var call775 = callmethodChecked(this, "isMe", [1], var_other);
                                    if (Grace_isTrue(call775)) {
                                      setLineNumber(180);    // compilenode array
                                      var array776 = new PrimitiveGraceList([]);
                                      var call777 = callmethodChecked(var_SuccessfulMatch, "new", [2], var_other, array776);
                                      if774 = call777;
                                    } else {
                                      setLineNumber(182);    // compilenode identifier
                                      var call778 = callmethodChecked(var_FailedMatch, "new", [1], var_other);
                                      if774 = call778;
                                    }
                                    return if774;
                                  };
                                  func773.paramCounts = [1];
                                  obj771.methods["match"] = func773;
                                  func773.definitionLine = 178;
                                  func773.definitionModule = "StandardPrelude";
                                  var func779 = function(argcv) {    // method ==(1)
                                    var returnTarget = invocationCount;
                                    invocationCount++;
                                    var curarg = 1;
                                    var var_other = arguments[curarg];
                                    curarg++;
                                    if (argcv[0] !== 1)
                                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ==(1)"));
                                    setModuleName("StandardPrelude");
                                    setLineNumber(185);    // compilenode identifier
                                    onSelf = true;
                                    var call780 = callmethodChecked(this, "isMe", [1], var_other);
                                    return call780;
                                  };
                                  func779.paramCounts = [1];
                                  obj771.methods["=="] = func779;
                                  func779.definitionLine = 185;
                                  func779.definitionModule = "StandardPrelude";
                                  setLineNumber(177);    // compilenode identifier
                                  var call781 = callmethodChecked(var_BasicPattern, "new()object", [0, 1], this);
                                  obj771.superobj = call781;
                                  if (call781.data) obj771.data = call781.data;
                                  if (call781.hasOwnProperty('_value'))
                                      obj771._value = call781._value;
                                  superDepth = origSuperDepth;
                                };
                                obj_init_771.apply(inheritingObject, []);
                                return obj771;
                                };
                                obj756.methods["new()object"] = func770;
                              var func782 = function(argcv) {    // method named(1)
                                var returnTarget = invocationCount;
                                invocationCount++;
                                var curarg = 1;
                                var var_printString = arguments[curarg];
                                curarg++;
                                if (argcv[0] !== 1)
                                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for named(1)"));
                                setModuleName("StandardPrelude");
                                setLineNumber(187);    // compilenode object
                                var obj783 = Grace_allocObject(null, "Singleton.identifierBinding‹named›");
                                obj783.definitionModule = "StandardPrelude";
                                obj783.definitionLine = 187;
                                obj783.outer = this;
                                var reader_StandardPrelude_outer784 = function() {
                                  return this.outer;
                                };
                                obj783.methods["outer"] = reader_StandardPrelude_outer784;
                                var obj_init_783 = function() {
                                  var origSuperDepth = superDepth;
                                  superDepth = obj783;
                                  var func785 = function(argcv) {    // method asString
                                    var returnTarget = invocationCount;
                                    invocationCount++;
                                    var curarg = 1;
                                    if (argcv[0] !== 0)
                                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                                    setModuleName("StandardPrelude");
                                    // asString is a simple accessor - elide try ... catch
                                    setLineNumber(189);    // compilenode identifier
                                    return var_printString;
                                  };
                                  func785.paramCounts = [0];
                                  obj783.methods["asString"] = func785;
                                  func785.definitionLine = 189;
                                  func785.definitionModule = "StandardPrelude";
                                  setLineNumber(188);    // compilenode identifier
                                  var call786 = callmethodChecked(var_Singleton, "new()object", [0, 1], this);
                                  obj783.superobj = call786;
                                  if (call786.data) obj783.data = call786.data;
                                  if (call786.hasOwnProperty('_value'))
                                      obj783._value = call786._value;
                                  superDepth = origSuperDepth;
                                };
                                obj_init_783.apply(obj783, []);
                                return obj783;
                              };
                              func782.paramCounts = [1];
                              obj756.methods["named"] = func782;
                              func782.definitionLine = 187;
                              func782.definitionModule = "StandardPrelude";
                                var func787 = function(argcv) {    // method named(1     )()object
                                  var curarg = 1;
                                  var var_printString = arguments[curarg];
                                  curarg++;
                                  var inheritingObject = arguments[curarg++];
                                  // Start argument processing
                                  curarg = 1;
                                  curarg++;
                                  // End argument processing
                                  setModuleName("StandardPrelude");
                                  var returnTarget = invocationCount;
                                  invocationCount++;
                                  var obj788 = Grace_allocObject(null, "named");
                                  obj788.definitionModule = "StandardPrelude";
                                  obj788.definitionLine = 187;
                                  var inho788 = inheritingObject;
                                  while (inho788.superobj) inho788 = inho788.superobj;
                                  inho788.superobj = obj788;
                                  obj788.data = inheritingObject.data;
                                  if (inheritingObject.hasOwnProperty('_value'))
                                    obj788._value = inheritingObject._value;
                                  obj788.outer = this;
                                  var reader_StandardPrelude_outer789 = function() {
                                    return this.outer;
                                  };
                                  obj788.methods["outer"] = reader_StandardPrelude_outer789;
                                  var obj_init_788 = function() {
                                    var origSuperDepth = superDepth;
                                    superDepth = obj788;
                                    var func790 = function(argcv) {    // method asString
                                      var returnTarget = invocationCount;
                                      invocationCount++;
                                      var curarg = 1;
                                      if (argcv[0] !== 0)
                                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                                      setModuleName("StandardPrelude");
                                      // asString is a simple accessor - elide try ... catch
                                      setLineNumber(189);    // compilenode identifier
                                      return var_printString;
                                    };
                                    func790.paramCounts = [0];
                                    obj788.methods["asString"] = func790;
                                    func790.definitionLine = 189;
                                    func790.definitionModule = "StandardPrelude";
                                    setLineNumber(188);    // compilenode identifier
                                    var call791 = callmethodChecked(var_Singleton, "new()object", [0, 1], this);
                                    obj788.superobj = call791;
                                    if (call791.data) obj788.data = call791.data;
                                    if (call791.hasOwnProperty('_value'))
                                        obj788._value = call791._value;
                                    superDepth = origSuperDepth;
                                  };
                                  obj_init_788.apply(inheritingObject, []);
                                  return obj788;
                                  };
                                  obj756.methods["named()object"] = func787;
                                superDepth = origSuperDepth;
                              };
                              obj_init_756.apply(obj756, []);
                              var var_Singleton = obj756;
                              setLineNumber(155);    // compilenode method
                              var func792 = function(argcv) {    // method Singleton
                                var returnTarget = invocationCount;
                                invocationCount++;
                                var curarg = 1;
                                if (argcv[0] !== 0)
                                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Singleton"));
                                setModuleName("StandardPrelude");
                                // Singleton is a simple accessor - elide try ... catch
                                setLineNumber(175);    // compilenode identifier
                                return var_Singleton;
                              };
                              func792.paramCounts = [0];
                              this.methods["Singleton"] = func792;
                              func792.definitionLine = 155;
                              func792.definitionModule = "StandardPrelude";
                              this.methods["Singleton"].debug = "def";
                              setLineNumber(193);    // compilenode object
                              var obj793 = Grace_allocObject(GraceObject, "BaseType");
                              obj793.definitionModule = "StandardPrelude";
                              obj793.definitionLine = 193;
                              obj793.outer = this;
                              var reader_StandardPrelude_outer794 = function() {
                                return this.outer;
                              };
                              obj793.methods["outer"] = reader_StandardPrelude_outer794;
                              var obj_init_793 = function() {
                                var origSuperDepth = superDepth;
                                superDepth = obj793;
                                var func795 = function(argcv) {    // method new(1)
                                  var returnTarget = invocationCount;
                                  invocationCount++;
                                  var curarg = 1;
                                  var var_name = arguments[curarg];
                                  curarg++;
                                  if (argcv[0] !== 1)
                                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for new(1)"));
                                  setModuleName("StandardPrelude");
                                  var obj796 = Grace_allocObject(GraceObject, "BaseType.BaseType.new");
                                  obj796.definitionModule = "StandardPrelude";
                                  obj796.definitionLine = 193;
                                  obj796.outer = this;
                                  var reader_StandardPrelude_outer797 = function() {
                                    return this.outer;
                                  };
                                  obj796.methods["outer"] = reader_StandardPrelude_outer797;
                                  var obj_init_796 = function() {
                                    var origSuperDepth = superDepth;
                                    superDepth = obj796;
                                    var func798 = function(argcv) {    // method &(1)
                                      var returnTarget = invocationCount;
                                      invocationCount++;
                                      var curarg = 1;
                                      var var_o = arguments[curarg];
                                      curarg++;
                                      if (argcv[0] !== 1)
                                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for &(1)"));
                                      setModuleName("StandardPrelude");
                                      setLineNumber(195);    // compilenode identifier
                                      var call799 = callmethodChecked(var_TypeIntersection, "new", [2], this, var_o);
                                      return call799;
                                    };
                                    func798.paramCounts = [1];
                                    obj796.methods["&"] = func798;
                                    func798.definitionLine = 194;
                                    func798.definitionModule = "StandardPrelude";
                                    var func800 = function(argcv) {    // method |(1)
                                      var returnTarget = invocationCount;
                                      invocationCount++;
                                      var curarg = 1;
                                      var var_o = arguments[curarg];
                                      curarg++;
                                      if (argcv[0] !== 1)
                                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for |(1)"));
                                      setModuleName("StandardPrelude");
                                      setLineNumber(198);    // compilenode identifier
                                      var call801 = callmethodChecked(var_TypeVariant, "new", [2], this, var_o);
                                      return call801;
                                    };
                                    func800.paramCounts = [1];
                                    obj796.methods["|"] = func800;
                                    func800.definitionLine = 197;
                                    func800.definitionModule = "StandardPrelude";
                                    var func802 = function(argcv) {    // method +(1)
                                      var returnTarget = invocationCount;
                                      invocationCount++;
                                      var curarg = 1;
                                      var var_o = arguments[curarg];
                                      curarg++;
                                      if (argcv[0] !== 1)
                                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for +(1)"));
                                      setModuleName("StandardPrelude");
                                      setLineNumber(201);    // compilenode identifier
                                      var call803 = callmethodChecked(var_TypeUnion, "new", [2], this, var_o);
                                      return call803;
                                    };
                                    func802.paramCounts = [1];
                                    obj796.methods["+"] = func802;
                                    func802.definitionLine = 200;
                                    func802.definitionModule = "StandardPrelude";
                                    var func804 = function(argcv) {    // method -(1)
                                      var returnTarget = invocationCount;
                                      invocationCount++;
                                      var curarg = 1;
                                      var var_o = arguments[curarg];
                                      curarg++;
                                      if (argcv[0] !== 1)
                                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for -(1)"));
                                      setModuleName("StandardPrelude");
                                      setLineNumber(204);    // compilenode identifier
                                      var call805 = callmethodChecked(var_TypeSubtraction, "new", [2], this, var_o);
                                      return call805;
                                    };
                                    func804.paramCounts = [1];
                                    obj796.methods["-"] = func804;
                                    func804.definitionLine = 203;
                                    func804.definitionModule = "StandardPrelude";
                                    var func806 = function(argcv) {    // method asString
                                      var returnTarget = invocationCount;
                                      invocationCount++;
                                      var curarg = 1;
                                      if (argcv[0] !== 0)
                                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                                      setModuleName("StandardPrelude");
                                      var if807 = GraceDone;
                                      setLineNumber(207);    // compilenode string
                                      var string808 = new GraceString("");
                                      var opresult811 = callmethodChecked(var_name, "==", [1], string808);
                                      if (Grace_isTrue(opresult811)) {
                                        var string812 = new GraceString("type \u2039anon\u203a");
                                        if807 = string812;
                                      } else {
                                        setLineNumber(208);    // compilenode string
                                        var string813 = new GraceString("");
                                        var string816 = new GraceString("type ");
                                        var opresult818 = callmethodChecked(string816, "++", [1], var_name);
                                        var opresult820 = callmethodChecked(opresult818, "++", [1], string813);
                                        if807 = opresult820;
                                      }
                                      return if807;
                                    };
                                    func806.paramCounts = [0];
                                    obj796.methods["asString"] = func806;
                                    func806.definitionLine = 206;
                                    func806.definitionModule = "StandardPrelude";
                                    superDepth = origSuperDepth;
                                  };
                                  obj_init_796.apply(obj796, []);
                                  return obj796;
                                };
                                func795.paramCounts = [1];
                                obj793.methods["new"] = func795;
                                func795.definitionLine = 193;
                                func795.definitionModule = "StandardPrelude";
                                  var func821 = function(argcv) {    // method new(1     )()object
                                    var curarg = 1;
                                    var var_name = arguments[curarg];
                                    curarg++;
                                    var inheritingObject = arguments[curarg++];
                                    // Start argument processing
                                    curarg = 1;
                                    curarg++;
                                    // End argument processing
                                    setModuleName("StandardPrelude");
                                    var returnTarget = invocationCount;
                                    invocationCount++;
                                    var obj822 = Grace_allocObject(GraceObject, "new");
                                    obj822.definitionModule = "StandardPrelude";
                                    obj822.definitionLine = 193;
                                    var inho822 = inheritingObject;
                                    while (inho822.superobj) inho822 = inho822.superobj;
                                    inho822.superobj = obj822;
                                    obj822.data = inheritingObject.data;
                                    if (inheritingObject.hasOwnProperty('_value'))
                                      obj822._value = inheritingObject._value;
                                    obj822.outer = this;
                                    var reader_StandardPrelude_outer823 = function() {
                                      return this.outer;
                                    };
                                    obj822.methods["outer"] = reader_StandardPrelude_outer823;
                                    var obj_init_822 = function() {
                                      var origSuperDepth = superDepth;
                                      superDepth = obj822;
                                      var func824 = function(argcv) {    // method &(1)
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        var var_o = arguments[curarg];
                                        curarg++;
                                        if (argcv[0] !== 1)
                                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for &(1)"));
                                        setModuleName("StandardPrelude");
                                        setLineNumber(195);    // compilenode identifier
                                        var call825 = callmethodChecked(var_TypeIntersection, "new", [2], this, var_o);
                                        return call825;
                                      };
                                      func824.paramCounts = [1];
                                      obj822.methods["&"] = func824;
                                      func824.definitionLine = 194;
                                      func824.definitionModule = "StandardPrelude";
                                      var func826 = function(argcv) {    // method |(1)
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        var var_o = arguments[curarg];
                                        curarg++;
                                        if (argcv[0] !== 1)
                                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for |(1)"));
                                        setModuleName("StandardPrelude");
                                        setLineNumber(198);    // compilenode identifier
                                        var call827 = callmethodChecked(var_TypeVariant, "new", [2], this, var_o);
                                        return call827;
                                      };
                                      func826.paramCounts = [1];
                                      obj822.methods["|"] = func826;
                                      func826.definitionLine = 197;
                                      func826.definitionModule = "StandardPrelude";
                                      var func828 = function(argcv) {    // method +(1)
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        var var_o = arguments[curarg];
                                        curarg++;
                                        if (argcv[0] !== 1)
                                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for +(1)"));
                                        setModuleName("StandardPrelude");
                                        setLineNumber(201);    // compilenode identifier
                                        var call829 = callmethodChecked(var_TypeUnion, "new", [2], this, var_o);
                                        return call829;
                                      };
                                      func828.paramCounts = [1];
                                      obj822.methods["+"] = func828;
                                      func828.definitionLine = 200;
                                      func828.definitionModule = "StandardPrelude";
                                      var func830 = function(argcv) {    // method -(1)
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        var var_o = arguments[curarg];
                                        curarg++;
                                        if (argcv[0] !== 1)
                                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for -(1)"));
                                        setModuleName("StandardPrelude");
                                        setLineNumber(204);    // compilenode identifier
                                        var call831 = callmethodChecked(var_TypeSubtraction, "new", [2], this, var_o);
                                        return call831;
                                      };
                                      func830.paramCounts = [1];
                                      obj822.methods["-"] = func830;
                                      func830.definitionLine = 203;
                                      func830.definitionModule = "StandardPrelude";
                                      var func832 = function(argcv) {    // method asString
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        if (argcv[0] !== 0)
                                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                                        setModuleName("StandardPrelude");
                                        var if833 = GraceDone;
                                        setLineNumber(207);    // compilenode string
                                        var string834 = new GraceString("");
                                        var opresult837 = callmethodChecked(var_name, "==", [1], string834);
                                        if (Grace_isTrue(opresult837)) {
                                          var string838 = new GraceString("type \u2039anon\u203a");
                                          if833 = string838;
                                        } else {
                                          setLineNumber(208);    // compilenode string
                                          var string839 = new GraceString("");
                                          var string842 = new GraceString("type ");
                                          var opresult844 = callmethodChecked(string842, "++", [1], var_name);
                                          var opresult846 = callmethodChecked(opresult844, "++", [1], string839);
                                          if833 = opresult846;
                                        }
                                        return if833;
                                      };
                                      func832.paramCounts = [0];
                                      obj822.methods["asString"] = func832;
                                      func832.definitionLine = 206;
                                      func832.definitionModule = "StandardPrelude";
                                      superDepth = origSuperDepth;
                                    };
                                    obj_init_822.apply(inheritingObject, []);
                                    return obj822;
                                    };
                                    obj793.methods["new()object"] = func821;
                                  var func847 = function(argcv) {    // method 
                                    var returnTarget = invocationCount;
                                    invocationCount++;
                                    var curarg = 1;
                                    setModuleName("StandardPrelude");
                                    setLineNumber(193);    // compilenode string
                                    var string848 = new GraceString("class BaseType");
                                    return string848;
                                  };
                                  func847.paramCounts = [];
                                  obj793.methods["asString"] = func847;
                                  func847.definitionLine = 193;
                                  func847.definitionModule = "StandardPrelude";
                                  superDepth = origSuperDepth;
                                };
                                obj_init_793.apply(obj793, []);
                                var var_BaseType = obj793;
                                setLineNumber(155);    // compilenode method
                                var func849 = function(argcv) {    // method BaseType
                                  var returnTarget = invocationCount;
                                  invocationCount++;
                                  var curarg = 1;
                                  if (argcv[0] !== 0)
                                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for BaseType"));
                                  setModuleName("StandardPrelude");
                                  // BaseType is a simple accessor - elide try ... catch
                                  setLineNumber(193);    // compilenode identifier
                                  return var_BaseType;
                                };
                                func849.paramCounts = [0];
                                this.methods["BaseType"] = func849;
                                func849.definitionLine = 155;
                                func849.definitionModule = "StandardPrelude";
                                this.methods["BaseType"].debug = "def";
                                setLineNumber(212);    // compilenode object
                                var obj850 = Grace_allocObject(GraceObject, "TypeIntersection");
                                obj850.definitionModule = "StandardPrelude";
                                obj850.definitionLine = 212;
                                obj850.outer = this;
                                var reader_StandardPrelude_outer851 = function() {
                                  return this.outer;
                                };
                                obj850.methods["outer"] = reader_StandardPrelude_outer851;
                                var obj_init_850 = function() {
                                  var origSuperDepth = superDepth;
                                  superDepth = obj850;
                                  var func852 = function(argcv) {    // method new(2)
                                    var returnTarget = invocationCount;
                                    invocationCount++;
                                    var curarg = 1;
                                    var var_t1 = arguments[curarg];
                                    curarg++;
                                    var var_t2 = arguments[curarg];
                                    curarg++;
                                    if (argcv[0] !== 2)
                                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for new(2)"));
                                    setModuleName("StandardPrelude");
                                    var obj853 = Grace_allocObject(null, "TypeIntersection.TypeIntersection.new");
                                    obj853.definitionModule = "StandardPrelude";
                                    obj853.definitionLine = 212;
                                    obj853.outer = this;
                                    var reader_StandardPrelude_outer854 = function() {
                                      return this.outer;
                                    };
                                    obj853.methods["outer"] = reader_StandardPrelude_outer854;
                                    var obj_init_853 = function() {
                                      var origSuperDepth = superDepth;
                                      superDepth = obj853;
                                      var func855 = function(argcv) {    // method &(1)
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        var var_o = arguments[curarg];
                                        curarg++;
                                        if (argcv[0] !== 1)
                                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for &(1)"));
                                        setModuleName("StandardPrelude");
                                        setLineNumber(216);    // compilenode identifier
                                        var call856 = callmethodChecked(var_TypeIntersection, "new", [2], this, var_o);
                                        return call856;
                                      };
                                      func855.paramCounts = [1];
                                      obj853.methods["&"] = func855;
                                      func855.definitionLine = 215;
                                      func855.definitionModule = "StandardPrelude";
                                      var func857 = function(argcv) {    // method |(1)
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        var var_o = arguments[curarg];
                                        curarg++;
                                        if (argcv[0] !== 1)
                                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for |(1)"));
                                        setModuleName("StandardPrelude");
                                        setLineNumber(219);    // compilenode identifier
                                        var call858 = callmethodChecked(var_TypeVariant, "new", [2], this, var_o);
                                        return call858;
                                      };
                                      func857.paramCounts = [1];
                                      obj853.methods["|"] = func857;
                                      func857.definitionLine = 218;
                                      func857.definitionModule = "StandardPrelude";
                                      var func859 = function(argcv) {    // method +(1)
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        var var_o = arguments[curarg];
                                        curarg++;
                                        if (argcv[0] !== 1)
                                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for +(1)"));
                                        setModuleName("StandardPrelude");
                                        setLineNumber(222);    // compilenode identifier
                                        var call860 = callmethodChecked(var_TypeUnion, "new", [2], this, var_o);
                                        return call860;
                                      };
                                      func859.paramCounts = [1];
                                      obj853.methods["+"] = func859;
                                      func859.definitionLine = 221;
                                      func859.definitionModule = "StandardPrelude";
                                      var func861 = function(argcv) {    // method -(1)
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        var var_o = arguments[curarg];
                                        curarg++;
                                        if (argcv[0] !== 1)
                                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for -(1)"));
                                        setModuleName("StandardPrelude");
                                        setLineNumber(225);    // compilenode identifier
                                        var call862 = callmethodChecked(var_TypeSubtraction, "new", [2], this, var_o);
                                        return call862;
                                      };
                                      func861.paramCounts = [1];
                                      obj853.methods["-"] = func861;
                                      func861.definitionLine = 224;
                                      func861.definitionModule = "StandardPrelude";
                                      var func863 = function(argcv) {    // method methodNames
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        if (argcv[0] !== 0)
                                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for methodNames"));
                                        setModuleName("StandardPrelude");
                                        setLineNumber(228);    // compilenode identifier
                                        var call864 = callmethodChecked(var_t2, "methodNames", [0]);
                                        var call865 = callmethodChecked(var_t1, "methodNames", [0]);
                                        var call866 = callmethodChecked(call865, "addAll", [1], call864);
                                        return call866;
                                      };
                                      func863.paramCounts = [0];
                                      obj853.methods["methodNames"] = func863;
                                      func863.definitionLine = 227;
                                      func863.definitionModule = "StandardPrelude";
                                      var func867 = function(argcv) {    // method asString
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        if (argcv[0] !== 0)
                                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                                        setModuleName("StandardPrelude");
                                        setLineNumber(230);    // compilenode string
                                        var string868 = new GraceString(")");
                                        var string871 = new GraceString(" & ");
                                        var string874 = new GraceString("(");
                                        var opresult876 = callmethodChecked(string874, "++", [1], var_t1);
                                        var opresult878 = callmethodChecked(opresult876, "++", [1], string871);
                                        var opresult880 = callmethodChecked(opresult878, "++", [1], var_t2);
                                        var opresult882 = callmethodChecked(opresult880, "++", [1], string868);
                                        return opresult882;
                                      };
                                      func867.paramCounts = [0];
                                      obj853.methods["asString"] = func867;
                                      func867.definitionLine = 230;
                                      func867.definitionModule = "StandardPrelude";
                                      setLineNumber(213);    // compilenode identifier
                                      var call883 = callmethodChecked(var_AndPattern, "new()object", [2, 1], var_t1, var_t2, this);
                                      obj853.superobj = call883;
                                      if (call883.data) obj853.data = call883.data;
                                      if (call883.hasOwnProperty('_value'))
                                          obj853._value = call883._value;
                                      superDepth = origSuperDepth;
                                    };
                                    obj_init_853.apply(obj853, []);
                                    return obj853;
                                  };
                                  func852.paramCounts = [2];
                                  obj850.methods["new"] = func852;
                                  func852.definitionLine = 212;
                                  func852.definitionModule = "StandardPrelude";
                                    var func884 = function(argcv) {    // method new(2     )()object
                                      var curarg = 1;
                                      var var_t1 = arguments[curarg];
                                      curarg++;
                                      var var_t2 = arguments[curarg];
                                      curarg++;
                                      var inheritingObject = arguments[curarg++];
                                      // Start argument processing
                                      curarg = 1;
                                      curarg++;
                                      curarg++;
                                      // End argument processing
                                      setModuleName("StandardPrelude");
                                      var returnTarget = invocationCount;
                                      invocationCount++;
                                      var obj885 = Grace_allocObject(null, "new");
                                      obj885.definitionModule = "StandardPrelude";
                                      obj885.definitionLine = 212;
                                      var inho885 = inheritingObject;
                                      while (inho885.superobj) inho885 = inho885.superobj;
                                      inho885.superobj = obj885;
                                      obj885.data = inheritingObject.data;
                                      if (inheritingObject.hasOwnProperty('_value'))
                                        obj885._value = inheritingObject._value;
                                      obj885.outer = this;
                                      var reader_StandardPrelude_outer886 = function() {
                                        return this.outer;
                                      };
                                      obj885.methods["outer"] = reader_StandardPrelude_outer886;
                                      var obj_init_885 = function() {
                                        var origSuperDepth = superDepth;
                                        superDepth = obj885;
                                        var func887 = function(argcv) {    // method &(1)
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          var var_o = arguments[curarg];
                                          curarg++;
                                          if (argcv[0] !== 1)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for &(1)"));
                                          setModuleName("StandardPrelude");
                                          setLineNumber(216);    // compilenode identifier
                                          var call888 = callmethodChecked(var_TypeIntersection, "new", [2], this, var_o);
                                          return call888;
                                        };
                                        func887.paramCounts = [1];
                                        obj885.methods["&"] = func887;
                                        func887.definitionLine = 215;
                                        func887.definitionModule = "StandardPrelude";
                                        var func889 = function(argcv) {    // method |(1)
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          var var_o = arguments[curarg];
                                          curarg++;
                                          if (argcv[0] !== 1)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for |(1)"));
                                          setModuleName("StandardPrelude");
                                          setLineNumber(219);    // compilenode identifier
                                          var call890 = callmethodChecked(var_TypeVariant, "new", [2], this, var_o);
                                          return call890;
                                        };
                                        func889.paramCounts = [1];
                                        obj885.methods["|"] = func889;
                                        func889.definitionLine = 218;
                                        func889.definitionModule = "StandardPrelude";
                                        var func891 = function(argcv) {    // method +(1)
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          var var_o = arguments[curarg];
                                          curarg++;
                                          if (argcv[0] !== 1)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for +(1)"));
                                          setModuleName("StandardPrelude");
                                          setLineNumber(222);    // compilenode identifier
                                          var call892 = callmethodChecked(var_TypeUnion, "new", [2], this, var_o);
                                          return call892;
                                        };
                                        func891.paramCounts = [1];
                                        obj885.methods["+"] = func891;
                                        func891.definitionLine = 221;
                                        func891.definitionModule = "StandardPrelude";
                                        var func893 = function(argcv) {    // method -(1)
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          var var_o = arguments[curarg];
                                          curarg++;
                                          if (argcv[0] !== 1)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for -(1)"));
                                          setModuleName("StandardPrelude");
                                          setLineNumber(225);    // compilenode identifier
                                          var call894 = callmethodChecked(var_TypeSubtraction, "new", [2], this, var_o);
                                          return call894;
                                        };
                                        func893.paramCounts = [1];
                                        obj885.methods["-"] = func893;
                                        func893.definitionLine = 224;
                                        func893.definitionModule = "StandardPrelude";
                                        var func895 = function(argcv) {    // method methodNames
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for methodNames"));
                                          setModuleName("StandardPrelude");
                                          setLineNumber(228);    // compilenode identifier
                                          var call896 = callmethodChecked(var_t2, "methodNames", [0]);
                                          var call897 = callmethodChecked(var_t1, "methodNames", [0]);
                                          var call898 = callmethodChecked(call897, "addAll", [1], call896);
                                          return call898;
                                        };
                                        func895.paramCounts = [0];
                                        obj885.methods["methodNames"] = func895;
                                        func895.definitionLine = 227;
                                        func895.definitionModule = "StandardPrelude";
                                        var func899 = function(argcv) {    // method asString
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                                          setModuleName("StandardPrelude");
                                          setLineNumber(230);    // compilenode string
                                          var string900 = new GraceString(")");
                                          var string903 = new GraceString(" & ");
                                          var string906 = new GraceString("(");
                                          var opresult908 = callmethodChecked(string906, "++", [1], var_t1);
                                          var opresult910 = callmethodChecked(opresult908, "++", [1], string903);
                                          var opresult912 = callmethodChecked(opresult910, "++", [1], var_t2);
                                          var opresult914 = callmethodChecked(opresult912, "++", [1], string900);
                                          return opresult914;
                                        };
                                        func899.paramCounts = [0];
                                        obj885.methods["asString"] = func899;
                                        func899.definitionLine = 230;
                                        func899.definitionModule = "StandardPrelude";
                                        setLineNumber(213);    // compilenode identifier
                                        var call915 = callmethodChecked(var_AndPattern, "new()object", [2, 1], var_t1, var_t2, this);
                                        obj885.superobj = call915;
                                        if (call915.data) obj885.data = call915.data;
                                        if (call915.hasOwnProperty('_value'))
                                            obj885._value = call915._value;
                                        superDepth = origSuperDepth;
                                      };
                                      obj_init_885.apply(inheritingObject, []);
                                      return obj885;
                                      };
                                      obj850.methods["new()object"] = func884;
                                    var func916 = function(argcv) {    // method 
                                      var returnTarget = invocationCount;
                                      invocationCount++;
                                      var curarg = 1;
                                      setModuleName("StandardPrelude");
                                      setLineNumber(212);    // compilenode string
                                      var string917 = new GraceString("class TypeIntersection");
                                      return string917;
                                    };
                                    func916.paramCounts = [];
                                    obj850.methods["asString"] = func916;
                                    func916.definitionLine = 212;
                                    func916.definitionModule = "StandardPrelude";
                                    superDepth = origSuperDepth;
                                  };
                                  obj_init_850.apply(obj850, []);
                                  var var_TypeIntersection = obj850;
                                  setLineNumber(228);    // compilenode method
                                  var func918 = function(argcv) {    // method TypeIntersection
                                    var returnTarget = invocationCount;
                                    invocationCount++;
                                    var curarg = 1;
                                    if (argcv[0] !== 0)
                                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for TypeIntersection"));
                                    setModuleName("StandardPrelude");
                                    // TypeIntersection is a simple accessor - elide try ... catch
                                    setLineNumber(212);    // compilenode identifier
                                    return var_TypeIntersection;
                                  };
                                  func918.paramCounts = [0];
                                  this.methods["TypeIntersection"] = func918;
                                  func918.definitionLine = 228;
                                  func918.definitionModule = "StandardPrelude";
                                  this.methods["TypeIntersection"].debug = "def";
                                  setLineNumber(233);    // compilenode object
                                  var obj919 = Grace_allocObject(GraceObject, "TypeVariant");
                                  obj919.definitionModule = "StandardPrelude";
                                  obj919.definitionLine = 233;
                                  obj919.outer = this;
                                  var reader_StandardPrelude_outer920 = function() {
                                    return this.outer;
                                  };
                                  obj919.methods["outer"] = reader_StandardPrelude_outer920;
                                  var obj_init_919 = function() {
                                    var origSuperDepth = superDepth;
                                    superDepth = obj919;
                                    var func921 = function(argcv) {    // method new(2)
                                      var returnTarget = invocationCount;
                                      invocationCount++;
                                      var curarg = 1;
                                      var var_t1 = arguments[curarg];
                                      curarg++;
                                      var var_t2 = arguments[curarg];
                                      curarg++;
                                      if (argcv[0] !== 2)
                                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for new(2)"));
                                      setModuleName("StandardPrelude");
                                      var obj922 = Grace_allocObject(null, "TypeVariant.TypeVariant.new");
                                      obj922.definitionModule = "StandardPrelude";
                                      obj922.definitionLine = 233;
                                      obj922.outer = this;
                                      var reader_StandardPrelude_outer923 = function() {
                                        return this.outer;
                                      };
                                      obj922.methods["outer"] = reader_StandardPrelude_outer923;
                                      var obj_init_922 = function() {
                                        var origSuperDepth = superDepth;
                                        superDepth = obj922;
                                        var func924 = function(argcv) {    // method &(1)
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          var var_o = arguments[curarg];
                                          curarg++;
                                          if (argcv[0] !== 1)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for &(1)"));
                                          setModuleName("StandardPrelude");
                                          setLineNumber(237);    // compilenode identifier
                                          var call925 = callmethodChecked(var_TypeIntersection, "new", [2], this, var_o);
                                          return call925;
                                        };
                                        func924.paramCounts = [1];
                                        obj922.methods["&"] = func924;
                                        func924.definitionLine = 236;
                                        func924.definitionModule = "StandardPrelude";
                                        var func926 = function(argcv) {    // method |(1)
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          var var_o = arguments[curarg];
                                          curarg++;
                                          if (argcv[0] !== 1)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for |(1)"));
                                          setModuleName("StandardPrelude");
                                          setLineNumber(240);    // compilenode identifier
                                          var call927 = callmethodChecked(var_TypeVariant, "new", [2], this, var_o);
                                          return call927;
                                        };
                                        func926.paramCounts = [1];
                                        obj922.methods["|"] = func926;
                                        func926.definitionLine = 239;
                                        func926.definitionModule = "StandardPrelude";
                                        var func928 = function(argcv) {    // method +(1)
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          var var_o = arguments[curarg];
                                          curarg++;
                                          if (argcv[0] !== 1)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for +(1)"));
                                          setModuleName("StandardPrelude");
                                          setLineNumber(243);    // compilenode identifier
                                          var call929 = callmethodChecked(var_TypeUnion, "new", [2], this, var_o);
                                          return call929;
                                        };
                                        func928.paramCounts = [1];
                                        obj922.methods["+"] = func928;
                                        func928.definitionLine = 242;
                                        func928.definitionModule = "StandardPrelude";
                                        var func930 = function(argcv) {    // method -(1)
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          var var_o = arguments[curarg];
                                          curarg++;
                                          if (argcv[0] !== 1)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for -(1)"));
                                          setModuleName("StandardPrelude");
                                          setLineNumber(246);    // compilenode identifier
                                          var call931 = callmethodChecked(var_TypeSubtraction, "new", [2], this, var_o);
                                          return call931;
                                        };
                                        func930.paramCounts = [1];
                                        obj922.methods["-"] = func930;
                                        func930.definitionLine = 245;
                                        func930.definitionModule = "StandardPrelude";
                                        var func932 = function(argcv) {    // method methodNames
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for methodNames"));
                                          setModuleName("StandardPrelude");
                                          setLineNumber(249);    // compilenode call
                                          onSelf = true;
                                          var call933 = callmethodChecked(this, "TypeVariantsCannotBeCharacterizedByASetOfMethods", [0]);
                                          return call933;
                                        };
                                        func932.paramCounts = [0];
                                        obj922.methods["methodNames"] = func932;
                                        func932.definitionLine = 248;
                                        func932.definitionModule = "StandardPrelude";
                                        var func934 = function(argcv) {    // method asString
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                                          setModuleName("StandardPrelude");
                                          setLineNumber(251);    // compilenode string
                                          var string935 = new GraceString(")");
                                          var string938 = new GraceString(" | ");
                                          var string941 = new GraceString("(");
                                          var opresult943 = callmethodChecked(string941, "++", [1], var_t1);
                                          var opresult945 = callmethodChecked(opresult943, "++", [1], string938);
                                          var opresult947 = callmethodChecked(opresult945, "++", [1], var_t2);
                                          var opresult949 = callmethodChecked(opresult947, "++", [1], string935);
                                          return opresult949;
                                        };
                                        func934.paramCounts = [0];
                                        obj922.methods["asString"] = func934;
                                        func934.definitionLine = 251;
                                        func934.definitionModule = "StandardPrelude";
                                        setLineNumber(234);    // compilenode identifier
                                        var call950 = callmethodChecked(var_OrPattern, "new()object", [2, 1], var_t1, var_t2, this);
                                        obj922.superobj = call950;
                                        if (call950.data) obj922.data = call950.data;
                                        if (call950.hasOwnProperty('_value'))
                                            obj922._value = call950._value;
                                        superDepth = origSuperDepth;
                                      };
                                      obj_init_922.apply(obj922, []);
                                      return obj922;
                                    };
                                    func921.paramCounts = [2];
                                    obj919.methods["new"] = func921;
                                    func921.definitionLine = 233;
                                    func921.definitionModule = "StandardPrelude";
                                      var func951 = function(argcv) {    // method new(2     )()object
                                        var curarg = 1;
                                        var var_t1 = arguments[curarg];
                                        curarg++;
                                        var var_t2 = arguments[curarg];
                                        curarg++;
                                        var inheritingObject = arguments[curarg++];
                                        // Start argument processing
                                        curarg = 1;
                                        curarg++;
                                        curarg++;
                                        // End argument processing
                                        setModuleName("StandardPrelude");
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var obj952 = Grace_allocObject(null, "new");
                                        obj952.definitionModule = "StandardPrelude";
                                        obj952.definitionLine = 233;
                                        var inho952 = inheritingObject;
                                        while (inho952.superobj) inho952 = inho952.superobj;
                                        inho952.superobj = obj952;
                                        obj952.data = inheritingObject.data;
                                        if (inheritingObject.hasOwnProperty('_value'))
                                          obj952._value = inheritingObject._value;
                                        obj952.outer = this;
                                        var reader_StandardPrelude_outer953 = function() {
                                          return this.outer;
                                        };
                                        obj952.methods["outer"] = reader_StandardPrelude_outer953;
                                        var obj_init_952 = function() {
                                          var origSuperDepth = superDepth;
                                          superDepth = obj952;
                                          var func954 = function(argcv) {    // method &(1)
                                            var returnTarget = invocationCount;
                                            invocationCount++;
                                            var curarg = 1;
                                            var var_o = arguments[curarg];
                                            curarg++;
                                            if (argcv[0] !== 1)
                                              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for &(1)"));
                                            setModuleName("StandardPrelude");
                                            setLineNumber(237);    // compilenode identifier
                                            var call955 = callmethodChecked(var_TypeIntersection, "new", [2], this, var_o);
                                            return call955;
                                          };
                                          func954.paramCounts = [1];
                                          obj952.methods["&"] = func954;
                                          func954.definitionLine = 236;
                                          func954.definitionModule = "StandardPrelude";
                                          var func956 = function(argcv) {    // method |(1)
                                            var returnTarget = invocationCount;
                                            invocationCount++;
                                            var curarg = 1;
                                            var var_o = arguments[curarg];
                                            curarg++;
                                            if (argcv[0] !== 1)
                                              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for |(1)"));
                                            setModuleName("StandardPrelude");
                                            setLineNumber(240);    // compilenode identifier
                                            var call957 = callmethodChecked(var_TypeVariant, "new", [2], this, var_o);
                                            return call957;
                                          };
                                          func956.paramCounts = [1];
                                          obj952.methods["|"] = func956;
                                          func956.definitionLine = 239;
                                          func956.definitionModule = "StandardPrelude";
                                          var func958 = function(argcv) {    // method +(1)
                                            var returnTarget = invocationCount;
                                            invocationCount++;
                                            var curarg = 1;
                                            var var_o = arguments[curarg];
                                            curarg++;
                                            if (argcv[0] !== 1)
                                              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for +(1)"));
                                            setModuleName("StandardPrelude");
                                            setLineNumber(243);    // compilenode identifier
                                            var call959 = callmethodChecked(var_TypeUnion, "new", [2], this, var_o);
                                            return call959;
                                          };
                                          func958.paramCounts = [1];
                                          obj952.methods["+"] = func958;
                                          func958.definitionLine = 242;
                                          func958.definitionModule = "StandardPrelude";
                                          var func960 = function(argcv) {    // method -(1)
                                            var returnTarget = invocationCount;
                                            invocationCount++;
                                            var curarg = 1;
                                            var var_o = arguments[curarg];
                                            curarg++;
                                            if (argcv[0] !== 1)
                                              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for -(1)"));
                                            setModuleName("StandardPrelude");
                                            setLineNumber(246);    // compilenode identifier
                                            var call961 = callmethodChecked(var_TypeSubtraction, "new", [2], this, var_o);
                                            return call961;
                                          };
                                          func960.paramCounts = [1];
                                          obj952.methods["-"] = func960;
                                          func960.definitionLine = 245;
                                          func960.definitionModule = "StandardPrelude";
                                          var func962 = function(argcv) {    // method methodNames
                                            var returnTarget = invocationCount;
                                            invocationCount++;
                                            var curarg = 1;
                                            if (argcv[0] !== 0)
                                              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for methodNames"));
                                            setModuleName("StandardPrelude");
                                            setLineNumber(249);    // compilenode call
                                            onSelf = true;
                                            var call963 = callmethodChecked(this, "TypeVariantsCannotBeCharacterizedByASetOfMethods", [0]);
                                            return call963;
                                          };
                                          func962.paramCounts = [0];
                                          obj952.methods["methodNames"] = func962;
                                          func962.definitionLine = 248;
                                          func962.definitionModule = "StandardPrelude";
                                          var func964 = function(argcv) {    // method asString
                                            var returnTarget = invocationCount;
                                            invocationCount++;
                                            var curarg = 1;
                                            if (argcv[0] !== 0)
                                              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                                            setModuleName("StandardPrelude");
                                            setLineNumber(251);    // compilenode string
                                            var string965 = new GraceString(")");
                                            var string968 = new GraceString(" | ");
                                            var string971 = new GraceString("(");
                                            var opresult973 = callmethodChecked(string971, "++", [1], var_t1);
                                            var opresult975 = callmethodChecked(opresult973, "++", [1], string968);
                                            var opresult977 = callmethodChecked(opresult975, "++", [1], var_t2);
                                            var opresult979 = callmethodChecked(opresult977, "++", [1], string965);
                                            return opresult979;
                                          };
                                          func964.paramCounts = [0];
                                          obj952.methods["asString"] = func964;
                                          func964.definitionLine = 251;
                                          func964.definitionModule = "StandardPrelude";
                                          setLineNumber(234);    // compilenode identifier
                                          var call980 = callmethodChecked(var_OrPattern, "new()object", [2, 1], var_t1, var_t2, this);
                                          obj952.superobj = call980;
                                          if (call980.data) obj952.data = call980.data;
                                          if (call980.hasOwnProperty('_value'))
                                              obj952._value = call980._value;
                                          superDepth = origSuperDepth;
                                        };
                                        obj_init_952.apply(inheritingObject, []);
                                        return obj952;
                                        };
                                        obj919.methods["new()object"] = func951;
                                      var func981 = function(argcv) {    // method 
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        setModuleName("StandardPrelude");
                                        setLineNumber(233);    // compilenode string
                                        var string982 = new GraceString("class TypeVariant");
                                        return string982;
                                      };
                                      func981.paramCounts = [];
                                      obj919.methods["asString"] = func981;
                                      func981.definitionLine = 233;
                                      func981.definitionModule = "StandardPrelude";
                                      superDepth = origSuperDepth;
                                    };
                                    obj_init_919.apply(obj919, []);
                                    var var_TypeVariant = obj919;
                                    setLineNumber(249);    // compilenode method
                                    var func983 = function(argcv) {    // method TypeVariant
                                      var returnTarget = invocationCount;
                                      invocationCount++;
                                      var curarg = 1;
                                      if (argcv[0] !== 0)
                                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for TypeVariant"));
                                      setModuleName("StandardPrelude");
                                      // TypeVariant is a simple accessor - elide try ... catch
                                      setLineNumber(233);    // compilenode identifier
                                      return var_TypeVariant;
                                    };
                                    func983.paramCounts = [0];
                                    this.methods["TypeVariant"] = func983;
                                    func983.definitionLine = 249;
                                    func983.definitionModule = "StandardPrelude";
                                    this.methods["TypeVariant"].debug = "def";
                                    setLineNumber(254);    // compilenode object
                                    var obj984 = Grace_allocObject(GraceObject, "TypeUnion");
                                    obj984.definitionModule = "StandardPrelude";
                                    obj984.definitionLine = 254;
                                    obj984.outer = this;
                                    var reader_StandardPrelude_outer985 = function() {
                                      return this.outer;
                                    };
                                    obj984.methods["outer"] = reader_StandardPrelude_outer985;
                                    var obj_init_984 = function() {
                                      var origSuperDepth = superDepth;
                                      superDepth = obj984;
                                      var func986 = function(argcv) {    // method new(2)
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        var var_t1 = arguments[curarg];
                                        curarg++;
                                        var var_t2 = arguments[curarg];
                                        curarg++;
                                        if (argcv[0] !== 2)
                                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for new(2)"));
                                        setModuleName("StandardPrelude");
                                        var obj987 = Grace_allocObject(null, "TypeUnion.TypeUnion.new");
                                        obj987.definitionModule = "StandardPrelude";
                                        obj987.definitionLine = 254;
                                        obj987.outer = this;
                                        var reader_StandardPrelude_outer988 = function() {
                                          return this.outer;
                                        };
                                        obj987.methods["outer"] = reader_StandardPrelude_outer988;
                                        var obj_init_987 = function() {
                                          var origSuperDepth = superDepth;
                                          superDepth = obj987;
                                          var func989 = function(argcv) {    // method &(1)
                                            var returnTarget = invocationCount;
                                            invocationCount++;
                                            var curarg = 1;
                                            var var_o = arguments[curarg];
                                            curarg++;
                                            if (argcv[0] !== 1)
                                              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for &(1)"));
                                            setModuleName("StandardPrelude");
                                            setLineNumber(258);    // compilenode identifier
                                            var call990 = callmethodChecked(var_TypeIntersection, "new", [2], this, var_o);
                                            return call990;
                                          };
                                          func989.paramCounts = [1];
                                          obj987.methods["&"] = func989;
                                          func989.definitionLine = 257;
                                          func989.definitionModule = "StandardPrelude";
                                          var func991 = function(argcv) {    // method |(1)
                                            var returnTarget = invocationCount;
                                            invocationCount++;
                                            var curarg = 1;
                                            var var_o = arguments[curarg];
                                            curarg++;
                                            if (argcv[0] !== 1)
                                              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for |(1)"));
                                            setModuleName("StandardPrelude");
                                            setLineNumber(261);    // compilenode identifier
                                            var call992 = callmethodChecked(var_TypeVariant, "new", [2], this, var_o);
                                            return call992;
                                          };
                                          func991.paramCounts = [1];
                                          obj987.methods["|"] = func991;
                                          func991.definitionLine = 260;
                                          func991.definitionModule = "StandardPrelude";
                                          var func993 = function(argcv) {    // method +(1)
                                            var returnTarget = invocationCount;
                                            invocationCount++;
                                            var curarg = 1;
                                            var var_o = arguments[curarg];
                                            curarg++;
                                            if (argcv[0] !== 1)
                                              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for +(1)"));
                                            setModuleName("StandardPrelude");
                                            setLineNumber(264);    // compilenode identifier
                                            var call994 = callmethodChecked(var_TypeUnion, "new", [2], this, var_o);
                                            return call994;
                                          };
                                          func993.paramCounts = [1];
                                          obj987.methods["+"] = func993;
                                          func993.definitionLine = 263;
                                          func993.definitionModule = "StandardPrelude";
                                          var func995 = function(argcv) {    // method -(1)
                                            var returnTarget = invocationCount;
                                            invocationCount++;
                                            var curarg = 1;
                                            var var_o = arguments[curarg];
                                            curarg++;
                                            if (argcv[0] !== 1)
                                              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for -(1)"));
                                            setModuleName("StandardPrelude");
                                            setLineNumber(267);    // compilenode identifier
                                            var call996 = callmethodChecked(var_TypeSubtraction, "new", [2], this, var_o);
                                            return call996;
                                          };
                                          func995.paramCounts = [1];
                                          obj987.methods["-"] = func995;
                                          func995.definitionLine = 266;
                                          func995.definitionModule = "StandardPrelude";
                                          var func997 = function(argcv) {    // method methodNames
                                            var returnTarget = invocationCount;
                                            invocationCount++;
                                            var curarg = 1;
                                            if (argcv[0] !== 0)
                                              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for methodNames"));
                                            setModuleName("StandardPrelude");
                                            setLineNumber(270);    // compilenode identifier
                                            var call998 = callmethodChecked(var_t2, "methodNames", [0]);
                                            var call1000 = callmethodChecked(var_t1, "methodNames", [0]);
                                            var opresult1002 = callmethodChecked(call1000, "**", [1], call998);
                                            return opresult1002;
                                          };
                                          func997.paramCounts = [0];
                                          obj987.methods["methodNames"] = func997;
                                          func997.definitionLine = 269;
                                          func997.definitionModule = "StandardPrelude";
                                          var func1003 = function(argcv) {    // method match(1)
                                            var returnTarget = invocationCount;
                                            invocationCount++;
                                            var curarg = 1;
                                            var var_o = arguments[curarg];
                                            curarg++;
                                            if (argcv[0] !== 1)
                                              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for match(1)"));
                                            setModuleName("StandardPrelude");
                                            setLineNumber(273);    // compilenode string
                                            var string1004 = new GraceString("matching against a TypeUnion not yet implemented");
                                            var call1005 = callmethodChecked(var_prelude, "ResourceException", [0]);
                                            var call1006 = callmethodChecked(call1005, "raise", [1], string1004);
                                            setLineNumber(276);    // compilenode identifier
                                            var var_mirror = ellipsis;
                                            setLineNumber(277);    // compilenode identifier
                                            var call1007 = callmethodChecked(var_mirror, "reflect", [1], var_o);
                                            var call1008 = callmethodChecked(call1007, "methodNames", [0]);
                                            var var_oMethodNames = call1008;
                                            setLineNumber(278);    // compilenode call
                                            onSelf = true;
                                            var call1009 = callmethodChecked(this, "methodNames", [0]);
                                            var block1010 = new GraceBlock(this, 278, 1);
                                            setLineNumber(1);    // compilenode identifier
                                            block1010.real = function(var_each) {
                                              var if1011 = GraceDone;
                                              setLineNumber(279);    // compilenode identifier
                                              var call1012 = callmethodChecked(var_oMethodNames, "contains", [1], var_each);
                                              var call1013 = callmethodChecked(call1012, "prefix!", [0]);
                                              if (Grace_isTrue(call1013)) {
                                                setLineNumber(280);    // compilenode identifier
                                                var call1014 = callmethodChecked(var_FailedMatch, "new", [1], var_o);
                                                throw new ReturnException(call1014, returnTarget);
                                              }
                                              return if1011;
                                            };
                                            var call1015 = callmethodChecked(var_prelude, "for()do", [1, 1], call1009, block1010);
                                            setLineNumber(283);    // compilenode array
                                            var array1016 = new PrimitiveGraceList([]);
                                            var call1017 = callmethodChecked(var_SuccessfulMatch, "new", [2], var_o, array1016);
                                            return call1017;
                                          };
                                          func1003.paramCounts = [1];
                                          obj987.methods["match"] = func1003;
                                          func1003.definitionLine = 272;
                                          func1003.definitionModule = "StandardPrelude";
                                          var func1018 = function(argcv) {    // method asString
                                            var returnTarget = invocationCount;
                                            invocationCount++;
                                            var curarg = 1;
                                            if (argcv[0] !== 0)
                                              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                                            setModuleName("StandardPrelude");
                                            setLineNumber(285);    // compilenode string
                                            var string1019 = new GraceString(")");
                                            var string1022 = new GraceString(" + ");
                                            var string1025 = new GraceString("(");
                                            var opresult1027 = callmethodChecked(string1025, "++", [1], var_t1);
                                            var opresult1029 = callmethodChecked(opresult1027, "++", [1], string1022);
                                            var opresult1031 = callmethodChecked(opresult1029, "++", [1], var_t2);
                                            var opresult1033 = callmethodChecked(opresult1031, "++", [1], string1019);
                                            return opresult1033;
                                          };
                                          func1018.paramCounts = [0];
                                          obj987.methods["asString"] = func1018;
                                          func1018.definitionLine = 285;
                                          func1018.definitionModule = "StandardPrelude";
                                          setLineNumber(255);    // compilenode identifier
                                          var call1034 = callmethodChecked(var_BasicPattern, "new()object", [2, 1], var_t1, var_t2, this);
                                          obj987.superobj = call1034;
                                          if (call1034.data) obj987.data = call1034.data;
                                          if (call1034.hasOwnProperty('_value'))
                                              obj987._value = call1034._value;
                                          superDepth = origSuperDepth;
                                        };
                                        obj_init_987.apply(obj987, []);
                                        return obj987;
                                      };
                                      func986.paramCounts = [2];
                                      obj984.methods["new"] = func986;
                                      func986.definitionLine = 254;
                                      func986.definitionModule = "StandardPrelude";
                                        var func1035 = function(argcv) {    // method new(2     )()object
                                          var curarg = 1;
                                          var var_t1 = arguments[curarg];
                                          curarg++;
                                          var var_t2 = arguments[curarg];
                                          curarg++;
                                          var inheritingObject = arguments[curarg++];
                                          // Start argument processing
                                          curarg = 1;
                                          curarg++;
                                          curarg++;
                                          // End argument processing
                                          setModuleName("StandardPrelude");
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var obj1036 = Grace_allocObject(null, "new");
                                          obj1036.definitionModule = "StandardPrelude";
                                          obj1036.definitionLine = 254;
                                          var inho1036 = inheritingObject;
                                          while (inho1036.superobj) inho1036 = inho1036.superobj;
                                          inho1036.superobj = obj1036;
                                          obj1036.data = inheritingObject.data;
                                          if (inheritingObject.hasOwnProperty('_value'))
                                            obj1036._value = inheritingObject._value;
                                          obj1036.outer = this;
                                          var reader_StandardPrelude_outer1037 = function() {
                                            return this.outer;
                                          };
                                          obj1036.methods["outer"] = reader_StandardPrelude_outer1037;
                                          var obj_init_1036 = function() {
                                            var origSuperDepth = superDepth;
                                            superDepth = obj1036;
                                            var func1038 = function(argcv) {    // method &(1)
                                              var returnTarget = invocationCount;
                                              invocationCount++;
                                              var curarg = 1;
                                              var var_o = arguments[curarg];
                                              curarg++;
                                              if (argcv[0] !== 1)
                                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for &(1)"));
                                              setModuleName("StandardPrelude");
                                              setLineNumber(258);    // compilenode identifier
                                              var call1039 = callmethodChecked(var_TypeIntersection, "new", [2], this, var_o);
                                              return call1039;
                                            };
                                            func1038.paramCounts = [1];
                                            obj1036.methods["&"] = func1038;
                                            func1038.definitionLine = 257;
                                            func1038.definitionModule = "StandardPrelude";
                                            var func1040 = function(argcv) {    // method |(1)
                                              var returnTarget = invocationCount;
                                              invocationCount++;
                                              var curarg = 1;
                                              var var_o = arguments[curarg];
                                              curarg++;
                                              if (argcv[0] !== 1)
                                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for |(1)"));
                                              setModuleName("StandardPrelude");
                                              setLineNumber(261);    // compilenode identifier
                                              var call1041 = callmethodChecked(var_TypeVariant, "new", [2], this, var_o);
                                              return call1041;
                                            };
                                            func1040.paramCounts = [1];
                                            obj1036.methods["|"] = func1040;
                                            func1040.definitionLine = 260;
                                            func1040.definitionModule = "StandardPrelude";
                                            var func1042 = function(argcv) {    // method +(1)
                                              var returnTarget = invocationCount;
                                              invocationCount++;
                                              var curarg = 1;
                                              var var_o = arguments[curarg];
                                              curarg++;
                                              if (argcv[0] !== 1)
                                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for +(1)"));
                                              setModuleName("StandardPrelude");
                                              setLineNumber(264);    // compilenode identifier
                                              var call1043 = callmethodChecked(var_TypeUnion, "new", [2], this, var_o);
                                              return call1043;
                                            };
                                            func1042.paramCounts = [1];
                                            obj1036.methods["+"] = func1042;
                                            func1042.definitionLine = 263;
                                            func1042.definitionModule = "StandardPrelude";
                                            var func1044 = function(argcv) {    // method -(1)
                                              var returnTarget = invocationCount;
                                              invocationCount++;
                                              var curarg = 1;
                                              var var_o = arguments[curarg];
                                              curarg++;
                                              if (argcv[0] !== 1)
                                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for -(1)"));
                                              setModuleName("StandardPrelude");
                                              setLineNumber(267);    // compilenode identifier
                                              var call1045 = callmethodChecked(var_TypeSubtraction, "new", [2], this, var_o);
                                              return call1045;
                                            };
                                            func1044.paramCounts = [1];
                                            obj1036.methods["-"] = func1044;
                                            func1044.definitionLine = 266;
                                            func1044.definitionModule = "StandardPrelude";
                                            var func1046 = function(argcv) {    // method methodNames
                                              var returnTarget = invocationCount;
                                              invocationCount++;
                                              var curarg = 1;
                                              if (argcv[0] !== 0)
                                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for methodNames"));
                                              setModuleName("StandardPrelude");
                                              setLineNumber(270);    // compilenode identifier
                                              var call1047 = callmethodChecked(var_t2, "methodNames", [0]);
                                              var call1049 = callmethodChecked(var_t1, "methodNames", [0]);
                                              var opresult1051 = callmethodChecked(call1049, "**", [1], call1047);
                                              return opresult1051;
                                            };
                                            func1046.paramCounts = [0];
                                            obj1036.methods["methodNames"] = func1046;
                                            func1046.definitionLine = 269;
                                            func1046.definitionModule = "StandardPrelude";
                                            var func1052 = function(argcv) {    // method match(1)
                                              var returnTarget = invocationCount;
                                              invocationCount++;
                                              var curarg = 1;
                                              var var_o = arguments[curarg];
                                              curarg++;
                                              if (argcv[0] !== 1)
                                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for match(1)"));
                                              setModuleName("StandardPrelude");
                                              setLineNumber(273);    // compilenode string
                                              var string1053 = new GraceString("matching against a TypeUnion not yet implemented");
                                              var call1054 = callmethodChecked(var_prelude, "ResourceException", [0]);
                                              var call1055 = callmethodChecked(call1054, "raise", [1], string1053);
                                              setLineNumber(276);    // compilenode identifier
                                              var var_mirror = ellipsis;
                                              setLineNumber(277);    // compilenode identifier
                                              var call1056 = callmethodChecked(var_mirror, "reflect", [1], var_o);
                                              var call1057 = callmethodChecked(call1056, "methodNames", [0]);
                                              var var_oMethodNames = call1057;
                                              setLineNumber(278);    // compilenode call
                                              onSelf = true;
                                              var call1058 = callmethodChecked(this, "methodNames", [0]);
                                              var block1059 = new GraceBlock(this, 278, 1);
                                              setLineNumber(1);    // compilenode identifier
                                              block1059.real = function(var_each) {
                                                var if1060 = GraceDone;
                                                setLineNumber(279);    // compilenode identifier
                                                var call1061 = callmethodChecked(var_oMethodNames, "contains", [1], var_each);
                                                var call1062 = callmethodChecked(call1061, "prefix!", [0]);
                                                if (Grace_isTrue(call1062)) {
                                                  setLineNumber(280);    // compilenode identifier
                                                  var call1063 = callmethodChecked(var_FailedMatch, "new", [1], var_o);
                                                  throw new ReturnException(call1063, returnTarget);
                                                }
                                                return if1060;
                                              };
                                              var call1064 = callmethodChecked(var_prelude, "for()do", [1, 1], call1058, block1059);
                                              setLineNumber(283);    // compilenode array
                                              var array1065 = new PrimitiveGraceList([]);
                                              var call1066 = callmethodChecked(var_SuccessfulMatch, "new", [2], var_o, array1065);
                                              return call1066;
                                            };
                                            func1052.paramCounts = [1];
                                            obj1036.methods["match"] = func1052;
                                            func1052.definitionLine = 272;
                                            func1052.definitionModule = "StandardPrelude";
                                            var func1067 = function(argcv) {    // method asString
                                              var returnTarget = invocationCount;
                                              invocationCount++;
                                              var curarg = 1;
                                              if (argcv[0] !== 0)
                                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                                              setModuleName("StandardPrelude");
                                              setLineNumber(285);    // compilenode string
                                              var string1068 = new GraceString(")");
                                              var string1071 = new GraceString(" + ");
                                              var string1074 = new GraceString("(");
                                              var opresult1076 = callmethodChecked(string1074, "++", [1], var_t1);
                                              var opresult1078 = callmethodChecked(opresult1076, "++", [1], string1071);
                                              var opresult1080 = callmethodChecked(opresult1078, "++", [1], var_t2);
                                              var opresult1082 = callmethodChecked(opresult1080, "++", [1], string1068);
                                              return opresult1082;
                                            };
                                            func1067.paramCounts = [0];
                                            obj1036.methods["asString"] = func1067;
                                            func1067.definitionLine = 285;
                                            func1067.definitionModule = "StandardPrelude";
                                            setLineNumber(255);    // compilenode identifier
                                            var call1083 = callmethodChecked(var_BasicPattern, "new()object", [2, 1], var_t1, var_t2, this);
                                            obj1036.superobj = call1083;
                                            if (call1083.data) obj1036.data = call1083.data;
                                            if (call1083.hasOwnProperty('_value'))
                                                obj1036._value = call1083._value;
                                            superDepth = origSuperDepth;
                                          };
                                          obj_init_1036.apply(inheritingObject, []);
                                          return obj1036;
                                          };
                                          obj984.methods["new()object"] = func1035;
                                        var func1084 = function(argcv) {    // method 
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          setModuleName("StandardPrelude");
                                          setLineNumber(254);    // compilenode string
                                          var string1085 = new GraceString("class TypeUnion");
                                          return string1085;
                                        };
                                        func1084.paramCounts = [];
                                        obj984.methods["asString"] = func1084;
                                        func1084.definitionLine = 254;
                                        func1084.definitionModule = "StandardPrelude";
                                        superDepth = origSuperDepth;
                                      };
                                      obj_init_984.apply(obj984, []);
                                      var var_TypeUnion = obj984;
                                      setLineNumber(278);    // compilenode method
                                      var func1086 = function(argcv) {    // method TypeUnion
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        if (argcv[0] !== 0)
                                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for TypeUnion"));
                                        setModuleName("StandardPrelude");
                                        // TypeUnion is a simple accessor - elide try ... catch
                                        setLineNumber(254);    // compilenode identifier
                                        return var_TypeUnion;
                                      };
                                      func1086.paramCounts = [0];
                                      this.methods["TypeUnion"] = func1086;
                                      func1086.definitionLine = 278;
                                      func1086.definitionModule = "StandardPrelude";
                                      this.methods["TypeUnion"].debug = "def";
                                      setLineNumber(288);    // compilenode object
                                      var obj1087 = Grace_allocObject(GraceObject, "TypeSubtraction");
                                      obj1087.definitionModule = "StandardPrelude";
                                      obj1087.definitionLine = 288;
                                      obj1087.outer = this;
                                      var reader_StandardPrelude_outer1088 = function() {
                                        return this.outer;
                                      };
                                      obj1087.methods["outer"] = reader_StandardPrelude_outer1088;
                                      var obj_init_1087 = function() {
                                        var origSuperDepth = superDepth;
                                        superDepth = obj1087;
                                        var func1089 = function(argcv) {    // method new(2)
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          var var_t1 = arguments[curarg];
                                          curarg++;
                                          var var_t2 = arguments[curarg];
                                          curarg++;
                                          if (argcv[0] !== 2)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for new(2)"));
                                          setModuleName("StandardPrelude");
                                          var obj1090 = Grace_allocObject(null, "TypeSubtraction.TypeSubtraction.new");
                                          obj1090.definitionModule = "StandardPrelude";
                                          obj1090.definitionLine = 288;
                                          obj1090.outer = this;
                                          var reader_StandardPrelude_outer1091 = function() {
                                            return this.outer;
                                          };
                                          obj1090.methods["outer"] = reader_StandardPrelude_outer1091;
                                          var obj_init_1090 = function() {
                                            var origSuperDepth = superDepth;
                                            superDepth = obj1090;
                                            var func1092 = function(argcv) {    // method &(1)
                                              var returnTarget = invocationCount;
                                              invocationCount++;
                                              var curarg = 1;
                                              var var_o = arguments[curarg];
                                              curarg++;
                                              if (argcv[0] !== 1)
                                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for &(1)"));
                                              setModuleName("StandardPrelude");
                                              setLineNumber(291);    // compilenode identifier
                                              var call1093 = callmethodChecked(var_TypeIntersection, "new", [2], this, var_o);
                                              return call1093;
                                            };
                                            func1092.paramCounts = [1];
                                            obj1090.methods["&"] = func1092;
                                            func1092.definitionLine = 290;
                                            func1092.definitionModule = "StandardPrelude";
                                            var func1094 = function(argcv) {    // method |(1)
                                              var returnTarget = invocationCount;
                                              invocationCount++;
                                              var curarg = 1;
                                              var var_o = arguments[curarg];
                                              curarg++;
                                              if (argcv[0] !== 1)
                                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for |(1)"));
                                              setModuleName("StandardPrelude");
                                              setLineNumber(294);    // compilenode identifier
                                              var call1095 = callmethodChecked(var_TypeVariant, "new", [2], this, var_o);
                                              return call1095;
                                            };
                                            func1094.paramCounts = [1];
                                            obj1090.methods["|"] = func1094;
                                            func1094.definitionLine = 293;
                                            func1094.definitionModule = "StandardPrelude";
                                            var func1096 = function(argcv) {    // method +(1)
                                              var returnTarget = invocationCount;
                                              invocationCount++;
                                              var curarg = 1;
                                              var var_o = arguments[curarg];
                                              curarg++;
                                              if (argcv[0] !== 1)
                                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for +(1)"));
                                              setModuleName("StandardPrelude");
                                              setLineNumber(297);    // compilenode identifier
                                              var call1097 = callmethodChecked(var_TypeUnion, "new", [2], this, var_o);
                                              return call1097;
                                            };
                                            func1096.paramCounts = [1];
                                            obj1090.methods["+"] = func1096;
                                            func1096.definitionLine = 296;
                                            func1096.definitionModule = "StandardPrelude";
                                            var func1098 = function(argcv) {    // method -(1)
                                              var returnTarget = invocationCount;
                                              invocationCount++;
                                              var curarg = 1;
                                              var var_o = arguments[curarg];
                                              curarg++;
                                              if (argcv[0] !== 1)
                                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for -(1)"));
                                              setModuleName("StandardPrelude");
                                              setLineNumber(300);    // compilenode identifier
                                              var call1099 = callmethodChecked(var_TypeSubtraction, "new", [2], this, var_o);
                                              return call1099;
                                            };
                                            func1098.paramCounts = [1];
                                            obj1090.methods["-"] = func1098;
                                            func1098.definitionLine = 299;
                                            func1098.definitionModule = "StandardPrelude";
                                            var func1100 = function(argcv) {    // method methodNames
                                              var returnTarget = invocationCount;
                                              invocationCount++;
                                              var curarg = 1;
                                              if (argcv[0] !== 0)
                                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for methodNames"));
                                              setModuleName("StandardPrelude");
                                              setLineNumber(303);    // compilenode identifier
                                              var call1101 = callmethodChecked(var_t2, "methodNames", [0]);
                                              var call1102 = callmethodChecked(var_t1, "methodNames", [0]);
                                              var call1103 = callmethodChecked(call1102, "removeAll", [1], call1101);
                                              return call1103;
                                            };
                                            func1100.paramCounts = [0];
                                            obj1090.methods["methodNames"] = func1100;
                                            func1100.definitionLine = 302;
                                            func1100.definitionModule = "StandardPrelude";
                                            var func1104 = function(argcv) {    // method asString
                                              var returnTarget = invocationCount;
                                              invocationCount++;
                                              var curarg = 1;
                                              if (argcv[0] !== 0)
                                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                                              setModuleName("StandardPrelude");
                                              setLineNumber(305);    // compilenode string
                                              var string1105 = new GraceString(")");
                                              var string1108 = new GraceString(" - ");
                                              var string1111 = new GraceString("(");
                                              var opresult1113 = callmethodChecked(string1111, "++", [1], var_t1);
                                              var opresult1115 = callmethodChecked(opresult1113, "++", [1], string1108);
                                              var opresult1117 = callmethodChecked(opresult1115, "++", [1], var_t2);
                                              var opresult1119 = callmethodChecked(opresult1117, "++", [1], string1105);
                                              return opresult1119;
                                            };
                                            func1104.paramCounts = [0];
                                            obj1090.methods["asString"] = func1104;
                                            func1104.definitionLine = 305;
                                            func1104.definitionModule = "StandardPrelude";
                                            setLineNumber(289);    // compilenode identifier
                                            var call1120 = callmethodChecked(var_BasicPattern, "new()object", [2, 1], var_t1, var_t2, this);
                                            obj1090.superobj = call1120;
                                            if (call1120.data) obj1090.data = call1120.data;
                                            if (call1120.hasOwnProperty('_value'))
                                                obj1090._value = call1120._value;
                                            superDepth = origSuperDepth;
                                          };
                                          obj_init_1090.apply(obj1090, []);
                                          return obj1090;
                                        };
                                        func1089.paramCounts = [2];
                                        obj1087.methods["new"] = func1089;
                                        func1089.definitionLine = 288;
                                        func1089.definitionModule = "StandardPrelude";
                                          var func1121 = function(argcv) {    // method new(2     )()object
                                            var curarg = 1;
                                            var var_t1 = arguments[curarg];
                                            curarg++;
                                            var var_t2 = arguments[curarg];
                                            curarg++;
                                            var inheritingObject = arguments[curarg++];
                                            // Start argument processing
                                            curarg = 1;
                                            curarg++;
                                            curarg++;
                                            // End argument processing
                                            setModuleName("StandardPrelude");
                                            var returnTarget = invocationCount;
                                            invocationCount++;
                                            var obj1122 = Grace_allocObject(null, "new");
                                            obj1122.definitionModule = "StandardPrelude";
                                            obj1122.definitionLine = 288;
                                            var inho1122 = inheritingObject;
                                            while (inho1122.superobj) inho1122 = inho1122.superobj;
                                            inho1122.superobj = obj1122;
                                            obj1122.data = inheritingObject.data;
                                            if (inheritingObject.hasOwnProperty('_value'))
                                              obj1122._value = inheritingObject._value;
                                            obj1122.outer = this;
                                            var reader_StandardPrelude_outer1123 = function() {
                                              return this.outer;
                                            };
                                            obj1122.methods["outer"] = reader_StandardPrelude_outer1123;
                                            var obj_init_1122 = function() {
                                              var origSuperDepth = superDepth;
                                              superDepth = obj1122;
                                              var func1124 = function(argcv) {    // method &(1)
                                                var returnTarget = invocationCount;
                                                invocationCount++;
                                                var curarg = 1;
                                                var var_o = arguments[curarg];
                                                curarg++;
                                                if (argcv[0] !== 1)
                                                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for &(1)"));
                                                setModuleName("StandardPrelude");
                                                setLineNumber(291);    // compilenode identifier
                                                var call1125 = callmethodChecked(var_TypeIntersection, "new", [2], this, var_o);
                                                return call1125;
                                              };
                                              func1124.paramCounts = [1];
                                              obj1122.methods["&"] = func1124;
                                              func1124.definitionLine = 290;
                                              func1124.definitionModule = "StandardPrelude";
                                              var func1126 = function(argcv) {    // method |(1)
                                                var returnTarget = invocationCount;
                                                invocationCount++;
                                                var curarg = 1;
                                                var var_o = arguments[curarg];
                                                curarg++;
                                                if (argcv[0] !== 1)
                                                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for |(1)"));
                                                setModuleName("StandardPrelude");
                                                setLineNumber(294);    // compilenode identifier
                                                var call1127 = callmethodChecked(var_TypeVariant, "new", [2], this, var_o);
                                                return call1127;
                                              };
                                              func1126.paramCounts = [1];
                                              obj1122.methods["|"] = func1126;
                                              func1126.definitionLine = 293;
                                              func1126.definitionModule = "StandardPrelude";
                                              var func1128 = function(argcv) {    // method +(1)
                                                var returnTarget = invocationCount;
                                                invocationCount++;
                                                var curarg = 1;
                                                var var_o = arguments[curarg];
                                                curarg++;
                                                if (argcv[0] !== 1)
                                                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for +(1)"));
                                                setModuleName("StandardPrelude");
                                                setLineNumber(297);    // compilenode identifier
                                                var call1129 = callmethodChecked(var_TypeUnion, "new", [2], this, var_o);
                                                return call1129;
                                              };
                                              func1128.paramCounts = [1];
                                              obj1122.methods["+"] = func1128;
                                              func1128.definitionLine = 296;
                                              func1128.definitionModule = "StandardPrelude";
                                              var func1130 = function(argcv) {    // method -(1)
                                                var returnTarget = invocationCount;
                                                invocationCount++;
                                                var curarg = 1;
                                                var var_o = arguments[curarg];
                                                curarg++;
                                                if (argcv[0] !== 1)
                                                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for -(1)"));
                                                setModuleName("StandardPrelude");
                                                setLineNumber(300);    // compilenode identifier
                                                var call1131 = callmethodChecked(var_TypeSubtraction, "new", [2], this, var_o);
                                                return call1131;
                                              };
                                              func1130.paramCounts = [1];
                                              obj1122.methods["-"] = func1130;
                                              func1130.definitionLine = 299;
                                              func1130.definitionModule = "StandardPrelude";
                                              var func1132 = function(argcv) {    // method methodNames
                                                var returnTarget = invocationCount;
                                                invocationCount++;
                                                var curarg = 1;
                                                if (argcv[0] !== 0)
                                                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for methodNames"));
                                                setModuleName("StandardPrelude");
                                                setLineNumber(303);    // compilenode identifier
                                                var call1133 = callmethodChecked(var_t2, "methodNames", [0]);
                                                var call1134 = callmethodChecked(var_t1, "methodNames", [0]);
                                                var call1135 = callmethodChecked(call1134, "removeAll", [1], call1133);
                                                return call1135;
                                              };
                                              func1132.paramCounts = [0];
                                              obj1122.methods["methodNames"] = func1132;
                                              func1132.definitionLine = 302;
                                              func1132.definitionModule = "StandardPrelude";
                                              var func1136 = function(argcv) {    // method asString
                                                var returnTarget = invocationCount;
                                                invocationCount++;
                                                var curarg = 1;
                                                if (argcv[0] !== 0)
                                                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                                                setModuleName("StandardPrelude");
                                                setLineNumber(305);    // compilenode string
                                                var string1137 = new GraceString(")");
                                                var string1140 = new GraceString(" - ");
                                                var string1143 = new GraceString("(");
                                                var opresult1145 = callmethodChecked(string1143, "++", [1], var_t1);
                                                var opresult1147 = callmethodChecked(opresult1145, "++", [1], string1140);
                                                var opresult1149 = callmethodChecked(opresult1147, "++", [1], var_t2);
                                                var opresult1151 = callmethodChecked(opresult1149, "++", [1], string1137);
                                                return opresult1151;
                                              };
                                              func1136.paramCounts = [0];
                                              obj1122.methods["asString"] = func1136;
                                              func1136.definitionLine = 305;
                                              func1136.definitionModule = "StandardPrelude";
                                              setLineNumber(289);    // compilenode identifier
                                              var call1152 = callmethodChecked(var_BasicPattern, "new()object", [2, 1], var_t1, var_t2, this);
                                              obj1122.superobj = call1152;
                                              if (call1152.data) obj1122.data = call1152.data;
                                              if (call1152.hasOwnProperty('_value'))
                                                  obj1122._value = call1152._value;
                                              superDepth = origSuperDepth;
                                            };
                                            obj_init_1122.apply(inheritingObject, []);
                                            return obj1122;
                                            };
                                            obj1087.methods["new()object"] = func1121;
                                          var func1153 = function(argcv) {    // method 
                                            var returnTarget = invocationCount;
                                            invocationCount++;
                                            var curarg = 1;
                                            setModuleName("StandardPrelude");
                                            setLineNumber(288);    // compilenode string
                                            var string1154 = new GraceString("class TypeSubtraction");
                                            return string1154;
                                          };
                                          func1153.paramCounts = [];
                                          obj1087.methods["asString"] = func1153;
                                          func1153.definitionLine = 288;
                                          func1153.definitionModule = "StandardPrelude";
                                          superDepth = origSuperDepth;
                                        };
                                        obj_init_1087.apply(obj1087, []);
                                        var var_TypeSubtraction = obj1087;
                                        setLineNumber(303);    // compilenode method
                                        var func1155 = function(argcv) {    // method TypeSubtraction
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for TypeSubtraction"));
                                          setModuleName("StandardPrelude");
                                          // TypeSubtraction is a simple accessor - elide try ... catch
                                          setLineNumber(288);    // compilenode identifier
                                          return var_TypeSubtraction;
                                        };
                                        func1155.paramCounts = [0];
                                        this.methods["TypeSubtraction"] = func1155;
                                        func1155.definitionLine = 303;
                                        func1155.definitionModule = "StandardPrelude";
                                        this.methods["TypeSubtraction"].debug = "def";
                                        setLineNumber(311);    // compilenode typedec
                                        // Type decl Extractable
                                        //   Type literal 
                                        var type1157 = new GraceType("Extractable");
                                        type1157.typeMethods.push("extract");
                                        var var_Extractable = type1157;
                                        setLineNumber(303);    // compilenode method
                                        var func1158 = function(argcv) {    // method Extractable
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Extractable"));
                                          setModuleName("StandardPrelude");
                                          // Extractable is a simple accessor - elide try ... catch
                                          setLineNumber(311);    // compilenode identifier
                                          return var_Extractable;
                                        };
                                        func1158.paramCounts = [0];
                                        this.methods["Extractable"] = func1158;
                                        func1158.definitionLine = 303;
                                        func1158.definitionModule = "StandardPrelude";
                                        setLineNumber(315);    // compilenode typedec
                                        // Type decl MatchResult
                                        //   Type literal 
                                        var type1160 = new GraceType("\u2039anon\u203a");
                                        type1160.typeMethods.push("result");
                                        type1160.typeMethods.push("bindings");
                                        var opresult1163 = callmethodChecked(var_Boolean, "&", [1], type1160);
                                        var var_MatchResult = opresult1163;
                                        setLineNumber(303);    // compilenode method
                                        var func1164 = function(argcv) {    // method MatchResult
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for MatchResult"));
                                          setModuleName("StandardPrelude");
                                          // MatchResult is a simple accessor - elide try ... catch
                                          setLineNumber(315);    // compilenode identifier
                                          return var_MatchResult;
                                        };
                                        func1164.paramCounts = [0];
                                        this.methods["MatchResult"] = func1164;
                                        func1164.definitionLine = 303;
                                        func1164.definitionModule = "StandardPrelude";
                                        setLineNumber(320);    // compilenode typedec
                                        // Type decl Pattern
                                        //   Type literal 
                                        var type1166 = new GraceType("Pattern");
                                        type1166.typeMethods.push("&");
                                        type1166.typeMethods.push("|");
                                        type1166.typeMethods.push("match");
                                        var var_Pattern = type1166;
                                        setLineNumber(303);    // compilenode method
                                        var func1167 = function(argcv) {    // method Pattern
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Pattern"));
                                          setModuleName("StandardPrelude");
                                          // Pattern is a simple accessor - elide try ... catch
                                          setLineNumber(320);    // compilenode identifier
                                          return var_Pattern;
                                        };
                                        func1167.paramCounts = [0];
                                        this.methods["Pattern"] = func1167;
                                        func1167.definitionLine = 303;
                                        func1167.definitionModule = "StandardPrelude";
                                        setLineNumber(326);    // compilenode typedec
                                        // Type decl ExceptionKind
                                        //   Type literal 
                                        var type1169 = new GraceType("\u2039anon\u203a");
                                        type1169.typeMethods.push("refine");
                                        type1169.typeMethods.push("parent");
                                        type1169.typeMethods.push("raise");
                                        type1169.typeMethods.push("raise()with");
                                        var opresult1172 = callmethodChecked(var_Pattern, "&", [1], type1169);
                                        var var_ExceptionKind = opresult1172;
                                        setLineNumber(303);    // compilenode method
                                        var func1173 = function(argcv) {    // method ExceptionKind
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ExceptionKind"));
                                          setModuleName("StandardPrelude");
                                          // ExceptionKind is a simple accessor - elide try ... catch
                                          setLineNumber(326);    // compilenode identifier
                                          return var_ExceptionKind;
                                        };
                                        func1173.paramCounts = [0];
                                        this.methods["ExceptionKind"] = func1173;
                                        func1173.definitionLine = 303;
                                        func1173.definitionModule = "StandardPrelude";
                                        setLineNumber(333);    // compilenode typedec
                                        // Type decl Point
                                        //   Type literal 
                                        var type1175 = new GraceType("Point");
                                        type1175.typeMethods.push("x");
                                        type1175.typeMethods.push("y");
                                        type1175.typeMethods.push("+");
                                        type1175.typeMethods.push("-");
                                        type1175.typeMethods.push("prefix-");
                                        type1175.typeMethods.push("*");
                                        type1175.typeMethods.push("/");
                                        type1175.typeMethods.push("length");
                                        type1175.typeMethods.push("distanceTo");
                                        type1175.typeMethods.push("dot");
                                        type1175.typeMethods.push("\u22c5");
                                        var var_Point = type1175;
                                        setLineNumber(303);    // compilenode method
                                        var func1176 = function(argcv) {    // method Point
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Point"));
                                          setModuleName("StandardPrelude");
                                          // Point is a simple accessor - elide try ... catch
                                          setLineNumber(333);    // compilenode identifier
                                          return var_Point;
                                        };
                                        func1176.paramCounts = [0];
                                        this.methods["Point"] = func1176;
                                        func1176.definitionLine = 303;
                                        func1176.definitionModule = "StandardPrelude";
                                        setLineNumber(400);    // compilenode import
                                        // Import of collectionsPrelude as coll
                                        if (typeof gracecode_collectionsPrelude == 'undefined')
                                          throw new GraceExceptionPacket(EnvironmentExceptionObject, 
                                            new GraceString('could not find module collectionsPrelude'));
                                        var var_coll = do_import("collectionsPrelude", gracecode_collectionsPrelude);
                                        var func1177 = function(argcv) {    // method coll
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for coll"));
                                          setModuleName("StandardPrelude");
                                          // coll is a simple accessor - elide try ... catch
                                          return var_coll;
                                        };
                                        func1177.paramCounts = [0];
                                        this.methods["coll"] = func1177;
                                        func1177.definitionLine = 400;
                                        func1177.definitionModule = "StandardPrelude";
                                        func1177.debug = "import";
                                        func1177.confidential = true;
                                        setModuleName("StandardPrelude");
                                        setLineNumber(406);    // compilenode identifier
                                        var var_collections = var_coll;
                                        setLineNumber(303);    // compilenode method
                                        var func1178 = function(argcv) {    // method collections
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for collections"));
                                          setModuleName("StandardPrelude");
                                          // collections is a simple accessor - elide try ... catch
                                          setLineNumber(406);    // compilenode identifier
                                          return var_collections;
                                        };
                                        func1178.paramCounts = [0];
                                        this.methods["collections"] = func1178;
                                        func1178.definitionLine = 303;
                                        func1178.definitionModule = "StandardPrelude";
                                        this.methods["collections"].debug = "def";
                                        setLineNumber(408);    // compilenode typedec
                                        // Type decl Block0
                                        var call1180 = callmethodChecked(var_collections, "Block0", [0]);
                                        var var_Block0 = call1180;
                                        var func1181 = function(argcv) {    // method Block0
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Block0"));
                                          setModuleName("StandardPrelude");
                                          // Block0 is a simple accessor - elide try ... catch
                                          return var_Block0;
                                        };
                                        func1181.paramCounts = [0];
                                        this.methods["Block0"] = func1181;
                                        func1181.definitionLine = 408;
                                        func1181.definitionModule = "StandardPrelude";
                                        setLineNumber(409);    // compilenode typedec
                                        // Type decl Block1
                                        var call1183 = callmethodChecked(var_collections, "Block1", [0]);
                                        var var_Block1 = call1183;
                                        var func1184 = function(argcv) {    // method Block1
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Block1"));
                                          setModuleName("StandardPrelude");
                                          // Block1 is a simple accessor - elide try ... catch
                                          return var_Block1;
                                        };
                                        func1184.paramCounts = [0];
                                        this.methods["Block1"] = func1184;
                                        func1184.definitionLine = 409;
                                        func1184.definitionModule = "StandardPrelude";
                                        setLineNumber(410);    // compilenode typedec
                                        // Type decl Block2
                                        var call1186 = callmethodChecked(var_collections, "Block2", [0]);
                                        var var_Block2 = call1186;
                                        var func1187 = function(argcv) {    // method Block2
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Block2"));
                                          setModuleName("StandardPrelude");
                                          // Block2 is a simple accessor - elide try ... catch
                                          return var_Block2;
                                        };
                                        func1187.paramCounts = [0];
                                        this.methods["Block2"] = func1187;
                                        func1187.definitionLine = 410;
                                        func1187.definitionModule = "StandardPrelude";
                                        setLineNumber(411);    // compilenode typedec
                                        // Type decl Block3
                                        //   Type literal 
                                        var type1189 = new GraceType("Block3");
                                        type1189.typeMethods.push("apply");
                                        var var_Block3 = type1189;
                                        setLineNumber(410);    // compilenode method
                                        var func1190 = function(argcv) {    // method Block3
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Block3"));
                                          setModuleName("StandardPrelude");
                                          // Block3 is a simple accessor - elide try ... catch
                                          setLineNumber(411);    // compilenode identifier
                                          return var_Block3;
                                        };
                                        func1190.paramCounts = [0];
                                        this.methods["Block3"] = func1190;
                                        func1190.definitionLine = 410;
                                        func1190.definitionModule = "StandardPrelude";
                                        setLineNumber(414);    // compilenode typedec
                                        // Type decl Cmd
                                        var var_Cmd = var_Block0;
                                        setLineNumber(410);    // compilenode method
                                        var func1192 = function(argcv) {    // method Cmd
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Cmd"));
                                          setModuleName("StandardPrelude");
                                          // Cmd is a simple accessor - elide try ... catch
                                          setLineNumber(414);    // compilenode identifier
                                          return var_Cmd;
                                        };
                                        func1192.paramCounts = [0];
                                        this.methods["Cmd"] = func1192;
                                        func1192.definitionLine = 410;
                                        func1192.definitionModule = "StandardPrelude";
                                        setLineNumber(415);    // compilenode typedec
                                        // Type decl Fun
                                        var var_Fun = var_Block1;
                                        setLineNumber(410);    // compilenode method
                                        var func1194 = function(argcv) {    // method Fun
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Fun"));
                                          setModuleName("StandardPrelude");
                                          // Fun is a simple accessor - elide try ... catch
                                          setLineNumber(415);    // compilenode identifier
                                          return var_Fun;
                                        };
                                        func1194.paramCounts = [0];
                                        this.methods["Fun"] = func1194;
                                        func1194.definitionLine = 410;
                                        func1194.definitionModule = "StandardPrelude";
                                        setLineNumber(416);    // compilenode typedec
                                        // Type decl Fun2
                                        var var_Fun2 = var_Block2;
                                        setLineNumber(410);    // compilenode method
                                        var func1196 = function(argcv) {    // method Fun2
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Fun2"));
                                          setModuleName("StandardPrelude");
                                          // Fun2 is a simple accessor - elide try ... catch
                                          setLineNumber(416);    // compilenode identifier
                                          return var_Fun2;
                                        };
                                        func1196.paramCounts = [0];
                                        this.methods["Fun2"] = func1196;
                                        func1196.definitionLine = 410;
                                        func1196.definitionModule = "StandardPrelude";
                                        setLineNumber(417);    // compilenode typedec
                                        // Type decl Fun3
                                        var var_Fun3 = var_Block3;
                                        setLineNumber(410);    // compilenode method
                                        var func1198 = function(argcv) {    // method Fun3
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Fun3"));
                                          setModuleName("StandardPrelude");
                                          // Fun3 is a simple accessor - elide try ... catch
                                          setLineNumber(417);    // compilenode identifier
                                          return var_Fun3;
                                        };
                                        func1198.paramCounts = [0];
                                        this.methods["Fun3"] = func1198;
                                        func1198.definitionLine = 410;
                                        func1198.definitionModule = "StandardPrelude";
                                        setLineNumber(418);    // compilenode typedec
                                        // Type decl Proc
                                        var var_Proc = var_Block1;
                                        setLineNumber(410);    // compilenode method
                                        var func1200 = function(argcv) {    // method Proc
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Proc"));
                                          setModuleName("StandardPrelude");
                                          // Proc is a simple accessor - elide try ... catch
                                          setLineNumber(418);    // compilenode identifier
                                          return var_Proc;
                                        };
                                        func1200.paramCounts = [0];
                                        this.methods["Proc"] = func1200;
                                        func1200.definitionLine = 410;
                                        func1200.definitionModule = "StandardPrelude";
                                        setLineNumber(419);    // compilenode typedec
                                        // Type decl Proc2
                                        var var_Proc2 = var_Block2;
                                        setLineNumber(410);    // compilenode method
                                        var func1202 = function(argcv) {    // method Proc2
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Proc2"));
                                          setModuleName("StandardPrelude");
                                          // Proc2 is a simple accessor - elide try ... catch
                                          setLineNumber(419);    // compilenode identifier
                                          return var_Proc2;
                                        };
                                        func1202.paramCounts = [0];
                                        this.methods["Proc2"] = func1202;
                                        func1202.definitionLine = 410;
                                        func1202.definitionModule = "StandardPrelude";
                                        setLineNumber(420);    // compilenode typedec
                                        // Type decl Proc3
                                        var var_Proc3 = var_Block3;
                                        setLineNumber(410);    // compilenode method
                                        var func1204 = function(argcv) {    // method Proc3
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Proc3"));
                                          setModuleName("StandardPrelude");
                                          // Proc3 is a simple accessor - elide try ... catch
                                          setLineNumber(420);    // compilenode identifier
                                          return var_Proc3;
                                        };
                                        func1204.paramCounts = [0];
                                        this.methods["Proc3"] = func1204;
                                        func1204.definitionLine = 410;
                                        func1204.definitionModule = "StandardPrelude";
                                        setLineNumber(422);    // compilenode typedec
                                        // Type decl Collection
                                        var call1206 = callmethodChecked(var_collections, "Collection", [0]);
                                        var var_Collection = call1206;
                                        var func1207 = function(argcv) {    // method Collection
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Collection"));
                                          setModuleName("StandardPrelude");
                                          // Collection is a simple accessor - elide try ... catch
                                          return var_Collection;
                                        };
                                        func1207.paramCounts = [0];
                                        this.methods["Collection"] = func1207;
                                        func1207.definitionLine = 422;
                                        func1207.definitionModule = "StandardPrelude";
                                        setLineNumber(423);    // compilenode typedec
                                        // Type decl Iterable
                                        var call1209 = callmethodChecked(var_collections, "Iterable", [0]);
                                        var var_Iterable = call1209;
                                        var func1210 = function(argcv) {    // method Iterable
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Iterable"));
                                          setModuleName("StandardPrelude");
                                          // Iterable is a simple accessor - elide try ... catch
                                          return var_Iterable;
                                        };
                                        func1210.paramCounts = [0];
                                        this.methods["Iterable"] = func1210;
                                        func1210.definitionLine = 423;
                                        func1210.definitionModule = "StandardPrelude";
                                        setLineNumber(424);    // compilenode typedec
                                        // Type decl Expandable
                                        var call1212 = callmethodChecked(var_collections, "Expandable", [0]);
                                        var var_Expandable = call1212;
                                        var func1213 = function(argcv) {    // method Expandable
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Expandable"));
                                          setModuleName("StandardPrelude");
                                          // Expandable is a simple accessor - elide try ... catch
                                          return var_Expandable;
                                        };
                                        func1213.paramCounts = [0];
                                        this.methods["Expandable"] = func1213;
                                        func1213.definitionLine = 424;
                                        func1213.definitionModule = "StandardPrelude";
                                        setLineNumber(425);    // compilenode typedec
                                        // Type decl Enumerable
                                        var call1215 = callmethodChecked(var_collections, "Enumerable", [0]);
                                        var var_Enumerable = call1215;
                                        var func1216 = function(argcv) {    // method Enumerable
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Enumerable"));
                                          setModuleName("StandardPrelude");
                                          // Enumerable is a simple accessor - elide try ... catch
                                          return var_Enumerable;
                                        };
                                        func1216.paramCounts = [0];
                                        this.methods["Enumerable"] = func1216;
                                        func1216.definitionLine = 425;
                                        func1216.definitionModule = "StandardPrelude";
                                        setLineNumber(426);    // compilenode typedec
                                        // Type decl Binding
                                        var call1218 = callmethodChecked(var_collections, "Binding", [0]);
                                        var var_Binding = call1218;
                                        var func1219 = function(argcv) {    // method Binding
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Binding"));
                                          setModuleName("StandardPrelude");
                                          // Binding is a simple accessor - elide try ... catch
                                          return var_Binding;
                                        };
                                        func1219.paramCounts = [0];
                                        this.methods["Binding"] = func1219;
                                        func1219.definitionLine = 426;
                                        func1219.definitionModule = "StandardPrelude";
                                        setLineNumber(427);    // compilenode typedec
                                        // Type decl Iterator
                                        var call1221 = callmethodChecked(var_collections, "Iterator", [0]);
                                        var var_Iterator = call1221;
                                        var func1222 = function(argcv) {    // method Iterator
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Iterator"));
                                          setModuleName("StandardPrelude");
                                          // Iterator is a simple accessor - elide try ... catch
                                          return var_Iterator;
                                        };
                                        func1222.paramCounts = [0];
                                        this.methods["Iterator"] = func1222;
                                        func1222.definitionLine = 427;
                                        func1222.definitionModule = "StandardPrelude";
                                        setLineNumber(428);    // compilenode typedec
                                        // Type decl Sequence
                                        var call1224 = callmethodChecked(var_collections, "Sequence", [0]);
                                        var var_Sequence = call1224;
                                        var func1225 = function(argcv) {    // method Sequence
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Sequence"));
                                          setModuleName("StandardPrelude");
                                          // Sequence is a simple accessor - elide try ... catch
                                          return var_Sequence;
                                        };
                                        func1225.paramCounts = [0];
                                        this.methods["Sequence"] = func1225;
                                        func1225.definitionLine = 428;
                                        func1225.definitionModule = "StandardPrelude";
                                        setLineNumber(429);    // compilenode typedec
                                        // Type decl List
                                        var call1227 = callmethodChecked(var_collections, "List", [0]);
                                        var var_List = call1227;
                                        var func1228 = function(argcv) {    // method List
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for List"));
                                          setModuleName("StandardPrelude");
                                          // List is a simple accessor - elide try ... catch
                                          return var_List;
                                        };
                                        func1228.paramCounts = [0];
                                        this.methods["List"] = func1228;
                                        func1228.definitionLine = 429;
                                        func1228.definitionModule = "StandardPrelude";
                                        setLineNumber(430);    // compilenode typedec
                                        // Type decl Set
                                        var call1230 = callmethodChecked(var_collections, "Set", [0]);
                                        var var_Set = call1230;
                                        var func1231 = function(argcv) {    // method Set
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Set"));
                                          setModuleName("StandardPrelude");
                                          // Set is a simple accessor - elide try ... catch
                                          return var_Set;
                                        };
                                        func1231.paramCounts = [0];
                                        this.methods["Set"] = func1231;
                                        func1231.definitionLine = 430;
                                        func1231.definitionModule = "StandardPrelude";
                                        setLineNumber(431);    // compilenode typedec
                                        // Type decl Dictionary
                                        var call1233 = callmethodChecked(var_collections, "Dictionary", [0]);
                                        var var_Dictionary = call1233;
                                        var func1234 = function(argcv) {    // method Dictionary
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Dictionary"));
                                          setModuleName("StandardPrelude");
                                          // Dictionary is a simple accessor - elide try ... catch
                                          return var_Dictionary;
                                        };
                                        func1234.paramCounts = [0];
                                        this.methods["Dictionary"] = func1234;
                                        func1234.definitionLine = 431;
                                        func1234.definitionModule = "StandardPrelude";
                                        setLineNumber(433);    // compilenode identifier
                                        var call1235 = callmethodChecked(var_collections, "BoundsError", [0]);
                                        var var_BoundsError = call1235;
                                        var func1236 = function(argcv) {    // method BoundsError
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for BoundsError"));
                                          setModuleName("StandardPrelude");
                                          // BoundsError is a simple accessor - elide try ... catch
                                          return var_BoundsError;
                                        };
                                        func1236.paramCounts = [0];
                                        this.methods["BoundsError"] = func1236;
                                        func1236.definitionLine = 433;
                                        func1236.definitionModule = "StandardPrelude";
                                        this.methods["BoundsError"].debug = "def";
                                        setLineNumber(434);    // compilenode identifier
                                        var call1237 = callmethodChecked(var_collections, "IteratorExhausted", [0]);
                                        var var_IteratorExhausted = call1237;
                                        var func1238 = function(argcv) {    // method IteratorExhausted
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for IteratorExhausted"));
                                          setModuleName("StandardPrelude");
                                          // IteratorExhausted is a simple accessor - elide try ... catch
                                          return var_IteratorExhausted;
                                        };
                                        func1238.paramCounts = [0];
                                        this.methods["IteratorExhausted"] = func1238;
                                        func1238.definitionLine = 434;
                                        func1238.definitionModule = "StandardPrelude";
                                        this.methods["IteratorExhausted"].debug = "def";
                                        setLineNumber(435);    // compilenode identifier
                                        var call1239 = callmethodChecked(var_collections, "NoSuchObject", [0]);
                                        var var_NoSuchObject = call1239;
                                        var func1240 = function(argcv) {    // method NoSuchObject
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for NoSuchObject"));
                                          setModuleName("StandardPrelude");
                                          // NoSuchObject is a simple accessor - elide try ... catch
                                          return var_NoSuchObject;
                                        };
                                        func1240.paramCounts = [0];
                                        this.methods["NoSuchObject"] = func1240;
                                        func1240.definitionLine = 435;
                                        func1240.definitionModule = "StandardPrelude";
                                        this.methods["NoSuchObject"].debug = "def";
                                        setLineNumber(436);    // compilenode identifier
                                        var call1241 = callmethodChecked(var_collections, "RequestError", [0]);
                                        var var_RequestError = call1241;
                                        var func1242 = function(argcv) {    // method RequestError
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for RequestError"));
                                          setModuleName("StandardPrelude");
                                          // RequestError is a simple accessor - elide try ... catch
                                          return var_RequestError;
                                        };
                                        func1242.paramCounts = [0];
                                        this.methods["RequestError"] = func1242;
                                        func1242.definitionLine = 436;
                                        func1242.definitionModule = "StandardPrelude";
                                        this.methods["RequestError"].debug = "def";
                                        setLineNumber(437);    // compilenode identifier
                                        var call1243 = callmethodChecked(var_collections, "SubobjectResponsibility", [0]);
                                        var var_SubobjectResponsibility = call1243;
                                        var func1244 = function(argcv) {    // method SubobjectResponsibility
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for SubobjectResponsibility"));
                                          setModuleName("StandardPrelude");
                                          // SubobjectResponsibility is a simple accessor - elide try ... catch
                                          return var_SubobjectResponsibility;
                                        };
                                        func1244.paramCounts = [0];
                                        this.methods["SubobjectResponsibility"] = func1244;
                                        func1244.definitionLine = 437;
                                        func1244.definitionModule = "StandardPrelude";
                                        this.methods["SubobjectResponsibility"].debug = "def";
                                        setLineNumber(438);    // compilenode identifier
                                        var call1245 = callmethodChecked(var_collections, "ConcurrentModification", [0]);
                                        var var_ConcurrentModification = call1245;
                                        var func1246 = function(argcv) {    // method ConcurrentModification
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ConcurrentModification"));
                                          setModuleName("StandardPrelude");
                                          // ConcurrentModification is a simple accessor - elide try ... catch
                                          return var_ConcurrentModification;
                                        };
                                        func1246.paramCounts = [0];
                                        this.methods["ConcurrentModification"] = func1246;
                                        func1246.definitionLine = 438;
                                        func1246.definitionModule = "StandardPrelude";
                                        this.methods["ConcurrentModification"].debug = "def";
                                        setLineNumber(439);    // compilenode string
                                        var string1247 = new GraceString("UninitializedVariable");
                                        var call1248 = callmethodChecked(var_prelude, "ProgrammingError", [0]);
                                        var call1249 = callmethodChecked(call1248, "refine", [1], string1247);
                                        var var_UninitializedVariable = call1249;
                                        var func1250 = function(argcv) {    // method UninitializedVariable
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for UninitializedVariable"));
                                          setModuleName("StandardPrelude");
                                          // UninitializedVariable is a simple accessor - elide try ... catch
                                          return var_UninitializedVariable;
                                        };
                                        func1250.paramCounts = [0];
                                        this.methods["UninitializedVariable"] = func1250;
                                        func1250.definitionLine = 439;
                                        func1250.definitionModule = "StandardPrelude";
                                        this.methods["UninitializedVariable"].debug = "def";
                                        setLineNumber(441);    // compilenode identifier
                                        var call1251 = callmethodChecked(var_collections, "collection", [0]);
                                        var var_collection = call1251;
                                        var func1252 = function(argcv) {    // method collection
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for collection"));
                                          setModuleName("StandardPrelude");
                                          // collection is a simple accessor - elide try ... catch
                                          return var_collection;
                                        };
                                        func1252.paramCounts = [0];
                                        this.methods["collection"] = func1252;
                                        func1252.definitionLine = 441;
                                        func1252.definitionModule = "StandardPrelude";
                                        this.methods["collection"].debug = "def";
                                        setLineNumber(442);    // compilenode identifier
                                        var call1253 = callmethodChecked(var_collections, "enumerable", [0]);
                                        var var_enumerable = call1253;
                                        var func1254 = function(argcv) {    // method enumerable
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for enumerable"));
                                          setModuleName("StandardPrelude");
                                          // enumerable is a simple accessor - elide try ... catch
                                          return var_enumerable;
                                        };
                                        func1254.paramCounts = [0];
                                        this.methods["enumerable"] = func1254;
                                        func1254.definitionLine = 442;
                                        func1254.definitionModule = "StandardPrelude";
                                        this.methods["enumerable"].debug = "def";
                                        setLineNumber(443);    // compilenode identifier
                                        var call1255 = callmethodChecked(var_collections, "indexable", [0]);
                                        var var_indexable = call1255;
                                        var func1256 = function(argcv) {    // method indexable
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for indexable"));
                                          setModuleName("StandardPrelude");
                                          // indexable is a simple accessor - elide try ... catch
                                          return var_indexable;
                                        };
                                        func1256.paramCounts = [0];
                                        this.methods["indexable"] = func1256;
                                        func1256.definitionLine = 443;
                                        func1256.definitionModule = "StandardPrelude";
                                        this.methods["indexable"].debug = "def";
                                        setLineNumber(449);    // compilenode identifier
                                        var call1257 = callmethodChecked(var_collections, "sequence", [0]);
                                        var call1258 = callmethodChecked(call1257, "empty", [0]);
                                        var var_emptySequence = call1258;
                                        var func1259 = function(argcv) {    // method emptySequence
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for emptySequence"));
                                          setModuleName("StandardPrelude");
                                          // emptySequence is a simple accessor - elide try ... catch
                                          return var_emptySequence;
                                        };
                                        func1259.paramCounts = [0];
                                        this.methods["emptySequence"] = func1259;
                                        func1259.definitionLine = 449;
                                        func1259.definitionModule = "StandardPrelude";
                                        this.methods["emptySequence"].debug = "def";
                                        setLineNumber(466);    // compilenode identifier
                                        var call1260 = callmethodChecked(var_collections, "binding", [0]);
                                        var var_binding = call1260;
                                        var func1261 = function(argcv) {    // method binding
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for binding"));
                                          setModuleName("StandardPrelude");
                                          // binding is a simple accessor - elide try ... catch
                                          return var_binding;
                                        };
                                        func1261.paramCounts = [0];
                                        this.methods["binding"] = func1261;
                                        func1261.definitionLine = 466;
                                        func1261.definitionModule = "StandardPrelude";
                                        this.methods["binding"].debug = "def";
                                        setLineNumber(467);    // compilenode identifier
                                        var call1262 = callmethodChecked(var_collections, "range", [0]);
                                        var var_range = call1262;
                                        var func1263 = function(argcv) {    // method range
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for range"));
                                          setModuleName("StandardPrelude");
                                          // range is a simple accessor - elide try ... catch
                                          return var_range;
                                        };
                                        func1263.paramCounts = [0];
                                        this.methods["range"] = func1263;
                                        func1263.definitionLine = 467;
                                        func1263.definitionModule = "StandardPrelude";
                                        this.methods["range"].debug = "def";
                                        setLineNumber(4);    // compilenode identifier
                                        var var_isStandardPrelude = GraceTrue;
                                        setLineNumber(467);    // compilenode method
                                        var func1264 = function(argcv) {    // method isStandardPrelude
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          if (argcv[0] !== 0)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isStandardPrelude"));
                                          setModuleName("StandardPrelude");
                                          // isStandardPrelude is a simple accessor - elide try ... catch
                                          setLineNumber(4);    // compilenode identifier
                                          return var_isStandardPrelude;
                                        };
                                        func1264.paramCounts = [0];
                                        this.methods["isStandardPrelude"] = func1264;
                                        func1264.definitionLine = 467;
                                        func1264.definitionModule = "StandardPrelude";
                                        setLineNumber(467);    // compilenode method
                                        var func1265 = function(argcv) {    // method isStandardPrelude:=(1)
                                          var returnTarget = invocationCount;
                                          invocationCount++;
                                          var curarg = 1;
                                          var var___95__var__95__assign__95__tmp = arguments[curarg];
                                          curarg++;
                                          if (argcv[0] !== 1)
                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isStandardPrelude:=(1)"));
                                          setModuleName("StandardPrelude");
                                          var_isStandardPrelude = var___95__var__95__assign__95__tmp;
                                          return GraceDone;
                                        };
                                        func1265.paramCounts = [1];
                                        this.methods["isStandardPrelude:="] = func1265;
                                        func1265.definitionLine = 467;
                                        func1265.definitionModule = "StandardPrelude";
                                        this.methods["isStandardPrelude"].debug = "var";
                                        setLineNumber(6);    // compilenode object
                                        var obj1266 = Grace_allocObject(GraceObject, "SuccessfulMatch");
                                        obj1266.definitionModule = "StandardPrelude";
                                        obj1266.definitionLine = 6;
                                        obj1266.outer = this;
                                        var reader_StandardPrelude_outer1267 = function() {
                                          return this.outer;
                                        };
                                        obj1266.methods["outer"] = reader_StandardPrelude_outer1267;
                                        var obj_init_1266 = function() {
                                          var origSuperDepth = superDepth;
                                          superDepth = obj1266;
                                          var func1268 = function(argcv) {    // method new(2)
                                            var returnTarget = invocationCount;
                                            invocationCount++;
                                            var curarg = 1;
                                            var var_result__39__ = arguments[curarg];
                                            curarg++;
                                            var var_bindings__39__ = arguments[curarg];
                                            curarg++;
                                            if (argcv[0] !== 2)
                                              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for new(2)"));
                                            setModuleName("StandardPrelude");
                                            var obj1269 = Grace_allocObject(null, "new");
                                            obj1269.definitionModule = "StandardPrelude";
                                            obj1269.definitionLine = 6;
                                            obj1269.outer = this;
                                            var reader_StandardPrelude_outer1270 = function() {
                                              return this.outer;
                                            };
                                            obj1269.methods["outer"] = reader_StandardPrelude_outer1270;
                                            var obj_init_1269 = function() {
                                              var origSuperDepth = superDepth;
                                              superDepth = obj1269;
                                              var func1271 = function(argcv) {    // method result
                                                var returnTarget = invocationCount;
                                                invocationCount++;
                                                var curarg = 1;
                                                if (argcv[0] !== 0)
                                                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for result"));
                                                setModuleName("StandardPrelude");
                                                // result is a simple accessor - elide try ... catch
                                                setLineNumber(8);    // compilenode identifier
                                                return var_result__39__;
                                              };
                                              func1271.paramCounts = [0];
                                              obj1269.methods["result"] = func1271;
                                              func1271.definitionLine = 8;
                                              func1271.definitionModule = "StandardPrelude";
                                              var func1272 = function(argcv) {    // method bindings
                                                var returnTarget = invocationCount;
                                                invocationCount++;
                                                var curarg = 1;
                                                if (argcv[0] !== 0)
                                                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for bindings"));
                                                setModuleName("StandardPrelude");
                                                // bindings is a simple accessor - elide try ... catch
                                                setLineNumber(9);    // compilenode identifier
                                                return var_bindings__39__;
                                              };
                                              func1272.paramCounts = [0];
                                              obj1269.methods["bindings"] = func1272;
                                              func1272.definitionLine = 9;
                                              func1272.definitionModule = "StandardPrelude";
                                              var func1273 = function(argcv) {    // method asString
                                                var returnTarget = invocationCount;
                                                invocationCount++;
                                                var curarg = 1;
                                                if (argcv[0] !== 0)
                                                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                                                setModuleName("StandardPrelude");
                                                setLineNumber(11);    // compilenode string
                                                var string1274 = new GraceString(")");
                                                onSelf = true;
                                                var call1276 = callmethodChecked(this, "bindings", [0]);
                                                var string1278 = new GraceString(", bindings = ");
                                                onSelf = true;
                                                var call1280 = callmethodChecked(this, "result", [0]);
                                                var string1282 = new GraceString("SuccessfulMatch(result = ");
                                                var opresult1284 = callmethodChecked(string1282, "++", [1], call1280);
                                                var opresult1286 = callmethodChecked(opresult1284, "++", [1], string1278);
                                                var opresult1288 = callmethodChecked(opresult1286, "++", [1], call1276);
                                                var opresult1290 = callmethodChecked(opresult1288, "++", [1], string1274);
                                                return opresult1290;
                                              };
                                              func1273.paramCounts = [0];
                                              obj1269.methods["asString"] = func1273;
                                              func1273.definitionLine = 10;
                                              func1273.definitionModule = "StandardPrelude";
                                              setLineNumber(7);    // compilenode identifier
                                              obj1269.superobj = GraceTrue;
                                              if (GraceTrue.data) obj1269.data = GraceTrue.data;
                                              if (GraceTrue.hasOwnProperty('_value'))
                                                  obj1269._value = GraceTrue._value;
                                              superDepth = origSuperDepth;
                                            };
                                            obj_init_1269.apply(obj1269, []);
                                            return obj1269;
                                          };
                                          func1268.paramCounts = [2];
                                          obj1266.methods["new"] = func1268;
                                          func1268.definitionLine = 6;
                                          func1268.definitionModule = "StandardPrelude";
                                            var func1291 = function(argcv) {    // method new(2     )()object
                                              var curarg = 1;
                                              var var_result__39__ = arguments[curarg];
                                              curarg++;
                                              var var_bindings__39__ = arguments[curarg];
                                              curarg++;
                                              var inheritingObject = arguments[curarg++];
                                              // Start argument processing
                                              curarg = 1;
                                              curarg++;
                                              curarg++;
                                              // End argument processing
                                              setModuleName("StandardPrelude");
                                              var returnTarget = invocationCount;
                                              invocationCount++;
                                              var obj1292 = Grace_allocObject(null, "new");
                                              obj1292.definitionModule = "StandardPrelude";
                                              obj1292.definitionLine = 6;
                                              var inho1292 = inheritingObject;
                                              while (inho1292.superobj) inho1292 = inho1292.superobj;
                                              inho1292.superobj = obj1292;
                                              obj1292.data = inheritingObject.data;
                                              if (inheritingObject.hasOwnProperty('_value'))
                                                obj1292._value = inheritingObject._value;
                                              obj1292.outer = this;
                                              var reader_StandardPrelude_outer1293 = function() {
                                                return this.outer;
                                              };
                                              obj1292.methods["outer"] = reader_StandardPrelude_outer1293;
                                              var obj_init_1292 = function() {
                                                var origSuperDepth = superDepth;
                                                superDepth = obj1292;
                                                var func1294 = function(argcv) {    // method result
                                                  var returnTarget = invocationCount;
                                                  invocationCount++;
                                                  var curarg = 1;
                                                  if (argcv[0] !== 0)
                                                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for result"));
                                                  setModuleName("StandardPrelude");
                                                  // result is a simple accessor - elide try ... catch
                                                  setLineNumber(8);    // compilenode identifier
                                                  return var_result__39__;
                                                };
                                                func1294.paramCounts = [0];
                                                obj1292.methods["result"] = func1294;
                                                func1294.definitionLine = 8;
                                                func1294.definitionModule = "StandardPrelude";
                                                var func1295 = function(argcv) {    // method bindings
                                                  var returnTarget = invocationCount;
                                                  invocationCount++;
                                                  var curarg = 1;
                                                  if (argcv[0] !== 0)
                                                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for bindings"));
                                                  setModuleName("StandardPrelude");
                                                  // bindings is a simple accessor - elide try ... catch
                                                  setLineNumber(9);    // compilenode identifier
                                                  return var_bindings__39__;
                                                };
                                                func1295.paramCounts = [0];
                                                obj1292.methods["bindings"] = func1295;
                                                func1295.definitionLine = 9;
                                                func1295.definitionModule = "StandardPrelude";
                                                var func1296 = function(argcv) {    // method asString
                                                  var returnTarget = invocationCount;
                                                  invocationCount++;
                                                  var curarg = 1;
                                                  if (argcv[0] !== 0)
                                                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                                                  setModuleName("StandardPrelude");
                                                  setLineNumber(11);    // compilenode string
                                                  var string1297 = new GraceString(")");
                                                  onSelf = true;
                                                  var call1299 = callmethodChecked(this, "bindings", [0]);
                                                  var string1301 = new GraceString(", bindings = ");
                                                  onSelf = true;
                                                  var call1303 = callmethodChecked(this, "result", [0]);
                                                  var string1305 = new GraceString("SuccessfulMatch(result = ");
                                                  var opresult1307 = callmethodChecked(string1305, "++", [1], call1303);
                                                  var opresult1309 = callmethodChecked(opresult1307, "++", [1], string1301);
                                                  var opresult1311 = callmethodChecked(opresult1309, "++", [1], call1299);
                                                  var opresult1313 = callmethodChecked(opresult1311, "++", [1], string1297);
                                                  return opresult1313;
                                                };
                                                func1296.paramCounts = [0];
                                                obj1292.methods["asString"] = func1296;
                                                func1296.definitionLine = 10;
                                                func1296.definitionModule = "StandardPrelude";
                                                setLineNumber(7);    // compilenode identifier
                                                obj1292.superobj = GraceTrue;
                                                if (GraceTrue.data) obj1292.data = GraceTrue.data;
                                                if (GraceTrue.hasOwnProperty('_value'))
                                                    obj1292._value = GraceTrue._value;
                                                superDepth = origSuperDepth;
                                              };
                                              obj_init_1292.apply(inheritingObject, []);
                                              return obj1292;
                                              };
                                              obj1266.methods["new()object"] = func1291;
                                            var func1314 = function(argcv) {    // method 
                                              var returnTarget = invocationCount;
                                              invocationCount++;
                                              var curarg = 1;
                                              setModuleName("StandardPrelude");
                                              setLineNumber(6);    // compilenode string
                                              var string1315 = new GraceString("class SuccessfulMatch");
                                              return string1315;
                                            };
                                            func1314.paramCounts = [];
                                            obj1266.methods["asString"] = func1314;
                                            func1314.definitionLine = 6;
                                            func1314.definitionModule = "StandardPrelude";
                                            superDepth = origSuperDepth;
                                          };
                                          obj_init_1266.apply(obj1266, []);
                                          var var_SuccessfulMatch = obj1266;
                                          setLineNumber(11);    // compilenode method
                                          var func1316 = function(argcv) {    // method SuccessfulMatch
                                            var returnTarget = invocationCount;
                                            invocationCount++;
                                            var curarg = 1;
                                            if (argcv[0] !== 0)
                                              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for SuccessfulMatch"));
                                            setModuleName("StandardPrelude");
                                            // SuccessfulMatch is a simple accessor - elide try ... catch
                                            setLineNumber(6);    // compilenode identifier
                                            return var_SuccessfulMatch;
                                          };
                                          func1316.paramCounts = [0];
                                          this.methods["SuccessfulMatch"] = func1316;
                                          func1316.definitionLine = 11;
                                          func1316.definitionModule = "StandardPrelude";
                                          this.methods["SuccessfulMatch"].debug = "def";
                                          setLineNumber(15);    // compilenode object
                                          var obj1317 = Grace_allocObject(GraceObject, "FailedMatch");
                                          obj1317.definitionModule = "StandardPrelude";
                                          obj1317.definitionLine = 15;
                                          obj1317.outer = this;
                                          var reader_StandardPrelude_outer1318 = function() {
                                            return this.outer;
                                          };
                                          obj1317.methods["outer"] = reader_StandardPrelude_outer1318;
                                          var obj_init_1317 = function() {
                                            var origSuperDepth = superDepth;
                                            superDepth = obj1317;
                                            var func1319 = function(argcv) {    // method new(1)
                                              var returnTarget = invocationCount;
                                              invocationCount++;
                                              var curarg = 1;
                                              var var_result__39__ = arguments[curarg];
                                              curarg++;
                                              if (argcv[0] !== 1)
                                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for new(1)"));
                                              setModuleName("StandardPrelude");
                                              var obj1320 = Grace_allocObject(null, "new");
                                              obj1320.definitionModule = "StandardPrelude";
                                              obj1320.definitionLine = 15;
                                              obj1320.outer = this;
                                              var reader_StandardPrelude_outer1321 = function() {
                                                return this.outer;
                                              };
                                              obj1320.methods["outer"] = reader_StandardPrelude_outer1321;
                                              var obj_init_1320 = function() {
                                                var origSuperDepth = superDepth;
                                                superDepth = obj1320;
                                                var func1322 = function(argcv) {    // method result
                                                  var returnTarget = invocationCount;
                                                  invocationCount++;
                                                  var curarg = 1;
                                                  if (argcv[0] !== 0)
                                                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for result"));
                                                  setModuleName("StandardPrelude");
                                                  // result is a simple accessor - elide try ... catch
                                                  setLineNumber(17);    // compilenode identifier
                                                  return var_result__39__;
                                                };
                                                func1322.paramCounts = [0];
                                                obj1320.methods["result"] = func1322;
                                                func1322.definitionLine = 17;
                                                func1322.definitionModule = "StandardPrelude";
                                                var func1323 = function(argcv) {    // method bindings
                                                  var returnTarget = invocationCount;
                                                  invocationCount++;
                                                  var curarg = 1;
                                                  if (argcv[0] !== 0)
                                                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for bindings"));
                                                  setModuleName("StandardPrelude");
                                                  // bindings is a simple accessor - elide try ... catch
                                                  setLineNumber(18);    // compilenode identifier
                                                  return var_emptySequence;
                                                };
                                                func1323.paramCounts = [0];
                                                obj1320.methods["bindings"] = func1323;
                                                func1323.definitionLine = 18;
                                                func1323.definitionModule = "StandardPrelude";
                                                var func1324 = function(argcv) {    // method asString
                                                  var returnTarget = invocationCount;
                                                  invocationCount++;
                                                  var curarg = 1;
                                                  if (argcv[0] !== 0)
                                                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                                                  setModuleName("StandardPrelude");
                                                  setLineNumber(20);    // compilenode string
                                                  var string1325 = new GraceString(")");
                                                  onSelf = true;
                                                  var call1327 = callmethodChecked(this, "result", [0]);
                                                  var string1329 = new GraceString("FailedMatch(result = ");
                                                  var opresult1331 = callmethodChecked(string1329, "++", [1], call1327);
                                                  var opresult1333 = callmethodChecked(opresult1331, "++", [1], string1325);
                                                  return opresult1333;
                                                };
                                                func1324.paramCounts = [0];
                                                obj1320.methods["asString"] = func1324;
                                                func1324.definitionLine = 19;
                                                func1324.definitionModule = "StandardPrelude";
                                                setLineNumber(16);    // compilenode identifier
                                                obj1320.superobj = GraceFalse;
                                                if (GraceFalse.data) obj1320.data = GraceFalse.data;
                                                if (GraceFalse.hasOwnProperty('_value'))
                                                    obj1320._value = GraceFalse._value;
                                                superDepth = origSuperDepth;
                                              };
                                              obj_init_1320.apply(obj1320, []);
                                              return obj1320;
                                            };
                                            func1319.paramCounts = [1];
                                            obj1317.methods["new"] = func1319;
                                            func1319.definitionLine = 15;
                                            func1319.definitionModule = "StandardPrelude";
                                              var func1334 = function(argcv) {    // method new(1     )()object
                                                var curarg = 1;
                                                var var_result__39__ = arguments[curarg];
                                                curarg++;
                                                var inheritingObject = arguments[curarg++];
                                                // Start argument processing
                                                curarg = 1;
                                                curarg++;
                                                // End argument processing
                                                setModuleName("StandardPrelude");
                                                var returnTarget = invocationCount;
                                                invocationCount++;
                                                var obj1335 = Grace_allocObject(null, "new");
                                                obj1335.definitionModule = "StandardPrelude";
                                                obj1335.definitionLine = 15;
                                                var inho1335 = inheritingObject;
                                                while (inho1335.superobj) inho1335 = inho1335.superobj;
                                                inho1335.superobj = obj1335;
                                                obj1335.data = inheritingObject.data;
                                                if (inheritingObject.hasOwnProperty('_value'))
                                                  obj1335._value = inheritingObject._value;
                                                obj1335.outer = this;
                                                var reader_StandardPrelude_outer1336 = function() {
                                                  return this.outer;
                                                };
                                                obj1335.methods["outer"] = reader_StandardPrelude_outer1336;
                                                var obj_init_1335 = function() {
                                                  var origSuperDepth = superDepth;
                                                  superDepth = obj1335;
                                                  var func1337 = function(argcv) {    // method result
                                                    var returnTarget = invocationCount;
                                                    invocationCount++;
                                                    var curarg = 1;
                                                    if (argcv[0] !== 0)
                                                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for result"));
                                                    setModuleName("StandardPrelude");
                                                    // result is a simple accessor - elide try ... catch
                                                    setLineNumber(17);    // compilenode identifier
                                                    return var_result__39__;
                                                  };
                                                  func1337.paramCounts = [0];
                                                  obj1335.methods["result"] = func1337;
                                                  func1337.definitionLine = 17;
                                                  func1337.definitionModule = "StandardPrelude";
                                                  var func1338 = function(argcv) {    // method bindings
                                                    var returnTarget = invocationCount;
                                                    invocationCount++;
                                                    var curarg = 1;
                                                    if (argcv[0] !== 0)
                                                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for bindings"));
                                                    setModuleName("StandardPrelude");
                                                    // bindings is a simple accessor - elide try ... catch
                                                    setLineNumber(18);    // compilenode identifier
                                                    return var_emptySequence;
                                                  };
                                                  func1338.paramCounts = [0];
                                                  obj1335.methods["bindings"] = func1338;
                                                  func1338.definitionLine = 18;
                                                  func1338.definitionModule = "StandardPrelude";
                                                  var func1339 = function(argcv) {    // method asString
                                                    var returnTarget = invocationCount;
                                                    invocationCount++;
                                                    var curarg = 1;
                                                    if (argcv[0] !== 0)
                                                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                                                    setModuleName("StandardPrelude");
                                                    setLineNumber(20);    // compilenode string
                                                    var string1340 = new GraceString(")");
                                                    onSelf = true;
                                                    var call1342 = callmethodChecked(this, "result", [0]);
                                                    var string1344 = new GraceString("FailedMatch(result = ");
                                                    var opresult1346 = callmethodChecked(string1344, "++", [1], call1342);
                                                    var opresult1348 = callmethodChecked(opresult1346, "++", [1], string1340);
                                                    return opresult1348;
                                                  };
                                                  func1339.paramCounts = [0];
                                                  obj1335.methods["asString"] = func1339;
                                                  func1339.definitionLine = 19;
                                                  func1339.definitionModule = "StandardPrelude";
                                                  setLineNumber(16);    // compilenode identifier
                                                  obj1335.superobj = GraceFalse;
                                                  if (GraceFalse.data) obj1335.data = GraceFalse.data;
                                                  if (GraceFalse.hasOwnProperty('_value'))
                                                      obj1335._value = GraceFalse._value;
                                                  superDepth = origSuperDepth;
                                                };
                                                obj_init_1335.apply(inheritingObject, []);
                                                return obj1335;
                                                };
                                                obj1317.methods["new()object"] = func1334;
                                              var func1349 = function(argcv) {    // method 
                                                var returnTarget = invocationCount;
                                                invocationCount++;
                                                var curarg = 1;
                                                setModuleName("StandardPrelude");
                                                setLineNumber(15);    // compilenode string
                                                var string1350 = new GraceString("class FailedMatch");
                                                return string1350;
                                              };
                                              func1349.paramCounts = [];
                                              obj1317.methods["asString"] = func1349;
                                              func1349.definitionLine = 15;
                                              func1349.definitionModule = "StandardPrelude";
                                              superDepth = origSuperDepth;
                                            };
                                            obj_init_1317.apply(obj1317, []);
                                            var var_FailedMatch = obj1317;
                                            setLineNumber(20);    // compilenode method
                                            var func1351 = function(argcv) {    // method FailedMatch
                                              var returnTarget = invocationCount;
                                              invocationCount++;
                                              var curarg = 1;
                                              if (argcv[0] !== 0)
                                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for FailedMatch"));
                                              setModuleName("StandardPrelude");
                                              // FailedMatch is a simple accessor - elide try ... catch
                                              setLineNumber(15);    // compilenode identifier
                                              return var_FailedMatch;
                                            };
                                            func1351.paramCounts = [0];
                                            this.methods["FailedMatch"] = func1351;
                                            func1351.definitionLine = 20;
                                            func1351.definitionModule = "StandardPrelude";
                                            this.methods["FailedMatch"].debug = "def";
                                            setLineNumber(71);    // compilenode object
                                            var obj1352 = Grace_allocObject(GraceObject, "BasicPattern");
                                            obj1352.definitionModule = "StandardPrelude";
                                            obj1352.definitionLine = 71;
                                            obj1352.outer = this;
                                            var reader_StandardPrelude_outer1353 = function() {
                                              return this.outer;
                                            };
                                            obj1352.methods["outer"] = reader_StandardPrelude_outer1353;
                                            var obj_init_1352 = function() {
                                              var origSuperDepth = superDepth;
                                              superDepth = obj1352;
                                              var func1354 = function(argcv) {    // method new
                                                var returnTarget = invocationCount;
                                                invocationCount++;
                                                var curarg = 1;
                                                if (argcv[0] !== 0)
                                                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for new"));
                                                setModuleName("StandardPrelude");
                                                var obj1355 = Grace_allocObject(GraceObject, "new");
                                                obj1355.definitionModule = "StandardPrelude";
                                                obj1355.definitionLine = 71;
                                                obj1355.outer = this;
                                                var reader_StandardPrelude_outer1356 = function() {
                                                  return this.outer;
                                                };
                                                obj1355.methods["outer"] = reader_StandardPrelude_outer1356;
                                                var obj_init_1355 = function() {
                                                  var origSuperDepth = superDepth;
                                                  superDepth = obj1355;
                                                  var func1357 = function(argcv) {    // method &(1)
                                                    var returnTarget = invocationCount;
                                                    invocationCount++;
                                                    var curarg = 1;
                                                    var var_o = arguments[curarg];
                                                    curarg++;
                                                    if (argcv[0] !== 1)
                                                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for &(1)"));
                                                    setModuleName("StandardPrelude");
                                                    setLineNumber(73);    // compilenode identifier
                                                    var call1358 = callmethodChecked(var_AndPattern, "new", [2], this, var_o);
                                                    return call1358;
                                                  };
                                                  func1357.paramCounts = [1];
                                                  obj1355.methods["&"] = func1357;
                                                  func1357.definitionLine = 72;
                                                  func1357.definitionModule = "StandardPrelude";
                                                  var func1359 = function(argcv) {    // method |(1)
                                                    var returnTarget = invocationCount;
                                                    invocationCount++;
                                                    var curarg = 1;
                                                    var var_o = arguments[curarg];
                                                    curarg++;
                                                    if (argcv[0] !== 1)
                                                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for |(1)"));
                                                    setModuleName("StandardPrelude");
                                                    setLineNumber(76);    // compilenode identifier
                                                    var call1360 = callmethodChecked(var_OrPattern, "new", [2], this, var_o);
                                                    return call1360;
                                                  };
                                                  func1359.paramCounts = [1];
                                                  obj1355.methods["|"] = func1359;
                                                  func1359.definitionLine = 75;
                                                  func1359.definitionModule = "StandardPrelude";
                                                  superDepth = origSuperDepth;
                                                };
                                                obj_init_1355.apply(obj1355, []);
                                                return obj1355;
                                              };
                                              func1354.paramCounts = [0];
                                              obj1352.methods["new"] = func1354;
                                              func1354.definitionLine = 71;
                                              func1354.definitionModule = "StandardPrelude";
                                                var func1361 = function(argcv) {    // method new()object
                                                  var curarg = 1;
                                                  var inheritingObject = arguments[curarg++];
                                                  // Start argument processing
                                                  curarg = 1;
                                                  // End argument processing
                                                  setModuleName("StandardPrelude");
                                                  var returnTarget = invocationCount;
                                                  invocationCount++;
                                                  var obj1362 = Grace_allocObject(GraceObject, "new");
                                                  obj1362.definitionModule = "StandardPrelude";
                                                  obj1362.definitionLine = 71;
                                                  var inho1362 = inheritingObject;
                                                  while (inho1362.superobj) inho1362 = inho1362.superobj;
                                                  inho1362.superobj = obj1362;
                                                  obj1362.data = inheritingObject.data;
                                                  if (inheritingObject.hasOwnProperty('_value'))
                                                    obj1362._value = inheritingObject._value;
                                                  obj1362.outer = this;
                                                  var reader_StandardPrelude_outer1363 = function() {
                                                    return this.outer;
                                                  };
                                                  obj1362.methods["outer"] = reader_StandardPrelude_outer1363;
                                                  var obj_init_1362 = function() {
                                                    var origSuperDepth = superDepth;
                                                    superDepth = obj1362;
                                                    var func1364 = function(argcv) {    // method &(1)
                                                      var returnTarget = invocationCount;
                                                      invocationCount++;
                                                      var curarg = 1;
                                                      var var_o = arguments[curarg];
                                                      curarg++;
                                                      if (argcv[0] !== 1)
                                                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for &(1)"));
                                                      setModuleName("StandardPrelude");
                                                      setLineNumber(73);    // compilenode identifier
                                                      var call1365 = callmethodChecked(var_AndPattern, "new", [2], this, var_o);
                                                      return call1365;
                                                    };
                                                    func1364.paramCounts = [1];
                                                    obj1362.methods["&"] = func1364;
                                                    func1364.definitionLine = 72;
                                                    func1364.definitionModule = "StandardPrelude";
                                                    var func1366 = function(argcv) {    // method |(1)
                                                      var returnTarget = invocationCount;
                                                      invocationCount++;
                                                      var curarg = 1;
                                                      var var_o = arguments[curarg];
                                                      curarg++;
                                                      if (argcv[0] !== 1)
                                                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for |(1)"));
                                                      setModuleName("StandardPrelude");
                                                      setLineNumber(76);    // compilenode identifier
                                                      var call1367 = callmethodChecked(var_OrPattern, "new", [2], this, var_o);
                                                      return call1367;
                                                    };
                                                    func1366.paramCounts = [1];
                                                    obj1362.methods["|"] = func1366;
                                                    func1366.definitionLine = 75;
                                                    func1366.definitionModule = "StandardPrelude";
                                                    superDepth = origSuperDepth;
                                                  };
                                                  obj_init_1362.apply(inheritingObject, []);
                                                  return obj1362;
                                                  };
                                                  obj1352.methods["new()object"] = func1361;
                                                var func1368 = function(argcv) {    // method 
                                                  var returnTarget = invocationCount;
                                                  invocationCount++;
                                                  var curarg = 1;
                                                  setModuleName("StandardPrelude");
                                                  setLineNumber(71);    // compilenode string
                                                  var string1369 = new GraceString("class BasicPattern");
                                                  return string1369;
                                                };
                                                func1368.paramCounts = [];
                                                obj1352.methods["asString"] = func1368;
                                                func1368.definitionLine = 71;
                                                func1368.definitionModule = "StandardPrelude";
                                                superDepth = origSuperDepth;
                                              };
                                              obj_init_1352.apply(obj1352, []);
                                              var var_BasicPattern = obj1352;
                                              setLineNumber(20);    // compilenode method
                                              var func1370 = function(argcv) {    // method BasicPattern
                                                var returnTarget = invocationCount;
                                                invocationCount++;
                                                var curarg = 1;
                                                if (argcv[0] !== 0)
                                                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for BasicPattern"));
                                                setModuleName("StandardPrelude");
                                                // BasicPattern is a simple accessor - elide try ... catch
                                                setLineNumber(71);    // compilenode identifier
                                                return var_BasicPattern;
                                              };
                                              func1370.paramCounts = [0];
                                              this.methods["BasicPattern"] = func1370;
                                              func1370.definitionLine = 20;
                                              func1370.definitionModule = "StandardPrelude";
                                              this.methods["BasicPattern"].debug = "def";
                                              setLineNumber(79);    // compilenode object
                                              var obj1371 = Grace_allocObject(GraceObject, "MatchAndDestructuringPattern");
                                              obj1371.definitionModule = "StandardPrelude";
                                              obj1371.definitionLine = 79;
                                              obj1371.outer = this;
                                              var reader_StandardPrelude_outer1372 = function() {
                                                return this.outer;
                                              };
                                              obj1371.methods["outer"] = reader_StandardPrelude_outer1372;
                                              var obj_init_1371 = function() {
                                                var origSuperDepth = superDepth;
                                                superDepth = obj1371;
                                                var func1373 = function(argcv) {    // method new(2)
                                                  var returnTarget = invocationCount;
                                                  invocationCount++;
                                                  var curarg = 1;
                                                  var var_pat = arguments[curarg];
                                                  curarg++;
                                                  var var_items__39__ = arguments[curarg];
                                                  curarg++;
                                                  if (argcv[0] !== 2)
                                                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for new(2)"));
                                                  setModuleName("StandardPrelude");
                                                  var obj1374 = Grace_allocObject(null, "new");
                                                  obj1374.definitionModule = "StandardPrelude";
                                                  obj1374.definitionLine = 79;
                                                  obj1374.outer = this;
                                                  var reader_StandardPrelude_outer1375 = function() {
                                                    return this.outer;
                                                  };
                                                  obj1374.methods["outer"] = reader_StandardPrelude_outer1375;
                                                  var obj_init_1374 = function() {
                                                    var origSuperDepth = superDepth;
                                                    superDepth = obj1374;
                                                    var func1376 = function(argcv) {    // method match(1)
                                                      var returnTarget = invocationCount;
                                                      invocationCount++;
                                                      var curarg = 1;
                                                      var var_o = arguments[curarg];
                                                      curarg++;
                                                      if (argcv[0] !== 1)
                                                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for match(1)"));
                                                      setModuleName("StandardPrelude");
                                                      setLineNumber(84);    // compilenode identifier
                                                      var call1377 = callmethodChecked(var_pat, "match", [1], var_o);
                                                      var var_m = call1377;
                                                      var if1378 = GraceDone;
                                                      setLineNumber(85);    // compilenode identifier
                                                      if (Grace_isTrue(var_m)) {
                                                        setLineNumber(86);    // compilenode identifier
                                                        var call1379 = callmethodChecked(var_m, "bindings", [0]);
                                                        var var_mbindings = call1379;
                                                        setLineNumber(87);    // compilenode array
                                                        var array1380 = new PrimitiveGraceList([]);
                                                        var var_bindings = array1380;
                                                        var if1381 = GraceDone;
                                                        setLineNumber(88);    // compilenode call
                                                        onSelf = true;
                                                        var call1382 = callmethodChecked(this, "items", [0]);
                                                        var call1383 = callmethodChecked(call1382, "size", [0]);
                                                        var call1385 = callmethodChecked(var_mbindings, "size", [0]);
                                                        var opresult1387 = callmethodChecked(call1385, "<", [1], call1383);
                                                        if (Grace_isTrue(opresult1387)) {
                                                          var if1388 = GraceDone;
                                                          setLineNumber(89);    // compilenode identifier
                                                          var call1389 = callmethodChecked(var_Extractable, "match", [1], var_o);
                                                          if (Grace_isTrue(call1389)) {
                                                            setLineNumber(90);    // compilenode identifier
                                                            var call1390 = callmethodChecked(var_o, "extract", [0]);
                                                            var_mbindings = call1390;
                                                            if1388 = GraceDone;
                                                          } else {
                                                            setLineNumber(92);    // compilenode identifier
                                                            var call1391 = callmethodChecked(var_FailedMatch, "new", [1], var_o);
                                                            return call1391;
                                                          }
                                                          if1381 = if1388;
                                                        }
                                                        setLineNumber(95);    // compilenode call
                                                        onSelf = true;
                                                        var call1392 = callmethodChecked(this, "items", [0]);
                                                        var call1393 = callmethodChecked(call1392, "indices", [0]);
                                                        var block1394 = new GraceBlock(this, 95, 1);
                                                        setLineNumber(1);    // compilenode identifier
                                                        block1394.real = function(var_i) {
                                                          setLineNumber(96);    // compilenode identifier
                                                          var call1395 = callmethodChecked(var_mbindings, "at", [1], var_i);
                                                          onSelf = true;
                                                          var call1396 = callmethodChecked(this, "items", [0]);
                                                          var call1397 = callmethodChecked(call1396, "at", [1], var_i);
                                                          var call1398 = callmethodChecked(call1397, "match", [1], call1395);
                                                          var var_b = call1398;
                                                          var if1399 = GraceDone;
                                                          setLineNumber(97);    // compilenode identifier
                                                          var call1400 = callmethodChecked(var_b, "prefix!", [0]);
                                                          if (Grace_isTrue(call1400)) {
                                                            setLineNumber(98);    // compilenode identifier
                                                            var call1401 = callmethodChecked(var_FailedMatch, "new", [1], var_o);
                                                            throw new ReturnException(call1401, returnTarget);
                                                          }
                                                          setLineNumber(100);    // compilenode identifier
                                                          var call1402 = callmethodChecked(var_b, "bindings", [0]);
                                                          var block1403 = new GraceBlock(this, 100, 1);
                                                          setLineNumber(1);    // compilenode identifier
                                                          block1403.real = function(var_bb) {
                                                            setLineNumber(101);    // compilenode identifier
                                                            var call1404 = callmethodChecked(var_bindings, "push", [1], var_bb);
                                                            return call1404;
                                                          };
                                                          var call1405 = callmethodChecked(var_prelude, "for()do", [1, 1], call1402, block1403);
                                                          return call1405;
                                                        };
                                                        var call1406 = callmethodChecked(var_prelude, "for()do", [1, 1], call1393, block1394);
                                                        setLineNumber(104);    // compilenode identifier
                                                        var call1407 = callmethodChecked(var_SuccessfulMatch, "new", [2], var_o, var_bindings);
                                                        if1378 = call1407;
                                                      } else {
                                                        setLineNumber(106);    // compilenode identifier
                                                        var call1408 = callmethodChecked(var_FailedMatch, "new", [1], var_o);
                                                        if1378 = call1408;
                                                      }
                                                      return if1378;
                                                    };
                                                    func1376.paramCounts = [1];
                                                    obj1374.methods["match"] = func1376;
                                                    func1376.definitionLine = 83;
                                                    func1376.definitionModule = "StandardPrelude";
                                                    setLineNumber(80);    // compilenode identifier
                                                    var call1409 = callmethodChecked(var_BasicPattern, "new()object", [0, 1], this);
                                                    obj1374.superobj = call1409;
                                                    if (call1409.data) obj1374.data = call1409.data;
                                                    if (call1409.hasOwnProperty('_value'))
                                                        obj1374._value = call1409._value;
                                                    setLineNumber(81);    // compilenode identifier
                                                    obj1374.data["pattern"] = var_pat;
                                                    var reader_StandardPrelude_pattern1410 = function() {
                                                      return this.data["pattern"];
                                                    };
                                                    reader_StandardPrelude_pattern1410.def = true;
                                                    reader_StandardPrelude_pattern1410.confidential = true;
                                                    obj1374.methods["pattern"] = reader_StandardPrelude_pattern1410;
                                                    setLineNumber(82);    // compilenode identifier
                                                    obj1374.data["items"] = var_items__39__;
                                                    var reader_StandardPrelude_items1411 = function() {
                                                      return this.data["items"];
                                                    };
                                                    reader_StandardPrelude_items1411.def = true;
                                                    reader_StandardPrelude_items1411.confidential = true;
                                                    obj1374.methods["items"] = reader_StandardPrelude_items1411;
                                                    superDepth = origSuperDepth;
                                                  };
                                                  obj_init_1374.apply(obj1374, []);
                                                  return obj1374;
                                                };
                                                func1373.paramCounts = [2];
                                                obj1371.methods["new"] = func1373;
                                                func1373.definitionLine = 79;
                                                func1373.definitionModule = "StandardPrelude";
                                                  var func1412 = function(argcv) {    // method new(2     )()object
                                                    var curarg = 1;
                                                    var var_pat = arguments[curarg];
                                                    curarg++;
                                                    var var_items__39__ = arguments[curarg];
                                                    curarg++;
                                                    var inheritingObject = arguments[curarg++];
                                                    // Start argument processing
                                                    curarg = 1;
                                                    curarg++;
                                                    curarg++;
                                                    // End argument processing
                                                    setModuleName("StandardPrelude");
                                                    var returnTarget = invocationCount;
                                                    invocationCount++;
                                                    var obj1413 = Grace_allocObject(null, "new");
                                                    obj1413.definitionModule = "StandardPrelude";
                                                    obj1413.definitionLine = 79;
                                                    var inho1413 = inheritingObject;
                                                    while (inho1413.superobj) inho1413 = inho1413.superobj;
                                                    inho1413.superobj = obj1413;
                                                    obj1413.data = inheritingObject.data;
                                                    if (inheritingObject.hasOwnProperty('_value'))
                                                      obj1413._value = inheritingObject._value;
                                                    obj1413.outer = this;
                                                    var reader_StandardPrelude_outer1414 = function() {
                                                      return this.outer;
                                                    };
                                                    obj1413.methods["outer"] = reader_StandardPrelude_outer1414;
                                                    var obj_init_1413 = function() {
                                                      var origSuperDepth = superDepth;
                                                      superDepth = obj1413;
                                                      var func1415 = function(argcv) {    // method match(1)
                                                        var returnTarget = invocationCount;
                                                        invocationCount++;
                                                        var curarg = 1;
                                                        var var_o = arguments[curarg];
                                                        curarg++;
                                                        if (argcv[0] !== 1)
                                                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for match(1)"));
                                                        setModuleName("StandardPrelude");
                                                        setLineNumber(84);    // compilenode identifier
                                                        var call1416 = callmethodChecked(var_pat, "match", [1], var_o);
                                                        var var_m = call1416;
                                                        var if1417 = GraceDone;
                                                        setLineNumber(85);    // compilenode identifier
                                                        if (Grace_isTrue(var_m)) {
                                                          setLineNumber(86);    // compilenode identifier
                                                          var call1418 = callmethodChecked(var_m, "bindings", [0]);
                                                          var var_mbindings = call1418;
                                                          setLineNumber(87);    // compilenode array
                                                          var array1419 = new PrimitiveGraceList([]);
                                                          var var_bindings = array1419;
                                                          var if1420 = GraceDone;
                                                          setLineNumber(88);    // compilenode call
                                                          onSelf = true;
                                                          var call1421 = callmethodChecked(this, "items", [0]);
                                                          var call1422 = callmethodChecked(call1421, "size", [0]);
                                                          var call1424 = callmethodChecked(var_mbindings, "size", [0]);
                                                          var opresult1426 = callmethodChecked(call1424, "<", [1], call1422);
                                                          if (Grace_isTrue(opresult1426)) {
                                                            var if1427 = GraceDone;
                                                            setLineNumber(89);    // compilenode identifier
                                                            var call1428 = callmethodChecked(var_Extractable, "match", [1], var_o);
                                                            if (Grace_isTrue(call1428)) {
                                                              setLineNumber(90);    // compilenode identifier
                                                              var call1429 = callmethodChecked(var_o, "extract", [0]);
                                                              var_mbindings = call1429;
                                                              if1427 = GraceDone;
                                                            } else {
                                                              setLineNumber(92);    // compilenode identifier
                                                              var call1430 = callmethodChecked(var_FailedMatch, "new", [1], var_o);
                                                              return call1430;
                                                            }
                                                            if1420 = if1427;
                                                          }
                                                          setLineNumber(95);    // compilenode call
                                                          onSelf = true;
                                                          var call1431 = callmethodChecked(this, "items", [0]);
                                                          var call1432 = callmethodChecked(call1431, "indices", [0]);
                                                          var block1433 = new GraceBlock(this, 95, 1);
                                                          setLineNumber(1);    // compilenode identifier
                                                          block1433.real = function(var_i) {
                                                            setLineNumber(96);    // compilenode identifier
                                                            var call1434 = callmethodChecked(var_mbindings, "at", [1], var_i);
                                                            onSelf = true;
                                                            var call1435 = callmethodChecked(this, "items", [0]);
                                                            var call1436 = callmethodChecked(call1435, "at", [1], var_i);
                                                            var call1437 = callmethodChecked(call1436, "match", [1], call1434);
                                                            var var_b = call1437;
                                                            var if1438 = GraceDone;
                                                            setLineNumber(97);    // compilenode identifier
                                                            var call1439 = callmethodChecked(var_b, "prefix!", [0]);
                                                            if (Grace_isTrue(call1439)) {
                                                              setLineNumber(98);    // compilenode identifier
                                                              var call1440 = callmethodChecked(var_FailedMatch, "new", [1], var_o);
                                                              throw new ReturnException(call1440, returnTarget);
                                                            }
                                                            setLineNumber(100);    // compilenode identifier
                                                            var call1441 = callmethodChecked(var_b, "bindings", [0]);
                                                            var block1442 = new GraceBlock(this, 100, 1);
                                                            setLineNumber(1);    // compilenode identifier
                                                            block1442.real = function(var_bb) {
                                                              setLineNumber(101);    // compilenode identifier
                                                              var call1443 = callmethodChecked(var_bindings, "push", [1], var_bb);
                                                              return call1443;
                                                            };
                                                            var call1444 = callmethodChecked(var_prelude, "for()do", [1, 1], call1441, block1442);
                                                            return call1444;
                                                          };
                                                          var call1445 = callmethodChecked(var_prelude, "for()do", [1, 1], call1432, block1433);
                                                          setLineNumber(104);    // compilenode identifier
                                                          var call1446 = callmethodChecked(var_SuccessfulMatch, "new", [2], var_o, var_bindings);
                                                          if1417 = call1446;
                                                        } else {
                                                          setLineNumber(106);    // compilenode identifier
                                                          var call1447 = callmethodChecked(var_FailedMatch, "new", [1], var_o);
                                                          if1417 = call1447;
                                                        }
                                                        return if1417;
                                                      };
                                                      func1415.paramCounts = [1];
                                                      obj1413.methods["match"] = func1415;
                                                      func1415.definitionLine = 83;
                                                      func1415.definitionModule = "StandardPrelude";
                                                      setLineNumber(80);    // compilenode identifier
                                                      var call1448 = callmethodChecked(var_BasicPattern, "new()object", [0, 1], this);
                                                      obj1413.superobj = call1448;
                                                      if (call1448.data) obj1413.data = call1448.data;
                                                      if (call1448.hasOwnProperty('_value'))
                                                          obj1413._value = call1448._value;
                                                      setLineNumber(81);    // compilenode identifier
                                                      obj1413.data["pattern"] = var_pat;
                                                      var reader_StandardPrelude_pattern1449 = function() {
                                                        return this.data["pattern"];
                                                      };
                                                      reader_StandardPrelude_pattern1449.def = true;
                                                      reader_StandardPrelude_pattern1449.confidential = true;
                                                      obj1413.methods["pattern"] = reader_StandardPrelude_pattern1449;
                                                      setLineNumber(82);    // compilenode identifier
                                                      obj1413.data["items"] = var_items__39__;
                                                      var reader_StandardPrelude_items1450 = function() {
                                                        return this.data["items"];
                                                      };
                                                      reader_StandardPrelude_items1450.def = true;
                                                      reader_StandardPrelude_items1450.confidential = true;
                                                      obj1413.methods["items"] = reader_StandardPrelude_items1450;
                                                      superDepth = origSuperDepth;
                                                    };
                                                    obj_init_1413.apply(inheritingObject, []);
                                                    return obj1413;
                                                    };
                                                    obj1371.methods["new()object"] = func1412;
                                                  var func1451 = function(argcv) {    // method 
                                                    var returnTarget = invocationCount;
                                                    invocationCount++;
                                                    var curarg = 1;
                                                    setModuleName("StandardPrelude");
                                                    setLineNumber(79);    // compilenode string
                                                    var string1452 = new GraceString("class MatchAndDestructuringPattern");
                                                    return string1452;
                                                  };
                                                  func1451.paramCounts = [];
                                                  obj1371.methods["asString"] = func1451;
                                                  func1451.definitionLine = 79;
                                                  func1451.definitionModule = "StandardPrelude";
                                                  superDepth = origSuperDepth;
                                                };
                                                obj_init_1371.apply(obj1371, []);
                                                var var_MatchAndDestructuringPattern = obj1371;
                                                setLineNumber(100);    // compilenode method
                                                var func1453 = function(argcv) {    // method MatchAndDestructuringPattern
                                                  var returnTarget = invocationCount;
                                                  invocationCount++;
                                                  var curarg = 1;
                                                  if (argcv[0] !== 0)
                                                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for MatchAndDestructuringPattern"));
                                                  setModuleName("StandardPrelude");
                                                  // MatchAndDestructuringPattern is a simple accessor - elide try ... catch
                                                  setLineNumber(79);    // compilenode identifier
                                                  return var_MatchAndDestructuringPattern;
                                                };
                                                func1453.paramCounts = [0];
                                                this.methods["MatchAndDestructuringPattern"] = func1453;
                                                func1453.definitionLine = 100;
                                                func1453.definitionModule = "StandardPrelude";
                                                this.methods["MatchAndDestructuringPattern"].debug = "def";
                                                setLineNumber(111);    // compilenode object
                                                var obj1454 = Grace_allocObject(GraceObject, "VariablePattern");
                                                obj1454.definitionModule = "StandardPrelude";
                                                obj1454.definitionLine = 111;
                                                obj1454.outer = this;
                                                var reader_StandardPrelude_outer1455 = function() {
                                                  return this.outer;
                                                };
                                                obj1454.methods["outer"] = reader_StandardPrelude_outer1455;
                                                var obj_init_1454 = function() {
                                                  var origSuperDepth = superDepth;
                                                  superDepth = obj1454;
                                                  var func1456 = function(argcv) {    // method new(1)
                                                    var returnTarget = invocationCount;
                                                    invocationCount++;
                                                    var curarg = 1;
                                                    var var_nm = arguments[curarg];
                                                    curarg++;
                                                    if (argcv[0] !== 1)
                                                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for new(1)"));
                                                    setModuleName("StandardPrelude");
                                                    var obj1457 = Grace_allocObject(null, "new");
                                                    obj1457.definitionModule = "StandardPrelude";
                                                    obj1457.definitionLine = 111;
                                                    obj1457.outer = this;
                                                    var reader_StandardPrelude_outer1458 = function() {
                                                      return this.outer;
                                                    };
                                                    obj1457.methods["outer"] = reader_StandardPrelude_outer1458;
                                                    var obj_init_1457 = function() {
                                                      var origSuperDepth = superDepth;
                                                      superDepth = obj1457;
                                                      var func1459 = function(argcv) {    // method match(1)
                                                        var returnTarget = invocationCount;
                                                        invocationCount++;
                                                        var curarg = 1;
                                                        var var_o = arguments[curarg];
                                                        curarg++;
                                                        if (argcv[0] !== 1)
                                                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for match(1)"));
                                                        setModuleName("StandardPrelude");
                                                        setLineNumber(114);    // compilenode identifier
                                                        var array1460 = new PrimitiveGraceList([var_o]);
                                                        var call1461 = callmethodChecked(var_SuccessfulMatch, "new", [2], var_o, array1460);
                                                        return call1461;
                                                      };
                                                      func1459.paramCounts = [1];
                                                      obj1457.methods["match"] = func1459;
                                                      func1459.definitionLine = 113;
                                                      func1459.definitionModule = "StandardPrelude";
                                                      setLineNumber(112);    // compilenode identifier
                                                      var call1462 = callmethodChecked(var_BasicPattern, "new()object", [0, 1], this);
                                                      obj1457.superobj = call1462;
                                                      if (call1462.data) obj1457.data = call1462.data;
                                                      if (call1462.hasOwnProperty('_value'))
                                                          obj1457._value = call1462._value;
                                                      superDepth = origSuperDepth;
                                                    };
                                                    obj_init_1457.apply(obj1457, []);
                                                    return obj1457;
                                                  };
                                                  func1456.paramCounts = [1];
                                                  obj1454.methods["new"] = func1456;
                                                  func1456.definitionLine = 111;
                                                  func1456.definitionModule = "StandardPrelude";
                                                    var func1463 = function(argcv) {    // method new(1     )()object
                                                      var curarg = 1;
                                                      var var_nm = arguments[curarg];
                                                      curarg++;
                                                      var inheritingObject = arguments[curarg++];
                                                      // Start argument processing
                                                      curarg = 1;
                                                      curarg++;
                                                      // End argument processing
                                                      setModuleName("StandardPrelude");
                                                      var returnTarget = invocationCount;
                                                      invocationCount++;
                                                      var obj1464 = Grace_allocObject(null, "new");
                                                      obj1464.definitionModule = "StandardPrelude";
                                                      obj1464.definitionLine = 111;
                                                      var inho1464 = inheritingObject;
                                                      while (inho1464.superobj) inho1464 = inho1464.superobj;
                                                      inho1464.superobj = obj1464;
                                                      obj1464.data = inheritingObject.data;
                                                      if (inheritingObject.hasOwnProperty('_value'))
                                                        obj1464._value = inheritingObject._value;
                                                      obj1464.outer = this;
                                                      var reader_StandardPrelude_outer1465 = function() {
                                                        return this.outer;
                                                      };
                                                      obj1464.methods["outer"] = reader_StandardPrelude_outer1465;
                                                      var obj_init_1464 = function() {
                                                        var origSuperDepth = superDepth;
                                                        superDepth = obj1464;
                                                        var func1466 = function(argcv) {    // method match(1)
                                                          var returnTarget = invocationCount;
                                                          invocationCount++;
                                                          var curarg = 1;
                                                          var var_o = arguments[curarg];
                                                          curarg++;
                                                          if (argcv[0] !== 1)
                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for match(1)"));
                                                          setModuleName("StandardPrelude");
                                                          setLineNumber(114);    // compilenode identifier
                                                          var array1467 = new PrimitiveGraceList([var_o]);
                                                          var call1468 = callmethodChecked(var_SuccessfulMatch, "new", [2], var_o, array1467);
                                                          return call1468;
                                                        };
                                                        func1466.paramCounts = [1];
                                                        obj1464.methods["match"] = func1466;
                                                        func1466.definitionLine = 113;
                                                        func1466.definitionModule = "StandardPrelude";
                                                        setLineNumber(112);    // compilenode identifier
                                                        var call1469 = callmethodChecked(var_BasicPattern, "new()object", [0, 1], this);
                                                        obj1464.superobj = call1469;
                                                        if (call1469.data) obj1464.data = call1469.data;
                                                        if (call1469.hasOwnProperty('_value'))
                                                            obj1464._value = call1469._value;
                                                        superDepth = origSuperDepth;
                                                      };
                                                      obj_init_1464.apply(inheritingObject, []);
                                                      return obj1464;
                                                      };
                                                      obj1454.methods["new()object"] = func1463;
                                                    var func1470 = function(argcv) {    // method 
                                                      var returnTarget = invocationCount;
                                                      invocationCount++;
                                                      var curarg = 1;
                                                      setModuleName("StandardPrelude");
                                                      setLineNumber(111);    // compilenode string
                                                      var string1471 = new GraceString("class VariablePattern");
                                                      return string1471;
                                                    };
                                                    func1470.paramCounts = [];
                                                    obj1454.methods["asString"] = func1470;
                                                    func1470.definitionLine = 111;
                                                    func1470.definitionModule = "StandardPrelude";
                                                    superDepth = origSuperDepth;
                                                  };
                                                  obj_init_1454.apply(obj1454, []);
                                                  var var_VariablePattern = obj1454;
                                                  setLineNumber(100);    // compilenode method
                                                  var func1472 = function(argcv) {    // method VariablePattern
                                                    var returnTarget = invocationCount;
                                                    invocationCount++;
                                                    var curarg = 1;
                                                    if (argcv[0] !== 0)
                                                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for VariablePattern"));
                                                    setModuleName("StandardPrelude");
                                                    // VariablePattern is a simple accessor - elide try ... catch
                                                    setLineNumber(111);    // compilenode identifier
                                                    return var_VariablePattern;
                                                  };
                                                  func1472.paramCounts = [0];
                                                  this.methods["VariablePattern"] = func1472;
                                                  func1472.definitionLine = 100;
                                                  func1472.definitionModule = "StandardPrelude";
                                                  this.methods["VariablePattern"].debug = "def";
                                                  setLineNumber(118);    // compilenode object
                                                  var obj1473 = Grace_allocObject(GraceObject, "BindingPattern");
                                                  obj1473.definitionModule = "StandardPrelude";
                                                  obj1473.definitionLine = 118;
                                                  obj1473.outer = this;
                                                  var reader_StandardPrelude_outer1474 = function() {
                                                    return this.outer;
                                                  };
                                                  obj1473.methods["outer"] = reader_StandardPrelude_outer1474;
                                                  var obj_init_1473 = function() {
                                                    var origSuperDepth = superDepth;
                                                    superDepth = obj1473;
                                                    var func1475 = function(argcv) {    // method new(1)
                                                      var returnTarget = invocationCount;
                                                      invocationCount++;
                                                      var curarg = 1;
                                                      var var_pat = arguments[curarg];
                                                      curarg++;
                                                      if (argcv[0] !== 1)
                                                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for new(1)"));
                                                      setModuleName("StandardPrelude");
                                                      var obj1476 = Grace_allocObject(null, "new");
                                                      obj1476.definitionModule = "StandardPrelude";
                                                      obj1476.definitionLine = 118;
                                                      obj1476.outer = this;
                                                      var reader_StandardPrelude_outer1477 = function() {
                                                        return this.outer;
                                                      };
                                                      obj1476.methods["outer"] = reader_StandardPrelude_outer1477;
                                                      var obj_init_1476 = function() {
                                                        var origSuperDepth = superDepth;
                                                        superDepth = obj1476;
                                                        var func1478 = function(argcv) {    // method match(1)
                                                          var returnTarget = invocationCount;
                                                          invocationCount++;
                                                          var curarg = 1;
                                                          var var_o = arguments[curarg];
                                                          curarg++;
                                                          if (argcv[0] !== 1)
                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for match(1)"));
                                                          setModuleName("StandardPrelude");
                                                          setLineNumber(121);    // compilenode identifier
                                                          var array1479 = new PrimitiveGraceList([var_o]);
                                                          var var_bindings = array1479;
                                                          setLineNumber(122);    // compilenode identifier
                                                          var call1480 = callmethodChecked(var_pat, "match", [1], var_o);
                                                          var var_m = call1480;
                                                          var if1481 = GraceDone;
                                                          setLineNumber(123);    // compilenode identifier
                                                          var call1482 = callmethodChecked(var_m, "prefix!", [0]);
                                                          if (Grace_isTrue(call1482)) {
                                                            setLineNumber(124);    // compilenode identifier
                                                            return var_m;
                                                          }
                                                          setLineNumber(126);    // compilenode identifier
                                                          var call1483 = callmethodChecked(var_m, "bindings", [0]);
                                                          var block1484 = new GraceBlock(this, 126, 1);
                                                          setLineNumber(1);    // compilenode identifier
                                                          block1484.real = function(var_b) {
                                                            setLineNumber(127);    // compilenode identifier
                                                            var call1485 = callmethodChecked(var_bindings, "push", [1], var_b);
                                                            return call1485;
                                                          };
                                                          var call1486 = callmethodChecked(var_prelude, "for()do", [1, 1], call1483, block1484);
                                                          setLineNumber(129);    // compilenode identifier
                                                          var call1487 = callmethodChecked(var_SuccessfulMatch, "new", [2], var_o, var_bindings);
                                                          return call1487;
                                                        };
                                                        func1478.paramCounts = [1];
                                                        obj1476.methods["match"] = func1478;
                                                        func1478.definitionLine = 120;
                                                        func1478.definitionModule = "StandardPrelude";
                                                        setLineNumber(119);    // compilenode identifier
                                                        var call1488 = callmethodChecked(var_BasicPattern, "new()object", [0, 1], this);
                                                        obj1476.superobj = call1488;
                                                        if (call1488.data) obj1476.data = call1488.data;
                                                        if (call1488.hasOwnProperty('_value'))
                                                            obj1476._value = call1488._value;
                                                        superDepth = origSuperDepth;
                                                      };
                                                      obj_init_1476.apply(obj1476, []);
                                                      return obj1476;
                                                    };
                                                    func1475.paramCounts = [1];
                                                    obj1473.methods["new"] = func1475;
                                                    func1475.definitionLine = 118;
                                                    func1475.definitionModule = "StandardPrelude";
                                                      var func1489 = function(argcv) {    // method new(1     )()object
                                                        var curarg = 1;
                                                        var var_pat = arguments[curarg];
                                                        curarg++;
                                                        var inheritingObject = arguments[curarg++];
                                                        // Start argument processing
                                                        curarg = 1;
                                                        curarg++;
                                                        // End argument processing
                                                        setModuleName("StandardPrelude");
                                                        var returnTarget = invocationCount;
                                                        invocationCount++;
                                                        var obj1490 = Grace_allocObject(null, "new");
                                                        obj1490.definitionModule = "StandardPrelude";
                                                        obj1490.definitionLine = 118;
                                                        var inho1490 = inheritingObject;
                                                        while (inho1490.superobj) inho1490 = inho1490.superobj;
                                                        inho1490.superobj = obj1490;
                                                        obj1490.data = inheritingObject.data;
                                                        if (inheritingObject.hasOwnProperty('_value'))
                                                          obj1490._value = inheritingObject._value;
                                                        obj1490.outer = this;
                                                        var reader_StandardPrelude_outer1491 = function() {
                                                          return this.outer;
                                                        };
                                                        obj1490.methods["outer"] = reader_StandardPrelude_outer1491;
                                                        var obj_init_1490 = function() {
                                                          var origSuperDepth = superDepth;
                                                          superDepth = obj1490;
                                                          var func1492 = function(argcv) {    // method match(1)
                                                            var returnTarget = invocationCount;
                                                            invocationCount++;
                                                            var curarg = 1;
                                                            var var_o = arguments[curarg];
                                                            curarg++;
                                                            if (argcv[0] !== 1)
                                                              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for match(1)"));
                                                            setModuleName("StandardPrelude");
                                                            setLineNumber(121);    // compilenode identifier
                                                            var array1493 = new PrimitiveGraceList([var_o]);
                                                            var var_bindings = array1493;
                                                            setLineNumber(122);    // compilenode identifier
                                                            var call1494 = callmethodChecked(var_pat, "match", [1], var_o);
                                                            var var_m = call1494;
                                                            var if1495 = GraceDone;
                                                            setLineNumber(123);    // compilenode identifier
                                                            var call1496 = callmethodChecked(var_m, "prefix!", [0]);
                                                            if (Grace_isTrue(call1496)) {
                                                              setLineNumber(124);    // compilenode identifier
                                                              return var_m;
                                                            }
                                                            setLineNumber(126);    // compilenode identifier
                                                            var call1497 = callmethodChecked(var_m, "bindings", [0]);
                                                            var block1498 = new GraceBlock(this, 126, 1);
                                                            setLineNumber(1);    // compilenode identifier
                                                            block1498.real = function(var_b) {
                                                              setLineNumber(127);    // compilenode identifier
                                                              var call1499 = callmethodChecked(var_bindings, "push", [1], var_b);
                                                              return call1499;
                                                            };
                                                            var call1500 = callmethodChecked(var_prelude, "for()do", [1, 1], call1497, block1498);
                                                            setLineNumber(129);    // compilenode identifier
                                                            var call1501 = callmethodChecked(var_SuccessfulMatch, "new", [2], var_o, var_bindings);
                                                            return call1501;
                                                          };
                                                          func1492.paramCounts = [1];
                                                          obj1490.methods["match"] = func1492;
                                                          func1492.definitionLine = 120;
                                                          func1492.definitionModule = "StandardPrelude";
                                                          setLineNumber(119);    // compilenode identifier
                                                          var call1502 = callmethodChecked(var_BasicPattern, "new()object", [0, 1], this);
                                                          obj1490.superobj = call1502;
                                                          if (call1502.data) obj1490.data = call1502.data;
                                                          if (call1502.hasOwnProperty('_value'))
                                                              obj1490._value = call1502._value;
                                                          superDepth = origSuperDepth;
                                                        };
                                                        obj_init_1490.apply(inheritingObject, []);
                                                        return obj1490;
                                                        };
                                                        obj1473.methods["new()object"] = func1489;
                                                      var func1503 = function(argcv) {    // method 
                                                        var returnTarget = invocationCount;
                                                        invocationCount++;
                                                        var curarg = 1;
                                                        setModuleName("StandardPrelude");
                                                        setLineNumber(118);    // compilenode string
                                                        var string1504 = new GraceString("class BindingPattern");
                                                        return string1504;
                                                      };
                                                      func1503.paramCounts = [];
                                                      obj1473.methods["asString"] = func1503;
                                                      func1503.definitionLine = 118;
                                                      func1503.definitionModule = "StandardPrelude";
                                                      superDepth = origSuperDepth;
                                                    };
                                                    obj_init_1473.apply(obj1473, []);
                                                    var var_BindingPattern = obj1473;
                                                    setLineNumber(126);    // compilenode method
                                                    var func1505 = function(argcv) {    // method BindingPattern
                                                      var returnTarget = invocationCount;
                                                      invocationCount++;
                                                      var curarg = 1;
                                                      if (argcv[0] !== 0)
                                                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for BindingPattern"));
                                                      setModuleName("StandardPrelude");
                                                      // BindingPattern is a simple accessor - elide try ... catch
                                                      setLineNumber(118);    // compilenode identifier
                                                      return var_BindingPattern;
                                                    };
                                                    func1505.paramCounts = [0];
                                                    this.methods["BindingPattern"] = func1505;
                                                    func1505.definitionLine = 126;
                                                    func1505.definitionModule = "StandardPrelude";
                                                    this.methods["BindingPattern"].debug = "def";
                                                    setLineNumber(133);    // compilenode object
                                                    var obj1506 = Grace_allocObject(GraceObject, "WildcardPattern");
                                                    obj1506.definitionModule = "StandardPrelude";
                                                    obj1506.definitionLine = 133;
                                                    obj1506.outer = this;
                                                    var reader_StandardPrelude_outer1507 = function() {
                                                      return this.outer;
                                                    };
                                                    obj1506.methods["outer"] = reader_StandardPrelude_outer1507;
                                                    var obj_init_1506 = function() {
                                                      var origSuperDepth = superDepth;
                                                      superDepth = obj1506;
                                                      var func1508 = function(argcv) {    // method new
                                                        var returnTarget = invocationCount;
                                                        invocationCount++;
                                                        var curarg = 1;
                                                        if (argcv[0] !== 0)
                                                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for new"));
                                                        setModuleName("StandardPrelude");
                                                        var obj1509 = Grace_allocObject(null, "new");
                                                        obj1509.definitionModule = "StandardPrelude";
                                                        obj1509.definitionLine = 133;
                                                        obj1509.outer = this;
                                                        var reader_StandardPrelude_outer1510 = function() {
                                                          return this.outer;
                                                        };
                                                        obj1509.methods["outer"] = reader_StandardPrelude_outer1510;
                                                        var obj_init_1509 = function() {
                                                          var origSuperDepth = superDepth;
                                                          superDepth = obj1509;
                                                          var func1511 = function(argcv) {    // method match(1)
                                                            var returnTarget = invocationCount;
                                                            invocationCount++;
                                                            var curarg = 1;
                                                            var var_o = arguments[curarg];
                                                            curarg++;
                                                            if (argcv[0] !== 1)
                                                              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for match(1)"));
                                                            setModuleName("StandardPrelude");
                                                            setLineNumber(136);    // compilenode array
                                                            var array1512 = new PrimitiveGraceList([]);
                                                            var call1513 = callmethodChecked(var_SuccessfulMatch, "new", [2], var_done, array1512);
                                                            return call1513;
                                                          };
                                                          func1511.paramCounts = [1];
                                                          obj1509.methods["match"] = func1511;
                                                          func1511.definitionLine = 135;
                                                          func1511.definitionModule = "StandardPrelude";
                                                          setLineNumber(134);    // compilenode identifier
                                                          var call1514 = callmethodChecked(var_BasicPattern, "new()object", [0, 1], this);
                                                          obj1509.superobj = call1514;
                                                          if (call1514.data) obj1509.data = call1514.data;
                                                          if (call1514.hasOwnProperty('_value'))
                                                              obj1509._value = call1514._value;
                                                          superDepth = origSuperDepth;
                                                        };
                                                        obj_init_1509.apply(obj1509, []);
                                                        return obj1509;
                                                      };
                                                      func1508.paramCounts = [0];
                                                      obj1506.methods["new"] = func1508;
                                                      func1508.definitionLine = 133;
                                                      func1508.definitionModule = "StandardPrelude";
                                                        var func1515 = function(argcv) {    // method new()object
                                                          var curarg = 1;
                                                          var inheritingObject = arguments[curarg++];
                                                          // Start argument processing
                                                          curarg = 1;
                                                          // End argument processing
                                                          setModuleName("StandardPrelude");
                                                          var returnTarget = invocationCount;
                                                          invocationCount++;
                                                          var obj1516 = Grace_allocObject(null, "new");
                                                          obj1516.definitionModule = "StandardPrelude";
                                                          obj1516.definitionLine = 133;
                                                          var inho1516 = inheritingObject;
                                                          while (inho1516.superobj) inho1516 = inho1516.superobj;
                                                          inho1516.superobj = obj1516;
                                                          obj1516.data = inheritingObject.data;
                                                          if (inheritingObject.hasOwnProperty('_value'))
                                                            obj1516._value = inheritingObject._value;
                                                          obj1516.outer = this;
                                                          var reader_StandardPrelude_outer1517 = function() {
                                                            return this.outer;
                                                          };
                                                          obj1516.methods["outer"] = reader_StandardPrelude_outer1517;
                                                          var obj_init_1516 = function() {
                                                            var origSuperDepth = superDepth;
                                                            superDepth = obj1516;
                                                            var func1518 = function(argcv) {    // method match(1)
                                                              var returnTarget = invocationCount;
                                                              invocationCount++;
                                                              var curarg = 1;
                                                              var var_o = arguments[curarg];
                                                              curarg++;
                                                              if (argcv[0] !== 1)
                                                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for match(1)"));
                                                              setModuleName("StandardPrelude");
                                                              setLineNumber(136);    // compilenode array
                                                              var array1519 = new PrimitiveGraceList([]);
                                                              var call1520 = callmethodChecked(var_SuccessfulMatch, "new", [2], var_done, array1519);
                                                              return call1520;
                                                            };
                                                            func1518.paramCounts = [1];
                                                            obj1516.methods["match"] = func1518;
                                                            func1518.definitionLine = 135;
                                                            func1518.definitionModule = "StandardPrelude";
                                                            setLineNumber(134);    // compilenode identifier
                                                            var call1521 = callmethodChecked(var_BasicPattern, "new()object", [0, 1], this);
                                                            obj1516.superobj = call1521;
                                                            if (call1521.data) obj1516.data = call1521.data;
                                                            if (call1521.hasOwnProperty('_value'))
                                                                obj1516._value = call1521._value;
                                                            superDepth = origSuperDepth;
                                                          };
                                                          obj_init_1516.apply(inheritingObject, []);
                                                          return obj1516;
                                                          };
                                                          obj1506.methods["new()object"] = func1515;
                                                        var func1522 = function(argcv) {    // method 
                                                          var returnTarget = invocationCount;
                                                          invocationCount++;
                                                          var curarg = 1;
                                                          setModuleName("StandardPrelude");
                                                          setLineNumber(133);    // compilenode string
                                                          var string1523 = new GraceString("class WildcardPattern");
                                                          return string1523;
                                                        };
                                                        func1522.paramCounts = [];
                                                        obj1506.methods["asString"] = func1522;
                                                        func1522.definitionLine = 133;
                                                        func1522.definitionModule = "StandardPrelude";
                                                        superDepth = origSuperDepth;
                                                      };
                                                      obj_init_1506.apply(obj1506, []);
                                                      var var_WildcardPattern = obj1506;
                                                      setLineNumber(126);    // compilenode method
                                                      var func1524 = function(argcv) {    // method WildcardPattern
                                                        var returnTarget = invocationCount;
                                                        invocationCount++;
                                                        var curarg = 1;
                                                        if (argcv[0] !== 0)
                                                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for WildcardPattern"));
                                                        setModuleName("StandardPrelude");
                                                        // WildcardPattern is a simple accessor - elide try ... catch
                                                        setLineNumber(133);    // compilenode identifier
                                                        return var_WildcardPattern;
                                                      };
                                                      func1524.paramCounts = [0];
                                                      this.methods["WildcardPattern"] = func1524;
                                                      func1524.definitionLine = 126;
                                                      func1524.definitionModule = "StandardPrelude";
                                                      this.methods["WildcardPattern"].debug = "def";
                                                      setLineNumber(140);    // compilenode object
                                                      var obj1525 = Grace_allocObject(GraceObject, "AndPattern");
                                                      obj1525.definitionModule = "StandardPrelude";
                                                      obj1525.definitionLine = 140;
                                                      obj1525.outer = this;
                                                      var reader_StandardPrelude_outer1526 = function() {
                                                        return this.outer;
                                                      };
                                                      obj1525.methods["outer"] = reader_StandardPrelude_outer1526;
                                                      var obj_init_1525 = function() {
                                                        var origSuperDepth = superDepth;
                                                        superDepth = obj1525;
                                                        var func1527 = function(argcv) {    // method new(2)
                                                          var returnTarget = invocationCount;
                                                          invocationCount++;
                                                          var curarg = 1;
                                                          var var_p1 = arguments[curarg];
                                                          curarg++;
                                                          var var_p2 = arguments[curarg];
                                                          curarg++;
                                                          if (argcv[0] !== 2)
                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for new(2)"));
                                                          setModuleName("StandardPrelude");
                                                          var obj1528 = Grace_allocObject(null, "new");
                                                          obj1528.definitionModule = "StandardPrelude";
                                                          obj1528.definitionLine = 140;
                                                          obj1528.outer = this;
                                                          var reader_StandardPrelude_outer1529 = function() {
                                                            return this.outer;
                                                          };
                                                          obj1528.methods["outer"] = reader_StandardPrelude_outer1529;
                                                          var obj_init_1528 = function() {
                                                            var origSuperDepth = superDepth;
                                                            superDepth = obj1528;
                                                            var func1530 = function(argcv) {    // method match(1)
                                                              var returnTarget = invocationCount;
                                                              invocationCount++;
                                                              var curarg = 1;
                                                              var var_o = arguments[curarg];
                                                              curarg++;
                                                              if (argcv[0] !== 1)
                                                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for match(1)"));
                                                              setModuleName("StandardPrelude");
                                                              setLineNumber(143);    // compilenode identifier
                                                              var call1531 = callmethodChecked(var_p1, "match", [1], var_o);
                                                              var var_m1 = call1531;
                                                              var if1532 = GraceDone;
                                                              setLineNumber(144);    // compilenode identifier
                                                              var call1533 = callmethodChecked(var_m1, "prefix!", [0]);
                                                              if (Grace_isTrue(call1533)) {
                                                                setLineNumber(145);    // compilenode identifier
                                                                return var_m1;
                                                              }
                                                              setLineNumber(147);    // compilenode identifier
                                                              var call1534 = callmethodChecked(var_p2, "match", [1], var_o);
                                                              var var_m2 = call1534;
                                                              var if1535 = GraceDone;
                                                              setLineNumber(148);    // compilenode identifier
                                                              var call1536 = callmethodChecked(var_m2, "prefix!", [0]);
                                                              if (Grace_isTrue(call1536)) {
                                                                setLineNumber(149);    // compilenode identifier
                                                                return var_m2;
                                                              }
                                                              setLineNumber(151);    // compilenode array
                                                              var array1537 = new PrimitiveGraceList([]);
                                                              var var_bindings = array1537;
                                                              setLineNumber(152);    // compilenode identifier
                                                              var call1538 = callmethodChecked(var_m1, "bindings", [0]);
                                                              var block1539 = new GraceBlock(this, 152, 1);
                                                              setLineNumber(1);    // compilenode identifier
                                                              block1539.real = function(var_b) {
                                                                setLineNumber(153);    // compilenode identifier
                                                                var call1540 = callmethodChecked(var_bindings, "push", [1], var_b);
                                                                return call1540;
                                                              };
                                                              var call1541 = callmethodChecked(var_prelude, "for()do", [1, 1], call1538, block1539);
                                                              setLineNumber(155);    // compilenode identifier
                                                              var call1542 = callmethodChecked(var_m2, "bindings", [0]);
                                                              var block1543 = new GraceBlock(this, 155, 1);
                                                              setLineNumber(1);    // compilenode identifier
                                                              block1543.real = function(var_b) {
                                                                setLineNumber(156);    // compilenode identifier
                                                                var call1544 = callmethodChecked(var_bindings, "push", [1], var_b);
                                                                return call1544;
                                                              };
                                                              var call1545 = callmethodChecked(var_prelude, "for()do", [1, 1], call1542, block1543);
                                                              setLineNumber(158);    // compilenode identifier
                                                              var call1546 = callmethodChecked(var_SuccessfulMatch, "new", [2], var_o, var_bindings);
                                                              return call1546;
                                                            };
                                                            func1530.paramCounts = [1];
                                                            obj1528.methods["match"] = func1530;
                                                            func1530.definitionLine = 142;
                                                            func1530.definitionModule = "StandardPrelude";
                                                            setLineNumber(141);    // compilenode identifier
                                                            var call1547 = callmethodChecked(var_BasicPattern, "new()object", [0, 1], this);
                                                            obj1528.superobj = call1547;
                                                            if (call1547.data) obj1528.data = call1547.data;
                                                            if (call1547.hasOwnProperty('_value'))
                                                                obj1528._value = call1547._value;
                                                            superDepth = origSuperDepth;
                                                          };
                                                          obj_init_1528.apply(obj1528, []);
                                                          return obj1528;
                                                        };
                                                        func1527.paramCounts = [2];
                                                        obj1525.methods["new"] = func1527;
                                                        func1527.definitionLine = 140;
                                                        func1527.definitionModule = "StandardPrelude";
                                                          var func1548 = function(argcv) {    // method new(2     )()object
                                                            var curarg = 1;
                                                            var var_p1 = arguments[curarg];
                                                            curarg++;
                                                            var var_p2 = arguments[curarg];
                                                            curarg++;
                                                            var inheritingObject = arguments[curarg++];
                                                            // Start argument processing
                                                            curarg = 1;
                                                            curarg++;
                                                            curarg++;
                                                            // End argument processing
                                                            setModuleName("StandardPrelude");
                                                            var returnTarget = invocationCount;
                                                            invocationCount++;
                                                            var obj1549 = Grace_allocObject(null, "new");
                                                            obj1549.definitionModule = "StandardPrelude";
                                                            obj1549.definitionLine = 140;
                                                            var inho1549 = inheritingObject;
                                                            while (inho1549.superobj) inho1549 = inho1549.superobj;
                                                            inho1549.superobj = obj1549;
                                                            obj1549.data = inheritingObject.data;
                                                            if (inheritingObject.hasOwnProperty('_value'))
                                                              obj1549._value = inheritingObject._value;
                                                            obj1549.outer = this;
                                                            var reader_StandardPrelude_outer1550 = function() {
                                                              return this.outer;
                                                            };
                                                            obj1549.methods["outer"] = reader_StandardPrelude_outer1550;
                                                            var obj_init_1549 = function() {
                                                              var origSuperDepth = superDepth;
                                                              superDepth = obj1549;
                                                              var func1551 = function(argcv) {    // method match(1)
                                                                var returnTarget = invocationCount;
                                                                invocationCount++;
                                                                var curarg = 1;
                                                                var var_o = arguments[curarg];
                                                                curarg++;
                                                                if (argcv[0] !== 1)
                                                                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for match(1)"));
                                                                setModuleName("StandardPrelude");
                                                                setLineNumber(143);    // compilenode identifier
                                                                var call1552 = callmethodChecked(var_p1, "match", [1], var_o);
                                                                var var_m1 = call1552;
                                                                var if1553 = GraceDone;
                                                                setLineNumber(144);    // compilenode identifier
                                                                var call1554 = callmethodChecked(var_m1, "prefix!", [0]);
                                                                if (Grace_isTrue(call1554)) {
                                                                  setLineNumber(145);    // compilenode identifier
                                                                  return var_m1;
                                                                }
                                                                setLineNumber(147);    // compilenode identifier
                                                                var call1555 = callmethodChecked(var_p2, "match", [1], var_o);
                                                                var var_m2 = call1555;
                                                                var if1556 = GraceDone;
                                                                setLineNumber(148);    // compilenode identifier
                                                                var call1557 = callmethodChecked(var_m2, "prefix!", [0]);
                                                                if (Grace_isTrue(call1557)) {
                                                                  setLineNumber(149);    // compilenode identifier
                                                                  return var_m2;
                                                                }
                                                                setLineNumber(151);    // compilenode array
                                                                var array1558 = new PrimitiveGraceList([]);
                                                                var var_bindings = array1558;
                                                                setLineNumber(152);    // compilenode identifier
                                                                var call1559 = callmethodChecked(var_m1, "bindings", [0]);
                                                                var block1560 = new GraceBlock(this, 152, 1);
                                                                setLineNumber(1);    // compilenode identifier
                                                                block1560.real = function(var_b) {
                                                                  setLineNumber(153);    // compilenode identifier
                                                                  var call1561 = callmethodChecked(var_bindings, "push", [1], var_b);
                                                                  return call1561;
                                                                };
                                                                var call1562 = callmethodChecked(var_prelude, "for()do", [1, 1], call1559, block1560);
                                                                setLineNumber(155);    // compilenode identifier
                                                                var call1563 = callmethodChecked(var_m2, "bindings", [0]);
                                                                var block1564 = new GraceBlock(this, 155, 1);
                                                                setLineNumber(1);    // compilenode identifier
                                                                block1564.real = function(var_b) {
                                                                  setLineNumber(156);    // compilenode identifier
                                                                  var call1565 = callmethodChecked(var_bindings, "push", [1], var_b);
                                                                  return call1565;
                                                                };
                                                                var call1566 = callmethodChecked(var_prelude, "for()do", [1, 1], call1563, block1564);
                                                                setLineNumber(158);    // compilenode identifier
                                                                var call1567 = callmethodChecked(var_SuccessfulMatch, "new", [2], var_o, var_bindings);
                                                                return call1567;
                                                              };
                                                              func1551.paramCounts = [1];
                                                              obj1549.methods["match"] = func1551;
                                                              func1551.definitionLine = 142;
                                                              func1551.definitionModule = "StandardPrelude";
                                                              setLineNumber(141);    // compilenode identifier
                                                              var call1568 = callmethodChecked(var_BasicPattern, "new()object", [0, 1], this);
                                                              obj1549.superobj = call1568;
                                                              if (call1568.data) obj1549.data = call1568.data;
                                                              if (call1568.hasOwnProperty('_value'))
                                                                  obj1549._value = call1568._value;
                                                              superDepth = origSuperDepth;
                                                            };
                                                            obj_init_1549.apply(inheritingObject, []);
                                                            return obj1549;
                                                            };
                                                            obj1525.methods["new()object"] = func1548;
                                                          var func1569 = function(argcv) {    // method 
                                                            var returnTarget = invocationCount;
                                                            invocationCount++;
                                                            var curarg = 1;
                                                            setModuleName("StandardPrelude");
                                                            setLineNumber(140);    // compilenode string
                                                            var string1570 = new GraceString("class AndPattern");
                                                            return string1570;
                                                          };
                                                          func1569.paramCounts = [];
                                                          obj1525.methods["asString"] = func1569;
                                                          func1569.definitionLine = 140;
                                                          func1569.definitionModule = "StandardPrelude";
                                                          superDepth = origSuperDepth;
                                                        };
                                                        obj_init_1525.apply(obj1525, []);
                                                        var var_AndPattern = obj1525;
                                                        setLineNumber(155);    // compilenode method
                                                        var func1571 = function(argcv) {    // method AndPattern
                                                          var returnTarget = invocationCount;
                                                          invocationCount++;
                                                          var curarg = 1;
                                                          if (argcv[0] !== 0)
                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for AndPattern"));
                                                          setModuleName("StandardPrelude");
                                                          // AndPattern is a simple accessor - elide try ... catch
                                                          setLineNumber(140);    // compilenode identifier
                                                          return var_AndPattern;
                                                        };
                                                        func1571.paramCounts = [0];
                                                        this.methods["AndPattern"] = func1571;
                                                        func1571.definitionLine = 155;
                                                        func1571.definitionModule = "StandardPrelude";
                                                        this.methods["AndPattern"].debug = "def";
                                                        setLineNumber(162);    // compilenode object
                                                        var obj1572 = Grace_allocObject(GraceObject, "OrPattern");
                                                        obj1572.definitionModule = "StandardPrelude";
                                                        obj1572.definitionLine = 162;
                                                        obj1572.outer = this;
                                                        var reader_StandardPrelude_outer1573 = function() {
                                                          return this.outer;
                                                        };
                                                        obj1572.methods["outer"] = reader_StandardPrelude_outer1573;
                                                        var obj_init_1572 = function() {
                                                          var origSuperDepth = superDepth;
                                                          superDepth = obj1572;
                                                          var func1574 = function(argcv) {    // method new(2)
                                                            var returnTarget = invocationCount;
                                                            invocationCount++;
                                                            var curarg = 1;
                                                            var var_p1 = arguments[curarg];
                                                            curarg++;
                                                            var var_p2 = arguments[curarg];
                                                            curarg++;
                                                            if (argcv[0] !== 2)
                                                              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for new(2)"));
                                                            setModuleName("StandardPrelude");
                                                            var obj1575 = Grace_allocObject(null, "new");
                                                            obj1575.definitionModule = "StandardPrelude";
                                                            obj1575.definitionLine = 162;
                                                            obj1575.outer = this;
                                                            var reader_StandardPrelude_outer1576 = function() {
                                                              return this.outer;
                                                            };
                                                            obj1575.methods["outer"] = reader_StandardPrelude_outer1576;
                                                            var obj_init_1575 = function() {
                                                              var origSuperDepth = superDepth;
                                                              superDepth = obj1575;
                                                              var func1577 = function(argcv) {    // method match(1)
                                                                var returnTarget = invocationCount;
                                                                invocationCount++;
                                                                var curarg = 1;
                                                                var var_o = arguments[curarg];
                                                                curarg++;
                                                                if (argcv[0] !== 1)
                                                                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for match(1)"));
                                                                setModuleName("StandardPrelude");
                                                                var if1578 = GraceDone;
                                                                setLineNumber(165);    // compilenode identifier
                                                                var call1579 = callmethodChecked(var_p1, "match", [1], var_o);
                                                                if (Grace_isTrue(call1579)) {
                                                                  setLineNumber(166);    // compilenode array
                                                                  var array1580 = new PrimitiveGraceList([]);
                                                                  var call1581 = callmethodChecked(var_SuccessfulMatch, "new", [2], var_o, array1580);
                                                                  return call1581;
                                                                }
                                                                var if1582 = GraceDone;
                                                                setLineNumber(168);    // compilenode identifier
                                                                var call1583 = callmethodChecked(var_p2, "match", [1], var_o);
                                                                if (Grace_isTrue(call1583)) {
                                                                  setLineNumber(169);    // compilenode array
                                                                  var array1584 = new PrimitiveGraceList([]);
                                                                  var call1585 = callmethodChecked(var_SuccessfulMatch, "new", [2], var_o, array1584);
                                                                  return call1585;
                                                                }
                                                                setLineNumber(171);    // compilenode identifier
                                                                var call1586 = callmethodChecked(var_FailedMatch, "new", [1], var_o);
                                                                return call1586;
                                                              };
                                                              func1577.paramCounts = [1];
                                                              obj1575.methods["match"] = func1577;
                                                              func1577.definitionLine = 164;
                                                              func1577.definitionModule = "StandardPrelude";
                                                              setLineNumber(163);    // compilenode identifier
                                                              var call1587 = callmethodChecked(var_BasicPattern, "new()object", [0, 1], this);
                                                              obj1575.superobj = call1587;
                                                              if (call1587.data) obj1575.data = call1587.data;
                                                              if (call1587.hasOwnProperty('_value'))
                                                                  obj1575._value = call1587._value;
                                                              superDepth = origSuperDepth;
                                                            };
                                                            obj_init_1575.apply(obj1575, []);
                                                            return obj1575;
                                                          };
                                                          func1574.paramCounts = [2];
                                                          obj1572.methods["new"] = func1574;
                                                          func1574.definitionLine = 162;
                                                          func1574.definitionModule = "StandardPrelude";
                                                            var func1588 = function(argcv) {    // method new(2     )()object
                                                              var curarg = 1;
                                                              var var_p1 = arguments[curarg];
                                                              curarg++;
                                                              var var_p2 = arguments[curarg];
                                                              curarg++;
                                                              var inheritingObject = arguments[curarg++];
                                                              // Start argument processing
                                                              curarg = 1;
                                                              curarg++;
                                                              curarg++;
                                                              // End argument processing
                                                              setModuleName("StandardPrelude");
                                                              var returnTarget = invocationCount;
                                                              invocationCount++;
                                                              var obj1589 = Grace_allocObject(null, "new");
                                                              obj1589.definitionModule = "StandardPrelude";
                                                              obj1589.definitionLine = 162;
                                                              var inho1589 = inheritingObject;
                                                              while (inho1589.superobj) inho1589 = inho1589.superobj;
                                                              inho1589.superobj = obj1589;
                                                              obj1589.data = inheritingObject.data;
                                                              if (inheritingObject.hasOwnProperty('_value'))
                                                                obj1589._value = inheritingObject._value;
                                                              obj1589.outer = this;
                                                              var reader_StandardPrelude_outer1590 = function() {
                                                                return this.outer;
                                                              };
                                                              obj1589.methods["outer"] = reader_StandardPrelude_outer1590;
                                                              var obj_init_1589 = function() {
                                                                var origSuperDepth = superDepth;
                                                                superDepth = obj1589;
                                                                var func1591 = function(argcv) {    // method match(1)
                                                                  var returnTarget = invocationCount;
                                                                  invocationCount++;
                                                                  var curarg = 1;
                                                                  var var_o = arguments[curarg];
                                                                  curarg++;
                                                                  if (argcv[0] !== 1)
                                                                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for match(1)"));
                                                                  setModuleName("StandardPrelude");
                                                                  var if1592 = GraceDone;
                                                                  setLineNumber(165);    // compilenode identifier
                                                                  var call1593 = callmethodChecked(var_p1, "match", [1], var_o);
                                                                  if (Grace_isTrue(call1593)) {
                                                                    setLineNumber(166);    // compilenode array
                                                                    var array1594 = new PrimitiveGraceList([]);
                                                                    var call1595 = callmethodChecked(var_SuccessfulMatch, "new", [2], var_o, array1594);
                                                                    return call1595;
                                                                  }
                                                                  var if1596 = GraceDone;
                                                                  setLineNumber(168);    // compilenode identifier
                                                                  var call1597 = callmethodChecked(var_p2, "match", [1], var_o);
                                                                  if (Grace_isTrue(call1597)) {
                                                                    setLineNumber(169);    // compilenode array
                                                                    var array1598 = new PrimitiveGraceList([]);
                                                                    var call1599 = callmethodChecked(var_SuccessfulMatch, "new", [2], var_o, array1598);
                                                                    return call1599;
                                                                  }
                                                                  setLineNumber(171);    // compilenode identifier
                                                                  var call1600 = callmethodChecked(var_FailedMatch, "new", [1], var_o);
                                                                  return call1600;
                                                                };
                                                                func1591.paramCounts = [1];
                                                                obj1589.methods["match"] = func1591;
                                                                func1591.definitionLine = 164;
                                                                func1591.definitionModule = "StandardPrelude";
                                                                setLineNumber(163);    // compilenode identifier
                                                                var call1601 = callmethodChecked(var_BasicPattern, "new()object", [0, 1], this);
                                                                obj1589.superobj = call1601;
                                                                if (call1601.data) obj1589.data = call1601.data;
                                                                if (call1601.hasOwnProperty('_value'))
                                                                    obj1589._value = call1601._value;
                                                                superDepth = origSuperDepth;
                                                              };
                                                              obj_init_1589.apply(inheritingObject, []);
                                                              return obj1589;
                                                              };
                                                              obj1572.methods["new()object"] = func1588;
                                                            var func1602 = function(argcv) {    // method 
                                                              var returnTarget = invocationCount;
                                                              invocationCount++;
                                                              var curarg = 1;
                                                              setModuleName("StandardPrelude");
                                                              setLineNumber(162);    // compilenode string
                                                              var string1603 = new GraceString("class OrPattern");
                                                              return string1603;
                                                            };
                                                            func1602.paramCounts = [];
                                                            obj1572.methods["asString"] = func1602;
                                                            func1602.definitionLine = 162;
                                                            func1602.definitionModule = "StandardPrelude";
                                                            superDepth = origSuperDepth;
                                                          };
                                                          obj_init_1572.apply(obj1572, []);
                                                          var var_OrPattern = obj1572;
                                                          setLineNumber(155);    // compilenode method
                                                          var func1604 = function(argcv) {    // method OrPattern
                                                            var returnTarget = invocationCount;
                                                            invocationCount++;
                                                            var curarg = 1;
                                                            if (argcv[0] !== 0)
                                                              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for OrPattern"));
                                                            setModuleName("StandardPrelude");
                                                            // OrPattern is a simple accessor - elide try ... catch
                                                            setLineNumber(162);    // compilenode identifier
                                                            return var_OrPattern;
                                                          };
                                                          func1604.paramCounts = [0];
                                                          this.methods["OrPattern"] = func1604;
                                                          func1604.definitionLine = 155;
                                                          func1604.definitionModule = "StandardPrelude";
                                                          this.methods["OrPattern"].debug = "def";
                                                          setLineNumber(175);    // compilenode object
                                                          var obj1605 = Grace_allocObject(GraceObject, "Singleton");
                                                          obj1605.definitionModule = "StandardPrelude";
                                                          obj1605.definitionLine = 175;
                                                          obj1605.outer = this;
                                                          var reader_StandardPrelude_outer1606 = function() {
                                                            return this.outer;
                                                          };
                                                          obj1605.methods["outer"] = reader_StandardPrelude_outer1606;
                                                          var obj_init_1605 = function() {
                                                            var origSuperDepth = superDepth;
                                                            superDepth = obj1605;
                                                            var func1607 = function(argcv) {    // method new
                                                              var returnTarget = invocationCount;
                                                              invocationCount++;
                                                              var curarg = 1;
                                                              if (argcv[0] !== 0)
                                                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for new"));
                                                              setModuleName("StandardPrelude");
                                                              setLineNumber(176);    // compilenode object
                                                              var obj1608 = Grace_allocObject(null, "new");
                                                              obj1608.definitionModule = "StandardPrelude";
                                                              obj1608.definitionLine = 176;
                                                              obj1608.outer = this;
                                                              var reader_StandardPrelude_outer1609 = function() {
                                                                return this.outer;
                                                              };
                                                              obj1608.methods["outer"] = reader_StandardPrelude_outer1609;
                                                              var obj_init_1608 = function() {
                                                                var origSuperDepth = superDepth;
                                                                superDepth = obj1608;
                                                                var func1610 = function(argcv) {    // method match(1)
                                                                  var returnTarget = invocationCount;
                                                                  invocationCount++;
                                                                  var curarg = 1;
                                                                  var var_other = arguments[curarg];
                                                                  curarg++;
                                                                  if (argcv[0] !== 1)
                                                                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for match(1)"));
                                                                  setModuleName("StandardPrelude");
                                                                  var if1611 = GraceDone;
                                                                  setLineNumber(179);    // compilenode identifier
                                                                  onSelf = true;
                                                                  var call1612 = callmethodChecked(this, "isMe", [1], var_other);
                                                                  if (Grace_isTrue(call1612)) {
                                                                    setLineNumber(180);    // compilenode array
                                                                    var array1613 = new PrimitiveGraceList([]);
                                                                    var call1614 = callmethodChecked(var_SuccessfulMatch, "new", [2], var_other, array1613);
                                                                    if1611 = call1614;
                                                                  } else {
                                                                    setLineNumber(182);    // compilenode identifier
                                                                    var call1615 = callmethodChecked(var_FailedMatch, "new", [1], var_other);
                                                                    if1611 = call1615;
                                                                  }
                                                                  return if1611;
                                                                };
                                                                func1610.paramCounts = [1];
                                                                obj1608.methods["match"] = func1610;
                                                                func1610.definitionLine = 178;
                                                                func1610.definitionModule = "StandardPrelude";
                                                                var func1616 = function(argcv) {    // method ==(1)
                                                                  var returnTarget = invocationCount;
                                                                  invocationCount++;
                                                                  var curarg = 1;
                                                                  var var_other = arguments[curarg];
                                                                  curarg++;
                                                                  if (argcv[0] !== 1)
                                                                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ==(1)"));
                                                                  setModuleName("StandardPrelude");
                                                                  setLineNumber(185);    // compilenode identifier
                                                                  onSelf = true;
                                                                  var call1617 = callmethodChecked(this, "isMe", [1], var_other);
                                                                  return call1617;
                                                                };
                                                                func1616.paramCounts = [1];
                                                                obj1608.methods["=="] = func1616;
                                                                func1616.definitionLine = 185;
                                                                func1616.definitionModule = "StandardPrelude";
                                                                setLineNumber(177);    // compilenode identifier
                                                                var call1618 = callmethodChecked(var_BasicPattern, "new()object", [0, 1], this);
                                                                obj1608.superobj = call1618;
                                                                if (call1618.data) obj1608.data = call1618.data;
                                                                if (call1618.hasOwnProperty('_value'))
                                                                    obj1608._value = call1618._value;
                                                                superDepth = origSuperDepth;
                                                              };
                                                              obj_init_1608.apply(obj1608, []);
                                                              return obj1608;
                                                            };
                                                            func1607.paramCounts = [0];
                                                            obj1605.methods["new"] = func1607;
                                                            func1607.definitionLine = 176;
                                                            func1607.definitionModule = "StandardPrelude";
                                                              var func1619 = function(argcv) {    // method new()object
                                                                var curarg = 1;
                                                                var inheritingObject = arguments[curarg++];
                                                                // Start argument processing
                                                                curarg = 1;
                                                                // End argument processing
                                                                setModuleName("StandardPrelude");
                                                                var returnTarget = invocationCount;
                                                                invocationCount++;
                                                                var obj1620 = Grace_allocObject(null, "new");
                                                                obj1620.definitionModule = "StandardPrelude";
                                                                obj1620.definitionLine = 176;
                                                                var inho1620 = inheritingObject;
                                                                while (inho1620.superobj) inho1620 = inho1620.superobj;
                                                                inho1620.superobj = obj1620;
                                                                obj1620.data = inheritingObject.data;
                                                                if (inheritingObject.hasOwnProperty('_value'))
                                                                  obj1620._value = inheritingObject._value;
                                                                obj1620.outer = this;
                                                                var reader_StandardPrelude_outer1621 = function() {
                                                                  return this.outer;
                                                                };
                                                                obj1620.methods["outer"] = reader_StandardPrelude_outer1621;
                                                                var obj_init_1620 = function() {
                                                                  var origSuperDepth = superDepth;
                                                                  superDepth = obj1620;
                                                                  var func1622 = function(argcv) {    // method match(1)
                                                                    var returnTarget = invocationCount;
                                                                    invocationCount++;
                                                                    var curarg = 1;
                                                                    var var_other = arguments[curarg];
                                                                    curarg++;
                                                                    if (argcv[0] !== 1)
                                                                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for match(1)"));
                                                                    setModuleName("StandardPrelude");
                                                                    var if1623 = GraceDone;
                                                                    setLineNumber(179);    // compilenode identifier
                                                                    onSelf = true;
                                                                    var call1624 = callmethodChecked(this, "isMe", [1], var_other);
                                                                    if (Grace_isTrue(call1624)) {
                                                                      setLineNumber(180);    // compilenode array
                                                                      var array1625 = new PrimitiveGraceList([]);
                                                                      var call1626 = callmethodChecked(var_SuccessfulMatch, "new", [2], var_other, array1625);
                                                                      if1623 = call1626;
                                                                    } else {
                                                                      setLineNumber(182);    // compilenode identifier
                                                                      var call1627 = callmethodChecked(var_FailedMatch, "new", [1], var_other);
                                                                      if1623 = call1627;
                                                                    }
                                                                    return if1623;
                                                                  };
                                                                  func1622.paramCounts = [1];
                                                                  obj1620.methods["match"] = func1622;
                                                                  func1622.definitionLine = 178;
                                                                  func1622.definitionModule = "StandardPrelude";
                                                                  var func1628 = function(argcv) {    // method ==(1)
                                                                    var returnTarget = invocationCount;
                                                                    invocationCount++;
                                                                    var curarg = 1;
                                                                    var var_other = arguments[curarg];
                                                                    curarg++;
                                                                    if (argcv[0] !== 1)
                                                                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ==(1)"));
                                                                    setModuleName("StandardPrelude");
                                                                    setLineNumber(185);    // compilenode identifier
                                                                    onSelf = true;
                                                                    var call1629 = callmethodChecked(this, "isMe", [1], var_other);
                                                                    return call1629;
                                                                  };
                                                                  func1628.paramCounts = [1];
                                                                  obj1620.methods["=="] = func1628;
                                                                  func1628.definitionLine = 185;
                                                                  func1628.definitionModule = "StandardPrelude";
                                                                  setLineNumber(177);    // compilenode identifier
                                                                  var call1630 = callmethodChecked(var_BasicPattern, "new()object", [0, 1], this);
                                                                  obj1620.superobj = call1630;
                                                                  if (call1630.data) obj1620.data = call1630.data;
                                                                  if (call1630.hasOwnProperty('_value'))
                                                                      obj1620._value = call1630._value;
                                                                  superDepth = origSuperDepth;
                                                                };
                                                                obj_init_1620.apply(inheritingObject, []);
                                                                return obj1620;
                                                                };
                                                                obj1605.methods["new()object"] = func1619;
                                                              var func1631 = function(argcv) {    // method named(1)
                                                                var returnTarget = invocationCount;
                                                                invocationCount++;
                                                                var curarg = 1;
                                                                var var_printString = arguments[curarg];
                                                                curarg++;
                                                                if (argcv[0] !== 1)
                                                                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for named(1)"));
                                                                setModuleName("StandardPrelude");
                                                                setLineNumber(187);    // compilenode object
                                                                var obj1632 = Grace_allocObject(null, "named");
                                                                obj1632.definitionModule = "StandardPrelude";
                                                                obj1632.definitionLine = 187;
                                                                obj1632.outer = this;
                                                                var reader_StandardPrelude_outer1633 = function() {
                                                                  return this.outer;
                                                                };
                                                                obj1632.methods["outer"] = reader_StandardPrelude_outer1633;
                                                                var obj_init_1632 = function() {
                                                                  var origSuperDepth = superDepth;
                                                                  superDepth = obj1632;
                                                                  var func1634 = function(argcv) {    // method asString
                                                                    var returnTarget = invocationCount;
                                                                    invocationCount++;
                                                                    var curarg = 1;
                                                                    if (argcv[0] !== 0)
                                                                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                                                                    setModuleName("StandardPrelude");
                                                                    // asString is a simple accessor - elide try ... catch
                                                                    setLineNumber(189);    // compilenode identifier
                                                                    return var_printString;
                                                                  };
                                                                  func1634.paramCounts = [0];
                                                                  obj1632.methods["asString"] = func1634;
                                                                  func1634.definitionLine = 189;
                                                                  func1634.definitionModule = "StandardPrelude";
                                                                  setLineNumber(188);    // compilenode identifier
                                                                  var call1635 = callmethodChecked(var_Singleton, "new()object", [0, 1], this);
                                                                  obj1632.superobj = call1635;
                                                                  if (call1635.data) obj1632.data = call1635.data;
                                                                  if (call1635.hasOwnProperty('_value'))
                                                                      obj1632._value = call1635._value;
                                                                  superDepth = origSuperDepth;
                                                                };
                                                                obj_init_1632.apply(obj1632, []);
                                                                return obj1632;
                                                              };
                                                              func1631.paramCounts = [1];
                                                              obj1605.methods["named"] = func1631;
                                                              func1631.definitionLine = 187;
                                                              func1631.definitionModule = "StandardPrelude";
                                                                var func1636 = function(argcv) {    // method named(1     )()object
                                                                  var curarg = 1;
                                                                  var var_printString = arguments[curarg];
                                                                  curarg++;
                                                                  var inheritingObject = arguments[curarg++];
                                                                  // Start argument processing
                                                                  curarg = 1;
                                                                  curarg++;
                                                                  // End argument processing
                                                                  setModuleName("StandardPrelude");
                                                                  var returnTarget = invocationCount;
                                                                  invocationCount++;
                                                                  var obj1637 = Grace_allocObject(null, "named");
                                                                  obj1637.definitionModule = "StandardPrelude";
                                                                  obj1637.definitionLine = 187;
                                                                  var inho1637 = inheritingObject;
                                                                  while (inho1637.superobj) inho1637 = inho1637.superobj;
                                                                  inho1637.superobj = obj1637;
                                                                  obj1637.data = inheritingObject.data;
                                                                  if (inheritingObject.hasOwnProperty('_value'))
                                                                    obj1637._value = inheritingObject._value;
                                                                  obj1637.outer = this;
                                                                  var reader_StandardPrelude_outer1638 = function() {
                                                                    return this.outer;
                                                                  };
                                                                  obj1637.methods["outer"] = reader_StandardPrelude_outer1638;
                                                                  var obj_init_1637 = function() {
                                                                    var origSuperDepth = superDepth;
                                                                    superDepth = obj1637;
                                                                    var func1639 = function(argcv) {    // method asString
                                                                      var returnTarget = invocationCount;
                                                                      invocationCount++;
                                                                      var curarg = 1;
                                                                      if (argcv[0] !== 0)
                                                                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                                                                      setModuleName("StandardPrelude");
                                                                      // asString is a simple accessor - elide try ... catch
                                                                      setLineNumber(189);    // compilenode identifier
                                                                      return var_printString;
                                                                    };
                                                                    func1639.paramCounts = [0];
                                                                    obj1637.methods["asString"] = func1639;
                                                                    func1639.definitionLine = 189;
                                                                    func1639.definitionModule = "StandardPrelude";
                                                                    setLineNumber(188);    // compilenode identifier
                                                                    var call1640 = callmethodChecked(var_Singleton, "new()object", [0, 1], this);
                                                                    obj1637.superobj = call1640;
                                                                    if (call1640.data) obj1637.data = call1640.data;
                                                                    if (call1640.hasOwnProperty('_value'))
                                                                        obj1637._value = call1640._value;
                                                                    superDepth = origSuperDepth;
                                                                  };
                                                                  obj_init_1637.apply(inheritingObject, []);
                                                                  return obj1637;
                                                                  };
                                                                  obj1605.methods["named()object"] = func1636;
                                                                superDepth = origSuperDepth;
                                                              };
                                                              obj_init_1605.apply(obj1605, []);
                                                              var var_Singleton = obj1605;
                                                              setLineNumber(155);    // compilenode method
                                                              var func1641 = function(argcv) {    // method Singleton
                                                                var returnTarget = invocationCount;
                                                                invocationCount++;
                                                                var curarg = 1;
                                                                if (argcv[0] !== 0)
                                                                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Singleton"));
                                                                setModuleName("StandardPrelude");
                                                                // Singleton is a simple accessor - elide try ... catch
                                                                setLineNumber(175);    // compilenode identifier
                                                                return var_Singleton;
                                                              };
                                                              func1641.paramCounts = [0];
                                                              this.methods["Singleton"] = func1641;
                                                              func1641.definitionLine = 155;
                                                              func1641.definitionModule = "StandardPrelude";
                                                              this.methods["Singleton"].debug = "def";
                                                              setLineNumber(193);    // compilenode object
                                                              var obj1642 = Grace_allocObject(GraceObject, "BaseType");
                                                              obj1642.definitionModule = "StandardPrelude";
                                                              obj1642.definitionLine = 193;
                                                              obj1642.outer = this;
                                                              var reader_StandardPrelude_outer1643 = function() {
                                                                return this.outer;
                                                              };
                                                              obj1642.methods["outer"] = reader_StandardPrelude_outer1643;
                                                              var obj_init_1642 = function() {
                                                                var origSuperDepth = superDepth;
                                                                superDepth = obj1642;
                                                                var func1644 = function(argcv) {    // method new(1)
                                                                  var returnTarget = invocationCount;
                                                                  invocationCount++;
                                                                  var curarg = 1;
                                                                  var var_name = arguments[curarg];
                                                                  curarg++;
                                                                  if (argcv[0] !== 1)
                                                                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for new(1)"));
                                                                  setModuleName("StandardPrelude");
                                                                  var obj1645 = Grace_allocObject(GraceObject, "new");
                                                                  obj1645.definitionModule = "StandardPrelude";
                                                                  obj1645.definitionLine = 193;
                                                                  obj1645.outer = this;
                                                                  var reader_StandardPrelude_outer1646 = function() {
                                                                    return this.outer;
                                                                  };
                                                                  obj1645.methods["outer"] = reader_StandardPrelude_outer1646;
                                                                  var obj_init_1645 = function() {
                                                                    var origSuperDepth = superDepth;
                                                                    superDepth = obj1645;
                                                                    var func1647 = function(argcv) {    // method &(1)
                                                                      var returnTarget = invocationCount;
                                                                      invocationCount++;
                                                                      var curarg = 1;
                                                                      var var_o = arguments[curarg];
                                                                      curarg++;
                                                                      if (argcv[0] !== 1)
                                                                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for &(1)"));
                                                                      setModuleName("StandardPrelude");
                                                                      setLineNumber(195);    // compilenode identifier
                                                                      var call1648 = callmethodChecked(var_TypeIntersection, "new", [2], this, var_o);
                                                                      return call1648;
                                                                    };
                                                                    func1647.paramCounts = [1];
                                                                    obj1645.methods["&"] = func1647;
                                                                    func1647.definitionLine = 194;
                                                                    func1647.definitionModule = "StandardPrelude";
                                                                    var func1649 = function(argcv) {    // method |(1)
                                                                      var returnTarget = invocationCount;
                                                                      invocationCount++;
                                                                      var curarg = 1;
                                                                      var var_o = arguments[curarg];
                                                                      curarg++;
                                                                      if (argcv[0] !== 1)
                                                                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for |(1)"));
                                                                      setModuleName("StandardPrelude");
                                                                      setLineNumber(198);    // compilenode identifier
                                                                      var call1650 = callmethodChecked(var_TypeVariant, "new", [2], this, var_o);
                                                                      return call1650;
                                                                    };
                                                                    func1649.paramCounts = [1];
                                                                    obj1645.methods["|"] = func1649;
                                                                    func1649.definitionLine = 197;
                                                                    func1649.definitionModule = "StandardPrelude";
                                                                    var func1651 = function(argcv) {    // method +(1)
                                                                      var returnTarget = invocationCount;
                                                                      invocationCount++;
                                                                      var curarg = 1;
                                                                      var var_o = arguments[curarg];
                                                                      curarg++;
                                                                      if (argcv[0] !== 1)
                                                                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for +(1)"));
                                                                      setModuleName("StandardPrelude");
                                                                      setLineNumber(201);    // compilenode identifier
                                                                      var call1652 = callmethodChecked(var_TypeUnion, "new", [2], this, var_o);
                                                                      return call1652;
                                                                    };
                                                                    func1651.paramCounts = [1];
                                                                    obj1645.methods["+"] = func1651;
                                                                    func1651.definitionLine = 200;
                                                                    func1651.definitionModule = "StandardPrelude";
                                                                    var func1653 = function(argcv) {    // method -(1)
                                                                      var returnTarget = invocationCount;
                                                                      invocationCount++;
                                                                      var curarg = 1;
                                                                      var var_o = arguments[curarg];
                                                                      curarg++;
                                                                      if (argcv[0] !== 1)
                                                                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for -(1)"));
                                                                      setModuleName("StandardPrelude");
                                                                      setLineNumber(204);    // compilenode identifier
                                                                      var call1654 = callmethodChecked(var_TypeSubtraction, "new", [2], this, var_o);
                                                                      return call1654;
                                                                    };
                                                                    func1653.paramCounts = [1];
                                                                    obj1645.methods["-"] = func1653;
                                                                    func1653.definitionLine = 203;
                                                                    func1653.definitionModule = "StandardPrelude";
                                                                    var func1655 = function(argcv) {    // method asString
                                                                      var returnTarget = invocationCount;
                                                                      invocationCount++;
                                                                      var curarg = 1;
                                                                      if (argcv[0] !== 0)
                                                                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                                                                      setModuleName("StandardPrelude");
                                                                      var if1656 = GraceDone;
                                                                      setLineNumber(207);    // compilenode string
                                                                      var string1657 = new GraceString("");
                                                                      var opresult1660 = callmethodChecked(var_name, "==", [1], string1657);
                                                                      if (Grace_isTrue(opresult1660)) {
                                                                        var string1661 = new GraceString("type \u2039anon\u203a");
                                                                        if1656 = string1661;
                                                                      } else {
                                                                        setLineNumber(208);    // compilenode string
                                                                        var string1662 = new GraceString("");
                                                                        var string1665 = new GraceString("type ");
                                                                        var opresult1667 = callmethodChecked(string1665, "++", [1], var_name);
                                                                        var opresult1669 = callmethodChecked(opresult1667, "++", [1], string1662);
                                                                        if1656 = opresult1669;
                                                                      }
                                                                      return if1656;
                                                                    };
                                                                    func1655.paramCounts = [0];
                                                                    obj1645.methods["asString"] = func1655;
                                                                    func1655.definitionLine = 206;
                                                                    func1655.definitionModule = "StandardPrelude";
                                                                    superDepth = origSuperDepth;
                                                                  };
                                                                  obj_init_1645.apply(obj1645, []);
                                                                  return obj1645;
                                                                };
                                                                func1644.paramCounts = [1];
                                                                obj1642.methods["new"] = func1644;
                                                                func1644.definitionLine = 193;
                                                                func1644.definitionModule = "StandardPrelude";
                                                                  var func1670 = function(argcv) {    // method new(1     )()object
                                                                    var curarg = 1;
                                                                    var var_name = arguments[curarg];
                                                                    curarg++;
                                                                    var inheritingObject = arguments[curarg++];
                                                                    // Start argument processing
                                                                    curarg = 1;
                                                                    curarg++;
                                                                    // End argument processing
                                                                    setModuleName("StandardPrelude");
                                                                    var returnTarget = invocationCount;
                                                                    invocationCount++;
                                                                    var obj1671 = Grace_allocObject(GraceObject, "new");
                                                                    obj1671.definitionModule = "StandardPrelude";
                                                                    obj1671.definitionLine = 193;
                                                                    var inho1671 = inheritingObject;
                                                                    while (inho1671.superobj) inho1671 = inho1671.superobj;
                                                                    inho1671.superobj = obj1671;
                                                                    obj1671.data = inheritingObject.data;
                                                                    if (inheritingObject.hasOwnProperty('_value'))
                                                                      obj1671._value = inheritingObject._value;
                                                                    obj1671.outer = this;
                                                                    var reader_StandardPrelude_outer1672 = function() {
                                                                      return this.outer;
                                                                    };
                                                                    obj1671.methods["outer"] = reader_StandardPrelude_outer1672;
                                                                    var obj_init_1671 = function() {
                                                                      var origSuperDepth = superDepth;
                                                                      superDepth = obj1671;
                                                                      var func1673 = function(argcv) {    // method &(1)
                                                                        var returnTarget = invocationCount;
                                                                        invocationCount++;
                                                                        var curarg = 1;
                                                                        var var_o = arguments[curarg];
                                                                        curarg++;
                                                                        if (argcv[0] !== 1)
                                                                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for &(1)"));
                                                                        setModuleName("StandardPrelude");
                                                                        setLineNumber(195);    // compilenode identifier
                                                                        var call1674 = callmethodChecked(var_TypeIntersection, "new", [2], this, var_o);
                                                                        return call1674;
                                                                      };
                                                                      func1673.paramCounts = [1];
                                                                      obj1671.methods["&"] = func1673;
                                                                      func1673.definitionLine = 194;
                                                                      func1673.definitionModule = "StandardPrelude";
                                                                      var func1675 = function(argcv) {    // method |(1)
                                                                        var returnTarget = invocationCount;
                                                                        invocationCount++;
                                                                        var curarg = 1;
                                                                        var var_o = arguments[curarg];
                                                                        curarg++;
                                                                        if (argcv[0] !== 1)
                                                                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for |(1)"));
                                                                        setModuleName("StandardPrelude");
                                                                        setLineNumber(198);    // compilenode identifier
                                                                        var call1676 = callmethodChecked(var_TypeVariant, "new", [2], this, var_o);
                                                                        return call1676;
                                                                      };
                                                                      func1675.paramCounts = [1];
                                                                      obj1671.methods["|"] = func1675;
                                                                      func1675.definitionLine = 197;
                                                                      func1675.definitionModule = "StandardPrelude";
                                                                      var func1677 = function(argcv) {    // method +(1)
                                                                        var returnTarget = invocationCount;
                                                                        invocationCount++;
                                                                        var curarg = 1;
                                                                        var var_o = arguments[curarg];
                                                                        curarg++;
                                                                        if (argcv[0] !== 1)
                                                                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for +(1)"));
                                                                        setModuleName("StandardPrelude");
                                                                        setLineNumber(201);    // compilenode identifier
                                                                        var call1678 = callmethodChecked(var_TypeUnion, "new", [2], this, var_o);
                                                                        return call1678;
                                                                      };
                                                                      func1677.paramCounts = [1];
                                                                      obj1671.methods["+"] = func1677;
                                                                      func1677.definitionLine = 200;
                                                                      func1677.definitionModule = "StandardPrelude";
                                                                      var func1679 = function(argcv) {    // method -(1)
                                                                        var returnTarget = invocationCount;
                                                                        invocationCount++;
                                                                        var curarg = 1;
                                                                        var var_o = arguments[curarg];
                                                                        curarg++;
                                                                        if (argcv[0] !== 1)
                                                                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for -(1)"));
                                                                        setModuleName("StandardPrelude");
                                                                        setLineNumber(204);    // compilenode identifier
                                                                        var call1680 = callmethodChecked(var_TypeSubtraction, "new", [2], this, var_o);
                                                                        return call1680;
                                                                      };
                                                                      func1679.paramCounts = [1];
                                                                      obj1671.methods["-"] = func1679;
                                                                      func1679.definitionLine = 203;
                                                                      func1679.definitionModule = "StandardPrelude";
                                                                      var func1681 = function(argcv) {    // method asString
                                                                        var returnTarget = invocationCount;
                                                                        invocationCount++;
                                                                        var curarg = 1;
                                                                        if (argcv[0] !== 0)
                                                                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                                                                        setModuleName("StandardPrelude");
                                                                        var if1682 = GraceDone;
                                                                        setLineNumber(207);    // compilenode string
                                                                        var string1683 = new GraceString("");
                                                                        var opresult1686 = callmethodChecked(var_name, "==", [1], string1683);
                                                                        if (Grace_isTrue(opresult1686)) {
                                                                          var string1687 = new GraceString("type \u2039anon\u203a");
                                                                          if1682 = string1687;
                                                                        } else {
                                                                          setLineNumber(208);    // compilenode string
                                                                          var string1688 = new GraceString("");
                                                                          var string1691 = new GraceString("type ");
                                                                          var opresult1693 = callmethodChecked(string1691, "++", [1], var_name);
                                                                          var opresult1695 = callmethodChecked(opresult1693, "++", [1], string1688);
                                                                          if1682 = opresult1695;
                                                                        }
                                                                        return if1682;
                                                                      };
                                                                      func1681.paramCounts = [0];
                                                                      obj1671.methods["asString"] = func1681;
                                                                      func1681.definitionLine = 206;
                                                                      func1681.definitionModule = "StandardPrelude";
                                                                      superDepth = origSuperDepth;
                                                                    };
                                                                    obj_init_1671.apply(inheritingObject, []);
                                                                    return obj1671;
                                                                    };
                                                                    obj1642.methods["new()object"] = func1670;
                                                                  var func1696 = function(argcv) {    // method 
                                                                    var returnTarget = invocationCount;
                                                                    invocationCount++;
                                                                    var curarg = 1;
                                                                    setModuleName("StandardPrelude");
                                                                    setLineNumber(193);    // compilenode string
                                                                    var string1697 = new GraceString("class BaseType");
                                                                    return string1697;
                                                                  };
                                                                  func1696.paramCounts = [];
                                                                  obj1642.methods["asString"] = func1696;
                                                                  func1696.definitionLine = 193;
                                                                  func1696.definitionModule = "StandardPrelude";
                                                                  superDepth = origSuperDepth;
                                                                };
                                                                obj_init_1642.apply(obj1642, []);
                                                                var var_BaseType = obj1642;
                                                                setLineNumber(155);    // compilenode method
                                                                var func1698 = function(argcv) {    // method BaseType
                                                                  var returnTarget = invocationCount;
                                                                  invocationCount++;
                                                                  var curarg = 1;
                                                                  if (argcv[0] !== 0)
                                                                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for BaseType"));
                                                                  setModuleName("StandardPrelude");
                                                                  // BaseType is a simple accessor - elide try ... catch
                                                                  setLineNumber(193);    // compilenode identifier
                                                                  return var_BaseType;
                                                                };
                                                                func1698.paramCounts = [0];
                                                                this.methods["BaseType"] = func1698;
                                                                func1698.definitionLine = 155;
                                                                func1698.definitionModule = "StandardPrelude";
                                                                this.methods["BaseType"].debug = "def";
                                                                setLineNumber(212);    // compilenode object
                                                                var obj1699 = Grace_allocObject(GraceObject, "TypeIntersection");
                                                                obj1699.definitionModule = "StandardPrelude";
                                                                obj1699.definitionLine = 212;
                                                                obj1699.outer = this;
                                                                var reader_StandardPrelude_outer1700 = function() {
                                                                  return this.outer;
                                                                };
                                                                obj1699.methods["outer"] = reader_StandardPrelude_outer1700;
                                                                var obj_init_1699 = function() {
                                                                  var origSuperDepth = superDepth;
                                                                  superDepth = obj1699;
                                                                  var func1701 = function(argcv) {    // method new(2)
                                                                    var returnTarget = invocationCount;
                                                                    invocationCount++;
                                                                    var curarg = 1;
                                                                    var var_t1 = arguments[curarg];
                                                                    curarg++;
                                                                    var var_t2 = arguments[curarg];
                                                                    curarg++;
                                                                    if (argcv[0] !== 2)
                                                                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for new(2)"));
                                                                    setModuleName("StandardPrelude");
                                                                    var obj1702 = Grace_allocObject(null, "new");
                                                                    obj1702.definitionModule = "StandardPrelude";
                                                                    obj1702.definitionLine = 212;
                                                                    obj1702.outer = this;
                                                                    var reader_StandardPrelude_outer1703 = function() {
                                                                      return this.outer;
                                                                    };
                                                                    obj1702.methods["outer"] = reader_StandardPrelude_outer1703;
                                                                    var obj_init_1702 = function() {
                                                                      var origSuperDepth = superDepth;
                                                                      superDepth = obj1702;
                                                                      var func1704 = function(argcv) {    // method &(1)
                                                                        var returnTarget = invocationCount;
                                                                        invocationCount++;
                                                                        var curarg = 1;
                                                                        var var_o = arguments[curarg];
                                                                        curarg++;
                                                                        if (argcv[0] !== 1)
                                                                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for &(1)"));
                                                                        setModuleName("StandardPrelude");
                                                                        setLineNumber(216);    // compilenode identifier
                                                                        var call1705 = callmethodChecked(var_TypeIntersection, "new", [2], this, var_o);
                                                                        return call1705;
                                                                      };
                                                                      func1704.paramCounts = [1];
                                                                      obj1702.methods["&"] = func1704;
                                                                      func1704.definitionLine = 215;
                                                                      func1704.definitionModule = "StandardPrelude";
                                                                      var func1706 = function(argcv) {    // method |(1)
                                                                        var returnTarget = invocationCount;
                                                                        invocationCount++;
                                                                        var curarg = 1;
                                                                        var var_o = arguments[curarg];
                                                                        curarg++;
                                                                        if (argcv[0] !== 1)
                                                                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for |(1)"));
                                                                        setModuleName("StandardPrelude");
                                                                        setLineNumber(219);    // compilenode identifier
                                                                        var call1707 = callmethodChecked(var_TypeVariant, "new", [2], this, var_o);
                                                                        return call1707;
                                                                      };
                                                                      func1706.paramCounts = [1];
                                                                      obj1702.methods["|"] = func1706;
                                                                      func1706.definitionLine = 218;
                                                                      func1706.definitionModule = "StandardPrelude";
                                                                      var func1708 = function(argcv) {    // method +(1)
                                                                        var returnTarget = invocationCount;
                                                                        invocationCount++;
                                                                        var curarg = 1;
                                                                        var var_o = arguments[curarg];
                                                                        curarg++;
                                                                        if (argcv[0] !== 1)
                                                                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for +(1)"));
                                                                        setModuleName("StandardPrelude");
                                                                        setLineNumber(222);    // compilenode identifier
                                                                        var call1709 = callmethodChecked(var_TypeUnion, "new", [2], this, var_o);
                                                                        return call1709;
                                                                      };
                                                                      func1708.paramCounts = [1];
                                                                      obj1702.methods["+"] = func1708;
                                                                      func1708.definitionLine = 221;
                                                                      func1708.definitionModule = "StandardPrelude";
                                                                      var func1710 = function(argcv) {    // method -(1)
                                                                        var returnTarget = invocationCount;
                                                                        invocationCount++;
                                                                        var curarg = 1;
                                                                        var var_o = arguments[curarg];
                                                                        curarg++;
                                                                        if (argcv[0] !== 1)
                                                                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for -(1)"));
                                                                        setModuleName("StandardPrelude");
                                                                        setLineNumber(225);    // compilenode identifier
                                                                        var call1711 = callmethodChecked(var_TypeSubtraction, "new", [2], this, var_o);
                                                                        return call1711;
                                                                      };
                                                                      func1710.paramCounts = [1];
                                                                      obj1702.methods["-"] = func1710;
                                                                      func1710.definitionLine = 224;
                                                                      func1710.definitionModule = "StandardPrelude";
                                                                      var func1712 = function(argcv) {    // method methodNames
                                                                        var returnTarget = invocationCount;
                                                                        invocationCount++;
                                                                        var curarg = 1;
                                                                        if (argcv[0] !== 0)
                                                                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for methodNames"));
                                                                        setModuleName("StandardPrelude");
                                                                        setLineNumber(228);    // compilenode identifier
                                                                        var call1713 = callmethodChecked(var_t2, "methodNames", [0]);
                                                                        var call1714 = callmethodChecked(var_t1, "methodNames", [0]);
                                                                        var call1715 = callmethodChecked(call1714, "addAll", [1], call1713);
                                                                        return call1715;
                                                                      };
                                                                      func1712.paramCounts = [0];
                                                                      obj1702.methods["methodNames"] = func1712;
                                                                      func1712.definitionLine = 227;
                                                                      func1712.definitionModule = "StandardPrelude";
                                                                      var func1716 = function(argcv) {    // method asString
                                                                        var returnTarget = invocationCount;
                                                                        invocationCount++;
                                                                        var curarg = 1;
                                                                        if (argcv[0] !== 0)
                                                                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                                                                        setModuleName("StandardPrelude");
                                                                        setLineNumber(230);    // compilenode string
                                                                        var string1717 = new GraceString(")");
                                                                        var string1720 = new GraceString(" & ");
                                                                        var string1723 = new GraceString("(");
                                                                        var opresult1725 = callmethodChecked(string1723, "++", [1], var_t1);
                                                                        var opresult1727 = callmethodChecked(opresult1725, "++", [1], string1720);
                                                                        var opresult1729 = callmethodChecked(opresult1727, "++", [1], var_t2);
                                                                        var opresult1731 = callmethodChecked(opresult1729, "++", [1], string1717);
                                                                        return opresult1731;
                                                                      };
                                                                      func1716.paramCounts = [0];
                                                                      obj1702.methods["asString"] = func1716;
                                                                      func1716.definitionLine = 230;
                                                                      func1716.definitionModule = "StandardPrelude";
                                                                      setLineNumber(213);    // compilenode identifier
                                                                      var call1732 = callmethodChecked(var_AndPattern, "new()object", [2, 1], var_t1, var_t2, this);
                                                                      obj1702.superobj = call1732;
                                                                      if (call1732.data) obj1702.data = call1732.data;
                                                                      if (call1732.hasOwnProperty('_value'))
                                                                          obj1702._value = call1732._value;
                                                                      superDepth = origSuperDepth;
                                                                    };
                                                                    obj_init_1702.apply(obj1702, []);
                                                                    return obj1702;
                                                                  };
                                                                  func1701.paramCounts = [2];
                                                                  obj1699.methods["new"] = func1701;
                                                                  func1701.definitionLine = 212;
                                                                  func1701.definitionModule = "StandardPrelude";
                                                                    var func1733 = function(argcv) {    // method new(2     )()object
                                                                      var curarg = 1;
                                                                      var var_t1 = arguments[curarg];
                                                                      curarg++;
                                                                      var var_t2 = arguments[curarg];
                                                                      curarg++;
                                                                      var inheritingObject = arguments[curarg++];
                                                                      // Start argument processing
                                                                      curarg = 1;
                                                                      curarg++;
                                                                      curarg++;
                                                                      // End argument processing
                                                                      setModuleName("StandardPrelude");
                                                                      var returnTarget = invocationCount;
                                                                      invocationCount++;
                                                                      var obj1734 = Grace_allocObject(null, "new");
                                                                      obj1734.definitionModule = "StandardPrelude";
                                                                      obj1734.definitionLine = 212;
                                                                      var inho1734 = inheritingObject;
                                                                      while (inho1734.superobj) inho1734 = inho1734.superobj;
                                                                      inho1734.superobj = obj1734;
                                                                      obj1734.data = inheritingObject.data;
                                                                      if (inheritingObject.hasOwnProperty('_value'))
                                                                        obj1734._value = inheritingObject._value;
                                                                      obj1734.outer = this;
                                                                      var reader_StandardPrelude_outer1735 = function() {
                                                                        return this.outer;
                                                                      };
                                                                      obj1734.methods["outer"] = reader_StandardPrelude_outer1735;
                                                                      var obj_init_1734 = function() {
                                                                        var origSuperDepth = superDepth;
                                                                        superDepth = obj1734;
                                                                        var func1736 = function(argcv) {    // method &(1)
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          var var_o = arguments[curarg];
                                                                          curarg++;
                                                                          if (argcv[0] !== 1)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for &(1)"));
                                                                          setModuleName("StandardPrelude");
                                                                          setLineNumber(216);    // compilenode identifier
                                                                          var call1737 = callmethodChecked(var_TypeIntersection, "new", [2], this, var_o);
                                                                          return call1737;
                                                                        };
                                                                        func1736.paramCounts = [1];
                                                                        obj1734.methods["&"] = func1736;
                                                                        func1736.definitionLine = 215;
                                                                        func1736.definitionModule = "StandardPrelude";
                                                                        var func1738 = function(argcv) {    // method |(1)
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          var var_o = arguments[curarg];
                                                                          curarg++;
                                                                          if (argcv[0] !== 1)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for |(1)"));
                                                                          setModuleName("StandardPrelude");
                                                                          setLineNumber(219);    // compilenode identifier
                                                                          var call1739 = callmethodChecked(var_TypeVariant, "new", [2], this, var_o);
                                                                          return call1739;
                                                                        };
                                                                        func1738.paramCounts = [1];
                                                                        obj1734.methods["|"] = func1738;
                                                                        func1738.definitionLine = 218;
                                                                        func1738.definitionModule = "StandardPrelude";
                                                                        var func1740 = function(argcv) {    // method +(1)
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          var var_o = arguments[curarg];
                                                                          curarg++;
                                                                          if (argcv[0] !== 1)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for +(1)"));
                                                                          setModuleName("StandardPrelude");
                                                                          setLineNumber(222);    // compilenode identifier
                                                                          var call1741 = callmethodChecked(var_TypeUnion, "new", [2], this, var_o);
                                                                          return call1741;
                                                                        };
                                                                        func1740.paramCounts = [1];
                                                                        obj1734.methods["+"] = func1740;
                                                                        func1740.definitionLine = 221;
                                                                        func1740.definitionModule = "StandardPrelude";
                                                                        var func1742 = function(argcv) {    // method -(1)
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          var var_o = arguments[curarg];
                                                                          curarg++;
                                                                          if (argcv[0] !== 1)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for -(1)"));
                                                                          setModuleName("StandardPrelude");
                                                                          setLineNumber(225);    // compilenode identifier
                                                                          var call1743 = callmethodChecked(var_TypeSubtraction, "new", [2], this, var_o);
                                                                          return call1743;
                                                                        };
                                                                        func1742.paramCounts = [1];
                                                                        obj1734.methods["-"] = func1742;
                                                                        func1742.definitionLine = 224;
                                                                        func1742.definitionModule = "StandardPrelude";
                                                                        var func1744 = function(argcv) {    // method methodNames
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for methodNames"));
                                                                          setModuleName("StandardPrelude");
                                                                          setLineNumber(228);    // compilenode identifier
                                                                          var call1745 = callmethodChecked(var_t2, "methodNames", [0]);
                                                                          var call1746 = callmethodChecked(var_t1, "methodNames", [0]);
                                                                          var call1747 = callmethodChecked(call1746, "addAll", [1], call1745);
                                                                          return call1747;
                                                                        };
                                                                        func1744.paramCounts = [0];
                                                                        obj1734.methods["methodNames"] = func1744;
                                                                        func1744.definitionLine = 227;
                                                                        func1744.definitionModule = "StandardPrelude";
                                                                        var func1748 = function(argcv) {    // method asString
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                                                                          setModuleName("StandardPrelude");
                                                                          setLineNumber(230);    // compilenode string
                                                                          var string1749 = new GraceString(")");
                                                                          var string1752 = new GraceString(" & ");
                                                                          var string1755 = new GraceString("(");
                                                                          var opresult1757 = callmethodChecked(string1755, "++", [1], var_t1);
                                                                          var opresult1759 = callmethodChecked(opresult1757, "++", [1], string1752);
                                                                          var opresult1761 = callmethodChecked(opresult1759, "++", [1], var_t2);
                                                                          var opresult1763 = callmethodChecked(opresult1761, "++", [1], string1749);
                                                                          return opresult1763;
                                                                        };
                                                                        func1748.paramCounts = [0];
                                                                        obj1734.methods["asString"] = func1748;
                                                                        func1748.definitionLine = 230;
                                                                        func1748.definitionModule = "StandardPrelude";
                                                                        setLineNumber(213);    // compilenode identifier
                                                                        var call1764 = callmethodChecked(var_AndPattern, "new()object", [2, 1], var_t1, var_t2, this);
                                                                        obj1734.superobj = call1764;
                                                                        if (call1764.data) obj1734.data = call1764.data;
                                                                        if (call1764.hasOwnProperty('_value'))
                                                                            obj1734._value = call1764._value;
                                                                        superDepth = origSuperDepth;
                                                                      };
                                                                      obj_init_1734.apply(inheritingObject, []);
                                                                      return obj1734;
                                                                      };
                                                                      obj1699.methods["new()object"] = func1733;
                                                                    var func1765 = function(argcv) {    // method 
                                                                      var returnTarget = invocationCount;
                                                                      invocationCount++;
                                                                      var curarg = 1;
                                                                      setModuleName("StandardPrelude");
                                                                      setLineNumber(212);    // compilenode string
                                                                      var string1766 = new GraceString("class TypeIntersection");
                                                                      return string1766;
                                                                    };
                                                                    func1765.paramCounts = [];
                                                                    obj1699.methods["asString"] = func1765;
                                                                    func1765.definitionLine = 212;
                                                                    func1765.definitionModule = "StandardPrelude";
                                                                    superDepth = origSuperDepth;
                                                                  };
                                                                  obj_init_1699.apply(obj1699, []);
                                                                  var var_TypeIntersection = obj1699;
                                                                  setLineNumber(228);    // compilenode method
                                                                  var func1767 = function(argcv) {    // method TypeIntersection
                                                                    var returnTarget = invocationCount;
                                                                    invocationCount++;
                                                                    var curarg = 1;
                                                                    if (argcv[0] !== 0)
                                                                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for TypeIntersection"));
                                                                    setModuleName("StandardPrelude");
                                                                    // TypeIntersection is a simple accessor - elide try ... catch
                                                                    setLineNumber(212);    // compilenode identifier
                                                                    return var_TypeIntersection;
                                                                  };
                                                                  func1767.paramCounts = [0];
                                                                  this.methods["TypeIntersection"] = func1767;
                                                                  func1767.definitionLine = 228;
                                                                  func1767.definitionModule = "StandardPrelude";
                                                                  this.methods["TypeIntersection"].debug = "def";
                                                                  setLineNumber(233);    // compilenode object
                                                                  var obj1768 = Grace_allocObject(GraceObject, "TypeVariant");
                                                                  obj1768.definitionModule = "StandardPrelude";
                                                                  obj1768.definitionLine = 233;
                                                                  obj1768.outer = this;
                                                                  var reader_StandardPrelude_outer1769 = function() {
                                                                    return this.outer;
                                                                  };
                                                                  obj1768.methods["outer"] = reader_StandardPrelude_outer1769;
                                                                  var obj_init_1768 = function() {
                                                                    var origSuperDepth = superDepth;
                                                                    superDepth = obj1768;
                                                                    var func1770 = function(argcv) {    // method new(2)
                                                                      var returnTarget = invocationCount;
                                                                      invocationCount++;
                                                                      var curarg = 1;
                                                                      var var_t1 = arguments[curarg];
                                                                      curarg++;
                                                                      var var_t2 = arguments[curarg];
                                                                      curarg++;
                                                                      if (argcv[0] !== 2)
                                                                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for new(2)"));
                                                                      setModuleName("StandardPrelude");
                                                                      var obj1771 = Grace_allocObject(null, "new");
                                                                      obj1771.definitionModule = "StandardPrelude";
                                                                      obj1771.definitionLine = 233;
                                                                      obj1771.outer = this;
                                                                      var reader_StandardPrelude_outer1772 = function() {
                                                                        return this.outer;
                                                                      };
                                                                      obj1771.methods["outer"] = reader_StandardPrelude_outer1772;
                                                                      var obj_init_1771 = function() {
                                                                        var origSuperDepth = superDepth;
                                                                        superDepth = obj1771;
                                                                        var func1773 = function(argcv) {    // method &(1)
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          var var_o = arguments[curarg];
                                                                          curarg++;
                                                                          if (argcv[0] !== 1)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for &(1)"));
                                                                          setModuleName("StandardPrelude");
                                                                          setLineNumber(237);    // compilenode identifier
                                                                          var call1774 = callmethodChecked(var_TypeIntersection, "new", [2], this, var_o);
                                                                          return call1774;
                                                                        };
                                                                        func1773.paramCounts = [1];
                                                                        obj1771.methods["&"] = func1773;
                                                                        func1773.definitionLine = 236;
                                                                        func1773.definitionModule = "StandardPrelude";
                                                                        var func1775 = function(argcv) {    // method |(1)
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          var var_o = arguments[curarg];
                                                                          curarg++;
                                                                          if (argcv[0] !== 1)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for |(1)"));
                                                                          setModuleName("StandardPrelude");
                                                                          setLineNumber(240);    // compilenode identifier
                                                                          var call1776 = callmethodChecked(var_TypeVariant, "new", [2], this, var_o);
                                                                          return call1776;
                                                                        };
                                                                        func1775.paramCounts = [1];
                                                                        obj1771.methods["|"] = func1775;
                                                                        func1775.definitionLine = 239;
                                                                        func1775.definitionModule = "StandardPrelude";
                                                                        var func1777 = function(argcv) {    // method +(1)
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          var var_o = arguments[curarg];
                                                                          curarg++;
                                                                          if (argcv[0] !== 1)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for +(1)"));
                                                                          setModuleName("StandardPrelude");
                                                                          setLineNumber(243);    // compilenode identifier
                                                                          var call1778 = callmethodChecked(var_TypeUnion, "new", [2], this, var_o);
                                                                          return call1778;
                                                                        };
                                                                        func1777.paramCounts = [1];
                                                                        obj1771.methods["+"] = func1777;
                                                                        func1777.definitionLine = 242;
                                                                        func1777.definitionModule = "StandardPrelude";
                                                                        var func1779 = function(argcv) {    // method -(1)
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          var var_o = arguments[curarg];
                                                                          curarg++;
                                                                          if (argcv[0] !== 1)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for -(1)"));
                                                                          setModuleName("StandardPrelude");
                                                                          setLineNumber(246);    // compilenode identifier
                                                                          var call1780 = callmethodChecked(var_TypeSubtraction, "new", [2], this, var_o);
                                                                          return call1780;
                                                                        };
                                                                        func1779.paramCounts = [1];
                                                                        obj1771.methods["-"] = func1779;
                                                                        func1779.definitionLine = 245;
                                                                        func1779.definitionModule = "StandardPrelude";
                                                                        var func1781 = function(argcv) {    // method methodNames
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for methodNames"));
                                                                          setModuleName("StandardPrelude");
                                                                          setLineNumber(249);    // compilenode call
                                                                          onSelf = true;
                                                                          var call1782 = callmethodChecked(this, "TypeVariantsCannotBeCharacterizedByASetOfMethods", [0]);
                                                                          return call1782;
                                                                        };
                                                                        func1781.paramCounts = [0];
                                                                        obj1771.methods["methodNames"] = func1781;
                                                                        func1781.definitionLine = 248;
                                                                        func1781.definitionModule = "StandardPrelude";
                                                                        var func1783 = function(argcv) {    // method asString
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                                                                          setModuleName("StandardPrelude");
                                                                          setLineNumber(251);    // compilenode string
                                                                          var string1784 = new GraceString(")");
                                                                          var string1787 = new GraceString(" | ");
                                                                          var string1790 = new GraceString("(");
                                                                          var opresult1792 = callmethodChecked(string1790, "++", [1], var_t1);
                                                                          var opresult1794 = callmethodChecked(opresult1792, "++", [1], string1787);
                                                                          var opresult1796 = callmethodChecked(opresult1794, "++", [1], var_t2);
                                                                          var opresult1798 = callmethodChecked(opresult1796, "++", [1], string1784);
                                                                          return opresult1798;
                                                                        };
                                                                        func1783.paramCounts = [0];
                                                                        obj1771.methods["asString"] = func1783;
                                                                        func1783.definitionLine = 251;
                                                                        func1783.definitionModule = "StandardPrelude";
                                                                        setLineNumber(234);    // compilenode identifier
                                                                        var call1799 = callmethodChecked(var_OrPattern, "new()object", [2, 1], var_t1, var_t2, this);
                                                                        obj1771.superobj = call1799;
                                                                        if (call1799.data) obj1771.data = call1799.data;
                                                                        if (call1799.hasOwnProperty('_value'))
                                                                            obj1771._value = call1799._value;
                                                                        superDepth = origSuperDepth;
                                                                      };
                                                                      obj_init_1771.apply(obj1771, []);
                                                                      return obj1771;
                                                                    };
                                                                    func1770.paramCounts = [2];
                                                                    obj1768.methods["new"] = func1770;
                                                                    func1770.definitionLine = 233;
                                                                    func1770.definitionModule = "StandardPrelude";
                                                                      var func1800 = function(argcv) {    // method new(2     )()object
                                                                        var curarg = 1;
                                                                        var var_t1 = arguments[curarg];
                                                                        curarg++;
                                                                        var var_t2 = arguments[curarg];
                                                                        curarg++;
                                                                        var inheritingObject = arguments[curarg++];
                                                                        // Start argument processing
                                                                        curarg = 1;
                                                                        curarg++;
                                                                        curarg++;
                                                                        // End argument processing
                                                                        setModuleName("StandardPrelude");
                                                                        var returnTarget = invocationCount;
                                                                        invocationCount++;
                                                                        var obj1801 = Grace_allocObject(null, "new");
                                                                        obj1801.definitionModule = "StandardPrelude";
                                                                        obj1801.definitionLine = 233;
                                                                        var inho1801 = inheritingObject;
                                                                        while (inho1801.superobj) inho1801 = inho1801.superobj;
                                                                        inho1801.superobj = obj1801;
                                                                        obj1801.data = inheritingObject.data;
                                                                        if (inheritingObject.hasOwnProperty('_value'))
                                                                          obj1801._value = inheritingObject._value;
                                                                        obj1801.outer = this;
                                                                        var reader_StandardPrelude_outer1802 = function() {
                                                                          return this.outer;
                                                                        };
                                                                        obj1801.methods["outer"] = reader_StandardPrelude_outer1802;
                                                                        var obj_init_1801 = function() {
                                                                          var origSuperDepth = superDepth;
                                                                          superDepth = obj1801;
                                                                          var func1803 = function(argcv) {    // method &(1)
                                                                            var returnTarget = invocationCount;
                                                                            invocationCount++;
                                                                            var curarg = 1;
                                                                            var var_o = arguments[curarg];
                                                                            curarg++;
                                                                            if (argcv[0] !== 1)
                                                                              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for &(1)"));
                                                                            setModuleName("StandardPrelude");
                                                                            setLineNumber(237);    // compilenode identifier
                                                                            var call1804 = callmethodChecked(var_TypeIntersection, "new", [2], this, var_o);
                                                                            return call1804;
                                                                          };
                                                                          func1803.paramCounts = [1];
                                                                          obj1801.methods["&"] = func1803;
                                                                          func1803.definitionLine = 236;
                                                                          func1803.definitionModule = "StandardPrelude";
                                                                          var func1805 = function(argcv) {    // method |(1)
                                                                            var returnTarget = invocationCount;
                                                                            invocationCount++;
                                                                            var curarg = 1;
                                                                            var var_o = arguments[curarg];
                                                                            curarg++;
                                                                            if (argcv[0] !== 1)
                                                                              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for |(1)"));
                                                                            setModuleName("StandardPrelude");
                                                                            setLineNumber(240);    // compilenode identifier
                                                                            var call1806 = callmethodChecked(var_TypeVariant, "new", [2], this, var_o);
                                                                            return call1806;
                                                                          };
                                                                          func1805.paramCounts = [1];
                                                                          obj1801.methods["|"] = func1805;
                                                                          func1805.definitionLine = 239;
                                                                          func1805.definitionModule = "StandardPrelude";
                                                                          var func1807 = function(argcv) {    // method +(1)
                                                                            var returnTarget = invocationCount;
                                                                            invocationCount++;
                                                                            var curarg = 1;
                                                                            var var_o = arguments[curarg];
                                                                            curarg++;
                                                                            if (argcv[0] !== 1)
                                                                              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for +(1)"));
                                                                            setModuleName("StandardPrelude");
                                                                            setLineNumber(243);    // compilenode identifier
                                                                            var call1808 = callmethodChecked(var_TypeUnion, "new", [2], this, var_o);
                                                                            return call1808;
                                                                          };
                                                                          func1807.paramCounts = [1];
                                                                          obj1801.methods["+"] = func1807;
                                                                          func1807.definitionLine = 242;
                                                                          func1807.definitionModule = "StandardPrelude";
                                                                          var func1809 = function(argcv) {    // method -(1)
                                                                            var returnTarget = invocationCount;
                                                                            invocationCount++;
                                                                            var curarg = 1;
                                                                            var var_o = arguments[curarg];
                                                                            curarg++;
                                                                            if (argcv[0] !== 1)
                                                                              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for -(1)"));
                                                                            setModuleName("StandardPrelude");
                                                                            setLineNumber(246);    // compilenode identifier
                                                                            var call1810 = callmethodChecked(var_TypeSubtraction, "new", [2], this, var_o);
                                                                            return call1810;
                                                                          };
                                                                          func1809.paramCounts = [1];
                                                                          obj1801.methods["-"] = func1809;
                                                                          func1809.definitionLine = 245;
                                                                          func1809.definitionModule = "StandardPrelude";
                                                                          var func1811 = function(argcv) {    // method methodNames
                                                                            var returnTarget = invocationCount;
                                                                            invocationCount++;
                                                                            var curarg = 1;
                                                                            if (argcv[0] !== 0)
                                                                              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for methodNames"));
                                                                            setModuleName("StandardPrelude");
                                                                            setLineNumber(249);    // compilenode call
                                                                            onSelf = true;
                                                                            var call1812 = callmethodChecked(this, "TypeVariantsCannotBeCharacterizedByASetOfMethods", [0]);
                                                                            return call1812;
                                                                          };
                                                                          func1811.paramCounts = [0];
                                                                          obj1801.methods["methodNames"] = func1811;
                                                                          func1811.definitionLine = 248;
                                                                          func1811.definitionModule = "StandardPrelude";
                                                                          var func1813 = function(argcv) {    // method asString
                                                                            var returnTarget = invocationCount;
                                                                            invocationCount++;
                                                                            var curarg = 1;
                                                                            if (argcv[0] !== 0)
                                                                              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                                                                            setModuleName("StandardPrelude");
                                                                            setLineNumber(251);    // compilenode string
                                                                            var string1814 = new GraceString(")");
                                                                            var string1817 = new GraceString(" | ");
                                                                            var string1820 = new GraceString("(");
                                                                            var opresult1822 = callmethodChecked(string1820, "++", [1], var_t1);
                                                                            var opresult1824 = callmethodChecked(opresult1822, "++", [1], string1817);
                                                                            var opresult1826 = callmethodChecked(opresult1824, "++", [1], var_t2);
                                                                            var opresult1828 = callmethodChecked(opresult1826, "++", [1], string1814);
                                                                            return opresult1828;
                                                                          };
                                                                          func1813.paramCounts = [0];
                                                                          obj1801.methods["asString"] = func1813;
                                                                          func1813.definitionLine = 251;
                                                                          func1813.definitionModule = "StandardPrelude";
                                                                          setLineNumber(234);    // compilenode identifier
                                                                          var call1829 = callmethodChecked(var_OrPattern, "new()object", [2, 1], var_t1, var_t2, this);
                                                                          obj1801.superobj = call1829;
                                                                          if (call1829.data) obj1801.data = call1829.data;
                                                                          if (call1829.hasOwnProperty('_value'))
                                                                              obj1801._value = call1829._value;
                                                                          superDepth = origSuperDepth;
                                                                        };
                                                                        obj_init_1801.apply(inheritingObject, []);
                                                                        return obj1801;
                                                                        };
                                                                        obj1768.methods["new()object"] = func1800;
                                                                      var func1830 = function(argcv) {    // method 
                                                                        var returnTarget = invocationCount;
                                                                        invocationCount++;
                                                                        var curarg = 1;
                                                                        setModuleName("StandardPrelude");
                                                                        setLineNumber(233);    // compilenode string
                                                                        var string1831 = new GraceString("class TypeVariant");
                                                                        return string1831;
                                                                      };
                                                                      func1830.paramCounts = [];
                                                                      obj1768.methods["asString"] = func1830;
                                                                      func1830.definitionLine = 233;
                                                                      func1830.definitionModule = "StandardPrelude";
                                                                      superDepth = origSuperDepth;
                                                                    };
                                                                    obj_init_1768.apply(obj1768, []);
                                                                    var var_TypeVariant = obj1768;
                                                                    setLineNumber(249);    // compilenode method
                                                                    var func1832 = function(argcv) {    // method TypeVariant
                                                                      var returnTarget = invocationCount;
                                                                      invocationCount++;
                                                                      var curarg = 1;
                                                                      if (argcv[0] !== 0)
                                                                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for TypeVariant"));
                                                                      setModuleName("StandardPrelude");
                                                                      // TypeVariant is a simple accessor - elide try ... catch
                                                                      setLineNumber(233);    // compilenode identifier
                                                                      return var_TypeVariant;
                                                                    };
                                                                    func1832.paramCounts = [0];
                                                                    this.methods["TypeVariant"] = func1832;
                                                                    func1832.definitionLine = 249;
                                                                    func1832.definitionModule = "StandardPrelude";
                                                                    this.methods["TypeVariant"].debug = "def";
                                                                    setLineNumber(254);    // compilenode object
                                                                    var obj1833 = Grace_allocObject(GraceObject, "TypeUnion");
                                                                    obj1833.definitionModule = "StandardPrelude";
                                                                    obj1833.definitionLine = 254;
                                                                    obj1833.outer = this;
                                                                    var reader_StandardPrelude_outer1834 = function() {
                                                                      return this.outer;
                                                                    };
                                                                    obj1833.methods["outer"] = reader_StandardPrelude_outer1834;
                                                                    var obj_init_1833 = function() {
                                                                      var origSuperDepth = superDepth;
                                                                      superDepth = obj1833;
                                                                      var func1835 = function(argcv) {    // method new(2)
                                                                        var returnTarget = invocationCount;
                                                                        invocationCount++;
                                                                        var curarg = 1;
                                                                        var var_t1 = arguments[curarg];
                                                                        curarg++;
                                                                        var var_t2 = arguments[curarg];
                                                                        curarg++;
                                                                        if (argcv[0] !== 2)
                                                                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for new(2)"));
                                                                        setModuleName("StandardPrelude");
                                                                        var obj1836 = Grace_allocObject(null, "new");
                                                                        obj1836.definitionModule = "StandardPrelude";
                                                                        obj1836.definitionLine = 254;
                                                                        obj1836.outer = this;
                                                                        var reader_StandardPrelude_outer1837 = function() {
                                                                          return this.outer;
                                                                        };
                                                                        obj1836.methods["outer"] = reader_StandardPrelude_outer1837;
                                                                        var obj_init_1836 = function() {
                                                                          var origSuperDepth = superDepth;
                                                                          superDepth = obj1836;
                                                                          var func1838 = function(argcv) {    // method &(1)
                                                                            var returnTarget = invocationCount;
                                                                            invocationCount++;
                                                                            var curarg = 1;
                                                                            var var_o = arguments[curarg];
                                                                            curarg++;
                                                                            if (argcv[0] !== 1)
                                                                              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for &(1)"));
                                                                            setModuleName("StandardPrelude");
                                                                            setLineNumber(258);    // compilenode identifier
                                                                            var call1839 = callmethodChecked(var_TypeIntersection, "new", [2], this, var_o);
                                                                            return call1839;
                                                                          };
                                                                          func1838.paramCounts = [1];
                                                                          obj1836.methods["&"] = func1838;
                                                                          func1838.definitionLine = 257;
                                                                          func1838.definitionModule = "StandardPrelude";
                                                                          var func1840 = function(argcv) {    // method |(1)
                                                                            var returnTarget = invocationCount;
                                                                            invocationCount++;
                                                                            var curarg = 1;
                                                                            var var_o = arguments[curarg];
                                                                            curarg++;
                                                                            if (argcv[0] !== 1)
                                                                              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for |(1)"));
                                                                            setModuleName("StandardPrelude");
                                                                            setLineNumber(261);    // compilenode identifier
                                                                            var call1841 = callmethodChecked(var_TypeVariant, "new", [2], this, var_o);
                                                                            return call1841;
                                                                          };
                                                                          func1840.paramCounts = [1];
                                                                          obj1836.methods["|"] = func1840;
                                                                          func1840.definitionLine = 260;
                                                                          func1840.definitionModule = "StandardPrelude";
                                                                          var func1842 = function(argcv) {    // method +(1)
                                                                            var returnTarget = invocationCount;
                                                                            invocationCount++;
                                                                            var curarg = 1;
                                                                            var var_o = arguments[curarg];
                                                                            curarg++;
                                                                            if (argcv[0] !== 1)
                                                                              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for +(1)"));
                                                                            setModuleName("StandardPrelude");
                                                                            setLineNumber(264);    // compilenode identifier
                                                                            var call1843 = callmethodChecked(var_TypeUnion, "new", [2], this, var_o);
                                                                            return call1843;
                                                                          };
                                                                          func1842.paramCounts = [1];
                                                                          obj1836.methods["+"] = func1842;
                                                                          func1842.definitionLine = 263;
                                                                          func1842.definitionModule = "StandardPrelude";
                                                                          var func1844 = function(argcv) {    // method -(1)
                                                                            var returnTarget = invocationCount;
                                                                            invocationCount++;
                                                                            var curarg = 1;
                                                                            var var_o = arguments[curarg];
                                                                            curarg++;
                                                                            if (argcv[0] !== 1)
                                                                              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for -(1)"));
                                                                            setModuleName("StandardPrelude");
                                                                            setLineNumber(267);    // compilenode identifier
                                                                            var call1845 = callmethodChecked(var_TypeSubtraction, "new", [2], this, var_o);
                                                                            return call1845;
                                                                          };
                                                                          func1844.paramCounts = [1];
                                                                          obj1836.methods["-"] = func1844;
                                                                          func1844.definitionLine = 266;
                                                                          func1844.definitionModule = "StandardPrelude";
                                                                          var func1846 = function(argcv) {    // method methodNames
                                                                            var returnTarget = invocationCount;
                                                                            invocationCount++;
                                                                            var curarg = 1;
                                                                            if (argcv[0] !== 0)
                                                                              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for methodNames"));
                                                                            setModuleName("StandardPrelude");
                                                                            setLineNumber(270);    // compilenode identifier
                                                                            var call1847 = callmethodChecked(var_t2, "methodNames", [0]);
                                                                            var call1849 = callmethodChecked(var_t1, "methodNames", [0]);
                                                                            var opresult1851 = callmethodChecked(call1849, "**", [1], call1847);
                                                                            return opresult1851;
                                                                          };
                                                                          func1846.paramCounts = [0];
                                                                          obj1836.methods["methodNames"] = func1846;
                                                                          func1846.definitionLine = 269;
                                                                          func1846.definitionModule = "StandardPrelude";
                                                                          var func1852 = function(argcv) {    // method match(1)
                                                                            var returnTarget = invocationCount;
                                                                            invocationCount++;
                                                                            var curarg = 1;
                                                                            var var_o = arguments[curarg];
                                                                            curarg++;
                                                                            if (argcv[0] !== 1)
                                                                              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for match(1)"));
                                                                            setModuleName("StandardPrelude");
                                                                            setLineNumber(273);    // compilenode string
                                                                            var string1853 = new GraceString("matching against a TypeUnion not yet implemented");
                                                                            var call1854 = callmethodChecked(var_prelude, "ResourceException", [0]);
                                                                            var call1855 = callmethodChecked(call1854, "raise", [1], string1853);
                                                                            setLineNumber(276);    // compilenode identifier
                                                                            var var_mirror = ellipsis;
                                                                            setLineNumber(277);    // compilenode identifier
                                                                            var call1856 = callmethodChecked(var_mirror, "reflect", [1], var_o);
                                                                            var call1857 = callmethodChecked(call1856, "methodNames", [0]);
                                                                            var var_oMethodNames = call1857;
                                                                            setLineNumber(278);    // compilenode call
                                                                            onSelf = true;
                                                                            var call1858 = callmethodChecked(this, "methodNames", [0]);
                                                                            var block1859 = new GraceBlock(this, 278, 1);
                                                                            setLineNumber(1);    // compilenode identifier
                                                                            block1859.real = function(var_each) {
                                                                              var if1860 = GraceDone;
                                                                              setLineNumber(279);    // compilenode identifier
                                                                              var call1861 = callmethodChecked(var_oMethodNames, "contains", [1], var_each);
                                                                              var call1862 = callmethodChecked(call1861, "prefix!", [0]);
                                                                              if (Grace_isTrue(call1862)) {
                                                                                setLineNumber(280);    // compilenode identifier
                                                                                var call1863 = callmethodChecked(var_FailedMatch, "new", [1], var_o);
                                                                                throw new ReturnException(call1863, returnTarget);
                                                                              }
                                                                              return if1860;
                                                                            };
                                                                            var call1864 = callmethodChecked(var_prelude, "for()do", [1, 1], call1858, block1859);
                                                                            setLineNumber(283);    // compilenode array
                                                                            var array1865 = new PrimitiveGraceList([]);
                                                                            var call1866 = callmethodChecked(var_SuccessfulMatch, "new", [2], var_o, array1865);
                                                                            return call1866;
                                                                          };
                                                                          func1852.paramCounts = [1];
                                                                          obj1836.methods["match"] = func1852;
                                                                          func1852.definitionLine = 272;
                                                                          func1852.definitionModule = "StandardPrelude";
                                                                          var func1867 = function(argcv) {    // method asString
                                                                            var returnTarget = invocationCount;
                                                                            invocationCount++;
                                                                            var curarg = 1;
                                                                            if (argcv[0] !== 0)
                                                                              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                                                                            setModuleName("StandardPrelude");
                                                                            setLineNumber(285);    // compilenode string
                                                                            var string1868 = new GraceString(")");
                                                                            var string1871 = new GraceString(" + ");
                                                                            var string1874 = new GraceString("(");
                                                                            var opresult1876 = callmethodChecked(string1874, "++", [1], var_t1);
                                                                            var opresult1878 = callmethodChecked(opresult1876, "++", [1], string1871);
                                                                            var opresult1880 = callmethodChecked(opresult1878, "++", [1], var_t2);
                                                                            var opresult1882 = callmethodChecked(opresult1880, "++", [1], string1868);
                                                                            return opresult1882;
                                                                          };
                                                                          func1867.paramCounts = [0];
                                                                          obj1836.methods["asString"] = func1867;
                                                                          func1867.definitionLine = 285;
                                                                          func1867.definitionModule = "StandardPrelude";
                                                                          setLineNumber(255);    // compilenode identifier
                                                                          var call1883 = callmethodChecked(var_BasicPattern, "new()object", [2, 1], var_t1, var_t2, this);
                                                                          obj1836.superobj = call1883;
                                                                          if (call1883.data) obj1836.data = call1883.data;
                                                                          if (call1883.hasOwnProperty('_value'))
                                                                              obj1836._value = call1883._value;
                                                                          superDepth = origSuperDepth;
                                                                        };
                                                                        obj_init_1836.apply(obj1836, []);
                                                                        return obj1836;
                                                                      };
                                                                      func1835.paramCounts = [2];
                                                                      obj1833.methods["new"] = func1835;
                                                                      func1835.definitionLine = 254;
                                                                      func1835.definitionModule = "StandardPrelude";
                                                                        var func1884 = function(argcv) {    // method new(2     )()object
                                                                          var curarg = 1;
                                                                          var var_t1 = arguments[curarg];
                                                                          curarg++;
                                                                          var var_t2 = arguments[curarg];
                                                                          curarg++;
                                                                          var inheritingObject = arguments[curarg++];
                                                                          // Start argument processing
                                                                          curarg = 1;
                                                                          curarg++;
                                                                          curarg++;
                                                                          // End argument processing
                                                                          setModuleName("StandardPrelude");
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var obj1885 = Grace_allocObject(null, "new");
                                                                          obj1885.definitionModule = "StandardPrelude";
                                                                          obj1885.definitionLine = 254;
                                                                          var inho1885 = inheritingObject;
                                                                          while (inho1885.superobj) inho1885 = inho1885.superobj;
                                                                          inho1885.superobj = obj1885;
                                                                          obj1885.data = inheritingObject.data;
                                                                          if (inheritingObject.hasOwnProperty('_value'))
                                                                            obj1885._value = inheritingObject._value;
                                                                          obj1885.outer = this;
                                                                          var reader_StandardPrelude_outer1886 = function() {
                                                                            return this.outer;
                                                                          };
                                                                          obj1885.methods["outer"] = reader_StandardPrelude_outer1886;
                                                                          var obj_init_1885 = function() {
                                                                            var origSuperDepth = superDepth;
                                                                            superDepth = obj1885;
                                                                            var func1887 = function(argcv) {    // method &(1)
                                                                              var returnTarget = invocationCount;
                                                                              invocationCount++;
                                                                              var curarg = 1;
                                                                              var var_o = arguments[curarg];
                                                                              curarg++;
                                                                              if (argcv[0] !== 1)
                                                                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for &(1)"));
                                                                              setModuleName("StandardPrelude");
                                                                              setLineNumber(258);    // compilenode identifier
                                                                              var call1888 = callmethodChecked(var_TypeIntersection, "new", [2], this, var_o);
                                                                              return call1888;
                                                                            };
                                                                            func1887.paramCounts = [1];
                                                                            obj1885.methods["&"] = func1887;
                                                                            func1887.definitionLine = 257;
                                                                            func1887.definitionModule = "StandardPrelude";
                                                                            var func1889 = function(argcv) {    // method |(1)
                                                                              var returnTarget = invocationCount;
                                                                              invocationCount++;
                                                                              var curarg = 1;
                                                                              var var_o = arguments[curarg];
                                                                              curarg++;
                                                                              if (argcv[0] !== 1)
                                                                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for |(1)"));
                                                                              setModuleName("StandardPrelude");
                                                                              setLineNumber(261);    // compilenode identifier
                                                                              var call1890 = callmethodChecked(var_TypeVariant, "new", [2], this, var_o);
                                                                              return call1890;
                                                                            };
                                                                            func1889.paramCounts = [1];
                                                                            obj1885.methods["|"] = func1889;
                                                                            func1889.definitionLine = 260;
                                                                            func1889.definitionModule = "StandardPrelude";
                                                                            var func1891 = function(argcv) {    // method +(1)
                                                                              var returnTarget = invocationCount;
                                                                              invocationCount++;
                                                                              var curarg = 1;
                                                                              var var_o = arguments[curarg];
                                                                              curarg++;
                                                                              if (argcv[0] !== 1)
                                                                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for +(1)"));
                                                                              setModuleName("StandardPrelude");
                                                                              setLineNumber(264);    // compilenode identifier
                                                                              var call1892 = callmethodChecked(var_TypeUnion, "new", [2], this, var_o);
                                                                              return call1892;
                                                                            };
                                                                            func1891.paramCounts = [1];
                                                                            obj1885.methods["+"] = func1891;
                                                                            func1891.definitionLine = 263;
                                                                            func1891.definitionModule = "StandardPrelude";
                                                                            var func1893 = function(argcv) {    // method -(1)
                                                                              var returnTarget = invocationCount;
                                                                              invocationCount++;
                                                                              var curarg = 1;
                                                                              var var_o = arguments[curarg];
                                                                              curarg++;
                                                                              if (argcv[0] !== 1)
                                                                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for -(1)"));
                                                                              setModuleName("StandardPrelude");
                                                                              setLineNumber(267);    // compilenode identifier
                                                                              var call1894 = callmethodChecked(var_TypeSubtraction, "new", [2], this, var_o);
                                                                              return call1894;
                                                                            };
                                                                            func1893.paramCounts = [1];
                                                                            obj1885.methods["-"] = func1893;
                                                                            func1893.definitionLine = 266;
                                                                            func1893.definitionModule = "StandardPrelude";
                                                                            var func1895 = function(argcv) {    // method methodNames
                                                                              var returnTarget = invocationCount;
                                                                              invocationCount++;
                                                                              var curarg = 1;
                                                                              if (argcv[0] !== 0)
                                                                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for methodNames"));
                                                                              setModuleName("StandardPrelude");
                                                                              setLineNumber(270);    // compilenode identifier
                                                                              var call1896 = callmethodChecked(var_t2, "methodNames", [0]);
                                                                              var call1898 = callmethodChecked(var_t1, "methodNames", [0]);
                                                                              var opresult1900 = callmethodChecked(call1898, "**", [1], call1896);
                                                                              return opresult1900;
                                                                            };
                                                                            func1895.paramCounts = [0];
                                                                            obj1885.methods["methodNames"] = func1895;
                                                                            func1895.definitionLine = 269;
                                                                            func1895.definitionModule = "StandardPrelude";
                                                                            var func1901 = function(argcv) {    // method match(1)
                                                                              var returnTarget = invocationCount;
                                                                              invocationCount++;
                                                                              var curarg = 1;
                                                                              var var_o = arguments[curarg];
                                                                              curarg++;
                                                                              if (argcv[0] !== 1)
                                                                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for match(1)"));
                                                                              setModuleName("StandardPrelude");
                                                                              setLineNumber(273);    // compilenode string
                                                                              var string1902 = new GraceString("matching against a TypeUnion not yet implemented");
                                                                              var call1903 = callmethodChecked(var_prelude, "ResourceException", [0]);
                                                                              var call1904 = callmethodChecked(call1903, "raise", [1], string1902);
                                                                              setLineNumber(276);    // compilenode identifier
                                                                              var var_mirror = ellipsis;
                                                                              setLineNumber(277);    // compilenode identifier
                                                                              var call1905 = callmethodChecked(var_mirror, "reflect", [1], var_o);
                                                                              var call1906 = callmethodChecked(call1905, "methodNames", [0]);
                                                                              var var_oMethodNames = call1906;
                                                                              setLineNumber(278);    // compilenode call
                                                                              onSelf = true;
                                                                              var call1907 = callmethodChecked(this, "methodNames", [0]);
                                                                              var block1908 = new GraceBlock(this, 278, 1);
                                                                              setLineNumber(1);    // compilenode identifier
                                                                              block1908.real = function(var_each) {
                                                                                var if1909 = GraceDone;
                                                                                setLineNumber(279);    // compilenode identifier
                                                                                var call1910 = callmethodChecked(var_oMethodNames, "contains", [1], var_each);
                                                                                var call1911 = callmethodChecked(call1910, "prefix!", [0]);
                                                                                if (Grace_isTrue(call1911)) {
                                                                                  setLineNumber(280);    // compilenode identifier
                                                                                  var call1912 = callmethodChecked(var_FailedMatch, "new", [1], var_o);
                                                                                  throw new ReturnException(call1912, returnTarget);
                                                                                }
                                                                                return if1909;
                                                                              };
                                                                              var call1913 = callmethodChecked(var_prelude, "for()do", [1, 1], call1907, block1908);
                                                                              setLineNumber(283);    // compilenode array
                                                                              var array1914 = new PrimitiveGraceList([]);
                                                                              var call1915 = callmethodChecked(var_SuccessfulMatch, "new", [2], var_o, array1914);
                                                                              return call1915;
                                                                            };
                                                                            func1901.paramCounts = [1];
                                                                            obj1885.methods["match"] = func1901;
                                                                            func1901.definitionLine = 272;
                                                                            func1901.definitionModule = "StandardPrelude";
                                                                            var func1916 = function(argcv) {    // method asString
                                                                              var returnTarget = invocationCount;
                                                                              invocationCount++;
                                                                              var curarg = 1;
                                                                              if (argcv[0] !== 0)
                                                                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                                                                              setModuleName("StandardPrelude");
                                                                              setLineNumber(285);    // compilenode string
                                                                              var string1917 = new GraceString(")");
                                                                              var string1920 = new GraceString(" + ");
                                                                              var string1923 = new GraceString("(");
                                                                              var opresult1925 = callmethodChecked(string1923, "++", [1], var_t1);
                                                                              var opresult1927 = callmethodChecked(opresult1925, "++", [1], string1920);
                                                                              var opresult1929 = callmethodChecked(opresult1927, "++", [1], var_t2);
                                                                              var opresult1931 = callmethodChecked(opresult1929, "++", [1], string1917);
                                                                              return opresult1931;
                                                                            };
                                                                            func1916.paramCounts = [0];
                                                                            obj1885.methods["asString"] = func1916;
                                                                            func1916.definitionLine = 285;
                                                                            func1916.definitionModule = "StandardPrelude";
                                                                            setLineNumber(255);    // compilenode identifier
                                                                            var call1932 = callmethodChecked(var_BasicPattern, "new()object", [2, 1], var_t1, var_t2, this);
                                                                            obj1885.superobj = call1932;
                                                                            if (call1932.data) obj1885.data = call1932.data;
                                                                            if (call1932.hasOwnProperty('_value'))
                                                                                obj1885._value = call1932._value;
                                                                            superDepth = origSuperDepth;
                                                                          };
                                                                          obj_init_1885.apply(inheritingObject, []);
                                                                          return obj1885;
                                                                          };
                                                                          obj1833.methods["new()object"] = func1884;
                                                                        var func1933 = function(argcv) {    // method 
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          setModuleName("StandardPrelude");
                                                                          setLineNumber(254);    // compilenode string
                                                                          var string1934 = new GraceString("class TypeUnion");
                                                                          return string1934;
                                                                        };
                                                                        func1933.paramCounts = [];
                                                                        obj1833.methods["asString"] = func1933;
                                                                        func1933.definitionLine = 254;
                                                                        func1933.definitionModule = "StandardPrelude";
                                                                        superDepth = origSuperDepth;
                                                                      };
                                                                      obj_init_1833.apply(obj1833, []);
                                                                      var var_TypeUnion = obj1833;
                                                                      setLineNumber(278);    // compilenode method
                                                                      var func1935 = function(argcv) {    // method TypeUnion
                                                                        var returnTarget = invocationCount;
                                                                        invocationCount++;
                                                                        var curarg = 1;
                                                                        if (argcv[0] !== 0)
                                                                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for TypeUnion"));
                                                                        setModuleName("StandardPrelude");
                                                                        // TypeUnion is a simple accessor - elide try ... catch
                                                                        setLineNumber(254);    // compilenode identifier
                                                                        return var_TypeUnion;
                                                                      };
                                                                      func1935.paramCounts = [0];
                                                                      this.methods["TypeUnion"] = func1935;
                                                                      func1935.definitionLine = 278;
                                                                      func1935.definitionModule = "StandardPrelude";
                                                                      this.methods["TypeUnion"].debug = "def";
                                                                      setLineNumber(288);    // compilenode object
                                                                      var obj1936 = Grace_allocObject(GraceObject, "TypeSubtraction");
                                                                      obj1936.definitionModule = "StandardPrelude";
                                                                      obj1936.definitionLine = 288;
                                                                      obj1936.outer = this;
                                                                      var reader_StandardPrelude_outer1937 = function() {
                                                                        return this.outer;
                                                                      };
                                                                      obj1936.methods["outer"] = reader_StandardPrelude_outer1937;
                                                                      var obj_init_1936 = function() {
                                                                        var origSuperDepth = superDepth;
                                                                        superDepth = obj1936;
                                                                        var func1938 = function(argcv) {    // method new(2)
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          var var_t1 = arguments[curarg];
                                                                          curarg++;
                                                                          var var_t2 = arguments[curarg];
                                                                          curarg++;
                                                                          if (argcv[0] !== 2)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for new(2)"));
                                                                          setModuleName("StandardPrelude");
                                                                          var obj1939 = Grace_allocObject(null, "new");
                                                                          obj1939.definitionModule = "StandardPrelude";
                                                                          obj1939.definitionLine = 288;
                                                                          obj1939.outer = this;
                                                                          var reader_StandardPrelude_outer1940 = function() {
                                                                            return this.outer;
                                                                          };
                                                                          obj1939.methods["outer"] = reader_StandardPrelude_outer1940;
                                                                          var obj_init_1939 = function() {
                                                                            var origSuperDepth = superDepth;
                                                                            superDepth = obj1939;
                                                                            var func1941 = function(argcv) {    // method &(1)
                                                                              var returnTarget = invocationCount;
                                                                              invocationCount++;
                                                                              var curarg = 1;
                                                                              var var_o = arguments[curarg];
                                                                              curarg++;
                                                                              if (argcv[0] !== 1)
                                                                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for &(1)"));
                                                                              setModuleName("StandardPrelude");
                                                                              setLineNumber(291);    // compilenode identifier
                                                                              var call1942 = callmethodChecked(var_TypeIntersection, "new", [2], this, var_o);
                                                                              return call1942;
                                                                            };
                                                                            func1941.paramCounts = [1];
                                                                            obj1939.methods["&"] = func1941;
                                                                            func1941.definitionLine = 290;
                                                                            func1941.definitionModule = "StandardPrelude";
                                                                            var func1943 = function(argcv) {    // method |(1)
                                                                              var returnTarget = invocationCount;
                                                                              invocationCount++;
                                                                              var curarg = 1;
                                                                              var var_o = arguments[curarg];
                                                                              curarg++;
                                                                              if (argcv[0] !== 1)
                                                                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for |(1)"));
                                                                              setModuleName("StandardPrelude");
                                                                              setLineNumber(294);    // compilenode identifier
                                                                              var call1944 = callmethodChecked(var_TypeVariant, "new", [2], this, var_o);
                                                                              return call1944;
                                                                            };
                                                                            func1943.paramCounts = [1];
                                                                            obj1939.methods["|"] = func1943;
                                                                            func1943.definitionLine = 293;
                                                                            func1943.definitionModule = "StandardPrelude";
                                                                            var func1945 = function(argcv) {    // method +(1)
                                                                              var returnTarget = invocationCount;
                                                                              invocationCount++;
                                                                              var curarg = 1;
                                                                              var var_o = arguments[curarg];
                                                                              curarg++;
                                                                              if (argcv[0] !== 1)
                                                                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for +(1)"));
                                                                              setModuleName("StandardPrelude");
                                                                              setLineNumber(297);    // compilenode identifier
                                                                              var call1946 = callmethodChecked(var_TypeUnion, "new", [2], this, var_o);
                                                                              return call1946;
                                                                            };
                                                                            func1945.paramCounts = [1];
                                                                            obj1939.methods["+"] = func1945;
                                                                            func1945.definitionLine = 296;
                                                                            func1945.definitionModule = "StandardPrelude";
                                                                            var func1947 = function(argcv) {    // method -(1)
                                                                              var returnTarget = invocationCount;
                                                                              invocationCount++;
                                                                              var curarg = 1;
                                                                              var var_o = arguments[curarg];
                                                                              curarg++;
                                                                              if (argcv[0] !== 1)
                                                                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for -(1)"));
                                                                              setModuleName("StandardPrelude");
                                                                              setLineNumber(300);    // compilenode identifier
                                                                              var call1948 = callmethodChecked(var_TypeSubtraction, "new", [2], this, var_o);
                                                                              return call1948;
                                                                            };
                                                                            func1947.paramCounts = [1];
                                                                            obj1939.methods["-"] = func1947;
                                                                            func1947.definitionLine = 299;
                                                                            func1947.definitionModule = "StandardPrelude";
                                                                            var func1949 = function(argcv) {    // method methodNames
                                                                              var returnTarget = invocationCount;
                                                                              invocationCount++;
                                                                              var curarg = 1;
                                                                              if (argcv[0] !== 0)
                                                                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for methodNames"));
                                                                              setModuleName("StandardPrelude");
                                                                              setLineNumber(303);    // compilenode identifier
                                                                              var call1950 = callmethodChecked(var_t2, "methodNames", [0]);
                                                                              var call1951 = callmethodChecked(var_t1, "methodNames", [0]);
                                                                              var call1952 = callmethodChecked(call1951, "removeAll", [1], call1950);
                                                                              return call1952;
                                                                            };
                                                                            func1949.paramCounts = [0];
                                                                            obj1939.methods["methodNames"] = func1949;
                                                                            func1949.definitionLine = 302;
                                                                            func1949.definitionModule = "StandardPrelude";
                                                                            var func1953 = function(argcv) {    // method asString
                                                                              var returnTarget = invocationCount;
                                                                              invocationCount++;
                                                                              var curarg = 1;
                                                                              if (argcv[0] !== 0)
                                                                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                                                                              setModuleName("StandardPrelude");
                                                                              setLineNumber(305);    // compilenode string
                                                                              var string1954 = new GraceString(")");
                                                                              var string1957 = new GraceString(" - ");
                                                                              var string1960 = new GraceString("(");
                                                                              var opresult1962 = callmethodChecked(string1960, "++", [1], var_t1);
                                                                              var opresult1964 = callmethodChecked(opresult1962, "++", [1], string1957);
                                                                              var opresult1966 = callmethodChecked(opresult1964, "++", [1], var_t2);
                                                                              var opresult1968 = callmethodChecked(opresult1966, "++", [1], string1954);
                                                                              return opresult1968;
                                                                            };
                                                                            func1953.paramCounts = [0];
                                                                            obj1939.methods["asString"] = func1953;
                                                                            func1953.definitionLine = 305;
                                                                            func1953.definitionModule = "StandardPrelude";
                                                                            setLineNumber(289);    // compilenode identifier
                                                                            var call1969 = callmethodChecked(var_BasicPattern, "new()object", [2, 1], var_t1, var_t2, this);
                                                                            obj1939.superobj = call1969;
                                                                            if (call1969.data) obj1939.data = call1969.data;
                                                                            if (call1969.hasOwnProperty('_value'))
                                                                                obj1939._value = call1969._value;
                                                                            superDepth = origSuperDepth;
                                                                          };
                                                                          obj_init_1939.apply(obj1939, []);
                                                                          return obj1939;
                                                                        };
                                                                        func1938.paramCounts = [2];
                                                                        obj1936.methods["new"] = func1938;
                                                                        func1938.definitionLine = 288;
                                                                        func1938.definitionModule = "StandardPrelude";
                                                                          var func1970 = function(argcv) {    // method new(2     )()object
                                                                            var curarg = 1;
                                                                            var var_t1 = arguments[curarg];
                                                                            curarg++;
                                                                            var var_t2 = arguments[curarg];
                                                                            curarg++;
                                                                            var inheritingObject = arguments[curarg++];
                                                                            // Start argument processing
                                                                            curarg = 1;
                                                                            curarg++;
                                                                            curarg++;
                                                                            // End argument processing
                                                                            setModuleName("StandardPrelude");
                                                                            var returnTarget = invocationCount;
                                                                            invocationCount++;
                                                                            var obj1971 = Grace_allocObject(null, "new");
                                                                            obj1971.definitionModule = "StandardPrelude";
                                                                            obj1971.definitionLine = 288;
                                                                            var inho1971 = inheritingObject;
                                                                            while (inho1971.superobj) inho1971 = inho1971.superobj;
                                                                            inho1971.superobj = obj1971;
                                                                            obj1971.data = inheritingObject.data;
                                                                            if (inheritingObject.hasOwnProperty('_value'))
                                                                              obj1971._value = inheritingObject._value;
                                                                            obj1971.outer = this;
                                                                            var reader_StandardPrelude_outer1972 = function() {
                                                                              return this.outer;
                                                                            };
                                                                            obj1971.methods["outer"] = reader_StandardPrelude_outer1972;
                                                                            var obj_init_1971 = function() {
                                                                              var origSuperDepth = superDepth;
                                                                              superDepth = obj1971;
                                                                              var func1973 = function(argcv) {    // method &(1)
                                                                                var returnTarget = invocationCount;
                                                                                invocationCount++;
                                                                                var curarg = 1;
                                                                                var var_o = arguments[curarg];
                                                                                curarg++;
                                                                                if (argcv[0] !== 1)
                                                                                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for &(1)"));
                                                                                setModuleName("StandardPrelude");
                                                                                setLineNumber(291);    // compilenode identifier
                                                                                var call1974 = callmethodChecked(var_TypeIntersection, "new", [2], this, var_o);
                                                                                return call1974;
                                                                              };
                                                                              func1973.paramCounts = [1];
                                                                              obj1971.methods["&"] = func1973;
                                                                              func1973.definitionLine = 290;
                                                                              func1973.definitionModule = "StandardPrelude";
                                                                              var func1975 = function(argcv) {    // method |(1)
                                                                                var returnTarget = invocationCount;
                                                                                invocationCount++;
                                                                                var curarg = 1;
                                                                                var var_o = arguments[curarg];
                                                                                curarg++;
                                                                                if (argcv[0] !== 1)
                                                                                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for |(1)"));
                                                                                setModuleName("StandardPrelude");
                                                                                setLineNumber(294);    // compilenode identifier
                                                                                var call1976 = callmethodChecked(var_TypeVariant, "new", [2], this, var_o);
                                                                                return call1976;
                                                                              };
                                                                              func1975.paramCounts = [1];
                                                                              obj1971.methods["|"] = func1975;
                                                                              func1975.definitionLine = 293;
                                                                              func1975.definitionModule = "StandardPrelude";
                                                                              var func1977 = function(argcv) {    // method +(1)
                                                                                var returnTarget = invocationCount;
                                                                                invocationCount++;
                                                                                var curarg = 1;
                                                                                var var_o = arguments[curarg];
                                                                                curarg++;
                                                                                if (argcv[0] !== 1)
                                                                                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for +(1)"));
                                                                                setModuleName("StandardPrelude");
                                                                                setLineNumber(297);    // compilenode identifier
                                                                                var call1978 = callmethodChecked(var_TypeUnion, "new", [2], this, var_o);
                                                                                return call1978;
                                                                              };
                                                                              func1977.paramCounts = [1];
                                                                              obj1971.methods["+"] = func1977;
                                                                              func1977.definitionLine = 296;
                                                                              func1977.definitionModule = "StandardPrelude";
                                                                              var func1979 = function(argcv) {    // method -(1)
                                                                                var returnTarget = invocationCount;
                                                                                invocationCount++;
                                                                                var curarg = 1;
                                                                                var var_o = arguments[curarg];
                                                                                curarg++;
                                                                                if (argcv[0] !== 1)
                                                                                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for -(1)"));
                                                                                setModuleName("StandardPrelude");
                                                                                setLineNumber(300);    // compilenode identifier
                                                                                var call1980 = callmethodChecked(var_TypeSubtraction, "new", [2], this, var_o);
                                                                                return call1980;
                                                                              };
                                                                              func1979.paramCounts = [1];
                                                                              obj1971.methods["-"] = func1979;
                                                                              func1979.definitionLine = 299;
                                                                              func1979.definitionModule = "StandardPrelude";
                                                                              var func1981 = function(argcv) {    // method methodNames
                                                                                var returnTarget = invocationCount;
                                                                                invocationCount++;
                                                                                var curarg = 1;
                                                                                if (argcv[0] !== 0)
                                                                                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for methodNames"));
                                                                                setModuleName("StandardPrelude");
                                                                                setLineNumber(303);    // compilenode identifier
                                                                                var call1982 = callmethodChecked(var_t2, "methodNames", [0]);
                                                                                var call1983 = callmethodChecked(var_t1, "methodNames", [0]);
                                                                                var call1984 = callmethodChecked(call1983, "removeAll", [1], call1982);
                                                                                return call1984;
                                                                              };
                                                                              func1981.paramCounts = [0];
                                                                              obj1971.methods["methodNames"] = func1981;
                                                                              func1981.definitionLine = 302;
                                                                              func1981.definitionModule = "StandardPrelude";
                                                                              var func1985 = function(argcv) {    // method asString
                                                                                var returnTarget = invocationCount;
                                                                                invocationCount++;
                                                                                var curarg = 1;
                                                                                if (argcv[0] !== 0)
                                                                                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                                                                                setModuleName("StandardPrelude");
                                                                                setLineNumber(305);    // compilenode string
                                                                                var string1986 = new GraceString(")");
                                                                                var string1989 = new GraceString(" - ");
                                                                                var string1992 = new GraceString("(");
                                                                                var opresult1994 = callmethodChecked(string1992, "++", [1], var_t1);
                                                                                var opresult1996 = callmethodChecked(opresult1994, "++", [1], string1989);
                                                                                var opresult1998 = callmethodChecked(opresult1996, "++", [1], var_t2);
                                                                                var opresult2000 = callmethodChecked(opresult1998, "++", [1], string1986);
                                                                                return opresult2000;
                                                                              };
                                                                              func1985.paramCounts = [0];
                                                                              obj1971.methods["asString"] = func1985;
                                                                              func1985.definitionLine = 305;
                                                                              func1985.definitionModule = "StandardPrelude";
                                                                              setLineNumber(289);    // compilenode identifier
                                                                              var call2001 = callmethodChecked(var_BasicPattern, "new()object", [2, 1], var_t1, var_t2, this);
                                                                              obj1971.superobj = call2001;
                                                                              if (call2001.data) obj1971.data = call2001.data;
                                                                              if (call2001.hasOwnProperty('_value'))
                                                                                  obj1971._value = call2001._value;
                                                                              superDepth = origSuperDepth;
                                                                            };
                                                                            obj_init_1971.apply(inheritingObject, []);
                                                                            return obj1971;
                                                                            };
                                                                            obj1936.methods["new()object"] = func1970;
                                                                          var func2002 = function(argcv) {    // method 
                                                                            var returnTarget = invocationCount;
                                                                            invocationCount++;
                                                                            var curarg = 1;
                                                                            setModuleName("StandardPrelude");
                                                                            setLineNumber(288);    // compilenode string
                                                                            var string2003 = new GraceString("class TypeSubtraction");
                                                                            return string2003;
                                                                          };
                                                                          func2002.paramCounts = [];
                                                                          obj1936.methods["asString"] = func2002;
                                                                          func2002.definitionLine = 288;
                                                                          func2002.definitionModule = "StandardPrelude";
                                                                          superDepth = origSuperDepth;
                                                                        };
                                                                        obj_init_1936.apply(obj1936, []);
                                                                        var var_TypeSubtraction = obj1936;
                                                                        setLineNumber(303);    // compilenode method
                                                                        var func2004 = function(argcv) {    // method TypeSubtraction
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for TypeSubtraction"));
                                                                          setModuleName("StandardPrelude");
                                                                          // TypeSubtraction is a simple accessor - elide try ... catch
                                                                          setLineNumber(288);    // compilenode identifier
                                                                          return var_TypeSubtraction;
                                                                        };
                                                                        func2004.paramCounts = [0];
                                                                        this.methods["TypeSubtraction"] = func2004;
                                                                        func2004.definitionLine = 303;
                                                                        func2004.definitionModule = "StandardPrelude";
                                                                        this.methods["TypeSubtraction"].debug = "def";
                                                                        setLineNumber(311);    // compilenode typedec
                                                                        // Type decl Extractable
                                                                        //   Type literal 
                                                                        var type2006 = new GraceType("Extractable");
                                                                        type2006.typeMethods.push("extract");
                                                                        var var_Extractable = type2006;
                                                                        setLineNumber(303);    // compilenode method
                                                                        var func2007 = function(argcv) {    // method Extractable
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Extractable"));
                                                                          setModuleName("StandardPrelude");
                                                                          // Extractable is a simple accessor - elide try ... catch
                                                                          setLineNumber(311);    // compilenode identifier
                                                                          return var_Extractable;
                                                                        };
                                                                        func2007.paramCounts = [0];
                                                                        this.methods["Extractable"] = func2007;
                                                                        func2007.definitionLine = 303;
                                                                        func2007.definitionModule = "StandardPrelude";
                                                                        setLineNumber(315);    // compilenode typedec
                                                                        // Type decl MatchResult
                                                                        //   Type literal 
                                                                        var type2009 = new GraceType("\u2039anon\u203a");
                                                                        type2009.typeMethods.push("result");
                                                                        type2009.typeMethods.push("bindings");
                                                                        var opresult2012 = callmethodChecked(var_Boolean, "&", [1], type2009);
                                                                        var var_MatchResult = opresult2012;
                                                                        setLineNumber(303);    // compilenode method
                                                                        var func2013 = function(argcv) {    // method MatchResult
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for MatchResult"));
                                                                          setModuleName("StandardPrelude");
                                                                          // MatchResult is a simple accessor - elide try ... catch
                                                                          setLineNumber(315);    // compilenode identifier
                                                                          return var_MatchResult;
                                                                        };
                                                                        func2013.paramCounts = [0];
                                                                        this.methods["MatchResult"] = func2013;
                                                                        func2013.definitionLine = 303;
                                                                        func2013.definitionModule = "StandardPrelude";
                                                                        setLineNumber(320);    // compilenode typedec
                                                                        // Type decl Pattern
                                                                        //   Type literal 
                                                                        var type2015 = new GraceType("Pattern");
                                                                        type2015.typeMethods.push("&");
                                                                        type2015.typeMethods.push("|");
                                                                        type2015.typeMethods.push("match");
                                                                        var var_Pattern = type2015;
                                                                        setLineNumber(303);    // compilenode method
                                                                        var func2016 = function(argcv) {    // method Pattern
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Pattern"));
                                                                          setModuleName("StandardPrelude");
                                                                          // Pattern is a simple accessor - elide try ... catch
                                                                          setLineNumber(320);    // compilenode identifier
                                                                          return var_Pattern;
                                                                        };
                                                                        func2016.paramCounts = [0];
                                                                        this.methods["Pattern"] = func2016;
                                                                        func2016.definitionLine = 303;
                                                                        func2016.definitionModule = "StandardPrelude";
                                                                        setLineNumber(326);    // compilenode typedec
                                                                        // Type decl ExceptionKind
                                                                        //   Type literal 
                                                                        var type2018 = new GraceType("\u2039anon\u203a");
                                                                        type2018.typeMethods.push("refine");
                                                                        type2018.typeMethods.push("parent");
                                                                        type2018.typeMethods.push("raise");
                                                                        type2018.typeMethods.push("raise()with");
                                                                        var opresult2021 = callmethodChecked(var_Pattern, "&", [1], type2018);
                                                                        var var_ExceptionKind = opresult2021;
                                                                        setLineNumber(303);    // compilenode method
                                                                        var func2022 = function(argcv) {    // method ExceptionKind
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ExceptionKind"));
                                                                          setModuleName("StandardPrelude");
                                                                          // ExceptionKind is a simple accessor - elide try ... catch
                                                                          setLineNumber(326);    // compilenode identifier
                                                                          return var_ExceptionKind;
                                                                        };
                                                                        func2022.paramCounts = [0];
                                                                        this.methods["ExceptionKind"] = func2022;
                                                                        func2022.definitionLine = 303;
                                                                        func2022.definitionModule = "StandardPrelude";
                                                                        setLineNumber(333);    // compilenode typedec
                                                                        // Type decl Point
                                                                        //   Type literal 
                                                                        var type2024 = new GraceType("Point");
                                                                        type2024.typeMethods.push("x");
                                                                        type2024.typeMethods.push("y");
                                                                        type2024.typeMethods.push("+");
                                                                        type2024.typeMethods.push("-");
                                                                        type2024.typeMethods.push("prefix-");
                                                                        type2024.typeMethods.push("*");
                                                                        type2024.typeMethods.push("/");
                                                                        type2024.typeMethods.push("length");
                                                                        type2024.typeMethods.push("distanceTo");
                                                                        type2024.typeMethods.push("dot");
                                                                        type2024.typeMethods.push("\u22c5");
                                                                        var var_Point = type2024;
                                                                        setLineNumber(303);    // compilenode method
                                                                        var func2025 = function(argcv) {    // method Point
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Point"));
                                                                          setModuleName("StandardPrelude");
                                                                          // Point is a simple accessor - elide try ... catch
                                                                          setLineNumber(333);    // compilenode identifier
                                                                          return var_Point;
                                                                        };
                                                                        func2025.paramCounts = [0];
                                                                        this.methods["Point"] = func2025;
                                                                        func2025.definitionLine = 303;
                                                                        func2025.definitionModule = "StandardPrelude";
                                                                        setLineNumber(406);    // compilenode identifier
                                                                        var var_collections = var_coll;
                                                                        setLineNumber(303);    // compilenode method
                                                                        var func2026 = function(argcv) {    // method collections
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for collections"));
                                                                          setModuleName("StandardPrelude");
                                                                          // collections is a simple accessor - elide try ... catch
                                                                          setLineNumber(406);    // compilenode identifier
                                                                          return var_collections;
                                                                        };
                                                                        func2026.paramCounts = [0];
                                                                        this.methods["collections"] = func2026;
                                                                        func2026.definitionLine = 303;
                                                                        func2026.definitionModule = "StandardPrelude";
                                                                        this.methods["collections"].debug = "def";
                                                                        setLineNumber(408);    // compilenode typedec
                                                                        // Type decl Block0
                                                                        var call2028 = callmethodChecked(var_collections, "Block0", [0]);
                                                                        var var_Block0 = call2028;
                                                                        var func2029 = function(argcv) {    // method Block0
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Block0"));
                                                                          setModuleName("StandardPrelude");
                                                                          // Block0 is a simple accessor - elide try ... catch
                                                                          return var_Block0;
                                                                        };
                                                                        func2029.paramCounts = [0];
                                                                        this.methods["Block0"] = func2029;
                                                                        func2029.definitionLine = 408;
                                                                        func2029.definitionModule = "StandardPrelude";
                                                                        setLineNumber(409);    // compilenode typedec
                                                                        // Type decl Block1
                                                                        var call2031 = callmethodChecked(var_collections, "Block1", [0]);
                                                                        var var_Block1 = call2031;
                                                                        var func2032 = function(argcv) {    // method Block1
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Block1"));
                                                                          setModuleName("StandardPrelude");
                                                                          // Block1 is a simple accessor - elide try ... catch
                                                                          return var_Block1;
                                                                        };
                                                                        func2032.paramCounts = [0];
                                                                        this.methods["Block1"] = func2032;
                                                                        func2032.definitionLine = 409;
                                                                        func2032.definitionModule = "StandardPrelude";
                                                                        setLineNumber(410);    // compilenode typedec
                                                                        // Type decl Block2
                                                                        var call2034 = callmethodChecked(var_collections, "Block2", [0]);
                                                                        var var_Block2 = call2034;
                                                                        var func2035 = function(argcv) {    // method Block2
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Block2"));
                                                                          setModuleName("StandardPrelude");
                                                                          // Block2 is a simple accessor - elide try ... catch
                                                                          return var_Block2;
                                                                        };
                                                                        func2035.paramCounts = [0];
                                                                        this.methods["Block2"] = func2035;
                                                                        func2035.definitionLine = 410;
                                                                        func2035.definitionModule = "StandardPrelude";
                                                                        setLineNumber(411);    // compilenode typedec
                                                                        // Type decl Block3
                                                                        //   Type literal 
                                                                        var type2037 = new GraceType("Block3");
                                                                        type2037.typeMethods.push("apply");
                                                                        var var_Block3 = type2037;
                                                                        setLineNumber(410);    // compilenode method
                                                                        var func2038 = function(argcv) {    // method Block3
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Block3"));
                                                                          setModuleName("StandardPrelude");
                                                                          // Block3 is a simple accessor - elide try ... catch
                                                                          setLineNumber(411);    // compilenode identifier
                                                                          return var_Block3;
                                                                        };
                                                                        func2038.paramCounts = [0];
                                                                        this.methods["Block3"] = func2038;
                                                                        func2038.definitionLine = 410;
                                                                        func2038.definitionModule = "StandardPrelude";
                                                                        setLineNumber(414);    // compilenode typedec
                                                                        // Type decl Cmd
                                                                        var var_Cmd = var_Block0;
                                                                        setLineNumber(410);    // compilenode method
                                                                        var func2040 = function(argcv) {    // method Cmd
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Cmd"));
                                                                          setModuleName("StandardPrelude");
                                                                          // Cmd is a simple accessor - elide try ... catch
                                                                          setLineNumber(414);    // compilenode identifier
                                                                          return var_Cmd;
                                                                        };
                                                                        func2040.paramCounts = [0];
                                                                        this.methods["Cmd"] = func2040;
                                                                        func2040.definitionLine = 410;
                                                                        func2040.definitionModule = "StandardPrelude";
                                                                        setLineNumber(415);    // compilenode typedec
                                                                        // Type decl Fun
                                                                        var var_Fun = var_Block1;
                                                                        setLineNumber(410);    // compilenode method
                                                                        var func2042 = function(argcv) {    // method Fun
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Fun"));
                                                                          setModuleName("StandardPrelude");
                                                                          // Fun is a simple accessor - elide try ... catch
                                                                          setLineNumber(415);    // compilenode identifier
                                                                          return var_Fun;
                                                                        };
                                                                        func2042.paramCounts = [0];
                                                                        this.methods["Fun"] = func2042;
                                                                        func2042.definitionLine = 410;
                                                                        func2042.definitionModule = "StandardPrelude";
                                                                        setLineNumber(416);    // compilenode typedec
                                                                        // Type decl Fun2
                                                                        var var_Fun2 = var_Block2;
                                                                        setLineNumber(410);    // compilenode method
                                                                        var func2044 = function(argcv) {    // method Fun2
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Fun2"));
                                                                          setModuleName("StandardPrelude");
                                                                          // Fun2 is a simple accessor - elide try ... catch
                                                                          setLineNumber(416);    // compilenode identifier
                                                                          return var_Fun2;
                                                                        };
                                                                        func2044.paramCounts = [0];
                                                                        this.methods["Fun2"] = func2044;
                                                                        func2044.definitionLine = 410;
                                                                        func2044.definitionModule = "StandardPrelude";
                                                                        setLineNumber(417);    // compilenode typedec
                                                                        // Type decl Fun3
                                                                        var var_Fun3 = var_Block3;
                                                                        setLineNumber(410);    // compilenode method
                                                                        var func2046 = function(argcv) {    // method Fun3
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Fun3"));
                                                                          setModuleName("StandardPrelude");
                                                                          // Fun3 is a simple accessor - elide try ... catch
                                                                          setLineNumber(417);    // compilenode identifier
                                                                          return var_Fun3;
                                                                        };
                                                                        func2046.paramCounts = [0];
                                                                        this.methods["Fun3"] = func2046;
                                                                        func2046.definitionLine = 410;
                                                                        func2046.definitionModule = "StandardPrelude";
                                                                        setLineNumber(418);    // compilenode typedec
                                                                        // Type decl Proc
                                                                        var var_Proc = var_Block1;
                                                                        setLineNumber(410);    // compilenode method
                                                                        var func2048 = function(argcv) {    // method Proc
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Proc"));
                                                                          setModuleName("StandardPrelude");
                                                                          // Proc is a simple accessor - elide try ... catch
                                                                          setLineNumber(418);    // compilenode identifier
                                                                          return var_Proc;
                                                                        };
                                                                        func2048.paramCounts = [0];
                                                                        this.methods["Proc"] = func2048;
                                                                        func2048.definitionLine = 410;
                                                                        func2048.definitionModule = "StandardPrelude";
                                                                        setLineNumber(419);    // compilenode typedec
                                                                        // Type decl Proc2
                                                                        var var_Proc2 = var_Block2;
                                                                        setLineNumber(410);    // compilenode method
                                                                        var func2050 = function(argcv) {    // method Proc2
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Proc2"));
                                                                          setModuleName("StandardPrelude");
                                                                          // Proc2 is a simple accessor - elide try ... catch
                                                                          setLineNumber(419);    // compilenode identifier
                                                                          return var_Proc2;
                                                                        };
                                                                        func2050.paramCounts = [0];
                                                                        this.methods["Proc2"] = func2050;
                                                                        func2050.definitionLine = 410;
                                                                        func2050.definitionModule = "StandardPrelude";
                                                                        setLineNumber(420);    // compilenode typedec
                                                                        // Type decl Proc3
                                                                        var var_Proc3 = var_Block3;
                                                                        setLineNumber(410);    // compilenode method
                                                                        var func2052 = function(argcv) {    // method Proc3
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Proc3"));
                                                                          setModuleName("StandardPrelude");
                                                                          // Proc3 is a simple accessor - elide try ... catch
                                                                          setLineNumber(420);    // compilenode identifier
                                                                          return var_Proc3;
                                                                        };
                                                                        func2052.paramCounts = [0];
                                                                        this.methods["Proc3"] = func2052;
                                                                        func2052.definitionLine = 410;
                                                                        func2052.definitionModule = "StandardPrelude";
                                                                        setLineNumber(422);    // compilenode typedec
                                                                        // Type decl Collection
                                                                        var call2054 = callmethodChecked(var_collections, "Collection", [0]);
                                                                        var var_Collection = call2054;
                                                                        var func2055 = function(argcv) {    // method Collection
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Collection"));
                                                                          setModuleName("StandardPrelude");
                                                                          // Collection is a simple accessor - elide try ... catch
                                                                          return var_Collection;
                                                                        };
                                                                        func2055.paramCounts = [0];
                                                                        this.methods["Collection"] = func2055;
                                                                        func2055.definitionLine = 422;
                                                                        func2055.definitionModule = "StandardPrelude";
                                                                        setLineNumber(423);    // compilenode typedec
                                                                        // Type decl Iterable
                                                                        var call2057 = callmethodChecked(var_collections, "Iterable", [0]);
                                                                        var var_Iterable = call2057;
                                                                        var func2058 = function(argcv) {    // method Iterable
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Iterable"));
                                                                          setModuleName("StandardPrelude");
                                                                          // Iterable is a simple accessor - elide try ... catch
                                                                          return var_Iterable;
                                                                        };
                                                                        func2058.paramCounts = [0];
                                                                        this.methods["Iterable"] = func2058;
                                                                        func2058.definitionLine = 423;
                                                                        func2058.definitionModule = "StandardPrelude";
                                                                        setLineNumber(424);    // compilenode typedec
                                                                        // Type decl Expandable
                                                                        var call2060 = callmethodChecked(var_collections, "Expandable", [0]);
                                                                        var var_Expandable = call2060;
                                                                        var func2061 = function(argcv) {    // method Expandable
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Expandable"));
                                                                          setModuleName("StandardPrelude");
                                                                          // Expandable is a simple accessor - elide try ... catch
                                                                          return var_Expandable;
                                                                        };
                                                                        func2061.paramCounts = [0];
                                                                        this.methods["Expandable"] = func2061;
                                                                        func2061.definitionLine = 424;
                                                                        func2061.definitionModule = "StandardPrelude";
                                                                        setLineNumber(425);    // compilenode typedec
                                                                        // Type decl Enumerable
                                                                        var call2063 = callmethodChecked(var_collections, "Enumerable", [0]);
                                                                        var var_Enumerable = call2063;
                                                                        var func2064 = function(argcv) {    // method Enumerable
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Enumerable"));
                                                                          setModuleName("StandardPrelude");
                                                                          // Enumerable is a simple accessor - elide try ... catch
                                                                          return var_Enumerable;
                                                                        };
                                                                        func2064.paramCounts = [0];
                                                                        this.methods["Enumerable"] = func2064;
                                                                        func2064.definitionLine = 425;
                                                                        func2064.definitionModule = "StandardPrelude";
                                                                        setLineNumber(426);    // compilenode typedec
                                                                        // Type decl Binding
                                                                        var call2066 = callmethodChecked(var_collections, "Binding", [0]);
                                                                        var var_Binding = call2066;
                                                                        var func2067 = function(argcv) {    // method Binding
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Binding"));
                                                                          setModuleName("StandardPrelude");
                                                                          // Binding is a simple accessor - elide try ... catch
                                                                          return var_Binding;
                                                                        };
                                                                        func2067.paramCounts = [0];
                                                                        this.methods["Binding"] = func2067;
                                                                        func2067.definitionLine = 426;
                                                                        func2067.definitionModule = "StandardPrelude";
                                                                        setLineNumber(427);    // compilenode typedec
                                                                        // Type decl Iterator
                                                                        var call2069 = callmethodChecked(var_collections, "Iterator", [0]);
                                                                        var var_Iterator = call2069;
                                                                        var func2070 = function(argcv) {    // method Iterator
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Iterator"));
                                                                          setModuleName("StandardPrelude");
                                                                          // Iterator is a simple accessor - elide try ... catch
                                                                          return var_Iterator;
                                                                        };
                                                                        func2070.paramCounts = [0];
                                                                        this.methods["Iterator"] = func2070;
                                                                        func2070.definitionLine = 427;
                                                                        func2070.definitionModule = "StandardPrelude";
                                                                        setLineNumber(428);    // compilenode typedec
                                                                        // Type decl Sequence
                                                                        var call2072 = callmethodChecked(var_collections, "Sequence", [0]);
                                                                        var var_Sequence = call2072;
                                                                        var func2073 = function(argcv) {    // method Sequence
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Sequence"));
                                                                          setModuleName("StandardPrelude");
                                                                          // Sequence is a simple accessor - elide try ... catch
                                                                          return var_Sequence;
                                                                        };
                                                                        func2073.paramCounts = [0];
                                                                        this.methods["Sequence"] = func2073;
                                                                        func2073.definitionLine = 428;
                                                                        func2073.definitionModule = "StandardPrelude";
                                                                        setLineNumber(429);    // compilenode typedec
                                                                        // Type decl List
                                                                        var call2075 = callmethodChecked(var_collections, "List", [0]);
                                                                        var var_List = call2075;
                                                                        var func2076 = function(argcv) {    // method List
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for List"));
                                                                          setModuleName("StandardPrelude");
                                                                          // List is a simple accessor - elide try ... catch
                                                                          return var_List;
                                                                        };
                                                                        func2076.paramCounts = [0];
                                                                        this.methods["List"] = func2076;
                                                                        func2076.definitionLine = 429;
                                                                        func2076.definitionModule = "StandardPrelude";
                                                                        setLineNumber(430);    // compilenode typedec
                                                                        // Type decl Set
                                                                        var call2078 = callmethodChecked(var_collections, "Set", [0]);
                                                                        var var_Set = call2078;
                                                                        var func2079 = function(argcv) {    // method Set
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Set"));
                                                                          setModuleName("StandardPrelude");
                                                                          // Set is a simple accessor - elide try ... catch
                                                                          return var_Set;
                                                                        };
                                                                        func2079.paramCounts = [0];
                                                                        this.methods["Set"] = func2079;
                                                                        func2079.definitionLine = 430;
                                                                        func2079.definitionModule = "StandardPrelude";
                                                                        setLineNumber(431);    // compilenode typedec
                                                                        // Type decl Dictionary
                                                                        var call2081 = callmethodChecked(var_collections, "Dictionary", [0]);
                                                                        var var_Dictionary = call2081;
                                                                        var func2082 = function(argcv) {    // method Dictionary
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Dictionary"));
                                                                          setModuleName("StandardPrelude");
                                                                          // Dictionary is a simple accessor - elide try ... catch
                                                                          return var_Dictionary;
                                                                        };
                                                                        func2082.paramCounts = [0];
                                                                        this.methods["Dictionary"] = func2082;
                                                                        func2082.definitionLine = 431;
                                                                        func2082.definitionModule = "StandardPrelude";
                                                                        setLineNumber(433);    // compilenode identifier
                                                                        var call2083 = callmethodChecked(var_collections, "BoundsError", [0]);
                                                                        var var_BoundsError = call2083;
                                                                        var func2084 = function(argcv) {    // method BoundsError
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for BoundsError"));
                                                                          setModuleName("StandardPrelude");
                                                                          // BoundsError is a simple accessor - elide try ... catch
                                                                          return var_BoundsError;
                                                                        };
                                                                        func2084.paramCounts = [0];
                                                                        this.methods["BoundsError"] = func2084;
                                                                        func2084.definitionLine = 433;
                                                                        func2084.definitionModule = "StandardPrelude";
                                                                        this.methods["BoundsError"].debug = "def";
                                                                        setLineNumber(434);    // compilenode identifier
                                                                        var call2085 = callmethodChecked(var_collections, "IteratorExhausted", [0]);
                                                                        var var_IteratorExhausted = call2085;
                                                                        var func2086 = function(argcv) {    // method IteratorExhausted
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for IteratorExhausted"));
                                                                          setModuleName("StandardPrelude");
                                                                          // IteratorExhausted is a simple accessor - elide try ... catch
                                                                          return var_IteratorExhausted;
                                                                        };
                                                                        func2086.paramCounts = [0];
                                                                        this.methods["IteratorExhausted"] = func2086;
                                                                        func2086.definitionLine = 434;
                                                                        func2086.definitionModule = "StandardPrelude";
                                                                        this.methods["IteratorExhausted"].debug = "def";
                                                                        setLineNumber(435);    // compilenode identifier
                                                                        var call2087 = callmethodChecked(var_collections, "NoSuchObject", [0]);
                                                                        var var_NoSuchObject = call2087;
                                                                        var func2088 = function(argcv) {    // method NoSuchObject
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for NoSuchObject"));
                                                                          setModuleName("StandardPrelude");
                                                                          // NoSuchObject is a simple accessor - elide try ... catch
                                                                          return var_NoSuchObject;
                                                                        };
                                                                        func2088.paramCounts = [0];
                                                                        this.methods["NoSuchObject"] = func2088;
                                                                        func2088.definitionLine = 435;
                                                                        func2088.definitionModule = "StandardPrelude";
                                                                        this.methods["NoSuchObject"].debug = "def";
                                                                        setLineNumber(436);    // compilenode identifier
                                                                        var call2089 = callmethodChecked(var_collections, "RequestError", [0]);
                                                                        var var_RequestError = call2089;
                                                                        var func2090 = function(argcv) {    // method RequestError
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for RequestError"));
                                                                          setModuleName("StandardPrelude");
                                                                          // RequestError is a simple accessor - elide try ... catch
                                                                          return var_RequestError;
                                                                        };
                                                                        func2090.paramCounts = [0];
                                                                        this.methods["RequestError"] = func2090;
                                                                        func2090.definitionLine = 436;
                                                                        func2090.definitionModule = "StandardPrelude";
                                                                        this.methods["RequestError"].debug = "def";
                                                                        setLineNumber(437);    // compilenode identifier
                                                                        var call2091 = callmethodChecked(var_collections, "SubobjectResponsibility", [0]);
                                                                        var var_SubobjectResponsibility = call2091;
                                                                        var func2092 = function(argcv) {    // method SubobjectResponsibility
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for SubobjectResponsibility"));
                                                                          setModuleName("StandardPrelude");
                                                                          // SubobjectResponsibility is a simple accessor - elide try ... catch
                                                                          return var_SubobjectResponsibility;
                                                                        };
                                                                        func2092.paramCounts = [0];
                                                                        this.methods["SubobjectResponsibility"] = func2092;
                                                                        func2092.definitionLine = 437;
                                                                        func2092.definitionModule = "StandardPrelude";
                                                                        this.methods["SubobjectResponsibility"].debug = "def";
                                                                        setLineNumber(438);    // compilenode identifier
                                                                        var call2093 = callmethodChecked(var_collections, "ConcurrentModification", [0]);
                                                                        var var_ConcurrentModification = call2093;
                                                                        var func2094 = function(argcv) {    // method ConcurrentModification
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ConcurrentModification"));
                                                                          setModuleName("StandardPrelude");
                                                                          // ConcurrentModification is a simple accessor - elide try ... catch
                                                                          return var_ConcurrentModification;
                                                                        };
                                                                        func2094.paramCounts = [0];
                                                                        this.methods["ConcurrentModification"] = func2094;
                                                                        func2094.definitionLine = 438;
                                                                        func2094.definitionModule = "StandardPrelude";
                                                                        this.methods["ConcurrentModification"].debug = "def";
                                                                        setLineNumber(439);    // compilenode string
                                                                        var string2095 = new GraceString("UninitializedVariable");
                                                                        var call2096 = callmethodChecked(var_prelude, "ProgrammingError", [0]);
                                                                        var call2097 = callmethodChecked(call2096, "refine", [1], string2095);
                                                                        var var_UninitializedVariable = call2097;
                                                                        var func2098 = function(argcv) {    // method UninitializedVariable
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for UninitializedVariable"));
                                                                          setModuleName("StandardPrelude");
                                                                          // UninitializedVariable is a simple accessor - elide try ... catch
                                                                          return var_UninitializedVariable;
                                                                        };
                                                                        func2098.paramCounts = [0];
                                                                        this.methods["UninitializedVariable"] = func2098;
                                                                        func2098.definitionLine = 439;
                                                                        func2098.definitionModule = "StandardPrelude";
                                                                        this.methods["UninitializedVariable"].debug = "def";
                                                                        setLineNumber(441);    // compilenode identifier
                                                                        var call2099 = callmethodChecked(var_collections, "collection", [0]);
                                                                        var var_collection = call2099;
                                                                        var func2100 = function(argcv) {    // method collection
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for collection"));
                                                                          setModuleName("StandardPrelude");
                                                                          // collection is a simple accessor - elide try ... catch
                                                                          return var_collection;
                                                                        };
                                                                        func2100.paramCounts = [0];
                                                                        this.methods["collection"] = func2100;
                                                                        func2100.definitionLine = 441;
                                                                        func2100.definitionModule = "StandardPrelude";
                                                                        this.methods["collection"].debug = "def";
                                                                        setLineNumber(442);    // compilenode identifier
                                                                        var call2101 = callmethodChecked(var_collections, "enumerable", [0]);
                                                                        var var_enumerable = call2101;
                                                                        var func2102 = function(argcv) {    // method enumerable
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for enumerable"));
                                                                          setModuleName("StandardPrelude");
                                                                          // enumerable is a simple accessor - elide try ... catch
                                                                          return var_enumerable;
                                                                        };
                                                                        func2102.paramCounts = [0];
                                                                        this.methods["enumerable"] = func2102;
                                                                        func2102.definitionLine = 442;
                                                                        func2102.definitionModule = "StandardPrelude";
                                                                        this.methods["enumerable"].debug = "def";
                                                                        setLineNumber(443);    // compilenode identifier
                                                                        var call2103 = callmethodChecked(var_collections, "indexable", [0]);
                                                                        var var_indexable = call2103;
                                                                        var func2104 = function(argcv) {    // method indexable
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for indexable"));
                                                                          setModuleName("StandardPrelude");
                                                                          // indexable is a simple accessor - elide try ... catch
                                                                          return var_indexable;
                                                                        };
                                                                        func2104.paramCounts = [0];
                                                                        this.methods["indexable"] = func2104;
                                                                        func2104.definitionLine = 443;
                                                                        func2104.definitionModule = "StandardPrelude";
                                                                        this.methods["indexable"].debug = "def";
                                                                        setLineNumber(449);    // compilenode identifier
                                                                        var call2105 = callmethodChecked(var_collections, "sequence", [0]);
                                                                        var call2106 = callmethodChecked(call2105, "empty", [0]);
                                                                        var var_emptySequence = call2106;
                                                                        var func2107 = function(argcv) {    // method emptySequence
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for emptySequence"));
                                                                          setModuleName("StandardPrelude");
                                                                          // emptySequence is a simple accessor - elide try ... catch
                                                                          return var_emptySequence;
                                                                        };
                                                                        func2107.paramCounts = [0];
                                                                        this.methods["emptySequence"] = func2107;
                                                                        func2107.definitionLine = 449;
                                                                        func2107.definitionModule = "StandardPrelude";
                                                                        this.methods["emptySequence"].debug = "def";
                                                                        setLineNumber(466);    // compilenode identifier
                                                                        var call2108 = callmethodChecked(var_collections, "binding", [0]);
                                                                        var var_binding = call2108;
                                                                        var func2109 = function(argcv) {    // method binding
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for binding"));
                                                                          setModuleName("StandardPrelude");
                                                                          // binding is a simple accessor - elide try ... catch
                                                                          return var_binding;
                                                                        };
                                                                        func2109.paramCounts = [0];
                                                                        this.methods["binding"] = func2109;
                                                                        func2109.definitionLine = 466;
                                                                        func2109.definitionModule = "StandardPrelude";
                                                                        this.methods["binding"].debug = "def";
                                                                        setLineNumber(467);    // compilenode identifier
                                                                        var call2110 = callmethodChecked(var_collections, "range", [0]);
                                                                        var var_range = call2110;
                                                                        var func2111 = function(argcv) {    // method range
                                                                          var returnTarget = invocationCount;
                                                                          invocationCount++;
                                                                          var curarg = 1;
                                                                          if (argcv[0] !== 0)
                                                                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for range"));
                                                                          setModuleName("StandardPrelude");
                                                                          // range is a simple accessor - elide try ... catch
                                                                          return var_range;
                                                                        };
                                                                        func2111.paramCounts = [0];
                                                                        this.methods["range"] = func2111;
                                                                        func2111.definitionLine = 467;
                                                                        func2111.definitionModule = "StandardPrelude";
                                                                        this.methods["range"].debug = "def";
                                                                        return this;
                                                                      }
                                                                      gracecode_StandardPrelude.imports = ['collectionsPrelude'];
                                                                      if (typeof gctCache !== "undefined")
                                                                        gctCache['StandardPrelude'] = "classes:\n AndPattern\n BaseType\n BasicPattern\n BindingPattern\n FailedMatch\n MatchAndDestructuringPattern\n OrPattern\n Singleton\n SuccessfulMatch\n TypeIntersection\n TypeSubtraction\n TypeUnion\n TypeVariant\n VariablePattern\n WildcardPattern\nconfidential:\nconstructors-of:AndPattern:\n new\nconstructors-of:BaseType:\n new\nconstructors-of:BasicPattern:\n new\nconstructors-of:BindingPattern:\n new\nconstructors-of:FailedMatch:\n new\nconstructors-of:MatchAndDestructuringPattern:\n new\nconstructors-of:OrPattern:\n new\nconstructors-of:Singleton:\n named\n new\nconstructors-of:SuccessfulMatch:\n new\nconstructors-of:TypeIntersection:\n new\nconstructors-of:TypeSubtraction:\n new\nconstructors-of:TypeUnion:\n new\nconstructors-of:TypeVariant:\n new\nconstructors-of:VariablePattern:\n new\nconstructors-of:WildcardPattern:\n new\nfresh-methods:\n alwaysEqual\n methods\n point2Dx()y\nfresh:alwaysEqual:\n ==\nfresh:methods:\n AndPattern\n BaseType\n BasicPattern\n Binding\n BindingPattern\n Block0\n Block1\n Block2\n Block3\n BoundsError\n Cmd\n Collection\n ConcurrentModification\n Dictionary\n Enumerable\n ExceptionKind\n Expandable\n Extractable\n FailedMatch\n Fun\n Fun2\n Fun3\n Iterable\n Iterator\n IteratorExhausted\n List\n MatchAndDestructuringPattern\n MatchResult\n NoSuchObject\n OrPattern\n Pattern\n Point\n Proc\n Proc2\n Proc3\n RequestError\n Sequence\n Set\n Singleton\n SubobjectResponsibility\n SuccessfulMatch\n TypeIntersection\n TypeSubtraction\n TypeUnion\n TypeVariant\n UninitializedVariable\n VariablePattern\n WildcardPattern\n abstract\n alwaysEqual\n binding\n collection\n collections\n dictionary\n do()while\n emptyDictionary\n emptyList\n emptySequence\n emptySet\n enumerable\n for()and()do\n indexable\n list\n max\n methods\n min\n point2Dx()y\n range\n repeat()times\n required\n sequence\n set\n valueOf\nfresh:point2Dx()y:\n *\n +\n -\n /\n ==\n asDebugString\n asString\n distanceTo\n dot\n length\n prefix-\n x\n y\n \u22c5\nmethods-of:AndPattern.new:\n !=\n &\n ::\n asDebugString\n asString\n basicAsString\n isMe\n match\n |\n \u2260\nmethods-of:BaseType.new:\n &\n +\n -\n asString\n |\nmethods-of:BasicPattern.new:\n &\n |\nmethods-of:BindingPattern.new:\n !=\n &\n ::\n asDebugString\n asString\n basicAsString\n isMe\n match\n |\n \u2260\nmethods-of:FailedMatch.new:\n &&\n asString\n bindings\n not\n prefix!\n result\n ||\nmethods-of:MatchAndDestructuringPattern.new:\n !=\n &\n ::\n asDebugString\n asString\n basicAsString\n isMe\n items\n match\n pattern\n |\n \u2260\nmethods-of:OrPattern.new:\n !=\n &\n ::\n asDebugString\n asString\n basicAsString\n isMe\n match\n |\n \u2260\nmethods-of:Singleton.named:\n !=\n &\n ::\n ==\n asDebugString\n asString\n basicAsString\n isMe\n match\n |\n \u2260\nmethods-of:Singleton.new:\n !=\n &\n ::\n ==\n asDebugString\n asString\n basicAsString\n isMe\n match\n |\n \u2260\nmethods-of:SuccessfulMatch.new:\n &&\n asString\n bindings\n not\n prefix!\n result\n ||\nmethods-of:TypeIntersection.new:\n !=\n &\n +\n -\n ::\n asDebugString\n asString\n basicAsString\n isMe\n match\n methodNames\n |\n \u2260\nmethods-of:TypeSubtraction.new:\n !=\n &\n +\n -\n ::\n asDebugString\n asString\n basicAsString\n isMe\n methodNames\n |\n \u2260\nmethods-of:TypeUnion.new:\n !=\n &\n +\n -\n ::\n asDebugString\n asString\n basicAsString\n isMe\n match\n methodNames\n |\n \u2260\nmethods-of:TypeVariant.new:\n !=\n &\n +\n -\n ::\n asDebugString\n asString\n basicAsString\n isMe\n match\n methodNames\n |\n \u2260\nmethods-of:VariablePattern.new:\n !=\n &\n ::\n asDebugString\n asString\n basicAsString\n isMe\n match\n |\n \u2260\nmethods-of:WildcardPattern.new:\n !=\n &\n ::\n asDebugString\n asString\n basicAsString\n isMe\n match\n |\n \u2260\nmethodtypes-of:Binding<K, T>:\nmethodtypes-of:Block0<R>:\nmethodtypes-of:Block1<T, R>:\nmethodtypes-of:Block2<S, T, R>:\nmethodtypes-of:Block3<S, T, U, R>:\n 3 apply(a : S, b : T, c : U) -> R\nmethodtypes-of:Cmd:\nmethodtypes-of:Collection<T>:\nmethodtypes-of:Dictionary<K, T>:\nmethodtypes-of:Enumerable<T>:\nmethodtypes-of:ExceptionKind:\n & 3\n & Pattern\n 3 parent -> ExceptionKind\n 3 raise(message : String) -> Done\n 3 raise(message : String)with(argument : Object) -> Done\n 3 refine -> ExceptionKind\nmethodtypes-of:Expandable<T>:\nmethodtypes-of:Extractable:\n 1 extract -> Done\nmethodtypes-of:Fun2<T, U, R>:\nmethodtypes-of:Fun3<T, U, W, R>:\nmethodtypes-of:Fun<T, R>:\nmethodtypes-of:Iterable<T>:\nmethodtypes-of:Iterator<T>:\nmethodtypes-of:List<T>:\nmethodtypes-of:MatchResult:\n & 2\n & Boolean\n 2 bindings -> List<Unknown>\n 2 result -> Unknown\nmethodtypes-of:Pattern:\n 2 &(other : Pattern) -> Pattern\n 2 match(value : Object) -> MatchResult\n 2 |(other : Pattern) -> Pattern\nmethodtypes-of:Point:\n 3 *(factor : Number) -> Point\n 3 +(other : Point) -> Point\n 3 -(other : Point) -> Point\n 3 /(factor : Number) -> Point\n 3 distanceTo(other : Point) -> Number\n 3 dot(other : Point) -> Number\n 3 length -> Number\n 3 prefix- -> Point\n 3 x -> Number\n 3 y -> Number\n 3 \u22c5(other : Point) -> Number\nmethodtypes-of:Proc2<T, U>:\nmethodtypes-of:Proc3<T, U, W>:\nmethodtypes-of:Proc<T>:\nmethodtypes-of:Sequence<T>:\nmethodtypes-of:Set<T>:\nmodules:\n collectionsPrelude\npath:\n StandardPrelude\npublic:\n AndPattern\n BaseType\n BasicPattern\n Binding\n BindingPattern\n Block0\n Block1\n Block2\n Block3\n BoundsError\n Cmd\n Collection\n ConcurrentModification\n Dictionary\n Enumerable\n ExceptionKind\n Expandable\n Extractable\n FailedMatch\n Fun\n Fun2\n Fun3\n Iterable\n Iterator\n IteratorExhausted\n List\n MatchAndDestructuringPattern\n MatchResult\n NoSuchObject\n OrPattern\n Pattern\n Point\n Proc\n Proc2\n Proc3\n RequestError\n Sequence\n Set\n Singleton\n SubobjectResponsibility\n SuccessfulMatch\n TypeIntersection\n TypeSubtraction\n TypeUnion\n TypeVariant\n UninitializedVariable\n VariablePattern\n WildcardPattern\n abstract\n alwaysEqual\n binding\n collection\n collections\n dictionary\n do()while\n emptyDictionary\n emptyList\n emptySequence\n emptySet\n enumerable\n for()and()do\n indexable\n list\n max\n methods\n min\n point2Dx()y\n range\n repeat()times\n required\n sequence\n set\n valueOf\ntypes:\n Binding\n Block0\n Block1\n Block2\n Block3\n Cmd\n Collection\n Dictionary\n Enumerable\n ExceptionKind\n Expandable\n Extractable\n Fun\n Fun2\n Fun3\n Iterable\n Iterator\n List\n MatchResult\n Pattern\n Point\n Proc\n Proc2\n Proc3\n Sequence\n Set\n";
                                                                      if (typeof originalSourceLines !== "undefined") {
                                                                        originalSourceLines["StandardPrelude"] = [
                                                                          "#pragma NativePrelude",
                                                                          "#pragma ExtendedLineups",
                                                                          "",
                                                                          "var isStandardPrelude := true",
                                                                          "",
                                                                          "class SuccessfulMatch.new(result', bindings') {",
                                                                          "    inherits true",
                                                                          "    method result { result' }",
                                                                          "    method bindings { bindings' }",
                                                                          "    method asString {",
                                                                          "        \"SuccessfulMatch(result = {result}, bindings = {bindings})\"",
                                                                          "    }",
                                                                          "}",
                                                                          "",
                                                                          "class FailedMatch.new(result') {",
                                                                          "    inherits false",
                                                                          "    method result { result' }",
                                                                          "    method bindings { emptySequence }",
                                                                          "    method asString {",
                                                                          "        \"FailedMatch(result = {result})\"",
                                                                          "    }",
                                                                          "}",
                                                                          "",
                                                                          "method abstract {",
                                                                          "    SubobjectResponsibility.raise \"abstract method not overriden by subobject\"",
                                                                          "}",
                                                                          "",
                                                                          "",
                                                                          "method required {",
                                                                          "    SubobjectResponsibility.raise \"required method not overriden by subobject\"",
                                                                          "}",
                                                                          "",
                                                                          "method do(action)while(condition) {",
                                                                          "    while {",
                                                                          "        action.apply",
                                                                          "        condition.apply",
                                                                          "    } do { }",
                                                                          "}",
                                                                          "",
                                                                          "method repeat(n)times(action) {",
                                                                          "    var ix := n",
                                                                          "    while {ix > 0} do {",
                                                                          "        ix := ix - 1",
                                                                          "        action.apply",
                                                                          "    }",
                                                                          "}",
                                                                          "",
                                                                          "method for (cs) and (ds) do (action) -> Done {",
                                                                          "    def dIter = ds.iterator",
                                                                          "    cs.do { c -> ",
                                                                          "        if (dIter.hasNext) then {",
                                                                          "            action.apply(c, dIter.next)",
                                                                          "        } else {",
                                                                          "            return",
                                                                          "        }",
                                                                          "    }",
                                                                          "}",
                                                                          "",
                                                                          "method min(a, b) {",
                                                                          "    if (a < b) then { a } else { b }",
                                                                          "}",
                                                                          "",
                                                                          "method max(a, b) {",
                                                                          "    if (a > b) then { a } else { b }",
                                                                          "}",
                                                                          "",
                                                                          "method valueOf (nullaryBlock) {",
                                                                          "    nullaryBlock.apply",
                                                                          "}",
                                                                          "",
                                                                          "class BasicPattern.new {",
                                                                          "    method &(o) {",
                                                                          "        AndPattern.new(self, o)",
                                                                          "    }",
                                                                          "    method |(o) {",
                                                                          "        OrPattern.new(self, o)",
                                                                          "    }",
                                                                          "}",
                                                                          "class MatchAndDestructuringPattern.new(pat, items') {",
                                                                          "    inherits BasicPattern.new",
                                                                          "    def pattern = pat",
                                                                          "    def items = items'",
                                                                          "    method match(o) {",
                                                                          "        def m = pat.match(o)",
                                                                          "        if (m) then{",
                                                                          "            var mbindings := m.bindings",
                                                                          "            def bindings = []",
                                                                          "            if (mbindings.size < items.size) then {",
                                                                          "                if (Extractable.match(o)) then {",
                                                                          "                    mbindings := o.extract",
                                                                          "                } else {",
                                                                          "                    return FailedMatch.new(o)",
                                                                          "                }",
                                                                          "            }",
                                                                          "            for (items.indices) do {i->",
                                                                          "                def b = items.at(i).match(mbindings.at(i))",
                                                                          "                if (!b) then {",
                                                                          "                    return FailedMatch.new(o)",
                                                                          "                }",
                                                                          "                for (b.bindings) do {bb->",
                                                                          "                    bindings.push(bb)",
                                                                          "                }",
                                                                          "            }",
                                                                          "            SuccessfulMatch.new(o, bindings)",
                                                                          "        } else {",
                                                                          "            FailedMatch.new(o)",
                                                                          "        }",
                                                                          "    }",
                                                                          "}",
                                                                          "",
                                                                          "class VariablePattern.new(nm) {",
                                                                          "    inherits BasicPattern.new",
                                                                          "    method match(o) {",
                                                                          "        SuccessfulMatch.new(o, [o])",
                                                                          "    }",
                                                                          "}",
                                                                          "",
                                                                          "class BindingPattern.new(pat) {",
                                                                          "    inherits BasicPattern.new",
                                                                          "    method match(o) {",
                                                                          "        def bindings = [o]",
                                                                          "        def m = pat.match(o)",
                                                                          "        if (!m) then {",
                                                                          "            return m",
                                                                          "        }",
                                                                          "        for (m.bindings) do {b->",
                                                                          "            bindings.push(b)",
                                                                          "        }",
                                                                          "        SuccessfulMatch.new(o, bindings)",
                                                                          "    }",
                                                                          "}",
                                                                          "",
                                                                          "class WildcardPattern.new {",
                                                                          "    inherits BasicPattern.new",
                                                                          "    method match(o) {",
                                                                          "        SuccessfulMatch.new(done, [])",
                                                                          "    }",
                                                                          "}",
                                                                          "",
                                                                          "class AndPattern.new(p1, p2) {",
                                                                          "    inherits BasicPattern.new",
                                                                          "    method match(o) {",
                                                                          "        def m1 = p1.match(o)",
                                                                          "        if (!m1) then {",
                                                                          "            return m1",
                                                                          "        }",
                                                                          "        def m2 = p2.match(o)",
                                                                          "        if (!m2) then {",
                                                                          "            return m2",
                                                                          "        }",
                                                                          "        def bindings = []",
                                                                          "        for (m1.bindings) do {b->",
                                                                          "            bindings.push(b)",
                                                                          "        }",
                                                                          "        for (m2.bindings) do {b->",
                                                                          "            bindings.push(b)",
                                                                          "        }",
                                                                          "        SuccessfulMatch.new(o, bindings)",
                                                                          "    }",
                                                                          "}",
                                                                          "",
                                                                          "class OrPattern.new(p1, p2) {",
                                                                          "    inherits BasicPattern.new",
                                                                          "    method match(o) {",
                                                                          "        if (p1.match(o)) then {",
                                                                          "            return SuccessfulMatch.new(o, [])",
                                                                          "        }",
                                                                          "        if (p2.match(o)) then {",
                                                                          "            return SuccessfulMatch.new(o, [])",
                                                                          "        }",
                                                                          "        FailedMatch.new(o)",
                                                                          "    }",
                                                                          "}",
                                                                          "",
                                                                          "def Singleton is public = object {",
                                                                          "    factory method new {",
                                                                          "        inherits BasicPattern.new",
                                                                          "        method match(other) {",
                                                                          "            if (self.isMe(other)) then {",
                                                                          "                SuccessfulMatch.new(other, [])",
                                                                          "            } else {",
                                                                          "                FailedMatch.new(other)",
                                                                          "            }",
                                                                          "        }",
                                                                          "        method ==(other) { self.isMe(other) }",
                                                                          "    }",
                                                                          "    factory method named(printString) {",
                                                                          "        inherits Singleton.new",
                                                                          "        method asString { printString }",
                                                                          "    }",
                                                                          "}",
                                                                          "",
                                                                          "class BaseType.new(name) {",
                                                                          "    method &(o) {",
                                                                          "        TypeIntersection.new(self, o)",
                                                                          "    }",
                                                                          "    method |(o) {",
                                                                          "        TypeVariant.new(self, o)",
                                                                          "    }",
                                                                          "    method +(o) {",
                                                                          "        TypeUnion.new(self, o)",
                                                                          "    }",
                                                                          "    method -(o) {",
                                                                          "        TypeSubtraction.new(self, o)",
                                                                          "    }",
                                                                          "    method asString {",
                                                                          "        if (name == \"\") then { \"type ‹anon›\" }",
                                                                          "                        else { \"type {name}\" }",
                                                                          "    }",
                                                                          "}",
                                                                          "",
                                                                          "class TypeIntersection.new(t1, t2) {",
                                                                          "    inherits AndPattern.new(t1, t2)",
                                                                          "    // inherits BaseType.new",
                                                                          "    method &(o) {",
                                                                          "        TypeIntersection.new(self, o)",
                                                                          "    }",
                                                                          "    method |(o) {",
                                                                          "        TypeVariant.new(self, o)",
                                                                          "    }",
                                                                          "    method +(o) {",
                                                                          "        TypeUnion.new(self, o)",
                                                                          "    }",
                                                                          "    method -(o) {",
                                                                          "        TypeSubtraction.new(self, o)",
                                                                          "    }",
                                                                          "    method methodNames {",
                                                                          "        t1.methodNames.addAll(t2.methodNames)",
                                                                          "    }",
                                                                          "    method asString { \"({t1} & {t2})\" }",
                                                                          "}",
                                                                          "",
                                                                          "class TypeVariant.new(t1, t2) {",
                                                                          "    inherits OrPattern.new(t1, t2)",
                                                                          "    // inherits BaseType.new",
                                                                          "    method &(o) {",
                                                                          "        TypeIntersection.new(self, o)",
                                                                          "    }",
                                                                          "    method |(o) {",
                                                                          "        TypeVariant.new(self, o)",
                                                                          "    }",
                                                                          "    method +(o) {",
                                                                          "        TypeUnion.new(self, o)",
                                                                          "    }",
                                                                          "    method -(o) {",
                                                                          "        TypeSubtraction.new(self, o)",
                                                                          "    }",
                                                                          "    method methodNames {",
                                                                          "        self.TypeVariantsCannotBeCharacterizedByASetOfMethods",
                                                                          "    }",
                                                                          "    method asString { \"({t1} | {t2})\" }",
                                                                          "}",
                                                                          "",
                                                                          "class TypeUnion.new(t1, t2) {",
                                                                          "    inherits BasicPattern.new(t1, t2)",
                                                                          "//    inherits BaseType.new",
                                                                          "    method &(o) {",
                                                                          "        TypeIntersection.new(self, o)",
                                                                          "    }",
                                                                          "    method |(o) {",
                                                                          "        TypeVariant.new(self, o)",
                                                                          "    }",
                                                                          "    method +(o) {",
                                                                          "        TypeUnion.new(self, o)",
                                                                          "    }",
                                                                          "    method -(o) {",
                                                                          "        TypeSubtraction.new(self, o)",
                                                                          "    }",
                                                                          "    method methodNames {",
                                                                          "        t1.methodNames ** t2.methodNames",
                                                                          "    }",
                                                                          "    method match(o) {",
                                                                          "        ResourceException.raise \"matching against a TypeUnion not yet implemented\"",
                                                                          "        // Why not?  Becuase it requires reflection, which",
                                                                          "        // requires the mirror module, which requires this module.",
                                                                          "        def mirror = ...",
                                                                          "        def oMethodNames = mirror.reflect(o).methodNames",
                                                                          "        for (self.methodNames) do { each ->",
                                                                          "            if (! oMethodNames.contains(each)) then {",
                                                                          "                return FailedMatch.new(o)",
                                                                          "            }",
                                                                          "        }",
                                                                          "        return SuccessfulMatch.new(o, [])",
                                                                          "    }",
                                                                          "    method asString { \"({t1} + {t2})\" }",
                                                                          "}",
                                                                          "",
                                                                          "class TypeSubtraction.new(t1, t2) {",
                                                                          "    inherits BasicPattern.new(t1, t2)",
                                                                          "    method &(o) {",
                                                                          "        TypeIntersection.new(self, o)",
                                                                          "    }",
                                                                          "    method |(o) {",
                                                                          "        TypeVariant.new(self, o)",
                                                                          "    }",
                                                                          "    method +(o) {",
                                                                          "        TypeUnion.new(self, o)",
                                                                          "    }",
                                                                          "    method -(o) {",
                                                                          "        TypeSubtraction.new(self, o)",
                                                                          "    }",
                                                                          "    method methodNames {",
                                                                          "        t1.methodNames.removeAll(t2.methodNames)",
                                                                          "    }",
                                                                          "    method asString { \"({t1} - {t2})\" }",
                                                                          "}",
                                                                          "",
                                                                          "// Now define the types.  Because some of the types are defined using &,",
                                                                          "// TypeIntersection must be defined first.",
                                                                          "",
                                                                          "type Extractable = {",
                                                                          "    extract",
                                                                          "}",
                                                                          "",
                                                                          "type MatchResult = Boolean & type {",
                                                                          "    result -> Unknown",
                                                                          "    bindings -> List<Unknown>",
                                                                          "}",
                                                                          "",
                                                                          "type Pattern = {",
                                                                          "    & (other:Pattern) -> Pattern",
                                                                          "    | (other:Pattern) -> Pattern",
                                                                          "    match(value:Object) -> MatchResult",
                                                                          "}",
                                                                          "",
                                                                          "type ExceptionKind = Pattern & type {",
                                                                          "    refine -> ExceptionKind",
                                                                          "    parent -> ExceptionKind",
                                                                          "    raise(message:String) -> Done",
                                                                          "    raise(message:String) with (argument:Object) -> Done",
                                                                          "}",
                                                                          "",
                                                                          "type Point =  {",
                                                                          "",
                                                                          "    x -> Number",
                                                                          "    // the x-coordinates of self",
                                                                          "",
                                                                          "    y -> Number",
                                                                          "    // the y-coordinate of self",
                                                                          "",
                                                                          "    + (other:Point) -> Point",
                                                                          "    // the Point that is the vector sum of self and other, i.e. (self.x+other.x) @ (self.y+other.y)",
                                                                          "",
                                                                          "    - (other:Point) -> Point",
                                                                          "    // the Point that is the vector difference of self and other, i.e. (self.x-other.x) @ (self.y-other.y)",
                                                                          "",
                                                                          "    prefix- -> Point",
                                                                          "    // the negation of self",
                                                                          "    ",
                                                                          "    * (factor:Number) -> Point",
                                                                          "    // this point scaled by factor, i.e. (self.x*factor) @ (self.y*factor)",
                                                                          "    ",
                                                                          "    / (factor:Number) -> Point",
                                                                          "    // this point scaled by 1/factor, i.e. (self.x/factor) @ (self.y/factor)",
                                                                          "",
                                                                          "    length -> Number",
                                                                          "    // distance from self to the origin",
                                                                          "",
                                                                          "    distanceTo(other:Point) -> Number",
                                                                          "    // distance from self to other",
                                                                          "",
                                                                          "    dot (other:Point) -> Number",
                                                                          "    ⋅ (other:Point) -> Number",
                                                                          "    // dot product",
                                                                          "}",
                                                                          "",
                                                                          "class alwaysEqual {     // a trait",
                                                                          "    method == (other) {",
                                                                          "        self.isMe(other)",
                                                                          "    }",
                                                                          "}",
                                                                          "",
                                                                          "class point2Dx (x') y (y') {",
                                                                          "    def x is readable = x'",
                                                                          "    def y is readable = y'",
                                                                          "    method asString { \"({x}@{y})\" }",
                                                                          "    method asDebugString { self.asString }",
                                                                          "    method distanceTo(other:Point) { (((x - other.x)^2) + ((y - other.y)^2))^(0.5) }",
                                                                          "    method -(other:Point) { point2Dx (x - other.x) y (y - other.y) }",
                                                                          "    method +(other:Point) { point2Dx (x + other.x) y (y + other.y) }",
                                                                          "    method /(other:Number) { point2Dx (x / other) y (y / other) }",
                                                                          "    method *(other:Number) { point2Dx (x * other) y (y * other) }",
                                                                          "    method length {((x^2) + (y^2))^0.5}",
                                                                          "    method ==(other) {",
                                                                          "        match (other)",
                                                                          "            case {o:Point -> (x == o.x) && (y == o.y)}",
                                                                          "            case {_ -> false}",
                                                                          "    }",
                                                                          "    method prefix- { point2Dx (-x) y (-y) }",
                                                                          "    method dot (other:Point) -> Number {",
                                                                          "        // dot product",
                                                                          "        (x * other.x) + (y * other.y)",
                                                                          "    }",
                                                                          "    method ⋅ (other:Point) -> Number {",
                                                                          "        // dot product",
                                                                          "        (x * other.x) + (y * other.y)",
                                                                          "    }",
                                                                          "}",
                                                                          "",
                                                                          "import \"collectionsPrelude\" as coll",
                                                                          "// collectionsPrelude defines types using &, so it can't be imported until",
                                                                          "// the above definition of TypeIntersection has been executed.",
                                                                          "",
                                                                          "// We should just be able to put \"is public\" on the above import, but this is",
                                                                          "// not fully implemented.  So instead we create an alias:",
                                                                          "def collections is public = coll",
                                                                          "",
                                                                          "type Block0<R> = collections.Block0<R>",
                                                                          "type Block1<T,R> = collections.Block1<T,R>",
                                                                          "type Block2<S,T,R> = collections.Block2<S,T,R>",
                                                                          "type Block3<S,T,U,R> = type {",
                                                                          "    apply(a:S, b:T, c:U) -> R",
                                                                          "}",
                                                                          "type Cmd = Block0<Done>",
                                                                          "type Fun<T,R> = Block1<T,R>",
                                                                          "type Fun2<T,U,R> = Block2<T,U,R>",
                                                                          "type Fun3<T,U,W,R> = Block3<T,U,W,R>",
                                                                          "type Proc<T> = Block1<T,Done>",
                                                                          "type Proc2<T,U> = Block2<T,U,Done>",
                                                                          "type Proc3<T,U,W> = Block3<T,U,W,Done>",
                                                                          "",
                                                                          "type Collection<T> = collections.Collection<T>",
                                                                          "type Iterable<T> = collections.Iterable<T>",
                                                                          "type Expandable<T> = collections.Expandable<T>",
                                                                          "type Enumerable<T> = collections.Enumerable<T>",
                                                                          "type Binding<K,T> = collections.Binding<K,T>",
                                                                          "type Iterator<T> = collections.Iterator<T>",
                                                                          "type Sequence<T> = collections.Sequence<T>",
                                                                          "type List<T> = collections.List<T>",
                                                                          "type Set<T> = collections.Set<T>",
                                                                          "type Dictionary<K,T> = collections.Dictionary<K,T>",
                                                                          "",
                                                                          "def BoundsError is public = collections.BoundsError",
                                                                          "def IteratorExhausted is public = collections.IteratorExhausted",
                                                                          "def NoSuchObject is public = collections.NoSuchObject",
                                                                          "def RequestError is public = collections.RequestError",
                                                                          "def SubobjectResponsibility is public = collections.SubobjectResponsibility",
                                                                          "def ConcurrentModification is public = collections.ConcurrentModification",
                                                                          "def UninitializedVariable is public = ProgrammingError.refine \"UninitializedVariable\"",
                                                                          "",
                                                                          "def collection is public = collections.collection",
                                                                          "def enumerable is public = collections.enumerable",
                                                                          "def indexable is public = collections.indexable",
                                                                          "",
                                                                          "method sequence<T>(arg) {",
                                                                          "    collections.sequence<T>.withAll(arg)",
                                                                          "}",
                                                                          "",
                                                                          "def emptySequence is public = collections.sequence.empty",
                                                                          "",
                                                                          "method list<T>(arg) {",
                                                                          "    collections.list<T>.withAll(arg)",
                                                                          "}",
                                                                          "method emptyList { collections.list.empty }",
                                                                          "",
                                                                          "method set<T>(arg) {",
                                                                          "    collections.set<T>.withAll(arg)",
                                                                          "}",
                                                                          "method emptySet { collections.set.empty }",
                                                                          "",
                                                                          "method dictionary<K, T>(arg) {",
                                                                          "    collections.dictionary<K, T>.withAll(arg)",
                                                                          "}",
                                                                          "method emptyDictionary { collections.dictionary.empty }",
                                                                          "",
                                                                          "def binding is public = collections.binding",
                                                                          "def range is public = collections.range",
                                                                          "",
                                                                          "method methods {",
                                                                          "    prelude.clone(self)",
                                                                          "}",
                                                                          "",
                                                                          "" ];
                                                                      }
                                                                      if (typeof global !== "undefined")
                                                                        global.gracecode_StandardPrelude = gracecode_StandardPrelude;
                                                                      if (typeof window !== "undefined")
                                                                        window.gracecode_StandardPrelude = gracecode_StandardPrelude;
