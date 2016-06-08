"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_identifierKinds() {
  setModuleName("identifierKinds");
  this.definitionModule = "identifierKinds";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_identifierKinds_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_identifierKinds_outer0;
  setLineNumber(13);    // compilenode method
  var func1 = function(argcv) {    // method kindConstant(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_name = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for kindConstant(1)"));
    setModuleName("identifierKinds");
    var obj2 = Grace_allocObject(GraceObject, "identifierKinds.kindConstant");
    obj2.definitionModule = "identifierKinds";
    obj2.definitionLine = 13;
    obj2.outer = this;
    var reader_identifierKinds_outer3 = function() {
      return this.outer;
    };
    obj2.methods["outer"] = reader_identifierKinds_outer3;
    var obj_init_2 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj2;
      var func4 = function(argcv) {    // method asString
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
        setModuleName("identifierKinds");
        // asString is a simple accessor - elide try ... catch
        setLineNumber(14);    // compilenode identifier
        return var_name;
      };
      func4.paramCounts = [0];
      obj2.methods["asString"] = func4;
      func4.definitionLine = 14;
      func4.definitionModule = "identifierKinds";
      var func5 = function(argcv) {    // method isParameter
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isParameter"));
        setModuleName("identifierKinds");
        // isParameter is a simple accessor - elide try ... catch
        setLineNumber(15);    // compilenode identifier
        return GraceFalse;
      };
      func5.paramCounts = [0];
      obj2.methods["isParameter"] = func5;
      func5.definitionLine = 15;
      func5.definitionModule = "identifierKinds";
      var func6 = function(argcv) {    // method isAssignable
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isAssignable"));
        setModuleName("identifierKinds");
        // isAssignable is a simple accessor - elide try ... catch
        setLineNumber(16);    // compilenode identifier
        return GraceFalse;
      };
      func6.paramCounts = [0];
      obj2.methods["isAssignable"] = func6;
      func6.definitionLine = 16;
      func6.definitionModule = "identifierKinds";
      var func7 = function(argcv) {    // method isImplicit
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isImplicit"));
        setModuleName("identifierKinds");
        // isImplicit is a simple accessor - elide try ... catch
        setLineNumber(17);    // compilenode identifier
        return GraceFalse;
      };
      func7.paramCounts = [0];
      obj2.methods["isImplicit"] = func7;
      func7.definitionLine = 17;
      func7.definitionModule = "identifierKinds";
      var func8 = function(argcv) {    // method forUsers
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for forUsers"));
        setModuleName("identifierKinds");
        // forUsers is a simple accessor - elide try ... catch
        setLineNumber(18);    // compilenode identifier
        return GraceTrue;
      };
      func8.paramCounts = [0];
      obj2.methods["forUsers"] = func8;
      func8.definitionLine = 18;
      func8.definitionModule = "identifierKinds";
      var func9 = function(argcv) {    // method fromParent
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for fromParent"));
        setModuleName("identifierKinds");
        // fromParent is a simple accessor - elide try ... catch
        setLineNumber(19);    // compilenode identifier
        return GraceFalse;
      };
      func9.paramCounts = [0];
      obj2.methods["fromParent"] = func9;
      func9.definitionLine = 19;
      func9.definitionModule = "identifierKinds";
      var func10 = function(argcv) {    // method forGct
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for forGct"));
        setModuleName("identifierKinds");
        // forGct is a simple accessor - elide try ... catch
        setLineNumber(20);    // compilenode identifier
        return GraceTrue;
      };
      func10.paramCounts = [0];
      obj2.methods["forGct"] = func10;
      func10.definitionLine = 20;
      func10.definitionModule = "identifierKinds";
      var func11 = function(argcv) {    // method ==(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_other = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ==(1)"));
        setModuleName("identifierKinds");
        setLineNumber(21);    // compilenode identifier
        onSelf = true;
        var call12 = callmethodChecked(this, "isMe", [1], var_other);
        return call12;
      };
      func11.paramCounts = [1];
      obj2.methods["=="] = func11;
      func11.definitionLine = 21;
      func11.definitionModule = "identifierKinds";
      superDepth = origSuperDepth;
    };
    obj_init_2.apply(obj2, []);
    return obj2;
  };
  func1.paramCounts = [1];
  this.methods["kindConstant"] = func1;
  func1.definitionLine = 13;
  func1.definitionModule = "identifierKinds";
    var func13 = function(argcv) {    // method kindConstant(1     )()object
      var curarg = 1;
      var var_name = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      // Start argument processing
      curarg = 1;
      curarg++;
      // End argument processing
      setModuleName("identifierKinds");
      var returnTarget = invocationCount;
      invocationCount++;
      var obj14 = Grace_allocObject(GraceObject, "kindConstant");
      obj14.definitionModule = "identifierKinds";
      obj14.definitionLine = 13;
      var inho14 = inheritingObject;
      while (inho14.superobj) inho14 = inho14.superobj;
      inho14.superobj = obj14;
      obj14.data = inheritingObject.data;
      if (inheritingObject.hasOwnProperty('_value'))
        obj14._value = inheritingObject._value;
      obj14.outer = this;
      var reader_identifierKinds_outer15 = function() {
        return this.outer;
      };
      obj14.methods["outer"] = reader_identifierKinds_outer15;
      var obj_init_14 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj14;
        var func16 = function(argcv) {    // method asString
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
          setModuleName("identifierKinds");
          // asString is a simple accessor - elide try ... catch
          setLineNumber(14);    // compilenode identifier
          return var_name;
        };
        func16.paramCounts = [0];
        obj14.methods["asString"] = func16;
        func16.definitionLine = 14;
        func16.definitionModule = "identifierKinds";
        var func17 = function(argcv) {    // method isParameter
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isParameter"));
          setModuleName("identifierKinds");
          // isParameter is a simple accessor - elide try ... catch
          setLineNumber(15);    // compilenode identifier
          return GraceFalse;
        };
        func17.paramCounts = [0];
        obj14.methods["isParameter"] = func17;
        func17.definitionLine = 15;
        func17.definitionModule = "identifierKinds";
        var func18 = function(argcv) {    // method isAssignable
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isAssignable"));
          setModuleName("identifierKinds");
          // isAssignable is a simple accessor - elide try ... catch
          setLineNumber(16);    // compilenode identifier
          return GraceFalse;
        };
        func18.paramCounts = [0];
        obj14.methods["isAssignable"] = func18;
        func18.definitionLine = 16;
        func18.definitionModule = "identifierKinds";
        var func19 = function(argcv) {    // method isImplicit
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isImplicit"));
          setModuleName("identifierKinds");
          // isImplicit is a simple accessor - elide try ... catch
          setLineNumber(17);    // compilenode identifier
          return GraceFalse;
        };
        func19.paramCounts = [0];
        obj14.methods["isImplicit"] = func19;
        func19.definitionLine = 17;
        func19.definitionModule = "identifierKinds";
        var func20 = function(argcv) {    // method forUsers
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for forUsers"));
          setModuleName("identifierKinds");
          // forUsers is a simple accessor - elide try ... catch
          setLineNumber(18);    // compilenode identifier
          return GraceTrue;
        };
        func20.paramCounts = [0];
        obj14.methods["forUsers"] = func20;
        func20.definitionLine = 18;
        func20.definitionModule = "identifierKinds";
        var func21 = function(argcv) {    // method fromParent
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for fromParent"));
          setModuleName("identifierKinds");
          // fromParent is a simple accessor - elide try ... catch
          setLineNumber(19);    // compilenode identifier
          return GraceFalse;
        };
        func21.paramCounts = [0];
        obj14.methods["fromParent"] = func21;
        func21.definitionLine = 19;
        func21.definitionModule = "identifierKinds";
        var func22 = function(argcv) {    // method forGct
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for forGct"));
          setModuleName("identifierKinds");
          // forGct is a simple accessor - elide try ... catch
          setLineNumber(20);    // compilenode identifier
          return GraceTrue;
        };
        func22.paramCounts = [0];
        obj14.methods["forGct"] = func22;
        func22.definitionLine = 20;
        func22.definitionModule = "identifierKinds";
        var func23 = function(argcv) {    // method ==(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_other = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ==(1)"));
          setModuleName("identifierKinds");
          setLineNumber(21);    // compilenode identifier
          onSelf = true;
          var call24 = callmethodChecked(this, "isMe", [1], var_other);
          return call24;
        };
        func23.paramCounts = [1];
        obj14.methods["=="] = func23;
        func23.definitionLine = 21;
        func23.definitionModule = "identifierKinds";
        superDepth = origSuperDepth;
      };
      obj_init_14.apply(inheritingObject, []);
      return obj14;
      };
      this.methods["kindConstant()object"] = func13;
    setLineNumber(4);    // compilenode typedec
    // Type decl T
    //   Type literal 
    var type26 = new GraceType("T");
    type26.typeMethods.push("isParameter");
    type26.typeMethods.push("isAssignable");
    type26.typeMethods.push("isImplicit");
    type26.typeMethods.push("forUsers");
    type26.typeMethods.push("fromParent");
    type26.typeMethods.push("==");
    var var_T = type26;
    setLineNumber(1);    // compilenode method
    var func27 = function(argcv) {    // method T
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for T"));
      setModuleName("identifierKinds");
      // T is a simple accessor - elide try ... catch
      setLineNumber(4);    // compilenode identifier
      return var_T;
    };
    func27.paramCounts = [0];
    this.methods["T"] = func27;
    func27.definitionLine = 1;
    func27.definitionModule = "identifierKinds";
    setLineNumber(24);    // compilenode string
    var string28 = new GraceString("undefined");
    onSelf = true;
    var call29 = callmethodChecked(this, "kindConstant", [1], string28);
    var var_undefined = call29;
    setLineNumber(1);    // compilenode method
    var func30 = function(argcv) {    // method undefined
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for undefined"));
      setModuleName("identifierKinds");
      // undefined is a simple accessor - elide try ... catch
      setLineNumber(24);    // compilenode identifier
      return var_undefined;
    };
    func30.paramCounts = [0];
    this.methods["undefined"] = func30;
    func30.definitionLine = 1;
    func30.definitionModule = "identifierKinds";
    this.methods["undefined"].debug = "def";
    setLineNumber(25);    // compilenode string
    var string31 = new GraceString("defdec");
    onSelf = true;
    var call32 = callmethodChecked(this, "kindConstant", [1], string31);
    var var_defdec = call32;
    setLineNumber(1);    // compilenode method
    var func33 = function(argcv) {    // method defdec
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for defdec"));
      setModuleName("identifierKinds");
      // defdec is a simple accessor - elide try ... catch
      setLineNumber(25);    // compilenode identifier
      return var_defdec;
    };
    func33.paramCounts = [0];
    this.methods["defdec"] = func33;
    func33.definitionLine = 1;
    func33.definitionModule = "identifierKinds";
    this.methods["defdec"].debug = "def";
    setLineNumber(26);    // compilenode string
    var string34 = new GraceString("method");
    onSelf = true;
    var call35 = callmethodChecked(this, "kindConstant", [1], string34);
    var var_methdec = call35;
    setLineNumber(1);    // compilenode method
    var func36 = function(argcv) {    // method methdec
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for methdec"));
      setModuleName("identifierKinds");
      // methdec is a simple accessor - elide try ... catch
      setLineNumber(26);    // compilenode identifier
      return var_methdec;
    };
    func36.paramCounts = [0];
    this.methods["methdec"] = func36;
    func36.definitionLine = 1;
    func36.definitionModule = "identifierKinds";
    this.methods["methdec"].debug = "def";
    setLineNumber(27);    // compilenode string
    var string37 = new GraceString("typedec");
    onSelf = true;
    var call38 = callmethodChecked(this, "kindConstant", [1], string37);
    var var_typedec = call38;
    setLineNumber(1);    // compilenode method
    var func39 = function(argcv) {    // method typedec
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for typedec"));
      setModuleName("identifierKinds");
      // typedec is a simple accessor - elide try ... catch
      setLineNumber(27);    // compilenode identifier
      return var_typedec;
    };
    func39.paramCounts = [0];
    this.methods["typedec"] = func39;
    func39.definitionLine = 1;
    func39.definitionModule = "identifierKinds";
    this.methods["typedec"].debug = "def";
    setLineNumber(28);    // compilenode object
    var obj40 = Grace_allocObject(null, "selfDef");
    obj40.definitionModule = "identifierKinds";
    obj40.definitionLine = 28;
    obj40.outer = this;
    var reader_identifierKinds_outer41 = function() {
      return this.outer;
    };
    obj40.methods["outer"] = reader_identifierKinds_outer41;
    var obj_init_40 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj40;
      var func42 = function(argcv) {    // method isImplicit
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isImplicit"));
        setModuleName("identifierKinds");
        // isImplicit is a simple accessor - elide try ... catch
        setLineNumber(30);    // compilenode identifier
        return GraceTrue;
      };
      func42.paramCounts = [0];
      obj40.methods["isImplicit"] = func42;
      func42.definitionLine = 30;
      func42.definitionModule = "identifierKinds";
      var func43 = function(argcv) {    // method forUsers
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for forUsers"));
        setModuleName("identifierKinds");
        // forUsers is a simple accessor - elide try ... catch
        setLineNumber(31);    // compilenode identifier
        return GraceFalse;
      };
      func43.paramCounts = [0];
      obj40.methods["forUsers"] = func43;
      func43.definitionLine = 31;
      func43.definitionModule = "identifierKinds";
      var func44 = function(argcv) {    // method forGct
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for forGct"));
        setModuleName("identifierKinds");
        // forGct is a simple accessor - elide try ... catch
        setLineNumber(32);    // compilenode identifier
        return GraceFalse;
      };
      func44.paramCounts = [0];
      obj40.methods["forGct"] = func44;
      func44.definitionLine = 32;
      func44.definitionModule = "identifierKinds";
      setLineNumber(29);    // compilenode string
      var string45 = new GraceString("selfDef");
      var call46 = callmethodChecked(superDepth, "outer", [0]);
      onOuter = true;
      onSelf = true;
      var call47 = callmethodChecked(call46, "kindConstant()object", [1, 1], string45, this);
      obj40.superobj = call47;
      if (call47.data) obj40.data = call47.data;
      if (call47.hasOwnProperty('_value'))
          obj40._value = call47._value;
      superDepth = origSuperDepth;
    };
    obj_init_40.apply(obj40, []);
    var var_selfDef = obj40;
    var func48 = function(argcv) {    // method selfDef
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for selfDef"));
      setModuleName("identifierKinds");
      // selfDef is a simple accessor - elide try ... catch
      setLineNumber(28);    // compilenode identifier
      return var_selfDef;
    };
    func48.paramCounts = [0];
    this.methods["selfDef"] = func48;
    func48.definitionLine = 29;
    func48.definitionModule = "identifierKinds";
    this.methods["selfDef"].debug = "def";
    setLineNumber(34);    // compilenode object
    var obj49 = Grace_allocObject(null, "fromTrait");
    obj49.definitionModule = "identifierKinds";
    obj49.definitionLine = 34;
    obj49.outer = this;
    var reader_identifierKinds_outer50 = function() {
      return this.outer;
    };
    obj49.methods["outer"] = reader_identifierKinds_outer50;
    var obj_init_49 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj49;
      var func51 = function(argcv) {    // method isImplicit
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isImplicit"));
        setModuleName("identifierKinds");
        // isImplicit is a simple accessor - elide try ... catch
        setLineNumber(36);    // compilenode identifier
        return GraceTrue;
      };
      func51.paramCounts = [0];
      obj49.methods["isImplicit"] = func51;
      func51.definitionLine = 36;
      func51.definitionModule = "identifierKinds";
      var func52 = function(argcv) {    // method fromParent
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for fromParent"));
        setModuleName("identifierKinds");
        // fromParent is a simple accessor - elide try ... catch
        setLineNumber(37);    // compilenode identifier
        return GraceTrue;
      };
      func52.paramCounts = [0];
      obj49.methods["fromParent"] = func52;
      func52.definitionLine = 37;
      func52.definitionModule = "identifierKinds";
      setLineNumber(35);    // compilenode string
      var string53 = new GraceString("from a trait");
      var call54 = callmethodChecked(superDepth, "outer", [0]);
      onOuter = true;
      onSelf = true;
      var call55 = callmethodChecked(call54, "kindConstant()object", [1, 1], string53, this);
      obj49.superobj = call55;
      if (call55.data) obj49.data = call55.data;
      if (call55.hasOwnProperty('_value'))
          obj49._value = call55._value;
      superDepth = origSuperDepth;
    };
    obj_init_49.apply(obj49, []);
    var var_fromTrait = obj49;
    var func56 = function(argcv) {    // method fromTrait
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for fromTrait"));
      setModuleName("identifierKinds");
      // fromTrait is a simple accessor - elide try ... catch
      setLineNumber(34);    // compilenode identifier
      return var_fromTrait;
    };
    func56.paramCounts = [0];
    this.methods["fromTrait"] = func56;
    func56.definitionLine = 35;
    func56.definitionModule = "identifierKinds";
    this.methods["fromTrait"].debug = "def";
    setLineNumber(39);    // compilenode object
    var obj57 = Grace_allocObject(null, "inherited");
    obj57.definitionModule = "identifierKinds";
    obj57.definitionLine = 39;
    obj57.outer = this;
    var reader_identifierKinds_outer58 = function() {
      return this.outer;
    };
    obj57.methods["outer"] = reader_identifierKinds_outer58;
    var obj_init_57 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj57;
      var func59 = function(argcv) {    // method isImplicit
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isImplicit"));
        setModuleName("identifierKinds");
        // isImplicit is a simple accessor - elide try ... catch
        setLineNumber(41);    // compilenode identifier
        return GraceTrue;
      };
      func59.paramCounts = [0];
      obj57.methods["isImplicit"] = func59;
      func59.definitionLine = 41;
      func59.definitionModule = "identifierKinds";
      var func60 = function(argcv) {    // method fromParent
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for fromParent"));
        setModuleName("identifierKinds");
        // fromParent is a simple accessor - elide try ... catch
        setLineNumber(42);    // compilenode identifier
        return GraceTrue;
      };
      func60.paramCounts = [0];
      obj57.methods["fromParent"] = func60;
      func60.definitionLine = 42;
      func60.definitionModule = "identifierKinds";
      setLineNumber(40);    // compilenode string
      var string61 = new GraceString("inherited");
      var call62 = callmethodChecked(superDepth, "outer", [0]);
      onOuter = true;
      onSelf = true;
      var call63 = callmethodChecked(call62, "kindConstant()object", [1, 1], string61, this);
      obj57.superobj = call63;
      if (call63.data) obj57.data = call63.data;
      if (call63.hasOwnProperty('_value'))
          obj57._value = call63._value;
      superDepth = origSuperDepth;
    };
    obj_init_57.apply(obj57, []);
    var var_inherited = obj57;
    var func64 = function(argcv) {    // method inherited
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for inherited"));
      setModuleName("identifierKinds");
      // inherited is a simple accessor - elide try ... catch
      setLineNumber(39);    // compilenode identifier
      return var_inherited;
    };
    func64.paramCounts = [0];
    this.methods["inherited"] = func64;
    func64.definitionLine = 40;
    func64.definitionModule = "identifierKinds";
    this.methods["inherited"].debug = "def";
    setLineNumber(44);    // compilenode object
    var obj65 = Grace_allocObject(null, "vardec");
    obj65.definitionModule = "identifierKinds";
    obj65.definitionLine = 44;
    obj65.outer = this;
    var reader_identifierKinds_outer66 = function() {
      return this.outer;
    };
    obj65.methods["outer"] = reader_identifierKinds_outer66;
    var obj_init_65 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj65;
      var func67 = function(argcv) {    // method isAssignable
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isAssignable"));
        setModuleName("identifierKinds");
        // isAssignable is a simple accessor - elide try ... catch
        setLineNumber(46);    // compilenode identifier
        return GraceTrue;
      };
      func67.paramCounts = [0];
      obj65.methods["isAssignable"] = func67;
      func67.definitionLine = 46;
      func67.definitionModule = "identifierKinds";
      setLineNumber(45);    // compilenode string
      var string68 = new GraceString("vardec");
      var call69 = callmethodChecked(superDepth, "outer", [0]);
      onOuter = true;
      onSelf = true;
      var call70 = callmethodChecked(call69, "kindConstant()object", [1, 1], string68, this);
      obj65.superobj = call70;
      if (call70.data) obj65.data = call70.data;
      if (call70.hasOwnProperty('_value'))
          obj65._value = call70._value;
      superDepth = origSuperDepth;
    };
    obj_init_65.apply(obj65, []);
    var var_vardec = obj65;
    var func71 = function(argcv) {    // method vardec
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for vardec"));
      setModuleName("identifierKinds");
      // vardec is a simple accessor - elide try ... catch
      setLineNumber(44);    // compilenode identifier
      return var_vardec;
    };
    func71.paramCounts = [0];
    this.methods["vardec"] = func71;
    func71.definitionLine = 45;
    func71.definitionModule = "identifierKinds";
    this.methods["vardec"].debug = "def";
    setLineNumber(48);    // compilenode object
    var obj72 = Grace_allocObject(null, "parameter");
    obj72.definitionModule = "identifierKinds";
    obj72.definitionLine = 48;
    obj72.outer = this;
    var reader_identifierKinds_outer73 = function() {
      return this.outer;
    };
    obj72.methods["outer"] = reader_identifierKinds_outer73;
    var obj_init_72 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj72;
      var func74 = function(argcv) {    // method isParameter
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isParameter"));
        setModuleName("identifierKinds");
        // isParameter is a simple accessor - elide try ... catch
        setLineNumber(50);    // compilenode identifier
        return GraceTrue;
      };
      func74.paramCounts = [0];
      obj72.methods["isParameter"] = func74;
      func74.definitionLine = 50;
      func74.definitionModule = "identifierKinds";
      setLineNumber(49);    // compilenode string
      var string75 = new GraceString("parameter");
      var call76 = callmethodChecked(superDepth, "outer", [0]);
      onOuter = true;
      onSelf = true;
      var call77 = callmethodChecked(call76, "kindConstant()object", [1, 1], string75, this);
      obj72.superobj = call77;
      if (call77.data) obj72.data = call77.data;
      if (call77.hasOwnProperty('_value'))
          obj72._value = call77._value;
      superDepth = origSuperDepth;
    };
    obj_init_72.apply(obj72, []);
    var var_parameter = obj72;
    var func78 = function(argcv) {    // method parameter
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for parameter"));
      setModuleName("identifierKinds");
      // parameter is a simple accessor - elide try ... catch
      setLineNumber(48);    // compilenode identifier
      return var_parameter;
    };
    func78.paramCounts = [0];
    this.methods["parameter"] = func78;
    func78.definitionLine = 49;
    func78.definitionModule = "identifierKinds";
    this.methods["parameter"].debug = "def";
    setLineNumber(52);    // compilenode object
    var obj79 = Grace_allocObject(null, "typeparam");
    obj79.definitionModule = "identifierKinds";
    obj79.definitionLine = 52;
    obj79.outer = this;
    var reader_identifierKinds_outer80 = function() {
      return this.outer;
    };
    obj79.methods["outer"] = reader_identifierKinds_outer80;
    var obj_init_79 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj79;
      var func81 = function(argcv) {    // method isParameter
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isParameter"));
        setModuleName("identifierKinds");
        // isParameter is a simple accessor - elide try ... catch
        setLineNumber(54);    // compilenode identifier
        return GraceTrue;
      };
      func81.paramCounts = [0];
      obj79.methods["isParameter"] = func81;
      func81.definitionLine = 54;
      func81.definitionModule = "identifierKinds";
      setLineNumber(53);    // compilenode string
      var string82 = new GraceString("typeparam");
      var call83 = callmethodChecked(superDepth, "outer", [0]);
      onOuter = true;
      onSelf = true;
      var call84 = callmethodChecked(call83, "kindConstant()object", [1, 1], string82, this);
      obj79.superobj = call84;
      if (call84.data) obj79.data = call84.data;
      if (call84.hasOwnProperty('_value'))
          obj79._value = call84._value;
      superDepth = origSuperDepth;
    };
    obj_init_79.apply(obj79, []);
    var var_typeparam = obj79;
    var func85 = function(argcv) {    // method typeparam
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for typeparam"));
      setModuleName("identifierKinds");
      // typeparam is a simple accessor - elide try ... catch
      setLineNumber(52);    // compilenode identifier
      return var_typeparam;
    };
    func85.paramCounts = [0];
    this.methods["typeparam"] = func85;
    func85.definitionLine = 53;
    func85.definitionModule = "identifierKinds";
    this.methods["typeparam"].debug = "def";
    setLineNumber(56);    // compilenode object
    var obj86 = Grace_allocObject(null, "graceObjectMethod");
    obj86.definitionModule = "identifierKinds";
    obj86.definitionLine = 56;
    obj86.outer = this;
    var reader_identifierKinds_outer87 = function() {
      return this.outer;
    };
    obj86.methods["outer"] = reader_identifierKinds_outer87;
    var obj_init_86 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj86;
      var func88 = function(argcv) {    // method isImplicit
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isImplicit"));
        setModuleName("identifierKinds");
        // isImplicit is a simple accessor - elide try ... catch
        setLineNumber(58);    // compilenode identifier
        return GraceTrue;
      };
      func88.paramCounts = [0];
      obj86.methods["isImplicit"] = func88;
      func88.definitionLine = 58;
      func88.definitionModule = "identifierKinds";
      var func89 = function(argcv) {    // method forUsers
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for forUsers"));
        setModuleName("identifierKinds");
        // forUsers is a simple accessor - elide try ... catch
        setLineNumber(59);    // compilenode identifier
        return GraceFalse;
      };
      func89.paramCounts = [0];
      obj86.methods["forUsers"] = func89;
      func89.definitionLine = 59;
      func89.definitionModule = "identifierKinds";
      var func90 = function(argcv) {    // method fromParent
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for fromParent"));
        setModuleName("identifierKinds");
        // fromParent is a simple accessor - elide try ... catch
        setLineNumber(60);    // compilenode identifier
        return GraceTrue;
      };
      func90.paramCounts = [0];
      obj86.methods["fromParent"] = func90;
      func90.definitionLine = 60;
      func90.definitionModule = "identifierKinds";
      var func91 = function(argcv) {    // method forGct
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for forGct"));
        setModuleName("identifierKinds");
        // forGct is a simple accessor - elide try ... catch
        setLineNumber(61);    // compilenode identifier
        return GraceFalse;
      };
      func91.paramCounts = [0];
      obj86.methods["forGct"] = func91;
      func91.definitionLine = 61;
      func91.definitionModule = "identifierKinds";
      setLineNumber(57);    // compilenode string
      var string92 = new GraceString("from graceObject");
      var call93 = callmethodChecked(superDepth, "outer", [0]);
      onOuter = true;
      onSelf = true;
      var call94 = callmethodChecked(call93, "kindConstant()object", [1, 1], string92, this);
      obj86.superobj = call94;
      if (call94.data) obj86.data = call94.data;
      if (call94.hasOwnProperty('_value'))
          obj86._value = call94._value;
      superDepth = origSuperDepth;
    };
    obj_init_86.apply(obj86, []);
    var var_graceObjectMethod = obj86;
    var func95 = function(argcv) {    // method graceObjectMethod
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for graceObjectMethod"));
      setModuleName("identifierKinds");
      // graceObjectMethod is a simple accessor - elide try ... catch
      setLineNumber(56);    // compilenode identifier
      return var_graceObjectMethod;
    };
    func95.paramCounts = [0];
    this.methods["graceObjectMethod"] = func95;
    func95.definitionLine = 57;
    func95.definitionModule = "identifierKinds";
    this.methods["graceObjectMethod"].debug = "def";
    return this;
  }
  gracecode_identifierKinds.imports = [];
  if (typeof gctCache !== "undefined")
    gctCache['identifierKinds'] = "classes:\nconfidential:\nfresh-methods:\n kindConstant\nfresh:kindConstant:\n ==\n asString\n forGct\n forUsers\n fromParent\n isAssignable\n isImplicit\n isParameter\nmethodtypes-of:T:\n 1 ==(o : T) -> Boolean\n 1 forUsers -> Boolean\n 1 fromParent -> Boolean\n 1 isAssignable -> Boolean\n 1 isImplicit -> Boolean\n 1 isParameter -> Boolean\nmodules:\npath:\n identifierKinds\npublic:\n T\n kindConstant\ntypes:\n T\n";
  if (typeof originalSourceLines !== "undefined") {
    originalSourceLines["identifierKinds"] = [
      "// Constants distinguishing between different kinds of identifier.",
      "// Defines observers for their properties.",
      "",
      "type T = type {",
      "    isParameter -> Boolean",
      "    isAssignable -> Boolean",
      "    isImplicit -> Boolean",
      "    forUsers -> Boolean",
      "    fromParent -> Boolean",
      "    ==(o:T) -> Boolean",
      "}",
      "",
      "class kindConstant(name) {",
      "    method asString { name }",
      "    method isParameter { false }",
      "    method isAssignable { false }",
      "    method isImplicit { false }",
      "    method forUsers { true }",
      "    method fromParent { false }",
      "    method forGct { true }",
      "    method ==(other) { self.isMe(other) }",
      "}",
      "",
      "def undefined = kindConstant \"undefined\"",
      "def defdec = kindConstant \"defdec\"",
      "def methdec = kindConstant \"method\"",
      "def typedec = kindConstant \"typedec\"",
      "def selfDef = object {",
      "    inherits kindConstant \"selfDef\"",
      "    method isImplicit { true }",
      "    method forUsers { false }",
      "    method forGct { false }",
      "}",
      "def fromTrait = object {",
      "    inherits kindConstant \"from a trait\"",
      "    method isImplicit { true }",
      "    method fromParent { true }",
      "}",
      "def inherited = object {",
      "    inherits kindConstant \"inherited\"",
      "    method isImplicit { true }",
      "    method fromParent { true }",
      "}",
      "def vardec = object {",
      "    inherits kindConstant \"vardec\"",
      "    method isAssignable { true }",
      "}",
      "def parameter = object {",
      "    inherits kindConstant \"parameter\"",
      "    method isParameter { true }",
      "}",
      "def typeparam = object {",
      "    inherits kindConstant \"typeparam\"",
      "    method isParameter { true }",
      "}",
      "def graceObjectMethod = object {",
      "    inherits kindConstant \"from graceObject\"",
      "    method isImplicit { true }",
      "    method forUsers { false }",
      "    method fromParent { true }",
      "    method forGct { false }",
      "}" ];
  }
  if (typeof global !== "undefined")
    global.gracecode_identifierKinds = gracecode_identifierKinds;
  if (typeof window !== "undefined")
    window.gracecode_identifierKinds = gracecode_identifierKinds;
