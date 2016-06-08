"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_stringMap() {
  setModuleName("stringMap");
  this.definitionModule = "stringMap";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_stringMap_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_stringMap_outer0;
  setLineNumber(15);    // compilenode method
  var func1 = function(argcv) {    // method new
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for new"));
    setModuleName("stringMap");
    var obj2 = Grace_allocObject(GraceObject, "stringMap.new");
    obj2.definitionModule = "stringMap";
    obj2.definitionLine = 15;
    obj2.outer = this;
    var reader_stringMap_outer3 = function() {
      return this.outer;
    };
    obj2.methods["outer"] = reader_stringMap_outer3;
    var obj_init_2 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj2;
      var func4 = function(argcv) {    // method size
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for size"));
        setModuleName("stringMap");
        setLineNumber(26);    // compilenode call
           // start native code from line 26
        var result = GraceDone;
        var s = Object.keys(this.data.inner).length;
              return new GraceNum(s);
        var nat5 = result;
           // end native code insertion
        setLineNumber(28);    // compilenode call
        onSelf = true;
        var call6 = callmethodChecked(this, "elems", [0]);
        return call6;
      };
      func4.paramCounts = [0];
      obj2.methods["size"] = func4;
      func4.definitionLine = 24;
      func4.definitionModule = "stringMap";
      var func7 = function(argcv) {    // method put(2)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_k = arguments[curarg];
        curarg++;
        var var_v = arguments[curarg];
        curarg++;
        if (argcv[0] !== 2)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for put(2)"));
        setModuleName("stringMap");
        setLineNumber(34);    // compilenode call
           // start native code from line 34
        var result = GraceDone;
        this.data.inner[var_k._value] = var_v;
                        return this;
        var nat8 = result;
           // end native code insertion
        setLineNumber(36);    // compilenode identifier
        onSelf = true;
        var call9 = callmethodChecked(this, "findPosition", [1], var_k);
        var var_t = call9;
        var if10 = GraceDone;
        setLineNumber(37);    // compilenode call
        onSelf = true;
        var call11 = callmethodChecked(this, "inner", [0]);
        var call12 = callmethodChecked(call11, "at", [1], var_t);
        var opresult15 = callmethodChecked(var_unused, "==", [1], call12);
        if (Grace_isTrue(opresult15)) {
          setLineNumber(38);    // compilenode call
          onSelf = true;
          var call17 = callmethodChecked(this, "elems", [0]);
          var opresult19 = callmethodChecked(call17, "+", [1], new GraceNum(1));
          onSelf = true;
          var call20 = callmethodChecked(this, "elems:=", [1], opresult19);
          if10 = call20;
        }
        setLineNumber(40);    // compilenode identifier
        var opresult23 = callmethodChecked(var_k, "::", [1], var_v);
        onSelf = true;
        var call24 = callmethodChecked(this, "inner", [0]);
        var call25 = callmethodChecked(call24, "at()put", [1, 1], var_t, opresult23);
        var if26 = GraceDone;
        setLineNumber(41);    // compilenode call
        onSelf = true;
        var call28 = callmethodChecked(this, "inner", [0]);
        var call29 = callmethodChecked(call28, "size", [0]);
        var quotient31 = callmethodChecked(call29, "/", [1], new GraceNum(2));
        onSelf = true;
        var call33 = callmethodChecked(this, "elems", [0]);
        var opresult35 = callmethodChecked(call33, ">", [1], quotient31);
        if (Grace_isTrue(opresult35)) {
          setLineNumber(42);    // compilenode call
          onSelf = true;
          var call36 = callmethodChecked(this, "expand", [0]);
          if26 = call36;
        }
        setLineNumber(44);    // compilenode identifier
        return this;
      };
      func7.paramCounts = [2];
      obj2.methods["put"] = func7;
      func7.definitionLine = 31;
      func7.definitionModule = "stringMap";
      var func37 = function(argcv) {    // method get(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_k = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for get(1)"));
        setModuleName("stringMap");
        setLineNumber(49);    // compilenode call
           // start native code from line 49
        var result = GraceDone;
        if (this.data.inner.hasOwnProperty(var_k._value))
                return this.data.inner[var_k._value];
            var nso = callmethod(var___95__prelude, "NoSuchObject", [0]);
            var exceptionMsg = new GraceString("no value for key " + var_k._value);
            throw new GraceExceptionPacket(nso, exceptionMsg);
        var nat38 = result;
           // end native code insertion
        setLineNumber(54);    // compilenode identifier
        onSelf = true;
        var call39 = callmethodChecked(this, "findPosition", [1], var_k);
        var var_t = call39;
        setLineNumber(55);    // compilenode call
        onSelf = true;
        var call40 = callmethodChecked(this, "inner", [0]);
        var call41 = callmethodChecked(call40, "at", [1], var_t);
        var var_c = call41;
        var if42 = GraceDone;
        setLineNumber(56);    // compilenode identifier
        var opresult45 = callmethodChecked(var_unused, "==", [1], var_c);
        if (Grace_isTrue(opresult45)) {
          setLineNumber(57);    // compilenode string
          var string46 = new GraceString("");
          var string49 = new GraceString("no value for key ");
          var opresult51 = callmethodChecked(string49, "++", [1], var_k);
          var opresult53 = callmethodChecked(opresult51, "++", [1], string46);
          var call54 = callmethodChecked(var_prelude, "NoSuchObject", [0]);
          var call55 = callmethodChecked(call54, "raise", [1], opresult53);
          if42 = call55;
        }
        setLineNumber(59);    // compilenode identifier
        var call56 = callmethodChecked(var_c, "value", [0]);
        return call56;
      };
      func37.paramCounts = [1];
      obj2.methods["get"] = func37;
      func37.definitionLine = 46;
      func37.definitionModule = "stringMap";
      var func57 = function(argcv) {    // method get(1)ifAbsent(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_k = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for get (arg list 1) of get(1)ifAbsent(1)"));
        var var_absentBlock = arguments[curarg];
        curarg++;
        if (argcv[1] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ifAbsent (arg list 2) of get(1)ifAbsent(1)"));
        setModuleName("stringMap");
        setLineNumber(64);    // compilenode call
           // start native code from line 64
        var result = GraceDone;
        if (this.data.inner.hasOwnProperty(var_k._value))
                return this.data.inner[var_k._value];
            return callmethod(var_absentBlock, "apply", [0]);
        var nat58 = result;
           // end native code insertion
        setLineNumber(67);    // compilenode identifier
        onSelf = true;
        var call59 = callmethodChecked(this, "findPosition", [1], var_k);
        var var_t = call59;
        setLineNumber(68);    // compilenode call
        onSelf = true;
        var call60 = callmethodChecked(this, "inner", [0]);
        var call61 = callmethodChecked(call60, "at", [1], var_t);
        var var_c = call61;
        var if62 = GraceDone;
        setLineNumber(69);    // compilenode identifier
        var opresult65 = callmethodChecked(var_unused, "==", [1], var_c);
        if (Grace_isTrue(opresult65)) {
          setLineNumber(70);    // compilenode identifier
          var call66 = callmethodChecked(var_absentBlock, "apply", [0]);
          return call66;
        } else {
          setLineNumber(71);    // compilenode identifier
          var call67 = callmethodChecked(var_c, "value", [0]);
          return call67;
        }
        return if62;
      };
      func57.paramCounts = [1, 1];
      obj2.methods["get()ifAbsent"] = func57;
      func57.definitionLine = 61;
      func57.definitionModule = "stringMap";
      var func68 = function(argcv) {    // method contains(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_k = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for contains(1)"));
        setModuleName("stringMap");
        setLineNumber(75);    // compilenode call
           // start native code from line 75
        var result = GraceDone;
        if (this.data.inner.hasOwnProperty(var_k._value))
                return GraceTrue;
            else return GraceFalse;
        var nat69 = result;
           // end native code insertion
        setLineNumber(78);    // compilenode identifier
        onSelf = true;
        var call70 = callmethodChecked(this, "findPosition", [1], var_k);
        var var_t = call70;
        var if71 = GraceDone;
        setLineNumber(79);    // compilenode call
        onSelf = true;
        var call73 = callmethodChecked(this, "inner", [0]);
        var call74 = callmethodChecked(call73, "at", [1], var_t);
        var call75 = callmethodChecked(call74, "key", [0]);
        var opresult77 = callmethodChecked(call75, "==", [1], var_k);
        if (Grace_isTrue(opresult77)) {
          setLineNumber(80);    // compilenode identifier
          return GraceTrue;
        }
        setLineNumber(82);    // compilenode identifier
        return GraceFalse;
      };
      func68.paramCounts = [1];
      obj2.methods["contains"] = func68;
      func68.definitionLine = 73;
      func68.definitionModule = "stringMap";
      var func78 = function(argcv) {    // method findPosition(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_x = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for findPosition(1)"));
        setModuleName("stringMap");
        setLineNumber(85);    // compilenode identifier
        var call79 = callmethodChecked(var_x, "hash", [0]);
        var var_h = call79;
        setLineNumber(86);    // compilenode call
        onSelf = true;
        var call80 = callmethodChecked(this, "inner", [0]);
        var call81 = callmethodChecked(call80, "size", [0]);
        var var_s = call81;
        setLineNumber(87);    // compilenode identifier
        var modulus84 = callmethodChecked(var_h, "%", [1], var_s);
        var var_t = modulus84;
        setLineNumber(88);    // compilenode num
        var var_jump = new GraceNum(5);
        setLineNumber(89);    // compilenode block
        var block85 = new GraceBlock(this, 89, 0);
        block85.real = function() {
          onSelf = true;
          var call86 = callmethodChecked(this, "inner", [0]);
          var call87 = callmethodChecked(call86, "at", [1], var_t);
          var opresult90 = callmethodChecked(var_unused, "\u2260", [1], call87);
          return opresult90;
        };
        var block91 = new GraceBlock(this, 89, 0);
        block91.real = function() {
          var if92 = GraceDone;
          setLineNumber(90);    // compilenode call
          onSelf = true;
          var call94 = callmethodChecked(this, "inner", [0]);
          var call95 = callmethodChecked(call94, "at", [1], var_t);
          var call96 = callmethodChecked(call95, "key", [0]);
          var opresult98 = callmethodChecked(call96, "==", [1], var_x);
          if (Grace_isTrue(opresult98)) {
            setLineNumber(91);    // compilenode identifier
            throw new ReturnException(var_t, returnTarget);
          }
          var if99 = GraceDone;
          setLineNumber(93);    // compilenode identifier
          var opresult102 = callmethodChecked(var_jump, "\u2260", [1], new GraceNum(0));
          if (Grace_isTrue(opresult102)) {
            setLineNumber(94);    // compilenode identifier
            var prod107 = callmethodChecked(var_t, "*", [1], new GraceNum(3));
            var opresult109 = callmethodChecked(prod107, "+", [1], new GraceNum(1));
            var modulus111 = callmethodChecked(opresult109, "%", [1], var_s);
            var_t = modulus111;
            setLineNumber(95);    // compilenode identifier
            var diff114 = callmethodChecked(var_jump, "-", [1], new GraceNum(1));
            var_jump = diff114;
            if99 = GraceDone;
          } else {
            setLineNumber(97);    // compilenode identifier
            var opresult118 = callmethodChecked(var_t, "+", [1], new GraceNum(1));
            var modulus120 = callmethodChecked(opresult118, "%", [1], var_s);
            var_t = modulus120;
            if99 = GraceDone;
          }
          return if99;
        };
        var call121 = callmethodChecked(var_prelude, "while()do", [1, 1], block85, block91);
        setLineNumber(100);    // compilenode identifier
        return var_t;
      };
      func78.confidential = true;
      func78.paramCounts = [1];
      obj2.methods["findPosition"] = func78;
      func78.definitionLine = 84;
      func78.definitionModule = "stringMap";
      var func122 = function(argcv) {    // method asString
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
        setModuleName("stringMap");
        setLineNumber(103);    // compilenode call
           // start native code from line 103
        var result = GraceDone;
        var s = "";
            var inner = this.data.inner;
            var keys = Object.keys(inner);
            for (var ix = 0; ix < keys.length; ix++) {
                var key = keys[ix];
                if (s === "") {
                    s = key + "::";
                } else {
                    s = s + ", " + key + "::";
                }
                s = s + callmethod(inner[key], "asString", [0])._value;
            }
            s = "map.new[" + s + "]";
            return new GraceString(s);
        var nat123 = result;
           // end native code insertion
        setLineNumber(117);    // compilenode string
        var string124 = new GraceString("");
        var var_s = string124;
        setLineNumber(118);    // compilenode call
        onSelf = true;
        var call126 = callmethodChecked(this, "inner", [0]);
        var call127 = callmethodChecked(call126, "size", [0]);
        var diff129 = callmethodChecked(call127, "-", [1], new GraceNum(1));
        var opresult132 = callmethodChecked(new GraceNum(0), "..", [1], diff129);
        var block133 = new GraceBlock(this, 118, 1);
        setLineNumber(1);    // compilenode identifier
        block133.real = function(var_i) {
          setLineNumber(119);    // compilenode call
          onSelf = true;
          var call134 = callmethodChecked(this, "inner", [0]);
          var call135 = callmethodChecked(call134, "at", [1], var_i);
          var var_a = call135;
          var if136 = GraceDone;
          setLineNumber(120);    // compilenode identifier
          var opresult139 = callmethodChecked(var_a, "\u2260", [1], var_unused);
          if (Grace_isTrue(opresult139)) {
            var if140 = GraceDone;
            setLineNumber(121);    // compilenode string
            var string141 = new GraceString("");
            var opresult144 = callmethodChecked(var_s, "==", [1], string141);
            if (Grace_isTrue(opresult144)) {
              setLineNumber(122);    // compilenode string
              var string145 = new GraceString("");
              var call147 = callmethodChecked(var_a, "value", [0]);
              var string149 = new GraceString("::");
              var call151 = callmethodChecked(var_a, "key", [0]);
              var string153 = new GraceString("");
              var opresult155 = callmethodChecked(string153, "++", [1], call151);
              var opresult157 = callmethodChecked(opresult155, "++", [1], string149);
              var opresult159 = callmethodChecked(opresult157, "++", [1], call147);
              var opresult161 = callmethodChecked(opresult159, "++", [1], string145);
              var_s = opresult161;
              if140 = GraceDone;
            } else {
              setLineNumber(124);    // compilenode string
              var string162 = new GraceString("");
              var call164 = callmethodChecked(var_a, "value", [0]);
              var string166 = new GraceString("::");
              var call168 = callmethodChecked(var_a, "key", [0]);
              var string170 = new GraceString(", ");
              var opresult172 = callmethodChecked(string170, "++", [1], call168);
              var opresult174 = callmethodChecked(opresult172, "++", [1], string166);
              var opresult176 = callmethodChecked(opresult174, "++", [1], call164);
              var opresult178 = callmethodChecked(opresult176, "++", [1], string162);
              var opresult181 = callmethodChecked(var_s, "++", [1], opresult178);
              var_s = opresult181;
              if140 = GraceDone;
            }
            if136 = if140;
          }
          return if136;
        };
        var call182 = callmethodChecked(var_prelude, "for()do", [1, 1], opresult132, block133);
        setLineNumber(128);    // compilenode string
        var string183 = new GraceString("]");
        var string186 = new GraceString("map.new[");
        var opresult188 = callmethodChecked(string186, "++", [1], var_s);
        var opresult190 = callmethodChecked(opresult188, "++", [1], string183);
        return opresult190;
      };
      func122.paramCounts = [0];
      obj2.methods["asString"] = func122;
      func122.definitionLine = 102;
      func122.definitionModule = "stringMap";
      var func191 = function(argcv) {    // method asDebugString
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asDebugString"));
        setModuleName("stringMap");
        setLineNumber(131);    // compilenode call
        onSelf = true;
        var call192 = callmethodChecked(this, "asString", [0]);
        return call192;
      };
      func191.paramCounts = [0];
      obj2.methods["asDebugString"] = func191;
      func191.definitionLine = 130;
      func191.definitionModule = "stringMap";
      var func193 = function(argcv) {    // method keysAndValuesDo(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_action = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for keysAndValuesDo(1)"));
        setModuleName("stringMap");
        setLineNumber(135);    // compilenode call
           // start native code from line 135
        var result = GraceDone;
        var s = "";
            var inner = this.data.inner;
            var keys = Object.keys(inner);
            for (var ix = 0; ix < keys.length; ix++) {
                var key = keys[ix];
                callmethod(var_action, "apply", [2], new GraceString(key), inner[key]);
            }
            return GraceDone;
        var nat194 = result;
           // end native code insertion
        setLineNumber(143);    // compilenode num
        var var_count = new GraceNum(1);
        setLineNumber(144);    // compilenode num
        var var_idx = new GraceNum(0);
        setLineNumber(145);    // compilenode block
        var block195 = new GraceBlock(this, 145, 0);
        block195.real = function() {
          onSelf = true;
          var call196 = callmethodChecked(this, "size", [0]);
          var opresult199 = callmethodChecked(var_count, "\u2264", [1], call196);
          return opresult199;
        };
        var block200 = new GraceBlock(this, 145, 0);
        block200.real = function() {
          setLineNumber(146);    // compilenode block
          var block201 = new GraceBlock(this, 146, 0);
          block201.real = function() {
            onSelf = true;
            var call202 = callmethodChecked(this, "inner", [0]);
            var call203 = callmethodChecked(call202, "at", [1], var_idx);
            var opresult206 = callmethodChecked(var_unused, "==", [1], call203);
            return opresult206;
          };
          var block207 = new GraceBlock(this, 146, 0);
          block207.real = function() {
            setLineNumber(147);    // compilenode identifier
            var opresult210 = callmethodChecked(var_idx, "+", [1], new GraceNum(1));
            var_idx = opresult210;
            return GraceDone;
          };
          var call211 = callmethodChecked(var_prelude, "while()do", [1, 1], block201, block207);
          setLineNumber(149);    // compilenode call
          onSelf = true;
          var call212 = callmethodChecked(this, "inner", [0]);
          var call213 = callmethodChecked(call212, "at", [1], var_idx);
          var var_a = call213;
          setLineNumber(150);    // compilenode identifier
          var call214 = callmethodChecked(var_a, "key", [0]);
          var call215 = callmethodChecked(var_a, "value", [0]);
          var call216 = callmethodChecked(var_action, "apply", [2], call214, call215);
          setLineNumber(151);    // compilenode identifier
          var opresult219 = callmethodChecked(var_count, "+", [1], new GraceNum(1));
          var_count = opresult219;
          setLineNumber(152);    // compilenode identifier
          var opresult222 = callmethodChecked(var_idx, "+", [1], new GraceNum(1));
          var_idx = opresult222;
          return GraceDone;
        };
        var call223 = callmethodChecked(var_prelude, "while()do", [1, 1], block195, block200);
        return call223;
      };
      func193.paramCounts = [1];
      obj2.methods["keysAndValuesDo"] = func193;
      func193.definitionLine = 133;
      func193.definitionModule = "stringMap";
      var func224 = function(argcv) {    // method do(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_action = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for do(1)"));
        setModuleName("stringMap");
        setLineNumber(157);    // compilenode call
           // start native code from line 157
        var result = GraceDone;
        
            var inner = this.data.inner;
            var keys = Object.keys(inner);
            for (var ix = 0; ix < keys.length; ix++) {
                var key = keys[ix];
                callmethod(var_action, "apply", [1], inner[key]);
            }
            return GraceDone;
        var nat225 = result;
           // end native code insertion
        setLineNumber(165);    // compilenode num
        var var_count = new GraceNum(1);
        setLineNumber(166);    // compilenode num
        var var_idx = new GraceNum(0);
        setLineNumber(167);    // compilenode block
        var block226 = new GraceBlock(this, 167, 0);
        block226.real = function() {
          onSelf = true;
          var call227 = callmethodChecked(this, "size", [0]);
          var opresult230 = callmethodChecked(var_count, "\u2264", [1], call227);
          return opresult230;
        };
        var block231 = new GraceBlock(this, 167, 0);
        block231.real = function() {
          setLineNumber(168);    // compilenode block
          var block232 = new GraceBlock(this, 168, 0);
          block232.real = function() {
            onSelf = true;
            var call233 = callmethodChecked(this, "inner", [0]);
            var call234 = callmethodChecked(call233, "at", [1], var_idx);
            var opresult237 = callmethodChecked(var_unused, "==", [1], call234);
            return opresult237;
          };
          var block238 = new GraceBlock(this, 168, 0);
          block238.real = function() {
            setLineNumber(169);    // compilenode identifier
            var opresult241 = callmethodChecked(var_idx, "+", [1], new GraceNum(1));
            var_idx = opresult241;
            return GraceDone;
          };
          var call242 = callmethodChecked(var_prelude, "while()do", [1, 1], block232, block238);
          setLineNumber(171);    // compilenode call
          onSelf = true;
          var call243 = callmethodChecked(this, "inner", [0]);
          var call244 = callmethodChecked(call243, "at", [1], var_idx);
          var call245 = callmethodChecked(call244, "value", [0]);
          var call246 = callmethodChecked(var_action, "apply", [1], call245);
          setLineNumber(172);    // compilenode identifier
          var opresult249 = callmethodChecked(var_count, "+", [1], new GraceNum(1));
          var_count = opresult249;
          setLineNumber(173);    // compilenode identifier
          var opresult252 = callmethodChecked(var_idx, "+", [1], new GraceNum(1));
          var_idx = opresult252;
          return GraceDone;
        };
        var call253 = callmethodChecked(var_prelude, "while()do", [1, 1], block226, block231);
        return call253;
      };
      func224.paramCounts = [1];
      obj2.methods["do"] = func224;
      func224.definitionLine = 155;
      func224.definitionModule = "stringMap";
      var func254 = function(argcv) {    // method keysDo(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_action = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for keysDo(1)"));
        setModuleName("stringMap");
        setLineNumber(178);    // compilenode call
           // start native code from line 178
        var result = GraceDone;
        
            var inner = this.data.inner;
            var keys = Object.keys(inner);
            for (var ix = 0; ix < keys.length; ix++) {
                var key = keys[ix];
                callmethod(var_action, "apply", [1], new GraceString(key));
            }
            return GraceDone;
        var nat255 = result;
           // end native code insertion
        setLineNumber(186);    // compilenode num
        var var_count = new GraceNum(1);
        setLineNumber(187);    // compilenode num
        var var_idx = new GraceNum(0);
        setLineNumber(188);    // compilenode block
        var block256 = new GraceBlock(this, 188, 0);
        block256.real = function() {
          onSelf = true;
          var call257 = callmethodChecked(this, "size", [0]);
          var opresult260 = callmethodChecked(var_count, "\u2264", [1], call257);
          return opresult260;
        };
        var block261 = new GraceBlock(this, 188, 0);
        block261.real = function() {
          setLineNumber(189);    // compilenode block
          var block262 = new GraceBlock(this, 189, 0);
          block262.real = function() {
            onSelf = true;
            var call263 = callmethodChecked(this, "inner", [0]);
            var call264 = callmethodChecked(call263, "at", [1], var_idx);
            var opresult267 = callmethodChecked(var_unused, "==", [1], call264);
            return opresult267;
          };
          var block268 = new GraceBlock(this, 189, 0);
          block268.real = function() {
            setLineNumber(190);    // compilenode identifier
            var opresult271 = callmethodChecked(var_idx, "+", [1], new GraceNum(1));
            var_idx = opresult271;
            return GraceDone;
          };
          var call272 = callmethodChecked(var_prelude, "while()do", [1, 1], block262, block268);
          setLineNumber(192);    // compilenode call
          onSelf = true;
          var call273 = callmethodChecked(this, "inner", [0]);
          var call274 = callmethodChecked(call273, "at", [1], var_idx);
          var call275 = callmethodChecked(call274, "key", [0]);
          var call276 = callmethodChecked(var_action, "apply", [1], call275);
          setLineNumber(193);    // compilenode identifier
          var opresult279 = callmethodChecked(var_count, "+", [1], new GraceNum(1));
          var_count = opresult279;
          setLineNumber(194);    // compilenode identifier
          var opresult282 = callmethodChecked(var_idx, "+", [1], new GraceNum(1));
          var_idx = opresult282;
          return GraceDone;
        };
        var call283 = callmethodChecked(var_prelude, "while()do", [1, 1], block256, block261);
        return call283;
      };
      func254.paramCounts = [1];
      obj2.methods["keysDo"] = func254;
      func254.definitionLine = 177;
      func254.definitionModule = "stringMap";
      var func284 = function(argcv) {    // method valuesDo(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_action = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for valuesDo(1)"));
        setModuleName("stringMap");
        setLineNumber(198);    // compilenode identifier
        onSelf = true;
        var call285 = callmethodChecked(this, "do", [1], var_action);
        return call285;
      };
      func284.paramCounts = [1];
      obj2.methods["valuesDo"] = func284;
      func284.definitionLine = 198;
      func284.definitionModule = "stringMap";
      var func286 = function(argcv) {    // method expand
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for expand"));
        setModuleName("stringMap");
        setLineNumber(201);    // compilenode call
        onSelf = true;
        var call287 = callmethodChecked(this, "inner", [0]);
        var call288 = callmethodChecked(call287, "size", [0]);
        var var_c = call288;
        setLineNumber(202);    // compilenode identifier
        var prod291 = callmethodChecked(var_c, "*", [1], new GraceNum(2));
        var var_n = prod291;
        setLineNumber(203);    // compilenode call
        onSelf = true;
        var call292 = callmethodChecked(this, "inner", [0]);
        var var_oldInner = call292;
        setLineNumber(204);    // compilenode call
        var call293 = callmethodChecked(var_prelude, "primitiveArray", [0]);
        var call294 = callmethodChecked(call293, "new", [1], var_n);
        onSelf = true;
        var call295 = callmethodChecked(this, "inner:=", [1], call294);
        setLineNumber(205);    // compilenode call
        onSelf = true;
        var call297 = callmethodChecked(this, "inner", [0]);
        var call298 = callmethodChecked(call297, "size", [0]);
        var diff300 = callmethodChecked(call298, "-", [1], new GraceNum(1));
        var opresult303 = callmethodChecked(new GraceNum(0), "..", [1], diff300);
        var block304 = new GraceBlock(this, 205, 1);
        setLineNumber(1);    // compilenode identifier
        block304.real = function(var_i) {
          setLineNumber(206);    // compilenode call
          onSelf = true;
          var call305 = callmethodChecked(this, "inner", [0]);
          var call306 = callmethodChecked(call305, "at()put", [1, 1], var_i, var_unused);
          return call306;
        };
        var call307 = callmethodChecked(var_prelude, "for()do", [1, 1], opresult303, block304);
        setLineNumber(208);    // compilenode num
        onSelf = true;
        var call308 = callmethodChecked(this, "elems:=", [1], new GraceNum(0));
        setLineNumber(209);    // compilenode identifier
        var call310 = callmethodChecked(var_oldInner, "size", [0]);
        var diff312 = callmethodChecked(call310, "-", [1], new GraceNum(1));
        var opresult315 = callmethodChecked(new GraceNum(0), "..", [1], diff312);
        var block316 = new GraceBlock(this, 209, 1);
        setLineNumber(1);    // compilenode identifier
        block316.real = function(var_i) {
          setLineNumber(210);    // compilenode identifier
          var call317 = callmethodChecked(var_oldInner, "at", [1], var_i);
          var var_a = call317;
          var if318 = GraceDone;
          setLineNumber(211);    // compilenode identifier
          var opresult321 = callmethodChecked(var_a, "\u2260", [1], var_unused);
          if (Grace_isTrue(opresult321)) {
            setLineNumber(212);    // compilenode identifier
            var call322 = callmethodChecked(var_a, "key", [0]);
            var call323 = callmethodChecked(var_a, "value", [0]);
            onSelf = true;
            var call324 = callmethodChecked(this, "put", [2], call322, call323);
            if318 = call324;
          }
          return if318;
        };
        var call325 = callmethodChecked(var_prelude, "for()do", [1, 1], opresult315, block316);
        return call325;
      };
      func286.confidential = true;
      func286.paramCounts = [0];
      obj2.methods["expand"] = func286;
      func286.definitionLine = 200;
      func286.definitionModule = "stringMap";
      var func326 = function(argcv) {    // method asList
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asList"));
        setModuleName("stringMap");
        setLineNumber(218);    // compilenode call
        var call327 = callmethodChecked(var_prelude, "emptyList", [0]);
        var var_result = call327;
        setLineNumber(219);    // compilenode call
           // start native code from line 219
        var result = GraceDone;
        
            var inner = this.data.inner;
            var keys = Object.keys(inner);
            for (var ix = 0; ix < keys.length; ix++) {
                var key = keys[ix];
                var keyStr = new GraceString(key);
                var binding = callmethod(GraceBindingClass(), "key()value", 
                                                    [1, 1], keyStr, inner[key]);
                callmethod(var_result, "add", [1], binding);
            }
            return var_result;
        var nat328 = result;
           // end native code insertion
        setLineNumber(230);    // compilenode num
        var var_count = new GraceNum(1);
        setLineNumber(231);    // compilenode num
        var var_idx = new GraceNum(0);
        setLineNumber(232);    // compilenode block
        var block329 = new GraceBlock(this, 232, 0);
        block329.real = function() {
          onSelf = true;
          var call330 = callmethodChecked(this, "size", [0]);
          var opresult333 = callmethodChecked(var_count, "\u2264", [1], call330);
          return opresult333;
        };
        var block334 = new GraceBlock(this, 232, 0);
        block334.real = function() {
          setLineNumber(233);    // compilenode block
          var block335 = new GraceBlock(this, 233, 0);
          block335.real = function() {
            onSelf = true;
            var call336 = callmethodChecked(this, "inner", [0]);
            var call337 = callmethodChecked(call336, "at", [1], var_idx);
            var opresult340 = callmethodChecked(var_unused, "==", [1], call337);
            return opresult340;
          };
          var block341 = new GraceBlock(this, 233, 0);
          block341.real = function() {
            setLineNumber(234);    // compilenode identifier
            var opresult344 = callmethodChecked(var_idx, "+", [1], new GraceNum(1));
            var_idx = opresult344;
            return GraceDone;
          };
          var call345 = callmethodChecked(var_prelude, "while()do", [1, 1], block335, block341);
          setLineNumber(236);    // compilenode call
          onSelf = true;
          var call346 = callmethodChecked(this, "inner", [0]);
          var call347 = callmethodChecked(call346, "at", [1], var_idx);
          var call348 = callmethodChecked(var_result, "add", [1], call347);
          setLineNumber(237);    // compilenode identifier
          var opresult351 = callmethodChecked(var_count, "+", [1], new GraceNum(1));
          var_count = opresult351;
          setLineNumber(238);    // compilenode identifier
          var opresult354 = callmethodChecked(var_idx, "+", [1], new GraceNum(1));
          var_idx = opresult354;
          return GraceDone;
        };
        var call355 = callmethodChecked(var_prelude, "while()do", [1, 1], block329, block334);
        setLineNumber(240);    // compilenode identifier
        return var_result;
      };
      func326.paramCounts = [0];
      obj2.methods["asList"] = func326;
      func326.definitionLine = 216;
      func326.definitionModule = "stringMap";
      setLineNumber(16);    // compilenode num
      obj2.data["elems"] = new GraceNum(0);
      var reader_stringMap_elems356 = function() {
        return this.data["elems"];
      };
      obj2.methods["elems"] = reader_stringMap_elems356;
      obj2.data["elems"] = new GraceNum(0);
      var writer_stringMap_elems356 = function(argcv, o) {
        this.data["elems"] = o;
        return GraceDone;
      };
      obj2.methods["elems:="] = writer_stringMap_elems356;
      reader_stringMap_elems356.confidential = true;
      writer_stringMap_elems356.confidential = true;
      obj2.mutable = true;
      setLineNumber(17);    // compilenode call
      var call357 = callmethodChecked(var_prelude, "primitiveArray", [0]);
      var call358 = callmethodChecked(call357, "new", [1], new GraceNum(4));
      obj2.data["inner"] = call358;
      var reader_stringMap_inner359 = function() {
        return this.data["inner"];
      };
      obj2.methods["inner"] = reader_stringMap_inner359;
      obj2.data["inner"] = call358;
      var writer_stringMap_inner359 = function(argcv, o) {
        this.data["inner"] = o;
        return GraceDone;
      };
      obj2.methods["inner:="] = writer_stringMap_inner359;
      reader_stringMap_inner359.confidential = true;
      writer_stringMap_inner359.confidential = true;
      obj2.mutable = true;
      setLineNumber(18);    // compilenode call
      onSelf = true;
      var call361 = callmethodChecked(this, "inner", [0]);
      var call362 = callmethodChecked(call361, "size", [0]);
      var diff364 = callmethodChecked(call362, "-", [1], new GraceNum(1));
      var opresult367 = callmethodChecked(new GraceNum(0), "..", [1], diff364);
      var block368 = new GraceBlock(this, 18, 1);
      setLineNumber(1);    // compilenode identifier
      block368.real = function(var_i) {
        setLineNumber(19);    // compilenode call
        onSelf = true;
        var call369 = callmethodChecked(this, "inner", [0]);
        var call370 = callmethodChecked(call369, "at()put", [1, 1], var_i, var_unused);
        return call370;
      };
      var call371 = callmethodChecked(var_prelude, "for()do", [1, 1], opresult367, block368);
      setLineNumber(21);    // compilenode call
         // start native code from line 21
      var result = GraceDone;
      this.data.inner = { };
      var nat372 = result;
         // end native code insertion
      superDepth = origSuperDepth;
    };
    obj_init_2.apply(obj2, []);
    return obj2;
  };
  func1.paramCounts = [0];
  this.methods["new"] = func1;
  func1.definitionLine = 15;
  func1.definitionModule = "stringMap";
    var func373 = function(argcv) {    // method new()object
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      // Start argument processing
      curarg = 1;
      // End argument processing
      setModuleName("stringMap");
      var returnTarget = invocationCount;
      invocationCount++;
      var obj374 = Grace_allocObject(GraceObject, "new");
      obj374.definitionModule = "stringMap";
      obj374.definitionLine = 15;
      var inho374 = inheritingObject;
      while (inho374.superobj) inho374 = inho374.superobj;
      inho374.superobj = obj374;
      obj374.data = inheritingObject.data;
      if (inheritingObject.hasOwnProperty('_value'))
        obj374._value = inheritingObject._value;
      obj374.outer = this;
      var reader_stringMap_outer375 = function() {
        return this.outer;
      };
      obj374.methods["outer"] = reader_stringMap_outer375;
      var obj_init_374 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj374;
        var func376 = function(argcv) {    // method size
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for size"));
          setModuleName("stringMap");
          setLineNumber(26);    // compilenode call
             // start native code from line 26
          var result = GraceDone;
          var s = Object.keys(this.data.inner).length;
              return new GraceNum(s);
          var nat377 = result;
             // end native code insertion
          setLineNumber(28);    // compilenode call
          onSelf = true;
          var call378 = callmethodChecked(this, "elems", [0]);
          return call378;
        };
        func376.paramCounts = [0];
        obj374.methods["size"] = func376;
        func376.definitionLine = 24;
        func376.definitionModule = "stringMap";
        var func379 = function(argcv) {    // method put(2)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_k = arguments[curarg];
          curarg++;
          var var_v = arguments[curarg];
          curarg++;
          if (argcv[0] !== 2)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for put(2)"));
          setModuleName("stringMap");
          setLineNumber(34);    // compilenode call
             // start native code from line 34
          var result = GraceDone;
          this.data.inner[var_k._value] = var_v;
                        return this;
          var nat380 = result;
             // end native code insertion
          setLineNumber(36);    // compilenode identifier
          onSelf = true;
          var call381 = callmethodChecked(this, "findPosition", [1], var_k);
          var var_t = call381;
          var if382 = GraceDone;
          setLineNumber(37);    // compilenode call
          onSelf = true;
          var call383 = callmethodChecked(this, "inner", [0]);
          var call384 = callmethodChecked(call383, "at", [1], var_t);
          var opresult387 = callmethodChecked(var_unused, "==", [1], call384);
          if (Grace_isTrue(opresult387)) {
            setLineNumber(38);    // compilenode call
            onSelf = true;
            var call389 = callmethodChecked(this, "elems", [0]);
            var opresult391 = callmethodChecked(call389, "+", [1], new GraceNum(1));
            onSelf = true;
            var call392 = callmethodChecked(this, "elems:=", [1], opresult391);
            if382 = call392;
          }
          setLineNumber(40);    // compilenode identifier
          var opresult395 = callmethodChecked(var_k, "::", [1], var_v);
          onSelf = true;
          var call396 = callmethodChecked(this, "inner", [0]);
          var call397 = callmethodChecked(call396, "at()put", [1, 1], var_t, opresult395);
          var if398 = GraceDone;
          setLineNumber(41);    // compilenode call
          onSelf = true;
          var call400 = callmethodChecked(this, "inner", [0]);
          var call401 = callmethodChecked(call400, "size", [0]);
          var quotient403 = callmethodChecked(call401, "/", [1], new GraceNum(2));
          onSelf = true;
          var call405 = callmethodChecked(this, "elems", [0]);
          var opresult407 = callmethodChecked(call405, ">", [1], quotient403);
          if (Grace_isTrue(opresult407)) {
            setLineNumber(42);    // compilenode call
            onSelf = true;
            var call408 = callmethodChecked(this, "expand", [0]);
            if398 = call408;
          }
          setLineNumber(44);    // compilenode identifier
          return this;
        };
        func379.paramCounts = [2];
        obj374.methods["put"] = func379;
        func379.definitionLine = 31;
        func379.definitionModule = "stringMap";
        var func409 = function(argcv) {    // method get(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_k = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for get(1)"));
          setModuleName("stringMap");
          setLineNumber(49);    // compilenode call
             // start native code from line 49
          var result = GraceDone;
          if (this.data.inner.hasOwnProperty(var_k._value))
                return this.data.inner[var_k._value];
            var nso = callmethod(var___95__prelude, "NoSuchObject", [0]);
            var exceptionMsg = new GraceString("no value for key " + var_k._value);
            throw new GraceExceptionPacket(nso, exceptionMsg);
          var nat410 = result;
             // end native code insertion
          setLineNumber(54);    // compilenode identifier
          onSelf = true;
          var call411 = callmethodChecked(this, "findPosition", [1], var_k);
          var var_t = call411;
          setLineNumber(55);    // compilenode call
          onSelf = true;
          var call412 = callmethodChecked(this, "inner", [0]);
          var call413 = callmethodChecked(call412, "at", [1], var_t);
          var var_c = call413;
          var if414 = GraceDone;
          setLineNumber(56);    // compilenode identifier
          var opresult417 = callmethodChecked(var_unused, "==", [1], var_c);
          if (Grace_isTrue(opresult417)) {
            setLineNumber(57);    // compilenode string
            var string418 = new GraceString("");
            var string421 = new GraceString("no value for key ");
            var opresult423 = callmethodChecked(string421, "++", [1], var_k);
            var opresult425 = callmethodChecked(opresult423, "++", [1], string418);
            var call426 = callmethodChecked(var_prelude, "NoSuchObject", [0]);
            var call427 = callmethodChecked(call426, "raise", [1], opresult425);
            if414 = call427;
          }
          setLineNumber(59);    // compilenode identifier
          var call428 = callmethodChecked(var_c, "value", [0]);
          return call428;
        };
        func409.paramCounts = [1];
        obj374.methods["get"] = func409;
        func409.definitionLine = 46;
        func409.definitionModule = "stringMap";
        var func429 = function(argcv) {    // method get(1)ifAbsent(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_k = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for get (arg list 1) of get(1)ifAbsent(1)"));
          var var_absentBlock = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ifAbsent (arg list 2) of get(1)ifAbsent(1)"));
          setModuleName("stringMap");
          setLineNumber(64);    // compilenode call
             // start native code from line 64
          var result = GraceDone;
          if (this.data.inner.hasOwnProperty(var_k._value))
                return this.data.inner[var_k._value];
            return callmethod(var_absentBlock, "apply", [0]);
          var nat430 = result;
             // end native code insertion
          setLineNumber(67);    // compilenode identifier
          onSelf = true;
          var call431 = callmethodChecked(this, "findPosition", [1], var_k);
          var var_t = call431;
          setLineNumber(68);    // compilenode call
          onSelf = true;
          var call432 = callmethodChecked(this, "inner", [0]);
          var call433 = callmethodChecked(call432, "at", [1], var_t);
          var var_c = call433;
          var if434 = GraceDone;
          setLineNumber(69);    // compilenode identifier
          var opresult437 = callmethodChecked(var_unused, "==", [1], var_c);
          if (Grace_isTrue(opresult437)) {
            setLineNumber(70);    // compilenode identifier
            var call438 = callmethodChecked(var_absentBlock, "apply", [0]);
            return call438;
          } else {
            setLineNumber(71);    // compilenode identifier
            var call439 = callmethodChecked(var_c, "value", [0]);
            return call439;
          }
          return if434;
        };
        func429.paramCounts = [1, 1];
        obj374.methods["get()ifAbsent"] = func429;
        func429.definitionLine = 61;
        func429.definitionModule = "stringMap";
        var func440 = function(argcv) {    // method contains(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_k = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for contains(1)"));
          setModuleName("stringMap");
          setLineNumber(75);    // compilenode call
             // start native code from line 75
          var result = GraceDone;
          if (this.data.inner.hasOwnProperty(var_k._value))
                return GraceTrue;
            else return GraceFalse;
          var nat441 = result;
             // end native code insertion
          setLineNumber(78);    // compilenode identifier
          onSelf = true;
          var call442 = callmethodChecked(this, "findPosition", [1], var_k);
          var var_t = call442;
          var if443 = GraceDone;
          setLineNumber(79);    // compilenode call
          onSelf = true;
          var call445 = callmethodChecked(this, "inner", [0]);
          var call446 = callmethodChecked(call445, "at", [1], var_t);
          var call447 = callmethodChecked(call446, "key", [0]);
          var opresult449 = callmethodChecked(call447, "==", [1], var_k);
          if (Grace_isTrue(opresult449)) {
            setLineNumber(80);    // compilenode identifier
            return GraceTrue;
          }
          setLineNumber(82);    // compilenode identifier
          return GraceFalse;
        };
        func440.paramCounts = [1];
        obj374.methods["contains"] = func440;
        func440.definitionLine = 73;
        func440.definitionModule = "stringMap";
        var func450 = function(argcv) {    // method findPosition(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_x = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for findPosition(1)"));
          setModuleName("stringMap");
          setLineNumber(85);    // compilenode identifier
          var call451 = callmethodChecked(var_x, "hash", [0]);
          var var_h = call451;
          setLineNumber(86);    // compilenode call
          onSelf = true;
          var call452 = callmethodChecked(this, "inner", [0]);
          var call453 = callmethodChecked(call452, "size", [0]);
          var var_s = call453;
          setLineNumber(87);    // compilenode identifier
          var modulus456 = callmethodChecked(var_h, "%", [1], var_s);
          var var_t = modulus456;
          setLineNumber(88);    // compilenode num
          var var_jump = new GraceNum(5);
          setLineNumber(89);    // compilenode block
          var block457 = new GraceBlock(this, 89, 0);
          block457.real = function() {
            onSelf = true;
            var call458 = callmethodChecked(this, "inner", [0]);
            var call459 = callmethodChecked(call458, "at", [1], var_t);
            var opresult462 = callmethodChecked(var_unused, "\u2260", [1], call459);
            return opresult462;
          };
          var block463 = new GraceBlock(this, 89, 0);
          block463.real = function() {
            var if464 = GraceDone;
            setLineNumber(90);    // compilenode call
            onSelf = true;
            var call466 = callmethodChecked(this, "inner", [0]);
            var call467 = callmethodChecked(call466, "at", [1], var_t);
            var call468 = callmethodChecked(call467, "key", [0]);
            var opresult470 = callmethodChecked(call468, "==", [1], var_x);
            if (Grace_isTrue(opresult470)) {
              setLineNumber(91);    // compilenode identifier
              throw new ReturnException(var_t, returnTarget);
            }
            var if471 = GraceDone;
            setLineNumber(93);    // compilenode identifier
            var opresult474 = callmethodChecked(var_jump, "\u2260", [1], new GraceNum(0));
            if (Grace_isTrue(opresult474)) {
              setLineNumber(94);    // compilenode identifier
              var prod479 = callmethodChecked(var_t, "*", [1], new GraceNum(3));
              var opresult481 = callmethodChecked(prod479, "+", [1], new GraceNum(1));
              var modulus483 = callmethodChecked(opresult481, "%", [1], var_s);
              var_t = modulus483;
              setLineNumber(95);    // compilenode identifier
              var diff486 = callmethodChecked(var_jump, "-", [1], new GraceNum(1));
              var_jump = diff486;
              if471 = GraceDone;
            } else {
              setLineNumber(97);    // compilenode identifier
              var opresult490 = callmethodChecked(var_t, "+", [1], new GraceNum(1));
              var modulus492 = callmethodChecked(opresult490, "%", [1], var_s);
              var_t = modulus492;
              if471 = GraceDone;
            }
            return if471;
          };
          var call493 = callmethodChecked(var_prelude, "while()do", [1, 1], block457, block463);
          setLineNumber(100);    // compilenode identifier
          return var_t;
        };
        func450.confidential = true;
        func450.paramCounts = [1];
        obj374.methods["findPosition"] = func450;
        func450.definitionLine = 84;
        func450.definitionModule = "stringMap";
        var func494 = function(argcv) {    // method asString
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
          setModuleName("stringMap");
          setLineNumber(103);    // compilenode call
             // start native code from line 103
          var result = GraceDone;
          var s = "";
            var inner = this.data.inner;
            var keys = Object.keys(inner);
            for (var ix = 0; ix < keys.length; ix++) {
                var key = keys[ix];
                if (s === "") {
                    s = key + "::";
                } else {
                    s = s + ", " + key + "::";
                }
                s = s + callmethod(inner[key], "asString", [0])._value;
            }
            s = "map.new[" + s + "]";
            return new GraceString(s);
          var nat495 = result;
             // end native code insertion
          setLineNumber(117);    // compilenode string
          var string496 = new GraceString("");
          var var_s = string496;
          setLineNumber(118);    // compilenode call
          onSelf = true;
          var call498 = callmethodChecked(this, "inner", [0]);
          var call499 = callmethodChecked(call498, "size", [0]);
          var diff501 = callmethodChecked(call499, "-", [1], new GraceNum(1));
          var opresult504 = callmethodChecked(new GraceNum(0), "..", [1], diff501);
          var block505 = new GraceBlock(this, 118, 1);
          setLineNumber(1);    // compilenode identifier
          block505.real = function(var_i) {
            setLineNumber(119);    // compilenode call
            onSelf = true;
            var call506 = callmethodChecked(this, "inner", [0]);
            var call507 = callmethodChecked(call506, "at", [1], var_i);
            var var_a = call507;
            var if508 = GraceDone;
            setLineNumber(120);    // compilenode identifier
            var opresult511 = callmethodChecked(var_a, "\u2260", [1], var_unused);
            if (Grace_isTrue(opresult511)) {
              var if512 = GraceDone;
              setLineNumber(121);    // compilenode string
              var string513 = new GraceString("");
              var opresult516 = callmethodChecked(var_s, "==", [1], string513);
              if (Grace_isTrue(opresult516)) {
                setLineNumber(122);    // compilenode string
                var string517 = new GraceString("");
                var call519 = callmethodChecked(var_a, "value", [0]);
                var string521 = new GraceString("::");
                var call523 = callmethodChecked(var_a, "key", [0]);
                var string525 = new GraceString("");
                var opresult527 = callmethodChecked(string525, "++", [1], call523);
                var opresult529 = callmethodChecked(opresult527, "++", [1], string521);
                var opresult531 = callmethodChecked(opresult529, "++", [1], call519);
                var opresult533 = callmethodChecked(opresult531, "++", [1], string517);
                var_s = opresult533;
                if512 = GraceDone;
              } else {
                setLineNumber(124);    // compilenode string
                var string534 = new GraceString("");
                var call536 = callmethodChecked(var_a, "value", [0]);
                var string538 = new GraceString("::");
                var call540 = callmethodChecked(var_a, "key", [0]);
                var string542 = new GraceString(", ");
                var opresult544 = callmethodChecked(string542, "++", [1], call540);
                var opresult546 = callmethodChecked(opresult544, "++", [1], string538);
                var opresult548 = callmethodChecked(opresult546, "++", [1], call536);
                var opresult550 = callmethodChecked(opresult548, "++", [1], string534);
                var opresult553 = callmethodChecked(var_s, "++", [1], opresult550);
                var_s = opresult553;
                if512 = GraceDone;
              }
              if508 = if512;
            }
            return if508;
          };
          var call554 = callmethodChecked(var_prelude, "for()do", [1, 1], opresult504, block505);
          setLineNumber(128);    // compilenode string
          var string555 = new GraceString("]");
          var string558 = new GraceString("map.new[");
          var opresult560 = callmethodChecked(string558, "++", [1], var_s);
          var opresult562 = callmethodChecked(opresult560, "++", [1], string555);
          return opresult562;
        };
        func494.paramCounts = [0];
        obj374.methods["asString"] = func494;
        func494.definitionLine = 102;
        func494.definitionModule = "stringMap";
        var func563 = function(argcv) {    // method asDebugString
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asDebugString"));
          setModuleName("stringMap");
          setLineNumber(131);    // compilenode call
          onSelf = true;
          var call564 = callmethodChecked(this, "asString", [0]);
          return call564;
        };
        func563.paramCounts = [0];
        obj374.methods["asDebugString"] = func563;
        func563.definitionLine = 130;
        func563.definitionModule = "stringMap";
        var func565 = function(argcv) {    // method keysAndValuesDo(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_action = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for keysAndValuesDo(1)"));
          setModuleName("stringMap");
          setLineNumber(135);    // compilenode call
             // start native code from line 135
          var result = GraceDone;
          var s = "";
            var inner = this.data.inner;
            var keys = Object.keys(inner);
            for (var ix = 0; ix < keys.length; ix++) {
                var key = keys[ix];
                callmethod(var_action, "apply", [2], new GraceString(key), inner[key]);
            }
            return GraceDone;
          var nat566 = result;
             // end native code insertion
          setLineNumber(143);    // compilenode num
          var var_count = new GraceNum(1);
          setLineNumber(144);    // compilenode num
          var var_idx = new GraceNum(0);
          setLineNumber(145);    // compilenode block
          var block567 = new GraceBlock(this, 145, 0);
          block567.real = function() {
            onSelf = true;
            var call568 = callmethodChecked(this, "size", [0]);
            var opresult571 = callmethodChecked(var_count, "\u2264", [1], call568);
            return opresult571;
          };
          var block572 = new GraceBlock(this, 145, 0);
          block572.real = function() {
            setLineNumber(146);    // compilenode block
            var block573 = new GraceBlock(this, 146, 0);
            block573.real = function() {
              onSelf = true;
              var call574 = callmethodChecked(this, "inner", [0]);
              var call575 = callmethodChecked(call574, "at", [1], var_idx);
              var opresult578 = callmethodChecked(var_unused, "==", [1], call575);
              return opresult578;
            };
            var block579 = new GraceBlock(this, 146, 0);
            block579.real = function() {
              setLineNumber(147);    // compilenode identifier
              var opresult582 = callmethodChecked(var_idx, "+", [1], new GraceNum(1));
              var_idx = opresult582;
              return GraceDone;
            };
            var call583 = callmethodChecked(var_prelude, "while()do", [1, 1], block573, block579);
            setLineNumber(149);    // compilenode call
            onSelf = true;
            var call584 = callmethodChecked(this, "inner", [0]);
            var call585 = callmethodChecked(call584, "at", [1], var_idx);
            var var_a = call585;
            setLineNumber(150);    // compilenode identifier
            var call586 = callmethodChecked(var_a, "key", [0]);
            var call587 = callmethodChecked(var_a, "value", [0]);
            var call588 = callmethodChecked(var_action, "apply", [2], call586, call587);
            setLineNumber(151);    // compilenode identifier
            var opresult591 = callmethodChecked(var_count, "+", [1], new GraceNum(1));
            var_count = opresult591;
            setLineNumber(152);    // compilenode identifier
            var opresult594 = callmethodChecked(var_idx, "+", [1], new GraceNum(1));
            var_idx = opresult594;
            return GraceDone;
          };
          var call595 = callmethodChecked(var_prelude, "while()do", [1, 1], block567, block572);
          return call595;
        };
        func565.paramCounts = [1];
        obj374.methods["keysAndValuesDo"] = func565;
        func565.definitionLine = 133;
        func565.definitionModule = "stringMap";
        var func596 = function(argcv) {    // method do(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_action = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for do(1)"));
          setModuleName("stringMap");
          setLineNumber(157);    // compilenode call
             // start native code from line 157
          var result = GraceDone;
          
            var inner = this.data.inner;
            var keys = Object.keys(inner);
            for (var ix = 0; ix < keys.length; ix++) {
                var key = keys[ix];
                callmethod(var_action, "apply", [1], inner[key]);
            }
            return GraceDone;
          var nat597 = result;
             // end native code insertion
          setLineNumber(165);    // compilenode num
          var var_count = new GraceNum(1);
          setLineNumber(166);    // compilenode num
          var var_idx = new GraceNum(0);
          setLineNumber(167);    // compilenode block
          var block598 = new GraceBlock(this, 167, 0);
          block598.real = function() {
            onSelf = true;
            var call599 = callmethodChecked(this, "size", [0]);
            var opresult602 = callmethodChecked(var_count, "\u2264", [1], call599);
            return opresult602;
          };
          var block603 = new GraceBlock(this, 167, 0);
          block603.real = function() {
            setLineNumber(168);    // compilenode block
            var block604 = new GraceBlock(this, 168, 0);
            block604.real = function() {
              onSelf = true;
              var call605 = callmethodChecked(this, "inner", [0]);
              var call606 = callmethodChecked(call605, "at", [1], var_idx);
              var opresult609 = callmethodChecked(var_unused, "==", [1], call606);
              return opresult609;
            };
            var block610 = new GraceBlock(this, 168, 0);
            block610.real = function() {
              setLineNumber(169);    // compilenode identifier
              var opresult613 = callmethodChecked(var_idx, "+", [1], new GraceNum(1));
              var_idx = opresult613;
              return GraceDone;
            };
            var call614 = callmethodChecked(var_prelude, "while()do", [1, 1], block604, block610);
            setLineNumber(171);    // compilenode call
            onSelf = true;
            var call615 = callmethodChecked(this, "inner", [0]);
            var call616 = callmethodChecked(call615, "at", [1], var_idx);
            var call617 = callmethodChecked(call616, "value", [0]);
            var call618 = callmethodChecked(var_action, "apply", [1], call617);
            setLineNumber(172);    // compilenode identifier
            var opresult621 = callmethodChecked(var_count, "+", [1], new GraceNum(1));
            var_count = opresult621;
            setLineNumber(173);    // compilenode identifier
            var opresult624 = callmethodChecked(var_idx, "+", [1], new GraceNum(1));
            var_idx = opresult624;
            return GraceDone;
          };
          var call625 = callmethodChecked(var_prelude, "while()do", [1, 1], block598, block603);
          return call625;
        };
        func596.paramCounts = [1];
        obj374.methods["do"] = func596;
        func596.definitionLine = 155;
        func596.definitionModule = "stringMap";
        var func626 = function(argcv) {    // method keysDo(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_action = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for keysDo(1)"));
          setModuleName("stringMap");
          setLineNumber(178);    // compilenode call
             // start native code from line 178
          var result = GraceDone;
          
            var inner = this.data.inner;
            var keys = Object.keys(inner);
            for (var ix = 0; ix < keys.length; ix++) {
                var key = keys[ix];
                callmethod(var_action, "apply", [1], new GraceString(key));
            }
            return GraceDone;
          var nat627 = result;
             // end native code insertion
          setLineNumber(186);    // compilenode num
          var var_count = new GraceNum(1);
          setLineNumber(187);    // compilenode num
          var var_idx = new GraceNum(0);
          setLineNumber(188);    // compilenode block
          var block628 = new GraceBlock(this, 188, 0);
          block628.real = function() {
            onSelf = true;
            var call629 = callmethodChecked(this, "size", [0]);
            var opresult632 = callmethodChecked(var_count, "\u2264", [1], call629);
            return opresult632;
          };
          var block633 = new GraceBlock(this, 188, 0);
          block633.real = function() {
            setLineNumber(189);    // compilenode block
            var block634 = new GraceBlock(this, 189, 0);
            block634.real = function() {
              onSelf = true;
              var call635 = callmethodChecked(this, "inner", [0]);
              var call636 = callmethodChecked(call635, "at", [1], var_idx);
              var opresult639 = callmethodChecked(var_unused, "==", [1], call636);
              return opresult639;
            };
            var block640 = new GraceBlock(this, 189, 0);
            block640.real = function() {
              setLineNumber(190);    // compilenode identifier
              var opresult643 = callmethodChecked(var_idx, "+", [1], new GraceNum(1));
              var_idx = opresult643;
              return GraceDone;
            };
            var call644 = callmethodChecked(var_prelude, "while()do", [1, 1], block634, block640);
            setLineNumber(192);    // compilenode call
            onSelf = true;
            var call645 = callmethodChecked(this, "inner", [0]);
            var call646 = callmethodChecked(call645, "at", [1], var_idx);
            var call647 = callmethodChecked(call646, "key", [0]);
            var call648 = callmethodChecked(var_action, "apply", [1], call647);
            setLineNumber(193);    // compilenode identifier
            var opresult651 = callmethodChecked(var_count, "+", [1], new GraceNum(1));
            var_count = opresult651;
            setLineNumber(194);    // compilenode identifier
            var opresult654 = callmethodChecked(var_idx, "+", [1], new GraceNum(1));
            var_idx = opresult654;
            return GraceDone;
          };
          var call655 = callmethodChecked(var_prelude, "while()do", [1, 1], block628, block633);
          return call655;
        };
        func626.paramCounts = [1];
        obj374.methods["keysDo"] = func626;
        func626.definitionLine = 177;
        func626.definitionModule = "stringMap";
        var func656 = function(argcv) {    // method valuesDo(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_action = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for valuesDo(1)"));
          setModuleName("stringMap");
          setLineNumber(198);    // compilenode identifier
          onSelf = true;
          var call657 = callmethodChecked(this, "do", [1], var_action);
          return call657;
        };
        func656.paramCounts = [1];
        obj374.methods["valuesDo"] = func656;
        func656.definitionLine = 198;
        func656.definitionModule = "stringMap";
        var func658 = function(argcv) {    // method expand
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for expand"));
          setModuleName("stringMap");
          setLineNumber(201);    // compilenode call
          onSelf = true;
          var call659 = callmethodChecked(this, "inner", [0]);
          var call660 = callmethodChecked(call659, "size", [0]);
          var var_c = call660;
          setLineNumber(202);    // compilenode identifier
          var prod663 = callmethodChecked(var_c, "*", [1], new GraceNum(2));
          var var_n = prod663;
          setLineNumber(203);    // compilenode call
          onSelf = true;
          var call664 = callmethodChecked(this, "inner", [0]);
          var var_oldInner = call664;
          setLineNumber(204);    // compilenode call
          var call665 = callmethodChecked(var_prelude, "primitiveArray", [0]);
          var call666 = callmethodChecked(call665, "new", [1], var_n);
          onSelf = true;
          var call667 = callmethodChecked(this, "inner:=", [1], call666);
          setLineNumber(205);    // compilenode call
          onSelf = true;
          var call669 = callmethodChecked(this, "inner", [0]);
          var call670 = callmethodChecked(call669, "size", [0]);
          var diff672 = callmethodChecked(call670, "-", [1], new GraceNum(1));
          var opresult675 = callmethodChecked(new GraceNum(0), "..", [1], diff672);
          var block676 = new GraceBlock(this, 205, 1);
          setLineNumber(1);    // compilenode identifier
          block676.real = function(var_i) {
            setLineNumber(206);    // compilenode call
            onSelf = true;
            var call677 = callmethodChecked(this, "inner", [0]);
            var call678 = callmethodChecked(call677, "at()put", [1, 1], var_i, var_unused);
            return call678;
          };
          var call679 = callmethodChecked(var_prelude, "for()do", [1, 1], opresult675, block676);
          setLineNumber(208);    // compilenode num
          onSelf = true;
          var call680 = callmethodChecked(this, "elems:=", [1], new GraceNum(0));
          setLineNumber(209);    // compilenode identifier
          var call682 = callmethodChecked(var_oldInner, "size", [0]);
          var diff684 = callmethodChecked(call682, "-", [1], new GraceNum(1));
          var opresult687 = callmethodChecked(new GraceNum(0), "..", [1], diff684);
          var block688 = new GraceBlock(this, 209, 1);
          setLineNumber(1);    // compilenode identifier
          block688.real = function(var_i) {
            setLineNumber(210);    // compilenode identifier
            var call689 = callmethodChecked(var_oldInner, "at", [1], var_i);
            var var_a = call689;
            var if690 = GraceDone;
            setLineNumber(211);    // compilenode identifier
            var opresult693 = callmethodChecked(var_a, "\u2260", [1], var_unused);
            if (Grace_isTrue(opresult693)) {
              setLineNumber(212);    // compilenode identifier
              var call694 = callmethodChecked(var_a, "key", [0]);
              var call695 = callmethodChecked(var_a, "value", [0]);
              onSelf = true;
              var call696 = callmethodChecked(this, "put", [2], call694, call695);
              if690 = call696;
            }
            return if690;
          };
          var call697 = callmethodChecked(var_prelude, "for()do", [1, 1], opresult687, block688);
          return call697;
        };
        func658.confidential = true;
        func658.paramCounts = [0];
        obj374.methods["expand"] = func658;
        func658.definitionLine = 200;
        func658.definitionModule = "stringMap";
        var func698 = function(argcv) {    // method asList
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asList"));
          setModuleName("stringMap");
          setLineNumber(218);    // compilenode call
          var call699 = callmethodChecked(var_prelude, "emptyList", [0]);
          var var_result = call699;
          setLineNumber(219);    // compilenode call
             // start native code from line 219
          var result = GraceDone;
          
            var inner = this.data.inner;
            var keys = Object.keys(inner);
            for (var ix = 0; ix < keys.length; ix++) {
                var key = keys[ix];
                var keyStr = new GraceString(key);
                var binding = callmethod(GraceBindingClass(), "key()value", 
                                                    [1, 1], keyStr, inner[key]);
                callmethod(var_result, "add", [1], binding);
            }
            return var_result;
          var nat700 = result;
             // end native code insertion
          setLineNumber(230);    // compilenode num
          var var_count = new GraceNum(1);
          setLineNumber(231);    // compilenode num
          var var_idx = new GraceNum(0);
          setLineNumber(232);    // compilenode block
          var block701 = new GraceBlock(this, 232, 0);
          block701.real = function() {
            onSelf = true;
            var call702 = callmethodChecked(this, "size", [0]);
            var opresult705 = callmethodChecked(var_count, "\u2264", [1], call702);
            return opresult705;
          };
          var block706 = new GraceBlock(this, 232, 0);
          block706.real = function() {
            setLineNumber(233);    // compilenode block
            var block707 = new GraceBlock(this, 233, 0);
            block707.real = function() {
              onSelf = true;
              var call708 = callmethodChecked(this, "inner", [0]);
              var call709 = callmethodChecked(call708, "at", [1], var_idx);
              var opresult712 = callmethodChecked(var_unused, "==", [1], call709);
              return opresult712;
            };
            var block713 = new GraceBlock(this, 233, 0);
            block713.real = function() {
              setLineNumber(234);    // compilenode identifier
              var opresult716 = callmethodChecked(var_idx, "+", [1], new GraceNum(1));
              var_idx = opresult716;
              return GraceDone;
            };
            var call717 = callmethodChecked(var_prelude, "while()do", [1, 1], block707, block713);
            setLineNumber(236);    // compilenode call
            onSelf = true;
            var call718 = callmethodChecked(this, "inner", [0]);
            var call719 = callmethodChecked(call718, "at", [1], var_idx);
            var call720 = callmethodChecked(var_result, "add", [1], call719);
            setLineNumber(237);    // compilenode identifier
            var opresult723 = callmethodChecked(var_count, "+", [1], new GraceNum(1));
            var_count = opresult723;
            setLineNumber(238);    // compilenode identifier
            var opresult726 = callmethodChecked(var_idx, "+", [1], new GraceNum(1));
            var_idx = opresult726;
            return GraceDone;
          };
          var call727 = callmethodChecked(var_prelude, "while()do", [1, 1], block701, block706);
          setLineNumber(240);    // compilenode identifier
          return var_result;
        };
        func698.paramCounts = [0];
        obj374.methods["asList"] = func698;
        func698.definitionLine = 216;
        func698.definitionModule = "stringMap";
        setLineNumber(16);    // compilenode num
        obj374.data["elems"] = new GraceNum(0);
        var reader_stringMap_elems728 = function() {
          return this.data["elems"];
        };
        obj374.methods["elems"] = reader_stringMap_elems728;
        obj374.data["elems"] = new GraceNum(0);
        var writer_stringMap_elems728 = function(argcv, o) {
          this.data["elems"] = o;
          return GraceDone;
        };
        obj374.methods["elems:="] = writer_stringMap_elems728;
        reader_stringMap_elems728.confidential = true;
        writer_stringMap_elems728.confidential = true;
        obj374.mutable = true;
        setLineNumber(17);    // compilenode call
        var call729 = callmethodChecked(var_prelude, "primitiveArray", [0]);
        var call730 = callmethodChecked(call729, "new", [1], new GraceNum(4));
        obj374.data["inner"] = call730;
        var reader_stringMap_inner731 = function() {
          return this.data["inner"];
        };
        obj374.methods["inner"] = reader_stringMap_inner731;
        obj374.data["inner"] = call730;
        var writer_stringMap_inner731 = function(argcv, o) {
          this.data["inner"] = o;
          return GraceDone;
        };
        obj374.methods["inner:="] = writer_stringMap_inner731;
        reader_stringMap_inner731.confidential = true;
        writer_stringMap_inner731.confidential = true;
        obj374.mutable = true;
        setLineNumber(18);    // compilenode call
        onSelf = true;
        var call733 = callmethodChecked(this, "inner", [0]);
        var call734 = callmethodChecked(call733, "size", [0]);
        var diff736 = callmethodChecked(call734, "-", [1], new GraceNum(1));
        var opresult739 = callmethodChecked(new GraceNum(0), "..", [1], diff736);
        var block740 = new GraceBlock(this, 18, 1);
        setLineNumber(1);    // compilenode identifier
        block740.real = function(var_i) {
          setLineNumber(19);    // compilenode call
          onSelf = true;
          var call741 = callmethodChecked(this, "inner", [0]);
          var call742 = callmethodChecked(call741, "at()put", [1, 1], var_i, var_unused);
          return call742;
        };
        var call743 = callmethodChecked(var_prelude, "for()do", [1, 1], opresult739, block740);
        setLineNumber(21);    // compilenode call
           // start native code from line 21
        var result = GraceDone;
        this.data.inner = { };
        var nat744 = result;
           // end native code insertion
        superDepth = origSuperDepth;
      };
      obj_init_374.apply(inheritingObject, []);
      return obj374;
      };
      this.methods["new()object"] = func373;
    setLineNumber(10);    // compilenode object
    var obj745 = Grace_allocObject(null, "unused");
    obj745.definitionModule = "stringMap";
    obj745.definitionLine = 10;
    obj745.outer = this;
    var reader_stringMap_outer746 = function() {
      return this.outer;
    };
    obj745.methods["outer"] = reader_stringMap_outer746;
    var obj_init_745 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj745;
      setLineNumber(11);    // compilenode string
      var string747 = new GraceString("unused");
      var call748 = callmethodChecked(var_prelude, "Singleton", [0]);
      var call749 = callmethodChecked(call748, "named()object", [1, 1], string747, this);
      obj745.superobj = call749;
      if (call749.data) obj745.data = call749.data;
      if (call749.hasOwnProperty('_value'))
          obj745._value = call749._value;
      setLineNumber(12);    // compilenode identifier
      obj745.data["key"] = this;
      var reader_stringMap_key750 = function() {
        return this.data["key"];
      };
      reader_stringMap_key750.def = true;
      obj745.methods["key"] = reader_stringMap_key750;
      superDepth = origSuperDepth;
    };
    obj_init_745.apply(obj745, []);
    var var_unused = obj745;
    setLineNumber(11);    // compilenode method
    var func751 = function(argcv) {    // method unused
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for unused"));
      setModuleName("stringMap");
      // unused is a simple accessor - elide try ... catch
      setLineNumber(10);    // compilenode identifier
      return var_unused;
    };
    func751.paramCounts = [0];
    this.methods["unused"] = func751;
    func751.definitionLine = 11;
    func751.definitionModule = "stringMap";
    this.methods["unused"].debug = "def";
    return this;
  }
  gracecode_stringMap.imports = [];
  if (typeof gctCache !== "undefined")
    gctCache['stringMap'] = "classes:\nconfidential:\nfresh-methods:\n new\nfresh:new:\n asDebugString\n asList\n asString\n contains\n do\n elems\n expand\n findPosition\n get\n get()ifAbsent\n inner\n keysAndValuesDo\n keysDo\n put\n size\n valuesDo\nmodules:\npath:\n stringMap\npublic:\n new\ntypes:\n";
  if (typeof originalSourceLines !== "undefined") {
    originalSourceLines["stringMap"] = [
      "// This module defines a class new that implements a mapping from strings to objects",
      "// Its interface is strange, but is designed to mimic that of mgcollecitons.map.new",
      "// For a general-purpose mapping obejct, use dictonary from standardGrace.",
      "//",
      "// The implementation for C is based on that from mgcollections; that for JS uses",
      "// native code, since hashing is built-in to JavaScript objects.",
      "// External iterators are not implemented.  Instead, the internal iterators",
      "// keysDo and valuesDo are provided.",
      "",
      "def unused = object {",
      "    inherits Singleton.named \"unused\"",
      "    def key is public = self",
      "}",
      "",
      "class new {",
      "    var elems := 0",
      "    var inner := primitiveArray.new(4)",
      "    for (0..(inner.size-1)) do {i->",
      "        inner.at(i)put(unused)",
      "    }",
      "    native \"js\" code ‹this.data.inner = { };›  ",
      "        // override the primitiveArray with an empty object",
      "",
      "    method size {",
      "        // The number of bindings that I contain.",
      "        native \"js\" code ‹var s = Object.keys(this.data.inner).length;",
      "              return new GraceNum(s);›",
      "        elems",
      "    }",
      "",
      "    method put(k, v) {",
      "        // binds the value v and the key k, which must be a String.",
      "        // Returns self, for chaining.",
      "        native \"js\" code ‹this.data.inner[var_k._value] = var_v;",
      "                        return this;›",
      "        var t := findPosition(k)",
      "        if (unused == inner.at(t)) then {",
      "            elems := elems + 1",
      "        }",
      "        inner.at(t)put(k::v)",
      "        if (elems > (inner.size / 2)) then {",
      "            expand",
      "        }",
      "        self",
      "    }",
      "    method get(k) {",
      "        // answers the value associated with the key k.  If there is none",
      "        // raises the NoSuchObject exception.",
      "        native \"js\" code ‹if (this.data.inner.hasOwnProperty(var_k._value))",
      "                return this.data.inner[var_k._value];",
      "            var nso = callmethod(var___95__prelude, \"NoSuchObject\", [0]);",
      "            var exceptionMsg = new GraceString(\"no value for key \" + var_k._value);",
      "            throw new GraceExceptionPacket(nso, exceptionMsg);›",
      "        var t := findPosition(k)",
      "        var c := inner.at(t)",
      "        if (unused == c) then {",
      "            NoSuchObject.raise \"no value for key {k}\"",
      "        }",
      "        return c.value",
      "    }",
      "    method get(k) ifAbsent (absentBlock) {",
      "        // answers the value associated with the key k.  If there is none",
      "        // evaluates absentBlock and returns its result.",
      "        native \"js\" code ‹if (this.data.inner.hasOwnProperty(var_k._value))",
      "                return this.data.inner[var_k._value];",
      "            return callmethod(var_absentBlock, \"apply\", [0]);›",
      "        var t := findPosition(k)",
      "        var c := inner.at(t)",
      "        if (unused == c)",
      "            then { return absentBlock.apply }",
      "            else { return c.value }",
      "    }",
      "    method contains(k) {",
      "        // true if I contain the key k",
      "        native \"js\" code ‹if (this.data.inner.hasOwnProperty(var_k._value))",
      "                return GraceTrue;",
      "            else return GraceFalse;›",
      "        var t := findPosition(k)",
      "        if (inner.at(t).key == k) then {",
      "            return true",
      "        }",
      "        return false",
      "    }",
      "    method findPosition(x) is confidential {",
      "        def h = x.hash",
      "        def s = inner.size",
      "        var t := h % s",
      "        var jump := 5",
      "        while { unused ≠ inner.at(t) } do {",
      "            if (inner.at(t).key == x) then {",
      "                return t",
      "            }",
      "            if (jump != 0) then {",
      "                t := (t * 3 + 1) % s",
      "                jump := jump - 1",
      "            } else {",
      "                t := (t + 1) % s",
      "            }",
      "        }",
      "        return t",
      "    }",
      "    method asString {",
      "        native \"js\" code ‹var s = \"\";",
      "            var inner = this.data.inner;",
      "            var keys = Object.keys(inner);",
      "            for (var ix = 0; ix < keys.length; ix++) {",
      "                var key = keys[ix];",
      "                if (s === \"\") {",
      "                    s = key + \"::\";",
      "                } else {",
      "                    s = s + \", \" + key + \"::\";",
      "                }",
      "                s = s + callmethod(inner[key], \"asString\", [0])._value;",
      "            }",
      "            s = \"map.new[\" + s + \"]\";",
      "            return new GraceString(s);›",
      "        var s := \"\"",
      "        for (0..(inner.size-1)) do {i->",
      "            def a = inner.at(i)",
      "            if (a != unused) then {",
      "                if (s == \"\") then {",
      "                    s := \"{a.key}::{a.value}\"",
      "                } else {",
      "                    s := s ++ \", {a.key}::{a.value}\"",
      "                }",
      "            }",
      "        }",
      "        \"map.new[\" ++ s ++ \"]\"",
      "    }",
      "    method asDebugString {",
      "        asString",
      "    }",
      "    method keysAndValuesDo(action) {",
      "        // internal iterator over my keys and values.",
      "        native \"js\" code ‹var s = \"\";",
      "            var inner = this.data.inner;",
      "            var keys = Object.keys(inner);",
      "            for (var ix = 0; ix < keys.length; ix++) {",
      "                var key = keys[ix];",
      "                callmethod(var_action, \"apply\", [2], new GraceString(key), inner[key]);",
      "            }",
      "            return GraceDone;›",
      "        var count := 1",
      "        var idx := 0",
      "        while {count <= size} do {",
      "            while { unused == inner.at(idx) } do {",
      "                idx := idx + 1",
      "            }",
      "            def a = inner.at(idx)",
      "            action.apply(a.key, a.value)",
      "            count := count + 1",
      "            idx := idx + 1",
      "        }",
      "    }",
      "    method do(action) {",
      "        // internal iterator over my values.",
      "        native \"js\" code ‹",
      "            var inner = this.data.inner;",
      "            var keys = Object.keys(inner);",
      "            for (var ix = 0; ix < keys.length; ix++) {",
      "                var key = keys[ix];",
      "                callmethod(var_action, \"apply\", [1], inner[key]);",
      "            }",
      "            return GraceDone;›",
      "        var count := 1",
      "        var idx := 0",
      "        while {count <= size} do {",
      "            while { unused == inner.at(idx) } do {",
      "                idx := idx + 1",
      "            }",
      "            action.apply (inner.at(idx).value)",
      "            count := count + 1",
      "            idx := idx + 1",
      "        }",
      "    }",
      "    ",
      "    method keysDo(action) {",
      "        native \"js\" code ‹",
      "            var inner = this.data.inner;",
      "            var keys = Object.keys(inner);",
      "            for (var ix = 0; ix < keys.length; ix++) {",
      "                var key = keys[ix];",
      "                callmethod(var_action, \"apply\", [1], new GraceString(key));",
      "            }",
      "            return GraceDone;›",
      "        var count := 1",
      "        var idx := 0",
      "        while {count <= size} do {",
      "            while { unused == inner.at(idx) } do {",
      "                idx := idx + 1",
      "            }",
      "            action.apply (inner.at(idx).key)",
      "            count := count + 1",
      "            idx := idx + 1",
      "        }",
      "    }",
      "    ",
      "    method valuesDo(action) { do(action) }",
      "",
      "    method expand is confidential {",
      "        def c = inner.size",
      "        def n = c * 2",
      "        def oldInner = inner",
      "        inner := primitiveArray.new(n)",
      "        for (0..(inner.size-1)) do {i->",
      "            inner.at(i)put(unused)",
      "        }",
      "        elems := 0",
      "        for (0..(oldInner.size-1)) do {i->",
      "            def a = oldInner.at(i)",
      "            if (a != unused) then {",
      "                put(a.key, a.value)",
      "            }",
      "        }",
      "    }",
      "    method asList {",
      "        // the contents of this stringMap as a list of bindings",
      "        def result = emptyList",
      "        native \"js\" code ‹",
      "            var inner = this.data.inner;",
      "            var keys = Object.keys(inner);",
      "            for (var ix = 0; ix < keys.length; ix++) {",
      "                var key = keys[ix];",
      "                var keyStr = new GraceString(key);",
      "                var binding = callmethod(GraceBindingClass(), \"key()value\", ",
      "                                                    [1, 1], keyStr, inner[key]);",
      "                callmethod(var_result, \"add\", [1], binding);",
      "            }",
      "            return var_result;›",
      "        var count := 1",
      "        var idx := 0",
      "        while {count <= size} do {",
      "            while { unused == inner.at(idx) } do {",
      "                idx := idx + 1",
      "            }",
      "            result.add (inner.at(idx))",
      "            count := count + 1",
      "            idx := idx + 1",
      "        }",
      "        result",
      "    }",
      "}" ];
  }
  if (typeof global !== "undefined")
    global.gracecode_stringMap = gracecode_stringMap;
  if (typeof window !== "undefined")
    window.gracecode_stringMap = gracecode_stringMap;
