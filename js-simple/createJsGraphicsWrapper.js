"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_createJsGraphicsWrapper() {
  setModuleName("createJsGraphicsWrapper");
  this.definitionModule = "createJsGraphicsWrapper";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_createJsGraphicsWrapper_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_createJsGraphicsWrapper_outer0;
  setLineNumber(1);    // compilenode method
  var func1 = function(argcv) {    // method eventListener
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for eventListener"));
    setModuleName("createJsGraphicsWrapper");
    var obj2 = Grace_allocObject(GraceObject, "createJsGraphicsWrapper.identifierBinding‹eventListener›");
    obj2.definitionModule = "createJsGraphicsWrapper";
    obj2.definitionLine = 1;
    obj2.outer = this;
    var reader_createJsGraphicsWrapper_outer3 = function() {
      return this.outer;
    };
    obj2.methods["outer"] = reader_createJsGraphicsWrapper_outer3;
    var obj_init_2 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj2;
      var func4 = function(argcv) {    // method onClick(2)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_x = arguments[curarg];
        curarg++;
        var var_y = arguments[curarg];
        curarg++;
        if (argcv[0] !== 2)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onClick(2)"));
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(11);    // compilenode identifier
        var opresult7 = callmethodChecked(var_x, "@", [1], var_y);
        onSelf = true;
        var call8 = callmethodChecked(this, "mouseLocation':=", [1], opresult7);
        setLineNumber(12);    // compilenode call
        onSelf = true;
        var call9 = callmethodChecked(this, "clickBlock", [0]);
        var call10 = callmethodChecked(call9, "apply", [0]);
        return call10;
      };
      func4.paramCounts = [2];
      obj2.methods["onClick"] = func4;
      func4.definitionLine = 10;
      func4.definitionModule = "createJsGraphicsWrapper";
      var func11 = function(argcv) {    // method mouseLocation
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for mouseLocation"));
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(16);    // compilenode call
        onSelf = true;
        var call12 = callmethodChecked(this, "mouseLocation'", [0]);
        return call12;
      };
      func11.paramCounts = [0];
      obj2.methods["mouseLocation"] = func11;
      func11.definitionLine = 15;
      func11.definitionModule = "createJsGraphicsWrapper";
      var func13 = function(argcv) {    // method onClick:=(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_block = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onClick:=(1)"));
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(20);    // compilenode identifier
        onSelf = true;
        var call14 = callmethodChecked(this, "clickBlock:=", [1], var_block);
        return call14;
      };
      func13.paramCounts = [1];
      obj2.methods["onClick:="] = func13;
      func13.definitionLine = 19;
      func13.definitionModule = "createJsGraphicsWrapper";
      var func15 = function(argcv) {    // method onMouseUp(2)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_x = arguments[curarg];
        curarg++;
        var var_y = arguments[curarg];
        curarg++;
        if (argcv[0] !== 2)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onMouseUp(2)"));
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(24);    // compilenode identifier
        var opresult18 = callmethodChecked(var_x, "@", [1], var_y);
        onSelf = true;
        var call19 = callmethodChecked(this, "mouseLocation':=", [1], opresult18);
        setLineNumber(25);    // compilenode call
        onSelf = true;
        var call20 = callmethodChecked(this, "mouseUpBlock", [0]);
        var call21 = callmethodChecked(call20, "apply", [0]);
        return call21;
      };
      func15.paramCounts = [2];
      obj2.methods["onMouseUp"] = func15;
      func15.definitionLine = 23;
      func15.definitionModule = "createJsGraphicsWrapper";
      var func22 = function(argcv) {    // method onMouseUp:=(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_block = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onMouseUp:=(1)"));
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(29);    // compilenode identifier
        onSelf = true;
        var call23 = callmethodChecked(this, "mouseUpBlock:=", [1], var_block);
        return call23;
      };
      func22.paramCounts = [1];
      obj2.methods["onMouseUp:="] = func22;
      func22.definitionLine = 28;
      func22.definitionModule = "createJsGraphicsWrapper";
      var func24 = function(argcv) {    // method onMouseDown(2)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_x = arguments[curarg];
        curarg++;
        var var_y = arguments[curarg];
        curarg++;
        if (argcv[0] !== 2)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onMouseDown(2)"));
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(33);    // compilenode identifier
        var opresult27 = callmethodChecked(var_x, "@", [1], var_y);
        onSelf = true;
        var call28 = callmethodChecked(this, "mouseLocation':=", [1], opresult27);
        setLineNumber(34);    // compilenode call
        onSelf = true;
        var call29 = callmethodChecked(this, "mouseDownBlock", [0]);
        var call30 = callmethodChecked(call29, "apply", [0]);
        return call30;
      };
      func24.paramCounts = [2];
      obj2.methods["onMouseDown"] = func24;
      func24.definitionLine = 32;
      func24.definitionModule = "createJsGraphicsWrapper";
      var func31 = function(argcv) {    // method onMouseDown:=(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_block = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onMouseDown:=(1)"));
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(38);    // compilenode identifier
        onSelf = true;
        var call32 = callmethodChecked(this, "mouseDownBlock:=", [1], var_block);
        return call32;
      };
      func31.paramCounts = [1];
      obj2.methods["onMouseDown:="] = func31;
      func31.definitionLine = 37;
      func31.definitionModule = "createJsGraphicsWrapper";
      var func33 = function(argcv) {    // method onMouseOver(2)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_x = arguments[curarg];
        curarg++;
        var var_y = arguments[curarg];
        curarg++;
        if (argcv[0] !== 2)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onMouseOver(2)"));
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(42);    // compilenode identifier
        var opresult36 = callmethodChecked(var_x, "@", [1], var_y);
        onSelf = true;
        var call37 = callmethodChecked(this, "mouseLocation':=", [1], opresult36);
        setLineNumber(43);    // compilenode call
        onSelf = true;
        var call38 = callmethodChecked(this, "mouseOverBlock", [0]);
        var call39 = callmethodChecked(call38, "apply", [0]);
        return call39;
      };
      func33.paramCounts = [2];
      obj2.methods["onMouseOver"] = func33;
      func33.definitionLine = 41;
      func33.definitionModule = "createJsGraphicsWrapper";
      var func40 = function(argcv) {    // method onMouseOver:=(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_block = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onMouseOver:=(1)"));
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(47);    // compilenode identifier
        onSelf = true;
        var call41 = callmethodChecked(this, "mouseOverBlock:=", [1], var_block);
        return call41;
      };
      func40.paramCounts = [1];
      obj2.methods["onMouseOver:="] = func40;
      func40.definitionLine = 46;
      func40.definitionModule = "createJsGraphicsWrapper";
      var func42 = function(argcv) {    // method onPressMove(2)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_x = arguments[curarg];
        curarg++;
        var var_y = arguments[curarg];
        curarg++;
        if (argcv[0] !== 2)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onPressMove(2)"));
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(51);    // compilenode identifier
        var opresult45 = callmethodChecked(var_x, "@", [1], var_y);
        onSelf = true;
        var call46 = callmethodChecked(this, "mouseLocation':=", [1], opresult45);
        setLineNumber(52);    // compilenode call
        onSelf = true;
        var call47 = callmethodChecked(this, "pressMoveBlock", [0]);
        var call48 = callmethodChecked(call47, "apply", [0]);
        return call48;
      };
      func42.paramCounts = [2];
      obj2.methods["onPressMove"] = func42;
      func42.definitionLine = 50;
      func42.definitionModule = "createJsGraphicsWrapper";
      var func49 = function(argcv) {    // method onPressMove:=(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_block = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onPressMove:=(1)"));
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(56);    // compilenode identifier
        onSelf = true;
        var call50 = callmethodChecked(this, "pressMoveBlock:=", [1], var_block);
        return call50;
      };
      func49.paramCounts = [1];
      obj2.methods["onPressMove:="] = func49;
      func49.definitionLine = 55;
      func49.definitionModule = "createJsGraphicsWrapper";
      var func51 = function(argcv) {    // method onMouseExit
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onMouseExit"));
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(60);    // compilenode call
        onSelf = true;
        var call52 = callmethodChecked(this, "mouseExitBlock", [0]);
        var call53 = callmethodChecked(call52, "apply", [0]);
        return call53;
      };
      func51.paramCounts = [0];
      obj2.methods["onMouseExit"] = func51;
      func51.definitionLine = 59;
      func51.definitionModule = "createJsGraphicsWrapper";
      var func54 = function(argcv) {    // method onMouseExit:=(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_block = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onMouseExit:=(1)"));
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(64);    // compilenode identifier
        onSelf = true;
        var call55 = callmethodChecked(this, "mouseExitBlock:=", [1], var_block);
        return call55;
      };
      func54.paramCounts = [1];
      obj2.methods["onMouseExit:="] = func54;
      func54.definitionLine = 63;
      func54.definitionModule = "createJsGraphicsWrapper";
      var func56 = function(argcv) {    // method addMouseUpListener(2)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_obj = arguments[curarg];
        curarg++;
        var var_listener = arguments[curarg];
        curarg++;
        if (argcv[0] !== 2)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addMouseUpListener(2)"));
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(68);    // compilenode call
           // start native code from line 68
        var result = GraceDone;
        
      var obj = var_obj;
      obj.on("pressup", function(event) {
        minigrace.trapErrors(function() {
          callmethod(var_listener, "onMouseUp", [2], new GraceNum(event.stageX),
                new GraceNum(event.stageY));
        });
      });
    
        var nat57 = result;
           // end native code insertion
        return nat57;
      };
      func56.paramCounts = [2];
      obj2.methods["addMouseUpListener"] = func56;
      func56.definitionLine = 67;
      func56.definitionModule = "createJsGraphicsWrapper";
      var func58 = function(argcv) {    // method addMouseDownListener(2)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_obj = arguments[curarg];
        curarg++;
        var var_listener = arguments[curarg];
        curarg++;
        if (argcv[0] !== 2)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addMouseDownListener(2)"));
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(80);    // compilenode call
           // start native code from line 80
        var result = GraceDone;
        
      var obj = var_obj;
      obj.on("pressup", function(event) {
        minigrace.trapErrors(function() {
          callmethod(var_listener, "onMouseDown", [2], new GraceNum(event.stageX),
                new GraceNum(event.stageY));
        });
      });
    
        var nat59 = result;
           // end native code insertion
        return nat59;
      };
      func58.paramCounts = [2];
      obj2.methods["addMouseDownListener"] = func58;
      func58.definitionLine = 79;
      func58.definitionModule = "createJsGraphicsWrapper";
      var func60 = function(argcv) {    // method addMouseOverListener(2)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_obj = arguments[curarg];
        curarg++;
        var var_listener = arguments[curarg];
        curarg++;
        if (argcv[0] !== 2)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addMouseOverListener(2)"));
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(92);    // compilenode call
           // start native code from line 92
        var result = GraceDone;
        
      var obj = var_obj;
      obj.on("mouseover", function(event) {
        minigrace.trapErrors(function() {
          callmethod(var_listener, "onMouseOver", [2], new GraceNum(event.stageX),
                new GraceNum(event.stageY));
        });
      });
    
        var nat61 = result;
           // end native code insertion
        return nat61;
      };
      func60.paramCounts = [2];
      obj2.methods["addMouseOverListener"] = func60;
      func60.definitionLine = 91;
      func60.definitionModule = "createJsGraphicsWrapper";
      var func62 = function(argcv) {    // method addClickListener(2)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_obj = arguments[curarg];
        curarg++;
        var var_listener = arguments[curarg];
        curarg++;
        if (argcv[0] !== 2)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addClickListener(2)"));
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(104);    // compilenode call
           // start native code from line 104
        var result = GraceDone;
        
      var shape = var_obj;
      shape.on("click", function(event) {
        minigrace.trapErrors(function() {
          callmethod(var_listener, "onClick", [2], new GraceNum(event.stageX),
                new GraceNum(event.stageY));
        });
      });
    
        var nat63 = result;
           // end native code insertion
        return nat63;
      };
      func62.paramCounts = [2];
      obj2.methods["addClickListener"] = func62;
      func62.definitionLine = 103;
      func62.definitionModule = "createJsGraphicsWrapper";
      var func64 = function(argcv) {    // method addPressMoveListener(2)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_obj = arguments[curarg];
        curarg++;
        var var_listener = arguments[curarg];
        curarg++;
        if (argcv[0] !== 2)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addPressMoveListener(2)"));
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(116);    // compilenode call
           // start native code from line 116
        var result = GraceDone;
        
      var shape = var_obj;
      shape.on("pressmove", function(event) {
        minigrace.trapErrors(function() {
          callmethod(var_listener, "onPressMove", [2], new GraceNum(event.stageX),
                new GraceNum(event.stageY));
        });
      });
    
        var nat65 = result;
           // end native code insertion
        return nat65;
      };
      func64.paramCounts = [2];
      obj2.methods["addPressMoveListener"] = func64;
      func64.definitionLine = 115;
      func64.definitionModule = "createJsGraphicsWrapper";
      var func66 = function(argcv) {    // method addStageDownListener(2)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_stage = arguments[curarg];
        curarg++;
        var var_listener = arguments[curarg];
        curarg++;
        if (argcv[0] !== 2)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addStageDownListener(2)"));
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(128);    // compilenode call
           // start native code from line 128
        var result = GraceDone;
        
      var_stage.on("stagemousedown", function(event) {
        minigrace.trapErrors(function() {
          callmethod(var_listener, "onMouseDown", [2], new GraceNum(event.stageX),
                new GraceNum(event.stageY));
        });
      });
    
        var nat67 = result;
           // end native code insertion
        return nat67;
      };
      func66.paramCounts = [2];
      obj2.methods["addStageDownListener"] = func66;
      func66.definitionLine = 127;
      func66.definitionModule = "createJsGraphicsWrapper";
      var func68 = function(argcv) {    // method addStageUpListener(2)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_stage = arguments[curarg];
        curarg++;
        var var_listener = arguments[curarg];
        curarg++;
        if (argcv[0] !== 2)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addStageUpListener(2)"));
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(139);    // compilenode call
           // start native code from line 139
        var result = GraceDone;
        
      var_stage.on("stagemouseup", function(event) {
        minigrace.trapErrors(function() {
          callmethod(var_listener, "onMouseUp", [2], new GraceNum(event.stageX),
                new GraceNum(event.stageY));
        });
      });
    
        var nat69 = result;
           // end native code insertion
        return nat69;
      };
      func68.paramCounts = [2];
      obj2.methods["addStageUpListener"] = func68;
      func68.definitionLine = 138;
      func68.definitionModule = "createJsGraphicsWrapper";
      var func70 = function(argcv) {    // method addMouseExitListener(2)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_stage = arguments[curarg];
        curarg++;
        var var_listener = arguments[curarg];
        curarg++;
        if (argcv[0] !== 2)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addMouseExitListener(2)"));
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(150);    // compilenode call
           // start native code from line 150
        var result = GraceDone;
        
      var_stage.on("mouseleave", function(event) {
        minigrace.trapErrors(function() {
          callmethod(var_listener, "onMouseExit", [0]);
        });
      });
    
        var nat71 = result;
           // end native code insertion
        return nat71;
      };
      func70.paramCounts = [2];
      obj2.methods["addMouseExitListener"] = func70;
      func70.definitionLine = 149;
      func70.definitionModule = "createJsGraphicsWrapper";
      var func72 = function(argcv) {    // method addStageMouseMoveListener(2)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_stage = arguments[curarg];
        curarg++;
        var var_listener = arguments[curarg];
        curarg++;
        if (argcv[0] !== 2)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addStageMouseMoveListener(2)"));
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(160);    // compilenode call
           // start native code from line 160
        var result = GraceDone;
        
      var_stage.on("stagemousemove", function(event) {
        minigrace.trapErrors(function() {
          callmethod(var_listener, "onMouseOver", [2], new GraceNum(event.stageX),
                new GraceNum(event.stageY));
        });
      });
    
        var nat73 = result;
           // end native code insertion
        return nat73;
      };
      func72.paramCounts = [2];
      obj2.methods["addStageMouseMoveListener"] = func72;
      func72.definitionLine = 159;
      func72.definitionModule = "createJsGraphicsWrapper";
      setLineNumber(2);    // compilenode block
      var block74 = new GraceBlock(this, 2, 0);
      block74.real = function() {
        return GraceDone;
      };
      obj2.data["clickBlock"] = block74;
      var reader_createJsGraphicsWrapper_clickBlock75 = function() {
        return this.data["clickBlock"];
      };
      obj2.methods["clickBlock"] = reader_createJsGraphicsWrapper_clickBlock75;
      obj2.data["clickBlock"] = block74;
      var writer_createJsGraphicsWrapper_clickBlock75 = function(argcv, o) {
        this.data["clickBlock"] = o;
        return GraceDone;
      };
      obj2.methods["clickBlock:="] = writer_createJsGraphicsWrapper_clickBlock75;
      reader_createJsGraphicsWrapper_clickBlock75.confidential = true;
      writer_createJsGraphicsWrapper_clickBlock75.confidential = true;
      obj2.mutable = true;
      setLineNumber(3);    // compilenode block
      var block76 = new GraceBlock(this, 3, 0);
      block76.real = function() {
        return GraceDone;
      };
      obj2.data["mouseUpBlock"] = block76;
      var reader_createJsGraphicsWrapper_mouseUpBlock77 = function() {
        return this.data["mouseUpBlock"];
      };
      obj2.methods["mouseUpBlock"] = reader_createJsGraphicsWrapper_mouseUpBlock77;
      obj2.data["mouseUpBlock"] = block76;
      var writer_createJsGraphicsWrapper_mouseUpBlock77 = function(argcv, o) {
        this.data["mouseUpBlock"] = o;
        return GraceDone;
      };
      obj2.methods["mouseUpBlock:="] = writer_createJsGraphicsWrapper_mouseUpBlock77;
      reader_createJsGraphicsWrapper_mouseUpBlock77.confidential = true;
      writer_createJsGraphicsWrapper_mouseUpBlock77.confidential = true;
      obj2.mutable = true;
      setLineNumber(4);    // compilenode block
      var block78 = new GraceBlock(this, 4, 0);
      block78.real = function() {
        return GraceDone;
      };
      obj2.data["mouseDownBlock"] = block78;
      var reader_createJsGraphicsWrapper_mouseDownBlock79 = function() {
        return this.data["mouseDownBlock"];
      };
      obj2.methods["mouseDownBlock"] = reader_createJsGraphicsWrapper_mouseDownBlock79;
      obj2.data["mouseDownBlock"] = block78;
      var writer_createJsGraphicsWrapper_mouseDownBlock79 = function(argcv, o) {
        this.data["mouseDownBlock"] = o;
        return GraceDone;
      };
      obj2.methods["mouseDownBlock:="] = writer_createJsGraphicsWrapper_mouseDownBlock79;
      reader_createJsGraphicsWrapper_mouseDownBlock79.confidential = true;
      writer_createJsGraphicsWrapper_mouseDownBlock79.confidential = true;
      obj2.mutable = true;
      setLineNumber(5);    // compilenode block
      var block80 = new GraceBlock(this, 5, 0);
      block80.real = function() {
        return GraceDone;
      };
      obj2.data["pressMoveBlock"] = block80;
      var reader_createJsGraphicsWrapper_pressMoveBlock81 = function() {
        return this.data["pressMoveBlock"];
      };
      obj2.methods["pressMoveBlock"] = reader_createJsGraphicsWrapper_pressMoveBlock81;
      obj2.data["pressMoveBlock"] = block80;
      var writer_createJsGraphicsWrapper_pressMoveBlock81 = function(argcv, o) {
        this.data["pressMoveBlock"] = o;
        return GraceDone;
      };
      obj2.methods["pressMoveBlock:="] = writer_createJsGraphicsWrapper_pressMoveBlock81;
      reader_createJsGraphicsWrapper_pressMoveBlock81.confidential = true;
      writer_createJsGraphicsWrapper_pressMoveBlock81.confidential = true;
      obj2.mutable = true;
      setLineNumber(6);    // compilenode block
      var block82 = new GraceBlock(this, 6, 0);
      block82.real = function() {
        return GraceDone;
      };
      obj2.data["mouseOverBlock"] = block82;
      var reader_createJsGraphicsWrapper_mouseOverBlock83 = function() {
        return this.data["mouseOverBlock"];
      };
      obj2.methods["mouseOverBlock"] = reader_createJsGraphicsWrapper_mouseOverBlock83;
      obj2.data["mouseOverBlock"] = block82;
      var writer_createJsGraphicsWrapper_mouseOverBlock83 = function(argcv, o) {
        this.data["mouseOverBlock"] = o;
        return GraceDone;
      };
      obj2.methods["mouseOverBlock:="] = writer_createJsGraphicsWrapper_mouseOverBlock83;
      reader_createJsGraphicsWrapper_mouseOverBlock83.confidential = true;
      writer_createJsGraphicsWrapper_mouseOverBlock83.confidential = true;
      obj2.mutable = true;
      setLineNumber(7);    // compilenode block
      var block84 = new GraceBlock(this, 7, 0);
      block84.real = function() {
        return GraceDone;
      };
      obj2.data["mouseExitBlock"] = block84;
      var reader_createJsGraphicsWrapper_mouseExitBlock85 = function() {
        return this.data["mouseExitBlock"];
      };
      obj2.methods["mouseExitBlock"] = reader_createJsGraphicsWrapper_mouseExitBlock85;
      obj2.data["mouseExitBlock"] = block84;
      var writer_createJsGraphicsWrapper_mouseExitBlock85 = function(argcv, o) {
        this.data["mouseExitBlock"] = o;
        return GraceDone;
      };
      obj2.methods["mouseExitBlock:="] = writer_createJsGraphicsWrapper_mouseExitBlock85;
      reader_createJsGraphicsWrapper_mouseExitBlock85.confidential = true;
      writer_createJsGraphicsWrapper_mouseExitBlock85.confidential = true;
      obj2.mutable = true;
      setLineNumber(8);    // compilenode num
      var opresult88 = callmethodChecked(new GraceNum(0), "@", [1], new GraceNum(0));
      obj2.data["mouseLocation'"] = opresult88;
      var reader_createJsGraphicsWrapper_mouseLocation__39__89 = function() {
        return this.data["mouseLocation'"];
      };
      obj2.methods["mouseLocation'"] = reader_createJsGraphicsWrapper_mouseLocation__39__89;
      obj2.data["mouseLocation'"] = opresult88;
      var writer_createJsGraphicsWrapper_mouseLocation__39__89 = function(argcv, o) {
        this.data["mouseLocation'"] = o;
        return GraceDone;
      };
      obj2.methods["mouseLocation':="] = writer_createJsGraphicsWrapper_mouseLocation__39__89;
      reader_createJsGraphicsWrapper_mouseLocation__39__89.confidential = true;
      writer_createJsGraphicsWrapper_mouseLocation__39__89.confidential = true;
      obj2.mutable = true;
      superDepth = origSuperDepth;
    };
    obj_init_2.apply(obj2, []);
    return obj2;
  };
  func1.paramCounts = [0];
  this.methods["eventListener"] = func1;
  func1.definitionLine = 1;
  func1.definitionModule = "createJsGraphicsWrapper";
    var func90 = function(argcv) {    // method eventListener()object
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      // Start argument processing
      curarg = 1;
      // End argument processing
      setModuleName("createJsGraphicsWrapper");
      var returnTarget = invocationCount;
      invocationCount++;
      var obj91 = Grace_allocObject(GraceObject, "eventListener");
      obj91.definitionModule = "createJsGraphicsWrapper";
      obj91.definitionLine = 1;
      var inho91 = inheritingObject;
      while (inho91.superobj) inho91 = inho91.superobj;
      inho91.superobj = obj91;
      obj91.data = inheritingObject.data;
      if (inheritingObject.hasOwnProperty('_value'))
        obj91._value = inheritingObject._value;
      obj91.outer = this;
      var reader_createJsGraphicsWrapper_outer92 = function() {
        return this.outer;
      };
      obj91.methods["outer"] = reader_createJsGraphicsWrapper_outer92;
      var obj_init_91 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj91;
        var func93 = function(argcv) {    // method onClick(2)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_x = arguments[curarg];
          curarg++;
          var var_y = arguments[curarg];
          curarg++;
          if (argcv[0] !== 2)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onClick(2)"));
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(11);    // compilenode identifier
          var opresult96 = callmethodChecked(var_x, "@", [1], var_y);
          onSelf = true;
          var call97 = callmethodChecked(this, "mouseLocation':=", [1], opresult96);
          setLineNumber(12);    // compilenode call
          onSelf = true;
          var call98 = callmethodChecked(this, "clickBlock", [0]);
          var call99 = callmethodChecked(call98, "apply", [0]);
          return call99;
        };
        func93.paramCounts = [2];
        obj91.methods["onClick"] = func93;
        func93.definitionLine = 10;
        func93.definitionModule = "createJsGraphicsWrapper";
        var func100 = function(argcv) {    // method mouseLocation
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for mouseLocation"));
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(16);    // compilenode call
          onSelf = true;
          var call101 = callmethodChecked(this, "mouseLocation'", [0]);
          return call101;
        };
        func100.paramCounts = [0];
        obj91.methods["mouseLocation"] = func100;
        func100.definitionLine = 15;
        func100.definitionModule = "createJsGraphicsWrapper";
        var func102 = function(argcv) {    // method onClick:=(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_block = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onClick:=(1)"));
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(20);    // compilenode identifier
          onSelf = true;
          var call103 = callmethodChecked(this, "clickBlock:=", [1], var_block);
          return call103;
        };
        func102.paramCounts = [1];
        obj91.methods["onClick:="] = func102;
        func102.definitionLine = 19;
        func102.definitionModule = "createJsGraphicsWrapper";
        var func104 = function(argcv) {    // method onMouseUp(2)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_x = arguments[curarg];
          curarg++;
          var var_y = arguments[curarg];
          curarg++;
          if (argcv[0] !== 2)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onMouseUp(2)"));
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(24);    // compilenode identifier
          var opresult107 = callmethodChecked(var_x, "@", [1], var_y);
          onSelf = true;
          var call108 = callmethodChecked(this, "mouseLocation':=", [1], opresult107);
          setLineNumber(25);    // compilenode call
          onSelf = true;
          var call109 = callmethodChecked(this, "mouseUpBlock", [0]);
          var call110 = callmethodChecked(call109, "apply", [0]);
          return call110;
        };
        func104.paramCounts = [2];
        obj91.methods["onMouseUp"] = func104;
        func104.definitionLine = 23;
        func104.definitionModule = "createJsGraphicsWrapper";
        var func111 = function(argcv) {    // method onMouseUp:=(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_block = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onMouseUp:=(1)"));
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(29);    // compilenode identifier
          onSelf = true;
          var call112 = callmethodChecked(this, "mouseUpBlock:=", [1], var_block);
          return call112;
        };
        func111.paramCounts = [1];
        obj91.methods["onMouseUp:="] = func111;
        func111.definitionLine = 28;
        func111.definitionModule = "createJsGraphicsWrapper";
        var func113 = function(argcv) {    // method onMouseDown(2)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_x = arguments[curarg];
          curarg++;
          var var_y = arguments[curarg];
          curarg++;
          if (argcv[0] !== 2)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onMouseDown(2)"));
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(33);    // compilenode identifier
          var opresult116 = callmethodChecked(var_x, "@", [1], var_y);
          onSelf = true;
          var call117 = callmethodChecked(this, "mouseLocation':=", [1], opresult116);
          setLineNumber(34);    // compilenode call
          onSelf = true;
          var call118 = callmethodChecked(this, "mouseDownBlock", [0]);
          var call119 = callmethodChecked(call118, "apply", [0]);
          return call119;
        };
        func113.paramCounts = [2];
        obj91.methods["onMouseDown"] = func113;
        func113.definitionLine = 32;
        func113.definitionModule = "createJsGraphicsWrapper";
        var func120 = function(argcv) {    // method onMouseDown:=(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_block = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onMouseDown:=(1)"));
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(38);    // compilenode identifier
          onSelf = true;
          var call121 = callmethodChecked(this, "mouseDownBlock:=", [1], var_block);
          return call121;
        };
        func120.paramCounts = [1];
        obj91.methods["onMouseDown:="] = func120;
        func120.definitionLine = 37;
        func120.definitionModule = "createJsGraphicsWrapper";
        var func122 = function(argcv) {    // method onMouseOver(2)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_x = arguments[curarg];
          curarg++;
          var var_y = arguments[curarg];
          curarg++;
          if (argcv[0] !== 2)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onMouseOver(2)"));
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(42);    // compilenode identifier
          var opresult125 = callmethodChecked(var_x, "@", [1], var_y);
          onSelf = true;
          var call126 = callmethodChecked(this, "mouseLocation':=", [1], opresult125);
          setLineNumber(43);    // compilenode call
          onSelf = true;
          var call127 = callmethodChecked(this, "mouseOverBlock", [0]);
          var call128 = callmethodChecked(call127, "apply", [0]);
          return call128;
        };
        func122.paramCounts = [2];
        obj91.methods["onMouseOver"] = func122;
        func122.definitionLine = 41;
        func122.definitionModule = "createJsGraphicsWrapper";
        var func129 = function(argcv) {    // method onMouseOver:=(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_block = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onMouseOver:=(1)"));
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(47);    // compilenode identifier
          onSelf = true;
          var call130 = callmethodChecked(this, "mouseOverBlock:=", [1], var_block);
          return call130;
        };
        func129.paramCounts = [1];
        obj91.methods["onMouseOver:="] = func129;
        func129.definitionLine = 46;
        func129.definitionModule = "createJsGraphicsWrapper";
        var func131 = function(argcv) {    // method onPressMove(2)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_x = arguments[curarg];
          curarg++;
          var var_y = arguments[curarg];
          curarg++;
          if (argcv[0] !== 2)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onPressMove(2)"));
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(51);    // compilenode identifier
          var opresult134 = callmethodChecked(var_x, "@", [1], var_y);
          onSelf = true;
          var call135 = callmethodChecked(this, "mouseLocation':=", [1], opresult134);
          setLineNumber(52);    // compilenode call
          onSelf = true;
          var call136 = callmethodChecked(this, "pressMoveBlock", [0]);
          var call137 = callmethodChecked(call136, "apply", [0]);
          return call137;
        };
        func131.paramCounts = [2];
        obj91.methods["onPressMove"] = func131;
        func131.definitionLine = 50;
        func131.definitionModule = "createJsGraphicsWrapper";
        var func138 = function(argcv) {    // method onPressMove:=(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_block = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onPressMove:=(1)"));
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(56);    // compilenode identifier
          onSelf = true;
          var call139 = callmethodChecked(this, "pressMoveBlock:=", [1], var_block);
          return call139;
        };
        func138.paramCounts = [1];
        obj91.methods["onPressMove:="] = func138;
        func138.definitionLine = 55;
        func138.definitionModule = "createJsGraphicsWrapper";
        var func140 = function(argcv) {    // method onMouseExit
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onMouseExit"));
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(60);    // compilenode call
          onSelf = true;
          var call141 = callmethodChecked(this, "mouseExitBlock", [0]);
          var call142 = callmethodChecked(call141, "apply", [0]);
          return call142;
        };
        func140.paramCounts = [0];
        obj91.methods["onMouseExit"] = func140;
        func140.definitionLine = 59;
        func140.definitionModule = "createJsGraphicsWrapper";
        var func143 = function(argcv) {    // method onMouseExit:=(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_block = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onMouseExit:=(1)"));
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(64);    // compilenode identifier
          onSelf = true;
          var call144 = callmethodChecked(this, "mouseExitBlock:=", [1], var_block);
          return call144;
        };
        func143.paramCounts = [1];
        obj91.methods["onMouseExit:="] = func143;
        func143.definitionLine = 63;
        func143.definitionModule = "createJsGraphicsWrapper";
        var func145 = function(argcv) {    // method addMouseUpListener(2)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_obj = arguments[curarg];
          curarg++;
          var var_listener = arguments[curarg];
          curarg++;
          if (argcv[0] !== 2)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addMouseUpListener(2)"));
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(68);    // compilenode call
             // start native code from line 68
          var result = GraceDone;
          
      var obj = var_obj;
      obj.on("pressup", function(event) {
        minigrace.trapErrors(function() {
          callmethod(var_listener, "onMouseUp", [2], new GraceNum(event.stageX),
                new GraceNum(event.stageY));
        });
      });
    
          var nat146 = result;
             // end native code insertion
          return nat146;
        };
        func145.paramCounts = [2];
        obj91.methods["addMouseUpListener"] = func145;
        func145.definitionLine = 67;
        func145.definitionModule = "createJsGraphicsWrapper";
        var func147 = function(argcv) {    // method addMouseDownListener(2)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_obj = arguments[curarg];
          curarg++;
          var var_listener = arguments[curarg];
          curarg++;
          if (argcv[0] !== 2)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addMouseDownListener(2)"));
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(80);    // compilenode call
             // start native code from line 80
          var result = GraceDone;
          
      var obj = var_obj;
      obj.on("pressup", function(event) {
        minigrace.trapErrors(function() {
          callmethod(var_listener, "onMouseDown", [2], new GraceNum(event.stageX),
                new GraceNum(event.stageY));
        });
      });
    
          var nat148 = result;
             // end native code insertion
          return nat148;
        };
        func147.paramCounts = [2];
        obj91.methods["addMouseDownListener"] = func147;
        func147.definitionLine = 79;
        func147.definitionModule = "createJsGraphicsWrapper";
        var func149 = function(argcv) {    // method addMouseOverListener(2)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_obj = arguments[curarg];
          curarg++;
          var var_listener = arguments[curarg];
          curarg++;
          if (argcv[0] !== 2)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addMouseOverListener(2)"));
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(92);    // compilenode call
             // start native code from line 92
          var result = GraceDone;
          
      var obj = var_obj;
      obj.on("mouseover", function(event) {
        minigrace.trapErrors(function() {
          callmethod(var_listener, "onMouseOver", [2], new GraceNum(event.stageX),
                new GraceNum(event.stageY));
        });
      });
    
          var nat150 = result;
             // end native code insertion
          return nat150;
        };
        func149.paramCounts = [2];
        obj91.methods["addMouseOverListener"] = func149;
        func149.definitionLine = 91;
        func149.definitionModule = "createJsGraphicsWrapper";
        var func151 = function(argcv) {    // method addClickListener(2)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_obj = arguments[curarg];
          curarg++;
          var var_listener = arguments[curarg];
          curarg++;
          if (argcv[0] !== 2)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addClickListener(2)"));
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(104);    // compilenode call
             // start native code from line 104
          var result = GraceDone;
          
      var shape = var_obj;
      shape.on("click", function(event) {
        minigrace.trapErrors(function() {
          callmethod(var_listener, "onClick", [2], new GraceNum(event.stageX),
                new GraceNum(event.stageY));
        });
      });
    
          var nat152 = result;
             // end native code insertion
          return nat152;
        };
        func151.paramCounts = [2];
        obj91.methods["addClickListener"] = func151;
        func151.definitionLine = 103;
        func151.definitionModule = "createJsGraphicsWrapper";
        var func153 = function(argcv) {    // method addPressMoveListener(2)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_obj = arguments[curarg];
          curarg++;
          var var_listener = arguments[curarg];
          curarg++;
          if (argcv[0] !== 2)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addPressMoveListener(2)"));
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(116);    // compilenode call
             // start native code from line 116
          var result = GraceDone;
          
      var shape = var_obj;
      shape.on("pressmove", function(event) {
        minigrace.trapErrors(function() {
          callmethod(var_listener, "onPressMove", [2], new GraceNum(event.stageX),
                new GraceNum(event.stageY));
        });
      });
    
          var nat154 = result;
             // end native code insertion
          return nat154;
        };
        func153.paramCounts = [2];
        obj91.methods["addPressMoveListener"] = func153;
        func153.definitionLine = 115;
        func153.definitionModule = "createJsGraphicsWrapper";
        var func155 = function(argcv) {    // method addStageDownListener(2)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_stage = arguments[curarg];
          curarg++;
          var var_listener = arguments[curarg];
          curarg++;
          if (argcv[0] !== 2)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addStageDownListener(2)"));
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(128);    // compilenode call
             // start native code from line 128
          var result = GraceDone;
          
      var_stage.on("stagemousedown", function(event) {
        minigrace.trapErrors(function() {
          callmethod(var_listener, "onMouseDown", [2], new GraceNum(event.stageX),
                new GraceNum(event.stageY));
        });
      });
    
          var nat156 = result;
             // end native code insertion
          return nat156;
        };
        func155.paramCounts = [2];
        obj91.methods["addStageDownListener"] = func155;
        func155.definitionLine = 127;
        func155.definitionModule = "createJsGraphicsWrapper";
        var func157 = function(argcv) {    // method addStageUpListener(2)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_stage = arguments[curarg];
          curarg++;
          var var_listener = arguments[curarg];
          curarg++;
          if (argcv[0] !== 2)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addStageUpListener(2)"));
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(139);    // compilenode call
             // start native code from line 139
          var result = GraceDone;
          
      var_stage.on("stagemouseup", function(event) {
        minigrace.trapErrors(function() {
          callmethod(var_listener, "onMouseUp", [2], new GraceNum(event.stageX),
                new GraceNum(event.stageY));
        });
      });
    
          var nat158 = result;
             // end native code insertion
          return nat158;
        };
        func157.paramCounts = [2];
        obj91.methods["addStageUpListener"] = func157;
        func157.definitionLine = 138;
        func157.definitionModule = "createJsGraphicsWrapper";
        var func159 = function(argcv) {    // method addMouseExitListener(2)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_stage = arguments[curarg];
          curarg++;
          var var_listener = arguments[curarg];
          curarg++;
          if (argcv[0] !== 2)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addMouseExitListener(2)"));
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(150);    // compilenode call
             // start native code from line 150
          var result = GraceDone;
          
      var_stage.on("mouseleave", function(event) {
        minigrace.trapErrors(function() {
          callmethod(var_listener, "onMouseExit", [0]);
        });
      });
    
          var nat160 = result;
             // end native code insertion
          return nat160;
        };
        func159.paramCounts = [2];
        obj91.methods["addMouseExitListener"] = func159;
        func159.definitionLine = 149;
        func159.definitionModule = "createJsGraphicsWrapper";
        var func161 = function(argcv) {    // method addStageMouseMoveListener(2)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_stage = arguments[curarg];
          curarg++;
          var var_listener = arguments[curarg];
          curarg++;
          if (argcv[0] !== 2)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addStageMouseMoveListener(2)"));
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(160);    // compilenode call
             // start native code from line 160
          var result = GraceDone;
          
      var_stage.on("stagemousemove", function(event) {
        minigrace.trapErrors(function() {
          callmethod(var_listener, "onMouseOver", [2], new GraceNum(event.stageX),
                new GraceNum(event.stageY));
        });
      });
    
          var nat162 = result;
             // end native code insertion
          return nat162;
        };
        func161.paramCounts = [2];
        obj91.methods["addStageMouseMoveListener"] = func161;
        func161.definitionLine = 159;
        func161.definitionModule = "createJsGraphicsWrapper";
        setLineNumber(2);    // compilenode block
        var block163 = new GraceBlock(this, 2, 0);
        block163.real = function() {
          return GraceDone;
        };
        obj91.data["clickBlock"] = block163;
        var reader_createJsGraphicsWrapper_clickBlock164 = function() {
          return this.data["clickBlock"];
        };
        obj91.methods["clickBlock"] = reader_createJsGraphicsWrapper_clickBlock164;
        obj91.data["clickBlock"] = block163;
        var writer_createJsGraphicsWrapper_clickBlock164 = function(argcv, o) {
          this.data["clickBlock"] = o;
          return GraceDone;
        };
        obj91.methods["clickBlock:="] = writer_createJsGraphicsWrapper_clickBlock164;
        reader_createJsGraphicsWrapper_clickBlock164.confidential = true;
        writer_createJsGraphicsWrapper_clickBlock164.confidential = true;
        obj91.mutable = true;
        setLineNumber(3);    // compilenode block
        var block165 = new GraceBlock(this, 3, 0);
        block165.real = function() {
          return GraceDone;
        };
        obj91.data["mouseUpBlock"] = block165;
        var reader_createJsGraphicsWrapper_mouseUpBlock166 = function() {
          return this.data["mouseUpBlock"];
        };
        obj91.methods["mouseUpBlock"] = reader_createJsGraphicsWrapper_mouseUpBlock166;
        obj91.data["mouseUpBlock"] = block165;
        var writer_createJsGraphicsWrapper_mouseUpBlock166 = function(argcv, o) {
          this.data["mouseUpBlock"] = o;
          return GraceDone;
        };
        obj91.methods["mouseUpBlock:="] = writer_createJsGraphicsWrapper_mouseUpBlock166;
        reader_createJsGraphicsWrapper_mouseUpBlock166.confidential = true;
        writer_createJsGraphicsWrapper_mouseUpBlock166.confidential = true;
        obj91.mutable = true;
        setLineNumber(4);    // compilenode block
        var block167 = new GraceBlock(this, 4, 0);
        block167.real = function() {
          return GraceDone;
        };
        obj91.data["mouseDownBlock"] = block167;
        var reader_createJsGraphicsWrapper_mouseDownBlock168 = function() {
          return this.data["mouseDownBlock"];
        };
        obj91.methods["mouseDownBlock"] = reader_createJsGraphicsWrapper_mouseDownBlock168;
        obj91.data["mouseDownBlock"] = block167;
        var writer_createJsGraphicsWrapper_mouseDownBlock168 = function(argcv, o) {
          this.data["mouseDownBlock"] = o;
          return GraceDone;
        };
        obj91.methods["mouseDownBlock:="] = writer_createJsGraphicsWrapper_mouseDownBlock168;
        reader_createJsGraphicsWrapper_mouseDownBlock168.confidential = true;
        writer_createJsGraphicsWrapper_mouseDownBlock168.confidential = true;
        obj91.mutable = true;
        setLineNumber(5);    // compilenode block
        var block169 = new GraceBlock(this, 5, 0);
        block169.real = function() {
          return GraceDone;
        };
        obj91.data["pressMoveBlock"] = block169;
        var reader_createJsGraphicsWrapper_pressMoveBlock170 = function() {
          return this.data["pressMoveBlock"];
        };
        obj91.methods["pressMoveBlock"] = reader_createJsGraphicsWrapper_pressMoveBlock170;
        obj91.data["pressMoveBlock"] = block169;
        var writer_createJsGraphicsWrapper_pressMoveBlock170 = function(argcv, o) {
          this.data["pressMoveBlock"] = o;
          return GraceDone;
        };
        obj91.methods["pressMoveBlock:="] = writer_createJsGraphicsWrapper_pressMoveBlock170;
        reader_createJsGraphicsWrapper_pressMoveBlock170.confidential = true;
        writer_createJsGraphicsWrapper_pressMoveBlock170.confidential = true;
        obj91.mutable = true;
        setLineNumber(6);    // compilenode block
        var block171 = new GraceBlock(this, 6, 0);
        block171.real = function() {
          return GraceDone;
        };
        obj91.data["mouseOverBlock"] = block171;
        var reader_createJsGraphicsWrapper_mouseOverBlock172 = function() {
          return this.data["mouseOverBlock"];
        };
        obj91.methods["mouseOverBlock"] = reader_createJsGraphicsWrapper_mouseOverBlock172;
        obj91.data["mouseOverBlock"] = block171;
        var writer_createJsGraphicsWrapper_mouseOverBlock172 = function(argcv, o) {
          this.data["mouseOverBlock"] = o;
          return GraceDone;
        };
        obj91.methods["mouseOverBlock:="] = writer_createJsGraphicsWrapper_mouseOverBlock172;
        reader_createJsGraphicsWrapper_mouseOverBlock172.confidential = true;
        writer_createJsGraphicsWrapper_mouseOverBlock172.confidential = true;
        obj91.mutable = true;
        setLineNumber(7);    // compilenode block
        var block173 = new GraceBlock(this, 7, 0);
        block173.real = function() {
          return GraceDone;
        };
        obj91.data["mouseExitBlock"] = block173;
        var reader_createJsGraphicsWrapper_mouseExitBlock174 = function() {
          return this.data["mouseExitBlock"];
        };
        obj91.methods["mouseExitBlock"] = reader_createJsGraphicsWrapper_mouseExitBlock174;
        obj91.data["mouseExitBlock"] = block173;
        var writer_createJsGraphicsWrapper_mouseExitBlock174 = function(argcv, o) {
          this.data["mouseExitBlock"] = o;
          return GraceDone;
        };
        obj91.methods["mouseExitBlock:="] = writer_createJsGraphicsWrapper_mouseExitBlock174;
        reader_createJsGraphicsWrapper_mouseExitBlock174.confidential = true;
        writer_createJsGraphicsWrapper_mouseExitBlock174.confidential = true;
        obj91.mutable = true;
        setLineNumber(8);    // compilenode num
        var opresult177 = callmethodChecked(new GraceNum(0), "@", [1], new GraceNum(0));
        obj91.data["mouseLocation'"] = opresult177;
        var reader_createJsGraphicsWrapper_mouseLocation__39__178 = function() {
          return this.data["mouseLocation'"];
        };
        obj91.methods["mouseLocation'"] = reader_createJsGraphicsWrapper_mouseLocation__39__178;
        obj91.data["mouseLocation'"] = opresult177;
        var writer_createJsGraphicsWrapper_mouseLocation__39__178 = function(argcv, o) {
          this.data["mouseLocation'"] = o;
          return GraceDone;
        };
        obj91.methods["mouseLocation':="] = writer_createJsGraphicsWrapper_mouseLocation__39__178;
        reader_createJsGraphicsWrapper_mouseLocation__39__178.confidential = true;
        writer_createJsGraphicsWrapper_mouseLocation__39__178.confidential = true;
        obj91.mutable = true;
        superDepth = origSuperDepth;
      };
      obj_init_91.apply(inheritingObject, []);
      return obj91;
      };
      this.methods["eventListener()object"] = func90;
    setLineNumber(171);    // compilenode method
    var func179 = function(argcv) {    // method stage(2)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_width__39__ = arguments[curarg];
      curarg++;
      var var_height__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !== 2)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for stage(2)"));
      setModuleName("createJsGraphicsWrapper");
      var obj180 = Grace_allocObject(GraceObject, "createJsGraphicsWrapper.identifierBinding‹stage›");
      obj180.definitionModule = "createJsGraphicsWrapper";
      obj180.definitionLine = 171;
      obj180.outer = this;
      var reader_createJsGraphicsWrapper_outer181 = function() {
        return this.outer;
      };
      obj180.methods["outer"] = reader_createJsGraphicsWrapper_outer181;
      var obj_init_180 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj180;
        var func182 = function(argcv) {    // method new(2)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_width = arguments[curarg];
          curarg++;
          var var_height = arguments[curarg];
          curarg++;
          if (argcv[0] !== 2)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for new(2)"));
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(181);    // compilenode call
          onSelf = true;
          var call183 = callmethodChecked(this, "clearTimeout", [0]);
          setLineNumber(182);    // compilenode call
             // start native code from line 182
          var result = GraceDone;
          
      var width = var_width._value;
      var height = var_height._value;
      var size = "height=" + height.toString() + ",width=" + width.toString()
      var canvas = document.getElementById("graphics");
      var ctx = canvas.getContext("2d");
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas,height);
      var stage = new createjs.Stage(canvas);
      createjs.Ticker.removeAllEventListeners();
      stage.enableDOMEvents(true);
      canvas.setAttribute('tabindex','0');
      canvas.focus();
      canvas = stage.canvas;
      this.stage = stage
      return stage;
    
          var nat184 = result;
             // end native code insertion
          return nat184;
        };
        func182.paramCounts = [2];
        obj180.methods["new"] = func182;
        func182.definitionLine = 180;
        func182.definitionModule = "createJsGraphicsWrapper";
        var func185 = function(argcv) {    // method createClearButton(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_myStage = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for createClearButton(1)"));
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(202);    // compilenode call
             // start native code from line 202
          var result = GraceDone;
          
          var stage = this.data.mystage;
          var container = new createjs.Container();
          var text = new createjs.Text("clear", "12px Arial", "black");
          text.x = 5;
          text.y = 3;
          container.x = stage.canvas.width - 35;
          var rect = new createjs.Shape();
          rect.graphics.beginFill("lightgrey").drawRect(0, 0, 35, 20);
          container.addChild(rect);
          container.addChild(text);
          container.addEventListener("click", function(event) {
            stage.removeAllEventListeners();
            stage.removeAllChildren();
            stage.enableDOMEvents(false);
            stage.update();
            callmethod(var_myStage, "clearTimeout", [0]);
            createjs.Ticker.removeAllEventListeners();
          });
          stage.addChild(container);
          stage.update();
      
          var nat186 = result;
             // end native code insertion
          return nat186;
        };
        func185.paramCounts = [1];
        obj180.methods["createClearButton"] = func185;
        func185.definitionLine = 201;
        func185.definitionModule = "createJsGraphicsWrapper";
        var func187 = function(argcv) {    // method mouseLocation
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for mouseLocation"));
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(227);    // compilenode call
          onSelf = true;
          var call188 = callmethodChecked(this, "stageListener", [0]);
          var call189 = callmethodChecked(call188, "mouseLocation", [0]);
          return call189;
        };
        func187.paramCounts = [0];
        obj180.methods["mouseLocation"] = func187;
        func187.definitionLine = 226;
        func187.definitionModule = "createJsGraphicsWrapper";
        var func190 = function(argcv) {    // method add(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_shape = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for add(1)"));
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(231);    // compilenode identifier
          var call191 = callmethodChecked(var_shape, "createJsGraphics", [0]);
          onSelf = true;
          var call192 = callmethodChecked(this, "createJsGraphics:=", [1], call191);
          setLineNumber(232);    // compilenode call
             // start native code from line 232
          var result = GraceDone;
          
      this.data.mystage.addChild(this.data.createJsGraphics);
    
          var nat193 = result;
             // end native code insertion
          return nat193;
        };
        func190.paramCounts = [1];
        obj180.methods["add"] = func190;
        func190.definitionLine = 230;
        func190.definitionModule = "createJsGraphicsWrapper";
        var func194 = function(argcv) {    // method removeChild(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_shape = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for removeChild(1)"));
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(237);    // compilenode identifier
          var call195 = callmethodChecked(var_shape, "createJsGraphics", [0]);
          onSelf = true;
          var call196 = callmethodChecked(this, "createJsGraphics:=", [1], call195);
          setLineNumber(238);    // compilenode call
             // start native code from line 238
          var result = GraceDone;
          
      this.data.mystage.removeChild(this.data.createJsGraphics);
    
          var nat197 = result;
             // end native code insertion
          return nat197;
        };
        func194.paramCounts = [1];
        obj180.methods["removeChild"] = func194;
        func194.definitionLine = 236;
        func194.definitionModule = "createJsGraphicsWrapper";
        var func198 = function(argcv) {    // method removeAllEventListeners
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for removeAllEventListeners"));
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(242);    // compilenode call
             // start native code from line 242
          var result = GraceDone;
           this.data.mystage.removeAllEventListeners(); 
          var nat199 = result;
             // end native code insertion
          return nat199;
        };
        func198.paramCounts = [0];
        obj180.methods["removeAllEventListeners"] = func198;
        func198.definitionLine = 242;
        func198.definitionModule = "createJsGraphicsWrapper";
        var func200 = function(argcv) {    // method update
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for update"));
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(244);    // compilenode call
             // start native code from line 244
          var result = GraceDone;
          
      this.data.mystage.update();
    
          var nat201 = result;
             // end native code insertion
          return nat201;
        };
        func200.paramCounts = [0];
        obj180.methods["update"] = func200;
        func200.definitionLine = 243;
        func200.definitionModule = "createJsGraphicsWrapper";
        var func202 = function(argcv) {    // method removeAllChildren
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for removeAllChildren"));
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(250);    // compilenode call
             // start native code from line 250
          var result = GraceDone;
          
      this.data.mystage.removeAllChildren();
    
          var nat203 = result;
             // end native code insertion
          return nat203;
        };
        func202.paramCounts = [0];
        obj180.methods["removeAllChildren"] = func202;
        func202.definitionLine = 249;
        func202.definitionModule = "createJsGraphicsWrapper";
        var func204 = function(argcv) {    // method addStageDownListener(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_block = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addStageDownListener(1)"));
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(256);    // compilenode call
          onSelf = true;
          var call205 = callmethodChecked(this, "stageListener", [0]);
          var call206 = callmethodChecked(call205, "onMouseDown:=", [1], var_block);
          setLineNumber(257);    // compilenode call
          onSelf = true;
          var call207 = callmethodChecked(this, "mystage", [0]);
          onSelf = true;
          var call208 = callmethodChecked(this, "stageListener", [0]);
          onSelf = true;
          var call209 = callmethodChecked(this, "stageListener", [0]);
          var call210 = callmethodChecked(call209, "addStageDownListener", [2], call207, call208);
          return call210;
        };
        func204.paramCounts = [1];
        obj180.methods["addStageDownListener"] = func204;
        func204.definitionLine = 255;
        func204.definitionModule = "createJsGraphicsWrapper";
        var func211 = function(argcv) {    // method addStageUpListener(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_block = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addStageUpListener(1)"));
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(261);    // compilenode call
          onSelf = true;
          var call212 = callmethodChecked(this, "stageListener", [0]);
          var call213 = callmethodChecked(call212, "onMouseUp:=", [1], var_block);
          setLineNumber(262);    // compilenode call
          onSelf = true;
          var call214 = callmethodChecked(this, "mystage", [0]);
          onSelf = true;
          var call215 = callmethodChecked(this, "stageListener", [0]);
          onSelf = true;
          var call216 = callmethodChecked(this, "stageListener", [0]);
          var call217 = callmethodChecked(call216, "addStageUpListener", [2], call214, call215);
          return call217;
        };
        func211.paramCounts = [1];
        obj180.methods["addStageUpListener"] = func211;
        func211.definitionLine = 260;
        func211.definitionModule = "createJsGraphicsWrapper";
        var func218 = function(argcv) {    // method addMouseExitListener(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_block = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addMouseExitListener(1)"));
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(266);    // compilenode call
          onSelf = true;
          var call219 = callmethodChecked(this, "stageListener", [0]);
          var call220 = callmethodChecked(call219, "onMouseExit:=", [1], var_block);
          setLineNumber(267);    // compilenode call
          onSelf = true;
          var call221 = callmethodChecked(this, "mystage", [0]);
          onSelf = true;
          var call222 = callmethodChecked(this, "stageListener", [0]);
          onSelf = true;
          var call223 = callmethodChecked(this, "stageListener", [0]);
          var call224 = callmethodChecked(call223, "addMouseExitListener", [2], call221, call222);
          return call224;
        };
        func218.paramCounts = [1];
        obj180.methods["addMouseExitListener"] = func218;
        func218.definitionLine = 265;
        func218.definitionModule = "createJsGraphicsWrapper";
        var func225 = function(argcv) {    // method addStageMouseMoveListener(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_block = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addStageMouseMoveListener(1)"));
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(271);    // compilenode call
          onSelf = true;
          var call226 = callmethodChecked(this, "stageListener", [0]);
          var call227 = callmethodChecked(call226, "onMouseOver:=", [1], var_block);
          setLineNumber(272);    // compilenode call
          onSelf = true;
          var call228 = callmethodChecked(this, "mystage", [0]);
          onSelf = true;
          var call229 = callmethodChecked(this, "stageListener", [0]);
          onSelf = true;
          var call230 = callmethodChecked(this, "stageListener", [0]);
          var call231 = callmethodChecked(call230, "addStageMouseMoveListener", [2], call228, call229);
          return call231;
        };
        func225.paramCounts = [1];
        obj180.methods["addStageMouseMoveListener"] = func225;
        func225.definitionLine = 270;
        func225.definitionModule = "createJsGraphicsWrapper";
        var func232 = function(argcv) {    // method enableMouseOver(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_frequency = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for enableMouseOver(1)"));
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(276);    // compilenode call
             // start native code from line 276
          var result = GraceDone;
          
      var freq = var_frequency._value
      this.data.mystage.enableMouseOver(freq);
    
          var nat233 = result;
             // end native code insertion
          return nat233;
        };
        func232.paramCounts = [1];
        obj180.methods["enableMouseOver"] = func232;
        func232.definitionLine = 275;
        func232.definitionModule = "createJsGraphicsWrapper";
        var func234 = function(argcv) {    // method timedEvent
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for timedEvent"));
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(283);    // compilenode call
          onSelf = true;
          var call235 = callmethodChecked(this, "timedEventBlock", [0]);
          var call236 = callmethodChecked(call235, "apply", [0]);
          return call236;
        };
        func234.paramCounts = [0];
        obj180.methods["timedEvent"] = func234;
        func234.definitionLine = 282;
        func234.definitionModule = "createJsGraphicsWrapper";
        var func237 = function(argcv) {    // method tickEvent
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for tickEvent"));
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(287);    // compilenode call
          onSelf = true;
          var call238 = callmethodChecked(this, "tickerBlock", [0]);
          var call239 = callmethodChecked(call238, "apply", [0]);
          return call239;
        };
        func237.paramCounts = [0];
        obj180.methods["tickEvent"] = func237;
        func237.definitionLine = 286;
        func237.definitionModule = "createJsGraphicsWrapper";
        var func240 = function(argcv) {    // method setTimeout(3)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_block = arguments[curarg];
          curarg++;
          var var_time = arguments[curarg];
          curarg++;
          var var_myStage = arguments[curarg];
          curarg++;
          if (argcv[0] !== 3)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for setTimeout(3)"));
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(291);    // compilenode identifier
          onSelf = true;
          var call241 = callmethodChecked(this, "timedEventBlock:=", [1], var_block);
          setLineNumber(292);    // compilenode call
             // start native code from line 292
          var result = GraceDone;
          var t = setTimeout(function() {
                    callmethod(var_myStage, "timedEvent", [0]);
                }, var_time._value);
            this.data.jsTimeout = t;
          var nat242 = result;
             // end native code insertion
          return nat242;
        };
        func240.paramCounts = [3];
        obj180.methods["setTimeout"] = func240;
        func240.definitionLine = 290;
        func240.definitionModule = "createJsGraphicsWrapper";
        var func243 = function(argcv) {    // method clearTimeout
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for clearTimeout"));
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(299);    // compilenode call
             // start native code from line 299
          var result = GraceDone;
          
      var timeout = this.data.jsTimeout
      clearTimeout(timeout);
    
          var nat244 = result;
             // end native code insertion
          return nat244;
        };
        func243.paramCounts = [0];
        obj180.methods["clearTimeout"] = func243;
        func243.definitionLine = 298;
        func243.definitionModule = "createJsGraphicsWrapper";
        var func245 = function(argcv) {    // method setTicker(3)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_block = arguments[curarg];
          curarg++;
          var var_fps = arguments[curarg];
          curarg++;
          var var_myStage = arguments[curarg];
          curarg++;
          if (argcv[0] !== 3)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for setTicker(3)"));
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(306);    // compilenode identifier
          onSelf = true;
          var call246 = callmethodChecked(this, "tickerBlock:=", [1], var_block);
          setLineNumber(307);    // compilenode call
             // start native code from line 307
          var result = GraceDone;
          
      createjs.Ticker.on("tick", function(event) {
        callmethod(var_myStage, "tickEvent", [0]);
      });
			createjs.Ticker.setFPS(var_fps._value);
    
          var nat247 = result;
             // end native code insertion
          return nat247;
        };
        func245.paramCounts = [3];
        obj180.methods["setTicker"] = func245;
        func245.definitionLine = 305;
        func245.definitionModule = "createJsGraphicsWrapper";
        var func248 = function(argcv) {    // method clearTicker
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for clearTicker"));
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(316);    // compilenode call
             // start native code from line 316
          var result = GraceDone;
          
      createjs.Ticker.removeAllEventListeners();
    
          var nat249 = result;
             // end native code insertion
          return nat249;
        };
        func248.paramCounts = [0];
        obj180.methods["clearTicker"] = func248;
        func248.definitionLine = 315;
        func248.definitionModule = "createJsGraphicsWrapper";
        setLineNumber(172);    // compilenode identifier
        onSelf = true;
        var call250 = callmethodChecked(this, "new", [2], var_width__39__, var_height__39__);
        obj180.data["mystage"] = call250;
        var reader_createJsGraphicsWrapper_mystage251 = function() {
          return this.data["mystage"];
        };
        obj180.methods["mystage"] = reader_createJsGraphicsWrapper_mystage251;
        obj180.data["mystage"] = call250;
        var writer_createJsGraphicsWrapper_mystage251 = function(argcv, o) {
          this.data["mystage"] = o;
          return GraceDone;
        };
        obj180.methods["mystage:="] = writer_createJsGraphicsWrapper_mystage251;
        reader_createJsGraphicsWrapper_mystage251.confidential = true;
        writer_createJsGraphicsWrapper_mystage251.confidential = true;
        obj180.mutable = true;
        setLineNumber(173);    // compilenode identifier
        onSelf = true;
        var call252 = callmethodChecked(this, "createClearButton", [1], this);
        obj180.data["createJsGraphics"] = undefined;
        var reader_createJsGraphicsWrapper_createJsGraphics253 = function() {
          return this.data["createJsGraphics"];
        };
        obj180.methods["createJsGraphics"] = reader_createJsGraphicsWrapper_createJsGraphics253;
        obj180.data["createJsGraphics"] = undefined;
        var writer_createJsGraphicsWrapper_createJsGraphics253 = function(argcv, o) {
          this.data["createJsGraphics"] = o;
          return GraceDone;
        };
        obj180.methods["createJsGraphics:="] = writer_createJsGraphicsWrapper_createJsGraphics253;
        reader_createJsGraphicsWrapper_createJsGraphics253.confidential = true;
        writer_createJsGraphicsWrapper_createJsGraphics253.confidential = true;
        obj180.mutable = true;
        setLineNumber(175);    // compilenode call
        var call254 = callmethodChecked(superDepth, "outer", [0]);
        onOuter = true;
        onSelf = true;
        var call255 = callmethodChecked(call254, "eventListener", [0]);
        obj180.data["stageListener"] = call255;
        var reader_createJsGraphicsWrapper_stageListener256 = function() {
          return this.data["stageListener"];
        };
        obj180.methods["stageListener"] = reader_createJsGraphicsWrapper_stageListener256;
        obj180.data["stageListener"] = call255;
        var writer_createJsGraphicsWrapper_stageListener256 = function(argcv, o) {
          this.data["stageListener"] = o;
          return GraceDone;
        };
        obj180.methods["stageListener:="] = writer_createJsGraphicsWrapper_stageListener256;
        reader_createJsGraphicsWrapper_stageListener256.confidential = true;
        writer_createJsGraphicsWrapper_stageListener256.confidential = true;
        obj180.mutable = true;
        setLineNumber(176);    // compilenode block
        var block257 = new GraceBlock(this, 176, 0);
        block257.real = function() {
          return GraceDone;
        };
        obj180.data["timedEventBlock"] = block257;
        var reader_createJsGraphicsWrapper_timedEventBlock258 = function() {
          return this.data["timedEventBlock"];
        };
        obj180.methods["timedEventBlock"] = reader_createJsGraphicsWrapper_timedEventBlock258;
        obj180.data["timedEventBlock"] = block257;
        var writer_createJsGraphicsWrapper_timedEventBlock258 = function(argcv, o) {
          this.data["timedEventBlock"] = o;
          return GraceDone;
        };
        obj180.methods["timedEventBlock:="] = writer_createJsGraphicsWrapper_timedEventBlock258;
        reader_createJsGraphicsWrapper_timedEventBlock258.confidential = true;
        writer_createJsGraphicsWrapper_timedEventBlock258.confidential = true;
        obj180.mutable = true;
        obj180.data["jsTimeout"] = undefined;
        var reader_createJsGraphicsWrapper_jsTimeout259 = function() {
          return this.data["jsTimeout"];
        };
        obj180.methods["jsTimeout"] = reader_createJsGraphicsWrapper_jsTimeout259;
        obj180.data["jsTimeout"] = undefined;
        var writer_createJsGraphicsWrapper_jsTimeout259 = function(argcv, o) {
          this.data["jsTimeout"] = o;
          return GraceDone;
        };
        obj180.methods["jsTimeout:="] = writer_createJsGraphicsWrapper_jsTimeout259;
        reader_createJsGraphicsWrapper_jsTimeout259.confidential = true;
        writer_createJsGraphicsWrapper_jsTimeout259.confidential = true;
        obj180.mutable = true;
        setLineNumber(178);    // compilenode block
        var block260 = new GraceBlock(this, 178, 0);
        block260.real = function() {
          return GraceDone;
        };
        obj180.data["tickerBlock"] = block260;
        var reader_createJsGraphicsWrapper_tickerBlock261 = function() {
          return this.data["tickerBlock"];
        };
        obj180.methods["tickerBlock"] = reader_createJsGraphicsWrapper_tickerBlock261;
        obj180.data["tickerBlock"] = block260;
        var writer_createJsGraphicsWrapper_tickerBlock261 = function(argcv, o) {
          this.data["tickerBlock"] = o;
          return GraceDone;
        };
        obj180.methods["tickerBlock:="] = writer_createJsGraphicsWrapper_tickerBlock261;
        reader_createJsGraphicsWrapper_tickerBlock261.confidential = true;
        writer_createJsGraphicsWrapper_tickerBlock261.confidential = true;
        obj180.mutable = true;
        superDepth = origSuperDepth;
      };
      obj_init_180.apply(obj180, []);
      return obj180;
    };
    func179.paramCounts = [2];
    this.methods["stage"] = func179;
    func179.definitionLine = 171;
    func179.definitionModule = "createJsGraphicsWrapper";
      var func262 = function(argcv) {    // method stage(2     )()object
        var curarg = 1;
        var var_width__39__ = arguments[curarg];
        curarg++;
        var var_height__39__ = arguments[curarg];
        curarg++;
        var inheritingObject = arguments[curarg++];
        // Start argument processing
        curarg = 1;
        curarg++;
        curarg++;
        // End argument processing
        setModuleName("createJsGraphicsWrapper");
        var returnTarget = invocationCount;
        invocationCount++;
        var obj263 = Grace_allocObject(GraceObject, "stage");
        obj263.definitionModule = "createJsGraphicsWrapper";
        obj263.definitionLine = 171;
        var inho263 = inheritingObject;
        while (inho263.superobj) inho263 = inho263.superobj;
        inho263.superobj = obj263;
        obj263.data = inheritingObject.data;
        if (inheritingObject.hasOwnProperty('_value'))
          obj263._value = inheritingObject._value;
        obj263.outer = this;
        var reader_createJsGraphicsWrapper_outer264 = function() {
          return this.outer;
        };
        obj263.methods["outer"] = reader_createJsGraphicsWrapper_outer264;
        var obj_init_263 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj263;
          var func265 = function(argcv) {    // method new(2)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_width = arguments[curarg];
            curarg++;
            var var_height = arguments[curarg];
            curarg++;
            if (argcv[0] !== 2)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for new(2)"));
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(181);    // compilenode call
            onSelf = true;
            var call266 = callmethodChecked(this, "clearTimeout", [0]);
            setLineNumber(182);    // compilenode call
               // start native code from line 182
            var result = GraceDone;
            
      var width = var_width._value;
      var height = var_height._value;
      var size = "height=" + height.toString() + ",width=" + width.toString()
      var canvas = document.getElementById("graphics");
      var ctx = canvas.getContext("2d");
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas,height);
      var stage = new createjs.Stage(canvas);
      createjs.Ticker.removeAllEventListeners();
      stage.enableDOMEvents(true);
      canvas.setAttribute('tabindex','0');
      canvas.focus();
      canvas = stage.canvas;
      this.stage = stage
      return stage;
    
            var nat267 = result;
               // end native code insertion
            return nat267;
          };
          func265.paramCounts = [2];
          obj263.methods["new"] = func265;
          func265.definitionLine = 180;
          func265.definitionModule = "createJsGraphicsWrapper";
          var func268 = function(argcv) {    // method createClearButton(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_myStage = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for createClearButton(1)"));
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(202);    // compilenode call
               // start native code from line 202
            var result = GraceDone;
            
          var stage = this.data.mystage;
          var container = new createjs.Container();
          var text = new createjs.Text("clear", "12px Arial", "black");
          text.x = 5;
          text.y = 3;
          container.x = stage.canvas.width - 35;
          var rect = new createjs.Shape();
          rect.graphics.beginFill("lightgrey").drawRect(0, 0, 35, 20);
          container.addChild(rect);
          container.addChild(text);
          container.addEventListener("click", function(event) {
            stage.removeAllEventListeners();
            stage.removeAllChildren();
            stage.enableDOMEvents(false);
            stage.update();
            callmethod(var_myStage, "clearTimeout", [0]);
            createjs.Ticker.removeAllEventListeners();
          });
          stage.addChild(container);
          stage.update();
      
            var nat269 = result;
               // end native code insertion
            return nat269;
          };
          func268.paramCounts = [1];
          obj263.methods["createClearButton"] = func268;
          func268.definitionLine = 201;
          func268.definitionModule = "createJsGraphicsWrapper";
          var func270 = function(argcv) {    // method mouseLocation
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for mouseLocation"));
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(227);    // compilenode call
            onSelf = true;
            var call271 = callmethodChecked(this, "stageListener", [0]);
            var call272 = callmethodChecked(call271, "mouseLocation", [0]);
            return call272;
          };
          func270.paramCounts = [0];
          obj263.methods["mouseLocation"] = func270;
          func270.definitionLine = 226;
          func270.definitionModule = "createJsGraphicsWrapper";
          var func273 = function(argcv) {    // method add(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_shape = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for add(1)"));
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(231);    // compilenode identifier
            var call274 = callmethodChecked(var_shape, "createJsGraphics", [0]);
            onSelf = true;
            var call275 = callmethodChecked(this, "createJsGraphics:=", [1], call274);
            setLineNumber(232);    // compilenode call
               // start native code from line 232
            var result = GraceDone;
            
      this.data.mystage.addChild(this.data.createJsGraphics);
    
            var nat276 = result;
               // end native code insertion
            return nat276;
          };
          func273.paramCounts = [1];
          obj263.methods["add"] = func273;
          func273.definitionLine = 230;
          func273.definitionModule = "createJsGraphicsWrapper";
          var func277 = function(argcv) {    // method removeChild(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_shape = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for removeChild(1)"));
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(237);    // compilenode identifier
            var call278 = callmethodChecked(var_shape, "createJsGraphics", [0]);
            onSelf = true;
            var call279 = callmethodChecked(this, "createJsGraphics:=", [1], call278);
            setLineNumber(238);    // compilenode call
               // start native code from line 238
            var result = GraceDone;
            
      this.data.mystage.removeChild(this.data.createJsGraphics);
    
            var nat280 = result;
               // end native code insertion
            return nat280;
          };
          func277.paramCounts = [1];
          obj263.methods["removeChild"] = func277;
          func277.definitionLine = 236;
          func277.definitionModule = "createJsGraphicsWrapper";
          var func281 = function(argcv) {    // method removeAllEventListeners
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for removeAllEventListeners"));
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(242);    // compilenode call
               // start native code from line 242
            var result = GraceDone;
             this.data.mystage.removeAllEventListeners(); 
            var nat282 = result;
               // end native code insertion
            return nat282;
          };
          func281.paramCounts = [0];
          obj263.methods["removeAllEventListeners"] = func281;
          func281.definitionLine = 242;
          func281.definitionModule = "createJsGraphicsWrapper";
          var func283 = function(argcv) {    // method update
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for update"));
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(244);    // compilenode call
               // start native code from line 244
            var result = GraceDone;
            
      this.data.mystage.update();
    
            var nat284 = result;
               // end native code insertion
            return nat284;
          };
          func283.paramCounts = [0];
          obj263.methods["update"] = func283;
          func283.definitionLine = 243;
          func283.definitionModule = "createJsGraphicsWrapper";
          var func285 = function(argcv) {    // method removeAllChildren
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for removeAllChildren"));
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(250);    // compilenode call
               // start native code from line 250
            var result = GraceDone;
            
      this.data.mystage.removeAllChildren();
    
            var nat286 = result;
               // end native code insertion
            return nat286;
          };
          func285.paramCounts = [0];
          obj263.methods["removeAllChildren"] = func285;
          func285.definitionLine = 249;
          func285.definitionModule = "createJsGraphicsWrapper";
          var func287 = function(argcv) {    // method addStageDownListener(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_block = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addStageDownListener(1)"));
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(256);    // compilenode call
            onSelf = true;
            var call288 = callmethodChecked(this, "stageListener", [0]);
            var call289 = callmethodChecked(call288, "onMouseDown:=", [1], var_block);
            setLineNumber(257);    // compilenode call
            onSelf = true;
            var call290 = callmethodChecked(this, "mystage", [0]);
            onSelf = true;
            var call291 = callmethodChecked(this, "stageListener", [0]);
            onSelf = true;
            var call292 = callmethodChecked(this, "stageListener", [0]);
            var call293 = callmethodChecked(call292, "addStageDownListener", [2], call290, call291);
            return call293;
          };
          func287.paramCounts = [1];
          obj263.methods["addStageDownListener"] = func287;
          func287.definitionLine = 255;
          func287.definitionModule = "createJsGraphicsWrapper";
          var func294 = function(argcv) {    // method addStageUpListener(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_block = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addStageUpListener(1)"));
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(261);    // compilenode call
            onSelf = true;
            var call295 = callmethodChecked(this, "stageListener", [0]);
            var call296 = callmethodChecked(call295, "onMouseUp:=", [1], var_block);
            setLineNumber(262);    // compilenode call
            onSelf = true;
            var call297 = callmethodChecked(this, "mystage", [0]);
            onSelf = true;
            var call298 = callmethodChecked(this, "stageListener", [0]);
            onSelf = true;
            var call299 = callmethodChecked(this, "stageListener", [0]);
            var call300 = callmethodChecked(call299, "addStageUpListener", [2], call297, call298);
            return call300;
          };
          func294.paramCounts = [1];
          obj263.methods["addStageUpListener"] = func294;
          func294.definitionLine = 260;
          func294.definitionModule = "createJsGraphicsWrapper";
          var func301 = function(argcv) {    // method addMouseExitListener(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_block = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addMouseExitListener(1)"));
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(266);    // compilenode call
            onSelf = true;
            var call302 = callmethodChecked(this, "stageListener", [0]);
            var call303 = callmethodChecked(call302, "onMouseExit:=", [1], var_block);
            setLineNumber(267);    // compilenode call
            onSelf = true;
            var call304 = callmethodChecked(this, "mystage", [0]);
            onSelf = true;
            var call305 = callmethodChecked(this, "stageListener", [0]);
            onSelf = true;
            var call306 = callmethodChecked(this, "stageListener", [0]);
            var call307 = callmethodChecked(call306, "addMouseExitListener", [2], call304, call305);
            return call307;
          };
          func301.paramCounts = [1];
          obj263.methods["addMouseExitListener"] = func301;
          func301.definitionLine = 265;
          func301.definitionModule = "createJsGraphicsWrapper";
          var func308 = function(argcv) {    // method addStageMouseMoveListener(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_block = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addStageMouseMoveListener(1)"));
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(271);    // compilenode call
            onSelf = true;
            var call309 = callmethodChecked(this, "stageListener", [0]);
            var call310 = callmethodChecked(call309, "onMouseOver:=", [1], var_block);
            setLineNumber(272);    // compilenode call
            onSelf = true;
            var call311 = callmethodChecked(this, "mystage", [0]);
            onSelf = true;
            var call312 = callmethodChecked(this, "stageListener", [0]);
            onSelf = true;
            var call313 = callmethodChecked(this, "stageListener", [0]);
            var call314 = callmethodChecked(call313, "addStageMouseMoveListener", [2], call311, call312);
            return call314;
          };
          func308.paramCounts = [1];
          obj263.methods["addStageMouseMoveListener"] = func308;
          func308.definitionLine = 270;
          func308.definitionModule = "createJsGraphicsWrapper";
          var func315 = function(argcv) {    // method enableMouseOver(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_frequency = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for enableMouseOver(1)"));
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(276);    // compilenode call
               // start native code from line 276
            var result = GraceDone;
            
      var freq = var_frequency._value
      this.data.mystage.enableMouseOver(freq);
    
            var nat316 = result;
               // end native code insertion
            return nat316;
          };
          func315.paramCounts = [1];
          obj263.methods["enableMouseOver"] = func315;
          func315.definitionLine = 275;
          func315.definitionModule = "createJsGraphicsWrapper";
          var func317 = function(argcv) {    // method timedEvent
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for timedEvent"));
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(283);    // compilenode call
            onSelf = true;
            var call318 = callmethodChecked(this, "timedEventBlock", [0]);
            var call319 = callmethodChecked(call318, "apply", [0]);
            return call319;
          };
          func317.paramCounts = [0];
          obj263.methods["timedEvent"] = func317;
          func317.definitionLine = 282;
          func317.definitionModule = "createJsGraphicsWrapper";
          var func320 = function(argcv) {    // method tickEvent
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for tickEvent"));
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(287);    // compilenode call
            onSelf = true;
            var call321 = callmethodChecked(this, "tickerBlock", [0]);
            var call322 = callmethodChecked(call321, "apply", [0]);
            return call322;
          };
          func320.paramCounts = [0];
          obj263.methods["tickEvent"] = func320;
          func320.definitionLine = 286;
          func320.definitionModule = "createJsGraphicsWrapper";
          var func323 = function(argcv) {    // method setTimeout(3)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_block = arguments[curarg];
            curarg++;
            var var_time = arguments[curarg];
            curarg++;
            var var_myStage = arguments[curarg];
            curarg++;
            if (argcv[0] !== 3)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for setTimeout(3)"));
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(291);    // compilenode identifier
            onSelf = true;
            var call324 = callmethodChecked(this, "timedEventBlock:=", [1], var_block);
            setLineNumber(292);    // compilenode call
               // start native code from line 292
            var result = GraceDone;
            var t = setTimeout(function() {
                    callmethod(var_myStage, "timedEvent", [0]);
                }, var_time._value);
            this.data.jsTimeout = t;
            var nat325 = result;
               // end native code insertion
            return nat325;
          };
          func323.paramCounts = [3];
          obj263.methods["setTimeout"] = func323;
          func323.definitionLine = 290;
          func323.definitionModule = "createJsGraphicsWrapper";
          var func326 = function(argcv) {    // method clearTimeout
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for clearTimeout"));
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(299);    // compilenode call
               // start native code from line 299
            var result = GraceDone;
            
      var timeout = this.data.jsTimeout
      clearTimeout(timeout);
    
            var nat327 = result;
               // end native code insertion
            return nat327;
          };
          func326.paramCounts = [0];
          obj263.methods["clearTimeout"] = func326;
          func326.definitionLine = 298;
          func326.definitionModule = "createJsGraphicsWrapper";
          var func328 = function(argcv) {    // method setTicker(3)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_block = arguments[curarg];
            curarg++;
            var var_fps = arguments[curarg];
            curarg++;
            var var_myStage = arguments[curarg];
            curarg++;
            if (argcv[0] !== 3)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for setTicker(3)"));
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(306);    // compilenode identifier
            onSelf = true;
            var call329 = callmethodChecked(this, "tickerBlock:=", [1], var_block);
            setLineNumber(307);    // compilenode call
               // start native code from line 307
            var result = GraceDone;
            
      createjs.Ticker.on("tick", function(event) {
        callmethod(var_myStage, "tickEvent", [0]);
      });
			createjs.Ticker.setFPS(var_fps._value);
    
            var nat330 = result;
               // end native code insertion
            return nat330;
          };
          func328.paramCounts = [3];
          obj263.methods["setTicker"] = func328;
          func328.definitionLine = 305;
          func328.definitionModule = "createJsGraphicsWrapper";
          var func331 = function(argcv) {    // method clearTicker
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for clearTicker"));
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(316);    // compilenode call
               // start native code from line 316
            var result = GraceDone;
            
      createjs.Ticker.removeAllEventListeners();
    
            var nat332 = result;
               // end native code insertion
            return nat332;
          };
          func331.paramCounts = [0];
          obj263.methods["clearTicker"] = func331;
          func331.definitionLine = 315;
          func331.definitionModule = "createJsGraphicsWrapper";
          setLineNumber(172);    // compilenode identifier
          onSelf = true;
          var call333 = callmethodChecked(this, "new", [2], var_width__39__, var_height__39__);
          obj263.data["mystage"] = call333;
          var reader_createJsGraphicsWrapper_mystage334 = function() {
            return this.data["mystage"];
          };
          obj263.methods["mystage"] = reader_createJsGraphicsWrapper_mystage334;
          obj263.data["mystage"] = call333;
          var writer_createJsGraphicsWrapper_mystage334 = function(argcv, o) {
            this.data["mystage"] = o;
            return GraceDone;
          };
          obj263.methods["mystage:="] = writer_createJsGraphicsWrapper_mystage334;
          reader_createJsGraphicsWrapper_mystage334.confidential = true;
          writer_createJsGraphicsWrapper_mystage334.confidential = true;
          obj263.mutable = true;
          setLineNumber(173);    // compilenode identifier
          onSelf = true;
          var call335 = callmethodChecked(this, "createClearButton", [1], this);
          obj263.data["createJsGraphics"] = undefined;
          var reader_createJsGraphicsWrapper_createJsGraphics336 = function() {
            return this.data["createJsGraphics"];
          };
          obj263.methods["createJsGraphics"] = reader_createJsGraphicsWrapper_createJsGraphics336;
          obj263.data["createJsGraphics"] = undefined;
          var writer_createJsGraphicsWrapper_createJsGraphics336 = function(argcv, o) {
            this.data["createJsGraphics"] = o;
            return GraceDone;
          };
          obj263.methods["createJsGraphics:="] = writer_createJsGraphicsWrapper_createJsGraphics336;
          reader_createJsGraphicsWrapper_createJsGraphics336.confidential = true;
          writer_createJsGraphicsWrapper_createJsGraphics336.confidential = true;
          obj263.mutable = true;
          setLineNumber(175);    // compilenode call
          var call337 = callmethodChecked(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call338 = callmethodChecked(call337, "eventListener", [0]);
          obj263.data["stageListener"] = call338;
          var reader_createJsGraphicsWrapper_stageListener339 = function() {
            return this.data["stageListener"];
          };
          obj263.methods["stageListener"] = reader_createJsGraphicsWrapper_stageListener339;
          obj263.data["stageListener"] = call338;
          var writer_createJsGraphicsWrapper_stageListener339 = function(argcv, o) {
            this.data["stageListener"] = o;
            return GraceDone;
          };
          obj263.methods["stageListener:="] = writer_createJsGraphicsWrapper_stageListener339;
          reader_createJsGraphicsWrapper_stageListener339.confidential = true;
          writer_createJsGraphicsWrapper_stageListener339.confidential = true;
          obj263.mutable = true;
          setLineNumber(176);    // compilenode block
          var block340 = new GraceBlock(this, 176, 0);
          block340.real = function() {
            return GraceDone;
          };
          obj263.data["timedEventBlock"] = block340;
          var reader_createJsGraphicsWrapper_timedEventBlock341 = function() {
            return this.data["timedEventBlock"];
          };
          obj263.methods["timedEventBlock"] = reader_createJsGraphicsWrapper_timedEventBlock341;
          obj263.data["timedEventBlock"] = block340;
          var writer_createJsGraphicsWrapper_timedEventBlock341 = function(argcv, o) {
            this.data["timedEventBlock"] = o;
            return GraceDone;
          };
          obj263.methods["timedEventBlock:="] = writer_createJsGraphicsWrapper_timedEventBlock341;
          reader_createJsGraphicsWrapper_timedEventBlock341.confidential = true;
          writer_createJsGraphicsWrapper_timedEventBlock341.confidential = true;
          obj263.mutable = true;
          obj263.data["jsTimeout"] = undefined;
          var reader_createJsGraphicsWrapper_jsTimeout342 = function() {
            return this.data["jsTimeout"];
          };
          obj263.methods["jsTimeout"] = reader_createJsGraphicsWrapper_jsTimeout342;
          obj263.data["jsTimeout"] = undefined;
          var writer_createJsGraphicsWrapper_jsTimeout342 = function(argcv, o) {
            this.data["jsTimeout"] = o;
            return GraceDone;
          };
          obj263.methods["jsTimeout:="] = writer_createJsGraphicsWrapper_jsTimeout342;
          reader_createJsGraphicsWrapper_jsTimeout342.confidential = true;
          writer_createJsGraphicsWrapper_jsTimeout342.confidential = true;
          obj263.mutable = true;
          setLineNumber(178);    // compilenode block
          var block343 = new GraceBlock(this, 178, 0);
          block343.real = function() {
            return GraceDone;
          };
          obj263.data["tickerBlock"] = block343;
          var reader_createJsGraphicsWrapper_tickerBlock344 = function() {
            return this.data["tickerBlock"];
          };
          obj263.methods["tickerBlock"] = reader_createJsGraphicsWrapper_tickerBlock344;
          obj263.data["tickerBlock"] = block343;
          var writer_createJsGraphicsWrapper_tickerBlock344 = function(argcv, o) {
            this.data["tickerBlock"] = o;
            return GraceDone;
          };
          obj263.methods["tickerBlock:="] = writer_createJsGraphicsWrapper_tickerBlock344;
          reader_createJsGraphicsWrapper_tickerBlock344.confidential = true;
          writer_createJsGraphicsWrapper_tickerBlock344.confidential = true;
          obj263.mutable = true;
          superDepth = origSuperDepth;
        };
        obj_init_263.apply(inheritingObject, []);
        return obj263;
        };
        this.methods["stage()object"] = func262;
      setLineNumber(322);    // compilenode method
      var func345 = function(argcv) {    // method commonGraphics
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for commonGraphics"));
        setModuleName("createJsGraphicsWrapper");
        var obj346 = Grace_allocObject(GraceObject, "createJsGraphicsWrapper.identifierBinding‹commonGraphics›");
        obj346.definitionModule = "createJsGraphicsWrapper";
        obj346.definitionLine = 322;
        obj346.outer = this;
        var reader_createJsGraphicsWrapper_outer347 = function() {
          return this.outer;
        };
        obj346.methods["outer"] = reader_createJsGraphicsWrapper_outer347;
        var obj_init_346 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj346;
          var func348 = function(argcv) {    // method mouseLocation
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for mouseLocation"));
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(329);    // compilenode call
            onSelf = true;
            var call349 = callmethodChecked(this, "listener", [0]);
            var call350 = callmethodChecked(call349, "mouseLocation", [0]);
            return call350;
          };
          func348.paramCounts = [0];
          obj346.methods["mouseLocation"] = func348;
          func348.definitionLine = 328;
          func348.definitionModule = "createJsGraphicsWrapper";
          var func351 = function(argcv) {    // method addMouseUpListener(2)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_graphicsTypeObject = arguments[curarg];
            curarg++;
            var var_block = arguments[curarg];
            curarg++;
            if (argcv[0] !== 2)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addMouseUpListener(2)"));
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(333);    // compilenode call
            onSelf = true;
            var call352 = callmethodChecked(this, "listener", [0]);
            var call353 = callmethodChecked(call352, "onMouseUp:=", [1], var_block);
            setLineNumber(334);    // compilenode call
            onSelf = true;
            var call354 = callmethodChecked(this, "createJsGraphics", [0]);
            onSelf = true;
            var call355 = callmethodChecked(this, "listener", [0]);
            onSelf = true;
            var call356 = callmethodChecked(this, "listener", [0]);
            var call357 = callmethodChecked(call356, "addMouseUpListener", [2], call354, call355);
            return call357;
          };
          func351.paramCounts = [2];
          obj346.methods["addMouseUpListener"] = func351;
          func351.definitionLine = 332;
          func351.definitionModule = "createJsGraphicsWrapper";
          var func358 = function(argcv) {    // method addMouseDownListener(2)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_graphicsTypeObject = arguments[curarg];
            curarg++;
            var var_block = arguments[curarg];
            curarg++;
            if (argcv[0] !== 2)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addMouseDownListener(2)"));
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(338);    // compilenode call
            onSelf = true;
            var call359 = callmethodChecked(this, "listener", [0]);
            var call360 = callmethodChecked(call359, "onMouseDown:=", [1], var_block);
            setLineNumber(339);    // compilenode call
            onSelf = true;
            var call361 = callmethodChecked(this, "createJsGraphics", [0]);
            onSelf = true;
            var call362 = callmethodChecked(this, "listener", [0]);
            onSelf = true;
            var call363 = callmethodChecked(this, "listener", [0]);
            var call364 = callmethodChecked(call363, "addMouseDownListener", [2], call361, call362);
            return call364;
          };
          func358.paramCounts = [2];
          obj346.methods["addMouseDownListener"] = func358;
          func358.definitionLine = 337;
          func358.definitionModule = "createJsGraphicsWrapper";
          var func365 = function(argcv) {    // method addMouseOverListener(2)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_graphicsTypeObject = arguments[curarg];
            curarg++;
            var var_block = arguments[curarg];
            curarg++;
            if (argcv[0] !== 2)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addMouseOverListener(2)"));
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(343);    // compilenode call
            onSelf = true;
            var call366 = callmethodChecked(this, "listener", [0]);
            var call367 = callmethodChecked(call366, "onMouseOver:=", [1], var_block);
            setLineNumber(344);    // compilenode call
            onSelf = true;
            var call368 = callmethodChecked(this, "createJsGraphics", [0]);
            onSelf = true;
            var call369 = callmethodChecked(this, "listener", [0]);
            onSelf = true;
            var call370 = callmethodChecked(this, "listener", [0]);
            var call371 = callmethodChecked(call370, "addMouseOverListener", [2], call368, call369);
            return call371;
          };
          func365.paramCounts = [2];
          obj346.methods["addMouseOverListener"] = func365;
          func365.definitionLine = 342;
          func365.definitionModule = "createJsGraphicsWrapper";
          var func372 = function(argcv) {    // method addClickListener(2)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_graphicsTypeObject = arguments[curarg];
            curarg++;
            var var_block = arguments[curarg];
            curarg++;
            if (argcv[0] !== 2)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addClickListener(2)"));
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(348);    // compilenode call
            onSelf = true;
            var call373 = callmethodChecked(this, "listener", [0]);
            var call374 = callmethodChecked(call373, "onClick:=", [1], var_block);
            setLineNumber(349);    // compilenode call
            onSelf = true;
            var call375 = callmethodChecked(this, "createJsGraphics", [0]);
            onSelf = true;
            var call376 = callmethodChecked(this, "listener", [0]);
            onSelf = true;
            var call377 = callmethodChecked(this, "listener", [0]);
            var call378 = callmethodChecked(call377, "addClickListener", [2], call375, call376);
            return call378;
          };
          func372.paramCounts = [2];
          obj346.methods["addClickListener"] = func372;
          func372.definitionLine = 347;
          func372.definitionModule = "createJsGraphicsWrapper";
          var func379 = function(argcv) {    // method addPressMoveListener(2)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_graphicsTypeObject = arguments[curarg];
            curarg++;
            var var_block = arguments[curarg];
            curarg++;
            if (argcv[0] !== 2)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addPressMoveListener(2)"));
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(353);    // compilenode call
            onSelf = true;
            var call380 = callmethodChecked(this, "listener", [0]);
            var call381 = callmethodChecked(call380, "onPressMove:=", [1], var_block);
            setLineNumber(354);    // compilenode call
            onSelf = true;
            var call382 = callmethodChecked(this, "createJsGraphics", [0]);
            onSelf = true;
            var call383 = callmethodChecked(this, "listener", [0]);
            onSelf = true;
            var call384 = callmethodChecked(this, "listener", [0]);
            var call385 = callmethodChecked(call384, "addPressMoveListener", [2], call382, call383);
            return call385;
          };
          func379.paramCounts = [2];
          obj346.methods["addPressMoveListener"] = func379;
          func379.definitionLine = 352;
          func379.definitionModule = "createJsGraphicsWrapper";
          var func386 = function(argcv) {    // method setLocation(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_newLoc = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for setLocation(1)"));
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(358);    // compilenode identifier
            onSelf = true;
            var call387 = callmethodChecked(this, "location:=", [1], var_newLoc);
            return call387;
          };
          func386.paramCounts = [1];
          obj346.methods["setLocation"] = func386;
          func386.definitionLine = 357;
          func386.definitionModule = "createJsGraphicsWrapper";
          var func388 = function(argcv) {    // method move(2)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_newX = arguments[curarg];
            curarg++;
            var var_newY = arguments[curarg];
            curarg++;
            if (argcv[0] !== 2)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for move(2)"));
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(362);    // compilenode call
               // start native code from line 362
            var result = GraceDone;
            
      this.data.createJsGraphics.x = var_newX._value;
      this.data.createJsGraphics.y = var_newY._value;
    
            var nat389 = result;
               // end native code insertion
            return nat389;
          };
          func388.paramCounts = [2];
          obj346.methods["move"] = func388;
          func388.definitionLine = 361;
          func388.definitionModule = "createJsGraphicsWrapper";
          var func390 = function(argcv) {    // method setVisible(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_isVisible = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for setVisible(1)"));
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(369);    // compilenode call
               // start native code from line 369
            var result = GraceDone;
            
      var isVisible = var_isVisible._value
      this.data.createJsGraphics.visible = isVisible;
    
            var nat391 = result;
               // end native code insertion
            return nat391;
          };
          func390.paramCounts = [1];
          obj346.methods["setVisible"] = func390;
          func390.definitionLine = 368;
          func390.definitionModule = "createJsGraphicsWrapper";
          var func392 = function(argcv) {    // method hitTest(2)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !== 2)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for hitTest(2)"));
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(376);    // compilenode call
               // start native code from line 376
            var result = GraceDone;
            
      var x = var_x._value;
      var y = var_y._value;
      var shape = this.data.createJsGraphics;
      var pt = shape.globalToLocal(x, y);
      var hit = shape.hitTest(pt.x, pt.y);
      return new GraceBoolean(hit);
    
            var nat393 = result;
               // end native code insertion
            return nat393;
          };
          func392.paramCounts = [2];
          obj346.methods["hitTest"] = func392;
          func392.definitionLine = 375;
          func392.definitionModule = "createJsGraphicsWrapper";
          obj346.data["createJsGraphics"] = undefined;
          var reader_createJsGraphicsWrapper_createJsGraphics394 = function() {
            return this.data["createJsGraphics"];
          };
          obj346.methods["createJsGraphics"] = reader_createJsGraphicsWrapper_createJsGraphics394;
          obj346.data["createJsGraphics"] = undefined;
          var writer_createJsGraphicsWrapper_createJsGraphics394 = function(argcv, o) {
            this.data["createJsGraphics"] = o;
            return GraceDone;
          };
          obj346.methods["createJsGraphics:="] = writer_createJsGraphicsWrapper_createJsGraphics394;
          obj346.mutable = true;
          obj346.data["color"] = undefined;
          var reader_createJsGraphicsWrapper_color395 = function() {
            return this.data["color"];
          };
          obj346.methods["color"] = reader_createJsGraphicsWrapper_color395;
          obj346.data["color"] = undefined;
          var writer_createJsGraphicsWrapper_color395 = function(argcv, o) {
            this.data["color"] = o;
            return GraceDone;
          };
          obj346.methods["color:="] = writer_createJsGraphicsWrapper_color395;
          reader_createJsGraphicsWrapper_color395.confidential = true;
          writer_createJsGraphicsWrapper_color395.confidential = true;
          obj346.mutable = true;
          setLineNumber(325);    // compilenode num
          var opresult398 = callmethodChecked(new GraceNum(0), "@", [1], new GraceNum(0));
          obj346.data["location"] = opresult398;
          var reader_createJsGraphicsWrapper_location399 = function() {
            return this.data["location"];
          };
          obj346.methods["location"] = reader_createJsGraphicsWrapper_location399;
          obj346.data["location"] = opresult398;
          var writer_createJsGraphicsWrapper_location399 = function(argcv, o) {
            this.data["location"] = o;
            return GraceDone;
          };
          obj346.methods["location:="] = writer_createJsGraphicsWrapper_location399;
          reader_createJsGraphicsWrapper_location399.confidential = true;
          writer_createJsGraphicsWrapper_location399.confidential = true;
          obj346.mutable = true;
          setLineNumber(326);    // compilenode call
          var call400 = callmethodChecked(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call401 = callmethodChecked(call400, "eventListener", [0]);
          obj346.data["listener"] = call401;
          var reader_createJsGraphicsWrapper_listener402 = function() {
            return this.data["listener"];
          };
          obj346.methods["listener"] = reader_createJsGraphicsWrapper_listener402;
          obj346.data["listener"] = call401;
          var writer_createJsGraphicsWrapper_listener402 = function(argcv, o) {
            this.data["listener"] = o;
            return GraceDone;
          };
          obj346.methods["listener:="] = writer_createJsGraphicsWrapper_listener402;
          obj346.mutable = true;
          superDepth = origSuperDepth;
        };
        obj_init_346.apply(obj346, []);
        return obj346;
      };
      func345.paramCounts = [0];
      this.methods["commonGraphics"] = func345;
      func345.definitionLine = 322;
      func345.definitionModule = "createJsGraphicsWrapper";
        var func403 = function(argcv) {    // method commonGraphics()object
          var curarg = 1;
          var inheritingObject = arguments[curarg++];
          // Start argument processing
          curarg = 1;
          // End argument processing
          setModuleName("createJsGraphicsWrapper");
          var returnTarget = invocationCount;
          invocationCount++;
          var obj404 = Grace_allocObject(GraceObject, "commonGraphics");
          obj404.definitionModule = "createJsGraphicsWrapper";
          obj404.definitionLine = 322;
          var inho404 = inheritingObject;
          while (inho404.superobj) inho404 = inho404.superobj;
          inho404.superobj = obj404;
          obj404.data = inheritingObject.data;
          if (inheritingObject.hasOwnProperty('_value'))
            obj404._value = inheritingObject._value;
          obj404.outer = this;
          var reader_createJsGraphicsWrapper_outer405 = function() {
            return this.outer;
          };
          obj404.methods["outer"] = reader_createJsGraphicsWrapper_outer405;
          var obj_init_404 = function() {
            var origSuperDepth = superDepth;
            superDepth = obj404;
            var func406 = function(argcv) {    // method mouseLocation
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for mouseLocation"));
              setModuleName("createJsGraphicsWrapper");
              setLineNumber(329);    // compilenode call
              onSelf = true;
              var call407 = callmethodChecked(this, "listener", [0]);
              var call408 = callmethodChecked(call407, "mouseLocation", [0]);
              return call408;
            };
            func406.paramCounts = [0];
            obj404.methods["mouseLocation"] = func406;
            func406.definitionLine = 328;
            func406.definitionModule = "createJsGraphicsWrapper";
            var func409 = function(argcv) {    // method addMouseUpListener(2)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_graphicsTypeObject = arguments[curarg];
              curarg++;
              var var_block = arguments[curarg];
              curarg++;
              if (argcv[0] !== 2)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addMouseUpListener(2)"));
              setModuleName("createJsGraphicsWrapper");
              setLineNumber(333);    // compilenode call
              onSelf = true;
              var call410 = callmethodChecked(this, "listener", [0]);
              var call411 = callmethodChecked(call410, "onMouseUp:=", [1], var_block);
              setLineNumber(334);    // compilenode call
              onSelf = true;
              var call412 = callmethodChecked(this, "createJsGraphics", [0]);
              onSelf = true;
              var call413 = callmethodChecked(this, "listener", [0]);
              onSelf = true;
              var call414 = callmethodChecked(this, "listener", [0]);
              var call415 = callmethodChecked(call414, "addMouseUpListener", [2], call412, call413);
              return call415;
            };
            func409.paramCounts = [2];
            obj404.methods["addMouseUpListener"] = func409;
            func409.definitionLine = 332;
            func409.definitionModule = "createJsGraphicsWrapper";
            var func416 = function(argcv) {    // method addMouseDownListener(2)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_graphicsTypeObject = arguments[curarg];
              curarg++;
              var var_block = arguments[curarg];
              curarg++;
              if (argcv[0] !== 2)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addMouseDownListener(2)"));
              setModuleName("createJsGraphicsWrapper");
              setLineNumber(338);    // compilenode call
              onSelf = true;
              var call417 = callmethodChecked(this, "listener", [0]);
              var call418 = callmethodChecked(call417, "onMouseDown:=", [1], var_block);
              setLineNumber(339);    // compilenode call
              onSelf = true;
              var call419 = callmethodChecked(this, "createJsGraphics", [0]);
              onSelf = true;
              var call420 = callmethodChecked(this, "listener", [0]);
              onSelf = true;
              var call421 = callmethodChecked(this, "listener", [0]);
              var call422 = callmethodChecked(call421, "addMouseDownListener", [2], call419, call420);
              return call422;
            };
            func416.paramCounts = [2];
            obj404.methods["addMouseDownListener"] = func416;
            func416.definitionLine = 337;
            func416.definitionModule = "createJsGraphicsWrapper";
            var func423 = function(argcv) {    // method addMouseOverListener(2)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_graphicsTypeObject = arguments[curarg];
              curarg++;
              var var_block = arguments[curarg];
              curarg++;
              if (argcv[0] !== 2)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addMouseOverListener(2)"));
              setModuleName("createJsGraphicsWrapper");
              setLineNumber(343);    // compilenode call
              onSelf = true;
              var call424 = callmethodChecked(this, "listener", [0]);
              var call425 = callmethodChecked(call424, "onMouseOver:=", [1], var_block);
              setLineNumber(344);    // compilenode call
              onSelf = true;
              var call426 = callmethodChecked(this, "createJsGraphics", [0]);
              onSelf = true;
              var call427 = callmethodChecked(this, "listener", [0]);
              onSelf = true;
              var call428 = callmethodChecked(this, "listener", [0]);
              var call429 = callmethodChecked(call428, "addMouseOverListener", [2], call426, call427);
              return call429;
            };
            func423.paramCounts = [2];
            obj404.methods["addMouseOverListener"] = func423;
            func423.definitionLine = 342;
            func423.definitionModule = "createJsGraphicsWrapper";
            var func430 = function(argcv) {    // method addClickListener(2)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_graphicsTypeObject = arguments[curarg];
              curarg++;
              var var_block = arguments[curarg];
              curarg++;
              if (argcv[0] !== 2)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addClickListener(2)"));
              setModuleName("createJsGraphicsWrapper");
              setLineNumber(348);    // compilenode call
              onSelf = true;
              var call431 = callmethodChecked(this, "listener", [0]);
              var call432 = callmethodChecked(call431, "onClick:=", [1], var_block);
              setLineNumber(349);    // compilenode call
              onSelf = true;
              var call433 = callmethodChecked(this, "createJsGraphics", [0]);
              onSelf = true;
              var call434 = callmethodChecked(this, "listener", [0]);
              onSelf = true;
              var call435 = callmethodChecked(this, "listener", [0]);
              var call436 = callmethodChecked(call435, "addClickListener", [2], call433, call434);
              return call436;
            };
            func430.paramCounts = [2];
            obj404.methods["addClickListener"] = func430;
            func430.definitionLine = 347;
            func430.definitionModule = "createJsGraphicsWrapper";
            var func437 = function(argcv) {    // method addPressMoveListener(2)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_graphicsTypeObject = arguments[curarg];
              curarg++;
              var var_block = arguments[curarg];
              curarg++;
              if (argcv[0] !== 2)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addPressMoveListener(2)"));
              setModuleName("createJsGraphicsWrapper");
              setLineNumber(353);    // compilenode call
              onSelf = true;
              var call438 = callmethodChecked(this, "listener", [0]);
              var call439 = callmethodChecked(call438, "onPressMove:=", [1], var_block);
              setLineNumber(354);    // compilenode call
              onSelf = true;
              var call440 = callmethodChecked(this, "createJsGraphics", [0]);
              onSelf = true;
              var call441 = callmethodChecked(this, "listener", [0]);
              onSelf = true;
              var call442 = callmethodChecked(this, "listener", [0]);
              var call443 = callmethodChecked(call442, "addPressMoveListener", [2], call440, call441);
              return call443;
            };
            func437.paramCounts = [2];
            obj404.methods["addPressMoveListener"] = func437;
            func437.definitionLine = 352;
            func437.definitionModule = "createJsGraphicsWrapper";
            var func444 = function(argcv) {    // method setLocation(1)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_newLoc = arguments[curarg];
              curarg++;
              if (argcv[0] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for setLocation(1)"));
              setModuleName("createJsGraphicsWrapper");
              setLineNumber(358);    // compilenode identifier
              onSelf = true;
              var call445 = callmethodChecked(this, "location:=", [1], var_newLoc);
              return call445;
            };
            func444.paramCounts = [1];
            obj404.methods["setLocation"] = func444;
            func444.definitionLine = 357;
            func444.definitionModule = "createJsGraphicsWrapper";
            var func446 = function(argcv) {    // method move(2)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_newX = arguments[curarg];
              curarg++;
              var var_newY = arguments[curarg];
              curarg++;
              if (argcv[0] !== 2)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for move(2)"));
              setModuleName("createJsGraphicsWrapper");
              setLineNumber(362);    // compilenode call
                 // start native code from line 362
              var result = GraceDone;
              
      this.data.createJsGraphics.x = var_newX._value;
      this.data.createJsGraphics.y = var_newY._value;
    
              var nat447 = result;
                 // end native code insertion
              return nat447;
            };
            func446.paramCounts = [2];
            obj404.methods["move"] = func446;
            func446.definitionLine = 361;
            func446.definitionModule = "createJsGraphicsWrapper";
            var func448 = function(argcv) {    // method setVisible(1)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_isVisible = arguments[curarg];
              curarg++;
              if (argcv[0] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for setVisible(1)"));
              setModuleName("createJsGraphicsWrapper");
              setLineNumber(369);    // compilenode call
                 // start native code from line 369
              var result = GraceDone;
              
      var isVisible = var_isVisible._value
      this.data.createJsGraphics.visible = isVisible;
    
              var nat449 = result;
                 // end native code insertion
              return nat449;
            };
            func448.paramCounts = [1];
            obj404.methods["setVisible"] = func448;
            func448.definitionLine = 368;
            func448.definitionModule = "createJsGraphicsWrapper";
            var func450 = function(argcv) {    // method hitTest(2)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_x = arguments[curarg];
              curarg++;
              var var_y = arguments[curarg];
              curarg++;
              if (argcv[0] !== 2)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for hitTest(2)"));
              setModuleName("createJsGraphicsWrapper");
              setLineNumber(376);    // compilenode call
                 // start native code from line 376
              var result = GraceDone;
              
      var x = var_x._value;
      var y = var_y._value;
      var shape = this.data.createJsGraphics;
      var pt = shape.globalToLocal(x, y);
      var hit = shape.hitTest(pt.x, pt.y);
      return new GraceBoolean(hit);
    
              var nat451 = result;
                 // end native code insertion
              return nat451;
            };
            func450.paramCounts = [2];
            obj404.methods["hitTest"] = func450;
            func450.definitionLine = 375;
            func450.definitionModule = "createJsGraphicsWrapper";
            obj404.data["createJsGraphics"] = undefined;
            var reader_createJsGraphicsWrapper_createJsGraphics452 = function() {
              return this.data["createJsGraphics"];
            };
            obj404.methods["createJsGraphics"] = reader_createJsGraphicsWrapper_createJsGraphics452;
            obj404.data["createJsGraphics"] = undefined;
            var writer_createJsGraphicsWrapper_createJsGraphics452 = function(argcv, o) {
              this.data["createJsGraphics"] = o;
              return GraceDone;
            };
            obj404.methods["createJsGraphics:="] = writer_createJsGraphicsWrapper_createJsGraphics452;
            obj404.mutable = true;
            obj404.data["color"] = undefined;
            var reader_createJsGraphicsWrapper_color453 = function() {
              return this.data["color"];
            };
            obj404.methods["color"] = reader_createJsGraphicsWrapper_color453;
            obj404.data["color"] = undefined;
            var writer_createJsGraphicsWrapper_color453 = function(argcv, o) {
              this.data["color"] = o;
              return GraceDone;
            };
            obj404.methods["color:="] = writer_createJsGraphicsWrapper_color453;
            reader_createJsGraphicsWrapper_color453.confidential = true;
            writer_createJsGraphicsWrapper_color453.confidential = true;
            obj404.mutable = true;
            setLineNumber(325);    // compilenode num
            var opresult456 = callmethodChecked(new GraceNum(0), "@", [1], new GraceNum(0));
            obj404.data["location"] = opresult456;
            var reader_createJsGraphicsWrapper_location457 = function() {
              return this.data["location"];
            };
            obj404.methods["location"] = reader_createJsGraphicsWrapper_location457;
            obj404.data["location"] = opresult456;
            var writer_createJsGraphicsWrapper_location457 = function(argcv, o) {
              this.data["location"] = o;
              return GraceDone;
            };
            obj404.methods["location:="] = writer_createJsGraphicsWrapper_location457;
            reader_createJsGraphicsWrapper_location457.confidential = true;
            writer_createJsGraphicsWrapper_location457.confidential = true;
            obj404.mutable = true;
            setLineNumber(326);    // compilenode call
            var call458 = callmethodChecked(superDepth, "outer", [0]);
            onOuter = true;
            onSelf = true;
            var call459 = callmethodChecked(call458, "eventListener", [0]);
            obj404.data["listener"] = call459;
            var reader_createJsGraphicsWrapper_listener460 = function() {
              return this.data["listener"];
            };
            obj404.methods["listener"] = reader_createJsGraphicsWrapper_listener460;
            obj404.data["listener"] = call459;
            var writer_createJsGraphicsWrapper_listener460 = function(argcv, o) {
              this.data["listener"] = o;
              return GraceDone;
            };
            obj404.methods["listener:="] = writer_createJsGraphicsWrapper_listener460;
            obj404.mutable = true;
            superDepth = origSuperDepth;
          };
          obj_init_404.apply(inheritingObject, []);
          return obj404;
          };
          this.methods["commonGraphics()object"] = func403;
        setLineNumber(387);    // compilenode method
        var func461 = function(argcv) {    // method shape
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for shape"));
          setModuleName("createJsGraphicsWrapper");
          var obj462 = Grace_allocObject(null, "createJsGraphicsWrapper.identifierBinding‹shape›");
          obj462.definitionModule = "createJsGraphicsWrapper";
          obj462.definitionLine = 387;
          obj462.outer = this;
          var reader_createJsGraphicsWrapper_outer463 = function() {
            return this.outer;
          };
          obj462.methods["outer"] = reader_createJsGraphicsWrapper_outer463;
          var obj_init_462 = function() {
            var origSuperDepth = superDepth;
            superDepth = obj462;
            var func464 = function(argcv) {    // method new
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for new"));
              setModuleName("createJsGraphicsWrapper");
              setLineNumber(393);    // compilenode call
                 // start native code from line 393
              var result = GraceDone;
              
      return new createjs.Shape();
    
              var nat465 = result;
                 // end native code insertion
              return nat465;
            };
            func464.paramCounts = [0];
            obj462.methods["new"] = func464;
            func464.definitionLine = 392;
            func464.definitionModule = "createJsGraphicsWrapper";
            var func466 = function(argcv) {    // method clear
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for clear"));
              setModuleName("createJsGraphicsWrapper");
              setLineNumber(399);    // compilenode call
                 // start native code from line 399
              var result = GraceDone;
              
      this.data.createJsGraphics.graphics.clear();
    
              var nat467 = result;
                 // end native code insertion
              return nat467;
            };
            func466.paramCounts = [0];
            obj462.methods["clear"] = func466;
            func466.definitionLine = 398;
            func466.definitionModule = "createJsGraphicsWrapper";
            var func468 = function(argcv) {    // method beginFill(1)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_color__39__ = arguments[curarg];
              curarg++;
              if (argcv[0] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for beginFill(1)"));
              setModuleName("createJsGraphicsWrapper");
              setLineNumber(404);    // compilenode identifier
              onSelf = true;
              var call469 = callmethodChecked(this, "color:=", [1], var_color__39__);
              setLineNumber(405);    // compilenode call
                 // start native code from line 405
              var result = GraceDone;
              
      var color = this.data.color._value;
      this.data.createJsGraphics.graphics.beginFill(color);
    
              var nat470 = result;
                 // end native code insertion
              return nat470;
            };
            func468.paramCounts = [1];
            obj462.methods["beginFill"] = func468;
            func468.definitionLine = 403;
            func468.definitionModule = "createJsGraphicsWrapper";
            var func471 = function(argcv) {    // method beginStroke(1)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_color__39__ = arguments[curarg];
              curarg++;
              if (argcv[0] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for beginStroke(1)"));
              setModuleName("createJsGraphicsWrapper");
              setLineNumber(411);    // compilenode identifier
              onSelf = true;
              var call472 = callmethodChecked(this, "color:=", [1], var_color__39__);
              setLineNumber(412);    // compilenode call
                 // start native code from line 412
              var result = GraceDone;
              
      var color = this.data.color._value;
      this.data.createJsGraphics.graphics.beginStroke(color);
    
              var nat473 = result;
                 // end native code insertion
              return nat473;
            };
            func471.paramCounts = [1];
            obj462.methods["beginStroke"] = func471;
            func471.definitionLine = 410;
            func471.definitionModule = "createJsGraphicsWrapper";
            setLineNumber(388);    // compilenode call
            var call474 = callmethodChecked(superDepth, "outer", [0]);
            onOuter = true;
            onSelf = true;
            var call475 = callmethodChecked(call474, "commonGraphics()object", [0, 1], this);
            obj462.superobj = call475;
            if (call475.data) obj462.data = call475.data;
            if (call475.hasOwnProperty('_value'))
                obj462._value = call475._value;
            setLineNumber(390);    // compilenode call
            onSelf = true;
            var call476 = callmethodChecked(this, "new", [0]);
            onSelf = true;
            var call477 = callmethodChecked(this, "createJsGraphics:=", [1], call476);
            superDepth = origSuperDepth;
          };
          obj_init_462.apply(obj462, []);
          return obj462;
        };
        func461.paramCounts = [0];
        this.methods["shape"] = func461;
        func461.definitionLine = 387;
        func461.definitionModule = "createJsGraphicsWrapper";
          var func478 = function(argcv) {    // method shape()object
            var curarg = 1;
            var inheritingObject = arguments[curarg++];
            // Start argument processing
            curarg = 1;
            // End argument processing
            setModuleName("createJsGraphicsWrapper");
            var returnTarget = invocationCount;
            invocationCount++;
            var obj479 = Grace_allocObject(null, "shape");
            obj479.definitionModule = "createJsGraphicsWrapper";
            obj479.definitionLine = 387;
            var inho479 = inheritingObject;
            while (inho479.superobj) inho479 = inho479.superobj;
            inho479.superobj = obj479;
            obj479.data = inheritingObject.data;
            if (inheritingObject.hasOwnProperty('_value'))
              obj479._value = inheritingObject._value;
            obj479.outer = this;
            var reader_createJsGraphicsWrapper_outer480 = function() {
              return this.outer;
            };
            obj479.methods["outer"] = reader_createJsGraphicsWrapper_outer480;
            var obj_init_479 = function() {
              var origSuperDepth = superDepth;
              superDepth = obj479;
              var func481 = function(argcv) {    // method new
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                if (argcv[0] !== 0)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for new"));
                setModuleName("createJsGraphicsWrapper");
                setLineNumber(393);    // compilenode call
                   // start native code from line 393
                var result = GraceDone;
                
      return new createjs.Shape();
    
                var nat482 = result;
                   // end native code insertion
                return nat482;
              };
              func481.paramCounts = [0];
              obj479.methods["new"] = func481;
              func481.definitionLine = 392;
              func481.definitionModule = "createJsGraphicsWrapper";
              var func483 = function(argcv) {    // method clear
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                if (argcv[0] !== 0)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for clear"));
                setModuleName("createJsGraphicsWrapper");
                setLineNumber(399);    // compilenode call
                   // start native code from line 399
                var result = GraceDone;
                
      this.data.createJsGraphics.graphics.clear();
    
                var nat484 = result;
                   // end native code insertion
                return nat484;
              };
              func483.paramCounts = [0];
              obj479.methods["clear"] = func483;
              func483.definitionLine = 398;
              func483.definitionModule = "createJsGraphicsWrapper";
              var func485 = function(argcv) {    // method beginFill(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_color__39__ = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for beginFill(1)"));
                setModuleName("createJsGraphicsWrapper");
                setLineNumber(404);    // compilenode identifier
                onSelf = true;
                var call486 = callmethodChecked(this, "color:=", [1], var_color__39__);
                setLineNumber(405);    // compilenode call
                   // start native code from line 405
                var result = GraceDone;
                
      var color = this.data.color._value;
      this.data.createJsGraphics.graphics.beginFill(color);
    
                var nat487 = result;
                   // end native code insertion
                return nat487;
              };
              func485.paramCounts = [1];
              obj479.methods["beginFill"] = func485;
              func485.definitionLine = 403;
              func485.definitionModule = "createJsGraphicsWrapper";
              var func488 = function(argcv) {    // method beginStroke(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_color__39__ = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for beginStroke(1)"));
                setModuleName("createJsGraphicsWrapper");
                setLineNumber(411);    // compilenode identifier
                onSelf = true;
                var call489 = callmethodChecked(this, "color:=", [1], var_color__39__);
                setLineNumber(412);    // compilenode call
                   // start native code from line 412
                var result = GraceDone;
                
      var color = this.data.color._value;
      this.data.createJsGraphics.graphics.beginStroke(color);
    
                var nat490 = result;
                   // end native code insertion
                return nat490;
              };
              func488.paramCounts = [1];
              obj479.methods["beginStroke"] = func488;
              func488.definitionLine = 410;
              func488.definitionModule = "createJsGraphicsWrapper";
              setLineNumber(388);    // compilenode call
              var call491 = callmethodChecked(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call492 = callmethodChecked(call491, "commonGraphics()object", [0, 1], this);
              obj479.superobj = call492;
              if (call492.data) obj479.data = call492.data;
              if (call492.hasOwnProperty('_value'))
                  obj479._value = call492._value;
              setLineNumber(390);    // compilenode call
              onSelf = true;
              var call493 = callmethodChecked(this, "new", [0]);
              onSelf = true;
              var call494 = callmethodChecked(this, "createJsGraphics:=", [1], call493);
              superDepth = origSuperDepth;
            };
            obj_init_479.apply(inheritingObject, []);
            return obj479;
            };
            this.methods["shape()object"] = func478;
          setLineNumber(419);    // compilenode method
          var func495 = function(argcv) {    // method container
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for container"));
            setModuleName("createJsGraphicsWrapper");
            var obj496 = Grace_allocObject(null, "createJsGraphicsWrapper.identifierBinding‹container›");
            obj496.definitionModule = "createJsGraphicsWrapper";
            obj496.definitionLine = 419;
            obj496.outer = this;
            var reader_createJsGraphicsWrapper_outer497 = function() {
              return this.outer;
            };
            obj496.methods["outer"] = reader_createJsGraphicsWrapper_outer497;
            var obj_init_496 = function() {
              var origSuperDepth = superDepth;
              superDepth = obj496;
              var func498 = function(argcv) {    // method new
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                if (argcv[0] !== 0)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for new"));
                setModuleName("createJsGraphicsWrapper");
                setLineNumber(424);    // compilenode call
                   // start native code from line 424
                var result = GraceDone;
                
      return new createjs.Container();
    
                var nat499 = result;
                   // end native code insertion
                return nat499;
              };
              func498.paramCounts = [0];
              obj496.methods["new"] = func498;
              func498.definitionLine = 423;
              func498.definitionModule = "createJsGraphicsWrapper";
              var func500 = function(argcv) {    // method add(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_anObject = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for add(1)"));
                setModuleName("createJsGraphicsWrapper");
                setLineNumber(430);    // compilenode call
                   // start native code from line 430
                var result = GraceDone;
                
      this.data.createJsGraphics.addChild(var_anObject.data.createJsGraphics);
    
                var nat501 = result;
                   // end native code insertion
                return nat501;
              };
              func500.paramCounts = [1];
              obj496.methods["add"] = func500;
              func500.definitionLine = 429;
              func500.definitionModule = "createJsGraphicsWrapper";
              var func502 = function(argcv) {    // method setLocation(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_location = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for setLocation(1)"));
                setModuleName("createJsGraphicsWrapper");
                setLineNumber(436);    // compilenode call
                   // start native code from line 436
                var result = GraceDone;
                
      this.data.createJsGraphics.x = var_location.data.x._value;
      this.data.createJsGraphics.y = var_location.data.y._value;
    
                var nat503 = result;
                   // end native code insertion
                setLineNumber(440);    // compilenode identifier
                return this;
              };
              func502.paramCounts = [1];
              obj496.methods["setLocation"] = func502;
              func502.definitionLine = 435;
              func502.definitionModule = "createJsGraphicsWrapper";
              setLineNumber(420);    // compilenode call
              var call504 = callmethodChecked(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call505 = callmethodChecked(call504, "commonGraphics()object", [0, 1], this);
              obj496.superobj = call505;
              if (call505.data) obj496.data = call505.data;
              if (call505.hasOwnProperty('_value'))
                  obj496._value = call505._value;
              setLineNumber(422);    // compilenode call
              onSelf = true;
              var call506 = callmethodChecked(this, "new", [0]);
              onSelf = true;
              var call507 = callmethodChecked(this, "createJsGraphics:=", [1], call506);
              superDepth = origSuperDepth;
            };
            obj_init_496.apply(obj496, []);
            return obj496;
          };
          func495.paramCounts = [0];
          this.methods["container"] = func495;
          func495.definitionLine = 419;
          func495.definitionModule = "createJsGraphicsWrapper";
            var func508 = function(argcv) {    // method container()object
              var curarg = 1;
              var inheritingObject = arguments[curarg++];
              // Start argument processing
              curarg = 1;
              // End argument processing
              setModuleName("createJsGraphicsWrapper");
              var returnTarget = invocationCount;
              invocationCount++;
              var obj509 = Grace_allocObject(null, "container");
              obj509.definitionModule = "createJsGraphicsWrapper";
              obj509.definitionLine = 419;
              var inho509 = inheritingObject;
              while (inho509.superobj) inho509 = inho509.superobj;
              inho509.superobj = obj509;
              obj509.data = inheritingObject.data;
              if (inheritingObject.hasOwnProperty('_value'))
                obj509._value = inheritingObject._value;
              obj509.outer = this;
              var reader_createJsGraphicsWrapper_outer510 = function() {
                return this.outer;
              };
              obj509.methods["outer"] = reader_createJsGraphicsWrapper_outer510;
              var obj_init_509 = function() {
                var origSuperDepth = superDepth;
                superDepth = obj509;
                var func511 = function(argcv) {    // method new
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  if (argcv[0] !== 0)
                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for new"));
                  setModuleName("createJsGraphicsWrapper");
                  setLineNumber(424);    // compilenode call
                     // start native code from line 424
                  var result = GraceDone;
                  
      return new createjs.Container();
    
                  var nat512 = result;
                     // end native code insertion
                  return nat512;
                };
                func511.paramCounts = [0];
                obj509.methods["new"] = func511;
                func511.definitionLine = 423;
                func511.definitionModule = "createJsGraphicsWrapper";
                var func513 = function(argcv) {    // method add(1)
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  var var_anObject = arguments[curarg];
                  curarg++;
                  if (argcv[0] !== 1)
                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for add(1)"));
                  setModuleName("createJsGraphicsWrapper");
                  setLineNumber(430);    // compilenode call
                     // start native code from line 430
                  var result = GraceDone;
                  
      this.data.createJsGraphics.addChild(var_anObject.data.createJsGraphics);
    
                  var nat514 = result;
                     // end native code insertion
                  return nat514;
                };
                func513.paramCounts = [1];
                obj509.methods["add"] = func513;
                func513.definitionLine = 429;
                func513.definitionModule = "createJsGraphicsWrapper";
                var func515 = function(argcv) {    // method setLocation(1)
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  var var_location = arguments[curarg];
                  curarg++;
                  if (argcv[0] !== 1)
                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for setLocation(1)"));
                  setModuleName("createJsGraphicsWrapper");
                  setLineNumber(436);    // compilenode call
                     // start native code from line 436
                  var result = GraceDone;
                  
      this.data.createJsGraphics.x = var_location.data.x._value;
      this.data.createJsGraphics.y = var_location.data.y._value;
    
                  var nat516 = result;
                     // end native code insertion
                  setLineNumber(440);    // compilenode identifier
                  return this;
                };
                func515.paramCounts = [1];
                obj509.methods["setLocation"] = func515;
                func515.definitionLine = 435;
                func515.definitionModule = "createJsGraphicsWrapper";
                setLineNumber(420);    // compilenode call
                var call517 = callmethodChecked(superDepth, "outer", [0]);
                onOuter = true;
                onSelf = true;
                var call518 = callmethodChecked(call517, "commonGraphics()object", [0, 1], this);
                obj509.superobj = call518;
                if (call518.data) obj509.data = call518.data;
                if (call518.hasOwnProperty('_value'))
                    obj509._value = call518._value;
                setLineNumber(422);    // compilenode call
                onSelf = true;
                var call519 = callmethodChecked(this, "new", [0]);
                onSelf = true;
                var call520 = callmethodChecked(this, "createJsGraphics:=", [1], call519);
                superDepth = origSuperDepth;
              };
              obj_init_509.apply(inheritingObject, []);
              return obj509;
              };
              this.methods["container()object"] = func508;
            setLineNumber(444);    // compilenode method
            var func521 = function(argcv) {    // method circle
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for circle"));
              setModuleName("createJsGraphicsWrapper");
              var obj522 = Grace_allocObject(null, "createJsGraphicsWrapper.identifierBinding‹circle›");
              obj522.definitionModule = "createJsGraphicsWrapper";
              obj522.definitionLine = 444;
              obj522.outer = this;
              var reader_createJsGraphicsWrapper_outer523 = function() {
                return this.outer;
              };
              obj522.methods["outer"] = reader_createJsGraphicsWrapper_outer523;
              var obj_init_522 = function() {
                var origSuperDepth = superDepth;
                superDepth = obj522;
                var func524 = function(argcv) {    // method draw(1)
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  var var_radius__39__ = arguments[curarg];
                  curarg++;
                  if (argcv[0] !== 1)
                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for draw(1)"));
                  setModuleName("createJsGraphicsWrapper");
                  setLineNumber(448);    // compilenode identifier
                  onSelf = true;
                  var call525 = callmethodChecked(this, "radius:=", [1], var_radius__39__);
                  setLineNumber(449);    // compilenode call
                     // start native code from line 449
                  var result = GraceDone;
                  
      var x = this.data.location.data.x._value;
      var y = this.data.location.data.y._value;
      var radius = this.data.radius._value;

      this.data.createJsGraphics.graphics.drawCircle(x, y, radius);
      var circle = this.data.createJsGraphics;
      return circle;
    
                  var nat526 = result;
                     // end native code insertion
                  return nat526;
                };
                func524.paramCounts = [1];
                obj522.methods["draw"] = func524;
                func524.definitionLine = 447;
                func524.definitionModule = "createJsGraphicsWrapper";
                setLineNumber(445);    // compilenode call
                var call527 = callmethodChecked(superDepth, "outer", [0]);
                onOuter = true;
                onSelf = true;
                var call528 = callmethodChecked(call527, "shape()object", [0, 1], this);
                obj522.superobj = call528;
                if (call528.data) obj522.data = call528.data;
                if (call528.hasOwnProperty('_value'))
                    obj522._value = call528._value;
                obj522.data["radius"] = undefined;
                var reader_createJsGraphicsWrapper_radius529 = function() {
                  return this.data["radius"];
                };
                obj522.methods["radius"] = reader_createJsGraphicsWrapper_radius529;
                obj522.data["radius"] = undefined;
                var writer_createJsGraphicsWrapper_radius529 = function(argcv, o) {
                  this.data["radius"] = o;
                  return GraceDone;
                };
                obj522.methods["radius:="] = writer_createJsGraphicsWrapper_radius529;
                reader_createJsGraphicsWrapper_radius529.confidential = true;
                writer_createJsGraphicsWrapper_radius529.confidential = true;
                obj522.mutable = true;
                superDepth = origSuperDepth;
              };
              obj_init_522.apply(obj522, []);
              return obj522;
            };
            func521.paramCounts = [0];
            this.methods["circle"] = func521;
            func521.definitionLine = 444;
            func521.definitionModule = "createJsGraphicsWrapper";
              var func530 = function(argcv) {    // method circle()object
                var curarg = 1;
                var inheritingObject = arguments[curarg++];
                // Start argument processing
                curarg = 1;
                // End argument processing
                setModuleName("createJsGraphicsWrapper");
                var returnTarget = invocationCount;
                invocationCount++;
                var obj531 = Grace_allocObject(null, "circle");
                obj531.definitionModule = "createJsGraphicsWrapper";
                obj531.definitionLine = 444;
                var inho531 = inheritingObject;
                while (inho531.superobj) inho531 = inho531.superobj;
                inho531.superobj = obj531;
                obj531.data = inheritingObject.data;
                if (inheritingObject.hasOwnProperty('_value'))
                  obj531._value = inheritingObject._value;
                obj531.outer = this;
                var reader_createJsGraphicsWrapper_outer532 = function() {
                  return this.outer;
                };
                obj531.methods["outer"] = reader_createJsGraphicsWrapper_outer532;
                var obj_init_531 = function() {
                  var origSuperDepth = superDepth;
                  superDepth = obj531;
                  var func533 = function(argcv) {    // method draw(1)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_radius__39__ = arguments[curarg];
                    curarg++;
                    if (argcv[0] !== 1)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for draw(1)"));
                    setModuleName("createJsGraphicsWrapper");
                    setLineNumber(448);    // compilenode identifier
                    onSelf = true;
                    var call534 = callmethodChecked(this, "radius:=", [1], var_radius__39__);
                    setLineNumber(449);    // compilenode call
                       // start native code from line 449
                    var result = GraceDone;
                    
      var x = this.data.location.data.x._value;
      var y = this.data.location.data.y._value;
      var radius = this.data.radius._value;

      this.data.createJsGraphics.graphics.drawCircle(x, y, radius);
      var circle = this.data.createJsGraphics;
      return circle;
    
                    var nat535 = result;
                       // end native code insertion
                    return nat535;
                  };
                  func533.paramCounts = [1];
                  obj531.methods["draw"] = func533;
                  func533.definitionLine = 447;
                  func533.definitionModule = "createJsGraphicsWrapper";
                  setLineNumber(445);    // compilenode call
                  var call536 = callmethodChecked(superDepth, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call537 = callmethodChecked(call536, "shape()object", [0, 1], this);
                  obj531.superobj = call537;
                  if (call537.data) obj531.data = call537.data;
                  if (call537.hasOwnProperty('_value'))
                      obj531._value = call537._value;
                  obj531.data["radius"] = undefined;
                  var reader_createJsGraphicsWrapper_radius538 = function() {
                    return this.data["radius"];
                  };
                  obj531.methods["radius"] = reader_createJsGraphicsWrapper_radius538;
                  obj531.data["radius"] = undefined;
                  var writer_createJsGraphicsWrapper_radius538 = function(argcv, o) {
                    this.data["radius"] = o;
                    return GraceDone;
                  };
                  obj531.methods["radius:="] = writer_createJsGraphicsWrapper_radius538;
                  reader_createJsGraphicsWrapper_radius538.confidential = true;
                  writer_createJsGraphicsWrapper_radius538.confidential = true;
                  obj531.mutable = true;
                  superDepth = origSuperDepth;
                };
                obj_init_531.apply(inheritingObject, []);
                return obj531;
                };
                this.methods["circle()object"] = func530;
              setLineNumber(461);    // compilenode method
              var func539 = function(argcv) {    // method rectangle
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                if (argcv[0] !== 0)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for rectangle"));
                setModuleName("createJsGraphicsWrapper");
                var obj540 = Grace_allocObject(null, "createJsGraphicsWrapper.identifierBinding‹rectangle›");
                obj540.definitionModule = "createJsGraphicsWrapper";
                obj540.definitionLine = 461;
                obj540.outer = this;
                var reader_createJsGraphicsWrapper_outer541 = function() {
                  return this.outer;
                };
                obj540.methods["outer"] = reader_createJsGraphicsWrapper_outer541;
                var obj_init_540 = function() {
                  var origSuperDepth = superDepth;
                  superDepth = obj540;
                  var func542 = function(argcv) {    // method draw(2)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_w = arguments[curarg];
                    curarg++;
                    var var_h = arguments[curarg];
                    curarg++;
                    if (argcv[0] !== 2)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for draw(2)"));
                    setModuleName("createJsGraphicsWrapper");
                    setLineNumber(466);    // compilenode identifier
                    onSelf = true;
                    var call543 = callmethodChecked(this, "width:=", [1], var_w);
                    setLineNumber(467);    // compilenode identifier
                    onSelf = true;
                    var call544 = callmethodChecked(this, "height:=", [1], var_h);
                    setLineNumber(468);    // compilenode call
                       // start native code from line 468
                    var result = GraceDone;
                    
      var x = this.data.location.data.x._value;
      var y = this.data.location.data.y._value;
      var height = this.data.height._value
      var width = this.data.width._value
      this.data.createJsGraphics.graphics.drawRect(x, y, width, height);
    
                    var nat545 = result;
                       // end native code insertion
                    return nat545;
                  };
                  func542.paramCounts = [2];
                  obj540.methods["draw"] = func542;
                  func542.definitionLine = 465;
                  func542.definitionModule = "createJsGraphicsWrapper";
                  setLineNumber(462);    // compilenode call
                  var call546 = callmethodChecked(superDepth, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call547 = callmethodChecked(call546, "shape()object", [0, 1], this);
                  obj540.superobj = call547;
                  if (call547.data) obj540.data = call547.data;
                  if (call547.hasOwnProperty('_value'))
                      obj540._value = call547._value;
                  obj540.data["height"] = undefined;
                  var reader_createJsGraphicsWrapper_height548 = function() {
                    return this.data["height"];
                  };
                  obj540.methods["height"] = reader_createJsGraphicsWrapper_height548;
                  obj540.data["height"] = undefined;
                  var writer_createJsGraphicsWrapper_height548 = function(argcv, o) {
                    this.data["height"] = o;
                    return GraceDone;
                  };
                  obj540.methods["height:="] = writer_createJsGraphicsWrapper_height548;
                  reader_createJsGraphicsWrapper_height548.confidential = true;
                  writer_createJsGraphicsWrapper_height548.confidential = true;
                  obj540.mutable = true;
                  obj540.data["width"] = undefined;
                  var reader_createJsGraphicsWrapper_width549 = function() {
                    return this.data["width"];
                  };
                  obj540.methods["width"] = reader_createJsGraphicsWrapper_width549;
                  obj540.data["width"] = undefined;
                  var writer_createJsGraphicsWrapper_width549 = function(argcv, o) {
                    this.data["width"] = o;
                    return GraceDone;
                  };
                  obj540.methods["width:="] = writer_createJsGraphicsWrapper_width549;
                  reader_createJsGraphicsWrapper_width549.confidential = true;
                  writer_createJsGraphicsWrapper_width549.confidential = true;
                  obj540.mutable = true;
                  superDepth = origSuperDepth;
                };
                obj_init_540.apply(obj540, []);
                return obj540;
              };
              func539.paramCounts = [0];
              this.methods["rectangle"] = func539;
              func539.definitionLine = 461;
              func539.definitionModule = "createJsGraphicsWrapper";
                var func550 = function(argcv) {    // method rectangle()object
                  var curarg = 1;
                  var inheritingObject = arguments[curarg++];
                  // Start argument processing
                  curarg = 1;
                  // End argument processing
                  setModuleName("createJsGraphicsWrapper");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var obj551 = Grace_allocObject(null, "rectangle");
                  obj551.definitionModule = "createJsGraphicsWrapper";
                  obj551.definitionLine = 461;
                  var inho551 = inheritingObject;
                  while (inho551.superobj) inho551 = inho551.superobj;
                  inho551.superobj = obj551;
                  obj551.data = inheritingObject.data;
                  if (inheritingObject.hasOwnProperty('_value'))
                    obj551._value = inheritingObject._value;
                  obj551.outer = this;
                  var reader_createJsGraphicsWrapper_outer552 = function() {
                    return this.outer;
                  };
                  obj551.methods["outer"] = reader_createJsGraphicsWrapper_outer552;
                  var obj_init_551 = function() {
                    var origSuperDepth = superDepth;
                    superDepth = obj551;
                    var func553 = function(argcv) {    // method draw(2)
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var curarg = 1;
                      var var_w = arguments[curarg];
                      curarg++;
                      var var_h = arguments[curarg];
                      curarg++;
                      if (argcv[0] !== 2)
                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for draw(2)"));
                      setModuleName("createJsGraphicsWrapper");
                      setLineNumber(466);    // compilenode identifier
                      onSelf = true;
                      var call554 = callmethodChecked(this, "width:=", [1], var_w);
                      setLineNumber(467);    // compilenode identifier
                      onSelf = true;
                      var call555 = callmethodChecked(this, "height:=", [1], var_h);
                      setLineNumber(468);    // compilenode call
                         // start native code from line 468
                      var result = GraceDone;
                      
      var x = this.data.location.data.x._value;
      var y = this.data.location.data.y._value;
      var height = this.data.height._value
      var width = this.data.width._value
      this.data.createJsGraphics.graphics.drawRect(x, y, width, height);
    
                      var nat556 = result;
                         // end native code insertion
                      return nat556;
                    };
                    func553.paramCounts = [2];
                    obj551.methods["draw"] = func553;
                    func553.definitionLine = 465;
                    func553.definitionModule = "createJsGraphicsWrapper";
                    setLineNumber(462);    // compilenode call
                    var call557 = callmethodChecked(superDepth, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call558 = callmethodChecked(call557, "shape()object", [0, 1], this);
                    obj551.superobj = call558;
                    if (call558.data) obj551.data = call558.data;
                    if (call558.hasOwnProperty('_value'))
                        obj551._value = call558._value;
                    obj551.data["height"] = undefined;
                    var reader_createJsGraphicsWrapper_height559 = function() {
                      return this.data["height"];
                    };
                    obj551.methods["height"] = reader_createJsGraphicsWrapper_height559;
                    obj551.data["height"] = undefined;
                    var writer_createJsGraphicsWrapper_height559 = function(argcv, o) {
                      this.data["height"] = o;
                      return GraceDone;
                    };
                    obj551.methods["height:="] = writer_createJsGraphicsWrapper_height559;
                    reader_createJsGraphicsWrapper_height559.confidential = true;
                    writer_createJsGraphicsWrapper_height559.confidential = true;
                    obj551.mutable = true;
                    obj551.data["width"] = undefined;
                    var reader_createJsGraphicsWrapper_width560 = function() {
                      return this.data["width"];
                    };
                    obj551.methods["width"] = reader_createJsGraphicsWrapper_width560;
                    obj551.data["width"] = undefined;
                    var writer_createJsGraphicsWrapper_width560 = function(argcv, o) {
                      this.data["width"] = o;
                      return GraceDone;
                    };
                    obj551.methods["width:="] = writer_createJsGraphicsWrapper_width560;
                    reader_createJsGraphicsWrapper_width560.confidential = true;
                    writer_createJsGraphicsWrapper_width560.confidential = true;
                    obj551.mutable = true;
                    superDepth = origSuperDepth;
                  };
                  obj_init_551.apply(inheritingObject, []);
                  return obj551;
                  };
                  this.methods["rectangle()object"] = func550;
                setLineNumber(478);    // compilenode method
                var func561 = function(argcv) {    // method polyStar
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  if (argcv[0] !== 0)
                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for polyStar"));
                  setModuleName("createJsGraphicsWrapper");
                  var obj562 = Grace_allocObject(null, "createJsGraphicsWrapper.identifierBinding‹polyStar›");
                  obj562.definitionModule = "createJsGraphicsWrapper";
                  obj562.definitionLine = 478;
                  obj562.outer = this;
                  var reader_createJsGraphicsWrapper_outer563 = function() {
                    return this.outer;
                  };
                  obj562.methods["outer"] = reader_createJsGraphicsWrapper_outer563;
                  var obj_init_562 = function() {
                    var origSuperDepth = superDepth;
                    superDepth = obj562;
                    var func564 = function(argcv) {    // method draw(4)
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var curarg = 1;
                      var var_size__39__ = arguments[curarg];
                      curarg++;
                      var var_sides__39__ = arguments[curarg];
                      curarg++;
                      var var_pointSize__39__ = arguments[curarg];
                      curarg++;
                      var var_angle__39__ = arguments[curarg];
                      curarg++;
                      if (argcv[0] !== 4)
                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for draw(4)"));
                      setModuleName("createJsGraphicsWrapper");
                      setLineNumber(485);    // compilenode identifier
                      onSelf = true;
                      var call565 = callmethodChecked(this, "size:=", [1], var_size__39__);
                      setLineNumber(486);    // compilenode identifier
                      onSelf = true;
                      var call566 = callmethodChecked(this, "pointSize:=", [1], var_pointSize__39__);
                      setLineNumber(487);    // compilenode identifier
                      onSelf = true;
                      var call567 = callmethodChecked(this, "angle:=", [1], var_angle__39__);
                      setLineNumber(488);    // compilenode identifier
                      onSelf = true;
                      var call568 = callmethodChecked(this, "sides:=", [1], var_sides__39__);
                      setLineNumber(489);    // compilenode call
                         // start native code from line 489
                      var result = GraceDone;
                      
      var x = this.data.location.data.x._value;
      var y = this.data.location.data.y._value;
      var size = this.data.size._value;
      var sides = this.data.sides._value;
      var pointSize = this.data.pointSize._value;
      var angle = this.data.angle._value;
      this.data.createJsGraphics.graphics.drawPolyStar(x, y, size, sides,pointSize, angle);
    
                      var nat569 = result;
                         // end native code insertion
                      return nat569;
                    };
                    func564.paramCounts = [4];
                    obj562.methods["draw"] = func564;
                    func564.definitionLine = 484;
                    func564.definitionModule = "createJsGraphicsWrapper";
                    setLineNumber(479);    // compilenode call
                    var call570 = callmethodChecked(superDepth, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call571 = callmethodChecked(call570, "shape()object", [0, 1], this);
                    obj562.superobj = call571;
                    if (call571.data) obj562.data = call571.data;
                    if (call571.hasOwnProperty('_value'))
                        obj562._value = call571._value;
                    setLineNumber(480);    // compilenode num
                    obj562.data["size"] = new GraceNum(20);
                    var reader_createJsGraphicsWrapper_size572 = function() {
                      return this.data["size"];
                    };
                    obj562.methods["size"] = reader_createJsGraphicsWrapper_size572;
                    obj562.data["size"] = new GraceNum(20);
                    var writer_createJsGraphicsWrapper_size572 = function(argcv, o) {
                      this.data["size"] = o;
                      return GraceDone;
                    };
                    obj562.methods["size:="] = writer_createJsGraphicsWrapper_size572;
                    obj562.mutable = true;
                    setLineNumber(481);    // compilenode num
                    obj562.data["sides"] = new GraceNum(5);
                    var reader_createJsGraphicsWrapper_sides573 = function() {
                      return this.data["sides"];
                    };
                    obj562.methods["sides"] = reader_createJsGraphicsWrapper_sides573;
                    obj562.data["sides"] = new GraceNum(5);
                    var writer_createJsGraphicsWrapper_sides573 = function(argcv, o) {
                      this.data["sides"] = o;
                      return GraceDone;
                    };
                    obj562.methods["sides:="] = writer_createJsGraphicsWrapper_sides573;
                    obj562.mutable = true;
                    setLineNumber(482);    // compilenode num
                    obj562.data["pointSize"] = new GraceNum(2);
                    var reader_createJsGraphicsWrapper_pointSize574 = function() {
                      return this.data["pointSize"];
                    };
                    obj562.methods["pointSize"] = reader_createJsGraphicsWrapper_pointSize574;
                    obj562.data["pointSize"] = new GraceNum(2);
                    var writer_createJsGraphicsWrapper_pointSize574 = function(argcv, o) {
                      this.data["pointSize"] = o;
                      return GraceDone;
                    };
                    obj562.methods["pointSize:="] = writer_createJsGraphicsWrapper_pointSize574;
                    obj562.mutable = true;
                    setLineNumber(483);    // compilenode num
                    var call575 = callmethodChecked(new GraceNum(90), "prefix-", [0]);
                    obj562.data["angle"] = call575;
                    var reader_createJsGraphicsWrapper_angle576 = function() {
                      return this.data["angle"];
                    };
                    obj562.methods["angle"] = reader_createJsGraphicsWrapper_angle576;
                    obj562.data["angle"] = call575;
                    var writer_createJsGraphicsWrapper_angle576 = function(argcv, o) {
                      this.data["angle"] = o;
                      return GraceDone;
                    };
                    obj562.methods["angle:="] = writer_createJsGraphicsWrapper_angle576;
                    obj562.mutable = true;
                    superDepth = origSuperDepth;
                  };
                  obj_init_562.apply(obj562, []);
                  return obj562;
                };
                func561.paramCounts = [0];
                this.methods["polyStar"] = func561;
                func561.definitionLine = 478;
                func561.definitionModule = "createJsGraphicsWrapper";
                  var func577 = function(argcv) {    // method polyStar()object
                    var curarg = 1;
                    var inheritingObject = arguments[curarg++];
                    // Start argument processing
                    curarg = 1;
                    // End argument processing
                    setModuleName("createJsGraphicsWrapper");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var obj578 = Grace_allocObject(null, "polyStar");
                    obj578.definitionModule = "createJsGraphicsWrapper";
                    obj578.definitionLine = 478;
                    var inho578 = inheritingObject;
                    while (inho578.superobj) inho578 = inho578.superobj;
                    inho578.superobj = obj578;
                    obj578.data = inheritingObject.data;
                    if (inheritingObject.hasOwnProperty('_value'))
                      obj578._value = inheritingObject._value;
                    obj578.outer = this;
                    var reader_createJsGraphicsWrapper_outer579 = function() {
                      return this.outer;
                    };
                    obj578.methods["outer"] = reader_createJsGraphicsWrapper_outer579;
                    var obj_init_578 = function() {
                      var origSuperDepth = superDepth;
                      superDepth = obj578;
                      var func580 = function(argcv) {    // method draw(4)
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var curarg = 1;
                        var var_size__39__ = arguments[curarg];
                        curarg++;
                        var var_sides__39__ = arguments[curarg];
                        curarg++;
                        var var_pointSize__39__ = arguments[curarg];
                        curarg++;
                        var var_angle__39__ = arguments[curarg];
                        curarg++;
                        if (argcv[0] !== 4)
                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for draw(4)"));
                        setModuleName("createJsGraphicsWrapper");
                        setLineNumber(485);    // compilenode identifier
                        onSelf = true;
                        var call581 = callmethodChecked(this, "size:=", [1], var_size__39__);
                        setLineNumber(486);    // compilenode identifier
                        onSelf = true;
                        var call582 = callmethodChecked(this, "pointSize:=", [1], var_pointSize__39__);
                        setLineNumber(487);    // compilenode identifier
                        onSelf = true;
                        var call583 = callmethodChecked(this, "angle:=", [1], var_angle__39__);
                        setLineNumber(488);    // compilenode identifier
                        onSelf = true;
                        var call584 = callmethodChecked(this, "sides:=", [1], var_sides__39__);
                        setLineNumber(489);    // compilenode call
                           // start native code from line 489
                        var result = GraceDone;
                        
      var x = this.data.location.data.x._value;
      var y = this.data.location.data.y._value;
      var size = this.data.size._value;
      var sides = this.data.sides._value;
      var pointSize = this.data.pointSize._value;
      var angle = this.data.angle._value;
      this.data.createJsGraphics.graphics.drawPolyStar(x, y, size, sides,pointSize, angle);
    
                        var nat585 = result;
                           // end native code insertion
                        return nat585;
                      };
                      func580.paramCounts = [4];
                      obj578.methods["draw"] = func580;
                      func580.definitionLine = 484;
                      func580.definitionModule = "createJsGraphicsWrapper";
                      setLineNumber(479);    // compilenode call
                      var call586 = callmethodChecked(superDepth, "outer", [0]);
                      onOuter = true;
                      onSelf = true;
                      var call587 = callmethodChecked(call586, "shape()object", [0, 1], this);
                      obj578.superobj = call587;
                      if (call587.data) obj578.data = call587.data;
                      if (call587.hasOwnProperty('_value'))
                          obj578._value = call587._value;
                      setLineNumber(480);    // compilenode num
                      obj578.data["size"] = new GraceNum(20);
                      var reader_createJsGraphicsWrapper_size588 = function() {
                        return this.data["size"];
                      };
                      obj578.methods["size"] = reader_createJsGraphicsWrapper_size588;
                      obj578.data["size"] = new GraceNum(20);
                      var writer_createJsGraphicsWrapper_size588 = function(argcv, o) {
                        this.data["size"] = o;
                        return GraceDone;
                      };
                      obj578.methods["size:="] = writer_createJsGraphicsWrapper_size588;
                      obj578.mutable = true;
                      setLineNumber(481);    // compilenode num
                      obj578.data["sides"] = new GraceNum(5);
                      var reader_createJsGraphicsWrapper_sides589 = function() {
                        return this.data["sides"];
                      };
                      obj578.methods["sides"] = reader_createJsGraphicsWrapper_sides589;
                      obj578.data["sides"] = new GraceNum(5);
                      var writer_createJsGraphicsWrapper_sides589 = function(argcv, o) {
                        this.data["sides"] = o;
                        return GraceDone;
                      };
                      obj578.methods["sides:="] = writer_createJsGraphicsWrapper_sides589;
                      obj578.mutable = true;
                      setLineNumber(482);    // compilenode num
                      obj578.data["pointSize"] = new GraceNum(2);
                      var reader_createJsGraphicsWrapper_pointSize590 = function() {
                        return this.data["pointSize"];
                      };
                      obj578.methods["pointSize"] = reader_createJsGraphicsWrapper_pointSize590;
                      obj578.data["pointSize"] = new GraceNum(2);
                      var writer_createJsGraphicsWrapper_pointSize590 = function(argcv, o) {
                        this.data["pointSize"] = o;
                        return GraceDone;
                      };
                      obj578.methods["pointSize:="] = writer_createJsGraphicsWrapper_pointSize590;
                      obj578.mutable = true;
                      setLineNumber(483);    // compilenode num
                      var call591 = callmethodChecked(new GraceNum(90), "prefix-", [0]);
                      obj578.data["angle"] = call591;
                      var reader_createJsGraphicsWrapper_angle592 = function() {
                        return this.data["angle"];
                      };
                      obj578.methods["angle"] = reader_createJsGraphicsWrapper_angle592;
                      obj578.data["angle"] = call591;
                      var writer_createJsGraphicsWrapper_angle592 = function(argcv, o) {
                        this.data["angle"] = o;
                        return GraceDone;
                      };
                      obj578.methods["angle:="] = writer_createJsGraphicsWrapper_angle592;
                      obj578.mutable = true;
                      superDepth = origSuperDepth;
                    };
                    obj_init_578.apply(inheritingObject, []);
                    return obj578;
                    };
                    this.methods["polyStar()object"] = func577;
                  setLineNumber(501);    // compilenode method
                  var func593 = function(argcv) {    // method roundRect
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    if (argcv[0] !== 0)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for roundRect"));
                    setModuleName("createJsGraphicsWrapper");
                    var obj594 = Grace_allocObject(null, "createJsGraphicsWrapper.identifierBinding‹roundRect›");
                    obj594.definitionModule = "createJsGraphicsWrapper";
                    obj594.definitionLine = 501;
                    obj594.outer = this;
                    var reader_createJsGraphicsWrapper_outer595 = function() {
                      return this.outer;
                    };
                    obj594.methods["outer"] = reader_createJsGraphicsWrapper_outer595;
                    var obj_init_594 = function() {
                      var origSuperDepth = superDepth;
                      superDepth = obj594;
                      var func596 = function(argcv) {    // method draw(3)
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var curarg = 1;
                        var var_width__39__ = arguments[curarg];
                        curarg++;
                        var var_height__39__ = arguments[curarg];
                        curarg++;
                        var var_radius__39__ = arguments[curarg];
                        curarg++;
                        if (argcv[0] !== 3)
                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for draw(3)"));
                        setModuleName("createJsGraphicsWrapper");
                        setLineNumber(507);    // compilenode identifier
                        onSelf = true;
                        var call597 = callmethodChecked(this, "width:=", [1], var_width__39__);
                        setLineNumber(508);    // compilenode identifier
                        onSelf = true;
                        var call598 = callmethodChecked(this, "height:=", [1], var_height__39__);
                        setLineNumber(509);    // compilenode identifier
                        onSelf = true;
                        var call599 = callmethodChecked(this, "radius:=", [1], var_radius__39__);
                        setLineNumber(511);    // compilenode call
                           // start native code from line 511
                        var result = GraceDone;
                        
      var x = this.data.location.data.x._value;
      var y = this.data.location.data.y._value;
      var height = this.data.height._value
      var width = this.data.width._value
      var radius = this.data.radius._value
      this.data.createJsGraphics.graphics.drawRoundRect(x, y, width, height, radius);
  
                        var nat600 = result;
                           // end native code insertion
                        return nat600;
                      };
                      func596.paramCounts = [3];
                      obj594.methods["draw"] = func596;
                      func596.definitionLine = 506;
                      func596.definitionModule = "createJsGraphicsWrapper";
                      setLineNumber(502);    // compilenode call
                      var call601 = callmethodChecked(superDepth, "outer", [0]);
                      onOuter = true;
                      onSelf = true;
                      var call602 = callmethodChecked(call601, "shape()object", [0, 1], this);
                      obj594.superobj = call602;
                      if (call602.data) obj594.data = call602.data;
                      if (call602.hasOwnProperty('_value'))
                          obj594._value = call602._value;
                      obj594.data["height"] = undefined;
                      var reader_createJsGraphicsWrapper_height603 = function() {
                        return this.data["height"];
                      };
                      obj594.methods["height"] = reader_createJsGraphicsWrapper_height603;
                      obj594.data["height"] = undefined;
                      var writer_createJsGraphicsWrapper_height603 = function(argcv, o) {
                        this.data["height"] = o;
                        return GraceDone;
                      };
                      obj594.methods["height:="] = writer_createJsGraphicsWrapper_height603;
                      reader_createJsGraphicsWrapper_height603.confidential = true;
                      writer_createJsGraphicsWrapper_height603.confidential = true;
                      obj594.mutable = true;
                      obj594.data["width"] = undefined;
                      var reader_createJsGraphicsWrapper_width604 = function() {
                        return this.data["width"];
                      };
                      obj594.methods["width"] = reader_createJsGraphicsWrapper_width604;
                      obj594.data["width"] = undefined;
                      var writer_createJsGraphicsWrapper_width604 = function(argcv, o) {
                        this.data["width"] = o;
                        return GraceDone;
                      };
                      obj594.methods["width:="] = writer_createJsGraphicsWrapper_width604;
                      reader_createJsGraphicsWrapper_width604.confidential = true;
                      writer_createJsGraphicsWrapper_width604.confidential = true;
                      obj594.mutable = true;
                      setLineNumber(505);    // compilenode num
                      obj594.data["radius"] = new GraceNum(15);
                      var reader_createJsGraphicsWrapper_radius605 = function() {
                        return this.data["radius"];
                      };
                      obj594.methods["radius"] = reader_createJsGraphicsWrapper_radius605;
                      obj594.data["radius"] = new GraceNum(15);
                      var writer_createJsGraphicsWrapper_radius605 = function(argcv, o) {
                        this.data["radius"] = o;
                        return GraceDone;
                      };
                      obj594.methods["radius:="] = writer_createJsGraphicsWrapper_radius605;
                      obj594.mutable = true;
                      superDepth = origSuperDepth;
                    };
                    obj_init_594.apply(obj594, []);
                    return obj594;
                  };
                  func593.paramCounts = [0];
                  this.methods["roundRect"] = func593;
                  func593.definitionLine = 501;
                  func593.definitionModule = "createJsGraphicsWrapper";
                    var func606 = function(argcv) {    // method roundRect()object
                      var curarg = 1;
                      var inheritingObject = arguments[curarg++];
                      // Start argument processing
                      curarg = 1;
                      // End argument processing
                      setModuleName("createJsGraphicsWrapper");
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var obj607 = Grace_allocObject(null, "roundRect");
                      obj607.definitionModule = "createJsGraphicsWrapper";
                      obj607.definitionLine = 501;
                      var inho607 = inheritingObject;
                      while (inho607.superobj) inho607 = inho607.superobj;
                      inho607.superobj = obj607;
                      obj607.data = inheritingObject.data;
                      if (inheritingObject.hasOwnProperty('_value'))
                        obj607._value = inheritingObject._value;
                      obj607.outer = this;
                      var reader_createJsGraphicsWrapper_outer608 = function() {
                        return this.outer;
                      };
                      obj607.methods["outer"] = reader_createJsGraphicsWrapper_outer608;
                      var obj_init_607 = function() {
                        var origSuperDepth = superDepth;
                        superDepth = obj607;
                        var func609 = function(argcv) {    // method draw(3)
                          var returnTarget = invocationCount;
                          invocationCount++;
                          var curarg = 1;
                          var var_width__39__ = arguments[curarg];
                          curarg++;
                          var var_height__39__ = arguments[curarg];
                          curarg++;
                          var var_radius__39__ = arguments[curarg];
                          curarg++;
                          if (argcv[0] !== 3)
                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for draw(3)"));
                          setModuleName("createJsGraphicsWrapper");
                          setLineNumber(507);    // compilenode identifier
                          onSelf = true;
                          var call610 = callmethodChecked(this, "width:=", [1], var_width__39__);
                          setLineNumber(508);    // compilenode identifier
                          onSelf = true;
                          var call611 = callmethodChecked(this, "height:=", [1], var_height__39__);
                          setLineNumber(509);    // compilenode identifier
                          onSelf = true;
                          var call612 = callmethodChecked(this, "radius:=", [1], var_radius__39__);
                          setLineNumber(511);    // compilenode call
                             // start native code from line 511
                          var result = GraceDone;
                          
      var x = this.data.location.data.x._value;
      var y = this.data.location.data.y._value;
      var height = this.data.height._value
      var width = this.data.width._value
      var radius = this.data.radius._value
      this.data.createJsGraphics.graphics.drawRoundRect(x, y, width, height, radius);
  
                          var nat613 = result;
                             // end native code insertion
                          return nat613;
                        };
                        func609.paramCounts = [3];
                        obj607.methods["draw"] = func609;
                        func609.definitionLine = 506;
                        func609.definitionModule = "createJsGraphicsWrapper";
                        setLineNumber(502);    // compilenode call
                        var call614 = callmethodChecked(superDepth, "outer", [0]);
                        onOuter = true;
                        onSelf = true;
                        var call615 = callmethodChecked(call614, "shape()object", [0, 1], this);
                        obj607.superobj = call615;
                        if (call615.data) obj607.data = call615.data;
                        if (call615.hasOwnProperty('_value'))
                            obj607._value = call615._value;
                        obj607.data["height"] = undefined;
                        var reader_createJsGraphicsWrapper_height616 = function() {
                          return this.data["height"];
                        };
                        obj607.methods["height"] = reader_createJsGraphicsWrapper_height616;
                        obj607.data["height"] = undefined;
                        var writer_createJsGraphicsWrapper_height616 = function(argcv, o) {
                          this.data["height"] = o;
                          return GraceDone;
                        };
                        obj607.methods["height:="] = writer_createJsGraphicsWrapper_height616;
                        reader_createJsGraphicsWrapper_height616.confidential = true;
                        writer_createJsGraphicsWrapper_height616.confidential = true;
                        obj607.mutable = true;
                        obj607.data["width"] = undefined;
                        var reader_createJsGraphicsWrapper_width617 = function() {
                          return this.data["width"];
                        };
                        obj607.methods["width"] = reader_createJsGraphicsWrapper_width617;
                        obj607.data["width"] = undefined;
                        var writer_createJsGraphicsWrapper_width617 = function(argcv, o) {
                          this.data["width"] = o;
                          return GraceDone;
                        };
                        obj607.methods["width:="] = writer_createJsGraphicsWrapper_width617;
                        reader_createJsGraphicsWrapper_width617.confidential = true;
                        writer_createJsGraphicsWrapper_width617.confidential = true;
                        obj607.mutable = true;
                        setLineNumber(505);    // compilenode num
                        obj607.data["radius"] = new GraceNum(15);
                        var reader_createJsGraphicsWrapper_radius618 = function() {
                          return this.data["radius"];
                        };
                        obj607.methods["radius"] = reader_createJsGraphicsWrapper_radius618;
                        obj607.data["radius"] = new GraceNum(15);
                        var writer_createJsGraphicsWrapper_radius618 = function(argcv, o) {
                          this.data["radius"] = o;
                          return GraceDone;
                        };
                        obj607.methods["radius:="] = writer_createJsGraphicsWrapper_radius618;
                        obj607.mutable = true;
                        superDepth = origSuperDepth;
                      };
                      obj_init_607.apply(inheritingObject, []);
                      return obj607;
                      };
                      this.methods["roundRect()object"] = func606;
                    setLineNumber(522);    // compilenode method
                    var func619 = function(argcv) {    // method ellipse
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var curarg = 1;
                      if (argcv[0] !== 0)
                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ellipse"));
                      setModuleName("createJsGraphicsWrapper");
                      var obj620 = Grace_allocObject(null, "createJsGraphicsWrapper.identifierBinding‹ellipse›");
                      obj620.definitionModule = "createJsGraphicsWrapper";
                      obj620.definitionLine = 522;
                      obj620.outer = this;
                      var reader_createJsGraphicsWrapper_outer621 = function() {
                        return this.outer;
                      };
                      obj620.methods["outer"] = reader_createJsGraphicsWrapper_outer621;
                      var obj_init_620 = function() {
                        var origSuperDepth = superDepth;
                        superDepth = obj620;
                        var func622 = function(argcv) {    // method draw(2)
                          var returnTarget = invocationCount;
                          invocationCount++;
                          var curarg = 1;
                          var var_width__39__ = arguments[curarg];
                          curarg++;
                          var var_height__39__ = arguments[curarg];
                          curarg++;
                          if (argcv[0] !== 2)
                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for draw(2)"));
                          setModuleName("createJsGraphicsWrapper");
                          setLineNumber(527);    // compilenode identifier
                          onSelf = true;
                          var call623 = callmethodChecked(this, "height:=", [1], var_height__39__);
                          setLineNumber(528);    // compilenode identifier
                          onSelf = true;
                          var call624 = callmethodChecked(this, "width:=", [1], var_width__39__);
                          setLineNumber(529);    // compilenode call
                             // start native code from line 529
                          var result = GraceDone;
                          
      var x = this.data.location.data.x._value;
      var y = this.data.location.data.y._value;
      var height = this.data.height._value
      var width = this.data.width._value
      this.data.createJsGraphics.graphics.drawEllipse(x, y, width, height);
    
                          var nat625 = result;
                             // end native code insertion
                          return nat625;
                        };
                        func622.paramCounts = [2];
                        obj620.methods["draw"] = func622;
                        func622.definitionLine = 526;
                        func622.definitionModule = "createJsGraphicsWrapper";
                        setLineNumber(523);    // compilenode call
                        var call626 = callmethodChecked(superDepth, "outer", [0]);
                        onOuter = true;
                        onSelf = true;
                        var call627 = callmethodChecked(call626, "shape()object", [0, 1], this);
                        obj620.superobj = call627;
                        if (call627.data) obj620.data = call627.data;
                        if (call627.hasOwnProperty('_value'))
                            obj620._value = call627._value;
                        obj620.data["height"] = undefined;
                        var reader_createJsGraphicsWrapper_height628 = function() {
                          return this.data["height"];
                        };
                        obj620.methods["height"] = reader_createJsGraphicsWrapper_height628;
                        obj620.data["height"] = undefined;
                        var writer_createJsGraphicsWrapper_height628 = function(argcv, o) {
                          this.data["height"] = o;
                          return GraceDone;
                        };
                        obj620.methods["height:="] = writer_createJsGraphicsWrapper_height628;
                        reader_createJsGraphicsWrapper_height628.confidential = true;
                        writer_createJsGraphicsWrapper_height628.confidential = true;
                        obj620.mutable = true;
                        obj620.data["width"] = undefined;
                        var reader_createJsGraphicsWrapper_width629 = function() {
                          return this.data["width"];
                        };
                        obj620.methods["width"] = reader_createJsGraphicsWrapper_width629;
                        obj620.data["width"] = undefined;
                        var writer_createJsGraphicsWrapper_width629 = function(argcv, o) {
                          this.data["width"] = o;
                          return GraceDone;
                        };
                        obj620.methods["width:="] = writer_createJsGraphicsWrapper_width629;
                        reader_createJsGraphicsWrapper_width629.confidential = true;
                        writer_createJsGraphicsWrapper_width629.confidential = true;
                        obj620.mutable = true;
                        superDepth = origSuperDepth;
                      };
                      obj_init_620.apply(obj620, []);
                      return obj620;
                    };
                    func619.paramCounts = [0];
                    this.methods["ellipse"] = func619;
                    func619.definitionLine = 522;
                    func619.definitionModule = "createJsGraphicsWrapper";
                      var func630 = function(argcv) {    // method ellipse()object
                        var curarg = 1;
                        var inheritingObject = arguments[curarg++];
                        // Start argument processing
                        curarg = 1;
                        // End argument processing
                        setModuleName("createJsGraphicsWrapper");
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var obj631 = Grace_allocObject(null, "ellipse");
                        obj631.definitionModule = "createJsGraphicsWrapper";
                        obj631.definitionLine = 522;
                        var inho631 = inheritingObject;
                        while (inho631.superobj) inho631 = inho631.superobj;
                        inho631.superobj = obj631;
                        obj631.data = inheritingObject.data;
                        if (inheritingObject.hasOwnProperty('_value'))
                          obj631._value = inheritingObject._value;
                        obj631.outer = this;
                        var reader_createJsGraphicsWrapper_outer632 = function() {
                          return this.outer;
                        };
                        obj631.methods["outer"] = reader_createJsGraphicsWrapper_outer632;
                        var obj_init_631 = function() {
                          var origSuperDepth = superDepth;
                          superDepth = obj631;
                          var func633 = function(argcv) {    // method draw(2)
                            var returnTarget = invocationCount;
                            invocationCount++;
                            var curarg = 1;
                            var var_width__39__ = arguments[curarg];
                            curarg++;
                            var var_height__39__ = arguments[curarg];
                            curarg++;
                            if (argcv[0] !== 2)
                              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for draw(2)"));
                            setModuleName("createJsGraphicsWrapper");
                            setLineNumber(527);    // compilenode identifier
                            onSelf = true;
                            var call634 = callmethodChecked(this, "height:=", [1], var_height__39__);
                            setLineNumber(528);    // compilenode identifier
                            onSelf = true;
                            var call635 = callmethodChecked(this, "width:=", [1], var_width__39__);
                            setLineNumber(529);    // compilenode call
                               // start native code from line 529
                            var result = GraceDone;
                            
      var x = this.data.location.data.x._value;
      var y = this.data.location.data.y._value;
      var height = this.data.height._value
      var width = this.data.width._value
      this.data.createJsGraphics.graphics.drawEllipse(x, y, width, height);
    
                            var nat636 = result;
                               // end native code insertion
                            return nat636;
                          };
                          func633.paramCounts = [2];
                          obj631.methods["draw"] = func633;
                          func633.definitionLine = 526;
                          func633.definitionModule = "createJsGraphicsWrapper";
                          setLineNumber(523);    // compilenode call
                          var call637 = callmethodChecked(superDepth, "outer", [0]);
                          onOuter = true;
                          onSelf = true;
                          var call638 = callmethodChecked(call637, "shape()object", [0, 1], this);
                          obj631.superobj = call638;
                          if (call638.data) obj631.data = call638.data;
                          if (call638.hasOwnProperty('_value'))
                              obj631._value = call638._value;
                          obj631.data["height"] = undefined;
                          var reader_createJsGraphicsWrapper_height639 = function() {
                            return this.data["height"];
                          };
                          obj631.methods["height"] = reader_createJsGraphicsWrapper_height639;
                          obj631.data["height"] = undefined;
                          var writer_createJsGraphicsWrapper_height639 = function(argcv, o) {
                            this.data["height"] = o;
                            return GraceDone;
                          };
                          obj631.methods["height:="] = writer_createJsGraphicsWrapper_height639;
                          reader_createJsGraphicsWrapper_height639.confidential = true;
                          writer_createJsGraphicsWrapper_height639.confidential = true;
                          obj631.mutable = true;
                          obj631.data["width"] = undefined;
                          var reader_createJsGraphicsWrapper_width640 = function() {
                            return this.data["width"];
                          };
                          obj631.methods["width"] = reader_createJsGraphicsWrapper_width640;
                          obj631.data["width"] = undefined;
                          var writer_createJsGraphicsWrapper_width640 = function(argcv, o) {
                            this.data["width"] = o;
                            return GraceDone;
                          };
                          obj631.methods["width:="] = writer_createJsGraphicsWrapper_width640;
                          reader_createJsGraphicsWrapper_width640.confidential = true;
                          writer_createJsGraphicsWrapper_width640.confidential = true;
                          obj631.mutable = true;
                          superDepth = origSuperDepth;
                        };
                        obj_init_631.apply(inheritingObject, []);
                        return obj631;
                        };
                        this.methods["ellipse()object"] = func630;
                      setLineNumber(539);    // compilenode method
                      var func641 = function(argcv) {    // method arc
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var curarg = 1;
                        if (argcv[0] !== 0)
                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for arc"));
                        setModuleName("createJsGraphicsWrapper");
                        var obj642 = Grace_allocObject(null, "createJsGraphicsWrapper.identifierBinding‹arc›");
                        obj642.definitionModule = "createJsGraphicsWrapper";
                        obj642.definitionLine = 539;
                        obj642.outer = this;
                        var reader_createJsGraphicsWrapper_outer643 = function() {
                          return this.outer;
                        };
                        obj642.methods["outer"] = reader_createJsGraphicsWrapper_outer643;
                        var obj_init_642 = function() {
                          var origSuperDepth = superDepth;
                          superDepth = obj642;
                          var func644 = function(argcv) {    // method draw(4)
                            var returnTarget = invocationCount;
                            invocationCount++;
                            var curarg = 1;
                            var var_radius__39__ = arguments[curarg];
                            curarg++;
                            var var_startAngle__39__ = arguments[curarg];
                            curarg++;
                            var var_endAngle__39__ = arguments[curarg];
                            curarg++;
                            var var_anticlockwise__39__ = arguments[curarg];
                            curarg++;
                            if (argcv[0] !== 4)
                              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for draw(4)"));
                            setModuleName("createJsGraphicsWrapper");
                            setLineNumber(547);    // compilenode identifier
                            onSelf = true;
                            var call645 = callmethodChecked(this, "radius:=", [1], var_radius__39__);
                            setLineNumber(548);    // compilenode identifier
                            onSelf = true;
                            var call646 = callmethodChecked(this, "startAngle:=", [1], var_startAngle__39__);
                            setLineNumber(549);    // compilenode identifier
                            onSelf = true;
                            var call647 = callmethodChecked(this, "endAngle:=", [1], var_endAngle__39__);
                            setLineNumber(550);    // compilenode identifier
                            onSelf = true;
                            var call648 = callmethodChecked(this, "anticlockwise:=", [1], var_anticlockwise__39__);
                            setLineNumber(551);    // compilenode call
                               // start native code from line 551
                            var result = GraceDone;
                            
      var x = this.data.location.data.x._value;
      var y = this.data.location.data.y._value;
      var radius = this.data.radius._value;
      var startAngle = this.data.startAngle._value;
      var endAngle = this.data.endAngle._value;
      startAngle = startAngle * Math.PI / 180;
      endAngle = endAngle * Math.PI / 180;
      var anticlockwise = this.data.anticlockwise._value

      this.data.createJsGraphics.graphics.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    
                            var nat649 = result;
                               // end native code insertion
                            return nat649;
                          };
                          func644.paramCounts = [4];
                          obj642.methods["draw"] = func644;
                          func644.definitionLine = 546;
                          func644.definitionModule = "createJsGraphicsWrapper";
                          setLineNumber(540);    // compilenode call
                          var call650 = callmethodChecked(superDepth, "outer", [0]);
                          onOuter = true;
                          onSelf = true;
                          var call651 = callmethodChecked(call650, "shape()object", [0, 1], this);
                          obj642.superobj = call651;
                          if (call651.data) obj642.data = call651.data;
                          if (call651.hasOwnProperty('_value'))
                              obj642._value = call651._value;
                          obj642.data["radius"] = undefined;
                          var reader_createJsGraphicsWrapper_radius652 = function() {
                            return this.data["radius"];
                          };
                          obj642.methods["radius"] = reader_createJsGraphicsWrapper_radius652;
                          obj642.data["radius"] = undefined;
                          var writer_createJsGraphicsWrapper_radius652 = function(argcv, o) {
                            this.data["radius"] = o;
                            return GraceDone;
                          };
                          obj642.methods["radius:="] = writer_createJsGraphicsWrapper_radius652;
                          reader_createJsGraphicsWrapper_radius652.confidential = true;
                          writer_createJsGraphicsWrapper_radius652.confidential = true;
                          obj642.mutable = true;
                          obj642.data["startAngle"] = undefined;
                          var reader_createJsGraphicsWrapper_startAngle653 = function() {
                            return this.data["startAngle"];
                          };
                          obj642.methods["startAngle"] = reader_createJsGraphicsWrapper_startAngle653;
                          obj642.data["startAngle"] = undefined;
                          var writer_createJsGraphicsWrapper_startAngle653 = function(argcv, o) {
                            this.data["startAngle"] = o;
                            return GraceDone;
                          };
                          obj642.methods["startAngle:="] = writer_createJsGraphicsWrapper_startAngle653;
                          reader_createJsGraphicsWrapper_startAngle653.confidential = true;
                          writer_createJsGraphicsWrapper_startAngle653.confidential = true;
                          obj642.mutable = true;
                          obj642.data["endAngle"] = undefined;
                          var reader_createJsGraphicsWrapper_endAngle654 = function() {
                            return this.data["endAngle"];
                          };
                          obj642.methods["endAngle"] = reader_createJsGraphicsWrapper_endAngle654;
                          obj642.data["endAngle"] = undefined;
                          var writer_createJsGraphicsWrapper_endAngle654 = function(argcv, o) {
                            this.data["endAngle"] = o;
                            return GraceDone;
                          };
                          obj642.methods["endAngle:="] = writer_createJsGraphicsWrapper_endAngle654;
                          reader_createJsGraphicsWrapper_endAngle654.confidential = true;
                          writer_createJsGraphicsWrapper_endAngle654.confidential = true;
                          obj642.mutable = true;
                          obj642.data["anticlockwise"] = undefined;
                          var reader_createJsGraphicsWrapper_anticlockwise655 = function() {
                            return this.data["anticlockwise"];
                          };
                          obj642.methods["anticlockwise"] = reader_createJsGraphicsWrapper_anticlockwise655;
                          obj642.data["anticlockwise"] = undefined;
                          var writer_createJsGraphicsWrapper_anticlockwise655 = function(argcv, o) {
                            this.data["anticlockwise"] = o;
                            return GraceDone;
                          };
                          obj642.methods["anticlockwise:="] = writer_createJsGraphicsWrapper_anticlockwise655;
                          reader_createJsGraphicsWrapper_anticlockwise655.confidential = true;
                          writer_createJsGraphicsWrapper_anticlockwise655.confidential = true;
                          obj642.mutable = true;
                          superDepth = origSuperDepth;
                        };
                        obj_init_642.apply(obj642, []);
                        return obj642;
                      };
                      func641.paramCounts = [0];
                      this.methods["arc"] = func641;
                      func641.definitionLine = 539;
                      func641.definitionModule = "createJsGraphicsWrapper";
                        var func656 = function(argcv) {    // method arc()object
                          var curarg = 1;
                          var inheritingObject = arguments[curarg++];
                          // Start argument processing
                          curarg = 1;
                          // End argument processing
                          setModuleName("createJsGraphicsWrapper");
                          var returnTarget = invocationCount;
                          invocationCount++;
                          var obj657 = Grace_allocObject(null, "arc");
                          obj657.definitionModule = "createJsGraphicsWrapper";
                          obj657.definitionLine = 539;
                          var inho657 = inheritingObject;
                          while (inho657.superobj) inho657 = inho657.superobj;
                          inho657.superobj = obj657;
                          obj657.data = inheritingObject.data;
                          if (inheritingObject.hasOwnProperty('_value'))
                            obj657._value = inheritingObject._value;
                          obj657.outer = this;
                          var reader_createJsGraphicsWrapper_outer658 = function() {
                            return this.outer;
                          };
                          obj657.methods["outer"] = reader_createJsGraphicsWrapper_outer658;
                          var obj_init_657 = function() {
                            var origSuperDepth = superDepth;
                            superDepth = obj657;
                            var func659 = function(argcv) {    // method draw(4)
                              var returnTarget = invocationCount;
                              invocationCount++;
                              var curarg = 1;
                              var var_radius__39__ = arguments[curarg];
                              curarg++;
                              var var_startAngle__39__ = arguments[curarg];
                              curarg++;
                              var var_endAngle__39__ = arguments[curarg];
                              curarg++;
                              var var_anticlockwise__39__ = arguments[curarg];
                              curarg++;
                              if (argcv[0] !== 4)
                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for draw(4)"));
                              setModuleName("createJsGraphicsWrapper");
                              setLineNumber(547);    // compilenode identifier
                              onSelf = true;
                              var call660 = callmethodChecked(this, "radius:=", [1], var_radius__39__);
                              setLineNumber(548);    // compilenode identifier
                              onSelf = true;
                              var call661 = callmethodChecked(this, "startAngle:=", [1], var_startAngle__39__);
                              setLineNumber(549);    // compilenode identifier
                              onSelf = true;
                              var call662 = callmethodChecked(this, "endAngle:=", [1], var_endAngle__39__);
                              setLineNumber(550);    // compilenode identifier
                              onSelf = true;
                              var call663 = callmethodChecked(this, "anticlockwise:=", [1], var_anticlockwise__39__);
                              setLineNumber(551);    // compilenode call
                                 // start native code from line 551
                              var result = GraceDone;
                              
      var x = this.data.location.data.x._value;
      var y = this.data.location.data.y._value;
      var radius = this.data.radius._value;
      var startAngle = this.data.startAngle._value;
      var endAngle = this.data.endAngle._value;
      startAngle = startAngle * Math.PI / 180;
      endAngle = endAngle * Math.PI / 180;
      var anticlockwise = this.data.anticlockwise._value

      this.data.createJsGraphics.graphics.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    
                              var nat664 = result;
                                 // end native code insertion
                              return nat664;
                            };
                            func659.paramCounts = [4];
                            obj657.methods["draw"] = func659;
                            func659.definitionLine = 546;
                            func659.definitionModule = "createJsGraphicsWrapper";
                            setLineNumber(540);    // compilenode call
                            var call665 = callmethodChecked(superDepth, "outer", [0]);
                            onOuter = true;
                            onSelf = true;
                            var call666 = callmethodChecked(call665, "shape()object", [0, 1], this);
                            obj657.superobj = call666;
                            if (call666.data) obj657.data = call666.data;
                            if (call666.hasOwnProperty('_value'))
                                obj657._value = call666._value;
                            obj657.data["radius"] = undefined;
                            var reader_createJsGraphicsWrapper_radius667 = function() {
                              return this.data["radius"];
                            };
                            obj657.methods["radius"] = reader_createJsGraphicsWrapper_radius667;
                            obj657.data["radius"] = undefined;
                            var writer_createJsGraphicsWrapper_radius667 = function(argcv, o) {
                              this.data["radius"] = o;
                              return GraceDone;
                            };
                            obj657.methods["radius:="] = writer_createJsGraphicsWrapper_radius667;
                            reader_createJsGraphicsWrapper_radius667.confidential = true;
                            writer_createJsGraphicsWrapper_radius667.confidential = true;
                            obj657.mutable = true;
                            obj657.data["startAngle"] = undefined;
                            var reader_createJsGraphicsWrapper_startAngle668 = function() {
                              return this.data["startAngle"];
                            };
                            obj657.methods["startAngle"] = reader_createJsGraphicsWrapper_startAngle668;
                            obj657.data["startAngle"] = undefined;
                            var writer_createJsGraphicsWrapper_startAngle668 = function(argcv, o) {
                              this.data["startAngle"] = o;
                              return GraceDone;
                            };
                            obj657.methods["startAngle:="] = writer_createJsGraphicsWrapper_startAngle668;
                            reader_createJsGraphicsWrapper_startAngle668.confidential = true;
                            writer_createJsGraphicsWrapper_startAngle668.confidential = true;
                            obj657.mutable = true;
                            obj657.data["endAngle"] = undefined;
                            var reader_createJsGraphicsWrapper_endAngle669 = function() {
                              return this.data["endAngle"];
                            };
                            obj657.methods["endAngle"] = reader_createJsGraphicsWrapper_endAngle669;
                            obj657.data["endAngle"] = undefined;
                            var writer_createJsGraphicsWrapper_endAngle669 = function(argcv, o) {
                              this.data["endAngle"] = o;
                              return GraceDone;
                            };
                            obj657.methods["endAngle:="] = writer_createJsGraphicsWrapper_endAngle669;
                            reader_createJsGraphicsWrapper_endAngle669.confidential = true;
                            writer_createJsGraphicsWrapper_endAngle669.confidential = true;
                            obj657.mutable = true;
                            obj657.data["anticlockwise"] = undefined;
                            var reader_createJsGraphicsWrapper_anticlockwise670 = function() {
                              return this.data["anticlockwise"];
                            };
                            obj657.methods["anticlockwise"] = reader_createJsGraphicsWrapper_anticlockwise670;
                            obj657.data["anticlockwise"] = undefined;
                            var writer_createJsGraphicsWrapper_anticlockwise670 = function(argcv, o) {
                              this.data["anticlockwise"] = o;
                              return GraceDone;
                            };
                            obj657.methods["anticlockwise:="] = writer_createJsGraphicsWrapper_anticlockwise670;
                            reader_createJsGraphicsWrapper_anticlockwise670.confidential = true;
                            writer_createJsGraphicsWrapper_anticlockwise670.confidential = true;
                            obj657.mutable = true;
                            superDepth = origSuperDepth;
                          };
                          obj_init_657.apply(inheritingObject, []);
                          return obj657;
                          };
                          this.methods["arc()object"] = func656;
                        setLineNumber(566);    // compilenode method
                        var func671 = function(argcv) {    // method text
                          var returnTarget = invocationCount;
                          invocationCount++;
                          var curarg = 1;
                          if (argcv[0] !== 0)
                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for text"));
                          setModuleName("createJsGraphicsWrapper");
                          var obj672 = Grace_allocObject(null, "createJsGraphicsWrapper.identifierBinding‹text›");
                          obj672.definitionModule = "createJsGraphicsWrapper";
                          obj672.definitionLine = 566;
                          obj672.outer = this;
                          var reader_createJsGraphicsWrapper_outer673 = function() {
                            return this.outer;
                          };
                          obj672.methods["outer"] = reader_createJsGraphicsWrapper_outer673;
                          var obj_init_672 = function() {
                            var origSuperDepth = superDepth;
                            superDepth = obj672;
                            var func674 = function(argcv) {    // method new
                              var returnTarget = invocationCount;
                              invocationCount++;
                              var curarg = 1;
                              if (argcv[0] !== 0)
                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for new"));
                              setModuleName("createJsGraphicsWrapper");
                              setLineNumber(572);    // compilenode num
                              return new GraceNum(0);
                            };
                            func674.paramCounts = [0];
                            obj672.methods["new"] = func674;
                            func674.definitionLine = 571;
                            func674.definitionModule = "createJsGraphicsWrapper";
                            var func675 = function(argcv) {    // method draw(3)
                              var returnTarget = invocationCount;
                              invocationCount++;
                              var curarg = 1;
                              var var_content__39__ = arguments[curarg];
                              curarg++;
                              var var_font__39__ = arguments[curarg];
                              curarg++;
                              var var_color__39__ = arguments[curarg];
                              curarg++;
                              if (argcv[0] !== 3)
                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for draw(3)"));
                              setModuleName("createJsGraphicsWrapper");
                              setLineNumber(577);    // compilenode identifier
                              onSelf = true;
                              var call676 = callmethodChecked(this, "innerDraw", [3], var_content__39__, var_font__39__, var_color__39__);
                              onSelf = true;
                              var call677 = callmethodChecked(this, "createJsGraphics:=", [1], call676);
                              return call677;
                            };
                            func675.paramCounts = [3];
                            obj672.methods["draw"] = func675;
                            func675.definitionLine = 576;
                            func675.definitionModule = "createJsGraphicsWrapper";
                            var func678 = function(argcv) {    // method width
                              var returnTarget = invocationCount;
                              invocationCount++;
                              var curarg = 1;
                              if (argcv[0] !== 0)
                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for width"));
                              setModuleName("createJsGraphicsWrapper");
                              setLineNumber(581);    // compilenode call
                                 // start native code from line 581
                              var result = GraceDone;
                              
      var b = this.data.createJsGraphics.getBounds();
      return new GraceNum(b.width)
    
                              var nat679 = result;
                                 // end native code insertion
                              return nat679;
                            };
                            func678.paramCounts = [0];
                            obj672.methods["width"] = func678;
                            func678.definitionLine = 580;
                            func678.definitionModule = "createJsGraphicsWrapper";
                            var func680 = function(argcv) {    // method height
                              var returnTarget = invocationCount;
                              invocationCount++;
                              var curarg = 1;
                              if (argcv[0] !== 0)
                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for height"));
                              setModuleName("createJsGraphicsWrapper");
                              setLineNumber(588);    // compilenode call
                                 // start native code from line 588
                              var result = GraceDone;
                              
      var b = this.data.createJsGraphics.getBounds();
      return new GraceNum(b.height)
    
                              var nat681 = result;
                                 // end native code insertion
                              return nat681;
                            };
                            func680.paramCounts = [0];
                            obj672.methods["height"] = func680;
                            func680.definitionLine = 587;
                            func680.definitionModule = "createJsGraphicsWrapper";
                            var func682 = function(argcv) {    // method innerDraw(3)
                              var returnTarget = invocationCount;
                              invocationCount++;
                              var curarg = 1;
                              var var_content__39__ = arguments[curarg];
                              curarg++;
                              var var_font__39__ = arguments[curarg];
                              curarg++;
                              var var_color__39__ = arguments[curarg];
                              curarg++;
                              if (argcv[0] !== 3)
                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for innerDraw(3)"));
                              setModuleName("createJsGraphicsWrapper");
                              setLineNumber(595);    // compilenode identifier
                              onSelf = true;
                              var call683 = callmethodChecked(this, "color:=", [1], var_color__39__);
                              setLineNumber(596);    // compilenode identifier
                              onSelf = true;
                              var call684 = callmethodChecked(this, "content:=", [1], var_content__39__);
                              setLineNumber(597);    // compilenode identifier
                              onSelf = true;
                              var call685 = callmethodChecked(this, "font:=", [1], var_font__39__);
                              setLineNumber(599);    // compilenode call
                                 // start native code from line 599
                              var result = GraceDone;
                              
      var color = this.data.color._value;
      var x = this.data.location.data.x._value;
      var y = this.data.location.data.y._value;
      var content = this.data.content._value;
      var font = this.data.font._value;
      var text = new createjs.Text(content, font, color);
      text.x = x;
      text.y = y;
      return text;
    
                              var nat686 = result;
                                 // end native code insertion
                              return nat686;
                            };
                            func682.confidential = true;
                            func682.paramCounts = [3];
                            obj672.methods["innerDraw"] = func682;
                            func682.definitionLine = 594;
                            func682.definitionModule = "createJsGraphicsWrapper";
                            setLineNumber(567);    // compilenode call
                            var call687 = callmethodChecked(superDepth, "outer", [0]);
                            onOuter = true;
                            onSelf = true;
                            var call688 = callmethodChecked(call687, "commonGraphics()object", [0, 1], this);
                            obj672.superobj = call688;
                            if (call688.data) obj672.data = call688.data;
                            if (call688.hasOwnProperty('_value'))
                                obj672._value = call688._value;
                            setLineNumber(569);    // compilenode string
                            var string689 = new GraceString("Did you forget to set text.content?");
                            obj672.data["content"] = string689;
                            var reader_createJsGraphicsWrapper_content690 = function() {
                              return this.data["content"];
                            };
                            obj672.methods["content"] = reader_createJsGraphicsWrapper_content690;
                            obj672.data["content"] = string689;
                            var writer_createJsGraphicsWrapper_content690 = function(argcv, o) {
                              this.data["content"] = o;
                              return GraceDone;
                            };
                            obj672.methods["content:="] = writer_createJsGraphicsWrapper_content690;
                            obj672.mutable = true;
                            setLineNumber(570);    // compilenode string
                            var string691 = new GraceString("12px Arial");
                            obj672.data["font"] = string691;
                            var reader_createJsGraphicsWrapper_font692 = function() {
                              return this.data["font"];
                            };
                            obj672.methods["font"] = reader_createJsGraphicsWrapper_font692;
                            obj672.data["font"] = string691;
                            var writer_createJsGraphicsWrapper_font692 = function(argcv, o) {
                              this.data["font"] = o;
                              return GraceDone;
                            };
                            obj672.methods["font:="] = writer_createJsGraphicsWrapper_font692;
                            obj672.mutable = true;
                            superDepth = origSuperDepth;
                          };
                          obj_init_672.apply(obj672, []);
                          return obj672;
                        };
                        func671.paramCounts = [0];
                        this.methods["text"] = func671;
                        func671.definitionLine = 566;
                        func671.definitionModule = "createJsGraphicsWrapper";
                          var func693 = function(argcv) {    // method text()object
                            var curarg = 1;
                            var inheritingObject = arguments[curarg++];
                            // Start argument processing
                            curarg = 1;
                            // End argument processing
                            setModuleName("createJsGraphicsWrapper");
                            var returnTarget = invocationCount;
                            invocationCount++;
                            var obj694 = Grace_allocObject(null, "text");
                            obj694.definitionModule = "createJsGraphicsWrapper";
                            obj694.definitionLine = 566;
                            var inho694 = inheritingObject;
                            while (inho694.superobj) inho694 = inho694.superobj;
                            inho694.superobj = obj694;
                            obj694.data = inheritingObject.data;
                            if (inheritingObject.hasOwnProperty('_value'))
                              obj694._value = inheritingObject._value;
                            obj694.outer = this;
                            var reader_createJsGraphicsWrapper_outer695 = function() {
                              return this.outer;
                            };
                            obj694.methods["outer"] = reader_createJsGraphicsWrapper_outer695;
                            var obj_init_694 = function() {
                              var origSuperDepth = superDepth;
                              superDepth = obj694;
                              var func696 = function(argcv) {    // method new
                                var returnTarget = invocationCount;
                                invocationCount++;
                                var curarg = 1;
                                if (argcv[0] !== 0)
                                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for new"));
                                setModuleName("createJsGraphicsWrapper");
                                setLineNumber(572);    // compilenode num
                                return new GraceNum(0);
                              };
                              func696.paramCounts = [0];
                              obj694.methods["new"] = func696;
                              func696.definitionLine = 571;
                              func696.definitionModule = "createJsGraphicsWrapper";
                              var func697 = function(argcv) {    // method draw(3)
                                var returnTarget = invocationCount;
                                invocationCount++;
                                var curarg = 1;
                                var var_content__39__ = arguments[curarg];
                                curarg++;
                                var var_font__39__ = arguments[curarg];
                                curarg++;
                                var var_color__39__ = arguments[curarg];
                                curarg++;
                                if (argcv[0] !== 3)
                                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for draw(3)"));
                                setModuleName("createJsGraphicsWrapper");
                                setLineNumber(577);    // compilenode identifier
                                onSelf = true;
                                var call698 = callmethodChecked(this, "innerDraw", [3], var_content__39__, var_font__39__, var_color__39__);
                                onSelf = true;
                                var call699 = callmethodChecked(this, "createJsGraphics:=", [1], call698);
                                return call699;
                              };
                              func697.paramCounts = [3];
                              obj694.methods["draw"] = func697;
                              func697.definitionLine = 576;
                              func697.definitionModule = "createJsGraphicsWrapper";
                              var func700 = function(argcv) {    // method width
                                var returnTarget = invocationCount;
                                invocationCount++;
                                var curarg = 1;
                                if (argcv[0] !== 0)
                                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for width"));
                                setModuleName("createJsGraphicsWrapper");
                                setLineNumber(581);    // compilenode call
                                   // start native code from line 581
                                var result = GraceDone;
                                
      var b = this.data.createJsGraphics.getBounds();
      return new GraceNum(b.width)
    
                                var nat701 = result;
                                   // end native code insertion
                                return nat701;
                              };
                              func700.paramCounts = [0];
                              obj694.methods["width"] = func700;
                              func700.definitionLine = 580;
                              func700.definitionModule = "createJsGraphicsWrapper";
                              var func702 = function(argcv) {    // method height
                                var returnTarget = invocationCount;
                                invocationCount++;
                                var curarg = 1;
                                if (argcv[0] !== 0)
                                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for height"));
                                setModuleName("createJsGraphicsWrapper");
                                setLineNumber(588);    // compilenode call
                                   // start native code from line 588
                                var result = GraceDone;
                                
      var b = this.data.createJsGraphics.getBounds();
      return new GraceNum(b.height)
    
                                var nat703 = result;
                                   // end native code insertion
                                return nat703;
                              };
                              func702.paramCounts = [0];
                              obj694.methods["height"] = func702;
                              func702.definitionLine = 587;
                              func702.definitionModule = "createJsGraphicsWrapper";
                              var func704 = function(argcv) {    // method innerDraw(3)
                                var returnTarget = invocationCount;
                                invocationCount++;
                                var curarg = 1;
                                var var_content__39__ = arguments[curarg];
                                curarg++;
                                var var_font__39__ = arguments[curarg];
                                curarg++;
                                var var_color__39__ = arguments[curarg];
                                curarg++;
                                if (argcv[0] !== 3)
                                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for innerDraw(3)"));
                                setModuleName("createJsGraphicsWrapper");
                                setLineNumber(595);    // compilenode identifier
                                onSelf = true;
                                var call705 = callmethodChecked(this, "color:=", [1], var_color__39__);
                                setLineNumber(596);    // compilenode identifier
                                onSelf = true;
                                var call706 = callmethodChecked(this, "content:=", [1], var_content__39__);
                                setLineNumber(597);    // compilenode identifier
                                onSelf = true;
                                var call707 = callmethodChecked(this, "font:=", [1], var_font__39__);
                                setLineNumber(599);    // compilenode call
                                   // start native code from line 599
                                var result = GraceDone;
                                
      var color = this.data.color._value;
      var x = this.data.location.data.x._value;
      var y = this.data.location.data.y._value;
      var content = this.data.content._value;
      var font = this.data.font._value;
      var text = new createjs.Text(content, font, color);
      text.x = x;
      text.y = y;
      return text;
    
                                var nat708 = result;
                                   // end native code insertion
                                return nat708;
                              };
                              func704.confidential = true;
                              func704.paramCounts = [3];
                              obj694.methods["innerDraw"] = func704;
                              func704.definitionLine = 594;
                              func704.definitionModule = "createJsGraphicsWrapper";
                              setLineNumber(567);    // compilenode call
                              var call709 = callmethodChecked(superDepth, "outer", [0]);
                              onOuter = true;
                              onSelf = true;
                              var call710 = callmethodChecked(call709, "commonGraphics()object", [0, 1], this);
                              obj694.superobj = call710;
                              if (call710.data) obj694.data = call710.data;
                              if (call710.hasOwnProperty('_value'))
                                  obj694._value = call710._value;
                              setLineNumber(569);    // compilenode string
                              var string711 = new GraceString("Did you forget to set text.content?");
                              obj694.data["content"] = string711;
                              var reader_createJsGraphicsWrapper_content712 = function() {
                                return this.data["content"];
                              };
                              obj694.methods["content"] = reader_createJsGraphicsWrapper_content712;
                              obj694.data["content"] = string711;
                              var writer_createJsGraphicsWrapper_content712 = function(argcv, o) {
                                this.data["content"] = o;
                                return GraceDone;
                              };
                              obj694.methods["content:="] = writer_createJsGraphicsWrapper_content712;
                              obj694.mutable = true;
                              setLineNumber(570);    // compilenode string
                              var string713 = new GraceString("12px Arial");
                              obj694.data["font"] = string713;
                              var reader_createJsGraphicsWrapper_font714 = function() {
                                return this.data["font"];
                              };
                              obj694.methods["font"] = reader_createJsGraphicsWrapper_font714;
                              obj694.data["font"] = string713;
                              var writer_createJsGraphicsWrapper_font714 = function(argcv, o) {
                                this.data["font"] = o;
                                return GraceDone;
                              };
                              obj694.methods["font:="] = writer_createJsGraphicsWrapper_font714;
                              obj694.mutable = true;
                              superDepth = origSuperDepth;
                            };
                            obj_init_694.apply(inheritingObject, []);
                            return obj694;
                            };
                            this.methods["text()object"] = func693;
                          setLineNumber(613);    // compilenode method
                          var func715 = function(argcv) {    // method line
                            var returnTarget = invocationCount;
                            invocationCount++;
                            var curarg = 1;
                            if (argcv[0] !== 0)
                              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for line"));
                            setModuleName("createJsGraphicsWrapper");
                            var obj716 = Grace_allocObject(null, "createJsGraphicsWrapper.identifierBinding‹line›");
                            obj716.definitionModule = "createJsGraphicsWrapper";
                            obj716.definitionLine = 613;
                            obj716.outer = this;
                            var reader_createJsGraphicsWrapper_outer717 = function() {
                              return this.outer;
                            };
                            obj716.methods["outer"] = reader_createJsGraphicsWrapper_outer717;
                            var obj_init_716 = function() {
                              var origSuperDepth = superDepth;
                              superDepth = obj716;
                              var func718 = function(argcv) {    // method draw(2)
                                var returnTarget = invocationCount;
                                invocationCount++;
                                var curarg = 1;
                                var var_start__39__ = arguments[curarg];
                                curarg++;
                                var var_end__39__ = arguments[curarg];
                                curarg++;
                                if (argcv[0] !== 2)
                                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for draw(2)"));
                                setModuleName("createJsGraphicsWrapper");
                                setLineNumber(619);    // compilenode identifier
                                onSelf = true;
                                var call719 = callmethodChecked(this, "location:=", [1], var_start__39__);
                                setLineNumber(620);    // compilenode identifier
                                onSelf = true;
                                var call720 = callmethodChecked(this, "start:=", [1], var_start__39__);
                                setLineNumber(621);    // compilenode identifier
                                onSelf = true;
                                var call721 = callmethodChecked(this, "end:=", [1], var_end__39__);
                                setLineNumber(622);    // compilenode call
                                   // start native code from line 622
                                var result = GraceDone;
                                
      var startX = this.data.start.data.x._value;
      var startY = this.data.start.data.y._value;
      var endX = this.data.end.data.x._value;
      var endY = this.data.end.data.y._value;
      this.data.createJsGraphics.graphics.moveTo(startX, startY).lineTo(endX,endY);
    
                                var nat722 = result;
                                   // end native code insertion
                                return nat722;
                              };
                              func718.paramCounts = [2];
                              obj716.methods["draw"] = func718;
                              func718.definitionLine = 618;
                              func718.definitionModule = "createJsGraphicsWrapper";
                              setLineNumber(614);    // compilenode call
                              var call723 = callmethodChecked(superDepth, "outer", [0]);
                              onOuter = true;
                              onSelf = true;
                              var call724 = callmethodChecked(call723, "shape()object", [0, 1], this);
                              obj716.superobj = call724;
                              if (call724.data) obj716.data = call724.data;
                              if (call724.hasOwnProperty('_value'))
                                  obj716._value = call724._value;
                              setLineNumber(615);    // compilenode num
                              var opresult727 = callmethodChecked(new GraceNum(0), "@", [1], new GraceNum(0));
                              obj716.data["start"] = opresult727;
                              var reader_createJsGraphicsWrapper_start728 = function() {
                                return this.data["start"];
                              };
                              obj716.methods["start"] = reader_createJsGraphicsWrapper_start728;
                              obj716.data["start"] = opresult727;
                              var writer_createJsGraphicsWrapper_start728 = function(argcv, o) {
                                this.data["start"] = o;
                                return GraceDone;
                              };
                              obj716.methods["start:="] = writer_createJsGraphicsWrapper_start728;
                              obj716.mutable = true;
                              setLineNumber(616);    // compilenode num
                              var opresult731 = callmethodChecked(new GraceNum(50), "@", [1], new GraceNum(50));
                              obj716.data["end"] = opresult731;
                              var reader_createJsGraphicsWrapper_end732 = function() {
                                return this.data["end"];
                              };
                              obj716.methods["end"] = reader_createJsGraphicsWrapper_end732;
                              obj716.data["end"] = opresult731;
                              var writer_createJsGraphicsWrapper_end732 = function(argcv, o) {
                                this.data["end"] = o;
                                return GraceDone;
                              };
                              obj716.methods["end:="] = writer_createJsGraphicsWrapper_end732;
                              obj716.mutable = true;
                              superDepth = origSuperDepth;
                            };
                            obj_init_716.apply(obj716, []);
                            return obj716;
                          };
                          func715.paramCounts = [0];
                          this.methods["line"] = func715;
                          func715.definitionLine = 613;
                          func715.definitionModule = "createJsGraphicsWrapper";
                            var func733 = function(argcv) {    // method line()object
                              var curarg = 1;
                              var inheritingObject = arguments[curarg++];
                              // Start argument processing
                              curarg = 1;
                              // End argument processing
                              setModuleName("createJsGraphicsWrapper");
                              var returnTarget = invocationCount;
                              invocationCount++;
                              var obj734 = Grace_allocObject(null, "line");
                              obj734.definitionModule = "createJsGraphicsWrapper";
                              obj734.definitionLine = 613;
                              var inho734 = inheritingObject;
                              while (inho734.superobj) inho734 = inho734.superobj;
                              inho734.superobj = obj734;
                              obj734.data = inheritingObject.data;
                              if (inheritingObject.hasOwnProperty('_value'))
                                obj734._value = inheritingObject._value;
                              obj734.outer = this;
                              var reader_createJsGraphicsWrapper_outer735 = function() {
                                return this.outer;
                              };
                              obj734.methods["outer"] = reader_createJsGraphicsWrapper_outer735;
                              var obj_init_734 = function() {
                                var origSuperDepth = superDepth;
                                superDepth = obj734;
                                var func736 = function(argcv) {    // method draw(2)
                                  var returnTarget = invocationCount;
                                  invocationCount++;
                                  var curarg = 1;
                                  var var_start__39__ = arguments[curarg];
                                  curarg++;
                                  var var_end__39__ = arguments[curarg];
                                  curarg++;
                                  if (argcv[0] !== 2)
                                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for draw(2)"));
                                  setModuleName("createJsGraphicsWrapper");
                                  setLineNumber(619);    // compilenode identifier
                                  onSelf = true;
                                  var call737 = callmethodChecked(this, "location:=", [1], var_start__39__);
                                  setLineNumber(620);    // compilenode identifier
                                  onSelf = true;
                                  var call738 = callmethodChecked(this, "start:=", [1], var_start__39__);
                                  setLineNumber(621);    // compilenode identifier
                                  onSelf = true;
                                  var call739 = callmethodChecked(this, "end:=", [1], var_end__39__);
                                  setLineNumber(622);    // compilenode call
                                     // start native code from line 622
                                  var result = GraceDone;
                                  
      var startX = this.data.start.data.x._value;
      var startY = this.data.start.data.y._value;
      var endX = this.data.end.data.x._value;
      var endY = this.data.end.data.y._value;
      this.data.createJsGraphics.graphics.moveTo(startX, startY).lineTo(endX,endY);
    
                                  var nat740 = result;
                                     // end native code insertion
                                  return nat740;
                                };
                                func736.paramCounts = [2];
                                obj734.methods["draw"] = func736;
                                func736.definitionLine = 618;
                                func736.definitionModule = "createJsGraphicsWrapper";
                                setLineNumber(614);    // compilenode call
                                var call741 = callmethodChecked(superDepth, "outer", [0]);
                                onOuter = true;
                                onSelf = true;
                                var call742 = callmethodChecked(call741, "shape()object", [0, 1], this);
                                obj734.superobj = call742;
                                if (call742.data) obj734.data = call742.data;
                                if (call742.hasOwnProperty('_value'))
                                    obj734._value = call742._value;
                                setLineNumber(615);    // compilenode num
                                var opresult745 = callmethodChecked(new GraceNum(0), "@", [1], new GraceNum(0));
                                obj734.data["start"] = opresult745;
                                var reader_createJsGraphicsWrapper_start746 = function() {
                                  return this.data["start"];
                                };
                                obj734.methods["start"] = reader_createJsGraphicsWrapper_start746;
                                obj734.data["start"] = opresult745;
                                var writer_createJsGraphicsWrapper_start746 = function(argcv, o) {
                                  this.data["start"] = o;
                                  return GraceDone;
                                };
                                obj734.methods["start:="] = writer_createJsGraphicsWrapper_start746;
                                obj734.mutable = true;
                                setLineNumber(616);    // compilenode num
                                var opresult749 = callmethodChecked(new GraceNum(50), "@", [1], new GraceNum(50));
                                obj734.data["end"] = opresult749;
                                var reader_createJsGraphicsWrapper_end750 = function() {
                                  return this.data["end"];
                                };
                                obj734.methods["end"] = reader_createJsGraphicsWrapper_end750;
                                obj734.data["end"] = opresult749;
                                var writer_createJsGraphicsWrapper_end750 = function(argcv, o) {
                                  this.data["end"] = o;
                                  return GraceDone;
                                };
                                obj734.methods["end:="] = writer_createJsGraphicsWrapper_end750;
                                obj734.mutable = true;
                                superDepth = origSuperDepth;
                              };
                              obj_init_734.apply(inheritingObject, []);
                              return obj734;
                              };
                              this.methods["line()object"] = func733;
                            setLineNumber(632);    // compilenode method
                            var func751 = function(argcv) {    // method customShape
                              var returnTarget = invocationCount;
                              invocationCount++;
                              var curarg = 1;
                              if (argcv[0] !== 0)
                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for customShape"));
                              setModuleName("createJsGraphicsWrapper");
                              var obj752 = Grace_allocObject(null, "createJsGraphicsWrapper.identifierBinding‹customShape›");
                              obj752.definitionModule = "createJsGraphicsWrapper";
                              obj752.definitionLine = 632;
                              obj752.outer = this;
                              var reader_createJsGraphicsWrapper_outer753 = function() {
                                return this.outer;
                              };
                              obj752.methods["outer"] = reader_createJsGraphicsWrapper_outer753;
                              var obj_init_752 = function() {
                                var origSuperDepth = superDepth;
                                superDepth = obj752;
                                var func754 = function(argcv) {    // method addPoint(1)
                                  var returnTarget = invocationCount;
                                  invocationCount++;
                                  var curarg = 1;
                                  var var_p = arguments[curarg];
                                  curarg++;
                                  if (argcv[0] !== 1)
                                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addPoint(1)"));
                                  setModuleName("createJsGraphicsWrapper");
                                  setLineNumber(643);    // compilenode identifier
                                  onSelf = true;
                                  var call755 = callmethodChecked(this, "calcBounds", [1], var_p);
                                  setLineNumber(644);    // compilenode call
                                  onSelf = true;
                                  var call756 = callmethodChecked(this, "points", [0]);
                                  var call757 = callmethodChecked(call756, "add", [1], var_p);
                                  return call757;
                                };
                                func754.paramCounts = [1];
                                obj752.methods["addPoint"] = func754;
                                func754.definitionLine = 642;
                                func754.definitionModule = "createJsGraphicsWrapper";
                                var func758 = function(argcv) {    // method calcBounds(1)
                                  var returnTarget = invocationCount;
                                  invocationCount++;
                                  var curarg = 1;
                                  var var_p = arguments[curarg];
                                  curarg++;
                                  if (argcv[0] !== 1)
                                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for calcBounds(1)"));
                                  setModuleName("createJsGraphicsWrapper");
                                  var if759 = GraceDone;
                                  setLineNumber(647);    // compilenode call
                                  onSelf = true;
                                  var call760 = callmethodChecked(this, "points", [0]);
                                  var call761 = callmethodChecked(call760, "isEmpty", [0]);
                                  if (Grace_isTrue(call761)) {
                                    setLineNumber(648);    // compilenode identifier
                                    var call762 = callmethodChecked(var_p, "y", [0]);
                                    onSelf = true;
                                    var call763 = callmethodChecked(this, "topMost:=", [1], call762);
                                    setLineNumber(649);    // compilenode identifier
                                    var call764 = callmethodChecked(var_p, "y", [0]);
                                    onSelf = true;
                                    var call765 = callmethodChecked(this, "bottomMost:=", [1], call764);
                                    setLineNumber(650);    // compilenode identifier
                                    var call766 = callmethodChecked(var_p, "x", [0]);
                                    onSelf = true;
                                    var call767 = callmethodChecked(this, "leftMost:=", [1], call766);
                                    setLineNumber(651);    // compilenode identifier
                                    var call768 = callmethodChecked(var_p, "x", [0]);
                                    onSelf = true;
                                    var call769 = callmethodChecked(this, "rightMost:=", [1], call768);
                                    if759 = call769;
                                  } else {
                                    var if770 = GraceDone;
                                    setLineNumber(653);    // compilenode call
                                    onSelf = true;
                                    var call771 = callmethodChecked(this, "leftMost", [0]);
                                    var call773 = callmethodChecked(var_p, "x", [0]);
                                    var opresult775 = callmethodChecked(call773, "<", [1], call771);
                                    if (Grace_isTrue(opresult775)) {
                                      var call776 = callmethodChecked(var_p, "x", [0]);
                                      onSelf = true;
                                      var call777 = callmethodChecked(this, "leftMost:=", [1], call776);
                                      if770 = call777;
                                    }
                                    var if778 = GraceDone;
                                    setLineNumber(654);    // compilenode call
                                    onSelf = true;
                                    var call779 = callmethodChecked(this, "rightMost", [0]);
                                    var call781 = callmethodChecked(var_p, "x", [0]);
                                    var opresult783 = callmethodChecked(call781, ">", [1], call779);
                                    if (Grace_isTrue(opresult783)) {
                                      var call784 = callmethodChecked(var_p, "x", [0]);
                                      onSelf = true;
                                      var call785 = callmethodChecked(this, "rightMost:=", [1], call784);
                                      if778 = call785;
                                    }
                                    var if786 = GraceDone;
                                    setLineNumber(655);    // compilenode call
                                    onSelf = true;
                                    var call787 = callmethodChecked(this, "topMost", [0]);
                                    var call789 = callmethodChecked(var_p, "y", [0]);
                                    var opresult791 = callmethodChecked(call789, "<", [1], call787);
                                    if (Grace_isTrue(opresult791)) {
                                      var call792 = callmethodChecked(var_p, "y", [0]);
                                      onSelf = true;
                                      var call793 = callmethodChecked(this, "topMost:=", [1], call792);
                                      if786 = call793;
                                    }
                                    var if794 = GraceDone;
                                    setLineNumber(656);    // compilenode call
                                    onSelf = true;
                                    var call795 = callmethodChecked(this, "bottomMost", [0]);
                                    var call797 = callmethodChecked(var_p, "y", [0]);
                                    var opresult799 = callmethodChecked(call797, ">", [1], call795);
                                    if (Grace_isTrue(opresult799)) {
                                      var call800 = callmethodChecked(var_p, "y", [0]);
                                      onSelf = true;
                                      var call801 = callmethodChecked(this, "bottomMost:=", [1], call800);
                                      if794 = call801;
                                    }
                                    if759 = if794;
                                  }
                                  return if759;
                                };
                                func758.confidential = true;
                                func758.paramCounts = [1];
                                obj752.methods["calcBounds"] = func758;
                                func758.definitionLine = 646;
                                func758.definitionModule = "createJsGraphicsWrapper";
                                var func802 = function(argcv) {    // method draw(2)
                                  var returnTarget = invocationCount;
                                  invocationCount++;
                                  var curarg = 1;
                                  var var_stroke__39__ = arguments[curarg];
                                  curarg++;
                                  var var_fill__39__ = arguments[curarg];
                                  curarg++;
                                  if (argcv[0] !== 2)
                                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for draw(2)"));
                                  setModuleName("createJsGraphicsWrapper");
                                  var if803 = GraceDone;
                                  setLineNumber(660);    // compilenode call
                                  onSelf = true;
                                  var call805 = callmethodChecked(this, "points", [0]);
                                  var call806 = callmethodChecked(call805, "size", [0]);
                                  var opresult808 = callmethodChecked(call806, "<", [1], new GraceNum(2));
                                  if (Grace_isTrue(opresult808)) {
                                    var string809 = new GraceString("Not enough points in custom shape");
                                    var call810 = Grace_print(string809);
                                    return var_done;
                                  }
                                  setLineNumber(662);    // compilenode call
                                  onSelf = true;
                                  var call811 = callmethodChecked(this, "points", [0]);
                                  var call812 = callmethodChecked(call811, "first", [0]);
                                  onSelf = true;
                                  var call813 = callmethodChecked(this, "current:=", [1], call812);
                                  setLineNumber(663);    // compilenode identifier
                                  onSelf = true;
                                  var call814 = callmethodChecked(this, "stroke:=", [1], var_stroke__39__);
                                  setLineNumber(664);    // compilenode identifier
                                  onSelf = true;
                                  var call815 = callmethodChecked(this, "color:=", [1], var_fill__39__);
                                  setLineNumber(666);    // compilenode call
                                     // start native code from line 666
                                  var result = GraceDone;
                                  
        var color = this.data.color._value;
        var stroke = this.data.stroke._value;
        var startX = this.data.current.data.x._value;
        var startY = this.data.current.data.y._value;
        this.data.createJsGraphics.graphics.beginFill(color);
        this.data.createJsGraphics.graphics.beginStroke(stroke);
        this.data.createJsGraphics.graphics.moveTo(startX, startY);
      
                                  var nat816 = result;
                                     // end native code insertion
                                  setLineNumber(675);    // compilenode call
                                  onSelf = true;
                                  var call817 = callmethodChecked(this, "points", [0]);
                                  var block818 = new GraceBlock(this, 675, 1);
                                  setLineNumber(1);    // compilenode identifier
                                  block818.real = function(var_x) {
                                    setLineNumber(676);    // compilenode identifier
                                    onSelf = true;
                                    var call819 = callmethodChecked(this, "current:=", [1], var_x);
                                    setLineNumber(677);    // compilenode call
                                       // start native code from line 677
                                    var result = GraceDone;
                                    
        var endX = this.data.current.data.x._value;
        var endY = this.data.current.data.y._value;
        this.data.createJsGraphics.graphics.lineTo(endX, endY);
      
                                    var nat820 = result;
                                       // end native code insertion
                                    return nat820;
                                  };
                                  var call821 = callmethodChecked(var_prelude, "for()do", [1, 1], call817, block818);
                                  setLineNumber(683);    // compilenode call
                                     // start native code from line 683
                                  var result = GraceDone;
                                  
      this.data.createJsGraphics.graphics.closePath()
    
                                  var nat822 = result;
                                     // end native code insertion
                                  return nat822;
                                };
                                func802.paramCounts = [2];
                                obj752.methods["draw"] = func802;
                                func802.definitionLine = 659;
                                func802.definitionModule = "createJsGraphicsWrapper";
                                var func823 = function(argcv) {    // method setBounds
                                  var returnTarget = invocationCount;
                                  invocationCount++;
                                  var curarg = 1;
                                  if (argcv[0] !== 0)
                                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for setBounds"));
                                  setModuleName("createJsGraphicsWrapper");
                                  setLineNumber(689);    // compilenode call
                                  onSelf = true;
                                  var call824 = callmethodChecked(this, "topMost", [0]);
                                  onSelf = true;
                                  var call826 = callmethodChecked(this, "leftMost", [0]);
                                  var opresult828 = callmethodChecked(call826, "@", [1], call824);
                                  var var_bounds = opresult828;
                                  setLineNumber(690);    // compilenode call
                                  onSelf = true;
                                  var call829 = callmethodChecked(this, "leftMost", [0]);
                                  onSelf = true;
                                  var call831 = callmethodChecked(this, "rightMost", [0]);
                                  var diff833 = callmethodChecked(call831, "-", [1], call829);
                                  onSelf = true;
                                  var call834 = callmethodChecked(this, "topMost", [0]);
                                  onSelf = true;
                                  var call836 = callmethodChecked(this, "bottomMost", [0]);
                                  var diff838 = callmethodChecked(call836, "-", [1], call834);
                                  var call839 = callmethodsuper(this, "setBounds", [3], var_bounds, diff833, diff838);
                                  return call839;
                                };
                                func823.paramCounts = [0];
                                obj752.methods["setBounds"] = func823;
                                func823.definitionLine = 688;
                                func823.definitionModule = "createJsGraphicsWrapper";
                                setLineNumber(633);    // compilenode call
                                var call840 = callmethodChecked(superDepth, "outer", [0]);
                                onOuter = true;
                                onSelf = true;
                                var call841 = callmethodChecked(call840, "shape()object", [0, 1], this);
                                obj752.superobj = call841;
                                if (call841.data) obj752.data = call841.data;
                                if (call841.hasOwnProperty('_value'))
                                    obj752._value = call841._value;
                                setLineNumber(634);    // compilenode call
                                var call842 = callmethodChecked(var_prelude, "list", [0]);
                                var call843 = callmethodChecked(call842, "empty", [0]);
                                obj752.data["points"] = call843;
                                var reader_createJsGraphicsWrapper_points844 = function() {
                                  return this.data["points"];
                                };
                                obj752.methods["points"] = reader_createJsGraphicsWrapper_points844;
                                obj752.data["points"] = call843;
                                var writer_createJsGraphicsWrapper_points844 = function(argcv, o) {
                                  this.data["points"] = o;
                                  return GraceDone;
                                };
                                obj752.methods["points:="] = writer_createJsGraphicsWrapper_points844;
                                reader_createJsGraphicsWrapper_points844.confidential = true;
                                writer_createJsGraphicsWrapper_points844.confidential = true;
                                obj752.mutable = true;
                                obj752.data["stroke"] = undefined;
                                var reader_createJsGraphicsWrapper_stroke845 = function() {
                                  return this.data["stroke"];
                                };
                                obj752.methods["stroke"] = reader_createJsGraphicsWrapper_stroke845;
                                obj752.data["stroke"] = undefined;
                                var writer_createJsGraphicsWrapper_stroke845 = function(argcv, o) {
                                  this.data["stroke"] = o;
                                  return GraceDone;
                                };
                                obj752.methods["stroke:="] = writer_createJsGraphicsWrapper_stroke845;
                                reader_createJsGraphicsWrapper_stroke845.confidential = true;
                                writer_createJsGraphicsWrapper_stroke845.confidential = true;
                                obj752.mutable = true;
                                obj752.data["current"] = undefined;
                                var reader_createJsGraphicsWrapper_current846 = function() {
                                  return this.data["current"];
                                };
                                obj752.methods["current"] = reader_createJsGraphicsWrapper_current846;
                                obj752.data["current"] = undefined;
                                var writer_createJsGraphicsWrapper_current846 = function(argcv, o) {
                                  this.data["current"] = o;
                                  return GraceDone;
                                };
                                obj752.methods["current:="] = writer_createJsGraphicsWrapper_current846;
                                reader_createJsGraphicsWrapper_current846.confidential = true;
                                writer_createJsGraphicsWrapper_current846.confidential = true;
                                obj752.mutable = true;
                                obj752.data["leftMost"] = undefined;
                                var reader_createJsGraphicsWrapper_leftMost847 = function() {
                                  return this.data["leftMost"];
                                };
                                obj752.methods["leftMost"] = reader_createJsGraphicsWrapper_leftMost847;
                                obj752.data["leftMost"] = undefined;
                                var writer_createJsGraphicsWrapper_leftMost847 = function(argcv, o) {
                                  this.data["leftMost"] = o;
                                  return GraceDone;
                                };
                                obj752.methods["leftMost:="] = writer_createJsGraphicsWrapper_leftMost847;
                                reader_createJsGraphicsWrapper_leftMost847.confidential = true;
                                writer_createJsGraphicsWrapper_leftMost847.confidential = true;
                                obj752.mutable = true;
                                obj752.data["rightMost"] = undefined;
                                var reader_createJsGraphicsWrapper_rightMost848 = function() {
                                  return this.data["rightMost"];
                                };
                                obj752.methods["rightMost"] = reader_createJsGraphicsWrapper_rightMost848;
                                obj752.data["rightMost"] = undefined;
                                var writer_createJsGraphicsWrapper_rightMost848 = function(argcv, o) {
                                  this.data["rightMost"] = o;
                                  return GraceDone;
                                };
                                obj752.methods["rightMost:="] = writer_createJsGraphicsWrapper_rightMost848;
                                reader_createJsGraphicsWrapper_rightMost848.confidential = true;
                                writer_createJsGraphicsWrapper_rightMost848.confidential = true;
                                obj752.mutable = true;
                                obj752.data["topMost"] = undefined;
                                var reader_createJsGraphicsWrapper_topMost849 = function() {
                                  return this.data["topMost"];
                                };
                                obj752.methods["topMost"] = reader_createJsGraphicsWrapper_topMost849;
                                obj752.data["topMost"] = undefined;
                                var writer_createJsGraphicsWrapper_topMost849 = function(argcv, o) {
                                  this.data["topMost"] = o;
                                  return GraceDone;
                                };
                                obj752.methods["topMost:="] = writer_createJsGraphicsWrapper_topMost849;
                                reader_createJsGraphicsWrapper_topMost849.confidential = true;
                                writer_createJsGraphicsWrapper_topMost849.confidential = true;
                                obj752.mutable = true;
                                obj752.data["bottomMost"] = undefined;
                                var reader_createJsGraphicsWrapper_bottomMost850 = function() {
                                  return this.data["bottomMost"];
                                };
                                obj752.methods["bottomMost"] = reader_createJsGraphicsWrapper_bottomMost850;
                                obj752.data["bottomMost"] = undefined;
                                var writer_createJsGraphicsWrapper_bottomMost850 = function(argcv, o) {
                                  this.data["bottomMost"] = o;
                                  return GraceDone;
                                };
                                obj752.methods["bottomMost:="] = writer_createJsGraphicsWrapper_bottomMost850;
                                reader_createJsGraphicsWrapper_bottomMost850.confidential = true;
                                writer_createJsGraphicsWrapper_bottomMost850.confidential = true;
                                obj752.mutable = true;
                                superDepth = origSuperDepth;
                              };
                              obj_init_752.apply(obj752, []);
                              return obj752;
                            };
                            func751.paramCounts = [0];
                            this.methods["customShape"] = func751;
                            func751.definitionLine = 632;
                            func751.definitionModule = "createJsGraphicsWrapper";
                              var func851 = function(argcv) {    // method customShape()object
                                var curarg = 1;
                                var inheritingObject = arguments[curarg++];
                                // Start argument processing
                                curarg = 1;
                                // End argument processing
                                setModuleName("createJsGraphicsWrapper");
                                var returnTarget = invocationCount;
                                invocationCount++;
                                var obj852 = Grace_allocObject(null, "customShape");
                                obj852.definitionModule = "createJsGraphicsWrapper";
                                obj852.definitionLine = 632;
                                var inho852 = inheritingObject;
                                while (inho852.superobj) inho852 = inho852.superobj;
                                inho852.superobj = obj852;
                                obj852.data = inheritingObject.data;
                                if (inheritingObject.hasOwnProperty('_value'))
                                  obj852._value = inheritingObject._value;
                                obj852.outer = this;
                                var reader_createJsGraphicsWrapper_outer853 = function() {
                                  return this.outer;
                                };
                                obj852.methods["outer"] = reader_createJsGraphicsWrapper_outer853;
                                var obj_init_852 = function() {
                                  var origSuperDepth = superDepth;
                                  superDepth = obj852;
                                  var func854 = function(argcv) {    // method addPoint(1)
                                    var returnTarget = invocationCount;
                                    invocationCount++;
                                    var curarg = 1;
                                    var var_p = arguments[curarg];
                                    curarg++;
                                    if (argcv[0] !== 1)
                                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addPoint(1)"));
                                    setModuleName("createJsGraphicsWrapper");
                                    setLineNumber(643);    // compilenode identifier
                                    onSelf = true;
                                    var call855 = callmethodChecked(this, "calcBounds", [1], var_p);
                                    setLineNumber(644);    // compilenode call
                                    onSelf = true;
                                    var call856 = callmethodChecked(this, "points", [0]);
                                    var call857 = callmethodChecked(call856, "add", [1], var_p);
                                    return call857;
                                  };
                                  func854.paramCounts = [1];
                                  obj852.methods["addPoint"] = func854;
                                  func854.definitionLine = 642;
                                  func854.definitionModule = "createJsGraphicsWrapper";
                                  var func858 = function(argcv) {    // method calcBounds(1)
                                    var returnTarget = invocationCount;
                                    invocationCount++;
                                    var curarg = 1;
                                    var var_p = arguments[curarg];
                                    curarg++;
                                    if (argcv[0] !== 1)
                                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for calcBounds(1)"));
                                    setModuleName("createJsGraphicsWrapper");
                                    var if859 = GraceDone;
                                    setLineNumber(647);    // compilenode call
                                    onSelf = true;
                                    var call860 = callmethodChecked(this, "points", [0]);
                                    var call861 = callmethodChecked(call860, "isEmpty", [0]);
                                    if (Grace_isTrue(call861)) {
                                      setLineNumber(648);    // compilenode identifier
                                      var call862 = callmethodChecked(var_p, "y", [0]);
                                      onSelf = true;
                                      var call863 = callmethodChecked(this, "topMost:=", [1], call862);
                                      setLineNumber(649);    // compilenode identifier
                                      var call864 = callmethodChecked(var_p, "y", [0]);
                                      onSelf = true;
                                      var call865 = callmethodChecked(this, "bottomMost:=", [1], call864);
                                      setLineNumber(650);    // compilenode identifier
                                      var call866 = callmethodChecked(var_p, "x", [0]);
                                      onSelf = true;
                                      var call867 = callmethodChecked(this, "leftMost:=", [1], call866);
                                      setLineNumber(651);    // compilenode identifier
                                      var call868 = callmethodChecked(var_p, "x", [0]);
                                      onSelf = true;
                                      var call869 = callmethodChecked(this, "rightMost:=", [1], call868);
                                      if859 = call869;
                                    } else {
                                      var if870 = GraceDone;
                                      setLineNumber(653);    // compilenode call
                                      onSelf = true;
                                      var call871 = callmethodChecked(this, "leftMost", [0]);
                                      var call873 = callmethodChecked(var_p, "x", [0]);
                                      var opresult875 = callmethodChecked(call873, "<", [1], call871);
                                      if (Grace_isTrue(opresult875)) {
                                        var call876 = callmethodChecked(var_p, "x", [0]);
                                        onSelf = true;
                                        var call877 = callmethodChecked(this, "leftMost:=", [1], call876);
                                        if870 = call877;
                                      }
                                      var if878 = GraceDone;
                                      setLineNumber(654);    // compilenode call
                                      onSelf = true;
                                      var call879 = callmethodChecked(this, "rightMost", [0]);
                                      var call881 = callmethodChecked(var_p, "x", [0]);
                                      var opresult883 = callmethodChecked(call881, ">", [1], call879);
                                      if (Grace_isTrue(opresult883)) {
                                        var call884 = callmethodChecked(var_p, "x", [0]);
                                        onSelf = true;
                                        var call885 = callmethodChecked(this, "rightMost:=", [1], call884);
                                        if878 = call885;
                                      }
                                      var if886 = GraceDone;
                                      setLineNumber(655);    // compilenode call
                                      onSelf = true;
                                      var call887 = callmethodChecked(this, "topMost", [0]);
                                      var call889 = callmethodChecked(var_p, "y", [0]);
                                      var opresult891 = callmethodChecked(call889, "<", [1], call887);
                                      if (Grace_isTrue(opresult891)) {
                                        var call892 = callmethodChecked(var_p, "y", [0]);
                                        onSelf = true;
                                        var call893 = callmethodChecked(this, "topMost:=", [1], call892);
                                        if886 = call893;
                                      }
                                      var if894 = GraceDone;
                                      setLineNumber(656);    // compilenode call
                                      onSelf = true;
                                      var call895 = callmethodChecked(this, "bottomMost", [0]);
                                      var call897 = callmethodChecked(var_p, "y", [0]);
                                      var opresult899 = callmethodChecked(call897, ">", [1], call895);
                                      if (Grace_isTrue(opresult899)) {
                                        var call900 = callmethodChecked(var_p, "y", [0]);
                                        onSelf = true;
                                        var call901 = callmethodChecked(this, "bottomMost:=", [1], call900);
                                        if894 = call901;
                                      }
                                      if859 = if894;
                                    }
                                    return if859;
                                  };
                                  func858.confidential = true;
                                  func858.paramCounts = [1];
                                  obj852.methods["calcBounds"] = func858;
                                  func858.definitionLine = 646;
                                  func858.definitionModule = "createJsGraphicsWrapper";
                                  var func902 = function(argcv) {    // method draw(2)
                                    var returnTarget = invocationCount;
                                    invocationCount++;
                                    var curarg = 1;
                                    var var_stroke__39__ = arguments[curarg];
                                    curarg++;
                                    var var_fill__39__ = arguments[curarg];
                                    curarg++;
                                    if (argcv[0] !== 2)
                                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for draw(2)"));
                                    setModuleName("createJsGraphicsWrapper");
                                    var if903 = GraceDone;
                                    setLineNumber(660);    // compilenode call
                                    onSelf = true;
                                    var call905 = callmethodChecked(this, "points", [0]);
                                    var call906 = callmethodChecked(call905, "size", [0]);
                                    var opresult908 = callmethodChecked(call906, "<", [1], new GraceNum(2));
                                    if (Grace_isTrue(opresult908)) {
                                      var string909 = new GraceString("Not enough points in custom shape");
                                      var call910 = Grace_print(string909);
                                      return var_done;
                                    }
                                    setLineNumber(662);    // compilenode call
                                    onSelf = true;
                                    var call911 = callmethodChecked(this, "points", [0]);
                                    var call912 = callmethodChecked(call911, "first", [0]);
                                    onSelf = true;
                                    var call913 = callmethodChecked(this, "current:=", [1], call912);
                                    setLineNumber(663);    // compilenode identifier
                                    onSelf = true;
                                    var call914 = callmethodChecked(this, "stroke:=", [1], var_stroke__39__);
                                    setLineNumber(664);    // compilenode identifier
                                    onSelf = true;
                                    var call915 = callmethodChecked(this, "color:=", [1], var_fill__39__);
                                    setLineNumber(666);    // compilenode call
                                       // start native code from line 666
                                    var result = GraceDone;
                                    
        var color = this.data.color._value;
        var stroke = this.data.stroke._value;
        var startX = this.data.current.data.x._value;
        var startY = this.data.current.data.y._value;
        this.data.createJsGraphics.graphics.beginFill(color);
        this.data.createJsGraphics.graphics.beginStroke(stroke);
        this.data.createJsGraphics.graphics.moveTo(startX, startY);
      
                                    var nat916 = result;
                                       // end native code insertion
                                    setLineNumber(675);    // compilenode call
                                    onSelf = true;
                                    var call917 = callmethodChecked(this, "points", [0]);
                                    var block918 = new GraceBlock(this, 675, 1);
                                    setLineNumber(1);    // compilenode identifier
                                    block918.real = function(var_x) {
                                      setLineNumber(676);    // compilenode identifier
                                      onSelf = true;
                                      var call919 = callmethodChecked(this, "current:=", [1], var_x);
                                      setLineNumber(677);    // compilenode call
                                         // start native code from line 677
                                      var result = GraceDone;
                                      
        var endX = this.data.current.data.x._value;
        var endY = this.data.current.data.y._value;
        this.data.createJsGraphics.graphics.lineTo(endX, endY);
      
                                      var nat920 = result;
                                         // end native code insertion
                                      return nat920;
                                    };
                                    var call921 = callmethodChecked(var_prelude, "for()do", [1, 1], call917, block918);
                                    setLineNumber(683);    // compilenode call
                                       // start native code from line 683
                                    var result = GraceDone;
                                    
      this.data.createJsGraphics.graphics.closePath()
    
                                    var nat922 = result;
                                       // end native code insertion
                                    return nat922;
                                  };
                                  func902.paramCounts = [2];
                                  obj852.methods["draw"] = func902;
                                  func902.definitionLine = 659;
                                  func902.definitionModule = "createJsGraphicsWrapper";
                                  var func923 = function(argcv) {    // method setBounds
                                    var returnTarget = invocationCount;
                                    invocationCount++;
                                    var curarg = 1;
                                    if (argcv[0] !== 0)
                                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for setBounds"));
                                    setModuleName("createJsGraphicsWrapper");
                                    setLineNumber(689);    // compilenode call
                                    onSelf = true;
                                    var call924 = callmethodChecked(this, "topMost", [0]);
                                    onSelf = true;
                                    var call926 = callmethodChecked(this, "leftMost", [0]);
                                    var opresult928 = callmethodChecked(call926, "@", [1], call924);
                                    var var_bounds = opresult928;
                                    setLineNumber(690);    // compilenode call
                                    onSelf = true;
                                    var call929 = callmethodChecked(this, "leftMost", [0]);
                                    onSelf = true;
                                    var call931 = callmethodChecked(this, "rightMost", [0]);
                                    var diff933 = callmethodChecked(call931, "-", [1], call929);
                                    onSelf = true;
                                    var call934 = callmethodChecked(this, "topMost", [0]);
                                    onSelf = true;
                                    var call936 = callmethodChecked(this, "bottomMost", [0]);
                                    var diff938 = callmethodChecked(call936, "-", [1], call934);
                                    var call939 = callmethodsuper(this, "setBounds", [3], var_bounds, diff933, diff938);
                                    return call939;
                                  };
                                  func923.paramCounts = [0];
                                  obj852.methods["setBounds"] = func923;
                                  func923.definitionLine = 688;
                                  func923.definitionModule = "createJsGraphicsWrapper";
                                  setLineNumber(633);    // compilenode call
                                  var call940 = callmethodChecked(superDepth, "outer", [0]);
                                  onOuter = true;
                                  onSelf = true;
                                  var call941 = callmethodChecked(call940, "shape()object", [0, 1], this);
                                  obj852.superobj = call941;
                                  if (call941.data) obj852.data = call941.data;
                                  if (call941.hasOwnProperty('_value'))
                                      obj852._value = call941._value;
                                  setLineNumber(634);    // compilenode call
                                  var call942 = callmethodChecked(var_prelude, "list", [0]);
                                  var call943 = callmethodChecked(call942, "empty", [0]);
                                  obj852.data["points"] = call943;
                                  var reader_createJsGraphicsWrapper_points944 = function() {
                                    return this.data["points"];
                                  };
                                  obj852.methods["points"] = reader_createJsGraphicsWrapper_points944;
                                  obj852.data["points"] = call943;
                                  var writer_createJsGraphicsWrapper_points944 = function(argcv, o) {
                                    this.data["points"] = o;
                                    return GraceDone;
                                  };
                                  obj852.methods["points:="] = writer_createJsGraphicsWrapper_points944;
                                  reader_createJsGraphicsWrapper_points944.confidential = true;
                                  writer_createJsGraphicsWrapper_points944.confidential = true;
                                  obj852.mutable = true;
                                  obj852.data["stroke"] = undefined;
                                  var reader_createJsGraphicsWrapper_stroke945 = function() {
                                    return this.data["stroke"];
                                  };
                                  obj852.methods["stroke"] = reader_createJsGraphicsWrapper_stroke945;
                                  obj852.data["stroke"] = undefined;
                                  var writer_createJsGraphicsWrapper_stroke945 = function(argcv, o) {
                                    this.data["stroke"] = o;
                                    return GraceDone;
                                  };
                                  obj852.methods["stroke:="] = writer_createJsGraphicsWrapper_stroke945;
                                  reader_createJsGraphicsWrapper_stroke945.confidential = true;
                                  writer_createJsGraphicsWrapper_stroke945.confidential = true;
                                  obj852.mutable = true;
                                  obj852.data["current"] = undefined;
                                  var reader_createJsGraphicsWrapper_current946 = function() {
                                    return this.data["current"];
                                  };
                                  obj852.methods["current"] = reader_createJsGraphicsWrapper_current946;
                                  obj852.data["current"] = undefined;
                                  var writer_createJsGraphicsWrapper_current946 = function(argcv, o) {
                                    this.data["current"] = o;
                                    return GraceDone;
                                  };
                                  obj852.methods["current:="] = writer_createJsGraphicsWrapper_current946;
                                  reader_createJsGraphicsWrapper_current946.confidential = true;
                                  writer_createJsGraphicsWrapper_current946.confidential = true;
                                  obj852.mutable = true;
                                  obj852.data["leftMost"] = undefined;
                                  var reader_createJsGraphicsWrapper_leftMost947 = function() {
                                    return this.data["leftMost"];
                                  };
                                  obj852.methods["leftMost"] = reader_createJsGraphicsWrapper_leftMost947;
                                  obj852.data["leftMost"] = undefined;
                                  var writer_createJsGraphicsWrapper_leftMost947 = function(argcv, o) {
                                    this.data["leftMost"] = o;
                                    return GraceDone;
                                  };
                                  obj852.methods["leftMost:="] = writer_createJsGraphicsWrapper_leftMost947;
                                  reader_createJsGraphicsWrapper_leftMost947.confidential = true;
                                  writer_createJsGraphicsWrapper_leftMost947.confidential = true;
                                  obj852.mutable = true;
                                  obj852.data["rightMost"] = undefined;
                                  var reader_createJsGraphicsWrapper_rightMost948 = function() {
                                    return this.data["rightMost"];
                                  };
                                  obj852.methods["rightMost"] = reader_createJsGraphicsWrapper_rightMost948;
                                  obj852.data["rightMost"] = undefined;
                                  var writer_createJsGraphicsWrapper_rightMost948 = function(argcv, o) {
                                    this.data["rightMost"] = o;
                                    return GraceDone;
                                  };
                                  obj852.methods["rightMost:="] = writer_createJsGraphicsWrapper_rightMost948;
                                  reader_createJsGraphicsWrapper_rightMost948.confidential = true;
                                  writer_createJsGraphicsWrapper_rightMost948.confidential = true;
                                  obj852.mutable = true;
                                  obj852.data["topMost"] = undefined;
                                  var reader_createJsGraphicsWrapper_topMost949 = function() {
                                    return this.data["topMost"];
                                  };
                                  obj852.methods["topMost"] = reader_createJsGraphicsWrapper_topMost949;
                                  obj852.data["topMost"] = undefined;
                                  var writer_createJsGraphicsWrapper_topMost949 = function(argcv, o) {
                                    this.data["topMost"] = o;
                                    return GraceDone;
                                  };
                                  obj852.methods["topMost:="] = writer_createJsGraphicsWrapper_topMost949;
                                  reader_createJsGraphicsWrapper_topMost949.confidential = true;
                                  writer_createJsGraphicsWrapper_topMost949.confidential = true;
                                  obj852.mutable = true;
                                  obj852.data["bottomMost"] = undefined;
                                  var reader_createJsGraphicsWrapper_bottomMost950 = function() {
                                    return this.data["bottomMost"];
                                  };
                                  obj852.methods["bottomMost"] = reader_createJsGraphicsWrapper_bottomMost950;
                                  obj852.data["bottomMost"] = undefined;
                                  var writer_createJsGraphicsWrapper_bottomMost950 = function(argcv, o) {
                                    this.data["bottomMost"] = o;
                                    return GraceDone;
                                  };
                                  obj852.methods["bottomMost:="] = writer_createJsGraphicsWrapper_bottomMost950;
                                  reader_createJsGraphicsWrapper_bottomMost950.confidential = true;
                                  writer_createJsGraphicsWrapper_bottomMost950.confidential = true;
                                  obj852.mutable = true;
                                  superDepth = origSuperDepth;
                                };
                                obj_init_852.apply(inheritingObject, []);
                                return obj852;
                                };
                                this.methods["customShape()object"] = func851;
                              setLineNumber(694);    // compilenode method
                              var func951 = function(argcv) {    // method tween(2)
                                var returnTarget = invocationCount;
                                invocationCount++;
                                var curarg = 1;
                                var var_jsGraphicsObj = arguments[curarg];
                                curarg++;
                                var var_myStage = arguments[curarg];
                                curarg++;
                                if (argcv[0] !== 2)
                                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for tween(2)"));
                                setModuleName("createJsGraphicsWrapper");
                                var obj952 = Grace_allocObject(GraceObject, "createJsGraphicsWrapper.identifierBinding‹tween›");
                                obj952.definitionModule = "createJsGraphicsWrapper";
                                obj952.definitionLine = 694;
                                obj952.outer = this;
                                var reader_createJsGraphicsWrapper_outer953 = function() {
                                  return this.outer;
                                };
                                obj952.methods["outer"] = reader_createJsGraphicsWrapper_outer953;
                                var obj_init_952 = function() {
                                  var origSuperDepth = superDepth;
                                  superDepth = obj952;
                                  var func954 = function(argcv) {    // method toX(1)
                                    var returnTarget = invocationCount;
                                    invocationCount++;
                                    var curarg = 1;
                                    var var_x = arguments[curarg];
                                    curarg++;
                                    if (argcv[0] !== 1)
                                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for toX(1)"));
                                    setModuleName("createJsGraphicsWrapper");
                                    setLineNumber(703);    // compilenode call
                                       // start native code from line 703
                                    var result = GraceDone;
                                    var tween = this.data.jsTween;
            this.data.jsTween = tween.to({x:var_x._value}, 250);
                                    var nat955 = result;
                                       // end native code insertion
                                    return nat955;
                                  };
                                  func954.paramCounts = [1];
                                  obj952.methods["toX"] = func954;
                                  func954.definitionLine = 702;
                                  func954.definitionModule = "createJsGraphicsWrapper";
                                  var func956 = function(argcv) {    // method wait(1)
                                    var returnTarget = invocationCount;
                                    invocationCount++;
                                    var curarg = 1;
                                    var var_time = arguments[curarg];
                                    curarg++;
                                    if (argcv[0] !== 1)
                                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for wait(1)"));
                                    setModuleName("createJsGraphicsWrapper");
                                    setLineNumber(708);    // compilenode call
                                       // start native code from line 708
                                    var result = GraceDone;
                                    var tween = this.data.jsTween;
            this.data.jsTween = tween.wait(var_time._value);
                                    var nat957 = result;
                                       // end native code insertion
                                    return nat957;
                                  };
                                  func956.paramCounts = [1];
                                  obj952.methods["wait"] = func956;
                                  func956.definitionLine = 707;
                                  func956.definitionModule = "createJsGraphicsWrapper";
                                  obj952.data["jsTween"] = undefined;
                                  var reader_createJsGraphicsWrapper_jsTween958 = function() {
                                    return this.data["jsTween"];
                                  };
                                  obj952.methods["jsTween"] = reader_createJsGraphicsWrapper_jsTween958;
                                  obj952.data["jsTween"] = undefined;
                                  var writer_createJsGraphicsWrapper_jsTween958 = function(argcv, o) {
                                    this.data["jsTween"] = o;
                                    return GraceDone;
                                  };
                                  obj952.methods["jsTween:="] = writer_createJsGraphicsWrapper_jsTween958;
                                  reader_createJsGraphicsWrapper_jsTween958.confidential = true;
                                  writer_createJsGraphicsWrapper_jsTween958.confidential = true;
                                  obj952.mutable = true;
                                  setLineNumber(696);    // compilenode call
                                     // start native code from line 696
                                  var result = GraceDone;
                                  var stage = var_myStage.data.mystage;
        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener("tick", stage);
        var shape = var_jsGraphicsObj.data.createJsGraphics;
        this.data.jsTween = createjs.Tween.get(shape, {override:true});
                                  var nat959 = result;
                                     // end native code insertion
                                  superDepth = origSuperDepth;
                                };
                                obj_init_952.apply(obj952, []);
                                return obj952;
                              };
                              func951.paramCounts = [2];
                              this.methods["tween"] = func951;
                              func951.definitionLine = 694;
                              func951.definitionModule = "createJsGraphicsWrapper";
                                var func960 = function(argcv) {    // method tween(2     )()object
                                  var curarg = 1;
                                  var var_jsGraphicsObj = arguments[curarg];
                                  curarg++;
                                  var var_myStage = arguments[curarg];
                                  curarg++;
                                  var inheritingObject = arguments[curarg++];
                                  // Start argument processing
                                  curarg = 1;
                                  curarg++;
                                  curarg++;
                                  // End argument processing
                                  setModuleName("createJsGraphicsWrapper");
                                  var returnTarget = invocationCount;
                                  invocationCount++;
                                  var obj961 = Grace_allocObject(GraceObject, "tween");
                                  obj961.definitionModule = "createJsGraphicsWrapper";
                                  obj961.definitionLine = 694;
                                  var inho961 = inheritingObject;
                                  while (inho961.superobj) inho961 = inho961.superobj;
                                  inho961.superobj = obj961;
                                  obj961.data = inheritingObject.data;
                                  if (inheritingObject.hasOwnProperty('_value'))
                                    obj961._value = inheritingObject._value;
                                  obj961.outer = this;
                                  var reader_createJsGraphicsWrapper_outer962 = function() {
                                    return this.outer;
                                  };
                                  obj961.methods["outer"] = reader_createJsGraphicsWrapper_outer962;
                                  var obj_init_961 = function() {
                                    var origSuperDepth = superDepth;
                                    superDepth = obj961;
                                    var func963 = function(argcv) {    // method toX(1)
                                      var returnTarget = invocationCount;
                                      invocationCount++;
                                      var curarg = 1;
                                      var var_x = arguments[curarg];
                                      curarg++;
                                      if (argcv[0] !== 1)
                                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for toX(1)"));
                                      setModuleName("createJsGraphicsWrapper");
                                      setLineNumber(703);    // compilenode call
                                         // start native code from line 703
                                      var result = GraceDone;
                                      var tween = this.data.jsTween;
            this.data.jsTween = tween.to({x:var_x._value}, 250);
                                      var nat964 = result;
                                         // end native code insertion
                                      return nat964;
                                    };
                                    func963.paramCounts = [1];
                                    obj961.methods["toX"] = func963;
                                    func963.definitionLine = 702;
                                    func963.definitionModule = "createJsGraphicsWrapper";
                                    var func965 = function(argcv) {    // method wait(1)
                                      var returnTarget = invocationCount;
                                      invocationCount++;
                                      var curarg = 1;
                                      var var_time = arguments[curarg];
                                      curarg++;
                                      if (argcv[0] !== 1)
                                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for wait(1)"));
                                      setModuleName("createJsGraphicsWrapper");
                                      setLineNumber(708);    // compilenode call
                                         // start native code from line 708
                                      var result = GraceDone;
                                      var tween = this.data.jsTween;
            this.data.jsTween = tween.wait(var_time._value);
                                      var nat966 = result;
                                         // end native code insertion
                                      return nat966;
                                    };
                                    func965.paramCounts = [1];
                                    obj961.methods["wait"] = func965;
                                    func965.definitionLine = 707;
                                    func965.definitionModule = "createJsGraphicsWrapper";
                                    obj961.data["jsTween"] = undefined;
                                    var reader_createJsGraphicsWrapper_jsTween967 = function() {
                                      return this.data["jsTween"];
                                    };
                                    obj961.methods["jsTween"] = reader_createJsGraphicsWrapper_jsTween967;
                                    obj961.data["jsTween"] = undefined;
                                    var writer_createJsGraphicsWrapper_jsTween967 = function(argcv, o) {
                                      this.data["jsTween"] = o;
                                      return GraceDone;
                                    };
                                    obj961.methods["jsTween:="] = writer_createJsGraphicsWrapper_jsTween967;
                                    reader_createJsGraphicsWrapper_jsTween967.confidential = true;
                                    writer_createJsGraphicsWrapper_jsTween967.confidential = true;
                                    obj961.mutable = true;
                                    setLineNumber(696);    // compilenode call
                                       // start native code from line 696
                                    var result = GraceDone;
                                    var stage = var_myStage.data.mystage;
        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener("tick", stage);
        var shape = var_jsGraphicsObj.data.createJsGraphics;
        this.data.jsTween = createjs.Tween.get(shape, {override:true});
                                    var nat968 = result;
                                       // end native code insertion
                                    superDepth = origSuperDepth;
                                  };
                                  obj_init_961.apply(inheritingObject, []);
                                  return obj961;
                                  };
                                  this.methods["tween()object"] = func960;
                                setLineNumber(713);    // compilenode method
                                var func969 = function(argcv) {    // method inputBox(1)
                                  var returnTarget = invocationCount;
                                  invocationCount++;
                                  var curarg = 1;
                                  var var_mystage = arguments[curarg];
                                  curarg++;
                                  if (argcv[0] !== 1)
                                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for inputBox(1)"));
                                  setModuleName("createJsGraphicsWrapper");
                                  var obj970 = Grace_allocObject(GraceObject, "createJsGraphicsWrapper.identifierBinding‹inputBox›");
                                  obj970.definitionModule = "createJsGraphicsWrapper";
                                  obj970.definitionLine = 713;
                                  obj970.outer = this;
                                  var reader_createJsGraphicsWrapper_outer971 = function() {
                                    return this.outer;
                                  };
                                  obj970.methods["outer"] = reader_createJsGraphicsWrapper_outer971;
                                  var obj_init_970 = function() {
                                    var origSuperDepth = superDepth;
                                    superDepth = obj970;
                                    var func972 = function(argcv) {    // method value
                                      var returnTarget = invocationCount;
                                      invocationCount++;
                                      var curarg = 1;
                                      if (argcv[0] !== 0)
                                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for value"));
                                      setModuleName("createJsGraphicsWrapper");
                                      setLineNumber(726);    // compilenode call
                                         // start native code from line 726
                                      var result = GraceDone;
                                      
      var input = this.data.input;
      return new GraceString(input.value());
    
                                      var nat973 = result;
                                         // end native code insertion
                                      return nat973;
                                    };
                                    func972.paramCounts = [0];
                                    obj970.methods["value"] = func972;
                                    func972.definitionLine = 725;
                                    func972.definitionModule = "createJsGraphicsWrapper";
                                    var func974 = function(argcv) {    // method value:=(1)
                                      var returnTarget = invocationCount;
                                      invocationCount++;
                                      var curarg = 1;
                                      var var_newval = arguments[curarg];
                                      curarg++;
                                      if (argcv[0] !== 1)
                                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for value:=(1)"));
                                      setModuleName("createJsGraphicsWrapper");
                                      setLineNumber(733);    // compilenode call
                                         // start native code from line 733
                                      var result = GraceDone;
                                      
      var newval = var_newval._value;
      var input = this.data.input;
      input.value(newval);
      input.focus();
    
                                      var nat975 = result;
                                         // end native code insertion
                                      return nat975;
                                    };
                                    func974.paramCounts = [1];
                                    obj970.methods["value:="] = func974;
                                    func974.definitionLine = 732;
                                    func974.definitionModule = "createJsGraphicsWrapper";
                                    var func976 = function(argcv) {    // method draw
                                      var returnTarget = invocationCount;
                                      invocationCount++;
                                      var curarg = 1;
                                      if (argcv[0] !== 0)
                                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for draw"));
                                      setModuleName("createJsGraphicsWrapper");
                                      setLineNumber(742);    // compilenode call
                                         // start native code from line 742
                                      var result = GraceDone;
                                      
      var stage = var_mystage;
      var mycanvas = stage.stage.canvas;
      var input = new CanvasInput({
        canvas: mycanvas,
        x: this.data.location.data.x._value,
        y: this.data.location.data.y._value,
        width: this.data.width._value,
        height: this.data.height._value,
        fontSize: this.data.fontSize._value,
        fontFamily: this.data.fontFamily._value,
        fontColor: this.data.fontColor._value,
        backgroundColor: this.data.backgroundColor._value,
        borderColor: this.data.borderColor._value
      });
      input.focus();
      this.data.input = input;
    
                                      var nat977 = result;
                                         // end native code insertion
                                      setLineNumber(760);    // compilenode call
                                      onSelf = true;
                                      var call978 = callmethodChecked(this, "submitBlock", [0]);
                                      onSelf = true;
                                      var call979 = callmethodChecked(this, "onSubmit", [2], this, call978);
                                      return call979;
                                    };
                                    func976.paramCounts = [0];
                                    obj970.methods["draw"] = func976;
                                    func976.definitionLine = 741;
                                    func976.definitionModule = "createJsGraphicsWrapper";
                                    var func980 = function(argcv) {    // method focus
                                      var returnTarget = invocationCount;
                                      invocationCount++;
                                      var curarg = 1;
                                      if (argcv[0] !== 0)
                                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for focus"));
                                      setModuleName("createJsGraphicsWrapper");
                                      setLineNumber(764);    // compilenode call
                                         // start native code from line 764
                                      var result = GraceDone;
                                      
      var input = this.data.input;
      input.focus();
    
                                      var nat981 = result;
                                         // end native code insertion
                                      return nat981;
                                    };
                                    func980.paramCounts = [0];
                                    obj970.methods["focus"] = func980;
                                    func980.definitionLine = 763;
                                    func980.definitionModule = "createJsGraphicsWrapper";
                                    var func982 = function(argcv) {    // method destroy
                                      var returnTarget = invocationCount;
                                      invocationCount++;
                                      var curarg = 1;
                                      if (argcv[0] !== 0)
                                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for destroy"));
                                      setModuleName("createJsGraphicsWrapper");
                                      setLineNumber(771);    // compilenode call
                                         // start native code from line 771
                                      var result = GraceDone;
                                      
      var input = this.data.input;
      input.destroy();
    
                                      var nat983 = result;
                                         // end native code insertion
                                      return nat983;
                                    };
                                    func982.paramCounts = [0];
                                    obj970.methods["destroy"] = func982;
                                    func982.definitionLine = 770;
                                    func982.definitionModule = "createJsGraphicsWrapper";
                                    var func984 = function(argcv) {    // method callSubmit
                                      var returnTarget = invocationCount;
                                      invocationCount++;
                                      var curarg = 1;
                                      if (argcv[0] !== 0)
                                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for callSubmit"));
                                      setModuleName("createJsGraphicsWrapper");
                                      setLineNumber(778);    // compilenode call
                                      onSelf = true;
                                      var call985 = callmethodChecked(this, "submitBlock", [0]);
                                      var call986 = callmethodChecked(call985, "apply", [0]);
                                      return call986;
                                    };
                                    func984.paramCounts = [0];
                                    obj970.methods["callSubmit"] = func984;
                                    func984.definitionLine = 777;
                                    func984.definitionModule = "createJsGraphicsWrapper";
                                    var func987 = function(argcv) {    // method onSubmit(2)
                                      var returnTarget = invocationCount;
                                      invocationCount++;
                                      var curarg = 1;
                                      var var_inputObj = arguments[curarg];
                                      curarg++;
                                      var var_block = arguments[curarg];
                                      curarg++;
                                      if (argcv[0] !== 2)
                                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onSubmit(2)"));
                                      setModuleName("createJsGraphicsWrapper");
                                      setLineNumber(782);    // compilenode identifier
                                      onSelf = true;
                                      var call988 = callmethodChecked(this, "submitBlock:=", [1], var_block);
                                      setLineNumber(783);    // compilenode call
                                         // start native code from line 783
                                      var result = GraceDone;
                                      
      if(this.data.input != null) {
        var input = this.data.input;
        input.onsubmit(function(event) {
            minigrace.trapErrors(function() {
                callmethod(var_inputObj, "callSubmit", [0])
            });
        });
      }
    
                                      var nat989 = result;
                                         // end native code insertion
                                      return nat989;
                                    };
                                    func987.paramCounts = [2];
                                    obj970.methods["onSubmit"] = func987;
                                    func987.definitionLine = 781;
                                    func987.definitionModule = "createJsGraphicsWrapper";
                                    obj970.data["location"] = undefined;
                                    var reader_createJsGraphicsWrapper_location990 = function() {
                                      return this.data["location"];
                                    };
                                    obj970.methods["location"] = reader_createJsGraphicsWrapper_location990;
                                    obj970.data["location"] = undefined;
                                    var writer_createJsGraphicsWrapper_location990 = function(argcv, o) {
                                      this.data["location"] = o;
                                      return GraceDone;
                                    };
                                    obj970.methods["location:="] = writer_createJsGraphicsWrapper_location990;
                                    obj970.mutable = true;
                                    obj970.data["width"] = undefined;
                                    var reader_createJsGraphicsWrapper_width991 = function() {
                                      return this.data["width"];
                                    };
                                    obj970.methods["width"] = reader_createJsGraphicsWrapper_width991;
                                    obj970.data["width"] = undefined;
                                    var writer_createJsGraphicsWrapper_width991 = function(argcv, o) {
                                      this.data["width"] = o;
                                      return GraceDone;
                                    };
                                    obj970.methods["width:="] = writer_createJsGraphicsWrapper_width991;
                                    obj970.mutable = true;
                                    obj970.data["height"] = undefined;
                                    var reader_createJsGraphicsWrapper_height992 = function() {
                                      return this.data["height"];
                                    };
                                    obj970.methods["height"] = reader_createJsGraphicsWrapper_height992;
                                    obj970.data["height"] = undefined;
                                    var writer_createJsGraphicsWrapper_height992 = function(argcv, o) {
                                      this.data["height"] = o;
                                      return GraceDone;
                                    };
                                    obj970.methods["height:="] = writer_createJsGraphicsWrapper_height992;
                                    obj970.mutable = true;
                                    obj970.data["fontSize"] = undefined;
                                    var reader_createJsGraphicsWrapper_fontSize993 = function() {
                                      return this.data["fontSize"];
                                    };
                                    obj970.methods["fontSize"] = reader_createJsGraphicsWrapper_fontSize993;
                                    obj970.data["fontSize"] = undefined;
                                    var writer_createJsGraphicsWrapper_fontSize993 = function(argcv, o) {
                                      this.data["fontSize"] = o;
                                      return GraceDone;
                                    };
                                    obj970.methods["fontSize:="] = writer_createJsGraphicsWrapper_fontSize993;
                                    obj970.mutable = true;
                                    obj970.data["fontFamily"] = undefined;
                                    var reader_createJsGraphicsWrapper_fontFamily994 = function() {
                                      return this.data["fontFamily"];
                                    };
                                    obj970.methods["fontFamily"] = reader_createJsGraphicsWrapper_fontFamily994;
                                    obj970.data["fontFamily"] = undefined;
                                    var writer_createJsGraphicsWrapper_fontFamily994 = function(argcv, o) {
                                      this.data["fontFamily"] = o;
                                      return GraceDone;
                                    };
                                    obj970.methods["fontFamily:="] = writer_createJsGraphicsWrapper_fontFamily994;
                                    obj970.mutable = true;
                                    obj970.data["fontColor"] = undefined;
                                    var reader_createJsGraphicsWrapper_fontColor995 = function() {
                                      return this.data["fontColor"];
                                    };
                                    obj970.methods["fontColor"] = reader_createJsGraphicsWrapper_fontColor995;
                                    obj970.data["fontColor"] = undefined;
                                    var writer_createJsGraphicsWrapper_fontColor995 = function(argcv, o) {
                                      this.data["fontColor"] = o;
                                      return GraceDone;
                                    };
                                    obj970.methods["fontColor:="] = writer_createJsGraphicsWrapper_fontColor995;
                                    obj970.mutable = true;
                                    obj970.data["backgroundColor"] = undefined;
                                    var reader_createJsGraphicsWrapper_backgroundColor996 = function() {
                                      return this.data["backgroundColor"];
                                    };
                                    obj970.methods["backgroundColor"] = reader_createJsGraphicsWrapper_backgroundColor996;
                                    obj970.data["backgroundColor"] = undefined;
                                    var writer_createJsGraphicsWrapper_backgroundColor996 = function(argcv, o) {
                                      this.data["backgroundColor"] = o;
                                      return GraceDone;
                                    };
                                    obj970.methods["backgroundColor:="] = writer_createJsGraphicsWrapper_backgroundColor996;
                                    obj970.mutable = true;
                                    obj970.data["borderColor"] = undefined;
                                    var reader_createJsGraphicsWrapper_borderColor997 = function() {
                                      return this.data["borderColor"];
                                    };
                                    obj970.methods["borderColor"] = reader_createJsGraphicsWrapper_borderColor997;
                                    obj970.data["borderColor"] = undefined;
                                    var writer_createJsGraphicsWrapper_borderColor997 = function(argcv, o) {
                                      this.data["borderColor"] = o;
                                      return GraceDone;
                                    };
                                    obj970.methods["borderColor:="] = writer_createJsGraphicsWrapper_borderColor997;
                                    obj970.mutable = true;
                                    setLineNumber(722);    // compilenode block
                                    var block998 = new GraceBlock(this, 722, 0);
                                    block998.real = function() {
                                      return GraceDone;
                                    };
                                    obj970.data["submitBlock"] = block998;
                                    var reader_createJsGraphicsWrapper_submitBlock999 = function() {
                                      return this.data["submitBlock"];
                                    };
                                    obj970.methods["submitBlock"] = reader_createJsGraphicsWrapper_submitBlock999;
                                    obj970.data["submitBlock"] = block998;
                                    var writer_createJsGraphicsWrapper_submitBlock999 = function(argcv, o) {
                                      this.data["submitBlock"] = o;
                                      return GraceDone;
                                    };
                                    obj970.methods["submitBlock:="] = writer_createJsGraphicsWrapper_submitBlock999;
                                    reader_createJsGraphicsWrapper_submitBlock999.confidential = true;
                                    writer_createJsGraphicsWrapper_submitBlock999.confidential = true;
                                    obj970.mutable = true;
                                    obj970.data["input"] = undefined;
                                    var reader_createJsGraphicsWrapper_input1000 = function() {
                                      return this.data["input"];
                                    };
                                    obj970.methods["input"] = reader_createJsGraphicsWrapper_input1000;
                                    obj970.data["input"] = undefined;
                                    var writer_createJsGraphicsWrapper_input1000 = function(argcv, o) {
                                      this.data["input"] = o;
                                      return GraceDone;
                                    };
                                    obj970.methods["input:="] = writer_createJsGraphicsWrapper_input1000;
                                    reader_createJsGraphicsWrapper_input1000.confidential = true;
                                    writer_createJsGraphicsWrapper_input1000.confidential = true;
                                    obj970.mutable = true;
                                    superDepth = origSuperDepth;
                                  };
                                  obj_init_970.apply(obj970, []);
                                  return obj970;
                                };
                                func969.paramCounts = [1];
                                this.methods["inputBox"] = func969;
                                func969.definitionLine = 713;
                                func969.definitionModule = "createJsGraphicsWrapper";
                                  var func1001 = function(argcv) {    // method inputBox(1     )()object
                                    var curarg = 1;
                                    var var_mystage = arguments[curarg];
                                    curarg++;
                                    var inheritingObject = arguments[curarg++];
                                    // Start argument processing
                                    curarg = 1;
                                    curarg++;
                                    // End argument processing
                                    setModuleName("createJsGraphicsWrapper");
                                    var returnTarget = invocationCount;
                                    invocationCount++;
                                    var obj1002 = Grace_allocObject(GraceObject, "inputBox");
                                    obj1002.definitionModule = "createJsGraphicsWrapper";
                                    obj1002.definitionLine = 713;
                                    var inho1002 = inheritingObject;
                                    while (inho1002.superobj) inho1002 = inho1002.superobj;
                                    inho1002.superobj = obj1002;
                                    obj1002.data = inheritingObject.data;
                                    if (inheritingObject.hasOwnProperty('_value'))
                                      obj1002._value = inheritingObject._value;
                                    obj1002.outer = this;
                                    var reader_createJsGraphicsWrapper_outer1003 = function() {
                                      return this.outer;
                                    };
                                    obj1002.methods["outer"] = reader_createJsGraphicsWrapper_outer1003;
                                    var obj_init_1002 = function() {
                                      var origSuperDepth = superDepth;
                                      superDepth = obj1002;
                                      var func1004 = function(argcv) {    // method value
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        if (argcv[0] !== 0)
                                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for value"));
                                        setModuleName("createJsGraphicsWrapper");
                                        setLineNumber(726);    // compilenode call
                                           // start native code from line 726
                                        var result = GraceDone;
                                        
      var input = this.data.input;
      return new GraceString(input.value());
    
                                        var nat1005 = result;
                                           // end native code insertion
                                        return nat1005;
                                      };
                                      func1004.paramCounts = [0];
                                      obj1002.methods["value"] = func1004;
                                      func1004.definitionLine = 725;
                                      func1004.definitionModule = "createJsGraphicsWrapper";
                                      var func1006 = function(argcv) {    // method value:=(1)
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        var var_newval = arguments[curarg];
                                        curarg++;
                                        if (argcv[0] !== 1)
                                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for value:=(1)"));
                                        setModuleName("createJsGraphicsWrapper");
                                        setLineNumber(733);    // compilenode call
                                           // start native code from line 733
                                        var result = GraceDone;
                                        
      var newval = var_newval._value;
      var input = this.data.input;
      input.value(newval);
      input.focus();
    
                                        var nat1007 = result;
                                           // end native code insertion
                                        return nat1007;
                                      };
                                      func1006.paramCounts = [1];
                                      obj1002.methods["value:="] = func1006;
                                      func1006.definitionLine = 732;
                                      func1006.definitionModule = "createJsGraphicsWrapper";
                                      var func1008 = function(argcv) {    // method draw
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        if (argcv[0] !== 0)
                                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for draw"));
                                        setModuleName("createJsGraphicsWrapper");
                                        setLineNumber(742);    // compilenode call
                                           // start native code from line 742
                                        var result = GraceDone;
                                        
      var stage = var_mystage;
      var mycanvas = stage.stage.canvas;
      var input = new CanvasInput({
        canvas: mycanvas,
        x: this.data.location.data.x._value,
        y: this.data.location.data.y._value,
        width: this.data.width._value,
        height: this.data.height._value,
        fontSize: this.data.fontSize._value,
        fontFamily: this.data.fontFamily._value,
        fontColor: this.data.fontColor._value,
        backgroundColor: this.data.backgroundColor._value,
        borderColor: this.data.borderColor._value
      });
      input.focus();
      this.data.input = input;
    
                                        var nat1009 = result;
                                           // end native code insertion
                                        setLineNumber(760);    // compilenode call
                                        onSelf = true;
                                        var call1010 = callmethodChecked(this, "submitBlock", [0]);
                                        onSelf = true;
                                        var call1011 = callmethodChecked(this, "onSubmit", [2], this, call1010);
                                        return call1011;
                                      };
                                      func1008.paramCounts = [0];
                                      obj1002.methods["draw"] = func1008;
                                      func1008.definitionLine = 741;
                                      func1008.definitionModule = "createJsGraphicsWrapper";
                                      var func1012 = function(argcv) {    // method focus
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        if (argcv[0] !== 0)
                                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for focus"));
                                        setModuleName("createJsGraphicsWrapper");
                                        setLineNumber(764);    // compilenode call
                                           // start native code from line 764
                                        var result = GraceDone;
                                        
      var input = this.data.input;
      input.focus();
    
                                        var nat1013 = result;
                                           // end native code insertion
                                        return nat1013;
                                      };
                                      func1012.paramCounts = [0];
                                      obj1002.methods["focus"] = func1012;
                                      func1012.definitionLine = 763;
                                      func1012.definitionModule = "createJsGraphicsWrapper";
                                      var func1014 = function(argcv) {    // method destroy
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        if (argcv[0] !== 0)
                                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for destroy"));
                                        setModuleName("createJsGraphicsWrapper");
                                        setLineNumber(771);    // compilenode call
                                           // start native code from line 771
                                        var result = GraceDone;
                                        
      var input = this.data.input;
      input.destroy();
    
                                        var nat1015 = result;
                                           // end native code insertion
                                        return nat1015;
                                      };
                                      func1014.paramCounts = [0];
                                      obj1002.methods["destroy"] = func1014;
                                      func1014.definitionLine = 770;
                                      func1014.definitionModule = "createJsGraphicsWrapper";
                                      var func1016 = function(argcv) {    // method callSubmit
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        if (argcv[0] !== 0)
                                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for callSubmit"));
                                        setModuleName("createJsGraphicsWrapper");
                                        setLineNumber(778);    // compilenode call
                                        onSelf = true;
                                        var call1017 = callmethodChecked(this, "submitBlock", [0]);
                                        var call1018 = callmethodChecked(call1017, "apply", [0]);
                                        return call1018;
                                      };
                                      func1016.paramCounts = [0];
                                      obj1002.methods["callSubmit"] = func1016;
                                      func1016.definitionLine = 777;
                                      func1016.definitionModule = "createJsGraphicsWrapper";
                                      var func1019 = function(argcv) {    // method onSubmit(2)
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        var var_inputObj = arguments[curarg];
                                        curarg++;
                                        var var_block = arguments[curarg];
                                        curarg++;
                                        if (argcv[0] !== 2)
                                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for onSubmit(2)"));
                                        setModuleName("createJsGraphicsWrapper");
                                        setLineNumber(782);    // compilenode identifier
                                        onSelf = true;
                                        var call1020 = callmethodChecked(this, "submitBlock:=", [1], var_block);
                                        setLineNumber(783);    // compilenode call
                                           // start native code from line 783
                                        var result = GraceDone;
                                        
      if(this.data.input != null) {
        var input = this.data.input;
        input.onsubmit(function(event) {
            minigrace.trapErrors(function() {
                callmethod(var_inputObj, "callSubmit", [0])
            });
        });
      }
    
                                        var nat1021 = result;
                                           // end native code insertion
                                        return nat1021;
                                      };
                                      func1019.paramCounts = [2];
                                      obj1002.methods["onSubmit"] = func1019;
                                      func1019.definitionLine = 781;
                                      func1019.definitionModule = "createJsGraphicsWrapper";
                                      obj1002.data["location"] = undefined;
                                      var reader_createJsGraphicsWrapper_location1022 = function() {
                                        return this.data["location"];
                                      };
                                      obj1002.methods["location"] = reader_createJsGraphicsWrapper_location1022;
                                      obj1002.data["location"] = undefined;
                                      var writer_createJsGraphicsWrapper_location1022 = function(argcv, o) {
                                        this.data["location"] = o;
                                        return GraceDone;
                                      };
                                      obj1002.methods["location:="] = writer_createJsGraphicsWrapper_location1022;
                                      obj1002.mutable = true;
                                      obj1002.data["width"] = undefined;
                                      var reader_createJsGraphicsWrapper_width1023 = function() {
                                        return this.data["width"];
                                      };
                                      obj1002.methods["width"] = reader_createJsGraphicsWrapper_width1023;
                                      obj1002.data["width"] = undefined;
                                      var writer_createJsGraphicsWrapper_width1023 = function(argcv, o) {
                                        this.data["width"] = o;
                                        return GraceDone;
                                      };
                                      obj1002.methods["width:="] = writer_createJsGraphicsWrapper_width1023;
                                      obj1002.mutable = true;
                                      obj1002.data["height"] = undefined;
                                      var reader_createJsGraphicsWrapper_height1024 = function() {
                                        return this.data["height"];
                                      };
                                      obj1002.methods["height"] = reader_createJsGraphicsWrapper_height1024;
                                      obj1002.data["height"] = undefined;
                                      var writer_createJsGraphicsWrapper_height1024 = function(argcv, o) {
                                        this.data["height"] = o;
                                        return GraceDone;
                                      };
                                      obj1002.methods["height:="] = writer_createJsGraphicsWrapper_height1024;
                                      obj1002.mutable = true;
                                      obj1002.data["fontSize"] = undefined;
                                      var reader_createJsGraphicsWrapper_fontSize1025 = function() {
                                        return this.data["fontSize"];
                                      };
                                      obj1002.methods["fontSize"] = reader_createJsGraphicsWrapper_fontSize1025;
                                      obj1002.data["fontSize"] = undefined;
                                      var writer_createJsGraphicsWrapper_fontSize1025 = function(argcv, o) {
                                        this.data["fontSize"] = o;
                                        return GraceDone;
                                      };
                                      obj1002.methods["fontSize:="] = writer_createJsGraphicsWrapper_fontSize1025;
                                      obj1002.mutable = true;
                                      obj1002.data["fontFamily"] = undefined;
                                      var reader_createJsGraphicsWrapper_fontFamily1026 = function() {
                                        return this.data["fontFamily"];
                                      };
                                      obj1002.methods["fontFamily"] = reader_createJsGraphicsWrapper_fontFamily1026;
                                      obj1002.data["fontFamily"] = undefined;
                                      var writer_createJsGraphicsWrapper_fontFamily1026 = function(argcv, o) {
                                        this.data["fontFamily"] = o;
                                        return GraceDone;
                                      };
                                      obj1002.methods["fontFamily:="] = writer_createJsGraphicsWrapper_fontFamily1026;
                                      obj1002.mutable = true;
                                      obj1002.data["fontColor"] = undefined;
                                      var reader_createJsGraphicsWrapper_fontColor1027 = function() {
                                        return this.data["fontColor"];
                                      };
                                      obj1002.methods["fontColor"] = reader_createJsGraphicsWrapper_fontColor1027;
                                      obj1002.data["fontColor"] = undefined;
                                      var writer_createJsGraphicsWrapper_fontColor1027 = function(argcv, o) {
                                        this.data["fontColor"] = o;
                                        return GraceDone;
                                      };
                                      obj1002.methods["fontColor:="] = writer_createJsGraphicsWrapper_fontColor1027;
                                      obj1002.mutable = true;
                                      obj1002.data["backgroundColor"] = undefined;
                                      var reader_createJsGraphicsWrapper_backgroundColor1028 = function() {
                                        return this.data["backgroundColor"];
                                      };
                                      obj1002.methods["backgroundColor"] = reader_createJsGraphicsWrapper_backgroundColor1028;
                                      obj1002.data["backgroundColor"] = undefined;
                                      var writer_createJsGraphicsWrapper_backgroundColor1028 = function(argcv, o) {
                                        this.data["backgroundColor"] = o;
                                        return GraceDone;
                                      };
                                      obj1002.methods["backgroundColor:="] = writer_createJsGraphicsWrapper_backgroundColor1028;
                                      obj1002.mutable = true;
                                      obj1002.data["borderColor"] = undefined;
                                      var reader_createJsGraphicsWrapper_borderColor1029 = function() {
                                        return this.data["borderColor"];
                                      };
                                      obj1002.methods["borderColor"] = reader_createJsGraphicsWrapper_borderColor1029;
                                      obj1002.data["borderColor"] = undefined;
                                      var writer_createJsGraphicsWrapper_borderColor1029 = function(argcv, o) {
                                        this.data["borderColor"] = o;
                                        return GraceDone;
                                      };
                                      obj1002.methods["borderColor:="] = writer_createJsGraphicsWrapper_borderColor1029;
                                      obj1002.mutable = true;
                                      setLineNumber(722);    // compilenode block
                                      var block1030 = new GraceBlock(this, 722, 0);
                                      block1030.real = function() {
                                        return GraceDone;
                                      };
                                      obj1002.data["submitBlock"] = block1030;
                                      var reader_createJsGraphicsWrapper_submitBlock1031 = function() {
                                        return this.data["submitBlock"];
                                      };
                                      obj1002.methods["submitBlock"] = reader_createJsGraphicsWrapper_submitBlock1031;
                                      obj1002.data["submitBlock"] = block1030;
                                      var writer_createJsGraphicsWrapper_submitBlock1031 = function(argcv, o) {
                                        this.data["submitBlock"] = o;
                                        return GraceDone;
                                      };
                                      obj1002.methods["submitBlock:="] = writer_createJsGraphicsWrapper_submitBlock1031;
                                      reader_createJsGraphicsWrapper_submitBlock1031.confidential = true;
                                      writer_createJsGraphicsWrapper_submitBlock1031.confidential = true;
                                      obj1002.mutable = true;
                                      obj1002.data["input"] = undefined;
                                      var reader_createJsGraphicsWrapper_input1032 = function() {
                                        return this.data["input"];
                                      };
                                      obj1002.methods["input"] = reader_createJsGraphicsWrapper_input1032;
                                      obj1002.data["input"] = undefined;
                                      var writer_createJsGraphicsWrapper_input1032 = function(argcv, o) {
                                        this.data["input"] = o;
                                        return GraceDone;
                                      };
                                      obj1002.methods["input:="] = writer_createJsGraphicsWrapper_input1032;
                                      reader_createJsGraphicsWrapper_input1032.confidential = true;
                                      writer_createJsGraphicsWrapper_input1032.confidential = true;
                                      obj1002.mutable = true;
                                      superDepth = origSuperDepth;
                                    };
                                    obj_init_1002.apply(inheritingObject, []);
                                    return obj1002;
                                    };
                                    this.methods["inputBox()object"] = func1001;
                                  return this;
                                }
                                gracecode_createJsGraphicsWrapper.imports = [];
                                if (typeof gctCache !== "undefined")
                                  gctCache['createJsGraphicsWrapper'] = "classes:\nconfidential:\nfresh-methods:\n arc\n circle\n commonGraphics\n container\n customShape\n ellipse\n eventListener\n inputBox\n line\n polyStar\n rectangle\n roundRect\n shape\n stage\n text\n tween\nfresh:arc:\n !=\n ::\n addClickListener\n addMouseDownListener\n addMouseOverListener\n addMouseUpListener\n addPressMoveListener\n anticlockwise\n asDebugString\n asString\n basicAsString\n beginFill\n beginStroke\n clear\n color\n createJsGraphics\n draw\n endAngle\n hitTest\n isMe\n listener\n location\n mouseLocation\n move\n new\n radius\n setLocation\n setVisible\n startAngle\n \u2260\nfresh:circle:\n !=\n ::\n addClickListener\n addMouseDownListener\n addMouseOverListener\n addMouseUpListener\n addPressMoveListener\n asDebugString\n asString\n basicAsString\n beginFill\n beginStroke\n clear\n color\n createJsGraphics\n draw\n hitTest\n isMe\n listener\n location\n mouseLocation\n move\n new\n radius\n setLocation\n setVisible\n \u2260\nfresh:commonGraphics:\n addClickListener\n addMouseDownListener\n addMouseOverListener\n addMouseUpListener\n addPressMoveListener\n color\n createJsGraphics\n hitTest\n listener\n location\n mouseLocation\n move\n setLocation\n setVisible\nfresh:container:\n !=\n ::\n add\n addClickListener\n addMouseDownListener\n addMouseOverListener\n addMouseUpListener\n addPressMoveListener\n asDebugString\n asString\n basicAsString\n color\n createJsGraphics\n hitTest\n isMe\n listener\n location\n mouseLocation\n move\n new\n setLocation\n setVisible\n \u2260\nfresh:customShape:\n !=\n ::\n addClickListener\n addMouseDownListener\n addMouseOverListener\n addMouseUpListener\n addPoint\n addPressMoveListener\n asDebugString\n asString\n basicAsString\n beginFill\n beginStroke\n bottomMost\n calcBounds\n clear\n color\n createJsGraphics\n current\n draw\n hitTest\n isMe\n leftMost\n listener\n location\n mouseLocation\n move\n new\n points\n rightMost\n setBounds\n setLocation\n setVisible\n stroke\n topMost\n \u2260\nfresh:ellipse:\n !=\n ::\n addClickListener\n addMouseDownListener\n addMouseOverListener\n addMouseUpListener\n addPressMoveListener\n asDebugString\n asString\n basicAsString\n beginFill\n beginStroke\n clear\n color\n createJsGraphics\n draw\n height\n hitTest\n isMe\n listener\n location\n mouseLocation\n move\n new\n setLocation\n setVisible\n width\n \u2260\nfresh:eventListener:\n addClickListener\n addMouseDownListener\n addMouseExitListener\n addMouseOverListener\n addMouseUpListener\n addPressMoveListener\n addStageDownListener\n addStageMouseMoveListener\n addStageUpListener\n clickBlock\n mouseDownBlock\n mouseExitBlock\n mouseLocation\n mouseLocation'\n mouseOverBlock\n mouseUpBlock\n onClick\n onClick:=\n onMouseDown\n onMouseDown:=\n onMouseExit\n onMouseExit:=\n onMouseOver\n onMouseOver:=\n onMouseUp\n onMouseUp:=\n onPressMove\n onPressMove:=\n pressMoveBlock\nfresh:inputBox:\n backgroundColor\n borderColor\n callSubmit\n destroy\n draw\n focus\n fontColor\n fontFamily\n fontSize\n height\n input\n location\n onSubmit\n submitBlock\n value\n value:=\n width\nfresh:line:\n !=\n ::\n addClickListener\n addMouseDownListener\n addMouseOverListener\n addMouseUpListener\n addPressMoveListener\n asDebugString\n asString\n basicAsString\n beginFill\n beginStroke\n clear\n color\n createJsGraphics\n draw\n end\n hitTest\n isMe\n listener\n location\n mouseLocation\n move\n new\n setLocation\n setVisible\n start\n \u2260\nfresh:polyStar:\n !=\n ::\n addClickListener\n addMouseDownListener\n addMouseOverListener\n addMouseUpListener\n addPressMoveListener\n angle\n asDebugString\n asString\n basicAsString\n beginFill\n beginStroke\n clear\n color\n createJsGraphics\n draw\n hitTest\n isMe\n listener\n location\n mouseLocation\n move\n new\n pointSize\n setLocation\n setVisible\n sides\n size\n \u2260\nfresh:rectangle:\n !=\n ::\n addClickListener\n addMouseDownListener\n addMouseOverListener\n addMouseUpListener\n addPressMoveListener\n asDebugString\n asString\n basicAsString\n beginFill\n beginStroke\n clear\n color\n createJsGraphics\n draw\n height\n hitTest\n isMe\n listener\n location\n mouseLocation\n move\n new\n setLocation\n setVisible\n width\n \u2260\nfresh:roundRect:\n !=\n ::\n addClickListener\n addMouseDownListener\n addMouseOverListener\n addMouseUpListener\n addPressMoveListener\n asDebugString\n asString\n basicAsString\n beginFill\n beginStroke\n clear\n color\n createJsGraphics\n draw\n height\n hitTest\n isMe\n listener\n location\n mouseLocation\n move\n new\n radius\n setLocation\n setVisible\n width\n \u2260\nfresh:shape:\n !=\n ::\n addClickListener\n addMouseDownListener\n addMouseOverListener\n addMouseUpListener\n addPressMoveListener\n asDebugString\n asString\n basicAsString\n beginFill\n beginStroke\n clear\n color\n createJsGraphics\n hitTest\n isMe\n listener\n location\n mouseLocation\n move\n new\n setLocation\n setVisible\n \u2260\nfresh:stage:\n add\n addMouseExitListener\n addStageDownListener\n addStageMouseMoveListener\n addStageUpListener\n clearTicker\n clearTimeout\n createClearButton\n createJsGraphics\n enableMouseOver\n jsTimeout\n mouseLocation\n mystage\n new\n removeAllChildren\n removeAllEventListeners\n removeChild\n setTicker\n setTimeout\n stageListener\n tickEvent\n tickerBlock\n timedEvent\n timedEventBlock\n update\nfresh:text:\n !=\n ::\n addClickListener\n addMouseDownListener\n addMouseOverListener\n addMouseUpListener\n addPressMoveListener\n asDebugString\n asString\n basicAsString\n color\n content\n createJsGraphics\n draw\n font\n height\n hitTest\n innerDraw\n isMe\n listener\n location\n mouseLocation\n move\n new\n setLocation\n setVisible\n width\n \u2260\nfresh:tween:\n jsTween\n toX\n wait\nmodules:\npath:\n createJsGraphicsWrapper\npublic:\n arc\n circle\n commonGraphics\n container\n customShape\n ellipse\n eventListener\n inputBox\n line\n polyStar\n rectangle\n roundRect\n shape\n stage\n text\n tween\ntypes:\n";
                                if (typeof originalSourceLines !== "undefined") {
                                  originalSourceLines["createJsGraphicsWrapper"] = [
                                    "factory method eventListener {",
                                    "  var clickBlock := { }",
                                    "  var mouseUpBlock := { }",
                                    "  var mouseDownBlock := { }",
                                    "  var pressMoveBlock := { }",
                                    "  var mouseOverBlock := { }",
                                    "  var mouseExitBlock := { }",
                                    "  var mouseLocation' := 0@0",
                                    "",
                                    "  method onClick(x, y) {",
                                    "    mouseLocation' := x@y",
                                    "    clickBlock.apply",
                                    "  }",
                                    "",
                                    "  method mouseLocation {",
                                    "    mouseLocation'",
                                    "  }",
                                    "",
                                    "  method onClick:=(block) {",
                                    "    clickBlock := block",
                                    "  }",
                                    "",
                                    "  method onMouseUp(x, y) {",
                                    "    mouseLocation' := x@y",
                                    "    mouseUpBlock.apply",
                                    "  }",
                                    "",
                                    "  method onMouseUp:=(block) {",
                                    "    mouseUpBlock := block",
                                    "  }",
                                    "",
                                    "  method onMouseDown(x, y) {",
                                    "    mouseLocation' := x@y",
                                    "    mouseDownBlock.apply",
                                    "  }",
                                    "",
                                    "  method onMouseDown:=(block) {",
                                    "    mouseDownBlock := block",
                                    "  }",
                                    "",
                                    "  method onMouseOver(x, y) {",
                                    "    mouseLocation' := x@y",
                                    "    mouseOverBlock.apply",
                                    "  }",
                                    "",
                                    "  method onMouseOver:=(block) {",
                                    "    mouseOverBlock := block",
                                    "  }",
                                    "",
                                    "  method onPressMove(x, y) {",
                                    "    mouseLocation' := x@y",
                                    "    pressMoveBlock.apply",
                                    "  }",
                                    "",
                                    "  method onPressMove := (block) {",
                                    "    pressMoveBlock := block",
                                    "  }",
                                    "",
                                    "  method onMouseExit {",
                                    "    mouseExitBlock.apply",
                                    "  }",
                                    "",
                                    "  method onMouseExit := (block) {",
                                    "    mouseExitBlock := block",
                                    "  }",
                                    "",
                                    "  method addMouseUpListener(obj, listener) {",
                                    "    native \"js\" code ‹",
                                    "      var obj = var_obj;",
                                    "      obj.on(\"pressup\", function(event) {",
                                    "        minigrace.trapErrors(function() {",
                                    "          callmethod(var_listener, \"onMouseUp\", [2], new GraceNum(event.stageX),",
                                    "                new GraceNum(event.stageY));",
                                    "        });",
                                    "      });",
                                    "    ›",
                                    "  }",
                                    "",
                                    "  method addMouseDownListener(obj, listener) {",
                                    "    native \"js\" code ‹",
                                    "      var obj = var_obj;",
                                    "      obj.on(\"pressup\", function(event) {",
                                    "        minigrace.trapErrors(function() {",
                                    "          callmethod(var_listener, \"onMouseDown\", [2], new GraceNum(event.stageX),",
                                    "                new GraceNum(event.stageY));",
                                    "        });",
                                    "      });",
                                    "    ›",
                                    "  }",
                                    "",
                                    "  method addMouseOverListener(obj, listener) {",
                                    "    native \"js\" code ‹",
                                    "      var obj = var_obj;",
                                    "      obj.on(\"mouseover\", function(event) {",
                                    "        minigrace.trapErrors(function() {",
                                    "          callmethod(var_listener, \"onMouseOver\", [2], new GraceNum(event.stageX),",
                                    "                new GraceNum(event.stageY));",
                                    "        });",
                                    "      });",
                                    "    ›",
                                    "  }",
                                    "",
                                    "  method addClickListener(obj, listener) {",
                                    "    native \"js\" code ‹",
                                    "      var shape = var_obj;",
                                    "      shape.on(\"click\", function(event) {",
                                    "        minigrace.trapErrors(function() {",
                                    "          callmethod(var_listener, \"onClick\", [2], new GraceNum(event.stageX),",
                                    "                new GraceNum(event.stageY));",
                                    "        });",
                                    "      });",
                                    "    ›",
                                    "  }",
                                    "",
                                    "  method addPressMoveListener(obj, listener) {",
                                    "    native \"js\" code ‹",
                                    "      var shape = var_obj;",
                                    "      shape.on(\"pressmove\", function(event) {",
                                    "        minigrace.trapErrors(function() {",
                                    "          callmethod(var_listener, \"onPressMove\", [2], new GraceNum(event.stageX),",
                                    "                new GraceNum(event.stageY));",
                                    "        });",
                                    "      });",
                                    "    ›",
                                    "  }",
                                    "",
                                    "  method addStageDownListener(stage, listener) {",
                                    "    native \"js\" code ‹",
                                    "      var_stage.on(\"stagemousedown\", function(event) {",
                                    "        minigrace.trapErrors(function() {",
                                    "          callmethod(var_listener, \"onMouseDown\", [2], new GraceNum(event.stageX),",
                                    "                new GraceNum(event.stageY));",
                                    "        });",
                                    "      });",
                                    "    ›",
                                    "  }",
                                    "",
                                    "  method addStageUpListener(stage, listener) {",
                                    "    native \"js\" code ‹",
                                    "      var_stage.on(\"stagemouseup\", function(event) {",
                                    "        minigrace.trapErrors(function() {",
                                    "          callmethod(var_listener, \"onMouseUp\", [2], new GraceNum(event.stageX),",
                                    "                new GraceNum(event.stageY));",
                                    "        });",
                                    "      });",
                                    "    ›",
                                    "  }",
                                    "",
                                    "  method addMouseExitListener(stage, listener) {",
                                    "    native \"js\" code ‹",
                                    "      var_stage.on(\"mouseleave\", function(event) {",
                                    "        minigrace.trapErrors(function() {",
                                    "          callmethod(var_listener, \"onMouseExit\", [0]);",
                                    "        });",
                                    "      });",
                                    "    ›",
                                    "  }",
                                    "",
                                    "  method addStageMouseMoveListener(stage, listener) {",
                                    "    native \"js\" code ‹",
                                    "      var_stage.on(\"stagemousemove\", function(event) {",
                                    "        minigrace.trapErrors(function() {",
                                    "          callmethod(var_listener, \"onMouseOver\", [2], new GraceNum(event.stageX),",
                                    "                new GraceNum(event.stageY));",
                                    "        });",
                                    "      });",
                                    "    ›",
                                    "  }",
                                    "}",
                                    "",
                                    "factory method stage(width', height') {",
                                    "  var mystage := new (width', height')",
                                    "  createClearButton(self)",
                                    "  var createJsGraphics",
                                    "  var stageListener := eventListener",
                                    "  var timedEventBlock := { }",
                                    "  var jsTimeout",
                                    "  var tickerBlock := { }",
                                    "",
                                    "  method new(width, height) {",
                                    "    clearTimeout",
                                    "    native \"js\" code ‹",
                                    "      var width = var_width._value;",
                                    "      var height = var_height._value;",
                                    "      var size = \"height=\" + height.toString() + \",width=\" + width.toString()",
                                    "      var canvas = document.getElementById(\"graphics\");",
                                    "      var ctx = canvas.getContext(\"2d\");",
                                    "      ctx.setTransform(1, 0, 0, 1, 0, 0);",
                                    "      ctx.clearRect(0, 0, canvas.width, canvas,height);",
                                    "      var stage = new createjs.Stage(canvas);",
                                    "      createjs.Ticker.removeAllEventListeners();",
                                    "      stage.enableDOMEvents(true);",
                                    "      canvas.setAttribute('tabindex','0');",
                                    "      canvas.focus();",
                                    "      canvas = stage.canvas;",
                                    "      this.stage = stage",
                                    "      return stage;",
                                    "    ›",
                                    "  }",
                                    "",
                                    "  method createClearButton(myStage) {",
                                    "      native \"js\" code ‹",
                                    "          var stage = this.data.mystage;",
                                    "          var container = new createjs.Container();",
                                    "          var text = new createjs.Text(\"clear\", \"12px Arial\", \"black\");",
                                    "          text.x = 5;",
                                    "          text.y = 3;",
                                    "          container.x = stage.canvas.width - 35;",
                                    "          var rect = new createjs.Shape();",
                                    "          rect.graphics.beginFill(\"lightgrey\").drawRect(0, 0, 35, 20);",
                                    "          container.addChild(rect);",
                                    "          container.addChild(text);",
                                    "          container.addEventListener(\"click\", function(event) {",
                                    "            stage.removeAllEventListeners();",
                                    "            stage.removeAllChildren();",
                                    "            stage.enableDOMEvents(false);",
                                    "            stage.update();",
                                    "            callmethod(var_myStage, \"clearTimeout\", [0]);",
                                    "            createjs.Ticker.removeAllEventListeners();",
                                    "          });",
                                    "          stage.addChild(container);",
                                    "          stage.update();",
                                    "      ›",
                                    "  }",
                                    "",
                                    "  method mouseLocation {",
                                    "    stageListener.mouseLocation",
                                    "  }",
                                    "",
                                    "  method add(shape) {",
                                    "    self.createJsGraphics := shape.createJsGraphics",
                                    "    native \"js\" code ‹",
                                    "      this.data.mystage.addChild(this.data.createJsGraphics);",
                                    "    ›",
                                    "  }",
                                    "  method removeChild(shape) {",
                                    "    self.createJsGraphics := shape.createJsGraphics",
                                    "    native \"js\" code ‹",
                                    "      this.data.mystage.removeChild(this.data.createJsGraphics);",
                                    "    ›",
                                    "  }",
                                    "  method removeAllEventListeners {native \"js\" code ‹ this.data.mystage.removeAllEventListeners(); ›}",
                                    "  method update {",
                                    "    native \"js\" code ‹",
                                    "      this.data.mystage.update();",
                                    "    ›",
                                    "  }",
                                    "",
                                    "  method removeAllChildren {",
                                    "    native \"js\" code ‹",
                                    "      this.data.mystage.removeAllChildren();",
                                    "    ›",
                                    "  }",
                                    "",
                                    "  method addStageDownListener(block) {",
                                    "    stageListener.onMouseDown := block",
                                    "    stageListener.addStageDownListener(mystage, stageListener)",
                                    "  }",
                                    "",
                                    "  method addStageUpListener(block) {",
                                    "    stageListener.onMouseUp := block",
                                    "    stageListener.addStageUpListener(mystage, stageListener)",
                                    "  }",
                                    "",
                                    "  method addMouseExitListener(block) {",
                                    "    stageListener.onMouseExit := block",
                                    "    stageListener.addMouseExitListener(mystage, stageListener)",
                                    "  }",
                                    "",
                                    "  method addStageMouseMoveListener(block) {",
                                    "    stageListener.onMouseOver := block",
                                    "    stageListener.addStageMouseMoveListener(mystage, stageListener)",
                                    "  }",
                                    "",
                                    "  method enableMouseOver(frequency) {",
                                    "    native \"js\" code ‹",
                                    "      var freq = var_frequency._value",
                                    "      this.data.mystage.enableMouseOver(freq);",
                                    "    ›",
                                    "  }",
                                    "",
                                    "  method timedEvent {",
                                    "    timedEventBlock.apply",
                                    "  }",
                                    "",
                                    "  method tickEvent {",
                                    "    tickerBlock.apply",
                                    "  }",
                                    "",
                                    "  method setTimeout(block, time, myStage) {",
                                    "    timedEventBlock := block",
                                    "    native \"js\" code ‹var t = setTimeout(function() {",
                                    "                    callmethod(var_myStage, \"timedEvent\", [0]);",
                                    "                }, var_time._value);",
                                    "            this.data.jsTimeout = t;›",
                                    "  }",
                                    "",
                                    "  method clearTimeout {",
                                    "    native \"js\" code ‹",
                                    "      var timeout = this.data.jsTimeout",
                                    "      clearTimeout(timeout);",
                                    "    ›",
                                    "  }",
                                    "",
                                    "  method setTicker(block, fps, myStage) {",
                                    "    tickerBlock := block",
                                    "    native \"js\" code ‹",
                                    "      createjs.Ticker.on(\"tick\", function(event) {",
                                    "        callmethod(var_myStage, \"tickEvent\", [0]);",
                                    "      });",
                                    "			createjs.Ticker.setFPS(var_fps._value);",
                                    "    ›",
                                    "  }",
                                    "",
                                    "  method clearTicker {",
                                    "    native \"js\" code ‹",
                                    "      createjs.Ticker.removeAllEventListeners();",
                                    "    ›",
                                    "  }",
                                    "}",
                                    "",
                                    "factory method commonGraphics{",
                                    "  var createJsGraphics is public",
                                    "  var color",
                                    "  var location :=0@0",
                                    "  var listener is public := eventListener",
                                    "",
                                    "  method mouseLocation {",
                                    "    listener.mouseLocation",
                                    "  }",
                                    "",
                                    "  method addMouseUpListener(graphicsTypeObject, block) {",
                                    "    listener.onMouseUp := block",
                                    "    listener.addMouseUpListener(createJsGraphics, listener)",
                                    "  }",
                                    "",
                                    "  method addMouseDownListener(graphicsTypeObject, block) {",
                                    "    listener.onMouseDown := block",
                                    "    listener.addMouseDownListener(createJsGraphics, listener)",
                                    "  }",
                                    "",
                                    "  method addMouseOverListener(graphicsTypeObject, block) {",
                                    "    listener.onMouseOver := block",
                                    "    listener.addMouseOverListener(createJsGraphics, listener)",
                                    "  }",
                                    "",
                                    "  method addClickListener(graphicsTypeObject, block) {",
                                    "    listener.onClick := block",
                                    "    listener.addClickListener(createJsGraphics, listener)",
                                    "  }",
                                    "",
                                    "  method addPressMoveListener(graphicsTypeObject, block) {",
                                    "    listener.onPressMove := block",
                                    "    listener.addPressMoveListener(createJsGraphics, listener)",
                                    "  }",
                                    "",
                                    "  method setLocation(newLoc) {",
                                    "    self.location := newLoc",
                                    "  }",
                                    "",
                                    "  method move(newX,newY) {",
                                    "    native \"js\" code ‹",
                                    "      this.data.createJsGraphics.x = var_newX._value;",
                                    "      this.data.createJsGraphics.y = var_newY._value;",
                                    "    ›",
                                    "  }",
                                    "",
                                    "  method setVisible(isVisible) {",
                                    "    native \"js\" code ‹",
                                    "      var isVisible = var_isVisible._value",
                                    "      this.data.createJsGraphics.visible = isVisible;",
                                    "    ›",
                                    "  }",
                                    "",
                                    "  method hitTest(x, y) {",
                                    "    native \"js\" code ‹",
                                    "      var x = var_x._value;",
                                    "      var y = var_y._value;",
                                    "      var shape = this.data.createJsGraphics;",
                                    "      var pt = shape.globalToLocal(x, y);",
                                    "      var hit = shape.hitTest(pt.x, pt.y);",
                                    "      return new GraceBoolean(hit);",
                                    "    ›",
                                    "  }",
                                    "}",
                                    "",
                                    "factory method shape {",
                                    "  inherits commonGraphics",
                                    "",
                                    "  createJsGraphics := new",
                                    "",
                                    "  method new {",
                                    "    native \"js\" code ‹",
                                    "      return new createjs.Shape();",
                                    "    ›",
                                    "  }",
                                    "",
                                    "  method clear {",
                                    "    native \"js\" code ‹",
                                    "      this.data.createJsGraphics.graphics.clear();",
                                    "    ›",
                                    "  }",
                                    "  method beginFill(color') {",
                                    "    self.color := color'",
                                    "    native \"js\" code ‹",
                                    "      var color = this.data.color._value;",
                                    "      this.data.createJsGraphics.graphics.beginFill(color);",
                                    "    ›",
                                    "  }",
                                    "  method beginStroke(color') {",
                                    "    self.color := color'",
                                    "    native \"js\" code ‹",
                                    "      var color = this.data.color._value;",
                                    "      this.data.createJsGraphics.graphics.beginStroke(color);",
                                    "    ›",
                                    "  }",
                                    "}",
                                    "",
                                    "factory method container {",
                                    "  inherits commonGraphics",
                                    "",
                                    "  createJsGraphics := new",
                                    "  method new {",
                                    "    native \"js\" code ‹",
                                    "      return new createjs.Container();",
                                    "    ›",
                                    "  }",
                                    "",
                                    "  method add(anObject) {",
                                    "    native \"js\" code ‹",
                                    "      this.data.createJsGraphics.addChild(var_anObject.data.createJsGraphics);",
                                    "    ›",
                                    "  }",
                                    "",
                                    "  method setLocation(location) {",
                                    "    native \"js\" code ‹",
                                    "      this.data.createJsGraphics.x = var_location.data.x._value;",
                                    "      this.data.createJsGraphics.y = var_location.data.y._value;",
                                    "    ›",
                                    "    self",
                                    "  }",
                                    "}",
                                    "",
                                    "factory method circle {",
                                    "  inherits shape",
                                    "  var radius",
                                    "  method draw(radius') {",
                                    "    self.radius := radius'",
                                    "    native \"js\" code ‹",
                                    "      var x = this.data.location.data.x._value;",
                                    "      var y = this.data.location.data.y._value;",
                                    "      var radius = this.data.radius._value;",
                                    "",
                                    "      this.data.createJsGraphics.graphics.drawCircle(x, y, radius);",
                                    "      var circle = this.data.createJsGraphics;",
                                    "      return circle;",
                                    "    ›",
                                    "  }",
                                    "}",
                                    "",
                                    "factory method rectangle {",
                                    "  inherits shape",
                                    "  var height",
                                    "  var width",
                                    "  method draw(w, h) {",
                                    "    width := w",
                                    "    height := h",
                                    "    native \"js\" code ‹",
                                    "      var x = this.data.location.data.x._value;",
                                    "      var y = this.data.location.data.y._value;",
                                    "      var height = this.data.height._value",
                                    "      var width = this.data.width._value",
                                    "      this.data.createJsGraphics.graphics.drawRect(x, y, width, height);",
                                    "    ›",
                                    "  }",
                                    "}",
                                    "",
                                    "factory method polyStar {",
                                    "  inherits shape",
                                    "  var size is public := 20",
                                    "  var sides is public := 5",
                                    "  var pointSize is public := 2",
                                    "  var angle is public := -90",
                                    "  method draw(size', sides', pointSize', angle') {",
                                    "    self.size := size'",
                                    "    self.pointSize := pointSize'",
                                    "    self.angle := angle'",
                                    "    self.sides := sides'",
                                    "    native \"js\" code ‹",
                                    "      var x = this.data.location.data.x._value;",
                                    "      var y = this.data.location.data.y._value;",
                                    "      var size = this.data.size._value;",
                                    "      var sides = this.data.sides._value;",
                                    "      var pointSize = this.data.pointSize._value;",
                                    "      var angle = this.data.angle._value;",
                                    "      this.data.createJsGraphics.graphics.drawPolyStar(x, y, size, sides,pointSize, angle);",
                                    "    ›",
                                    "  }",
                                    "}",
                                    "",
                                    "factory method roundRect {",
                                    "  inherits shape",
                                    "  var height",
                                    "  var width",
                                    "  var radius is public := 15",
                                    "  method draw(width', height', radius') {",
                                    "    self.width := width'",
                                    "    self.height := height'",
                                    "    self.radius:= radius'",
                                    "",
                                    "    native \"js\" code ‹",
                                    "      var x = this.data.location.data.x._value;",
                                    "      var y = this.data.location.data.y._value;",
                                    "      var height = this.data.height._value",
                                    "      var width = this.data.width._value",
                                    "      var radius = this.data.radius._value",
                                    "      this.data.createJsGraphics.graphics.drawRoundRect(x, y, width, height, radius);",
                                    "  ›",
                                    "  }",
                                    "}",
                                    "",
                                    "factory method ellipse {",
                                    "  inherits shape",
                                    "  var height",
                                    "  var width",
                                    "  method draw(width', height') {",
                                    "    self.height := height'",
                                    "    self.width := width'",
                                    "    native \"js\" code ‹",
                                    "      var x = this.data.location.data.x._value;",
                                    "      var y = this.data.location.data.y._value;",
                                    "      var height = this.data.height._value",
                                    "      var width = this.data.width._value",
                                    "      this.data.createJsGraphics.graphics.drawEllipse(x, y, width, height);",
                                    "    ›",
                                    "  }",
                                    "}",
                                    "",
                                    "factory method arc {",
                                    "  inherits shape",
                                    "  var radius",
                                    "  var startAngle",
                                    "  var endAngle",
                                    "  var anticlockwise",
                                    "",
                                    "  method draw(radius', startAngle', endAngle', anticlockwise') {",
                                    "    radius := radius'",
                                    "    startAngle := startAngle'",
                                    "    endAngle := endAngle'",
                                    "    anticlockwise := anticlockwise'",
                                    "    native \"js\" code ‹",
                                    "      var x = this.data.location.data.x._value;",
                                    "      var y = this.data.location.data.y._value;",
                                    "      var radius = this.data.radius._value;",
                                    "      var startAngle = this.data.startAngle._value;",
                                    "      var endAngle = this.data.endAngle._value;",
                                    "      startAngle = startAngle * Math.PI / 180;",
                                    "      endAngle = endAngle * Math.PI / 180;",
                                    "      var anticlockwise = this.data.anticlockwise._value",
                                    "",
                                    "      this.data.createJsGraphics.graphics.arc(x, y, radius, startAngle, endAngle, anticlockwise);",
                                    "    ›",
                                    "  }",
                                    "}",
                                    "",
                                    "factory method text {",
                                    "  inherits commonGraphics",
                                    "",
                                    "  var content is public := \"Did you forget to set text.content?\"",
                                    "  var font is public := \"12px Arial\"",
                                    "  method new {",
                                    "    return 0",
                                    "  }",
                                    "  // This is necessary so that Grace waits for the Javascript part of the",
                                    "  // innerDraw to return before continuing",
                                    "  method draw(content', font', color') {",
                                    "    self.createJsGraphics := innerDraw(content', font', color')",
                                    "  }",
                                    "",
                                    "  method width {",
                                    "    native \"js\" code ‹",
                                    "      var b = this.data.createJsGraphics.getBounds();",
                                    "      return new GraceNum(b.width)",
                                    "    ›",
                                    "  }",
                                    "",
                                    "  method height {",
                                    "    native \"js\" code ‹",
                                    "      var b = this.data.createJsGraphics.getBounds();",
                                    "      return new GraceNum(b.height)",
                                    "    ›",
                                    "  }",
                                    "",
                                    "  method innerDraw(content', font', color') is confidential {",
                                    "    self.color := color'",
                                    "    self.content := content'",
                                    "    self.font := font'",
                                    "",
                                    "    native \"js\" code ‹",
                                    "      var color = this.data.color._value;",
                                    "      var x = this.data.location.data.x._value;",
                                    "      var y = this.data.location.data.y._value;",
                                    "      var content = this.data.content._value;",
                                    "      var font = this.data.font._value;",
                                    "      var text = new createjs.Text(content, font, color);",
                                    "      text.x = x;",
                                    "      text.y = y;",
                                    "      return text;",
                                    "    ›",
                                    "  }",
                                    "}",
                                    "",
                                    "factory method line {",
                                    "  inherits shape",
                                    "  var start is public := 0@0",
                                    "  var end is public := 50@50",
                                    "",
                                    "  method draw(start', end'){",
                                    "    self.location := start'",
                                    "    self.start := start'",
                                    "    self.end := end'",
                                    "    native \"js\" code ‹",
                                    "      var startX = this.data.start.data.x._value;",
                                    "      var startY = this.data.start.data.y._value;",
                                    "      var endX = this.data.end.data.x._value;",
                                    "      var endY = this.data.end.data.y._value;",
                                    "      this.data.createJsGraphics.graphics.moveTo(startX, startY).lineTo(endX,endY);",
                                    "    ›",
                                    "  }",
                                    "}",
                                    "",
                                    "factory method customShape {",
                                    "  inherits shape",
                                    "  var points := list.empty",
                                    "  var stroke;",
                                    "  var current;",
                                    "  var leftMost;",
                                    "  var rightMost;",
                                    "  var topMost;",
                                    "  var bottomMost;",
                                    "",
                                    "  method addPoint(p){",
                                    "    calcBounds(p)",
                                    "    points.add(p)",
                                    "  }",
                                    "  method calcBounds(p) is confidential {",
                                    "    if(points.isEmpty) then {",
                                    "      topMost := p.y",
                                    "      bottomMost := p.y",
                                    "      leftMost := p.x",
                                    "      rightMost := p.x",
                                    "    } else {",
                                    "      if(p.x < leftMost) then { leftMost := p.x }",
                                    "      if(p.x > rightMost) then { rightMost := p.x }",
                                    "      if(p.y < topMost) then { topMost := p.y }",
                                    "      if(p.y > bottomMost) then {bottomMost := p.y}",
                                    "    }",
                                    "  }",
                                    "  method draw(stroke', fill'){",
                                    "    if(points.size < 2) then { print(\"Not enough points in custom shape\"); return }",
                                    "",
                                    "    self.current := points.first",
                                    "    self.stroke := stroke';",
                                    "    self.color := fill';",
                                    "",
                                    "    native \"js\" code ‹",
                                    "        var color = this.data.color._value;",
                                    "        var stroke = this.data.stroke._value;",
                                    "        var startX = this.data.current.data.x._value;",
                                    "        var startY = this.data.current.data.y._value;",
                                    "        this.data.createJsGraphics.graphics.beginFill(color);",
                                    "        this.data.createJsGraphics.graphics.beginStroke(stroke);",
                                    "        this.data.createJsGraphics.graphics.moveTo(startX, startY);",
                                    "      ›",
                                    "    for(points) do {x ->",
                                    "      current := x",
                                    "      native \"js\" code ‹",
                                    "        var endX = this.data.current.data.x._value;",
                                    "        var endY = this.data.current.data.y._value;",
                                    "        this.data.createJsGraphics.graphics.lineTo(endX, endY);",
                                    "      ›",
                                    "    }",
                                    "    native \"js\" code ‹",
                                    "      this.data.createJsGraphics.graphics.closePath()",
                                    "    ›",
                                    "  }",
                                    "",
                                    "  method setBounds {",
                                    "    var bounds := leftMost@topMost",
                                    "    super.setBounds(bounds, rightMost - leftMost, bottomMost - topMost)",
                                    "  }",
                                    "}",
                                    "",
                                    "factory method tween(jsGraphicsObj, myStage) {",
                                    "    var jsTween ",
                                    "    native \"js\" code ‹var stage = var_myStage.data.mystage;",
                                    "        createjs.Ticker.setFPS(60);",
                                    "        createjs.Ticker.addEventListener(\"tick\", stage);",
                                    "        var shape = var_jsGraphicsObj.data.createJsGraphics;",
                                    "        this.data.jsTween = createjs.Tween.get(shape, {override:true});›",
                                    "",
                                    "    method toX(x) {",
                                    "        native \"js\" code ‹var tween = this.data.jsTween;",
                                    "            this.data.jsTween = tween.to({x:var_x._value}, 250);›",
                                    "    }",
                                    "",
                                    "    method wait(time) {",
                                    "        native \"js\" code ‹var tween = this.data.jsTween;",
                                    "            this.data.jsTween = tween.wait(var_time._value);›",
                                    "    }",
                                    "}",
                                    "",
                                    "factory method inputBox(mystage) {",
                                    "  var location is public",
                                    "  var width is public",
                                    "  var height is public",
                                    "  var fontSize is public",
                                    "  var fontFamily is public",
                                    "  var fontColor is public",
                                    "  var backgroundColor is public",
                                    "  var borderColor is public",
                                    "  var submitBlock := {}",
                                    "  var input",
                                    "",
                                    "  method value {",
                                    "    native \"js\" code ‹",
                                    "      var input = this.data.input;",
                                    "      return new GraceString(input.value());",
                                    "    ›",
                                    "  }",
                                    "",
                                    "  method value := (newval) {",
                                    "    native \"js\" code ‹",
                                    "      var newval = var_newval._value;",
                                    "      var input = this.data.input;",
                                    "      input.value(newval);",
                                    "      input.focus();",
                                    "    ›",
                                    "  }",
                                    "",
                                    "  method draw {",
                                    "    native \"js\" code ‹",
                                    "      var stage = var_mystage;",
                                    "      var mycanvas = stage.stage.canvas;",
                                    "      var input = new CanvasInput({",
                                    "        canvas: mycanvas,",
                                    "        x: this.data.location.data.x._value,",
                                    "        y: this.data.location.data.y._value,",
                                    "        width: this.data.width._value,",
                                    "        height: this.data.height._value,",
                                    "        fontSize: this.data.fontSize._value,",
                                    "        fontFamily: this.data.fontFamily._value,",
                                    "        fontColor: this.data.fontColor._value,",
                                    "        backgroundColor: this.data.backgroundColor._value,",
                                    "        borderColor: this.data.borderColor._value",
                                    "      });",
                                    "      input.focus();",
                                    "      this.data.input = input;",
                                    "    ›",
                                    "    onSubmit(self, submitBlock)",
                                    "  }",
                                    "",
                                    "  method focus {",
                                    "    native \"js\" code ‹",
                                    "      var input = this.data.input;",
                                    "      input.focus();",
                                    "    ›",
                                    "  }",
                                    "",
                                    "  method destroy {",
                                    "    native \"js\" code ‹",
                                    "      var input = this.data.input;",
                                    "      input.destroy();",
                                    "    ›",
                                    "  }",
                                    "",
                                    "  method callSubmit {",
                                    "    submitBlock.apply",
                                    "  }",
                                    "",
                                    "  method onSubmit(inputObj, block) {",
                                    "    submitBlock := block",
                                    "    native \"js\" code ‹",
                                    "      if(this.data.input != null) {",
                                    "        var input = this.data.input;",
                                    "        input.onsubmit(function(event) {",
                                    "            minigrace.trapErrors(function() {",
                                    "                callmethod(var_inputObj, \"callSubmit\", [0])",
                                    "            });",
                                    "        });",
                                    "      }",
                                    "    ›",
                                    "  }",
                                    "}" ];
                                }
                                if (typeof global !== "undefined")
                                  global.gracecode_createJsGraphicsWrapper = gracecode_createJsGraphicsWrapper;
                                if (typeof window !== "undefined")
                                  window.gracecode_createJsGraphicsWrapper = gracecode_createJsGraphicsWrapper;
