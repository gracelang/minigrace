"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_option() {
  setModuleName("option");
  this.definitionModule = "option";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_option_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_option_outer0;
  setLineNumber(7);    // compilenode method
  var func1 = function(argcv) {    // method some(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_contents = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for some(1)"));
    // Start type arguments
    var var_T = var_Unknown;
    if (argcv.length == 2) {
      if (argcv[1] !== 1) {
        throw new GraceExceptionPacket(ProgrammingErrorObject, 
            new GraceString("wrong number of type arguments for some(1)"));
      }
      var_T = arguments[curarg++];
    }
    // End type arguments
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_T, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in some (arg list 1), which corresponds to parameter contents, does not have " + 
                callmethod(var_T, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("option");
    var obj2 = Grace_allocObject(GraceObject, "option.some");
    obj2.definitionModule = "option";
    obj2.definitionLine = 7;
    obj2.outer = this;
    var reader_option_outer3 = function() {
      return this.outer;
    };
    obj2.methods["outer"] = reader_option_outer3;
    var obj_init_2 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj2;
      var func4 = function(argcv) {    // method value
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for value"));
        setModuleName("option");
        // value is a simple accessor - elide try ... catch
        setLineNumber(8);    // compilenode identifier
        return var_contents;
      };
      func4.paramCounts = [0];
      obj2.methods["value"] = func4;
      func4.definitionLine = 8;
      func4.definitionModule = "option";
      var func5 = function(argcv) {    // method do(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_action = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for do(1)"));
        // Start argument checking
        curarg = 1;
        setLineNumber(9);    // compilenode call
        var call6 = callmethodChecked(var_prelude, "Block1", [0]);
        if (!Grace_isTrue(callmethod(call6, "match",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in do (arg list 1), which corresponds to parameter action, does not have " + 
                    callmethod(call6, "asString", [0])._value + "."));
        curarg++;
        // End argument checking
        setModuleName("option");
        onSelf = true;
        var call7 = callmethodChecked(this, "value", [0]);
        var call8 = callmethodChecked(var_action, "apply", [1], call7);
        if (!Grace_isTrue(callmethod(var_Done, "match", [1], call8)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method do(1) does not have " + 
                    callmethod(var_Done, "asString", [0])._value + "."));
        return call8;
      };
      func5.paramCounts = [1];
      obj2.methods["do"] = func5;
      func5.definitionLine = 9;
      func5.definitionModule = "option";
      var func9 = function(argcv) {    // method isSome
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isSome"));
        setModuleName("option");
        // isSome is a simple accessor - elide try ... catch
        setLineNumber(10);    // compilenode identifier
        return GraceTrue;
      };
      func9.paramCounts = [0];
      obj2.methods["isSome"] = func9;
      func9.definitionLine = 10;
      func9.definitionModule = "option";
      var func10 = function(argcv) {    // method isNone
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isNone"));
        setModuleName("option");
        // isNone is a simple accessor - elide try ... catch
        setLineNumber(11);    // compilenode identifier
        return GraceFalse;
      };
      func10.paramCounts = [0];
      obj2.methods["isNone"] = func10;
      func10.definitionLine = 11;
      func10.definitionModule = "option";
      superDepth = origSuperDepth;
    };
    obj_init_2.apply(obj2, []);
    setLineNumber(7);    // return value
    if (!Grace_isTrue(callmethod(var_Option, "match", [1], obj2)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("result of method some(1) does not have " + 
                callmethod(var_Option, "asString", [0])._value + "."));
    return obj2;
  };
  func1.paramTypes = [];
  func1.paramTypes.push([]);
  func1.paramCounts = [1];
  this.methods["some"] = func1;
  func1.definitionLine = 7;
  func1.definitionModule = "option";
    var func11 = function(argcv) {    // method some(1     )()object
      var curarg = 1;
      var var_contents = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      // Start type arguments
      var var_T = var_Unknown;
      if (argcv.length == 3) {
        if (argcv[2] !== 1) {
          callmethod(ProgrammingErrorObject, "raise", [1], 
              new GraceString("wrong number of type arguments"));
        }
        var_T = arguments[curarg++];
      }
      // End type arguments
      // Start argument processing
      curarg = 1;
      if (!Grace_isTrue(callmethod(var_T, "match",  [1], arguments[curarg])))
          throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("argument 1 in some (arg list 1), which corresponds to parameter contents, does not have " + 
                  callmethod(var_T, "asString", [0])._value + "."));
      curarg++;
      // End argument processing
      setModuleName("option");
      var returnTarget = invocationCount;
      invocationCount++;
      var obj12 = Grace_allocObject(GraceObject, "some");
      obj12.definitionModule = "option";
      obj12.definitionLine = 7;
      var inho12 = inheritingObject;
      while (inho12.superobj) inho12 = inho12.superobj;
      inho12.superobj = obj12;
      obj12.data = inheritingObject.data;
      if (inheritingObject.hasOwnProperty('_value'))
        obj12._value = inheritingObject._value;
      obj12.outer = this;
      var reader_option_outer13 = function() {
        return this.outer;
      };
      obj12.methods["outer"] = reader_option_outer13;
      var obj_init_12 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj12;
        var func14 = function(argcv) {    // method value
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for value"));
          setModuleName("option");
          // value is a simple accessor - elide try ... catch
          setLineNumber(8);    // compilenode identifier
          return var_contents;
        };
        func14.paramCounts = [0];
        obj12.methods["value"] = func14;
        func14.definitionLine = 8;
        func14.definitionModule = "option";
        var func15 = function(argcv) {    // method do(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_action = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for do(1)"));
          // Start argument checking
          curarg = 1;
          setLineNumber(9);    // compilenode call
          var call16 = callmethodChecked(var_prelude, "Block1", [0]);
          if (!Grace_isTrue(callmethod(call16, "match",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in do (arg list 1), which corresponds to parameter action, does not have " + 
                      callmethod(call16, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("option");
          onSelf = true;
          var call17 = callmethodChecked(this, "value", [0]);
          var call18 = callmethodChecked(var_action, "apply", [1], call17);
          if (!Grace_isTrue(callmethod(var_Done, "match", [1], call18)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method do(1) does not have " + 
                      callmethod(var_Done, "asString", [0])._value + "."));
          return call18;
        };
        func15.paramCounts = [1];
        obj12.methods["do"] = func15;
        func15.definitionLine = 9;
        func15.definitionModule = "option";
        var func19 = function(argcv) {    // method isSome
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isSome"));
          setModuleName("option");
          // isSome is a simple accessor - elide try ... catch
          setLineNumber(10);    // compilenode identifier
          return GraceTrue;
        };
        func19.paramCounts = [0];
        obj12.methods["isSome"] = func19;
        func19.definitionLine = 10;
        func19.definitionModule = "option";
        var func20 = function(argcv) {    // method isNone
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isNone"));
          setModuleName("option");
          // isNone is a simple accessor - elide try ... catch
          setLineNumber(11);    // compilenode identifier
          return GraceFalse;
        };
        func20.paramCounts = [0];
        obj12.methods["isNone"] = func20;
        func20.definitionLine = 11;
        func20.definitionModule = "option";
        superDepth = origSuperDepth;
      };
      obj_init_12.apply(inheritingObject, []);
      return obj12;
      };
      func11.paramTypes = [];
      func11.paramTypes.push([]);
      this.methods["some()object"] = func11;
    setLineNumber(13);    // compilenode method
    var func21 = function(argcv) {    // method none
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for none"));
      // Start type arguments
      var var_T = var_Unknown;
      if (argcv.length == 2) {
        if (argcv[1] !== 1) {
          throw new GraceExceptionPacket(ProgrammingErrorObject, 
              new GraceString("wrong number of type arguments for none"));
        }
        var_T = arguments[curarg++];
      }
      // End type arguments
      setModuleName("option");
      var obj22 = Grace_allocObject(GraceObject, "option.none");
      obj22.definitionModule = "option";
      obj22.definitionLine = 13;
      obj22.outer = this;
      var reader_option_outer23 = function() {
        return this.outer;
      };
      obj22.methods["outer"] = reader_option_outer23;
      var obj_init_22 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj22;
        var func24 = function(argcv) {    // method value
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for value"));
          setModuleName("option");
          setLineNumber(14);    // compilenode string
          var string25 = new GraceString("none has no value");
          var call26 = callmethodChecked(var_prelude, "ProgrammingError", [0]);
          var call27 = callmethodChecked(call26, "raise", [1], string25);
          if (!Grace_isTrue(callmethod(var_T, "match", [1], call27)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method value does not have " + 
                      callmethod(var_T, "asString", [0])._value + "."));
          return call27;
        };
        func24.paramCounts = [0];
        obj22.methods["value"] = func24;
        func24.definitionLine = 14;
        func24.definitionModule = "option";
        var func28 = function(argcv) {    // method do(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_action = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for do(1)"));
          // Start argument checking
          curarg = 1;
          setLineNumber(15);    // compilenode call
          var call29 = callmethodChecked(var_prelude, "Block1", [0]);
          if (!Grace_isTrue(callmethod(call29, "match",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in do (arg list 1), which corresponds to parameter action, does not have " + 
                      callmethod(call29, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("option");
          // do(1) is a simple accessor - elide try ... catch
          return var_done;
        };
        func28.paramCounts = [1];
        obj22.methods["do"] = func28;
        func28.definitionLine = 15;
        func28.definitionModule = "option";
        var func30 = function(argcv) {    // method isSome
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isSome"));
          setModuleName("option");
          // isSome is a simple accessor - elide try ... catch
          setLineNumber(16);    // compilenode identifier
          return GraceFalse;
        };
        func30.paramCounts = [0];
        obj22.methods["isSome"] = func30;
        func30.definitionLine = 16;
        func30.definitionModule = "option";
        var func31 = function(argcv) {    // method isNone
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isNone"));
          setModuleName("option");
          // isNone is a simple accessor - elide try ... catch
          setLineNumber(17);    // compilenode identifier
          return GraceTrue;
        };
        func31.paramCounts = [0];
        obj22.methods["isNone"] = func31;
        func31.definitionLine = 17;
        func31.definitionModule = "option";
        superDepth = origSuperDepth;
      };
      obj_init_22.apply(obj22, []);
      setLineNumber(13);    // return value
      if (!Grace_isTrue(callmethod(var_Option, "match", [1], obj22)))
          throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("result of method none does not have " + 
                  callmethod(var_Option, "asString", [0])._value + "."));
      return obj22;
    };
    func21.paramCounts = [0];
    this.methods["none"] = func21;
    func21.definitionLine = 13;
    func21.definitionModule = "option";
      var func32 = function(argcv) {    // method none()object
        var curarg = 1;
        var inheritingObject = arguments[curarg++];
        // Start type arguments
        var var_T = var_Unknown;
        if (argcv.length == 3) {
          if (argcv[2] !== 1) {
            callmethod(ProgrammingErrorObject, "raise", [1], 
                new GraceString("wrong number of type arguments"));
          }
          var_T = arguments[curarg++];
        }
        // End type arguments
        // Start argument processing
        curarg = 1;
        // End argument processing
        setModuleName("option");
        var returnTarget = invocationCount;
        invocationCount++;
        var obj33 = Grace_allocObject(GraceObject, "none");
        obj33.definitionModule = "option";
        obj33.definitionLine = 13;
        var inho33 = inheritingObject;
        while (inho33.superobj) inho33 = inho33.superobj;
        inho33.superobj = obj33;
        obj33.data = inheritingObject.data;
        if (inheritingObject.hasOwnProperty('_value'))
          obj33._value = inheritingObject._value;
        obj33.outer = this;
        var reader_option_outer34 = function() {
          return this.outer;
        };
        obj33.methods["outer"] = reader_option_outer34;
        var obj_init_33 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj33;
          var func35 = function(argcv) {    // method value
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for value"));
            setModuleName("option");
            setLineNumber(14);    // compilenode string
            var string36 = new GraceString("none has no value");
            var call37 = callmethodChecked(var_prelude, "ProgrammingError", [0]);
            var call38 = callmethodChecked(call37, "raise", [1], string36);
            if (!Grace_isTrue(callmethod(var_T, "match", [1], call38)))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("result of method value does not have " + 
                        callmethod(var_T, "asString", [0])._value + "."));
            return call38;
          };
          func35.paramCounts = [0];
          obj33.methods["value"] = func35;
          func35.definitionLine = 14;
          func35.definitionModule = "option";
          var func39 = function(argcv) {    // method do(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_action = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for do(1)"));
            // Start argument checking
            curarg = 1;
            setLineNumber(15);    // compilenode call
            var call40 = callmethodChecked(var_prelude, "Block1", [0]);
            if (!Grace_isTrue(callmethod(call40, "match",  [1], arguments[curarg])))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("argument 1 in do (arg list 1), which corresponds to parameter action, does not have " + 
                        callmethod(call40, "asString", [0])._value + "."));
            curarg++;
            // End argument checking
            setModuleName("option");
            // do(1) is a simple accessor - elide try ... catch
            return var_done;
          };
          func39.paramCounts = [1];
          obj33.methods["do"] = func39;
          func39.definitionLine = 15;
          func39.definitionModule = "option";
          var func41 = function(argcv) {    // method isSome
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isSome"));
            setModuleName("option");
            // isSome is a simple accessor - elide try ... catch
            setLineNumber(16);    // compilenode identifier
            return GraceFalse;
          };
          func41.paramCounts = [0];
          obj33.methods["isSome"] = func41;
          func41.definitionLine = 16;
          func41.definitionModule = "option";
          var func42 = function(argcv) {    // method isNone
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isNone"));
            setModuleName("option");
            // isNone is a simple accessor - elide try ... catch
            setLineNumber(17);    // compilenode identifier
            return GraceTrue;
          };
          func42.paramCounts = [0];
          obj33.methods["isNone"] = func42;
          func42.definitionLine = 17;
          func42.definitionModule = "option";
          superDepth = origSuperDepth;
        };
        obj_init_33.apply(inheritingObject, []);
        return obj33;
        };
        this.methods["none()object"] = func32;
      setLineNumber(1);    // compilenode typedec
      // Type decl Option
      //   Type literal 
      var type44 = new GraceType("Option");
      type44.typeMethods.push("value");
      type44.typeMethods.push("do");
      type44.typeMethods.push("isSome");
      type44.typeMethods.push("isNone");
      var var_Option = type44;
      setLineNumber(15);    // compilenode method
      var func45 = function(argcv) {    // method Option
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Option"));
        setModuleName("option");
        // Option is a simple accessor - elide try ... catch
        setLineNumber(1);    // compilenode identifier
        return var_Option;
      };
      func45.paramCounts = [0];
      this.methods["Option"] = func45;
      func45.definitionLine = 15;
      func45.definitionModule = "option";
      return this;
    }
    gracecode_option.imports = [];
    if (typeof gctCache !== "undefined")
      gctCache['option'] = "classes:\nconfidential:\nfresh-methods:\n none\n some\nfresh:none:\n do\n isNone\n isSome\n value\nfresh:some:\n do\n isNone\n isSome\n value\nmethodtypes-of:Option<T>:\n 1 do(action : Block1<T, Done>) -> Done\n 1 isNone -> Boolean\n 1 isSome -> Boolean\n 1 value -> T\nmodules:\npath:\n option\npublic:\n Option\n none\n some\ntypes:\n Option\n";
    if (typeof originalSourceLines !== "undefined") {
      originalSourceLines["option"] = [
        "type Option<T> = type {",
        "    value -> T",
        "    do(action:Block1<T, Done>) -> Done",
        "    isSome -> Boolean",
        "    isNone -> Boolean",
        "}",
        "class some<T>(contents:T) -> Option {",
        "    method value -> T { contents }",
        "    method do(action:Block1<T, Done>) -> Done { action.apply(value) }",
        "    method isSome -> Boolean { true }",
        "    method isNone -> Boolean { false }",
        "}",
        "class none<T> -> Option {",
        "    method value -> T { ProgrammingError.raise \"none has no value\" }",
        "    method do(action:Block1<T, Done>) -> Done { done }",
        "    method isSome -> Boolean { false }",
        "    method isNone -> Boolean { true }",
        "}",
        "    " ];
    }
    if (typeof global !== "undefined")
      global.gracecode_option = gracecode_option;
    if (typeof window !== "undefined")
      window.gracecode_option = gracecode_option;
