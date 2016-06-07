"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_animation() {
  setModuleName("animation");
  this.definitionModule = "animation";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_animation_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_animation_outer0;
  setLineNumber(1);    // compilenode import
  // Import of timer as timer
  if (typeof gracecode_timer == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module timer'));
  var var_timer = do_import("timer", gracecode_timer);
  var func1 = function(argcv) {    // method timer
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for timer"));
    setModuleName("animation");
    // timer is a simple accessor - elide try ... catch
    return var_timer;
  };
  func1.paramCounts = [0];
  this.methods["timer"] = func1;
  func1.definitionLine = 1;
  func1.definitionModule = "animation";
  func1.debug = "import";
  func1.confidential = true;
  setModuleName("animation");
  setLineNumber(32);    // compilenode method
  var func2 = function(argcv) {    // method while(1)pausing(1)do(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_condition = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for while (arg list 1) of while(1)pausing(1)do(1)"));
    var var_pauseTime = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for pausing (arg list 2) of while(1)pausing(1)do(1)"));
    var var_block = arguments[curarg];
    curarg++;
    if (argcv[2] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for do (arg list 3) of while(1)pausing(1)do(1)"));
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_BoolBlock, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in while (arg list 1), which corresponds to parameter condition, does not have " + 
                callmethod(var_BoolBlock, "asString", [0])._value + "."));
    curarg++;
    if (!Grace_isTrue(callmethod(var_Number, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in pausing (arg list 2), which corresponds to parameter pauseTime, does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    curarg++;
    if (!Grace_isTrue(callmethod(var_Block, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in do (arg list 3), which corresponds to parameter block, does not have " + 
                callmethod(var_Block, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("animation");
    setLineNumber(33);    // compilenode block
    var block3 = new GraceBlock(this, 33, 0);
    block3.real = function() {
      var if4 = GraceDone;
      setLineNumber(34);    // compilenode identifier
      var call5 = callmethodChecked(var_condition, "apply", [0]);
      if (Grace_isTrue(call5)) {
        setLineNumber(35);    // compilenode identifier
        var call6 = callmethodChecked(var_block, "apply", [0]);
        if4 = call6;
      } else {
        setLineNumber(37);    // compilenode identifier
        var call7 = callmethodChecked(var_timer, "stop", [1], var_id);
        if4 = call7;
      }
      return if4;
    };
    setLineNumber(33);    // compilenode identifier
    var call8 = callmethodChecked(var_timer, "every()do", [1, 1], var_pauseTime, block3);
    var var_id = call8;
    if (!Grace_isTrue(callmethod(var_Number, "match", [1], var_id)))
      throw new GraceExceptionPacket(TypeErrorObject,
          new GraceString("value of def 'id' is not of type Number"));
    if (!Grace_isTrue(callmethod(var_Done, "match", [1], GraceDone)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("result of method while(1)pausing(1)do(1) does not have " + 
                callmethod(var_Done, "asString", [0])._value + "."));
    return GraceDone;
  };
  func2.paramTypes = [];
  func2.paramTypes.push([]);
  func2.paramTypes.push([type_Number, "pauseTime"]);
  func2.paramTypes.push([type_Block, "block"]);
  func2.paramCounts = [1, 1, 1];
  this.methods["while()pausing()do"] = func2;
  func2.definitionLine = 32;
  func2.definitionModule = "animation";
  setLineNumber(44);    // compilenode method
  var func9 = function(argcv) {    // method while(1)pausing(1)do(1)finally(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_condition = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for while (arg list 1) of while(1)pausing(1)do(1)finally(1)"));
    var var_pauseTime = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for pausing (arg list 2) of while(1)pausing(1)do(1)finally(1)"));
    var var_block = arguments[curarg];
    curarg++;
    if (argcv[2] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for do (arg list 3) of while(1)pausing(1)do(1)finally(1)"));
    var var_endBlock = arguments[curarg];
    curarg++;
    if (argcv[3] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for finally (arg list 4) of while(1)pausing(1)do(1)finally(1)"));
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_BoolBlock, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in while (arg list 1), which corresponds to parameter condition, does not have " + 
                callmethod(var_BoolBlock, "asString", [0])._value + "."));
    curarg++;
    if (!Grace_isTrue(callmethod(var_Number, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in pausing (arg list 2), which corresponds to parameter pauseTime, does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    curarg++;
    if (!Grace_isTrue(callmethod(var_Block, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in do (arg list 3), which corresponds to parameter block, does not have " + 
                callmethod(var_Block, "asString", [0])._value + "."));
    curarg++;
    setLineNumber(45);    // compilenode identifier
    if (!Grace_isTrue(callmethod(var_Block, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in finally (arg list 4), which corresponds to parameter endBlock, does not have " + 
                callmethod(var_Block, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("animation");
    setLineNumber(46);    // compilenode block
    var block10 = new GraceBlock(this, 46, 0);
    block10.real = function() {
      var if11 = GraceDone;
      setLineNumber(47);    // compilenode identifier
      var call12 = callmethodChecked(var_condition, "apply", [0]);
      if (Grace_isTrue(call12)) {
        setLineNumber(48);    // compilenode identifier
        var call13 = callmethodChecked(var_block, "apply", [0]);
        if11 = call13;
      } else {
        setLineNumber(50);    // compilenode identifier
        var call14 = callmethodChecked(var_timer, "stop", [1], var_id);
        setLineNumber(51);    // compilenode identifier
        var call15 = callmethodChecked(var_endBlock, "apply", [0]);
        if11 = call15;
      }
      return if11;
    };
    setLineNumber(46);    // compilenode identifier
    var call16 = callmethodChecked(var_timer, "every()do", [1, 1], var_pauseTime, block10);
    var var_id = call16;
    if (!Grace_isTrue(callmethod(var_Number, "match", [1], var_id)))
      throw new GraceExceptionPacket(TypeErrorObject,
          new GraceString("value of def 'id' is not of type Number"));
    if (!Grace_isTrue(callmethod(var_Done, "match", [1], GraceDone)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("result of method while(1)pausing(1)do(1)finally(1) does not have " + 
                callmethod(var_Done, "asString", [0])._value + "."));
    return GraceDone;
  };
  func9.paramTypes = [];
  func9.paramTypes.push([]);
  func9.paramTypes.push([type_Number, "pauseTime"]);
  func9.paramTypes.push([type_Block, "block"]);
  func9.paramTypes.push([type_Block, "endBlock"]);
  func9.paramCounts = [1, 1, 1, 1];
  this.methods["while()pausing()do()finally"] = func9;
  func9.definitionLine = 44;
  func9.definitionModule = "animation";
  setLineNumber(58);    // compilenode method
  var func17 = function(argcv) {    // method while(1)pauseVarying(1)do(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_condition = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for while (arg list 1) of while(1)pauseVarying(1)do(1)"));
    var var_timeBlock = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for pauseVarying (arg list 2) of while(1)pauseVarying(1)do(1)"));
    var var_block = arguments[curarg];
    curarg++;
    if (argcv[2] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for do (arg list 3) of while(1)pauseVarying(1)do(1)"));
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_BoolBlock, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in while (arg list 1), which corresponds to parameter condition, does not have " + 
                callmethod(var_BoolBlock, "asString", [0])._value + "."));
    curarg++;
    curarg++;
    if (!Grace_isTrue(callmethod(var_Block, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in do (arg list 3), which corresponds to parameter block, does not have " + 
                callmethod(var_Block, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("animation");
    var if18 = GraceDone;
    setLineNumber(59);    // compilenode identifier
    var call19 = callmethodChecked(var_condition, "apply", [0]);
    if (Grace_isTrue(call19)) {
      setLineNumber(60);    // compilenode identifier
      var call20 = callmethodChecked(var_block, "apply", [0]);
      setLineNumber(61);    // compilenode identifier
      var call21 = callmethodChecked(var_timeBlock, "apply", [0]);
      var block22 = new GraceBlock(this, 61, 0);
      block22.real = function() {
        setLineNumber(62);    // compilenode identifier
        onSelf = true;
        var call23 = callmethodChecked(this, "while()pauseVarying()do", [1, 1, 1], var_condition, var_timeBlock, var_block);
        return call23;
      };
      setLineNumber(61);    // compilenode identifier
      var call24 = callmethodChecked(var_timer, "after()do", [1, 1], call21, block22);
      if18 = call24;
    }
    setLineNumber(59);    // return value
    if (!Grace_isTrue(callmethod(var_Done, "match", [1], if18)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("result of method while(1)pauseVarying(1)do(1) does not have " + 
                callmethod(var_Done, "asString", [0])._value + "."));
    return if18;
  };
  func17.paramTypes = [];
  func17.paramTypes.push([]);
  func17.paramTypes.push([]);
  func17.paramTypes.push([type_Block, "block"]);
  func17.paramCounts = [1, 1, 1];
  this.methods["while()pauseVarying()do"] = func17;
  func17.definitionLine = 58;
  func17.definitionModule = "animation";
  setLineNumber(69);    // compilenode method
  var func25 = function(argcv) {    // method for(1)pausing(1)do(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_range__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for for (arg list 1) of for(1)pausing(1)do(1)"));
    var var_pauseTime = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for pausing (arg list 2) of for(1)pausing(1)do(1)"));
    var var_block = arguments[curarg];
    curarg++;
    if (argcv[2] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for do (arg list 3) of for(1)pausing(1)do(1)"));
    // Start type arguments
    var var_T = var_Unknown;
    if (argcv.length == 4) {
      if (argcv[3] !== 1) {
        throw new GraceExceptionPacket(ProgrammingErrorObject, 
            new GraceString("wrong number of type arguments for for(1)pausing(1)do(1)"));
      }
      var_T = arguments[curarg++];
    }
    // End type arguments
    // Start argument checking
    curarg = 1;
    var call26 = callmethodChecked(var_prelude, "Sequence", [0]);
    if (!Grace_isTrue(callmethod(call26, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in for (arg list 1), which corresponds to parameter range', does not have " + 
                callmethod(call26, "asString", [0])._value + "."));
    curarg++;
    if (!Grace_isTrue(callmethod(var_Number, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in pausing (arg list 2), which corresponds to parameter pauseTime, does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    curarg++;
    if (!Grace_isTrue(callmethod(var_Block, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in do (arg list 3), which corresponds to parameter block, does not have " + 
                callmethod(var_Block, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("animation");
    setLineNumber(70);    // compilenode identifier
    var call27 = callmethodChecked(var_range__39__, "iterator", [0]);
    var var_it = call27;
    setLineNumber(71);    // compilenode block
    var block28 = new GraceBlock(this, 71, 0);
    block28.real = function() {
      var call29 = callmethodChecked(var_it, "hasNext", [0]);
      return call29;
    };
    var block30 = new GraceBlock(this, 71, 0);
    block30.real = function() {
      var call31 = callmethodChecked(var_it, "next", [0]);
      var call32 = callmethodChecked(var_block, "apply", [1], call31);
      return call32;
    };
    onSelf = true;
    var call33 = callmethodChecked(this, "while()pausing()do", [1, 1, 1], block28, var_pauseTime, block30);
    if (!Grace_isTrue(callmethod(var_Done, "match", [1], call33)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("result of method for(1)pausing(1)do(1) does not have " + 
                callmethod(var_Done, "asString", [0])._value + "."));
    return call33;
  };
  func25.paramTypes = [];
  func25.paramTypes.push([]);
  func25.paramTypes.push([type_Number, "pauseTime"]);
  func25.paramTypes.push([]);
  func25.paramCounts = [1, 1, 1];
  this.methods["for()pausing()do"] = func25;
  func25.definitionLine = 69;
  func25.definitionModule = "animation";
  setLineNumber(77);    // compilenode method
  var func34 = function(argcv) {    // method for(1)pausing(1)do(1)finally(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_range__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for for (arg list 1) of for(1)pausing(1)do(1)finally(1)"));
    var var_pauseTime = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for pausing (arg list 2) of for(1)pausing(1)do(1)finally(1)"));
    var var_block = arguments[curarg];
    curarg++;
    if (argcv[2] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for do (arg list 3) of for(1)pausing(1)do(1)finally(1)"));
    var var_endBlock = arguments[curarg];
    curarg++;
    if (argcv[3] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for finally (arg list 4) of for(1)pausing(1)do(1)finally(1)"));
    // Start type arguments
    var var_T = var_Unknown;
    if (argcv.length == 5) {
      if (argcv[4] !== 1) {
        throw new GraceExceptionPacket(ProgrammingErrorObject, 
            new GraceString("wrong number of type arguments for for(1)pausing(1)do(1)finally(1)"));
      }
      var_T = arguments[curarg++];
    }
    // End type arguments
    // Start argument checking
    curarg = 1;
    var call35 = callmethodChecked(var_prelude, "Sequence", [0]);
    if (!Grace_isTrue(callmethod(call35, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in for (arg list 1), which corresponds to parameter range', does not have " + 
                callmethod(call35, "asString", [0])._value + "."));
    curarg++;
    curarg++;
    if (!Grace_isTrue(callmethod(var_Block, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in do (arg list 3), which corresponds to parameter block, does not have " + 
                callmethod(var_Block, "asString", [0])._value + "."));
    curarg++;
    setLineNumber(78);    // compilenode identifier
    if (!Grace_isTrue(callmethod(var_Block, "match",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in finally (arg list 4), which corresponds to parameter endBlock, does not have " + 
                callmethod(var_Block, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("animation");
    setLineNumber(79);    // compilenode identifier
    var call36 = callmethodChecked(var_range__39__, "iterator", [0]);
    var var_it = call36;
    var call37 = callmethodChecked(var_prelude, "Iterator", [0]);
    if (!Grace_isTrue(callmethod(call37, "match", [1], var_it)))
      throw new GraceExceptionPacket(TypeErrorObject,
          new GraceString("value of def 'it' is not of type Iterator<T>"));
    setLineNumber(80);    // compilenode block
    var block38 = new GraceBlock(this, 80, 0);
    block38.real = function() {
      var call39 = callmethodChecked(var_it, "hasNext", [0]);
      return call39;
    };
    var block40 = new GraceBlock(this, 80, 0);
    block40.real = function() {
      var call41 = callmethodChecked(var_it, "next", [0]);
      var call42 = callmethodChecked(var_block, "apply", [1], call41);
      return call42;
    };
    setLineNumber(81);    // compilenode identifier
    onSelf = true;
    var call43 = callmethodChecked(this, "while()pausing()do()finally", [1, 1, 1, 1], block38, var_pauseTime, block40, var_endBlock);
    setLineNumber(80);    // return value
    if (!Grace_isTrue(callmethod(var_Done, "match", [1], call43)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("result of method for(1)pausing(1)do(1)finally(1) does not have " + 
                callmethod(var_Done, "asString", [0])._value + "."));
    return call43;
  };
  func34.paramTypes = [];
  func34.paramTypes.push([]);
  func34.paramTypes.push([]);
  func34.paramTypes.push([]);
  func34.paramTypes.push([type_Block, "endBlock"]);
  func34.paramCounts = [1, 1, 1, 1];
  this.methods["for()pausing()do()finally"] = func34;
  func34.definitionLine = 77;
  func34.definitionModule = "animation";
  setLineNumber(4);    // compilenode typedec
  // Type decl BoolBlock
  //   Type literal 
  var type45 = new GraceType("BoolBlock");
  type45.typeMethods.push("apply");
  var var_BoolBlock = type45;
  setLineNumber(80);    // compilenode method
  var func46 = function(argcv) {    // method BoolBlock
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for BoolBlock"));
    setModuleName("animation");
    // BoolBlock is a simple accessor - elide try ... catch
    setLineNumber(4);    // compilenode identifier
    return var_BoolBlock;
  };
  func46.paramCounts = [0];
  this.methods["BoolBlock"] = func46;
  func46.definitionLine = 80;
  func46.definitionModule = "animation";
  setLineNumber(5);    // compilenode typedec
  // Type decl NumberBlock
  //   Type literal 
  var type48 = new GraceType("NumberBlock");
  type48.typeMethods.push("apply");
  var var_NumberBlock = type48;
  setLineNumber(80);    // compilenode method
  var func49 = function(argcv) {    // method NumberBlock
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for NumberBlock"));
    setModuleName("animation");
    // NumberBlock is a simple accessor - elide try ... catch
    setLineNumber(5);    // compilenode identifier
    return var_NumberBlock;
  };
  func49.paramCounts = [0];
  this.methods["NumberBlock"] = func49;
  func49.definitionLine = 80;
  func49.definitionModule = "animation";
  setLineNumber(8);    // compilenode typedec
  // Type decl Animator
  //   Type literal 
  var type51 = new GraceType("Animator");
  type51.typeMethods.push("while()pausing()do");
  type51.typeMethods.push("while()pausing()do()finally");
  type51.typeMethods.push("while()pauseVarying()do");
  type51.typeMethods.push("for()pausing()do");
  type51.typeMethods.push("for()pausing()do()finally");
  var var_Animator = type51;
  setLineNumber(80);    // compilenode method
  var func52 = function(argcv) {    // method Animator
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Animator"));
    setModuleName("animation");
    // Animator is a simple accessor - elide try ... catch
    setLineNumber(8);    // compilenode identifier
    return var_Animator;
  };
  func52.paramCounts = [0];
  this.methods["Animator"] = func52;
  func52.definitionLine = 80;
  func52.definitionModule = "animation";
  return this;
}
gracecode_animation.imports = ['timer'];
if (typeof gctCache !== "undefined")
  gctCache['animation'] = "classes:\nconfidential:\nfresh-methods:\nmethodtypes-of:Animator:\n 1 for(range' : Sequence<T>)pausing(pauseTime : Unknown)do(block : Block<T, Done>) -> Done\n 1 for(range' : Sequence<T>)pausing(pauseTime : Unknown)do(block : Block<T, Done>)finally(endBlock : Block) -> Done\n 1 while(condition : BoolBlock)pauseVarying(timeBlock : NumberBlock)do(block : Block) -> Done\n 1 while(condition : BoolBlock)pausing(pauseTime : Number)do(block : Block) -> Done\n 1 while(condition : BoolBlock)pausing(pauseTime : Number)do(block : Block)finally(endBlock : Block) -> Done\nmethodtypes-of:BoolBlock:\n 1 apply -> Boolean\nmethodtypes-of:NumberBlock:\n 1 apply -> Number\nmodules:\n timer\npath:\n animation\npublic:\n Animator\n BoolBlock\n NumberBlock\n for()pausing()do\n for()pausing()do()finally\n while()pauseVarying()do\n while()pausing()do\n while()pausing()do()finally\ntypes:\n Animator\n BoolBlock\n NumberBlock\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["animation"] = [
    "import \"timer\" as timer",
    "",
    "// type of a block that takes no parameters and returns a boolean",
    "type BoolBlock = {apply -> Boolean}",
    "type NumberBlock = {apply -> Number}",
    "",
    "// type of object that can simulate parallel animations",
    "type Animator = {",
    "   // Repeatedly execute block while condition is true",
    "   while(condition:BoolBlock) pausing (pauseTime:Number) do (block:Block) -> Done",
    "",
    "   // Repeatedly execute block while condition is true, pausing pauseTime between iterations",
    "   // when condition fails, execute endBlock.",
    "   while (condition:BoolBlock) pausing (pauseTime:Number) do (block:Block) ",
    "                         finally(endBlock:Block) -> Done",
    "",
    "   // Repeatedly execute block while condition is true",
    "   // pausing variable amount of time (obtained by evaluating timeBlock) between iterations",
    "   // when condition fails, execute endBlock.",
    "   while(condition:BoolBlock) pauseVarying (timeBlock: NumberBlock) do (block:Block) -> Done",
    "",
    "   // Repeatedly execute block while condition is true",
    "   for<T> (range':Sequence<T>) pausing (pauseTime) do (block:Block<T,Done>) -> Done ",
    " ",
    "   // Repeatedly execute block while condition is true",
    "   // when condition fails, execute endBlock.",
    "   for<T> (range':Sequence<T>) pausing (pauseTime) do (block:Block<T,Done>) finally (endBlock:Block) -> Done",
    "",
    "}",
    "",
    "// Repeatedly execute block while condition is true",
    "method while(condition:BoolBlock) pausing (pauseTime:Number) do (block:Block) -> Done {",
    "  def id: Number = timer.every (pauseTime) do {",
    "     if (condition.apply) then {",
    "        block.apply",
    "     } else {",
    "        timer.stop (id)",
    "     }",
    "  }",
    "}",
    "",
    "// Repeatedly execute block while condition is true, pausing by pauseTime",
    "// between iterations. When condition fails, execute endBlock.",
    "method while (condition:BoolBlock) pausing (pauseTime:Number) do (block:Block) ",
    "                  finally(endBlock:Block) -> Done {",
    "  def id:Number = timer.every(pauseTime)do{",
    "     if(condition.apply) then {",
    "        block.apply",
    "     } else {",
    "        timer.stop(id)",
    "        endBlock.apply",
    "     }",
    "  }",
    "}",
    "",
    "// Repeatedly execute block while condition is true, pausing by pauseTime",
    "// between iterations. ",
    "method while(condition:BoolBlock) pauseVarying (timeBlock) do (block:Block)  -> Done {",
    "  if(condition.apply)then {",
    "     block.apply",
    "     timer.after(timeBlock.apply) do {",
    "         while (condition) pauseVarying (timeBlock) do (block)",
    "     }",
    "  }",
    "}",
    "",
    "// Repeatedly execute block for each value in range, pausing pauseTime between iterations.",
    "// block should take a numeric value as a parameter",
    "method for<T>(range':Sequence<T>) pausing (pauseTime: Number) do (block:Block<Number,Done>)-> Done {",
    "  def it = range'.iterator",
    "  while{it.hasNext} pausing (pauseTime) do {block.apply(it.next)}",
    "}",
    "",
    "// Repeatedly execute block for each value in range, pausing pauseTime between iterations.",
    "// block should take a numeric value as a parameter",
    "// when condition fails, execute endBlock.",
    "method for<T> (range':Sequence<T>) pausing (pauseTime) do(block:Block<Number,Done>)",
    "             finally(endBlock:Block) -> Done {",
    "  def it:Iterator<T> = range'.iterator",
    "  while{it.hasNext} pausing (pauseTime) do {block.apply(it.next)}",
    "         finally(endBlock)",
    "}" ];
}
if (typeof global !== "undefined")
  global.gracecode_animation = gracecode_animation;
if (typeof window !== "undefined")
  window.gracecode_animation = gracecode_animation;
