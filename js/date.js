"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_date() {
  setModuleName("date");
  this.definitionModule = "date";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_date_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_date_outer0;
  setLineNumber(27);    // compilenode method
  var func1 = function(argcv) {    // method basic
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for basic"));
    setModuleName("date");
    var obj2 = Grace_allocObject(GraceTrait, "date.basic");
    obj2.definitionModule = "date";
    obj2.definitionLine = 27;
    obj2.outer = this;
    var reader_date_outer3 = function() {
      return this.outer;
    };
    obj2.methods["outer"] = reader_date_outer3;
    var obj_init_2 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj2;
      var func4 = function(argcv) {    // method year
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for year"));
        setModuleName("date");
        setLineNumber(31);    // compilenode call
           // start native code from line 31
        var result = GraceDone;
        return new GraceNum(this.data.value.getFullYear())
        var nat5 = result;
           // end native code insertion
        if (!Grace_isTrue(callmethod(var_Number, "match", [1], nat5)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method year does not have " + 
                    callmethod(var_Number, "asString", [0])._value + "."));
        return nat5;
      };
      func4.paramCounts = [0];
      obj2.methods["year"] = func4;
      func4.definitionLine = 29;
      func4.definitionModule = "date";
      var func6 = function(argcv) {    // method month
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for month"));
        setModuleName("date");
        setLineNumber(35);    // compilenode call
           // start native code from line 35
        var result = GraceDone;
        return new GraceNum(this.data.value.getMonth() + 1)
        var nat7 = result;
           // end native code insertion
        if (!Grace_isTrue(callmethod(var_Number, "match", [1], nat7)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method month does not have " + 
                    callmethod(var_Number, "asString", [0])._value + "."));
        return nat7;
      };
      func6.paramCounts = [0];
      obj2.methods["month"] = func6;
      func6.definitionLine = 33;
      func6.definitionModule = "date";
      var func8 = function(argcv) {    // method date
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for date"));
        setModuleName("date");
        setLineNumber(39);    // compilenode call
           // start native code from line 39
        var result = GraceDone;
        return new GraceNum(this.data.value.getDate())
        var nat9 = result;
           // end native code insertion
        if (!Grace_isTrue(callmethod(var_Number, "match", [1], nat9)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method date does not have " + 
                    callmethod(var_Number, "asString", [0])._value + "."));
        return nat9;
      };
      func8.paramCounts = [0];
      obj2.methods["date"] = func8;
      func8.definitionLine = 37;
      func8.definitionModule = "date";
      var func10 = function(argcv) {    // method day
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for day"));
        setModuleName("date");
        setLineNumber(43);    // compilenode call
           // start native code from line 43
        var result = GraceDone;
        return new GraceNum(this.data.value.getDay() + 1)
        var nat11 = result;
           // end native code insertion
        if (!Grace_isTrue(callmethod(var_Number, "match", [1], nat11)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method day does not have " + 
                    callmethod(var_Number, "asString", [0])._value + "."));
        return nat11;
      };
      func10.paramCounts = [0];
      obj2.methods["day"] = func10;
      func10.definitionLine = 41;
      func10.definitionModule = "date";
      var func12 = function(argcv) {    // method hour
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for hour"));
        setModuleName("date");
        setLineNumber(47);    // compilenode call
           // start native code from line 47
        var result = GraceDone;
        return new GraceNum(this.data.value.getHours())
        var nat13 = result;
           // end native code insertion
        if (!Grace_isTrue(callmethod(var_Number, "match", [1], nat13)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method hour does not have " + 
                    callmethod(var_Number, "asString", [0])._value + "."));
        return nat13;
      };
      func12.paramCounts = [0];
      obj2.methods["hour"] = func12;
      func12.definitionLine = 45;
      func12.definitionModule = "date";
      var func14 = function(argcv) {    // method minute
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for minute"));
        setModuleName("date");
        setLineNumber(51);    // compilenode call
           // start native code from line 51
        var result = GraceDone;
        return new GraceNum(this.data.value.getMinutes())
        var nat15 = result;
           // end native code insertion
        if (!Grace_isTrue(callmethod(var_Number, "match", [1], nat15)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method minute does not have " + 
                    callmethod(var_Number, "asString", [0])._value + "."));
        return nat15;
      };
      func14.paramCounts = [0];
      obj2.methods["minute"] = func14;
      func14.definitionLine = 49;
      func14.definitionModule = "date";
      var func16 = function(argcv) {    // method second
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for second"));
        setModuleName("date");
        setLineNumber(55);    // compilenode call
           // start native code from line 55
        var result = GraceDone;
        return new GraceNum(this.data.value.getSeconds())
        var nat17 = result;
           // end native code insertion
        if (!Grace_isTrue(callmethod(var_Number, "match", [1], nat17)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method second does not have " + 
                    callmethod(var_Number, "asString", [0])._value + "."));
        return nat17;
      };
      func16.paramCounts = [0];
      obj2.methods["second"] = func16;
      func16.definitionLine = 53;
      func16.definitionModule = "date";
      var func18 = function(argcv) {    // method millisecond
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for millisecond"));
        setModuleName("date");
        setLineNumber(59);    // compilenode call
           // start native code from line 59
        var result = GraceDone;
        return new GraceNum(this.data.value.getMilliseconds())
        var nat19 = result;
           // end native code insertion
        if (!Grace_isTrue(callmethod(var_Number, "match", [1], nat19)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method millisecond does not have " + 
                    callmethod(var_Number, "asString", [0])._value + "."));
        return nat19;
      };
      func18.paramCounts = [0];
      obj2.methods["millisecond"] = func18;
      func18.definitionLine = 57;
      func18.definitionModule = "date";
      var func20 = function(argcv) {    // method asString
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
        setModuleName("date");
        setLineNumber(62);    // compilenode call
           // start native code from line 62
        var result = GraceDone;
        return new GraceString(this.data.value.toString())
        var nat21 = result;
           // end native code insertion
        if (!Grace_isTrue(callmethod(var_String, "match", [1], nat21)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method asString does not have " + 
                    callmethod(var_String, "asString", [0])._value + "."));
        return nat21;
      };
      func20.paramCounts = [0];
      obj2.methods["asString"] = func20;
      func20.definitionLine = 61;
      func20.definitionModule = "date";
      var func22 = function(argcv) {    // method asDateString
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asDateString"));
        setModuleName("date");
        setLineNumber(65);    // compilenode call
           // start native code from line 65
        var result = GraceDone;
        return new GraceString(this.data.value.toDateString())
        var nat23 = result;
           // end native code insertion
        if (!Grace_isTrue(callmethod(var_String, "match", [1], nat23)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method asDateString does not have " + 
                    callmethod(var_String, "asString", [0])._value + "."));
        return nat23;
      };
      func22.paramCounts = [0];
      obj2.methods["asDateString"] = func22;
      func22.definitionLine = 64;
      func22.definitionModule = "date";
      var func24 = function(argcv) {    // method asTimeString
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asTimeString"));
        setModuleName("date");
        setLineNumber(68);    // compilenode call
           // start native code from line 68
        var result = GraceDone;
        return new GraceString(this.data.value.toTimeString())
        var nat25 = result;
           // end native code insertion
        if (!Grace_isTrue(callmethod(var_String, "match", [1], nat25)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method asTimeString does not have " + 
                    callmethod(var_String, "asString", [0])._value + "."));
        return nat25;
      };
      func24.paramCounts = [0];
      obj2.methods["asTimeString"] = func24;
      func24.definitionLine = 67;
      func24.definitionModule = "date";
      var func26 = function(argcv) {    // method asIsoString
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asIsoString"));
        setModuleName("date");
        setLineNumber(71);    // compilenode call
           // start native code from line 71
        var result = GraceDone;
        return new GraceString(this.data.value.toISOString())
        var nat27 = result;
           // end native code insertion
        if (!Grace_isTrue(callmethod(var_String, "match", [1], nat27)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method asIsoString does not have " + 
                    callmethod(var_String, "asString", [0])._value + "."));
        return nat27;
      };
      func26.paramCounts = [0];
      obj2.methods["asIsoString"] = func26;
      func26.definitionLine = 70;
      func26.definitionModule = "date";
      var func28 = function(argcv) {    // method asMilliseconds
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asMilliseconds"));
        setModuleName("date");
        setLineNumber(75);    // compilenode call
           // start native code from line 75
        var result = GraceDone;
        return new GraceNum(this.data.value.getTime())
        var nat29 = result;
           // end native code insertion
        if (!Grace_isTrue(callmethod(var_Number, "match", [1], nat29)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method asMilliseconds does not have " + 
                    callmethod(var_Number, "asString", [0])._value + "."));
        return nat29;
      };
      func28.paramCounts = [0];
      obj2.methods["asMilliseconds"] = func28;
      func28.definitionLine = 73;
      func28.definitionModule = "date";
      var func30 = function(argcv) {    // method +(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_other = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for +(1)"));
        // Start argument checking
        curarg = 1;
        setLineNumber(77);    // compilenode identifier
        if (!Grace_isTrue(callmethod(var_Date, "match",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in + (arg list 1), which corresponds to parameter other, does not have " + 
                    callmethod(var_Date, "asString", [0])._value + "."));
        curarg++;
        // End argument checking
        setModuleName("date");
        setLineNumber(78);    // compilenode identifier
        var call31 = callmethodChecked(var_other, "asMilliseconds", [0]);
        onSelf = true;
        var call33 = callmethodChecked(this, "asMilliseconds", [0]);
        var opresult35 = callmethodChecked(call33, "+", [1], call31);
        var call36 = callmethodChecked(superDepth, "outer", [0]);
        onOuter = true;
        onSelf = true;
        var call37 = callmethodChecked(call36, "milliseconds", [1], opresult35);
        if (!Grace_isTrue(callmethod(var_Date, "match", [1], call37)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method +(1) does not have " + 
                    callmethod(var_Date, "asString", [0])._value + "."));
        return call37;
      };
      func30.paramTypes = [];
      func30.paramTypes.push([]);
      func30.paramCounts = [1];
      obj2.methods["+"] = func30;
      func30.definitionLine = 77;
      func30.definitionModule = "date";
      var func38 = function(argcv) {    // method -(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_other = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for -(1)"));
        // Start argument checking
        curarg = 1;
        setLineNumber(80);    // compilenode identifier
        if (!Grace_isTrue(callmethod(var_Date, "match",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in - (arg list 1), which corresponds to parameter other, does not have " + 
                    callmethod(var_Date, "asString", [0])._value + "."));
        curarg++;
        // End argument checking
        setModuleName("date");
        setLineNumber(81);    // compilenode identifier
        var call39 = callmethodChecked(var_other, "asMilliseconds", [0]);
        onSelf = true;
        var call41 = callmethodChecked(this, "asMilliseconds", [0]);
        var diff43 = callmethodChecked(call41, "-", [1], call39);
        var call44 = callmethodChecked(superDepth, "outer", [0]);
        onOuter = true;
        onSelf = true;
        var call45 = callmethodChecked(call44, "milliseconds", [1], diff43);
        if (!Grace_isTrue(callmethod(var_Date, "match", [1], call45)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method -(1) does not have " + 
                    callmethod(var_Date, "asString", [0])._value + "."));
        return call45;
      };
      func38.paramTypes = [];
      func38.paramTypes.push([]);
      func38.paramCounts = [1];
      obj2.methods["-"] = func38;
      func38.definitionLine = 80;
      func38.definitionModule = "date";
      var func46 = function(argcv) {    // method *(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_factor = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for *(1)"));
        // Start argument checking
        curarg = 1;
        setLineNumber(83);    // compilenode identifier
        if (!Grace_isTrue(callmethod(var_Number, "match",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in * (arg list 1), which corresponds to parameter factor, does not have " + 
                    callmethod(var_Number, "asString", [0])._value + "."));
        curarg++;
        // End argument checking
        setModuleName("date");
        setLineNumber(84);    // compilenode call
        onSelf = true;
        var call48 = callmethodChecked(this, "asMilliseconds", [0]);
        var prod50 = callmethodChecked(call48, "*", [1], var_factor);
        var call51 = callmethodChecked(superDepth, "outer", [0]);
        onOuter = true;
        onSelf = true;
        var call52 = callmethodChecked(call51, "milliseconds", [1], prod50);
        if (!Grace_isTrue(callmethod(var_Date, "match", [1], call52)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method *(1) does not have " + 
                    callmethod(var_Date, "asString", [0])._value + "."));
        return call52;
      };
      func46.paramTypes = [];
      func46.paramTypes.push([type_Number, "factor"]);
      func46.paramCounts = [1];
      obj2.methods["*"] = func46;
      func46.definitionLine = 83;
      func46.definitionModule = "date";
      var func53 = function(argcv) {    // method reverseTimesNumber(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_factor = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for reverseTimesNumber(1)"));
        // Start argument checking
        curarg = 1;
        setLineNumber(86);    // compilenode identifier
        if (!Grace_isTrue(callmethod(var_Number, "match",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in reverseTimesNumber (arg list 1), which corresponds to parameter factor, does not have " + 
                    callmethod(var_Number, "asString", [0])._value + "."));
        curarg++;
        // End argument checking
        setModuleName("date");
        setLineNumber(87);    // compilenode call
        onSelf = true;
        var call54 = callmethodChecked(this, "asMilliseconds", [0]);
        var prod57 = callmethodChecked(var_factor, "*", [1], call54);
        var call58 = callmethodChecked(superDepth, "outer", [0]);
        onOuter = true;
        onSelf = true;
        var call59 = callmethodChecked(call58, "milliseconds", [1], prod57);
        if (!Grace_isTrue(callmethod(var_Date, "match", [1], call59)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method reverseTimesNumber(1) does not have " + 
                    callmethod(var_Date, "asString", [0])._value + "."));
        return call59;
      };
      func53.paramTypes = [];
      func53.paramTypes.push([type_Number, "factor"]);
      func53.paramCounts = [1];
      obj2.methods["reverseTimesNumber"] = func53;
      func53.definitionLine = 86;
      func53.definitionModule = "date";
      var func60 = function(argcv) {    // method ==(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_other = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ==(1)"));
        // Start argument checking
        curarg = 1;
        setLineNumber(89);    // compilenode identifier
        if (!Grace_isTrue(callmethod(var_Date, "match",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in == (arg list 1), which corresponds to parameter other, does not have " + 
                    callmethod(var_Date, "asString", [0])._value + "."));
        curarg++;
        // End argument checking
        setModuleName("date");
        setLineNumber(90);    // compilenode identifier
        var call61 = callmethodChecked(var_other, "asMilliseconds", [0]);
        onSelf = true;
        var call63 = callmethodChecked(this, "asMilliseconds", [0]);
        var opresult65 = callmethodChecked(call63, "==", [1], call61);
        if (!Grace_isTrue(callmethod(var_Boolean, "match", [1], opresult65)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method ==(1) does not have " + 
                    callmethod(var_Boolean, "asString", [0])._value + "."));
        return opresult65;
      };
      func60.paramTypes = [];
      func60.paramTypes.push([]);
      func60.paramCounts = [1];
      obj2.methods["=="] = func60;
      func60.definitionLine = 89;
      func60.definitionModule = "date";
      superDepth = origSuperDepth;
    };
    obj_init_2.apply(obj2, []);
    return obj2;
  };
  func1.paramCounts = [0];
  this.methods["basic"] = func1;
  func1.definitionLine = 27;
  func1.definitionModule = "date";
    var func66 = function(argcv) {    // method basic()object
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      // Start argument processing
      curarg = 1;
      // End argument processing
      setModuleName("date");
      var returnTarget = invocationCount;
      invocationCount++;
      var obj67 = Grace_allocObject(GraceTrait, "basic");
      obj67.definitionModule = "date";
      obj67.definitionLine = 27;
      var inho67 = inheritingObject;
      while (inho67.superobj) inho67 = inho67.superobj;
      inho67.superobj = obj67;
      obj67.data = inheritingObject.data;
      if (inheritingObject.hasOwnProperty('_value'))
        obj67._value = inheritingObject._value;
      obj67.outer = this;
      var reader_date_outer68 = function() {
        return this.outer;
      };
      obj67.methods["outer"] = reader_date_outer68;
      var obj_init_67 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj67;
        var func69 = function(argcv) {    // method year
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for year"));
          setModuleName("date");
          setLineNumber(31);    // compilenode call
             // start native code from line 31
          var result = GraceDone;
          return new GraceNum(this.data.value.getFullYear())
          var nat70 = result;
             // end native code insertion
          if (!Grace_isTrue(callmethod(var_Number, "match", [1], nat70)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method year does not have " + 
                      callmethod(var_Number, "asString", [0])._value + "."));
          return nat70;
        };
        func69.paramCounts = [0];
        obj67.methods["year"] = func69;
        func69.definitionLine = 29;
        func69.definitionModule = "date";
        var func71 = function(argcv) {    // method month
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for month"));
          setModuleName("date");
          setLineNumber(35);    // compilenode call
             // start native code from line 35
          var result = GraceDone;
          return new GraceNum(this.data.value.getMonth() + 1)
          var nat72 = result;
             // end native code insertion
          if (!Grace_isTrue(callmethod(var_Number, "match", [1], nat72)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method month does not have " + 
                      callmethod(var_Number, "asString", [0])._value + "."));
          return nat72;
        };
        func71.paramCounts = [0];
        obj67.methods["month"] = func71;
        func71.definitionLine = 33;
        func71.definitionModule = "date";
        var func73 = function(argcv) {    // method date
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for date"));
          setModuleName("date");
          setLineNumber(39);    // compilenode call
             // start native code from line 39
          var result = GraceDone;
          return new GraceNum(this.data.value.getDate())
          var nat74 = result;
             // end native code insertion
          if (!Grace_isTrue(callmethod(var_Number, "match", [1], nat74)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method date does not have " + 
                      callmethod(var_Number, "asString", [0])._value + "."));
          return nat74;
        };
        func73.paramCounts = [0];
        obj67.methods["date"] = func73;
        func73.definitionLine = 37;
        func73.definitionModule = "date";
        var func75 = function(argcv) {    // method day
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for day"));
          setModuleName("date");
          setLineNumber(43);    // compilenode call
             // start native code from line 43
          var result = GraceDone;
          return new GraceNum(this.data.value.getDay() + 1)
          var nat76 = result;
             // end native code insertion
          if (!Grace_isTrue(callmethod(var_Number, "match", [1], nat76)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method day does not have " + 
                      callmethod(var_Number, "asString", [0])._value + "."));
          return nat76;
        };
        func75.paramCounts = [0];
        obj67.methods["day"] = func75;
        func75.definitionLine = 41;
        func75.definitionModule = "date";
        var func77 = function(argcv) {    // method hour
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for hour"));
          setModuleName("date");
          setLineNumber(47);    // compilenode call
             // start native code from line 47
          var result = GraceDone;
          return new GraceNum(this.data.value.getHours())
          var nat78 = result;
             // end native code insertion
          if (!Grace_isTrue(callmethod(var_Number, "match", [1], nat78)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method hour does not have " + 
                      callmethod(var_Number, "asString", [0])._value + "."));
          return nat78;
        };
        func77.paramCounts = [0];
        obj67.methods["hour"] = func77;
        func77.definitionLine = 45;
        func77.definitionModule = "date";
        var func79 = function(argcv) {    // method minute
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for minute"));
          setModuleName("date");
          setLineNumber(51);    // compilenode call
             // start native code from line 51
          var result = GraceDone;
          return new GraceNum(this.data.value.getMinutes())
          var nat80 = result;
             // end native code insertion
          if (!Grace_isTrue(callmethod(var_Number, "match", [1], nat80)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method minute does not have " + 
                      callmethod(var_Number, "asString", [0])._value + "."));
          return nat80;
        };
        func79.paramCounts = [0];
        obj67.methods["minute"] = func79;
        func79.definitionLine = 49;
        func79.definitionModule = "date";
        var func81 = function(argcv) {    // method second
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for second"));
          setModuleName("date");
          setLineNumber(55);    // compilenode call
             // start native code from line 55
          var result = GraceDone;
          return new GraceNum(this.data.value.getSeconds())
          var nat82 = result;
             // end native code insertion
          if (!Grace_isTrue(callmethod(var_Number, "match", [1], nat82)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method second does not have " + 
                      callmethod(var_Number, "asString", [0])._value + "."));
          return nat82;
        };
        func81.paramCounts = [0];
        obj67.methods["second"] = func81;
        func81.definitionLine = 53;
        func81.definitionModule = "date";
        var func83 = function(argcv) {    // method millisecond
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for millisecond"));
          setModuleName("date");
          setLineNumber(59);    // compilenode call
             // start native code from line 59
          var result = GraceDone;
          return new GraceNum(this.data.value.getMilliseconds())
          var nat84 = result;
             // end native code insertion
          if (!Grace_isTrue(callmethod(var_Number, "match", [1], nat84)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method millisecond does not have " + 
                      callmethod(var_Number, "asString", [0])._value + "."));
          return nat84;
        };
        func83.paramCounts = [0];
        obj67.methods["millisecond"] = func83;
        func83.definitionLine = 57;
        func83.definitionModule = "date";
        var func85 = function(argcv) {    // method asString
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
          setModuleName("date");
          setLineNumber(62);    // compilenode call
             // start native code from line 62
          var result = GraceDone;
          return new GraceString(this.data.value.toString())
          var nat86 = result;
             // end native code insertion
          if (!Grace_isTrue(callmethod(var_String, "match", [1], nat86)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method asString does not have " + 
                      callmethod(var_String, "asString", [0])._value + "."));
          return nat86;
        };
        func85.paramCounts = [0];
        obj67.methods["asString"] = func85;
        func85.definitionLine = 61;
        func85.definitionModule = "date";
        var func87 = function(argcv) {    // method asDateString
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asDateString"));
          setModuleName("date");
          setLineNumber(65);    // compilenode call
             // start native code from line 65
          var result = GraceDone;
          return new GraceString(this.data.value.toDateString())
          var nat88 = result;
             // end native code insertion
          if (!Grace_isTrue(callmethod(var_String, "match", [1], nat88)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method asDateString does not have " + 
                      callmethod(var_String, "asString", [0])._value + "."));
          return nat88;
        };
        func87.paramCounts = [0];
        obj67.methods["asDateString"] = func87;
        func87.definitionLine = 64;
        func87.definitionModule = "date";
        var func89 = function(argcv) {    // method asTimeString
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asTimeString"));
          setModuleName("date");
          setLineNumber(68);    // compilenode call
             // start native code from line 68
          var result = GraceDone;
          return new GraceString(this.data.value.toTimeString())
          var nat90 = result;
             // end native code insertion
          if (!Grace_isTrue(callmethod(var_String, "match", [1], nat90)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method asTimeString does not have " + 
                      callmethod(var_String, "asString", [0])._value + "."));
          return nat90;
        };
        func89.paramCounts = [0];
        obj67.methods["asTimeString"] = func89;
        func89.definitionLine = 67;
        func89.definitionModule = "date";
        var func91 = function(argcv) {    // method asIsoString
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asIsoString"));
          setModuleName("date");
          setLineNumber(71);    // compilenode call
             // start native code from line 71
          var result = GraceDone;
          return new GraceString(this.data.value.toISOString())
          var nat92 = result;
             // end native code insertion
          if (!Grace_isTrue(callmethod(var_String, "match", [1], nat92)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method asIsoString does not have " + 
                      callmethod(var_String, "asString", [0])._value + "."));
          return nat92;
        };
        func91.paramCounts = [0];
        obj67.methods["asIsoString"] = func91;
        func91.definitionLine = 70;
        func91.definitionModule = "date";
        var func93 = function(argcv) {    // method asMilliseconds
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asMilliseconds"));
          setModuleName("date");
          setLineNumber(75);    // compilenode call
             // start native code from line 75
          var result = GraceDone;
          return new GraceNum(this.data.value.getTime())
          var nat94 = result;
             // end native code insertion
          if (!Grace_isTrue(callmethod(var_Number, "match", [1], nat94)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method asMilliseconds does not have " + 
                      callmethod(var_Number, "asString", [0])._value + "."));
          return nat94;
        };
        func93.paramCounts = [0];
        obj67.methods["asMilliseconds"] = func93;
        func93.definitionLine = 73;
        func93.definitionModule = "date";
        var func95 = function(argcv) {    // method +(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_other = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for +(1)"));
          // Start argument checking
          curarg = 1;
          setLineNumber(77);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Date, "match",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in + (arg list 1), which corresponds to parameter other, does not have " + 
                      callmethod(var_Date, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("date");
          setLineNumber(78);    // compilenode identifier
          var call96 = callmethodChecked(var_other, "asMilliseconds", [0]);
          onSelf = true;
          var call98 = callmethodChecked(this, "asMilliseconds", [0]);
          var opresult100 = callmethodChecked(call98, "+", [1], call96);
          var call101 = callmethodChecked(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call102 = callmethodChecked(call101, "milliseconds", [1], opresult100);
          if (!Grace_isTrue(callmethod(var_Date, "match", [1], call102)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method +(1) does not have " + 
                      callmethod(var_Date, "asString", [0])._value + "."));
          return call102;
        };
        func95.paramTypes = [];
        func95.paramTypes.push([]);
        func95.paramCounts = [1];
        obj67.methods["+"] = func95;
        func95.definitionLine = 77;
        func95.definitionModule = "date";
        var func103 = function(argcv) {    // method -(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_other = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for -(1)"));
          // Start argument checking
          curarg = 1;
          setLineNumber(80);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Date, "match",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in - (arg list 1), which corresponds to parameter other, does not have " + 
                      callmethod(var_Date, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("date");
          setLineNumber(81);    // compilenode identifier
          var call104 = callmethodChecked(var_other, "asMilliseconds", [0]);
          onSelf = true;
          var call106 = callmethodChecked(this, "asMilliseconds", [0]);
          var diff108 = callmethodChecked(call106, "-", [1], call104);
          var call109 = callmethodChecked(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call110 = callmethodChecked(call109, "milliseconds", [1], diff108);
          if (!Grace_isTrue(callmethod(var_Date, "match", [1], call110)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method -(1) does not have " + 
                      callmethod(var_Date, "asString", [0])._value + "."));
          return call110;
        };
        func103.paramTypes = [];
        func103.paramTypes.push([]);
        func103.paramCounts = [1];
        obj67.methods["-"] = func103;
        func103.definitionLine = 80;
        func103.definitionModule = "date";
        var func111 = function(argcv) {    // method *(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_factor = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for *(1)"));
          // Start argument checking
          curarg = 1;
          setLineNumber(83);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Number, "match",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in * (arg list 1), which corresponds to parameter factor, does not have " + 
                      callmethod(var_Number, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("date");
          setLineNumber(84);    // compilenode call
          onSelf = true;
          var call113 = callmethodChecked(this, "asMilliseconds", [0]);
          var prod115 = callmethodChecked(call113, "*", [1], var_factor);
          var call116 = callmethodChecked(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call117 = callmethodChecked(call116, "milliseconds", [1], prod115);
          if (!Grace_isTrue(callmethod(var_Date, "match", [1], call117)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method *(1) does not have " + 
                      callmethod(var_Date, "asString", [0])._value + "."));
          return call117;
        };
        func111.paramTypes = [];
        func111.paramTypes.push([type_Number, "factor"]);
        func111.paramCounts = [1];
        obj67.methods["*"] = func111;
        func111.definitionLine = 83;
        func111.definitionModule = "date";
        var func118 = function(argcv) {    // method reverseTimesNumber(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_factor = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for reverseTimesNumber(1)"));
          // Start argument checking
          curarg = 1;
          setLineNumber(86);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Number, "match",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in reverseTimesNumber (arg list 1), which corresponds to parameter factor, does not have " + 
                      callmethod(var_Number, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("date");
          setLineNumber(87);    // compilenode call
          onSelf = true;
          var call119 = callmethodChecked(this, "asMilliseconds", [0]);
          var prod122 = callmethodChecked(var_factor, "*", [1], call119);
          var call123 = callmethodChecked(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call124 = callmethodChecked(call123, "milliseconds", [1], prod122);
          if (!Grace_isTrue(callmethod(var_Date, "match", [1], call124)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method reverseTimesNumber(1) does not have " + 
                      callmethod(var_Date, "asString", [0])._value + "."));
          return call124;
        };
        func118.paramTypes = [];
        func118.paramTypes.push([type_Number, "factor"]);
        func118.paramCounts = [1];
        obj67.methods["reverseTimesNumber"] = func118;
        func118.definitionLine = 86;
        func118.definitionModule = "date";
        var func125 = function(argcv) {    // method ==(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_other = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ==(1)"));
          // Start argument checking
          curarg = 1;
          setLineNumber(89);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Date, "match",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in == (arg list 1), which corresponds to parameter other, does not have " + 
                      callmethod(var_Date, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("date");
          setLineNumber(90);    // compilenode identifier
          var call126 = callmethodChecked(var_other, "asMilliseconds", [0]);
          onSelf = true;
          var call128 = callmethodChecked(this, "asMilliseconds", [0]);
          var opresult130 = callmethodChecked(call128, "==", [1], call126);
          if (!Grace_isTrue(callmethod(var_Boolean, "match", [1], opresult130)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method ==(1) does not have " + 
                      callmethod(var_Boolean, "asString", [0])._value + "."));
          return opresult130;
        };
        func125.paramTypes = [];
        func125.paramTypes.push([]);
        func125.paramCounts = [1];
        obj67.methods["=="] = func125;
        func125.definitionLine = 89;
        func125.definitionModule = "date";
        superDepth = origSuperDepth;
      };
      obj_init_67.apply(inheritingObject, []);
      return obj67;
      };
      this.methods["basic()object"] = func66;
    setLineNumber(94);    // compilenode method
    var func131 = function(argcv) {    // method milliseconds(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_n = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for milliseconds(1)"));
      setModuleName("date");
      var obj132 = Grace_allocObject(null, "date.milliseconds");
      obj132.definitionModule = "date";
      obj132.definitionLine = 94;
      obj132.outer = this;
      var reader_date_outer133 = function() {
        return this.outer;
      };
      obj132.methods["outer"] = reader_date_outer133;
      var obj_init_132 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj132;
        setLineNumber(96);    // compilenode call
        var call134 = callmethodChecked(superDepth, "outer", [0]);
        onOuter = true;
        onSelf = true;
        var call135 = callmethodChecked(call134, "basic()object", [0, 1], this);
        obj132.superobj = call135;
        if (call135.data) obj132.data = call135.data;
        if (call135.hasOwnProperty('_value'))
            obj132._value = call135._value;
        setLineNumber(97);    // compilenode call
           // start native code from line 97
        var result = GraceDone;
        result = new Date(var_n._value)
        var nat136 = result;
           // end native code insertion
        obj132.data["value"] = nat136;
        var reader_date_value137 = function() {
          return this.data["value"];
        };
        reader_date_value137.def = true;
        reader_date_value137.confidential = true;
        obj132.methods["value"] = reader_date_value137;
        superDepth = origSuperDepth;
      };
      obj_init_132.apply(obj132, []);
      setLineNumber(94);    // return value
      if (!Grace_isTrue(callmethod(var_Date, "match", [1], obj132)))
          throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("result of method milliseconds(1) does not have " + 
                  callmethod(var_Date, "asString", [0])._value + "."));
      return obj132;
    };
    func131.paramCounts = [1];
    this.methods["milliseconds"] = func131;
    func131.definitionLine = 94;
    func131.definitionModule = "date";
      var func138 = function(argcv) {    // method milliseconds(1     )()object
        var curarg = 1;
        var var_n = arguments[curarg];
        curarg++;
        var inheritingObject = arguments[curarg++];
        // Start argument processing
        curarg = 1;
        curarg++;
        // End argument processing
        setModuleName("date");
        var returnTarget = invocationCount;
        invocationCount++;
        var obj139 = Grace_allocObject(null, "milliseconds");
        obj139.definitionModule = "date";
        obj139.definitionLine = 94;
        var inho139 = inheritingObject;
        while (inho139.superobj) inho139 = inho139.superobj;
        inho139.superobj = obj139;
        obj139.data = inheritingObject.data;
        if (inheritingObject.hasOwnProperty('_value'))
          obj139._value = inheritingObject._value;
        obj139.outer = this;
        var reader_date_outer140 = function() {
          return this.outer;
        };
        obj139.methods["outer"] = reader_date_outer140;
        var obj_init_139 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj139;
          setLineNumber(96);    // compilenode call
          var call141 = callmethodChecked(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call142 = callmethodChecked(call141, "basic()object", [0, 1], this);
          obj139.superobj = call142;
          if (call142.data) obj139.data = call142.data;
          if (call142.hasOwnProperty('_value'))
              obj139._value = call142._value;
          setLineNumber(97);    // compilenode call
             // start native code from line 97
          var result = GraceDone;
          result = new Date(var_n._value)
          var nat143 = result;
             // end native code insertion
          obj139.data["value"] = nat143;
          var reader_date_value144 = function() {
            return this.data["value"];
          };
          reader_date_value144.def = true;
          reader_date_value144.confidential = true;
          obj139.methods["value"] = reader_date_value144;
          superDepth = origSuperDepth;
        };
        obj_init_139.apply(inheritingObject, []);
        return obj139;
        };
        this.methods["milliseconds()object"] = func138;
      setLineNumber(100);    // compilenode method
      var func145 = function(argcv) {    // method seconds(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_n = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for seconds(1)"));
        setModuleName("date");
        setLineNumber(102);    // compilenode num
        var prod148 = callmethodChecked(new GraceNum(1000), "*", [1], var_n);
        onSelf = true;
        var call149 = callmethodChecked(this, "milliseconds", [1], prod148);
        if (!Grace_isTrue(callmethod(var_Date, "match", [1], call149)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method seconds(1) does not have " + 
                    callmethod(var_Date, "asString", [0])._value + "."));
        return call149;
      };
      func145.paramCounts = [1];
      this.methods["seconds"] = func145;
      func145.definitionLine = 100;
      func145.definitionModule = "date";
      setLineNumber(105);    // compilenode method
      var func150 = function(argcv) {    // method minutes(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_n = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for minutes(1)"));
        setModuleName("date");
        setLineNumber(106);    // compilenode num
        var prod153 = callmethodChecked(new GraceNum(60), "*", [1], var_n);
        onSelf = true;
        var call154 = callmethodChecked(this, "seconds", [1], prod153);
        if (!Grace_isTrue(callmethod(var_Date, "match", [1], call154)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method minutes(1) does not have " + 
                    callmethod(var_Date, "asString", [0])._value + "."));
        return call154;
      };
      func150.paramCounts = [1];
      this.methods["minutes"] = func150;
      func150.definitionLine = 105;
      func150.definitionModule = "date";
      setLineNumber(109);    // compilenode method
      var func155 = function(argcv) {    // method hours(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_n = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for hours(1)"));
        setModuleName("date");
        setLineNumber(110);    // compilenode num
        var prod158 = callmethodChecked(new GraceNum(60), "*", [1], var_n);
        onSelf = true;
        var call159 = callmethodChecked(this, "minutes", [1], prod158);
        if (!Grace_isTrue(callmethod(var_Date, "match", [1], call159)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method hours(1) does not have " + 
                    callmethod(var_Date, "asString", [0])._value + "."));
        return call159;
      };
      func155.paramCounts = [1];
      this.methods["hours"] = func155;
      func155.definitionLine = 109;
      func155.definitionModule = "date";
      setLineNumber(113);    // compilenode method
      var func160 = function(argcv) {    // method days(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_n = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for days(1)"));
        setModuleName("date");
        setLineNumber(114);    // compilenode num
        var prod163 = callmethodChecked(new GraceNum(24), "*", [1], var_n);
        onSelf = true;
        var call164 = callmethodChecked(this, "hours", [1], prod163);
        if (!Grace_isTrue(callmethod(var_Date, "match", [1], call164)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method days(1) does not have " + 
                    callmethod(var_Date, "asString", [0])._value + "."));
        return call164;
      };
      func160.paramCounts = [1];
      this.methods["days"] = func160;
      func160.definitionLine = 113;
      func160.definitionModule = "date";
      setLineNumber(117);    // compilenode method
      var func165 = function(argcv) {    // method weeks(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_n = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for weeks(1)"));
        setModuleName("date");
        setLineNumber(118);    // compilenode num
        var prod168 = callmethodChecked(new GraceNum(7), "*", [1], var_n);
        onSelf = true;
        var call169 = callmethodChecked(this, "days", [1], prod168);
        if (!Grace_isTrue(callmethod(var_Date, "match", [1], call169)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method weeks(1) does not have " + 
                    callmethod(var_Date, "asString", [0])._value + "."));
        return call169;
      };
      func165.paramCounts = [1];
      this.methods["weeks"] = func165;
      func165.definitionLine = 117;
      func165.definitionModule = "date";
      setLineNumber(121);    // compilenode method
      var func170 = function(argcv) {    // method timeZoneOffset
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for timeZoneOffset"));
        setModuleName("date");
        setLineNumber(123);    // compilenode call
           // start native code from line 123
        var result = GraceDone;
        return new GraceNum(new Date().getTimezoneOffset())
        var nat171 = result;
           // end native code insertion
        if (!Grace_isTrue(callmethod(var_Number, "match", [1], nat171)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method timeZoneOffset does not have " + 
                    callmethod(var_Number, "asString", [0])._value + "."));
        return nat171;
      };
      func170.paramCounts = [0];
      this.methods["timeZoneOffset"] = func170;
      func170.definitionLine = 121;
      func170.definitionModule = "date";
      setLineNumber(126);    // compilenode method
      var func172 = function(argcv) {    // method now
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for now"));
        setModuleName("date");
        var obj173 = Grace_allocObject(null, "date.now");
        obj173.definitionModule = "date";
        obj173.definitionLine = 126;
        obj173.outer = this;
        var reader_date_outer174 = function() {
          return this.outer;
        };
        obj173.methods["outer"] = reader_date_outer174;
        var obj_init_173 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj173;
          setLineNumber(127);    // compilenode call
          var call175 = callmethodChecked(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call176 = callmethodChecked(call175, "basic()object", [0, 1], this);
          obj173.superobj = call176;
          if (call176.data) obj173.data = call176.data;
          if (call176.hasOwnProperty('_value'))
              obj173._value = call176._value;
          setLineNumber(128);    // compilenode call
             // start native code from line 128
          var result = GraceDone;
          result = new Date()
          var nat177 = result;
             // end native code insertion
          obj173.data["value"] = nat177;
          var reader_date_value178 = function() {
            return this.data["value"];
          };
          reader_date_value178.def = true;
          reader_date_value178.confidential = true;
          obj173.methods["value"] = reader_date_value178;
          superDepth = origSuperDepth;
        };
        obj_init_173.apply(obj173, []);
        return obj173;
      };
      func172.paramCounts = [0];
      this.methods["now"] = func172;
      func172.definitionLine = 126;
      func172.definitionModule = "date";
        var func179 = function(argcv) {    // method now()object
          var curarg = 1;
          var inheritingObject = arguments[curarg++];
          // Start argument processing
          curarg = 1;
          // End argument processing
          setModuleName("date");
          var returnTarget = invocationCount;
          invocationCount++;
          var obj180 = Grace_allocObject(null, "now");
          obj180.definitionModule = "date";
          obj180.definitionLine = 126;
          var inho180 = inheritingObject;
          while (inho180.superobj) inho180 = inho180.superobj;
          inho180.superobj = obj180;
          obj180.data = inheritingObject.data;
          if (inheritingObject.hasOwnProperty('_value'))
            obj180._value = inheritingObject._value;
          obj180.outer = this;
          var reader_date_outer181 = function() {
            return this.outer;
          };
          obj180.methods["outer"] = reader_date_outer181;
          var obj_init_180 = function() {
            var origSuperDepth = superDepth;
            superDepth = obj180;
            setLineNumber(127);    // compilenode call
            var call182 = callmethodChecked(superDepth, "outer", [0]);
            onOuter = true;
            onSelf = true;
            var call183 = callmethodChecked(call182, "basic()object", [0, 1], this);
            obj180.superobj = call183;
            if (call183.data) obj180.data = call183.data;
            if (call183.hasOwnProperty('_value'))
                obj180._value = call183._value;
            setLineNumber(128);    // compilenode call
               // start native code from line 128
            var result = GraceDone;
            result = new Date()
            var nat184 = result;
               // end native code insertion
            obj180.data["value"] = nat184;
            var reader_date_value185 = function() {
              return this.data["value"];
            };
            reader_date_value185.def = true;
            reader_date_value185.confidential = true;
            obj180.methods["value"] = reader_date_value185;
            superDepth = origSuperDepth;
          };
          obj_init_180.apply(inheritingObject, []);
          return obj180;
          };
          this.methods["now()object"] = func179;
        setLineNumber(131);    // compilenode method
        var func186 = function(argcv) {    // method fromString(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_dateString = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for fromString(1)"));
          setModuleName("date");
          var obj187 = Grace_allocObject(null, "date.fromString");
          obj187.definitionModule = "date";
          obj187.definitionLine = 131;
          obj187.outer = this;
          var reader_date_outer188 = function() {
            return this.outer;
          };
          obj187.methods["outer"] = reader_date_outer188;
          var obj_init_187 = function() {
            var origSuperDepth = superDepth;
            superDepth = obj187;
            setLineNumber(132);    // compilenode call
            var call189 = callmethodChecked(superDepth, "outer", [0]);
            onOuter = true;
            onSelf = true;
            var call190 = callmethodChecked(call189, "basic()object", [0, 1], this);
            obj187.superobj = call190;
            if (call190.data) obj187.data = call190.data;
            if (call190.hasOwnProperty('_value'))
                obj187._value = call190._value;
            setLineNumber(133);    // compilenode call
               // start native code from line 133
            var result = GraceDone;
            result = new Date(var_dateString._value)
            var nat191 = result;
               // end native code insertion
            obj187.data["value"] = nat191;
            var reader_date_value192 = function() {
              return this.data["value"];
            };
            reader_date_value192.def = true;
            reader_date_value192.confidential = true;
            obj187.methods["value"] = reader_date_value192;
            superDepth = origSuperDepth;
          };
          obj_init_187.apply(obj187, []);
          return obj187;
        };
        func186.paramCounts = [1];
        this.methods["fromString"] = func186;
        func186.definitionLine = 131;
        func186.definitionModule = "date";
          var func193 = function(argcv) {    // method fromString(1     )()object
            var curarg = 1;
            var var_dateString = arguments[curarg];
            curarg++;
            var inheritingObject = arguments[curarg++];
            // Start argument processing
            curarg = 1;
            curarg++;
            // End argument processing
            setModuleName("date");
            var returnTarget = invocationCount;
            invocationCount++;
            var obj194 = Grace_allocObject(null, "fromString");
            obj194.definitionModule = "date";
            obj194.definitionLine = 131;
            var inho194 = inheritingObject;
            while (inho194.superobj) inho194 = inho194.superobj;
            inho194.superobj = obj194;
            obj194.data = inheritingObject.data;
            if (inheritingObject.hasOwnProperty('_value'))
              obj194._value = inheritingObject._value;
            obj194.outer = this;
            var reader_date_outer195 = function() {
              return this.outer;
            };
            obj194.methods["outer"] = reader_date_outer195;
            var obj_init_194 = function() {
              var origSuperDepth = superDepth;
              superDepth = obj194;
              setLineNumber(132);    // compilenode call
              var call196 = callmethodChecked(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call197 = callmethodChecked(call196, "basic()object", [0, 1], this);
              obj194.superobj = call197;
              if (call197.data) obj194.data = call197.data;
              if (call197.hasOwnProperty('_value'))
                  obj194._value = call197._value;
              setLineNumber(133);    // compilenode call
                 // start native code from line 133
              var result = GraceDone;
              result = new Date(var_dateString._value)
              var nat198 = result;
                 // end native code insertion
              obj194.data["value"] = nat198;
              var reader_date_value199 = function() {
                return this.data["value"];
              };
              reader_date_value199.def = true;
              reader_date_value199.confidential = true;
              obj194.methods["value"] = reader_date_value199;
              superDepth = origSuperDepth;
            };
            obj_init_194.apply(inheritingObject, []);
            return obj194;
            };
            this.methods["fromString()object"] = func193;
          setLineNumber(1);    // compilenode typedec
          // Type decl Date
          //   Type literal 
          var type201 = new GraceType("Date");
          type201.typeMethods.push("year");
          type201.typeMethods.push("month");
          type201.typeMethods.push("date");
          type201.typeMethods.push("day");
          type201.typeMethods.push("hour");
          type201.typeMethods.push("minute");
          type201.typeMethods.push("second");
          type201.typeMethods.push("asString");
          type201.typeMethods.push("asDateString");
          type201.typeMethods.push("asTimeString");
          type201.typeMethods.push("asIsoString");
          type201.typeMethods.push("==");
          var var_Date = type201;
          setLineNumber(132);    // compilenode method
          var func202 = function(argcv) {    // method Date
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Date"));
            setModuleName("date");
            // Date is a simple accessor - elide try ... catch
            setLineNumber(1);    // compilenode identifier
            return var_Date;
          };
          func202.paramCounts = [0];
          this.methods["Date"] = func202;
          func202.definitionLine = 132;
          func202.definitionModule = "date";
          return this;
        }
        gracecode_date.imports = [];
        if (typeof gctCache !== "undefined")
          gctCache['date'] = "classes:\nconfidential:\nfresh-methods:\n basic\n fromString\n milliseconds\n now\nfresh:basic:\n *\n +\n -\n ==\n asDateString\n asIsoString\n asMilliseconds\n asString\n asTimeString\n date\n day\n hour\n millisecond\n minute\n month\n reverseTimesNumber\n second\n year\nfresh:fromString:\n !=\n *\n +\n -\n ::\n ==\n asDateString\n asDebugString\n asIsoString\n asMilliseconds\n asString\n asTimeString\n basicAsString\n date\n day\n hour\n isMe\n millisecond\n minute\n month\n reverseTimesNumber\n second\n value\n year\n \u2260\nfresh:milliseconds:\n !=\n *\n +\n -\n ::\n ==\n asDateString\n asDebugString\n asIsoString\n asMilliseconds\n asString\n asTimeString\n basicAsString\n date\n day\n hour\n isMe\n millisecond\n minute\n month\n reverseTimesNumber\n second\n value\n year\n \u2260\nfresh:now:\n !=\n *\n +\n -\n ::\n ==\n asDateString\n asDebugString\n asIsoString\n asMilliseconds\n asString\n asTimeString\n basicAsString\n date\n day\n hour\n isMe\n millisecond\n minute\n month\n reverseTimesNumber\n second\n value\n year\n \u2260\nmethodtypes-of:Date:\n 1 ==(other : Date) -> Boolean\n 1 asDateString -> String\n 1 asIsoString -> String\n 1 asString -> String\n 1 asTimeString -> String\n 1 date -> Number\n 1 day -> Number\n 1 hour -> Number\n 1 minute -> Number\n 1 month -> Number\n 1 second -> Number\n 1 year -> Number\nmodules:\npath:\n date\npublic:\n Date\n basic\n days\n fromString\n hours\n milliseconds\n minutes\n now\n seconds\n timeZoneOffset\n weeks\ntypes:\n Date\n";
        if (typeof originalSourceLines !== "undefined") {
          originalSourceLines["date"] = [
            "type Date = type {",
            "    year -> Number",
            "        // the year, e.g., 2016",
            "    month -> Number",
            "        // the month, e.g, for 1 for January, 4 for April",
            "    date -> Number",
            "        // the day of the month, from 1 to 31",
            "    day -> Number",
            "        // the day of the week, e.g. 1 for Sunday, 1 for Monday",
            "    hour -> Number",
            "        // the hour of the day, e.g. 16 for 4 pm",
            "    minute -> Number",
            "        // the minute past the hour, e.g. 49 for 4:49 pm",
            "    second -> Number",
            "        // the second past the minute, e.g. 33 for 4:49:32 pm",
            "    asString -> String",
            "        // a sttring representation of this date and time",
            "    asDateString -> String",
            "        // a sttring representation of just date part ",
            "    asTimeString -> String",
            "        // a sttring representation of just the time part",
            "    asIsoString -> String",
            "        // a string representation that complies with ISO 8601",
            "    == (other:Date) -> Boolean",
            "}",
            "",
            "trait basic {",
            "    // all in local time",
            "    method year -> Number {",
            "        // the year, e.g., 2016",
            "        native \"js\" code \"return new GraceNum(this.data.value.getFullYear())\"",
            "    }",
            "    method month -> Number {",
            "        // the month, e.g, for 1 for January, 4 for April",
            "        native \"js\" code \"return new GraceNum(this.data.value.getMonth() + 1)\"",
            "    }",
            "    method date -> Number {",
            "        // the day of the month, from 1 to 31",
            "        native \"js\" code \"return new GraceNum(this.data.value.getDate())\"",
            "    }",
            "    method day -> Number {",
            "        // the day of the week, e.g. 1 for Sunday, 2 for Monday",
            "        native \"js\" code \"return new GraceNum(this.data.value.getDay() + 1)\"",
            "    }",
            "    method hour -> Number {",
            "        // the hour of the day, e.g. 16 for 4 pm",
            "        native \"js\" code \"return new GraceNum(this.data.value.getHours())\"",
            "    }",
            "    method minute -> Number {",
            "        // the minute past the hour, e.g. 49 for 4:49 pm",
            "        native \"js\" code \"return new GraceNum(this.data.value.getMinutes())\"",
            "    }",
            "    method second -> Number {",
            "        // the second past the minute, e.g. 33 for 4:49:33 pm",
            "        native \"js\" code \"return new GraceNum(this.data.value.getSeconds())\"",
            "    }",
            "    method millisecond -> Number {",
            "        // the second past the minute, e.g. 33 for 4:49:33 pm",
            "        native \"js\" code \"return new GraceNum(this.data.value.getMilliseconds())\"",
            "    }    ",
            "    method asString -> String {",
            "        native \"js\" code \"return new GraceString(this.data.value.toString())\"",
            "    }",
            "    method asDateString -> String {",
            "        native \"js\" code \"return new GraceString(this.data.value.toDateString())\"",
            "    }",
            "    method asTimeString -> String {",
            "        native \"js\" code \"return new GraceString(this.data.value.toTimeString())\"",
            "    }",
            "    method asIsoString -> String {",
            "        native \"js\" code \"return new GraceString(this.data.value.toISOString())\"",
            "    }",
            "    method asMilliseconds -> Number {",
            "        // date as milliseconds since the epoch",
            "        native \"js\" code \"return new GraceNum(this.data.value.getTime())\"",
            "    }",
            "    method + (other:Date) -> Date {",
            "        milliseconds(self.asMilliseconds + other.asMilliseconds)",
            "    }",
            "    method - (other:Date) -> Date {",
            "        milliseconds(self.asMilliseconds - other.asMilliseconds)",
            "    }    ",
            "    method * (factor:Number) -> Date {",
            "        milliseconds(self.asMilliseconds * factor)",
            "    }    ",
            "    method reverseTimesNumber (factor:Number) -> Date {",
            "        milliseconds(factor * self.asMilliseconds)",
            "    }",
            "    method == (other:Date) -> Boolean {",
            "        self.asMilliseconds == other.asMilliseconds",
            "    }",
            "}",
            "",
            "class milliseconds(n) -> Date {",
            "    // n milliseconds since the epoch ",
            "    inherit basic",
            "    def value = native \"js\" code \"result = new Date(var_n._value)\"",
            "}",
            "    ",
            "method seconds(n) -> Date {",
            "    // n seconds in milliseconds",
            "    milliseconds(1000 * n)",
            "}",
            "",
            "method minutes(n) -> Date {",
            "    seconds(60 * n)",
            "}",
            "",
            "method hours(n) -> Date {",
            "    minutes(60 * n)",
            "}",
            "",
            "method days(n) -> Date {",
            "    hours(24 * n)",
            "}",
            "",
            "method weeks(n) -> Date {",
            "    days(7 * n)",
            "}    ",
            "",
            "method timeZoneOffset -> Number {",
            "    // the offset between local time and UTC, in munites.",
            "    native \"js\" code \"return new GraceNum(new Date().getTimezoneOffset())\"",
            "}",
            "",
            "class now {",
            "    inherit basic",
            "    def value = native \"js\" code \"result = new Date()\"",
            "}",
            "",
            "class fromString(dateString) {",
            "    inherit basic",
            "    def value = native \"js\" code \"result = new Date(var_dateString._value)\"",
            "}",
            "",
            "    " ];
        }
        if (typeof global !== "undefined")
          global.gracecode_date = gracecode_date;
        if (typeof window !== "undefined")
          window.gracecode_date = gracecode_date;
